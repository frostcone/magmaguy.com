# Vectores Relativos del Guion Élite

## Para qué se utilizan

Los vectores relativos son vectores que son relativos a una ubicación específica pero dinámica.

Para explicar mejor qué son estos, consideremos el siguiente caso: quieres empujar a un jugador hacia el jefe como parte de un poder. Dado que tanto el jefe como el jugador se mueven durante el combate, no es posible confiar en un vector específico para lograr este efecto: necesitarás un vector que vaya desde el jugador hacia el jefe. (Imagina una línea corta con una flecha que va desde el jugador hacia el jefe.)

Los vectores relativos pueden usarse de tantas maneras que sería imposible listarlas todas, pero entre ellas se encuentran: disparar entidades (como proyectiles) hacia un jugador o mob específico; aparecer refuerzos detrás de un jugador; disparar un bloque que cae en una dirección específica; crear rayos que se disparan hacia un jugador, y muchas más.

## ¿Cómo funcionan los vectores?

Si no sabes o no recuerdas qué son los vectores o cómo funcionan, puedes pensar en los vectores como flechas que apuntan de un punto a otro punto.

Como tal, una de las propiedades de los vectores es su longitud. Esta longitud es importante; en el caso de las flechas, esta longitud es la velocidad a la que se dispara una flecha, en el caso de intentar obtener puntos de desplazamiento desde una ubicación específica es la distancia desde ese punto. Las cosas más alejadas tendrán longitudes de vector mayores, y las cosas más cercanas tendrán longitudes más cortas.

Para algunas mecánicas, probablemente no querrás depender de cuánto de separados están dos puntos, ya que solo quieres obtener una dirección. Afortunadamente, puedes utilizar la normalización de vectores, lo que garantiza que la dirección se preserve pero cambia la longitud a ser 1.0. Luego puedes usar multiplicadores para modificar fácilmente el vector hasta que estés satisfecho con el desplazamiento que proporciona o la velocidad que ofrece.

## Propiedades

| Valor |                                                 Detalles                                                  | ¿Obligatorio? | Valor por defecto |
| --- |:--------------------------------------------------------------------------------------------------------:| :-: | :-: |
| `SourceTarget` | [Objetivo]($language$/elitemobs/elitescript_targets.md) en el punto desde el que comenzará el vector | ✅ | `ninguno` |
| `DestinationTarget` |          [Objetivo]($language$/elitemobs/elitescript_targets.md) en el punto final para el vector           | ✅ | `ninguno` |
| `normalize` |                                 Establece si el vector debe ser normalizado                                  | ❌ | `falso` |
| `multiplier` |                                      Multiplica la longitud del vector                                      | ❌ | `1.0` |
| `offset` |                          Permite insertar un desplazamiento fijo manual a este desplazamiento                           | ❌ | `ninguno` |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  DispararPollo:
    Eventos:
    - EventoDanadoPorJugadorEliteMob
    Acciones:
    - accion: SUMMON_ENTITY
      sValue: POLLO
      Objetivo:
        tipoObjetivo: SELF
      VectorRelativo:
        ObjetivoFuente:
          tipoObjetivo: SELF
        ObjetivoDestino:
          tipoObjetivo: OBJETIVO_DIRECTO
        normalizar: true
        multiplicador: 2.0
```

Dispara un pollo

***

```yaml
eliteScript:
  DispararFlecha:
    Eventos:
    - EventoDanadoPorJugadorEliteMob
    Acciones:
    - accion: SUMMON_ENTITY
      sValue: FLECHA
      Objetivo:
        tipoObjetivo: SELF
      VectorRelativo:
        ObjetivoFuente:
          tipoObjetivo: SELF
        ObjetivoDestino:
          tipoObjetivo: OBJETIVO_DIRECTO
        normalizar: true
        multiplicador: 2.0
```

Dispara una flecha

***

```yaml
eliteScript:
  AparecerRefuerzo:
    Eventos:
    - EventoDanadoPorJugadorEliteMob
    Acciones:
    - accion: SUMMON_ENTITY
      sValue: ZOMBI
      Objetivo:
        tipoObjetivo: SELF
      DesplazamientoRelativo:
        ObjetivoFuente:
          tipoObjetivo: SELF
        ObjetivoDestino:
          tipoObjetivo: OBJETIVO_DIRECTO
        normalizar: true
        multiplicador: 2.0
```

Aparece un zombi 2 bloques detrás del jugador, relativo al jefe.

***

```yaml
eliteScript:
  Ejemplo:
    Eventos:
    - EventoDanadoPorJugadorEliteMob
    Zona:
      Forma: ESFERA
      objetivo:
        tipoObjetivo: AUTO_SPAWN
        desplazamiento: 0,0,0
        rastrear: false
      filtro: JUGADOR
      radio: 6
    Acciones:
    - accion: SPAWN_PARTICULA
      repetirCada: 38
      veces: 5
      Objetivo:
        tipoObjetivo: ZONA_COMPLETA
        rastrear: false
        cobertura: 0.9
      particulas:
      - particula: LLAMA
        VectorRelativo:
          ObjetivoFuente:
            tipoObjetivo: OBJETIVO_ACCION
            rastrear: true
          ObjetivoDestino:
            tipoObjetivo: AUTO_SPAWN
            desplazamiento: 0,-0.5,0
        velocidad: 0.05
```

Crea una esfera de llama animada que se reduce a la ubicación de aparición.

</div>

</details>

</div>

### Orden de las operaciones

El orden de las operaciones al aplicar las propiedades es el siguiente:

Cálculo del vector -> `normalizar` -> `multiplicador` -> `desplazamiento`