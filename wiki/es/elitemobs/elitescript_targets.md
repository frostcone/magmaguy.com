# Objetivos de Script de Élite

Los objetivos son una parte central de los Scripts de Élite y son necesarios para que las Acciones y las Zonas
funcionen.

## Tipos de Objetivos

Los tipos de objetivos establecen qué entidades o ubicaciones son el objetivo de un script.

| Tipo de Objetivo             |                                    Detalles                                     |                                                                                       Especial                                                                                       |
|------------------------------|:-------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `NEARBY_PLAYERS`             | Jugadores en [rango]($language$/elitemobs/elitescript_targets.md&section=range) |                                                    Requiere [`rango`]($language$/elitemobs/elitescript_targets.md&section=range)                                                     |
| `NEARBY_MOBS`                |   Mobs en [rango]($language$/elitemobs/elitescript_targets.md&section=range)    |                                                    Requiere [`rango`]($language$/elitemobs/elitescript_targets.md&section=range)                                                     |
| `WORLD_PLAYERS`              |                              Jugadores en el mundo                              |                                                                                          ❌                                                                                           |
| `ALL_PLAYERS`                |                            Jugadores en el servidor                             |                                                                                          ❌                                                                                           |
| `DIRECT_TARGET`              |                             Jugadores en el evento                              |                                                       [Requiere evento compatible]($language$/elitemobs/elitescript_events.md)                                                       |
| `SELF`                       |                              Élite usando el poder                              |                                                                                          ❌                                                                                           |
| `SELF_SPAWN`                 |                 Apunta a la ubicación de generación de un jefe                  |                                                                                          ❌                                                                                           |
| `LOCATION`                   |                              Ubicación específica                               |                                                 Requiere [`ubicación`]($language$/elitemobs/elitescript_targets.md&section=location)                                                 |
| `LOCATIONS`                  |                         Varias ubicaciones específicas                          |                                               Requiere [`ubicaciones`]($language$/elitemobs/elitescript_targets.md&section=locations)                                                |
| `ZONE_FULL`                  |                           Objetivos dentro de la zona                           |                                                             Requiere [`Zona`]($language$/elitemobs/elitescript_zones.md)                                                             |
| `ZONE_BORDER`                |                        Objetivos en el borde de la zona                         |                                                             Requiere [`Zona`]($language$/elitemobs/elitescript_zones.md)                                                             |
| `ACTION_TARGET`              |                       Hereda los objetivos de una acción.                       | **¡Solo se puede usar para [condiciones] de acción ($language$/elitemobs/elitescript_conditions.md) y [Vectores Relativos]($language$/elitemobs/elitescript_relative_vectors.md)!!** |
| `LANDING_LOCATION`           |                   Apunta a la ubicación donde cayó un bloque.                   |                       **¡Solo se puede usar para la acción [`SPAWN_FALLING_BLOCK`]($language$/elitemobs/elitescript_actions.md&section=spawn_falling_block)!**                       |
| `INHERIT_SCRIPT_TARGET`      |              Hereda el objetivo del script que ejecuta este script              |                                                           ¡Solo puede ejecutarse si el script fue llamado por otro script!                                                           |
| `INHERIT_SCRIPT_ZONE_FULL`   |     Objetivos dentro de la zona heredada del script que ejecuta este script     |                                        Requiere [`Zona`]($language$/elitemobs/elitescript_zones.md) **en el script que llama a este script!**                                        |
| `INHERIT_SCRIPT_ZONE_BORDER` |  Objetivos en el borde de la zona heredada del script que ejecuta este script   |                                        Requiere [`Zona`]($language$/elitemobs/elitescript_zones.md) **en el script que llama a este script!**                                        |

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
      - action: MENSAJE
        Objetivo:
          targetType: ALL_PLAYERS
        sValue: "&2¡Hola Mundo!"
```

Esto envía un mensaje al objetivo. Dado que el objetivo está establecido en `ALL_PLAYERS`, enviará ese mensaje a todos los jugadores en línea.

</div>

</details>

</div>

---

## Atributos Compartidos

Los siguientes ajustes se pueden aplicar a todos los objetivos.

| Valores  |                          Detalles                           |            Especial            |
|----------|:-----------------------------------------------------------:|:------------------------------:|
| `offset` | Establece el desplazamiento para la ubicación del objetivo. | ¡No puede apuntar a entidades! |

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
    - action: GOLPE_RAYO
      Objetivo:
        targetType: SELF
        offset: "0,2,0"
```

Esto golpea un rayo 2 bloques por encima del jefe. Ten en cuenta que GOLPE_RAYO utiliza ubicaciones y no afecta a las
entidades, por lo que puede tener desplazamientos.

No puedes establecer un desplazamiento para enviar un mensaje, ya que los mensajes se envían a los jugadores. Sin
embargo, puedes establecer un desplazamiento a una zona que luego puede apuntar a las entidades.

</div>

</details>

</div>

---

## rango

Establece el rango para buscar jugadores cercanos en el tipo de objetivo `NEARBY_PLAYERS`.

| Valores |                              Detalles                               | Predeterminado |
|---------|:-------------------------------------------------------------------:|:--------------:|
| `range` | Establece el rango, en bloques, para buscar objetivos de jugadores. |     `20.0`     |

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
      - action: MENSAJE
        Objetivo:
          targetType: NEARBY_PLAYERS
          range: 25.0
        sValue: "&2¡Jugadores objetivo dentro de 25 bloques!"
```

Esto envía un mensaje a los jugadores que se encuentran a 25 bloques del jefe cuando el jefe muere.

</div>

</details>

</div>

## ubicación

Establece la ubicación para el tipo de objetivo `LOCATION`.

| Valores    |                       Detalles                       | Predeterminado |
|------------|:----------------------------------------------------:|:--------------:|
| `location` | Establece la ubicación mundial que será el objetivo. |     `none`     |

Esto utiliza el formato `location: nombre_del_mundo,x,y,z,pitch,yaw` para la ubicación.

**Ten en cuenta que `same_as_boss` es un marcador de posición válido para el nombre del mundo, por
ejemplo, `same_as_boss,100,64,100,0,0` sería una ubicación válida que apuntaría al mismo mundo donde se encuentra el
jefe.**

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
    - action: GOLPE_RAYO
      Objetivo:
        targetType: LOCATION
        location: "miMundo,100,64,200,0,0"
```

Esto genera un rayo en la ubicación x=100, y=64, z=200 de un mundo llamado `miMundo`.

</div>

</details>

</div>

---

## ubicaciones

Establece las ubicaciones para el tipo de objetivo `LOCATIONS`.

| Valores     |                              Detalles                              | Predeterminado |
|-------------|:------------------------------------------------------------------:|:--------------:|
| `locations` | Establece la lista de ubicaciones mundiales que serán el objetivo. |     `none`     |

Esto utiliza el formato `nombre_del_mundo,x,y,z,pitch,yaw` para la ubicación.

**Ten en cuenta que `same_as_boss` es un marcador de posición válido para el nombre del mundo, por
ejemplo, `same_as_boss,100,64,100,0,0` sería una ubicación válida que apuntaría al mismo mundo donde se encuentra el
jefe.**

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
    - action: GOLPE_RAYO
      Objetivo:
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

## Zonas de Objetivo

Las [Zonas]($language$/elitemobs/elitescript_zones.md) tienen varios objetivos, y es importante comprender cómo
funcionan para aprovechar al máximo los Scripts de Élite.

Las zonas funcionan en dos partes:

### Parte 1: Establecer dónde va la zona

Las zonas necesitan saber dónde se supone que están y, para ello, se utiliza el sistema de objetivos de la misma manera
que se haría para cualquier otro efecto basado en la ubicación, como un rayo.

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  CilindroVisual:
    Eventos:
    - EliteMobDamagedEvent
    Zona:
      radius: 10.0
      shape: CILINDRO
      height: 1
      filter: JUGADOR
      borderRadius: 5.0
      Objetivo:
        targetType: SELF
```

Esto genera una zona cilíndrica alrededor del jefe. Ten en cuenta que en este ejemplo aún no se han establecido
acciones, eso se trata a continuación.

Algunas zonas, como [RAYO_ESTÁTICO]($language$/elitemobs/elitescript_zones.md&section=static_ray), tienen dos o más
objetivos. Esto se debe a que los rayos son líneas, y las líneas se definen por dos puntos. Esto se trata más
extensamente en la [página de zonas]($language$/elitemobs/elitescript_zones.md), pero fundamentalmente todas funcionan
de la misma manera.

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
  CilindroVisual:
    Eventos:
    - EliteMobDamagedEvent
    Zona:
      radius: 10.0
      shape: CILINDRO
      height: 1
      filter: JUGADOR
      borderRadius: 5.0
      Objetivo:
        targetType: SELF
    Acciones:
    - action: GENERAR_PARTÍCULA
      times: 12
      repeatEvery: 5
      particles:
      - particle: HUMO_NORMAL
      Objetivo:
        targetType: ZONE_FULL
```

Usando la misma zona de la primera parte, ahora añadimos la acción. El objetivo de esta acción es `ZONE_FULL`, lo que
significa que generará partículas dentro de toda la zona.

Ten en cuenta que `ZONE_BORDER` no está disponible para todas las zonas. Más información sobre esto en la
página [zonas de script]($language$/elitemobs/elitescript_zones.md).

</div>

</details>

</div>

### Rastreo de zona

Establece si la zona se moverá con el objetivo, por ejemplo, si la zona se moverá cuando el jefe se mueva
para `targetType: SELF`.

| Valores |                    Detalles                     | Predeterminado |
|---------|:-----------------------------------------------:|:--------------:|
| `track` | Establece si la zona se moverá con el objetivo. |     `true`     |

Ten en cuenta que las zonas animadas no se pueden
rastrear. [Más información aquí.]($language$/elitemobs/elitescript_zones.md&section=animatable)

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  CilindroVisual:
    Eventos:
    - EliteMobDamagedEvent
    Zona:
      radius: 10.0
      shape: CILINDRO
      height: 1
      filter: JUGADOR
      borderRadius: 5.0
      Objetivo:
        targetType: SELF
    Acciones:
    - action: GENERAR_PARTÍCULA
      times: 12
      repeatEvery: 5
      particles:
      - particle: HUMO_NORMAL
      Objetivo:
        targetType: ZONE_FULL
        track: false
```

</div>

</details>

</div>

Utilizando el mismo ejemplo de la parte 1 y la parte 2, la zona ahora está configurada para que no rastree. Esto
significa que la zona se generará en la ubicación del jefe, pero incluso cuando el jefe siga alejándose, la zona
permanecerá donde se generó por primera vez.

Por último, ten en cuenta que si una zona está configurada para no rastrear, registrará su ubicación en el momento en
que se llame al script.

Por ejemplo, si quieres tener una fase de advertencia y una fase de daño para tu script, tendrás que asegurarte de
ejecutar todas las acciones al principio y poner un tiempo de espera en todas las acciones relacionadas con el daño que
quieres ejecutar más adelante individualmente. No deberías retrasar todo un script que llamas a través de `RUN_SCRIPT`
por razones técnicas.

El siguiente es un ejemplo correcto de un poder con una fase de advertencia y una fase de daño tomado del Santuario del
Palacio de Hielo.

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  CilindroVisual:
    Eventos:
    - EliteMobDamagedEvent
    Zona:
      radius: 10.0
      shape: CILINDRO
      height: 1
      filter: JUGADOR
      borderRadius: 5.0
      Objetivo:
        targetType: SELF
    Acciones:
    - action: GENERAR_PARTÍCULA
      times: 12
      repeatEvery: 5
      particles:
      - particle: HUMO_NORMAL
      Objetivo:
        targetType: ZONE_FULL
        track: false
    - action: GENERAR_PARTÍCULA
      wait: 60
      times: 13
      repeatEvery: 3
      particles:
      - particle: LLAMA
        amount: 0
        x: 0
        y: 1
        z: 0
        speed: 0.2
      - particle: LLAMA
        amount: 0
        x: 0.5
        y: 1
        z: 0.5
        speed: 0.2
      - particle: LLAMA
        amount: 0
        x: 0
        y: 1
        z: 0.5
        speed: 0.2
      - particle: LLAMA
        amount: 0
        x: 0.5
        y: 1
        z: 0
        speed: 0.2
      - particle: LLAMA
        amount: 0
        x: -0.5
        y: 1
        z: -0.5
        speed: 0.2
      - particle: LLAMA
        amount: 0
        x: -0.5
        y: 1
        z: 0
        speed: 0.2
      - particle: LLAMA
        amount: 0
        x: 0
        y: 1
        z: -0.5
        speed: 0.2
      - particle: LLAMA
        amount: 0
        x: -0.5
        y: 1
        z: 0.5
        speed: 0.2
      - particle: LLAMA
        amount: 0
        x: 0.5
        y: 1
        z: -0.5
        speed: 0.2
      Objetivo:
        targetType: ZONE_FULL
        track: false
    - action: RUN_SCRIPT
      scripts:
      - CilindroDeDaño
    - action: REPRODUCIR_ANIMACIÓN
      sValue: zona_fuego
      Objetivo:
        targetType: SELF
    - action: ESTABLECER_IA_MOB
      duration: 100
      bValue: false
      Objetivo:
        targetType: SELF
    Cooldowns:
      local: 1200
      global: 300
  CilindroDeDaño:
    Zona:
      radius: 10.0
      shape: CILINDRO
      height: 10
      filter: JUGADOR
      borderRadius: 5.0
      Objetivo:
        targetType: SELF
        offset: 0,-1,0
    Acciones:
    - action: DAÑO
      wait: 60
      repeatEvery: 10
      times: 4
      multiplier: 4
      Objetivo:
        targetType: ZONE_FULL
        track: false
    - action: PRENDER_EN_FUEGO
      wait: 60
      duration: 80
      Objetivo:
        targetType: ZONE_FULL
        track: false
```

</div>

</details>

</div>

Este script hace muchas cosas, pero está separado en dos scripts claros: `CilindroVisual` y `CilindroDeDaño`.

`CilindroVisual` se ejecuta primero y tiene la acción `RUN_SCRIPT` que también ejecuta inmediatamente
el `CilindroDeDaño` al mismo tiempo que se está ejecutando el `CilindroVisual`.

Sin embargo, cada acción en `CilindroDeDaño` está configurada para esperar 60 ticks, o 3 segundos.

Esto significa que el jefe tiene una fase de advertencia de 3 segundos y luego hace una fase de daño, e incluso aunque
las zonas estén configuradas para no rastrear, la zona de advertencia y la zona de daño estarán en la misma ubicación.

### Propiedades de objetivos específicas de la zona

Las zonas tienen las siguientes propiedades específicas:

#### cobertura

Establece el porcentaje de la zona que se utilizará realmente para la acción. Solo funciona para objetivos de
ubicación (no funciona al apuntar a jugadores u otras entidades).

| Valores    |                      Detalles                      | Predeterminado |
|------------|:--------------------------------------------------:|:--------------:|
| `coverage` | Establece el porcentaje de la zona que se cubrirá. |     `1.0`      |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  CilindroVisual:
    Eventos:
    - EliteMobDamagedEvent
    Zona:
      radius: 10.0
      shape: CILINDRO
      height: 1
      filter: JUGADOR
      borderRadius: 5.0
      Objetivo:
        targetType: SELF
    Acciones:
    - action: GENERAR_PARTÍCULA
      times: 12
      repeatEvery: 5
      particles:
      - particle: HUMO_NORMAL
      Objetivo:
        targetType: ZONE_FULL
        track: false
        coverage: 0.5
```

En este caso, solo el 50% de la zona se cubrirá con partículas.

</div>

</details>

</div>

### Heredar objetivos

Cuando un script ejecuta otro script (o "llama" a ese script), es posible pasar información de zona y objetivos del
primer script al segundo.

**Ejemplos de uso**

1. **Ejecutores de scripts mejorados**

Los ejecutores de scripts son scripts cuya única función es ejecutar muchos otros scripts. Se utilizan para facilitar la
gestión de scripts, especialmente cuando se manejan varios scripts que requieren una temporización precisa.

Con la herencia de objetivos, varios scripts pueden utilizar la misma zona u objetivo, reduciendo potencialmente cientos
de líneas de scripts repetitivos.

2. **Filtrado de objetivos de Matryoshka / Filtrado de objetivos de muñeca rusa**

Las condiciones de filtrado se pueden aplicar a los objetivos de una acción. Al pasar los objetivos a un script
diferente con diferentes filtros, es posible superponer las condiciones y aplicar diferentes efectos al mismo grupo de
objetivos basados en criterios cada vez más específicos.

Por ejemplo, es posible crear una zona que busque jugadores y realizar una acción que compruebe si todos los jugadores
de la zona tienen una etiqueta específica. Los objetivos válidos se pueden pasar a otro script donde otra acción puede
ejecutar una condición de comprobación aleatoria y aplicar un efecto basado en esa probabilidad. A continuación, los
objetivos se pueden pasar a otro script donde otra condición puede comprobar si los objetivos siguen vivos y realizar
algún comportamiento especial si están muertos.

Estos son, por supuesto, solo ejemplos. Es un sistema muy flexible.

3. **Zonas complejas**

Por último, es posible superponer objetivos para crear zonas complejas, opcionalmente utilizando condiciones si es
necesario, e incluso es posible crear zonas semi-aleatorias utilizando las condiciones del script y la capacidad de
ejecutar solo uno de los scripts listados en las acciones del script.

**Nota:** Para esta sección, **"script padre"** se refiere al script que ejecuta el **"script heredero"**, que es el
script que utilizará los objetivos heredados.
Cuando se utiliza la herencia de objetivos, es importante examinar cuidadosamente el _script padre_ para asegurarse de
que los datos correctos se están pasando.

#### INHERIT_SCRIPT_TARGET

Cuando se utiliza `INHERIT_SCRIPT_TARGET`, los objetivos del _script padre_ se pasarán al script heredero. Esto tiene un
par de advertencias:

- Al pasar **objetivos de entidad**, es posible ejecutar acciones que requieren ubicaciones (como generar partículas) ya
  que se utilizará la ubicación de las entidades. Por supuesto, también es posible utilizar acciones que requieran
  entidades.

- Al pasar **objetivos de ubicación**, solo es posible utilizar ubicaciones. **La única forma de obtener una entidad a
  partir de una ubicación es creando una zona en esa ubicación y buscando entidades.** Por lo tanto, aunque no es
  imposible pasar una ubicación y luego obtener entidades, requerirá un poco de trabajo extra.

#### Herencia de zonas

Cuando se utiliza `INHERIT_SCRIPT_ZONE_FULL` o `INHERIT_SCRIPT_ZONE_BORDER`, es imprescindible que el _script padre_
defina una zona, o de lo contrario el _script heredero_ no podrá ejecutarse correctamente.

Además, las zonas pueden, opcionalmente,
ser [rastreadas]($language$/elitemobs/elitescript_targets.md&section=zone-track). Esto también se pasará junto con la
zona.

- Una zona **no rastreada** siempre creará una zona donde se defina en el _script heredero_. Esto significa que los
  ajustes de la zona serán utilizados por las acciones en los _scripts herederos_ para crear zonas nuevas cada vez que
  se ejecuta una acción, y la ubicación de esas zonas será definida por la acción.

- Una zona **rastreada** puede pasar la misma ubicación exacta de la zona a todos los _scripts herederos_ si el _script
  padre_ está configurado para apuntar a `ZONE_FULL` o `ZONE_BORDER`. Esto significa que cada script estará actuando
  sobre las mismas ubicaciones.
