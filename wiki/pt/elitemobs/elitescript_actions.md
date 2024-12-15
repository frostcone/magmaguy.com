# Ações do Script Elite

As ações estão no cerne do script. Elas determinam o que o script faz e permitem definir intervalos personalizados.

As ações começam sempre com o tipo de ação que vai realizar. Diferentes tipos de ação servem diferentes funções. Além disso, todas as ações têm um alvo ou alvos. As ações também podem ter um temporizador de espera, para garantir que as coisas aconteçam com atrasos personalizáveis. Finalmente, as ações também podem ter vários outros campos específicos para o tipo de ação.

## Atributos partilhados

| Valores             |                                                                                 Detalhes                                                                                  | Especial |
|--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`           |                                                     [Mais informações aqui]($language$/elitemobs/elitescript_targets.md)                                                      | ❌ |
| `wait`             |                                                   Define o tempo de espera (ticks) antes de executar as ações                                                   | ❌ |
| `repeatEvery`      |        Define as ações para repetir a cada quantidade definida de ticks. Qualquer script que tenha isto definido mas não esteja a usar vezes será terminado após a morte do mob para evitar lag.         | ❌ |
| `times`            |                                                           Define o número de vezes que uma ação irá acontecer                                                           | Requer `repeatEvery` |
| `scripts`          |                                                        Define os scripts que serão executados no final da ação                                                        | ❌ |
| `onlyRunOneScript` |                                                      Escolhe um dos `scripts` aleatoriamente e executa apenas esse.                                                      | ❌ |
| `offset`           | Esta opção está em `Target`. Permite compensar a localização do alvo. O offset não funciona com ações que visam zonas com `ZONE_FULL` ou `ZONE_BORDER`. | ❌ |
| `debug`           | Esta opção está sob a secção de ação do script. Quando definido para verdadeiro, irá exibir ícones de barreiras na área onde a ação se encontra. | ❌ |

## Tipos de ação

### ACTION_BAR_MESSAGE

Define a mensagem da barra de ação para os alvos.

| Valores |                            Detalhes                            | Obrigatório | Especial |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                            Mensagem                            | ✅ | Pode usar [Códigos de Cor](#color_codes) com `&` |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: ACTION_BAR_MESSAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&2Olá Mundo!"
```

<div align="center">

![elitescript_actions_actionbar.jpg](../../../img/wiki/elitescript_actions_actionbar.jpg)

</div>

Irá definir a barra de ação para dizer Olá Mundo para quaisquer jogadores que estejam dentro de 10 blocos do boss.

</div>

</details>

</div>

---

### BOSS_BAR_MESSAGE

Adiciona uma barra de boss ao(s) alvo(s).

| Valores |                            Detalhes                            | Obrigatório |                   Especial                    |
| --- |:-------------------------------------------------------------:| :-: |:--------------------------------------------:|
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |                      ❌                       |
| `sValue` |                            Mensagem                            | ✅ | Pode usar [Códigos de Cor](#color_codes) com `&` |
| `duration` |               Duração da barra de boss em ticks               | ✅ |                      ❌                       |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: BOSS_BAR_MESSAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      duration: 120
      sValue: "&2Olá Mundo!"
```

<div align="center">

![elitescript_actions_bossbar.jpg](../../../img/wiki/elitescript_actions_bossbar.jpg)

</div>

Irá definir uma barra de boss a dizer Olá Mundo para quaisquer jogadores que estejam dentro de 10 blocos do boss por 1 segundo.

</div>

</details>

</div>

---

### DAMAGE

É assim que pode causar dano a entidades como outras entidades.

_Nota: isto usa nativamente o sistema de dano EliteMobs! Isto significa que irá ver a redução de armadura elite normal de golpes. Mais sobre isto na seção de multiplicadores._

| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `multiplier` |                       Multiplicador de dano                       | ✅ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: DAMAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      multiplier: 0.5
```

Define o dano para metade da quantidade de dano base que o boss causaria ao jogador, tendo em conta as reduções de dano.

</div>

</details>

</div>

#### multiplier

Define o multiplicador de dano do boss para o efeito.

**Importante**: para que os poderes escalem facilmente e automaticamente, o dano é aplicado fazendo com que o boss bata no jogador uma vez e multiplicando o dano base do boss com o multiplicador.

Isto significa que um multiplicador de 1.0 é o mesmo que um golpe normal do boss. 2.0 é um golpe 2x a força normal, e 0.5 é 50% tão forte.

---

### MAKE_INVULNERABLE

Torna um alvo invulnerável.

| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `invulnerable` |               Define se o boss é invulnerável               | ✅ |
| `duration` |       Define a duração da invulnerabilidade (ticks)       | ❌ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MAKE_INVULNERABLE
      Target:
        targetType: SELF
      invulnerable: true
      duration: 60
```

Torna um boss invulnerável por 60 ticks (3 segundos).

</div>

</details>

</div>

---

### MODIFY_DAMAGE

Modifica o dano causado a um boss ou causado a jogadores por esse boss. Esta é uma ação especial com alguns requisitos especiais.

| Valores | Detalhes | Obrigatório |
| --- | :-: | :-: |
| `multiplier` | Multiplicador de dano. | ✅ |

Esta ação é especial e deve estar num script que tenha um ouvinte de eventos para um evento de dano. Os seguintes são eventos de dano válidos: `EliteMobDamagedByEliteMobEvent`, `EliteMobDamagedByPlayerEvent`, `EliteMobDamagedEvent` para eventos que reduzem o dano causado ao boss e `PlayerDamagedByEliteMobEvent` para eventos que reduzem o dano causado a jogadores.

É altamente recomendado que aprenda como a condição `hasTag` funciona para melhor usar esta ação. Quando usado corretamente, é possível fazer com que o boss resista temporariamente ou seja mais fraco ao dano, e isso pode ser associado a buffs de jogadores, localização do boss ou muitos outros fatores.

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MODIFY_DAMAGE
      multiplier: 2.0
      Conditions:
        hasTags:
        - "CoolPlayer"
        Target:
          targetType: DIRECT_TARGET
```

Aumenta o dano causado ao boss pelos jogadores em 2x, mas apenas se o jogador tiver uma tag chamada "CoolPlayer".

</div>

</details>

</div>

---

### MESSAGE

Envia uma mensagem para o(s) alvo(s).

| Valores |                            Detalhes                            | Obrigatório | Especial |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                            Mensagem                            | ✅ | Pode usar [Códigos de Cor](#color_codes) com `&` |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MESSAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&2Olá Mundo!"
```

<div align="center">

![elitescript_actions_message.jpg](../../../img/wiki/elitescript_actions_message.jpg)

</div>

Enviará uma mensagem de chat a todos os jogadores dentro de 10 blocos do boss.

</div>

</details>

</div>

---

### NAVIGATE

Faz com que o boss navegue (ande) para o alvo especificado.

| Valores |                            Detalhes                            | Obrigatório | Especial |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `FinalTarget` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `velocity` | Define a velocidade de navegação do boss. `1.0` sendo o valor do boss definido na config. | ❌ | ❌ |
| `bValue` | Define se o boss deve ser forçadamente teletransportado para o `FinalTarget` se a navegação falhar. | ❌ | ❌ |
| `duration` | Quanto tempo o boss deve tentar navegar antes de desistir. Definido em ticks. O padrão é 100 ticks. | ✅ | ❌ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: NAVIGATE
      Target: 
        targetType: SELF
      FinalTarget:
        targetType: NEARBY_PLAYERS
        range: 50
      velocity: 1.0
      bValue: true
      duration: 100
```

Fará com que o boss navegue para o local onde o jogador estava quando atingiu o boss.

</div>

</details>

</div>

---

### PLACE_BLOCK

Coloca um bloco na(s) localização(ões) do alvo durante a duração.

| Valores |                                                         Detalhes                                                         | Obrigatório |
| --- |:-----------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                              [Mais informações aqui]($language$/elitemobs/elitescript_targets.md)                              | ✅ |
| `material` | [Material](#material) do bloco, [lista completa aqui](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | ✅ |
| `duration` |                                              Duração do efeito, em ticks                                               | ❌ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: DOME
      radius: 3
      Target:
        targetType: SELF
    Actions:
    - action: PLACE_BLOCK
      Target:
        targetType: ZONE_FULL
      duration: 120
      material: GLASS
```

<div align="center">

![elitescript_actions_placeblock.jpg](../../../img/wiki/elitescript_actions_placeblock.jpg)

</div>

Coloca um domo de vidro ao redor do boss que durará 6 segundos.

_Nota: Se nenhuma duração for definida, a colocação do bloco é permanente._

</div>

</details>

</div>

---

### PLAY_ANIMATION

Reproduz a animação especificada para um Modelo Personalizado usando o Model Engine. Requer Model Engine e um Modelo Personalizado válido para estar no alvo que executa a animação.

| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                Define o nome da animação                | ✅ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PLAY_ANIMATION
      Target:
        targetType: SELF
      sValue: "fortnite_dance"
```

Define o boss para reproduzir a animação fortnite_dance. Requer que o servidor tenha Model Engine, o boss tenha um disfarce personalizado e o disfarce personalizado tenha uma animação chamada "fortnite\_dance".

</div>

</details>

</div>

---

### PLAY_SOUND

Reproduz um som no jogo.

| Valores   |                            Detalhes                            | Obrigatório |
|----------|:-------------------------------------------------------------:|:---------:|
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) |     ✅     |
| `sValue` |            Define o nome do som a ser reproduzido            |     ✅     |
| `pitch`  |           Define o tom do som a ser reproduzido           |     ❌     |
| `volume` |           Define o volume do som a ser reproduzido           |     ❌     |

[Aqui está uma lista útil de todos os sons do Minecraft!](https://www.digminecraft.com/lists/sound_list_pc.php) Lembre-se que isso também pode reproduzir sons personalizados de pacotes de recursos.
Quando a ação tem como alvo uma zona, a ação irá reproduzir um som para cada bloco nessa zona. Isto pode tornar o som consideravelmente mais alto do que o normal, por isso considere diminuir o volume se estiver a visar uma zona.

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PLAY_SOUND
      Target:
        targeType: SELF
      sValue: minecraft:block.bell.resonate
```

Reproduz o som de ressonância dos sinos do Minecraft na localização do boss.

</div>

</details>

</div>

---

### POTION_EFFECT

Aplica um efeito de poção específico ao(s) alvo(s).

| Valores |                                                       Detalhes                                                       | Obrigatório |
| --- |:-------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                            [Mais informações aqui]($language$/elitemobs/elitescript_targets.md)                            | ✅ |
| `potionEffectType` | Tipo de efeito, [lista válida está aqui](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) | ✅ |
| `amplifier` |                                          Nível de efeito de poção (começa em 0)                                          | ✅ |
| `duration` |                                           Duração do efeito (ticks)                                            | ✅ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: POTION_EFFECT
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      potionEffectType: LEVITATION
      amplifier: 1
      duration: 40
```

<div align="center">

![elitescript_actions_potioneffect.jpg](../../../img/wiki/elitescript_actions_potioneffect.jpg)

</div>

Isto fará com que quaisquer jogadores dentro de 10 blocos do boss levitem por 2 segundos (40 ticks).

</div>

</details>

</div>

---

### PUSH

Empurra um alvo por um vetor definido.

| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `vValue` |        Define o vetor da velocidade que será aplicada        | ✅ |

*Nota: Esta ação também aceita vetores relativos. Saiba mais sobre como usar esses [aqui]($language$/elitemobs/elitescript_relative_vectors.md).*

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PUSH
      wait: 3
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      vValue: 0,0.3,0
      times: 10
      repeatEvery: 10
```

<div align="center">

![elitescript_actions_push.jpg](../../../img/wiki/elitescript_actions_push.jpg)

</div>

Isto irá empurrar todos os jogadores dentro de 10 blocos do boss para o ar usando uma força de 0.3. Esta ação será repetida 10 vezes a cada 0,5 segundos (10 ticks). Por outras palavras, isso fará com que este efeito dure 5 segundos (10 vezes x 10 ticks = 100 ticks).

Isso fará parecer que os jogadores estão a saltar.

</div>

</details>

</div>

#### vector

Os vetores são definidos por `vValue: x,y,z`. Como exemplo, se quiser que o alvo seja empurrado para cima, pode fazer `vValue: 0,0.3,0`.

---

### RUN_COMMAND_AS_CONSOLE

Executa um comando como consola.

| Valores |                             Detalhes                             | Obrigatório |
| --- |:---------------------------------------------------------------:| :-: |
| `Target` |  [Mais informações aqui]($language$/elitemobs/elitescript_targets.md)  | ✅ |
| `sValue` |                    Comando que será executado                     | ✅ |

**Nota: existem placeholders disponíveis! Verifique RUN_COMMAND_AS_PLAYER, eles são os mesmos**

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: RUN_COMMAND_AS_CONSOLE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: say Olá $bossName o meu nome é $playerName. Qual é o seu nível? $bossName o meu nível é $bossLevel.
```

<div align="center">

![elitescript_actions_commandconsole.jpg](../../../img/wiki/elitescript_actions_commandconsole.jpg)

</div>

Faz com que a consola transmita a mensagem "Olá $bossName o meu nome é $playerName. Qual é o seu nível? $bossName o meu nível é $bossLevel"

</div>

</details>

</div>

---

### RUN_COMMAND_AS_PLAYER
`
Executa um comando como um `player. Requer que o alvo seja jogadores.

| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                   Comando que será executado                    | ✅ |

**Nota: RUN_COMMAND_AS_PLAYER e RUN_COMMAND_AS_CONSOLE usam os seguintes placeholders:**

| Placeholder | Detalhes | Especial |
| --- | :-: | :-: |
| `$playerName` | Nome de exibição do jogador | O alvo deve ser jogador |
| `$playerX` | Localização X do jogador | O alvo deve ser jogador |
| `$playerY` | Localização Y do jogador | O alvo deve ser jogador |
| `$playerZ` | Localização Z do jogador | O alvo deve ser jogador |
| `$bossName` | Nome de exibição do jogador | O alvo deve ser jogador |
| `$bossX` | Localização X do Boss | ❌ |
| `$bossY` | Localização Y do Boss | ❌ |
| `$bossZ` | Localização Z do Boss | ❌ |
| `$bossLevel` | Nível do boss | ❌ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
``````yaml
        targetType: ZONE_FULL
      particles:
      - x: 0.1
        y: 0.1
        z: 0.1
        amount: 1
        speed: 0.1
        particle: FLAME
      - x: 0
        y: 0.2
        z: 0
        amount: 0
        speed: 0.5
        particle: SMOKE_NORMAL
```

<div align="center">

![elitescript_actions_particles.jpg](../../../img/wiki/elitescript_actions_particles.jpg)

</div>

When a mob gets damaged, this will spawn two sets of particles: 
<br>The first set of particles is flame particles, with a small offset on all axes. This means that there will be flames all around the edge of the zone.
<br>The second set of particles is smoke particles. Since the amount is 0, the XYZ represents the velocity. This will make a single smoke particle move upwards fast.

</div>

</details>

</div>

---

### TELEPORT

Teleports the entity to the target location.

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: TELEPORT
      Target:
        targetType: NEARBY_PLAYERS
        range: 20
```

Will teleport the boss to the location of a player within 20 blocks.

</div>

</details>

</div>

---

### TELEPORT_RANDOM

Teleports the entity to a random location in a region, with a center and a radius.

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `radius` |                        Teleport radius                         | ✅ |

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: TELEPORT_RANDOM
      Target:
        targetType: SELF
      radius: 10
```

Will teleport the boss to a random location with a radius of 10 blocks from the boss's current location.

</div>

</details>

</div>

---

### TIMER

This action allows you to create a custom timer within your script. This action only works in scripts that have repeatEvery.

| Values | Details | Mandatory |
| --- | :-: | :-: |
| `timer` | The timer name | ✅ |
| `iValue` | The amount of time that the timer lasts | ✅ |

Each time the timer action is called, it will add the value of `iValue` to the timer. The action will proceed only when the timer is at a value greater than or equal to the amount set in `iValue` and then reset to 0.

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: TIMER
      timer: ExampleTimer
      iValue: 100
    - action: MESSAGE
      Target:
          targetType: NEARBY_PLAYERS
          range: 10
      sValue: "&2Timer has reset!"
    repeatEvery: 20
```

The boss will run this entire script every 20 ticks. The timer action will add 100 to the `ExampleTimer` every time it gets called. The message action will only run when the value of `ExampleTimer` is greater than 100 and reset to 0. This means that this message will run once every 100 ticks (5 seconds).

</div>

</details>

</div>

---

### GIVE_EFFECT

Give the player a custom effect that is specific to the EliteMobs plugin. This effect is what we will see in the player's buffs/debuffs menu.

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                            Effect name                         | ✅ |
| `duration` |                        Effect duration                        | ✅ |
| `bValue` |                    Set if the effect is a buff.                    | ✅ |

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: GIVE_EFFECT
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "ExampleBuff"
      bValue: true
      duration: 100
```

When hit, the boss will add a buff called ExampleBuff to all nearby players for 5 seconds.

</div>

</details>

</div>

#### Effects

To make the effect that you give to the player to show up in game, you need to add an entry under the `effects` section in the config.yml file. Here is an example:

```yaml
effects:
  ExampleBuff:
    icon: "GOLDEN_APPLE"
    displayName: "&aExample Buff"
    lore:
    - "&7This is a buff that"
    - "&7was applied by a boss!"
```

---

### REMOVE_EFFECT

Removes a custom effect specific to the EliteMobs plugin. This effect is what we will see in the player's buffs/debuffs menu.

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                         Effect name                         | ✅ |

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: REMOVE_EFFECT
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "ExampleBuff"
```

When hit, the boss will remove the effect called ExampleBuff to all nearby players.

</div>

</details>

</div>

---

### ADD_TAG

Adds a tag to the specified target. 

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                           The tag name                            | ✅ |
| `duration` |                Duration of the tag in ticks                | ❌ |

Tags can then be used to set conditions that change how other effects work.

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: ADD_TAG
      Target:
        targetType: DIRECT_TARGET
      sValue: "CoolPlayer"
      duration: 200
```

When a player hits a boss, the player gets the tag `CoolPlayer` for 10 seconds (200 ticks).

</div>

</details>

</div>

---

### REMOVE_TAG

Removes a tag from a target.

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                           The tag name                            | ✅ |

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: REMOVE_TAG
      Target:
        targetType: DIRECT_TARGET
      sValue: "CoolPlayer"
```

When a player hits a boss, the player gets the tag `CoolPlayer` removed from them.

</div>

</details>

</div>

---

### SET_BOSS_LEVEL
Sets the boss level of an entity.

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `iValue` |                         Sets level value                          | ✅ |

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_BOSS_LEVEL
      Target:
        targetType: SELF
      iValue: 25
```

When hit, the boss will set its level to 25.

</div>

</details>

</div>

---
### MATERIAL

The material section determines the type of block used for the action. Here is a list of common block materials you can use:

- `AIR`
- `STONE`
- `DIRT`
- `GRASS_BLOCK`
- `COBBLESTONE`
- `SAND`
- `GRAVEL`
- `GOLD_BLOCK`
- `IRON_BLOCK`
- `OAK_LOG`
- `SPRUCE_LOG`
- `BIRCH_LOG`
- `JUNGLE_LOG`
- `ACACIA_LOG`
- `DARK_OAK_LOG`
- `GLASS`
- `BLACK_STAINED_GLASS`
- `BLUE_STAINED_GLASS`
- `BROWN_STAINED_GLASS`
- `CYAN_STAINED_GLASS`
- `GRAY_STAINED_GLASS`
- `GREEN_STAINED_GLASS`
- `LIGHT_BLUE_STAINED_GLASS`
- `LIGHT_GRAY_STAINED_GLASS`
- `LIME_STAINED_GLASS`
- `MAGENTA_STAINED_GLASS`
- `ORANGE_STAINED_GLASS`
- `PINK_STAINED_GLASS`
- `PURPLE_STAINED_GLASS`
- `RED_STAINED_GLASS`
- `WHITE_STAINED_GLASS`
- `YELLOW_STAINED_GLASS`
- `WATER`
- `LAVA`
- `SNOW`
- `ICE`
- `PACKED_ICE`
- `BLUE_ICE`
- `OBSIDIAN`
- `CRYING_OBSIDIAN`
- `BARRIER`
- `REDSTONE_BLOCK`
- `DIAMOND_BLOCK`
- `EMERALD_BLOCK`
- `LAPIS_BLOCK`
- `NETHERITE_BLOCK`
- `PRISMARINE`
- `DARK_PRISMARINE`
- `PRISMARINE_BRICKS`
- `RED_SAND`
- `TERRACOTTA`
- `WHITE_TERRACOTTA`
- `ORANGE_TERRACOTTA`
- `MAGENTA_TERRACOTTA`
- `LIGHT_BLUE_TERRACOTTA`
- `YELLOW_TERRACOTTA`
- `LIME_TERRACOTTA`
- `PINK_TERRACOTTA`
- `GRAY_TERRACOTTA`
- `LIGHT_GRAY_TERRACOTTA`
- `CYAN_TERRACOTTA`
- `PURPLE_TERRACOTTA`
- `BLUE_TERRACOTTA`
- `BROWN_TERRACOTTA`
- `GREEN_TERRACOTTA`
- `BLACK_TERRACOTTA`
- `ANDESITE`
- `DIORITE`
- `GRANITE`
- `DEEPSLATE`
- `CALCITE`
- `TUFF`
- `DRIPSTONE_BLOCK`
- `MUD`
- `MANGROVE_LOG`
- `CHERRY_LOG`
- `BAMBOO_BLOCK`

[Click here for a full list of materials](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)

---
### COLOR_CODES

Minecraft uses a system for color codes to color text. You can use these in any action that has text (message, boss bar message, action bar message, etc.).

| Code | Color |
| --- | --- |
| &0 | Black |
| &1 | Dark Blue |
| &2 | Dark Green |
| &3 | Dark Aqua |
| &4 | Dark Red |
| &5 | Dark Purple |
| &6 | Gold |
| &7 | Gray |
| &8 | Dark Gray |
| &9 | Blue |
| &a | Green |
| &b | Aqua |
| &c | Red |
| &d | Light Purple |
| &e | Yellow |
| &f | White |
| &k | Obfuscated |
| &l | Bold |
| &m | Strikethrough |
| &n | Underline |
| &o | Italic |
| &r | Reset |

<div align="center">

![elitescript_actions_colorcodes.png](../../../img/wiki/elitescript_actions_colorcodes.png)

</div>
```yaml
    - action: POTION_EFFECT
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      potionEffectType: SLOW
      amplifier: 2
      duration: 60
```

Here, we added a `POTION_EFFECT` to the `Actions` section. Now when a mob gets hit, both the message and the potion effect will happen. This is how you can make complex boss powers by combining many different actions together.

---
### CONDITIONAL ACTIONS

Sometimes you might want an action to only happen under certain conditions. In this case, you can add a conditions entry to an action. This conditions entry accepts two options:

- hasTag: will only trigger if the target has one of the defined tags
- notTag: will only trigger if the target does not have one of the defined tags

You must combine conditions together by defining `hasTag` and `notTag` as a list.

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MESSAGE
      Target:
          targetType: NEARBY_PLAYERS
          range: 10
      sValue: "&cYou are a very cool player!"
      Conditions:
        hasTags:
        - "CoolPlayer"
    - action: MESSAGE
      Target:
          targetType: NEARBY_PLAYERS
          range: 10
      sValue: "&4You are not so cool!"
      Conditions:
        notTags:
        - "CoolPlayer"
```

This will make it so that if you have a "CoolPlayer" tag, when you hit the boss you will get the message "&cYou are a very cool player!". If you don't have the "CoolPlayer" tag, then you will get the message "&4You are not so cool!".

</div>

</details>

</div>
