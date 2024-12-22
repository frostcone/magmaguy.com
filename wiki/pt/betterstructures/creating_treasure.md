# O que é um ficheiro de tesouro?

Ficheiros de tesouro são o que determinam as tabelas de saque para os baús de BetterStructures. Geralmente são
atribuídos
a [geradores]($language$/betterstructures/creating_generators.md&section=treasurefilename), mas também podem ser
definidos no
nível de uma [configuração de construção individual]($language$/betterstructures/creating_structures.md&section=treasurefile).

Estas tabelas de saque são bastante poderosas, mas também exigem o conhecimento de alguns conceitos básicos de
estatística para serem compreendidas.

<details>
<summary>
Leia sobre esses conceitos aqui, o resto da página pressupõe que os entende!
</summary>

***Probabilidade ponderada***

BetterStructures e EliteMobs usam frequentemente o conceito de probabilidade ponderada. Isto serve para resolver um
problema simples: como pode definir a probabilidade de escolher um item de uma lista de itens potencialmente infinitos?

A probabilidade ponderada resolve este problema atribuindo um peso a cada item. Se tiver 100 itens e cada um tiver um
peso de 1, todos têm a mesma probabilidade - 1% - de serem escolhidos. Se adicionar mais um item, elevando o total para
101 itens, e atribuir a esse último item uma probabilidade de 1, todos os itens ainda têm a mesma probabilidade - ~
0,99% - de serem escolhidos. Se atribuir ao último item um peso de 2, a probabilidade de ser escolhido aumenta - o novo
peso total é 102, o último elemento tem um peso de 2 e 100/102 = ~0,98%, portanto 0,98%+0,98% = 1,96% de probabilidade
de ser escolhido. Se atribuir ao último item um peso de 100, o novo peso é 200 e, como metade desse peso é o seu novo
item, o seu novo item tem uma probabilidade de 50% de ser escolhido.

Como pode ver, isto é bom para usar quando tem listas de centenas de coisas para aleatorizar.

***Distribuição gaussiana***

Uma distribuição gaussiana é uma função matemática em forma de sino.

<img src="http://sfonline.barnard.edu/wp-content/uploads/2015/12/gaussian-distribution.jpg">

Pode estar a perguntar-se como é que isto é relevante para o sistema de saque. Uma coisa que o BetterStructures tem de
decidir quando define o saque nos baús é quanto saque aparece nesses baús. A quantidade deve ser consistentemente em
torno de um número específico, mas, idealmente, não tão previsível que abrir um baú se torne menos emocionante.

Para conseguir este efeito semialeatório, a distribuição gaussiana é usada para aleatorizar *quantos* itens são
escolhidos. Assim que esta quantidade é escolhida, a *probabilidade ponderada* escolhe um elemento da tabela de raridade
aleatoriamente, tendo em conta os pesos.

Então, como funciona a distribuição gaussiana?

Felizmente, não tem de se preocupar com o funcionamento da matemática por trás e pode, em vez disso, concentrar-se nas
duas configurações que a modificam: média e desvio padrão.

*Média*

De forma simples, a `média` define o meio da curva gaussiana, o que significa que define a quantidade mais provável de
itens que irão aparecer num baú. Essencialmente, se quiser que os seus baús tenham normalmente 5 itens, defina a sua
média para 5.

*Desvio padrão*

Imagine que o número médio de itens num baú é 5. O `desvio padrão` ajuda a decidir o quanto este número pode mudar de um baú para outro.

`Desvio Padrão` pequeno (por exemplo, 1): Isto significa que a maioria dos baús terá itens muito próximos da média, como
4, 5 ou 6 itens. É uma experiência mais previsível. Por exemplo, se um baú tiver um desvio padrão de 1, pode esperar que
quase todos os baús tenham entre 4 e 6 itens.

`Desvio Padrão` médio (por exemplo, 2): Aqui, há mais variedade. Os baús podem ter entre 3 e 7 itens. Embora 5 itens
ainda sejam comuns, não é incomum encontrar baús com um pouco mais ou menos. Portanto, com um desvio padrão de 2, pode
ocasionalmente encontrar um baú com apenas 3 itens ou, se tiver sorte, um com 7 itens.

`Desvio Padrão` grande (por exemplo, 3 ou mais): Agora as coisas tornam-se realmente surpreendentes! Os baús podem ter
tão poucos como 2 itens ou tantos como 8 ou mais. Significa que pode encontrar um baú com apenas alguns itens, mas
também há uma hipótese de encontrar um baú cheio de guloseimas. Por exemplo, com um desvio padrão de 3, um baú pode ter
entre 2 e 8 itens, tornando cada abertura de baú uma aposta emocionante.

***A média padrão é 4 e o desvio padrão é 3.***

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

*Nota: esta é uma versão muito reduzida do ficheiro, o ficheiro real tem 2599 linhas, pois cobre muito mais saque e
todos os encantamentos possíveis.*

# isEnabled

| Chave       |       Valores       | Padrão |
|-------------|:-------------------:|--------|
| `isEnabled` | [Boolean](#boolean) | `true` |

***

# mean

| Chave  |      Valores      | Padrão |
|--------|:-----------------:|--------|
| `mean` | [Double](#double) | `4`    |

Defina a `média`. Leia os detalhes sobre
isso [aqui](https://magmaguy.com/wiki.html#lang=en&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?).

***

# standardDeviation

| Chave               |      Valores      | Padrão |
|---------------------|:-----------------:|--------|
| `standardDeviation` | [Double](#double) | `3`    |

Defina o `desvio padrão`. Leia os detalhes sobre
isso [aqui](https://magmaguy.com/wiki.html#lang=en&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?).

***

# items

É aqui que se torna complicado, pois muitas das opções podem ser definidas pelos administradores. Vamos analisar o
exemplo do ficheiro de configuração anterior.

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

Aqui, pode ver que, sob a chave de configuração `items`, temos um mapa com `common` e `rare`. Estas são `raridades`!
***

## raridades

As raridades não têm um nome fixo. Pode adicioná-las ou removê-las e personalizá-las tanto quanto quiser, desde que use
o mesmo formato.

Note que o que torna estas tabelas de raridade mais ou menos raras é o `peso` da tabela de saque!

Por defeito:
- `common` tem um `peso` padrão de 60
- `rare` tem um `peso` padrão de 30
- `epic` tem um `peso` padrão de 10

Tornando os itens comuns 6x mais prováveis de cair do que os itens épicos. Pode ler mais
sobre `pesos` [aqui](https://magmaguy.com/wiki.html#lang=en&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?)!

Além do peso, cada tabela de raridade tem a sua própria lista de `items`.

***

### rarity items

Os itens de raridade são
uma [lista de mapas](https://magmaguy.com/wiki.html#lang=en&article=global+configuration_file_guide.md&section=map-list)
que lista todos os itens que a tabela de raridade tem.

Estes itens têm as seguintes configurações:

| Chave                              |           Valores           | Padrão   |
|------------------------------------|:---------------------------:|----------|
| `amount`                           | min-max [Integer](#integer) | variável |
| `material`                         |    [Material](#Material)    | variável |
| `procedurallyGenerateEnchantments` |     [Boolean](#boolean)     | variável |
| `weight`                           |      [Double](#double)      | variável |

***

#### amount

***

Define a quantidade a cair. Isto é expresso como um intervalo da seguinte forma `amount: MIN-MAX`. Como exemplo, para
cair entre 1 a 5
itens: `amount: 1-5`.

#### material

Define o material usando os [nomes da API Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) do
item a cair potencialmente.

***

##### Caso especial - serializado

Ao usar o comando lootify, em vez de um material, o lootify irá fornecer uma configuração `serialized`. Isto é gerado
automaticamente pelo plugin e não deve ser gerado manualmente. Está num formato que não é legível por humanos.

***

#### weight

Define o peso para a probabilidade ponderada. Mais sobre
isso [aqui](https://magmaguy.com/wiki.html#lang=en&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?).

***

#### procedurallyGenerateItems

Define se o item deve ser gerado processualmente com base nas configurações de configuração,
se `procedurallyGeneratedItemSettings`. Note que, com base nas configurações, isto pode resultar num item a ser gerado
sem encantamentos, independentemente disso.

# procedurallyGeneratedItemSettings

Vamos analisar mais uma vez o nosso exemplo de ficheiro de configuração:

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

Como pode ver, este ficheiro lista os tipos de materiais, seguidos pelos encantamentos e depois seguidos pelos níveis
mínimo e máximo e uma probabilidade.

Note que não pode adicionar materiais personalizados de outros plugins nestas configurações e provavelmente não
conseguirá adicionar encantamentos personalizados de outros plugins, a menos que o seu autor diga explicitamente que
tornou o seu sistema compatível.

Quanto às configurações de encantamento:

| Chave      |       Valores       | Padrão   |
|------------|:-------------------:|----------|
| `minLevel` | [Integer](#integer) | variável |
| `maxLevel` | [Integer](#integer) | variável |
| `chance`   |  [Chance](#chance)  | variável |

***

## minLevel

Define o nível mínimo de encantamento.

***

## maxLevel

Define o nível máximo de encantamento.

***

## chance

Define a probabilidade de o encantamento acontecer. Isto não está a usar a probabilidade ponderada, apenas um lançamento
de dados normal.
