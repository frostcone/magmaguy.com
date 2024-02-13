# Elite Script Zones

Zones are locations defined by a shape that can be used as targets by scripters to run any kind of action.

Only one zone can be set per script.

To target zones, the target type `ZONE_FULL` or `ZONE_BORDER` can be used.

Zones themselves also use [Script Targets]($language$/elitemobs/elitescript_targets.md) to define were the zone will appear.

## shape

Sets the shape of the zone. Valid shapes:

| Shape Type                                                                     | Details | Animatable | Border |
|--------------------------------------------------------------------------------| :-: | :-: | :-: |
| [`CYLINDER`]($language$/elitemobs/elitescript_zones.md%cylinder)               | Cylindrical shape | ❌ | ✅ |
| [`SPHERE`]($language$/elitemobs/elitescript_zones.md%sphere)                   | Spherical shape | ❌ | ✅ |
| [`DOME`]($language$/elitemobs/elitescript_zones.md%dome)                       | Dome shape (half sphere) | ❌ | ✅ |
| [`CUBOID`]($language$/elitemobs/elitescript_zones.md%cuboid)                   | Cuboid shape (cube-like) | ❌ | ✅ |
| [`STATIC_RAY`]($language$/elitemobs/elitescript_zones.md%static_ray)           | A fixed line between two points | ❌ | ❌ |
| [`ROTATING_RAY`]($language$/elitemobs/elitescript_zones.md%rotating_ray)       | A rotating line between two points | ✅ | ❌ |
| [`TRANSLATING_RAY`]($language$/elitemobs/elitescript_zones.md%translating_ray) | A line that moves between two initial points to two final points | ✅ | ❌ |

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

---

### SPHERE

| Key                                                          | Details | Mandatory |
|--------------------------------------------------------------| :-: | :-: |
| `shape`                                                      | Sets the shape of the zone. Should be `SPHERE` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)      | Sets the location for the center of the sphere | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md%filter) | Sets which types of entities get targeted | ❌ |
| `radius`                                                     | Radius of the sphere | ✅ |
| `borderRadius`                                               | Radius of the inner sphere | ❌ |

---

### DOME

| Key                                                          | Details | Mandatory |
|--------------------------------------------------------------| :-: | :-: |
| `shape`                                                      | Sets the shape of the zone. Should be `DOME` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)      | Sets the location for the center of the dome | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md%filter) | Sets which types of entities get targeted | ❌ |
| `radius`                                                     | Radius of the dome | ✅ |
| `borderRadius`                                               | Radius of the inner dome | ❌ |

---

### CYLINDER

| Key                                                          | Details | Mandatory |
|--------------------------------------------------------------| :-: | :-: |
| `shape`                                                      | Sets the shape of the zone. Should be `CYLINDER` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)      | Sets the location for the center of the cylinder | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md%filter) | Sets which types of entities get targeted | ❌ |
| `radius`                                                     | Radius of the cylinder | ✅ |
| `borderRadius`                                               | Radius of the inner cylinder | ❌ |
| `height`                                                     | Height of the cylinder | ❌ |

---

### CUBOID

| Key                                                          | Details | Mandatory |
|--------------------------------------------------------------| :-: | :-: |
| `shape`                                                      | Sets the shape of the zone. Should be `CUBOID` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)      | Sets the location for the center of the cuboid | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md%filter) | Sets which types of entities get targeted | ❌ |
| `x`                                                          | Sets the length of the cuboid | ✅ |
| `y`                                                          | Sets the height of the cuboid | ✅ |
| `z`                                                          | Sets the width of the cuboid, defaults to `x` | ❌ |
| `xBorder`                                                    | Sets the length of the inner cuboid | ❌ |
| `yBorder`                                                    | Sets the height of the inner cuboid | ❌ |
| `zBorder`                                                    | Sets the width of the inner cuboid, defaults to `x` | ❌ |

---

### STATIC_RAY

| Key                                                          | Details | Mandatory |
|--------------------------------------------------------------| :-: | :-: |
| `shape`                                                      | Sets the shape of the zone. Should be `STATIC_RAY` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)      | Sets the location for the first point of the line | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)     | Sets the location for the last point of the line | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md%filter) | Sets which types of entities get targeted | ❌ |
| `ignoresSolidBlocks`                                         | Sets if the ray will pass through solid blocks | ❌ |
| `pointRadius`                                                | Sets the thickness of the ray. Default is 0.5 blocks. | ❌ |

---

### ROTATING_RAY

| Key                                                          | Details | Mandatory |
|--------------------------------------------------------------| :-: | :-: |
| `shape`                                                      | Sets the shape of the zone. Should be `ROTATING_RAY` | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md%filter) | Sets which types of entities get targeted | ❌ |
| [`target`]($language$/elitemobs/elitescript_targets.md)      | Sets the location for the first point of the line | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)     | Sets the location for the last point of the line | ✅ |
| `animationDuration`                                          | Sets, in ticks, the amount of time for the rotation | ✅ |
| `pitchPreRotation`                                           | Applies an initial rotation to the pitch before the animation | ❌ |
| `yawPreRotation`                                             | Applies an initial rotation to the yaw before the animation | ❌ |
| `pitchRotation`                                              | Sets the pitch rotation for the animation | ❌ |
| `yawRotation`                                                | Sets the yaw rotation for the animation | ❌ |
| `ignoresSolidBlocks`                                         | Sets if the ray will pass through solid blocks | ❌ |
| `pointRadius`                                                | Sets the thickness of the ray. Default is 0.5 blocks. | ❌ |

---

### TRANSLATING_RAY

| Key                                                           | Details | Mandatory |
|---------------------------------------------------------------| :-: | :-: |
| `shape`                                                       | Sets the shape of the zone. Should be `TRANSLATING_RAY` | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md%filter)  | Sets which types of entities get targeted | ❌ |
| `animationDuration`                                           | Sets, in ticks, the amount of time for the translation | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)       | Sets the location for the first point of the line | ✅ |
| [`finalTarget`]($language$/elitemobs/elitescript_targets.md)  | Sets the location of the destination for the first point of the line | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)      | Sets the location for the second point of the line | ✅ |
| [`finalTarget2`]($language$/elitemobs/elitescript_targets.md) | Sets the location of the destination for the second point of the line | ✅ |
| `ignoresSolidBlocks`                                          | Sets if the ray will pass through solid blocks | ❌ |
| `pointRadius`                                                 | Sets the thickness of the ray. Default is 0.5 blocks. | ❌ |

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  TranslatingRay:
    Events:
    - EliteMobDamagedEvent
    Zone:
      Shape: TRANSLATING_RAY
      animationDuration: 160
      Target:
        targetType: SELF_SPAWN
        offset: 24,1,24
      Target2:
        targetType: SELF_SPAWN
        offset: -24,1,24
      FinalTarget:
        targetType: SELF_SPAWN
        offset: 24,1,-24
      FinalTarget2:
        targetType: SELF_SPAWN
        offset: -24,1,-24
    Actions:
    - action: SPAWN_PARTICLE
      repeatEvery: 2
      times: 80
      Target: 
        targetType: ZONE_FULL
        track: false
      particles:
      - particle: REDSTONE
        amount: 0
        x: 0
        y: 0
        z: 1
        speed: 0.1
```

</div>

</details>

</div>

---

## filter

The filter property can be used to only target specific entities inside of the zone. These entities can be:

| Value | Details |
| --- | :-: |
| `PLAYER` | Only targets players in the zone (default) |
| `ELITE` | Only targets elites in the zone |
| `LIVING` | Targets all living entities in the zone |