# Creación de Refuerzos Personalizados

Si estás interesado en invocar élites durante el combate para reforzar a un jefe, esta guía cubre ese tema en detalle.

## Pasos para crear un jefe personalizado:

1. Crea tu jefe personalizado principal que invocará a tu jefe personalizado.
2. Crea un jefe personalizado para los refuerzos. Ten en cuenta que los jefes personalizados pueden ser más fuertes que
   los mobs vanilla, pero también pueden ser más débiles.
3. Añade la línea de refuerzo correcta al archivo de configuración.

## Creando la línea de refuerzo

Supongamos que tienes un jefe personalizado con este formato:

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eLigador de Mundos
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
```

Y quieres añadirle refuerzos. Así es como podría verse uno de esos refuerzos:

```yaml
- summonType: ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

Y para que sea válido, añádelo a la lista de poderes:

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eLigador de Mundos
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

El refuerzo ahora está añadido a la entidad jefe. Sin embargo, como puedes ver, hay varias opciones que puedes
personalizar. Vamos a cubrirlas.

## Todas las opciones de Refuerzo Personalizado

*Consejo: También puedes usar EliteScript para invocar refuerzos, más información sobre
eso [aquí]($language$/elitemobs/elitescript_actions.md&section=summon_reinforcement).*

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

| Clave                           | Descripción                                                                                                                                                                                                                              |
|---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ONCE`                          | Aparece el refuerzo una vez, la primera vez que el jefe es golpeado. (puede depender de una % de probabilidad de que suceda)                                                                                                             |
| `ON_HIT`                        | Aparece el refuerzo cada vez que el jefe es golpeado (puede depender de una % de probabilidad de que suceda)                                                                                                                             |
| `ON_COMBAT_ENTER`               | Aparece el refuerzo cuando el jefe entra en combate (1)                                                                                                                                                                                  |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL` | Especial: esto es específicamente para colocar cristales de end para las peleas de dragón cuando el jefe entra en combate (1)                                                                                                            |
| `GLOBAL`                        | Aparece refuerzos para cada jugador en el mismo mundo que el jefe. Los refuerzos aparecerán cerca de los jugadores, sin importar lo lejos que estén del jefe. ¡Esto requiere que el campo `customSpawn` esté configurado para funcionar! |

_(1) Los jefes entran en combate cuando son golpeados por los jugadores o cuando detectan a un jugador dentro de su
rango._

***

### filename

Este es un campo obligatorio, ya que establece qué refuerzo debe aparecer. La única excepción para que este campo sea
obligatorio es cuando se utiliza la configuración `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`, ya que los cristales de
end no son élites.

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

`summonType: SUMMON_TYPE` y `filename: filename.yml` son suficientes por sí solos para crear un Refuerzo Personalizado.
El siguiente ejemplo demuestra esto.

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eLigador de Mundos
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

*Sin embargo, si quieres o necesitas algo más complejo, sigue leyendo a continuación para ver qué más puedes hacer con
estas opciones.*

</div>

</details>

</div>

<div align="center">

***

### chance

Este es un campo de configuración opcional creado para complementar las opciones `summonType` `ONCE` y `ON_HIT`.
Representa la probabilidad de que aparezca el Refuerzo Personalizado cuando un jefe es golpeado.

| Clave    |     Valores     | Predeterminado |
|----------|:---------------:|:--------------:|
| `chance` | [Doble](#doble) |    ninguno     |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
chance: 0.5
```

*Representa una probabilidad del 50% de que aparezca un Refuerzo Personalizado.*

</div>

</details>

***

### location

`location: x,y,z` es un campo de configuración opcional que permite a los administradores desplazar la ubicación del
refuerzo por un número de bloques. Estos son los conceptos clave que necesitas saber sobre esta opción:

**La ubicación de desplazamiento es relativa.** Esto significa que `location: 0,10,0` hará aparecer un jefe exactamente
10 bloques por encima del jefe, y no en las coordenadas mundiales 0,10,0.

**La ubicación relativa es diferente para los jefes regionales.** Los jefes regionales siempre utilizarán su punto de
aparición como origen de la ubicación relativa, lo que significa que si sabes dónde está el punto de aparición del jefe
y cuentas los bloques, puedes hacer que los jefes de refuerzo aparezcan en ubicaciones de bloques específicas. La
guarida del Ligador de Mundos se basa en esto para hacer aparecer a los jefes de la torre de desafío en posiciones de
bloques extremadamente específicas, independientemente de dónde esté el jefe dragón.

**Los jefes aparecerán dentro de los bloques si te equivocas al medir las distancias.**

| Clave      |      Valores      | Predeterminado |
|------------|:-----------------:|:--------------:|
| `location` | [Cadena](#cadena) |    ninguno     |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
location: 0,10,0
```

*Para un jefe personalizado no regional hará aparecer el refuerzo exactamente 10 bloques por encima del jefe,
independientemente de dónde se encuentre.*

*Para un jefe personalizado regional hará aparecer el refuerzo exactamente 10 bloques por encima del punto de aparición
del jefe regional, independientemente de dónde esté el jefe.*

</div>

</details>

_**Nota importante: ¡Este es un campo obligatorio para `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL` específicamente!**_

***

### lightningRod

Es una configuración especial que solo es útil para `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`. Esto da a los cristales
de end la capacidad de castigar el suelo a su alrededor con un retraso.

No se puede usar con los otros Refuerzos Personalizados, ya que estos deben depender de los poderes para este tipo de
habilidades.

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

Es un campo de configuración opcional que hace que los Refuerzos Personalizados hereden los niveles de amenaza del jefe.

Esto es especialmente útil cuando quieres que los refuerzos que aparecen se dirijan a la persona que está infligiendo la
mayor cantidad de daño.

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

Es un campo de configuración opcional que establece la cantidad de Refuerzos que aparecen.

| Clave    |      Valores      | Predeterminado |
|----------|:-----------------:|:--------------:|
| `amount` | [Entero](#entero) |      `1`       |

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

Es un campo de configuración opcional que establece si el Refuerzo Personalizado debe aparecer cerca en lugar de encima
del jefe o en una ubicación relativa específica.

Este método debería tener en cuenta correctamente la variación del terreno y no hacer aparecer jefes dentro de las
paredes, aunque en algunas configuraciones podría resultar en que aparezcan detrás de las paredes si el área de combate
es demasiado pequeña. Tiene un radio de ~30 bloques.

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

Es un campo de configuración opcional que establece si el Refuerzo Personalizado debe heredar el nivel del Jefe
Personalizado que está reforzando.

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

Es un campo de configuración que solo se utiliza para los refuerzos globales. Utiliza la configuración de aparición
personalizada para establecer dónde podrán aparecer los refuerzos.

Esto puede utilizarse para hacer que los refuerzos puedan aparecer en la superficie, en lugares con luz, en biomas
específicos, etc. Consulta la página wiki sobre [Apariciones Personalizadas]($language$/elitemobs/creating_spawns.md)
para obtener más detalles.

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

Vamos a crear un ejemplo de refuerzo utilizando la mayoría de los campos anteriores:

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
- El Refuerzo Personalizado invocado será el de `test_boss.yml` (`filename: test_boss.yml`)
- El Refuerzo Personalizado aparecerá dentro de 30 bloques de la ubicación actual del Jefe
  Personalizado (`spawnNearby: true`)
- El Refuerzo Personalizado heredará el aggro del Jefe Personalizado que está reforzando, lo que significa que atacará
  al jugador que ha infligido más daño (`inheritAggro: true`)
- Independientemente de la configuración en `test_boss.yml`, el Refuerzo Personalizado tendrá el mismo nivel que el Jefe
  Personalizado que está reforzando (`inheritLevel: true`)

```yaml
- summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL
  location: -80,10,0
  lightningRod: true
```

Esto hace lo siguiente:

- Crea un Refuerzo Personalizado
- El Refuerzo Personalizado será un Cristal de End que se coloca cuando comienza el
  combate (`summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`)
- El Cristal de End castigará el suelo alrededor con un retraso (`lightningRod: true`)

Ahora, para aplicar esto al Jefe Personalizado:

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eLigador de Mundos
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

¡Y listo! Aquí tienes algunos consejos más:

- Los campos se pueden establecer en cualquier orden, aunque se recomienda tener siempre `summonable` primero.
- Esta es una gran mejora del antiguo sistema de refuerzos, que ya no está listado. No se recomienda confiar en él en
  este momento, ya que podría dejar de funcionar en el futuro.
