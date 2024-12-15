[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Tabla de botín personalizada

Formato de botín universal. Utilizado por EliteMobs en varias ubicaciones diferentes.

Tenga en cuenta que este es el formato más reciente y el que se recomienda usar, pero existen algunos formatos antiguos alternativos.

Asegúrese de comenzar sus tablas de botín con `uniqueLootList:` antes de agregar cualquier configuración, de lo contrario, la configuración .yml generará un error.

### Dejar caer objetos de élite:

| Clave | Detalles | Valores                | Predeterminado |
| --- | :-: |-----------------------| --- |
| `filename` | Establece el nombre de archivo del objeto personalizado que se va a utilizar. | [Nombre de archivo](#filename) | ninguno |

<details>

<summary align="center"><b>Ejemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
```

Esto hará que el mob deje caer 1 *Palillo de dientes de MagmaGuy* con una posibilidad de caída del 100 %.

</div>

</details>

### Configuraciones generales:

| Clave | Detalles | Valores              | Predeterminado |
| --- | :-: |---------------------| --- |
| `chance` | Establece la posibilidad de que el botín caiga. | [Doble](#double)   | `1.0` |
| `amount` | Establece la cantidad de esta entrada de botín que se va a dejar caer | [Entero](#integer) | `1` |
| `ignorePlayerLevel` | Hace que el botín que caiga ignore el limitador de botín del jugador | [Booleano](#booleano) | `false` |

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

Esto hará que el mob deje caer 10 *Palillos de dientes de MagmaGuy* con una posibilidad de caída del 50 % ignorando el nivel del jugador.

</div>

</details>

### Dejar caer monedas de élite:

| Clave | Detalles | Valores              | Predeterminado |
| --- | :-: |---------------------| --- |
| `currencyAmount` | Establece la cantidad de monedas que se dejarán caer. | [Entero](#integer) | ninguno |

<details>

<summary align="center"><b>Ejemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - currencyAmount: 344
    chance: 0.5
```
Esto hará que el mob deje caer 344 *Monedas de Élite* con una posibilidad de caída del 50 %.

</div>

</details>

### Dejar caer objetos de vainilla:

| Clave | Detalles | Valores                | Predeterminado |
| --- | :-: |-----------------------| --- |
| `material` | Establece el material del objeto que se deja caer. | [Material](#material) | ninguno |

<details>

<summary align="center"><b>Ejemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - material: APPLE
    chance: 0.3
    amount: 5
```
Esto hará que el mob deje caer 5 *Manzanas* con una posibilidad de caída del 30 %.

</div>

</details>

### Arenas: EN PROCESO (No funciona actualmente)
Cuando cree tablas de botín de arenas, asegúrese de comenzar su tabla de botín con `rawArenaReward:` en lugar de `uniqueLootList:`.

| Clave | Detalles | Valores              | Predeterminado |
| --- | :-: |---------------------| --- |
| `wave` | Establece la ola en la que caerá esta entrada de botín. Solo para uso en arenas. | [Entero](#integer) | ninguno |
| `level` | Establece el nivel del botín que se deja caer. Solo para uso en arenas. | [Entero](#integer) | ninguno |

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
Cuando los jugadores superen la primera oleada, esto hará que la arena deje caer 10 *Panes* con una posibilidad de caída del 50 % y 1 *Palillo de dientes de MagmaGuy* de nivel 2 con una posibilidad de caída del 100 %.

</div>

</details>

### Mazmorras de instancia:

| Clave | Detalles | Valores            | Predeterminado |
| --- | :-: |-------------------| --- |
| `difficultyID` | Establece la lista de dificultades de mazmorras de instancia para las que caerá este botín. Solo para uso en mazmorras de instancia. | [Cadena](#string) | ninguno |

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
Esto hará que el mob deje caer 1 *Palillo de dientes de MagmaGuy* con una posibilidad de caída del 50 % si los jugadores vencieron al jefe en la dificultad 1 o 2.

</div>

</details>
