# Tabla de botín personalizada

Formato de botín universal. Utilizado por EliteMobs en varias ubicaciones diferentes.

Ten en cuenta que este es el formato más reciente y el que se recomienda utilizar, pero existen algunos formatos
antiguos alternativos.

Asegúrate de comenzar tus tablas de botín con `uniqueLootList:` antes de agregar cualquier configuración; de lo
contrario, la configuración .yml generará un error.

### Soltar objetos de élite:

| Clave      |                                    Detalles                                    | Valores                        | Predeterminado |
|------------|:------------------------------------------------------------------------------:|--------------------------------|----------------|
| `filename` | Establece el nombre del archivo del objeto personalizado que se va a utilizar. | [Nombre de archivo](#filename) | ninguno        |

<details>

<summary align="center"><b>Ejemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
```

Esto hará que el mob suelte 1 *Palillo de dientes de MagmaGuy* con una probabilidad de caída del 100%.

</div>

</details>

### Configuración general:

| Clave               |                               Detalles                               | Valores              | Predeterminado |
|---------------------|:--------------------------------------------------------------------:|----------------------|----------------|
| `chance`            |           Establece la probabilidad de que caiga el botín.           | [Doble](#double)     | `1.0`          |
| `amount`            |  Establece la cantidad de esta entrada de botín que se va a soltar   | [Entero](#integer)   | `1`            |
| `ignorePlayerLevel` | Hace que la caída del botín ignore el limitador de botín del jugador | [Booleano](#boolean) | `false`        |

<details>

<summary align="center"><b>Ejemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
    chance: 0.5
    amount: 10
    ignorePlayerLevel: true
```

Esto hará que el mob suelte 10 *Palillos de dientes de MagmaGuy* con una probabilidad de caída del 50% ignorando el
nivel del jugador.

</div>

</details>

### Soltar monedas de élite:

| Clave            |                     Detalles                      | Valores            | Predeterminado |
|------------------|:-------------------------------------------------:|--------------------|----------------|
| `currencyAmount` | Establece la cantidad de monedas que se soltarán. | [Entero](#integer) | ninguno        |

<details>

<summary align="center"><b>Ejemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - currencyAmount: 344
    chance: 0.5
```

Esto hará que el mob suelte 344 *Monedas de élite* con una probabilidad de caída del 50%.

</div>

</details>

### Soltar objetos vainilla:

| Clave      |                       Detalles                       | Valores               | Predeterminado |
|------------|:----------------------------------------------------:|-----------------------|----------------|
| `material` | Establece el material del objeto que se va a soltar. | [Material](#material) | ninguno        |

<details>

<summary align="center"><b>Ejemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - material: APPLE
    chance: 0.3
    amount: 5
```

Esto hará que el mob suelte 5 *Manzanas* con una probabilidad de caída del 30%.

</div>

</details>

### Arenas: TRABAJO EN PROGRESO (No funciona actualmente)

Al crear tablas de botín de arena, asegúrate de comenzar la tabla de botín con `rawArenaReward:` en lugar
de `uniqueLootList:`.

| Clave   |                                     Detalles                                     | Valores            | Predeterminado |
|---------|:--------------------------------------------------------------------------------:|--------------------|----------------|
| `wave`  | Establece la ola en la que caerá esta entrada de botín. Solo para uso en arenas. | [Entero](#integer) | ninguno        |
| `level` |        Establece el nivel de la caída de botín. Solo para uso en arenas.         | [Entero](#integer) | ninguno        |

<details>

<summary align="center"><b>Ejemplo</b></summary>

<div align="left">

```yml
rawArenaReward:
  - material: BREAD
    wave: 1
    amount: 10
    chance: 0.5
  - filename: magmaguys_toothpick.yml
    wave: 1
    level: 2
```

Cuando los jugadores superen la primera ola, la arena soltará 10 *Panes* con una probabilidad de caída del 50% y 1
*Palillo de dientes de MagmaGuy* de nivel 2 con una probabilidad de caída del 100%.

</div>

</details>

### Mazmorras de instancia:

| Clave          |                                                              Detalles                                                               | Valores           | Predeterminado |
|----------------|:-----------------------------------------------------------------------------------------------------------------------------------:|-------------------|----------------|
| `difficultyID` | Establece la lista de dificultades de mazmorra de instancia para las que caerá este botín. Solo para uso en mazmorras de instancia. | [Cadena](#string) | ninguno        |

<details>

<summary align="center"><b>Ejemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
    chance: 0.5
    difficultyID:
    - 1
    - 2
```

Esto hará que el mob suelte 1 *Palillo de dientes de MagmaGuy* con una probabilidad de caída del 50% si los jugadores
derrotaron al jefe en la dificultad 1 o 2.

</div>

</details>
