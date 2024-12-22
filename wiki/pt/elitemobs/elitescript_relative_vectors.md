# Vetores Relativos do Elite Script

## Para que servem

Vetores relativos são vetores que são relativos a uma localização específica, mas dinâmica.

Para melhor explicar o que são, vamos considerar o seguinte caso: você quer empurrar um jogador em direção ao chefe como
parte de um poder. Como tanto o chefe quanto o jogador se movem durante o combate, não é possível confiar em um vetor
específico para realizar esse efeito - você precisará de um vetor que vá do jogador em direção ao chefe. (Imagine uma
linha curta com uma seta indo do jogador em direção ao chefe.)

Vetores relativos podem ser usados de tantas maneiras que seria impossível listá-las todas, mas entre elas estão: lançar
entidades (como projéteis) em direção a um jogador ou mob específico; gerar reforços atrás de um jogador; disparar um
bloco caindo em uma direção específica; criar raios que são disparados em direção a um jogador e muito mais.

## Como os vetores funcionam?

Se você não sabe ou não se lembra do que são vetores ou como eles funcionam, pode pensar em vetores como setas que
apontam de um ponto para outro ponto.

Como tal, uma das propriedades dos vetores é o seu comprimento. Este comprimento é importante; no caso de setas, este
comprimento é a velocidade com que uma seta é disparada, no caso de tentar obter pontos de deslocamento de uma
localização específica, é a distância desse ponto. Coisas mais distantes terão comprimentos de vetor maiores, e coisas
mais próximas terão comprimentos mais curtos.

Para algumas mecânicas, você provavelmente não vai querer confiar em quão distantes dois pontos estão, pois você só quer
obter uma direção. Felizmente, você pode usar a normalização de vetores, que garante que a direção seja preservada, mas
altera o comprimento para ser 1.0. Você pode então usar multiplicadores para modificar facilmente o vetor até que esteja
satisfeito com o deslocamento que ele fornece ou a velocidade que ele dá.

## Propriedades

| Valor               |                                       Detalhes                                        | Obrigatório? | Valor padrão |
|---------------------|:-------------------------------------------------------------------------------------:|:------------:|:------------:|
| `SourceTarget`      | [Alvo]($language$/elitemobs/elitescript_targets.md) no ponto de onde o vetor começará |      ✅       |    `none`    |
| `DestinationTarget` |    [Alvo]($language$/elitemobs/elitescript_targets.md) no ponto final para o vetor    |      ✅       |    `none`    |
| `normalize`         |                        Define se o vetor deve ser normalizado                         |      ❌       |   `false`    |
| `multiplier`        |                           Multiplica o comprimento do vetor                           |      ❌       |    `1.0`     |
| `offset`            |            Permite inserir um deslocamento fixo manual a este deslocamento            |      ❌       |    `none`    |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  ShootChicken:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SUMMON_ENTITY
      sValue: CHICKEN
      Target:
        targetType: SELF
      RelativeVector:
        SourceTarget:
          targetType: SELF
        DestinationTarget:
          targetType: DIRECT_TARGET
        normalize: true
        multiplier: 2.0
```

Dispara uma galinha

***

```yaml
eliteScript:
  ShootArrow:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SUMMON_ENTITY
      sValue: ARROW
      Target:
        targetType: SELF
      RelativeVector:
        SourceTarget:
          targetType: SELF
        DestinationTarget:
          targetType: DIRECT_TARGET
        normalize: true
        multiplier: 2.0
```

Dispara uma flecha

***

```yaml
eliteScript:
  SpawnReinforcement:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SUMMON_ENTITY
      sValue: ZOMBIE
      Target:
        targetType: SELF
      RelativeOffset:
        SourceTarget:
          targetType: SELF
        DestinationTarget:
          targetType: DIRECT_TARGET
        normalize: true
        multiplier: 2.0
```

Gera um zumbi 2 blocos atrás do jogador, em relação ao chefe.

***

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      Shape: SPHERE
      target:
        targetType: SELF_SPAWN
        offset: 0,0,0
        track: false
      filter: PLAYER
      radius: 6
    Actions:
    - action: SPAWN_PARTICLE
      repeatEvery: 38
      times: 5
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 0.9
      particles:
      - particle: FLAME
        RelativeVector:
          SourceTarget:
            targetType: ACTION_TARGET
            track: true
          DestinationTarget:
            targetType: SELF_SPAWN
            offset: 0,-0.5,0
        speed: 0.05
```

Cria uma esfera de chama animada que encolhe até a localização de geração.

</div>

</details>

</div>

### Ordem das operações

A ordem das operações ao aplicar as propriedades é a seguinte:

Cálculo do vetor -> `normalize` -> `multiplier` -> `offset`
