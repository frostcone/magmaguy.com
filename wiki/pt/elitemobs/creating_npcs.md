[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Configurações

<div align="center">

### isEnabled

Define se um NPC está habilitado.

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `isEnabled` | [Booleano](#boolean) | `true`  |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### name

Define o nome de exibição de um NPC. Suporta [Códigos de Cor](#color_codes).

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `name` | [String](#string) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
name: "&aEnn Peecee"
```

<div align="center">

![create_npc_name.jpg](../../../img/wiki/create_npc_name.jpg)

</div>

</div>

</details>

***

### role

Define o papel do NPC, abaixo do nome. Apenas visual. Suporta [Códigos de Cor](#color_codes).

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `role` | [String](#string) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
role: "&c<Red Fellow>"
```

<div align="center">

![create_npc_role.jpg](../../../img/wiki/create_npc_role.jpg)

</div>

</div>

</details>

***

### profession

Define a profissão do NPC, que define sua aparência quando **não** está usando um disfarce.

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `profession` | [Profissão](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) |  `NITWIT`   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
profession: NITWIT
```

<div align="center">

![create_npc_profession.jpg](../../../img/wiki/create_npc_profession.jpg)

</div>

</div>

</details>

***

### greetings

Define a lista de saudações que o NPC diz quando um jogador se aproxima.

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `greetings` | [Lista de Strings](#string_list) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
greetings:
- Hi there!
- Good day. 
```

<div align="center">

![create_npc_greetings.jpg](../../../img/wiki/create_npc_greetings.jpg)

</div>

</div>

</details>

***

### dialog

Define o diálogo que o NPC dirá enquanto um jogador estiver por perto (No caso do `DIALOG` interactionType, este seria o diálogo).

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `dialog` | [Lista de Strings](#string_list) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
dialog:
- I like apples!
- Sure is hot.
```

<div align="center">

![create_npc_dialog.jpg](../../../img/wiki/create_npc_dialog.jpg)

</div>

</div>

</details>

***

### farewell

Define a mensagem de despedida do NPC.

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `farewell` | [Lista de Strings](#string_list) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
farewell: 
- Until next time!
- Bye!
```

<div align="center">

![create_npc_farewell.jpg](../../../img/wiki/create_npc_farewell.jpg)

</div>

</div>

</details>

***

### canTalk

Define se o NPC pode falar.

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `canTalk` | [Booleano](#boolean) | `true`  |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
canTalk: true
```

</div>

</details>

***

### activationRadius

Define o raio em que um NPC pode detectar um jogador se aproximando.

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `activationRadius` | [Double](#double) |  `3.0`  |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
activationRadius: 3.0
```

</div>

</details>

***

### interactionType

Define o tipo de interação que o NPC fará.

| Chave       |      Valores       | Padrão |
|-----------|:-----------------:|:-------:|
| `interactionType` |    Especial [1]    |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
interactionType: TELEPORT_BACK
```

</div>

</details>

***

### noPreviousLocationMessage

Quando um NPC Teletransportador não tem nenhuma localização anterior para a qual pode teletransportar um jogador, ele exibirá esta mensagem. Aceita [Códigos de Cor](#color_codes)

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `noPreviousLocationMessage` | [String](#string) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
noPreviousLocationMessage: '&8[EliteMobs] &cCouldn''t send you back to your previous location - no previous location found!'
```

<div align="center">

![create_npc_noteleportlocation.jpg](../../../img/wiki/create_npc_noteleportlocation.jpg)

</div>

</div>

</details>

***

### timeout

Define a quantidade de tempo, em minutos, antes que um NPC desapareça permanentemente.

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `timeout` | [Integer](#integer) |  `0` (nunca)   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
timeout: 0
```

</div>

</details>

***

### questFileName

Define as missões que o NPC dá.

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `questFileName` | [Lista de Strings](#string_list) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
questFileName:
- my_quest_one.yml
- my_quest_two.yml
```

</div>

</details>

***

### disguise

Define o disfarce do LibsDisguises que o NPC possui.

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `disguise` | [Formato do LibsDisguises]($language$/elitemobs/libsdisguises.md) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
disguise: SKELETON
```

<div align="center">

![create_npc_disguise.jpg](../../../img/wiki/create_npc_disguise.jpg)

</div>

</div>

</details>

***

### customDisguiseData

Define os dados para um disfarce personalizado do LibsDisguises.

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `customDisguiseData` | [Formato do LibsDisguises]($language$/elitemobs/libsdisguises.md&section=how-can-i-disguise-an-entity-with-a-custom-disguise?) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
disguise: custom:my_cool_disguise_name
customDisguiseData: player my_cool_disguise_name setskin {"id":"364acb6d-9050-46f7-b5fb-f8c3fd83a6fc","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTYxMTk4ODA4Nzc1NSwKICAicHJvZmlsZUlkIiA6ICJkZGVkNTZlMWVmOGI0MGZlOGFkMTYyOTIwZjdhZWNkYSIsCiAgInByb2ZpbGVOYW1lIiA6ICJEaXNjb3JkQXBwIiwKICAic2lnbmF0dXJlUmVxdWlyZWQiIDogdHJ1ZSwKICAidGV4dHVyZXMiIDogewogICAgIlNLSU4iIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlLzliYmVkODQzNWY4YmYyNzhhZmUyNmU2NGZkOTI2YjhiMzc3MzJkODhlMzM0ODk3ZGJkNTI3ZDU2ZmY5MTk5MGUiCiAgICB9CiAgfQp9","signature":"ujLq1joYVktuQAp1xpFKlxQFUVinSePiDBiVCAxxix/mA5vP86i/eAOfb1mtGjaAZ6sO0l2olbzvycnGXNBtbAxgqprguROXY4tpWiePVTDmy3iD4GdOCxHAkYLoyMV5qTT4SNsldUFFuND8GSEgbNMltKDLmhNKwzm08iCigPfpeuYpwljgJPxu6ka54PKNaQu4doI0ZDZXKqq4hPhR3Bs2Sz9MI0SmdmQWwcCzUz3DFdVno27fmQ6LwqmT+eSoOv0EttVG/XMaTYQ5lhBY61mqf6WlJyYVUSfjJk1AbYsctu7dWM+sbY8jFq5ljvXJGGr5TyKi+fs8vHy06Z2go20QgTYOw+caFxFijAS6fgm3oY57VEOv+/9OLHdD+Z9BrWqQWcIIrVeIfxjue/yt4pyeVv9jX59hjNFjhcPEwotkxJ+vZ96WlTLWDG4BiqauDr2VeGyLlVaygO9ZU0wwsN65iSh91GI3tMIA5wbDR0Hts/9ABvt9eafHbowS+4SZXN0i9mYnKg7op1eiB8nMEAGsPJg3DwsmUrh3ACAapQ6eYHiJpo59RXDqKlRcXwo7wsEFp//5LgQWbPj0NP3nxnywdpozqSAeq6236qlhE9BT9eiyJ41V9sMelYFEWMlUAltR40NdbIrHB0J3nmfuLJz44/sTwWf6P1khOy//XX0="}],"legacy":false}
```

<div align="center">

![create_npc_custom_disguise.jpg](../../../img/wiki/create_npc_custom_disguise.jpg)

</div>

</div>

</details>

***

### customModel

Define o modelo personalizado do ModelEngine que o NPC usará.

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `customModel` | [String](#string) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
customModel: MY_MODEL_ONE
```

</div>

</details>

***

### arena

Define o nome do arquivo da arena para a qual o NPC abrirá um menu (requer o `ARENA_MASTER` interactionType).

| Chave       |        Valores         | Padrão |
|-----------|:---------------------:|:-------:|
| `arena` | [Nome do Arquivo](#filename) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
arena: my_arena.yml
```

</div>

</details>

***

### command

Define o comando que o NPC executará (requer o `COMMAND` interactionType).

| Chave       |        Valores         | Padrão |
|-----------|:---------------------:|:-------:|
| `command` | [String](#string) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
command: say Look at me running a command, how cool!
```

<div align="center">

![create_npc_command.jpg](../../../img/wiki/create_npc_command.jpg)

</div>

</div>

</details>

***

### spawnLocation

Define a localização de geração dos NPCs. Você deve definir isso por meio do comando `/em spawnnpc <npcfilename.yml>`.

| Chave       |        Valores         | Padrão |
|-----------|:---------------------:|:-------:|
| `spawnLocation` | [String](#string) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
spawnLocation: my_world,10,50,10,0,0
```

</div>

</details>

***

### spawnLocations

Define as localizações de geração dos NPCs. Você deve definir isso por meio do comando `/em spawnnpc <npcfilename.yml>`.

| Chave              |           Valores            | Padrão |
|------------------|:---------------------------:|:-------:|
| `spawnLocations` | [Lista de Strings](#string_list) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
spawnLocations: 
- my_world,10,50,10,0,0
- my_world,-10,50,-10,0,0
```

</div>

</details>

### instanced

Define se o NPC deve ser instanciado (para uso em masmorras instanciadas).

| Chave              |           Valores            | Padrão |
|------------------|:---------------------------:|:-------:|
| `instanced` | [Booleano](#boolean) |  `false`   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
instanced: false
```

</div>

</details>

</div>

***

<details> 

<summary align="center"><b>Exemplo de Configuração de NPC</b></summary>

<div align="left">

```yml
isEnabled: true
name: "&cRed Rubin"
role: "&a<Generic NPC>"
profession: NITWIT
greetings:
- Hiya!
- Hello!
dialog:
- Great conversation!
- Pleasure talking with you!
farewell:
- Goodbye!
- Laters!
canTalk: true
activationRadius: 4
interactionType: CHAT
timeout: 0
questFileName: 
- my_quest.yml #npc interactionType must be set to CUSTOM_QUEST_GIVER
disguise: SKELETON
customDisguiseData: #used when a custom libsdisguise is being set
customModel: MODEL_ONE
arena: my_arena.yml #npc interactionType must be set to ARENA_MASTER
command: /say Hello World! #npc interactionType must be set to COMMAND
spawnLocation: my_world,584,55,127,90,10 #remember that NPCs use pitch and yaw to set where they are looking at. this is also automatically set when running the /em spawnnpc <npcfilename.yml> command, so make sure you pose where you want the NPC to be facing when running the command.
```

<div align="center">

![create_npc_npc.jpg](../../../img/wiki/create_npc_npc.jpg)

</div>

</div>

</details>

***

## Especial [1]
A seguir está a lista de tipos de interação de NPC válidos:

| Tipo                          |                                Descrição                                |
|-------------------------------|:-------------------------------------------------------------------------:|
| `GUILD_GREETER`               |                     Abre o menu da guilda de aventureiros                      |
| `CHAT`                        |                Clicar com o botão direito do mouse alterna o `dialog`                 |
| `CUSTOM_SHOP`                 |                        Abre o menu da loja personalizada                         |
| `PROCEDURALLY_GENERATED_SHOP` |                   Abre a loja gerada proceduralmente                   |
| `BAR`                         |                            Abre o menu de bar                             |
| `ARENA`                       |                           Abre o menu de arena                            |
| `QUEST_GIVER`                 |               Abre o menu de missões gerado proceduralmente                |
| `CUSTOM_QUEST_GIVER`          |     Abre o menu de missões para um conjunto específico definido em `questFileName`      |
| `NONE`                        |                              Sem interações                              |
| `SELL`                        |                            Abre o menu de venda                            |
| `TELEPORT_BACK`               | Teletransporta os jogadores de volta para a última localização do mundo não-elitemobs em que eles estavam |
| `SCRAPPER`                    |                           Abre o menu de sucata                            |
| `REPAIRMAN`                   |                           Abre o menu de reparo                           |
| `ENCHANTER`                   |                          Abre o menu de encantamento                           |
| `REFINER`                     |                          Abre o menu de refinador                           |
| `UNBINDER`                    |                           Abre o menu de desvinculação                           |
| `ARENA_MASTER`                |         Abre o menu de arena para a arena definida em `arenaFilename`         |
| `COMMAND`                     |                     Executa o comando definido em `command`                     |

*Para obter mais informações sobre o que o SCRAPPER e tipos de interação semelhantes fazem, clique [aqui]($language$/elitemobs/item_upgrade_system.md).*

