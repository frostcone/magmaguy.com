[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Exemplo de Missão

O EliteMobs vem pré-instalado com um `test_quest.yml`, que será analisado aqui como um formato simples de missão a
seguir.

_Missões Personalizadas estão na pasta `~plugins/EliteMobs/customquests`!_

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
name: "&aMatar o Boss de Teste"
questLore: 
- "&cAcabe com o reinado de terror do boss de teste!"
```

<div align="center">

![create_quest_quest.jpg](../../../img/wiki/create_quest_quest.jpg)

</div>

*Se a interface da tua missão não for parecida com esta, podes alterá-la para corresponder usando `/em alt`.*

Esta missão de exemplo dará aos jogadores a tarefa de matar 1 test_boss.yml. (O nome real do boss exibido no rastreador de missões será o `name:` definido em test_boss.yml.) E como recompensa por completar a missão, eles serão recompensados com 1 Palito de Dentes do Magmaguy.

## Criar Missões Personalizadas

<div align="center">

### customObjectives

Define os objetivos da missão.

| Chave              |   Valores    | Padrão |
|--------------------|:------------:|:------:|
| `customObjectives` | Especial [1] | nenhum |

*Nota: Se estiveres a usar um boss de várias fases como objetivo, então o objetivo deverá usar a primeira fase como
alvo.*

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
    - "&a[NPC de Diálogo] &fVens aqui muitas vezes?"
    - "&7&oDevia comer mais maçãs."
    filename: dialog_npc.yml
    npcName: NPC de Diálogo
    location: na localização do diálogo.
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

| Chave                                   | Descrição                                                                                                                                                                                                                                                                             |
|-----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `KILL_CUSTOM` / `FETCH_ITEM` / `DIALOG` | Usado para definir o tipo de objetivo que isto representa. `KILL_CUSTOM` indica que a missão envolve matar um Boss Personalizado específico, `FETCH_ITEM` indica que a missão envolve obter um Item Personalizado específico e `DIALOG` indica que a missão envolve falar com um NPC. |
| `filename`                              | Usado para definir o nome do ficheiro do Boss Personalizado, do Item Personalizado que o jogador tem de matar / obter ou do NPC com quem tem de falar.                                                                                                                                |
| `amount`                                | Usado para definir a quantidade de Bosses Personalizados que devem ser mortos ou itens que devem ser obtidos.                                                                                                                                                                         |
| `dialog`                                | Usado para definir o diálogo do NPC com quem o jogador fala.                                                                                                                                                                                                                          |
| `name`                                  | Usado para definir o nome do objetivo da missão, seja um NPC ou um item personalizado. Apenas para fins visuais.                                                                                                                                                                      |

_Por favor, nota que cada campo de Objetivo Personalizado é separado com um `:` !_

</div>

</details>

***

### customRewards

Define as recompensas da missão.

| Chave           |                                  Valores                                   | Padrão |
|-----------------|:--------------------------------------------------------------------------:|:------:|
| `customRewards` | [Formato de saque Universal EliteMobs]($language$elitemobs/loot_tables.md) | nenhum |

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

| Chave                   |      Valores      | Padrão |
|-------------------------|:-----------------:|:------:|
| `questAcceptPermission` | [String](#string) | nenhum |

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

Define a permissão que o jogador receberá ao completar a missão, o que os impedirá de fazer a missão novamente (
Geralmente o [Nome do Ficheiro](#fielname) da missão que estás a editar).

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

| Chave                 |       Valores       |         Padrão          |
|-----------------------|:-------------------:|:-----------------------:|
| `questLockoutMinutes` | [Inteiro](#integer) | `-1`(nunca se repetirá) |

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

| Chave  |      Valores      | Padrão |
|--------|:-----------------:|:------:|
| `name` | [String](#string) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
name: "&aO Nome da Minha Grande Missão"
```

</div>

</details>

***

### questLore

Define o lore da missão que aparecerá no menu de missões do jogo.

| Chave    |      Valores       | Padrão |
|--------|:-----------------:|:-------:|
| `questLore` | [Lista de Strings](#string_list) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
questLore:
- "Frase de lore interessante."
- "Mais uma frase de lore interessante."
```

<div align="center">

![create_quest_lore.jpg](../../../img/wiki/create_quest_lore.jpg)

</div>

</div>

</details>

***

### temporaryPermissions

Define as permissões atribuídas ao jogador até que ele entregue a missão.

Se estiveres a usar esta configuração para garantir que um item só cai quando os jogadores têm uma missão específica
ativa, também precisarás de configurar a [Mesma Permissão]($language$/elitemobs/creating_items.md&section=permission) no
ficheiro de configuração do item.

| Chave    |      Valores       | Padrão |
|--------|:-----------------:|:-------:|
| `temporaryPermissions` | [Lista de Strings](#string_list) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
temporaryPermissions:
- elitequest.item_que_deve_cair_apenas_durante_a_missão.yml
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
- "Desejo-te a melhor das sortes!"
```

<div align="center">

![create_quest_accept.jpg](../../../img/wiki/create_quest_accept.jpg)

</div>

</div>

</details>

***

### questCompleteMessage

Define o diálogo que aparece no chat ao completar a missão.

| Chave    |      Valores       | Padrão |
|--------|:-----------------:|:-------:|
| `questCompleteMessage` | [Lista de Strings](#string_list) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
questCompleteMessage:
- "Meu herói! Completaste a minha difícil missão!"
- "Como recompensa, podes ficar com este pão!"
```

<div align="center">

![create_quest_complete.jpg](../../../img/wiki/create_quest_complete.jpg)

</div>

</div>

</details>

***

### questCompleteCommands

Define os comandos que serão executados ao completar a missão.

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

Define o nome do ficheiro do NPC com quem os jogadores precisam de falar/interagir para completar a missão. Isto **não**
tem de ser o mesmo NPC que entregou a missão.

| Chave    |      Valores       | Padrão |
|--------|:-----------------:|:-------:|
| `turnInNPC` | [Nome do Ficheiro](#filename) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
turnInNPC: meu_npc_de_missão_fixe.yml
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

Define o nível da missão. Este é apenas um guia visual para que os jogadores possam saber o quão desafiante a missão
será. Isto **não** modifica de forma alguma os níveis de boss, itens ou outros.

| Chave        |       Valores       | Padrão |
|--------------|:-------------------:|:------:|
| `questLevel` | [Inteiro](#integer) |  `0`   |

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

Define o som que é reproduzido quando uma missão é aceite. É possível reproduzir sons do Minecraft e reproduzir sons de
um pacote de recursos.

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

Define o som que é reproduzido quando uma missão é concluída (entregue). É possível reproduzir sons do Minecraft e
reproduzir sons de um pacote de recursos.

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

Como mencionado nas tabelas acima, as permissões são geralmente [Strings](#string) ou [Listas de Strings](#string_list).
Mas vamos analisar com mais detalhes como usarás isso para bloquear e desbloquear missões.

Digamos que estás a criar a missão_3 numa série de missões que planeaste e não queres que os jogadores possam aceitar a
missão_3 antes de terminarem a missão_2. Configurarias o ficheiro de missão desta forma:

```yml
questAcceptPermission: elitequest.missao_2.yml
questLockoutPermission: elitequest.missao_3.yml
```

Ao definir `questAcceptPermissions` para `elitequest.missao_2.yml`, impedimos os jogadores de aceitar a missao_3.yml
antes de terminarem a missao_2.yml. </br> Ao definir `questLockoutPermission` para `elitequest.missao_3.yml`, impedimos
os jogadores de receberem essa missão desde que já tenham essa missão no seu rastreador ou se já terminaram essa missão.
Isso impede que os jogadores possam repetir a missão.

Caso pretendas criar uma missão que só fique disponível após os jogadores terem completado uma série de missões, então
configurarias o ficheiro de missão desta forma:

```yml
questAcceptPermissions: 
- elitequest.missao_2.yml
- elitequest.missao_3.yml
- elitequest.missao_4.yml
```

Se quiseres que os jogadores só possam saquear certos itens quando tiverem a missão correta ativa, podemos fazê-lo
usando `temporaryPermissions`. Criaríamos uma permissão no ficheiro de missão usando `temporaryPermissions` e, em
seguida, criaríamos uma [permissão]($language$/elitemobs/creating_items.md&section=permission) correspondente no
ficheiro de itens usando `permission`.

Por exemplo, abriríamos o nosso ficheiro de missão e adicionaríamos o seguinte:

```yml
temporaryPermissions: 
- elitequest.meu_item_fixe.yml
```

Em seguida, abriríamos o ficheiro do item, no nosso caso *meu_item_fixe.yml* e adicionaríamos o seguinte:

```yml
permission: elitequest.meu_item_fixe.yml
```

Ambos os ficheiros têm agora permissões correspondentes, o que agora deverá fazer com que o nosso item só caia quando os
jogadores tiverem a missão correta ativa.
</div>
