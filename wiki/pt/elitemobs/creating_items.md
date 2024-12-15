[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Criar Itens Personalizados

## O que são Itens Personalizados?

Itens Personalizados são itens definidos pelo EliteMobs através de ficheiros de configuração. Podes personalizar vários aspetos destes itens, como o nível do item, os encantamentos, o nome, a história, a textura e muito mais!

## Aplicação Web

Podes criar facilmente e rapidamente Saques Personalizados [aqui](https://magmaguy.com/webapp/webapp.html)!

## Antes de começares

### Onde é que os Itens Personalizados ficam?

Os ficheiros de itens personalizados ficam na pasta de configuração `~/plugins/EliteMobs/customitems`

É possível criar subpastas, como `~/plugins/EliteMobs/customitems/meusitens`. Isto é recomendado para manter as coisas organizadas.

Os ficheiros são armazenados no formato de ficheiro `.yml` e o [Notepad++] (https://notepad-plus-plus.org/) é o software de edição de ficheiros recomendado para trabalhos de configuração. Um ficheiro define um chefe, embora seja possível gerar o mesmo chefe várias vezes e até definir várias localizações de geração para o mesmo ficheiro de chefe.

É possível usar a [aplicação web](https://magmaguy.com/webapp/webapp.html) para criar de forma rápida e fácil chefes personalizados e muito mais.

<div align="center">

### Configuração mínima possível

**Por favor, nota que a configuração de ficheiro mais pequena possível para um Item Personalizado é:**

```yml
```

Nota que isto é apenas um ficheiro vazio. Isto irá usar por defeito uma espada de madeira chamada "Nome padrão". **Tudo nesta página é opcional!**

### Exemplo de item

Vamos analisar um exemplo de como é um ficheiro de itens.

<details> 
<summary><b>Exemplo</b></summary>

<div align="left">

```yml
isEnabled: true
material: WOODEN_AXE
name: '&4Item de teste'
lore:
- Este é um item fixe
- Tem uma história fixe
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

## Definições de Itens Personalizados

A seguir está uma lista de tudo o que podes configurar para itens personalizados:

<div align="center">

***

### isEnabled

Define se o item está ativo. Não afeta itens que já foram gerados.

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
| `material` | [Escolhe desta lista!](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | `WOODEN_SWORD` |

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
| `level` | [Número inteiro](#integer) | `0` |

Nota que esta definição não é relevante se definires a [`escalabilidade`](#scalability) do item para `scalable`. Se a definires para `limited`, este será o nível mais alto possível do item.

Além disso, os materiais têm um nível mínimo. Os materiais de ferro são nível 6, os materiais de diamante são nível 7. Não podes forçar os itens a ter um nível inferior ao nível do material.

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
name: "&2Item fixe"
```

<div align="center">

![create_item_name.jpg](../../../img/wiki/create_item_name.jpg)

</div>

</div>

</details>

***

### lore

Define a história do item.

| Chave | Valores | Padrão |
|-|:-:|-|
| `lore` | [Lista](#list) com [códigos de cor](#color-codes) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
lore:
- "&2Esta é a espada mais fixe"
- "&2de sempre!"
```

<div align="center">

![create_item_lore.jpg](../../../img/wiki/create_item_lore.jpg)

</div>

</div>

</details>

***

### enchantments

Define os encantamentos do item.

| Chave |                                                                                                       Valores                                                                                                       | Padrão |
|-|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `enchantments` | [Lista](#list) com [Encantamentos do Minecraft](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) ou [Encantamentos Personalizados do EliteMobs]($language$/elitemobs/custom_enchantments_list.md) | nenhum |

Nota que estas entradas seguem o formato `nomeDoEncantamento:nívelDoEncantamento`. Verifica o exemplo abaixo!

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

Nota também que encantamentos como nitidez tornam-se nitidez elite por defeito se o nível começar a ultrapassar os limites do Minecraft original.

***

### potionEffects

Define os efeitos de poção que o item terá. Estes podem ser aplicados ao jogador ou a uma entidade danificada pelo jogador.

| Chave | Valores | Padrão |
|-|:-:|-|
| `potionEffects` | [Lista](#list) com [efeitos de poção do Minecraft](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html)| nenhum |

Além disso, os efeitos de poção usam um formato específico que permite aos administradores selecionar quem é afetado e quando:

| Definição | Descrição | Valores | Padrão |
|-|:-:|:-:|-|
| Nível do efeito de poção | Define o nível do efeito de poção. **Os efeitos de poção começam no nível 0**!  | [Número inteiro](#integer) | nenhum |
| Entidade afetada | Define quem é afetado pelo efeito de poção.  | `self` (o jogador) / `target` (entidade que é atingida) | nenhum |
| Método de aplicação | Define quando o efeito de poção é aplicado.  | `onHit` / `continuous` (reaplica constantemente) | nenhum |

O formato para efeitos de poção é `nomeDoEfeitoDePoção,nívelDoEfeitoDePoção,entidadeAfetada,métodoDeAplicação`. Verifica o exemplo abaixo!

O EliteMobs também inclui itens personalizados que funcionam como amuletos. Estes itens não fazem mais nada além de fornecer efeitos de poção ao jogador quando o item está a ser segurado ou equipado num slot.

AVISO: Usar o efeito de poção INSTANT_DAMAGE irá curar mobs mortos-vivos no impacto, pois esta é uma mecânica padrão no Minecraft original.

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

Ao atingir, o efeito de poção de veneno (nível 1) será aplicado à entidade que foi atingida pelo jogador. Além disso, o jogador será afetado por um efeito de poção de cura instantânea de nível 2.

Continuamente, o jogador receberá visão noturna. Isto significa que o jogador terá visão noturna enquanto estiver a usar ou a segurar o item.

</details>

***

### scalability

Define como o nível do item cresce com o nível do chefe que o deixa cair.

| Chave | Valores | Padrão |
|-|:-:|-|
| `scalability` | `fixed`, `limited` ou `scalable`. Verifica abaixo! | scalable |

Verifica esta lista para entender o que as diferentes opções fazem!

| Definição | Descrição |
|-|:-:|
| `fixed` | O nível do item será sempre o nível definido no ficheiro de configuração. |
| `limited` | O nível máximo do item será limitado pelo definido no ficheiro de configuração ou pelo nível do chefe, o que for mais baixo. |
| `scalable` | O nível do item será totalmente baseado no nível do chefe que o deixa cair. |

Nota que os itens com um dropWeight terão sempre uma escalabilidade `fixed`.

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

Define onde podes obter o item.

| Chave | Valores | Padrão |
|-|:-:|-|
| `itemType` | `custom` ou `unique`. Verifica abaixo! | `custom` |

Existem dois tipos de itens:

| Definição | Descrição |
|-|:-:|
| `custom` | O item poderá ser deixado cair por qualquer mob EliteMobs capaz de deixar cair saques e estará na loja personalizada. `
| `unique` | O item não será deixado cair por nenhum chefe e não estará na loja personalizada. A única forma de o obter é configurar um Chefe Personalizado para o deixar cair através da sua `uniqueLootTable`! |

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

Define a tabela de saques em que o item se enquadrará.

| Chave |                  Valores                  | Padrão |
|-|:----------------------------------------:|-|
| `dropWeight` | `dynamic` ou um valor [Double](#double). | `dynamic` |

O EliteMobs tem 5 tabelas de saques diferentes para itens personalizados, excluindo as que são configuradas diretamente como a `uniqueLootList` nos Chefes Personalizados.

Estas são as seguintes:

| Tabela de saques | Descrição | Peso padrão |
|-|:-:|:-:|
| Itens gerados processualmente | Itens que são gerados aleatoriamente com base em ficheiros de configuração do servidor | `90.0` |
| Itens pesados | Itens que têm um peso diferente de `dynamic` | `1.0` |
| Itens fixos | Itens que têm uma escalabilidade fixa | `10.0` |
| Itens limitados | Itens que têm escalabilidade limitada | `3.0` |
| Itens escaláveis | Itens que são escaláveis | `6.0` |

Quando um chefe morre, um item destas tabelas é selecionado com base no ficheiro de configuração ItemSettings.yml. Os padrões para os pesos estão listados acima em `Peso padrão`. Quanto maior o peso, maior a probabilidade de um item ser deixado cair.

`Itens pesados` têm um `Peso padrão` pequeno, o que significa que não serão deixados cair com muita frequência. Itens com um `dropWeight` que não é `dynamic` destinam-se a ser raros e são apenas usados nos padrões para os amuletos que os chefes deixam cair - itens não usados diretamente para combate, mas sim para dar buffs aos jogadores com efeitos de poção.

O `dropWeight` que defines aqui define a hipótese de um `Item pesado` específico ser deixado cair da lista de `Itens pesados`. Não aumenta a hipótese de `Itens pesados` serem deixados cair.

**Se estiveres confuso e apenas quiseres fazer armas e armaduras, ignora esta definição, pois ela usa corretamente o padrão `dynamic`.**

`Itens pesados` geralmente têm um peso de 1.0.

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
| `customModelID` | [Número inteiro](#integer) | nenhum |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
material: DIAMOND_SWORD
customModelID: 1
```

</div>

Isto irá usar a textura personalizada 1 de espadas de diamantes do pacote de recursos que o jogador está a usar. Recomenda-se que configures o teu servidor para dar pacotes de recursos aos jogadores ao entrar se quiseres usar esta funcionalidade corretamente.

</details>

***

### customModelV2

A partir da versão 1.21.4 do Minecraft (EM 9.1.13), esta é a nova definição necessária para configurar IDs de modelos de itens personalizados.
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

Esta definição atribui uma textura específica a um item. Eis como funciona:

- `elitemobs:` é o diretório principal na pasta `assets` do pacote de recursos.
- `equipment` é um subdiretório dentro de `assets/elitemobs/models`.
- `magmaguys_toothpick` é o ficheiro de modelo localizado em `assets/elitemobs/models/equipment` no pacote de recursos.

O caminho completo para o ficheiro de modelo neste exemplo seria:
`\.minecraft\resourcepacks\elitemobs_resource_pack\assets\elitemobs\models\equipment\magmaguys_toothpick.json`

</div>

Isto usará a textura personalizada `magmaguys_toothpick` do pacote de recursos do EliteMobs que o jogador está a usar. Recomenda-se que configures o teu servidor para dar pacotes de recursos aos jogadores ao entrar se quiseres usar esta funcionalidade corretamente.

</details>

***

### permission

Define a permissão necessária para obter o item.

| Chave | Valores | Padrão |
|-|:-:|-|
| `permission` | [String](#string) | nenhum |

Precisarás de um plugin de gestão de permissões para dar permissões aos jogadores. Isto só funcionará corretamente se não tiveres desativado o encantamento soulbind.

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
permission: "elitemobs.cool.permission"
```

</div>

Com esta configuração, apenas os jogadores com a permissão `elitemobs.cool.permission` poderão obter este item.

</details>

***

### soulbound

Define se o item deve ser soulbound (vinculado à alma) ao ser deixado cair.

| Chave |       Valores        | Padrão |
|-|:-------------------:|---------|
| `soulbound` | [Boolean](#boolean) | `true`  |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
soulbound: true
```

</div>

</details>


</div>
