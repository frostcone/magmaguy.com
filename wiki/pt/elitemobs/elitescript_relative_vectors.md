```markdown
# Vetores Relativos do Elite Script

## Para que servem

Vetores relativos são vetores que são relativos a uma localização específica, mas dinâmica.

Para melhor explicar o que são, consideremos o seguinte caso: quer empurrar um jogador na direção do boss como parte de um poder. Como tanto o boss quanto o jogador se movem durante o combate, não é possível depender de um vetor específico para realizar este efeito - precisará de um vetor que vá do jogador na direção do boss. (Imagine uma linha curta com uma seta a ir do jogador na direção do boss.)

Vetores relativos podem ser usados de tantas maneiras que seria impossível listá-las todas, mas entre elas estão: disparar entidades (como projéteis) na direção de um jogador ou mob específico; gerar reforços atrás de um jogador; disparar um bloco em queda numa direção específica; criar raios que são disparados na direção de um jogador, e muito mais.

## Como funcionam os vetores?

Se não sabe ou não se lembra do que são vetores ou como funcionam, pode pensar em vetores como setas que apontam de um ponto para outro ponto.

Como tal, uma das propriedades dos vetores é o seu comprimento. Este comprimento é importante; no caso das setas, este comprimento é a velocidade com que uma seta é disparada, no caso de tentar obter pontos de deslocamento a partir de uma localização específica, é a distância a partir desse ponto. Coisas mais distantes terão maiores comprimentos de vetor, e coisas mais próximas terão comprimentos menores.

Para algumas mecânicas, provavelmente não quererá depender da distância entre dois pontos, pois apenas quer obter uma direção. Felizmente, pode usar a normalização de vetor, que garante que a direção é preservada, mas altera o comprimento para ser 1.0. Pode então usar multiplicadores para modificar facilmente o vetor até ficar satisfeito com o deslocamento que ele fornece ou a velocidade que ele dá.

## Propriedades

| Valor | Detalhes | Obrigatório? | Valor padrão |
| --- |:--------------------------------------------------------------------------------------------------------:| :-: | :-: |
| `SourceTarget` | [Alvo](pt-pt/elitemobs/elitescript_targets.md) no ponto de onde o vetor começará | ✅ | `none` |
| `DestinationTarget` | [Alvo](pt-pt/elitemobs/elitescript_targets.md) no ponto final do vetor | ✅ | `none` |
| `normalize` | Define se o vetor deve ser normalizado | ❌ | `false` |
| `multiplier` | Multiplica o comprimento do vetor. Pode aleatorizar este valor usando `~`. Exemplo: `1.0~2.5`. | ❌ | `1.0` |
| `offset` | Permite inserir um deslocamento fixo manual a este deslocamento. Pode aleatorizar este valor usando `~`. Exemplo: `0~5,0~2,0~10`. | ❌ | `none` |

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

Dispara uma seta

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

Gera um zombie 2 blocos atrás do jogador, relativo ao boss.

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

Cria uma esfera de chamas animada que encolhe para a localização de spawn.

</div>

</details>

</div>

### Ordem das operações

A ordem das operações ao aplicar as propriedades é a seguinte:

Cálculo do vetor -> `normalize` -> `multiplier` -> `offset`
```