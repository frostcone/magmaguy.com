# Vectores relativos de Elite Script

## Para qué sirven

Los vectores relativos son vectores que son relativos a una ubicación específica pero dinámica.

Para explicar mejor qué son, consideremos el siguiente caso: quieres empujar a un jugador hacia el jefe como parte de un poder. Dado que tanto el jefe como el jugador se mueven durante el combate, no es posible confiar en un vector específico para lograr este efecto; necesitarás un vector que vaya del jugador hacia el jefe. (Imagina una línea corta con una flecha que va del jugador hacia el jefe).

Los vectores relativos se pueden usar de tantas maneras que sería imposible enumerarlos todos, pero entre ellos se encuentran: disparar entidades (como proyectiles) hacia un jugador o mafia específicos; generar refuerzos detrás de un jugador; disparar un bloque que cae en una dirección específica; crear rayos que se disparan hacia un jugador y mucho más.

## ¿Cómo funcionan los vectores?

Si no sabes o no recuerdas qué son los vectores o cómo funcionan, puedes pensar en los vectores como flechas que apuntan de un punto a otro.

Como tal, una de las propiedades de los vectores es su longitud. Esta longitud es importante; en el caso de las flechas, esta longitud es la velocidad a la que se dispara una flecha, en el caso de intentar obtener puntos de compensación desde una ubicación específica, es la distancia desde ese punto. Las cosas más lejanas tendrán mayores longitudes vectoriales y las cosas más cercanas tendrán longitudes más cortas.

Para algunas mecánicas, probablemente no querrás confiar en qué tan separados están dos puntos, ya que solo quieres obtener una dirección. Afortunadamente, puedes usar la normalización de vectores, que garantiza que se conserve la dirección pero cambia la longitud a 1.0. Luego puedes usar multiplicadores para modificar fácilmente el vector hasta que estés satisfecho con el desplazamiento que proporciona o la velocidad que da.

## Propiedades

| Valor |                                                 Detalles                                                  | Obligatorio? | Valor por defecto |
| --- |:--------------------------------------------------------------------------------------------------------:| :-: | :-: |
| `SourceTarget` | [Objetivo]($language$/elitemobs/elitescript_targets.md) en el punto desde el cual comenzará el vector | ✅ | `ninguno` |
| `DestinationTarget` |          [Objetivo]($language$/elitemobs/elitescript_targets.md) en el punto final del vector           | ✅ | `ninguno` |
| `normalize` |                                 Establece si el vector debe normalizarse                                  | ❌ | `false` |
| `multiplier` |                                      Multiplica la longitud del vector                                      | ❌ | `1.0` |
| `offset` |                          Permite insertar un desplazamiento fijo manual a este desplazamiento                           | ❌ | `ninguno` |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  ShootChicken:
    Eventos:
    - EliteMobDamagedByPlayerEvent
    Acciones:
    - action: SUMMON_ENTITY
      sValue: CHICKEN
      Target:
        targetType: SELF
      RelativeVector:
        SourceTarget:
          targetType: SELF
        DestinationTarget:
          targetType: DIRECT_TARGET
        normalize: true
        multiplier: 2.0
```

Dispara un pollo

***

```yaml
eliteScript:
  ShootArrow:
    Eventos:
    - EliteMobDamagedByPlayerEvent
    Acciones:
    - action: SUMMON_ENTITY
      sValue: ARROW
      Target:
        targetType: SELF
      RelativeVector:
        SourceTarget:
          targetType: SELF
        DestinationTarget:
          targetType: DIRECT_TARGET
        normalize: true
        multiplier: 2.0
```

Dispara una flecha

***

```yaml
eliteScript:
  SpawnReinforcement:
    Eventos:
    - EliteMobDamagedByPlayerEvent
    Acciones:
    - action: SUMMON_ENTITY
      sValue: ZOMBIE
      Target:
        targetType: SELF
      RelativeOffset:
        SourceTarget:
          targetType: SELF
        DestinationTarget:
          targetType: DIRECT_TARGET
        normalize: true
        multiplier: 2.0
```

Genera un zombi 2 bloques detrás del jugador, en relación con el jefe.

***

```yaml
eliteScript:
  Ejemplo:
    Eventos:
    - EliteMobDamagedByPlayerEvent
    Zona:
      Shape: SPHERE
      target:
        targetType: SELF_SPAWN
        offset: 0,0,0
        track: false
      filter: PLAYER
      radius: 6
    Acciones:
    - action: SPAWN_PARTICLE
      repeatEvery: 38
      times: 5
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 0.9
      particles:
      - particle: FLAME
        RelativeVector:
          SourceTarget:
            targetType: ACTION_TARGET
            track: true
          DestinationTarget:
            targetType: SELF_SPAWN
            offset: 0,-0.5,0
        speed: 0.05
```

Crea una esfera de llamas animada que se encoge hasta la ubicación de generación.

</div>

</details>

</div>

### Orden de operaciones

El orden de las operaciones al aplicar las propiedades es el siguiente:

Cálculo vectorial -> `normalizar` -> `multiplicador` -> `desplazamiento`

