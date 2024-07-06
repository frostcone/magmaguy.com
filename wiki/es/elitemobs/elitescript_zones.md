# Zonas de Elite Script

Las zonas son ubicaciones definidas por una forma que los scripters pueden usar como objetivos para ejecutar cualquier tipo de acción.

Solo se puede configurar una zona por script.

Para apuntar a zonas, se puede utilizar el tipo de objetivo `ZONE_FULL` o `ZONE_BORDER`.

Las propias zonas también utilizan [Objetivos de script]($language$/elitemobs/elitescript_targets.md) para definir dónde aparecerá la zona.

## shape

Establece la forma de la zona. Formas válidas:

| Tipo de forma                                                               | Detalles | Animable | Borde |
|--------------------------------------------------------------------------| :-: | :-: | :-: |
| [`CYLINDER`]($language$/elitemobs/elitescript_zones.md&section=cylinder)         | Forma cilíndrica | ❌ | ✅ |
| [`SPHERE`]($language$/elitemobs/elitescript_zones.md&section=sphere)             | Forma esférica | ❌ | ✅ |
| [`DOME`]($language$/elitemobs/elitescript_zones.md&section=dome)                 | Forma de cúpula (media esfera) | ❌ | ✅ |
| [`CUBOID`]($language$/elitemobs/elitescript_zones.md&section=cuboid)             | Forma cuboide (similar a un cubo) | ❌ | ✅ |
| [`STATIC_RAY`]($language$/elitemobs/elitescript_zones.md&section=static_ray)     | Una línea fija entre dos puntos | ❌ | ❌ |
| [`ROTATING_RAY`]($language$/elitemobs/elitescript_zones.md&section=rotating_ray) | Una línea giratoria entre dos puntos | ✅ | ❌ |
| [`TRANSLATING_RAY`]($language$/elitemobs/elitescript_zones.md&section=translating_ray) | Una línea que se mueve entre dos puntos iniciales a dos puntos finales | ✅ | ❌ |

---

#### Animable

Las zonas con animaciones inician la animación de la zona cuando se llama al script por primera vez.

Esto significa que si una acción tiene un tiempo de espera, cuando la acción comienza, la zona ya se ha estado moviendo mientras la acción estaba esperando.

Las zonas siempre están animadas en cada tick. Esto significa que si usas la acción `SPAWN_PARTICLES`, puedes configurarla para que se ejecute cada tick a medida que la zona se mueve cada tick. Si la ejecutas cada segundo, verás las partículas saltando a medida que la zona se movía incluso en ticks donde no se generaron partículas.

Si quieres realizar una acción de zona giratoria pero quieres esperar una cantidad determinada de ticks antes de iniciar la acción, conviértela en un script diferente y llama a ese script a través de `RUN_SCRIPT`. Asegúrate de que `RUN_SCRIPT` tenga el tiempo de espera que deseas.

Las zonas permanecerán en la ubicación final una vez que terminen de animarse.

Todas las zonas animables están configuradas para no rastrear en los objetivos del script, ya que el movimiento adicional haría que las cosas fueran demasiado difíciles de entender para los scripters y los jugadores. Esto significa que estas zonas no seguirán a los jefes ni a los jugadores y siempre se moverán en relación con sus puntos de generación iniciales.

---

#### Borde

Ciertas zonas pueden tener bordes. Los bordes significan que `ZONE_BORDER` se puede usar como objetivo de la zona. Los bordes se definen creando una segunda forma más pequeña dentro de la primera forma más grande. El área entre la zona más pequeña y la zona más grande es el borde.

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
      - EliteMobDamagedByPlayerEvent
    Zona:
      shape: CYLINDER
      radius: 4
      borderRadius: 3
      height: 8
      Target:
        targetType: SELF
    Acciones:
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

Si no utilizaste la opción `ZONE_BORDER` sino la opción `ZONE_FULL`, entonces toda la zona estaría cubierta de partículas de humo como esta:

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
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Establece la ubicación para el centro de la esfera | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Establece qué tipos de entidades se convierten en objetivos | ❌ |
| `radius`                                                    | Radio de la esfera | ✅ |
| `borderRadius`                                              | Radio de la esfera interior | ❌ |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
      - EliteMobDamagedByPlayerEvent
    Zona:
      shape: SPHERE
      radius: 4
      borderRadius: 3
      Target:
        targetType: SELF
    Acciones:
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

Este script demuestra la forma de una esfera usando partículas de nubes.

</div>

</details>

</div>

---

### DOME

| Clave                                                         | Detalles | Obligatorio |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Establece la forma de la zona. Debe ser `DOME` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Establece la ubicación para el centro de la cúpula | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Establece qué tipos de entidades se convierten en objetivos | ❌ |
| `radius`                                                    | Radio de la cúpula | ✅ |
| `borderRadius`                                              | Radio de la cúpula interior | ❌ |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
      - EliteMobDamagedByPlayerEvent
    Zona:
      shape: DOME
      radius: 4
      borderRadius: 3
      Target:
        targetType: SELF
    Acciones:
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

Este script demuestra la forma de una cúpula usando partículas de nubes.

</div>

</details>

</div>

---

### CYLINDER

| Clave                                                         | Detalles | Obligatorio |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Establece la forma de la zona. Debe ser `CYLINDER` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Establece la ubicación para el centro del cilindro | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Establece qué tipos de entidades se convierten en objetivos | ❌ |
| `radius`                                                    | Radio del cilindro | ✅ |
| `borderRadius`                                              | Radio del cilindro interior | ❌ |
| `height`                                                    | Altura del cilindro | ❌ |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
      - EliteMobDamagedByPlayerEvent
    Zona:
      shape: CYLINDER
      radius: 4
      borderRadius: 3
      height: 8
      Target:
        targetType: SELF
    Acciones:
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

Este script demuestra la forma de un cilindro usando partículas de nubes.

</div>

</details>

</div>

---

### CUBOID

| Clave                                                         | Detalles | Obligatorio |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Establece la forma de la zona. Debe ser `CUBOID` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Establece la ubicación para el centro del cuboide | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Establece qué tipos de entidades se convierten en objetivos | ❌ |
| `x`                                                         | Establece la longitud del cuboide | ✅ |
| `y`                                                         | Establece la altura del cuboide | ✅ |
| `z`                                                         | Establece el ancho del cuboide, el valor predeterminado es `x` | ❌ |
| `xBorder`                                                   | Establece la longitud del cuboide interior | ❌ |
| `yBorder`                                                   | Establece la altura del cuboide interior | ❌ |
| `zBorder`                                                   | Establece el ancho del cuboide interior, el valor predeterminado es `x` | ❌ |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
      - EliteMobDamagedByPlayerEvent
    Zona:
      shape: CUBOID
      x: 4
      y: 4
      z: 4
      xBorder: 3
      yBorder: 3
      zBorder: 3
      Target:
        targetType: SELF
    Acciones:
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

Este script demuestra la forma de un cuboide usando partículas de nubes.

</div>

</details>

</div>

---

### STATIC_RAY

| Clave                                                         | Detalles | Obligatorio |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Establece la forma de la zona. Debe ser `STATIC_RAY` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Establece la ubicación para el primer punto de la línea | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)    | Establece la ubicación para el último punto de la línea | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Establece qué tipos de entidades se convierten en objetivos | ❌ |
| `ignoresSolidBlocks`                                        | Establece si el rayo atravesará bloques sólidos | ❌ |
| `pointRadius`                                               | Establece el grosor del rayo. El valor predeterminado es 0,5 bloques. | ❌ |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
      - EliteMobDamagedByPlayerEvent
    Zona:
      shape: STATIC_RAY
      Target2:
        targetType: DIRECT_TARGET
        offset: 0,1,0
      Target:
        targetType: SELF
        offset: 0,1,0
    Acciones:
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

Este script demuestra la forma de un rayo estático usando partículas de nubes.

Hemos ajustado la altura de la zona usando la opción `offset` en ambos extremos de la zona para que el rayo aparezca desde el medio del jugador y el jefe, de lo contrario, el rayo aparecería a sus pies.

</div>

</details>

</div>

---

### ROTATING_RAY

| Clave                                                         | Detalles | Obligatorio |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Establece la forma de la zona. Debe ser `ROTATING_RAY` | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Establece qué tipos de entidades se convierten en objetivos | ❌ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Establece la ubicación para el primer punto de la línea | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)    | Establece la ubicación para el último punto de la línea | ✅ |
| `animationDuration`                                         | Establece, en ticks, la cantidad de tiempo para la rotación | ✅ |
| `pitchPreRotation`                                          | Aplica una rotación inicial al cabeceo antes de la animación | ❌ |
| `yawPreRotation`                                            | Aplica una rotación inicial a la guiñada antes de la animación | ❌ |
| `pitchRotation`                                             | Establece la rotación de cabeceo para la animación | ❌ |
| `yawRotation`                                               | Establece la rotación de guiñada para la animación | ❌ |
| `ignoresSolidBlocks`                                        | Establece si el rayo atravesará bloques sólidos | ❌ |
| `pointRadius`                                               | Establece el grosor del rayo. El valor predeterminado es 0,5 bloques. | ❌ |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
      - EliteMobDamagedByPlayerEvent
    Zona:
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
    Acciones:
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

Este script muestra cómo se ve un rayo giratorio usando partículas de nubes.

Primero, crea un rayo desde el jefe hasta el jugador que lo dañó, usando partículas de nubes. Luego, ajusta las posiciones ligeramente hacia arriba en un bloque usando `offset`.

A continuación, hace girar el rayo en un círculo completo alrededor del jugador objetivo. Esta rotación tarda 5 segundos (100 ticks) en completarse, con el jugador objetivo como centro.

</div>

</details>

</div>

---

### TRANSLATING_RAY

| Clave                                                          | Detalles | Obligatorio |
|--------------------------------------------------------------| :-: | :-: |
| `shape`                                                      | Establece la forma de la zona. Debe ser `TRANSLATING_RAY` | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter)  | Establece qué tipos de entidades se convierten en objetivos | ❌ |
| `animationDuration`                                          | Establece, en ticks, la cantidad de tiempo para la traslación | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)      | Establece la ubicación para el primer punto de la línea | ✅ |
| [`finalTarget`]($language$/elitemobs/elitescript_targets.md) | Establece la ubicación del destino para el primer punto de la línea | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)     | Establece la ubicación para el segundo punto de la línea | ✅ |
| [`finalTarget2`]($language$/elitemobs/elitescript_targets.md) | Establece la ubicación del destino para el segundo punto de la línea | ✅ |
| `ignoresSolidBlocks`                                         | Establece si el rayo atravesará bloques sólidos | ❌ |
| `pointRadius`                                                | Establece el grosor del rayo. El valor predeterminado es 0,5 bloques. | ❌ |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
      - EliteMobDamagedByPlayerEvent
    Zona:
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
    Acciones:
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

Este script muestra cómo se ve un rayo de traslación usando partículas de nubes.

Primero, crea un rayo desde el jefe hasta el jugador que lo dañó, usando partículas de nubes.

Luego, anima el rayo para que suba 10 bloques desde ambos objetivos usando el `offset` en `FinalTarget1` y `FinalTarget2`.

La animación tarda 5 segundos (100 ticks) en completarse.

Podemos hacer que el rayo se mueva lateralmente fácilmente ajustando el `offset` Z a algo como `offset: 0,0,10`:

<div align="center">

![elitescript_zones_translatingray2.gif](../../../img/wiki/elitescript_zones_translatingray2.gif)

</div>

Este comportamiento puede cambiar dependiendo de hacia dónde estés mirando en el juego.
<br>Si modificamos el `offset` X en el script que se muestra en la imagen GIF, el rayo parecería alejarse de nosotros en línea recta desde nuestra perspectiva.

</div>

</details>

---

## Filter

La propiedad de filtro se puede usar para apuntar solo a entidades específicas dentro de la zona. Estas entidades pueden ser:

| Valor | Detalles |
| --- | :-: |
| `PLAYER` | Solo apunta a jugadores en la zona (predeterminado) |
| `ELITE` | Solo apunta a élites en la zona |
| `LIVING` | Apunta a todas las entidades vivientes en la zona |

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  FilterExample:
    Eventos:
    - PlayerDamagedByEliteMobEvent
    Zona:
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
