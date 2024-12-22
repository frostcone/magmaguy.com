[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

Este guia é para EliteMobs 7.3.4 e posterior

# O que são Eventos Personalizados?

Eventos Personalizados aqui referem-se a eventos que ocorrem aleatoriamente no jogo, seja com base nas ações do jogador
ou tendo um gatilho cronometrado. O plugin vem pré-carregado com vários Eventos Personalizados, como o evento Balrog, o
evento Kraken e os eventos Treasure Goblin, para citar alguns.

Este sistema é chamado de Eventos **Personalizados** porque os eventos podem não só ser personalizados, mas também
criados do zero. O que se segue é um guia sobre como criar e personalizar os seus próprios eventos.

# Configurações comuns

<div align="center">

As seguintes configurações podem/devem ser usadas tanto para eventos de ação como para eventos cronometrados.

***

### isEnabled

Define se o evento está ativado.

| Chave       |       Valores        | Padrão |
|-------------|:--------------------:|:------:|
| `isEnabled` | [Booleano](#boolean) | `true` |

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

| Chave       |                    Valores                     | Padrão |
|-------------|:----------------------------------------------:|:------:|
| `eventType` | `BREAK_BLOCK` / `FISH` / `TILL_SOIL` / `TIMED` | nenhum |

*Note que `BREAK_BLOCK`, `FISH` e `TILL_SOIL` são [Eventos de Ação](#action-events) e `TIMED`
são [Eventos Cronometrados](#timed-events)*

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

| Chave           |             Valores              | Padrão |
|-----------------|:--------------------------------:|:------:|
| `bossFilenames` | [Lista de Strings](#string_list) | nenhum |

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

Define a [prioridade do anúncio]($language$/elitemobs/creating_bosses.md&section=announcementpriority).

| Chave                  |       Valores       | Padrão |
|------------------------|:-------------------:|:------:|
| `announcementPriority` | [Inteiro](#integer) | nenhum |

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

| Chave          |      Valores      | Padrão |
|----------------|:-----------------:|:------:|
| `startMessage` | [String](#string) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
startMessage: Um evento começou!
```

<div align="center">

![create_events_start_message.jpg](../../../img/wiki/create_events_start_message.jpg)

</div>

</div>

</details>

***

### endMessage

Define a mensagem enviada no final do evento.

| Chave        |      Valores      | Padrão |
|--------------|:-----------------:|:------:|
| `endMessage` | [String](#string) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
endMessage: Um evento terminou!
```

<div align="center">

![create_events_end_message.jpg](../../../img/wiki/create_events_end_message.jpg)

</div>

</div>

</details>

***

### eventStartCommands

Define os comandos que são executados no início do evento.

| Chave                |             Valores              | Padrão |
|----------------------|:--------------------------------:|:------:|
| `eventStartCommands` | [Lista de Strings](#string_list) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
eventStartCommands:
- say O evento começa agora!!
- "$chance=0.5$ say Que spawn!"
```

<div align="center">

![create_events_start_commands.jpg](../../../img/wiki/create_events_start_commands.jpg)

</div>

</div>

</details>

***

### eventEndCommands

Define os comandos que são executados no final do evento.

| Chave              |             Valores              | Padrão |
|--------------------|:--------------------------------:|:------:|
| `eventEndCommands` | [Lista de Strings](#string_list) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
eventEndCommands:
- say O evento termina, que triste.
- "$chance=0.5$ say Muito lento, amigo!"
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
startMessage: "Evento legal a começar!"
endMessage: "Evento legal a terminar!"
eventStartCommands:
- say O evento começou!
eventEndCommands:
- say O evento terminou!
```

</div>

</details>


</div>

## Eventos de Ação

<div align="center">

Eventos que têm uma chance de serem executados quando uma ação específica, como quebrar um bloco ou pescar, acontece.

### chance

Define a chance de o evento acontecer quando a ação acontece.

| Chave    |          Valores          | Padrão |
|----------|:-------------------------:|:------:|
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

Define a lista de materiais a verificar se a ação estiver definida como `BREAK_BLOCK`.

| Chave                |                                         Valores                                         | Padrão |
|----------------------|:---------------------------------------------------------------------------------------:|:------:|
| `breakableMaterials` | Lista de [materiais](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | nenhum |

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

Define uma chance de 0,1% de executar o evento quando um bloco de minério de carvão é quebrado, assumindo que o tipo de
evento é `BREAK_BLOCK`.

</details>

</div>

## Eventos Cronometrados

<div align="center">

Eventos Cronometrados são eventos que acontecem em intervalos de tempo configuráveis. Assim que o cooldown para um
evento cronometrado termina, um evento cronometrado aleatório é escolhido a partir da lista de eventos cronometrados com
base no peso do evento.

### spawnType

Define o [Spawn Personalizado]($language$/elitemobs/creating_spawns.md) usado pelo evento, que define onde o chefe pode
surgir.

| Chave       |            Valores            | Padrão |
|-------------|:-----------------------------:|:------:|
| `spawnType` | [Nome de Ficheiro](#filename) | nenhum |

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

| Chave           |       Valores       | Padrão |
|-----------------|:-------------------:|:------:|
| `localCooldown` | [Inteiro](#integer) |  `0`   |

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

| Chave            |       Valores       | Padrão |
|------------------|:-------------------:|:------:|
| `globalCooldown` | [Inteiro](#integer) |  `0`   |

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

Define o peso do evento, afetando a chance de ser escolhido em relação a outros eventos. **Recomendado: 100**.

| Chave    |      Valores      | Padrão |
|----------|:-----------------:|:------:|
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

| Chave           |       Valores       | Padrão |
|-----------------|:-------------------:|:------:|
| `eventDuration` | [Inteiro](#integer) |  `0`   |

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

| Chave                    |       Valores        | Padrão |
|--------------------------|:--------------------:|:------:|
| `eventEndsWithBossDeath` | [Booleano](#boolean) | `true` |

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

Define a hora do jogo em que o evento terminará.

| Chave          |       Valores        | Padrão |
|----------------|:--------------------:|:------:|
| `eventEndTime` | [Booleano](#boolean) | `true` |

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

| Chave                |       Valores       | Padrão |
|----------------------|:-------------------:|:------:|
| `minimumPlayerCount` | [Inteiro](#integer) |  `1`   |

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

*Note que os eventos são colocados em fila, o que significa que eles só começarão quando as condições definidas no `customSpawn` forem atendidas.*

<details> 

<summary align="center"><b>Exemplo de Configuração de Eventos</b></summary>

<div align="left">

```yml
isEnabled: true
bossFilenames:
- "cool_boss.yml"
- "other_cool_boss.yml"
announcementPriority: 3
startMessage: "Evento legal a começar!"
endMessage: "Evento legal a terminar!"
eventStartCommands:
- say O evento começou!
eventEndCommands:
- say O evento terminou!
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
