[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Criar Itens Personalizados

## O que são Itens Personalizados?

Itens Personalizados são itens definidos pelo EliteMobs através de ficheiros de configuração. Pode personalizar vários aspetos destes itens, como o nível do item, os encantamentos, nome, descrição (lore), textura e muito mais!

## Webapp

Pode criar Saque Personalizado de forma fácil e rápida [aqui](https://magmaguy.com/webapp/webapp.html)!

## Antes de começar

### Onde ficam os Itens Personalizados?

Os ficheiros de itens personalizados vão para a pasta de configuração `~/plugins/EliteMobs/customitems`

É possível criar subpastas, como `~/plugins/EliteMobs/customitems/myitems`. Isto é recomendado para manter as coisas organizadas.

Os ficheiros são armazenados no formato `.yml` e o [Notepad++](https://notepad-plus-plus.org/) é o software de edição de ficheiros recomendado para trabalho de configuração. Um ficheiro define um boss, embora seja possível gerar o mesmo boss várias vezes e até definir vários locais de geração para o mesmo ficheiro de boss.

É possível usar a [webapp](https://magmaguy.com/webapp/webapp.html) para criar bosses personalizados e mais, de forma rápida e fácil.

<div align="center">

### Configuração mínima possível

**Por favor, note que o ficheiro de configuração mínimo possível para um Item Personalizado é:**

```yml
```

Note como isto é apenas um ficheiro vazio. Isto irá por defeito usar uma espada de madeira chamada "Default name". **Tudo nesta página é opcional!**

### Exemplo de item

Vamos ver um exemplo de como é um ficheiro de item.

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

## Definições de Item Personalizado

A seguir está uma lista de todas as coisas que pode configurar para itens personalizados:

<div align="center">

***

### isEnabled

Define se o item está ativado. Não afeta itens que já foram gerados.

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
| `material` | [Escolha desta lista!](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | `WOODEN_SWORD` |

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
| `level` | [Inteiro](#integer) | `0` |

Note que esta definição não é relevante se definir a [`scalability`](#scalability) do item como `scalable`. Se a definir como `limited`, este será o nível mais alto possível do item.

Além disso, os materiais têm um nível mínimo. Materiais de ferro são nível 6, materiais de diamante são nível 7. Não pode forçar itens a ter um nível inferior ao nível do material.

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
| `material` | [String](#string) com [códigos de cor](#color-codes) | "Default name" |

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

Define a descrição (lore) do item.

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

Define os encantamentos no item.

| Chave | Valores | Padrão |
|-|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `enchantments` | [Lista](#list) com [encantamentos do Minecraft](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) ou [Encantamentos Personalizados EliteMobs]($language$/elitemobs/custom_enchantments_list.md) | nenhum |

Note que estas entradas seguem o formato `nomeDoEncantamento:nívelDoEncantamento`. Veja o exemplo abaixo!

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

Note também que encantamentos como sharpness tornam-se elite sharpness por defeito se o nível começar a exceder os limites do Minecraft vanilla.

***

### potionEffects

Define os efeitos de poção que o item terá. Estes podem ser aplicados ao jogador ou a uma entidade danificada pelo jogador.

| Chave | Valores | Padrão |
|-|:-:|-|
| `potionEffects` | [Lista](#list) com [efeitos de poção do Minecraft](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html)| nenhum |

Além disso, os efeitos de poção usam um formato específico que permite aos administradores selecionar quem é afetado e quando:

| Definição | Descrição | Valores | Padrão |
|-|:-:|:-:|-|
| Nível do efeito de poção | Define o nível do efeito de poção. **Os efeitos de poção começam no nível 0**! | [Inteiro](#integer) | nenhum |
| Entidade afetada | Define quem é afetado pelo efeito de poção. | `self` (o jogador) / `target` (entidade que é atingida) | nenhum |
| Método de aplicação | Define quando o efeito de poção é aplicado. | `onHit` / `continuous` (reaplica constantemente) | nenhum |

O formato para efeitos de poção é `nomeDoEfeitoDePoção,nívelDoEfeitoDePoção,entidadeAfetada,métodoDeAplicação`. Veja o exemplo abaixo!

Ao examinar um item com **efeitos de poção**, verá ícones que indicam como o efeito é aplicado:

- **☠️ Crânio** – Afeta **inimigos**.
- **🛡️ Escudo** – Afeta **o utilizador/jogador**.
- **⚔️ Espadas** – Ativa **ao atingir**.
- **🔄 Círculo Repetitivo** – Aplica **continuamente** enquanto o item é usado ou segurado.

O EliteMobs também possui itens personalizados que funcionam como amuletos. Estes itens não fazem mais nada senão fornecer efeitos de poção ao jogador quando o item está a ser segurado ou está equipado num slot.

AVISO: Usar o efeito de poção INSTANT_DAMAGE irá curar mobs mortos-vivos ao impacto, pois esta é uma mecânica padrão no Minecraft vanilla.

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

Ao atingir, o efeito de poção de veneno (nível 1) será aplicado à entidade que foi atingida pelo jogador. Adicionalmente, o jogador será afetado por um efeito de poção de cura instantânea de nível 2.

Continuamente, o jogador receberá visão noturna. Isto significa que o jogador terá visão noturna enquanto estiver a usar ou a segurar o item.

</details>

***

### scalability

Define como o nível do item aumenta com o nível do boss que o dropa.

| Chave | Valores | Padrão |
|-|:-:|-|
| `scalability` | `fixed`, `limited` ou `scalable`. Veja abaixo! | scalable |

Veja esta lista para entender o que as diferentes opções fazem!

| Definição | Descrição |
|-|:-:|
| `fixed` | O nível do item será sempre o nível definido no ficheiro de configuração. |
| `limited` | O nível máximo do item será limitado pelo definido no ficheiro de configuração ou pelo nível do boss, o que for mais baixo. |
| `scalable` | O nível do item será inteiramente baseado no nível do boss que o dropa. |

Note que itens com um dropWeight terão sempre uma scalability `fixed`.

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

Define onde pode obter o item.

| Chave | Valores | Padrão |
|-|:-:|-|
| `itemType` | `custom` ou `unique`. Veja abaixo! | `custom` |

Existem dois tipos de item:

| Definição | Descrição |
|-|:-:|
| `custom` | O item poderá dropar de qualquer mob do EliteMobs capaz de dropar saque, e estará na loja personalizada. |
| `unique` | O item não será dropado por nenhum boss e não estará na loja personalizada. A única forma de o obter é configurando um Boss Personalizado para o dropar através da sua `uniqueLootTable`! |

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

Define a tabela de saque em que o item se encaixará.

| Chave | Valores | Padrão |
|-|:----------------------------------------:|-|
| `dropWeight` | `dynamic` ou um valor [Double](#double). | `dynamic` |

O EliteMobs tem 5 tabelas de saque diferentes para itens personalizados, excluindo as configuradas diretamente como a `uniqueLootList` em Bosses Personalizados.

Estas são as seguintes:

| Tabela de saque | Descrição | Peso padrão |
|-|:-:|:-:|
| Itens gerados proceduralmente | Itens que são gerados aleatoriamente com base nos ficheiros de configuração do servidor | `90.0` |
| Itens ponderados | Itens que têm um peso diferente de `dynamic` | `1.0` |
| Itens fixos | Itens que têm uma scalability fixa | `10.0` |
| Itens limitados | Itens que têm scalability limitada | `3.0` |
| Itens escaláveis | Itens que são escaláveis | `6.0` |

Quando um boss morre, um item destas tabelas é selecionado com base no ficheiro de configuração ItemSettings.yml. Os valores padrão para os pesos estão listados acima em `Peso padrão`. Quanto maior o peso, maior a probabilidade de um item dropar.

Itens ponderados (`Weighed items`) têm um `Peso padrão` pequeno, o que significa que não droparão com muita frequência. Itens com um `dropWeight` que não é `dynamic` são destinados a ser raros e são apenas usados nos padrões para os amuletos que os bosses dropam - itens não usados diretamente para combate, mas sim para buffar jogadores com efeitos de poção.

O `dropWeight` que define aqui define a chance de um `Weighed item` específico dropar da lista de `Weighed items`. Não aumenta a chance de `Weighed item`s droparem.

**Se estiver confuso e apenas quiser fazer armas e armaduras, ignore esta definição, pois o padrão correto é `dynamic`.**

Itens ponderados (`Weighed item`s) geralmente têm um peso de 1.0.

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
| `customModelID` | [Inteiro](#integer) | nenhum |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
material: DIAMOND_SWORD
customModelID: 1
```

</div>

Isto usará a textura personalizada 1 de espadas de diamante do pacote de recursos que o jogador está a usar. É recomendado configurar o seu servidor para dar pacotes de recursos aos jogadores ao fazer login se quiser usar esta funcionalidade corretamente.

</details>

***

### customModelV2

A partir da versão 1.21.4 do Minecraft (EM 9.1.13), esta é a nova definição necessária para configurar IDs de modelo de item personalizados.
Define a textura do item. Requer o uso de uma textura válida do pacote de recursos!

| Chave | Valores | Padrão |
|-|:-:|-|
| `customModelV2` | [String](#string) | nenhum |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
customModelV2: elitemobs:equipment/magmaguys_toothpick
```

</div>

Esta definição atribui uma textura específica a um item. Veja como funciona:

- `elitemobs:` é o diretório principal na pasta `assets` do pacote de recursos.
- `equipment` é uma subpasta dentro de `assets/elitemobs/models`.
- `magmaguys_toothpick` é o ficheiro de modelo localizado em `assets/elitemobs/models/equipment` no pacote de recursos.

O caminho completo para o ficheiro de modelo neste exemplo seria:
`\.minecraft\resourcepacks\elitemobs_resource_pack\assets\elitemobs\models\equipment\magmaguys_toothpick.json`

Isto usará a textura personalizada `magmaguys_toothpick` do pacote de recursos do EliteMobs que o jogador está a usar. É recomendado configurar o seu servidor para dar pacotes de recursos aos jogadores ao fazer login se quiser usar esta funcionalidade corretamente.

</details>

***

### permission

Define a permissão necessária para obter o item.

| Chave | Valores | Padrão |
|-|:-:|-|
| `permission` | [String](#string) | nenhum |

Precisará de um plugin de gestão de permissões para dar permissões aos jogadores. Isto só funcionará corretamente se não tiver desativado o encantamento soulbind.

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
permission: "elitemobs.cool.permission"
```

</div>

Com esta configuração, apenas jogadores com a permissão `elitemobs.cool.permission` poderão obter este item.

</details>

***

### soulbound

Define se o item deve ser soulbound ao dropar.

| Chave | Valores | Padrão |
|-|:-------------------:|---------|
| `soulbound` | [Booleano](#boolean) | `true` |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
soulbound: true
```

</div>

</details>

</div>