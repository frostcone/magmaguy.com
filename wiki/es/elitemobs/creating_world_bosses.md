# Creando jefes mundiales
*Los jefes mundiales también se conocen a veces como jefes regionales.*
## ¿Qué son?

Los jefes mundiales son jefes personalizados configurados para aparecer en una ubicación específica con un retraso específico. Estos también son los jefes utilizados en las mazmorras. Aunque en esta sección discutiremos específicamente la creación de jefes mundiales para usar fuera de las mazmorras.

## ¿Para qué sirven?

Los jefes mundiales permiten a los jugadores afrontar un desafío fijo sabiendo que el botín será gratificante.

## ¿Qué necesito para hacer un jefe mundial?

1. **Una ubicación**. Se recomienda una sala de jefe, con un radio de aproximadamente 15 bloques (30 bloques de ancho) debido al rango de agro de Minecraft. Además, asegúrate de que el terreno esté protegido a través de una región de [WorldGuard](https://dev.bukkit.org/projects/worldguard) (para que los jugadores no puedan construir trampas) y que el terreno no pueda ser explotado para el combate.
2. **Un tiempo de reaparición**. El temporizador de reaparición es esencial. No recomiendo hacer menos de un temporizador de reaparición de 30 minutos o, de lo contrario, la reaparición del jefe será menos un evento. 1 hora es un tiempo bastante bueno, pero es posible que también desees que el jefe reaparezca una vez al día o incluso una vez por semana.
3. **Un tiempo de escape**. Cuanto más larga sea la reaparición, más largo debe ser el tiempo de escape. También ten en cuenta que el tiempo de escape debe ser lo suficientemente largo para que las personas puedan desafiar cómodamente al jefe. Los temporizadores de escape son importantes si no quieres permitir que los jugadores maten al jefe en un ataque suicida. Esto no es obligatorio, ni siquiera recomendado si quieres hacer jefes masivos de reaparición de una semana.
4. **Un jefe personalizado**. Los jefes mundiales son realmente solo jefes personalizados con reglas de generación personalizadas. Asegúrate de seleccionar poderes con una buena compatibilidad de combate del tamaño de una incursión.
5. **Botín interesante**. El gran atractivo de los jefes mundiales, aparte del desafío, es el botín. Asegúrate de que los jugadores puedan obtener algo de él que simplemente no puedan obtener de otros lugares.
6. **Un tema**. Un buen jefe regional debe tener un tema, con una ubicación temática y un botín temático.

## Opciones de configuración de jefe personalizado para jefes mundiales:

Estas configuraciones se agregan a los archivos de configuración normales de jefe personalizado. [Aquí puedes encontrar una extensa página wiki sobre ellos]($language$/elitemobs/creating_bosses.md).

<div align="center">

***

### isRegionalBoss

Establece si el jefe es un jefe regional. Los jefes regionales son otro nombre para los jefes mundiales, por lo que debes establecerlo en `true`.

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

Las ubicaciones de generación deben establecerse desde el juego utilizando el comando `/em addSpawnLocation <nombredearchivo.yml>`.

Si bien es posible agregar ubicaciones manualmente desde la configuración, no recomiendo intentar hacerlo, ya que es demasiado fácil equivocarse.

| Clave              |           Valores            | Predeterminado |
|------------------|:---------------------------:|:-------:|
| `spawnLocations` | [Lista de cadenas](#lista_de_cadenas) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

Ubicaciones en archivos de configuración (para usuarios avanzados) Los archivos de configuración del jefe regional almacenan todas las instancias de ese jefe regional en un solo archivo almacenando múltiples ubicaciones de generación, así como temporizadores de reaparición.

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

Dado que esto sigue el formato `mundo,x,y,z,cabeceo,guiñada:marcaDeTiempoUnix`, el jefe aparece en un mundo llamado `elitemobs_sewer_maze` en x = `-70.17178578884845`, y = `168.2`, z = `-173.17112099568718`, cabeceo = `-271.24023`, guiñada = `64.19999`.

La marca de tiempo unix almacena la hora, en hora unix, a la que reaparecerá el jefe. Esto se utiliza para almacenar tiempos de reaparición a través de reinicios. Si deseas saber a qué hora corresponde eso, hay innumerables herramientas de conversión de tiempo unix a tiempo real que puedes encontrar en línea.

Si deseas que un jefe específico reaparezca después de una recarga o reinicio, todo lo que necesitas hacer es borrar la entrada `:marcaDeTiempoUnix`.

</div>

</details>

***

### spawnCooldown

Establece cuánto tiempo tarda en reaparecer el jefe, en **minutos**.

**Nota: ¡se recomiendan reapariciones más largas para jefes grandes!**.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `spawnCooldown` | [Entero](#entero) |  ninguno   |

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

Establece el radio desde la `spawnLocation` a la que puede ir el jefe mundial antes de ser teletransportado de regreso a su punto de generación. Esto evita que los jugadores arrastren al jefe a una ubicación donde podría ser más fácil luchar contra él.

**Nota: intenta evitar crear áreas de combate que requieran correas de menos de 20 bloques, ya que esto empeorará la pelea.**

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `leashRadius` | [Entero](#entero) |  ninguno   |

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

Estos valores permiten que los jefes regionales generen bloques cuando entran en combate y los eliminen cuando se eliminan, es decir, cuando escapan debido a un tiempo de espera o cuando mueren.

**¡Así es como puedes hacer que los jefes abran o cierren puertas/áreas o incluso modifiquen una arena durante el combate si la estás usando con jefes de fase!**

| Clave       |          Valores          | Predeterminado |
|-----------|:------------------------:|:-------:|
| `onSpawnBlockStates` | Ver explicación detallada |  ninguno   |


| Clave       | Valores  | Predeterminado |
|-----------|:-------:|:-------:|
| `onRemoveBlockStates` | Ver explicación detallada |  ninguno   |

<details> 

<summary><b>Explicación detallada</b></summary>

<div align="left">

**Todos los bloques son relativos a la ubicación de generación. Asegúrate de tener tu ubicación de generación final antes de comenzar a colocar bloques.**

</br>Si ya creaste un área grande de bloques transitivos y ahora necesitas mover al jefe, pero no quieres rehacer los bloques transitivos. Luego puedes usar la acción [Teletransportar]($language$/elitemobs/elitescript_actions.md&section=teleport) de EliteScript para mover al jefe a la ubicación correcta después de que aparezca. Ten en cuenta que tendrás que ajustar tu correa en consecuencia.

Debido a la complejidad de la configuración de bloques, no se recomienda que lo hagas manualmente. Debes usar los siguientes comandos para hacerlo:

- /em registerblocks <archivo_de_jefe_regional.yml> <on_spawn/on_remove>
- /em registerblocksedit <archivo_de_jefe_regional.yml> <on_spawn/on_remove>
- /em registerblocksarea <archivo_de_jefe_regional.yml> <on_spawn/on_remove>
- /em registerblocksareaedit <archivo_de_jefe_regional.yml> <on_spawn/on_remove>
- /em cancelblocks

Vamos a desglosar esto.

**/em registerblocks <archivo_de_jefe_regional.yml> <on_spawn/on_remove>**

El comando más básico. Este es un interruptor que ejecutas una vez para comenzar y otra vez para confirmar. Al igual que todos los demás comandos, tú eliges si estás configurando estos bloques para que se modifiquen para el estado `on_spawn` o el estado `on_remove`.

Si se registra el on\_spawn, esto modificará los bloques cuando el jefe aparezca o reaparezca. Si se registra el on\_remove, esto modificará los bloques cuando el jefe muera o se agote el tiempo de espera utilizando la mecánica de tiempo de espera de jefe personalizado.

Para registrar bloques, simplemente coloca o quita los bloques que deseas modificar mientras esta configuración está activada.

**/em registerblocksedit <archivo_de_jefe_regional.yml> <on_spawn/on_remove>**

Si quieres modificar bloques ya establecidos, puedes usar este comando. Funciona de manera muy similar a `/em registerblocks <archivo_de_jefe_regional.yml> <on_spawn/on_remove>`.

**/em registerblocksarea <archivo_de_jefe_regional.yml> <on_spawn/on_remove>**

Al igual que `/em registerblocks <archivo_de_jefe_regional.yml> <on_spawn/on_remove>`, esto te permite registrar bloques, pero te permite seleccionarlos obteniendo dos esquinas diametralmente opuestas (igual que la selección de región de worldedit/worldguard) en lugar de seleccionar bloques individualmente.

Por razones de seguridad, hay un límite de 200 bloques (de forma predeterminada, modificable en config.yml) para las selecciones regionales. Ten en cuenta que cada bloque se modifica en el mismo tick, por lo que si estás modificando mucho terreno, probablemente comenzarás a ver grandes picos de retraso al ejecutar estas modificaciones.

**/em registerblocksareaedit <archivo_de_jefe_regional.yml> <on_spawn/on_remove>**

Funciona de la misma manera que `/em registerblocksedit` pero para áreas. Se puede usar para superar el límite de registro de bloques de 200 (predeterminado) para áreas.

**/em cancelblocks**

En cualquier momento, si se comete un error al registrar bloques, puedes ejecutar este comando para cancelar el registro. Revertirá cualquier cambio que hayas comenzado a registrar en esa edición/registro.

</div>

</details>

</div>

***

## Consejos profesionales para hacer una buena pelea de jefe regional grande

1. **Piensa realmente en cómo los poderes de tu jefe personalizado se complementan entre sí**. No quieres que tu jefe pase la mayor parte del tiempo detenido porque está lanzando algo, ya que eso en realidad puede hacer que la pelea sea realmente fácil. Tampoco quieres que el jefe tenga todos los ataques a distancia y ningún poder cuerpo a cuerpo o lo contrario, a menos que estés diseñando algo muy específico. Las pruebas de juego son importantes.


2. **Salud: mucha**. Ese multiplicador de salud probablemente debería estar en un sólido 10 si quieres que la gente realmente se agrupe para luchar contra el jefe.


3. **Daño: no demasiado**. Los EliteMobs ya son extremadamente mortales de forma predeterminada, y los poderes tienden a ser exponencialmente más mortales. En lugar de aumentar el daño por las nubes, considera usar poderes para hacer que el jefe golpee más fuerte.


4. **Exploits, en todas partes**. Asegúrate de que el terreno no se pueda explotar. Pon al jefe en una habitación cerrada para evitar que la gente intente dispararle desde lejos. El poder de invulnerabilidad a las flechas es probablemente extremadamente importante para muchos jefes mundiales, ya que las turbas de Minecraft no pueden lidiar con ser disparadas desde fragmentos de distancia, por lo que si quieres permitir ataques con arco, asegúrate de que los arcos no puedan explotarse.


5. **Conoce el complemento**. Hay muchos pequeños trucos para vencer a EliteMobs, como la forma en que algunos poderes se pueden contrarrestar usando escudos, mientras que otros deben contrarrestarse esquivando o incluso huyendo temporalmente del jefe. Cuanto más sepas cómo funcionan los poderes y cómo se contrarrestan, mejores serán los jefes que hagas.




