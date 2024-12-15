[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# O que são Spawns Personalizados?

Spawns Personalizados são usados por Eventos e reforços globais para definir como, onde e quando um evento deve gerar o boss desse evento.

Eventos e reforços globais definem qual spawn estão a usar ao escreverem o nome do ficheiro.

# Criar Spawns Personalizados

Spawns Personalizados são colocados na pasta `customspawns`. Um Spawn Personalizado pode ser usado por vários eventos ao mesmo tempo, para que não tenha de criar um por evento.

Aqui está um exemplo de Spawn Personalizado:

```yaml
isEnabled: true
validWorldTypes:
- NORMAL
- CUSTOM
bypassWorldGuard: false
isSurfaceSpawn: true
```

## Criar um Spawn Em Qualquer Lugar
Para criar um spawn que pode ocorrer **em qualquer lugar**, a sua configuração deve ser semelhante à seguinte:

```yml
isEnabled: true
canSpawnInLight: true
```
Esta configuração permite que os mobs gerem em qualquer local, em qualquer mundo, a qualquer hora e durante qualquer fase da lua.

Se estiver interessado em criar um spawn mais personalizado, continue a ler abaixo.

## Valores

<div align="center">

***

### isEnabled

Define se o spawn está ativado.

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `isEnabled` | [Booleano](#booleano) | `true`  |

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

Define o nível y mais baixo (altura do mapa) usado.

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `lowestYLevel` | [Inteiro](#inteiro) |   `0`   |

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

Define o nível y mais alto (altura do mapa) usado.

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `highestYLevel` | [Inteiro](#inteiro) |  `320`  |

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

| Chave       |           Valores            | Padrão |
|-----------|:---------------------------:|:-------:|
| `validWorlds` | [Lista de Strings](#lista_de_strings) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
validWorlds:
- MUNDO
- TERRA_DIVERTIDA
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
- PLANO
- GRANDES_BIOMAS
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
- DESERTO
- CAMPOS_DE_COGUMELOS
```

*Se quiser que todos os ambientes sejam válidos, pode simplesmente não usar a configuração ou formatá-la assim:*

```yml
validBiomes: []
```

</div>

</details>

***

### earliestTime

Define a hora mais antiga no jogo em que o spawn personalizado pode acontecer.

| Chave       |           Valores            | Padrão |
|-----------|:---------------------------:|:-------:|
| `earliestTime` | [Inteiro](#inteiro) |   `0`   |

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

Define a hora mais recente no jogo em que o spawn personalizado pode acontecer.

| Chave       |           Valores            | Padrão |
|-----------|:---------------------------:|:-------:|
| `latestTime` | [Inteiro](#inteiro) | `24000` |

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

Define a hora mais antiga no jogo em que o spawn personalizado pode acontecer.

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

| Fase da Lua       |  Pré-visualização  |
|-------------------|:--------:|
| `LUA_NOVA`       |    🌑    |
| `LUA_CRESCENTE` |    🌒    |
| `PRIMEIRO_QUARTO`  |    🌓    |
| `LUA_GIBOSA_CRESCENTE`  |    🌔    |
| `LUA_CHEIA`     |    🌕    |
| `LUA_GIBOSA_MIGUANTE` |    🌖    |
| `LUA_MIGUANTE`   |    🌘    |

</details>

***

### bypassWorldGuard

Define se o spawn personalizado irá ignorar sistemas de proteção como o WorldGuard.

| Chave       |           Valores            | Padrão |
|-----------|:---------------------------:|:-------:|
| `bypassWorldGuard` | [Booleano](#booleano) | `false` |

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

| Chave       |           Valores            | Padrão |
|-----------|:---------------------------:|:-------:|
| `canSpawnInLight` | [Booleano](#booleano) | `false` |

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

| Chave       |           Valores            | Padrão |
|-----------|:---------------------------:|:-------:|
| `isSurfaceSpawn` | [Booleano](#booleano) | `false` |

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

| Chave       |           Valores            | Padrão |
|-----------|:---------------------------:|:-------:|
| `isUndergroundSpawn` | [Booleano](#booleano) | `false` |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
isUndergroundSpawn: false
```

</div>

</details>

</div>
