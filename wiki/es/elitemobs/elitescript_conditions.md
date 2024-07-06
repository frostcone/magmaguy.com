# Condiciones de Elite Script

Las condiciones permiten a los scripters hacer que los scripts y/o acciones **no** se ejecuten en función de condiciones específicas.

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
    - EliteMobDamagedByPlayerEvent
    Condiciones:
      isAlive: true
      Target:
        targetType: SELF
    Acciones:
    - action: PLACE_BLOCK
      Target:
        targetType: DIRECT_TARGET
      duration: 20
      material: DIRT
      offset: 0,3,0
      Condiciones:
        locationIsAir: true
        Target:
          targetType: ACTION_TARGET
    Enfriamientos:
      local: 60
      global: 20
```

En este ejemplo, el script `Ejemplo` solo se ejecutará si la élite aún está viva, y solo colocará un bloque de tierra 3 bloques por encima de la ubicación de la élite si ese bloque es un bloque de aire. Las acciones individuales pueden tener condiciones individuales.

</div>

</details>

</div>

## Objetivo

Las condiciones utilizan el sistema de [Objetivos]($language$/elitemobs/elitescript_targets.md) para apuntar a qué entidad o ubicación está sujeta a las condiciones. Esto significa que puedes asociar condiciones al jefe, a los jugadores oa cualquier otra cosa a la que puedas apuntar.

---

## Tipo de condición

| Clave | Detalles | Valores |
| --- | :-: | :-: |
| `conditionType` | Establece el tipo de condición | `BLOCKING` / `FILTERING` |

Hay dos tipos de condiciones: `BLOCKING` y `FILTERING`. Las condiciones `BLOCKING` hacen que los scripts o acciones dejen de ejecutarse. Las condiciones `FILTERING` hacen que las acciones omitan los objetivos que no cumplen la condición. Esto significa que si solo quieres apuntar a bloques que no son de aire, querrás una condición `FILTERING`, pero si quieres detener una acción si un jugador está muerto, querrás una condición `BLOCKING`.

**Las condiciones fuera de las acciones siempre son `BLOCKING`**. Las condiciones dentro de las acciones pueden ser `BLOCKING` o `FILTERING`.

_**Nota: si el objetivo es `SELF` (el jefe) y la comprobación de la condición es `isAlive`, ¡la comprobación siempre es `BLOCKING`!**_ Esto se puede poner dentro de una condición `FILTERING` y aún así hará que esta parte específica se comporte como `BLOCKING`.

Las condiciones dentro de las acciones están configuradas en `FILTERING` de forma predeterminada.

---

## Condiciones basadas en la ubicación

### locationIsAir

Establece la condición para que sea si la ubicación del objetivo es aire.

| Clave | Detalles |       Valores        |
| --- | :-: |:-------------------:|
| `locationIsAir` | Se establece para comprobar si la ubicación es un bloque de aire (o lo contrario). | [Booleano](#booleano) |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Condiciones:
      locationIsAir: true
      Target:
        targetType: SELF
        offset: "0,3,0"
```

Comprueba si la ubicación 2 bloques por encima de donde está parado el jefe es aire.

</div>

</details>

</div>

---

### isOnFloor

Comprueba si la ubicación está en el suelo. Esto significa que el bloque en la ubicación no es sólido, pero el bloque debajo de él es sólido.

| Clave | Detalles | Valores |
| --- | :-: | :-: |
| `isOnFloor` | Se establece para comprobar si la ubicación es una ubicación del suelo (o lo contrario). | [Booleano](#booleano) |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Condiciones:
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

| Clave |                     Detalles                     |        Valores         |
| --- |:-----------------------------------------------:|:---------------------:|
| `isStandingOnMaterial` | Establece qué tipo de material se debe comprobar. | [Material](#material) |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Condiciones:
      isStandingOnMaterial: BIRCH_WOOD
      Target:
        targetType: SELF
```

Solo se ejecutará si el jefe está parado sobre BIRCH_WOOD.

</div>

</details>

</div>

## Condiciones basadas en entidades

### isAlive

Establece la condición para que sea si la entidad objetivo de la condición está viva.

| Clave | Detalles | Valores |
| --- | :-: | :-: |
| `isAlive` | Se establece para comprobar si la entidad está viva (o muerta). | [Booleano](#booleano) |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Condiciones:
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

Comprueba si la entidad objetivo tiene etiquetas específicas. Los scripters pueden asignar y desasignar cualquier etiqueta a través de acciones y usarlas como condiciones para un comportamiento posterior. Las etiquetas son solo cadenas (palabras) que puedes asignar a un jefe.

| Clave | Detalles |           Valores            |
| --- | :-: |:---------------------------:|
| `hasTags` | Se establece para comprobar si la entidad tiene una lista de etiquetas. | [Lista de cadenas](#lista_de_cadenas) |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Condiciones:
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

| Clave | Detalles | Valores |
| --- | :-: | :-: |
| `doesNotHaveTags` | Se establece para comprobar si la entidad no tiene una lista de etiquetas. | [Lista de cadenas](#lista_de_cadenas) |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Condiciones:
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

Le da a la condición una probabilidad aleatoria de ser válida.

| Clave | Detalles | Valores |
| --- | :-: | :-: |
| `randomChance` | Probabilidad de que la condición sea válida. | Número entre 0.0 y 1.0 |

Ten en cuenta que esta condición es especial ya que no requiere un objetivo.


