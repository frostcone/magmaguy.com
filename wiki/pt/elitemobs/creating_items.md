[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Criando Itens Personalizados

## O que são Itens Personalizados?

Itens Personalizados são itens conforme definidos pelo EliteMobs por meio de arquivos de configuração. Você pode personalizar vários aspectos sobre esses itens, como o nível do item, os encantamentos, o nome, a descrição, a textura e muito mais!

## Webapp

Você pode criar Itens Personalizados de forma rápida e fácil [aqui](https://magmaguy.com/webapp/webapp.html)!

## Antes de começar

### Onde os Itens Personalizados ficam?

Os arquivos de itens personalizados ficam na pasta de configuração `~/plugins/EliteMobs/customitems`

É possível criar subpastas, como `~/plugins/EliteMobs/customitems/myitems`. Isso é recomendado para manter as coisas organizadas.

Os arquivos são armazenados no formato de arquivo `.yml` e o [Notepad++](https://notepad-plus-plus.org/) é o software de edição de arquivos recomendado para trabalhos de configuração. Um arquivo define um chefe, embora seja possível gerar o mesmo chefe várias vezes e até definir várias localizações de geração para o mesmo arquivo de chefe.

É possível usar o [webapp](https://magmaguy.com/webapp/webapp.html) para criar chefes personalizados e muito mais de forma rápida e fácil.

<div align="center">

### A menor configuração possível

**Observe que o menor arquivo de configuração possível para um Item Personalizado é:**

```yml
```

Observe como isso é apenas um arquivo vazio. Isso será definido por padrão para usar uma espada de madeira chamada "Nome padrão". **Tudo nesta página é opcional!**

### Item de exemplo

Vamos dar uma olhada em um exemplo de como um arquivo de item parece.

<details> 
<summary><b>Exemplo</b></summary>

<div align="left">

```yml
isEnabled: true
material: WOODEN_AXE
name: '&4Test item'
lore:
- This is a cool item
- It has cool lore
enchantments:
- DAMAGE_ALL,4
- FLAMETHROWER,1
potionEffects:
- FAST_DIGGING,0,self,onHit
- POISON,0,target,onHit
- GLOWING,0,self,continuous
dropWeight: dynamic
scalability: scalable
itemType: custom
```

</div>

</details>

</div>

## Configurações de Itens Personalizados

A seguir está uma lista de todas as coisas que você pode configurar para itens personalizados:

<div align="center">

***

### isEnabled

Define se o item está habilitado. Não afeta itens que já foram gerados.

| Chave | Valores | Padrão |
|-|:-:|-|
| `isEnabled` | `true` / `false` | `true` |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### material

Define o material do item.

| Chave | Valores | Padrão |
|-|:-:|-|
| `material` | [Escolha nesta lista!](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | `WOODEN_SWORD` |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
material: DIAMOND_SWORD
```

</div>

</details>


***

### level

Define o nível do item.

| Chave | Valores | Padrão |
|-|:-:|-|
| `level` | [Integer](#integer) | `0` |

Observe que esta configuração não é relevante se você definir o item [`scalability`](#scalability) como `scalable`. Se você definir como `limited`, este será o nível mais alto possível do item.

Além disso, os materiais têm um nível mínimo. Materiais de ferro são de nível 6, materiais de diamante são de nível 7. Você não pode forçar itens a serem de nível inferior ao nível do material.

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
level: 100
```

</div>

</details>


***

### name

Define o nome de exibição do item.

| Chave | Valores | Padrão |
|-|:-:|-|
| `material` | [String](#string) com [códigos de cor](#color-codes) | "Nome padrão" |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
name: "&2Cool item"
```

<div align="center">

![create_item_name.jpg](../../../img/wiki/create_item_name.jpg)

</div>

</div>

</details>

***

### lore

Define a descrição do item.

| Chave | Valores | Padrão |
|-|:-:|-|
| `lore` | [Lista](#list) com [códigos de cor](#color-codes) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
lore:
- "&2This is the coolest sword"
- "&2of all time!"
```

<div align="center">

![create_item_lore.jpg](../../../img/wiki/create_item_lore.jpg)

</div>

</div>

</details>

***

### enchantments

Define os encantamentos do item.

| Chave |                                                                                                       Valores                                                                                                        | Padrão |
|-|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `enchantments` | [Lista](#list) com [encantamentos do Minecraft](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) ou [Encantamentos Personalizados do EliteMobs]($language$/elitemobs/custom_enchantments_list.md) | nenhum |

Observe que essas entradas seguem o formato `enchantmentName:enchantmentLevel`. Verifique o exemplo abaixo!

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
enchantments: 
- "DAMAGE_UNDEAD,8"
- "DURABILITY,4"
- "DAMAGE_ALL,7"
- "LOUD_STRIKES,3"
```

<div align="center">

![create_item_enchantments.jpg](../../../img/wiki/create_item_enchantments.jpg)

</div>

</div>

</details>

Observe também que encantamentos como nitidez se tornam nitidez elite por padrão se o nível começar a ultrapassar os limites do vanilla Minecraft.

***

### potionEffects

Define os efeitos de poção que o item terá. Eles podem ser aplicados ao jogador ou a uma entidade danificada pelo jogador.

| Chave | Valores | Padrão |
|-|:-:|-|
| `potionEffects` | [Lista](#list) com [efeitos de poção do Minecraft](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html)| nenhum |

Além disso, os efeitos de poção usam um formato específico que permite que os administradores selecionem quem é afetado e quando:

| Configuração | Descrição | Valores | Padrão |
|-|:-:|:-:|-|
| Nível do efeito de poção | Define o nível do efeito de poção. **Os efeitos de poção começam no nível 0**!  | [Integer](#integer) | nenhum |
| Entidade afetada | Define quem é afetado pelo efeito de poção.  | `self` (o jogador) / `target` (entidade que é atingida) | nenhum |
| Método de aplicação | Define quando o efeito de poção é aplicado.  | `onHit` / `continuous` (reaplica continuamente) | nenhum |

O formato para efeitos de poção é `potionEffectName,potionEffectLevel,affectedEntity,applicationMethod`. Verifique o exemplo abaixo!

O EliteMobs também possui itens personalizados que funcionam como amuletos. Esses itens não fazem nada além de fornecer efeitos de poção ao jogador quando o item está sendo segurado ou equipado em um slot.

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
potionEffects: 
- "POISON,0,target,onHit"
- "HEAL,1,self,onHit"
- "NIGHT_VISION,0,self,continuous"
```

<div align="center">

![create_item_potion_effects.jpg](../../../img/wiki/create_item_potion_effects.jpg)

</div>

</div>

Com este conjunto de efeitos de poção, as seguintes coisas acontecerão:

Ao ser atingido, o efeito de poção de veneno (nível 1) será aplicado à entidade que foi atingida pelo jogador. Além disso, o jogador será afetado por um efeito de poção de cura instantânea de nível 2.

Continuamente, o jogador receberá visão noturna. Isso significa que o jogador terá visão noturna enquanto estiver usando ou segurando o item.

</details>

***

### scalability

Define como o nível do item cresce com o nível do chefe que o deixa cair.

| Chave | Valores | Padrão |
|-|:-:|-|
| `scalability` | `fixed`, `limited` ou `scalable`. Verifique abaixo! | scalable |

Verifique esta lista para entender o que as diferentes opções fazem!

| Configuração | Descrição |
|-|:-:|
| `fixed` | O nível do item sempre será o nível definido no arquivo de configuração. |
| `limited` | O nível máximo do item será limitado pelo que está definido no arquivo de configuração ou pelo nível do chefe, o que for menor. |
| `scalable` | O nível do item será totalmente baseado no nível do chefe que o deixa cair. |

Observe que os itens com um dropWeight sempre terão uma `scalability` `fixed`.

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
scalability: "scalable"
```

</div>

</details>

***

### itemType

Define de onde você pode obter o item.

| Chave | Valores | Padrão |
|-|:-:|-|
| `itemType` | `custom` ou `unique`. Verifique abaixo! | `custom` |

Existem dois tipos de itens:

| Configuração | Descrição |
|-|:-:|
| `custom` | O item poderá ser deixado cair por qualquer mob do EliteMobs que possa deixar cair loot e estará na loja personalizada. `
| `unique` | O item não será deixado cair por nenhum chefe e não estará na loja personalizada. A única maneira de obtê-lo é configurando um Chefe Personalizado para deixá-lo cair por meio de seu `uniqueLootTable`! |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
itemType: "unique"
```

</div>

</details>

***

### dropWeight

Define a tabela de loot em que o item se encaixará.

| Chave |                  Valores                  | Padrão |
|-|:----------------------------------------:|-|
| `dropWeight` | `dynamic` ou um valor [Double](#double). | `dynamic` |

O EliteMobs tem 5 tabelas de loot diferentes para itens personalizados, excluindo as que são configuradas diretamente como o `uniqueLootList` em Chefes Personalizados.

Esses são os seguintes:

| Tabela de loot | Descrição | Peso padrão |
|-|:-:|:-:|
| Itens gerados proceduralmente | Itens que são gerados aleatoriamente com base nos arquivos de configuração do servidor | `90.0` |
| Itens ponderados | Itens que têm um peso diferente de `dynamic` | `1.0` |
| Itens fixos | Itens que têm uma `scalability` fixa | `10.0` |
| Itens limitados | Itens que têm `scalability` limitada | `3.0` |
| Itens escalonáveis | Itens que são escalonáveis | `6.0` |

Quando um chefe morre, um item dessas tabelas é selecionado com base no arquivo de configuração ItemSettings.yml. Os padrões para os pesos são listados acima em `Peso padrão`. Quanto maior o peso, maior a probabilidade de um item ser deixado cair.

Os `Itens ponderados` têm um pequeno `Peso padrão`, o que significa que eles não serão deixados cair com muita frequência. Os itens com um `dropWeight` que não é `dynamic` são destinados a serem raros e são usados apenas nos padrões para os amuletos que os chefes deixam cair - itens não usados diretamente para combate, mas sim para dar buffs aos jogadores com efeitos de poção.

O `dropWeight` que você define aqui define a chance de um `Item ponderado` específico ser deixado cair da lista de `Itens ponderados`. Ele não aumenta a chance de os `Itens ponderados` serem deixados cair.

**Se você está confuso e só quer criar armas e armaduras, pule esta configuração, pois ela é definida por padrão como `dynamic`.**

Os `Itens ponderados` geralmente têm um peso de 1.0.

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
dropWeight: "dynamic"
```

</div>

</details>


***

### customModelID

Define a textura do item. Requer o uso de uma textura válida do pacote de recursos!

| Chave | Valores | Padrão |
|-|:-:|-|
| `customModelID` | [Integer](#integer) | nenhum |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
material: DIAMOND_SWORD
customModelID: 1
```

</div>

Isso usará a textura personalizada 1 de espadas de diamante do pacote de recursos que o jogador está usando. É recomendado que você configure seu servidor para fornecer pacotes de recursos aos jogadores ao fazer login se quiser usar esse recurso corretamente.

</details>

***

### permission

Define a permissão necessária para obter o item.

| Chave | Valores | Padrão |
|-|:-:|-|
| `permission` | [String](#string) | nenhum |

Você precisará de um plugin de gerenciamento de permissões para dar permissões aos jogadores. Isso só funcionará corretamente se você não tiver desabilitado o encantamento de soulbind.

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
permission: "elitemobs.cool.permission"
```

</div>

Com essa configuração, apenas jogadores com a permissão `elitemobs.cool.permission` poderão obter esse item.

</details>

***

### soulbound

Define se o item deve ser soulbound ao ser deixado cair.

| Chave |       Valores        | Padrão |
|-|:-------------------:|---------|
| `soulbound` | [Booleano](#boolean) | `true`  |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
soulbound: true
```

</div>

</details>


</div>


