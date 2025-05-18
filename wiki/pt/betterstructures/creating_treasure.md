Claro, aqui está a tradução para português (Portugal), mantendo a formatação markdown:

# O que é um ficheiro de tesouro?

Os ficheiros de tesouro são o que determina as tabelas de saque para os baús do BetterStructures. São geralmente atribuídos
a [geradores](pt/betterstructures/creating_generators.md&section=treasurefilename) mas também podem ser definidos ao
nível de uma [configuração de construção individual](pt/betterstructures/creating_structures.md&section=treasurefile).

Estas tabelas de saque são bastante poderosas, mas também requerem conhecimento de alguns conceitos básicos de estatística para serem compreendidas.

<details>
<summary>
Leia sobre esses conceitos aqui, o resto da página assume que os compreende!
</summary>

***Probabilidade ponderada***

BetterStructures e EliteMobs frequentemente usam o conceito de probabilidade ponderada. Isto é para resolver um problema simples: como pode definir a chance de escolher um item de uma lista de itens potencialmente infinitos?

A probabilidade ponderada resolve este problema dando a cada item um peso (weight). Se tiver 100 itens e cada um tiver um weight de 1, então todos têm a mesma chance - 1% - de serem escolhidos. Se adicionar mais um item, elevando o total para 101 itens, e der a esse último item uma chance de 1, todos os itens ainda têm a mesma chance - ~0.99% - de serem escolhidos. Se der ao último item um weight de 2, a chance de ele ser escolhido aumenta - o novo weight total é 102, o último elemento tem um weight de 2 e 100/102 = ~0.98%, então 0.98%+0.98% = 1.96% de chance de ser escolhido. Se der ao último item um weight de 100, o novo weight é 200, e como metade desse weight é o seu novo item, o seu novo item tem 50% de chance de ser escolhido.

Como pode ver, isto é bom para usar quando pode ter listas de centenas de coisas para sortear.

***Distribuição Gaussiana***

Uma distribuição gaussiana é uma função matemática em forma de sino.

<img src="http://sfonline.barnard.edu/wp-content/uploads/2015/12/gaussian-distribution.jpg">

Pode estar a perguntar-se como isto é relevante para o sistema de saque. Uma coisa que o BetterStructures tem de decidir ao definir o saque nos baús é a quantidade de saque que aparece nesses baús. A quantidade deve ser consistentemente em torno de um número específico, mas idealmente não tão previsível que abrir um baú possa tornar-se menos emocionante.

Para alcançar este efeito semi-aleatório, a distribuição gaussiana é usada para sortear *quantos* itens são escolhidos. Uma vez que esta quantidade é escolhida, a *probabilidade ponderada* escolhe um elemento da tabela de raridade aleatoriamente e tendo os weights em conta.

Então, como funciona a distribuição gaussiana?

Felizmente, não precisa de se preocupar com a matemática por trás dela, e pode focar-se nas duas configurações que a modificam: mean (média) e standard deviation (desvio padrão).

*Mean (Média)*

Simplificando, `mean` define o meio da curva gaussiana, o que significa que define a quantidade mais provável de itens que aparecerão num baú. Essencialmente, se quiser que os seus baús geralmente tenham 5 itens, defina a sua mean para 5.

*Standard deviation (Desvio padrão)*

Imagine que o número médio de itens num baú é 5. O `standard deviation` ajuda a decidir o quanto este número pode mudar de um baú para outro.

`Standard Deviation` pequeno (por exemplo, 1): Isto significa que a maioria dos baús terá itens muito próximos da média, como 4, 5 ou 6 itens. É uma experiência mais previsível. Por exemplo, se um baú tiver um standard deviation de 1, pode esperar que quase todos os baús tenham entre 4 a 6 itens.

`Standard Deviation` médio (por exemplo, 2): Aqui, há mais variedade. Os baús podem ter de 3 a 7 itens. Embora 5 itens ainda sejam comuns, não é incomum encontrar baús com um pouco mais ou menos. Assim, com um standard deviation de 2, pode ocasionalmente encontrar um baú com apenas 3 itens, ou se tiver sorte, um com 7 itens.

`Standard Deviation` grande (por exemplo, 3 ou mais): Agora as coisas ficam realmente surpreendentes! Os baús podem ter tão poucos quanto 2 itens ou tantos quanto 8 ou mais. Significa que pode encontrar um baú com apenas alguns itens, mas também há a chance de encontrar um baú carregado de guloseimas. Por exemplo, com um standard deviation de 3, um baú pode ter entre 2 a 8 itens, tornando cada abertura de baú uma aposta emocionante.

***A média padrão é 4, e o desvio padrão padrão é 3.***

</details>

***

# Formato especial

Os ficheiros de tesouro têm um formato especial que se parece com isto:

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

*Nota: esta é uma versão muito reduzida do ficheiro, o ficheiro real tem 2599 linhas, pois cobre muito mais saque e todos os encantamentos possíveis.*

# isEnabled

| Chave |       Valores        | Padrão |
|-|:-------------------:|-|
| `isEnabled` | [Booleano](#boolean) | `true` |

***

# mean

| Chave    |      Valores       | Padrão |
|--------|:-----------------:|---------|
| `mean` | [Duplo](#double) | `4`     |

Define a `mean`. Leia os detalhes sobre isso [aqui](https://magmaguy.com/wiki.html#lang=pt&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?).

***

# standardDeviation

| Chave                 |      Valores       | Padrão |
|---------------------|:-----------------:|---------|
| `standardDeviation` | [Duplo](#double) | `3`     |

Define o `standardDeviation`. Leia os detalhes sobre isso [aqui](https://magmaguy.com/wiki.html#lang=pt&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?).

***

# items

É aqui que fica complicado, pois muitas das opções podem ser definidas pelos administradores. Vamos analisar o exemplo de ficheiro de configuração anterior.

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

Aqui, pode ver que sob a chave de configuração `items` temos um mapa com `common` e `rare`. Estas são `raridades`!
***

## raridades

As raridades não têm um nome fixo. Pode adicioná-las ou removê-las, e personalizá-las tanto quanto quiser, desde que use o mesmo formato.

Note que o que torna estas tabelas de raridade mais ou menos raras é o `weight` da tabela de saque!

Por padrão:
- `common` tem um `weight` padrão de 60
- `rare` tem um `weight` padrão de 30
- `epic` tem um `weight` padrão de 10

Tornando os itens common 6x mais prováveis de cair do que os itens epic. Pode ler mais sobre `weight`s [aqui](https://magmaguy.com/wiki.html#lang=pt&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?)!

Além do weight, cada tabela de raridade tem a sua própria lista de `items`.

***

### items de raridade

Os items de raridade são uma [lista de mapa](https://magmaguy.com/wiki.html#lang=pt&article=global+configuration_file_guide.md&section=map-list) que lista todos os items que a tabela de raridade tem.

Estes items têm as seguintes configurações:

| Chave                                |           Valores            | Padrão   |
|------------------------------------|:---------------------------:|----------|
| `amount`                           | min-max [Inteiro](#integer) | variável |
| `material`                         |    [Material](#Material)    | variável |
| `procedurallyGenerateEnchantments` |     [Booleano](#boolean)     | variável |
| `weight`                           |      [Duplo](#double)      | variável |

***

#### amount

***

Define a quantidade a cair. Isto é expresso como um intervalo da seguinte forma `amount: MIN-MAX`. Como exemplo, para cair entre 1 a 5
items: `amount: 1-5`.

#### material

Define o material usando os [nomes da API Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) do
item que pode cair.

***

##### Caso especial - serialized

Ao usar o comando lootify, em vez de um material, o lootify fornecerá uma configuração `serialized`. Isto é gerado automaticamente pelo plugin e não deve ser gerado manualmente. Está num formato que não é legível por humanos.

***

#### weight

Define o weight para a probabilidade ponderada. Mais sobre isso [aqui](https://magmaguy.com/wiki.html#lang=pt&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?).

***

#### procedurallyGenerateItems

Define se o item deve ser gerado proceduralmente com base nas configurações se `procedurallyGeneratedItemSettings`. Note que, com base nas configurações, isto pode resultar na geração de um item sem encantamentos, independentemente.


# procedurallyGeneratedItemSettings

Vamos dar outra olhada no nosso exemplo de ficheiro de configuração:

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

Como pode ver, este ficheiro lista tipos de material, seguidos por encantamentos e depois seguidos por níveis mínimo e máximo e uma chance.

Note que não pode adicionar materiais personalizados de outros plugins nestas configurações, e provavelmente não conseguirá adicionar encantamentos personalizados de outros plugins, a menos que o autor deles diga explicitamente que tornou o seu sistema compatível.

Quanto às configurações de encantamento:

| Chave        |       Valores        | Padrão   |
|------------|:-------------------:|----------|
| `minLevel` | [Inteiro](#integer) | variável |
| `maxLevel` | [Inteiro](#integer) | variável |
| `chance`   |  [Chance](#chance)  | variável |

***

## minLevel

Define o nível mínimo de encantamento.

***

## maxLevel

Define o nível máximo de encantamento.

***

## chance

Define a chance do encantamento acontecer. Isto não usa probabilidade ponderada, apenas um lançamento de dado normal.