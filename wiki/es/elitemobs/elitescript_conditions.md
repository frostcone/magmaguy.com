Aquí tienes la traducción al español, conservando el formato markdown:

# Condiciones de Elite Script

Las condiciones permiten a los scripters hacer que los scripts y/o acciones **no** se ejecuten basándose en condiciones específicas.

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
      conditionType: BLOCKING
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
        conditionType: BLOCKING
        Target:
          targetType: ACTION_TARGET
    Cooldowns:
      local: 60
      global: 20
```

En este ejemplo, el script `Example` solo se ejecutará si el élite sigue vivo, y solo colocará un bloque de tierra 3 bloques por encima de la ubicación del élite si ese bloque es un bloque de aire. Las acciones individuales pueden tener condiciones individuales.

</div>

</details>

</div>

## Objetivo (Target)

Las condiciones utilizan el sistema de [Objetivos (Targets)](es/elitemobs/elitescript_targets.md) para determinar a qué entidad o ubicación se aplican las condiciones. Esto significa que puedes asociar condiciones al jefe, a los jugadores o a cualquier otra cosa a la que puedas apuntar.

---

## Tipo de Condición (Condition Type)

| Clave           | Detalles                 | Valores                 |
| --------------- | :-:                      | :-:                     |
| `conditionType` | Establece el tipo de condición | `BLOCKING` / `FILTERING` |

Hay dos tipos de condición: `BLOCKING` (Bloqueo) y `FILTERING` (Filtrado). Las condiciones `BLOCKING` hacen que los scripts o acciones dejen de ejecutarse. Las condiciones `FILTERING` hacen que las acciones salten los objetivos que no cumplen la condición. Esto significa que si solo quieres apuntar a bloques que no son aire, querrás una condición `FILTERING`, pero si quieres detener una acción si un jugador está muerto, querrás una condición `BLOCKING`.

**Las condiciones fuera de las acciones son siempre `BLOCKING`**. Las condiciones dentro de las acciones pueden ser `BLOCKING` o `FILTERING`.

_**Nota: si el objetivo es `SELF` (el jefe) y la verificación de la condición es `isAlive`, ¡la verificación es siempre `BLOCKING`!**_ Esto puede colocarse dentro de una condición `FILTERING` y aún así hará que esta parte específica se comporte como `BLOCKING`.

Las condiciones dentro de las acciones se establecen en `FILTERING` por defecto.

---

## Colocación de Bloques de Condición

Puedes colocar o anidar bloques de condición de dos maneras:

1. **Debajo de acciones individuales** – La condición se aplicará solo a una acción específica. Si se cumple la condición, la acción se ejecuta; de lo contrario, no lo hace.

2. **Debajo del script completo** – La condición se aplica a todas las acciones dentro del script. Si no se cumple la condición, ninguna de las acciones se ejecutará.

A continuación se muestran ejemplos que demuestran cómo anidar bloques de condición tanto para acciones individuales como para el script completo.

**Debajo de acciones individuales:**

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MESSAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&2Hello World!"
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        locationIsAir: true
        Target:
          targetType: SELF
          offset: "0,3,0"
```

Verifica si la ubicación 2 bloques por encima de donde está parado el jefe es aire y, si lo es, ejecuta la acción SET_WEATHER cuando el mob es golpeado. De lo contrario, bloquea la acción SET_WEATHER. Pero el jefe siempre ejecutará la acción MESSAGE cuando sea golpeado, ya que no se le aplican condiciones.

</div>

</details>

</div>

**Debajo del script completo:**

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MESSAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&2Hello World!"
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
    Conditions:
      conditionType: BLOCKING
      locationIsAir: true
      Target:
        targetType: SELF
        offset: "0,3,0"
```

Si el bloque ubicado dos espacios por encima de donde está parado el jefe es aire, entonces permite que se ejecuten todos los scripts cuando el mob es golpeado. De lo contrario, bloquea la ejecución de todo el script, incluyendo las acciones SET_WEATHER y MESSAGE.

</div>

</details>

</div>

---

## Condiciones basadas en la ubicación

### locationIsAir

Establece la condición para verificar si la ubicación del objetivo es aire.

| Clave           | Detalles                                          |       Valores        |
| --------------- | :-:                                               |:--------------------:|
| `locationIsAir` | Establece para verificar si la ubicación es un bloque de aire (o lo contrario). | [Booleano](#boolean) |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        locationIsAir: true
        Target:
          targetType: SELF
          offset: "0,3,0"
```

Verifica si la ubicación 2 bloques por encima de donde está parado el jefe es aire y, si lo es, no bloquea la ejecución del script de clima cuando el mob es golpeado. De lo contrario, bloquea la acción.

</div>

</details>

</div>

---

### isOnFloor

Verifica si la ubicación está en el suelo. Esto significa que el bloque en la ubicación no es sólido, pero el bloque debajo de él es sólido.

| Clave       | Detalles                                          | Valores              |
| ----------- | :-:                                               | :-:                  |
| `isOnFloor` | Establece para verificar si la ubicación es una ubicación de suelo (o lo contrario). | [Booleano](#boolean) |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        isOnFloor: true
        Target:
          targetType: SELF
```

Verifica si el jefe está sobre un bloque sólido, si lo está, entonces ejecuta el script, de lo contrario, bloquea la ejecución del script.

</div>

</details>

</div>

---

### isStandingOnMaterial

Verifica si la ubicación debajo del objetivo es de un tipo de material coincidente.

| Clave                |                     Detalles                      |        Valores         |
| -------------------- |:-----------------------------------------------:|:----------------------:|
| `isStandingOnMaterial` | Establece qué tipo de material debe ser verificado. | [Material](#material) |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        isStandingOnMaterial: BIRCH_WOOD
        Target:
          targetType: SELF
```

Solo se ejecutará si el jefe está parado sobre un bloque de BIRCH_WOOD, de lo contrario, el script será bloqueado.

</div>

</details>

</div>

## Condiciones basadas en entidades

### isAlive

Establece la condición para verificar si la entidad objetivo de la condición está viva.

| Clave     | Detalles                                     | Valores              |
| --------- | :-:                                          | :-:                  |
| `isAlive` | Establece para verificar si la entidad está viva (o muerta). | [Booleano](#boolean) |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        isAlive: true
        Target:
          targetType: SELF
```

Solo se ejecutará si el jefe está actualmente vivo, de lo contrario, el script será bloqueado.

</div>

</details>

</div>

---

### hasTags

Verifica si la entidad objetivo tiene etiquetas específicas. Los scripters pueden asignar y desasignar cualquier etiqueta a través de acciones y usarlas como condiciones para comportamientos posteriores. Las etiquetas son simplemente strings (palabras) que puedes asignar a un jefe.

| Clave     | Detalles                                       |           Valores            |
| --------- | :-:                                            |:----------------------------:|
| `hasTags` | Establece para verificar si la entidad tiene una lista de etiquetas. | [Lista de Strings](#string_list) |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        hasTags:
        - isCool
        - hasANiceBeard
        Target:
          targetType: SELF
```

Solo se ejecutará si el jefe tiene las etiquetas "isCool" y "hasANiceBeard", de lo contrario, el script será bloqueado.

</div>

</details>

</div>


---

### doesNotHaveTags

Igual que `hasTags`, pero verifica si el jefe no tiene estos valores.

| Clave           | Detalles                                             | Valores              |
| --------------- | :-:                                                  | :-:                  |
| `doesNotHaveTags` | Establece para verificar si la entidad no tiene una lista de etiquetas. | [Lista de Strings](#string_list) |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        doesNotHaveTags:
        - isStinky
        - isSus
        Target:
          targetType: SELF
```

Solo se ejecutará si el jefe no tiene las etiquetas "isStinky" y "isSus", de lo contrario, el script será bloqueado.

</div>

</details>

</div>

## Otras condiciones

### randomChance

Da a la condición una probabilidad aleatoria de ser válida.

| Clave          | Detalles                               | Valores                     |
| -------------- | :-:                                    | :-:                         |
| `randomChance` | Probabilidad de que la condición sea válida. | Número entre 0.0 y 1.0 |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        randomChance: 0.1
        Target: # Not required
          targetType: SELF # Not required
```

Esto le dará al script un 10% de probabilidad de ejecutarse, de lo contrario, el script será bloqueado.

</div>

</details>

</div>

Ten en cuenta que esta condición es especial ya que no requiere un objetivo.

## Filtrar CERCANOS (NEARBY) con etiquetas

Para filtrar `NEARBY_MOBS` o `NEARBY_PLAYERS` basándose en etiquetas específicas, usa `ACTION_TARGET` como objetivo de la condición (si la condición se aplica a una acción y no al script en sí). Esto asegura que el script filtre con precisión solo los mobs/jugadores con las etiquetas especificadas.

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
        conditionType: FILTERING
        hasTags:
          - TurnOff
        Target:
          targetType: ACTION_TARGET
```

Este script buscará cualquier mob cercano con la etiqueta `TurnOff` y si tienen la etiqueta, entonces desactivará su IA.

</div>

</details>

</div>