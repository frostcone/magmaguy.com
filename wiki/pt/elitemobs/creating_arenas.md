[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Criar arenas

<div align="center">

### isEnabled

Define se a arena está ativa.

| Chave       |       Valores       | Padrão |
|-------------|:-------------------:|:------:|
| `isEnabled` | [Boolean](#boolean) | `true` |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### arenaName


Define o nome da arena.

| Chave       |      Valores      | Padrão |
|-------------|:-----------------:|:------:|
| `arenaName` | [String](#string) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
arenaName: Arena Bedrock
```

<div align="center">

![create_arena_name.jpg](../../../img/wiki/create_arena_name.jpg)

</div>

</div>

</details>

***

### corner1

Define o primeiro canto da arena.

| Chave     |             Valores              | Padrão |
|-----------|:--------------------------------:|:------:|
| `corner1` | [Location](#serialized_location) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
corner1: my_arena_world,10,50,-10,0,0
```

<div align="center">

Nesta imagem, `corner1` é representado por *lã verde* e `corner2` é representado por *lã vermelha*. Esta configuração designa a área entre eles como a arena, representada por *lã amarela*.

![create_arena_corner.jpg](../../../img/wiki/create_arena_corner.jpg)

</div>

</div>

</details>

***

### corner2

Define o segundo canto da arena, deve ser diametralmente oposto a `corner1`.

| Chave     |             Valores              | Padrão |
|-----------|:--------------------------------:|:------:|
| `corner2` | [Location](#serialized_location) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
corner2: my_arena_world,-10,50,10,0,0
```

<div align="center">

Nesta imagem, `corner1` é representado por *lã verde* e `corner2` é representado por *lã vermelha*. Esta configuração designa a área entre eles como a arena, representada por *lã amarela*.

![create_arena_corner.jpg](../../../img/wiki/create_arena_corner.jpg)

</div>

</div>

</details>

***

### startLocation

Define a localização inicial da arena.

| Chave           |             Valores              | Padrão |
|-----------------|:--------------------------------:|:------:|
| `startLocation` | [Location](#serialized_location) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
startLocation: my_arena_world,1,50,1,0,0
```

</div>

</details>

***

### exitLocation

Define a localização de saída da arena.

| Chave          |             Valores              | Padrão |
|----------------|:--------------------------------:|:------:|
| `exitLocation` | [Location](#serialized_location) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
exitLocation: my_world,1,50,1,0,0
```

</div>

</details>

***

### waveCount

Define a quantidade de ondas que a arena tem.

| Chave       |       Valores       | Padrão |
|-------------|:-------------------:|:------:|
| `waveCount` | [Integer](#integer) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
waveCount: 10
```

</div>

</details>

***

### delayBetweenWaves

Define o atraso, em segundos, entre as ondas.

| Chave               |       Valores       | Padrão |
|---------------------|:-------------------:|:------:|
| `delayBetweenWaves` | [Integer](#integer) |  `0`   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
delayBetweenWaves: 5
```

</div>

</details>

***

### spawnPoints

Define as localizações de surgimento dos chefes da arena.

| Chave         |             Valores             | Padrão |
|---------------|:-------------------------------:|:------:|
| `spawnPoints` | [String List](#string_list) [1] | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
spawnPoints:
- name=norte:location=my_arena_world,219.5,71,273.5
- name=sul:location=my_arena_world,219.5,71,316.5
- name=oeste:location=my_arena_world,197.5,71,295.5
- name=leste:location=my_arena_world,240.5,71,295.5
- name=centro:location=my_arena_world,219.5,71,295.5
```

</div>

</details>

***

### bossList

Define a lista de chefes que aparecem durante as ondas da arena. As Arenas EliteMobs suportam o surgimento de Mythic
Mobs nas arenas.

| Chave      |             Valores             | Padrão |
|------------|:-------------------------------:|:------:|
| `bossList` | [String List](#string_list) [2] | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
bossList:
- wave=1:spawnPoint=norte:boss=meu_chefe_onda_1.yml
- wave=1:spawnPoint=sul:boss=meu_chefe_onda_1.yml
- wave=2:spawnPoint=centro:boss=meu_chefe_mythicmobs:mythicmob=true:level=10
```

Neste exemplo, a onda 1 irá gerar um chefe no ponto de surgimento norte e um chefe no ponto de surgimento sul. Depois,
na onda 2, um chefe mítico será gerado, no nível 10, no ponto central.

Note que também pode forçar um nível para os chefes EliteMobs, mas é recomendável que defina o seu nível no ficheiro de
configuração.

</div>

</details>

***

### rawArenaReward

Define as recompensas dadas no final das ondas.

| Chave            |                                  Valores                                   | Padrão |
|------------------|:--------------------------------------------------------------------------:|:------:|
| `rawArenaReward` | [Tabela de saque universal EliteMobs]($language$/elitemobs/loot_tables.md) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
rawArenaReward:
- filename=livro_encantado_dano_total.yml:wave=5:chance=0.25
- filename=sucata_elite_pequena.yml:wave=1:chance=0.5:amount=5
- currencyAmount=3:wave=3
- level=5:filename=pergaminho_convocar_mercador.yml:wave=5
- filename=palito_magmaguy.yml:itemlevel=10:wave=10:chance=0.95
```

</div>

</details>

***

### minimumPlayerCount

Define a quantidade mínima de jogadores que uma arena deve ter antes de começar.

| Chave                |       Valores       | Padrão |
|----------------------|:-------------------:|:------:|
| `minimumPlayerCount` | [Integer](#integer) |  `1`   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
minimumPlayerCount: 1
```

</div>

</details>

***

### maximumPlayerCount

Define a quantidade máxima de jogadores que uma arena pode ter.

| Chave                |       Valores       | Padrão |
|----------------------|:-------------------:|:------:|
| `maximumPlayerCount` | [Integer](#integer) | `100`  |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
maximumPlayerCount: 100
```

</div>

</details>

***

### arenaMessages

Define as mensagens que são executadas entre ondas.

| Chave           |   Valores    | Padrão |
|-----------------|:------------:|:------:|
| `arenaMessages` | Especial [3] | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
arenaMessages:
- wave=1:message="&a[Anunciador da Arena] &fHora da onda um!"
- wave=2:message="&a[Anunciador da Arena] &fUau, já é a onda dois."
```

<div align="center">

![create_arena_messages.jpg](../../../img/wiki/create_arena_messages.jpg)

</div>

</div>

</details>

***

### cylindricalArena

Define se a arena usa um formato cilíndrico (o padrão é cuboide).

| Chave              |       Valores       | Padrão  |
|--------------------|:-------------------:|:-------:|
| `cylindricalArena` | [Boolean](#boolean) | `false` |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
cylindricalArena: false
```

</div>

</details>

***

### permission

Define a permissão necessária para usar a arena.

| Chave        |      Valores       | Padrão |
|--------------|:------------------:|:------:|
| `permission` | [String](#integer) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
permission: minhaPermissao.arena
```

</div>

</details>

***

</div>


## Especial [1] 

Pontos de surgimento: Utiliza o seguinte formato: `name=nomePonto:location=nome_do_mundo,x,y,z`.

## Especial [2] 

Lista de chefes: Utiliza o seguinte formato: `wave=x:spawnPoint=Y:boss=nomeDoFicheiroDoChefe.yml`.

## Especial [3] 

Mensagens da arena: Utiliza o seguinte formato: `wave=X:message=a sua mensagem aqui`.

<details> 

<summary align="center"><b>Exemplo de Configuração de Arena</b></summary>

<div align="left">

```yml
isEnabled: true
arenaName: Arena de Exemplo
corner1: my_arena_world,0,0,0,0,0
corner2: my_arena_world,50,50,50,0,0
startLocation: my_arena_world,25,0,25,0,0
exitLocation: my_minecraft_world,234,44,245,0,0
waveCount: 5
delayBetweenWaves: 5
spawnPoints:
  - name=norte:location=my_arena_world,40.5,0,0
  - name=sul:location=my_arena_world,10.5,0,0
  - name=oeste:location=my_arena_world,0,0,40.5
  - name=leste:location=my_arena_world,0,0,10.5
  - name=centro:location=my_arena_world,25.5,0,25.5
bossList:
  - wave=1:spawnPoint=norte:boss=mob_de_exemplo_arena_onda_1.yml
  - wave=1:spawnPoint=centro:boss=mob_de_exemplo_arena_onda_1.yml
  - wave=1:spawnPoint=sul:boss=mob_de_exemplo_arena_onda_1.yml
  - wave=2:spawnPoint=centro:boss=mob_de_exemplo_arena_onda_2.yml
  - wave=3:spawnPoint=leste:boss=mob_de_exemplo_arena_onda_3.yml
  - wave=3:spawnPoint=oeste:boss=mob_de_exemplo_arena_onda_3.yml
  - wave=4:spawnPoint=centro:boss=mob_de_exemplo_arena_onda_4.yml
  - wave=4:spawnPoint=centro:boss=mob_de_exemplo_arena_onda_4.yml
  - wave=5:spawnPoint=centro:boss=mob_de_exemplo_arena_onda_5.yml
  - wave=5:spawnPoint=sul:boss=mob_de_exemplo_arena_onda_5.yml
  - wave=5:spawnPoint=oeste:boss=mob_de_exemplo_arena_onda_5.yml
rawArenaReward:
  - currencyAmount=5:wave=1
  - currencyAmount=10:wave=2
  - currencyAmount=15:wave=3
  - currencyAmount=20:wave=4
  - currencyAmount=25:wave=5
  - filename=palito_magmaguy.yml:itemlevel=5:wave=5:chance=0.5
minimumPlayerCount: 1
maximumPlayerCount: 3
arenaMessages:
  - wave=1:message=&d[NPC da Arena] &fUau! Onda 1!
  - wave=2:message=&d[NPC da Arena] &fIncrível, já é a onda 2!
  - wave=3:message=&d[NPC da Arena] &fA onda 3 começou!
  - wave=4:message=&d[NPC da Arena] &fJá é a onda 4!
  - wave=5:message=&d[NPC da Arena] &fBem, já acabou depois desta.
cylindricalArena: false
permission: arena.minhapermissao
```
</div>

</details>

<details> 

<summary align="center"><b>Análise do exemplo</b></summary>

<div align="left">

Vamos analisar este exemplo de cima para baixo e explicar o que esta configuração de arena faz.

Primeiro, a arena é ativada com `isEnabled`, e podemos ver que se chama Arena de Exemplo usando a
configuração `arenaName`. O nome será mostrado quando interagir com o NPC da arena (vamos falar sobre como criar um NPC
da arena mais abaixo) que permitirá aos jogadores juntarem-se à arena. corner1 e corner2 definem o tamanho da arena.
Estes cantos devem estar nos lados opostos da área que planeia usar para a arena.

`startLocation` é onde os jogadores irão aparecer ao juntarem-se à arena, no exemplo, seria no centro da arena no mundo
my_arena_world. `exitLocation` é para onde os jogadores serão teletransportados depois de falharem ou terminarem a
arena. Neste caso, seria para o mundo my_minecraft_world e as coordenadas no exemplo.

`waveCount` define simplesmente a quantidade de ondas que a arena irá durar. Neste caso, seriam 5 ondas. Se os jogadores
conseguirem sobreviver às 5 ondas, eles conseguiram sobreviver à arena. `delayBetweenWaves` irá definir a quantidade de
segundos antes de a próxima onda começar. No nosso exemplo, os jogadores teriam 5 segundos para se prepararem antes da
próxima onda começar.

`spawnPoints` define as localizações onde podemos fazer os nossos mobs aparecerem. Podemos fazer quantos quisermos e
dar-lhes o nome que quisermos. No exemplo, decidimos fazer 5 pontos de surgimento e dar-lhes os nomes de norte, sul,
centro, este e oeste.

`bossList` é onde definimos qual chefe deve aparecer em qual onda e em qual localização. No exemplo, a onda 1 terá 3
chefes a aparecerem nas localizações de surgimento que definimos como norte, centro e sul. Os três estão definidos para
usar o mesmo ficheiro de chefe, mas podíamos ter usado ficheiros de chefe diferentes para cada um.

`rawArenaReward` define as recompensas que serão distribuídas depois de um jogador conseguir sobreviver/derrotar uma
onda. Como podemos ver no exemplo, derrotar a onda 1 irá recompensar o jogador com 5 moedas de elite. Se conseguirem
sobreviver ao resto das ondas e depois derrotarem a onda 5, serão recompensados com 25 moedas de elite e 50% de hipótese
de obterem um Palito do MagmaGuy de nível 5.

`minimumPlayerCount` define a quantidade mínima necessária de jogadores antes de a arena começar. No nosso exemplo, esta
configuração está definida para 1, portanto, apenas é necessário um jogador para a arena começar. `maximumPlayerCount`
define a quantidade máxima de jogadores que podem participar na arena. No nosso exemplo, esta configuração está definida
para 3, o que significa que, se mais de 3 jogadores tentarem participar na arena, a arena não começará até haver 3
jogadores ou menos.

`arenaMessages` permite-lhe adicionar algum texto decorativo que será mostrado no chat no início das ondas definidas. No
nosso exemplo, decidimos mostrar uma mensagem curta no início de cada onda. Também decidimos incluir o nome do NPC no
início de cada mensagem, dando a ilusão de que o texto é um diálogo falado pelo anunciador (mestre da arena).

`cylindricalArena` esta configuração irá permitir-nos alternar se a área definida que definimos com `corner1`
e `corner2` deve ser um formato cilíndrico em vez de um cuboide. No nosso exemplo, definimos isto como `false`, o que
significa que a arena de exemplo é um formato cuboide.

`permission` permite-nos definir uma permissão que os jogadores precisarão ter para conseguir entrar/iniciar a arena. No
nosso exemplo, os jogadores precisarão da permissão `arena.minhapermissao` para conseguir usar a arena.

</div>

</details>

## Criar o NPC da Arena

<div align="center">

### isEnabled

Define se o NPC está ativo.

| Chave       |       Valores       | Padrão |
|-------------|:-------------------:|:------:|
| `isEnabled` | [Boolean](#boolean) | `true` |

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

Define o nome de exibição do NPC.

| Chave  |      Valores      | Padrão |
|--------|:-----------------:|:------:|
| `name` | [String](#string) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
name: "&aGladius"
```

<div align="center">

![create_arena_npc_name.jpg](../../../img/wiki/create_arena_npc_name.jpg)

</div>

</div>

</details>

***

### role

Define a exibição da função sob o nome do NPC.

| Chave  |      Valores      | Padrão |
|--------|:-----------------:|:------:|
| `role` | [String](#string) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
role: "&c<Mestre da Arena>"
```
<div align="center">

![create_arena_npc_role.jpg](../../../img/wiki/create_arena_npc_role.jpg)

</div>

</div>

</details>

***

### profession

Define a profissão MineCraft do NPC.

| Chave        |                                              Valores                                              | Padrão |
|--------------|:-------------------------------------------------------------------------------------------------:|:------:|
| `profession` | [Profession](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
profession: ARMORER
```

<div align="center">


*Será substituído se for usado um `diguise`.*

![create_arena_npc_profession.jpg](../../../img/wiki/create_arena_npc_profession.jpg)

</div>

</div>

</details>

***

### spawnLocation

Define a localização de surgimento do NPC.

| Chave           |             Valores              | Padrão |
|-----------------|:--------------------------------:|:------:|
| `spawnLocation` | [Location](#serialized_location) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
spawnLocation: my_world,1.5,50,1.5,-108,0
```

</div>

</details>

***

### greetings

Define o diálogo de boas-vindas do NPC.

| Chave       |           Valores           | Padrão |
|-------------|:---------------------------:|:------:|
| `greetings` | [String List](#string_list) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
greetings:
- Bem-vindo à Arena!
- A Arena dá-lhe as boas-vindas!
```

<div align="center">

![create_arena_npc_greetings.jpg](../../../img/wiki/create_arena_npc_greetings.jpg)

</div>

</div>

</details>

***

### dialog

Define o diálogo quando os jogadores interagem com o NPC.

| Chave    |           Valores           | Padrão |
|----------|:---------------------------:|:------:|
| `dialog` | [String List](#string_list) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
dialog:
- Pronto para um desafio?
- Enfrentar a Arena?
```

<div align="center">

![create_arena_npc_dialog.jpg](../../../img/wiki/create_arena_npc_dialog.jpg)

</div>

</div>

</details>

***

### farewell

Define o diálogo de despedida do NPC.

| Chave      |           Valores           | Padrão |
|------------|:---------------------------:|:------:|
| `farewell` | [String List](#string_list) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
farewell:
- Adeus.
- Regresse com o seu escudo, ou nele!
```

<div align="center">

![create_arena_npc_farewell.jpg](../../../img/wiki/create_arena_npc_farewell.jpg)

<div align="center">

*Se uma string for demasiado longa, pode usar \n para separar a string em várias linhas.*

<div align="left">

```yml
farewell:
- Adeus.
- Regresse com o seu\nescudo, ou nele!
```
</div>

![create_arena_npc_lines.jpg](../../../img/wiki/create_arena_npc_lines.jpg)

</div>

</div>

</div>

</details>

***

### canTalk

Define o diálogo de despedida do NPC.

| Chave     |       Valores       | Padrão |
|-----------|:-------------------:|:------:|
| `canTalk` | [Boolean](#boolean) | `true` |

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

Define o raio quando o NPC deve começar a falar.

| Chave              |      Valores      | Padrão |
|--------------------|:-----------------:|:------:|
| `activationRadius` | [Double](#double) | `3.0`  |

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

Define o tipo de interação que o NPC irá fazer.

| Chave             |   Valores    |     Padrão     |
|-------------------|:------------:|:--------------:|
| `interactionType` | Especial [4] | `ARENA_MASTER` |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
interactionType: ARENA_MASTER
```

</div>

</details>

***

### disguise

Define o disfarce personalizado do NPC.

| Chave      |                      Valores                      | Padrão |
|------------|:-------------------------------------------------:|:------:|
| `disguise` | [Disfarce]($language$/elitemobs/libsdisguises.md) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
disguise: ZOMBIE
```

<div align="center">

![create_arena_npc_disguise.jpg](../../../img/wiki/create_arena_npc_disguise.jpg)

<div align="center">

</div>

</details>

***

### arena

Define para qual arena os jogadores serão teletransportados.

| Chave   |            Valores            | Padrão |
|---------|:-----------------------------:|:------:|
| `arena` | [Nome do ficheiro](#filename) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
arena: minha_arena.yml
```

</div>

</details>

***

### teleportLocation

Define para onde os jogadores devem ser teletransportados depois de interagirem com o NPC. Esta configuração é
normalmente usada para teletransportar jogadores para uma área de tipo lobby dedicada da arena, onde podem começar o
desafio da arena ou esperar que outros jogadores terminem de atravessar a arena.

| Chave              |        Valores        | Padrão |
|--------------------|:---------------------:|:------:|
| `teleportLocation` | [Location](#location) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
teleportLocation: my_arena_world,10,50,10,0,0
```

</div>

</details>

</div>

***

<details>

<summary align="center"><b>Exemplo de Configuração da Arena</b></summary>

<div align="left">

```yml
isEnabled: true
name: NPC de Exemplo
role: <Mestre da Arena>
profession: ARMORER
spawnLocation: my_minecraft_world,233,44,245,0,0
greetings:
  - Bem-vindo à Arena!
dialog:
```
```yml
- Pronto para entrar na Arena?
farewell:
  - Adeus!
canTalk: true
activationRadius: 3.0
interactionType: ARENA_MASTER
disguise: ZOMBIE
arena: example_arena.yml
```

Este exemplo mostra um NPC de Arena básico que irá aparecer no my_minecraft_world com um disfarce de zombie. Os
jogadores podem interagir com este NPC para desafiar a Arena de Exemplo.

</div>

</details>

## Especial [4] 

A seguinte é a lista de tipos de interação de NPC válidos:

| Tipo                          |                                                     Descrição                                                     |
|-------------------------------|:-----------------------------------------------------------------------------------------------------------------:|
| `GUILD_GREETER`               |                                       Abre o menu da guilda de aventureiros                                       |
| `CHAT`                        |                                  Clicar com o botão direito percorre o `dialog`                                   |
| `CUSTOM_SHOP`                 |                                         Abre o menu da loja personalizada                                         |
| `PROCEDURALLY_GENERATED_SHOP` |                                        Abre a loja gerada proceduralmente                                         |
| `BAR`                         |                                                Abre o menu do bar                                                 |
| `ARENA`                       |                                               Abre o menu da arena                                                |
| `QUEST_GIVER`                 |                                  Abre o menu de missões geradas proceduralmente                                   |
| `CUSTOM_QUEST_GIVER`          |            Abre o menu de missões para um conjunto específico de missões definido em `questFilenames`             |
| `NONE`                        |                                                  Sem interações                                                   |
| `SELL`                        |                                               Abre o menu de venda                                                |
| `TELEPORT_BACK`               | Teletransporta os jogadores de volta para a última localização do mundo que não era elitemobs em que eles estavam |
| `SCRAPPER`                    |                                               Abre o menu de sucata                                               |
| `SMELTER`                     |                                              Abre o menu de fundição                                              |
| `REPAIRMAN`                   |                                             Abre o menu de reparação                                              |
| `ENHANCER`                    |                                         Abre o menu de melhorias de itens                                         |
| `REFINER`                     |                                             Abre o menu da refinaria                                              |
| `UNBINDER`                    |                                           Abre o menu de desvinculação                                            |
| `ARENA_MASTER`                |                           Abre o menu da arena para a arena definida em `arenaFilename`                           |
| `COMMAND`                     |                                      Executa o comando definido em `command`                                      |
