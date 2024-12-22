# Acciones del Script Elite

Las acciones son el núcleo del script. Estas determinan lo que hace el script y te permiten establecer intervalos
personalizados.

Las acciones siempre comienzan con el tipo de acción que vas a realizar. Los diferentes tipos de acciones sirven para
diferentes funciones. Además, todas las acciones tienen un objetivo o varios objetivos. Las acciones también pueden
tener un temporizador de espera, para asegurar que las cosas sucedan con retrasos personalizables. Finalmente, las
acciones también pueden tener varios campos más específicos del tipo de acción.

## Atributos compartidos

| Valores            |                                                                                         Detalles                                                                                          |        Especial        |
|--------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------:|
| `Target`           |                                                            [Más información aquí]($language$/elitemobs/elitescript_targets.md)                                                            |           ❌            |
| `wait`             |                                                    Establece la cantidad de tiempo para esperar (ticks) antes de ejecutar las acciones                                                    |           ❌            |
| `repeatEvery`      | Establece que las acciones se repitan cada cierta cantidad de ticks. Cualquier script que tenga esto establecido pero que no use tiempos se terminará al morir el mob para evitar el lag. |           ❌            |
| `times`            |                                                                  Establece la cantidad de veces que ocurrirá una acción                                                                   | Requiere `repeatEvery` |
| `scripts`          |                                                               Establece los scripts que se ejecutarán al final de la acción                                                               |           ❌            |
| `onlyRunOneScript` |                                                                  Elige uno de los `scripts` al azar y solo ejecuta ese.                                                                   |           ❌            |
| `offset`           |   Esta opción va debajo de `Target`. Te permite desplazar la ubicación del objetivo. El desplazamiento no funciona con acciones que se dirigen a zonas con `ZONE_FULL` o `ZONE_BORDER`.   |           ❌            |
| `debug`            |                   Esta opción va bajo la sección de acción del script. Cuando se establece como verdadero, mostrará iconos de barrera en el área donde está la acción.                    |           ❌            |

## Tipos de acciones

### ACTION_BAR_MESSAGE

Establece el mensaje de la barra de acción para los objetivos.

| Valores  |                              Detalles                               | Obligatorio |                      Especial                       |
|----------|:-------------------------------------------------------------------:|:-----------:|:---------------------------------------------------:|
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) |      ✅      |                          ❌                          |
| `sValue` |                               Mensaje                               |      ✅      | Puede usar [Códigos de color](#color_codes) con `&` |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
    - EliteMobDamagedByPlayerEvent
    Acciones:
    - action: ACTION_BAR_MESSAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&2¡Hola Mundo!"
```

<div align="center">

![elitescript_actions_actionbar.jpg](../../../img/wiki/elitescript_actions_actionbar.jpg)

</div>

Establecerá la barra de acción para que diga Hola Mundo a cualquier jugador que esté a 10 bloques del jefe.

</div>

</details>

</div>

---

### BOSS_BAR_MESSAGE

Añade una barra de jefe al(los) objetivo(s).

| Valores    |                              Detalles                               | Obligatorio |                      Especial                       |
|------------|:-------------------------------------------------------------------:|:-----------:|:---------------------------------------------------:|
| `Target`   | [Más información aquí]($language$/elitemobs/elitescript_targets.md) |      ✅      |                          ❌                          |
| `sValue`   |                               Mensaje                               |      ✅      | Puede usar [Códigos de color](#color_codes) con `&` |
| `duration` |                Duración de la barra de jefe en ticks                |      ✅      |                          ❌                          |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
    - EliteMobDamagedByPlayerEvent
    Acciones:
    - action: BOSS_BAR_MESSAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      duration: 120
      sValue: "&2¡Hola Mundo!"
```

<div align="center">

![elitescript_actions_bossbar.jpg](../../../img/wiki/elitescript_actions_bossbar.jpg)

</div>

Establecerá una barra de jefe que diga Hola Mundo a cualquier jugador que esté a 10 bloques del jefe durante 1 segundo.

</div>

</details>

</div>

---

### DAMAGE

Así es como puedes dañar entidades como otras entidades.

_Nota: ¡Esto usa de forma nativa el sistema de daño de EliteMobs! Esto significa que verás la reducción de armadura
élite normal de los golpes. Más sobre esto en la sección de multiplicadores._

| Valores      |                              Detalles                               | Obligatorio |
|--------------|:-------------------------------------------------------------------:|:-----------:|
| `Target`     | [Más información aquí]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `multiplier` |                        Multiplicador de daño                        |      ✅      |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
    - EliteMobDamagedByPlayerEvent
    Acciones:
    - action: DAMAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      multiplier: 0.5
```

Establece que el daño sea la mitad de la cantidad de daño base que el jefe haría al jugador, teniendo en cuenta las
reducciones de daño.

</div>

</details>

</div>

#### multiplier

Establece el multiplicador de daño del jefe para el efecto.

**Importante**: para que los poderes escalen de forma fácil y automática, el daño se aplica haciendo que el jefe golpee
al jugador una vez y multiplicando el daño base del jefe con el multiplicador.

Esto significa que un multiplicador de 1.0 es lo mismo que un golpe normal del jefe. 2.0 es un golpe 2 veces la fuerza
normal, y 0.5 es 50% de fuerza.

---

### MAKE_INVULNERABLE

Hace que un objetivo sea invulnerable.

| Valores        |                              Detalles                               | Obligatorio |
|----------------|:-------------------------------------------------------------------:|:-----------:|
| `Target`       | [Más información aquí]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `invulnerable` |                Establece si el jefe es invulnerable                 |      ✅      |
| `duration`     |        Establece la duración de la invulnerabilidad (ticks)         |      ❌      |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
    - EliteMobDamagedByPlayerEvent
    Acciones:
    - action: MAKE_INVULNERABLE
      Target:
        targetType: SELF
      invulnerable: true
      duration: 60
```

Hace que un jefe sea invulnerable durante 60 ticks (3 segundos).

</div>

</details>

</div>

---

### MODIFY_DAMAGE

Modifica el daño infligido a un jefe o el infligido a los jugadores por ese jefe. Esta es una acción especial con
algunos requisitos especiales.

| Valores      |        Detalles        | Obligatorio |
|--------------|:----------------------:|:-----------:|
| `multiplier` | Multiplicador de daño. |      ✅      |

Esta acción es especial y debe estar en un script que tenga un detector de eventos para un evento de daño. Los siguientes son eventos de daño válidos: `EliteMobDamagedByEliteMobEvent`, `EliteMobDamagedByPlayerEvent`, `EliteMobDamagedEvent` para eventos que reducen el daño infligido al jefe y `PlayerDamagedByEliteMobEvent` para eventos que reducen el daño infligido a los jugadores.

Es muy recomendable que aprendas cómo funciona la condición `hasTag` para utilizar mejor esta acción. Cuando se usa
correctamente, es posible hacer que el jefe resista temporalmente o sea más débil al daño, y esto puede asociarse a
mejoras del jugador, ubicación del jefe o muchos otros factores.

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
    - EliteMobDamagedByPlayerEvent
    Acciones:
    - action: MODIFY_DAMAGE
      multiplier: 2.0
      Condiciones:
        hasTags:
        - "CoolPlayer"
        Target:
          targetType: DIRECT_TARGET
```

Aumenta el daño infligido al jefe por los jugadores en 2x, pero solo si el jugador tiene una etiqueta llamada "
CoolPlayer".

</div>

</details>

</div>

---

### MESSAGE

Envía un mensaje al(los) objetivo(s).

| Valores  |                              Detalles                               | Obligatorio |                      Especial                       |
|----------|:-------------------------------------------------------------------:|:-----------:|:---------------------------------------------------:|
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) |      ✅      |                          ❌                          |
| `sValue` |                               Mensaje                               |      ✅      | Puede usar [Códigos de color](#color_codes) con `&` |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
    - EliteMobDamagedByPlayerEvent
    Acciones:
    - action: MESSAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&2¡Hola Mundo!"
```

<div align="center">

![elitescript_actions_message.jpg](../../../img/wiki/elitescript_actions_message.jpg)

</div>

Enviará un mensaje de chat a todos los jugadores que estén a 10 bloques del jefe.

</div>

</details>

</div>

---

### NAVIGATE

Hace que el jefe navegue (camine) hasta el objetivo especificado.

| Valores       |                                                          Detalles                                                          | Obligatorio | Especial |
|---------------|:--------------------------------------------------------------------------------------------------------------------------:|:-----------:|:--------:|
| `Target`      |                            [Más información aquí]($language$/elitemobs/elitescript_targets.md)                             |      ✅      |    ❌     |
| `FinalTarget` |                            [Más información aquí]($language$/elitemobs/elitescript_targets.md)                             |      ✅      |    ❌     |
| `velocity`    |         Establece la velocidad de navegación del jefe. `1.0` es el valor del jefe establecido en la configuración.         |      ❌      |    ❌     |
| `bValue`      |           Establece si el jefe debe ser teletransportado por la fuerza al `FinalTarget` si la navegación falla.            |      ❌      |    ❌     |
| `duration`    | Cuánto tiempo debería el jefe intentar navegar antes de rendirse. Establecido en ticks. El valor por defecto es 100 ticks. |      ✅      |    ❌     |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
    - EliteMobDamagedByPlayerEvent
    Acciones:
    - action: NAVIGATE
      Target: 
        targetType: SELF
      FinalTarget:
        targetType: NEARBY_PLAYERS
        range: 50
      velocity: 1.0
      bValue: true
      duration: 100
```

Hará que el jefe navegue hasta el lugar donde estaba el jugador cuando golpeó al jefe.

</div>

</details>

</div>

---

### PLACE_BLOCK

Coloca un bloque en la(s) ubicación(es) objetivo(s) durante la duración.

| Valores    |                                                          Detalles                                                          | Obligatorio |
|------------|:--------------------------------------------------------------------------------------------------------------------------:|:-----------:|
| `Target`   |                            [Más información aquí]($language$/elitemobs/elitescript_targets.md)                             |      ✅      |
| `material` | [Material](#material) del bloque, [lista completa aquí](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) |      ✅      |
| `duration` |                                               Duración del efecto, en ticks                                                |      ❌      |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
    - EliteMobDamagedByPlayerEvent
    Zona:
      shape: DOME
      radius: 3
      Target:
        targetType: SELF
    Acciones:
    - action: PLACE_BLOCK
      Target:
        targetType: ZONE_FULL
      duration: 120
      material: GLASS
```

<div align="center">

![elitescript_actions_placeblock.jpg](../../../img/wiki/elitescript_actions_placeblock.jpg)

</div>

Coloca una cúpula de cristal alrededor del jefe que durará 6 segundos.

_Nota: Si no se define la duración, la colocación del bloque es permanente._

</div>

</details>

</div>

---

### PLAY_ANIMATION

Reproduce la animación especificada para un modelo personalizado usando Model Engine. Requiere Model Engine y un modelo
personalizado válido para estar en el objetivo que ejecuta la animación.

| Valores  |                              Detalles                               | Obligatorio |
|----------|:-------------------------------------------------------------------:|:-----------:|
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `sValue` |                 Establece el nombre de la animación                 |      ✅      |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
    - EliteMobDamagedByPlayerEvent
    Acciones:
    - action: PLAY_ANIMATION
      Target:
        targetType: SELF
      sValue: "fortnite_dance"
```

Establece que el jefe reproduzca la animación fortnite_dance. Requiere que el servidor tenga Model Engine, que el jefe tenga un disfraz personalizado y que el disfraz personalizado tenga una animación llamada "fortnite\_dance".

</div>

</details>

</div>

---

### PLAY_SOUND

Reproduce un sonido del juego.

| Valores  |                              Detalles                               | Obligatorio |
|----------|:-------------------------------------------------------------------:|:-----------:|
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `sValue` |        Establece el nombre del sonido que se va a reproducir        |      ✅      |
| `pitch`  |         Establece el tono del sonido que se va a reproducir         |      ❌      |
| `volume` |       Establece el volumen del sonido que se va a reproducir        |      ❌      |

[Aquí tienes una lista útil de todos los sonidos de Minecraft!](https://www.digminecraft.com/lists/sound_list_pc.php)
Recuerda que esto también puede reproducir sonidos personalizados de los paquetes de recursos.
Cuando la acción tiene como objetivo una zona, la acción reproducirá un sonido por cada bloque de esa zona. Esto puede
hacer que el sonido sea considerablemente más fuerte de lo normal, así que considera la posibilidad de bajar el volumen
si vas a utilizar una zona como objetivo.

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
    - EliteMobDamagedByPlayerEvent
    Acciones:
    - action: PLAY_SOUND
      Target:
        targeType: SELF
      sValue: minecraft:block.bell.resonate
```

Reproduce el sonido resonante de las campanas de Minecraft en la ubicación del jefe.

</div>

</details>

</div>

---

### POTION_EFFECT

Aplica un efecto de poción específico al(los) objetivo(s).

| Valores            |                                                           Detalles                                                            | Obligatorio |
|--------------------|:-----------------------------------------------------------------------------------------------------------------------------:|:-----------:|
| `Target`           |                              [Más información aquí]($language$/elitemobs/elitescript_targets.md)                              |      ✅      |
| `potionEffectType` | Tipo de efecto, [la lista válida está aquí](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) |      ✅      |
| `amplifier`        |                                           Nivel del efecto de poción (empieza en 0)                                           |      ✅      |
| `duration`         |                                                  Duración del efecto (ticks)                                                  |      ✅      |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
    - EliteMobDamagedByPlayerEvent
    Acciones:
    - action: POTION_EFFECT
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      potionEffectType: LEVITATION
      amplifier: 1
      duration: 40
```

<div align="center">

![elitescript_actions_potioneffect.jpg](../../../img/wiki/elitescript_actions_potioneffect.jpg)

</div>

Esto hará que todos los jugadores que estén a 10 bloques del jefe leviten durante 2 segundos (40 ticks).

</div>

</details>

</div>

---

### PUSH

Empuja a un objetivo por un vector establecido.

| Valores  |                              Detalles                               | Obligatorio |
|----------|:-------------------------------------------------------------------:|:-----------:|
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `vValue` |         Establece el vector de la velocidad que se aplicará         |      ✅      |

*Nota: Esta acción también acepta vectores relativos. Aprende más sobre cómo usar
estos [aquí]($language$/elitemobs/elitescript_relative_vectors.md).*

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
    - EliteMobDamagedByPlayerEvent
    Acciones:
    - action: PUSH
      wait: 3
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      vValue: 0,0.3,0
      times: 10
      repeatEvery: 10
```

<div align="center">

![elitescript_actions_push.jpg](../../../img/wiki/elitescript_actions_push.jpg)

</div>

Esto empujará a todos los jugadores que estén a 10 bloques del jefe en el aire utilizando una fuerza de 0.3. Esta acción
se repetirá 10 veces cada 0.5 segundos (10 ticks). En otras palabras, esto hará que este efecto dure 5 segundos (10
veces x 10 ticks = 100 ticks).

Esto hará que parezca que los jugadores están saltando.

</div>

</details>

</div>

#### vector

Los vectores se definen por `vValue: x,y,z`. Por ejemplo, si quieres que el objetivo sea empujado hacia arriba, puedes
hacer `vValue: 0,0.3,0`.

---

### RUN_COMMAND_AS_CONSOLE

Ejecuta un comando como consola.

| Valores  |                              Detalles                               | Obligatorio |
|----------|:-------------------------------------------------------------------:|:-----------:|
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `sValue` |                    Comando que se va a ejecutar                     |      ✅      |

**Nota: ¡hay placeholders disponibles! Comprueba RUN_COMMAND_AS_PLAYER, son los mismos**

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
    - EliteMobDamagedByPlayerEvent
    Acciones:
    - action: RUN_COMMAND_AS_CONSOLE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: say Hola $bossName mi nombre es $playerName. ¿Cuál es tu nivel? $bossName mi nivel es $bossLevel.
```

<div align="center">

![elitescript_actions_commandconsole.jpg](../../../img/wiki/elitescript_actions_commandconsole.jpg)

</div>

Hace que la consola transmita el mensaje "Hola $bossName mi nombre es $playerName. ¿Cuál es tu nivel? $bossName mi nivel
es $bossLevel".

</div>

</details>

</div>

---

### RUN_COMMAND_AS_PLAYER
`
Ejecuta un comando como `jugador`. Requiere que el objetivo sean jugadores.

| Valores  |                              Detalles                               | Obligatorio |
|----------|:-------------------------------------------------------------------:|:-----------:|
| `target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `sValue` |                    Comando que se va a ejecutar                     |      ✅      |

**Nota: RUN_COMMAND_AS_PLAYER y RUN_COMMAND_AS_CONSOLE utilizan los siguientes placeholders:**

| Placeholder   |          Detalles          |            Especial             |
|---------------|:--------------------------:|:-------------------------------:|
| `$playerName` |     Nombre del jugador     | El objetivo debe ser un jugador |
| `$playerX`    | Localización X del jugador | El objetivo debe ser un jugador |
| `$playerY`    | Localización Y del jugador | El objetivo debe ser un jugador |
| `$playerZ`    | Localización Z del jugador | El objetivo debe ser un jugador |
| `$bossName`   |      Nombre del jefe       | El objetivo debe ser un jugador |
| `$bossX`      |  Localización X del jefe   |                ❌                |
| `$bossY`      |  Localización Y del jefe   |                ❌                |
| `$bossZ`      |  Localización Z del jefe   |                ❌                |
| `$bossLevel`  |       Nivel del jefe       |                ❌                |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
    - EliteMobDamagedByPlayerEvent
    Acciones:
```

        targetType: ZONE_BORDER
      particles:
      - amount: 1
        x: 0
        y: 0
        z: 0
        particle: FLAME
      - amount: 1
        x: 0
        y: 0
        z: 0
        particle: SMOKE_NORMAL

```

<div align="center">

![elitescript_actions_particle.gif](../../../img/wiki/elitescript_actions_particle.gif)

</div>

This script will spawn a particle at the zone border of where the boss is located. This will spawn two types of particles, FLAME and SMOKE_NORMAL. They will be spawned at the same location.

</div>

</details>

</div>

---

### TELEPORT

Teleports the entity to the specified location.

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `FinalTarget` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: TELEPORT
      Target: 
        targetType: SELF
      FinalTarget:
        targetType: NEARBY_PLAYERS
        range: 20
```

Will teleport the boss to where the closest player was when the boss was hit, so long as they were within 20 blocks from
the boss.

</div>

</details>

</div>

---

# Color Codes

The following are all the available color codes to use for `MESSAGE`, `BOSS_BAR_MESSAGE`, `ACTION_BAR_MESSAGE` and any
other string in the script that requires color coding.
This list is the same as the [Minecraft's Color Codes](https://minecraft.wiki/w/Formatting_codes)

| Code | Color         |
|:----:|:--------------|
| `&0` | Black         |
| `&1` | Dark Blue     |
| `&2` | Dark Green    |
| `&3` | Dark Aqua     |
| `&4` | Dark Red      |
| `&5` | Dark Purple   |
| `&6` | Gold          |
| `&7` | Gray          |
| `&8` | Dark Gray     |
| `&9` | Blue          |
| `&a` | Green         |
| `&b` | Aqua          |
| `&c` | Red           |
| `&d` | Pink          |
| `&e` | Yellow        |
| `&f` | White         |
| `&k` | Obfuscated    |
| `&l` | Bold          |
| `&m` | Strikethrough |
| `&n` | Underline     |
| `&o` | Italic        |
| `&r` | Reset         |

---

# Material

A [Material](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) is a specific Minecraft object,
like `STONE` or `GRASS_BLOCK`. The list of materials can be found
here: [https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)
```yaml
    - action: POTION_EFFECT
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      potionEffectType: SLOW
      amplifier: 2
      duration: 60
```

This script will send two messages; one for every player, one only for the player that damaged the boss, and will apply
a Slowness effect to the players near the boss.

All three actions will be done at the same time when the EliteMobDamagedEventByPlayerEvent event occurs.
