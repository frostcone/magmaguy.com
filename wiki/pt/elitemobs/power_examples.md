# Introdução

Nesta página, irá descobrir vários exemplos de poderes de boss personalizados, criados com EliteScript e a [WebApp](https://magmaguy.com/webapp/webapp.html). Estes exemplos simples ilustram como utilizar várias ações e outros recursos para criar poderes de boss únicos.

Além disso, cada exemplo é acompanhado de demonstrações visuais, para que seja mais fácil entender como o script funciona dentro do jogo.

Sinta-se à vontade para copiar qualquer um dos exemplos e utilizá-los nas suas próprias masmorras ou mundos.

## Exemplos de Poderes

### Ataque com Impacto

Este script fará com que o boss se teletransporte 8 blocos acima do jogador que lhe causou dano e, em seguida, se esmague contra o chão. Depois, aplicará o efeito de poção de lentidão a quaisquer jogadores num raio de 3 blocos do boss, e exibirá a mensagem "Atordoado" no ecrã durante 3 segundos.

<div align="center">

<details>

<summary><b>Expandir Exemplo</b></summary>

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
      subtitle: "Atordoado!"
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
  O seu navegador não suporta a etiqueta de vídeo.
</video>

</div>

</div>

</details>

</div>

***

### Empurrão para Longe

Este script irá gerar uma cúpula de 4 blocos à volta do boss. Posteriormente, iniciará um efeito de partículas no limite da zona, com duração de um segundo, depois outra ação empurrará quaisquer jogadores dentro da zona. Devido à configuração de offset para o empurrão, os jogadores serão ligeiramente impulsionados para cima. Finalmente, o script enviará uma mensagem a quaisquer jogadores dentro da zona.

<div align="center">

<details>

<summary><b>Expandir Exemplo</b></summary>

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
      sValue: "&cBoss fixe!: &fVÃO-SE EMBORA!"
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
  O seu navegador não suporta a etiqueta de vídeo.
</video>

</div>

</div>

</details>

</div>

***

### Chuva de Setas

Faz um script que desenhará um círculo no chão à volta do jogador que danificou o mob, também mostra uma mensagem no ecrã a dizer ao jogador para sair do círculo. Depois, 2 segundos mais tarde, irá disparar setas para baixo nesse mesmo local, apenas a partir de 10 blocos acima.

<div align="center">

<details>

<summary><b>Expandir Exemplo</b></summary>

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
      subtitle: Saia da zona!
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
  O seu navegador não suporta a etiqueta de vídeo.
</video>

</div>

</div>

</details>

</div>

***

### Aura de Fogo

Isto criará um script que irá gerar partículas à volta do boss utilizando a zona do cilindro, terá a duração de 6 segundos. O boss também receberá a etiqueta `FireOn` durante 6 segundos.

Caso os jogadores ataquem o boss enquanto a etiqueta estiver ativa, os jogadores ficarão em chamas durante 1 segundo. Isto é feito utilizando condições, o script `SetOnFire` só poderá ser executado se o boss tiver a etiqueta correspondente `FireOn`.

<div align="center">

<details>

<summary><b>Expandir Exemplo</b></summary>

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
  O seu navegador não suporta a etiqueta de vídeo.
</video>

</div>

</div>

</details>

</div>

***

### Linhas de Veneno

Este script irá criar duas zonas cuboides centradas no boss. A IA do boss é desligada durante 2 segundos. As zonas cuboides são configuradas de tal forma que irão formar um símbolo de mais no chão.

Em seguida, o script criará partículas de nuvem durante 2 segundos nas zonas e, em seguida, criará partículas de fumo e aplicará o efeito de poção de veneno às zonas durante 3 segundos.

<div align="center">

<details>

<summary><b>Expandir Exemplo</b></summary>

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
  O seu navegador não suporta a etiqueta de vídeo.
</video>

</div>

</div>

</details>

</div>

***

### Quicar

Este script cria uma zona de cilindro de 10 blocos centrada no boss e, em seguida, aplica efeitos de partículas e empurrão à zona durante 10 segundos.

A ação de empurrão empurra ligeiramente os jogadores para cima a cada tick, criando a ilusão de que os jogadores estão a quicar enquanto estão na zona.

<div align="center">

<details>

<summary><b>Expandir Exemplo</b></summary>

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
  O seu navegador não suporta a etiqueta de vídeo.
</video>

</div>

</div>

</details>

</div>

***

### Invocar

Este script criará uma zona cilíndrica (posicionada 6 blocos acima do jogador devido ao offset aplicado) centrada em redor do jogador que danificou o boss. Além disso, exibirá uma mensagem no ecrã para esse jogador.

Após um atraso de 2 segundos, serão gerados reforços na zona designada. No entanto, apenas uma parte da zona será ocupada por reforços, uma vez que utilizámos `coverage`. Se o jogador não conseguir eliminar todos os reforços, estes desaparecerão automaticamente após 20 segundos (400 ticks).

<div align="center">

<details>

<summary><b>Expandir Exemplo</b></summary>

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
      subtitle: "Amigos! Ajuda!!!"
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
  O seu navegador não suporta a etiqueta de vídeo.
</video>

</div>

</div>

</details>

</div>

***

### Zonas de Poções

Este script é ativado quando um jogador danifica o boss. Em seguida, executa o script `PotionZoneBad` ou `PotionZoneGood`.

No script `PotionZoneBad`, é gerada uma zona cilíndrica à volta dos jogadores próximos que estejam a 20 blocos do boss. Produz efeitos de partículas de nuvem e fumo grande com uma cobertura especificada, inflige o efeito de poção de murchidão e envia uma mensagem aos jogadores próximos.

No script `PotionZoneGood`, é gerada uma zona cilíndrica à volta dos jogadores que estejam a 20 blocos do boss. Os efeitos de partículas para este script são invertidos. Este script aplica um efeito de poção de cura em vez de murchidão e envia uma mensagem aos jogadores próximos.

<div align="center">

<details>

<summary><b>Expandir Exemplo</b></summary>

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
      sValue: "&cBoss fixe!: &fSinta a queimar!"
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
      sValue: "&cBoss fixe!: &fSinta o... Espera, este é o errado."
      Target:
        targetType: NEARBY_PLAYERS
        range: 20
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_potionzones.webm" type="video/webm">
  O seu navegador não suporta a etiqueta de vídeo.
</video>

</div>

</div>

</details>

</div>

***

### Ondas de Cegueira

Este script inicia duas ondas de raios terrestres projetadas nas direções X positivas e negativas, originárias do boss.

Utilizamos o parâmetro `offset` para determinar o comprimento e o tamanho dos raios, especificamente definindo o valor Z. Além disso, especificamos a direção da propagação da onda definindo os valores X. (Esta é apenas uma explicação sobre como este script específico utiliza estes valores, não tem de fazer o seu exatamente assim)

Embora seja possível ajustar os valores Y para aumentar a altura das ondas de raios, deixamos em 0 para permitir que os jogadores tenham a opção de saltar sobre os raios.

O parâmetro `animationDuration` determina o tempo necessário para que as ondas de raios viajem dos alvos para os alvos finais. Reduzir este valor tornaria os raios mais rápidos e mais difíceis de evitar.

Posteriormente, são aplicados efeitos de partículas e poções. Os jogadores que não conseguirem evitar ou saltar por cima das ondas de raios ficarão cegos durante 5 segundos (100 ticks).

<div align="center">

<details>

<summary><b>Expandir Exemplo</b></summary>

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
        offset: 10,0,-5
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
  O seu navegador não suporta a etiqueta de vídeo.
</video>

</div>

</div>

</details>

</div>

***

### Parede de Congelamento

Este script cria 3 raios rotativos centrados no boss. Precisamos de 3 raios rotativos diferentes, uma vez que não podemos definir a altura do raio, por isso utilizamos vários scripts e `offset` para fazer com que os raios se acumulem em altura para que pareçam uma *parede* rotativa singular.

Todos os 3 scripts têm zonas idênticas, exceto o `offset` que é diferente. Estão configurados para terem 6 blocos de comprimento a partir do boss e estão configurados para fazer uma rotação de 360 graus em 10 segundos (200 ticks).

Todos os scripts têm efeitos de partículas definidos e aplicarão a ação `VISUAL_FREEZE` durante 5 segundos (100 ticks) a quaisquer jogadores que sejam *atingidos* pelas paredes de raios.

<div align="center">

<details>

<summary><b>Expandir Exemplo</b></summary>

<div align="left">

```yml
eliteScript:
  Trigger:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: RUN_SCRIPT
      scripts:
      - "FreezeWall"
      - "FreezeWall2"
      - "FreezeWall3"
    Cooldowns:
      local: 300
      global: 80      
  FreezeWall:
    Zone:
      shape: ROTATING_RAY
      Target:
        targetType: SELF
        track: false
      Target2:
        targetType: SELF
        offset: 6,0,0
        track: false
      yawRotation: 360
      animationDuration: 200
      ignoresSolidBlocks: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: SNOWFLAKE
      repeatEvery: 10
      times: 20
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 1.0
    - action: VISUAL_FREEZE
      duration: 100
      Target:
        targetType: ZONE_FULL
        track: false
      repeatEvery: 1
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_freezewall.webm" type="video/webm">
  O seu navegador não suporta a etiqueta de vídeo.
</video>

</div>

</div>

</details>

</div>
```yml
times: 200
  FreezeWall2:
    Zone:
      shape: ROTATING_RAY
      Target:
        targetType: SELF
        track: false
        offset: 0,1,0
      Target2:
        targetType: SELF
        track: false
        offset: 6,1,0
      yawRotation: 360
      animationDuration: 200
      ignoresSolidBlocks: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: SNOWFLAKE
      repeatEvery: 10
      times: 20
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 1.0
    - action: VISUAL_FREEZE
      duration: 100
      Target:
        targetType: ZONE_FULL
        track: false
      repeatEvery: 1
      times: 200
  FreezeWall3:
    Zone:
      shape: ROTATING_RAY
      Target:
        targetType: SELF
        track: false
        offset: 0,2,0
      Target2:
        targetType: SELF
        track: false
        offset: 6,2,0
      yawRotation: 360
      animationDuration: 200
      ignoresSolidBlocks: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: SNOWFLAKE
      repeatEvery: 10
      times: 20
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 1.0
    - action: VISUAL_FREEZE
      duration: 100
      Target:
        targetType: ZONE_FULL
        track: false
      repeatEvery: 1
      times: 200
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_freezewall.webm" type="video/webm">
  O seu navegador não suporta a etiqueta de vídeo.
</video>

</div>

</div>

</details>

</div>
