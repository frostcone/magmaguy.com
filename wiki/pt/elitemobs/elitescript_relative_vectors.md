# Vetores Relativos no Script Elite

## Para que servem

Vetores relativos são vetores que são relativos a uma localização específica, mas dinâmica.

Para explicar melhor o que são, vamos considerar o seguinte caso: você deseja empurrar um jogador em direção ao chefe como parte de um poder. Como tanto o chefe quanto o jogador se movem durante o combate, não é possível depender de um vetor específico para realizar esse efeito - você precisará de um vetor que vá do jogador para o chefe. (Imagine uma linha curta com uma seta indo do jogador para o chefe.)

Os vetores relativos podem ser usados de tantas maneiras que seria impossível listá-las todas, mas entre elas estão: atirar entidades (como projéteis) em direção a um jogador ou mob específico; gerar reforços atrás de um jogador; atirar um bloco que cai em uma direção específica; criar raios que são atirados em direção a um jogador, e muito mais.

## Como os vetores funcionam?

Se você não sabe ou não se lembra do que são vetores ou como eles funcionam, pode pensar nos vetores como setas que apontam de um ponto para outro.

Como tal, uma das propriedades dos vetores é o seu comprimento. Esse comprimento é importante; no caso de setas, esse comprimento é a velocidade com que uma seta é disparada, no caso de tentar obter pontos de deslocamento de uma localização específica, é a distância daquele ponto. Coisas mais distantes terão comprimentos de vetor maiores, e coisas mais próximas terão comprimentos mais curtos.

Para algumas mecânicas, você provavelmente não vai querer depender de quão distantes dois pontos estão, pois você só quer obter uma direção. Felizmente, você pode usar a normalização do vetor, que garante que a direção é preservada, mas muda o comprimento para 1.0. Você pode então usar multiplicadores para modificar facilmente o vetor até ficar satisfeito com o deslocamento que ele fornece ou a velocidade que ele dá.

## Propriedades

| Valor |                                                 Detalhes                                                  | Obrigatório? | Valor padrão |
| --- |:--------------------------------------------------------------------------------------------------------:| :-: | :-: |
| `SourceTarget` | [Alvo]($language$/elitemobs/elitescript_targets.md) no ponto de onde o vetor começará | ✅ | `none` |
| `DestinationTarget` |          [Alvo]($language$/elitemobs/elitescript_targets.md) no ponto final do vetor           | ✅ | `none` |
| `normalize` |                                 Define se o vetor deve ser normalizado                                  | ❌ | `false` |
| `multiplier` |                                      Multiplica o comprimento do vetor                                      | ❌ | `1.0` |
| `offset` |                          Permite inserir um deslocamento fixo manual a este deslocamento                           | ❌ | `none` |

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

Atira uma galinha

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

Atira uma flecha

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

Gera um zumbi 2 blocos atrás do jogador, relativo ao chefe.

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

Cria uma esfera de chama animada que encolhe para a localização de geração.

</div>

</details>

</div>

### Ordem das operações

A ordem das operações ao aplicar as propriedades é a seguinte:

Cálculo de vetor -> `normalize` -> `multiplier` -> `offset`

