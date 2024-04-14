# Creando Refuerzos Personalizados

Si estás interesado en invocar elites durante el combate para reforzar a un jefe, esta guía cubre eso en detalle.

## Pasos para crear un jefe personalizado:

1. Crea tu jefe personalizado principal que invocará a tu jefe personalizado
2. Crea un jefe personalizado para los refuerzos. Ten en cuenta que los jefes personalizados pueden ser más fuertes que los mobs vainilla, pero también pueden ser más débiles.
3. Añade la línea de refuerzo correcta al archivo de configuración

## Creando la línea de refuerzo

Supongamos que tienes un jefe personalizado con este formato:

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eBinder of Worlds
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
```

Y quieres añadir refuerzos a él. Aquí es cómo podría verse un refuerzo de este tipo:

```yaml
- summonType:ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

Y para hacerlo válido, añádelo a la lista de poderes:

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eBinder of Worlds
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

El refuerzo ya está añadido a la entidad del jefe. Sin embargo, como puedes ver, hay varias opciones aquí que puedes personalizar. Vamos a tratarlas.

## Todas las opciones de Refuerzo Personalizado

*Sugerencia: También puedes usar EliteScript para invocar refuerzos, más sobre eso [aquí]($language$/elitemobs/elitescript_actions.md&section=summon_reinforcement).*

<div align="center">

### summonType

Este es un campo obligatorio. Determina cuándo debe aparecer el refuerzo.

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

| Clave | Descripción                                                                                       |
|-----|---------------------------------------------------------------------------------------------------|
|  `ONCE`   | Aparece el refuerzo una vez, la primera vez que el jefe es golpeado. (puede depender de un% de posibilidades de suceder) |
| `ON_HIT`  | Aparece el refuerzo cada vez que el jefe recibe un golpe (puede depender de un% de posibilidades de suceder)             |
| `ON_COMBAT_ENTER`    | Aparece el refuerzo cuando el jefe entra en combate (1)                                                                                                  |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL`    |  Especial: esto es específicamente para colocar cristales finales para las peleas de dragones cuando el jefe entra en combate(1)                                                                                                 |
| `GLOBAL`    |  Aparece refuerzos para cada jugador en el mismo mundo que el jefe. Los refuerzos aparecerán cerca de los jugadores, sin importar qué tan lejos estén del jefe. ¡Esto requiere que el campo `customSpawn` esté configurado para funcionar!                                                                                                 |

_(1) Los jefes entran en combate ya sea cuando son golpeados por los jugadores o cuando detectan a un jugador dentro del rango._

***

### filename

Este también es un campo obligatorio ya que establece qué refuerzo debe aparecer. La única excepción para hacer este campo obligatorio es cuando se utiliza la configuración `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`, ya que los cristales finales no son elites.

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

**Viabilidad Mínima**

`summonType: SUMMON_TYPE` y `filename: filename.yml` son suficientes por sí solos para crear un Refuerzo Personalizado. El siguiente ejemplo demuestra esto.

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eBinder of Worlds
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

*Sin embargo, si quieres o necesitas algo más complejo, sigue leyendo a continuación para ver qué más puedes hacer con estas opciones.*

</div>

</details>

</div>

<div align="center">

***

### chance

Este es un campo opcional de configuración creado para complementar las opciones `summonType` `ONCE` y `ON_HIT`. Representa la posibilidad de que el Refuerzo Personalizado aparezca cuando un jefe recibe un golpe.

| Clave    |        Valores         | Predeterminado |
|--------|:---------------------:|:-------:|
| `chance` | [Doble](#double) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
chance: 0.5
```
*Representa un 50% de posibilidades de que aparezca un Refuerzo Personalizado.*

</div>

</details>

***

### location

`location: x,y,z` es un campo opcional de configuración que permite a los administradores desplazar la ubicación del refuerzo por una cantidad de bloques. Aquí están los conceptos clave que necesitas saber sobre esta opción:

**La ubicación del offset es relativa.** Esto significa que `location: 0,10,0` aparecerá un jefe exactamente 10 bloques por encima del jefe, y no en las coordenadas del mundo 0,10,0.


**La ubicación relativa es diferente para los jefes regionales.** Los jefes regionales siempre utilizarán su punto de aparición como el origen de la ubicación relativa, lo que significa que si sabes dónde está el punto de aparición del jefe y cuentas los bloques, puedes conseguir que los jefes de refuerzo aparezcan en ubicaciones específicas. La guarida de Binder of Worlds se basa en esto para hacer aparecer a los jefes de la torre de desafío en posiciones de bloque extremadamente específicas, independientemente de dónde esté el jefe dragón.


**Los jefes aparecerán dentro de los bloques si te equivocas al medir las distancias.**

| Clave    |      Valores       | Predeterminado |
|--------|:-----------------:|:-------:|
| `location` | [Cadena](#string) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
location: 0,10,0
```
*Para un Jefe Personalizado no regional hará aparecer el refuerzo exactamente 10 bloques por encima del jefe, independientemente de dónde pueda estar.*

*Para un Jefe Personalizado regional hará aparecer el refuerzo exactamente 10 bloques por encima del punto de aparición del jefe regional, independientemente de dónde esté el jefe.*

</div>

</details>

_**Nota importante: ¡Este es un campo obligatorio para `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL` específicamente!**_

***

### lightningRod

Es una configuración especial útil sólo para `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`. Esto da a los cristales finales la habilidad de fulminar el suelo a su alrededor con un retraso.

No se puede usar con los otros Refuerzos Personalizados, ya que esos deberían depender de los poderes para este tipo de habilidades.

| Clave    |       Valores        | Predeterminado |
|--------|:-------------------:|:-------:|
| `lightningRod` | [Booleano](#boolean) | `false` |

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

Es un campo opcional de configuración que hace que los Refuerzos Personalizados hereden los niveles de amenaza del jefe.

Esto es especialmente útil cuando quieres que los refuerzos que aparecen se dirijan a la persona que está causando la mayor cantidad de daño.

| Clave    |       Valores        | Predeterminado |
|--------|:-------------------:|:-------:|
| `inheritAggro` | [Booleano](#boolean) | `false` |

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

Es un campo opcional de configuración que establece la cantidad de Refuerzos que aparecen.

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

Es un campo opcional de configuración que establece si el Refuerzo Personalizado debe aparecer cerca en lugar de encima del jefe o en una ubicación relativa específica.

Este método debería tener en cuenta correctamente la variación del terreno, y no hacer aparecer a los jefes dentro de las paredes, aunque en algunas configuraciones podría resultar en que aparezcan detrás de las paredes si el área de combate es demasiado pequeña. Tiene un radio de ~30 bloques.

| Clave    |       Valores        | Predeterminado |
|--------|:-------------------:|:-------:|
| `spawnNearby` | [Booleano](#boolean) | `false` |

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

Es un campo opcional de configuración que establece si el Refuerzo Personalizado debe heredar el nivel del Jefe Personalizado que está reforzando.

| Clave    |       Valores        | Predeterminado |
|--------|:-------------------:|:-------:|
| `inheritLevel` | [Booleano](#boolean) | `false` |

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

Es un campo de configuración que sólo se utiliza para los refuerzos globales. Utiliza los ajustes de aparición personalizados para establecer dónde podrán aparecer los refuerzos.

Esto se puede usar para hacer que los refuerzos puedan aparecer en la superficie, en lugares con luz, en biomas específicos y así sucesivamente. Consulta la página wiki sobre [Apariciones Personalizadas]($language$/elitemobs/creating_spawns.md) para más detalles

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

## Ensamblando un gran refuerzo

Vamos a crear un refuerzo de ejemplo usando la mayoría de los campos anteriores:

```yaml
- summonType: ON_COMBAT_ENTER
  filename: test_boss.yml
  spawnNearby: true
  inheritAggro: true
  inheritLevel: true
```

Esto hace lo siguiente:

- Crea un Refuerzo Personalizado
- El Refuerzo Personalizado aparecerá cuando el Jefe Personalizado entre en combate (`summonType: ON_COMBAT_ENTER`)
- El Refuerzo Personalizado invocado será el del `test_boss.yml` (`filename: test_boss.yml`)
- El Refuerzo Personalizado aparecerá dentro de los 30 bloques de la ubicación actual del Jefe Personalizado (`spawnNearby: true`)
- El Refuerzo Personalizado heredará la agresión del Jefe Personalizado que está reforzando, es decir, atacará al jugador que ha infligido el mayor daño (`inheritAggro: true`)
- Independientemente de la configuración en `test_boss.yml`, el Refuerzo Personalizado tendrá el mismo nivel que el Jefe Personalizado que está reforzando (`inheritLevel: true`)

```yaml
- summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL
  location: -80,10,0
  lightningRod: true
```

Esto hace lo siguiente:

- Crea un Refuerzo Personalizado
- El Refuerzo Personalizado será un Cristal Finito que se colocará cuando comienza el combate (`summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`)
- El Cristal Final fulminará el suelo alrededor con un retraso (`lightningRod: true`)

Ahora para aplicar esto al Jefe Personalizado:

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eBinder of Worlds
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

¡Y ya está hecho! Aquí hay unos cuantos consejos más:

- Los campos pueden establecerse en cualquier orden, ¡aunque se recomienda siempre tener `summonable` en primer lugar!
- Esto es una gran mejora sobre el antiguo sistema de refuerzos, que ya no se enumera. No se recomienda depender de él en este momento, ya que puede dejar de funcionar en el futuro.