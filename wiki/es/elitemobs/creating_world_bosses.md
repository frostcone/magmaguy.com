Aquí tienes la traducción al español, manteniendo el formato markdown:

# Creando Jefes de Mundo
*Los Jefes de Mundo a veces también se conocen como Jefes Regionales.*
## ¿Qué son?

Los Jefes de Mundo son Jefes Personalizados configurados para aparecer en una ubicación específica con un retraso específico. Estos son también los jefes utilizados en las Mazmorras. Aunque en esta sección discutiremos específicamente la creación de Jefes de Mundo para usar fuera de las mazmorras.

## ¿Para qué sirven?

Los Jefes de Mundo permiten a los jugadores enfrentarse a un desafío fijo sabiendo que el botín será gratificante.

## ¿Qué necesito para hacer un Jefe de Mundo?

1. **Una ubicación**. Se recomienda una sala de jefe, con un radio aproximado de 15 bloques (30 bloques de ancho) debido al rango de aggro de Minecraft. Además, asegúrate de que el terreno esté protegido mediante una región de [WorldGuard](https://dev.bukkit.org/projects/worldguard) (para que los jugadores no puedan construir trampas) y de que el terreno no pueda ser explotado para el combate.
2. **Un tiempo de reaparición**. El temporizador de reaparición es esencial. No recomiendo un temporizador de reaparición inferior a 30 minutos, o de lo contrario la reaparición del jefe será menos un evento. 1 hora es un tiempo bastante bueno, pero también puedes querer que el jefe reaparezca una vez al día o incluso una vez a la semana.
3. **Un tiempo de escape**. Cuanto más larga sea la reaparición, más largo debería ser el tiempo de escape. También ten en cuenta que el tiempo de escape debe ser lo suficientemente largo como para que la gente pueda desafiar al jefe cómodamente. Los temporizadores de escape son importantes si no quieres permitir que los jugadores se suiciden contra el jefe hasta matarlo. Esto no es obligatorio, ni siquiera recomendado si quieres hacer jefes de reaparición masiva de una semana de duración.
4. **Un Jefe Personalizado**. Los Jefes de Mundo son realmente solo Jefes Personalizados con reglas de aparición personalizadas. Asegúrate de seleccionar poderes con buena compatibilidad para combates de tamaño de raid.
5. **Botín interesante**. El gran atractivo de los Jefes de Mundo, aparte del desafío, es el botín. Asegúrate de que los jugadores puedan obtener algo de él que simplemente no puedan conseguir en ningún otro lugar.
6. **Un tema**. Un buen jefe regional debe tener un tema, con una ubicación temática y un botín temático.

## Opciones de configuración de Jefe Personalizado para Jefes de Mundo:

Estas configuraciones se añaden a los archivos de configuración normales de Jefe Personalizado. [Puedes encontrar una página wiki extensa sobre ellos aquí]($language$/elitemobs/creating_bosses.md).

<div align="center">

***

### isRegionalBoss

Establece si el jefe es un jefe regional. Los jefes regionales son otro nombre para los Jefes de Mundo, por lo que querrás establecerlo en `true`.

| Clave          |       Valores        | Por defecto |
|----------------|:--------------------:|:-----------:|
| `isRegionalBoss` | [Booleano](#boolean) |   `false`   |

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

Las ubicaciones de aparición deben establecerse desde el juego usando el comando `/em addSpawnLocation <nombre_archivo.yml>`.

Aunque es posible añadir ubicaciones manualmente desde la configuración, no recomiendo intentarlo, ya que es demasiado fácil equivocarse.

| Clave            |           Valores            | Por defecto |
|------------------|:----------------------------:|:-----------:|
| `spawnLocations` | [Lista de Cadenas](#string_list) |    ninguno  |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

Ubicaciones en archivos de configuración (para usuarios avanzados) Los archivos de configuración del Jefe Regional almacenan todas las instancias de ese Jefe Regional en un solo archivo al almacenar múltiples ubicaciones de aparición, así como temporizadores de reaparición.

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

contiene 7 Jefes Regionales diferentes, en diferentes ubicaciones y con diferentes temporizadores de reaparición.

Desglosemos los detalles, echando un vistazo al primer Jefe Regional:

```yaml
- elitemobs_sewer_maze,-70.17178578884845,168.2,-173.17112099568718,-271.24023,64.19999:1610710903931
```

Dado que esto sigue el formato `mundo,x,y,z,pitch,yaw:unixTimeStamp`, el jefe aparece en un mundo llamado `elitemobs_sewer_maze` en x = `-70.17178578884845`, y = `168.2`, z = `-173.17112099568718`, pitch = `-271.24023`, yaw = `64.19999`.

La marca de tiempo unix almacena el tiempo, en tiempo unix, en el que el jefe reaparecerá. Esto se utiliza para almacenar los tiempos de reaparición a través de reinicios. Si deseas saber a qué hora corresponde, hay innumerables herramientas de conversión de tiempo unix a tiempo real que puedes encontrar en línea.

Si deseas que un jefe específico reaparezca después de una recarga o reinicio, todo lo que necesitas hacer es borrar la entrada `:unixTimeStamp`.

</div>

</details>

***

### spawnCooldown

Establece cuánto tiempo tarda el jefe en reaparecer, en **minutos**.

**Nota: ¡se recomiendan reapariciones más largas para jefes grandes!**.

| Clave           |       Valores        | Por defecto |
|-----------------|:--------------------:|:-----------:|
| `spawnCooldown` | [Entero](#integer) |    ninguno  |

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

Establece el radio desde la `spawnLocation` al que el Jefe de Mundo puede ir antes de ser teletransportado de vuelta a su punto de aparición. Esto evita que los jugadores arrastren al jefe a una ubicación donde sea más fácil luchar contra él.

**Nota: intenta evitar que las áreas de combate que requieren correas sean más cortas de 20 bloques, ya que empeorará la lucha.**

| Clave         |       Valores        | Por defecto |
|---------------|:--------------------:|:-----------:|
| `leashRadius` | [Entero](#integer) |    ninguno  |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
leashRadius: 30
```

</div>

</details>

***

### Bloques Transitivos

También conocidos como `onSpawnBlockStates` y `onRemoveBlockStates`.

Estos valores permiten a los Jefes Regionales generar bloques cuando entran en combate y eliminarlos cuando son eliminados, es decir, cuando escapan por tiempo límite o cuando mueren.

**¡Así es como puedes hacer que los jefes abran o cierren puertas/áreas o incluso modifiquen una arena durante el combate si lo estás usando con jefes de fase!**

| Clave              |          Valores           | Por defecto |
|--------------------|:--------------------------:|:-----------:|
| `onSpawnBlockStates` | Ver Explicación Detallada |    ninguno  |


| Clave               |          Valores           | Por defecto |
|---------------------|:--------------------------:|:-----------:|
| `onRemoveBlockStates` | Ver Explicación Detallada |    ninguno  |

<details>

<summary><b>Explicación Detallada</b></summary>

<div align="left">

**Todos los bloques son relativos a la ubicación de aparición. Asegúrate de tener tu ubicación de aparición final antes de empezar a establecer cualquier bloque.**

</br>Si ya has creado un área grande de Bloques Transitivos y ahora necesitas mover al jefe, pero no quieres rehacer los Bloques Transitivos. Entonces puedes usar la acción [Teleport]($language$/elitemobs/elitescript_actions.md&section=teleport) de EliteScript para mover al jefe a la ubicación correcta después de que aparezca. Ten en cuenta que tendrás que ajustar tu correa en consecuencia.

Debido a la complejidad de establecer bloques, no se recomienda hacerlo manualmente. Debes usar los siguientes comandos para hacerlo:

- /em registerblocks <archivo\_jefe\_regional.yml> <on\_spawn/on\_remove>
- /em registerblocksedit <archivo\_jefe\_regional.yml> <on\_spawn/on\_remove>
- /em registerblocksarea <archivo\_jefe\_regional.yml> <on\_spawn/on\_remove>
- /em registerblocksareaedit <archivo\_jefe\_regional.yml> <on\_spawn/on\_remove>
- /em cancelblocks

Desglosemos esto.

**/em registerblocks <archivo\_jefe\_regional.yml> <on\_spawn/on\_remove>**

El comando más básico. Este es un interruptor que ejecutas una vez para empezar, y de nuevo para confirmar. Al igual que todos los demás comandos, eliges si estás configurando estos bloques para ser modificados para el estado `on_spawn` o `on_remove`.

Si registras el on\_spawn, esto modificará los bloques cuando el jefe aparezca o reaparezca. Si registras el on\_remove, esto modificará los bloques cuando el jefe muera o se agote el tiempo usando la mecánica de tiempo límite del Jefe Personalizado.

Para registrar bloques, simplemente coloca o elimina los bloques que deseas modificar mientras esta configuración está activada.

**/em registerblocksedit <archivo\_jefe\_regional.yml> <on\_spawn/on\_remove>**

Si quieres modificar bloques ya establecidos, puedes usar este comando. Funciona de manera muy similar a `/em registerblocks <archivo_jefe_regional.yml> <on_spawn/on_remove>`.

**/em registerblocksarea <archivo\_jefe\_regional.yml> <on\_spawn/on\_remove>**

Al igual que `/em registerblocks <archivo_jefe_regional.yml> <on_spawn/on_remove>`, esto te permite registrar bloques, pero permite seleccionarlos obteniendo dos esquinas diametralmente opuestas (igual que la selección de región de worldedit / worldguard) en lugar de seleccionar bloques individualmente.

Por razones de seguridad, hay un límite de 200 bloques (por defecto, modificable en config.yml) para selecciones regionales. Ten en cuenta que cada bloque se modifica en el mismo tick, por lo que si estás modificando mucho terreno, probablemente empezarás a ver grandes picos de lag al ejecutar estas modificaciones.

**/em registerblocksareaedit <archivo\_jefe\_regional.yml> <on\_spawn/on\_remove>**

Funciona de la misma manera que `/em registerblocksedit` pero para áreas. Se puede usar para superar el límite de registro de 200 (por defecto) bloques para áreas.

**/em cancelblocks**

En cualquier momento, si se comete un error al registrar bloques, puedes ejecutar este comando para cancelar el registro. Revertirá cualquier cambio que hayas empezado a registrar en esa edición/registro.

</div>

</details>

</div>

***

## Consejos profesionales para hacer una buena y gran lucha de Jefe Regional

1. **Piensa realmente en cómo se complementan los poderes de tu Jefe Personalizado**. No querrás que tu jefe pase la mayor parte del tiempo detenido porque está lanzando algo, ya que eso puede hacer que la lucha sea realmente fácil. Tampoco querrás que el jefe tenga todos los ataques a distancia y ningún poder cuerpo a cuerpo o lo contrario, a menos que estés diseñando algo muy específico. La prueba de juego es importante.


2. **Salud - mucha**. Ese multiplicador de salud probablemente debería estar en un sólido 10 si quieres que la gente se agrupe para luchar contra el jefe.


3. **Daño - no demasiado**. Los EliteMobs ya son extremadamente mortales por defecto, y los poderes tienden a ser exponencialmente más mortales. En lugar de aumentar el daño hasta el techo, considera usar poderes para hacer que el jefe golpee más fuerte.


4. **Exploits, por todas partes**. Asegúrate de que el terreno no sea explotable. Pon al jefe en una sala cerrada para evitar que la gente intente dispararle desde lejos. El poder de invulnerabilidad a las flechas es probablemente extremadamente importante para muchos Jefes de Mundo, ya que las mobs de Minecraft no pueden lidiar con ser disparadas desde chunks de distancia, así que si quieres permitir ataques con arco, asegúrate de que los arcos no puedan ser explotados.


5. **Conoce el plugin**. Hay muchos pequeños trucos para vencer a los EliteMobs, como la forma en que algunos poderes pueden ser contrarrestados usando escudos, mientras que otros deben ser contrarrestados esquivando o incluso huyendo temporalmente del jefe. Cuanto más sepas cómo funcionan los poderes y cómo se contrarrestan, mejores serán los jefes que crees.