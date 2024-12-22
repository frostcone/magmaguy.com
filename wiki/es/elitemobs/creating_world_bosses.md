# Creación de Jefes Mundiales

*Los Jefes Mundiales también se conocen a veces como Jefes Regionales.*
## ¿Qué son?

Los Jefes Mundiales son Jefes Personalizados que se generan en una ubicación específica con un retraso específico. Estos
son también los jefes utilizados en las Mazmorras. Sin embargo, en esta sección hablaremos específicamente de la
creación de Jefes Mundiales para su uso fuera de las mazmorras.

## ¿Para qué sirven?

Los Jefes Mundiales permiten a los jugadores enfrentarse a un desafío fijo sabiendo que el botín será gratificante.

## ¿Qué necesito para crear un Jefe Mundial?

1. **Una ubicación**. Se recomienda una sala de jefe, con un radio de aproximadamente 15 bloques (30 bloques de ancho)
   debido al rango de agro de Minecraft. Además, asegúrate de que el terreno esté protegido mediante una
   región [WorldGuard](https://dev.bukkit.org/projects/worldguard) (para que los jugadores no puedan construir trampas)
   y que el terreno no pueda ser explotado para el combate.
2. **Un tiempo de reaparición**. El temporizador de reaparición es esencial. No recomiendo hacer menos de 30 minutos de
   temporizador de reaparición o si no la reaparición del jefe será menos de un evento. 1 hora es un tiempo bastante
   bueno, pero también puedes hacer que el jefe reaparezca una vez al día o incluso una vez a la semana.
3. **Un tiempo de escape**. Cuanto más larga sea la reaparición, más largo debería ser el tiempo de escape. También ten
   en cuenta que el tiempo de escape debería ser lo suficientemente largo como para que la gente pueda desafiar al jefe
   cómodamente. Los temporizadores de escape son importantes si no quieres permitir que los jugadores se lancen en
   kamikaze contra el jefe hasta la muerte. Esto no es obligatorio, ni siquiera recomendable si quieres hacer jefes de
   reaparición masiva de una semana de duración.
4. **Un Jefe Personalizado**. Los Jefes Mundiales son realmente solo Jefes Personalizados con reglas de generación
   personalizadas. Asegúrate de seleccionar poderes con una buena compatibilidad de combate de tamaño de incursión.
5. **Botín interesante**. El gran atractivo de los Jefes Mundiales, aparte del desafío, es el botín. Asegúrate de que
   los jugadores puedan obtener algo de él que simplemente no puedan obtener de otra parte.
6. **Un tema**. Un buen jefe regional debe tener un tema, con una ubicación temática y un botín temático.

## Opciones de configuración de Jefe Personalizado para Jefes Mundiales:

Estos ajustes se añaden a los archivos de configuración normales de Jefe
Personalizado. [Aquí se puede encontrar una extensa página de la wiki sobre ellos]($language$/elitemobs/creating_bosses.md).

<div align="center">

***

### isRegionalBoss

Establece si el jefe es un jefe regional. Los jefes regionales son otro nombre para los Jefes Mundiales, por lo que
querrás establecerlo en `true`.

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

Las ubicaciones de generación deben establecerse desde el juego usando el
comando `/em addSpawnLocation <nombre_de_archivo.yml>`.

Aunque es posible añadir ubicaciones manualmente desde la configuración, no recomiendo intentar hacerlo, ya que es
demasiado fácil equivocarse.

| Clave            |                Valores                | Predeterminado |
|------------------|:-------------------------------------:|:--------------:|
| `spawnLocations` | [Lista de Cadenas](#lista_de_cadenas) |    ninguno     |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

Ubicaciones en los archivos de configuración (para usuarios avanzados) El archivo de configuración de un Jefe Regional
almacena todas las instancias de ese Jefe Regional en un solo archivo guardando múltiples ubicaciones de aparición así
como temporizadores de reaparición.

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

contiene 7 Jefes Regionales diferentes, en diferentes ubicaciones y con diferentes tiempos de reaparición.

Vamos a desglosar los detalles, echando un vistazo al primer Jefe Regional:

```yaml
- elitemobs_sewer_maze,-70.17178578884845,168.2,-173.17112099568718,-271.24023,64.19999:1610710903931
```

Dado que esto sigue el formato `mundo,x,y,z,tono,guiñada:marcaDeTiempoUnix`, el jefe está apareciendo en un mundo
llamado `elitemobs_sewer_maze` en x = `-70.17178578884845`, y = `168.2`, z = `-173.17112099568718`, tono = `-271.24023`,
guiñada = `64.19999`.

La marca de tiempo Unix almacena la hora, en hora Unix, a la que reaparecerá el jefe. Esto se utiliza para almacenar los
tiempos de reaparición durante los reinicios. Si quieres saber a qué hora corresponde, hay innumerables herramientas de
conversión de hora Unix a hora real que puedes encontrar en línea.

Si deseas que un jefe específico reaparezca después de una recarga o reinicio, todo lo que necesitas hacer es borrar la
entrada `:marcaDeTiempoUnix`.

</div>

</details>

***

### spawnCooldown

Establece cuánto tiempo tarda el jefe en reaparecer, en **minutos**.

**Nota: ¡Se recomiendan reapariciones más largas para los jefes grandes!**

| Clave           |      Valores      | Predeterminado |
|-----------------|:-----------------:|:--------------:|
| `spawnCooldown` | [Entero](#entero) |    ninguno     |

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

Establece el radio desde la `ubicaciónDeAparición` que el Jefe Mundial va a antes de ser teletransportado de vuelta a su
punto de aparición. Esto impide que los jugadores arrastren al jefe a una ubicación donde podría ser más fácil luchar
contra él.

**Nota: Intenta evitar hacer áreas de combate que requieran correas de menos de 20 bloques, ya que empeorará la lucha.**

| Clave         |      Valores      | Predeterminado |
|---------------|:-----------------:|:--------------:|
| `leashRadius` | [Entero](#entero) |    ninguno     |

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

Estos valores permiten a los Jefes Regionales generar bloques cuando entran en combate y eliminarlos cuando son
eliminados, es decir, cuando escapan debido al tiempo de espera o cuando mueren.

**¡Así es como puedes hacer que los jefes abran o cierren puertas / áreas o incluso modifiquen una arena durante el
combate si la estás usando con jefes de fase!**

| Clave                |          Valores          | Predeterminado |
|----------------------|:-------------------------:|:--------------:|
| `onSpawnBlockStates` | Ver Explicación Detallada |    ninguno     |


| Clave                 |          Valores          | Predeterminado |
|-----------------------|:-------------------------:|:--------------:|
| `onRemoveBlockStates` | Ver Explicación Detallada |    ninguno     |

<details> 

<summary><b>Explicación Detallada</b></summary>

<div align="left">

**Todos los bloques son relativos a la ubicación de aparición. Asegúrate de tener tu ubicación de aparición final antes
de empezar a establecer cualquier bloque.**

</br>Si ya has hecho un área grande de Bloques Transitivos y ahora necesitas mover al jefe, pero no quieres rehacer los
Bloques Transitivos. Entonces puedes usar la acción
EliteScript [Teleport]($language$/elitemobs/elitescript_actions.md&section=teleport) para mover al jefe a la ubicación
correcta después de que aparezca. Ten en cuenta que tendrás que ajustar la correa en consecuencia.

Debido a la complejidad de la configuración de los bloques, no se recomienda que lo hagas manualmente. Deberías usar los
siguientes comandos para hacerlo:

- /em registrarbloques <archivo\_de\_jefe\_regional.yml> <en\_aparición/en\_eliminación>
- /em registrarbloqueseditar <archivo\_de\_jefe\_regional.yml> <en\_aparición/en\_eliminación>
- /em registrarbloquesarea <archivo\_de\_jefe\_regional.yml> <en\_aparición/en\_eliminación>
- /em registrarbloquesareaeditar <archivo\_de\_jefe\_regional.yml> <en\_aparición/en\_eliminación>
- /em cancelarbloques

Vamos a desglosarlo.

**/em registrarbloques <archivo\_de\_jefe\_regional.yml> <en\_aparición/en\_eliminación>**

El comando más básico. Es un interruptor que se ejecuta una vez para iniciar y de nuevo para confirmar. Al igual que
todos los demás comandos, eliges si vas a configurar estos bloques para que se modifiquen para el estado `en_aparición`
o el estado `en_eliminación`.

Si se registra la en\_aparición, esto modificará los bloques cuando el jefe aparezca o reaparezca. Si se registra la
en\_eliminación, esto modificará los bloques cuando el jefe muera o se agote el tiempo usando la mecánica de tiempo de
espera de Jefe Personalizado.

Para registrar bloques, simplemente coloca o elimina los bloques que desees modificar mientras esta configuración esté
activada.

**/em registrarbloqueseditar <archivo\_de\_jefe\_regional.yml> <en\_aparición/en\_eliminación>**

Si quieres modificar bloques ya establecidos, puedes usar este comando. Funciona de forma muy similar
a `/em registrarbloques <archivo_de_jefe_regional.yml> <en_aparición/en_eliminación>`.

**/em registrarbloquesarea <archivo\_de\_jefe\_regional.yml> <en\_aparición/en\_eliminación>**

Al igual que `/em registrarbloques <archivo_de_jefe_regional.yml> <en_aparición/en_eliminación>`, esto te permite
registrar bloques, pero permite seleccionarlos obteniendo dos esquinas diametralmente opuestas (igual que la selección
de región de worldedit / worldguard) en lugar de seleccionar bloques individualmente.

Por razones de seguridad, hay un límite de 200 bloques (por defecto, modificable en config.yml) para las selecciones
regionales. Ten en cuenta que cada bloque se modifica en el mismo tick, por lo que si estás modificando mucho terreno,
probablemente empezarás a ver grandes picos de lag al ejecutar estas modificaciones.

**/em registrarbloquesareaeditar <archivo\_de\_jefe\_regional.yml> <en\_aparición/en\_eliminación>**

Funciona de la misma manera que `/em registrarbloqueseditar` pero para áreas. Se puede usar para sobrepasar el límite de
registro de 200 (por defecto) bloques para áreas.

**/em cancelarbloques**

En cualquier momento, si se comete un error al registrar bloques, puedes ejecutar este comando para cancelar el
registro. Revertirá cualquier cambio que hayas empezado a registrar en esa edición / registro.

</div>

</details>

</div>

***

## Consejos profesionales para hacer una buena y gran lucha contra un Jefe Regional

1. **Piensa de verdad en cómo se complementan los poderes de tu Jefe Personalizado**. No quieres que tu jefe se pase la
   mayor parte del tiempo parado porque está lanzando algo, ya que eso puede hacer que la lucha sea realmente fácil.
   Tampoco quieres que el jefe tenga todos los ataques a distancia y ningún poder de melé o lo contrario, a menos que
   estés diseñando algo muy específico. El juego de prueba es importante.


2. **Salud: mucha**. Ese multiplicador de salud debería ser probablemente un sólido 10 si quieres que la gente se agrupe
   para luchar contra el jefe.


3. **Daño - no demasiado**. Los EliteMobs ya son extremadamente letales por defecto, y los poderes tienden a ser
   exponencialmente más letales. En lugar de aumentar el daño hasta el techo, considera la posibilidad de usar poderes
   para que el jefe golpee más fuerte.


4. **Exploits, por todas partes**. Asegúrate de que el terreno no se pueda explotar. Pon al jefe en una sala cerrada
   para evitar que la gente intente dispararle desde lejos. El poder de invulnerabilidad a las flechas es probablemente
   extremadamente importante para muchos Jefes Mundiales, ya que las criaturas de Minecraft no pueden lidiar con que les
   disparen desde trozos de distancia, así que si quieres permitir los ataques con arco, asegúrate de que los arcos no
   se puedan explotar.


5. **Conoce el plugin**. Hay muchos pequeños trucos para vencer a EliteMobs, como la forma en que algunos poderes pueden
   ser contrarrestados usando escudos, mientras que otros deben ser contrarrestados esquivando o incluso huyendo
   temporalmente del jefe. Cuanto más sepas cómo funcionan los poderes y cómo se contrarrestan, mejores serán los jefes
   que crees.
