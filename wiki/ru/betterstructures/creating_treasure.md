# Arquivo de Tesouro

Os arquivos de tesouro são o que determina as tabelas de loot para os baús do BetterStructures. Eles geralmente são atribuídos aos [geradores]($language$/betterstructures/creating_generators.md&section=treasurefilename), mas também podem ser definidos no nível de uma [configuração de construção individual]($language$/betterstructures/creating_structures.md&section=treasurefile).

Essas tabelas de loot são bem poderosas, mas também exigem conhecimento de alguns conceitos básicos de estatística para serem compreendidas.

<details>
<summary>
Leia sobre esses conceitos aqui, o restante da página pressupõe que você os entende!
</summary>

***Probabilidade ponderada***

O BetterStructures e o EliteMobs usam frequentemente o conceito de probabilidade ponderada. Isso é para resolver um problema simples: como você pode definir a chance de escolher um item de uma lista de itens potencialmente infinitos?

A probabilidade ponderada resolve esse problema atribuindo um peso a cada item. Se você tiver 100 itens e cada um tiver um peso de 1, então todos eles têm a mesma chance - 1% - de serem escolhidos. Se você adicionar mais um item, elevando o total para 101 itens, e dar a esse último item uma chance de 1, todos os itens ainda têm a mesma chance - ~0.99% - de serem escolhidos. Se você der ao último item um peso de 2, a chance de ele ser escolhido aumenta - o novo peso total é 102, o último elemento tem um peso de 2 e 100/102 = ~0.98%, então 0.98%+0.98% = 1.96% de chance de ser escolhido. Se você der ao último item um peso de 100, o novo peso é 200, e como metade desse peso é seu novo item, seu novo item tem 50% de chance de ser escolhido.

Como você pode ver, isso é bom para usar quando você pode ter listas de centenas de coisas para randomizar.

***Distribuição Gaussiana***

Uma distribuição gaussiana é uma função matemática em forma de sino.

<img src="http://sfonline.barnard.edu/wp-content/uploads/2015/12/gaussian-distribution.jpg">

Você pode estar se perguntando como isso é relevante para o sistema de loot. Uma coisa que o BetterStructures precisa decidir ao definir loot em baús é quão loot aparece nesses baús. A quantidade deve ser consistentemente em torno de um número específico, mas idealmente não tão previsível a ponto de abrir um baú se tornar menos emocionante.

Para atingir esse efeito semi-aleatório, a distribuição gaussiana é usada para randomizar *quantos* itens são escolhidos. Uma vez que essa quantidade é escolhida, a *probabilidade ponderada* escolhe um elemento da tabela de raridade aleatoriamente e levando em consideração os pesos.

Então, como a distribuição gaussiana funciona?

Felizmente, você não precisa se preocupar com como a matemática por trás disso funciona e pode, em vez disso, se concentrar nas duas configurações que a modificam: média e desvio padrão.

*Média*

Para simplificar, `mean` define o meio da curva gaussiana, o que significa que define a quantidade mais provável de itens que aparecerão em um baú. Essencialmente, se você quiser que seus baús geralmente tenham 5 itens, defina sua média como 5.

*Desvio padrão*

Imagine que a quantidade média de itens em um baú é 5. O `desvio padrão` ajuda a decidir quanto esse número pode mudar de um baú para outro.

Pequeno `Desvio Padrão` (por exemplo, 1): Isso significa que a maioria dos baús terá itens muito próximos da média, como 4, 5 ou 6 itens. É uma experiência mais previsível. Por exemplo, se um baú tiver um desvio padrão de 1, você pode esperar que quase todos os baús tenham entre 4 e 6 itens.

Médio `Desvio Padrão` (por exemplo, 2): Aqui, há mais variedade. Os baús podem ter de 3 a 7 itens. Embora 5 itens ainda sejam comuns, não é incomum encontrar baús com um pouco mais ou menos. Portanto, com um desvio padrão de 2, você pode ocasionalmente encontrar um baú com apenas 3 itens, ou se tiver sorte, um com 7 itens.

Grande `Desvio Padrão` (por exemplo, 3 ou mais): Agora as coisas ficam realmente surpreendentes! Os baús podem ter apenas 2 itens ou até 8 ou mais. Isso significa que você pode encontrar um baú com apenas alguns itens, mas também há uma chance de encontrar um baú carregado de coisas boas. Por exemplo, com um desvio padrão de 3, um baú pode ter de 2 a 8 itens, tornando a abertura de cada baú um jogo emocionante.

***A média padrão é 4 e o desvio padrão padrão é 3.***

</details>

***

# Formato especial

Os arquivos de tesouro possuem um formato especial que se parece com isso:

```yml
isEnabled: true
mean: 4.0
standardDeviation: 3.0
items:
  common:
    weight: 60
    items:
    - amount: 1-1
      material: STONE_PICKAXE
      procedurallyGenerateEnchantments: true
      weight: 1.0
    - amount: 1-1
      material: STONE_SHOVEL
      procedurallyGenerateEnchantments: true
      weight: 1.0
  rare:
    weight: 30
    items:
    - amount: 1-1
      material: ANVIL
      weight: 6.0
    - amount: 1-6
      material: BEETROOT
      weight: 6.0
  epic:
    weight: 10
    items:
    - amount: 2-10
      material: DIAMOND
      weight: 1.0
    - amount: 1-1
      material: DIAMOND_AXE
      weight: 6.0
procedurallyGeneratedItemSettings:
  golden_sword:
    bane_of_arthropods:
      minLevel: 1
      maxLevel: 5
      chance: 0.2
    looting:
      minLevel: 1
      maxLevel: 3
      chance: 0.2

```

*Observação: esta é uma versão muito reduzida do arquivo, o arquivo real tem 2599 linhas, pois cobre muito mais loot e todos os encantamentos possíveis.*

# isEnabled

| Chave |       Valores        | Padrão |
|-|:-------------------:|-|
| `isEnabled` | [Booleano](#boolean) | `true` |

***

# mean

| Chave    |      Valores       | Padrão |
|--------|:-----------------:|---------|
| `mean` | [Double](#double) | `4`     |

Define a `mean`. Leia mais sobre isso [aqui](#what-is-a-treasure-file).

***

# standardDeviation

| Chave                 |      Valores       | Padrão |
|---------------------|:-----------------:|---------|
| `standardDeviation` | [Double](#double) | `3`     |

Define o `standardDeviation`. Leia mais sobre isso [aqui](#what-is-a-treasure-file).

***

# items

É aqui que as coisas ficam complicadas, pois muitas das opções podem ser definidas pelos administradores. Vamos dar uma olhada no exemplo de arquivo de configuração anterior.

```yml
items:
  common:
    weight: 60
    items:
    - amount: 1-1
      material: STONE_PICKAXE
      procedurallyGenerateEnchantments: true
      weight: 1.0
    - amount: 1-1
      material: STONE_SHOVEL
      procedurallyGenerateEnchantments: true
      weight: 1.0
  rare:
    weight: 30
    items:
    - amount: 1-1
      material: ANVIL
      weight: 6.0
    - amount: 1-6
      material: BEETROOT
      weight: 6.0
```

Aqui, você pode ver que abaixo da chave de configuração `items`, temos um map com `common` e `rare`. Essas são as `rarities`!
***

## rarities

As raridades não possuem um nome fixo. Você pode adicionar ou remover elas e personalizá-las como quiser, contanto que use o mesmo formato.

Observe que o que torna essas tabelas de raridade mais ou menos raras é o `weight` da tabela de loot!

Por padrão:
- `common` tem um `weight` padrão de 60
- `rare` tem um `weight` padrão de 30
- `epic` tem um `weight` padrão de 10

Tornando os itens comuns 6x mais propensos a cair do que os itens épicos. Você pode ler mais sobre [`weight`s aqui](#what-is-a-treasure-file)!

Além do peso, cada tabela de raridade tem sua própria lista de `items`.

***

### itens de raridade

Os itens de raridade são uma [lista de mapeamento]($language$/global/configuration_file_guide.md&section=map_list) que lista todos os itens que a tabela de raridade possui.

Esses itens possuem as seguintes configurações:

| Chave                                |           Valores            | Padrão  |
|------------------------------------|:---------------------------:|----------|
| `amount`                           | min-max [Integer](#integer) | variable |
| `material`                         |    [Material](#Material)    | variable |
| `procedurallyGenerateEnchantments` |     [Boolean](#boolean)     | variable |
| `weight`                           |      [Double](#double)      | variable |

***

#### amount

***

Define a quantidade a ser deixada cair. Isso é expresso como um intervalo da seguinte forma `amount: MIN-MAX`. Como exemplo, para deixar cair entre 1 e 5 itens: `amount: 1-5`.

#### material

Define o material usando os [nomes de material da API Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) do item que pode ser deixado cair.

***

##### Caso Especial - Serializado

Ao usar o comando lootify, em vez de um material, lootify fornecerá uma configuração `serialized`. Isso é gerado automaticamente pelo plugin e não deve ser gerado manualmente. Está em um formato que não é legível por humanos.

***

#### weight

Define o peso para a chance ponderada. Mais informações sobre isso [aqui](#what-is-a-treasure-file).

***

#### procedurallyGenerateItems

Define se o item deve ser gerado proceduralmente com base nas configurações de configuração se `procedurallyGeneratedItemSettings`. Observe que, com base nas configurações, isso pode resultar na geração de um item sem encantamentos, independentemente de qualquer coisa.


# procedurallyGeneratedItemSettings

Vamos dar outra olhada no exemplo de nosso arquivo de configuração:

```yml
procedurallyGeneratedItemSettings:
  golden_sword:
    bane_of_arthropods:
      minLevel: 1
      maxLevel: 5
      chance: 0.2
    looting:
      minLevel: 1
      maxLevel: 3
      chance: 0.2
```

Como você pode ver, este arquivo lista os tipos de material, seguido por encantamentos e, em seguida, por níveis mínimo e máximo, e uma chance.

Observe que você não pode adicionar materiais personalizados de outros plugins nessas configurações e provavelmente não será capaz de adicionar encantamentos personalizados de outros plugins, a menos que o autor deles diga explicitamente que tornou seu sistema compatível.

Quanto às configurações de encantamento:

| Chave        |       Valores        | Padrão  |
|------------|:-------------------:|----------|
| `minLevel` | [Integer](#integer) | variable |
| `maxLevel` | [Integer](#integer) | variable |
| `chance`   |  [Chance](#chance)  | variable |

***

## minLevel

Define o nível mínimo de encantamento.

***

## maxLevel

Define o nível máximo de encantamento.

***

## chance

Define a chance do encantamento acontecer. Isso não usa probabilidade ponderada, apenas um lançamento de dados normal.


