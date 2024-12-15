[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Condiciones de Elite Script

Las condiciones permiten a los creadores de scripts hacer que los scripts y/o las acciones **no** se ejecuten en función de condiciones específicas.

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Conditions:
      isAlive: true
      Target:
        targetType: SELF
    Actions:
    - action: PLACE_BLOCK
      Target:
        targetType: DIRECT_TARGET
      duration: 20
      material: DIRT
      offset: 0,3,0
      Conditions:
        locationIsAir: true
        Target:
          targetType: ACTION_TARGET
    Cooldowns:
      local: 60
      global: 20
```

En este ejemplo, el script `Ejemplo` solo se ejecutará si la élite aún está viva y solo colocará un bloque de tierra 3 bloques por encima de la ubicación de la élite si ese bloque es un bloque de aire. Las acciones individuales pueden tener condiciones individuales.

</div>

</details>

</div>

## Objetivo

Las condiciones utilizan el sistema [Objetivos]($language$/elitemobs/elitescript_targets.md) para apuntar a qué entidad o ubicación está sujeta a las condiciones. Esto significa que puede asociar condiciones al jefe o a los jugadores o a cualquier otra cosa a la que pueda apuntar.

---

## Tipo de condición

| Clave | Detalles | Valores |
| --- | :-: | :-: |
| `conditionType` | Establece el tipo de condición | `BLOCKING` / `FILTERING` |

Hay dos tipos de condición: `BLOCKING` y `FILTERING`. Las condiciones `BLOCKING` hacen que los scripts o las acciones dejen de ejecutarse. Las condiciones `FILTERING` hacen que las acciones omitan los objetivos que no cumplen la condición. Esto significa que si solo desea dirigirse a bloques que no son de aire, querrá una condición `FILTERING`, pero si desea detener una acción si un jugador está muerto, querrá una condición `BLOCKING`.

**Las condiciones fuera de las acciones siempre son `BLOCKING`**. Las condiciones dentro de las acciones pueden ser `BLOCKING` o `FILTERING`.

_**Nota: si el objetivo es `SELF` (el jefe) y la comprobación de la condición es `isAlive`, la comprobación siempre es `BLOCKING`!**_ Esto se puede colocar dentro de una condición `FILTERING` y aún hará que esta parte específica se comporte como `BLOCKING`.

Las condiciones dentro de las acciones están establecidas en `FILTERING` de forma predeterminada.

---

## Condiciones basadas en la ubicación

### locationIsAir

Establece la condición para que sea si la ubicación del objetivo es aire.

| Clave | Detalles |        Valores         |
| --- | :-: |:-------------------:|
| `locationIsAir` | Establece la comprobación para comprobar si la ubicación es un bloque de aire (o lo contrario). | [Booleano](#booleano) |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Conditions:
      locationIsAir: true
      Target:
        targetType: SELF
        offset: "0,3,0"
```

Verifica si la ubicación 2 bloques por encima de donde está parado el jefe es aire.

</div>

</details>

</div>

---

### isOnFloor

Verifica si la ubicación está en el piso. Esto significa que el bloque en la ubicación no es sólido, pero el bloque debajo sí lo es.

| Clave | Detalles | Valores |
| --- | :-: | :-: |
| `isOnFloor` | Establece la comprobación para comprobar si la ubicación es una ubicación de suelo (o lo contrario). | [Booleano](#booleano) |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Conditions:
      isOnFloor: true
      Target:
        targetType: SELF
```

</div>

</details>

</div>

---

### isStandingOnMaterial

Verifica si la ubicación debajo del objetivo es un tipo de material coincidente.

| Clave |                     Detalles                     |        Valores         |
| --- |:-----------------------------------------------:|:---------------------:|
| `isStandingOnMaterial` | Establece para qué tipo de material se debe comprobar. | [Material](#material) |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Conditions:
      isStandingOnMaterial: BIRCH_WOOD
      Target:
        targetType: SELF
```

Solo se ejecutará si el jefe está parado en BIRCH_WOOD.

</div>

</details>

</div>

## Condiciones basadas en entidades

### isAlive

Establece la condición para que sea si la entidad objetivo de la condición está viva.

| Clave | Detalles | Valores |
| --- | :-: | :-: |
| `isAlive` | Establece la comprobación para comprobar si la entidad está viva (o muerta). | [Booleano](#booleano) |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Conditions:
      isAlive: false
      Target:
        targetType: SELF
```

Solo se ejecutará si el jefe está muerto.

</div>

</details>

</div>

---

### hasTags

Verifica si la entidad de destino tiene etiquetas específicas. Los creadores de scripts pueden asignar y anular la asignación de cualquier etiqueta a través de acciones y utilizarlas como condiciones para un comportamiento posterior. Las etiquetas son solo cadenas (palabras) que puede asignar a un jefe.

| Clave | Detalles |           Valores            |
| --- | :-: |:---------------------------:|
| `hasTags` | Establece la comprobación para comprobar si la entidad tiene una lista de etiquetas. | [Lista de cadenas](#string_list) |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Conditions:
      hasTags:
      - isCool
      - hasANiceBeard
      Target:
        targetType: SELF
```

Solo se ejecutará si el jefe tiene las etiquetas "isCool" y "hasANiceBeard".

</div>

</details>

</div>

---

### doesNotHaveTags

Igual que `hasTags`, pero verifica si el jefe no tiene estos valores.

| Clave | Detalles | Valores |
| --- | :-: | :-: |
| `doesNotHaveTags` | Establece la comprobación para comprobar si la entidad no tiene una lista de etiquetas. | [Lista de cadenas](#string_list) |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Conditions:
      doesNotHaveTags:
      - isStinky
      - isSus
      Target:
        targetType: SELF
```

Solo se ejecutará si el jefe no tiene las etiquetas "isStinky" e "isSus".

</div>

</details>

</div>

## Otras condiciones

### randomChance

Le da a la condición una posibilidad aleatoria de ser válida.

| Clave | Detalles | Valores |
| --- | :-: | :-: |
| `randomChance` | Posibilidad de que la condición sea válida. | Número entre 0.0 y 1.0 |

Tenga en cuenta que esta condición es especial, ya que no requiere un objetivo.

## Filtrar NEARBY con etiquetas

Para filtrar `NEARBY_MOBS` o `NEARBY_PLAYERS` en función de etiquetas específicas, use `ACTION_TARGET` como el objetivo de la condición (si la condición se aplica a una acción y no al script en sí). Esto asegura que el script filtre con precisión solo a los mobs/jugadores con las etiquetas especificadas.

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Actions:
    - action: SET_MOB_AI
      Target:
        targetType: NEARBY_MOBS
        range: 40
      bValue: false
      Conditions:
        hasTags:
          - TurnOff
        Target:
          targetType: ACTION_TARGET
```

Este script buscará cualquier mob cercano con la etiqueta `TurnOff` y, si tiene la etiqueta, desactivará su IA.

</div>

</details>

</div>
