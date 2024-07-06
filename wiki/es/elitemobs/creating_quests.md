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
name: "&aMatar al jefe de prueba"
questLore: 
- "&c¡Termina con el reinado de terror del jefe de prueba!"
```

<div align="center">

![create_quest_quest.jpg](../../../img/wiki/create_quest_quest.jpg)

</div>

*Si la interfaz de usuario de tu misión no se ve así, puedes cambiarla para que coincida usando `/em alt`.*

Esta misión de ejemplo les dará a los jugadores la tarea de matar 1 test_boss.yml. (El nombre real del jefe que se muestra en el rastreador de misiones será el `nombre:` establecido en test_boss.yml). Y como recompensa por completar la misión, serán recompensados ​​con 1 palillo de dientes de Magmaguy.

## Creando misiones personalizadas

<div align="center">

### customObjectives

Establece los objetivos de la misión.

| Clave       |   Valores    | Predeterminado |
|-----------|:-----------:|:-------:|
| `customObjectives` | Especial [1] |  ninguno   |

*Nota: Si estás utilizando un jefe multifase como objetivo, entonces el objetivo debe usar la primera fase como objetivo.*

<details> 

<summary><b>Ejemplos</b></summary>

<div align="left">

`KILL_CUSTOM`:

```yml
customObjectives:
  Objective1:
    amount: '1'
    filename: mi_jefe_genial.yml
    objectiveType: KILL_CUSTOM
```

`DIALOG`:

```yml
customObjectives:
  Objective1:
    dialog:
    - "&a[NPC de diálogo] &f¿Vienes aquí a menudo?"
    - "&7&oDebería comer más manzanas".
    filename: npc_de_diálogo.yml
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
    filename: mi_objeto_de_misión_manzanas_rojas.yml
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
| `filename`                                    | Se utiliza para establecer el nombre de archivo del jefe personalizado, el objeto personalizado que el jugador tiene que matar/obtener o el NPC con el que tiene que hablar.            |
| `amount`                                      | Se utiliza para establecer la cantidad de jefes personalizados que deben matarse u objetos que deben obtenerse.            |
| `dialog`                                      | Se utiliza para establecer el diálogo del NPC con el que habla el jugador.            |
| `name`                                        | Se utiliza para establecer el nombre del objetivo de la misión, ya sea un NPC o un objeto personalizado. Solo para fines visuales.            |

_¡Ten en cuenta que cada campo de objetivo personalizado está separado por un `:`!_

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
- filename=palillo_de_magmaguys.yml:amount=1:chance=1.0
```

<div align="center">

![create_quest_rewards.jpg](../../../img/wiki/create_quest_rewards.jpg)

</div>

</div>

</details>

***

### questAcceptPermission

Establece el permiso que debe tener el jugador para aceptar la misión.

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `questAcceptPermission` | [Texto](#texto) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
questAcceptPermission: elitequest.mi_permiso
```

</div>

</details>

***

### questAcceptPermissions

Establece los permisos que debe tener el jugador para aceptar la misión.

| Clave       |   Valores    | Predeterminado |
|-----------|:-----------:|:-------:|
| `questAcceptPermissions` | [Lista de cadenas](#lista_de_cadenas) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
questAcceptPermissions: 
- elitequest.mi_misión_anterior_uno.yml
- elitequest.mi_misión_anterior_dos.yml
```

</div>

</details>

***

### questLockoutPermission

Establece el permiso que obtendrá el jugador al completar la misión que le impedirá volver a realizar la misión (generalmente el [nombre de archivo](#nombre_de_archivo) de la misión que estás editando).

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `questLockoutPermission` | [Texto](#texto) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
questLockoutPermission: elitequest.mi_misión.yml
```

</div>

</details>

***

### questLockoutMinutes

Establece cuánto tiempo, en minutos, tendrá que esperar el jugador antes de poder volver a realizar la misión (funciona eliminando el permiso de bloqueo de la misión).

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `questLockoutMinutes` | [Entero](#entero) |  `-1`(nunca se repetirá)   |

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

Establece el nombre de la misión. Acepta [códigos de color](#códigos_de_color).

| Clave    |      Valores       | Predeterminado |
|--------|:-----------------:|:-------:|
| `name` | [Texto](#texto) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
name: "&aMi gran nombre de misión"
```

</div>

</details>

***

### questLore

Establece la tradición de la misión que aparecerá en el menú de misiones del juego.

| Clave    |      Valores       | Predeterminado |
|--------|:-----------------:|:-------:|
| `questLore` | [Lista de cadenas](#lista_de_cadenas) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
questLore:
- "Oración de tradición interesante".
- "Otra oración de tradición interesante".
```

<div align="center">

![create_quest_lore.jpg](../../../img/wiki/create_quest_lore.jpg)

</div>

</div>

</details>

***

### temporaryPermissions

Establece los permisos asignados al jugador hasta que entrega la misión.

Si estás utilizando esta configuración para asegurarte de que un objeto solo caiga cuando los jugadores tienen una misión específica activa, también deberás configurar el [mismo permiso]($language$/elitemobs/creating_items.md&section=permission) en el archivo de configuración del objeto.

| Clave    |      Valores       | Predeterminado |
|--------|:-----------------:|:-------:|
| `temporaryPermissions` | [Lista de cadenas](#lista_de_cadenas) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
temporaryPermissions:
- elitequest.objeto_que_debería_caer_solo_durante_la_misión.yml
```

</div>

</details>

***

### questAcceptDialog

Establece el diálogo que aparece en el chat al aceptar la misión.

| Clave    |      Valores       | Predeterminado |
|--------|:-----------------:|:-------:|
| `questAcceptDialog` | [Lista de cadenas](#lista_de_cadenas) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
questAcceptDialog:
- "¡Mi héroe! ¡Eres de gran ayuda!"
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
| `questCompleteMessage` | [Lista de cadenas](#lista_de_cadenas) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
questCompleteMessage:
- "¡Mi héroe! ¡Has completado mi difícil misión!"
- "¡Como recompensa, puedes tener esta hogaza de pan!"
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
| `questCompleteCommands` | [Lista de cadenas](#lista_de_cadenas) |  ninguno   |

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
| `turnInNPC` | [Nombre de archivo](#nombre_de_archivo) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
turnInNPC: mi_npc_de_misión_genial.yml
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

Establece el nivel de la misión. Esta es solo una guía visual para que los jugadores puedan saber cuán desafiante será la misión. Esto **no** modifica de ninguna manera el jefe, el objeto u otros niveles.

| Clave    |      Valores       | Predeterminado |
|--------|:-----------------:|:-------:|
| `questLevel` | [Entero](#entero) | `0`  |

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
| `questAcceptSound` | [Texto](#texto) |  ninguno   |

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

Establece el sonido que se reproduce cuando se completa una misión (se entrega). Es posible reproducir sonidos de Minecraft y reproducir sonidos de un paquete de recursos.

| Clave                |      Valores       | Predeterminado |
|--------------------|:-----------------:|:-------:|
| `questCompleteSound` | [Texto](#texto) |  ninguno   |

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

Como se mencionó en las tablas anteriores, los permisos suelen ser [textos](#texto) o [listas de cadenas](#lista_de_cadenas). Pero entremos en más detalles sobre cómo los utilizarás para bloquear y desbloquear misiones.

Digamos que estás haciendo la misión_3 en una serie de misiones que has planeado y no quieres que los jugadores puedan tomar la misión_3 antes de que terminen la misión_2. Configuraríamos el archivo de la misión así:

```yml
questAcceptPermission: elitequest.quest_2.yml
questLockoutPermission: elitequest.quest_3.yml
```
Al establecer `questAcceptPermissions` en `elitequest.quest_2.yml`, ahora hemos impedido que los jugadores tomen quest_3.yml antes de que terminen quest_2.yml. </br> Al establecer `questLockoutPermission` en `elitequest.quest_3.yml`, hemos impedido que los jugadores puedan recibir esa misión siempre que ya la tengan en su rastreador o si ya la han terminado. Esto evita que los jugadores puedan repetir la misión.

Si deseas crear una misión que solo esté disponible después de que los jugadores hayan completado una serie de misiones, entonces configurarías el archivo de la misión así:

```yml
questAcceptPermissions: 
- elitequest.quest_2.yml
- elitequest.quest_3.yml
- elitequest.quest_4.yml
```

Si deseas que los jugadores solo puedan saquear ciertos objetos cuando tienen la misión correcta activa, podemos hacerlo usando `temporaryPermissions`. Crearíamos un permiso en el archivo de la misión usando `temporaryPermissions` y luego haríamos un [permiso]($language$/elitemobs/creating_items.md&section=permission) coincidente en el archivo del objeto usando `permission`.

Por ejemplo, abriríamos nuestro archivo de misión y agregaríamos lo siguiente:

```yml
temporaryPermissions: 
- elitequest.mi_objeto_genial.yml
```
Luego, abriríamos el archivo del objeto, en nuestro caso *mi_objeto_genial.yml* y luego agregaríamos lo siguiente:

```yml
permission: elitequest.mi_objeto_genial.yml
```
Ahora ambos archivos tienen permisos coincidentes que ahora deberían hacer que nuestro objeto solo caiga cuando los jugadores tienen la misión correcta activa.

</div>

