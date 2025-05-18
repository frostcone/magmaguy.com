```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Criar arenas

<div align="center">

### isEnabled

Define se a arena está ativa.

| Chave       |      Valores       | Predefinição |
|-----------|:-----------------:|:-------:|
|`isEnabled`| [Boolean](#boolean) | `true`    |

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

| Chave       |      Valores       | Predefinição |
|-----------|:-----------------:|:-------:|
|`arenaName`| [String](#string) | nenhum    |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
arenaName: Bedrock Arena
```

<div align="center">

![create_arena_name.jpg](../../../img/wiki/create_arena_name.jpg)

</div>

</div>

</details>

***

### corner1

Define o primeiro canto da arena.

| Chave       |      Valores       | Predefinição |
|-----------|:-----------------:|:-------:|
|`corner1`| [Location](#serialized_location) | nenhum    |

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

| Chave       |      Valores       | Predefinição |
|-----------|:-----------------:|:-------:|
| `corner2` | [Location](#serialized_location) | nenhum    |

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

Define a localização de início da arena.

| Chave       |      Valores       | Predefinição |
|-----------|:-----------------:|:-------:|
| `startLocation` | [Location](#serialized_location) | nenhum    |

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

| Chave       |      Valores       | Predefinição |
|-----------|:-----------------:|:-------:|
| `exitLocation` | [Location](#serialized_location) | nenhum    |

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

Define a quantidade de vagas que a arena tem.

| Chave       |      Valores       | Predefinição |
|-----------|:-----------------:|:-------:|
| `waveCount` | [Integer](#integer) | nenhum    |

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

Define o atraso, em segundos, entre vagas.

| Chave       |      Valores       | Predefinição |
|-----------|:-----------------:|:-------:|
| `delayBetweenWaves` | [Integer](#integer) | `0`    |

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

Define as localizações de surgimento para os bosses da arena.

| Chave       |      Valores       | Predefinição |
|-----------|:-----------------:|:-------:|
| `spawnPoints` | [String List](#string_list) [1] |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
spawnPoints:
- name=north:location=my_arena_world,219.5,71,273.5
- name=south:location=my_arena_world,219.5,71,316.5
- name=west:location=my_arena_world,197.5,71,295.5
- name=east:location=my_arena_world,240.5,71,295.5
- name=center:location=my_arena_world,219.5,71,295.5
```

</div>

</details>

***

### bossList

Define a lista de bosses que aparecem durante as vagas da arena. As Arenas EliteMobs suportam o surgimento de Mythic Mobs nas arenas.

| Chave       |      Valores       | Predefinição |
|-----------|:-----------------:|:-------:|
| `bossList` | [String List](#string_list) [2] |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
bossList:
- wave=1:spawnPoint=north:boss=my_boss_wave_1.yml
- wave=1:spawnPoint=south:boss=my_boss_wave_1.yml
- wave=2:spawnPoint=center:boss=my_mythicmobs_boss:mythicmob=true:level=10
```

Neste exemplo, a vaga 1 fará surgir um boss no ponto de surgimento norte e um boss no ponto de surgimento sul. Depois, na vaga 2, um boss mítico surgirá, no nível 10, no ponto central.

Note que também pode forçar um nível para os bosses EliteMobs, mas é recomendado que defina o nível deles no ficheiro de configuração.

</div>

</details>

***

### rawArenaReward

Define as recompensas dadas no final das vagas.

| Chave       |      Valores       | Predefinição |
|-----------|:-----------------:|:-------:|
| `rawArenaReward` | [Tabela de saque Universal EliteMobs]($language$/elitemobs/loot_tables.md) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
rawArenaReward:
- filename=enchanted_book_damage_all.yml:wave=5:chance=0.25
- filename=elite_scrap_tiny.yml:wave=1:chance=0.5:amount=5
- currencyAmount=3:wave=3
- level=5:filename=summon_merchant_scroll.yml:wave=5
- filename=magmaguys_toothpick.yml:itemlevel=10:wave=10:chance=0.95
```

</div>

</details>

***

### minimumPlayerCount

Define a quantidade mínima de jogadores que uma arena deve ter antes de começar.

| Chave       |      Valores       | Predefinição |
|-----------|:-----------------:|:-------:|
| `minimumPlayerCount` | [Integer](#integer) |   `1`   |

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

| Chave       |      Valores       | Predefinição |
|-----------|:-----------------:|:-------:|
| `maximumPlayerCount` | [Integer](#integer) |  `100`  |

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

Define as mensagens que são exibidas entre vagas.

| Chave       |      Valores       | Predefinição |
|-----------|:-----------------:|:-------:|
| `arenaMessages` | Especial [3] |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
arenaMessages:
- wave=1:message="&a[Arena Announcer] &fTime for wave one!"
- wave=2:message="&a[Arena Announcer] &fWow, wave two already."
```

<div align="center">

![create_arena_messages.jpg](../../../img/wiki/create_arena_messages.jpg)

</div>

</div>

</details>

***

### cylindricalArena

Define se a arena usa uma forma cilíndrica (a predefinição é cuboide).

| Chave       |      Valores       | Predefinição |
|-----------|:-----------------:|:-------:|
| `cylindricalArena` | [Boolean](#boolean) |  `false`   |

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

| Chave       |      Valores       | Predefinição |
|-----------|:-----------------:|:-------:|
| `permission` | [String](#integer) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
permission: mypermission.arena
```

</div>

</details>

***

</div>


## Especial [1] 
Pontos de surgimento: Usa o seguinte formato: `name=pointName:location=world_name,x,y,z`.

## Especial [2] 
Lista de bosses: Usa o seguinte formato: `wave=x:spawnPoint=Y:boss=bossfilename.yml`.

## Especial [3] 
Mensagens da arena: Usa o seguinte formato: `wave=X:message=a sua mensagem aqui`.

<details> 

<summary align="center"><b>Exemplo de Configuração da Arena</b></summary>

<div align="left">

```yml
isEnabled: true
arenaName: Example Arena
corner1: my_arena_world,0,0,0,0,0
corner2: my_arena_world,50,50,50,0,0
startLocation: my_arena_world,25,0,25,0,0
exitLocation: my_minecraft_world,234,44,245,0,0
waveCount: 5
delayBetweenWaves: 5
spawnPoints:
  - name=north:location=my_arena_world,40.5,0,0
  - name=south:location=my_arena_world,10.5,0,0
  - name=west:location=my_arena_world,0,0,40.5
  - name=east:location=my_arena_world,0,0,10.5
  - name=center:location=my_arena_world,25.5,0,25.5
bossList:
  - wave=1:spawnPoint=north:boss=example_arena_wave_1_mob.yml
  - wave=1:spawnPoint=center:boss=example_arena_wave_1_mob.yml
  - wave=1:spawnPoint=south:boss=example_arena_wave_1_mob.yml
  - wave=2:spawnPoint=center:boss=example_arena_wave_2_mob.yml
  - wave=3:spawnPoint=east:boss=example_arena_wave_3_mob.yml
  - wave=3:spawnPoint=west:boss=example_arena_wave_3_mob.yml
  - wave=4:spawnPoint=center:boss=example_arena_wave_4_mob.yml
  - wave=4:spawnPoint=center:boss=example_arena_wave_4_mob.yml
  - wave=5:spawnPoint=center:boss=example_arena_wave_5_mob.yml
  - wave=5:spawnPoint=south:boss=example_arena_wave_5_mob.yml
  - wave=5:spawnPoint=west:boss=example_arena_wave_5_mob.yml
rawArenaReward:
  - currencyAmount=5:wave=1
  - currencyAmount=10:wave=2
  - currencyAmount=15:wave=3
  - currencyAmount=20:wave=4
  - currencyAmount=25:wave=5
  - filename=magmaguys_toothpick.yml:itemlevel=5:wave=5:chance=0.5
minimumPlayerCount: 1
maximumPlayerCount: 3
arenaMessages:
  - wave=1:message=&d[Arena NPC] &fWow! Wave 1!
  - wave=2:message=&d[Arena NPC] &fAmazing it is wave 2!
  - wave=3:message=&d[Arena NPC] &fWave 3 is now on!
  - wave=4:message=&d[Arena NPC] &fWave 4 already!
  - wave=5:message=&d[Arena NPC] &fWell it is all over after this one.
cylindricalArena: false
permission: arena.mypermission
```
</div>

</details>

<details> 

<summary align="center"><b>Análise do exemplo</b></summary>

<div align="left">

Vamos analisar este exemplo do início e explicar o que esta configuração de arena faz.

Primeiro, a arena é ativada com `isEnabled`, e podemos ver que se chama Example Arena usando a configuração `arenaName`. O nome será mostrado quando interagir com o NPC da arena (falamos sobre como criar um NPC da arena mais abaixo) que permitirá aos jogadores juntarem-se à arena. corner1 e corner2 definem o tamanho da arena. Estes cantos devem estar em lados opostos um do outro na área que planeia usar para a arena.

`startLocation` é onde os jogadores surgirão ao juntarem-se à arena, no exemplo seria no centro da arena no mundo my_arena_world. `exitLocation` é para onde os jogadores serão teleportados depois de falharem ou terminarem a arena. Neste caso, seria o mundo my_minecraft_world e as coordenadas no exemplo.

`waveCount` simplesmente define a quantidade de vagas que a arena durará. Neste caso, seriam 5 vagas. Se os jogadores conseguirem sobreviver a todas as 5 vagas, conseguiram sobreviver à arena. `delayBetweenWaves` definirá a quantidade de segundos antes de a próxima vaga começar. No nosso exemplo, os jogadores teriam 5 segundos para se prepararem antes de a próxima vaga começar.

`spawnPoints` define as localizações onde podemos fazer os nossos mobs surgirem. Podemos criar quantos quisermos e nomeá-los como quisermos. No exemplo, decidimos criar 5 pontos de surgimento e nomeá-los norte, sul, centro, leste e oeste.

`bossList` é onde definimos qual boss deve surgir em que vaga e em que localização. No exemplo, a vaga 1 terá 3 bosses a surgirem dos pontos de surgimento que nomeámos norte, centro e sul. Todos os três estão configurados para usar o mesmo ficheiro de boss, mas poderíamos ter usado ficheiros de boss diferentes para cada um.

`rawArenaReward` define as recompensas que serão distribuídas depois de um jogador conseguir sobreviver/derrotar uma vaga. Como podemos ver no exemplo, derrotar a vaga 1 recompensará o jogador com 5 moedas de elite. Se conseguirem sobreviver ao resto das vagas e depois derrotarem a vaga 5, serão recompensados com 25 moedas de elite e uma probabilidade de 50% de obter um MagmaGuy's Toothpick de nível 5.

`minimumPlayerCount` define a quantidade mínima de jogadores necessária antes de a arena começar. No nosso exemplo, esta configuração está definida para 1, portanto, apenas um jogador é necessário para a arena começar. `maximumPlayerCount` define a quantidade máxima de jogadores que podem participar na arena. No nosso exemplo, esta configuração está definida para 3, o que significa que se mais de 3 jogadores tentarem participar na arena, a arena não começará até que haja 3 jogadores ou menos.

`arenaMessages` permite adicionar algum texto de ambiente que será exibido no chat no início das vagas definidas. No nosso exemplo, decidimos exibir uma mensagem curta no início de cada vaga. Também decidimos incluir o nome do NPC no início de cada mensagem, dando a ilusão de que o texto é um diálogo falado pelo anunciador (mestre da arena).

`cylindricalArena` esta configuração permitir-nos-á alternar se a área definida que configurámos com `corner1` e `corner2` deve ter uma forma cilíndrica em vez de cuboide. No nosso exemplo, definimos isto como `false`, o que significa que a arena de exemplo tem uma forma cuboide.

`permission` permite-nos definir uma permissão que os jogadores precisarão de ter para poderem juntar-se/iniciar a arena. No nosso exemplo, os jogadores precisarão da permissão `arena.mypermission` para poderem usar a arena.

</div>

</details>

## Criar o NPC da Arena

<div align="center">

### isEnabled

Define se o NPC está ativo.

| Chave       |      Valores       | Predefinição |
|-----------|:-----------------:|:-------:|
| `isEnabled` | [Boolean](#boolean) | `true`  |

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

| Chave       |      Valores       | Predefinição |
|-----------|:-----------------:|:-------:|
| `name` | [String](#string) |  nenhum   |

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

| Chave       |      Valores       | Predefinição |
|-----------|:-----------------:|:-------:|
| `role` | [String](#string) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
role: "&c<Arena Master>"
```
<div align="center">

![create_arena_npc_role.jpg](../../../img/wiki/create_arena_npc_role.jpg)

</div>

</div>

</details>

***

### profession

Define a profissão MineCraft do NPC.

| Chave       |      Valores       | Predefinição |
|-----------|:-----------------:|:-------:|
| `profession` | [Profession](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
profession: ARMORER
```

<div align="center">


*Será substituído se um `disguise` for usado.*

![create_arena_npc_profession.jpg](../../../img/wiki/create_arena_npc_profession.jpg)

</div>

</div>

</details>

***

### spawnLocation

Define a localização de surgimento do NPC.

| Chave       |      Valores       | Predefinição |
|-----------|:-----------------:|:-------:|
| `spawnLocation` | [Location](#serialized_location) |  nenhum   |

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

Define o diálogo de saudação para o NPC.

| Chave       |      Valores       | Predefinição |
|-----------|:-----------------:|:-------:|
| `greetings` | [String List](#string_list) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
greetings:
- Welcome to the Arena!
- The Arena welcomes you!
```

<div align="center">

![create_arena_npc_greetings.jpg](../../../img/wiki/create_arena_npc_greetings.jpg)

</div>

</div>

</details>

***

### dialog

Define o diálogo quando os jogadores interagem com o NPC.

| Chave       |      Valores       | Predefinição |
|-----------|:-----------------:|:-------:|
| `dialog` | [String List](#string_list) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
dialog:
- Ready for a challenge?
- Face the Arena?
```

<div align="center">

![create_arena_npc_dialog.jpg](../../../img/wiki/create_arena_npc_dialog.jpg)

</div>

</div>

</details>

***

### farewell

Define o diálogo de despedida para o NPC.

| Chave       |           Valores            | Predefinição |
|-----------|:---------------------------:|:-------:|
| `farewell` | [String List](#string_list) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
farewell:
- Bye.
- Return with your shield, or on it!
```

<div align="center">

![create_arena_npc_farewell.jpg](../../../img/wiki/create_arena_npc_farewell.jpg)

<div align="center">

*Se uma string for muito longa, pode usar \n para separar a string em várias linhas.*

<div align="left">

```yml
farewell:
- Bye.
- Return with your\nshield, or on it!
```
</div>

![create_arena_npc_lines.jpg](../../../img/wiki/create_arena_npc_lines.jpg)

</div>

</div>

</div>

</details>

***

### canTalk

Define se o NPC pode falar.

| Chave       |           Valores            | Predefinição |
|-----------|:---------------------------:|:-------:|
| `canTalk` | [Boolean](#boolean) | `true`  |

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

Define o raio em que o NPC deve começar a falar.

| Chave       |           Valores            | Predefinição |
|-----------|:---------------------------:|:-------:|
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

| Chave       |           Valores            | Predefinição |
|-----------|:---------------------------:|:-------:|
| `interactionType` | Especial [4] |  `ARENA_MASTER`  |

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

| Chave       |           Valores            | Predefinição |
|-----------|:---------------------------:|:-------:|
| `disguise` | [Disguise]($language$/elitemobs/libsdisguises.md) |  nenhum   |

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

Define para qual arena os jogadores serão teleportados.

| Chave       |           Valores            | Predefinição |
|-----------|:---------------------------:|:-------:|
| `arena` | [Filename](#filename) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
arena: my_arena.yml
```
</div>

</details>

***

</div>

## Especial [4] 
Tipos de interação: `ARENA_MASTER`, `MERCHANT`, `QUEST_GIVER`, `TELEPORTER`, `COMMAND_EXECUTOR`.
```Please specify the language you would like the text translated into.