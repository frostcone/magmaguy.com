Claro, aquí tienes la traducción al español, manteniendo el formato markdown:

# Acciones de Elite Script

Las acciones son el núcleo del script. Estas determinan lo que hace el script y te permiten establecer intervalos personalizados.

Las acciones siempre comienzan con el tipo de acción que vas a realizar. Los diferentes tipos de acción cumplen diferentes funciones. Además, todas las acciones tienen un objetivo o varios objetivos. Las acciones también pueden tener un temporizador de espera, para asegurarse de que las cosas sucedan con retrasos personalizables. Finalmente, las acciones también pueden tener varios otros campos específicos del tipo de acción.

## Atributos compartidos

| Valores             |                                                                                 Detalles                                                                                  | Especial |
|--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`           |                                                      [Más información aquí]($language$/elitemobs/elitescript_targets.md)                                                       | ❌ |
| `wait`             |                                                      Establece la cantidad de tiempo a esperar (ticks) antes de ejecutar las acciones                                                      | ❌ |
| `repeatEvery`      |        Establece que las acciones se repitan cada cierta cantidad de ticks. Cualquier script que tenga esto configurado pero no esté usando `times` será terminado al morir el mob para evitar lag. Puedes aleatorizar este valor usando `~` ejemplo: `1~5`.         | ❌ |
| `times`            |                                                            Establece la cantidad de veces que ocurrirá una acción. Puedes aleatorizar este valor usando `~` ejemplo: `1~5`.                                                            | Requiere `repeatEvery` |
| `scripts`          |                                                         Establece los scripts que se ejecutarán al final de la acción                                                          | ❌ |
| `onlyRunOneScript` |                                                       Elige uno de los `scripts` al azar y solo ejecuta ese.                                                       | ❌ |
| `offset`           | Esta opción va bajo `Target`. Permite desplazar la ubicación del objetivo. El desplazamiento no funciona con acciones que apuntan a zonas con `ZONE_FULL` o `ZONE_BORDER`. | ❌ |
| `debug`           | Esta opción va bajo la sección de acción del script. Cuando se establece en true, mostrará iconos de barrera en el área donde se encuentra la acción. | ❌ |

## Tipos de acción

### ACTION_BAR_MESSAGE

Establece el mensaje de la barra de acción para los objetivos.

| Valores |                            Detalles                            | Obligatorio | Especial |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                            Mensaje                            | ✅ | Puede usar [Códigos de Color](#color_codes) con `&` |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: ACTION_BAR_MESSAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&2Hello World!"
```

<div align="center">

![elitescript_actions_actionbar.jpg](../../../img/wiki/elitescript_actions_actionbar.jpg)

</div>

Establecerá la barra de acción para decir "Hello World" a cualquier jugador que esté a menos de 10 bloques del jefe.

</div>

</details>

</div>

---

### BOSS_BAR_MESSAGE

Añade una barra de jefe a los objetivos.

| Valores |                            Detalles                            | Obligatorio |                   Especial                    |
| --- |:-------------------------------------------------------------:| :-: |:--------------------------------------------:|
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |                      ❌                       |
| `sValue` |                            Mensaje                            | ✅ | Puede usar [Códigos de Color](#color_codes) con `&` |
| `duration` |               Duración de la barra de jefe en ticks               | ✅ |                      ❌                       |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: BOSS_BAR_MESSAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      duration: 120
      sValue: "&2Hello World!"
```

<div align="center">

![elitescript_actions_bossbar.jpg](../../../img/wiki/elitescript_actions_bossbar.jpg)

</div>

Establecerá una barra de jefe que dice "Hello World" a cualquier jugador que esté a menos de 10 bloques del jefe durante 1 segundo.

</div>

</details>

</div>

---

### DAMAGE

Así es como puedes dañar entidades como otras entidades.

_Nota: ¡esto utiliza nativamente el sistema de daño de EliteMobs! Esto significa que verás la reducción de armadura normal de Elite por los golpes. Más sobre esto en la sección de multiplicadores._

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `multiplier` |                       Multiplicador de daño                       | ✅ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: DAMAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      multiplier: 0.5
```

Establece el daño para que sea la mitad de la cantidad de daño base que el jefe infligiría al jugador, teniendo en cuenta las reducciones de daño.

</div>

</details>

</div>

#### multiplier

Establece el multiplicador de daño del jefe para el efecto.

**Importante**: para que los poderes escalen fácil y automáticamente, el daño se aplica haciendo que el jefe golpee al jugador una vez y multiplicando el daño base del jefe por el multiplicador.

Esto significa que un multiplicador de 1.0 es lo mismo que un golpe normal del jefe. 2.0 es un golpe 2 veces más fuerte de lo normal, y 0.5 es 50% menos fuerte.

---

### MAKE_INVULNERABLE

Hace que un objetivo sea invulnerable.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `invulnerable` |               Establece si el jefe es invulnerable                | ✅ |
| `duration` |       Establece la duración de la invulnerabilidad (ticks)        | ❌ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
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

Modifica el daño infligido a un jefe o el daño infligido a los jugadores por ese jefe. Esta es una acción especial con algunos requisitos especiales.

| Valores | Detalles | Obligatorio |
| --- | :-: | :-: |
| `multiplier` | Multiplicador de daño. | ✅ |

Esta acción es especial y debe estar en un script que tenga un listener de eventos para un evento de daño. Los siguientes son eventos de daño válidos: `EliteMobDamagedByEliteMobEvent`, `EliteMobDamagedByPlayerEvent`, `EliteMobDamagedEvent` para eventos que reducen el daño infligido al jefe y `PlayerDamagedByEliteMobEvent` para eventos que reducen el daño infligido a los jugadores.

Es muy recomendable que aprendas cómo funciona la condición `hasTag` para usar mejor esta acción. Cuando se usa correctamente, es posible hacer que el jefe resista temporalmente o sea más débil al daño, y esto puede asociarse a buffs del jugador, ubicación del jefe o muchos otros factores.

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MODIFY_DAMAGE
      multiplier: 2.0
      Conditions:
        hasTags:
        - "CoolPlayer"
        Target:
          targetType: DIRECT_TARGET
```

Aumenta el daño infligido al jefe por los jugadores en 2x, pero solo si el jugador tiene una etiqueta llamada "CoolPlayer".

</div>

</details>

</div>

---

### MESSAGE

Envía un mensaje a los objetivos.

| Valores |                            Detalles                            | Obligatorio | Especial |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                            Mensaje                            | ✅ | Puede usar [Códigos de Color](#color_codes) con `&` |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MESSAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&2Hello World!"
```

<div align="center">

![elitescript_actions_message.jpg](../../../img/wiki/elitescript_actions_message.jpg)

</div>

Enviará un mensaje de chat a todos los jugadores que estén a menos de 10 bloques del jefe.

</div>

</details>

</div>

---

### NAVIGATE

Hace que el jefe navegue (camine) hacia el objetivo especificado.

| Valores |                            Detalles                            | Obligatorio | Especial |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `FinalTarget` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `velocity` | Establece la velocidad de navegación del jefe. `1.0` siendo el valor del jefe como se establece en la configuración. | ❌ | ❌ |
| `bValue` | Establece si el jefe debe ser teletransportado forzosamente al `FinalTarget` si la navegación falla. | ❌ | ❌ |
| `duration` | Cuánto tiempo debe intentar navegar el jefe antes de rendirse. Se establece en ticks. El valor predeterminado es 100 ticks. | ✅ | ❌ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
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

Hará que el jefe navegue hasta el lugar donde estaba parado el jugador cuando golpeó al jefe.

</div>

</details>

</div>

---

### PLACE_BLOCK

Coloca un bloque en la(s) ubicación(es) objetivo durante la duración.

| Valores |                                                         Detalles                                                         | Obligatorio |
| --- |:-----------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                              [Más información aquí]($language$/elitemobs/elitescript_targets.md)                              | ✅ |
| `material` | [Material](#material) del bloque, [lista completa aquí](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | ✅ |
| `duration` |                                              Duración del efecto, en ticks                                               | ❌ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: DOME
      radius: 3
      Target:
        targetType: SELF
    Actions:
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

_Nota: Si no se define una duración, la colocación del bloque es permanente._

</div>

</details>

</div>

---

### PLAY_ANIMATION

Reproduce la animación especificada para un Modelo Personalizado usando Model Engine. Requiere Model Engine y un Modelo Personalizado válido en el objetivo que ejecuta la animación.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                Establece el nombre de la animación                 | ✅ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
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

Reproduce un sonido dentro del juego.

| Valores   |                            Detalles                            | Obligatorio |
|----------|:-------------------------------------------------------------:|:---------:|
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) |     ✅     |
| `sValue` |            Establece el nombre del sonido a reproducir            |     ✅     |
| `pitch`  |           Establece el tono del sonido a reproducir            |     ❌     |
| `volume` |           Establece el volumen del sonido a reproducir           |     ❌     |

[¡Aquí tienes una lista útil de todos los sonidos de Minecraft!](https://www.digminecraft.com/lists/sound_list_pc.php) Recuerda que esto también puede reproducir sonidos personalizados de paquetes de recursos.
Cuando la acción apunta a una zona, la acción reproducirá un sonido por cada bloque en esa zona. Esto puede hacer que el sonido sea considerablemente más fuerte de lo normal, así que considera bajar el volumen si apuntas a una zona.

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PLAY_SOUND
      Target:
        targeType: SELF
      sValue: minecraft:block.bell.resonate
```

Reproduce el sonido de resonancia de las campanas de Minecraft en la ubicación del jefe.

</div>

</details>

</div>

---

### POTION_EFFECT

Aplica un efecto de poción específico a los objetivos.

| Valores |                                                       Detalles                                                       | Obligatorio |
| --- |:-------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                            [Más información aquí]($language$/elitemobs/elitescript_targets.md)                            | ✅ |
| `potionEffectType` | Tipo de efecto, [lista válida aquí](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) | ✅ |
| `amplifier` |                                          Nivel del efecto de poción (comienza en 0)                                          | ✅ |
| `duration` |                                           Duración del efecto (ticks)                                            | ✅ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
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

Esto hará que cualquier jugador a menos de 10 bloques del jefe levite durante 2 segundos (40 ticks).

</div>

</details>

</div>

---

### PUSH

Empuja un objetivo mediante un vector establecido.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `vValue` |       Establece el vector de la velocidad que se aplicará        | ✅ |

*Nota: Esta acción también acepta vectores relativos. Aprende más sobre cómo usarlos [aquí]($language$/elitemobs/elitescript_relative_vectors.md).*

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
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

Esto empujará a todos los jugadores a menos de 10 bloques del jefe hacia el aire usando una fuerza de 0.3. Esta acción se repetirá 10 veces cada 0.5 segundos (10 ticks). En otras palabras, este efecto durará 5 segundos (10 veces x 10 ticks = 100 ticks).

Esto hará que parezca que los jugadores están saltando.

</div>

</details>

</div>

#### vector

Los vectores se definen por `vValue: x,y,z`. Como ejemplo, si quieres que el objetivo sea empujado hacia arriba, puedes hacer `vValue: 0,0.3,0`.

---

### RUN_COMMAND_AS_CONSOLE

Ejecuta un comando como consola.

| Valores |                             Detalles                             | Obligatorio |
| --- |:---------------------------------------------------------------:| :-: |
| `Target` |  [Más información aquí]($language$/elitemobs/elitescript_targets.md)  | ✅ |
| `sValue` |                    Comando que se ejecutará                     | ✅ |

**Nota: ¡hay placeholders disponibles! Consulta RUN_COMMAND_AS_PLAYER, son los mismos**

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: RUN_COMMAND_AS_CONSOLE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: say Hello $bossName my name is $playerName. What is your level? $bossName my level is $bossLevel.
```

<div align="center">

![elitescript_actions_commandconsole.jpg](../../../img/wiki/elitescript_actions_commandconsole.jpg)

</div>

Hace que la consola transmita el mensaje "Hello $bossName my name is $playerName. What is your level? $bossName my level is $bossLevel".

</div>

</details>

</div>

---

### RUN_COMMAND_AS_PLAYER

Ejecuta un comando como un jugador. Requiere que el objetivo sean jugadores.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                   Comando que se ejecutará                    | ✅ |Please specify the language you would like the text translated into.| `x` | Sets offset of X | 0.01 | (1) |
| `y` | Sets offset of Y | 0.01 | (1) |
| `z` | Sets offset of Z | 0.01 | (1) |
| `amount` | Sets amount of particles spawned | 1 | (1) |
| `speed` | Sets speed of particles | 0.01 | ❌ |
| `particle` | Sets entity type | `FLAME` | [Pick from this list!](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) |
| `red` | Sets red value | `255` | (2) |
| `green` | Sets green value | `255` | (2) |
| `blue` | Sets blue value | `255` | (2) |
| `toRed` | Sets final red value | `255` | (3) |
| `toGreen` | Sets final green value | `255` | (3) |
| `toBlue` | Sets final blue value | `255` | (3) |

_(1) If the `amount` is set to 0, `x`, `y` and `z` will set the particle's velocity instead._

_(2) Only for the `REDSTONE`, `DUST_COLOR_TRANSITION`, `SPELL_MOB` and `SPELL_MOB_AMBIENT` `particle`s_

_(3) Only for the `DUST_COLOR_TRANSITION` `particle`_

It is important to note that one SPAWN_PARTICLE script can spawn multiple particles. Each particle can then have its own configuration fields within the SPAWN_PARTICLE action. Here is an example:

<div align="center">

<details>

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: CYLINDER
      radius: 4
      borderRadius: 3
      height: 30
      Target:
        targetType: DIRECT_TARGET
      track: true
    Actions:
    - action: SPAWN_PARTICLE
      Target:
        targetType: ZONE_BORDER
      particles:
        - particle: FLAME
          speed: 0.2
        - particle: SMOKE_NORMAL
          speed: 0.1
      amount: 1
      repeatEvery: 10
```

<div align="center">

![elitescript_actions_particle.jpg](../../../img/wiki/elitescript_actions_particle.jpg)

</div>

This will spawn a cylinder made from flame and smoke particles around the player that damaged the boss.

</div>

</details>

</div>

#### Moving a particle:

It is possible to set a specific speed for a particle, and it works the same way the Spigot API does. This allows scripters to set a particle to go in a specific direction at a specific speed. It is not possible to make particles change direction midway. This effect is used in the flamethrower enchantment and boss power.

To move a particle, set `amount: 0`. This will signal to Minecraft that the `x`, `y` and `z` values are actually a vector. This vector sets the direction toward which your particle will go.

Let's say that you want a `FLAME` particle to go up. To do this, you want a positive `y` value, and nothing else. Finally, you will want to set the velocity to what you want the speed to be. Here is a full example:

<div align="center">

<details>

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobEnterCombatEvent
    Zone:
      shape: CYLINDER
      radius: 4
      borderRadius: 3
      height: 30
      Target:
        targetType: DIRECT_TARGET
      track: true
    Actions:
    - action: SPAWN_PARTICLE
      Target:
        targetType: ZONE_BORDER
      particles:
        - particle: FLAME
          amount: 0
          x: 0
          y: 1
          z: 0
          speed: 0.2
        - particle: SMOKE_NORMAL
          speed: 0.1
          amount: 0
          x: 0.5
          y: 1
          z: 0.5
      amount: 3
      repeatEvery: 10
```

This will spawn a flame particle at the boss location that will go up.

</div>

</details>

</div>

---

### SUMMON_REINFORCEMENT

Summons reinforcements from EliteMobs Custom Bosses.

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |      Sets the filename of the Custom Boss reinforcement       | ✅ |
| `duration` |        Sets the duration of the reinforcement (ticks)         | ❌ |

<div align="center">

<details>

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobEnterCombatEvent
    Actions:
    - action: SUMMON_REINFORCEMENT
      Target:
        targetType: DIRECT_TARGET
      sValue: your_boss_file.yml
```

Spawns the reinforcement with the filename "your_boss_file.yml" at the boss location.

</div>

</details>

</div>

---

### SUMMON_ENTITY

MAGMA PLEASE FILL IN THIS SECTION WITH CORRECT INFORMATION,

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                Sets the                  | ✅ |

*Note: This action also accepts relative vectors. Learn more about how to use those [here]($language$/elitemobs/elitescript_relative_vectors.md).*

<div align="center">

<details>

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
      - EliteMobEnterCombatEvent
    Actions:
      - action: SUMMON_ENTITY
        Target:
          targetType: DIRECT_TARGET
```

Sets the boss to .

</div>

</details>

</div>

---

### TAG

Adds tags to the bosses or players. Tags are just Strings, or words, that scripters can define. These are only used to run condition checks and have no direct gameplay effect outside of what they are used for in scripts.

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `tags` |                         Sets the tags                         | ✅ |
| `duration` |             Sets the duration of the tags (ticks)             | ❌ |

<div align="center">

<details>

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobSpawnEvent
    Actions:
    - action: TAG
      Target:
        targetType: SELF
      tags:
      - fireworks
    - action: SPAWN_FIREWORKS
      Target:
        targetType: SELF
      wait: 20
      offset: 0,3,0
      vValue: 0,.1,0
      flicker: true
      withTrail: true
      power: 1
      fireworkEffects:
      - [ORANGE, RED]
      repeatEvery: 20
      Conditions:
        hasTags:
        - fireworks
```

Tags the boss with the string "very_sus", which can later be checked through script conditions.

**Important:** It is only possible to tag player and elite mobs.

</div>

</details>

</div>

---

### TELEPORT

Teleports the target(s) to the defined location.

| Values |                                                    Details                                                     | Mandatory |
| --- |:--------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |    Sets _who_ will get teleported. [General target info here!]($language$/elitemobs/elitescript_targets.md)    | ✅ |
| `FinalTarget` | Sets _where_ they will be teleported. [General target info here!]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `location` |                                               Teleport location                                                | ✅ |

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
        targetType: NEARBY_PLAYERS
        range: 10
      FinalTarget:
        targetType: SELF_SPAWN
```

<div align="center">

![elitescript_actions_teleport.gif](../../../img/wiki/elitescript_actions_teleport.gif)

</div>

This would teleport all players that are within 10 blocks from the boss to the boss spawn location.

</div>

</details>

</div>

#### location

Sets the location where the player will be teleported. The format is the standard EliteMobs `world_name,x,y,z,pitch,yaw`.

Example

```yaml
location: world,0,64,0,0,0
```

This has a few special values:

- If the world name is set to `same_as_boss`, it will replace the world name with the name of the world the boss is currently in:

```yaml
location: same_as_boss,0,64,0,0,0
```

- If there are only three values matching x, y and z the teleport will be done to a location relative to the boss location. If the boss is a regional boss, the location will be relative to the boss' spawn point.

---

### TITLE_MESSAGE

Sets the action bar message for the targets.

| Values |                            Details                            | Mandatory | Special | Default |
| --- |:-------------------------------------------------------------:| :-: | :-: | :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ | ❌ |
| `title` |                    Sets the title message                     | ✅ | Can use [Color Codes](#color_codes) with `&` | ❌ |
| `subtitle` |                   Sets the subtitle message                   | ✅ | Can use [Color Codes](#color_codes) with `&` | ❌ |
| `duration` |           Sets the duration of the message (ticks)            | ✅ | ❌ | `0` |
| `fadeIn` |                   Sets fade in time (ticks)                   | ❌ | ❌ | `0` |
| `fadeOut` |                  Sets fade out time (ticks)                   | ❌ | ❌ | `0` |

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
    - action: TITLE_MESSAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      title: "&2Hello World!"
      subtitle: "&2I am a subtitle!"
      duration: 120
      fadeIn: 20
      fadeOut: 20
```

<div align="center">

![elitescript_actions_titlescreen.jpg](../../../img/wiki/elitescript_actions_titlescreen.jpg)

</div>

Will set the title message to show the title "&2Hello World!" with the subtitle "&2I am a subtitle!" to all players that are within 10 blocks from the boss.

The message will stay on screen for 8 seconds (120 + 20 + 20 = 160 ticks) including the fade in and out animation.

</div>

</details>

</div>

---

### UNTAG

Removes tags from the boss. Check `TAG` to see how tags work.

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `tags` |                         Sets the tags                         | ✅ |
| `duration` |      Sets the duration of the remove of the tags (ticks)      | ❌ |

<div align="center">

<details>

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobSpawnEvent
    Actions:
    - action: TAG
      Target:
        targetType: SELF
      tags:
      - fireworks
    - action: SPAWN_FIREWORKS
      Target:
        targetType: SELF
      wait: 20
      offset: 0,3,0
      vValue: 0,.1,0
      flicker: true
      withTrail: true
      power: 1
      fireworkEffects:
      - [ORANGE, RED]
      repeatEvery: 20
      Conditions:
        hasTags:
        - fireworks
  Example2:
    Events:
    - EliteMobEnterCombatEvent
    Actions:
    - action: UNTAG
      Target:
        targetType: SELF
      tags:
      - fireworks
```

Removes the tag "very_sus" from the boss, which can later be checked through script conditions.

</div>

</details>

</div>

---

### VISUAL_FREEZE

Gives the frozen visual effect to the player & does its associated damage. This should be combined with a repeating script if you don't want the effect to immediately fade.

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `duration` |                 Duration of effect, in ticks                  | ✅ |

<div align="center">
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
    - action: VISUAL_FREEZE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      duration: 20
      repeatEvery: 20
      times: 3
```

<div align="center">

![elitescript_actions_freeze.jpg](../../../img/wiki/elitescript_actions_freeze.jpg) VISUAL FREEZE NOT WORKING CURRENTLY SO COULD NOT TAKE SCREENSHOT

</div>

Gives all players within 10 blocks from the boss the freezing visual for 3 seconds (60 ticks).

</div>

</details>

</div>

---

# Multiple actions

Sometimes you may want to do several actions all at once when an event happens, like sending multiple messages or doing different actions sequentially. This is easily done! Let's add a potion effect action to our example:

<div align="center">

<details>

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  MessagePlayers:
    Events:
    - EliteMobDamagedEventByPlayerEvent
    Actions:
    - action: MESSAGE
      Target:
        targetType: ALL_PLAYERS
      message: I am messaging all online players!
    - action: MESSAGE
      Target:
        targetType: DIRECT_TARGET
      message: I am messaging the player that hit the boss!
```

</div>

</details>

</div>