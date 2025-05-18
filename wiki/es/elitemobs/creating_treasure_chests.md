```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

Los Cofres del Tesoro son una característica que permite a los administradores crear cofres que pueden soltar botín o generar un jefe mímico (hostil).

<div align="center">

<div align="left">

## Valores

</div>

### isEnabled

Establece si un cofre del tesoro está habilitado.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `isEnabled` | [Booleano](#boolean) | `true`  |

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

| Clave       |        Valores         | Predeterminado |
|-----------|:---------------------:|:-------:|
| `chestType` | [Material](#material) | `CHEST` |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
chestType: CHEST
```
*Esto debe ser un material de cofre válido como `CHEST` o `BARREL`*.

<div align="center">

![create_chest_material.jpg](../../../img/wiki/create_chest_material.jpg)

</div>

</div>

</details>

***

### facing

Establece la dirección en la que mira el cofre.

| Clave       |   Valores    | Predeterminado |
|-----------|:-----------:|:-------:|
| `facing` | Especial [1] | `CHEST` |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
facing: CHEST
```
*Esto debe ser un material de cofre válido como `CHEST` o `BARREL`*.

</div>

</details>

**Especial [1]**

<details> 

<summary><b>Expandir Tabla</b></summary>

| Orientación |
|---------|
| `NORTH` |
| `SOUTH` |
| `WEST`  |
| `EAST`  |


</details>

***

### dropStyle

Establece si el cofre está destinado a ser soltado para un jugador o para varios jugadores.

Los cofres `SINGLE` desaparecen después de ser abiertos y reaparecen cuando se reabastecen. Los cofres `GROUP` permanecen y permiten a los jugadores individuales saber que están en tiempo de espera.

| Clave       |       Valores       | Predeterminado |
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

Enumera el botín que el cofre del tesoro debe soltar al ser abierto.

| Clave       |                        Valores                        | Predeterminado |
|-----------|:----------------------------------------------------:|:-------:|
| `lootList` | [Tabla de Botín de EM]($language$/elitemobs/loot_tables.md) |  ninguno   |

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

Establece la probabilidad de generar un jefe hostil en lugar de soltar botín.

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `mimicChance` | [Doble](#double) |   `0`   |

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

Especifica la lista de jefes hostiles disponibles para ser generados. Se seleccionará aleatoriamente un solo jefe de esta lista para su generación.

La lista también admite un sistema de peso que puedes implementar para asegurar que algunos jefes sean elegidos con más frecuencia que otros.

| Clave       |      Valores       | Predeterminado |
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
*Si deseas asignar pesos a los jefes, la lista debe tener el siguiente formato:*

```yml
mimicCustomBossesList:
- my_cool_mimic_boss.yml:60
- weak_mimic_boss.yml:40
```

*En esta configuración, es más probable que se elija `my_cool_mimic_boss.yml` para ser generado que `weak_mimic_boss.yml`.*

</div>

</details>

***

### restockTimer

Establece el tiempo, en minutos, antes de que el cofre se rellene con botín.

| Clave       |      Valores       | Predeterminado |
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

Establece los efectos de partículas que hará el cofre.

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `effects` | [Partícula](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) |  ninguno   |

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

Las ubicaciones se pueden establecer más fácilmente a través de `/em addTreasureChest <nombrearchivocofredeltesoro.yml>`.

| Clave       |           Valores            | Predeterminado |
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

Establece el rango mínimo de gremio requerido para abrir el cofre.

| Clave       |           Valores            | Predeterminado |
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

### instanced

Establece si el cofre debe ser instanciado (para usar en mazmorras instanciadas).
Todos los temporizadores de reabastecimiento se desactivan cuando los cofres se colocan en mazmorras.

**NO ESTABLEZCAS ESTE VALOR MANUALMENTE**.

| Clave       |     Valores     | Predeterminado |
|-----------|:--------------:|:-------:|
| `instanced` | [Booleano](#boolean) |  `false`   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
instanced: true
```

</div>

</details>

</div>

***

### restockTime

Después de que un cofre ha sido saqueado, el plugin escribirá esta clave para rastrear el tiempo de reabastecimiento.

**NO ESTABLEZCAS ESTE VALOR MANUALMENTE**.

| Clave       |     Valores     | Predeterminado |
|-----------|:--------------:|:-------:|
| `restockTime` | Marca de Tiempo Unix |  ninguno   |

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

<summary align="center"><b>Ejemplo de Configuración de Cofre del Tesoro</b></summary>

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
```