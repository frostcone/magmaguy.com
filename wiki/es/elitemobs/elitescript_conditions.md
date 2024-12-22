# Condiciones de Elite Script

Las condiciones permiten a los scripters hacer que los scripts y/o acciones **no** se ejecuten según condiciones
específicas.

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
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

En este ejemplo, el script `Ejemplo` solo se ejecutará si el élite todavía está vivo, y solo colocará un bloque de
tierra 3 bloques por encima de la ubicación del élite si ese bloque es un bloque de aire. Las acciones individuales
pueden tener condiciones individuales.

</div>

</details>

</div>

## Objetivo

Las condiciones usan el sistema de [Objetivos]($language$/elitemobs/elitescript_targets.md) para apuntar a qué entidad o
ubicación se somete a las condiciones. Esto significa que puedes asociar condiciones al jefe o a los jugadores o a
cualquier otra cosa que puedas apuntar.

---

## Tipo de Condición

| Clave | Detalles | Valores |
| --- | :-: | :-: |
| `conditionType` | Establece el tipo de condición | `BLOCKING` / `FILTERING` |

Hay dos tipos de condición: `BLOCKING` y `FILTERING`. Las condiciones `BLOCKING` hacen que los scripts o acciones dejen
de ejecutarse. Las condiciones `FILTERING` hacen que las acciones omitan los objetivos que no cumplen la condición. Esto
significa que si solo quieres apuntar a bloques que no son aire, querrás una condición `FILTERING`, pero si quieres
detener una acción si un jugador está muerto, querrás una condición `BLOCKING`.

**Las condiciones fuera de las acciones son siempre `BLOCKING`**. Las condiciones dentro de las acciones pueden
ser `BLOCKING` o `FILTERING`.

_**Nota: si el objetivo es `SELF` (el jefe) y la comprobación de la condición es `isAlive`, la comprobación es
siempre `BLOCKING`!**_ Esto se puede poner dentro de una condición `FILTERING` y aún así hará que esta parte específica
se comporte como `BLOCKING`.

Las condiciones dentro de las acciones se establecen en `FILTERING` por defecto.

---

## Condiciones basadas en la ubicación

### locationIsAir

Establece la condición para saber si la ubicación del objetivo es aire.

| Clave           |                                       Detalles                                        |        Valores        |
|-----------------|:-------------------------------------------------------------------------------------:|:---------------------:|
| `locationIsAir` | Establece si se debe comprobar si la ubicación es un bloque de aire (o lo contrario). | [Booleano](#booleano) |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Conditions:
      locationIsAir: true
      Target:
        targetType: SELF
        offset: "0,3,0"
```

Comprueba si la ubicación 2 bloques por encima de donde está el jefe es aire.

</div>

</details>

</div>

---

### isOnFloor

Comprueba si la ubicación está en el suelo. Esto significa que el bloque en la ubicación no es sólido, pero el bloque
debajo de él sí lo es.

| Clave       |                                          Detalles                                          |        Valores        |
|-------------|:------------------------------------------------------------------------------------------:|:---------------------:|
| `isOnFloor` | Establece si se debe comprobar si la ubicación es una ubicación de suelo (o lo contrario). | [Booleano](#booleano) |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
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

Comprueba si la ubicación debajo del objetivo es un tipo de material coincidente.

| Clave                  |                     Detalles                      |        Valores        |
|------------------------|:-------------------------------------------------:|:---------------------:|
| `isStandingOnMaterial` | Establece qué tipo de material se debe comprobar. | [Material](#material) |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Conditions:
      isStandingOnMaterial: BIRCH_WOOD
      Target:
        targetType: SELF
```

Solo se ejecutará si el jefe está de pie sobre BIRCH_WOOD.

</div>

</details>

</div>

## Condiciones basadas en la entidad

### isAlive

Establece la condición para saber si la entidad objetivo de la condición está viva.

| Clave     |                              Detalles                              |        Valores        |
|-----------|:------------------------------------------------------------------:|:---------------------:|
| `isAlive` | Establece si se debe comprobar si la entidad está viva (o muerta). | [Booleano](#booleano) |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
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

Comprueba si la entidad objetivo tiene etiquetas específicas. Los scripters pueden asignar y desasignar cualquier
etiqueta a través de acciones y usarlas como condiciones para un comportamiento posterior. Las etiquetas son solo
cadenas (palabras) que puedes asignar a un jefe.

| Clave     |                                  Detalles                                  |                Valores                |
|-----------|:--------------------------------------------------------------------------:|:-------------------------------------:|
| `hasTags` | Establece si se debe comprobar si la entidad tiene una lista de etiquetas. | [Lista de Cadenas](#lista_de_cadenas) |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
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

Igual que `hasTags`, pero comprueba si el jefe no tiene estos valores.

| Clave             |                                   Detalles                                    |                Valores                |
|-------------------|:-----------------------------------------------------------------------------:|:-------------------------------------:|
| `doesNotHaveTags` | Establece si se debe comprobar si la entidad no tiene una lista de etiquetas. | [Lista de Cadenas](#lista_de_cadenas) |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Conditions:
      doesNotHaveTags:
      - isStinky
      - isSus
      Target:
        targetType: SELF
```

Solo se ejecutará si el jefe no tiene las etiquetas "isStinky" y "isSus".

</div>

</details>

</div>

## Otras condiciones

### randomChance

Le da a la condición una posibilidad aleatoria de ser válida.

| Clave          |                   Detalles                   |        Valores         |
|----------------|:--------------------------------------------:|:----------------------:|
| `randomChance` | Probabilidad de que la condición sea válida. | Número entre 0.0 y 1.0 |

Ten en cuenta que esta condición es especial ya que no requiere un objetivo.

## Filtrar NEARBY con etiquetas

Para filtrar `NEARBY_MOBS` o `NEARBY_PLAYERS` basándote en etiquetas específicas, utiliza `ACTION_TARGET` como objetivo
de la condición (si la condición se aplica a una acción y no al script en sí). Esto asegura que el script filtre con
precisión solo los mobs/jugadores con las etiquetas especificadas.

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
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

Este script buscará cualquier mob cercano con la etiqueta `TurnOff` y, si la tienen, desactivará su IA.

</div>

</details>

</div>
