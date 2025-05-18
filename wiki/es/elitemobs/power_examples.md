Aquí tienes la traducción al español, manteniendo el formato markdown:

# Introducción

En esta página, descubrirás varios ejemplos de poderes de jefe personalizados creados con EliteScript y la [WebApp](https://magmaguy.com/webapp/webapp.html). Estos ejemplos sencillos ilustran cómo utilizar múltiples acciones y otras características para crear poderes de jefe únicos.

Además, cada ejemplo viene acompañado de demostraciones visuales, para que sea más fácil entender cómo funciona el script dentro del juego.

Siéntete libre de copiar cualquiera de los ejemplos y utilizarlos en tus propias mazmorras o mundos.

## Ejemplos de Poderes

### Golpe Fuerte

Este script hará que el jefe se teletransporte 8 bloques por encima del jugador que le infligió daño, y luego se estrelle contra el suelo. Después, aplicará el efecto de poción de lentitud a cualquier jugador dentro de los 3 bloques del jefe, y mostrará el mensaje 'Aturdido' en pantalla durante 3 segundos.

<div align="center">

<details>

<summary><b>Expandir Ejemplo</b></summary>

<div align="left">

```yml
eliteScript:
  SlamDown:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: TELEPORT
      FinalTarget:
        targetType: DIRECT_TARGET
        offset: 0,8,0
      Target:
        targetType: SELF
    - action: PUSH
      vValue: 0,-5,0
      Target:
        targetType: SELF
      wait: 15
    - action: POTION_EFFECT
      potionEffectType: SLOW
      amplifier: 3
      duration: 60
      Target:
        targetType: NEARBY_PLAYERS
        range: 3
      wait: 20
    - action: TITLE_MESSAGE
      subtitle: "Stunned!"
      duration: 40
      fadeIn: 10
      fadeOut: 10
      Target:
        targetType: NEARBY_PLAYERS
        range: 3
      wait: 20
    Cooldowns:
      local: 180
      global: 80
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_slamdown.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</div>

</div>

</details>

</div>

***

### Empujar Lejos

Este script generará una cúpula de 4 bloques alrededor del jefe. Posteriormente, iniciará un efecto de partículas en el borde de la zona, que durará un segundo, y luego otra acción empujará a cualquier jugador dentro de la zona. Debido a la configuración de desplazamiento para el empuje, los jugadores serán ligeramente impulsados hacia arriba. Finalmente, el script enviará un mensaje a cualquier jugador dentro de la zona.

<div align="center">

<details>

<summary><b>Expandir Ejemplo</b></summary>

<div align="left">

```yml
eliteScript:
  PushAway:
    Events:
    - EliteMobDamagedEvent
    Zone:
      shape: DOME
      radius: 4
      borderRadius: 3
      Target:
        targetType: SELF
        track: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: CLOUD
      Target:
        targetType: ZONE_BORDER
        track: true
      repeatEvery: 5
      times: 4
    - action: PUSH
      Target:
        targetType: ZONE_FULL
        track: true
      RelativeVector:
        SourceTarget:
          targetType: SELF
        DestinationTarget:
          targetType: ACTION_TARGET
        normalize: true
        multiplier: 1.0
        offset: 0,0.2,0
      repeatEvery: 1
      times: 20
    - action: MESSAGE
      sValue: "&cCool boss!: &fBE GONE!"
      Target:
        targetType: ZONE_FULL
      repeatEvery: 10
      times: 2
    Cooldowns:
      local: 140
      global: 80
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_pushaway.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</div>

</div>

</details>

</div>

***

### Lluvia de Flechas

Crea un script que dibujará un círculo en el suelo alrededor del jugador que dañó al mob, también muestra un mensaje en pantalla diciéndole al jugador que se salga del círculo. Luego, 2 segundos después, disparará flechas hacia abajo en esa misma ubicación, pero desde 10 bloques de altura.

<div align="center">

<details>

<summary><b>Expandir Ejemplo</b></summary>

<div align="left">

```yml
eliteScript:
  MakeCircle:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: CYLINDER
      radius: 5
      borderRadius: 4
      height: 1
      Target:
        targetType: DIRECT_TARGET
        track: false
    Actions:
    - action: SPAWN_PARTICLE
      Target:
        targetType: ZONE_BORDER
        track: false
        coverage: 1.0
      repeatEvery: 5
      times: 8
      particles:
      - particle: FLAME
    - action: TITLE_MESSAGE
      Target:
        targetType: DIRECT_TARGET
      fadeOut: 10
      duration: 20
      fadeIn: 10
      subtitle: Move out of the zone!
    - action: RUN_SCRIPT
      scripts:
      - "ArrowRain"
    Cooldowns:
      local: 160
      global: 80
  ArrowRain:
    Zone:
      shape: CYLINDER
      radius: 5
      borderRadius: 4
      height: 1
      Target:
        targetType: DIRECT_TARGET
        track: false
        offset: 0,10,0
    Actions:
    - action: SUMMON_ENTITY
      wait: 40
      sValue: ARROW
      Target:
        targetType: ZONE_FULL
        track: false
      vValue: 0,-1,0
      repeatEvery: 10
      times: 4
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_arrowrain.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</div>

</div>

</details>

</div>

***

### Aura de Fuego

Esto creará un script que generará partículas alrededor del jefe usando la zona de cilindro, durará 6 segundos. Al jefe también se le dará la etiqueta `FireOn` durante 6 segundos.

Si los jugadores atacan al jefe mientras la etiqueta está activa, entonces los jugadores se prenderán fuego durante 1 segundo. Esto se hace usando condiciones, el script `SetOnFire` solo podrá ejecutarse si el jefe tiene la etiqueta `FireOn` correspondiente.

<div align="center">

<details>

<summary><b>Expandir Ejemplo</b></summary>

<div align="left">

```yml
eliteScript:
  Visual:
    Events:
    - PlayerDamagedByEliteMobEvent
    Zone:
      shape: CYLINDER
      radius: 2
      height: 3
      Target:
        targetType: SELF
        track: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: FLAME
      Target:
        targetType: ZONE_FULL
        track: true
        coverage: 1.0
      repeatEvery: 5
      times: 24
    - action: TAG
      tags:
      - "FireOn"
      duration: 120
      Target:
        targetType: SELF
    Cooldowns:
      local: 180
      global: 80
  SetOnFire:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_ON_FIRE
      duration: 20
      Target:
        targetType: DIRECT_TARGET
      Conditions:
        Target:
          targetType: SELF
        conditionType: BLOCKING
        hasTags:
        - "FireOn"
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_fireaura.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</div>

</div>

</details>

</div>

***

### Líneas de Veneno

Este script creará dos zonas cuboides centradas en el jefe. La IA del jefe se desactivará durante 2 segundos. Las zonas cuboides están configuradas de tal manera que formarán un símbolo de más en el suelo.

Luego, el script creará partículas de nube durante 2 segundos en las zonas y luego creará partículas de humo y aplicará el efecto de poción de veneno a las zonas durante 3 segundos.

<div align="center">

<details>

<summary><b>Expandir Ejemplo</b></summary>

<div align="left">

```yml
eliteScript:
  PoisonLine1:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: CUBOID
      x: 20
      y: 1
      z: 2
      Target:
        targetType: SELF
        track: false
    Actions:
    - action: SET_MOB_AI
      bValue: false
      duration: 40
      Target:
        targetType: SELF
      scripts:
      - "PoisonLine2"
    - action: SPAWN_PARTICLE
      particles:
      - particle: CLOUD
      Target:
        targetType: ZONE_FULL
        coverage: 1
      repeatEvery: 5
      times: 8
    - action: SPAWN_PARTICLE
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        coverage: 1
      wait: 40
      repeatEvery: 5
      times: 12
    - action: POTION_EFFECT
      potionEffectType: POISON
      amplifier: 4
      duration: 50
      Target:
        targetType: ZONE_FULL
      wait: 40
      repeatEvery: 5
      times: 12
    Cooldowns:
      local: 200
      global: 80
  PoisonLine2:
    Zone:
      shape: CUBOID
      x: 2
      y: 1
      z: 20
      Target:
        targetType: SELF
        track: false
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: CLOUD
      Target:
        targetType: ZONE_FULL
        coverage: 1
      repeatEvery: 5
      times: 8
    - action: SPAWN_PARTICLE
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        coverage: 1
      wait: 40
      repeatEvery: 5
      times: 12
    - action: POTION_EFFECT
      potionEffectType: POISON
      amplifier: 4
      duration: 50
      Target:
        targetType: ZONE_FULL
      wait: 40
      repeatEvery: 5
      times: 12
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_poisonlines.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</div>

</div>

</details>

</div>

***

### Rebote

Este script crea una zona de cilindro de 10 bloques centrada en el jefe y luego aplica efectos de partículas y empuje a la zona durante 10 segundos.

La acción de empuje empuja a los jugadores ligeramente hacia arriba en cada tick, creando la ilusión de que los jugadores están rebotando mientras están en la zona.

<div align="center">

<details>

<summary><b>Expandir Ejemplo</b></summary>

<div align="left">

```yml
eliteScript:
  Bounce:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: CYLINDER
      radius: 10
      height: 2
      Target:
        targetType: SELF
        track: false
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: EXPLOSION_NORMAL
      repeatEvery: 10
      times: 20
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 0.2
    - action: PUSH
      vValue: 0,0.4,0
      Target:
        targetType: ZONE_FULL
      repeatEvery: 1
      times: 200
    Cooldowns:
      local: 220
      global: 80
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_bounce.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</div>

</div>

</details>

</div>

***

### Invocar

Este script creará una zona cilíndrica (posicionada 6 bloques por encima del jugador debido al desplazamiento aplicado) centrada alrededor del jugador que dañó al jefe. Además, mostrará un mensaje en pantalla a ese jugador.

Después de un retraso de 2 segundos, aparecerán refuerzos en la zona designada. Sin embargo, solo una parte de la zona será ocupada por refuerzos ya que usamos `coverage`. Si el jugador no logra eliminar a todos los refuerzos, desaparecerán automáticamente después de 20 segundos (400 ticks).

<div align="center">

<details>

<summary><b>Expandir Ejemplo</b></summary>

<div align="left">

```yml
eliteScript:
  Summon:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: CYLINDER
      radius: 3
      height: 1
      Target:
        targetType: DIRECT_TARGET
        offset: 0,6,0
    Actions:
    - action: SUMMON_REINFORCEMENT
      sValue: "fc_boss.yml"
      duration: 400
      Target:
        targetType: ZONE_FULL
        coverage: 0.2
      wait: 40
    - action: TITLE_MESSAGE
      subtitle: "Friends! Help!!!"
      duration: 30
      fadeIn: 10
      fadeOut: 10
      Target:
        targetType: DIRECT_TARGET
    Cooldowns:
      local: 333
      global: 80
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_summon.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</div>

</div>

</details>

</div>

***

### Zonas de Poción

Este script se activa cuando un jugador daña al jefe. Luego ejecuta el script `PotionZoneBad` o `PotionZoneGood`.

En el script `PotionZoneBad`, se genera una zona cilíndrica alrededor de los jugadores cercanos que se encuentran a menos de 20 bloques del jefe. Produce efectos de partículas de nube y humo grande con una cobertura especificada, inflige el efecto de poción de wither y entrega un mensaje a los jugadores cercanos.

En el script `PotionZoneGood`, se genera una zona cilíndrica alrededor de los jugadores que se encuentran a menos de 20 bloques del jefe. Los efectos de partículas para este script están invertidos. Este script aplica un efecto de poción de curación en lugar de wither y envía un mensaje a los jugadores cercanos.

<div align="center">

<details>

<summary><b>Expandir Ejemplo</b></summary>

<div align="left">

```yml
eliteScript:
  Trigger:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: RUN_SCRIPT
      scripts:
      - "PotionZoneBad"
      - "PotionZoneGood"
      onlyRunOneScript: true
    Cooldowns:
      local: 110
      global: 80
  PotionZoneBad:
    Zone:
      shape: CYLINDER
      height: 2
      radius: 5
      Target:
        targetType: NEARBY_PLAYERS
        range: 20
        track: false
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: CLOUD
      Target:
        targetType: ZONE_FULL
        coverage: 0.3
        track: false
      repeatEvery: 10
      times: 4
    - action: SPAWN_PARTICLE
      particles:
      - particle: SMOKE_LARGE
      Target:
        targetType: ZONE_FULL
        coverage: 0.3
        track: false
      wait: 40
      repeatEvery: 10
      times: 6
    - action: POTION_EFFECT
      potionEffectType: WITHER
      amplifier: 3
      duration: 80
      Target:
        targetType: ZONE_FULL
        track: false
      wait: 40
      repeatEvery: 10
      times: 6
    - action: MESSAGE
      sValue: "&cCool boss!: &fFeel the burn!"
      Target:
        targetType: NEARBY_PLAYERS
        range: 20
  PotionZoneGood:
    Zone:
      shape: CYLINDER
      height: 2
      radius: 5
      Target:
        targetType: NEARBY_PLAYERS
        range: 20
        track: false
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: SMOKE_LARGE
      Target:
        targetType: ZONE_FULL
        coverage: 0.3
        track: false
      repeatEvery: 10
      times: 4
    - action: SPAWN_PARTICLE
      particles:
      - particle: CLOUD
      Target:
        targetType: ZONE_FULL
        coverage: 0.3
        track: false
      wait: 40
      repeatEvery: 10
      times: 6
    - action: POTION_EFFECT
      potionEffectType: HEAL
      amplifier: 1
      duration: 80
      Target:
        targetType: ZONE_FULL
        track: false
      wait: 40
      repeatEvery: 10
      times: 6
    - action: MESSAGE
      sValue: "&cCool boss!: &fFeel the... Wait, this is the wrong one."
      Target:
        targetType: NEARBY_PLAYERS
        range: 20
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_potionzones.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</div>

</div>

</details>

</div>

***

### Olas Cegadoras

Este script inicia dos olas de rayo terrestres proyectadas en direcciones X tanto positivas como negativas, originándose desde el jefe.

Utilizamos el parámetro `offset` para determinar la longitud y el tamaño de los rayos, específicamente definiendo el valor Z. Además, especificamos la dirección de propagación de la ola estableciendo los valores X. (Esta es solo una explicación de cómo este script específico usa estos valores, no tienes que hacer el tuyo exactamente así)

Si bien es posible ajustar los valores Y para aumentar la altura de las olas de rayo, lo dejamos en 0 para permitir a los jugadores la opción de saltar sobre los rayos.

El parámetro `animationDuration` dicta el tiempo que tardan las olas de rayo en viajar desde los objetivos hasta los objetivos finales. Reducir este valor haría que los rayos fueran más rápidos y más difíciles de evadir.

Posteriormente, se aplican efectos de partículas y pociones. Los jugadores que no logren evitar o saltar sobre las olas de rayo quedarán cegados durante 5 segundos (100 ticks).

<div align="center">

<details>

<summary><b>Expandir Ejemplo</b></summary>

<div align="left">

```yml
eliteScript:
  Blind:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: TRANSLATING_RAY
      Target:
        targetType: SELF
        offset: 0,0,5
        track: false
      FinalTarget:
        targetType: SELF
        offset: 10,0,5
        track: false
      Target2:
        targetType: SELF
        offset: 0,0,-5
        track: false
      FinalTarget2:
        targetType: SELF
        offset: -10,0,-5
        track: false
      animationDuration: 100
      ignoresSolidBlocks: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 1.0
      repeatEvery: 5
      times: 20
    - action: POTION_EFFECT
      potionEffectType: BLINDNESS
      amplifier: 5
      duration: 100
      Target:
        targetType: ZONE_FULL
        track: true
      repeatEvery: 1
      times: 100
      scripts: "Blind2"
    Cooldowns:
      local: 200
      global: 80
  Blind2:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: TRANSLATING_RAY
      Target:
        targetType: SELF
        offset: 0,0,5
        track: false
      FinalTarget:
        targetType: SELF
        offset: -10,0,5
        track: false
      Target2:
        targetType: SELF
        offset: 0,0,-5
        track: false
      FinalTarget2:
        targetType: SELF
        offset: -10,0,-5
        track: false
      animationDuration: 100
      ignoresSolidBlocks: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 1.0
      repeatEvery: 5
      times: 20
    - action: POTION_EFFECT
      potionEffectType: BLINDNESS
      amplifier: 5
      duration: 100
      Target:
        targetType: ZONE_FULL
        track: true
      repeatEvery: 1
      times: 100
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_blindwaves.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</div>

</div>

</details>

</div>

***

### Muro Congelante

Este script crea 3 rayos giratorios centrados en el jefe. Necesitamos 3 rayos giratorios diferentes ya que no podemos definir la altura del rayo, por lo que usamos varios scripts y `offset` para apilar los rayos en altura y que parezcan un único muro giratorio.

Los 3 scripts tienen zonas idénticas, excepto que el `offset` es diferente. Están configurados para tener 6 bloques de longitud a partir del jefe y para realizar una rotación de guiñada de 360 grados en 10 segundos (200 ticks).

Todos los scripts tienen efectos de partículas configurados y aplicarán la acción `VISUAL_FREEZE` durante 5 segundos (100 ticks) a cualquier jugador que sea golpeado por los muros de rayo.

<div align="center">

<details>

<summary><b>Expandir Ejemplo</b></summary>

<div align="left">

```yml
eliteScript:
  Trigger:
    Events:Please specify the language you would like the text translated into. I will retain the markdown formatting once the target language is provided.