[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Exemplo de Missão

O EliteMobs vem pré-instalado com um `test_quest.yml`, que será analisado aqui como um formato de missão simples a seguir.

_Missões personalizadas estão na pasta `~plugins/EliteMobs/customquests`!_

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
name: "&aMata o Boss de Teste"
questLore: 
- "&cAcaba com o reinado de terror do boss de teste!"
```

<div align="center">

![create_quest_quest.jpg](../../../img/wiki/create_quest_quest.jpg)

</div>

*Se a tua interface de missão não for igual a esta, podes alterá-la para corresponder usando `/em alt`.*

Esta missão de exemplo dará aos jogadores a tarefa de matar 1 test_boss.yml. (O nome real do boss exibido no rastreador de missões será o `name:` definido em test_boss.yml.) E como recompensa por completar a missão, eles serão recompensados com 1 Palito de Dentes do Magmaguy.

## Criar Missões Personalizadas

<div align="center">

### customObjectives

Define os objetivos da missão.

| Chave       |   Valores    | Padrão |
|-----------|:-----------:|:-------:|
| `customObjectives` | Especial [1] |  nenhum  |

*Nota: Se estiveres a usar um boss de múltiplas fases como teu objetivo, então o objetivo deve usar a primeira fase como alvo.*

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
    - "&a[NPC de Diálogo] &fVens cá muitas vezes?"
    - "&7&oDevia comer mais maçãs."
    filename: dialog_npc.yml
    npcName: NPC de Diálogo
    location: na localização de diálogo.
    objectiveType: DIALOG
```

`FETCH_ITEM`:

```yml
customObjectives:
  Objective1:
    amount: '99'
    itemName: Maçãs Vermelhas
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
| `KILL_CUSTOM` / `FETCH_ITEM` / `DIALOG` | Usado para definir o tipo de objetivo que isto representa. `KILL_CUSTOM` indica que a missão envolve matar um Boss Personalizado específico, `FETCH_ITEM` indica que a missão envolve obter um Item Personalizado específico e `DIALOG` indica que a missão envolve falar com um NPC.            |
| `filename`                                    | Usado para definir o nome do ficheiro do Boss Personalizado, do Item Personalizado que o jogador tem de matar / obter ou do NPC com quem tem de falar.           |
| `amount`                                      | Usado para definir a quantidade de Bosses Personalizados que devem ser mortos ou itens que devem ser obtidos.            |
| `dialog`                                      | Usado para definir o diálogo do NPC com quem o jogador fala.           |
| `name`                                        | Usado para definir o nome do objetivo da missão, seja um NPC ou um item personalizado. Apenas para fins visuais.           |

_Por favor, note que cada campo de Objetivo Personalizado é separado por um `!`_

</div>

</details>

***

### customRewards

Define as recompensas da missão.

| Chave       |                                Valores                                 | Padrão |
|-----------|:---------------------------------------------------------------------:|:-------:|
| `customRewards` | [Formato Universal de Saque do EliteMobs]($language$elitemobs/loot_tables.md) |  nenhum  |

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
| `questAcceptPermission` | [String](#string) |  nenhum  |

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

Define a permissão que o jogador receberá ao completar a missão, o que o impedirá de fazer a missão novamente (Geralmente o [Nome do Ficheiro](#fielname) da missão que estás a editar).

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

Define quanto tempo, em minutos, o jogador terá de esperar antes de poder fazer a missão novamente (funciona removendo a permissão de bloqueio da missão).

| Chave       |      Valores       | Padrão |
|-----------|:-----------------:|:-------:|
| `questLockoutMinutes` | [Número Inteiro](#integer) |  `-1` (nunca se repete)   |

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

Define o nome da missão. Aceita [Códigos de Cores](#color_codes).

| Chave    |      Valores       | Padrão |
|--------|:-----------------:|:-------:|
| `name` | [String](#string) |  nenhum  |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
name: "&aO Meu Grande Nome de Missão"
```

</div>

</details>

***

### questLore

Define a história da missão que aparecerá no menu de missões do jogo.

| Chave    |      Valores       | Padrão |
|--------|:-----------------:|:-------:|
| `questLore` | [Lista de Strings](#string_list) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
questLore:
- "Frase interessante da história."
- "Mais uma frase interessante da história."
```

<div align="center">

![create_quest_lore.jpg](../../../img/wiki/create_quest_lore.jpg)

</div>

</div>

</details>

***

### temporaryPermissions

Define as permissões atribuídas ao jogador até que ele entregue a missão.

Se estiveres a usar esta configuração para garantir que um item só é largado quando os jogadores têm uma missão específica ativa, também terás de configurar a [Mesma Permissão]($language$/elitemobs/creating_items.md&section=permission) no ficheiro de configuração do item.

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

Define o diálogo que aparece no chat ao aceitar a missão.

| Chave    |      Valores       | Padrão |
|--------|:-----------------:|:-------:|
| `questAcceptDialog` | [Lista de Strings](#string_list) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
questAcceptDialog:
- "Meu herói! És tão prestável!"
- "Desejo-te a maior das sortes!"
```

<div align="center">

![create_quest_accept.jpg](../../../img/wiki/create_quest_accept.jpg)

</div>

</div>

</details>

***

### questCompleteMessage

Define o diálogo que aparece no chat ao concluir a missão.

| Chave    |      Valores       | Padrão |
|--------|:-----------------:|:-------:|
| `questCompleteMessage` | [Lista de Strings](#string_list) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
questCompleteMessage:
- "Meu herói! Concluíste a minha difícil missão!"
- "Como recompensa podes ficar com este pão!"
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
- say $player terminou uma missão!
```

<div align="center">

![create_quest_commands.jpg](../../../img/wiki/create_quest_commands.jpg)

</div>

</div>

</details>

***

### turnInNPC

Define o nome do ficheiro do NPC com quem os jogadores precisam de falar/interagir para concluir a missão. Este **não** tem de ser o mesmo NPC que entregou a missão.

| Chave    |      Valores       | Padrão |
|--------|:-----------------:|:-------:|
| `turnInNPC` | [Nome do Ficheiro](#filename) |  nenhum   |

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

Define o nível da missão. Este é apenas um guia visual para que os jogadores possam saber o quão desafiadora será a missão. Isto **não** modifica de forma alguma os níveis do boss, item ou outros níveis.

| Chave    |      Valores       | Padrão |
|--------|:-----------------:|:-------:|
| `questLevel` | [Número Inteiro](#integer) | `0`  |

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

Define o som que é reproduzido quando uma missão é aceite. É possível reproduzir sons do Minecraft e sons de um pacote de recursos.

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

Como mencionado nas tabelas acima, as permissões são geralmente [Strings](#string) ou [Listas de Strings](#string_list). Mas vamos analisar com mais detalhes como as vais usar para bloquear e desbloquear missões.

Digamos que estás a fazer a missão_3 numa série de missões que planeaste e não queres que os jogadores possam aceitar a missão_3 antes de terminarem a missão_2. Configuraríamos o ficheiro da missão assim:

```yml
questAcceptPermission: elitequest.quest_2.yml
questLockoutPermission: elitequest.quest_3.yml
```
Ao definir as `questAcceptPermissions` para `elitequest.quest_2.yml`, agora impedimos que os jogadores aceitem a missão_3.yml antes de terminarem a missão_2.yml. </br> Ao definir `questLockoutPermission` para `elitequest.quest_3.yml`, impedimos que os jogadores recebam essa missão, desde que já tenham essa missão no seu rastreador ou se já tiverem terminado essa missão. Isto impede que os jogadores possam repetir a missão.

Caso pretendas fazer uma missão que só fique disponível depois de os jogadores terem concluído uma série de missões, então configurarias o ficheiro da missão assim:

```yml
questAcceptPermissions: 
- elitequest.quest_2.yml
- elitequest.quest_3.yml
- elitequest.quest_4.yml
```

Se quiseres que os jogadores só possam obter certos itens quando tiverem a missão correta ativa, podemos fazer isso usando `temporaryPermissions`. Criaríamos uma permissão no ficheiro da missão usando `temporaryPermissions` e, em seguida, faríamos uma [permissão] correspondente ($language$/elitemobs/creating_items.md&section=permission) no ficheiro do item usando `permission`.

Por exemplo, abriríamos o nosso ficheiro da missão e adicionaríamos o seguinte:

```yml
temporaryPermissions: 
- elitequest.my_cool_item.yml
```
Depois, abriríamos o ficheiro do item, no nosso caso *my_cool_item.yml* e adicionaríamos o seguinte:

```yml
permission: elitequest.my_cool_item.yml
```
Ambos os ficheiros têm agora permissões correspondentes, o que deve fazer com que o nosso item só seja largado quando os jogadores tiverem a missão correta ativa.

</div>
