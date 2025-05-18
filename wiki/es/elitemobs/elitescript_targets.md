```markdown
# Objetivos de Elite Script

Los objetivos son una parte central de los Elite Scripts y son necesarios para que las Acciones y Zonas funcionen.

## Tipos de Objetivo

Los tipos de objetivo establecen qué entidades o ubicaciones son objetivo de un script.

| Tipo de Objetivo             |                                    Detalles                                    |                                                                                                   Especial                                                                                                  |
|------------------------------|:------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `NEARBY_PLAYERS`             | Jugadores en [rango]($language$/elitemobs/elitescript_targets.md&section=range) |                                                                Requiere [`range`]($language$/elitemobs/elitescript_targets.md&section=range)                                                               |
| `NEARBY_MOBS`                |       Mobs en [rango]($language$/elitemobs/elitescript_targets.md&section=range)       |                                                                Requiere [`range`]($language$/elitemobs/elitescript_targets.md&section=range)                                                               |
| `WORLD_PLAYERS`              |                                Jugadores en el mundo                               |                                                                                                      ❌                                                                                                      |
| `ALL_PLAYERS`                |                             Jugadores en el servidor                             |                                                                                                      ❌                                                                                                      |
| `DIRECT_TARGET`              |                                Jugadores en el evento                               |                                                                   [Requiere evento compatible]($language$/elitemobs/elitescript_events.md)                                                                   |
| `SELF`                       |                               Elite usando el poder                               |                                                                                                      ❌                                                                                                      |
| `SELF_SPAWN`                 |                      Objetivo la ubicación de aparición de un jefe                     |                                                                                                      ❌                                                                                                      |
| `LOCATION`                   |                               Ubicación específica                               |                                                             Requiere [`location`]($language$/elitemobs/elitescript_targets.md&section=location)                                                             |
| `LOCATIONS`                  |                           Varias ubicaciones específicas                           |                                                            Requiere [`locations`]($language$/elitemobs/elitescript_targets.md&section=locations)                                                            |
| `ZONE_FULL`                  |                             Objetivos dentro de la zona                            |                                                                        Requiere [`Zone`]($language$/elitemobs/elitescript_zones.md)                                                                        |
| `ZONE_BORDER`                |                             Objetivos en el borde de la zona                           |                                                                        Requiere [`Zone`]($language$/elitemobs/elitescript_zones.md)                                                                        |
| `ACTION_TARGET`              |                      Hereda los objetivos de una acción.                     |                 **¡Solo se puede usar para [condiciones]($language$/elitemobs/elitescript_conditions.md) de acción y [Vectores Relativos]($language$/elitemobs/elitescript_relative_vectors.md)!!**                 |
| `LANDING_LOCATION`           |                     Objetivo la ubicación donde cayó un bloque.                     |                                        **¡Solo se puede usar para la acción [`SPAWN_FALLING_BLOCK`]($language$/elitemobs/elitescript_actions.md&section=spawn_falling_block)!**                                         |
| `INHERIT_SCRIPT_TARGET`      |           Hereda el objetivo del script que ejecuta este script           |                                                                          ¡Solo se puede ejecutar si el script fue llamado por otro script!                                                                          |
| `INHERIT_SCRIPT_ZONE_FULL`   |     Objetivos dentro de la zona heredada del script que ejecuta este script    |                                                 Requiere [`Zone`]($language$/elitemobs/elitescript_zones.md) **¡en el script que llama a este script!**                                                 |
| `INHERIT_SCRIPT_ZONE_BORDER` |     Objetivos en el borde de la zona heredada del script que ejecuta este script    |                                                 Requiere [`Zone`]($language$/elitemobs/elitescript_zones.md) **¡en el script que llama a este script!**                                                 |

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
        sValue: "&2Hola Mundo!"
```

Esto envía un mensaje al objetivo. Dado que el objetivo está configurado como `ALL_PLAYERS`, enviará ese mensaje a todos los jugadores en línea.

</div>

</details>

</div>

---

## Atributos compartidos

Las siguientes configuraciones se pueden aplicar a todos los objetivos.

| Valores | Detalles | Especial |
| --- | :-: | :-: |
| `offset` | Establece el desplazamiento para la ubicación del objetivo. | ¡No puede apuntar a entidades! |

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

No puede establecer un desplazamiento para enviar un mensaje, ya que los mensajes se envían a los jugadores. Sin embargo, puede establecer un desplazamiento a una zona que luego puede apuntar a entidades.

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
        sValue: "&2¡Jugadores objetivo dentro de 25 bloques!"
```

Esto envía un mensaje a los jugadores dentro de los 25 bloques del jefe cuando el jefe muere.

</div>

</details>

</div>

## location

Establece la ubicación para el tipo de objetivo `LOCATION`.

| Valores | Detalles | Predeterminado |
| --- | :-: | :-: |
| `location` | Establece la ubicación del mundo que será objetivo. | `none` |

Esto utiliza el formato `location: worldname,x,y,z,pitch,yaw` para la ubicación.

**Tenga en cuenta que `same_as_boss` es un marcador de posición válido para el nombre del mundo, por ejemplo, `same_as_boss,100,64,100,0,0` sería una ubicación válida que apuntaría al mismo mundo donde se encuentra el jefe.**

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
        location: "myWorld,100,64,200,0,0"
```

Esto genera un rayo en la ubicación x=100, y=64, z=200 de un mundo llamado `myWorld`.

</div>

</details>

</div>

---

## locations

Establece las ubicaciones para el tipo de objetivo `LOCATIONS`.

| Valores | Detalles | Predeterminado |
| --- | :-: | :-: |
| `locations` | Establece la lista de ubicaciones del mundo que serán objetivo. | `none` |

Esto utiliza el formato `worldname,x,y,z,pitch,yaw` para la ubicación.

**Tenga en cuenta que `same_as_boss` es un marcador de posición válido para el nombre del mundo, por ejemplo, `same_as_boss,100,64,100,0,0` sería una ubicación válida que apuntaría al mismo mundo donde se encuentra el jefe.**

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
        - "myWorld,100,64,200,0,0"
        - "same_as_boss,-100,12,130,0,0"
```

Esto genera un rayo en la ubicación x=100, y=64, z=200 de un mundo llamado `myWorld` y otro rayo en el mismo mundo que el jefe en la ubicación x=-100, y=12 y z=130.

</div>

</details>

</div>

---

## Apuntando a zonas

Las [Zonas]($language$/elitemobs/elitescript_zones.md) tienen múltiples objetivos, y es importante entender cómo funcionan para utilizar Elite Scripting en todo su potencial.

Las zonas funcionan en dos partes:

### Parte 1 - Establecer dónde va la zona

Las zonas necesitan saber dónde se supone que deben estar, y para eso se utiliza el sistema de objetivos de la misma manera que se haría para cualquier otro efecto basado en la ubicación, como un rayo.

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

Algunas zonas, como [STATIC_RAY]($language$/elitemobs/elitescript_zones.md&section=static_ray), tienen dos o más objetivos. Esto se debe a que los rayos son líneas, y las líneas se definen por dos puntos. Esto se cubre más extensamente en la [página de zonas]($language$/elitemobs/elitescript_zones.md), pero fundamentalmente todas funcionan de la misma manera.

</div>

</details>

</div>

### Parte 2 - Apuntando al interior de la zona

Ahora que la zona sabe dónde está, necesitamos que la acción sepa que su objetivo es la zona que definimos. Para eso sirven `targetType: ZONE_FULL` y `targetType:ZONE_BORDER`.

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
```

Usando la misma zona de la primera parte, ahora agregamos la acción. El objetivo de esta acción es `ZONE_FULL`, lo que significa que generará partículas dentro de toda la zona.

Tenga en cuenta que ZONE_BORDER no está disponible para todas las zonas. Más sobre eso en la [página de zonas de script]($language$/elitemobs/elitescript_zones.md).

</div>

</details>

</div>

### Seguimiento de zona

Establece si la zona se moverá con el objetivo, por ejemplo, si la zona se moverá cuando el jefe se mueva para `targetType: SELF`.

| Valores | Detalles | Predeterminado |
| --- | :-: | :-: |
| `track` | Establece si la zona se moverá con el objetivo. | `true` |

Tenga en cuenta que las zonas animables no pueden seguir. [Más sobre eso aquí.]($language$/elitemobs/elitescript_zones.md&section=animatable)

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

</div>

</details>

</div>

Usando el mismo ejemplo de la parte 1 y la parte 2, la zona ahora está configurada para no seguir. Esto significa que la zona aparecerá en la ubicación del jefe, pero incluso si el jefe sigue moviéndose, la zona permanecerá donde apareció por primera vez.

Finalmente, tenga en cuenta que si una zona está configurada para no seguir, registrará su ubicación en el momento en que se llama al script.

Como ejemplo, si desea tener una fase de advertencia y una fase de daño para su script, deberá asegurarse de ejecutar todas las acciones al principio y establecer un tiempo de espera en todas las acciones relacionadas con el daño que desea ejecutar más tarde individualmente. No debe retrasar un script completo que llama a través de `RUN_SCRIPT` por razones técnicas.

El siguiente es un ejemplo correcto de un poder con una fase de advertencia y una fase de daño tomado del Santuario del Palacio de Escarcha.

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

`VisualCylinder` se ejecuta primero y tiene la acción `RUN_SCRIPT` que inmediatamente también ejecuta `DamageCylinder` al mismo tiempo que se ejecuta `VisualCylinder`.

Sin embargo, cada acción en `DamageCylinder` está configurada para esperar 60 ticks, o 3 segundos.

Esto significa que el jefe tiene una fase de advertencia de 3 segundos, y luego hace una fase de daño, e incluso si las zonas están configuradas para no seguir, la zona de advertencia y la zona de daño estarán en la misma ubicación.

### Propiedades de objetivo específicas de zona

Las zonas tienen las siguientes propiedades específicas:

#### coverage

Establece el porcentaje de la zona que realmente se utilizará para la acción. Solo funciona para objetivos de ubicación (no funcionará al apuntar a jugadores u otras entidades).

| Valores | Detalles | Predeterminado |
| --- | :-: | :-: |
| `coverage` | Establece el porcentaje de la zona que se cubrirá. Puede aleatorizar este valor usando `~` ejemplo: `1.0~0.3`. | `1.0` |

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

En este caso, solo el 50% de la zona estará cubierta de partículas.

</div>

</details>

</div>

### Heredando objetivos

Cuando un script ejecuta otro script (o "llama" a ese script), es posible pasar información de zona y objetivo del primer script al segundo.

**Ejemplos de uso**

1. **Ejecutores de script mejorados**

Los ejecutores de script son scripts cuya única función es ejecutar muchos otros scripts. Se utilizan para facilitar la gestión de scripts, especialmente al manejar varios scripts que requieren una sincronización precisa.

Con la herencia de objetivos, varios scripts pueden usar la misma zona u objetivo, reduciendo potencialmente cientos de líneas de scripting repetitivo.

2. **Filtrado de objetivos Matryoshka / Filtrado de objetivos de muñecas rusas**

Se pueden aplicar condiciones de filtrado a los objetivos en una acción. Al pasar los objetivos a un script diferente con filtros diferentes, es posible superponer las condiciones y aplicar diferentes efectos al mismo grupo de objetivos basándose en criterios cada vez más específicos.

Como ejemplo, es posible crear una zona que busque jugadores y hacer una acción que verifique si todos los jugadores en la zona tienen una etiqueta específica. Los objetivos válidos pueden pasarse luego a otro script donde otra acción puede ejecutar una condición de verificación aleatoria y aplicar un efecto basado en esa probabilidad. Los objetivos pueden pasarse aún más a otro script donde otra condición puede hacer una verificación para ver si los objetivos aún están vivos y realizar algún comportamiento especial si están muertos.
```Please specify the language you would like the text translated into. I will translate it while retaining the markdown formatting.