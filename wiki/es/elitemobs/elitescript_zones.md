# Zonas del Script Elite

Las zonas son lugares definidos por una forma que pueden ser utilizados como objetivos por los scripters para ejecutar cualquier tipo de acción.

Solo se puede establecer una zona por script.

Para dirigirse a las zonas, se puede utilizar el tipo de objetivo `ZONE_FULL` o `ZONE_BORDER`.

Las propias zonas también utilizan [Objetivos del Script]($language$/elitemobs/elitescript_targets.md) para definir dónde aparecerá la zona.

## shape

Establece la forma de la zona. Formas válidas:

| Tipo de Forma                                                         | Detalles | Animable | Borde |
|----------------------------------------------------------------------| :-: | :-: | :-: |
| [`CYLINDER`]($language$/elitemobs/elitescript_zones.md&section=cylinder) | Forma cilíndrica | ❌ | ✅ |
| [`SPHERE`]($language$/elitemobs/elitescript_zones.md&section=sphere)     | Forma esférica | ❌ | ✅ |
| [`DOME`]($language$/elitemobs/elitescript_zones.md&section=dome)         | Forma de domo (media esfera) | ❌ | ✅ |
| [`CUBOID`]($language$/elitemobs/elitescript_zones.md&section=cuboid)     | Forma de cuboide (parecido a un cubo) | ❌ | ✅ |
| [`STATIC_RAY`]($language$/elitemobs/elitescript_zones.md&section=static_ray)     | Una línea fija entre dos puntos | ❌ | ❌ |
| [`ROTATING_RAY`]($language$/elitemobs/elitescript_zones.md&section=rotating_ray) | Una línea rotativa entre dos puntos | ✅ | ❌ |
| [`TRANSLATING_RAY`]($language$/elitemobs/elitescript_zones.md&section=translating_ray) | Una línea que se mueve entre dos puntos iniciales hasta dos puntos finales | ✅ | ❌ |

---

#### Animatable

Las zonas con animaciones inician la animación de la zona cuando el script se llama por primera vez.

Esto significa que si una acción tiene un tiempo de espera, cuando la acción comienza, la zona ya ha estado moviéndose mientras la acción estaba esperando.

Las zonas siempre se animan en cada tick. Esto significa que si utilizas la acción `SPAWN_PARTICLES`, puedes configurarlo para que se ejecute en cada tick ya que la zona se moverá en cada tick. Si se ejecuta cada segundo, verás las partículas saltando ya que la zona continúa moviéndose incluso en ticks donde las partículas no se generaron.

Si quieres hacer una acción de zona rotativa pero quieres esperar una cantidad determinada de ticks antes de iniciar la acción, hazlo un script diferente y llama a ese script a través de `RUN_SCRIPT`. Asegúrate de que el `RUN_SCRIPT` tenga el tiempo de espera que deseas.

Las zonas permanecerán en la ubicación final una vez que hayan terminado de animar.

Todas las zonas animables se establecen para no rastrear en los objetivos del script, ya que el movimiento extra haría que las cosas sean demasiado difíciles de entender para los scripters y los jugadores. Esto significa que estas zonas no seguirán a los jefes o jugadores y siempre se moverán en relación con sus puntos de generación iniciales.

---

#### Border

Algunas zonas pueden tener bordes. Los bordes significan que `ZONE_BORDER` se puede utilizar como el objetivo de la zona. Los bordes se definen creando una segunda forma más pequeña dentro de la primera forma más grande. El área entre la zona más pequeña y la zona más grande es el borde.

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
      - EliteMobDamagedByPlayerEvent
    Zone:
      shape: CYLINDER
      radius: 4
      borderRadius: 3
      height: 8
      Target:
        targetType: SELF
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: SMOKE_LARGE
        Target:
          targetType: ZONE_BORDER
        repeatEvery: 5
        times: 20
```

<div align="center">

![elitescript_zones_border.jpg](../../../img/wiki/elitescript_zones_border.jpg)

</div>

Este script crea partículas de humo que **solo** aparecen en el borde de la zona durante 5 segundos (repetir cada 5 x veces 20 = 100 ticks).

Si no usaste la opción `ZONE_BORDER` sino la opción `ZONE_FULL`, entonces toda la zona estaría cubierta de partículas de humo de esta manera:

<div align="center">

![elitescript_zones_borderfull.jpg](../../../img/wiki/elitescript_zones_borderfull.jpg)

</div>

</div>

</details>

</div>

---

### SPHERE

| Llave                                                        | Detalles | Obligatorio |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Establece la forma de la zona. Debe ser `SPHERE` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Establece la ubicación para el centro de la esfera | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Establece qué tipos de entidades se selecciona | ❌ |
| `radius`                                                    | Radio de la esfera | ✅ |
| `borderRadius`                                              | Radio de la esfera interior | ❌ |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
      - EliteMobDamagedByPlayerEvent
    Zone:
      shape: SPHERE
      radius: 4
      borderRadius: 3
      Target:
        targetType: SELF
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 5
        times: 20
```

<div align="center">

![elitescript_zones_sphere.jpg](../../../img/wiki/elitescript_zones_sphere.jpg)

</div>

Este guion muestra la forma de una esfera usando partículas de nube.

</div>

</details>

</div>

---

### DOME

| Llave                                                        | Detalles | Obligatorio |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Establece la forma de la zona. Debe ser `DOME` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Establece la ubicación para el centro del domo | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Establece qué tipos de entidades se selecciona | ❌ |
| `radius`                                                    | Radio del domo | ✅ |
| `borderRadius`                                              | Radio del domo interior | ❌ |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
      - EliteMobDamagedByPlayerEvent
    Zone:
      shape: DOME
      radius: 4
      borderRadius: 3
      Target:
        targetType: SELF
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 5
        times: 20
```

<div align="center">

![elitescript_zones_dome.jpg](../../../img/wiki/elitescript_zones_dome.jpg)

</div>

Este guion muestra la forma de un domo usando partículas de nube.

</div>

</details>

</div>

---

### CYLINDER

| Llave                                                        | Detalles | Obligatorio |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Establece la forma de la zona. Debe ser `CYLINDER` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Establece la ubicación para el centro del cilindro | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Establece qué tipos de entidades se selecciona | ❌ |
| `radius`                                                    | Radio del cilindro | ✅ |
| `borderRadius`                                              | Radio del cilindro interior | ❌ |
| `height`                                                    | Altura del cilindro | ❌ |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
      - EliteMobDamagedByPlayerEvent
    Zone:
      shape: CYLINDER
      radius: 4
      borderRadius: 3
      height: 8
      Target:
        targetType: SELF
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 5
        times: 20
```

<div align="center">

![elitescript_zones_cylinder.jpg](../../../img/wiki/elitescript_zones_cylinder.jpg)

</div>

Este guion muestra la forma de un cilindro usando partículas de nube.

</div>

</details>

</div>

---

### CUBOID

| Llave                                                        | Detalles | Obligatorio |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Establece la forma de la zona. Debe ser `CUBOID` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Establece la ubicación para el centro del cuboide | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Establece qué tipos de entidades se selecciona | ❌ |
| `x`                                                         | Establece la longitud del cuboide | ✅ |
| `y`                                                         | Establece la altura del cuboide | ✅ |
| `z`                                                         | Establece la anchura del cuboide, por defecto es `x` | ❌ |
| `xBorder`                                                   | Establece la longitud del cuboide interior | ❌ |
| `yBorder`                                                   | Establece la altura del cuboide interior | ❌ |
| `zBorder`                                                   | Establece la anchura del cuboide interior, por defecto es `x` | ❌ |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
      - EliteMobDamagedByPlayerEvent
    Zone:
      shape: CUBOID
      x: 4
      y: 4
      z: 4
      xBorder: 3
      yBorder: 3
      zBorder: 3
      Target:
        targetType: SELF
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 5
        times: 20
```

<div align="center">

![elitescript_zones_cuboid.jpg](../../../img/wiki/elitescript_zones_cuboid.jpg)

</div>

Este guion muestra la forma de un cuboide usando partículas de nube.

</div>

</details>

</div>

---

### STATIC_RAY

| Llave                                                        | Detalles | Obligatorio |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Establece la forma de la zona. Debe ser `STATIC_RAY` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Establece la ubicación para el primer punto de la línea | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)    | Establece la ubicación para el último punto de la línea | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Establece qué tipos de entidades se selecciona | ❌ |
| `ignoresSolidBlocks`                                        | Establece si el rayo pasará a través de bloques sólidos | ❌ |
| `pointRadius`                                               | Establece el grosor del rayo. Por defecto es de 0.5 bloques. | ❌ |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
      - EliteMobDamagedByPlayerEvent
    Zone:
      shape: STATIC_RAY
      Target2:
        targetType: DIRECT_TARGET
        offset: 0,1,0
      Target:
        targetType: SELF
        offset: 0,1,0
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 5
        times: 20
```

<div align="center">

![elitescript_zones_staticray.jpg](../../../img/wiki/elitescript_zones_staticray.jpg)


</div>

Este script demuestra la forma de un rayo estático utilizando partículas de nube.

Hemos ajustado la altura de la zona utilizando la opción `offset` en ambos extremos de la zona para hacer que el rayo aparezca desde el medio del jugador y el jefe, de lo contrario, el rayo aparecería a sus pies.

</div>

</details>

</div>

---

### ROTATING_RAY

| Clave                                                         | Detalles | Obligatorio |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Establece la forma de la zona. Debería ser `ROTATING_RAY` | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Establece qué tipos de entidades son las objetivas | ❌ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Establece la ubicación del primer punto de la línea | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)    | Establece la ubicación del último punto de la línea | ✅ |
| `animationDuration`                                         | Establece, en ticks, la duración de la rotación | ✅ |
| `pitchPreRotation`                                          | Aplica una rotación inicial al tono antes de la animación | ❌ |
| `yawPreRotation`                                            | Aplica una rotación inicial al cabeceo antes de la animación | ❌ |
| `pitchRotation`                                             | Establece la rotación del tono para la animación | ❌ |
| `yawRotation`                                               | Establece la rotación del cabeceo para la animación | ❌ |
| `ignoresSolidBlocks`                                        | Establece si el rayo atravesará bloques sólidos | ❌ |
| `pointRadius`                                               | Establece el grosor del rayo. El valor predeterminado es de 0,5 bloques. | ❌ |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
      - EliteMobDamagedByPlayerEvent
    Zone:
      shape: ROTATING_RAY
      animationDuration: 100
      pitchPrerotation: 0
      yawPrerotation: 0
      pitchRotation: 0
      yawRotation: 360
      ignoresSolidBlocks: true
      Target:
        targetType: SELF
        offset: 0,1,0
      Target2:
        targetType: DIRECT_TARGET
        offset: 0,1,0
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 1
        times: 100
```

<div align="center">

![elitescript_zones_rotatingray.gif](../../../img/wiki/elitescript_zones_rotatingray.gif)

</div>

Este script muestra cómo se ve un rayo rotativo usando partículas de nube.

Primero, crea un rayo desde el jefe hasta el jugador que lo dañó, utilizando partículas de nube. Luego, ajusta las posiciones ligeramente hacia arriba en un bloque usando `offset`.

Después, hace girar el rayo en un círculo completo alrededor del jugador que fue el objetivo. Esta rotación dura 5 segundos (100 ticks) para completar, con el jugador objetivo como el centro.

</div>

</details>

</div>

---

### TRANSLATING_RAY

| Clave                                                          | Detalles | Obligatorio |
|--------------------------------------------------------------| :-: | :-: |
| `shape`                                                      | Establece la forma de la zona. Debería ser `TRANSLATING_RAY` | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter)  | Establece qué tipos de entidades son las objetivas | ❌ |
| `animationDuration`                                          | Establece, en ticks, la duración de la traducción | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)      | Establece la ubicación del primer punto de la línea | ✅ |
| [`finalTarget`]($language$/elitemobs/elitescript_targets.md) | Establece la ubicación del destino del primer punto de la línea | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)     | Establece la ubicación del segundo punto de la línea | ✅ |
| [`finalTarget2`]($language$/elitemobs/elitescript_targets.md) | Establece la ubicación del destino del segundo punto de la línea | ✅ |
| `ignoresSolidBlocks`                                         | Establece si el rayo atravesará bloques sólidos | ❌ |
| `pointRadius`                                                | Establece el grosor del rayo. El valor predeterminado es de 0,5 bloques. | ❌ |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
      - EliteMobDamagedByPlayerEvent
    Zone:
      shape: TRANSLATING_RAY
      Target:
        targetType: SELF
      FinalTarget:
        targetType: SELF
        offset: 0,10,0
      Target2:
        targetType: DIRECT_TARGET
      FinalTarget2:
        targetType: DIRECT_TARGET
        offset: 0,10,0
      animationDuration: 100
      ignoresSolidBlocks: true
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 1
        times: 100
```

<div align="center">

![elitescript_zones_translatingray.gif](../../../img/wiki/elitescript_zones_translatingray.gif)

</div>

Este script muestra cómo se ve un rayo traduciendo el uso de partículas de nube.

Primero, crea un rayo desde el jefe al jugador que lo dañó, utilizando partículas de nube.

Luego, anima el rayo para subir 10 bloques desde ambos objetivos utilizando el `offset` en el `FinalTarget1` y el `FinalTarget2`.

La animación tarda 5 segundos (100 ticks) en completarse.

Podemos hacer que el rayo se mueva fácilmente de lado a lado ajustando el `offset` Z a algo como `offset: 0,0,10`:

<div align="center">

![elitescript_zones_translatingray2.gif](../../../img/wiki/elitescript_zones_translatingray2.gif)

</div>

Este comportamiento puede cambiar dependiendo de hacia dónde estés mirando en el juego.
<br>Si modificamos el `offset` X en el script mostrado en la imagen GIF, el rayo parecería moverse lejos de nosotros en una línea recta desde nuestra perspectiva.

</div>

</details>

---

## filtro
La propiedad filtro se puede usar para dirigirse solo a entidades específicas dentro de la zona. Estas entidades pueden ser:

| Valor | Detalles |
| --- | :-: |
| `PLAYER` | Solo se enfoca en los jugadores en la zona (predeterminado) |
| `ELITE` | Solo se enfoca en las élites en la zona |
| `LIVING` | Dirige a todas las entidades vivas en la zona |
<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  FilterExample:
    Events:
    - PlayerDamagedByEliteMobEvent
    Zone:
      shape: SPHERE
      radius: 12
      borderRadius: 11
      filter: ELITE
      Target:
        targetType: SELF
        track: false
```

Este ejemplo de script muestra cómo usar el filtro para hacer que la zona se dirija solo a las élites.

</div>