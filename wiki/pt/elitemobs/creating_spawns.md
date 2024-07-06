[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# O que são Gerações Personalizadas?

Gerações Personalizadas são usadas por Eventos e reforços globais para definir como, onde e quando um evento deve gerar o chefe para aquele evento.

Eventos e reforços globais definem qual geração eles estão usando escrevendo seu nome de arquivo.

# Criando Gerações Personalizadas

Gerações Personalizadas vão para a pasta `customspawns`. Uma Geração Personalizada pode ser usada por vários eventos ao mesmo tempo, para que você não precise criar uma por evento.

Aqui está um exemplo de Geração Personalizada:

```yaml
isEnabled: true
validWorldTypes:
- NORMAL
- CUSTOM
bypassWorldGuard: false
isSurfaceSpawn: true
```

## Criando uma Geração em Qualquer Lugar
Para criar uma geração que pode ocorrer **em qualquer lugar**, sua configuração deve se parecer com o seguinte:

```yml
isEnabled: true
canSpawnInLight: true
```
Esta configuração permite que os mobs sejam gerados em qualquer localização, em qualquer mundo, a qualquer momento e durante qualquer fase da lua.

Se você estiver interessado em criar uma geração mais personalizada, continue lendo abaixo.

## Valores

<div align="center">

***

### isEnabled

Define se a geração está habilitada.

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

### lowestYLevel

Define o nível Y mais baixo (altura do mapa) usado.

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `lowestYLevel` | [Integer](#integer) |   `0`   |

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

Define o nível Y mais alto (altura do mapa) usado.

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `highestYLevel` | [Integer](#integer) |  `320`  |

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

Define a lista dos mundos onde a geração personalizada pode acontecer. Esta configuração pode ser omitida para permitir que **todos** os seus mundos sejam válidos.

| Chave       |           Valores            | Padrão |
|-----------|:---------------------------:|:-------:|
| `validWorlds` | [Lista de Strings](#string_list) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
validWorlds:
- WORLD
- FUN_LAND
```

*Se você quiser que todos os seus mundos sejam válidos, basta não usar a configuração ou formatá-la assim:*

```yml
validWorlds: []
```

</div>

</details>

***

### validWorldEnvironments

Define a lista de ambientes de mundo válidos onde a geração personalizada pode acontecer. Esta configuração pode ser omitida para permitir que **todos** os ambientes sejam válidos.

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

*Se você quiser que todos os ambientes sejam válidos, basta não usar a configuração ou formatá-la assim:*

```yml
validWorldEnvironments: []
```

</div>

</details>

***

### validBiomes

Define a lista de biomas válidos onde a geração personalizada pode acontecer. Esta configuração pode ser omitida para permitir que **todos** os biomas sejam válidos.

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

*Se você quiser que todos os ambientes sejam válidos, basta não usar a configuração ou formatá-la assim:*

```yml
validBiomes: []
```

</div>

</details>

***

### earliestTime

Define o horário mais cedo no jogo em que a geração personalizada pode acontecer.

| Chave       |           Valores            | Padrão |
|-----------|:---------------------------:|:-------:|
| `earliestTime` | [Integer](#integer) |   `0`   |

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

Define o horário mais tardio no jogo em que a geração personalizada pode acontecer.

| Chave       |           Valores            | Padrão |
|-----------|:---------------------------:|:-------:|
| `latestTime` | [Integer](#integer) | `24000` |

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

Define o horário mais cedo no jogo em que a geração personalizada pode acontecer.

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

| Fase da Lua        | Pré-visualização  |
|-------------------|:--------:|
| `NEW_MOON`        |    🌑    |
| `WAXING_CRESCENT` |    🌒    |
| `FIRST_QUARTER`   |    🌓    |
| `WAXING_GIBBOUS`  |    🌔    |
| `FULL_MOON`       |    🌕    |
| `WANING_GIBBOUS`  |    🌖    |
| `WANING_CRESCENT` |    🌘    |

</details>

***

### bypassWorldGuard

Define se a geração personalizada ignorará sistemas de proteção como o WorldGuard.

| Chave       |           Valores            | Padrão |
|-----------|:---------------------------:|:-------:|
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

Especifica se a geração personalizada pode ocorrer em blocos iluminados por fontes de luz.

| Chave       |           Valores            | Padrão |
|-----------|:---------------------------:|:-------:|
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

Define se a geração personalizada só pode acontecer na superfície de um mundo.

| Chave       |           Valores            | Padrão |
|-----------|:---------------------------:|:-------:|
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

Define se a geração personalizada só pode acontecer no subsolo.

| Chave       |           Valores            | Padrão |
|-----------|:---------------------------:|:-------:|
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

