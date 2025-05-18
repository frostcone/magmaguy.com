```markdown
# Tabla de Botín Personalizada

Formato de botín universal. Utilizado por EliteMobs en varias ubicaciones diferentes.

Tenga en cuenta que este es el formato más reciente y el recomendado para usar, pero existen algunos formatos alternativos más antiguos.

Asegúrese de comenzar sus tablas de botín con `uniqueLootList:` antes de agregar cualquier configuración, de lo contrario, la configuración .yml dará un error.

### Soltando objetos de élite:

| Clave | Detalles | Valores                | Predeterminado |
| --- | :-: |-----------------------| --- |
| `filename` | Establece el nombre del archivo del Objeto Personalizado a usar. | [Nombre de archivo](#filename) | ninguno |

<details>

<summary align="center"><b>Ejemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
```

Esto hará que el mob suelte 1 *MagmaGuy's Toothpick* con un 100% de probabilidad de caída.

</div>

</details>

### Configuraciones generales:

| Clave | Detalles | Valores              | Predeterminado |
| --- | :-: |---------------------| --- |
| `chance` | Establece la probabilidad de que caiga el botín. | [Doble](#double)   | `1.0` |
| `amount` | Establece la cantidad de esta entrada de botín a soltar | [Entero](#integer) | `1` |
| `ignorePlayerLevel` | Hace que la caída de botín ignore el limitador de botín del jugador | [Booleano](#boolean) | `false` |

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

Esto hará que el mob suelte 10 *MagmaGuy's Toothpick* con un 50% de probabilidad de caída, ignorando el nivel del jugador.

</div>

</details>

### Soltando monedas de élite:

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
Esto hará que el mob suelte 344 *Monedas de Élite* con un 50% de probabilidad de caída.

</div>

</details>

### Soltando objetos de vainilla:

| Clave | Detalles | Valores                | Predeterminado |
| --- | :-: |-----------------------| --- |
| `material` | Establece el material del objeto soltado. | [Material](#material) | ninguno |

<details>

<summary align="center"><b>Ejemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - material: APPLE
    chance: 0.3
    amount: 5
```
Esto hará que el mob suelte 5 *Manzanas* con un 30% de probabilidad de caída.

</div>

</details>

### Arenas: EN PROGRESO (Actualmente no funciona)
Al crear tablas de botín para arenas, asegúrese de comenzar su tabla de botín con `rawArenaReward:` en lugar de `uniqueLootList:`.

| Clave | Detalles | Valores              | Predeterminado |
| --- | :-: |---------------------| --- |
| `wave` | Establece la oleada en la que caerá esta entrada de botín. Solo para uso en arenas. | [Entero](#integer) | ninguno |
| `level` | Establece el nivel de la caída de botín. Solo para uso en arenas. | [Entero](#integer) | ninguno |

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
Cuando los jugadores superen la primera oleada, esto hará que la arena suelte 10 *Pan* con un 50% de probabilidad de caída y 1 *MagmaGuy's Toothpick* de nivel 2 con un 100% de probabilidad de caída.

</div>

</details>

### Mazmorras Instanciadas:

| Clave | Detalles | Valores            | Predeterminado |
| --- | :-: |-------------------| --- |
| `difficultyID` | Establece la lista de dificultades de mazmorras instanciadas para las que caerá este botín. Solo para uso en mazmorras instanciadas. | [Cadena](#string) | ninguno |

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
Esto hará que el mob suelte 1 *MagmaGuy's Toothpick* con un 50% de probabilidad de caída si los jugadores derrotaron al jefe en dificultad 1 o 2.

</div>

</details>
```