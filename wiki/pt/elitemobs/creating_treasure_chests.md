[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Baús do Tesouro

Baús do Tesouro são um recurso que permite que os administradores criem baús que podem deixar cair loot ou gerar um chefe (hostil) mímico.

<div align="center">

<div align="left">

## Valores

</div>

### isEnabled

Define se um baú do tesouro está habilitado.

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

### chestType

Define o tipo de material do baú.

| Chave       |        Valores         | Padrão |
|-----------|:---------------------:|:-------:|
| `chestType` | [Material](#material) | `CHEST` |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
chestType: CHEST
```
*Isso precisa ser um material de baú válido, como `CHEST` ou `BARREL`*.

<div align="center">

![create_chest_material.jpg](../../../img/wiki/create_chest_material.jpg)

</div>

</div>

</details>

***

### facing

Define a direção voltada do baú.

| Chave       |   Valores    | Padrão |
|-----------|:-----------:|:-------:|
| `facing` | Especial [1] | `CHEST` |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
facing: CHEST
```
*Isso precisa ser um material de baú válido, como `CHEST` ou `BARREL`*.

</div>

</details>

**Especial [1]**

<details> 

<summary><b>Expandir Tabela</b></summary>

| Voltado  |
|---------|
| `NORTH` |
| `SOUTH` |
| `WEST`  |
| `EAST`  |


</details>

***

### dropStyle

Define se o baú é destinado a ser deixado cair para um jogador ou para vários jogadores.

Os baús `SINGLE` desaparecem depois de serem abertos e reaparecem quando são reabastecidos. Os baús `GROUP` permanecem por perto e informam os jogadores individualmente que estão em tempo de espera.

| Chave       |       Valores       | Padrão |
|-----------|:------------------:|:-------:|
| `dropStyle` | `SINGLE` / `GROUP` | `SINGLE` |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
dropStyle: SINGLE
```

</div>

</details>

***

### lootList

Lista o loot que o baú do tesouro deve deixar cair quando aberto.

| Chave       |                        Valores                        | Padrão |
|-----------|:----------------------------------------------------:|:-------:|
| `lootList` | [Tabela de Loot do EM]($language$/elitemobs/loot_tables.md) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
lootList:
- filename=elite_scrap_tiny.yml:chance=0.90
- magmaguys_toothpick.yml
```

</div>

</details>

***

### mimicChance

Define a chance de gerar um chefe hostil em vez de deixar cair loot.

| Chave       |      Valores       | Padrão |
|-----------|:-----------------:|:-------:|
| `mimicChance` | [Double](#double) |   `0`   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
mimicChance: 0.5
```

</div>

</details>

***

### mimicCustomBossesList

Especifica a lista de chefes hostis disponíveis para geração. Um único chefe será selecionado aleatoriamente nesta lista para geração. 

A lista também suporta um sistema de peso que você pode implementar para garantir que alguns chefes sejam escolhidos com mais frequência do que outros.

| Chave       |      Valores       | Padrão |
|-----------|:-----------------:|:-------:|
| `mimicCustomBossesList` | [Lista de Strings](#string_list) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
mimicCustomBossesList:
- my_cool_mimic_boss.yml
- weak_mimic_boss.yml
```
*Se você deseja atribuir pesos aos chefes, a lista deve ser formatada da seguinte forma:*

```yml
mimicCustomBossesList:
- my_cool_mimic_boss.yml:60
- weak_mimic_boss.yml:40
```

*Nesta configuração, `my_cool_mimic_boss.yml` tem maior probabilidade de ser escolhido para geração do que `weak_mimic_boss.yml`.*

</div>

</details>

***

### restockTimer

Define o tempo, em minutos, antes que o baú seja reabastecido com loot.

| Chave       |      Valores       | Padrão |
|-----------|:-----------------:|:-------:|
| `restockTimer` | [Integer](#integer) |   `0`   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
restockTimer: 30
```

</div>

</details>

***

### effects

Define os efeitos de partículas que o baú terá.

| Chave       |      Valores       | Padrão |
|-----------|:-----------------:|:-------:|
| `effects` | [Particle](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
effects:
- DRIP_LAVA
- SMOKE_NORMAL
```

<div align="center">

![create_chest_effects.jpg](../../../img/wiki/create_chest_effects.jpg)

</div>

</div>

</details>

***

### locations

Define as localizações onde o baú do tesouro será gerado.

As localizações podem ser definidas mais facilmente por meio de `/em addTreasureChest <treasurechestfilename.yml>

| Chave       |           Valores            | Padrão |
|-----------|:---------------------------:|:-------:|
| `locations` | [Lista de Strings](#string_list) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
locations:
- my_world,10,50,10,0,0
- my_nether_world,12,58,12,0,0
```

</div>

</details>

***

### chestTier

Define o nível mínimo de guilda necessário para abrir o baú.

| Chave       |           Valores            | Padrão |
|-----------|:---------------------------:|:-------:|
| `chestTier` | [Integer](#integer) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
chestTier: 3
```

</div>

</details>


***

### instanced

Define se o baú deve ser instanciado (para uso em masmorras instanciadas).
Todos os tempos de reabastecimento são desabilitados quando os baús são colocados em masmorras.

**NÃO DEFINA ESTE VALOR MANUALMENTE**.

| Chave       |     Valores     | Padrão |
|-----------|:--------------:|:-------:|
| `instanced` | [Booleano](#boolean) |  `false`   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
instanced: true
```

</div>

</details>

</div>

***

### restockTime

Depois que um baú for saqueado, o plugin escreverá esta chave para rastrear o tempo de reabastecimento. 

**NÃO DEFINA ESTE VALOR MANUALMENTE**.

| Chave       |     Valores     | Padrão |
|-----------|:--------------:|:-------:|
| `restockTime` | Carimbo de Tempo Unix |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
restockTime: 1707394380
```

</div>

</details>

</div>

***

<details> 

<summary align="center"><b>Exemplo de Configuração de Baú do Tesouro</b></summary>

<div align="left">

```yml
isEnabled: true
chestType: CHEST
facing: NORTH
dropStyle: MULTIPLE
lootList:
- filename=elite_scrap_tiny.yml:chance=0.90
- magmaguys_toothpick.yml:chance=0.95
mimicChance: 0.50
mimicCustomBossesList:
- balrog.yml
- killer_rabbit_of_caerbannog.yml
restockTimer: 1
effects: SMOKE_NORMAL
locations:
- world,0.0,-60.0,-14.0,0.0,0.0
```

<div align="center">

![create_chest_chest.jpg](../../../img/wiki/create_chest_chest.jpg)

</div>

</div>

</details>


