[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Creación de refuerzos personalizados

Si está interesado en invocar élites durante el combate para reforzar a un jefe, esta guía cubre eso en detalle.

## Pasos para crear un jefe personalizado:

1. Crea tu jefe personalizado principal que invocará a tu jefe personalizado
2. Crea un jefe personalizado para refuerzos. Tenga en cuenta que los jefes personalizados pueden ser más fuertes que los mobs vainilla, pero también pueden ser más débiles.
3. Agregue la línea de refuerzo correcta al archivo de configuración

## Creación de la línea de refuerzo

Supongamos que tiene un jefe personalizado con este formato:

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eVinculador de mundos
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
```

Y desea agregarle refuerzos. Aquí está el aspecto que podría tener uno de esos refuerzos:

```yaml
- summonType:ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

Y para que sea válido, agréguelo a la lista de poderes:

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eVinculador de mundos
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

El refuerzo ahora se agrega a la entidad jefe. Sin embargo, como puede ver, aquí hay varias opciones que puede personalizar. Vamos a cubrirlas.

## Todas las opciones de refuerzo personalizado

*Consejo: También puede usar EliteScript para invocar refuerzos, más información sobre eso [aquí]($language$/elitemobs/elitescript_actions.md&section=summon_reinforcement).*

<div align="center">

### summonType

Este es un campo obligatorio. Establece cuándo debe aparecer el refuerzo.

| Clave    |   Valores    | Predeterminado  |
|--------|:-----------:|:--------:|
| `summonType` | Especial [1] | `ON_HIT` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
summonType: ON_HIT
```

</div>

</details>

#### Especial [1]

| Clave | Descripción |
|-----|---------------------------------------------------------------------------------------------------|
|  `ONCE`   | Genera el refuerzo una vez, la primera vez que el jefe recibe un golpe. (puede depender de una posibilidad % de que suceda) |
| `ON_HIT`  | Genera el refuerzo cada vez que el jefe recibe un golpe (puede depender de una posibilidad % de que suceda)             |
| `ON_COMBAT_ENTER`    | Genera el refuerzo cuando el jefe entra en combate (1)                                                                                                  |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL`    |  Especial: esto es específicamente para colocar cristales del end para peleas de dragón cuando el jefe entra en combate(1)                                                                                                 |
| `GLOBAL`    | Genera refuerzos para cada jugador en el mismo mundo que el jefe. Los refuerzos aparecerán cerca de los jugadores, sin importar lo lejos que estén del jefe. ¡Esto requiere que el campo `customSpawn` esté configurado para que funcione!                                                                                                  |

_(1) Los jefes entran en combate cuando los golpean los jugadores o cuando detectan a un jugador dentro del alcance._

***

### filename

Este es un campo obligatorio, ya que establece qué refuerzo debe aparecer. La única excepción para que este campo sea obligatorio es cuando se utiliza la configuración `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`, ya que los cristales del end no son élites.

| Clave    |        Valores         | Predeterminado |
|--------|:---------------------:|:-------:|
| `filename` | [Nombre de archivo](#filename) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
filename: test_boss.yml
```

</div>

</details>

</div>

***

**Viabilidad mínima**

`summonType: SUMMON_TYPE` y `filename: nombrearchivo.yml` son suficientes por sí solos para crear un refuerzo personalizado. El siguiente ejemplo demuestra esto.

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eVinculador de mundos
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

*Sin embargo, si desea o necesita algo más complejo, siga leyendo a continuación para ver qué más puede hacer con estas opciones.*

</div>

</details>

</div>

<div align="center">

***

### chance

Este es un campo de configuración opcional creado para complementar las opciones `summonType` `ONCE` y `ON_HIT`. Representa la posibilidad de que aparezca el refuerzo personalizado cuando un jefe recibe un golpe.

| Clave    |        Valores         | Predeterminado |
|--------|:---------------------:|:-------:|
| `chance` | [Doble](#double) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
chance: 0.5
```
*Representa una probabilidad del 50 % de generar un refuerzo personalizado.*

</div>

</details>

***

### location

`location: x,y,z` es un campo de configuración opcional que permite a los administradores desplazar la ubicación del refuerzo por una cantidad de bloques. Aquí están los conceptos clave que necesita saber sobre esta opción:

**La ubicación de desplazamiento es relativa.** Esto significa que `location: 0,10,0` generará un jefe exactamente 10 bloques por encima del jefe, y no en las coordenadas mundiales 0,10,0.

**La ubicación relativa es diferente para los jefes regionales.** Los jefes regionales siempre usarán su punto de generación como origen para la ubicación relativa, lo que significa que si sabe dónde está el punto de generación del jefe y cuenta los bloques, puede hacer que los jefes de refuerzo aparezcan en posiciones de bloque extremadamente específicas, independientemente de dónde esté el jefe dragón. La guarida del Vinculador de mundos depende de esto para generar los jefes de la torre de desafío en posiciones de bloque extremadamente específicas, independientemente de dónde esté el jefe dragón.

**Los jefes aparecerán dentro de los bloques si no mide bien las distancias.**

| Clave    |      Valores       | Predeterminado |
|--------|:-----------------:|:-------:|
| `location` | [Cadena](#string) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
location: 0,10,0
```
*Para un jefe personalizado no regional, generará el refuerzo exactamente 10 bloques por encima del jefe, independientemente de dónde pueda estar.*

*Para un jefe personalizado regional, generará el refuerzo exactamente 10 bloques por encima del punto de generación del jefe regional, independientemente de dónde esté el jefe.*

</div>

</details>

_**Nota importante: ¡Este es un campo obligatorio para `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL` específicamente!**_

***

### lightningRod

Es una configuración especial que solo es útil para `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`. Esto le da a los cristales del end la capacidad de golpear el suelo a su alrededor con un retraso.

No se puede utilizar con los otros refuerzos personalizados, ya que estos deben depender de poderes para este tipo de habilidades.

| Clave    |       Valores        | Predeterminado |
|--------|:-------------------:|:-------:|
| `lightningRod` | [Booleano](#booleano) | `false` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
lightningRod: false
```

</div>

</details>

***

### inheritAggro

Es un campo de configuración opcional que hace que los refuerzos personalizados hereden los niveles de amenaza del jefe.

Esto es especialmente útil cuando desea que los refuerzos que aparecen ataquen a la persona que está infligiendo la mayor cantidad de daño.

| Clave    |       Valores        | Predeterminado |
|--------|:-------------------:|:-------:|
| `inheritAggro` | [Booleano](#booleano) | `false` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
inheritAggro: false
```

</div>

</details>

***

### amount

Es un campo de configuración opcional que establece la cantidad de refuerzos que aparecen.

| Clave    |       Valores        | Predeterminado |
|--------|:-------------------:|:-------:|
| `amount` | [Entero](#integer) |   `1`   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
amount: 1
```

</div>

</details>

***

### spawnNearby

Es un campo de configuración opcional que establece si el refuerzo personalizado debe aparecer cerca en lugar de encima del jefe o en una ubicación relativa específica.

Este método debería tener en cuenta correctamente la variación del terreno y no generar jefes dentro de las paredes, aunque en algunas configuraciones podría resultar en que aparezcan detrás de las paredes si el área de combate es demasiado pequeña. Tiene un radio de ~30 bloques.

| Clave    |       Valores        | Predeterminado |
|--------|:-------------------:|:-------:|
| `spawnNearby` | [Booleano](#booleano) | `false` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
spawnNearby: false
```

</div>

</details>

***

### inheritLevel

Es un campo de configuración opcional que establece si el refuerzo personalizado debe heredar el nivel del jefe personalizado al que está reforzando.

| Clave    |       Valores        | Predeterminado |
|--------|:-------------------:|:-------:|
| `inheritLevel` | [Booleano](#booleano) | `false` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
inheritLevel: false
```

</div>

</details>

***

### customSpawn

Es un campo de configuración que solo se usa para refuerzos globales. Utiliza la configuración de generación personalizada para establecer dónde podrán aparecer los refuerzos.

Esto se puede usar para hacer que los refuerzos puedan aparecer en la superficie, en lugares con luz, en biomas específicos, etc. Consulte la página de la wiki sobre [Generaciones personalizadas]($language$/elitemobs/creating_spawns.md) para obtener más detalles

| Clave    |        Valores         | Predeterminado |
|--------|:---------------------:|:-------:|
| `customSpawn` | [Nombre de archivo](#filename) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
customSpawn: normal_surface_spawn.yml
```

</div>

</details>

</div>

## Uniendo un gran refuerzo

Creemos un ejemplo de refuerzo utilizando la mayoría de los campos anteriores:

```yaml
- summonType: ON_COMBAT_ENTER
  filename: test_boss.yml
  spawnNearby: true
  inheritAggro: true
  inheritLevel: true
```

Esto hace lo siguiente:

- Crea un refuerzo personalizado
- El refuerzo personalizado aparecerá cuando el jefe personalizado entre en combate (`summonType: ON_COMBAT_ENTER`)
- El refuerzo personalizado invocado será el de `test_boss.yml` (`filename: test_boss.yml`)
- El refuerzo personalizado aparecerá a 30 bloques de la ubicación actual del jefe personalizado (`spawnNearby: true`)
- El refuerzo personalizado heredará el aggro del jefe personalizado que está reforzando, lo que significa que atacará al jugador que haya infligido la mayor cantidad de daño (`inheritAggro: true`)
- Independientemente de la configuración en `test_boss.yml`, el refuerzo personalizado tendrá el mismo nivel que el jefe personalizado al que está reforzando (`inheritLevel: true`)

```yaml
- summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL
  location: -80,10,0
  lightningRod: true
```

Esto hace lo siguiente:

- Crea un refuerzo personalizado
- El refuerzo personalizado será un cristal del end que se colocará cuando comience el combate (`summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`)
- El cristal del end golpeará el suelo con rayos con un retraso (`lightningRod: true`)

Ahora para aplicar esto al jefe personalizado:

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eVinculador de mundos
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: test_boss.yml
  spawnNearby: true
  inheritAggro: true
  inheritLevel: true
- summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL
  location: -80,10,0
  lightningRod: true
```

¡Y listo! Aquí hay algunos consejos más:

- Los campos se pueden establecer en cualquier orden, aunque se recomienda tener siempre `summonable` primero.
- Esta es una gran mejora en el antiguo sistema de refuerzos, que ya no aparece en la lista. No se recomienda depender de él en este momento, ya que puede dejar de funcionar en el futuro.
