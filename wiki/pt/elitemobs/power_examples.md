Claro, aqui está a tradução para português (Portugal), mantendo a formatação markdown:

# Introdução

Nesta página, irá descobrir vários exemplos de poderes personalizados de boss criados com EliteScript e a [WebApp](https://magmaguy.com/webapp/webapp.html). Estes exemplos simples ilustram como utilizar múltiplas ações e outras funcionalidades para criar poderes únicos de boss.

Adicionalmente, demonstrações visuais acompanham cada exemplo, para que seja mais fácil entender como o script funciona dentro do jogo.

Sinta-se à vontade para copiar quaisquer dos exemplos e usá-los nas suas próprias masmorras ou mundos.

## Exemplos de Poderes

### Pancada para Baixo

Este script fará com que o boss se teletransporte 8 blocos acima do jogador que lhe causou dano, depois se atire contra o chão. Depois, aplicará o efeito de poção de lentidão a quaisquer jogadores a 3 blocos do boss, e exibirá a mensagem 'Atordoado' no ecrã durante 3 segundos.

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

### Empurrar para Longe

Este script gerará uma cúpula de 4 blocos à volta do boss. Subsequentemente, iniciará um efeito de partículas no limite da zona, durando um segundo, depois outra ação empurrará para longe quaisquer jogadores dentro da zona. Devido à configuração de offset para o empurrão, os jogadores serão ligeiramente impulsionados para cima. Finalmente, o script enviará uma mensagem a quaisquer jogadores dentro da zona.

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

### Chuva de Flechas

Cria um script que desenhará um círculo no chão à volta do jogador que danificou o mob, também mostra uma mensagem no ecrã dizendo ao jogador para sair do círculo. Depois, 2 segundos depois, disparará flechas para baixo nessa mesma localização, apenas a 10 blocos de altura.

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

### Aura de Fogo

Isto criará um script que fará aparecer partículas à volta do boss usando a zona de cilindro, durará 6 segundos. O boss também receberá a tag `FireOn` durante 6 segundos.

Se os jogadores atacarem o boss enquanto a tag estiver ativa, então os jogadores serão incendiados durante 1 segundo. Isto é feito usando condições, o script `SetOnFire` só poderá ser executado se o boss tiver a tag correspondente `FireOn`.

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
  Your browser does not support the video tag.
</video>

</div>

</div>

</details>

</div>

***

### Linhas de Veneno

Este script criará duas zonas cuboides centradas no boss. A IA do boss é definida para estar desligada durante 2 segundos. As zonas cuboides são configuradas de tal forma que formarão um símbolo de mais no chão.

O script fará então partículas de nuvem durante 2 segundos nas zonas e depois fará partículas de fumo e aplicará efeito de poção de veneno às zonas durante 3 segundos.

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
  Your browser does not support the video tag.
</video>

</div>

</div>

</details>

</div>

***

### Salto

Este script cria uma zona de cilindro de 10 blocos centrada no boss e depois aplica efeitos de partículas e empurrão à zona durante 10 segundos.

A ação de empurrar empurra os jogadores ligeiramente para cima a cada tick, criando a ilusão de que os jogadores estão a saltar enquanto estão na zona.

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
  Your browser does not support the video tag.
</video>

</div>

</div>

</details>

</div>

***

### Invocar

Este script criará uma zona cilíndrica (posicionada 6 blocos acima do jogador devido ao offset aplicado) centrada à volta do jogador que danificou o boss. Adicionalmente, exibirá uma mensagem no ecrã para esse jogador.

Após um atraso de 2 segundos, reforços aparecerão na zona designada. No entanto, apenas uma porção da zona será ocupada por reforços, uma vez que usámos `coverage`. Se o jogador não conseguir eliminar todos os reforços, eles desaparecerão automaticamente após 20 segundos (400 ticks).

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

### Zonas de Poção

Este script é ativado quando um jogador danifica o boss. Executa então o script `PotionZoneBad` ou `PotionZoneGood`.

No script `PotionZoneBad`, uma zona cilíndrica é gerada à volta de jogadores próximos que estão a 20 blocos do boss. Produz efeitos de partículas de nuvem e fumo grande com uma cobertura especificada, inflige o efeito de poção de definhamento (wither) e entrega uma mensagem a jogadores próximos.

No script `PotionZoneGood`, uma zona cilíndrica é gerada à volta de jogadores que estão a 20 blocos do boss. Os efeitos de partículas para este script são invertidos. Este script aplica um efeito de poção de cura em vez de definhamento e envia uma mensagem a jogadores próximos.

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

### Ondas de Cegueira

Este script inicia duas ondas de raio no chão projetadas nas direções X positiva e negativa, originando-se do boss.

Utilizamos o parâmetro `offset` para determinar o comprimento e tamanho dos raios, especificamente definindo o valor Z. Adicionalmente, especificamos a direção de propagação da onda definindo os valores X. (Esta é apenas uma explicação sobre como este script específico usa estes valores, não tem de fazer o seu exatamente assim)

Embora seja possível ajustar os valores Y para aumentar a altura das ondas de raio, deixamo-lo a 0 para permitir aos jogadores a opção de saltar sobre os raios.

O parâmetro `animationDuration` dita o tempo necessário para as ondas de raio viajarem de alvos para alvos finais. Reduzir este valor tornaria os raios mais rápidos e mais desafiante de evadir.

Subsequentemente, efeitos de partículas e poções são aplicados. Jogadores que não consigam evitar ou saltar sobre as ondas de raio ficarão cegos durante 5 segundos (100 ticks).

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

### Parede de Congelamento

Este script cria 3 raios rotativos centrados no boss. Precisamos de 3 raios rotativos diferentes, uma vez que não podemos definir a altura do raio, por isso usamos vários scripts e `offset` para fazer os raios empilharem em altura, para que pareçam uma única *parede* rotativa.

Todos os 3 scripts têm zonas idênticas, exceto o `offset` ser diferente. São definidos para ter 6 blocos de comprimento a partir do boss e são definidos para fazer uma rotação de 360 graus no eixo yaw em 10 segundos (200 ticks).

Todos os scripts têm efeitos de partículas definidos e aplicarão a ação `VISUAL_FREEZE` durante 5 segundos (100 ticks) a quaisquer jogadores que sejam *atingidos* pelas paredes de raio.

<div align="center">

<details>

<summary><b>Expandir Exemplo</b></summary>

<div align="left">

```yml
eliteScript:
  Trigger:Please specify the language you would like the text translated into. I will translate the provided text, including the markdown formatting, once you provide the target language.