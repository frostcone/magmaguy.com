# Creando refuerzos personalizados

Si estás interesado en invocar élites durante el combate para reforzar a un jefe, esta guía lo cubre en detalle.

## Pasos para crear un jefe personalizado:

1. Crea tu jefe personalizado principal que invocará a tu jefe personalizado.
2. Crea un jefe personalizado para refuerzos. Ten en cuenta que los jefes personalizados pueden ser más fuertes que las turbas de vainilla, pero también pueden ser más débiles.
3. Agrega la línea de refuerzo correcta al archivo de configuración.

## Creando la línea de refuerzo

Supongamos que tienes un jefe personalizado con este formato:

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eAtador de mundos
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
```

Y quieres agregarle refuerzos. Así es como podría verse uno de esos refuerzos:

```yaml
- summonType:ON_COMBAT_ENTER
  filename: refuerzo_de_parkour_de_fase_1_de_atador_de_mundos.yml
```

Y para que sea válido, agrégalo a la lista de poderes:

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eAtador de mundos
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: refuerzo_de_parkour_de_fase_1_de_atador_de_mundos.yml
```

El refuerzo ahora se agrega a la entidad jefe. Sin embargo, como puedes ver, hay varias opciones aquí que puedes personalizar. Vamos a cubrirlos.

## Todas las opciones de refuerzo personalizado

*Consejo: también puedes usar EliteScript para invocar refuerzos, más sobre eso [aquí]($language$/elitemobs/elitescript_actions.md&section=summon_reinforcement).*

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

| Clave | Descripción                                                                                       |
|-----|---------------------------------------------------------------------------------------------------|
|  `ONCE`   | Genera el refuerzo una vez, la primera vez que el jefe es golpeado. (puede depender de un % de probabilidad de que suceda) |
| `ON_HIT`  | Genera el refuerzo cada vez que el jefe es golpeado (puede depender de un % de probabilidad de que suceda)             |
| `ON_COMBAT_ENTER`    | Genera el refuerzo cuando el jefe entra en combate (1)                                                                                                  |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL`    |  Especial: esto es específicamente para colocar cristales finales para peleas de dragones cuando el jefe entra en combate (1)                                                                                                 |
| `GLOBAL`    |  Genera refuerzos para cada jugador en el mismo mundo que el jefe. Los refuerzos aparecerán cerca de los jugadores, sin importar qué tan lejos estén del jefe. ¡Esto requiere que el campo `customSpawn` esté configurado para funcionar!                                                                                                 |

_(1) Los jefes entran en combate cuando son golpeados por jugadores o cuando detectan a un jugador dentro del alcance._

***

### filename

Este es un campo obligatorio ya que establece qué refuerzo debe aparecer. La única excepción para hacer que este campo sea obligatorio es cuando se usa la configuración `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`, ya que los cristales finales no son élites.

| Clave    |        Valores         | Predeterminado |
|--------|:---------------------:|:-------:|
| `filename` | [Nombre de archivo](#nombre_de_archivo) |  ninguno   |

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

`summonType: TIPO_DE_INVOCACIÓN` y `filename: nombredearchivo.yml` son suficientes por sí solos para crear un refuerzo personalizado. El siguiente ejemplo demuestra esto.

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eAtador de mundos
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: refuerzo_de_parkour_de_fase_1_de_atador_de_mundos.yml
```

*Sin embargo, si quieres o necesitas algo más complejo, sigue leyendo a continuación para ver qué más puedes hacer con estas opciones.*

</div>

</details>

</div>

<div align="center">

***

### chance

Este es un campo de configuración opcional hecho para complementar las opciones `summonType` `ONCE` y `ON_HIT`. Representa la posibilidad de que aparezca el refuerzo personalizado cuando se golpea a un jefe.

| Clave    |        Valores         | Predeterminado |
|--------|:---------------------:|:-------:|
| `chance` | [Doble](#doble) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
chance: 0.5
```
*Representa un 50% de probabilidad de generar un refuerzo personalizado.*

</div>

</details>

***

### location

`location: x,y,z` es un campo de configuración opcional que permite a los administradores compensar la ubicación del refuerzo en una cantidad de bloques. Estos son los conceptos clave que necesitas saber sobre esta opción:

**La ubicación del desplazamiento es relativa.** Esto significa que `location: 0,10,0` generará un jefe exactamente 10 bloques por encima del jefe, y no en las coordenadas mundiales 0,10,0.


**La ubicación relativa es diferente para los jefes regionales.** Los jefes regionales siempre usarán su punto de generación como origen para la ubicación relativa, lo que significa que si sabes dónde está el punto de generación del jefe y cuentas los bloques, puedes hacer que los jefes de refuerzo aparezcan en ubicaciones específicas. La guarida del Atador de mundos se basa en esto para generar a los jefes de la torre de desafío en posiciones de bloques extremadamente específicas, independientemente de dónde se encuentre el jefe dragón.


**Los jefes aparecerán dentro de los bloques si te equivocas al medir las distancias.**

| Clave    |      Valores       | Predeterminado |
|--------|:-----------------:|:-------:|
| `location` | [Texto](#texto) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
location: 0,10,0
```
*Para un jefe personalizado no regional, el refuerzo aparecerá exactamente 10 bloques por encima del jefe, independientemente de dónde esté.*

*Para un jefe personalizado regional, el refuerzo aparecerá exactamente 10 bloques por encima del punto de generación del jefe regional, independientemente de dónde esté el jefe.*

</div>

</details>

_**¡Nota importante: Este es un campo obligatorio específicamente para `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`!**_

***

### lightningRod

Es una configuración especial que solo es útil para `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`. Esto les da a los cristales finales la capacidad de golpear el suelo a su alrededor con un retraso.

No se puede usar con los otros refuerzos personalizados, ya que esos deberían depender de los poderes para este tipo de habilidades.

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

Esto es especialmente útil cuando quieres que los refuerzos que aparecen apunten a la persona que está infligiendo la mayor cantidad de daño.

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
| `amount` | [Entero](#entero) |   `1`   |

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

Este método debe tener en cuenta correctamente la variación del terreno y no generar jefes dentro de las paredes, aunque en algunas configuraciones puede resultar que aparezcan detrás de las paredes si el área de combate es demasiado pequeña. Tiene un radio de ~30 bloques.

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

Es un campo de configuración opcional que establece si el refuerzo personalizado debe heredar el nivel del jefe personalizado que está reforzando.

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

Es un campo de configuración que solo se utiliza para refuerzos globales. Utiliza la configuración de generación personalizada para establecer dónde podrán aparecer los refuerzos.

Esto se puede usar para hacer que los refuerzos puedan aparecer en la superficie, en lugares con luz, en biomas específicos, etc. Consulta la página wiki sobre [Generaciones personalizadas]($language$/elitemobs/creating_spawns.md) para obtener más detalles.

| Clave    |        Valores         | Predeterminado |
|--------|:---------------------:|:-------:|
| `customSpawn` | [Nombre de archivo](#nombre_de_archivo) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
customSpawn: generación_superficie_normal.yml
```

</div>

</details>

</div>

## Armando un gran refuerzo

Creemos un ejemplo de refuerzo utilizando la mayoría de los campos anteriores:

```yaml
- summonType: ON_COMBAT_ENTER
  filename: test_boss.yml
  spawnNearby: true
  inheritAggro: true
  inheritLevel: true
```

Esto hace lo siguiente:

- Crea un refuerzo personalizado.
- El refuerzo personalizado aparecerá cuando el jefe personalizado entre en combate (`summonType: ON_COMBAT_ENTER`).
- El refuerzo personalizado invocado será el de `test_boss.yml` (`filename: test_boss.yml`).
- El refuerzo personalizado aparecerá dentro de los 30 bloques de la ubicación actual del jefe personalizado (`spawnNearby: true`).
- El refuerzo personalizado heredará el agro del jefe personalizado que está reforzando, lo que significa que atacará al jugador que ha infligido más daño (`inheritAggro: true`).
- Independientemente de la configuración en `test_boss.yml`, el refuerzo personalizado tendrá el mismo nivel que el jefe personalizado que está reforzando (`inheritLevel: true`).

```yaml
- summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL
  location: -80,10,0
  lightningRod: true
```

Esto hace lo siguiente:

- Crea un refuerzo personalizado.
- El refuerzo personalizado será un cristal final que se coloca cuando comienza el combate (`summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`).
- El cristal final golpeará el suelo a su alrededor con un retraso (`lightningRod: true`).

Ahora para aplicar esto al jefe personalizado:

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eAtador de mundos
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

¡Y has terminado! Aquí hay algunos consejos más:

- Los campos se pueden establecer en cualquier orden, ¡aunque se recomienda tener siempre `summonable` primero!
- Esta es una gran mejora en el antiguo sistema de refuerzos, que ya no aparece en la lista. No se recomienda confiar en él en este momento, ya que puede dejar de funcionar en el futuro.


