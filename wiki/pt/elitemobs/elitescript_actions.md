# Ações de Script de Elite

As ações são o núcleo do script. Elas determinam o que o script faz e permitem definir intervalos personalizados.

As ações sempre começam com o tipo de ação que você vai realizar. Diferentes tipos de ação servem a diferentes funções. Além disso, todas as ações têm um ou mais alvos. As ações também podem ter um temporizador de espera, para garantir que as coisas aconteçam com atrasos personalizáveis. Por fim, as ações também podem ter vários outros campos específicos do tipo de ação.

## Atributos Compartilhados

| Valores             |                                                                                 Detalhes                                                                                  | Especial |
|--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`           |                                                      [Mais informações aqui]($language$/elitemobs/elitescript_targets.md)                                                       | ❌ |
| `wait`             |                                                 Define a quantidade de tempo para aguardar (ticks) antes de executar ações                                                  | ❌ |
| `repeatEvery`      |         Define as ações para repetirem a cada quantidade definida de ticks. Qualquer script que tenha isto definido, mas não esteja usando tempos, será encerrado após a morte da máfia para evitar lag.         | ❌ |
| `times`            |                                                             Define a quantidade de vezes que uma ação acontecerá                                                             | Requer `repeatEvery` |
| `scripts`          |                                                       Define os scripts que serão executados no final da ação                                                        | ❌ |
| `onlyRunOneScript` |                                                     Escolhe um dos `scripts` aleatoriamente e executa apenas esse.                                                      | ❌ |
| `offset`           | Esta opção fica em `Target`. Permite deslocar a localização do alvo. O deslocamento não funciona com ações que estão a visar zonas com `ZONE_FULL` ou `ZONE_BORDER`. | ❌ |

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
  Exemplo:
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

Adiciona uma bossbar ao(s) alvo(s).

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
  Exemplo:
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

_Nota: isto usa nativamente o sistema de danos do EliteMobs! Isto significa que verá a redução normal de armadura de elite dos golpes. Mais sobre isto na secção de multiplicadores._

| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `multiplier` |                       Multiplicador de Dano                       | ✅ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: DAMAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      multiplier: 0.5
```

Define o dano como metade da quantidade de dano base que o boss infligiria ao jogador, levando em consideração as reduções de dano.

</div>

</details>

</div>

#### multiplier

Define o multiplicador de dano do boss para o efeito.

**Importante**: para fazer os poderes escalarem de forma fácil e automática, o dano é aplicado fazendo com que o boss atinja o jogador uma vez e multiplicando o dano base do boss pelo multiplicador.

Isto significa que um multiplicador de 1,0 é o mesmo que um golpe normal do boss. 2,0 é um golpe 2x mais forte do que o normal, e 0,5 é 50% mais difícil.

---

### MAKE_INVULNERABLE

Torna um alvo invulnerável.

| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `invulnerable` |               Define se o boss é invulnerável                | ✅ |
| `duration` |       Define a duração da invulnerabilidade (ticks)       | ❌ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MAKE_INVULNERABLE
      Target:
        targetType: SELF
      duration: 60
```

Torna um boss invulnerável durante 60 ticks (3 segundos).

</div>

</details>

</div>

---

### MODIFY_DAMAGE

Modifica o dano infligido a um boss ou infligido a jogadores por esse boss. Esta é uma ação especial com alguns requisitos especiais.

| Valores | Detalhes | Obrigatório |
| --- | :-: | :-: |
| `multiplier` | Multiplicador de dano. | ✅ |

Esta ação é especial e deve estar num script que tenha um ouvinte de eventos para um evento de dano. Os seguintes são eventos de dano válidos: `EliteMobDamagedByEliteMobEvent`, `EliteMobDamagedByPlayerEvent`, `EliteMobDamagedEvent` para eventos que reduzem o dano infligido ao boss e `PlayerDamagedByEliteMobEvent` para eventos que reduzem o dano infligido aos jogadores.

É altamente recomendável que aprenda como a condição `hasTag` funciona para melhor usar esta ação. Quando usada corretamente, é possível fazer com que o boss resista temporariamente ou seja mais fraco a danos, e isto pode estar associado a buffs do jogador, localização do boss ou muitos outros fatores.

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
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

Aumenta o dano infligido ao boss pelos jogadores em 2x, mas apenas se o jogador tiver uma etiqueta chamada "CoolPlayer"

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
  Exemplo:
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

Enviará uma mensagem de chat para todos os jogadores a 10 blocos do boss.

</div>

</details>

</div>

---

### NAVIGATE

Faz o boss navegar (andar) até ao alvo especificado.

| Valores |                            Detalhes                            | Obrigatório | Especial |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `FinalTarget` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `velocity` | Define a velocidade de navegação do boss. `1.0` sendo o valor do boss definido na configuração. | ❌ | ❌ |
| `bValue` | Define se o boss deve ser teletransportado à força para o `FinalTarget` se a navegação falhar. | ❌ | ❌ |
| `duration` | Por quanto tempo o boss deve tentar navegar antes de desistir. Definir em ticks. O padrão é 100 ticks. | ✅ | ❌ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
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

Fará o boss navegar até ao local onde o jogador estava quando atingiu o boss.

</div>

</details>

</div>

---

### PLACE_BLOCK

Coloca um bloco no(s) local(is) de destino durante o tempo definido.

| Valores |                                                         Detalhes                                                         | Obrigatório |
| --- |:-----------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                              [Mais informações aqui]($language$/elitemobs/elitescript_targets.md)                              | ✅ |
| `material` | [Material](#material) do bloco, [lista completa aqui](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | ✅ |
| `duration` |                                            Duração do efeito, em ticks                                             | ❌ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
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

Coloca uma cúpula de vidro ao redor do boss que durará 6 segundos.

_Nota: Se nenhuma duração for definida, a colocação do bloco é permanente._

</div>

</details>

</div>

---

### PLAY_ANIMATION

Reproduz a animação especificada para um Modelo Personalizado usando o Model Engine. Requer o Model Engine e um Modelo Personalizado válido para estar no alvo que executa a animação.

| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |               Define o nome da animação                | ✅ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PLAY_ANIMATION
      Target:
        targetType: SELF
      sValue: "fortnite_dance"
```

Define o boss para reproduzir a animação fortnite_dance. Requer que o servidor tenha o Model Engine, que o boss tenha um disfarce personalizado e que o disfarce personalizado tenha uma animação chamada "fortnite\_dance".

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
| `pitch`  |           Define o tom do som a ser reproduzido            |     ❌     |
| `volume` |           Define o volume do som a ser reproduzido            |     ❌     |

[Aqui está uma lista útil de todos os sons do Minecraft!](https://www.digminecraft.com/lists/sound_list_pc.php) Lembre-se que isto também pode reproduzir sons personalizados de pacotes de recursos.
Quando a ação visa uma zona, a ação reproduzirá um som para cada bloco nessa zona. Isto pode tornar o som consideravelmente mais alto do que o normal, por isso considere diminuir o volume se estiver a visar uma zona.

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
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

Aplica um efeito de poção específico ao(s) alvo(s).

| Valores |                                                       Detalhes                                                       | Obrigatório |
| --- |:-------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                            [Mais informações aqui]($language$/elitemobs/elitescript_targets.md)                            | ✅ |
| `potionEffectType` | Tipo de efeito, [lista válida aqui](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) | ✅ |
| `amplifier` |                                          Nível do efeito de poção (começa em 0)                                          | ✅ |
| `duration` |                                           Duração do efeito (ticks)                                            | ✅ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
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
  Exemplo:
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

Isto empurrará todos os jogadores a 10 blocos do boss para o ar usando uma força de 0,3. Esta ação será repetida 10 vezes a cada 0,5 segundos (10 ticks). Por outras palavras, isso fará com que este efeito dure 5 segundos (10 vezes x 10 ticks = 100 ticks).

Isto fará parecer que os jogadores estão a saltar.

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
| `sValue` |                    Comando que será executado                    | ✅ |

**Nota: existem espaços reservados disponíveis! Verifique RUN_COMMAND_AS_PLAYER, são os mesmos**

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
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

Faz a consola transmitir a mensagem "Hello $bossName my name is $playerName. What is your level? $bossName my level is $bossLevel"

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
| `sValue` |                    Comando que será executado                     | ✅ |

**Nota: RUN_COMMAND_AS_PLAYER e RUN_COMMAND_AS_CONSOLE usam os seguintes espaços reservados:**

| Espaço Reservado | Detalhes | Especial |
| --- | :-: | :-: |
| `$playerName` | Nome de exibição do jogador | O alvo deve ser um jogador |
| `$playerX` | Localização X do jogador | O alvo deve ser um jogador |
| `$playerY` | Localização Y do jogador | O alvo deve ser um jogador |
| `$playerZ` | Localização Z do jogador | O alvo deve ser um jogador |
| `$bossName` | Nome de exibição do jogador | O alvo deve ser um jogador |
| `$bossX` | Localização X do boss | ❌ |
| `$bossY` | Localização Y do boss | ❌ |
| `$bossZ` | Localização Z do boss | ❌ |
| `$bossLevel` | Nível do Boss | ❌ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: RUN_COMMAND_AS_PLAYER
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: say Hello $bossName my name is $playerName.
```

<div align="center">

![elitescript_actions_commandplayer.jpg](../../../img/wiki/elitescript_actions_commandplayer.jpg)

</div>

Faz o jogador executar o comando say com Hello $bossName my name is $playerName., o que significa que eles apenas dizem "Hello $bossName my name is $playerName."

</div>

</details>

</div>

---

### RUN_SCRIPT

Isto simplesmente executa os scripts definidos em `scripts`. Qualquer ação pode fazer isto, esta ação existe apenas como uma ação de conveniência para quando quiser apenas fazer isso.

| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `scripts` |                   Scripts que serão executados                    | ✅ |
| `onlyRunOneScript` |         Executar apenas um script da lista.            | ❌ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: RUN_SCRIPT
      onlyRunOneScript: false
      scripts:
      - Exemplo1
      - Exemplo2
  Exemplo1:
    Actions:
    - action: DAMAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      multiplier: 0.5
  Exemplo2:
    Actions:
    - action: MESSAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&cCool boss!: &fGotcha back!"
```

<div align="center">

![elitescript_actions_runscript.jpg](../../../img/wiki/elitescript_actions_runscript.jpg)

</div>

Quando uma elite é danificada, executa RUN_SCRIPT, que executa os scripts Exemplo1 e Exemplo2.

O script Exemplo1 irá causar dano a todos os jogadores a 10 blocos do boss.
<br>O script Exemplo2 enviará uma mensagem a todos os jogadores a 10 blocos do boss com a mensagem "&cCool boss!: &fGotcha back!".

</div>

</details>

</div>

---

### SET_MOB_AI

Define se a máfia tem IA. No Minecraft, máfias sem IA não se movem nem atacam. Elas ainda podem ser danificadas, mas danificá-las não resultará em serem repelidas.

| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `bValue` |               Define se o boss tem IA                 | ✅ |
| `duration` |               Define o valor definido (ticks)               | ❌ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_MOB_AI
      Target:
        targetType: SELF
      bValue: false
      duration: 40
```

Define o boss para não ter IA durante 2 segundos (40 ticks).

</div>

</details>

</div>

---

### SET_MOB_AWARE

Define se a máfia está ciente. No Minecraft, máfias que não estão cientes não se movem para novos locais nem atacam. Elas ainda podem ser danificadas e serão repelidas.

Como nota, se a máfia já se estava a mover para um local quando perdeu a consciência, ela terminará de ir para esse local antes de parar completamente e não se mover mais.

Isto significa que pode usar máfias inconscientes para se moverem para locais definidos, ao contrário de máfias sem IA.

| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `bValue` |                   Define se está ciente                    | ✅ |
| `duration` |               Define o valor definido (ticks)               | ❌ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_MOB_AWARE
      Target:
        targetType: SELF
      bValue: false
      duration: 40
```

Define o boss para não ter consciência durante 2 segundos (40 ticks).

</div>

</details>

</div>

---

### SET_ON_FIRE

Incendeia uma entidade durante a duração.

| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `duration` |                Duração do efeito, em ticks                 | ✅ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_ON_FIRE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      duration: 60
```

<div align="center">

![elitescript_actions_setonfire.jpg](../../../img/wiki/elitescript_actions_setonfire.jpg)

</div>

Incendeia todos os jogadores a 10 blocos do boss durante 3 segundos (60 ticks).

</div>

</details>

</div>

---

### SET_TIME

Define a hora do jogo do mundo em que o alvo está.

| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `time` |                         Define o tempo                          | ✅ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_TIME
      Target:
        targetType: SELF
      time: 10000
```

<div align="center">

![elitescript_actions_settime.gif](../../../img/wiki/elitescript_actions_settime.gif)

</div>

Quando atingido, o boss definirá o tempo do mundo em que o boss está para 10000 ticks.

</div>

</details>

</div>

---

### SET_WEATHER

Define o clima do mundo em que o alvo está por um determinado período de tempo.

| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `weather` |                     Define o tipo de clima                     | ✅ |
| `duration` |          Define a duração do padrão climático           | ✅ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: PRECIPITATION
      duration: 120
```

<div align="center">

![elitescript_actions_setweather.gif](../../../img/wiki/elitescript_actions_setweather.gif)

</div>

Define o clima do mundo em que o boss está como chuva/neve para o próximo minuto.

*Nota: O efeito demorará algum tempo a ser acionado.*

</div>

</details>

</div>

#### weather

Os seguintes são padrões climáticos válidos:

- `CLEAR` - Define o clima como limpo
- `PRECIPITATION` - Define o clima como chuva / neve, dependendo do bioma, altura do local e outras considerações do Minecraft vanilla.
- `THUNDER` - Define o clima como tempestade

---

### SPAWN_FIREWORKS

Gera fogos de artifício.

| Valores |                                                                                                            Detalhes                                                                                                             | Obrigatório |
| --- |:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                                                                                 [Mais informações aqui]($language$/elitemobs/elitescript_targets.md)                                                                                 | ✅ |
| `vValue` |                                                                                          Define a velocidade do foguete de fogo de artifício                                                                                           | ✅ |
| `flicker` |                                                                                         Define se as partículas de fogo de artifício piscarão                                                                                         | ❌ |
| `withTrail` |                                                                                         Define se o foguete de fogo de artifício deixará um rasto                                                                                         | ❌ |
| `power` |                                                                                                Define o poder dos fogos de artifício                                                                                                | ❌ |
| `fireworkEffects` |                                                                     Define os efeitos dos fogos de artifício, relacionado ao tempo que levará para explodir                                                                      | ✅ |
| `fireworkEffectType` |                                                  Define a forma do fogo de artifício [desta lista](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html)                                                  | ❌ |
| `fireworkEffectTypes` | Define as formas do fogo de artifício [desta lista](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html). Esta é uma lista de formas - se quiser uma lista de formas, não use `fireworkEffectType`! [1] | ❌ |

[1] Ao usar várias formas para os fogos de artifício, cada forma usará as cores da lista de cores na mesma posição. Verifique o exemplo abaixo.

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  fireworkShot1:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SPAWN_FIREWORKS
      Target:
        targetType: SELF
        offset: 1,1.5,0
      vValue: .5,-.35,1
      flicker: false
      withTrail: false
      power: 2
      fireworkEffects:
      - [ORANGE, RED]
      - [YELLOW, BLUE]
      fireworkEffectTypes:
      - BALL_LARGE
      - STAR
```

<div align="center">

![elitescript_actions_fireworks.jpg](../../../img/wiki/elitescript_actions_fireworks.jpg)

</div>

Gera fogos de artifício na localização do boss deslocada por x= 1, y= 1,5 e z = 0. Dá aos fogos de artifício uma velocidade de x=.5, y=-.35 e z=1. Os fogos de artifício não piscarão nem terão rastros; a potência é definida para 2, então a explosão dos fogos de artifício será atrasada por essa quantidade.

Finalmente, existem duas listas de listas de cores: a lista 1 é laranja e vermelho e a lista 2 é amarelo e azul. Existem duas formas para os fogos de artifício: BALL\_LARGE e STAR. Isso significa que BALL\_LARGE (elemento 1) usará cores laranja e vermelho (lista 1) e STAR (elemento 2) usará cores amarelo e azul (lista 2).

</div>

</details>

</div>

#### fireworkEffects

Estes são os efeitos que o foguete de fogo de artifício mostrará. É necessário pelo menos um efeito. Os seguintes efeitos são válidos:

- WHITE, SILVER, GRAY, BLACK, RED, MAROON, YELLOW, OLIVE, LIME, GREEN,<div align="center">

![elitescript_actions_commandplayer.jpg](../../../img/wiki/elitescript_actions_commandplayer.jpg)

</div>

Faz o jogador executar o comando say com Hello $bossName my name is $playerName., o que significa que ele apenas diz "Hello $bossName my name is $playerName."

</div>

</details>

</div>

---

### RUN_SCRIPT

Isto simplesmente executa os scripts definidos em `scripts`. Qualquer ação pode fazer isto, esta ação existe apenas como uma ação de conveniência para quando quiser apenas fazer isso.

| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `scripts` |                   Scripts que serão executados                    | ✅ |
| `onlyRunOneScript` |         Executar apenas um script da lista.            | ❌ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: RUN_SCRIPT
      onlyRunOneScript: false
      scripts:
      - Exemplo1
      - Exemplo2
  Exemplo1:
    Actions:
    - action: DAMAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      multiplier: 0.5
  Exemplo2:
    Actions:
    - action: MESSAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&cCool boss!: &fGotcha back!"
```

<div align="center">

![elitescript_actions_runscript.jpg](../../../img/wiki/elitescript_actions_runscript.jpg)

</div>

Quando uma elite é danificada, executa RUN_SCRIPT, que executa os scripts Exemplo1 e Exemplo2.

O script Exemplo1 irá causar dano a todos os jogadores a 10 blocos do boss.
<br>O script Exemplo2 enviará uma mensagem a todos os jogadores a 10 blocos do boss com a mensagem "&cCool boss!: &fGotcha back!".

</div>

</details>

</div>

---

### SET_MOB_AI

Define se a máfia tem IA. No Minecraft, máfias sem IA não se movem nem atacam. Elas ainda podem ser danificadas, mas danificá-las não resultará em serem repelidas.

| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `bValue` |               Define se o boss tem IA                 | ✅ |
| `duration` |               Define o do valor definido (ticks)               | ❌ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_MOB_AI
      Target:
        targetType: SELF
      bValue: false
      duration: 40
```

Define o boss para não ter IA durante 2 segundos (40 ticks).

</div>

</details>

</div>

---

### SET_MOB_AWARE

Define se a máfia está ciente. No Minecraft, máfias que não estão cientes não se movem para novos locais nem atacam. Elas ainda podem ser danificadas e serão repelidas.

Como nota, se a máfia já se estava a mover para um local quando perdeu a consciência, ela terminará de ir para esse local antes de parar completamente e não se mover mais.

Isto significa que pode usar máfias inconscientes para se moverem para locais definidos, ao contrário de máfias sem IA.

| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `bValue` |                   Define se está ciente                    | ✅ |
| `duration` |               Define o do valor definido (ticks)               | ❌ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_MOB_AWARE
      Target:
        targetType: SELF
      bValue: false
      duration: 40
```

Define o boss para não ter consciência durante 2 segundos (40 ticks).

</div>

</details>

</div>

---

### SET_ON_FIRE

Incendeia uma entidade durante a duração.

| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `duration` |                 Duração do efeito, em ticks                 | ✅ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_ON_FIRE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      duration: 60
```

<div align="center">

![elitescript_actions_setonfire.jpg](../../../img/wiki/elitescript_actions_setonfire.jpg)

</div>

Incendeia todos os jogadores a 10 blocos do boss durante 3 segundos (60 ticks).

</div>

</details>

</div>

---

### SET_TIME

Define a hora do jogo do mundo em que o alvo está.

| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `time` |                         Define o tempo                          | ✅ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_TIME
      Target:
        targetType: SELF
      time: 10000
```

<div align="center">

![elitescript_actions_settime.gif](../../../img/wiki/elitescript_actions_settime.gif)

</div>

Quando atingido, o boss definirá o tempo do mundo em que o boss está para 10000 ticks.

</div>

</details>

</div>

---

### SET_WEATHER

Define o clima do mundo em que o alvo está por um determinado período de tempo.

| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `weather` |                     Define o tipo de clima                     | ✅ |
| `duration` |          Define a duração do padrão climático           | ✅ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: PRECIPITATION
      duration: 120
```

<div align="center">

![elitescript_actions_setweather.gif](../../../img/wiki/elitescript_actions_setweather.gif)

</div>

Define o clima do mundo em que o boss está como chuva/neve para o próximo minuto.

*Nota: O efeito demorará algum tempo a ser acionado.*

</div>

</details>

</div>

#### weather

Os seguintes são padrões climáticos válidos:

- `CLEAR` - Define o clima como limpo
- `PRECIPITATION` - Define o clima como chuva / neve, dependendo do bioma, altura do local e outras considerações do Minecraft vanilla.
- `THUNDER` - Define o clima como tempestade

---

### SPAWN_FIREWORKS

Gera fogos de artifício.

| Valores |                                                                                                            Detalhes                                                                                                             | Obrigatório |
| --- |:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                                                                                 [Mais informações aqui]($language$/elitemobs/elitescript_targets.md)                                                                                 | ✅ |
| `vValue` |                                                                                          Define a velocidade do foguete de fogo de artifício                                                                                           | ✅ |
| `flicker` |                                                                                         Define se as partículas de fogo de artifício piscarão                                                                                         | ❌ |
| `withTrail` |                                                                                         Define se o foguete de fogo de artifício deixará um rasto                                                                                         | ❌ |
| `power` |                                                                                                Define o poder dos fogos de artifício                                                                                                | ❌ |
| `fireworkEffects` |                                                                     Define os efeitos dos fogos de artifício, relacionado ao tempo que levará para explodir                                                                      | ✅ |
| `fireworkEffectType` |                                                  Define a forma do fogo de artifício [desta lista](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html)                                                  | ❌ |
| `fireworkEffectTypes` | Define as formas do fogo de artifício [desta lista](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html). Esta é uma lista de formas - se quiser uma lista de formas, não use `fireworkEffectType`! [1] | ❌ |

[1] Ao usar várias formas para os fogos de artifício, cada forma usará as cores da lista de cores na mesma posição. Verifique o exemplo abaixo.

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  fireworkShot1:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SPAWN_FIREWORKS
      Target:
        targetType: SELF
        offset: 1,1.5,0
      vValue: .5,-.35,1
      flicker: false
      withTrail: false
      power: 2
      fireworkEffects:
      - [ORANGE, RED]
      - [YELLOW, BLUE]
      fireworkEffectTypes:
      - BALL_LARGE
      - STAR
```

<div align="center">

![elitescript_actions_fireworks.jpg](../../../img/wiki/elitescript_actions_fireworks.jpg)

</div>

Gera fogos de artifício na localização do boss deslocada por x= 1, y= 1,5 e z = 0. Dá aos fogos de artifício uma velocidade de x=.5, y=-.35 e z=1. Os fogos de artifício não piscarão nem terão rastros; a potência é definida para 2, então a explosão dos fogos de artifício será atrasada por essa quantidade.

Finalmente, existem duas listas de listas de cores: a lista 1 é laranja e vermelho e a lista 2 é amarelo e azul. Existem duas formas para os fogos de artifício: BALL\_LARGE e STAR. Isso significa que BALL\_LARGE (elemento 1) usará cores laranja e vermelho (lista 1) e STAR (elemento 2) usará cores amarelo e azul (lista 2).

</div>

</details>

</div>

#### fireworkEffects

Estes são os efeitos que o foguete de fogo de artifício mostrará. É necessário pelo menos um efeito. Os seguintes efeitos são válidos:

- WHITE, SILVER, GRAY, BLACK, RED, MAROON, YELLOW, OLIVE, LIME, GREEN, AQUA, TEAL, BLUE, NAVY, FUCHSIA, PURPLE, ORANGE

---

### STRIKE_LIGHTNING

Invoca um relâmpago. Este é um efeito visual, se quiser dano, deve adicionar uma ação de dano.

| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: STRIKE_LIGHTNING
      Target:
        targetType: SELF
      repeatEvery: 5
      times: 5
```

<div align="center">

![elitescript_actions_strike.jpg](../../../img/wiki/elitescript_actions_strike.jpg)

</div>

Invoca um relâmpago no boss a cada 5 ticks durante 5 vezes.

</div>

</details>

</div>

---

### SPAWN_FALLING_BLOCK

Gera um bloco em queda no alvo. Apenas visual, não coloca o bloco.

| Valores           |                                                                                      Detalhes                                                                                       | Obrigatório |
|------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`         |                                                           [Mais informações aqui]($language$/elitemobs/elitescript_targets.md)                                                            | ✅ |
| `material`       | Define o [Material](#material) do bloco em queda. [Verifique os tipos válidos aqui](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) e certifique-se de que são um material de bloco válido. | ✅ |
| `landingScripts` |                                                            Define a lista de scripts que serão executados quando o bloco cair                                                             | ✅ |
| `vValue`         | Define a velocidade e a direção de um bloco em queda. | ✅ |

`landingScripts` funciona da mesma forma que [`RUN_SCRIPT`]($language$/elitemobs/elitescript_actions.md&section=run_script), mas pode aceitar o tipo de alvo especial `LANDING_LOCATION`.

*Nota: Esta ação também aceita vetores relativos. Saiba mais sobre como usá-los [aqui]($language$/elitemobs/elitescript_relative_vectors.md).*

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SPAWN_FALLING_BLOCK
      Target:
        targetType: SELF
        offset: 3,10,0
      material: STONE
      vValue: 0,0,0
      landingScripts:
      - LandingScriptExample
  LandingScriptExample:
    Actions:
    - action: PLACE_BLOCK
      Target:
        targetType: LANDING_LOCATION
      duration: 200
      material: STONE
```

<div align="center">

![elitescript_actions_block.gif](../../../img/wiki/elitescript_actions_block.gif)

</div>

Quando o boss é atingido, este script gerará um bloco de pedra em queda 10 blocos acima e 3 blocos ao lado da localização do boss.

Assim que o bloco cair, ele executará o script LandingScriptExample, que colocará um bloco de pedra no local onde o bloco caiu.
O bloco permanecerá lá por 10 segundos (200 ticks) antes de desaparecer.

</div>

</details>

</div>

---

### SPAWN_PARTICLE

Gera partículas no alvo.

**Nota: Se a cobertura não for definida, a cobertura será definida como 0,3 por padrão!**

| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `particles` |           Lista as partículas que serão geradas           | ✅ |

#### particles

As partículas têm as suas próprias configurações especiais, que são as seguintes:

| Valores | Detalhes | Padrão | Especial |
| --- | :-: | :-: | :-: |
| `x` | Define o deslocamento de X | 0,01 | (1) |
| `y` | Define o deslocamento de Y | 0,01 | (1) |
| `z` | Define o deslocamento de Z | 0,01 | (1) |
| `amount` | Define a quantidade de partículas geradas | 1 | (1) |
| `speed` | Define a velocidade das partículas | 0,01 | ❌ |
| `particle` | Define o tipo de entidade | `FLAME` | [Escolha desta lista!](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) |
| `red` | Define o valor vermelho | `255` | (2) |
| `green` | Define o valor verde | `255` | (2) |
| `blue` | Define o valor azul | `255` | (2) |
| `toRed` | Define o valor vermelho final | `255` | (3) |
| `toGreen` | Define o valor verde final | `255` | (3) |
| `toBlue` | Define o valor azul final | `255` | (3) |

_(1) Se `amount` for definido como 0, `x`, `y` e `z` definirão a velocidade da partícula._

_(2) Apenas para as `particle`s `REDSTONE`, `DUST_COLOR_TRANSITION`, `SPELL_MOB` e `SPELL_MOB_AMBIENT`_

_(3) Apenas para a `particle` `DUST_COLOR_TRANSITION`_

É importante observar que um script SPAWN_PARTICLE pode gerar várias partículas. Cada partícula pode então ter os seus próprios campos de configuração dentro da ação SPAWN_PARTICLE. Aqui está um exemplo:

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: CYLINDER
      radius: 4
      borderRadius: 3
      height: 30
      Target:
        targetType: DIRECT_TARGET
      track: true
    Actions:
    - action: SPAWN_PARTICLE
      Target:
        targetType: ZONE_BORDER
      particles:
        - particle: FLAME
          speed: 0.2
        - particle: SMOKE_NORMAL
          speed: 0.1
      amount: 1
      repeatEvery: 10
```

<div align="center">

![elitescript_actions_particle.jpg](../../../img/wiki/elitescript_actions_particle.jpg)

</div>

Isto gerará um cilindro feito de partículas de fogo e fumaça ao redor do jogador que danificou o boss.

</div>

</details>

</div>

#### Mover uma partícula:

É possível definir uma velocidade específica para uma partícula, e funciona da mesma forma que a API Spigot. Isso permite que os programadores de scripts definam uma partícula para ir numa direção específica a uma velocidade específica. Não é possível fazer as partículas mudarem de direção a meio caminho. Este efeito é usado no encantamento lança-chamas e no poder do boss.

Para mover uma partícula, defina `amount: 0`. Isso sinalizará ao Minecraft que os valores `x`, `y` e `z` são, na verdade, um vetor. Este vetor define a direção para a qual a sua partícula irá.

Digamos que queira que uma partícula `FLAME` suba. Para fazer isso, precisa de um valor `y` positivo, e nada mais. Finalmente, vai querer definir a velocidade para o que quer que seja a velocidade. Aqui está um exemplo completo:

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
    - EliteMobEnterCombatEvent
    Zone:
      shape: CYLINDER
      radius: 4
      borderRadius: 3
      height: 30
      Target:
        targetType: DIRECT_TARGET
      track: true  
    Actions:
    - action: SPAWN_PARTICLE
      Target:
        targetType: ZONE_BORDER
      particles:
        - particle: FLAME
          amount: 0
          x: 0
          y: 1
          z: 0
          speed: 0.2
        - particle: SMOKE_NORMAL
          speed: 0.1
          amount: 0
          x: 0.5
          y: 1
          z: 0.5
      amount: 3  
      repeatEvery: 10
```

Isto gerará uma partícula de fogo na localização do boss que subirá.

</div>

</details>

</div>

---

### SUMMON_REINFORCEMENT

Invoca reforços de Bosses Personalizados do EliteMobs.

| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |      Define o nome do ficheiro do reforço do Boss Personalizado       | ✅ |
| `duration` |        Define a duração do reforço (ticks)         | ❌ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
    - EliteMobEnterCombatEvent
    Actions:
    - action: SUMMON_REINFORCEMENT
      Target:
        targetType: DIRECT_TARGET
      sValue: your_boss_file.yml
```

Gera o reforço com o nome do ficheiro "your_boss_file.yml" na localização do boss.

</div>

</details>

</div>

---

### SUMMON_ENTITY

| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                Define o tipo de entidade a gerar               | ✅ |

*Nota: Esta ação também aceita vetores relativos. Saiba mais sobre como usá-los [aqui]($language$/elitemobs/elitescript_relative_vectors.md).*

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
      - EliteMobEnterCombatEvent
    Actions:
      - action: SUMMON_ENTITY
        Target:
          targetType: DIRECT_TARGET
        sValue: ZOMBIE
```

Define o boss para gerar um ZOMBIE na localização do boss.

</div>

</details>

</div>


| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                Define o tipo de entidade a ser gerado               | ✅ |

*Nota: Esta ação também aceita vetores relativos. Saiba mais sobre como usá-los [aqui]($language$/elitemobs/elitescript_relative_vectors.md).*

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
      - EliteMobEnterCombatEvent
    Actions:
      - action: SUMMON_ENTITY
        Target:
          targetType: DIRECT_TARGET
        sValue: ZOMBIE
```

Define o boss para gerar um ZOMBIE na localização do boss.

</div>

</details>

</div>

---

### TAG

Adiciona tags aos bosses ou jogadores. As tags são apenas Strings, ou palavras, que os programadores de scripts podem definir. Elas são usadas apenas para executar verificações de condição e não têm um efeito direto na jogabilidade fora do que são usadas nos scripts.

| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `tags` |                         Define as tags                         | ✅ |
| `duration` |             Define a duração das tags (ticks)              | ❌ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
    - EliteMobSpawnEvent
    Actions:
    - action: TAG
      Target:
        targetType: SELF
      tags:
      - fireworks
    - action: SPAWN_FIREWORKS
      Target:
        targetType: SELF
      wait: 20  
      offset: 0,3,0
      vValue: 0,.1,0
      flicker: true
      withTrail: true
      power: 1
      fireworkEffects:
      - [ORANGE, RED]
      repeatEvery: 20
      Conditions:
        hasTags:
        - fireworks
```

Marca o boss com a string "very_sus", que pode ser verificada posteriormente através de condições de script.

**Importante:** Só é possível marcar jogador e mobs de elite.

</div>

</details>

</div>

---

### TELEPORT

Teletransporta o(s) alvo(s) para o local definido.

| Valores |                                                     Detalhes                                                     | Obrigatório |
| --- |:--------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |    Define _quem_ será teletransportado. [Informações gerais do alvo aqui!]($language$/elitemobs/elitescript_targets.md)    | ✅ |
| `FinalTarget` | Define _para onde_ eles serão teletransportados. [Informações gerais do alvo aqui!]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `location` |                                               Localização do teletransporte                                               | ✅ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: TELEPORT
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      FinalTarget:
        targetType: SELF_SPAWN
```

<div align="center">

![elitescript_actions_teleport.gif](../../../img/wiki/elitescript_actions_teleport.gif)

</div>

Isso teletransportaria todos os jogadores que estão a 10 blocos do boss para o local de spawn do boss.

</div>

</details>

</div>

#### location

Define o local para onde o jogador será teletransportado. O formato é o EliteMobs padrão `world_name,x,y,z,pitch,yaw`.

Exemplo

```yaml
location: world,0,64,0,0,0
```

Isso tem alguns valores especiais:

- Se o nome do mundo estiver definido como `same_as_boss`, ele substituirá o nome do mundo pelo nome do mundo em que o boss está atualmente:

```yaml
location: same_as_boss,0,64,0,0,0
```

- Se houver apenas três valores correspondentes a x, y e z, o teletransporte será feito para um local relativo à localização do boss. Se o boss for um boss regional, o local será relativo ao ponto de spawn do boss.

---

### TITLE_MESSAGE

Define a mensagem da barra de ação para os alvos.

| Valores |                            Detalhes                            | Obrigatório | Especial | Padrão |
| --- |:-------------------------------------------------------------:| :-: | :-: | :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ | ❌ |
| `title` |                     Define a mensagem do título                     | ✅ | Pode usar [Códigos de Cor](#color_codes) com `&` | ❌ |
| `subtitle` |                    Define a mensagem da legenda                   | ✅ | Pode usar [Códigos de Cor](#color_codes) com `&` | ❌ |
| `duration` |           Define a duração da mensagem (ticks)            | ✅ | ❌ | `0` |
| `fadeIn` |                   Define o tempo de fade in (ticks)                   | ❌ | ❌ | `0` |
| `fadeOut` |                  Define o tempo de fade out (ticks)                  | ❌ | ❌ | `0` |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: TITLE_MESSAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      title: "&2Hello World!"
      subtitle: "&2I am a subtitle!"
      duration: 120
      fadeIn: 20
      fadeOut: 20
```

<div align="center">

![elitescript_actions_titlescreen.jpg](../../../img/wiki/elitescript_actions_titlescreen.jpg)

</div>

Definirá a mensagem do título para mostrar o título "&2Hello World!" com a legenda "&2I am a subtitle!" para todos os jogadores que estejam a 10 blocos do boss.

A mensagem permanecerá na tela por 8 segundos (120 + 20 + 20 = 160 ticks), incluindo a animação de fade in e fade out.

</div>

</details>

</div>

---

### UNTAG

Remove tags do boss. Verifique `TAG` para ver como as tags funcionam.

| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `tags` |                         Define as tags                         | ✅ |
| `duration` |     Define a duração da remoção das tags (ticks)      | ❌ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
    - EliteMobSpawnEvent
    Actions:
    - action: TAG
      Target:
        targetType: SELF
      tags:
      - fireworks
    - action: SPAWN_FIREWORKS
      Target:
        targetType: SELF
      wait: 20  
      offset: 0,3,0
      vValue: 0,.1,0
      flicker: true
      withTrail: true
      power: 1
      fireworkEffects:
      - [ORANGE, RED]
      repeatEvery: 20
      Conditions:
        hasTags:
        - fireworks  
  Exemplo2:
    Events:
    - EliteMobEnterCombatEvent
    Actions:
    - action: UNTAG
      Target:
        targetType: SELF
      tags:
      - fireworks
```

Remove a tag "very_sus" do boss, que pode ser verificada posteriormente através de condições de script.

</div>

</details>

</div>

---

### VISUAL_FREEZE

Dá o efeito visual congelado ao jogador e causa o dano associado. Isto deve ser combinado com um script repetitivo se não quiser que o efeito desapareça imediatamente.

| Valores |                            Detalhes                            | Obrigatório |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `duration` |                 Duração do efeito, em ticks                  | ✅ |

<div align="center">
<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: VISUAL_FREEZE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      duration: 20
      repeatEvery: 20
      times: 3
```

<div align="center">

![elitescript_actions_freeze.jpg](../../../img/wiki/elitescript_actions_freeze.jpg) VISUAL FREEZE NÃO ESTÁ A FUNCIONAR ATUALMENTE, ENTÃO NÃO FOI POSSÍVEL CAPTURAR UMA CAPTURAR DE TELA

</div>

Dá a todos os jogadores a 10 blocos do boss o visual de congelamento por 3 segundos (60 ticks).

</div>

</details>

</div>

---

# Múltiplas ações

Às vezes, você pode querer realizar várias ações ao mesmo tempo quando um evento acontece, como enviar várias mensagens ou realizar diferentes ações sequencialmente. Isso é feito facilmente! Vamos adicionar uma ação de efeito de poção ao nosso exemplo:

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  MessagePlayers:
    Events:
    - EliteMobDamagedEventByPlayerEvent
    Actions:
    - action: MESSAGE
      Target:
        targetType: ALL_PLAYERS
      message: Estou a enviar mensagens a todos os jogadores online!
    - action: MESSAGE
      Target:
        targetType: DIRECT_TARGET
      message: Estou a enviar uma mensagem ao jogador que atingiu o boss!
```

</div>

</details>

</div>


