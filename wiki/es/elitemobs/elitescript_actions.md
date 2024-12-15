```yaml
    - action: RUN_COMMAND_AS_PLAYER
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: say Hello my name is $bossName. What is your level? my level is $bossLevel.
```

Makes the player that hit the boss say "Hello my name is $bossName. What is your level? my level is $bossLevel."

</div>

</details>

</div>

---

### SET_ON_FIRE

Sets the target on fire.

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `duration` |                        Duration (ticks)                       | ✅ |

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
    - action: SET_ON_FIRE
      Target:
        targetType: SELF
      duration: 60
```

Sets the boss on fire for 3 seconds.

</div>

</details>

</div>

---

### SUMMON_REINFORCEMENT

Summons a reinforcement.

*Note: you should generally summon custom bosses via this action. You can read the boss config documentation for that [here]($language$/elitemobs/creating_bosses.md).*

| Values |                Details                 | Mandatory |
| --- |:-------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `filename` | Filename of the boss to be spawned | ✅ |
| `inheritLevel` |     Sets if the boss should inherit the level of the boss that spawned it      | ❌ |
| `inheritAggro` |   Sets if the boss should inherit the aggro of the boss that spawned it      | ❌ |
| `spawnNearby` |   Sets if the boss should spawn nearby the main boss instead of on top.    | ❌ |
| `location` | Sets where the boss will spawn, relative to the position of the first target. | ❌ |

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
    - action: SUMMON_REINFORCEMENT
      Target: 
        targetType: SELF
      filename: "test_boss.yml"
      inheritLevel: true
      inheritAggro: true
      spawnNearby: true
```

Spawns a reinforcement "test_boss.yml" that inherets the level and aggro of the parent boss and appears near it.

</div>

</details>

</div>

---

### TELEPORT

Teleports the target.

| Values |                        Details                        | Mandatory |
| --- |:-------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `location` |   Where the target should be teleported to   | ✅ |

*Note: this also accepts relative vectors. Learn more about how to use those [here]($language$/elitemobs/elitescript_relative_vectors.md).*

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
      location: 0,10,0
```

Teleports the boss 10 blocks upwards.

</div>

</details>

</div>

#### location

You can set any specific location, such as `location: world,100,100,100`, but you can also use offsets and relative directions. If you want to offset by a specific distance, you can just write something like `location: 0,10,0` to make it teleport the boss 10 blocks up.

        targetType: ZONE_BORDER
      particles:
      - particle: FIREWORK_SPARK
        amount: 10
        x: 0
        y: 0.5
        z: 0
      - particle: SMOKE_NORMAL
        amount: 1
        x: 0.2
        y: 0
        z: 0.2
  Example2:
    Actions:
    - action: RUN_SCRIPT
      scripts:
      - Example
```

When the boss is damaged, it spawns particles around the Zone shape defined. The first set of particles are firework particles being pushed out by a vector, and the second one are smoke particles, to give a dynamic smoke cloud effect.

</div>

</details>

</div>
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Acciones de Elite Script

Las acciones son el núcleo del script. Estas determinan lo que hace el script y le permiten establecer intervalos personalizados.

Las acciones siempre comienzan con el tipo de acción que va a realizar. Los diferentes tipos de acción cumplen diferentes funciones. Además, todas las acciones tienen un objetivo u objetivos. Las acciones también pueden tener un temporizador de espera para asegurarse de que las cosas sucedan con retrasos personalizables. Finalmente, las acciones también pueden tener otros campos específicos para el tipo de acción.

## Atributos compartidos

| Valores             |                                                                                 Detalles                                                                                  | Especial |
|--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`           |                                                      [Más información aquí]($language$/elitemobs/elitescript_targets.md)                                                       | ❌ |
| `wait`             |                                                 Establece la cantidad de tiempo que se debe esperar (ticks) antes de ejecutar las acciones                                                 | ❌ |
| `repeatEvery`      |        Establece que las acciones se repitan cada cantidad establecida de ticks. Cualquier script que tenga esto establecido pero no esté usando tiempos finalizará al morir el mob para evitar el retraso.         | ❌ |
| `times`            |                                                                  Establece la cantidad de veces que se producirá una acción                                                                  | Requiere `repeatEvery` |
| `scripts`          |                                                          Establece los scripts que se ejecutarán al final de la acción                                                          | ❌ |
| `onlyRunOneScript` |                                                       Elige uno de los `scripts` al azar y solo ejecuta ese.                                                       | ❌ |
| `offset`           | Esta opción va debajo de `Target`. Le permite desplazar la ubicación de destino. El desplazamiento no funciona con acciones que se dirigen a zonas con `ZONE_FULL` o `ZONE_BORDER`. | ❌ |
| `debug`           | Esta opción va debajo de la sección de acción del script. Cuando se establece en verdadero, mostrará iconos de barrera en el área en la que está la acción. | ❌ |

## Tipos de acción

### ACTION_BAR_MESSAGE

Establece el mensaje de la barra de acción para los objetivos.

| Valores |                            Detalles                            | Obligatorio | Especial |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                            Mensaje                            | ✅ | Puede usar [códigos de color](#color_codes) con `&` |

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
      sValue: "&2¡Hola Mundo!"
```

<div align="center">

![elitescript_actions_actionbar.jpg](../../../img/wiki/elitescript_actions_actionbar.jpg)

</div>

Establecerá que la barra de acción diga Hola Mundo a todos los jugadores que estén a 10 bloques del jefe.

</div>

</details>

</div>

---

### BOSS_BAR_MESSAGE

Agrega una barra de jefe al objetivo(s).

| Valores |                            Detalles                            | Obligatorio |                   Especial                    |
| --- |:-------------------------------------------------------------:| :-: |:--------------------------------------------:|
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |                      ❌                       |
| `sValue` |                            Mensaje                            | ✅ | Puede usar [códigos de color](#color_codes) con `&` |
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
      sValue: "&2¡Hola Mundo!"
```

<div align="center">

![elitescript_actions_bossbar.jpg](../../../img/wiki/elitescript_actions_bossbar.jpg)

</div>

Establecerá una barra de jefe que dice Hola Mundo a todos los jugadores que estén a 10 bloques del jefe durante 1 segundo.

</div>

</details>

</div>

---

### DAMAGE

Así es como puede dañar entidades como otras entidades.

_Nota: ¡Esto utiliza de forma nativa el sistema de daño de EliteMobs! Esto significa que verá la reducción de armadura de élite normal de los golpes. Más sobre esto en la sección de multiplicadores._

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

Establece que el daño sea la mitad de la cantidad de daño base que el jefe infligiría al jugador, teniendo en cuenta las reducciones de daño.

</div>

</details>

</div>

#### multiplier

Establece el multiplicador de daño del jefe para el efecto.

**Importante**: para que los poderes se escalen de forma fácil y automática, el daño se aplica haciendo que el jefe golpee al jugador una vez y multiplicando el daño base del jefe por el multiplicador.

Esto significa que un multiplicador de 1.0 es lo mismo que un golpe normal del jefe. 2.0 es un golpe con el doble de fuerza normal y 0.5 es el 50 % de la fuerza.

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

Modifica el daño infligido a un jefe o infligido a los jugadores por ese jefe. Esta es una acción especial con algunos requisitos especiales.

| Valores | Detalles | Obligatorio |
| --- | :-: | :-: |
| `multiplier` | Multiplicador de daño. | ✅ |

Esta acción es especial y debe estar en un script que tenga un detector de eventos para un evento de daño. Los siguientes son eventos de daño válidos: `EliteMobDamagedByEliteMobEvent`, `EliteMobDamagedByPlayerEvent`, `EliteMobDamagedEvent` para eventos que reducen el daño infligido al jefe y `PlayerDamagedByEliteMobEvent` para eventos que reducen el daño infligido a los jugadores.

Se recomienda encarecidamente que aprenda cómo funciona la condición `hasTag` para utilizar mejor esta acción. Cuando se usa correctamente, es posible hacer que el jefe se resista temporalmente o sea más débil al daño, y esto se puede asociar con mejoras de jugador, la ubicación del jefe o muchos otros factores.

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

Aumenta el daño infligido al jefe por los jugadores en 2 veces, pero solo si el jugador tiene una etiqueta llamada "CoolPlayer"

</div>

</details>

</div>

---

### MESSAGE

Envía un mensaje a los objetivos.

| Valores |                            Detalles                            | Obligatorio | Especial |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                            Mensaje                            | ✅ | Puede usar [códigos de color](#color_codes) con `&` |

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

| Valores |                            Detalles                            | Obligatorio | Especial |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `FinalTarget` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `velocity` | Establece la velocidad de navegación del jefe. `1.0` es el valor del jefe tal como se establece en la configuración. | ❌ | ❌ |
| `bValue` | Establece si el jefe debe ser teletransportado por la fuerza a `FinalTarget` si falla la navegación. | ❌ | ❌ |
| `duration` | Cuánto tiempo debe intentar navegar el jefe antes de darse por vencido. Establecido en ticks. El valor predeterminado es 100 ticks. | ✅ | ❌ |

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

Coloca un bloque en la ubicación(es) de destino durante la duración.

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

Coloca una cúpula de vidrio alrededor del jefe que durará 6 segundos.

_Nota: si no se define ninguna duración, la colocación del bloque es permanente._

</div>

</details>

</div>

---

### PLAY_ANIMATION

Reproduce la animación especificada para un modelo personalizado utilizando Model Engine. Requiere que Model Engine y un modelo personalizado válido estén en el objetivo que ejecuta la animación.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                Establece el nombre de la animación                | ✅ |

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

Reproduce un sonido del juego.

| Valores   |                            Detalles                            | Obligatorio |
|----------|:-------------------------------------------------------------:|:---------:|
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) |     ✅     |
| `sValue` |            Establece el nombre del sonido que se reproducirá            |     ✅     |
| `pitch`  |           Establece el tono del sonido que se reproducirá            |     ❌     |
| `volume` |           Establece el volumen del sonido que se reproducirá           |     ❌     |

[Aquí hay una lista útil de todos los sonidos de Minecraft](https://www.digminecraft.com/lists/sound_list_pc.php) ¡Recuerde que esto también puede reproducir sonidos personalizados de paquetes de recursos!
Cuando la acción se dirige a una zona, la acción reproducirá un sonido para cada bloque de esa zona. Esto puede hacer que el sonido sea considerablemente más alto de lo normal, así que considere bajar el volumen si se dirige a una zona.

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

Reproduce el sonido de resonancia de las campanas de Minecraft en la ubicación del jefe

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
| `amplifier` |                                          Nivel de efecto de poción (comienza en 0)                                          | ✅ |
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

Esto hará que cualquier jugador que esté a 10 bloques del jefe levite durante 2 segundos (40 ticks).

</div>

</details>

</div>

---

### PUSH

Empuja a un objetivo mediante un vector establecido.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `vValue` |       Establece el vector de la velocidad que se aplicará        | ✅ |

*Nota: esta acción también acepta vectores relativos. Obtenga más información sobre cómo usarlos [aquí]($language$/elitemobs/elitescript_relative_vectors.md).*

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

Esto empujará a todos los jugadores que estén a 10 bloques del jefe hacia el aire con una fuerza de 0.3. Esta acción se repetirá 10 veces cada 0.5 segundos (10 ticks). En otras palabras, esto hará que este efecto dure 5 segundos (10 veces x 10 ticks = 100 ticks).

Esto hará que parezca que los jugadores están saltando.

</div>

</details>

</div>

#### vector

Los vectores se definen mediante `vValue: x,y,z`. Como ejemplo, si desea que el objetivo sea empujado hacia arriba, puede hacer `vValue: 0,0.3,0`.

---

### RUN_COMMAND_AS_CONSOLE

Ejecuta un comando como consola.

| Valores |                             Detalles                             | Obligatorio |
| --- |:---------------------------------------------------------------:| :-: |
| `Target` |  [Más información aquí]($language$/elitemobs/elitescript_targets.md)  | ✅ |
| `sValue` |                    Comando que se ejecutará                     | ✅ |

**Nota: ¡hay marcadores de posición disponibles! Consulte RUN_COMMAND_AS_PLAYER, son los mismos**

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
      sValue: say Hola $bossName mi nombre es $playerName. ¿Cuál es tu nivel? $bossName mi nivel es $bossLevel.
```

<div align="center">

![elitescript_actions_commandconsole.jpg](../../../img/wiki/elitescript_actions_commandconsole.jpg)

</div>

Hace que la consola transmita el mensaje "Hola $bossName mi nombre es $playerName. ¿Cuál es tu nivel? $bossName mi nivel es $bossLevel"

</div>

</details>

</div>

---

### RUN_COMMAND_AS_PLAYER
`
Ejecuta un comando como `player`. Requiere que el objetivo sean jugadores.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                   Comando que se ejecutará                    | ✅ |

**Nota: RUN_COMMAND_AS_PLAYER y RUN_COMMAND_AS_CONSOLE utilizan los siguientes marcadores de posición:**

| Marcador de posición | Detalles | Especial |
| --- | :-: | :-: |
| `$playerName` | Nombre para mostrar del jugador | El objetivo debe ser un jugador |
| `$playerX` | Ubicación X del jugador | El objetivo debe ser un jugador |
| `$playerY` | Ubicación Y del jugador | El objetivo debe ser un jugador |
| `$playerZ` | Ubicación Z del jugador | El objetivo debe ser un jugador |
| `$bossName` | Nombre para mostrar del jugador | El objetivo debe ser un jugador |
| `$bossX` | Ubicación X del jefe | ❌ |
| `$bossY` | Ubicación Y del jefe | ❌ |
| `$bossZ` | Ubicación Z del jefe | ❌ |
| `$bossLevel` | Nivel del jefe | ❌ |

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
    - action: RUN_COMMAND_AS_PLAYER
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: say Hola mi nombre es $bossName. ¿Cuál es tu nivel? mi nivel es $bossLevel.
```

Hace que el jugador que golpeó al jefe diga "Hola mi nombre es $bossName. ¿Cuál es tu nivel? mi nivel es $bossLevel".

</div>

</details>

</div>

---

### SET_ON_FIRE

Hace que el objetivo se incendie.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `duration` |                        Duración (ticks)                       | ✅ |

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
    - action: SET_ON_FIRE
      Target:
        targetType: SELF
      duration: 60
```

Hace que el jefe se incendie durante 3 segundos.

</div>

</details>

</div>

---

### SUMMON_REINFORCEMENT

Invoca un refuerzo.

*Nota: por lo general, debe invocar jefes personalizados a través de esta acción. Puede leer la documentación de configuración del jefe para eso [aquí]($language$/elitemobs/creating_bosses.md).*

| Valores |                Detalles                 | Obligatorio |
| --- |:-------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `filename` | Nombre del archivo del jefe que se generará | ✅ |
| `inheritLevel` |     Establece si el jefe debe heredar el nivel del jefe que lo generó      | ❌ |
| `inheritAggro` |   Establece si el jefe debe heredar el aggro del jefe que lo generó      | ❌ |
| `spawnNearby` |   Establece si el jefe debe aparecer cerca del jefe principal en lugar de encima.    | ❌ |
| `location` | Establece dónde aparecerá el jefe, en relación con la posición del primer objetivo. | ❌ |

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
    - action: SUMMON_REINFORCEMENT
      Target:
        targetType: SELF
      filename: "test_boss.yml"
      inheritLevel: true
      inheritAggro: true
      spawnNearby: true
```

Genera un refuerzo "test_boss.yml" que hereda el nivel y el aggro del jefe principal y aparece cerca de él.

</div>

</details>

</div>

---

### TELEPORT

Teletransporta al objetivo.

| Valores |                        Detalles                        | Obligatorio |
| --- |:-------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `FinalTarget` | Establece _a dónde_ serán teletransportados. [Información general de objetivos aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `location` |                                               Ubicación de teletransportación                                                | ✅ |

*Nota: esto también acepta vectores relativos. Obtenga más información sobre cómo usarlos [aquí]($language$/elitemobs/elitescript_relative_vectors.md).*

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

Esto teletransportaría a todos los jugadores que están a 10 bloques del jefe a la ubicación de generación del jefe.

</div>

</details>

</div>

#### location

Establece la ubicación a la que será teletransportado el jugador. El formato es el estándar de EliteMobs `nombre_mundo,x,y,z,cabeceo,guiñada`.

Ejemplo

```yaml
location: world,0,64,0,0,0
```

Esto tiene algunos valores especiales:

- Si el nombre del mundo se establece en `same_as_boss`, reemplazará el nombre del mundo con el nombre del mundo en el que se encuentra actualmente el jefe:

```yaml
location: same_as_boss,0,64,0,0,0
```

- Si solo hay tres valores que coinciden con x, y y z, la teletransportación se realizará a una ubicación relativa a la ubicación del jefe. Si el jefe es un jefe regional, la ubicación será relativa al punto de aparición del jefe.

---

### TITLE_MESSAGE

Establece el mensaje de la barra de acción para los objetivos.

| Valores |                            Detalles                            | Obligatorio | Especial | Predeterminado |
| --- |:-------------------------------------------------------------:| :-: | :-: | :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ | ❌ |
| `title` |                    Establece el mensaje de título                     | ✅ | Puede usar [códigos de color](#color_codes) con `&` | ❌ |
| `subtitle` |                   Establece el mensaje de subtítulo                   | ✅ | Puede usar [códigos de color](#color_codes) con `&` | ❌ |
| `duration` |           Establece la duración del mensaje (ticks)            | ✅ | ❌ | `0` |
| `fadeIn` |                   Establece el tiempo de aparición (ticks)                   | ❌ | ❌ | `0` |
| `fadeOut` |                  Establece el tiempo de desaparición (ticks)                   | ❌ | ❌ | `0` |

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
    - action: TITLE_MESSAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      title: "&2¡Hola Mundo!"
      subtitle: "&2¡Soy un subtítulo!"
      duration: 120
      fadeIn: 20
      fadeOut: 20
```

<div align="center">

![elitescript_actions_titlescreen.jpg](../../../img/wiki/elitescript_actions_titlescreen.jpg)

</div>

Establecerá que el mensaje de título muestre el título "&2¡Hola Mundo!" con el subtítulo "&2¡Soy un subtítulo!" a todos los jugadores que estén a 10 bloques del jefe.

El mensaje permanecerá en pantalla durante 8 segundos (120 + 20 + 20 = 160 ticks), incluida la animación de aparición y desaparición.

</div>

</details>

</div>

---

### UNTAG

Elimina etiquetas de los jefes. Consulte `TAG` para ver cómo funcionan las etiquetas.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `tags` |                         Establece las etiquetas                         | ✅ |
| `duration` |      Establece la duración de la eliminación de las etiquetas (ticks)      | ❌ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

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

Elimina la etiqueta "very_sus" del jefe, que luego se puede verificar a través de las condiciones del script.

**Importante:** Solo es posible etiquetar a jugadores y mobs de élite.

</div>

</details>

</div>

---

### VISUAL_FREEZE

Otorga el efecto visual de congelación al jugador y realiza el daño asociado. Esto debe combinarse con un script repetido si no desea que el efecto se desvanezca de inmediato.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `duration` |                 Duración del efecto, en ticks                  | ✅ |

<div align="center">
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
    - action: VISUAL_FREEZE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      duration: 20
      repeatEvery: 20
      times: 3
```

<div align="center">

![elitescript_actions_freeze.jpg](../../../img/wiki/elitescript_actions_freeze.jpg) EFECTO VISUAL DE CONGELACIÓN QUE NO FUNCIONA ACTUALMENTE, POR LO QUE NO SE PUDO TOMAR LA CAPTURA DE PANTALLA

</div>

Otorga a todos los jugadores que estén a 10 bloques del jefe el efecto visual de congelación durante 3 segundos (60 ticks).

</div>

</details>

</div>

---

# Múltiples acciones

A veces, es posible que desee realizar varias acciones a la vez cuando ocurre un evento, como enviar varios mensajes o realizar diferentes acciones secuencialmente. ¡Esto se hace fácilmente! Agreguemos una acción de efecto de poción a nuestro ejemplo:

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

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
      message: ¡Estoy enviando mensajes a todos los jugadores en línea!
    - action: MESSAGE
      Target:
        targetType: DIRECT_TARGET
      message: ¡Estoy enviando mensajes al jugador que golpeó al jefe!
```

</div>

</details>

</div>
