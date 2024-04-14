# Creando Jefes del Mundo
*Los Jefes del Mundo también se conocen a veces como Jefes Regionales.*
## ¿Qué son?

Los Jefes del Mundo son Jefes personalizados programados para aparecer en un lugar específico con un retraso específico. Estos también son los jefes utilizados en Mazmorras. Aunque en esta sección discutiremos específicamente la creación de Jefes del Mundo para su uso fuera de las mazmorras.

## ¿Para qué sirven?

Los Jefes del Mundo permiten a los jugadores enfrentarse a un desafío fijo mientras saben que el botín será gratificante.

## ¿Qué necesito para hacer un Jefe del Mundo?

1. **Una ubicación**. Se recomienda una sala de jefe, con un radio de aproximadamente 15 bloques (30 bloques de ancho) debido al rango de agresión de Minecraft. Además, asegúrate de que el terreno esté protegido a través de una región de [WorldGuard](https://dev.bukkit.org/projects/worldguard) (para que los jugadores no puedan construir trampas) y que el terreno no se pueda explotar para el combate.
2. **Un tiempo de reaparición**. El temporizador de reaparición es esencial. No recomendaría hacer menos de un temporizador de reaparición de 30 minutos o de lo contrario la reaparición del jefe será menos un evento. 1 hora es un tiempo bastante bueno, pero también puedes querer hacerlo para que el jefe reaparezca una vez al día o incluso una vez a la semana.
3. **Un tiempo de escape**. Cuanto más largo sea el renacimiento, más largo debería ser el tiempo de escape. También ten en cuenta que el tiempo de escape debería ser lo suficientemente largo como para que las personas puedan desafiar al jefe cómodamente. Los temporizadores de escape son importantes si no quieres permitir que los jugadores se inmolen contra el jefe. Esto no es obligatorio, ni siquiera se recomienda si quieres hacer jefes de reaparición masivos semanales.
4. **Un jefe personalizado**. Los Jefes del Mundo son realmente solo Jefes Personalizados con reglas de aparición personalizadas. Asegúrate de seleccionar poderes con una buena compatibilidad de combate de tamaño de incursión.
5. **Botín interesante**. El gran atractivo de los Jefes del Mundo, aparte del desafío, es el botín. Asegúrate de que los jugadores puedan conseguir algo de él que simplemente no puedan conseguir de otros lugares.
6. **Un tema**. Un buen jefe regional debería tener un tema, con una ubicación temática y un botín temático.

## Opciones de configuración de bosses personalizados para Jefes del Mundo:

Estos ajustes se agregan a los archivos normales de configuración de Bosses personalizados. [Aquí puede encontrarse una extensa página wiki sobre esto]($language$/elitemobs/creating_bosses.md).

<div align="center">

***

### isRegionalBoss

Establece si el jefe es un jefe regional. Los jefes regionales son otro nombre para los Jefes del Mundo, por lo que quieres establecer eso en `true`.

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

Las ubicaciones de aparición deben establecerse desde el juego usando el comando `/em addSpawnLocation <filename.yml>`.

Aunque es posible agregar ubicaciones manualmente desde la configuración, no recomendaría intentar hacerlo ya que es demasiado fácil equivocarse.

| Clave              |           Valores            | Predeterminado |
|------------------|:---------------------------:|:-------:|
| `spawnLocations` | [Lista de Strings](#cadena_de_texto) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

Las ubicaciones en archivos de configuración (para usuarios avanzados) Los archivos de configuración de Jefes Regionales almacenan todas las instancias de ese Jefe Regional en un solo archivo almacenando múltiples ubicaciones de aparición y temporizadores de reaparición.

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

contiene 7 diferentes Jefes Regionales, en diferentes ubicaciones, y con diferentes temporizadores de reaparición.

Desglosamos los detalles, observando el primer Jefe Regional:

```yaml
- elitemobs_sewer_maze,-70.17178578884845,168.2,-173.17112099568718,-271.24023,64.19999:1610710903931
```

Dado que esto sigue el formato `mundo,x,y,z,pitch,yaw:unixTimeStamp`, el jefe está apareciendo en un mundo llamado `elitemobs_sewer_maze` en x = `-70.17178578884845`, y = `168.2`, z = `-173.17112099568718`, pitch = `-271.24023`, yaw = `64.19999`.

La marca de tiempo unix almacena el tiempo, en tiempo unix, en el que el jefe reaparecerá. Esto se utiliza para almacenar los tiempos de reaparición a través de los reinicios. Si deseas saber a qué hora corresponde eso, hay innumerables herramientas de conversión de tiempo unix a tiempo real que puedes encontrar en línea.

Si deseas que un jefe concreto reaparezca después de una recarga o reinicio, todo lo que necesitas hacer es borrar la entrada `:unixTimeStamp`.

</div>

</details>

***

### spawnCooldown

Establece cuánto tiempo tarda el jefe en reaparecer, en **minutos**.

**Nota: ¡se recomienda un tiempo de reaparición más largo para jefes grandes!**.

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

Establece el radio desde la `spawnLocation` hasta donde el Jefe del Mundo puede llegar antes de ser teletransportado de vuelta a su punto de aparición. Esto evita que los jugadores arrastren al jefe a un lugar donde podría ser más fácil luchar contra él.

**Nota: intenta evitar hacer áreas de combate que requieran correas más cortas de 20 bloques, ya que empeorará la pelea.**

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

### Transitive Blocks

También conocido como `onSpawnBlockStates` y `onRemoveBlockStates`.

Estos valores permiten a los Jefes Regionales generar bloques cuando entran en combate y eliminarlos cuando se eliminan, es decir, cuando escapan debido al tiempo de espera o cuando mueren.

**¡Así es cómo puedes hacer que los jefes abran o cierren puertas / áreas o incluso modifiquen una arena durante el combate si la estás usando con jefes de fase!**

| Clave       |          Valores          | Predeterminado |
|-----------|:------------------------:|:-------:|
| `onSpawnBlockStates` | Ver Explicación Detallada |  ninguno   |


| Clave       | Valores  | Predeterminado |
|-----------|:-------:|:-------:|
| `onRemoveBlockStates` | Ver Explicación Detallada |  ninguno   |

<details> 

<summary><b>Explicación Detallada</b></summary>

<div align="left">

**Todos los bloques son relativos a la ubicación de aparición. Asegúrate de tener tu ubicación de aparición final antes de empezar a configurar bloques.**

</br>Si ya has hecho una gran área de bloques traspasados ​​y ahora necesitas mover al jefe, pero no quieres rehacer los bloques traspasados. Entonces puedes usar la acción de EliteScript [Teleport]($language$/elitemobs/elitescript_actions.md#section=teleportación) para mover al jefe a la ubicación correcta después de que aparezca. No olvides que tendrás que ajustar tu correa en consecuencia.

Debido a la complejidad de establecer bloques, no se recomienda hacerlo manualmente. Deberías usar los siguientes comandos para hacerlo:

- /em registerblocks <jefe_regional_file.yml> <on_spawn/on_remove>
- /em registerblocksedit <jefe_regional_file.yml> <on_spawn/on_remove>
- /em registerblocksarea <jefe_regional_file.yml> <on_spawn/on_remove>
- /em registerblocksareaedit <jefe_regional_file.yml> <on_spawn/on_remove>
- /em cancelblocks

Desglosemos esto.

**/em registerblocks <jefe_regional_file.yml> <on_spawn/on_remove>**

El comando más básico. Este es un interruptor que ejecutas una vez para iniciar y nuevamente para confirmar. Al igual que todos los demás comandos, eliges si estás configurando estos bloques para ser modificados para el estado `on_spawn` o `on_remove`.

Si registra en el on_spawn, esto modificará los bloques cuando el jefe aparezca o reaparezca. Si registra el on_remove, esto modificará los bloques cuando el jefe muera o se quede sin tiempo utilizando el mecanismo de tiempo límite del Jefe Personalizado.

Para registrar bloques, simplemente coloca o elimina los bloques que deseas modificar mientras esta configuración está activada.

**/em registerblocksedit <jefe_regional_file.yml> <on_spawn/on_remove>**

Si deseas modificar bloques ya establecidos, puedes usar este comando. Funciona de manera muy similar a `/em registerblocks <jefe_regional_file.yml> <on_spawn/on_remove>`.

**/em registerblocksarea <jefe_regional_file.yml> <on_spawn/on_remove>**

Al igual que `/em registerblocks <jefe_regional_file.yml> <on_spawn/on_remove>`, esto te permite registrar bloques, pero te permite seleccionarlos obteniendo dos esquinas diametralmente opuestas (igual que la selección de región de worldedit / worldguard) en lugar de seleccionar bloques individualmente.

Por razones de seguridad, hay un límite de 200 bloques (por defecto, modificable en config.yml) para las selecciones regionales. Ten en cuenta que cada bloque se modifica en el mismo tick, por lo que si estás modificando mucho terreno probablemente empezarás a ver grandes picos de lag cuando ejecutes estas modificaciones.

**/em registerblocksareaedit <jefe_regional_file.yml> <on_spawn/on_remove>**

Funciona de la misma manera que `/em registerblocksedit` pero para áreas. Se puede utilizar para superar el límite de registro de bloques de 200 (por defecto) para áreas.

**/em cancelblocks**

En cualquier momento, si se comete un error mientras se registran bloques, puedes ejecutar este comando para cancelar el registro. Revertirá cualquier cambio que hayas comenzado a registrar en esa edición / registro.

</div>

</details>

</div>

***

## Consejos profesionales para hacer una buena y gran lucha de Jefes Regionales

1. **Piensa realmente en cómo los poderes de tu Jefe Personalizado se complementan entre sí**. No quieres que tu jefe pase la mayor parte del tiempo detenido porque está lanzando algo, ya que eso puede hacer que la pelea sea realmente fácil. Tampoco quieres que el jefe tenga todos los ataques a distancia y no tenga habilidades de melee o lo contrario a menos que estés diseñando algo muy específico. Las pruebas de juego son importantes.


2. **Salud - mucha**. Ese multiplicador de salud probablemente debería estar en un sólido 10 si quieres que la gente realmente se agrupe para luchar contra el jefe.


3. **Daño - no demasiado**. Los EliteMobs ya son extremadamente mortíferos por defecto, y los poderes tienden a ser exponencialmente más mortíferos. En lugar de aumentar el daño hasta el techo, considera usar poderes para hacer que el jefe golpee más fuerte.


4. **Exploits, en todas partes**. Asegúrate de que el terreno no sea explotable. Coloca al jefe en una sala cerrada para evitar que las personas intenten abatirlo desde lejos. La invulnerabilidad a las flechas es probablemente extremadamente importante para muchos Jefes del Mundo ya que los mobs de Minecraft no pueden lidiar con que los despeguen desde lejos, por lo que si quieres permitir ataques con arco, asegúrate de que los arcos no se puedan explotar.


5. **Conoce el plugin**. Hay muchos trucos pequeños para vencer a EliteMobs, como cómo algunos poderes pueden contrarrestarse usando escudos, mientras que otros deberían ser contrarrestados esquivando o incluso huyendo temporalmente del jefe. Cuanto más sepas cómo funcionan los poderes y cómo se contrarrestan, mejores serán los jefes que hagas.