# Tabla de botín personalizada

Formato de botín universal. Utilizado por EliteMobs en varios lugares diferentes.

Tenga en cuenta que este es el formato más reciente y el que se recomienda utilizar, pero existen algunos formatos alternativos más antiguos.

Asegúrate de comenzar tus tablas de botín con `uniqueLootList:` antes de agregar cualquier configuración; de lo contrario, la configuración .yml dará error.

### Soltar objetos de élite:

| Clave | Detalles | Valores                | Predeterminado |
| --- | :-: |-----------------------| --- |
| `filename` | Establece el nombre del archivo del objeto personalizado que se utilizará. | [Nombre de archivo](#nombre_de_archivo) | ninguno |

<details> 

<summary align="center"><b>Ejemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: palillo_de_magmaguys.yml
```

Esto hará que la mafia suelte 1 *palillo de dientes de MagmaGuy* con un 100% de probabilidad de soltarlo.

</div>

</details>

### Configuración general:

| Clave | Detalles | Valores              | Predeterminado |
| --- | :-: |---------------------| --- |
| `chance` | Establece la posibilidad de que caiga el botín. | [Doble](#doble)   | `1.0` |
| `amount` | Establece la cantidad de esta entrada de botín que se soltará | [Entero](#entero) | `1` |
| `ignorePlayerLevel` | Hace que la caída de botín ignore el limitador de botín del jugador | [Booleano](#booleano) | `false` |

<details> 

<summary align="center"><b>Ejemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: palillo_de_magmaguys.yml
    chance: 0.5
    amount: 10
    ignorePlayerLevel: true
```

Esto hará que la mafia suelte 10 *palillos de dientes de MagmaGuy* con un 50% de probabilidad de soltarlo mientras ignora el nivel del jugador.

</div>

</details>

### Soltar monedas de élite:

| Clave | Detalles | Valores              | Predeterminado |
| --- | :-: |---------------------| --- |
| `currencyAmount` | Establece la cantidad de monedas que se soltarán. | [Entero](#entero) | ninguno |

<details> 

<summary align="center"><b>Ejemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - currencyAmount: 344
    chance: 0.5
```
Esto hará que la mafia suelte 344 *monedas de élite* con un 50% de probabilidad de soltarlo.

</div>

</details>

### Soltar objetos de vainilla:

| Clave | Detalles | Valores                | Predeterminado |
| --- | :-: |-----------------------| --- |
| `material` | Establece el material del objeto que se soltará. | [Material](#material) | ninguno |

<details> 

<summary align="center"><b>Ejemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - material: APPLE
    chance: 0.3
    amount: 5
```
Esto hará que la mafia suelte 5 *manzanas* con un 30% de probabilidad de soltarlo.

</div>

</details>

### Arenas: TRABAJO EN PROGRESO (no funciona actualmente)
Al hacer tablas de botín de arena, asegúrate de comenzar tu tabla de botín con `rawArenaReward:` en lugar de `uniqueLootList:`.

| Clave | Detalles | Valores              | Predeterminado |
| --- | :-: |---------------------| --- |
| `wave` | Establece la oleada en la que caerá esta entrada de botín. Solo para uso en arenas. | [Entero](#entero) | ninguno |
| `level` | Establece el nivel de la caída de botín. Solo para uso en arenas. | [Entero](#entero) | ninguno |

<details> 

<summary align="center"><b>Ejemplo</b></summary>

<div align="left">

```yml
rawArenaReward:
  - material: BREAD
    wave: 1
    amount: 10
    chance: 0.5
  - filename: palillo_de_magmaguys.yml
    wave: 1
    level: 2
```
Cuando los jugadores superen la primera oleada, esto hará que la arena suelte 10 *panes* con un 50% de probabilidad de soltarlo y 1 *palillo de dientes de MagmaGuy* de nivel 2 con un 100% de probabilidad de soltarlo.

</div>

</details>

### Mazmorras instanciadas:

| Clave | Detalles | Valores            | Predeterminado |
| --- | :-: |-------------------| --- |
| `difficultyID` | Establece la lista de dificultades de mazmorras instanciadas para las que caerá este botín. Solo para uso en mazmorras instanciadas. | [Texto](#texto) | ninguno |

<details> 

<summary align="center"><b>Ejemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: palillo_de_magmaguys.yml
    chance: 0.5
    difficultyID:
    - 1
    - 2
```
Esto hará que la mafia suelte 1 *palillo de dientes de MagmaGuy* con un 50% de probabilidad de soltarlo si los jugadores derrotaron al jefe en dificultad 1 o 2.

</div>

</details>





