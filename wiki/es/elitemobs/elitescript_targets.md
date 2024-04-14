# Objetivos del Script Elite

Los objetivos son una parte central de los Scripts Elite, y son necesarios para que funcionen las Acciones y Zonas.

## Tipos de Objetivos

Los tipos de objetivos establecen qué entidades o ubicaciones son el blanco de un script.

| Tipo de Objetivo             |                                    Detalles                                   |                                                                                                   Especial                                                                                                   |
|------------------------------|:------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `NEARBY_PLAYERS`             | Jugadores en [rango]($language$/elitemobs/elitescript_targets.md&section=range)|                                                                Requiere [`rango`]($language$/elitemobs/elitescript_targets.md&section=range)                                                                 |
| `NEARBY_MOBS`                |       Monstruos en [rango]($language$/elitemobs/elitescript_targets.md&section=range)        |                                                                Requiere [`rango`]($language$/elitemobs/elitescript_targets.md&section=range)                                                                 |
| `WORLD_PLAYERS`              |                                Jugadores en el mundo                                |                                                                                                      ❌                                                                                                      |
| `ALL_PLAYERS`                |                             Jugadores en el servidor                              |                                                                                                      ❌                                                                                                      |
| `DIRECT_TARGET`              |                                Jugadores en el evento                                |                                                                   Requiere evento compatible [$language$/elitemobs/elitescript_events.md)                                                                   |
| `SELF`                       |                               Elite utilizando el poder                                |                                                                                                      ❌                                                                                                      |
| `SELF_SPAWN`                 |                      Apunta a la ubicación de aparicion de un jefe                       |                                                                                                      ❌                                                                                                      |
| `LOCATION`                   |                               Ubicación especifica                                |                                                             Requiere [`ubicación`]($language$/elitemobs/elitescript_targets.md&section=location)                                                             |
| `LOCATIONS`                  |                           Varias ubicaciones especificas                           |                                                            Requiere [`ubicaciones`]($language$/elitemobs/elitescript_targets.md&section=locations)                                                            |
| `ZONE_FULL`                  |                             Apunta al interior de la zona                             |                                                                        Requiere [`Zona`]($language$/elitemobs/elitescript_zones.md)                                                                         |
| `ZONE_BORDER`                |                             Apunta a los bordes de la zona                             |                                                                        Requiere [`Zona`]($language$/elitemobs/elitescript_zones.md)                                                                         |
| `ACTION_TARGET`              |                      Hereda los objetivos de una acción.                      |                **Sólo se puede utilizar para las [condiciones]($language$/elitemobs/elitescript_conditions.md) de la acción y [Vectores Relativos]($language$/elitemobs/elitescript_relative_vectors.md)!!**                 |
| `LANDING_LOCATION`           |                     Apunta a la ubicación donde cayó un bloque.                      |                                       **Solo se puede utilizar para la acción [`SPAWN_FALLING_BLOCK`]($language$/elitemobs/elitescript_actions.md&section=spawn_falling_block)!**                                        |
| `INHERIT_SCRIPT_TARGET`      |           Hereda el objetivo del script que ejecuta este script            |                                                                         Sólo puede ejecutarse si el script fue llamado por otro script!                                                                            |
| `INHERIT_SCRIPT_ZONE_FULL`   |     Apunta al interior de la zona heredada del script que ejecuta este script     |                                                 Requiere [`Zona`]($language$/elitemobs/elitescript_zones.md) **en el script que llama a este script!**                                                  |
| `INHERIT_SCRIPT_ZONE_BORDER` |     Apunta al borde de la zona heredada del script que ejecuta este script     |                                                 Requiere [`Zona`]($language$/elitemobs/elitescript_zones.md) **en el script que llama a este script!**                                                  |

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

Esto envía un mensaje al objetivo. Ya que el objetivo está configurado para `ALL_PLAYERS`, transmitirá ese mensaje a todos los jugadores en línea.

</div>

</details>

</div>

---

## Atributos Compartidos

Las siguientes configuraciones pueden aplicarse a todos los objetivos.

| Valores | Detalles | Especial |
| --- | :-: | :-: |
| `offset` | Establece el desplazamiento para la ubicación del objetivo. | ¡No puede apuntar entidades! |

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

No puedes establecer un desplazamiento para enviar un mensaje, ya que los mensajes se envían a los jugadores. Sin embargo, puedes establecer un desplazamiento a una zona que luego puede apuntar a entidades.

</div>

</details>

</div>

---

## range

Establece el rango para escanear jugadores cercanos en el tipo de objetivo `NEARBY_PLAYERS`.

| Valores | Detalles | Por defecto |
| --- | :-: | :-: |
| `range` | Establece el rango, en bloques, para escanear objetivos de jugadores. | `20.0` |

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
        sValue: "&2¡Jugadores apuntados dentro de 25 bloques!"
```

Esto envía un mensaje a los jugadores dentro de 25 bloques del jefe cuando el jefe muere.

</div>

</details>

</div>

## location

Establece la ubicación para el tipo de objetivo `LOCATION`.

| Valores | Detalles | Por defecto |
| --- | :-: | :-: |
| `location` | Establece la ubicación mundial que será apuntada. | `ninguno` |

Esto utiliza el formato `location: nombredelmundo,x,y,z,pitch,yaw` para la ubicación.

**Tenga en cuenta que `igual_al_jefe` es un espacio reservado válido para el nombre del mundo, tal como `igual_al_jefe,100,64,100,0,0` sería una ubicación válida que apuntaría al mismo mundo que donde está el jefe.**

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

| Valores | Detalles | Por defecto |
| --- | :-: | :-: |
| `locations` | Establece la lista de ubicaciones mundiales que serán apuntadas. | `ninguno` |

Esto utiliza el formato `nombredelmundo,x,y,z,pitch,yaw` para la ubicación.

**Tenga en cuenta que `igual_al_jefe` es un espacio reservado válido para el nombre del mundo, tal como `igual_al_jefe,100,64,100,0,0` sería una ubicación válida que apuntaría al mismo mundo que donde está el jefe.**

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
        - "igual_al_jefe,-100,12,130,0,0"
```

Esto genera un rayo en la ubicación x=100, y=64, z=200 de un mundo llamado `miMundo` y otro rayo en el mismo mundo que el jefe en la ubicación x=-100, y=12 y z=130.

</div>

</details>

</div>

---

## Targeting zones

Las [Zonas]($language$/elitemobs/elitescript_zones.md) tienen múltiples objetivos, y es importante entender cómo funcionan para utilizar al máximo la Escritura de Elite.

Las zonas trabajan en dos partes:

### Parte 1 - Estableciendo a dónde va la zona

Las zonas necesitan saber dónde se supone que deben estar, y para hacerlo usted utiliza el sistema de objetivos de la misma manera que lo haría para cualquier otro efecto basado en ubicaciones, como un golpe de rayo.

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

Esto genera una zona cilíndrica alrededor del jefe. Nótese que no se establecen acciones en este ejemplo todavía, eso se cubre más adelante.

Algunas zonas, como [RAYO_ESTÁTICO]($language$/elitemobs/elitescript_zones.md&section=static_ray), tienen dos o más objetivos. Esto se debe a que los rayos son líneas, y las líneas son definidas por dos puntos. Esto se cubre más extensamente en la [página de zonas]($language$/elitemobs/elitescript_zones.md), pero fundamentalmente todas funcionan de la misma manera.

</div>

</details>

</div>

### Parte 2 - Apuntando al interior de la zona

Ahora que la zona sabe dónde está, necesitamos que la acción sepa que su objetivo es la zona que hemos definido. Para eso es `targetType: ZONE_FULL` y `targetType:ZONE_BORDER`.

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

Usando la misma zona de la primera parte, ahora añadimos la acción. El objetivo de esta acción es `ZONE_FULL`, lo que significa que estará generando partículas dentro de toda la zona.

Note que ZONE_BORDER no está disponible para todas las zonas. Más sobre eso en la página [zonas de script]($language$/elitemobs/elitescript_zones.md).

</div>

</details>

</div>

### Zone track

Establece si la zona se moverá con el objetivo, como si la zona se moverá cuando el jefe se mueva para `targetType: SELF`.

| Values | Details | Default |
| --- | :-: | :-: |
| `track` | Establece si la zona se moverá con el objetivo. | `verdadero` |

Tenga en cuenta que las zonas animables no pueden seguir la pista. [Más sobre eso aquí.]($language$/elitemobs/elitescript_zones.md&section=animatable)

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

Utilizando el mismo ejemplo de la parte 1 y parte 2, la zona ahora está configurada para no seguir la pista. Esto significa que la zona se generará en la ubicación del jefe, pero incluso mientras el jefe continúa moviéndose lejos, la zona permanecerá donde se generó por primera vez.

Finalmente, tenga en cuenta que si una zona está configurada para no seguir la pista, registrará su ubicación en el momento en que se llama al script.

Como ejemplo, si desea tener una fase de advertencia y una fase de daño para su script, tendrá que asegurarse de ejecutar todas las acciones al principio y poner un tiempo de espera en todas las acciones relacionadas con el daño que desea ejecutar más tarde individualmente. No deberías retrasar un script completo al que llamas a través de `RUN_SCRIPT` por razones técnicas.

El siguiente es un ejemplo correcto de un poder con una fase de advertencia y daño tomada de la Sala del Palacio de Frost.

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

Este script hace muchas cosas, pero se divide en dos scripts claros: `VisualCylinder` y `DamageCylinder`.

VisualCylinder se ejecuta primero y tiene la acción `RUN_SCRIPT` que inmediatamente también ejecuta el `DamageCylinder` al mismo tiempo que se está ejecutando `VisualCylinder`.

Sin embargo, todas las acciones en `DamageCylinder` están configuradas para esperar 60 ticks, o 3 segundos.

Esto significa que el jefe tiene una fase de advertencia de 3 segundos, y luego hace una fase de daño, y aunque las zonas están configuradas para no rastrear la zona de advertencia y la zona de daño estarán en la misma ubicación.

### Propiedades de objetivo específicas de la zona

Las zonas tienen las siguientes propiedades específicas:

#### cobertura

Establece el porcentaje de la zona que realmente se utilizará para la acción. Solo funciona para objetivos de ubicación (no funcionará al apuntar a jugadores u otras entidades).

| Valores | Detalles | Predeterminado |
| --- | :-: | :-: |
| `cobertura` | Establece el porcentaje de la zona que será cubierto. | `1.0` |

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

Cuando un script ejecuta otro script (o "llama" a ese script), es posible pasar información de zona y objetivo del primero al segundo.

**Usos de ejemplo**

1. **Corredores de script mejorados**

Los corredores de scripts son scripts cuya única función es ejecutar muchos otros scripts. Se utilizan para facilitar la gestión de scripts, especialmente cuando se manejan varios scripts que requieren un tiempo preciso.

Con la herencia de objetivos, varios scripts pueden usar la misma zona u objetivo, reduciendo potencialmente cientos de líneas de script repetitivo.

2. **Filtrado de objetivos Matryoshka / Filtrado de objetivos muñeca rusa anidan**

Las condiciones de filtrado se pueden aplicar a los objetivos en una acción. Al pasar los objetivos a un script diferente con diferentes filtros, es posible superponer las condiciones y aplicar diferentes efectos a la misma pool de objetivos basados en criterios cada vez más específicos.

Por ejemplo, es posible crear una zona que busca jugadores y realizar una acción que comprueba si todos los jugadores en la zona tienen una etiqueta específica. Los objetivos válidos pueden ser transferidos a otro script donde puede hacer un check al azar y aplicar un efecto según esa probabilidad. Los objetivos pueden seguir pasándose a otro script donde otra condición puede comprobar si los objetivos están vivos y comportarse de forma especial si están muertos.

Estos son, por supuesto, solo ejemplos. Es un sistema muy flexible.

3. **Zonas complejas**

Finalmente, es posible superponer objetivos para crear zonas complejas, utilizando opcionalmente condiciones si se requiere, e incluso se puede crear zonas semi-aleatorias utilizando las condiciones de script y la capacidad para solo ejecutar uno de los scripts listado de las acciones del script.

**Nota:** Para esta sección, **"script padre"** se refiere al script que ejecuta el **"script heredero"**, que es el script que utilizará los objetivos heredados.

Al usar la herencia de objetivos, es importante echar un vistazo cuidadoso al _script padre_ para asegurarse de que los datos correctos se están pasando.

#### INHERIT_SCRIPT_TARGET

Cuando se usa `INHERIT_SCRIPT_TARGET`, los objetivos del _script padre_ se pasarán al script heredero. Esto tiene un par de advertencias:

- Al pasar **objetivos de entidad**, es posible ejecutar acciones que requieren ubicaciones (como la aparición de partículas) ya que se utilizará la ubicación de las entidades. Es, por supuesto, también posible usar acciones que requieran entidades.

- Al pasar **objetivos de ubicación**, solo es posible usar ubicaciones. **La única manera de obtener una entidad de una ubicación es creando una zona en esa ubicación y buscando entidades.** Entonces, aunque no es imposible pasar una ubicación y luego obtener entidades, requerirá un poco de trabajo extra.

#### Herencia de zonas

Al usar `INHERIT_SCRIPT_ZONE_FULL` o `INHERIT_SCRIPT_ZONE_BORDER`, es imperativo que el _script padre_ defina una zona, o de lo contrario el _script heredero_ no podrá ejecutarse correctamente.

Además, las zonas pueden ser opcionalmente [rastreadas]($language$/elitemobs/elitescript_targets.md&section=zone-track). Esto también se pasará junto con la zona.

- Una zona **sin rastrear** siempre creará una zona donde la defina el _script heredero_. Esto significa que los ajustes de la zona serán utilizados por las acciones en los _scripts herederos_ para crear nuevas zonas cada vez que se ejecute una acción, y la ubicación de esas zonas será definida por la acción.

- Una zona **rastreada** puede pasar la misma ubicación exacta de la zona a todos los _scripts herederos_ si el _script padre_ está configurado para apuntar a `ZONE_FULL` o `ZONE_BORDER`. Esto significa que cada script estará actuando en las mismas ubicaciones.