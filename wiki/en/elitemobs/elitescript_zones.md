# Elite Script Zones

Zones are locations defined by a shape that can be used as targets by scripters to run any kind of action.

Only one zone can be set per script.

To target zones, the target type `ZONE_FULL` or `ZONE_BORDER` can be used.

Zones themselves also use [Script Targets]($language$/elitemobs/elitescript_targets.md) to define were the zone will appear.

## shape

Sets the shape of the zone. Valid shapes:

| Shape Type                                                               | Details | Animatable | Border |
|--------------------------------------------------------------------------| :-: | :-: | :-: |
| [`CYLINDER`]($language$/elitemobs/elitescript_zones.md&section=cylinder)         | Cylindrical shape | ❌ | ✅ |
| [`SPHERE`]($language$/elitemobs/elitescript_zones.md&section=sphere)             | Spherical shape | ❌ | ✅ |
| [`DOME`]($language$/elitemobs/elitescript_zones.md&section=dome)                 | Dome shape (half sphere) | ❌ | ✅ |
| [`CUBOID`]($language$/elitemobs/elitescript_zones.md&section=cuboid)             | Cuboid shape (cube-like) | ❌ | ✅ |
| [`STATIC_RAY`]($language$/elitemobs/elitescript_zones.md&section=static_ray)     | A fixed line between two points | ❌ | ❌ |
| [`ROTATING_RAY`]($language$/elitemobs/elitescript_zones.md&section=rotating_ray) | A rotating line between two points | ✅ | ❌ |
| [`TRANSLATING_RAY`]($language$/elitemobs/elitescript_zones.md&section=translating_ray) | A line that moves between two initial points to two final points | ✅ | ❌ |

---

#### Animatable

Zones with animations start the zone animation when the script is first called.

This means that if an action has a wait time, when the action starts the zone has already been moving around while the action was waiting.

Zones are always animated on every tick. This means that if you use the `SPAWN_PARTICLES` action, you can set it to run every tick as the zone will be moving every tick. If you run every second, you will see the particles jumping around as the zone kept moving even on ticks where particles were not spawned.

If you want to make a rotating zone action but want to wait for a set amount of ticks before starting the action, make that a different script and call that script through `RUN_SCRIPT`. Make sure the `RUN_SCRIPT` has the wait time you want.

Zones will stay at the final location once they are done animating.

All animatable zones are set to not track on the script targets since the extra movement would make things too hard to understand for scripters and players. This means that these zones will not follow bosses or players around and will always move relative to their initial spawn points.

---

#### Border

Certain zones can have borders. Borders mean that `ZONE_BORDER` can be used as the target of the zone. Borders are defined by creating a second, smaller shape inside the first, larger shape. The area between the smaller zone and the larger zone is the border.

<div align="center">

<details> 

<summary><b>Example</b></summary>

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

This script makes smoke particles that **only** appear in the zone border for 5 seconds (repeat every 5 x times 20 = 100 ticks).

If you did not use the `ZONE_BORDER` option but the `ZONE_FULL` option instead then the entire zone would be covered in smoke particles like this:

<div align="center">

![elitescript_zones_borderfull.jpg](../../../img/wiki/elitescript_zones_borderfull.jpg)

</div>

</div>

</details>

</div>

---

### SPHERE

| Key                                                         | Details | Mandatory |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Sets the shape of the zone. Should be `SPHERE` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Sets the location for the center of the sphere | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Sets which types of entities get targeted | ❌ |
| `radius`                                                    | Radius of the sphere | ✅ |
| `borderRadius`                                              | Radius of the inner sphere | ❌ |

<div align="center">

<details> 

<summary><b>Example</b></summary>

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

This script demonstrates the shape of a sphere using cloud particles.

</div>

</details>

</div>

---

### DOME

| Key                                                         | Details | Mandatory |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Sets the shape of the zone. Should be `DOME` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Sets the location for the center of the dome | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Sets which types of entities get targeted | ❌ |
| `radius`                                                    | Radius of the dome | ✅ |
| `borderRadius`                                              | Radius of the inner dome | ❌ |

<div align="center">

<details> 

<summary><b>Example</b></summary>

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

This script demonstrates the shape of a dome using cloud particles.

</div>

</details>

</div>

---

### CONE

| Key                                                         | Details | Mandatory |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Sets the shape of the zone. Should be `CONE` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Sets the location for the first point of the cone | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)    | Sets the location for the last point of the center of the cone | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Sets which types of entities get targeted | ❌ |
| `radius`                                                    | Radius of the second target of the cone | ✅ |

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: CONE
      radius: 10
      Target:
        targetType: SELF
        offset: 0,0,0
      Target2:
        targetType: SELF
        offset: 0,10,0
    Actions:
      - action: SPAWN_PARTICLE
        particles:
        - particle: CLOUD
        Target:
          targetType: ZONE_FULL
          coverage: 0.8
        repeatEvery: 5
        times: 20
```

<div align="center">

</div>

This script demonstrates the shape of a cylinder using cloud particles. Keep in mind that this zone is a **CONE** shape, meaning it is a 3D volume, important to consider if you're aiming to create sweep effects.

</div>

</details>

</div>

---

### CYLINDER

| Key                                                         | Details | Mandatory |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Sets the shape of the zone. Should be `CYLINDER` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Sets the location for the center of the cylinder | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Sets which types of entities get targeted | ❌ |
| `radius`                                                    | Radius of the cylinder | ✅ |
| `borderRadius`                                              | Radius of the inner cylinder | ❌ |
| `height`                                                    | Height of the cylinder | ❌ |

<div align="center">

<details> 

<summary><b>Example</b></summary>

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

This script demonstrates the shape of a cylinder using cloud particles.

</div>

</details>

</div>

---

### CUBOID

| Key                                                         | Details | Mandatory |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Sets the shape of the zone. Should be `CUBOID` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Sets the location for the center of the cuboid | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Sets which types of entities get targeted | ❌ |
| `x`                                                         | Sets the length of the cuboid | ✅ |
| `y`                                                         | Sets the height of the cuboid | ✅ |
| `z`                                                         | Sets the width of the cuboid, defaults to `x` | ❌ |
| `xBorder`                                                   | Sets the length of the inner cuboid | ❌ |
| `yBorder`                                                   | Sets the height of the inner cuboid | ❌ |
| `zBorder`                                                   | Sets the width of the inner cuboid, defaults to `x` | ❌ |

<div align="center">

<details> 

<summary><b>Example</b></summary>

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

This script demonstrates the shape of a cuboid using cloud particles.

</div>

</details>

</div>

---

### STATIC_RAY

| Key                                                         | Details | Mandatory |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Sets the shape of the zone. Should be `STATIC_RAY` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Sets the location for the first point of the line | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)    | Sets the location for the last point of the line | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Sets which types of entities get targeted | ❌ |
| `ignoresSolidBlocks`                                        | Sets if the ray will pass through solid blocks | ❌ |
| `pointRadius`                                               | Sets the thickness of the ray. Default is 0.5 blocks. | ❌ |

<div align="center">

<details> 

<summary><b>Example</b></summary>

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

This script demonstrates the shape of a static ray using cloud particles. 

We have adjusted the height of the zone by using the `offset` option on both ends of the zone to make the ray appear from the middle of the player and the boss, otherwise the ray would appear at their feet.

</div>

</details>

</div>

---

### ROTATING_RAY

| Key                                                         | Details | Mandatory |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Sets the shape of the zone. Should be `ROTATING_RAY` | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Sets which types of entities get targeted | ❌ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Sets the location for the first point of the line | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)    | Sets the location for the last point of the line | ✅ |
| `animationDuration`                                         | Sets, in ticks, the amount of time for the rotation | ✅ |
| `pitchPreRotation`                                          | Applies an initial rotation to the pitch before the animation | ❌ |
| `yawPreRotation`                                            | Applies an initial rotation to the yaw before the animation | ❌ |
| `pitchRotation`                                             | Sets the pitch rotation for the animation | ❌ |
| `yawRotation`                                               | Sets the yaw rotation for the animation | ❌ |
| `ignoresSolidBlocks`                                        | Sets if the ray will pass through solid blocks | ❌ |
| `pointRadius`                                               | Sets the thickness of the ray. Default is 0.5 blocks. | ❌ |

<div align="center">

<details> 

<summary><b>Example</b></summary>

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

This script shows how a rotating ray looks using cloud particles.

First, it creates a ray from the boss to the player who harmed it, using cloud particles. Then, it adjusts the positions slightly upward by one block using `offset`.

Next, it spins the ray in a full circle around the player who was targeted. This rotation lasts for 5 seconds (100 ticks) to complete, with the targeted player as the center.

</div>

</details>

</div>

---

### TRANSLATING_RAY

| Key                                                          | Details | Mandatory |
|--------------------------------------------------------------| :-: | :-: |
| `shape`                                                      | Sets the shape of the zone. Should be `TRANSLATING_RAY` | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter)  | Sets which types of entities get targeted | ❌ |
| `animationDuration`                                          | Sets, in ticks, the amount of time for the translation | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)      | Sets the location for the first point of the line | ✅ |
| [`finalTarget`]($language$/elitemobs/elitescript_targets.md) | Sets the location of the destination for the first point of the line | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)     | Sets the location for the second point of the line | ✅ |
| [`finalTarget2`]($language$/elitemobs/elitescript_targets.md) | Sets the location of the destination for the second point of the line | ✅ |
| `ignoresSolidBlocks`                                         | Sets if the ray will pass through solid blocks | ❌ |
| `pointRadius`                                                | Sets the thickness of the ray. Default is 0.5 blocks. | ❌ |

<div align="center">

<details> 

<summary><b>Example</b></summary>

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

This script shows how a translating ray looks using cloud particles.

First, it creates a ray from the boss to the player who harmed it, using cloud particles. 

Then, it animates the ray to go upwards 10 blocks from both targets using the `offset` on the `FinalTarget1` and `FinalTarget2`.

The animation takes 5 seconds (100 ticks) to complete.

We can easily make the ray move sideways by adjusting the Z `offset`  to something like `offset: 0,0,10`:

<div align="center">

![elitescript_zones_translatingray2.gif](../../../img/wiki/elitescript_zones_translatingray2.gif)

</div>

This behavior might change depending on where you're facing in the game. 
<br>If we modify the X `offset` in the script shown in the GIF image, the ray would appear to move away from us in a straight line from our perspective.

</div>

</details>

---

## filter

The filter property can be used to only target specific entities inside of the zone. These entities can be:

| Value | Details |
| --- | :-: |
| `PLAYER` | Only targets players in the zone (default) |
| `ELITE` | Only targets elites in the zone |
| `LIVING` | Targets all living entities in the zone |

<div align="center">

<details> 

<summary><b>Example</b></summary>

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

This example script shows how to use the filter to make the zone only target elites.

</div>
