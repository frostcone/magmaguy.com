[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

Os Cofres de Tesouro são uma funcionalidade que permite aos administradores criar cofres que podem largar itens ou gerar um chefe Mimic (hostil).

<div align="center">

<div align="left">

## Valores

</div>

### isEnabled

Define se um cofre de tesouro está ativado.

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

### chestType

Define o tipo de material do cofre.

| Chave       |        Valores         | Padrão |
|-----------|:---------------------:|:-------:|
| `chestType` | [Material](#material) | `CHEST` |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
chestType: CHEST
```
*Este precisa ser um material de cofre válido, como `CHEST` ou `BARREL`.*

<div align="center">

![create_chest_material.jpg](../../../img/wiki/create_chest_material.jpg)

</div>

</div>

</details>

***

### facing

Define a direção para a qual o cofre está virado.

| Chave       |   Valores    | Padrão |
|-----------|:-----------:|:-------:|
| `facing` | Especial [1] | `CHEST` |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
facing: CHEST
```
*Este precisa ser um material de cofre válido, como `CHEST` ou `BARREL`.*

</div>

</details>

**Especial [1]**

<details> 

<summary><b>Expandir Tabela</b></summary>

| Direção  |
|---------|
| `NORTH` |
| `SOUTH` |
| `WEST`  |
| `EAST`  |


</details>

***

### dropStyle

Define se o cofre é para ser dropado para um jogador ou vários jogadores.

Cofres `SINGLE` desaparecem depois de serem abertos e reaparecem quando são reabastecidos. Cofres `GROUP` permanecem e indicam a jogadores individuais que estão em cooldown.

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

Lista o saque que o cofre de tesouro deve largar quando aberto.

| Chave       |                        Valores                        | Padrão |
|-----------|:----------------------------------------------------:|:-------:|
| `lootList` | [Tabela de Saque EM]($language$/elitemobs/loot_tables.md) |  nenhum   |

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

Define a chance de gerar um chefe hostil em vez de largar saque.

| Chave       |      Valores       | Padrão |
|-----------|:-----------------:|:-------:|
| `mimicChance` | [Número Decimal](#número-decimal) |   `0`   |

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

Especifica a lista de chefes hostis disponíveis para geração. Um único chefe será selecionado aleatoriamente desta lista para geração.

A lista também suporta um sistema de peso que pode implementar para garantir que alguns chefes sejam escolhidos com mais frequência do que outros.

| Chave       |      Valores       | Padrão |
|-----------|:-----------------:|:-------:|
| `mimicCustomBossesList` | [Lista de Strings](#lista-de-strings) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
mimicCustomBossesList:
- my_cool_mimic_boss.yml
- weak_mimic_boss.yml
```
*Se desejar atribuir pesos aos chefes, a lista deve ser formatada da seguinte forma:*

```yml
mimicCustomBossesList:
- my_cool_mimic_boss.yml:60
- weak_mimic_boss.yml:40
```

*Nesta configuração, `my_cool_mimic_boss.yml` é mais provável de ser escolhido para gerar do que `weak_mimic_boss.yml`.*

</div>

</details>

***

### restockTimer

Define o tempo, em minutos, antes que o cofre seja reabastecido com saque.

| Chave       |      Valores       | Padrão |
|-----------|:-----------------:|:-------:|
| `restockTimer` | [Número Inteiro](#número-inteiro) |   `0`   |

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

Define os efeitos de partícula que o cofre irá gerar.

| Chave       |      Valores       | Padrão |
|-----------|:-----------------:|:-------:|
| `effects` | [Partícula](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) |  nenhum   |

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

Define as localizações onde o cofre de tesouro irá surgir.

As localizações podem ser definidas mais facilmente através de `/em addTreasureChest <nome_do_ficheiro_cofre_de_tesouro.yml>

| Chave       |           Valores            | Padrão |
|-----------|:---------------------------:|:-------:|
| `locations` | [Lista de Strings](#lista-de-strings) |  nenhum   |

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

Define o nível mínimo da guild necessário para abrir o cofre.

| Chave       |           Valores            | Padrão |
|-----------|:---------------------------:|:-------:|
| `chestTier` | [Número Inteiro](#número-inteiro) |  nenhum   |

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

Define se o cofre deve ser instanciado (para uso em dungeons instanciadas).
Todos os timers de reabastecimento são desativados quando os cofres são colocados em dungeons.

**NÃO DEFINA ESTE VALOR MANUALMENTE**.

| Chave       |     Valores     | Padrão |
|-----------|:--------------:|:-------:|
| `instanced` | [Booleano](#booleano) |  `false`   |

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

Depois de um cofre ter sido saqueado, o plugin irá escrever esta chave para rastrear o tempo de reabastecimento.

**NÃO DEFINA ESTE VALOR MANUALMENTE**.

| Chave       |     Valores     | Padrão |
|-----------|:--------------:|:-------:|
| `restockTime` | Timestamp Unix |  nenhum   |

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

<summary align="center"><b>Exemplo de Configuração de Cofre de Tesouro</b></summary>

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
