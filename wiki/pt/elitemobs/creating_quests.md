[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Exemplo de Missão

O EliteMobs vem pré-empacotado com um `test_quest.yml`, que será analisado aqui como um formato de missão simples a seguir.

_Missões Personalizadas ficam na pasta `~plugins/EliteMobs/customquests`!_

`test_quest.yml`

```yaml
isEnabled: true
customObjectives:
  Objective1:
    amount: '1'
    filename: test_boss.yml
    objectiveType: KILL_CUSTOM
customRewards:
- filename=magmaguys_toothpick.yml:amount=1:chance=1
name: "&aKill the Test Boss"
questLore: 
- "&cEnd the test boss'' reign of terror!"
```

<div align="center">

![create_quest_quest.jpg](../../../img/wiki/create_quest_quest.jpg)

</div>

*Se sua interface de usuário de missão não estiver assim, você pode alterá-la para que corresponda usando `/em alt`.*

Este exemplo de missão dará aos jogadores a tarefa de eliminar 1 test_boss.yml. (O nome real do chefe exibido no rastreador de missões será o `name:` definido em test_boss.yml.) E como recompensa por completar a missão, eles serão recompensados com 1 Palito de Dente do Magmaguy.

## Criando Missões Personalizadas

<div align="center">

### customObjectives

Define os objetivos da missão.

| Chave       |   Valores    | Padrão |
|-----------|:-----------:|:-------:|
| `customObjectives` | Especial [1] |  nenhum   |

*Observação: Se você estiver usando um chefe multifásico como seu objetivo, então o objetivo deve estar usando a primeira fase como alvo.*

<details> 

<summary><b>Exemplos</b></summary>

<div align="left">

`KILL_CUSTOM`:

```yml
customObjectives:
  Objective1:
    amount: '1'
    filename: my_cool_boss.yml
    objectiveType: KILL_CUSTOM
```

`DIALOG`:

```yml
customObjectives:
  Objective1:
    dialog:
    - "&a[Dialog NPC] &fCome here often?"
    - "&7&oI should eat more apples."
    filename: dialog_npc.yml
    npcName: Dialog NPC
    location: at dialog location.
    objectiveType: DIALOG
```

`FETCH_ITEM`:

```yml
customObjectives:
  Objective1:
    amount: '99'
    itemName: Red Apples
    filename: my_quest_item_red_apples.yml
    objectiveType: FETCH_ITEM
```

<div align="center">

![create_quest_objective.jpg](../../../img/wiki/create_quest_objective.jpg)

</div>

</div>

</details>

**Especial [1]**

<details>

<summary><b>Expandir Tabela</b></summary>

<div align="center">

Os Objetivos Personalizados são construídos usando os seguintes valores:

| Chave                                     | Descrição |
|-----------------------------------------|-------------|
| `KILL_CUSTOM` / `FETCH_ITEM` / `DIALOG` | Usado para definir o tipo de objetivo que isso representa. `KILL_CUSTOM` indica que a missão envolve matar um Chefe Personalizado específico, `FETCH_ITEM` indica que a missão envolve obter um Item Personalizado específico e `DIALOG` indica que a missão envolve falar com um NPC.            |
| `filename`                                    | Usado para definir o nome do arquivo do Chefe Personalizado, o Item Personalizado que o jogador tem que matar / obter ou o NPC com quem ele tem que falar.            |
| `amount`                                      | Usado para definir a quantidade de Chefes Personalizados que devem ser mortos ou itens que devem ser obtidos.            |
| `dialog`                                      | Usado para definir o diálogo do NPC com quem o jogador fala.            |
| `name`                                        | Usado para definir o nome do objetivo da missão, seja um NPC ou um item personalizado. Apenas para fins visuais.            |

_Por favor, observe que cada campo do Objetivo Personalizado é separado por um `:` !_

</div>

</details>

***

### customRewards

Define as recompensas da missão.

| Chave       |                                Valores                                 | Padrão |
|-----------|:---------------------------------------------------------------------:|:-------:|
| `customRewards` | [Formato universal de loot do EliteMobs]($language$elitemobs/loot_tables.md) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
customRewards:
- currencyAmount=50:amount=1:chance=0.05
- material=COOKED_COD:amount=3:chance=1.0
- filename=magmaguys_toothpick.yml:amount=1:chance=1.0
```

<div align="center">

![create_quest_rewards.jpg](../../../img/wiki/create_quest_rewards.jpg)

</div>

</div>

</details>

***

### questAcceptPermission

Define a permissão que o jogador deve ter para aceitar a missão.

| Chave       |      Valores       | Padrão |
|-----------|:-----------------:|:-------:|
| `questAcceptPermission` | [String](#string) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
questAcceptPermission: elitequest.my_permission
```

</div>

</details>

***

### questAcceptPermissions

Define as permissões que o jogador deve ter para aceitar a missão.

| Chave       |   Valores    | Padrão |
|-----------|:-----------:|:-------:|
| `questAcceptPermissions` | [Lista de Strings](#string_list) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
questAcceptPermissions: 
- elitequest.my_previous_quest_one.yml
- elitequest.my_previous_quest_two.yml
```

</div>

</details>

***

### questLockoutPermission

Define a permissão que o jogador receberá ao concluir a missão, que o bloqueará de fazer a missão novamente (geralmente o [Nome do Arquivo](#fielname) da missão que você está editando).

| Chave       |      Valores       | Padrão |
|-----------|:-----------------:|:-------:|
| `questLockoutPermission` | [String](#string) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
questLockoutPermission: elitequest.my_quest.yml
```

</div>

</details>

***

### questLockoutMinutes

Define quanto tempo, em minutos, o jogador terá que esperar antes de poder fazer a missão novamente (funciona removendo a permissão de bloqueio da missão).

| Chave       |      Valores       | Padrão |
|-----------|:-----------------:|:-------:|
| `questLockoutMinutes` | [Integer](#integer) |  `-1`(nunca se repetirá)   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
questLockoutMinutes: 60
```

</div>

</details>

***

### name

Define o nome da missão. Aceita [Códigos de Cor](#color_codes).

| Chave    |      Valores       | Padrão |
|--------|:-----------------:|:-------:|
| `name` | [String](#string) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
name: "&aMy Great Quest Name"
```

</div>

</details>

***

### questLore

Define a descrição da missão que aparecerá no menu de missões do jogo.

| Chave    |      Valores       | Padrão |
|--------|:-----------------:|:-------:|
| `questLore` | [Lista de Strings](#string_list) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
questLore:
- "Interesting lore sentence."
- "Yet another interesting lore sentence."
```

<div align="center">

![create_quest_lore.jpg](../../../img/wiki/create_quest_lore.jpg)

</div>

</div>

</details>

***

### temporaryPermissions

Define as permissões atribuídas ao jogador até que ele entregue a missão.

Se você estiver usando esta configuração para garantir que um item só caia quando os jogadores tiverem uma missão específica ativa, também precisará configurar a [Mesma Permissão]($language$/elitemobs/creating_items.md&section=permission) no arquivo de configuração do item.

| Chave    |      Valores       | Padrão |
|--------|:-----------------:|:-------:|
| `temporaryPermissions` | [Lista de Strings](#string_list) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
temporaryPermissions:
- elitequest.item_that_should_drop_only_during_quest.yml
```

</div>

</details>

***

### questAcceptDialog

Define o diálogo que aparece no bate-papo ao aceitar a missão.

| Chave    |      Valores       | Padrão |
|--------|:-----------------:|:-------:|
| `questAcceptDialog` | [Lista de Strings](#string_list) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
questAcceptDialog:
- "My hero! You are so helpful!"
- "I wish you the best of luck!"
```

<div align="center">

![create_quest_accept.jpg](../../../img/wiki/create_quest_accept.jpg)

</div>

</div>

</details>

***

### questCompleteMessage

Define o diálogo que aparece no bate-papo ao concluir a missão.

| Chave    |      Valores       | Padrão |
|--------|:-----------------:|:-------:|
| `questCompleteMessage` | [Lista de Strings](#string_list) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
questCompleteMessage:
- "My hero! You have completed my difficult quest!"
- "As a reward you can have this loaf of bread!"
```

<div align="center">

![create_quest_complete.jpg](../../../img/wiki/create_quest_complete.jpg)

</div>

</div>

</details>

***

### questCompleteCommands

Define os comandos que serão executados ao concluir a missão.

| Chave    |      Valores       | Padrão |
|--------|:-----------------:|:-------:|
| `questCompleteCommands` | [Lista de Strings](#string_list) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
questCompleteCommands:
- say $player has finished a quest!
```

<div align="center">

![create_quest_commands.jpg](../../../img/wiki/create_quest_commands.jpg)

</div>

</div>

</details>

***

### turnInNPC

Define o nome do arquivo do NPC com quem os jogadores precisam falar/interagir para completar a missão. Este **não** precisa ser o mesmo NPC que distribuiu a missão.

| Chave    |      Valores       | Padrão |
|--------|:-----------------:|:-------:|
| `turnInNPC` | [Nome do Arquivo](#filename) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
turnInNPC: my_cool_quest_npc.yml
```

</div>

</details>

***

### trackable

Define se a missão usará o rastreador de missões.

| Chave    |      Valores       | Padrão |
|--------|:-----------------:|:-------:|
| `trackable` | [Booleano](#boolean) | `true`  |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
trackable: true
```

</div>

</details>

***

### questLevel

Define o nível da missão. Isso é apenas um guia visual para que os jogadores possam saber o quão desafiadora a missão será. Isso **não** modifica de forma alguma o chefe, item ou outros níveis.

| Chave    |      Valores       | Padrão |
|--------|:-----------------:|:-------:|
| `questLevel` | [Integer](#integer) | `0`  |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
questLevel: 10
```

<div align="center">

![create_quest_level.jpg](../../../img/wiki/create_quest_BUGGEDaddLATER.jpg)

</div>

</div>

</details>

***

### questAcceptSound

Define o som que é reproduzido quando uma missão é aceita. É possível reproduzir sons do Minecraft e sons de um pacote de recursos.

| Chave                |      Valores       | Padrão |
|--------------------|:-----------------:|:-------:|
| `questAcceptSound` | [String](#string) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
questAcceptSound: entity.experience_orb.pickup
```

<div align="center">

![create_quest_level.jpg](../../../img/wiki/create_quest_BUGGEDaddLATER.jpg)

</div>

</div>

</details>

***

### questCompleteSound

Define o som que é reproduzido quando uma missão é concluída (entregue). É possível reproduzir sons do Minecraft e sons de um pacote de recursos.

| Chave                |      Valores       | Padrão |
|--------------------|:-----------------:|:-------:|
| `questCompleteSound` | [String](#string) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
questCompleteSound: entity.player.levelup
```

<div align="center">

![create_quest_level.jpg](../../../img/wiki/create_quest_BUGGEDaddLATER.jpg)

</div>

</div>

</details>

### Permissões

Como mencionado nas tabelas acima, as permissões são geralmente [Strings](#string) ou [Listas de Strings](#string_list). Mas vamos entrar em mais detalhes sobre como você usará essas permissões para bloquear e desbloquear missões. 

Digamos que você esteja criando a quest_3 em uma série de missões que você planejou e não quer que os jogadores consigam pegar a quest_3 antes de terminarem a quest_2. Configuraríamos o arquivo de missão assim:

```yml
questAcceptPermission: elitequest.quest_2.yml
questLockoutPermission: elitequest.quest_3.yml
```
Ao definir `questAcceptPermissions` como `elitequest.quest_2.yml`, impedimos que os jogadores pegassem a quest_3.yml antes de terminarem a quest_2.yml. </br> Ao definir `questLockoutPermission` como `elitequest.quest_3.yml`, impedimos que os jogadores consigam receber essa missão enquanto eles já tiverem essa missão em seu rastreador ou se eles já tiverem concluído essa missão. Isso impede que os jogadores consigam repetir a missão.

Se você quiser criar uma missão que só fica disponível depois que os jogadores tiverem concluído uma série de missões, então você configuraria o arquivo de missão assim:

```yml
questAcceptPermissions: 
- elitequest.quest_2.yml
- elitequest.quest_3.yml
- elitequest.quest_4.yml
```

Se você quiser que os jogadores só consigam lootar certos itens quando tiverem a missão correta ativa, então podemos fazer isso usando `temporaryPermissions`. Criaríamos uma permissão no arquivo de missão usando `temporaryPermissions` e então criaríamos uma [permissão]($language$/elitemobs/creating_items.md&section=permission) correspondente no arquivo de item usando `permission`.

Por exemplo, abriríamos nosso arquivo de missão e adicionaríamos o seguinte:

```yml
temporaryPermissions: 
- elitequest.my_cool_item.yml
```
Então abriríamos o arquivo de item, em nosso caso *my_cool_item.yml* e adicionaríamos o seguinte:

```yml
permission: elitequest.my_cool_item.yml
```
Ambos os arquivos agora têm permissões correspondentes, o que deve fazer com que nosso item só seja deixado cair quando os jogadores tiverem a missão correta ativa.

</div>

