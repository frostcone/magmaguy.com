[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

Los Cofres del Tesoro son una función que permite a los administradores hacer cofres que pueden, o bien soltar botín, o bien hacer aparecer un jefe imitador (hostil).

<div align="center">

<div align="left">

## Valores

</div>

### isEnabled

Establece si un cofre del tesoro está habilitado.

| Clave      |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `isEnabled` | [Boolean](#boolean) | `true`  |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### chestType

Establece el tipo de material del cofre.

| Clave      |        Valores         | Predeterminado |
|-----------|:---------------------:|:-------:|
| `chestType` | [Material](#material) | `CHEST` |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
chestType: CHEST
```
*Esto necesita ser un material válido de cofre como `CHEST` o `BARREL`*.

<div align="center">

![create_chest_material.jpg](../../../img/wiki/create_chest_material.jpg)

</div>

</div>

</details>

***

### facing

Establece la orientación del cofre.

| Clave      |   Valores    | Predeterminado |
|-----------|:-----------:|:-------:|
| `facing` | Especial [1] | `CHEST` |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
facing: CHEST
```
*Esto tiene que ser un material de cofre válido como `CHEST` o `BARREL`*.

</div>

</details>

**Especial [1]**

<details> 

<summary><b>Expandir Tabla</b></summary>

| Orientación  |
|---------|
| `NORTH` |
| `SOUTH` |
| `WEST`  |
| `EAST`  |

</details>

***

### dropStyle

Establece si el cofre está destinado a ser soltado para un jugador o múltiples jugadores.

Los cofres `SINGLE` desaparecen después de ser abiertos y reaparecen cuando se reabastecen. Los cofres `GROUP` permanecen y les informan a los jugadores individuales que están en tiempo de enfriamiento.

| Clave      |       Valores       | Predeterminado |
|-----------|:------------------:|:-------:|
| `dropStyle` | `SINGLE` / `GROUP` | `SINGLE` |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
dropStyle: SINGLE
```

</div>

</details>

***

### lootList

Hace una lista del botín que el cofre del tesoro debe soltar cuando se abre.

| Clave       |                        Valores                        | Predeterminado |
|-----------|:----------------------------------------------------:|:-------:|
| `lootList` | [Tabla de Botín EM]($idioma$/elitemobs/loot_tables.md) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
lootList:
- filename=elite_scrap_tiny.yml:chance=0.90
- magmaguys_toothpick.yml
```

</div>

</details>

***

### mimicChance

Establece la posibilidad de hacer aparecer un jefe hostil en lugar de soltar botín.

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `mimicChance` | [Double](#double) |   `0`   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
mimicChance: 0.5
```

</div>

</details>

***

### mimicCustomBossesList

Especifica la lista de los jefes hostiles disponibles para la aparición. Un jefe solitario será seleccionado aleatoriamente de esta lista para su aparición.

La lista también soporta un sistema de ponderaciones que puedes implementar para asegurar que algunos jefes son elegidos más a menudo que los demás.

| Key       |      Values       | Default |
|-----------|:-----------------:|:-------:|
| `mimicCustomBossesList` | [Lista de Cadenas](#string_list) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
mimicCustomBossesList:
- my_cool_mimic_boss.yml
- weak_mimic_boss.yml
```
*Si deseas asignar ponderaciones a los jefes, la lista debería estar formateada de la siguiente manera:*

```yml
mimicCustomBossesList:
- my_cool_mimic_boss.yml:60
- weak_mimic_boss.yml:40
```

*En esta configuración, es más probable que `my_cool_mimic_boss.yml` sea elegido para la aparición que `weak_mimic_boss.yml`.*

</div>

</details>

***

### restockTimer

Establece el tiempo, en minutos, antes de que el cofre se rellene con botín.

| Key       |      Values       | Default |
|-----------|:-----------------:|:-------:|
| `restockTimer` | [Entero](#integer) |   `0`   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
restockTimer: 30
```

</div>

</details>

***

### effects

Establece los efectos de partículas que realizará el cofre.

| Key       |      Values       | Default |
|-----------|:-----------------:|:-------:|
| `effects` | [Partículas](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
effects:
- DRIP_LAVA
- SMOKE_NORMAL
```

<div align="center">

![create_chest_effects.jpg](../../../img/wiki/create_chest_effects.jpg)

</div>

</div>

</details>

***

### locations

Establece las ubicaciones donde aparecerá el cofre del tesoro.

Las ubicaciones se pueden establecer más fácilmente a través de `/em addTreasureChest <archivodeltesoro.yml>

| Key       |           Values            | Predeterminado |
|-----------|:---------------------------:|:-------:|
| `locations` | [Lista de Cadenas](#string_list) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
locations:
- my_world,10,50,10,0,0
- my_nether_world,12,58,12,0,0
```

</div>

</details>

***

### chestTier

Establece el rango mínimo de la guild requerido para abrir el cofre.

| Key       |           Values            | Predeterminado |
|-----------|:---------------------------:|:-------:|
| `chestTier` | [Entero](#integer) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
chestTier: 3
```

</div>

</details>

***

### restockTime

Después de que un cofre ha sido saqueado, el plugin escribirá esta clave para seguir el tiempo de reabastecimiento.

**NO ESTABLECER ESTE VALOR MANUALMENTE**.

| Key       |     Values     | Predeterminado |
|-----------|:--------------:|:-------:|
| `restockTime` | Marca de tiempo Unix |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
restockTime: 1707394380
```

</div>

</details>

</div>

***

<details> 

<summary align="center"><b>Ejemplo Config. de Cofre del Tesoro</b></summary>

<div align="left">

```yml
isEnabled: true
chestType: CHEST
facing: NORTH
dropStyle: MULTIPLE
lootList:
- filename=elite_scrap_tiny.yml:chance=0.90
- magmaguys_toothpick.yml:chance=0.95
mimicChance: 0.50
mimicCustomBossesList:
- balrog.yml
- killer_rabbit_of_caerbannog.yml
restockTimer: 1
effects: SMOKE_NORMAL
locations:
- world,0.0,-60.0,-14.0,0.0,0.0
```

<div align="center">

![create_chest_chest.jpg](../../../img/wiki/create_chest_chest.jpg)

</div>

</div>

</details>