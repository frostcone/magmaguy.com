[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

Baús de Tesouro são uma funcionalidade que permite aos administradores criar baús que podem largar itens ou gerar um
boss mimic (hostil).

<div align="center">

<div align="left">

## Valores

</div>

### isEnabled

Define se um baú de tesouro está ativado.

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

*Isto precisa de ser um material de baú válido, como `CHEST` ou `BARREL`.*

<div align="center">

![create_chest_material.jpg](../../../img/wiki/create_chest_material.jpg)

</div>

</div>

</details>

***

### facing

Define a direção para a qual o baú está virado.

| Chave       |   Valores    | Padrão |
|-----------|:-----------:|:-------:|
| `facing` | Especial [1] | `CHEST` |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
facing: CHEST
```

*Isto precisa de ser um material de baú válido, como `CHEST` ou `BARREL`.*

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

Define se o baú deve ser largado para um jogador ou para vários jogadores.

Baús `SINGLE` desaparecem depois de serem abertos e reaparecem quando são reabastecidos. Baús `GROUP` permanecem no
local e indicam aos jogadores individuais que estão em tempo de espera.

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

Lista os itens que o baú de tesouro deve largar quando aberto.

| Chave      |                          Valores                          | Padrão |
|------------|:---------------------------------------------------------:|:------:|
| `lootList` | [Tabela de Itens EM]($language$/elitemobs/loot_tables.md) | nenhum |

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

Define a probabilidade de gerar um boss hostil em vez de largar itens.

| Chave         |       Valores       | Padrão |
|---------------|:-------------------:|:------:|
| `mimicChance` | [Decimal](#decimal) |  `0`   |

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

Especifica a lista de bosses hostis disponíveis para gerar. Um único boss será selecionado aleatoriamente desta lista
para ser gerado.

A lista também suporta um sistema de peso que pode implementar para garantir que alguns bosses sejam escolhidos com mais
frequência do que outros.

| Chave                   |                Valores                | Padrão |
|-------------------------|:-------------------------------------:|:------:|
| `mimicCustomBossesList` | [Lista de Strings](#lista_de_strings) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
mimicCustomBossesList:
- my_cool_mimic_boss.yml
- weak_mimic_boss.yml
```

*Se quiser atribuir pesos aos bosses, a lista deve ser formatada da seguinte forma:*

```yml
mimicCustomBossesList:
- my_cool_mimic_boss.yml:60
- weak_mimic_boss.yml:40
```

*Nesta configuração, é mais provável que `my_cool_mimic_boss.yml` seja escolhido para gerar do
que `weak_mimic_boss.yml`.*

</div>

</details>

***

### restockTimer

Define o tempo, em minutos, antes de o baú ser reabastecido com itens.

| Chave          |       Valores       | Padrão |
|----------------|:-------------------:|:------:|
| `restockTimer` | [Inteiro](#inteiro) |  `0`   |

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

Define os efeitos de partículas que o baú irá emitir.

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

Define os locais onde o baú de tesouro irá gerar.

Os locais podem ser definidos mais facilmente através de `/em addTreasureChest <nome_ficheiro_baú_tesouro.yml>

| Chave       |                Valores                | Padrão |
|-------------|:-------------------------------------:|:------:|
| `locations` | [Lista de Strings](#lista_de_strings) | nenhum |

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

Define o nível mínimo da guild necessário para abrir o baú.

| Chave       |       Valores       | Padrão |
|-------------|:-------------------:|:------:|
| `chestTier` | [Inteiro](#inteiro) | nenhum |

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

Define se o baú deve ser instanciado (para uso em dungeons instanciadas).
Todos os tempos de espera são desativados quando os baús são colocados em dungeons.

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

Depois de um baú ter sido saqueado, o plugin escreverá esta chave para controlar o tempo de reabastecimento.

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

<summary align="center"><b>Exemplo de Configuração de Baú de Tesouro</b></summary>

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
