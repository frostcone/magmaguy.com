# Acciones de Elite Script

Las acciones son el núcleo del script. Estas determinan qué hace el script y te permiten establecer intervalos personalizados.

Las acciones siempre comienzan con el tipo de acción que vas a realizar. Los diferentes tipos de acción tienen diferentes funciones. Además, todas las acciones tienen un objetivo o varios objetivos. Las acciones también pueden tener un temporizador de espera, para asegurarse de que las cosas sucedan con retrasos personalizables. Finalmente, las acciones también pueden tener otros campos específicos del tipo de acción.

## Atributos compartidos

| Valores             |                                                                                 Detalles                                                                                 | Especial |
|--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`           |                                                     [Más información aquí]($language$/elitemobs/elitescript_targets.md)                                                      | ❌ |
| `wait`             |                                                 Establece la cantidad de tiempo de espera (ticks) antes de ejecutar las acciones                                                | ❌ |
| `repeatEvery`      |        Establece las acciones para que se repitan cada cantidad determinada de ticks. Cualquier script que tenga esto establecido pero no esté usando tiempos se terminará al morir la mafia para evitar el lag.         | ❌ |
| `times`            |                                                             Establece la cantidad de veces que una acción ocurrirá                                                             | Requiere `repeatEvery` |
| `scripts`          |                                                          Establece los scripts que se ejecutarán al final de la acción                                                         | ❌ |
| `onlyRunOneScript` |                                                      Elige uno de los `scripts` al azar y solo ejecuta ese.                                                      | ❌ |
| `offset`           | Esta opción va debajo de `Target`. Te permite compensar la ubicación del objetivo. El desplazamiento no funciona con acciones que apuntan a zonas con `ZONE_FULL` o `ZONE_BORDER`. | ❌ |

## Tipos de acción

### ACTION_BAR_MESSAGE

Establece el mensaje de la barra de acción para los objetivos.

| Valores |                            Detalles                            | Obligatorio | Especial |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                            Mensaje                            | ✅ | Puede usar [Códigos de color](#color_codes) con `&` |

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

Establecerá la barra de acción para que diga Hello World a cualquier jugador que esté a menos de 10 bloques del jefe.

</div>

</details>

</div>

---

### BOSS_BAR_MESSAGE

Agrega una barra de jefe a los objetivos.

| Valores |                            Detalles                            | Obligatorio |                   Especial                    |
| --- |:-------------------------------------------------------------:| :-: |:--------------------------------------------:|
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |                      ❌                       |
| `sValue` |                            Mensaje                            | ✅ | Puede usar [Códigos de color](#color_codes) con `&` |
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

Establecerá una barra de jefe que diga Hello World a cualquier jugador que esté a menos de 10 bloques del jefe durante 1 segundo.

</div>

</details>

</div>

---

### DAMAGE

Así es como puedes dañar entidades como otras entidades.

_Nota: ¡esto usa de forma nativa el sistema de daño de EliteMobs! Esto significa que verás la reducción de armadura de élite normal de los golpes. Más sobre esto en la sección de multiplicadores._

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

Establece el daño en la mitad de la cantidad de daño base que el jefe infligiría al jugador, teniendo en cuenta las reducciones de daño.

</div>

</details>

</div>

#### multiplier

Establece el multiplicador de daño del jefe para el efecto.

**Importante**: para que los poderes se escalen de forma fácil y automática, el daño se aplica haciendo que el jefe golpee al jugador una vez y multiplicando el daño base del jefe por el multiplicador.

Esto significa que un multiplicador de 1,0 es lo mismo que un golpe normal del jefe. 2,0 es un golpe 2 veces más fuerte de lo normal y 0,5 es un 50% más difícil.

---

### MAKE_INVULNERABLE

Hace que un objetivo sea invulnerable.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `invulnerable` |               Establece si el jefe es invulnerable               | ✅ |
| `duration` |      Establece la duración de la invulnerabilidad (ticks)      | ❌ |

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

Es muy recomendable que aprendas cómo funciona la condición `hasTag` para utilizar mejor esta acción. Cuando se usa correctamente, es posible hacer que el jefe resista temporalmente o sea más débil al daño, y esto puede estar asociado a las ventajas del jugador, la ubicación del jefe o muchos otros factores.

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

Aumenta el daño infligido al jefe por los jugadores en 2x, pero solo si el jugador tiene una etiqueta llamada "CoolPlayer"

</div>

</details>

</div>

---

### MESSAGE

Envía un mensaje a los objetivos.

| Valores |                            Detalles                            | Obligatorio | Especial |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                            Mensaje                            | ✅ | Puede usar [Códigos de color](#color_codes) con `&` |

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

Enviará un mensaje de chat a todos los jugadores a menos de 10 bloques del jefe.

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
| `velocity` | Establece la velocidad de navegación del jefe. `1.0` es el valor del jefe establecido en la configuración. | ❌ | ❌ |
| `bValue` | Establece si el jefe debe ser teletransportado por la fuerza a `FinalTarget` si la navegación falla. | ❌ | ❌ |
| `duration` | Cuánto tiempo debe intentar navegar el jefe antes de rendirse. Establecer en ticks. El valor predeterminado es 100 ticks. | ✅ | ❌ |

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

Coloca un bloque en las ubicaciones objetivo durante la duración.

| Valores |                                                         Detalles                                                         | Obligatorio |
| --- |:-----------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                              [Más información aquí]($language$/elitemobs/elitescript_targets.md)                              | ✅ |
| `material` | [Material](#material) del bloque, [lista completa aquí](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | ✅ |
| `duration` |                                            Duración del efecto, en ticks                                             | ❌ |

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

_Nota: Si no se define ninguna duración, la colocación del bloque es permanente._

</div>

</details>

</div>

---

### PLAY_ANIMATION

Reproduce la animación especificada para un modelo personalizado utilizando Model Engine. Requiere Model Engine y un modelo personalizado válido para estar en el objetivo que ejecuta la animación.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |               Establece el nombre de la animación                | ✅ |

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

Reproduce un sonido en el juego.

| Valores   |                            Detalles                            | Obligatorio |
|----------|:-------------------------------------------------------------:|:---------:|
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) |     ✅     |
| `sValue` |            Establece el nombre del sonido que se reproducirá           |     ✅     |
| `pitch`  |            Establece el tono del sonido que se reproducirá            |     ❌     |
| `volume` |           Establece el volumen del sonido que se reproducirá            |     ❌     |

[¡Aquí hay una lista práctica de todos los sonidos de Minecraft!](https://www.digminecraft.com/lists/sound_list_pc.php) Recuerda que esto también puede reproducir sonidos personalizados de paquetes de recursos. 
Cuando la acción apunta a una zona, la acción reproducirá un sonido por cada bloque de esa zona. Esto puede hacer que el sonido sea considerablemente más alto de lo normal, así que considera bajar el volumen si apuntas a una zona.

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
| `potionEffectType` | Tipo de efecto, [la lista válida está aquí](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) | ✅ |
| `amplifier` |                                        Nivel de efecto de poción (comienza en 0)                                         | ✅ |
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

Empuja un objetivo por un vector establecido.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `vValue` |       Establece el vector de la velocidad que se aplicará        | ✅ |

*Nota: Esta acción también acepta vectores relativos. Obtén más información sobre cómo usarlos [aquí]($language$/elitemobs/elitescript_relative_vectors.md).*

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

Esto empujará a todos los jugadores a menos de 10 bloques del jefe al aire usando una fuerza de 0.3. Esta acción se repetirá 10 veces cada 0.5 segundos (10 ticks). En otras palabras, eso hará que este efecto dure 5 segundos (10 veces x 10 ticks = 100 ticks).

Esto hará que parezca que los jugadores están saltando.

</div>

</details>

</div>

#### vector

Los vectores se definen mediante `vValue: x,y,z`. Como ejemplo, si quieres que el objetivo sea empujado hacia arriba, puedes hacer `vValue: 0,0.3,0`.

---

### RUN_COMMAND_AS_CONSOLE

Ejecuta un comando como consola.

| Valores |                             Detalles                             | Obligatorio |
| --- |:---------------------------------------------------------------:| :-: |
| `Target` |  [Más información aquí]($language$/elitemobs/elitescript_targets.md)  | ✅ |
| `sValue` |                    Comando que se ejecutará                     | ✅ |

**Nota: ¡hay marcadores de posición disponibles! Comprueba RUN_COMMAND_AS_PLAYER, son los mismos**

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

Hace que la consola transmita el mensaje "Hello $bossName my name is $playerName. What is your level? $bossName my level is $bossLevel"

</div>

</details>

</div>

---

### RUN_COMMAND_AS_PLAYER
`
Ejecuta un comando como un `player. Requiere que el objetivo sea jugadores.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                    Comando que se ejecutará                     | ✅ |

**Nota: RUN_COMMAND_AS_PLAYER y RUN_COMMAND_AS_CONSOLE usan los siguientes marcadores de posición:**

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
      sValue: say Hello $bossName my name is $playerName.
```

<div align="center">



![elitescript_actions_commandplayer.jpg](../../../img/wiki/elitescript_actions_commandplayer.jpg)

</div>

Hace que el jugador ejecute el comando say con Hello $bossName my name is $playerName., lo que significa que solo dice "Hello $bossName my name is $playerName."

</div>

</details>

</div>

---

### RUN_SCRIPT

Esto simplemente ejecuta los scripts definidos en `scripts`. Cualquier acción puede hacer esto, esta acción solo existe como una acción de conveniencia para cuando solo quieres hacer eso.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `scripts` |                   Scripts que se ejecutarán                    | ✅ |
| `onlyRunOneScript` |         Ejecuta solo un script de la lista.           | ❌ |

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
    - action: RUN_SCRIPT
      onlyRunOneScript: false
      scripts:
      - Example1
      - Example2
  Example1:
    Actions:
    - action: DAMAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      multiplier: 0.5
  Example2:
    Actions:
    - action: MESSAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&cCool boss!: &fGotcha back!"
```

<div align="center">

![elitescript_actions_runscript.jpg](../../../img/wiki/elitescript_actions_runscript.jpg)

</div>

Cuando una élite recibe daño, ejecuta RUN_SCRIPT, que ejecuta los scripts Example1 y Example2.

El script Example1 dañará a todos los jugadores a menos de 10 bloques del jefe.
<br>El script Example2 enviará un mensaje a todos los jugadores a menos de 10 bloques del jefe con el mensaje "&cCool boss!: &fGotcha back!".

</div>

</details>

</div>

---

### SET_MOB_AI

Establece si la mafia tiene IA. En Minecraft, las mafias sin IA no se moverán ni atacarán. Todavía pueden recibir daño, pero dañarlos no hará que sean derribados.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `bValue` |               Establece si el jefe tiene IA                | ✅ |
| `duration` |              Establece el valor establecido (ticks)              | ❌ |

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
    - action: SET_MOB_AI
      Target:
        targetType: SELF
      bValue: false
      duration: 40
```

Establece que el jefe no tenga IA durante 2 segundos (40 ticks).

</div>

</details>

</div>

---

### SET_MOB_AWARE

Establece si la mafia está consciente. En Minecraft, las mafias que no están conscientes no se moverán a nuevas ubicaciones ni atacarán. Todavía pueden recibir daño y serán derribados.

Como nota, si la mafia ya se estaba moviendo a una ubicación cuando pierde la conciencia, terminará de ir a esa ubicación antes de detenerse por completo y no moverse más.

Esto significa que puedes usar mafias inconscientes para moverlas a ubicaciones definidas, a diferencia de las mafias sin IA.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `bValue` |                  Establece si está consciente                   | ✅ |
| `duration` |              Establece el valor establecido (ticks)              | ❌ |

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
    - action: SET_MOB_AWARE
      Target:
        targetType: SELF
      bValue: false
      duration: 40
```

Establece que el jefe no tenga conciencia durante 2 segundos (40 ticks).

</div>

</details>

</div>

---

### SET_ON_FIRE

Prende fuego a una entidad durante la duración.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `duration` |                Duración del efecto, en ticks                 | ✅ |

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
        targetType: NEARBY_PLAYERS
        range: 10
      duration: 60
```

<div align="center">

![elitescript_actions_setonfire.jpg](../../../img/wiki/elitescript_actions_setonfire.jpg)

</div>

Prende fuego a todos los jugadores a menos de 10 bloques del jefe durante 3 segundos (60 ticks).

</div>

</details>

</div>

---

### SET_TIME

Establece la hora del juego del mundo en el que se encuentra el objetivo.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `time` |                         Establece la hora                         | ✅ |

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
    - action: SET_TIME
      Target:
        targetType: SELF
      time: 10000
```

<div align="center">

![elitescript_actions_settime.gif](../../../img/wiki/elitescript_actions_settime.gif)

</div>

Cuando es golpeado, el jefe establecerá la hora del mundo en el que se encuentra el jefe en 10000 ticks.

</div>

</details>

</div>

---

### SET_WEATHER

Establece el clima del mundo en el que se encuentra el objetivo durante un período de tiempo determinado.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `weather` |                      Establece el tipo de clima                     | ✅ |
| `duration` |           Establece la duración del patrón climático            | ✅ |

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
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: PRECIPITATION
      duration: 120
```

<div align="center">

![elitescript_actions_setweather.gif](../../../img/wiki/elitescript_actions_setweather.gif)

</div>

Establece que el clima del mundo en el que se encuentra el jefe llueva/nieve durante el próximo minuto.

*Nota: El efecto tardará un tiempo en activarse.*

</div>

</details>

</div>

#### weather

Los siguientes son patrones climáticos válidos:

- `CLEAR` - Establece el clima en despejado
- `PRECIPITATION` - Establece el clima en lluvia/nieve, dependiendo del bioma, la altura de la ubicación y otras consideraciones de Minecraft vanilla.
- `THUNDER` - Establece el clima en tormenta eléctrica

---

### SPAWN_FIREWORKS

Genera fuegos artificiales.

| Valores |                                                                                                            Detalles                                                                                                             | Obligatorio |
| --- |:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                                                                                [Más información aquí]($language$/elitemobs/elitescript_targets.md)                                                                                 | ✅ |
| `vValue` |                                                                                          Establece la velocidad del cohete de fuegos artificiales                                                                                           | ✅ |
| `flicker` |                                                                                         Establece si las partículas de fuegos artificiales parpadearán                                                                                         | ❌ |
| `withTrail` |                                                                                        Establece si el cohete de fuegos artificiales dejará un rastro                                                                                        | ❌ |
| `power` |                                                                                               Establece el poder de los fuegos artificiales                                                                                               | ❌ |
| `fireworkEffects` |                                                                    Establece los efectos de los fuegos artificiales, en relación con el tiempo que tardará en explotar                                                                    | ✅ |
| `fireworkEffectType` |                                                Establece la forma del fuego artificial [de esta lista](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html)                                                 | ❌ |
| `fireworkEffectTypes` | Establece las formas del fuego artificial [de esta lista](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html). Esta es una lista de formas; si quieres una lista de formas, ¡no uses `fireworkEffectType`! [1] | ❌ |

[1] Cuando se usan varias formas para los fuegos artificiales, cada forma usará los colores de la lista de colores en la misma posición. Comprueba el ejemplo a continuación.

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  fireworkShot1:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SPAWN_FIREWORKS
      Target:
        targetType: SELF
        offset: 1,1.5,0
      vValue: .5,-.35,1
      flicker: false
      withTrail: false
      power: 2
      fireworkEffects:
      - [ORANGE, RED]
      - [YELLOW, BLUE]
      fireworkEffectTypes:
      - BALL_LARGE
      - STAR
```

<div align="center">

![elitescript_actions_fireworks.jpg](../../../img/wiki/elitescript_actions_fireworks.jpg)

</div>

Genera fuegos artificiales en la ubicación del jefe desplazados por x= 1, y= 1.5 y z = 0. Da a los fuegos artificiales una velocidad de x=.5, y=-.35 y z=1. Los fuegos artificiales no parpadearán ni tendrán rastros; la potencia se establece en 2, por lo que la explosión de los fuegos artificiales se retrasará esa cantidad. 

Finalmente, hay dos listas de listas de colores: la lista 1 es naranja y rojo y la lista 2 es amarillo y azul. Hay dos formas para los fuegos artificiales: BALL\_LARGE y STAR. Esto significa que BALL\_LARGE (elemento 1) usará colores naranja y rojo (lista 1) y STAR (elemento 2) usará colores amarillo y azul (lista 2).

</div>

</details>

</div>

#### fireworkEffects

Estos son los efectos que mostrará el cohete de fuegos artificiales. Se requiere al menos un efecto. Los siguientes son efectos válidos:

- WHITE, SILVER, GRAY, BLACK, RED, MAROON, YELLOW, OLIVE, LIME, GREEN, AQUA, TEAL, BLUE, NAVY, FUCHSIA, PURPLE, ORANGE

---

### STRIKE_LIGHTNING

Golpea un rayo. Este es un efecto visual, si quieres daño, debes agregar una acción de daño.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |

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
    - action: STRIKE_LIGHTNING
      Target:
        targetType: SELF
      repeatEvery: 5
      times: 5
```

<div align="center">

![elitescript_actions_strike.jpg](../../../img/wiki/elitescript_actions_strike.jpg)

</div>

Golpea un rayo al jefe cada 5 ticks durante 5 veces.

</div>

</details>

</div>

---

### SPAWN_FALLING_BLOCK

Genera un bloque que cae sobre el objetivo. Solo visual, no coloca el bloque.

| Valores           |                                                                                      Detalles                                                                                       | Obligatorio |
|------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`         |                                                           [Más información aquí]($language$/elitemobs/elitescript_targets.md)                                                            | ✅ |
| `material`       | Establece el [Material](#material) del bloque que cae. [Comprueba los tipos válidos aquí](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) y asegúrate de que sean un material de bloque válido. | ✅ |
| `landingScripts` |                                                            Establece la lista de scripts que se ejecutarán cuando caiga el bloque                                                             | ✅ |
| `vValue`         | Establece la velocidad y la dirección de un bloque que cae. | ✅ |

`landingScripts` funciona de la misma manera que [`RUN_SCRIPT`]($language$/elitemobs/elitescript_actions.md&section=run_script) pero puede aceptar el tipo de objetivo especial `LANDING_LOCATION`.

*Nota: Esta acción también acepta vectores relativos. Obtén más información sobre cómo usarlos [aquí]($language$/elitemobs/elitescript_relative_vectors.md).*

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
    - action: SPAWN_FALLING_BLOCK
      Target:
        targetType: SELF
        offset: 3,10,0
      material: STONE
      vValue: 0,0,0
      landingScripts:
      - LandingScriptExample
  LandingScriptExample:
    Actions:
    - action: PLACE_BLOCK
      Target:
        targetType: LANDING_LOCATION
      duration: 200
      material: STONE
```

<div align="center">

![elitescript_actions_block.gif](../../../img/wiki/elitescript_actions_block.gif)

</div>

Cuando el jefe es golpeado, este script generará un bloque de piedra que cae 10 bloques por encima y 3 bloques al lado de la ubicación del jefe.

Una vez que el bloque cae, ejecutará el script LandingScriptExample, que colocará un bloque de piedra en la ubicación donde cayó el bloque.
El bloque permanecerá allí durante 10 segundos (200 ticks) antes de desaparecer.

</div>

</details>

</div>

---

### SPAWN_PARTICLE

Genera partículas en el objetivo.

**Nota: ¡Si no se establece la cobertura, la cobertura se establecerá en 0.3 de forma predeterminada!**

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `particles` |           Enumera las partículas que se generarán           | ✅ |

#### particles

Las partículas tienen su propia configuración especial, que es la siguiente:

| Valores | Detalles | Predeterminado | Especial |
| --- | :-: | :-: | :-: |
| `x` | Establece el desplazamiento de X | 0.01 | (1) |
| `y` | Establece el desplazamiento de Y | 0.01 | (1) |
| `z` | Establece el desplazamiento de Z | 0.01 | (1) |
| `amount` | Establece la cantidad de partículas generadas | 1 | (1) |
| `speed` | Establece la velocidad de las partículas | 0.01 | ❌ |
| `particle` | Establece el tipo de entidad | `FLAME` | [¡Elige de esta lista!](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) |
| `red` | Establece el valor rojo | `255` | (2) |
| `green` | Establece el valor verde | `255` | (2) |
| `blue` | Establece el valor azul | `255` | (2) |
| `toRed` | Establece el valor rojo final | `255` | (3) |
| `toGreen` | Establece el valor verde final | `255` | (3) |
| `toBlue` | Establece el valor azul final | `255` | (3) |

_(1) Si `amount` se establece en 0, `x`, `y` y `z` establecerán la velocidad de la partícula en su lugar._

_(2) Solo para las `particle`s `REDSTONE`, `DUST_COLOR_TRANSITION`, `SPELL_MOB` y `SPELL_MOB_AMBIENT`_

_(3) Solo para la `particle` `DUST_COLOR_TRANSITION`_

Es importante tener en cuenta que un script SPAWN_PARTICLE puede generar varias partículas. Cada partícula puede tener sus propios campos de configuración dentro de la acción SPAWN_PARTICLE. Aquí hay un ejemplo:

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

Esto generará un cilindro hecho de partículas de fuego y humo alrededor del jugador que dañó al jefe.

</div>

</details>

</div>

#### Mover una partícula:

Es posible establecer una velocidad específica para una partícula, y funciona de la misma manera que lo hace la API de Spigot. Esto permite a los programadores de scripts configurar una partícula para que vaya en una dirección específica a una velocidad específica. No es posible hacer que las partículas cambien de dirección a mitad de camino. Este efecto se utiliza en el encantamiento lanzallamas y el poder del jefe.

Para mover una partícula, establece `amount: 0`. Esto le indicará a Minecraft que los valores `x`, `y` y `z` son en realidad un vector. Este vector establece la dirección hacia la que irá tu partícula.

Digamos que quieres que una partícula `FLAME` suba. Para hacer esto, quieres un valor `y` positivo, y nada más. Finalmente, querrás establecer la velocidad en lo que quieres que sea la velocidad. Aquí hay un ejemplo completo:

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

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

Esto generará una partícula de fuego en la ubicación del jefe que subirá.

</div>

</details>

</div>

---

### SUMMON_REINFORCEMENT

Invoca refuerzos de los jefes personalizados de EliteMobs.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |      Establece el nombre de archivo del refuerzo de jefe personalizado      | ✅ |
| `duration` |         Establece la duración del refuerzo (ticks)         | ❌ |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

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

Genera el refuerzo con el nombre de archivo "your_boss_file.yml" en la ubicación del jefe.

</div>

</details>

</div>

---

### SUMMON_ENTITY

MAGMA POR FAVOR RELLENE ESTA SECCIÓN CON INFORMACIÓN CORRECTA,



| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                Establece el tipo de entidad que se generará                 | ✅ |

*Nota: Esta acción también acepta vectores relativos. Obtén más información sobre cómo usarlos [aquí]($language$/elitemobs/elitescript_relative_vectors.md).*

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Events:
      - EliteMobEnterCombatEvent
    Actions:
      - action: SUMMON_ENTITY
        Target:
          targetType: DIRECT_TARGET
        sValue: ZOMBIE
```

Establece al jefe para que genere un ZOMBIE en la ubicación del jefe.

</div>

</details>

</div>

---

### TAG

Agrega etiquetas a los jefes o jugadores. Las etiquetas son solo cadenas o palabras que los programadores de scripts pueden definir. Estas solo se utilizan para ejecutar comprobaciones de condición y no tienen un efecto directo en el juego fuera de para lo que se utilizan en los scripts.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `tags` |                         Establece las etiquetas                         | ✅ |
| `duration` |             Establece la duración de las etiquetas (ticks)              | ❌ |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
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

Etiqueta al jefe con la cadena "very_sus", que luego se puede verificar a través de las condiciones del script.

**Importante:** Solo es posible etiquetar jugadores y mafias de élite.

</div>

</details>

</div>

---

### TELEPORT

Teletransporta el (los) objetivo (s) a la ubicación definida.

| Valores |                                                     Detalles                                                     | Obligatorio |
| --- |:--------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |   Establece _quién_ será teletransportado. [¡Información general del objetivo aquí!]($language$/elitemobs/elitescript_targets.md)   | ✅ |
| `FinalTarget` | Establece _dónde_ serán teletransportados. [¡Información general del objetivo aquí!]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `location` |                                               Ubicación de teletransporte                                                | ✅ |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
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

Esto teletransportaría a todos los jugadores que estén a menos de 10 bloques del jefe a la ubicación de generación del jefe.

</div>

</details>

</div>

#### location

Establece la ubicación a la que se teletransportará al jugador. El formato es el EliteMobs estándar `world_name,x,y,z,pitch,yaw`.

Ejemplo

```yaml
location: world,0,64,0,0,0
```

Esto tiene algunos valores especiales:

- Si el nombre del mundo se establece en `same_as_boss`, reemplazará el nombre del mundo con el nombre del mundo en el que se encuentra actualmente el jefe:

```yaml
location: same_as_boss,0,64,0,0,0
```

- Si solo hay tres valores que coinciden con x, y y z, el teletransporte se realizará a una ubicación relativa a la ubicación del jefe. Si el jefe es un jefe regional, la ubicación será relativa al punto de generación del jefe.

---

### TITLE_MESSAGE

Establece el mensaje de la barra de acción para los objetivos.

| Valores |                            Detalles                            | Obligatorio | Especial | Predeterminado |
| --- |:-------------------------------------------------------------:| :-: | :-: | :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ | ❌ |
| `title` |                     Establece el mensaje del título                     | ✅ | Puede usar [Códigos de color](#color_codes) con `&` | ❌ |
| `subtitle` |                    Establece el mensaje del subtítulo                    | ✅ | Puede usar [Códigos de color](#color_codes) con `&` | ❌ |
| `duration` |           Establece la duración del mensaje (ticks)           | ✅ | ❌ | `0` |
| `fadeIn` |                   Establece el tiempo de fundido de entrada (ticks)                   | ❌ | ❌ | `0` |
| `fadeOut` |                  Establece el tiempo de fundido de salida (ticks)                   | ❌ | ❌ | `0` |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
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

Establecerá el mensaje del título para mostrar el título "&2Hello World!" con el subtítulo "&2I am a subtitle!" a todos los jugadores que estén a menos de 10 bloques del jefe.

El mensaje permanecerá en pantalla durante 8 segundos (120 + 20 + 20 = 160 ticks) incluida la animación de fundido de entrada y salida.

</div>

</details>

</div>

---

### UNTAG

Elimina etiquetas del jefe. Consulte `TAG` para ver cómo funcionan las etiquetas.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `tags` |                         Establece las etiquetas                         | ✅ |
| `duration` |      Establece la duración de la eliminación de las etiquetas (ticks)       | ❌ |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
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
  Ejemplo2:
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

</div>

</details>

</div>

---

### VISUAL_FREEZE

Da el efecto visual congelado al jugador y hace el daño asociado. Esto debe combinarse con un script repetitivo si no quieres que el efecto se desvanezca inmediatamente.

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
  Ejemplo:
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

![elitescript_actions_freeze.jpg](../../../img/wiki/elitescript_actions_freeze.jpg) VISUAL FREEZE NO FUNCIONA ACTUALMENTE, POR LO QUE NO SE PUDO TOMAR UNA CAPTURA DE PANTALLA

</div>

Da a todos los jugadores a menos de 10 bloques del jefe la imagen de congelación durante 3 segundos (60 ticks).

</div>

</details>

</div>

---

# Múltiples acciones

A veces, es posible que desees realizar varias acciones a la vez cuando ocurre un evento, como enviar varios mensajes o realizar diferentes acciones secuencialmente. ¡Esto se hace fácilmente! Agreguemos una acción de efecto de poción a nuestro ejemplo:

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
      message: ¡Estoy enviando un mensaje al jugador que golpeó al jefe!
```

</div>

</details>

</div>


