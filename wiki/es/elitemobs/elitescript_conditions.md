# Condiciones de Elite Script

Las condiciones permiten a los scripters hacer que los scripts y / o acciones **no** se ejecuten en función de condiciones específicas.

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
    - EventoDañoEliteJugador
    Condiciones:
      estáVivo: true
      Destino:
        tipoDestino: AUTO
    Acciones:
    - acción: COLOCAR_BLOQUE
      Destino:
        tipoDestino: DESTINO_DIRECTO
      duración: 20
      material: TIERRA
      desplazamiento: 0,3,0
      Condiciones:
        localizaciónEsAire: true
        Destino:
          tipoDestino: DESTINO_ACCIÓN
    Cooldowns:
      local: 60
      global: 20
```

En este ejemplo, el script `Ejemplo` solo se ejecutará si la elite aún está viva y solo colocará un bloque de tierra 3 bloques por encima de la ubicación de la elite si ese bloque es un bloque de aire. Las acciones individuales pueden tener condiciones individuales.

</div>

</details>

</div>

## Destino

Las condiciones utilizan el sistema de [Destinos]($language$/elitemobs/objetivos_elitescript.md) para dirigirse a qué entidad o ubicación está sujeta a las condiciones. Esto significa que puedes asociar condiciones al jefe o a los jugadores o a cualquier otra cosa que puedas dirigir.

---

## Tipo de condición

| Clave | Detalles | Valores |
| --- | :-: | :-: |
| `tipoCondición` | Establece el tipo de condición | `BLOQUEO` / `FILTRADO` |

Hay dos tipos de condición: `BLOQUEO` y `FILTRADO`. Las condiciones de `BLOQUEO` hacen que los scripts o acciones dejen de ejecutarse. Las condiciones de `FILTRADO` hacen que las acciones omitan los destinos que no cumplen con la condición. Esto significa que, si solo quieres dirigirte a los bloques que no son aire, querrás una condición de `FILTRADO`, pero si quieres detener una acción si un jugador está muerto, querrás una condición de `BLOQUEO`.

**Las condiciones fuera de las acciones son siempre de `BLOQUEO`**. Las condiciones dentro de las acciones pueden ser de `BLOQUEO` o `FILTRADO`.

_**Nota: Si el objetivo es `AUTO` (el jefe) y la verificación de la condición es `estáVivo`, ¡la verificación siempre es de `BLOQUEO`!**_ Esto puede colocarse dentro de una condición de `FILTRADO` y aún hará que esta parte específica se comporte como `BLOQUEO`.

Las condiciones dentro de las acciones están configuradas como `FILTRADO` por defecto.

---

## Condiciones basadas en la ubicación

### localizaciónEsAire

Establece la condición para ser si la ubicación del objetivo es aire.

| Clave | Detalles |       Valores        |
| --- | :-: |:-------------------:|
| `localizaciónEsAire` | Establece para verificar si la ubicación es un bloque de aire (o lo contrario). | [Booleano](#booleano) |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Condiciones:
      localizaciónEsAire: true
      Destino:
        tipoDestino: AUTO
        desplazamiento: "0,3,0"
```

Verifica si la ubicación 2 bloques por encima de donde está parado el jefe es aire.

</div>

</details>

</div>

---

### estáEnSuelo

Verifica si la ubicación está en el suelo. Esto significa que el bloque en la ubicación no es sólido, pero el bloque debajo de él es sólido.

| Clave | Detalles | Valores |
| --- | :-: | :-: |
| `estáEnSuelo` | Establece para verificar si la ubicación es una ubicación de suelo (o lo contrario). | [Booleano](#booleano) |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Condiciones:
      estáEnSuelo: true
      Destino:
        tipoDestino: AUTO
```

</div>

</details>

</div>

---

### estáParadoEnMaterial

Verifica si la ubicación debajo del objetivo es un tipo de material coincidente.

| Clave |                     Detalles                     |        Valores         |
| --- |:-----------------------------------------------:|:---------------------:|
| `estáParadoEnMaterial` | Establece qué tipo de material debe verificarse. | [Material](#material) |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Condiciones:
      estáParadoEnMaterial: MADERA_ABEDUL
      Destino:
        tipoDestino: AUTO
```

Solo se ejecutará si el jefe está parado en MADERA_ABEDUL.

</div>

</details>

</div>

## Condiciones basadas en entidades

### estáVivo

Establece la condición para ser si la entidad objetivo de la condición está viva.

| Clave | Detalles | Valores |
| --- | :-: | :-: |
| `estáVivo` | Establece para verificar si la entidad está viva (o muerta). | [Booleano](#booleano) |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Condiciones:
      estáVivo: false
      Destino:
        tipoDestino: AUTO
```

Solo se ejecutará si el jefe está muerto.

</div>

</details>

</div>

---

### tieneEtiquetas

Verifica si la entidad objetivo tiene etiquetas específicas. Los scripters pueden asignar y desasignar cualquier etiqueta a través de acciones y usarlas como condiciones para un comportamiento posterior. Las etiquetas son simplemente cadenas (palabras) que puedes asignar a un jefe.

| Clave | Detalles |           Valores            |
| --- | :-: |:---------------------------:|
| `tieneEtiquetas` | Establece para verificar si la entidad tiene una lista de etiquetas. | [Lista de cadenas](#lista_de_cadenas) |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Condiciones:
      tieneEtiquetas:
      - esGenial
      - tieneUnaBuenaBarba
      Destino:
        tipoDestino: AUTO
```

Solo se ejecutará si el jefe tiene las etiquetas "esGenial" y "tieneUnaBuenaBarba".

</div>

</details>

</div>


---

### noTieneEtiquetas

Igual que `tieneEtiquetas`, pero verifica si el jefe no tiene estos valores.

| Clave | Detalles | Valores |
| --- | :-: | :-: |
| `noTieneEtiquetas` | Establece para verificar si la entidad no tiene una lista de etiquetas. | [Lista de cadenas](#lista_de_cadenas) |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Condiciones:
      noTieneEtiquetas:
      - esApestoso
      - esSus
      Destino:
        tipoDestino: AUTO
```

Solo se ejecutará si el jefe no tiene las etiquetas "esApestoso" y "esSus".

</div>

</details>

</div>

## Otras condiciones

### porcentajeAzar

Da a la condición una posibilidad aleatoria de ser válida.

| Clave | Detalles | Valores |
| --- | :-: | :-: |
| `porcentajeAzar` | Posibilidad de que la condición sea válida. | Número entre 0.0 y 1.0 |

Ten en cuenta que esta condición es especial ya que no requiere un objetivo.