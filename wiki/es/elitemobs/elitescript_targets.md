[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Objetivos de Elite Script

Los objetivos son una parte central de los scripts de élite y son necesarios para que funcionen las acciones y las zonas.

## Tipos de objetivo

Los tipos de objetivo establecen qué entidades o ubicaciones son el objetivo de un script.

| Tipo de objetivo                  |                                    Detalles                                     |                                                                                                   Especial                                                                                                   |
|------------------------------|:------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `NEARBY_PLAYERS`             | Jugadores en [rango]($language$/elitemobs/elitescript_targets.md&section=range)  |                                                                Requiere [`range`]($language$/elitemobs/elitescript_targets.md&section=range)                                                                |
| `NEARBY_MOBS`                |       Mobs en [rango]($language$/elitemobs/elitescript_targets.md&section=range)        |                                                                Requiere [`range`]($language$/elitemobs/elitescript_targets.md&section=range)                                                                |
| `WORLD_PLAYERS`              |                                Jugadores en el mundo                                |                                                                                                      ❌                                                                                                      |
| `ALL_PLAYERS`                |                             Jugadores en el servidor                              |                                                                                                      ❌                                                                                                      |
| `DIRECT_TARGET`              |                                Jugadores en el evento                                |                                                                   [Requiere evento compatible]($language$/elitemobs/elitescript_events.md)                                                                   |
| `SELF`                       |                               Élite usando el poder                                |                                                                                                      ❌                                                                                                      |
| `SELF_SPAWN`                 |                      Apunta a la ubicación de aparición de un jefe                      |                                                                                                      ❌                                                                                                      |
| `LOCATION`                   |                               Ubicación específica                                |                                                             Requiere [`location`]($language$/elitemobs/elitescript_targets.md&section=location)                                                             |
| `LOCATIONS`                  |                           Varias ubicaciones específicas                           |                                                            Requiere [`locations`]($language$/elitemobs/elitescript_targets.md&section=locations)                                                            |
| `ZONE_FULL`                  |                             Objetivos dentro de la zona                             |                                                                        Requiere [`Zona`]($language$/elitemobs/elitescript_zones.md)                                                                         |
| `ZONE_BORDER`                |                             Objetivos en el borde de la zona                             |                                                                        Requiere [`Zona`]($language$/elitemobs/elitescript_zones.md)                                                                         |
| `ACTION_TARGET`              |                      Hereda los objetivos de una acción.                      |                 **¡Solo se puede usar para [condiciones] de acción ($language$/elitemobs/elitescript_conditions.md) y [Vectores relativos]($language$/elitemobs/elitescript_relative_vectors.md)!**                 |
| `LANDING_LOCATION`           |                     Apunta a la ubicación en la que cayó un bloque.                      |                                        **¡Solo se puede usar para la acción [`SPAWN_FALLING_BLOCK`]($language$/elitemobs/elitescript_actions.md&section=spawn_falling_block)!**                                         |
| `INHERIT_SCRIPT_TARGET`      |           Hereda el objetivo del script que ejecuta este script            |                                                                          ¡Solo puede ejecutarse si el script fue llamado por otro script!                                                                          |
| `INHERIT_SCRIPT_ZONE_FULL`   |     Objetivos dentro de la zona heredada del script que ejecuta este script     |                                                 Requiere [`Zona`]($language$/elitemobs/elitescript_zones.md) **en el script que llama a este script!**                                                  |
| `INHERIT_SCRIPT_ZONE_BORDER` |     Objetivos en el borde de la zona heredada del script que ejecuta este script     |                                                 Requiere [`Zona`]($language$/elitemobs/elitescript_zones.md) **en el script que llama a este script!**                                                  |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDeathEvent
    Actions:
      - action: MESSAGE
        Target:
          targetType: ALL_PLAYERS
        sValue: "&2¡Hola Mundo!"
```

Esto envía un mensaje al objetivo. Dado que el objetivo está establecido en `ALL_PLAYERS`, enviará ese mensaje a todos los jugadores en línea.

</div>

</details>

</div>

---

## Atributos compartidos

Las siguientes configuraciones se pueden aplicar a todos los objetivos.

| Valores | Detalles | Especial |
| --- | :-: | :-: |
| `offset` | Establece el desplazamiento para la ubicación del objetivo. | ¡No puede dirigirse a entidades! |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDeathEvent
    Actions
    - action: STRIKE_LIGHTNING
      Target:
        targetType: SELF
        offset: "0,2,0"
```

Esto genera un rayo 2 bloques por encima del jefe. Tenga en cuenta que STRIKE_LIGHTNING utiliza ubicaciones y no afecta a las entidades, por lo que puede tener desplazamientos.

No puede establecer un desplazamiento para enviar un mensaje, ya que los mensajes se envían a los jugadores. Sin embargo, puede establecer un desplazamiento a una zona que luego pueda apuntar a entidades.

</div>

</details>

</div>

---

## range

Establece el rango para buscar jugadores cercanos en el tipo de objetivo `NEARBY_PLAYERS`.

| Valores | Detalles | Predeterminado |
| --- | :-: | :-: |
| `range` | Establece el rango, en bloques, para buscar objetivos de jugador. | `20.0` |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDeathEvent
    Actions:
      - action: MESSAGE
        Target:
          targetType: NEARBY_PLAYERS
          range: 25.0
        sValue: "&2¡Jugadores objetivo dentro de los 25 bloques!"
```

Esto envía un mensaje a los jugadores dentro de los 25 bloques del jefe cuando el jefe muere.

</div>

</details>

</div>

## location

Establece la ubicación para el tipo de objetivo `LOCATION`.

| Valores | Detalles | Predeterminado |
| --- | :-: | :-: |
| `location` | Establece la ubicación del mundo a la que se dirigirá. | `ninguno` |

Esto utiliza el formato `location: nombremundo,x,y,z,cabeceo,guiñada` para la ubicación.

**Tenga en cuenta que `same_as_boss` es un marcador de posición válido para el nombre del mundo, como `same_as_boss,100,64,100,0,0` sería una ubicación válida que apuntaría al mismo mundo en el que se encuentra el jefe.**

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDeathEvent
    Actions
    - action: STRIKE_LIGHTNING
      Target:
        targetType: LOCATION
        location: "miMundo,100,64,200,0,0"
```

Esto genera un rayo en la ubicación x=100, y=64, z=200 de un mundo llamado `miMundo`.

</div>

</details>

</div>

---

## locations

Establece las ubicaciones para el tipo de objetivo `LOCATIONS`.

| Valores | Detalles | Predeterminado |
| --- | :-: | :-: |
| `locations` | Establece la lista de ubicaciones del mundo a las que se dirigirá. | `ninguno` |

Esto utiliza el formato `nombremundo,x,y,z,cabeceo,guiñada` para la ubicación.

**Tenga en cuenta que `same_as_boss` es un marcador de posición válido para el nombre del mundo, como `same_as_boss,100,64,100,0,0` sería una ubicación válida que apuntaría al mismo mundo en el que se encuentra el jefe.**

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDeathEvent
    Actions
    - action: STRIKE_LIGHTNING
      Target:
        targetType: LOCATIONS
        locations:
        - "miMundo,100,64,200,0,0"
        - "same_as_boss,-100,12,130,0,0"
```

Esto genera un rayo en la ubicación x=100, y=64, z=200 de un mundo llamado `miMundo` y otro rayo en el mismo mundo que el jefe en la ubicación x=-100, y=12 y z=130.

</div>

</details>

</div>

---

## Zonas objetivo

[Las zonas]($language$/elitemobs/elitescript_zones.md) tienen múltiples objetivos y es importante entender cómo funcionan para usar Elite Scripting en todo su potencial.

Las zonas funcionan en dos partes:

### Parte 1: Establecer dónde va la zona

Las zonas necesitan saber dónde se supone que deben estar y, para ello, utiliza el sistema de objetivos de la misma manera que lo haría para cualquier otro efecto basado en la ubicación, como un rayo.

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Events:
    - EliteMobDamagedEvent
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
```

Esto genera una zona cilíndrica alrededor del jefe. Tenga en cuenta que aún no se han establecido acciones en este ejemplo, eso se cubre a continuación.

Algunas zonas, como [STATIC_RAY]($language$/elitemobs/elitescript_zones.md&section=static_ray), tienen dos o más objetivos. Esto se debe a que los rayos son líneas y las líneas se definen por dos puntos. Esto se trata de forma más extensa en la página de [zonas]($language$/elitemobs/elitescript_zones.md), pero fundamentalmente todas funcionan de la misma manera.

</div>

</details>

</div>

### Parte 2: Apuntar al interior de la zona

Ahora que la zona sabe dónde está, necesitamos que la acción sepa que su objetivo es la zona que hemos definido. Para eso sirven `targetType: ZONE_FULL` y `targetType:ZONE_BORDER`.

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Events:
    - EliteMobDamagedEvent
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
    Actions:
    - action: SPAWN_PARTICLE
      times: 12
      repeatEvery: 5
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        track: false
```

Usando la misma zona de la primera parte, ahora agregamos la acción. El objetivo para esta acción es `ZONE_FULL`, lo que significa que generará partículas dentro de toda la zona.

Tenga en cuenta que ZONE_BORDER no está disponible para todas las zonas. Más información sobre esto en la página de [zonas de script]($language$/elitemobs/elitescript_zones.md).

</div>

</details>

</div>

### Rastrear zona

Establece si la zona se moverá con el objetivo, como si la zona se mueve cuando el jefe se mueve para `targetType: SELF`.

| Valores | Detalles | Predeterminado |
| --- | :-: | :-: |
| `track` | Establece si la zona se moverá con el objetivo. | `true` |

Tenga en cuenta que las zonas animables no se pueden rastrear. [Más información sobre esto aquí.]($language$/elitemobs/elitescript_zones.md&section=animatable)

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Events:
    - EliteMobDamagedEvent
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
    Actions:
    - action: SPAWN_PARTICLE
      times: 12
      repeatEvery: 5
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        track: false
```

En el mismo ejemplo de la parte 1 y la parte 2, la zona ahora está establecida para que no se rastree. Esto significa que la zona aparecerá en la ubicación del jefe, pero incluso cuando el jefe siga alejándose, la zona permanecerá donde apareció por primera vez.

Por último, tenga en cuenta que si una zona está establecida para que no se rastree, registrará su ubicación en el momento en que se llame al script.

Como ejemplo, si desea tener una fase de advertencia y una fase de daño para su script, deberá asegurarse de ejecutar todas las acciones al principio y establecer un tiempo de espera en todas las acciones relacionadas con el daño que desea ejecutar más adelante individualmente. No debe retrasar todo un script que llame a través de `RUN_SCRIPT` por razones técnicas.

El siguiente es un ejemplo correcto de un poder con una advertencia y una fase de daño tomado del Santuario del Palacio de Hielo.

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Events:
    - EliteMobDamagedEvent
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
    Actions:
    - action: SPAWN_PARTICLE
      times: 12
      repeatEvery: 5
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        track: false
    - action: SPAWN_PARTICLE
      wait: 60
      times: 13
      repeatEvery: 3
      particles:
      - particle: FLAME
        amount: 0
        x: 0
        y: 1
        z: 0
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: 0.5
        y: 1
        z: 0.5
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: 0
        y: 1
        z: 0.5
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: 0.5
        y: 1
        z: 0
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: -0.5
        y: 1
        z: -0.5
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: -0.5
        y: 1
        z: 0
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: 0
        y: 1
        z: -0.5
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: -0.5
        y: 1
        z: 0.5
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: 0.5
        y: 1
        z: -0.5
        speed: 0.2
      Target:
        targetType: ZONE_FULL
        track: false
    - action: RUN_SCRIPT
      scripts:
      - DamageCylinder
    - action: PLAY_ANIMATION
      sValue: fire_zone
      Target:
        targetType: SELF
    - action: SET_MOB_AI
      duration: 100
      bValue: false
      Target:
        targetType: SELF
    Cooldowns:
      local: 1200
      global: 300
  DamageCylinder:
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 10
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
        offset: 0,-1,0
    Actions:
    - action: DAMAGE
      wait: 60
      repeatEvery: 10
      times: 4
      multiplier: 4
      Target:
        targetType: ZONE_FULL
        track: false
    - action: SET_ON_FIRE
      wait: 60
      duration: 80
      Target:
        targetType: ZONE_FULL
        track: false
```

</div>

</details>

</div>

Este script hace muchas cosas, pero está separado en dos scripts claros: `VisualCylinder` y `DamageCylinder`.

VisualCylinder se ejecuta primero y tiene la acción `RUN_SCRIPT` que también ejecuta inmediatamente `DamageCylinder` al mismo tiempo que se está ejecutando `VisualCylinder`.

Sin embargo, cada acción en `DamageCylinder` está establecida para esperar 60 ticks, o 3 segundos.

Esto significa que el jefe tiene una fase de advertencia de 3 segundos y luego hace una fase de daño, y aunque las zonas están configuradas para que no rastreen, la zona de advertencia y la zona de daño estarán en la misma ubicación.

### Propiedades de destino específicas de zona

Las zonas tienen las siguientes propiedades específicas:

#### coverage

Establece el porcentaje de la zona que realmente se utilizará para la acción. Solo funciona para objetivos de ubicación (no funcionará al dirigirse a jugadores u otras entidades).

| Valores | Detalles | Predeterminado |
| --- | :-: | :-: |
| `coverage` | Establece el porcentaje de la zona que se cubrirá. | `1.0` |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Events:
    - EliteMobDamagedEvent
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
    Actions:
    - action: SPAWN_PARTICLE
      times: 12
      repeatEvery: 5
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 0.5
```

En este caso, solo el 50 % de la zona estará cubierta de partículas.

</div>

</details>

</div>

### Herencia de objetivos

Cuando un script ejecuta otro script (o "llama" a ese script), es posible pasar información de zona y objetivo del primer script al segundo.

**Usos de ejemplo**

1. **Ejecutores de scripts mejorados**

Los ejecutores de scripts son scripts cuya única función es ejecutar muchos otros scripts. Se utilizan para facilitar la gestión de los scripts, especialmente cuando se manejan varios scripts que requieren una temporización precisa.

Con la herencia de objetivos, varios scripts pueden usar la misma zona u objetivo, lo que reduce potencialmente cientos de líneas de scripting repetitivo.

2. **Filtrado de objetivos de matryoshka/filtrado de objetivos de muñecas rusas**

Las condiciones de filtrado se pueden aplicar a los objetivos en una acción. Al pasar los objetivos a un script diferente con diferentes filtros, se hace posible superponer las condiciones y aplicar diferentes efectos al mismo grupo de objetivos en función de criterios cada vez más específicos.

Como ejemplo, es posible crear una zona que busque jugadores y realizar una acción que verifique si todos los jugadores en la zona tienen una etiqueta específica. Luego, los objetivos válidos se pueden pasar a otro script donde otra acción puede ejecutar una condición de verificación aleatoria y aplicar un efecto en función de esa posibilidad. Luego, los objetivos se pueden pasar a otro script donde otra condición puede hacer una verificación para ver si los objetivos todavía están vivos y realizar algún comportamiento especial si están muertos.

Estos son, por supuesto, solo ejemplos. Es un sistema muy flexible.

3. **Zonas complejas**

Finalmente, es posible superponer objetivos para crear zonas complejas, opcionalmente utilizando condiciones si es necesario, e incluso es posible crear zonas semialeatorias utilizando las condiciones de script y la capacidad de ejecutar solo uno de los scripts enumerados de las acciones de script.

**Nota:** Para esta sección, **"script principal"** se refiere al script que ejecuta el **"script de herencia"**, que es el script que utilizará los objetivos heredados.
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Vectores relativos de Elite Script

## Para qué sirven

Los vectores relativos son vectores que son relativos a una ubicación específica pero dinámica.

Para explicar mejor lo que son, consideremos el siguiente caso: desea empujar a un jugador hacia el jefe como parte de un poder. Dado que tanto el jefe como el jugador se mueven durante el combate, no es posible confiar en un vector específico para lograr este efecto; necesitará un vector que vaya desde el jugador hacia el jefe. (Imagine una línea corta con una flecha que va desde el jugador hacia el jefe).

Los vectores relativos se pueden usar de tantas maneras que sería imposible enumerarlas todas, pero entre ellas se encuentran: disparar entidades (como proyectiles) hacia un jugador o mob específico; generar refuerzos detrás de un jugador; disparar un bloque que cae en una dirección específica; crear rayos que se disparan hacia un jugador y mucho más.

## ¿Cómo funcionan los vectores?

Si no sabe o no recuerda qué son los vectores o cómo funcionan, puede pensar en los vectores como flechas que apuntan desde un punto a otro.

Como tal, una de las propiedades de los vectores es su longitud. Esta longitud es importante; en el caso de las flechas, esta longitud es la velocidad a la que se dispara una flecha, en el caso de intentar obtener puntos de desplazamiento desde una ubicación específica es la distancia desde ese punto. Las cosas que están más lejos tendrán longitudes de vector mayores y las cosas más cercanas tendrán longitudes más cortas.

Para algunas mecánicas, es probable que no desee depender de la distancia entre dos puntos, ya que solo desea obtener una dirección. Afortunadamente, puede utilizar la normalización de vectores, que garantiza que se conserve la dirección, pero cambia la longitud para que sea 1.0. Luego, puede usar multiplicadores para modificar fácilmente el vector hasta que esté satisfecho con el desplazamiento que proporciona o la velocidad que da.

## Propiedades

| Valor |                                                 Detalles                                                  | ¿Obligatorio? | Valor predeterminado |
| --- |:--------------------------------------------------------------------------------------------------------:| :-: | :-: |
| `SourceTarget` | [Objetivo]($language$/elitemobs/elitescript_targets.md) en el punto desde el que comenzará el vector | ✅ | `ninguno` |
| `DestinationTarget` |          [Objetivo]($language$/elitemobs/elitescript_targets.md) en el punto final del vector           | ✅ | `ninguno` |
| `normalize` |                                 Establece si el vector debe normalizarse                                  | ❌ | `false` |
| `multiplier` |                                      Multiplica la longitud del vector                                      | ❌ | `1.0` |
| `offset` |                          Permite insertar un desplazamiento fijo manual a este desplazamiento                           | ❌ | `ninguno` |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  ShootChicken:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SUMMON_ENTITY
      sValue: CHICKEN
      Target:
        targetType: SELF
      RelativeVector:
        SourceTarget:
          targetType: SELF
        DestinationTarget:
          targetType: DIRECT_TARGET
        normalize: true
        multiplier: 2.0
```

Dispara un pollo

***

```yaml
eliteScript:
  ShootArrow:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SUMMON_ENTITY
      sValue: ARROW
      Target:
        targetType: SELF
      RelativeVector:
        SourceTarget:
          targetType: SELF
        DestinationTarget:
          targetType: DIRECT_TARGET
        normalize: true
        multiplier: 2.0
```

Dispara una flecha

***

```yaml
eliteScript:
  SpawnReinforcement:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SUMMON_ENTITY
      sValue: ZOMBIE
      Target:
        targetType: SELF
      RelativeOffset:
        SourceTarget:
          targetType: SELF
        DestinationTarget:
          targetType: DIRECT_TARGET
        normalize: true
        multiplier: 2.0
```

Genera un zombi 2 bloques detrás del jugador, en relación con el jefe.

***

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      Shape: SPHERE
      target:
        targetType: SELF_SPAWN
        offset: 0,0,0
        track: false
      filter: PLAYER
      radius: 6
    Actions:
    - action: SPAWN_PARTICLE
      repeatEvery: 38
      times: 5
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 0.9
      particles:
      - particle: FLAME
        RelativeVector:
          SourceTarget:
            targetType: ACTION_TARGET
            track: true
          DestinationTarget:
            targetType: SELF_SPAWN
            offset: 0,-0.5,0
        speed: 0.05
```

Crea una esfera de llamas animada que se reduce hasta la ubicación de aparición.

</div>

</details>

</div>

### Orden de operaciones

El orden de las operaciones al aplicar las propiedades es el siguiente:

Cálculo de vector -> `normalize` -> `multiplier` -> `offset`
