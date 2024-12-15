[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Creación de jefes mundiales
*Los jefes mundiales también se denominan a veces jefes regionales.*
## ¿Qué son?

Los jefes mundiales son jefes personalizados establecidos para aparecer en una ubicación específica con un retraso específico. Estos son también los jefes utilizados en las mazmorras. Aunque en esta sección discutiremos específicamente cómo crear jefes mundiales para usar fuera de las mazmorras.

## ¿Para qué sirven?

Los jefes mundiales permiten a los jugadores enfrentarse a un desafío fijo sabiendo que el botín será gratificante.

## ¿Qué necesito para crear un jefe mundial?

1. **Una ubicación**. Se recomienda una sala de jefe, con un radio de aproximadamente 15 bloques (30 bloques de ancho) debido al rango de aggro de Minecraft. Además, asegúrese de que el terreno esté protegido a través de una región de [WorldGuard](https://dev.bukkit.org/projects/worldguard) (para que los jugadores no puedan construir trampas) y que el terreno no se pueda explotar para el combate.
2. **Un tiempo de reaparición**. El temporizador de reaparición es esencial. No recomiendo un temporizador de reaparición inferior a 30 minutos o, de lo contrario, la reaparición del jefe será menos que un evento. 1 hora es un buen momento, pero también puede hacer que el jefe reaparezca una vez al día o incluso una vez a la semana.
3. **Un tiempo de escape**. Cuanto más largo sea el tiempo de reaparición, más largo debería ser el tiempo de escape. También tenga en cuenta que el tiempo de escape debe ser lo suficientemente largo como para que las personas puedan desafiar al jefe cómodamente. Los temporizadores de escape son importantes si no desea permitir que los jugadores se kamikaze hasta la muerte del jefe. Esto no es obligatorio, ni siquiera recomendable si desea hacer jefes de reaparición masivos de una semana de duración.
4. **Un jefe personalizado**. Los jefes mundiales son en realidad jefes personalizados con reglas de generación personalizadas. Asegúrese de seleccionar poderes con una buena compatibilidad de combate del tamaño de una incursión.
5. **Botín interesante**. El gran atractivo de los jefes mundiales, además del desafío, es el botín. Asegúrese de que los jugadores puedan obtener algo que simplemente no puedan obtener de otro lugar.
6. **Un tema**. Un buen jefe regional debería tener un tema, con una ubicación temática y un botín temático.

## Opciones de configuración de jefe personalizado para jefes mundiales:

Estas configuraciones se agregan a los archivos de configuración de jefe personalizado normales. [Puede encontrar una extensa página de wiki sobre ellos aquí]($language$/elitemobs/creating_bosses.md).

<div align="center">

***

### isRegionalBoss

Establece si el jefe es un jefe regional. Los jefes regionales son otro nombre para los jefes mundiales, por lo que debe establecerlo en `true`.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `isRegionalBoss` | [Booleano](#booleano) | `false` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
isRegionalBoss: true
```

</div>

</details>

***

### spawnLocations

Las ubicaciones de aparición deben establecerse desde el juego utilizando el comando `/em addSpawnLocation <nombrearchivo.yml>`.

Si bien es posible agregar ubicaciones manualmente desde la configuración, no recomiendo intentar hacerlo, ya que es demasiado fácil equivocarse.

| Clave              |           Valores            | Predeterminado |
|------------------|:---------------------------:|:-------:|
| `spawnLocations` | [Lista de cadenas](#string_list) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

Ubicaciones en archivos de configuración (para usuarios avanzados) Los archivos de configuración del jefe regional almacenan todas las instancias de ese jefe regional en un solo archivo al almacenar varias ubicaciones de aparición, así como los temporizadores de reaparición.

En términos prácticos, eso significa que esta entrada:

```yaml
spawnLocations:
- elitemobs_sewer_maze,-70.17178578884845,168.2,-173.17112099568718,-271.24023,64.19999:1610710903931
- elitemobs_sewer_maze,-135.02262355317436,168.2,-153.28849346821508,-98.53906,60.750263:1609026066482
- elitemobs_sewer_maze,-70.43846307626053,168.2,-174.13499832314378,-271.24023,64.19999:1610710886530
- elitemobs_sewer_maze,-130.39762674971664,168.2,-171.67396911490718,-47.532227,51.900173:1609026066482
- elitemobs_sewer_maze,-117.12782160766056,162.2,-166.40989416757444,-71.37402,-1.4997427:1610710974882
- elitemobs_sewer_maze,-105.13138759611667,168.2,-169.85898023126538,-124.34766,41.24988:1610710945331
- elitemobs_sewer_maze,-106.21847515732084,169.2,-152.3609257554766,-170.86523,21.450315:1610537606222
```

contiene 7 jefes regionales diferentes, en diferentes ubicaciones y con diferentes temporizadores de reaparición.

Analicemos los detalles, echando un vistazo al primer jefe regional:

```yaml
- elitemobs_sewer_maze,-70.17178578884845,168.2,-173.17112099568718,-271.24023,64.19999:1610710903931
```

Dado que esto sigue el formato `mundo,x,y,z,cabeceo,guiñada:marcaDeTiempoUnix`, el jefe está apareciendo en un mundo llamado `elitemobs_sewer_maze` en x = `-70.17178578884845`, y = `168.2`, z = `-173.17112099568718`, cabeceo = `-271.24023`, guiñada = `64.19999`.

La marca de tiempo Unix almacena el tiempo, en tiempo Unix, en el que el jefe volverá a aparecer. Esto se usa para almacenar los tiempos de reaparición a través de reinicios. Si desea saber a qué hora corresponde, existen innumerables herramientas de conversión de tiempo Unix a tiempo real que puede encontrar en línea.

Si desea que un jefe específico reaparezca después de una recarga o un reinicio, todo lo que necesita hacer es borrar la entrada `:marcaDeTiempoUnix`.

</div>

</details>

***

### spawnCooldown

Establece cuánto tiempo tarda el jefe en reaparecer, en **minutos**.

**Nota: ¡Se recomiendan tiempos de espera más largos para los grandes jefes!**.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `spawnCooldown` | [Entero](#integer) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
spawnCooldown: 20
```

</div>

</details>

***

### leashRadius

Establece el radio desde la `spawnLocation` que el jefe mundial irá antes de ser teletransportado de vuelta a su punto de aparición. Esto evita que los jugadores arrastren al jefe a una ubicación donde podría ser más fácil luchar contra él.

**Nota: intente evitar hacer áreas de combate que requieran correas más cortas que 20 bloques, ya que empeorará la pelea.**

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `leashRadius` | [Entero](#integer) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
leashRadius: 30
```

</div>

</details>

***

### Bloques transitivos

También conocidos como `onSpawnBlockStates` y `onRemoveBlockStates`.

Estos valores permiten a los jefes regionales generar bloques cuando entran en combate y eliminarlos cuando se eliminan, lo que significa cuando escapan debido al tiempo de espera o cuando mueren.

**¡Así es como puede hacer que los jefes abran o cierren puertas/áreas o incluso modifiquen una arena durante el combate si lo está usando con jefes de fase!**

| Clave       |          Valores          | Predeterminado |
|-----------|:------------------------:|:-------:|
| `onSpawnBlockStates` | Consulte la explicación detallada |  ninguno   |


| Clave       | Valores  | Predeterminado |
|-----------|:-------:|:-------:|
| `onRemoveBlockStates` | Consulte la explicación detallada |  ninguno   |

<details>

<summary><b>Explicación detallada</b></summary>

<div align="left">

**Todos los bloques son relativos a la ubicación de generación. Asegúrese de tener su ubicación de generación final antes de comenzar a configurar cualquier bloque.**

</br>Si ya creó un área grande de bloques transitivos y ahora necesita mover al jefe, pero no desea rehacer los bloques transitivos. Luego, puede usar la acción [Teleport]($language$/elitemobs/elitescript_actions.md&section=teleport) de EliteScript para mover al jefe a la ubicación correcta después de que aparezca. Tenga en cuenta que tendrá que ajustar su correa en consecuencia.

Debido a la complejidad de la configuración de bloques, no se recomienda que lo haga manualmente. Debe usar los siguientes comandos para hacerlo:

- /em registerblocks <nombrearchivo\_jefe\_regional.yml> <on\_spawn/on\_remove>
- /em registerblocksedit <nombrearchivo\_jefe\_regional.yml> <on\_spawn/on\_remove>
- /em registerblocksarea <nombrearchivo\_jefe\_regional.yml> <on\_spawn/on\_remove>
- /em registerblocksareaedit <nombrearchivo\_jefe\_regional.yml> <on\_spawn/on\_remove>
- /em cancelblocks

Vamos a analizar esto.

**/em registerblocks <nombrearchivo\_jefe\_regional.yml> <on\_spawn/on\_remove>**

El comando más básico. Este es un conmutador que ejecuta una vez para comenzar y otra vez para confirmar. Al igual que con todos los demás comandos, debe elegir si está configurando estos bloques para que se modifiquen para el estado `on_spawn` o `on_remove`.

Si registra el on\_spawn, esto modificará los bloques cuando el jefe aparezca o reaparezca. Si registra el on\_remove, esto modificará los bloques cuando el jefe muera o se agote el tiempo usando la mecánica de tiempo de espera de jefe personalizado.

Para registrar bloques, simplemente coloque o elimine los bloques que desee modificar mientras esta configuración esté activada.

**/em registerblocksedit <nombrearchivo\_jefe\_regional.yml> <on\_spawn/on\_remove>**

Si desea modificar bloques ya establecidos, puede usar este comando. Funciona de manera muy similar a `/em registerblocks <nombrearchivo\_jefe\_regional.yml> <on\_spawn/on\_remove>`.

**/em registerblocksarea <nombrearchivo\_jefe\_regional.yml> <on\_spawn/on\_remove>**

Al igual que `/em registerblocks <nombrearchivo\_jefe\_regional.yml> <on\_spawn/on\_remove>`, esto le permite registrar bloques, pero permite seleccionarlos obteniendo dos esquinas diametralmente opuestas (igual que la selección de región de worldedit / worldguard) en lugar de seleccionar bloques individualmente.

Por razones de seguridad, existe un límite de 200 bloques (de forma predeterminada, modificable en config.yml) para las selecciones regionales. Tenga en cuenta que cada bloque se modifica en el mismo tick, por lo que si está modificando mucho terreno, probablemente comenzará a ver grandes picos de retraso al ejecutar estas modificaciones.

**/em registerblocksareaedit <nombrearchivo\_jefe\_regional.yml> <on\_spawn/on\_remove>**

Funciona de la misma manera que `/em registerblocksedit`, pero para áreas. Se puede utilizar para superar el límite de registro de bloques de 200 (predeterminado) para áreas.

**/em cancelblocks**

En cualquier momento, si se comete un error al registrar bloques, puede ejecutar este comando para cancelar el registro. Revertirá cualquier cambio que haya comenzado a registrar en esa edición/registro.

</div>

</details>

</div>

***

### alert

<div align="center">

Establece si el jefe está alerta. De forma predeterminada, los jefes regionales se ralentizan y tienen una distancia de aggro más corta cuando están fuera de combate. Esta configuración evita que los jefes regionales se ralenticen y tengan una distancia de aggro más corta mientras están fuera de combate, por lo que siempre se comportarán de la misma manera dentro o fuera de combate.

</div>

| Clave | Valores | Predeterminado |
|---|:-:|---|
| `alert` | [Booleano](#booleano) | `true` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
alert: true
```

</div>

</details>

***

### removeAfterDeath

<div align="center">

Establece si el jefe regional se eliminará permanentemente después de ser asesinado. Esto es lo que BetterStructures usa para los santuarios, donde el jefe regional solo está diseñado para ser combatido una vez y nunca más en esa ubicación.

</div>

| Clave | Valores | Predeterminado |
|---|:-:|---|
| `removeAfterDeath` | [Booleano](#booleano) | `false` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
removeAfterDeath: true
```

</div>

</details>

***

## Jefes de instancia

<div align="center">

Los jefes de instancia son un subtipo de jefes regionales que se utilizan en mazmorras de instancia.

| Clave | Descripción | Valores | Predeterminado |
|---|:-:|:-:|---|
| `instanced` | Hace que el jefe personalizado sea de instancia. Obligatorio. | `true` / `false` | `false` |

Es obligatorio establecer los jefes como de instancia para que las mazmorras de instancia funcionen correctamente. También recomendamos eliminar las correas para cualquier jefe de instancia.

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
instanced: true
```

</div>

</details>

</div>
