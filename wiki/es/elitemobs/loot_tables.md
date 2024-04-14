# Tabla de Botín Personalizada

Formato de botín universal. Utilizado por EliteMobs en varias ubicaciones diferentes.

Ten en cuenta que este es el último formato y el que se recomienda utilizar, aunque existen algunos formatos antiguos alternativos.

Asegúrate de comenzar tus tablas de botín con `uniqueLootList:` antes de agregar cualquier configuración, de lo contrario el configuración .yml dará un error.

### Soltar items elite:

| Clave | Detalles | Valores                | Predeterminado |
| --- | :-: |-----------------------| --- |
| `filename` | Establece el nombre del archivo del Ítem Personalizado a utilizar. | [NombreArchivo](#filename) | ninguno |

<details> 

<summary align="center"><b>Ejemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
```

Esto hará que el mobuelo suelte 1 de *MagmaGuy's Toothpick* con 100% de posibilidad de caída.

</div>

</details>

### Configuración general:

| Clave | Detalles | Valores              | Predeterminado |
| --- | :-: |---------------------| --- |
| `chance` | Establece la posibilidad de que el botín caiga. | [Doble](#double)   | `1.0` |
| `amount` | Establece la cantidad de esta entrada de botín a soltar | [Entero](#integer) | `1` |
| `ignorePlayerLevel` | Hace que la caída del botín ignore el limitador de botín de jugador | [Booleano](#boolean) | `false` |

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

Esto hará que el mob suelte 10 de *MagmaGuy's Toothpick* con una posibilidad de caída del 50%, mientras ignora el nivel del jugador.

</div>

</details>

### Soltar monedas élite:

| Clave | Detalles | Valores              | Predeterminado |
| --- | :-: |---------------------| --- |
| `currencyAmount` | Establece la cantidad de monedas que se soltarán. | [Entero](#integer) | ninguno |

<details> 

<summary align="center"><b>Ejemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - currencyAmount: 344
    chance: 0.5
```
Esto hará que el mob suelte 344 *Monedas Élite* con una posibilidad de caída del 50%.

</div>

</details>

### Soltar items vainilla:

| Clave | Detalles | Valores                | Predeterminado |
| --- | :-: |-----------------------| --- |
| `material` | Establece el material del ítem a soltar. | [Material](#material) | ninguno |

<details> 

<summary align="center"><b>Ejemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - material: APPLE
    chance: 0.3
    amount: 5
```
Esto hará que el mob suelte 5 *Manzanas* con una posibilidad de caída del 30%.

</div>

</details>

### Arenas: TRABAJO EN PROCESO (No funciona actualmente)
Al hacer tablas de botín de arena, asegúrate de comenzar tu tabla de botín con `rawArenaReward:` en lugar de `uniqueLootList:`.

| Clave | Detalles | Valores              | Predeterminado |
| --- | :-: |---------------------| --- |
| `wave` | Establece la ola en la que caerá esta entrada de botín. Sólo para uso en arenas. | [Entero](#integer) | ninguno |
| `level` | Establece el nivel de la caída del botín. Sólo para uso en arenas. | [Entero](#integer) | ninguno |

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
Cuando los jugadores ganan la primera ola, esto hará que la arena suelte 10 *Pan* con una posibilidad de caída del 50% y 1 *MagmaGuy's Toothpick* de nivel 2 con un 100% de posibilidad de caída.

</div>

</details>

### Mazmorras Instanciadas:

| Clave | Detalles | Valores            | Predeterminado |
| --- | :-: |-------------------| --- |
| `difficultyID` | Establece la lista de dificultades de mazmorras instanciadas para las que caerá este botín. Sólo para uso en mazmorras instanciadas. | [Cadena](#string) | ninguno |

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
Esto hará que el mob suelte 1 *MagmaGuy's Toothpick* con una posibilidad de caída del 50% si los jugadores derrotaron al jefe en dificultad 1 o 2.

</div>

</details>