[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

Este guia é para EliteMobs 7.3.4 e posterior

# O que são Eventos Personalizados?

Eventos Personalizados aqui se referem a eventos que ocorrem aleatoriamente no jogo, seja com base em ações do jogador ou com um gatilho cronometrado. O plugin vem pré-carregado com uma série de Eventos Personalizados, como o evento Balrog, o evento Kraken e os eventos Goblin do Tesouro, para citar alguns.

Este sistema é chamado de Eventos **Personalizados** porque os eventos não apenas podem ser personalizados, mas também criados do zero. O que se segue é um guia sobre como criar e personalizar seus próprios eventos.

# Configurações comuns

<div align="center">

As seguintes configurações podem/devem ser usadas para eventos de ação e cronometrados.

***

### isEnabled

Define se o evento está habilitado.

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

### eventType

Define o tipo de evento.

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `eventType` | `BREAK_BLOCK` / `FISH` / `TILL_SOIL` / `TIMED` | nenhum  |

*Observe que `BREAK_BLOCK`, `FISH` e `TILL_SOIL` são [Eventos de Ação](#eventos-de-ação) e `TIMED` são [Eventos Cronometrados](#eventos-cronometrados)*

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
eventType: BREAK_BLOCK
```

</div>

</details>

***

### bossFilenames

Define a lista de chefes que serão gerados. **Obrigatório!**

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `bossFilenames` | [Lista de Strings](#string_list) | nenhum  |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
bossFilenames:
- balrog.yml
- my_event_boss.yml
```

</div>

</details>

***

### announcementPriority

Define a [prioridade de anúncio]($language$/elitemobs/creating_bosses.md&section=announcementpriority).

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `announcementPriority` | [Integer](#integer) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
announcementPriority: 1
```

</div>

</details>

***

### startMessage

Define a mensagem enviada no início do evento.

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `startMessage` | [String](#string) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
startMessage: An event has started!
```

<div align="center">

![create_events_start_message.jpg](../../../img/wiki/create_events_start_message.jpg)

</div>

</div>

</details>

***

### endMessage

Define a mensagem enviada no final do evento.

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `endMessage` | [String](#string) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
endMessage: An event has ended!
```

<div align="center">

![create_events_end_message.jpg](../../../img/wiki/create_events_end_message.jpg)

</div>

</div>

</details>

***

### eventStartCommands

Define os comandos que são executados no início do evento.

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `eventStartCommands` | [Lista de Strings](#string_list) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
eventStartCommands:
- say The event now starts!!
- "$chance=0.5$ say What a spawn!"
```

<div align="center">

![create_events_start_commands.jpg](../../../img/wiki/create_events_start_commands.jpg)

</div>

</div>

</details>

***

### eventEndCommands

Define os comandos que são executados no final do evento.

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `eventEndCommands` | [Lista de Strings](#string_list) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
eventEndCommands:
- say The event ends, so sad.
- "$chance=0.5$ say Too slow bud!"
```

<div align="center">

![create_events_end_commands.jpg](../../../img/wiki/create_events_end_commands.jpg)

</div>

</div>

</details>

</div>

***

<details> 

<summary align="center"><b>Exemplo de Configuração de Evento</b></summary>

<div align="left">

```yml
isEnabled: true
bossFilenames:
- "cool_boss.yml"
- "other_cool_boss.yml"
announcementPriority: 3
startMessage: "Cool event is starting!"
endMessage: "Cool event is ending!"
eventStartCommands:
- say The event started!
eventEndCommands:
- say The event ended!
```

</div>

</details>


</div>

## Eventos de Ação

<div align="center">

Eventos que têm chance de serem executados quando uma ação específica, como quebrar um bloco ou pescar, acontece.

### chance

Define a chance de o evento acontecer quando a ação acontece.

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `chance` | Valor entre `0.0` e `1.0` |  `0`   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
chance: 0.001
```

</div>

</details>

***

### breakableMaterials

Define a lista de materiais para verificar se a ação está definida como `BREAK_BLOCK`.

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `breakableMaterials` | Lista de [materiais](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
breakableMaterials:
- BEEHIVE
- BIRCH_WOOD
```

</div>

</details>

</div>

***

<details> 

<summary align="center"><b>Exemplo de Configuração</b></summary>

<div align="left">

```yml
chance: 0.001
breakableMaterials:
- COAL_ORE
```

</div>

Define uma chance de 0,1% de executar o evento quando um bloco de minério de carvão é quebrado, supondo que o tipo de evento seja `BREAK_BLOCK`.

</details>

</div>

## Eventos Cronometrados

<div align="center">

Eventos cronometrados são eventos que acontecem em intervalos de tempo configuráveis. Quando o tempo de espera para um evento cronometrado termina, um evento cronometrado aleatório é escolhido da lista de eventos cronometrados com base no peso do evento.

### spawnType

Define a [Geração Personalizada]($language$/elitemobs/creating_spawns.md) usada pelo evento, que define onde o chefe pode ser gerado.

| Chave       |        Valores         | Padrão |
|-----------|:---------------------:|:-------:|
| `spawnType` | [Nome do Arquivo](#filename) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
spawnType: nether_spawn.yml
```

</div>

</details>

***

### localCooldown

Define a quantidade de tempo, em minutos, antes que este evento possa ser escolhido novamente.

| Chave       |        Valores         | Padrão |
|-----------|:---------------------:|:-------:|
| `localCooldown` | [Integer](#integer) |  `0`   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
localCooldown: 120
```

</div>

</details>

***

### globalCooldown

Define a quantidade de tempo, em minutos, antes que o próximo evento seja escolhido.

| Chave       |        Valores         | Padrão |
|-----------|:---------------------:|:-------:|
| `globalCooldown` | [Integer](#integer) |  `0`   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
globalCooldown: 60
```

</div>

</details>

***

### weight

Define o peso do evento, afetando a chance de ele ser escolhido em relação a outros eventos. **Recomendado: 100**.

| Chave       |        Valores         | Padrão |
|-----------|:---------------------:|:-------:|
| `weight` | [Double](#double) |  `0`   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
weight: 60.5
```

</div>

</details>

***

### eventDuration

Define a duração máxima do evento, em minutos.

| Chave       |        Valores         | Padrão |
|-----------|:---------------------:|:-------:|
| `eventDuration` | [Integer](#integer) |  `0`   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
eventDuration: 30
```

</div>

</details>

***

### eventEndsWithBossDeath

Define se o evento termina com a morte do chefe.

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `eventEndsWithBossDeath` | [Booleano](#boolean) | `true`  |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
eventEndsWithBossDeath: true
```

</div>

</details>

***

### eventEndTime

Define o tempo no jogo em que o evento terminará.

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `eventEndTime` | [Booleano](#boolean) | `true`  |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
eventEndTime: true
```

</div>

</details>

***

### minimumPlayerCount

Define a quantidade mínima de jogadores online antes que o evento comece.

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `minimumPlayerCount` | [Integer](#integer) |   `1`   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
minimumPlayerCount: true
```

</div>

</details>

</div>

***

*Observe que os eventos são colocados em fila, o que significa que eles só começarão quando as condições definidas na `customSpawn` forem atendidas.*

<details> 

<summary align="center"><b>Exemplo de Configuração de Eventos</b></summary>

<div align="left">

```yml
isEnabled: true
bossFilenames:
- "cool_boss.yml"
- "other_cool_boss.yml"
announcementPriority: 3
startMessage: "Cool event is starting!"
endMessage: "Cool event is ending!"
eventStartCommands:
- say The event started!
eventEndCommands:
- say The event ended!
customSpawn: "myCoolSpawn.yml"
localCooldown: 30
globalCooldown: 15
weight: 100
eventDuration: 20
eventEndsWithBossDeath: true
eventEndTime: 10000
minimumPlayerCount: 5
```

</div>

</details>

</div>

