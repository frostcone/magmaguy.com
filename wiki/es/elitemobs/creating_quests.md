[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Ejemplo de misión

EliteMobs viene preempaquetado con un `test_quest.yml`, que se analizará aquí como un formato de misión simple a seguir.

_¡Las misiones personalizadas están en la carpeta `~plugins/EliteMobs/customquests`!_

`test_quest.yml`

```yaml
isEnabled: true
customObjectives:
  Objective1:
    amount: '1'
    filename: test_boss.yml
    objectiveType: KILL_CUSTOM
customRewards:
- filename=magmaguys_toothpick.yml:amount=1:chance=1
name: "&aMata al jefe de prueba"
questLore:
- "&c¡Termina el reinado de terror del jefe de prueba!"
```

<div align="center">

![create_quest_quest.jpg](../../../img/wiki/create_quest_quest.jpg)

</div>

*Si su interfaz de usuario de misión no se ve así, puede cambiarla para que coincida usando `/em alt`.*

Esta misión de ejemplo dará a los jugadores la tarea de matar a 1 test_boss.yml. (El nombre real del jefe que se muestra en el rastreador de misiones será el `nombre:` establecido en test_boss.yml). Y como recompensa por completar la misión, serán recompensados con 1 palillo de dientes de Magmaguy.

## Creación de misiones personalizadas

<div align="center">

### customObjectives

Establece los objetivos de la misión.

| Clave       |   Valores    | Predeterminado |
|-----------|:-----------:|:-------:|
| `customObjectives` | Especial [1] |  ninguno   |

*Nota: si está usando un jefe de varias fases como su objetivo, entonces el objetivo debe usar la primera fase como objetivo.*

<details>

<summary><b>Ejemplos</b></summary>

<div align="left">

`KILL_CUSTOM`:

```yml
customObjectives:
  Objective1:
    amount: '1'
    filename: my_cool_boss.yml
    objectiveType: KILL_CUSTOM
```

`DIALOG`:

```yml
customObjectives:
  Objective1:
    dialog:
    - "&a[NPC de diálogo] &f¿Vienes a menudo aquí?"
    - "&7&oDebería comer más manzanas."
    filename: dialog_npc.yml
    npcName: NPC de diálogo
    location: en la ubicación del diálogo.
    objectiveType: DIALOG
```

`FETCH_ITEM`:

```yml
customObjectives:
  Objective1:
    amount: '99'
    itemName: Manzanas rojas
    filename: my_quest_item_red_apples.yml
    objectiveType: FETCH_ITEM
```

<div align="center">

![create_quest_objective.jpg](../../../img/wiki/create_quest_objective.jpg)

</div>

</div>

</details>

**Especial [1]**

<details>

<summary><b>Expandir tabla</b></summary>

<div align="center">

Los objetivos personalizados se construyen utilizando los siguientes valores:

| Clave                                     | Descripción |
|-----------------------------------------|-------------|
| `KILL_CUSTOM` / `FETCH_ITEM` / `DIALOG` | Se utiliza para establecer el tipo de objetivo que representa. `KILL_CUSTOM` indica que la misión implica matar a un jefe personalizado específico, `FETCH_ITEM` indica que la misión implica obtener un objeto personalizado específico y `DIALOG` indica que la misión implica hablar con un NPC.            |
| `filename`                                    | Se utiliza para establecer el nombre del archivo del jefe personalizado, el objeto personalizado que el jugador tiene que matar/obtener o el NPC con el que tiene que hablar.            |
| `amount`                                      | Se utiliza para establecer la cantidad de jefes personalizados que deben ser asesinados o los objetos que deben obtenerse.            |
| `dialog`                                      | Se utiliza para establecer el diálogo del NPC con el que habla el jugador.            |
| `name`                                        | Se utiliza para establecer el nombre del objetivo de la misión, ya sea un NPC o un objeto personalizado. Solo con fines visuales.            |

_Tenga en cuenta que cada campo de objetivo personalizado está separado por un `:` !_

</div>

</details>

***

### customRewards

Establece las recompensas de la misión.

| Clave       |                                Valores                                 | Predeterminado |
|-----------|:---------------------------------------------------------------------:|:-------:|
| `customRewards` | [Formato de botín universal de EliteMobs]($language$elitemobs/loot_tables.md) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
customRewards:
- currencyAmount=50:amount=1:chance=0.05
- material=COOKED_COD:amount=3:chance=1.0
- filename=magmaguys_toothpick.yml:amount=1:chance=1.0
```

<div align="center">

![create_quest_rewards.jpg](../../../img/wiki/create_quest_rewards.jpg)

</div>

</div>

</details>

***

### questAcceptPermission

Establece el permiso que el jugador debe tener para aceptar la misión.

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `questAcceptPermission` | [Cadena](#string) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
questAcceptPermission: elitequest.my_permission
```

</div>

</details>

***

### questAcceptPermissions

Establece los permisos que el jugador debe tener para aceptar la misión.

| Clave       |   Valores    | Predeterminado |
|-----------|:-----------:|:-------:|
| `questAcceptPermissions` | [Lista de cadenas](#string_list) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
questAcceptPermissions:
- elitequest.my_previous_quest_one.yml
- elitequest.my_previous_quest_two.yml
```

</div>

</details>

***

### questLockoutPermission

Establece el permiso que obtendrá el jugador al completar la misión, lo que les impedirá volver a realizar la misión (generalmente el [Nombre de archivo](#fielname) de la misión que está editando).

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `questLockoutPermission` | [Cadena](#string) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
questLockoutPermission: elitequest.my_quest.yml
```

</div>

</details>

***

### questLockoutMinutes

Establece cuánto tiempo, en minutos, tendrá que esperar el jugador antes de poder volver a realizar la misión (funciona eliminando el permiso de bloqueo de la misión).

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `questLockoutMinutes` | [Entero](#integer) |  `-1`(nunca se repetirá)   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
questLockoutMinutes: 60
```

</div>

</details>

***

### name

Establece el nombre de la misión. Acepta [códigos de color](#color_codes).

| Clave    |      Valores       | Predeterminado |
|--------|:-----------------:|:-------:|
| `name` | [Cadena](#string) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
name: "&aMi Gran Nombre de Misión"
```

</div>

</details>

***

### questLore

Establece la tradición de la misión que aparecerá en el menú de misiones del juego.

| Clave    |      Valores       | Predeterminado |
|--------|:-----------------:|:-------:|
| `questLore` | [Lista de cadenas](#string_list) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
questLore:
- "Interesante frase de tradición."
- "Otra frase de tradición interesante."
```

<div align="center">

![create_quest_lore.jpg](../../../img/wiki/create_quest_lore.jpg)

</div>

</div>

</details>

***

### temporaryPermissions

Establece los permisos asignados al jugador hasta que entrega la misión.

Si está utilizando esta configuración para asegurarse de que un objeto solo aparezca cuando los jugadores tienen una misión específica activa, también deberá configurar el [Mismo permiso]($language$/elitemobs/creating_items.md&section=permission) en el archivo de configuración del objeto.

| Clave    |      Valores       | Predeterminado |
|--------|:-----------------:|:-------:|
| `temporaryPermissions` | [Lista de cadenas](#string_list) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
temporaryPermissions:
- elitequest.item_that_should_drop_only_during_quest.yml
```

</div>

</details>

***

### questAcceptDialog

Establece el diálogo que aparece en el chat al aceptar la misión.

| Clave    |      Valores       | Predeterminado |
|--------|:-----------------:|:-------:|
| `questAcceptDialog` | [Lista de cadenas](#string_list) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
questAcceptDialog:
- "¡Mi héroe! ¡Eres tan útil!"
- "¡Te deseo la mejor de las suertes!"
```

<div align="center">

![create_quest_accept.jpg](../../../img/wiki/create_quest_accept.jpg)

</div>

</div>

</details>

***

### questCompleteMessage

Establece el diálogo que aparece en el chat al completar la misión.

| Clave    |      Valores       | Predeterminado |
|--------|:-----------------:|:-------:|
| `questCompleteMessage` | [Lista de cadenas](#string_list) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
questCompleteMessage:
- "¡Mi héroe! ¡Has completado mi difícil misión!"
- "¡Como recompensa puedes tener esta barra de pan!"
```

<div align="center">

![create_quest_complete.jpg](../../../img/wiki/create_quest_complete.jpg)

</div>

</div>

</details>

***

### questCompleteCommands

Establece los comandos que se ejecutarán al completar la misión.

| Clave    |      Valores       | Predeterminado |
|--------|:-----------------:|:-------:|
| `questCompleteCommands` | [Lista de cadenas](#string_list) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
questCompleteCommands:
- say ¡$player ha terminado una misión!
```

<div align="center">

![create_quest_commands.jpg](../../../img/wiki/create_quest_commands.jpg)

</div>

</div>

</details>

***

### turnInNPC

Establece el nombre de archivo del NPC con el que los jugadores deben hablar/interactuar para completar la misión. Este **no** tiene que ser el mismo NPC que entregó la misión.

| Clave    |      Valores       | Predeterminado |
|--------|:-----------------:|:-------:|
| `turnInNPC` | [Nombre de archivo](#filename) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
turnInNPC: my_cool_quest_npc.yml
```

</div>

</details>

***

### trackable

Establece si la misión utilizará el rastreador de misiones.

| Clave    |      Valores       | Predeterminado |
|--------|:-----------------:|:-------:|
| `trackable` | [Booleano](#booleano) | `true`  |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
trackable: true
```

</div>

</details>

***

### questLevel

Establece el nivel de la misión. Esta es solo una guía visual para que los jugadores puedan saber cuán desafiante será la misión. Esto **no** modifica de ninguna manera los niveles de jefes, objetos u otros.

| Clave    |      Valores       | Predeterminado |
|--------|:-----------------:|:-------:|
| `questLevel` | [Entero](#integer) | `0`  |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
questLevel: 10
```

<div align="center">

![create_quest_level.jpg](../../../img/wiki/create_quest_BUGGEDaddLATER.jpg)

</div>

</div>

</details>

***

### questAcceptSound

Establece el sonido que se reproduce cuando se acepta una misión. Es posible reproducir sonidos de Minecraft y reproducir sonidos de un paquete de recursos.

| Clave                |      Valores       | Predeterminado |
|--------------------|:-----------------:|:-------:|
| `questAcceptSound` | [Cadena](#string) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
questAcceptSound: entity.experience_orb.pickup
```

<div align="center">

![create_quest_level.jpg](../../../img/wiki/create_quest_BUGGEDaddLATER.jpg)

</div>

</div>

</details>

***

### questCompleteSound

Establece el sonido que se reproduce cuando se completa (entrega) una misión. Es posible reproducir sonidos de Minecraft y reproducir sonidos de un paquete de recursos.

| Clave                |      Valores       | Predeterminado |
|--------------------|:-----------------:|:-------:|
| `questCompleteSound` | [Cadena](#string) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
questCompleteSound: entity.player.levelup
```

<div align="center">

![create_quest_level.jpg](../../../img/wiki/create_quest_BUGGEDaddLATER.jpg)

</div>

</div>

</details>

### Permisos

Como se mencionó en las tablas anteriores, los permisos suelen ser [Cadenas](#string) o [Listas de cadenas](#string_list). Pero vamos a entrar en más detalles sobre cómo utilizará esto para bloquear y desbloquear misiones.

Digamos que está creando la misión_3 en una serie de misiones que ha planeado y no quiere que los jugadores puedan tomar la misión_3 antes de que terminen la misión_2. Configuraríamos el archivo de misión de esta manera:

```yml
questAcceptPermission: elitequest.quest_2.yml
questLockoutPermission: elitequest.quest_3.yml
```
Al establecer `questAcceptPermissions` en `elitequest.quest_2.yml`, hemos evitado que los jugadores tomen quest_3.yml antes de que terminen quest_2.yml. </br> Al establecer `questLockoutPermission` en `elitequest.quest_3.yml`, hemos evitado que los jugadores puedan recibir esa misión siempre que ya tengan esa misión en su rastreador o si ya la terminaron. Esto evita que los jugadores puedan repetir la misión.

Si desea crear una misión que solo esté disponible después de que los jugadores hayan completado una serie de misiones, configuraría el archivo de la misión de esta manera:

```yml
questAcceptPermissions:
- elitequest.quest_2.yml
- elitequest.quest_3.yml
- elitequest.quest_4.yml
```

Si desea que los jugadores solo puedan obtener ciertos objetos cuando tienen la misión correcta activa, entonces podemos hacerlo usando `temporaryPermissions`. Crearíamos un permiso en el archivo de la misión usando `temporaryPermissions` y luego crearíamos un [permiso]($language$/elitemobs/creating_items.md&section=permission) coincidente en el archivo del objeto usando `permission`.

Por ejemplo, abriríamos nuestro archivo de misión y agregaríamos lo siguiente:

```yml
temporaryPermissions:
- elitequest.my_cool_item.yml
```
Luego, abriríamos el archivo del objeto, en nuestro caso *my_cool_item.yml* y luego agregaríamos lo siguiente:

```yml
permission: elitequest.my_cool_item.yml
```
Ambos archivos ahora tienen permisos coincidentes, lo que ahora debería hacer que nuestro objeto solo se obtenga cuando los jugadores tengan la misión correcta activa.

</div>
