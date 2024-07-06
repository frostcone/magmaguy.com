# Objetivos de Elite Script

Los objetivos son una parte central de los Elite Scripts y son necesarios para que las acciones y las zonas funcionen.

## Tipos de objetivos

Los tipos de objetivos establecen qué entidades o ubicaciones son el objetivo de un script.

| Tipo de objetivo                  |                                    Detalles                                     |                                                                                                   Especial                                                                                                   |
|------------------------------|:------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `NEARBY_PLAYERS`             | Jugadores en [rango]($language$/elitemobs/elitescript_targets.md&section=range)  |                                                                Requiere [`rango`]($language$/elitemobs/elitescript_targets.md&section=range)                                                                |
| `NEARBY_MOBS`                |       Mobs en [rango]($language$/elitemobs/elitescript_targets.md&section=range)        |                                                                Requiere [`rango`]($language$/elitemobs/elitescript_targets.md&section=range)                                                                |
| `WORLD_PLAYERS`              |                                Jugadores en el mundo                                |                                                                                                      ❌                                                                                                      |
| `ALL_PLAYERS`                |                             Jugadores en el servidor                              |                                                                                                      ❌                                                                                                      |
| `DIRECT_TARGET`              |                                Jugadores en el evento                                |                                                                   [Requiere evento compatible]($language$/elitemobs/elitescript_events.md)                                                                   |
| `SELF`                       |                               Élite usando poder                                |                                                                                                      ❌                                                                                                      |
| `SELF_SPAWN`                 |                      Apunta a la ubicación de generación de un jefe                      |                                                                                                      ❌                                                                                                      |
| `LOCATION`                   |                               Ubicación específica                                |                                                             Requiere [`ubicación`]($language$/elitemobs/elitescript_targets.md&section=ubicación)                                                             |
| `LOCATIONS`                  |                           Varias ubicaciones específicas                           |                                                            Requiere [`ubicaciones`]($language$/elitemobs/elitescript_targets.md&section=ubicaciones)                                                            |
| `ZONE_FULL`                  |                             Apunta al interior de la zona                             |                                                                        Requiere [`Zona`]($language$/elitemobs/elitescript_zones.md)                                                                         |
| `ZONE_BORDER`                |                             Apunta al borde de la zona                             |                                                                        Requiere [`Zona`]($language$/elitemobs/elitescript_zones.md)                                                                         |
| `ACTION_TARGET`              |                      Hereda los objetivos de una acción.                      |                 **¡Solo se puede usar para [condiciones]($language$/elitemobs/elitescript_conditions.md) y [Vectores relativos]($language$/elitemobs/elitescript_relative_vectors.md) de acción!**                 |
| `LANDING_LOCATION`           |                     Apunta a la ubicación donde cayó un bloque.                     |                                        **¡Solo se puede usar para la [acción `SPAWN_FALLING_BLOCK`]($language$/elitemobs/elitescript_actions.md&section=spawn_falling_block)!**                                         |
| `INHERIT_SCRIPT_TARGET`      |           Hereda el objetivo del script que ejecuta este script            |                                                                          ¡Solo puede ejecutarse si el script fue llamado por otro script!                                                                           |
| `INHERIT_SCRIPT_ZONE_FULL`   |     Apunta al interior de la zona heredada del script que ejecuta este script     |                                                 Requiere [`Zona`]($language$/elitemobs/elitescript_zones.md) **¡en el script que llama a este script!**                                                  |
| `INHERIT_SCRIPT_ZONE_BORDER` |     Apunta al borde de la zona heredada del script que ejecuta este script     |                                                 Requiere [`Zona`]($language$/elitemobs/elitescript_zones.md) **¡en el script que llama a este script!**                                                  |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
    - EliteMobDeathEvent
    Acciones:
      - action: MESSAGE
        Target:
          targetType: ALL_PLAYERS
        sValue: "&2¡Hola mundo!"
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
| `offset` | Establece el desplazamiento para la ubicación del objetivo. | ¡No se pueden apuntar entidades! |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
    - EliteMobDeathEvent
    Acciones
    - action: STRIKE_LIGHTNING
      Target:
        targetType: SELF
        offset: "0,2,0"
```

Esto golpea con un rayo 2 bloques por encima del jefe. Ten en cuenta que STRIKE_LIGHTNING usa ubicaciones y no afecta a las entidades, por lo que puede tener desplazamientos.

No puedes establecer un desplazamiento para enviar un mensaje, ya que los mensajes se envían a los jugadores. Sin embargo, puedes establecer un desplazamiento a una zona que luego puede apuntar a entidades.

</div>

</details>

</div>

---

## Rango

Establece el rango para escanear jugadores cercanos en el tipo de objetivo `NEARBY_PLAYERS`.

| Valores | Detalles | Predeterminado |
| --- | :-: | :-: |
| `range` | Establece el rango, en bloques, para escanear objetivos de jugadores. | `20.0` |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
    - EliteMobDeathEvent
    Acciones:
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

## Ubicación

Establece la ubicación para el tipo de objetivo `LOCATION`.

| Valores | Detalles | Predeterminado |
| --- | :-: | :-: |
| `location` | Establece la ubicación mundial que será el objetivo. | `ninguno` |

Esto utiliza el formato `ubicación: nombredelmundo,x,y,z,cabeceo,guiñada` para la ubicación.

**Ten en cuenta que `same_as_boss` es un marcador de posición válido para el nombre del mundo, como `same_as_boss,100,64,100,0,0` sería una ubicación válida que apuntaría al mismo mundo donde está el jefe.**

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
    - EliteMobDeathEvent
    Acciones
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

## Ubicaciones

Establece las ubicaciones para el tipo de objetivo `LOCATIONS`.

| Valores | Detalles | Predeterminado |
| --- | :-: | :-: |
| `locations` | Establece la lista de ubicaciones mundiales que serán el objetivo. | `ninguno` |

Esto utiliza el formato `nombredelmundo,x,y,z,cabeceo,guiñada` para la ubicación.

**Ten en cuenta que `same_as_boss` es un marcador de posición válido para el nombre del mundo, como `same_as_boss,100,64,100,0,0` sería una ubicación válida que apuntaría al mismo mundo donde está el jefe.**

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
    - EliteMobDeathEvent
    Acciones
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

Las [zonas]($language$/elitemobs/elitescript_zones.md) tienen varios objetivos, y es importante comprender cómo funcionan para utilizar Elite Scripting en todo su potencial.

Las zonas funcionan en dos partes:

### Parte 1: establecer dónde va la zona

Las zonas necesitan saber dónde se supone que deben estar, y para hacerlo, utilizas el sistema de objetivos de la misma manera que lo harías para cualquier otro efecto basado en la ubicación, como un rayo.

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Eventos:
    - EliteMobDamagedEvent
    Zona:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
```

Esto genera una zona cilíndrica alrededor del jefe. Ten en cuenta que todavía no se establecen acciones en este ejemplo, eso se trata a continuación.

Algunas zonas, como [STATIC_RAY]($language$/elitemobs/elitescript_zones.md&section=static_ray), tienen dos o más objetivos. Esto se debe a que los rayos son líneas y las líneas están definidas por dos puntos. Esto se cubre más extensamente en la [página de zonas]($language$/elitemobs/elitescript_zones.md), pero fundamentalmente todos funcionan de la misma manera.

</div>

</details>

</div>

### Parte 2: apuntar al interior de la zona

Ahora que la zona sabe dónde está, necesitamos que la acción sepa que su objetivo es la zona que definimos. Para eso sirven `targetType: ZONE_FULL` y `targetType:ZONE_BORDER`.

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Eventos:
    - EliteMobDamagedEvent
    Zona:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
    Acciones:
    - action: SPAWN_PARTICLE
      times: 12
      repeatEvery: 5
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
```

Usando la misma zona de la primera parte, ahora agregamos la acción. El objetivo de esta acción es `ZONE_FULL`, lo que significa que generará partículas dentro de toda la zona.

Ten en cuenta que ZONE_BORDER no está disponible para todas las zonas. Más sobre eso en la página de [zonas de script]($language$/elitemobs/elitescript_zones.md).

</div>

</details>

</div>

### Seguimiento de zona

Establece si la zona se moverá con el objetivo, como si la zona se moverá cuando el jefe se mueva para `targetType: SELF`.

| Valores | Detalles | Predeterminado |
| --- | :-: | :-: |
| `track` | Establece si la zona se moverá con el objetivo. | `true` |

Ten en cuenta que las zonas animables no pueden rastrear. [Más sobre eso aquí.]($language$/elitemobs/elitescript_zones.md&section=animatable)

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Eventos:
    - EliteMobDamagedEvent
    Zona:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
    Acciones:
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

Usando el mismo ejemplo de la parte 1 y la parte 2, la zona ahora está configurada para no rastrear. Esto significa que la zona aparecerá en la ubicación del jefe, pero incluso cuando el jefe siga alejándose, la zona permanecerá donde apareció por primera vez.

Finalmente, ten en cuenta que si una zona está configurada para no rastrear, registrará su ubicación en el momento en que se llame al script.

Como ejemplo, si quieres tener una fase de advertencia y una fase de daño para tu script, deberás asegurarte de ejecutar todas las acciones al principio y poner un tiempo de espera en todas las acciones relacionadas con el daño que quieres ejecutar más tarde individualmente. No debes retrasar todo un script al que llamas a través de `RUN_SCRIPT` por razones técnicas.

El siguiente es un ejemplo correcto de un poder con una fase de advertencia y una fase de daño tomado del Santuario del Palacio de Hielo.

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Eventos:
    - EliteMobDamagedEvent
    Zona:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
    Acciones:
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
    Enfriamientos:
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
    Acciones:
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

VisualCylinder se ejecuta primero y tiene la acción `RUN_SCRIPT` que inmediatamente también ejecuta `DamageCylinder` al mismo tiempo que se está ejecutando `VisualCylinder`.

Sin embargo, cada acción en `DamageCylinder` está configurada para esperar 60 ticks, o 3 segundos.

Esto significa que el jefe tiene una fase de advertencia de 3 segundos y luego hace una fase de daño, e incluso si las zonas están configuradas para no rastrear la zona de advertencia y la zona de daño estarán en la misma ubicación.

### Propiedades de objetivo específicas de la zona

La zona tiene las siguientes propiedades específicas:

#### coverage

Establece el porcentaje de la zona que realmente se utilizará para la acción. Solo funciona para objetivos de ubicación (no funcionará al apuntar a jugadores u otras entidades).

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
    Eventos:
    - EliteMobDamagedEvent
    Zona:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
    Acciones:
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

### Heredar objetivos

Cuando un script ejecuta otro script (o "llama" a ese script), es posible pasar información de zona y objetivo del primer script al segundo.

**Ejemplos de uso**

1. **Ejecutores de scripts mejorados**

Los ejecutores de scripts son scripts cuya única función es ejecutar muchos otros scripts. Se utilizan para facilitar la gestión de scripts, especialmente cuando se manejan varios scripts que requieren una sincronización precisa.

Con la herencia de objetivos, varios scripts pueden usar la misma zona o el mismo objetivo, lo que reduce potencialmente cientos de líneas de scripting repetitivo.

2. **Filtrado de objetivos Matryoshka/Filtrado de objetivos de muñecas rusas anidadas**

Se pueden aplicar condiciones de filtrado a los objetivos de una acción. Al pasar los objetivos a un script diferente con diferentes filtros, se vuelve posible superponer las condiciones y aplicar diferentes efectos al mismo grupo de objetivos según criterios cada vez más específicos.

Como ejemplo, es posible crear una zona que busque jugadores y hacer una acción que compruebe si todos los jugadores de la zona tienen una etiqueta específica. Los objetivos válidos se pueden pasar a otro script donde otra acción puede ejecutar una condición de verificación aleatoria y aplicar un efecto basado en esa probabilidad. Los objetivos se pueden pasar a otro script donde otra condición puede hacer una verificación para ver si los objetivos aún están vivos y hacer algún comportamiento especial si están muertos.

Estos son, por supuesto, solo ejemplos. Es un sistema muy flexible.

3. **Zonas complejas**

Finalmente, es posible superponer objetivos para crear zonas complejas, utilizando opcionalmente condiciones si es necesario, e incluso es posible crear zonas semi-aleatorias utilizando las condiciones del script y la capacidad de ejecutar solo uno de los scripts enumerados a partir de las acciones del script.

**Nota:** para esta sección, **"script principal"** se refiere al script que ejecuta el **"script heredado"**, que es el script que utilizará los objetivos heredados.

Al utilizar la herencia de objetivos, es importante observar detenidamente el _script principal_ para asegurarse de que se estén pasando los datos correctos.

#### INHERIT_SCRIPT_TARGET

Cuando se usa `INHERIT_SCRIPT_TARGET`, los objetivos del _script principal_ se pasarán al script heredado. Esto tiene un par de advertencias:

- Al pasar **objetivos de entidad**, es posible ejecutar acciones que requieren ubicaciones (como generar partículas), ya que se utilizará la ubicación de las entidades. Por supuesto, también es posible utilizar acciones que requieren entidades.

- Al pasar **objetivos de ubicación**, solo es posible utilizar ubicaciones. **La única forma de obtener una entidad de una ubicación es creando una zona en esa ubicación y buscando entidades.** Entonces, si bien no es imposible pasar una ubicación y luego obtener entidades, requerirá un poco de trabajo adicional.


#### Heredar zonas

Cuando se usa `INHERIT_SCRIPT_ZONE_FULL` o `INHERIT_SCRIPT_ZONE_BORDER`, es imperativo que el _script principal_ defina una zona, o de lo contrario el _script heredado_ no podrá ejecutarse correctamente.

Además, las zonas pueden, opcionalmente, ser [rastreadas]($language$/elitemobs/elitescript_targets.md&section=zone-track). Esto también se pasará junto con la zona.

- Una zona **sin seguimiento** siempre creará una zona donde la defina el _script heredado_. Esto significa que las configuraciones de zona serán utilizadas por las acciones en los _scripts heredados_ para crear nuevas zonas cada vez que se ejecute una acción, y la ubicación de esas zonas será definida por la acción.

- Una zona **rastreada** puede pasar la misma ubicación exacta de la zona a todos los _scripts heredados_ si el _script principal_ está configurado para apuntar a `ZONE_FULL` o `ZONE_BORDER`. Esto significa que cada script actuará en las mismas ubicaciones.


