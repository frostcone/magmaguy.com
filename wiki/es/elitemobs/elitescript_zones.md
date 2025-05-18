Aquí tienes la traducción al español, manteniendo el formato markdown:

# Zonas de Script de Élite

Las zonas son ubicaciones definidas por una forma que pueden ser usadas como objetivos por los scripters para ejecutar cualquier tipo de acción.

Solo se puede establecer una zona por script.

Para apuntar a zonas, se puede usar el tipo de objetivo `ZONE_FULL` o `ZONE_BORDER`.

Las zonas mismas también usan [Objetivos de Script](es/elitemobs/elitescript_targets.md) para definir dónde aparecerá la zona.

## shape

Establece la forma de la zona. Formas válidas:

| Tipo de Forma                                                               | Detalles | Animable | Borde |
|--------------------------------------------------------------------------| :-: | :-: | :-: |
| [`CYLINDER`](es/elitemobs/elitescript_zones.md&section=cylinder)         | Forma cilíndrica | ❌ | ✅ |
| [`SPHERE`](es/elitemobs/elitescript_zones.md&section=sphere)             | Forma esférica | ❌ | ✅ |
| [`DOME`](es/elitemobs/elitescript_zones.md&section=dome)                 | Forma de cúpula (media esfera) | ❌ | ✅ |
| [`CUBOID`](es/elitemobs/elitescript_zones.md&section=cuboid)             | Forma cuboide (similar a un cubo) | ❌ | ✅ |
| [`STATIC_RAY`](es/elitemobs/elitescript_zones.md&section=static_ray)     | Una línea fija entre dos puntos | ❌ | ❌ |
| [`ROTATING_RAY`](es/elitemobs/elitescript_zones.md&section=rotating_ray) | Una línea que rota entre dos puntos | ✅ | ❌ |
| [`TRANSLATING_RAY`](es/elitemobs/elitescript_zones.md&section=translating_ray) | Una línea que se mueve entre dos puntos iniciales a dos puntos finales | ✅ | ❌ |

---

#### Animable

Las zonas con animaciones inician la animación de la zona cuando el script es llamado por primera vez.

Esto significa que si una acción tiene un tiempo de espera, cuando la acción comienza, la zona ya se ha estado moviendo mientras la acción esperaba.

Las zonas siempre se animan en cada tick. Esto significa que si usas la acción `SPAWN_PARTICLES`, puedes configurarla para que se ejecute en cada tick, ya que la zona se moverá en cada tick. Si la ejecutas cada segundo, verás las partículas saltando, ya que la zona siguió moviéndose incluso en los ticks donde no se generaron partículas.

Si quieres hacer una acción de zona rotatoria pero quieres esperar una cantidad determinada de ticks antes de iniciar la acción, haz que sea un script diferente y llama a ese script a través de `RUN_SCRIPT`. Asegúrate de que el `RUN_SCRIPT` tenga el tiempo de espera que deseas.

Las zonas permanecerán en la ubicación final una vez que terminen de animarse.

Todas las zonas animables están configuradas para no seguir a los objetivos del script, ya que el movimiento adicional haría las cosas demasiado difíciles de entender para los scripters y jugadores. Esto significa que estas zonas no seguirán a los jefes o jugadores y siempre se moverán en relación con sus puntos de aparición iniciales.

---

#### Borde

Ciertas zonas pueden tener bordes. Los bordes significan que `ZONE_BORDER` puede ser usado como objetivo de la zona. Los bordes se definen creando una segunda forma más pequeña dentro de la primera forma más grande. El área entre la zona más pequeña y la zona más grande es el borde.

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

Si no usaste la opción `ZONE_BORDER` sino la opción `ZONE_FULL` en su lugar, entonces toda la zona estaría cubierta de partículas de humo así:

<div align="center">

![elitescript_zones_borderfull.jpg](../../../img/wiki/elitescript_zones_borderfull.jpg)

</div>

</div>

</details>

</div>

---

### SPHERE

| Clave                                                         | Detalles | Obligatorio |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Establece la forma de la zona. Debe ser `SPHERE` | ✅ |
| [`target`](es/elitemobs/elitescript_targets.md)     | Establece la ubicación del centro de la esfera | ✅ |
| [`filter`](es/elitemobs/elitescript_zones.md&section=filter) | Establece qué tipos de entidades son objetivo | ❌ |
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

Este script demuestra la forma de una esfera usando partículas de nube.

</div>

</details>

</div>

---

### DOME

| Clave                                                         | Detalles | Obligatorio |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Establece la forma de la zona. Debe ser `DOME` | ✅ |
| [`target`](es/elitemobs/elitescript_targets.md)     | Establece la ubicación del centro de la cúpula | ✅ |
| [`filter`](es/elitemobs/elitescript_zones.md&section=filter) | Establece qué tipos de entidades son objetivo | ❌ |
| `radius`                                                    | Radio de la cúpula | ✅ |
| `borderRadius`                                              | Radio de la cúpula interior | ❌ |

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

Este script demuestra la forma de una cúpula usando partículas de nube.

</div>

</details>

</div>

---

### CYLINDER

| Clave                                                         | Detalles | Obligatorio |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Establece la forma de la zona. Debe ser `CYLINDER` | ✅ |
| [`target`](es/elitemobs/elitescript_targets.md)     | Establece la ubicación del centro del cilindro | ✅ |
| [`filter`](es/elitemobs/elitescript_zones.md&section=filter) | Establece qué tipos de entidades son objetivo | ❌ |
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

Este script demuestra la forma de un cilindro usando partículas de nube.

</div>

</details>

</div>

---

### CUBOID

| Clave                                                         | Detalles | Obligatorio |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Establece la forma de la zona. Debe ser `CUBOID` | ✅ |
| [`target`](es/elitemobs/elitescript_targets.md)     | Establece la ubicación del centro del cuboide | ✅ |
| [`filter`](es/elitemobs/elitescript_zones.md&section=filter) | Establece qué tipos de entidades son objetivo | ❌ |
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

Este script demuestra la forma de un cuboide usando partículas de nube.

</div>

</details>

</div>

---

### STATIC_RAY

| Clave                                                         | Detalles | Obligatorio |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Establece la forma de la zona. Debe ser `STATIC_RAY` | ✅ |
| [`target`](es/elitemobs/elitescript_targets.md)     | Establece la ubicación del primer punto de la línea | ✅ |
| [`target2`](es/elitemobs/elitescript_targets.md)    | Establece la ubicación del último punto de la línea | ✅ |
| [`filter`](es/elitemobs/elitescript_zones.md&section=filter) | Establece qué tipos de entidades son objetivo | ❌ |
| `ignoresSolidBlocks`                                        | Establece si el rayo pasará a través de bloques sólidos | ❌ |
| `pointRadius`                                               | Establece el grosor del rayo. Por defecto es 0.5 bloques. | ❌ |

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

Este script demuestra la forma de un rayo estático usando partículas de nube.

Hemos ajustado la altura de la zona usando la opción `offset` en ambos extremos de la zona para hacer que el rayo aparezca desde el medio del jugador y el jefe, de lo contrario el rayo aparecería a sus pies.

</div>

</details>

</div>

---

### ROTATING_RAY

| Clave                                                         | Detalles | Obligatorio |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Establece la forma de la zona. Debe ser `ROTATING_RAY` | ✅ |
| [`filter`](es/elitemobs/elitescript_zones.md&section=filter) | Establece qué tipos de entidades son objetivo | ❌ |
| [`target`](es/elitemobs/elitescript_targets.md)     | Establece la ubicación del primer punto de la línea | ✅ |
| [`target2`](es/elitemobs/elitescript_targets.md)    | Establece la ubicación del último punto de la línea | ✅ |
| `animationDuration`                                         | Establece, en ticks, la cantidad de tiempo para la rotación | ✅ |
| `pitchPreRotation`                                          | Aplica una rotación inicial al pitch antes de la animación | ❌ |
| `yawPreRotation`                                            | Aplica una rotación inicial al yaw antes de la animación | ❌ |
| `pitchRotation`                                             | Establece la rotación del pitch para la animación | ❌ |
| `yawRotation`                                               | Establece la rotación del yaw para la animación | ❌ |
| `ignoresSolidBlocks`                                        | Establece si el rayo pasará a través de bloques sólidos | ❌ |
| `pointRadius`                                               | Establece el grosor del rayo. Por defecto es 0.5 bloques. | ❌ |

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

Este script muestra cómo se ve un rayo rotatorio usando partículas de nube.

Primero, crea un rayo desde el jefe hasta el jugador que lo dañó, usando partículas de nube. Luego, ajusta las posiciones ligeramente hacia arriba en un bloque usando `offset`.

A continuación, hace girar el rayo en un círculo completo alrededor del jugador que fue objetivo. Esta rotación dura 5 segundos (100 ticks) en completarse, con el jugador objetivo como centro.

</div>

</details>

</div>

---

### TRANSLATING_RAY

| Clave                                                          | Detalles | Obligatorio |
|--------------------------------------------------------------| :-: | :-: |
| `shape`                                                      | Establece la forma de la zona. Debe ser `TRANSLATING_RAY` | ✅ |
| [`filter`](es/elitemobs/elitescript_zones.md&section=filter)  | Establece qué tipos de entidades son objetivo | ❌ |
| `animationDuration`                                          | Establece, en ticks, la cantidad de tiempo para la traslación | ✅ |
| [`target`](es/elitemobs/elitescript_targets.md)      | Establece la ubicación del primer punto de la línea | ✅ |
| [`finalTarget`](es/elitemobs/elitescript_targets.md) | Establece la ubicación del destino para el primer punto de la línea | ✅ |
| [`target2`](es/elitemobs/elitescript_targets.md)     | Establece la ubicación del segundo punto de la línea | ✅ |
| [`finalTarget2`](es/elitemobs/elitescript_targets.md) | Establece la ubicación del destino para el segundo punto de la línea | ✅ |
| `ignoresSolidBlocks`                                         | Establece si el rayo pasará a través de bloques sólidos | ❌ |
| `pointRadius`                                                | Establece el grosor del rayo. Por defecto es 0.5 bloques. | ❌ |

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

Este script muestra cómo se ve un rayo traslacional usando partículas de nube.

Primero, crea un rayo desde el jefe hasta el jugador que lo dañó, usando partículas de nube.

Luego, anima el rayo para que suba 10 bloques desde ambos objetivos usando el `offset` en `FinalTarget` y `FinalTarget2`.

La animación tarda 5 segundos (100 ticks) en completarse.

Podemos hacer que el rayo se mueva lateralmente fácilmente ajustando el `offset` Z a algo como `offset: 0,0,10`:

<div align="center">

![elitescript_zones_translatingray2.gif](../../../img/wiki/elitescript_zones_translatingray2.gif)

</div>

Este comportamiento puede cambiar dependiendo de hacia dónde estés mirando en el juego.
<br>Si modificamos el `offset` X en el script mostrado en la imagen GIF, el rayo parecería alejarse de nosotros en línea recta desde nuestra perspectiva.

</div>

</details>

---

## filter

La propiedad filter puede usarse para apuntar solo a entidades específicas dentro de la zona. Estas entidades pueden ser:

| Valor | Detalles |
| --- | :-: |
| `PLAYER` | Solo apunta a jugadores en la zona (por defecto) |
| `ELITE` | Solo apunta a élites en la zona |
| `LIVING` | Apunta a todas las entidades vivas en la zona |

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

Este script de ejemplo muestra cómo usar el filtro para hacer que la zona solo apunte a élites.

</div>

</details>

</div>