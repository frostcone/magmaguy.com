[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Ejemplo de Misión

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
name: "&aMata al Jefe de Prueba"
questLore: 
- "&c¡Acaba con el reinado de terror del jefe de prueba!"
```

<div align="center">

![create_quest_quest.jpg](../../../img/wiki/create_quest_quest.jpg)

</div>

*Si la interfaz de tu misión no se ve así, puedes cambiarla para que coincida usando `/em alt`.*

Esta misión de ejemplo les dará a los jugadores la tarea de matar 1 test_boss.yml. (El nombre real del jefe que se
muestra en el rastreador de misiones será el `name:` establecido en test_boss.yml). Y como recompensa por completar la
misión, serán recompensados con 1 Palillo de Magmaguy.

## Creación de Misiones Personalizadas

<div align="center">

### customObjectives

Establece los objetivos de la misión.

| Clave       |   Valores    | Predeterminado |
|-----------|:-----------:|:-------:|
| `customObjectives` | Especial [1] |  ninguno   |

*Nota: Si estás usando un jefe multifase como tu objetivo, entonces el objetivo debe estar usando la primera fase como
el objetivo.*

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
    - "&a[NPC de Diálogo] &f¿Vienes por aquí a menudo?"
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

| Clave                                   | Descripción                                                                                                                                                                                                                                                                                              |
|-----------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `KILL_CUSTOM` / `FETCH_ITEM` / `DIALOG` | Se utiliza para establecer el tipo de objetivo que esto representa. `KILL_CUSTOM` indica que la misión implica matar a un Jefe Personalizado específico, `FETCH_ITEM` indica que la misión implica obtener un Objeto Personalizado específico y `DIALOG` indica que la misión implica hablar con un NPC. |
| `filename`                              | Se utiliza para establecer el nombre del archivo del Jefe Personalizado, el Objeto Personalizado que el jugador tiene que matar/obtener o el NPC con el que tiene que hablar.                                                                                                                            |
| `amount`                                | Se utiliza para establecer la cantidad de Jefes Personalizados que deben ser asesinados o de objetos que deben ser obtenidos.                                                                                                                                                                            |
| `dialog`                                | Se utiliza para establecer el diálogo del NPC con el que el jugador habla.                                                                                                                                                                                                                               |
| `name`                                  | Se utiliza para establecer el nombre del objetivo de la misión, ya sea un NPC o un objeto personalizado. Solo para fines visuales.                                                                                                                                                                       |

_Ten en cuenta que cada campo de Objetivo Personalizado está separado con un `:` !_

</div>

</details>

***

### customRewards

Establece las recompensas de la misión.

| Clave           |                                    Valores                                    | Predeterminado |
|-----------------|:-----------------------------------------------------------------------------:|:--------------:|
| `customRewards` | [Formato universal de botín de EliteMobs]($language$elitemobs/loot_tables.md) |    ninguno     |

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

| Clave                   |      Valores      | Predeterminado |
|-------------------------|:-----------------:|:--------------:|
| `questAcceptPermission` | [String](#string) |    ninguno     |

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

Establece los permisos que el jugador debe tener para aceptar la misión.

| Clave                    |             Valores              | Predeterminado |
|--------------------------|:--------------------------------:|:--------------:|
| `questAcceptPermissions` | [Lista de Cadenas](#string_list) |    ninguno     |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
questAcceptPermissions: 
- elitequest.mi_mision_anterior_uno.yml
- elitequest.mi_mision_anterior_dos.yml
```

</div>

</details>

***

### questLockoutPermission

Establece el permiso que el jugador obtendrá al completar la misión, lo que evitará que la vuelva a realizar (
normalmente el [Nombre de Archivo](#fielname) de la misión que estás editando).

| Clave                    |      Valores      | Predeterminado |
|--------------------------|:-----------------:|:--------------:|
| `questLockoutPermission` | [String](#string) |    ninguno     |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
questLockoutPermission: elitequest.mi_mision.yml
```

</div>

</details>

***

### questLockoutMinutes

Establece cuánto tiempo, en minutos, el jugador tendrá que esperar antes de poder volver a realizar la misión (funciona
eliminando el permiso de bloqueo de la misión).

| Clave                 |      Valores       |    Predeterminado     |
|-----------------------|:------------------:|:---------------------:|
| `questLockoutMinutes` | [Entero](#integer) | `-1`(nunca se repite) |

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

| Clave  |      Valores      | Predeterminado |
|--------|:-----------------:|:--------------:|
| `name` | [String](#string) |    ninguno     |

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

Establece la historia de la misión que aparecerá en el menú de la misión dentro del juego.

| Clave       |             Valores              | Predeterminado |
|-------------|:--------------------------------:|:--------------:|
| `questLore` | [Lista de Cadenas](#string_list) |    ninguno     |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
questLore:
- "Una frase interesante de la historia."
- "Otra frase interesante de la historia."
```

<div align="center">

![create_quest_lore.jpg](../../../img/wiki/create_quest_lore.jpg)

</div>

</div>

</details>

***

### temporaryPermissions

Establece los permisos asignados al jugador hasta que entrega la misión.

Si estás utilizando esta configuración para garantizar que un objeto solo aparezca cuando los jugadores tienen una
misión específica activa, también tendrás que configurar
el [Mismo Permiso]($language$/elitemobs/creating_items.md&section=permission) en el archivo de configuración del objeto.

| Clave                  |             Valores              | Predeterminado |
|------------------------|:--------------------------------:|:--------------:|
| `temporaryPermissions` | [Lista de Cadenas](#string_list) |    ninguno     |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
temporaryPermissions:
- elitequest.objeto_que_solo_debe_aparecer_durante_la_mision.yml
```

</div>

</details>

***

### questAcceptDialog

Establece el diálogo que aparece en el chat al aceptar la misión.

| Clave               |             Valores              | Predeterminado |
|---------------------|:--------------------------------:|:--------------:|
| `questAcceptDialog` | [Lista de Cadenas](#string_list) |    ninguno     |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
questAcceptDialog:
- "¡Mi héroe! ¡Eres tan servicial!"
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

| Clave                  |             Valores              | Predeterminado |
|------------------------|:--------------------------------:|:--------------:|
| `questCompleteMessage` | [Lista de Cadenas](#string_list) |    ninguno     |

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

| Clave                   |             Valores              | Predeterminado |
|-------------------------|:--------------------------------:|:--------------:|
| `questCompleteCommands` | [Lista de Cadenas](#string_list) |    ninguno     |

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

Establece el nombre del archivo del NPC con el que los jugadores necesitan hablar/interactuar para completar la misión.
Esto **no** tiene que ser el mismo NPC que entregó la misión.

| Clave       |            Valores             | Predeterminado |
|-------------|:------------------------------:|:--------------:|
| `turnInNPC` | [Nombre de Archivo](#filename) |    ninguno     |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
turnInNPC: mi_genial_npc_de_mision.yml
```

</div>

</details>

***

### trackable

Establece si la misión utilizará el rastreador de misiones.

| Clave       |       Valores        | Predeterminado |
|-------------|:--------------------:|:--------------:|
| `trackable` | [Booleano](#boolean) |     `true`     |

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

Establece el nivel de la misión. Esto es solo una guía visual para que los jugadores puedan saber cuán desafiante será
la misión. Esto **no** modifica de ninguna manera los niveles de jefes, objetos u otros niveles.

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

| Clave              |      Valores      | Predeterminado |
|--------------------|:-----------------:|:--------------:|
| `questAcceptSound` | [String](#string) |    ninguno     |

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

Establece el sonido que se reproduce cuando se completa una misión (se entrega). Es posible reproducir sonidos de
Minecraft y reproducir sonidos de un paquete de recursos.

| Clave                |      Valores      | Predeterminado |
|----------------------|:-----------------:|:--------------:|
| `questCompleteSound` | [String](#string) |    ninguno     |

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

Como se mencionó en las tablas anteriores, los permisos suelen ser [Cadenas](#string)
o [Listas de Cadenas](#string_list). Pero vamos a entrar en más detalles sobre cómo los usarás para bloquear y
desbloquear misiones.

Digamos que estás haciendo la misión_3 en una serie de misiones que has planeado y no quieres que los jugadores puedan
tomar la misión_3 antes de que terminen la misión_2. Configuraríamos el archivo de la misión de esta manera:

```yml
questAcceptPermission: elitequest.mision_2.yml
questLockoutPermission: elitequest.mision_3.yml
```

Al establecer `questAcceptPermissions` en `elitequest.mision_2.yml` ahora hemos evitado que los jugadores tomen
mision_3.yml antes de que terminen mision_2.yml. </br> Al establecer `questLockoutPermission`
en `elitequest.mision_3.yml` hemos evitado que los jugadores puedan recibir esa misión siempre que ya tengan esa misión
en su rastreador o si ya terminaron esa misión. Esto evita que los jugadores puedan repetir la misión.

Si deseas hacer una misión que solo esté disponible después de que los jugadores hayan completado una serie de misiones,
entonces configurarías el archivo de la misión de esta manera:

```yml
questAcceptPermissions: 
- elitequest.mision_2.yml
- elitequest.mision_3.yml
- elitequest.mision_4.yml
```

Si deseas que los jugadores solo puedan saquear ciertos objetos cuando tienen la misión correcta activa, entonces
podemos hacerlo utilizando `temporaryPermissions`. Crearíamos un permiso en el archivo de la misión
utilizando `temporaryPermissions` y luego crearíamos
un [permiso]($language$/elitemobs/creating_items.md&section=permission) coincidente en el archivo del objeto
utilizando `permission`.

Por ejemplo, abriríamos nuestro archivo de misión y añadiríamos lo siguiente:

```yml
temporaryPermissions: 
- elitequest.mi_objeto_genial.yml
```

Luego abriríamos el archivo del objeto, en nuestro caso *mi_objeto_genial.yml* y luego añadiríamos lo siguiente:

```yml
permission: elitequest.mi_objeto_genial.yml
```

Ambos archivos ahora tienen permisos coincidentes, lo que ahora debería hacer que nuestro objeto solo aparezca cuando
los jugadores tienen la misión correcta activa.
