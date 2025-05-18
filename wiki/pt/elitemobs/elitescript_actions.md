```markdown
# Ações de Elite Script

As Ações estão no centro do script. Estas determinam o que o script faz e permitem definir intervalos personalizados.

As Ações começam sempre com o tipo de ação que vai realizar. Diferentes tipos de ação servem diferentes funções. Além disso, todas as ações têm um alvo ou alvos. As Ações também podem ter um temporizador de espera (wait), para garantir que as coisas acontecem com atrasos personalizáveis. Finalmente, as ações também podem ter vários outros campos específicos ao tipo de ação.

## Atributos partilhados

| Valores             |                                                                                 Detalhes                                                                                  | Especial |
|--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`           |                                                      [Mais informações aqui]($language$/elitemobs/elitescript_targets.md)                                                       | ❌ |
| `wait`             |                                                      Define a quantidade de tempo a esperar (ticks) antes de executar as ações                                                      | ❌ |
| `repeatEvery`      |        Define que as ações se repetem a cada quantidade definida de ticks. Qualquer script que tenha isto definido mas não esteja a usar times será terminado aquando da morte do mob para evitar lag. Pode aleatorizar este valor usando `~` exemplo: `1~5`.         | ❌ |
| `times`            |                                                            Define a quantidade de vezes que uma ação ocorrerá. Pode aleatorizar este valor usando `~` exemplo: `1~5`.                                                            | Requer `repeatEvery` |
| `scripts`          |                                                         Define os scripts que serão executados no final da ação                                                          | ❌ |
| `onlyRunOneScript` |                                                       Escolhe um dos `scripts` aleatoriamente e executa apenas esse.                                                       | ❌ |
| `offset`           | Esta opção fica sob `Target`. Permite deslocar a localização do alvo. O deslocamento (offset) não funciona com ações que visam zonas com `ZONE_FULL` ou `ZONE_BORDER`. | ❌ |
| `debug`           | Esta opção fica sob a secção de ação do script. Quando definido como true, exibirá ícones de barreira na área onde a ação está. | ❌ |

## Tipos de Ação

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
      sValue: "&2Hello World!"
```

<div align="center">

![elitescript_actions_actionbar.jpg](../../../img/wiki/elitescript_actions_actionbar.jpg)

</div>

Definirá a barra de ação para dizer Hello World a quaisquer jogadores que estejam a 10 blocos do boss.

</div>

</details>

</div>

---

### BOSS_BAR_MESSAGE

Adiciona uma barra de boss aos alvos.

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
      sValue: "&2Hello World!"
```

<div align="center">

![elitescript_actions_bossbar.jpg](../../../img/wiki/elitescript_actions_bossbar.jpg)

</div>

Definirá uma barra de boss a dizer Hello World a quaisquer jogadores que estejam a 10 blocos do boss durante 1 segundo.

</div>

</details>

</div>

---

### DAMAGE

É assim que pode causar dano a entidades como outras entidades.

_Nota: isto usa nativamente o sistema de dano do EliteMobs! Isto significa que verá a redução normal de armadura de elite dos ataques. Mais sobre isto na secção de multiplicadores._

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

Define o dano para ser metade da quantidade de dano base que o boss causaria ao jogador, tendo em conta as reduções de dano.

</div>

</details>

</div>

#### multiplier

Define o multiplicador de dano do boss para o efeito.

**Importante**: para que os poderes escalem fácil e automaticamente, o dano é aplicado fazendo com que o boss acerte no jogador uma vez e multiplicando o dano base do boss pelo multiplicador.

Isto significa que um multiplicador de 1.0 é o mesmo que um ataque normal do boss. 2.0 é um ataque 2x mais forte que o normal, e 0.5 é 50% menos forte.

---

### MAKE_INVULNERABLE

Torna um alvo invulnerável.

| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `invulnerable` |               Define se o boss é invulnerável                | ✅ |
| `duration` |       Define a duração da invulnerabilidade (ticks)        | ❌ |

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

Torna um boss invulnerável durante 60 ticks (3 segundos).

</div>

</details>

</div>

---

### MODIFY_DAMAGE

Modifica o dano causado a um boss ou causado a jogadores por esse boss. Esta é uma ação especial com alguns requisitos especiais.

| Valores | Detalhes | Obrigatório |
| --- | :-: | :-: |
| `multiplier` | Multiplicador de dano. | ✅ |

Esta ação é especial e deve estar num script que tenha um listener de evento para um evento de dano. Os seguintes são eventos de dano válidos: `EliteMobDamagedByEliteMobEvent`, `EliteMobDamagedByPlayerEvent`, `EliteMobDamagedEvent` para eventos que reduzem o dano causado ao boss e `PlayerDamagedByEliteMobEvent` para eventos que reduzem o dano causado aos jogadores.

É altamente recomendado que aprenda como a condição `hasTag` funciona para usar esta ação da melhor forma. Quando usada corretamente, é possível fazer com que o boss resista temporariamente ou seja mais fraco a dano, e isto pode ser associado a buffs de jogador, localização do boss ou muitos outros fatores.

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

Aumenta o dano causado ao boss pelos jogadores em 2x, mas apenas se o jogador tiver uma tag chamada "CoolPlayer"

</div>

</details>

</div>

---

### MESSAGE

Envia uma mensagem aos alvos.

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
      sValue: "&2Hello World!"
```

<div align="center">

![elitescript_actions_message.jpg](../../../img/wiki/elitescript_actions_message.jpg)

</div>

Enviará uma mensagem de chat a todos os jogadores a 10 blocos do boss.

</div>

</details>

</div>

---

### NAVIGATE

Faz com que o boss navegue (ande) até ao alvo especificado.

| Valores |                            Detalhes                            | Obrigatório | Especial |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `FinalTarget` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `velocity` | Define a velocidade de navegação do boss. `1.0` sendo o valor do boss conforme definido na configuração. | ❌ | ❌ |
| `bValue` | Define se o boss deve ser teletransportado à força para o `FinalTarget` caso a navegação falhe. | ❌ | ❌ |
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

Fará com que o boss navegue até ao local onde o jogador estava quando atingiu o boss.

</div>

</details>

</div>

---

### PLACE_BLOCK

Coloca um bloco na(s) localização(ões) alvo durante a duração.

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

Coloca uma cúpula de vidro à volta do boss que durará 6 segundos.

_Nota: Se nenhuma duração for definida, a colocação do bloco é permanente._

</div>

</details>

</div>

---

### PLAY_ANIMATION

Reproduz a animação especificada para um Modelo Personalizado usando o Model Engine. Requer o Model Engine e um Modelo Personalizado válido no alvo que executa a animação.

| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                Define o nome da animação                 | ✅ |

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

Define o boss para reproduzir a animação fortnite_dance. Requer que o servidor tenha o Model Engine, que o boss tenha um disfarce personalizado e que o disfarce personalizado tenha uma animação chamada "fortnite_dance".

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
| `pitch`  |           Define o pitch do som a ser reproduzido            |     ❌     |
| `volume` |           Define o volume do som a ser reproduzido           |     ❌     |

[Aqui está uma lista útil de todos os sons do Minecraft!](https://www.digminecraft.com/lists/sound_list_pc.php) Lembre-se que isto também pode reproduzir sons personalizados de resource packs.
Quando a ação está a visar uma zona, a ação reproduzirá um som para cada bloco nessa zona. Isto pode tornar o som consideravelmente mais alto do que o normal, por isso considere diminuir o volume se estiver a visar uma zona.

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

Reproduz o som de ressonância dos sinos do Minecraft na localização do boss

</div>

</details>

</div>

---

### POTION_EFFECT

Aplica um efeito de poção específico aos alvos.

| Valores |                                                       Detalhes                                                       | Obrigatório |
| --- |:-------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                            [Mais informações aqui]($language$/elitemobs/elitescript_targets.md)                            | ✅ |
| `potionEffectType` | Tipo de efeito, [lista válida está aqui](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) | ✅ |
| `amplifier` |                                          Nível do efeito de poção (começa em 0)                                          | ✅ |
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

Isto fará com que quaisquer jogadores a 10 blocos do boss levitem durante 2 segundos (40 ticks).

</div>

</details>

</div>

---

### PUSH

Empurra um alvo por um vetor definido.

| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `vValue` |       Define o vetor da velocidade que será aplicada        | ✅ |

*Nota: Esta ação também aceita vetores relativos. Saiba mais sobre como usá-los [aqui]($language$/elitemobs/elitescript_relative_vectors.md).*

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

Isto empurrará todos os jogadores a 10 blocos do boss para o ar usando uma força de 0.3. Esta ação será repetida 10 vezes a cada 0.5 segundos (10 ticks). Por outras palavras, isto fará com que este efeito dure 5 segundos (10 vezes x 10 ticks = 100 ticks).

Isto fará com que pareça que os jogadores estão a saltar.

</div>

</details>

</div>

#### vector

Vetores são definidos por `vValue: x,y,z`. Como exemplo, se quiser que o alvo seja empurrado para cima, pode fazer `vValue: 0,0.3,0`.

---

### RUN_COMMAND_AS_CONSOLE

Executa um comando como consola.

| Valores |                             Detalhes                             | Obrigatório |
| --- |:---------------------------------------------------------------:| :-: |
| `Target` |  [Mais informações aqui]($language$/elitemobs/elitescript_targets.md)  | ✅ |
| `sValue` |                    Comando que será executado                     | ✅ |

**Nota: existem placeholders disponíveis! Verifique RUN_COMMAND_AS_PLAYER, são os mesmos**

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
      sValue: say Hello $bossName my name is $playerName. What is your level? $bossName my level is $bossLevel.
```

<div align="center">

![elitescript_actions_commandconsole.jpg](../../../img/wiki/elitescript_actions_commandconsole.jpg)

</div>

Faz com que a consola transmita a mensagem "Hello $bossName my name is $playerName. What is your level? $bossName my level is $bossLevel"

</div>

</details>

</div>

---

### RUN_COMMAND_AS_PLAYER

Executa um comando como um jogador. Requer que o alvo sejam jogadores.

| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                   Comando que será executado                    | ✅ |
```Okay, I can do that. Please tell me which language you'd like me to translate the text into.Please specify the target language for the translation. I see placeholders like `$language$` in the text, which I need to replace with the correct language code or name.