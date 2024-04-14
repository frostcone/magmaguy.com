# Acciones de guión Elite

Las acciones son el núcleo del guión. Estas determinan lo que el guión hace y te permiten establecer intervalos personalizados.

Las acciones siempre comienzan con el tipo de acción que vas a realizar. Diferentes tipos de acciones cumplen diferentes funciones. Además, todas las acciones tienen un objetivo o objetivos. Las acciones también pueden tener un temporizador de espera, para asegurar que las cosas sucedan con retrasos personalizables. Por último, las acciones también pueden tener varios otros campos específicos para el tipo de acción.

## Atributos compartidos

| Valores             |                                                                                 Detalles                                                                                  | Especial |
|---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`           |                                                      [Más información aquí]($language$/elitemobs/elitescript_targets.md)                                                       | ❌ |
| `wait`             |                                                      Establece la cantidad de tiempo para esperar antes de ejecutar las acciones                                                      | ❌ |
| `repeatEvery`      |        Establece las acciones para repetir cada cierta cantidad de ticks. Cualquier guión que tenga esto configurado pero no esté utilizando tiempos será terminado tras la muerte del mob para evitar el lag.         | ❌ |
| `times`            |                                                            Establece la cantidad de veces que ocurrirá una acción                                                            | Requiere `repeatEvery` |
| `scripts`          |                                                         Establece los guiones que se ejecutarán al final de la acción                                                          | ❌ |
| `onlyRunOneScript` |                                                       Selecciona uno de los `scripts` al azar y solo ejecuta ese.                                                       | ❌ |
| `offset`           | Esta opción va debajo de `Target`. Te permite desplazar la ubicación del objetivo. Offset no funciona con acciones que están apuntando a zonas con `ZONE_FULL` o `ZONE_BORDER`. | ❌ |

## Tipos de acciones

### ACTION_BAR_MESSAGE

Establece el mensaje de la barra de acción para los objetivos.

| Valores |                           Detalles                             | Obligatorio | Especial |
| --- |:--------------------------------------------------------------:| :-: | :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                            Mensaje                             | ✅ | Puede usar [Códigos de Color](#color_codes) con `&` |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
    - EliteMobDañadoPorEventoDeJugador
    Acciones:
    - action: ACTION_BAR_MESSAGE
      Target: 
        targetType: JUGADORES_CERCANOS
        range: 10
      sValue: "&2¡Hola Mundo!"
```

<div align="center">

![elitescript_actions_actionbar.jpg](../../../img/wiki/elitescript_actions_actionbar.jpg)

</div>

Establecerá la barra de acción para decir Hola Mundo a cualquier jugador que esté dentro de los 10 bloques del jefe.

</div>

</details>

</div>

---

### BOSS_BAR_MESSAGE

Agrega una barra de jefe al/los objetivo(s).

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
  Ejemplo:
    Eventos:
    - EliteMobDañadoPorEventoDeJugador
    Acciones:
    - action: BOSS_BAR_MESSAGE
      Target: 
        targetType: JUGADORES_CERCANOS
        range: 10
      duración: 120
      sValue: "&2¡Hola Mundo!"
```

<div align="center">

![elitescript_actions_bossbar.jpg](../../../img/wiki/elitescript_actions_bossbar.jpg)

</div>

Establecerá una barra de jefe diciendo Hola Mundo a cualquier jugador que esté dentro de los 10 bloques del jefe durante 1 segundo.

</div>

</details>

</div>

---

### DAMAGE

Esta es la forma de dañar entidades como otras entidades.

_Nota: ¡esto usa nativamente el sistema de daño de EliteMobs! Esto significa que verás la reducción normal de la armadura de élite de los golpes. Más detalles en la sección de multiplicadores._

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `multiplicador` |                      Multiplicador de daño                       | ✅ |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
    - EliteMobDañadoPorEventoDeJugador
    Acciones:
    - action: DAMAGE
      Target: 
        targetType: JUGADORES_CERCANOS
        range: 10
      multiplicador: 0.5
```

Establece el daño a la mitad del daño base que el jefe haría al jugador, teniendo en cuenta las reducciones de daño.

</div>

</details>

</div>

#### multiplicador

Establece el multiplicador de daño del jefe para el efecto.

**Importante**: para que los poderes escalen fácil y automáticamente, el daño se aplica haciendo que el jefe golpee al jugador una vez y multiplicando el daño base del jefe con el multiplicador.

Esto significa que un multiplicador de 1.0 es lo mismo que un golpe normal del jefe. 2.0 es un golpe 2x la fuerza normal, y 0.5 es 50% tan duro.

---

### MAKE_INVULNERABLE

Hace a un objetivo invulnerable.

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
  Ejemplo:
    Eventos:
    - EliteMobDañadoPorEventoDeJugador
    Acciones:
    - action: MAKE_INVULNERABLE
      Target:
        targetType: YO
      duration: 60
```

Hace a un jefe invulnerable por 60 ticks (3 segundos).

</div>

</details>

</div>

---

### MODIFY_DAMAGE

Modifica el daño infligido a un jefe o infligido a los jugadores por ese jefe. Esta es una acción especial con unos pocos requisitos especiales.

| Valores | Detalles | Obligatorio |
| --- | :-: | :-: |
| `multiplicador` | Multiplicador de daño. | ✅ |

Esta acción es especial y debe estar en un guión que tenga un escuchador de eventos para un evento de daño. Los siguientes son eventos de daño válidos: `EliteMobDañadoPorEventoDeMobÉlite`, `EliteMobDañadoPorEventoDeJugador`, `EliteMobDañadoEvent` para eventos que reducen el daño infligido al jefe y `PlayerDamagedByEliteMobEvent` para eventos que reducen el daño infligido a los jugadores.

Se recomienda encarecidamente que aprendas cómo funciona la condición `hasTag` para poder utilizar mejor esta acción. Si se usa correctamente, es posible hacer que el jefe resista temporalmente o sea más débil al daño, y esto puede estar asociado a los beneficios del jugador, la ubicación del jefe u muchos otros factores.

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
    - EliteMobDañadoPorEventoDeJugador
    Acciones:
    - action: MODIFY_DAMAGE
      multiplicador: 2.0
      Condiciones:
        tieneTags:
        - "JugadorGenial"
        Target:
          targetType: DESTINO_DIRECTO
```

Aumenta el daño infligido al jefe por los jugadores en 2x, pero solo si el jugador tiene una etiqueta llamada "JugadorGenial"

</div>

</details>

</div>

---

### MESSAGE

Envía un mensaje al/los objetivo(s).

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
  Ejemplo:
    Eventos:
    - EliteMobDañadoPorEventoDeJugador
    Acciones:
    - action: MESSAGE
      Target: 
        targetType: JUGADORES_CERCANOS
        range: 10
      sValue: "&2¡Hola Mundo!"
```

<div align="center">

![elitescript_actions_message.jpg](../../../img/wiki/elitescript_actions_message.jpg)

</div>

Enviar un mensaje chat a todos los jugadores que estén dentro de los 10 bloques del jefe.

</div>

</details>

</div>

---

### PLACE_BLOCK

Coloca un bloque en la(s) ubicación(es) objetivo por la duración.

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
  Ejemplo:
    Eventos:
    - EliteMobDañadoPorEventoDeJugador
    Zona:
      shape: DOMO
      radio: 3
      Target:
        targetType: YO
    Acciones:
    - action: PLACE_BLOCK
      Target:
        targetType: ZONA_LLENA
      duración: 120
      material: VIDRIO
```

<div align="center">

![elitescript_actions_placeblock.jpg](../../../img/wiki/elitescript_actions_placeblock.jpg)

</div>

Coloca un domo de vidrio alrededor del jefe que durará 6 segundos.

_Nota: Si no se define la duración, la colocación del bloque es permanente._

</div>

</details>

</div>

---

### PLAY_ANIMATION

Reproduce la animación especificada para un modelo personalizado usando el Motor de Modelos. Requiere Motor de Modelos y un modelo personalizado válido en el objetivo que ejecuta la animación.

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
  Ejemplo:
    Eventos:
    - EliteMobDañadoPorEventoDeJugador
    Acciones:
    - action: PLAY_ANIMATION
      Target:
        targetType: YO
      sValue: "baile_fortnite"
```

Hace que el jefe reproduzca la animación baile_fortnite. Requiere que el servidor tenga Motor de Modelos, que el jefe tenga un disfraz personalizado y que el disfraz personalizado tenga una animación llamada "baile\_fortnite".

</div>

</details>

</div>

---

### PLAY_SOUND

Reproduce un sonido del juego.

| Valores  |                            Detalles                            | Obligatorio |
|----------|:-------------------------------------------------------------:|:----------:|
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) |    ✅     |
| `sValue` |            Establece el nombre del sonido a reproducir            |    ✅     |
| `pitch`  |           Establece el tono del sonido a reproducir            |    ❌     |
| `volume` |           Establece el volumen del sonido a reproducir           |    ❌     |

[¡Aquí tienes una lista útil de todos los sonidos de Minecraft!](https://www.digminecraft.com/lists/sound_list_pc.php) Recuerda que esto también puede reproducir sonidos personalizados de packs de recursos.

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
    - EliteMobDañadoPorEventoDeJugador
    Acciones:
    - action: PLAY_SOUND
      Target:
        targetType: YO
      sValue: minecraft:block.bell.resonate
```

Reproduce el sonido de resonancia de las campanas de Minecraft en la ubicación del jefe

</div>

</details>

</div>

---

### POTION_EFFECT

Aplica un efecto de poción específico al/los objetivo(s).

| Valores |                                                       Detalles                                                       | Obligatorio |
| --- |:-------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                            [Más información aquí]($language$/elitemobs/elitescript_targets.md)                            | ✅ |
| `potionEffectType` | Tipo de efecto, [la lista válida está aquí](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) | ✅ |
| `amplifier` |                                          Nivel del efecto de poción (empieza en 0)                                          | ✅ |
| `duration` |                                           Duración del efecto (ticks)                                            | ✅ |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
    - EliteMobDañadoPorEventoDeJugador
    Acciones:
    - action: POTION_EFFECT
      Target: 
        targetType: JUGADORES_CERCANOS
        range: 10
      potionEffectType: LEVITATION
      amplifier: 1
      duration: 40
```

<div align="center">

![elitescript_actions_potioneffect.jpg](../../../img/wiki/elitescript_actions_potioneffect.jpg)

</div>

Hace que cualquier jugador que esté dentro de los 10 bloques del jefe levite por 2 segundos (40 ticks).

</div>

</details>

</div>

---

### PUSH

Empuja a un objetivo con un vector establecido.

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
  Ejemplo:
    Eventos:
    - EliteMobDamagedByPlayerEvent
    Acciones:
    - accion: EMPUJAR
      espera: 3
      Objetivo: 
        tipoObjetivo: JUGADORES_CERCANOS
        alcance: 10
      vValor: 0,0.3,0
      veces: 10
      repetirCada: 10
```

<div align="center">

![elitescript_actions_push.jpg](../../../img/wiki/elitescript_actions_push.jpg)

</div>

Esto empujará a todos los jugadores en un área de 10 bloques del jefe hacia el aire con una fuerza de 0.3. Esta acción se repetirá 10 veces cada 0.5 segundos (10 ticks). En otras palabras, este efecto durará 5 segundos (10 veces x 10 ticks = 100 ticks).

Esto hará que parezca que los jugadores están saltando.

</div>

</details>

</div>

#### vector

Los vectores están definidos por `vValor: x,y,z`. Por ejemplo, si quieres que el objetivo sea empujado hacia arriba, puedes hacer `vValor: 0,0.3,0`.

---


### CORRER_COMANDO_COMO_CONSOLA

Ejecuta un comando como consola.

| Valores |                             Detalles                             | Obligatorio |
| --- |:---------------------------------------------------------------:| :-: |
| `Objetivo` |  [Más información aquí]($language$/elitemobs/elitescript_targets.md)  | ✅ |
| `sValor` |                    Comando que se ejecutará                      | ✅ |

**Nota: ¡hay marcadores de posición disponibles! Consulta CORRER_COMANDO_COMO_JUGADOR, son los mismos**

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
    - accion: CORRER_COMANDO_COMO_CONSOLA
      Objetivo:
        tipoObjetivo: JUGADORES_CERCANOS
        alcance: 10
      sValor: decir Hola $nombreJefe mi nombre es $nombreJugador. ¿Cuál es tu nivel? $nombreJefe mi nivel es $nivelJefe.
```

<div align="center">

![elitescript_actions_commandconsole.jpg](../../../img/wiki/elitescript_actions_commandconsole.jpg)

</div>

Hace que la consola transmita el mensaje "Hola $nombreJefe mi nombre es $nombreJugador. ¿Cuál es tu nivel? $nombreJefe mi nivel es $nivelJefe"

</div>

</details>

</div>

---

### CORRER_COMANDO_COMO_JUGADOR

Ejecuta un comando como `jugador`. Requiere que el objetivo sea un jugador.

| Valores |                     Detalles                     | Obligatorio |
| --- |:--------------------------------------------------:| :-: |
| `objetivo` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValor` |              Comando que se ejecutará              | ✅ |

**Nota: CORRER_COMANDO_COMO_JUGADOR y CORRER_COMANDO_COMO_CONSOLA utilizan los siguientes marcadores de posición:**

| Marcador de posición | Detalles | Especial |
| --- | :-: | :-: |
| `$nombreJugador` | Nombre visible del jugador | El objetivo debe ser un jugador |
| `$jugadorX` | Ubicación X del jugador | El objetivo debe ser un jugador |
| `$jugadorY` | Ubicación Y del jugador | El objetivo debe ser un jugador |
| `$jugadorZ` | Ubicación Z del jugador | El objetivo debe ser un jugador |
| `$nombreJefe` | Nombre visible del jefe | El objetivo debe ser un jugador |
| `$jefeX` | Ubicación X del jefe | ❌ |
| `$jefeY` | Ubicación Y del jefe | ❌ |
| `$jefeZ` | Ubicación Z del jefe | ❌ |
| `$nivelJefe` | Nivel del jefe | ❌ |

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
    - accion: CORRER_COMANDO_COMO_JUGADOR
      Objetivo:
        tipoObjetivo: JUGADORES_CERCANOS
        alcance: 10
      sValor: decir Hola $nombreJefe mi nombre es $nombreJugador.
```

<div align="center">

![elitescript_actions_commandplayer.jpg](../../../img/wiki/elitescript_actions_commandplayer.jpg)

</div>

Hace que el jugador ejecute el comando de decir con Hola $nombreJefe mi nombre es $nombreJugador., lo que significa que solo dirán "Hola $nombreJefe mi nombre es $nombreJugador."

</div>

</details>

</div>

---

### EJECUTAR_SCRIPT

Simplemente ejecuta los scripts definidos en `scripts`. Cualquier acción puede hacer esto, esta acción solo existe como una acción de conveniencia para cuando solo quieres hacer eso.

| Valores |                    Detalles                    | Obligatorio |
| --- |:------------------------------------------------:| :-: |
| `Objetivo` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `scripts` |              Scripts que se ejecutarán              | ✅ |

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
    - accion: EJECUTAR_SCRIPT
      scripts:
      - Ejemplo1
      - Ejemplo2
  Ejemplo1:
    Acciones:
    - accion: DAÑO
      Objetivo:
        tipoObjetivo: JUGADORES_CERCANOS
        alcance: 10
      multiplicador: 0.5
  Ejemplo2:
    Acciones:
    - accion: MENSAJE
      Objetivo:
        tipoObjetivo: JUGADORES_CERCANOS
        alcance: 10
      sValor: "&cJefe genial!: &f¡Te tengo!"
```

<div align="center">

![elitescript_actions_runscript.jpg](../../../img/wiki/elitescript_actions_runscript.jpg)

</div>

Cuando un elitista recibe daño, ejecuta EJECUTAR_SCRIPT, que ejecuta las secuencias de script Ejemplo1 y Ejemplo2.

La secuencia de script Ejemplo1 dañará a todos los jugadores en un radio de 10 bloques del jefe.
<br>La secuencia de script Ejemplo2 enviará un mensaje a todos los jugadores en un área de 10 bloques del jefe con el mensaje "&cJefe genial: &f¡Te tengo!".

</div>

</details>

</div>

---

### ESTABLECE_MOB_AI

Establece si el mob tiene IA. En Minecraft, los mobs sin IA no se moverán ni atacarán. Aún pueden recibir daño, pero dañarlos no resultará en que sean repelidos.

| Valores |                    Detalles                    | Obligatorio |
| --- |:-------------------------------------------------:| :-: |
| `Objetivo` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `bValor` |              Establece si el jefe tiene IA              | ✅ |
| `duración` |             Establece el valor establecido (ticks)             | ❌ |

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
    - accion: ESTABLECE_MOB_AI
      Objetivo:
        tipoObjetivo: AUTO
      bValor: falso
      duración: 40
```

Establece que el jefe no tiene IA durante 2 segundos (40 ticks).

</div>

</details>

</div>

---

### ESTABLECE_MOB_CONSCIENTE

Establece si el mob está consciente. En Minecraft, los mobs que no están conscientes no se moverán a nuevas ubicaciones y no atacarán. Aún pueden recibir daño, y serán repelidos.

Como nota, si el mob ya se estaba moviendo a una ubicación cuando perdió la conciencia, terminará de llegar a esa ubicación antes de detenerse por completo y dejar de moverse.

Esto significa que puedes usar mobs inconscientes para moverte a ubicaciones definidas, a diferencia de los mobs sin IA.

| Valores |                    Detalles                    | Obligatorio |
| --- |:------------------------------------------------:| :-: |
| `Objetivo` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `bValor` |               Establece si está consciente               | ✅ |
| `La duración` |             Establece el valor establecido (ticks)             | ❌ |

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
    - accion: ESTABLECE_MOB_CONSCIENTE
      Objetivo:
        tipoObjetivo: AUTO
      bValor: falso
      duración: 40
```

Establece que el jefe no tiene conciencia durante 2 segundos (40 ticks).

</div>

</details>

</div>

---

### ENCENDER_FUEGO

Enciende un objeto durante la duración.

| Valores |                    Detalles                    | Obligatorio |
| --- |:------------------------------------------------:| :-: |
| `Objetivo` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `duración` |            Duración del efecto, en tick             | ✅ |

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
    - accion: ENCENDER_FUEGO
      Objetivo:
        tipoObjetivo: JUGADORES_CERCANOS
        alcance: 10
      duración: 60
```

<div align="center">

![elitescript_actions_setonfire.jpg](../../../img/wiki/elitescript_actions_setonfire.jpg)

</div>

Enciende a todos los jugadores en un radio de 10 bloques del jefe durante 3 segundos (60 ticks).

</div>

</details>

</div>

---

### ESTABLECE_TIEMPO

Establece el tiempo de juego del mundo en el que se encuentra el objetivo.

| Valores |                    Detalles                    | Obligatorio |
| --- |:------------------------------------------------:| :-: |
| `Objetivo` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `tiempo` |                        Establece el tiempo                        | ✅ |

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
    - accion: ESTABLECE_TIEMPO
      Objetivo:
        tipoObjetivo: AUTO
      tiempo: 10000
```

<div align="center">

![elitescript_actions_settime.gif](../../../img/wiki/elitescript_actions_settime.gif)

</div>

Cuando el jefe es golpeado, establecerá que el tiempo del mundo en el que se encuentra el jefe sea de 10000 tick.

</div>

</details>

</div>

---

### SET_WEATHER

Establece el clima del mundo en el que se encuentra el objetivo durante un tiempo determinado.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `weather` |                     Establece el tipo de clima                     | ✅ |
| `duration` |           Establece la duración del patrón climático            | ✅ |

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
    - acción: SET_WEATHER
      Target:
        targetType: SELF
      weather: PRECIPITATION
      duration: 120
```

<div align="center">

![elitescript_acciones_setweather.gif](../../../img/wiki/elitescript_acciones_setweather.gif)

</div>

Establece el clima del mundo en el que se encuentra el jefe para que llueva/nieve durante el próximo minuto.

*Nota: El efecto tardará un tiempo en activarse.*

</div>

</details>

</div>

#### weather

Los siguientes son patrones climáticos válidos:

- `CLEAR` - Establece el clima como despejado
- `PRECIPITATION` - Establece el clima a lluvia / nieve, dependiendo del bioma, la altura de la ubicación y otras consideraciones de Minecraft por defecto.
- `THUNDER` - Establece el clima a tormenta

---

### SPAWN_FIREWORKS

Genera fuegos artificiales.

| Valores |                                                                                                            Detalles                                                                                                            | Obligatorio |
| --- |:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                                                                                 [Más información aquí]($language$/elitemobs/elitescript_targets.md)                                                                                 | ✅ |
| `vValue` |                                                                                           Establece la velocidad del cohete de fuegos artificiales                                                                                           | ✅ |
| `flicker` |                                                                                          Establece si las partículas de fuegos artificiales parpadearán                                                                                          | ❌ |
| `withTrail` |                                                                                         Establece si el cohete de fuegos artificiales dejará un rastro                                                                                        | ❌ |
| `power` |                                                                                                Establece la potencia de los fuegos artificiales                                                                                                | ❌ |
| `fireworkEffects` |                                                                     Establece los efectos de los fuegos artificiales, relacionados con cuánto tiempo tardará antes de explotar                                                                     | ✅ |
| `fireworkEffectType` |                                                 Establece la forma de los fuegos artificiales [de esta lista](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html)                                                 | ❌ |
| `fireworkEffectTypes` | Establece las formas de los fuegos artificiales [de esta lista](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html) . Esta es una lista de formas - si quieres una lista de formas, no uses `fireworkEffectType`! [1] | ❌ |

[1] Al usar múltiples formas para los fuegos artificiales, cada forma usará los colores de la lista de colores en la misma posición. Ver ejemplo a continuación.

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  fireworkShot1:
    Eventos:
    - EliteMobDamagedByPlayerEvent
    Acciones:
    - acción: SPAWN_FIREWORKS
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

![elitescript_acciones_fuegos_artificiales.jpg](../../../img/wiki/elitescript_acciones_fuegos_artificiales.jpg)

</div>

Genera fuegos artificiales en la ubicación del jefe desplazada por x= 1, y= 1.5 y z = 0. Proporciona a los fuegos artificiales una velocidad de x=.5, y=-.35 y z=1. Los fuegos artificiales no parpadearán ni dejarán rastros; la potencia se establece en 2, por lo que la explosión de los fuegos artificiales se retrasará por esa cantidad.

Finalmente, hay dos listas de listas de colores: la lista 1 es naranja & rojo y la lista 2 es amarillo & azul. Hay dos formas para los fuegos artificiales: BALL\_LARGE y STAR. Esto significa que BALL\_LARGE (elemento 1) utilizará los colores naranja & rojo (lista 1) y STAR (elemento 2) utilizará los colores amarillo & azul (lista 2).

</div>

</details>

</div>

#### fireworkEffects

Estos son los efectos que mostrará el cohete de fuegos artificiales. Se requiere al menos un efecto. Los siguientes son efectos válidos:

- WHITE, SILVER, GRAY, BLACK, RED, MAROON, YELLOW, OLIVE, LIME, GREEN, AQUA, TEAL, BLUE, NAVY, FUCHSIA, PURPLE, ORANGE

---

### STRIKE_LIGHTNING

Golpea con un rayo. Este es un efecto visual, si quieres daño deberías añadir una acción de daño.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |

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
    - acción: STRIKE_LIGHTNING
      Target:
        targetType: SELF
      repeatEvery: 5
      times: 5
```

<div align="center">

![elitescript_acciones_golpe.jpg](../../../img/wiki/elitescript_acciones_golpe.jpg)

</div>

Golpea al jefe con un rayo cada 5 ticks durante 5 veces.

</div>

</details>

</div>

---

### SPAWN_FALLING_BLOCK

Genera un bloque que cae en el objetivo. Sólo visual, no coloca el bloque.

| Valores           |                                                                                      Detalles                                                                                       | Obligatorio |
|------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`         |                                                           [Más información aquí]($language$/elitemobs/elitescript_targets.md)                                                            | ✅ |
| `material`       | Establece el [Material](#material) del bloque que cae. [Verifique los tipos válidos aquí](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) y asegúrese de que sean un material de bloque válido. | ✅ |
| `landingScripts` |                                                            Establece la lista de scripts que se ejecutarán cuando el bloque caiga                                                             | ✅ |
| `vValue`         | Establece la velocidad y dirección de un bloque que cae. | ✅ |

`landingScripts` funciona de la misma forma que [`RUN_SCRIPT`]($language$/elitemobs/elitescript_actions.md&section=run_script) pero puede aceptar el tipo de objetivo especial `LANDING_LOCATION`.

*Nota: Esta acción también acepta vectores relativos. Aprenda más sobre cómo usarlos [aquí]($language$/elitemobs/elitescript_relative_vectors.md).*

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
    - acción: SPAWN_FALLING_BLOCK
      Target:
        targetType: SELF
        offset: 3,10,0
      material: STONE
      vValue: 0,0,0
      landingScripts:
      - LandingScriptExample
  LandingScriptExample:
    Acciones:
    - acción: PLACE_BLOCK
      Target:
        targetType: LANDING_LOCATION
      duration: 200
      material: STONE
```

<div align="center">

![elitescript_acciones_bloque.gif](../../../img/wiki/elitescript_acciones_bloque.gif)

</div>

Cuando el jefe es golpeado, este script generará un bloque de piedra que cae 10 bloques por encima y 3 bloques junto a la ubicación del jefe.

Una vez que el bloque cae, se ejecutará el script LandingScriptExample, que colocará un bloque de piedra en la ubicación donde aterrizó el bloque.
El bloque permanecerá allí durante 10 segundos (200 ticks) antes de desaparecer.

</div>

</details>

</div>

---

### SPAWN_PARTICLE

Genera partículas en el objetivo.

**Nota: Si la cobertura no está establecida, entonces la cobertura será establecida a 0.3 por defecto!**

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `particles` |           Lista las partículas que serán generadas            | ✅ |

#### particles

Las partículas tienen su propia configuración especial, que es la siguiente:

| Valores | Detalles | Por defecto | Especial |
| --- | :-: | :-: | :-: |
| `x` | Establece el desplazamiento de X | 0.01 | (1) |
| `y` | Establece el desplazamiento de Y | 0.01 | (1) |
| `z` | Establece el desplazamiento de Z | 0.01 | (1) |
| `amount` | Establece la cantidad de partículas a generar | 1 | (1) |
| `speed` | Establece la velocidad de las partículas | 0.01 | ❌ |
| `particle` | Establece el tipo de entidad | `FLAME` | [¡Seleccione de esta lista!](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) |
| `red` | Establece el valor rojo | `255` | (2) |
| `green` | Establece el valor verde | `255` | (2) |
| `blue` | Establece el valor azul | `255` | (2) |
| `toRed` | Establece el valor rojo final | `255` | (3) |
| `toGreen` | Establece el valor verde final | `255` | (3) |
| `toBlue` | Establece el valor azul final | `255` | (3) |

_(1) Si la `cantidad` está establecida a 0, `x`, `y` y `z` establecerán la velocidad de la partícula en lugar de ello._

_(2) Sólo para las partículas `REDSTONE`, `DUST_COLOR_TRANSITION`, `SPELL_MOB` y `SPELL_MOB_AMBIENT`_

_(3) Sólo para la partícula `DUST_COLOR_TRANSITION`_

Es importante notar que un guión SPAWN_PARTICLE puede generar varias partículas. Cada partícula puede tener sus propios campos de configuración dentro de la acción SPAWN_PARTICLE. Aquí hay un ejemplo:

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
      shape: CYLINDER
      radius: 4
      borderRadius: 3
      height: 30
      Target:
        targetType: DIRECT_TARGET
      track: true
    Acciones:
    - acción: SPAWN_PARTICLE
      Target:
        targetType: ZONA_BORDER
      particles:
        - particle: FLAME
          speed: 0.2
        - particle: SMOKE_NORMAL
          speed: 0.1
      amount: 1
      repeatEvery: 10
```

<div align="center">

![elitescript_acciones_particula.jpg](../../../img/wiki/elitescript_acciones_particula.jpg)

</div>

Esto generará un cilindro hecho de partículas de llama y humo alrededor del jugador que dañó al jefe.

</div>

</details>

</div>

#### Moviendo una partícula:

Es posible establecer una velocidad específica para una partícula, y funciona de la misma manera que la API de Spigot. Esto permite a los guionistas establecer una partícula para que vaya en una dirección específica a una velocidad específica. No es posible hacer que las partículas cambien de dirección a mitad de camino. Este efecto se utiliza en el encantamiento del lanzallamas y el poder del jefe.

Para mover una partícula, establece `amount: 0`. Esto señalará a Minecraft que los valores `x`, `y` y `z` son en realidad un vector. Este vector establece la dirección hacia la cual irá tu partícula.

Digamos que quieres que una partícula `FLAME` suba. Para hacer esto, quieres un valor `y` positivo, y nada más. Finalmente, querrás establecer la velocidad a la que quieres que sea la velocidad. Aquí hay un ejemplo completo:

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

Esto generará una partícula de llama en la ubicación del jefe que subirá.

</div>

</details>

</div>

---

### SUMMON_REINFORCEMENT

Convoca refuerzos de Jefes Personalizados de EliteMobs.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |      Establece el nombre del archivo del refuerzo del Jefe Personalizado       | ✅ |
| `duration` |        Establece la duración del refuerzo (ticks)         | ❌ |

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

Genera el refuerzo con el nombre del archivo "your_boss_file.yml" en la ubicación del jefe.

</div>

</details>

</div>

---

### SUMMON_ENTITY

MAGMA POR FAVOR RELLENA ESTA SECCIÓN CON LA INFORMACIÓN CORRECTA,

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                Establece el                  | ✅ |

*Nota: Esta acción también acepta vectores relativos. Obtenga más información sobre cómo usarlos [aquí]($language$/elitemobs/elitescript_relative_vectors.md).*

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
      - action: SUMMON_ENTITY
        Target:
          targetType: DIRECT_TARGET
```

Establece el jefe para .

</div>

</details>

</div>

---

### TAG

Añade etiquetas a los jefes o jugadores. Las etiquetas son simplemente Cadenas, o palabras, que los guionistas pueden definir. Estas se utilizan solo para realizar verificaciones de condiciones y no tienen ningún efecto directo en el juego fuera de lo que se utilizan en scripts.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `tags` |                         Establece las etiquetas                         | ✅ |
| `duration` |             Establece la duración de las etiquetas (ticks)             | ❌ |

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
```

Etiquetas al jefe con la cadena "very_sus", que luego puede ser comprobada a través de condiciones de script.

**Importante:** Solo es posible etiquetar a los jugadores y a los mobs de élite.

</div>

</details>

</div>

---

### TELEPORT

Teletransporta a los objetivos a la ubicación definida.

| Valores |                                                    Detalles                                                     | Obligatorio |
| --- |:--------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |    Establece _quién_ será teletransportado. [Aquí información general de destino!]($language$/elitemobs/elitescript_targets.md)    | ✅ |
| `FinalTarget` | Establece _donde_ serán teletransportados. [Aquí información general de destino!]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `location` |                                               Ubicación del Teletransporte                                                | ✅ |

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

Esto teletransportaría a todos los jugadores que estén a 10 bloques del jefe a la ubicación de aparición del jefe.

</div>

</details>

</div>

#### location

Establece la ubicación a la que será teletransportado el jugador. El formato es el estándar `world_name,x,y,z,pitch,yaw` de EliteMobs.

Ejemplo

```yaml
location: world,0,64,0,0,0
```

Esto tiene unos valores especiales:

- Si el nombre del mundo está establecido en `same_as_boss`, esto reemplazará el nombre del mundo con el nombre del mundo en el que se encuentra el jefe:

```yaml
location: same_as_boss,0,64,0,0,0
```

- Si solo hay tres valores que coinciden con x, y y z, el teletransporte se realizará a una ubicación relativa a la ubicación del jefe. Si el jefe es un jefe regional, la ubicación será relativa al punto de aparición del jefe.

---

### TITLE_MESSAGE

Establece el mensaje de la barra de acción para los objetivos.

| Valores |                            Detalles                            | Obligatorio | Especial | Predeterminado |
| --- |:-------------------------------------------------------------:| :-: | :-: | :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ | ❌ |
| `title` |                    Establece el mensaje del título                     | ✅ | Can use [Códigos de color](#color_codes) with `&` | ❌ |
| `subtitle` |                   Establece el mensaje del subtítulo                   | ✅ | Can use [Códigos de color](#color_codes) with `&` | ❌ |
| `duration` |           Establece la duración del mensaje (ticks)            | ✅ | ❌ | `0` |
| `fadeIn` |                   Establece el tiempo de fundido de entrada (ticks)                   | ❌ | ❌ | `0` |
| `fadeOut` |                  Establece el tiempo de fundido de salida (ticks)                   | ❌ | ❌ | `0` |

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
      title: "&2Hola Mundo!"
      subtitle: "&2¡Soy un subtítulo!"
      duration: 120
      fadeIn: 20
      fadeOut: 20
```

<div align="center">

![elitescript_actions_titlescreen.jpg](../../../img/wiki/elitescript_actions_titlescreen.jpg)

</div>

Establecerá el mensaje del título para mostrar el título "&2Hola Mundo!" con el subtítulo "&2¡Soy un subtítulo!" a todos los jugadores que estén a 10 bloques del jefe.

El mensaje permanecerá en pantalla durante 8 segundos (120 + 20 + 20 = 160 ticks) incluyendo la animación de fundido de entrada y salida.

</div>

</details>

</div>

---

### UNTAG

Elimina las etiquetas del jefe. Consulta `TAG` para ver cómo funcionan las etiquetas.

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

Elimina la etiqueta "very_sus" del jefe, lo cual se puede comprobar posteriormente a través de las condiciones del script.

</div>

</details>

</div>

---

### VISUAL_FREEZE

Da el efecto visual de congelado al jugador y hace su daño asociado. Esto debe combinarse con un guión repetitivo si no quieres que el efecto desaparezca de inmediato.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `duration` |                 Duración del efecto, en ticks                  | ✅ |

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

![elitescript_actions_freeze.jpg](../../../img/wiki/elitescript_actions_freeze.jpg) LA CONGELACIÓN VISUAL NO ESTÁ FUNCIONANDO ACTUALMENTE POR LO QUE NO SE PUDO TOMAR CAPTURA DE PANTALLA

</div>

Da a todos los jugadores dentro de los 10 bloques del jefe el aspecto visual de congelación durante 3 segundos (60 ticks).

</div>

</details>

</div>

---

# Acciones múltiples

A veces puedes querer hacer varias acciones todas de una vez cuando ocurre un evento, como enviar varios mensajes o hacer diferentes acciones secuencialmente. ¡Esto se hace fácilmente! Vamos a añadir una acción de efecto de poción a nuestro ejemplo:

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