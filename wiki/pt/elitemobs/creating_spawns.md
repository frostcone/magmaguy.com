[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# O Que São Spawns Personalizados?

Spawns Personalizados são utilizados por Eventos e reforços globais para definir como, onde e quando um evento deve
gerar o boss para esse evento.

Eventos e reforços globais definem qual spawn estão a usar ao escrever o nome do ficheiro.

# Criar Spawns Personalizados

Spawns Personalizados são colocados na pasta `customspawns`. Um Spawn Personalizado pode ser usado por vários eventos ao
mesmo tempo, por isso não precisa de criar um por evento.

Aqui está um exemplo de um Spawn Personalizado:

```yaml
isEnabled: true
validWorldTypes:
- NORMAL
- CUSTOM
bypassWorldGuard: false
isSurfaceSpawn: true
```

## Criar um Spawn em Qualquer Lugar

Para criar um spawn que possa ocorrer **em qualquer lugar**, a sua configuração deve ser semelhante a seguinte:

```yml
isEnabled: true
canSpawnInLight: true
```

Esta configuração permite que mobs apareçam em qualquer local, em qualquer mundo, a qualquer hora e durante qualquer
fase da lua.

Se estiver interessado em criar um spawn mais personalizado, continue a ler abaixo.

## Valores

<div align="center">

***

### isEnabled

Define se o spawn está ativo.

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

### lowestYLevel

Define o nível y (altura do mapa) mais baixo utilizado.

| Chave          |       Valores       | Padrão |
|----------------|:-------------------:|:------:|
| `lowestYLevel` | [Inteiro](#integer) |  `0`   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
lowestYLevel: 0
```

</div>

</details>

***

### highestYLevel

Define o nível y (altura do mapa) mais baixo utilizado.

| Chave           |       Valores       | Padrão |
|-----------------|:-------------------:|:------:|
| `highestYLevel` | [Inteiro](#integer) | `320`  |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
highestYLevel: 320
```

</div>

</details>

***

### validWorlds

Define a lista dos mundos onde o spawn personalizado pode acontecer. Esta configuração pode ser omitida para permitir que **todos** os seus mundos sejam válidos.

| Chave         |             Valores              | Padrão |
|---------------|:--------------------------------:|:------:|
| `validWorlds` | [Lista de Strings](#string_list) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
validWorlds:
- WORLD
- FUN_LAND
```

*Se quiser que todos os seus mundos sejam válidos, pode simplesmente não usar a configuração ou formatá-la assim:*

```yml
validWorlds: []
```

</div>

</details>

***

### validWorldEnvironments

Define a lista de ambientes de mundo válidos onde o spawn personalizado pode acontecer. Esta configuração pode ser omitida para permitir que **todos** os ambientes sejam válidos.

| Chave       |           Valores            | Padrão |
|-----------|:---------------------------:|:-------:|
| `validWorldEnvironments` | [Lista de Ambientes](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/WorldType.html) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
validWorldEnvironments:
- FLAT
- LARGE_BIOMES
```

*Se quiser que todos os ambientes sejam válidos, pode simplesmente não usar a configuração ou formatá-la assim:*

```yml
validWorldEnvironments: []
```

</div>

</details>

***

### validBiomes

Define a lista de biomas válidos onde o spawn personalizado pode acontecer. Esta configuração pode ser omitida para permitir que **todos** os biomas sejam válidos.

| Chave       |           Valores            | Padrão |
|-----------|:---------------------------:|:-------:|
| `validBiomes` | [Lista de Biomas](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
validBiomes:
- DESERT
- MUSHROOM_FIELDS
```

*Se quiser que todos os ambientes sejam válidos, pode simplesmente não usar a configuração ou formatá-la assim:*

```yml
validBiomes: []
```

</div>

</details>

***

### earliestTime

Define a hora mais cedo no jogo em que o spawn personalizado pode acontecer.

| Chave          |       Valores       | Padrão |
|----------------|:-------------------:|:------:|
| `earliestTime` | [Inteiro](#integer) |  `0`   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
earliestTime: 0
```

</div>

</details>

***

### latestTime

Define a hora mais tardia no jogo em que o spawn personalizado pode acontecer.

| Chave        |       Valores       | Padrão  |
|--------------|:-------------------:|:-------:|
| `latestTime` | [Inteiro](#integer) | `24000` |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
latestTime: 24000
```

</div>

</details>

***

### moonPhase

Define a hora mais cedo no jogo em que o spawn personalizado pode acontecer.

| Chave       |   Valores    | Padrão |
|-----------|:-----------:|:-------:|
| `moonPhase` | Especial [1] | `24000` |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
moonPhase: 24000
```

</div>

</details>

**Especial [1]**

<details> 

<summary><b>Expandir Tabela</b></summary>

| Fase da Lua       | Visualização |
|-------------------|:------------:|
| `NEW_MOON`        |      🌑      |
| `WAXING_CRESCENT` |      🌒      |
| `FIRST_QUARTER`   |      🌓      |
| `WAXING_GIBBOUS`  |      🌔      |
| `FULL_MOON`       |      🌕      |
| `WANING_GIBBOUS`  |      🌖      |
| `WANING_CRESCENT` |      🌘      |

</details>

***

### bypassWorldGuard

Define se o spawn personalizado irá ignorar sistemas de proteção como o WorldGuard.

| Chave              |       Valores        | Padrão  |
|--------------------|:--------------------:|:-------:|
| `bypassWorldGuard` | [Booleano](#boolean) | `false` |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
bypassWorldGuard: false
```

</div>

</details>

***

### canSpawnInLight

Especifica se o spawn personalizado pode ocorrer em blocos iluminados por fontes de luz.

| Chave             |       Valores        | Padrão  |
|-------------------|:--------------------:|:-------:|
| `canSpawnInLight` | [Booleano](#boolean) | `false` |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
canSpawnInLight: false
```

</div>

</details>

***

### isSurfaceSpawn

Define se o spawn personalizado só pode acontecer na superfície de um mundo.

| Chave            |       Valores        | Padrão  |
|------------------|:--------------------:|:-------:|
| `isSurfaceSpawn` | [Booleano](#boolean) | `false` |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
isSurfaceSpawn: false
```

</div>

</details>

***

### isUndergroundSpawn

Define se o spawn personalizado só pode acontecer no subsolo.

| Chave                |       Valores        | Padrão  |
|----------------------|:--------------------:|:-------:|
| `isUndergroundSpawn` | [Booleano](#boolean) | `false` |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
isUndergroundSpawn: false
```

</div>

</details>

</div>
