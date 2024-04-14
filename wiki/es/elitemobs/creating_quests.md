[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Misión de Ejemplo

EliteMobs viene preempaquetado con un `test_quest.yml`, que se analizará aquí como un formato de misión simple a seguir.

_Las misiones personalizadas están en la carpeta `~plugins/EliteMobs/customquests`!_

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
name: "&aMata al Jefe de Prueba"
questLore: 
- "&c¡Termina el reinado de terror del jefe de prueba!"
```

<div align="center">

![create_quest_quest.jpg](../../../img/wiki/create_quest_quest.jpg)

</div>

*Si tu interfaz de misión no se ve así, puedes cambiarla para que coincida usando `/em alt`.*

Esta misión de ejemplo dará a los jugadores la tarea de matar a 1 test_boss.yml. (El nombre real del jefe que se muestra en el rastreador de misiones será el `name:` establecido en test_boss.yml.) Y como recompensa por completar la misión, recibirán 1 Palillo de Dientes de Magmaguy.

## Creando Misiones Personalizadas

<div align="center">

### customObjectives

Establece los objetivos de la misión.

| Clave       |   Valores    | Predeterminado |
|-----------|:-----------:|:-------:|
| `customObjectives` | Especial [1] |  ninguno   |

*Nota: Si estás usando un jefe de múltiples fases como tu objetivo, entonces el objetivo debería estar utilizando la primera fase como el objetivo.*

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
    - "&a[NPC de Diálogo] &f¿Vienes aquí a menudo?"
    - "&7&oDebería comer más manzanas."
    filename: dialog_npc.yml
    npcName: NPC de Diálogo
    location: en la ubicación del diálogo.
    objectiveType: DIALOG
```

`FETCH_ITEM`:

```yml
customObjectives:
  Objective1:
    amount: '99'
    itemName: Manzanas Rojas
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

<summary><b>Expandir Tabla</b></summary>

<div align="center">

Los Objetivos Personalizados se construyen utilizando los siguientes valores:

| Clave                                     | Descripción |
|-----------------------------------------|-------------|
| `KILL_CUSTOM` / `FETCH_ITEM` / `DIALOG` | Se utiliza para establecer el tipo de objetivo que representa. `KILL_CUSTOM` indica que la misión implica matar a un Jefe Personalizado específico, `FETCH_ITEM` indica que la misión implica obtener un Objeto Personalizado específico y `DIALOG` indica que la misión implica hablar con un NPC.|
| `filename`                                    | Se utiliza para establecer el nombre de archivo del Jefe Personalizado, el Objeto Personalizado que el jugador tiene que matar / obtener o el NPC con el que tienen que hablar.|
| `amount`                                      | Se utiliza para establecer la cantidad de Jefes Personalizados que deben ser asesinados o los objetos que deben ser obtenidos.|
| `dialog`                                      | Se utiliza para establecer el diálogo del NPC con el que el jugador habla.|
| `name`                                        | Se utiliza para establecer el nombre del objetivo de la misión, ya sea un NPC o un objeto personalizado. Sólo para fines visuales.|

_Por favor, tenga en cuenta que cada campo de Objetivo Personalizado está separado con un `:` !_

</div>

</details>

***

### customRewards

Establece las recompensas de la misión.

| Clave       |                                Valores                                 | Predeterminado |
|-----------|:---------------------------------------------------------------------:|:-------:|
| `customRewards` | [Formato universal de botín de EliteMobs]($language$elitemobs/loot_tables.md) |  ninguno   |

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
| `questAcceptPermission` | [String](#string) |  ninguno   |

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
| `questAcceptPermissions` | [String List](#string_list) |  ninguno   |

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

Establece el permiso que el jugador obtendrá al completar la misión, que le impedirá hacer la misión de nuevo (Normalmente el [Nombre del Archivo](#filename) de la misión que está editando).

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `questLockoutPermission` | [String](#string) |  ninguno   |

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

Establece cuánto tiempo, en minutos, el jugador tendrá que esperar antes de poder hacer la misión de nuevo (funciona eliminando el permiso de bloqueo de la misión).

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `questLockoutMinutes` | [Integer](#integer) |  `-1`(nunca se repetirá)   |

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

Establece el nombre de la misión. Acepta [Códigos de Color](#color_codes).

| Clave    |      Valores       | Predeterminado |
|--------|:-----------------:|:-------:|
| `name` | [String](#string) |  ninguno   |

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

Establece la historia de la misión que aparecerá en el menú de misiones del juego.

| Clave    |      Valores       | Predeterminado |
|--------|:-----------------:|:-------:|
| `questLore` | [String List](#string_list) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
questLore:
- "Frase interesante de la historia."
- "Otra frase interesante de la historia."
```

<div align="center">

![create_quest_lore.jpg](../../../img/wiki/create_quest_lore.jpg)

</div>

</div>

</details>

***

### temporaryPermissions

Establece los permisos asignados al jugador hasta que entreguen la misión.

Si estás usando esta configuración para asegurar que un artículo sólo se caiga cuando los jugadores tienen una misión específica activa, también tendrás que configurar el [Mismo Permiso]($language$/elitemobs/creating_items.md&section=permission) en el archivo de configuración del artículo.

| Clave    |      Valores       | Predeterminado |
|--------|:-----------------:|:-------:|
| `temporaryPermissions` | [String List](#string_list) |  ninguno   |

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
| `questAcceptDialog` | [String List](#string_list) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
questAcceptDialog:
- "¡Mi héroe! ¡Eres muy útil!"
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
| `questCompleteMessage` | [String List](#string_list) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
questCompleteMessage:
- "¡Mi héroe! ¡Has completado mi difícil misión!"
- "¡Como recompensa puedes tener este pan!"
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
| `questCompleteCommands` | [String List](#string_list) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
questCompleteCommands:
- say $player ha terminado una misión!
```

<div align="center">

![create_quest_commands.jpg](../../../img/wiki/create_quest_commands.jpg)

</div>

</div>

</details>

***

### turnInNPC

Establece el nombre del archivo del NPC con el que los jugadores necesitan hablar/interactuar para completar la misión. Esto **no** tiene que ser el mismo NPC que entregó la misión.

| Clave    |      Valores       | Predeterminado |
|--------|:-----------------:|:-------:|
| `turnInNPC` | [Filename](#filename) |  ninguno   |

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

Establece si la misión usará el rastreador de misiones.

| Clave    |      Valores       | Predeterminado |
|--------|:-----------------:|:-------:|
| `trackable` | [Boolean](#boolean) | `true`  |

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

Establece el nivel de la misión. Esto es sólo una guía visual para que los jugadores puedan saber cuán desafiante será la misión. Esto **no** modifica de ninguna manera los niveles de los jefes, objetos u otros.

| Clave    |      Valores       | Predeterminado |
|--------|:-----------------:|:-------:|
| `questLevel` | [Integer](#integer) | `0`  |

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

Establece el sonido que se reproduce cuando se acepta una misión. Es posible reproducir tanto los sonidos de Minecraft como los sonidos de un paquete de recursos.

| Clave                |      Valores       | Predeterminado |
|--------------------|:-----------------:|:-------:|
| `questAcceptSound` | [String](#string) |  ninguno   |

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

Establece el sonido que se reproduce cuando se completa una misión (entregada). Es posible reproducir tanto los sonidos de Minecraft como los sonidos de un paquete de recursos.

| Clave                |      Valores       | Predeterminado |
|--------------------|:-----------------:|:-------:|
| `questCompleteSound` | [String](#string) |  ninguno   |

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

Como se mencionó en las tablas anteriores, los permisos suelen ser [Cadenas](#string) o [Listas de Cadenas](#string_list). Pero vamos a entrar en más detalle sobre cómo utilizarás esto para bloquear y desbloquear misiones.

Digamos que estás creando la quest_3 en una serie de misiones que tienes planeadas y no quieres que los jugadores puedan tomar la quest_3 antes de terminar la quest_2. Configuraríamos el archivo de la misión de esta manera:

```yml
questAcceptPermission: elitequest.quest_2.yml
questLockoutPermission: elitequest.quest_3.yml
```
Al establecer el `questAcceptPermissions` a `elitequest.quest_2.yml` ahora hemos prevenido que los jugadores tomen quest_3.yml antes de terminar quest_2.yml. </br> Al establecer `questLockoutPermission` a `elitequest.quest_3.yml` hemos prevenido que los jugadores puedan recibir esa misión siempre y cuando ya tengan esa misión en su rastreador o si ya terminaron esa misión. Esto impide que los jugadores puedan repetir la misión.

Si quieres hacer una misión que sólo esté disponible después de que los jugadores hayan completado una serie de misiones, entonces configurarías el archivo de la misión de esta manera:

```yml
questAcceptPermissions:
  - elitequest.quest_2.yml
  - elitequest.quest_3.yml
  - elitequest.quest_4.yml
```

Si deseas que los jugadores solo puedan recoger ciertos objetos cuando tienen la misión correcta activa, entonces podemos hacerlo usando `temporaryPermissions`. Crearíamos un permiso en el archivo de la misión usando `temporaryPermissions` y luego haríamos un [permiso]($language$/elitemobs/creating_items.md&section=permission) correspondiente en el archivo del objeto usando `permission`.

Por ejemplo, abriríamos nuestro archivo de misiones y agregaríamos lo siguiente:

```yml
temporaryPermissions: 
- elitequest.my_cool_item.yml
```
Luego abriríamos nuestro archivo de objetos, en nuestro caso *my_cool_item.yml*, y luego agregaríamos lo siguiente:

```yml
permission: elitequest.my_cool_item.yml
```
Ahora, ambos archivos tienen permisos correspondientes que deberían hacer que nuestro objeto solo caiga cuando los jugadores tienen la misión correcta activa.

</div>