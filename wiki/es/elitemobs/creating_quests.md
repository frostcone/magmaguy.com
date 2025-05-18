[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Ejemplo de Misión

EliteMobs viene preempaquetado con un archivo `test_quest.yml`, el cual será analizado aquí como un formato de misión simple a seguir.

_¡Las Misiones Personalizadas están en la carpeta `~plugins/EliteMobs/customquests`!_

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
- "&c¡Acaba con el reinado de terror del jefe de prueba!"
```

<div align="center">

![create_quest_quest.jpg](../../../img/wiki/create_quest_quest.jpg)

</div>

*Si tu interfaz de usuario de misiones no se ve así, puedes cambiarla para que coincida usando `/em alt`.*

Esta misión de ejemplo dará a los jugadores la tarea de matar 1 test_boss.yml. (El nombre real del jefe mostrado en el rastreador de misiones será el `name:` establecido en test_boss.yml.) Y como recompensa por completar la misión, serán recompensados con 1 Palillo de Magmaguy.

## Creando Misiones Personalizadas

<div align="center">

### customObjectives

Establece los objetivos de la misión.

| Clave       |   Valores    | Por defecto |
|-----------|:-----------:|:-------:|
| `customObjectives` | Especial [1] |  ninguno   |

*Nota: Si estás usando un jefe multifase como tu objetivo, entonces el objetivo debería usar la primera fase como objetivo.*

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
    - "&a[NPC de Diálogo] &f¿Vienes a menudo por aquí?"
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

Los Objetivos Personalizados se construyen usando los siguientes valores:

| Clave                                     | Descripción |
|-----------------------------------------|-------------|
| `KILL_CUSTOM` / `FETCH_ITEM` / `DIALOG` | Se usa para establecer el tipo de objetivo que esto representa. `KILL_CUSTOM` indica que la misión implica matar un Jefe Personalizado específico, `FETCH_ITEM` indica que la misión implica obtener un Objeto Personalizado específico y `DIALOG` indica que la misión implica hablar con un NPC.            |
| `filename`                                    | Se usa para establecer el nombre del archivo del Jefe Personalizado, el Objeto Personalizado que el jugador tiene que matar/obtener o el NPC con el que tiene que hablar.            |
| `amount`                                      | Se usa para establecer la cantidad de Jefes Personalizados que deben ser matados o de objetos que deben ser obtenidos.            |
| `dialog`                                      | Se usa para establecer el diálogo del NPC con el que habla el jugador.            |
| `name`                                        | Se usa para establecer el nombre del objetivo de la misión, ya sea un NPC o un objeto personalizado. Solo para fines visuales.            |

_¡Ten en cuenta que cada campo de Objetivo Personalizado está separado por un `:` !_

</div>

</details>

***

### customRewards

Establece las recompensas de la misión.

| Clave       |                                Valores                                 | Por defecto |
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

Establece el permiso que el jugador debe tener para poder aceptar la misión.

| Clave       |      Valores       | Por defecto |
|-----------|:-----------------:|:-------:|
| `questAcceptPermission` | [Cadena de texto](#string) |  ninguno   |

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

Establece los permisos que el jugador debe tener para poder aceptar la misión.

| Clave       |   Valores    | Por defecto |
|-----------|:-----------:|:-------:|
| `questAcceptPermissions` | [Lista de Cadenas de Texto](#string_list) |  ninguno   |

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

Establece el permiso que el jugador obtendrá al completar la misión, lo que le impedirá volver a hacer la misión (generalmente el [Nombre del archivo](#fielname) de la misión que estás editando).

| Clave       |      Valores       | Por defecto |
|-----------|:-----------------:|:-------:|
| `questLockoutPermission` | [Cadena de texto](#string) |  ninguno   |

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

Establece cuánto tiempo, en minutos, el jugador tendrá que esperar antes de poder volver a hacer la misión (funciona eliminando el permiso de bloqueo de misión).

| Clave       |      Valores       | Por defecto |
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

Establece el nombre de la misión. Acepta [Códigos de Color](#color_codes).

| Clave    |      Valores       | Por defecto |
|--------|:-----------------:|:-------:|
| `name` | [Cadena de texto](#string) |  ninguno   |

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

Establece la descripción (lore) de la misión que aparecerá en el menú de misiones dentro del juego.

| Clave    |      Valores       | Por defecto |
|--------|:-----------------:|:-------:|
| `questLore` | [Lista de Cadenas de Texto](#string_list) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
questLore:
- "Interesante frase de descripción."
- "Otra interesante frase de descripción."
```

<div align="center">

![create_quest_lore.jpg](../../../img/wiki/create_quest_lore.jpg)

</div>

</div>

</details>

***

### temporaryPermissions

Establece los permisos asignados al jugador hasta que entregue la misión.

Si estás usando esta configuración para asegurar que un objeto solo caiga cuando los jugadores tienen una misión específica activa, también necesitarás configurar el [Mismo Permiso]($language$/elitemobs/creating_items.md&section=permission) en el archivo de configuración del objeto.

| Clave    |      Valores       | Por defecto |
|--------|:-----------------:|:-------:|
| `temporaryPermissions` | [Lista de Cadenas de Texto](#string_list) |  ninguno   |

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

| Clave    |      Valores       | Por defecto |
|--------|:-----------------:|:-------:|
| `questAcceptDialog` | [Lista de Cadenas de Texto](#string_list) |  ninguno   |

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

| Clave    |      Valores       | Por defecto |
|--------|:-----------------:|:-------:|
| `questCompleteMessage` | [Lista de Cadenas de Texto](#string_list) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
questCompleteMessage:
- "¡Mi héroe! ¡Has completado mi difícil misión!"
- "¡Como recompensa puedes tener esta hogaza de pan!"
```

<div align="center">

![create_quest_complete.jpg](../../../img/wiki/create_quest_complete.jpg)

</div>

</div>

</details>

***

### questCompleteCommands

Establece los comandos que se ejecutarán al completar la misión.

| Clave    |      Valores       | Por defecto |
|--------|:-----------------:|:-------:|
| `questCompleteCommands` | [Lista de Cadenas de Texto](#string_list) |  ninguno   |

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

Establece el nombre del archivo del NPC con el que los jugadores necesitan hablar/interactuar para completar la misión. Este **no** tiene por qué ser el mismo NPC que entregó la misión.

| Clave    |      Valores       | Por defecto |
|--------|:-----------------:|:-------:|
| `turnInNPC` | [Nombre del archivo](#filename) |  ninguno   |

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

| Clave    |      Valores       | Por defecto |
|--------|:-----------------:|:-------:|
| `trackable` | [Booleano](#boolean) | `true`  |

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

Establece el nivel de la misión. Esto es solo una guía visual para que los jugadores puedan saber cuán desafiante será la misión. Esto **no** modifica de ninguna manera los niveles de jefes, objetos u otros.

| Clave    |      Valores       | Por defecto |
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

Establece el sonido que se reproduce cuando se acepta una misión. Es posible reproducir tanto sonidos de Minecraft como sonidos de un paquete de recursos.

| Clave                |      Valores       | Por defecto |
|--------------------|:-----------------:|:-------:|
| `questAcceptSound` | [Cadena de texto](#string) |  ninguno   |

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

Establece el sonido que se reproduce cuando se completa una misión (se entrega). Es posible reproducir tanto sonidos de Minecraft como sonidos de un paquete de recursos.

| Clave                |      Valores       | Por defecto |
|--------------------|:-----------------:|:-------:|
| `questCompleteSound` | [Cadena de texto](#string) |  ninguno   |

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

Como se mencionó en las tablas anteriores, los permisos suelen ser [Cadenas de Texto](#string) o [Listas de Cadenas de Texto](#string_list). Pero profundicemos en cómo usarás estos para bloquear y desbloquear misiones.

Supongamos que estás creando la misión_3 en una serie de misiones que has planeado y no quieres que los jugadores puedan tomar la misión_3 antes de que terminen la misión_2. Configuraríamos el archivo de misión así:

```yml
questAcceptPermission: elitequest.quest_2.yml
questLockoutPermission: elitequest.quest_3.yml
```
Al establecer `questAcceptPermissions` en `elitequest.quest_2.yml`, ahora hemos impedido que los jugadores tomen quest_3.yml antes de que terminen quest_2.yml. </br> Al establecer `questLockoutPermission` en `elitequest.quest_3.yml`, hemos impedido que los jugadores puedan recibir esa misión siempre y cuando ya la tengan en su rastreador o si ya la terminaron. Esto evita que los jugadores puedan repetir la misión.

Si deseas crear una misión que solo esté disponible después de que los jugadores hayan completado una serie de misiones, entonces configurarías el archivo de misión así:

```yml
questAcceptPermissions: 
- elitequest.quest_2.yml
- elitequest.quest_3.yml
- elitequest.quest_4.yml
```

Si quieres que los jugadores solo puedan obtener ciertos objetos cuando tienen la misión correcta activa, entonces podemos hacerlo usando `temporaryPermissions`. Crearíamos un permiso en el archivo de misión usando `temporaryPermissions` y luego crearíamos un [permiso]($language$/elitemobs/creating_items.md&section=permission) coincidente en el archivo del objeto usando `permission`.

Por ejemplo, abriríamos nuestro archivo de misión y añadiríamos lo siguiente:

```yml
temporaryPermissions: 
- elitequest.my_cool_item.yml
```
Luego abriríamos el archivo del objeto, en nuestro caso *my_cool_item.yml*, y añadiríamos lo siguiente:

```yml
permission: elitequest.my_cool_item.yml
```
Ambos archivos ahora tienen permisos coincidentes, lo que debería hacer que nuestro objeto solo caiga cuando los jugadores tienen la misión correcta activa.

</div>