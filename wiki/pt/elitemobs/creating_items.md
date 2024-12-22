[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Criar Itens Personalizados

## O que são Itens Personalizados?

Itens Personalizados são itens definidos pelo EliteMobs através de ficheiros de configuração. Podes personalizar vários
aspetos destes itens, como o nível do item, os encantamentos, nome, lore, textura e muito mais!

## Aplicação Web

Podes criar facilmente e rapidamente Loot Personalizado [aqui](https://magmaguy.com/webapp/webapp.html)!

## Antes de Começares

### Onde é que os Itens Personalizados são colocados?

Os ficheiros de itens personalizados são colocados na pasta de configuração `~/plugins/EliteMobs/customitems`

É possível criar subpastas, como `~/plugins/EliteMobs/customitems/myitems`. Isto é recomendado para manter as coisas
organizadas.

Os ficheiros são armazenados no formato de ficheiro `.yml` e o [Notepad++](https://notepad-plus-plus.org/) é o software
de edição de ficheiros recomendado para trabalhos de configuração. Um ficheiro define um boss, embora seja possível
gerar o mesmo boss várias vezes e até definir vários locais de spawn para o mesmo ficheiro de boss.

É possível usar a [aplicação web](https://magmaguy.com/webapp/webapp.html) para criar de forma rápida e fácil bosses
personalizados e muito mais.

<div align="center">

### Configuração mínima possível

**Por favor, tem em atenção que a configuração mínima possível para um Item Personalizado é:**

```yml
```

Repara como este é apenas um ficheiro vazio. Isto irá usar por defeito uma espada de madeira chamada "Nome padrão". *
*Tudo nesta página é opcional!**

### Exemplo de item

Vamos dar uma vista de olhos a um exemplo de como é um ficheiro de item.

<details> 
<summary><b>Exemplo</b></summary>

<div align="left">

```yml
isEnabled: true
material: WOODEN_AXE
name: '&4Item de teste'
lore:
- Este é um item fixe
- Tem um lore fixe
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

A seguinte é uma lista de todas as coisas que podes configurar para itens personalizados:

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

| Chave   |              Valores              | Padrão |
|---------|:---------------------------------:|--------|
| `level` | [Número inteiro](#numero-inteiro) | `0`    |

Nota que esta definição não é relevante se definires a [`scalability`](#scalability) do item como `scalable`. Se a
definires como `limited`, este será o nível máximo possível do item.

Além disso, os materiais têm um nível mínimo. Materiais de ferro são nível 6, materiais de diamante são nível 7. Não
podes forçar itens a serem de nível inferior ao nível do material.

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

| Chave      |                         Valores                         | Padrão        |
|------------|:-------------------------------------------------------:|---------------|
| `material` | [String](#string) com [códigos de cor](#códigos-de-cor) | "Nome padrão" |

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

Define o lore do item.

| Chave  |                        Valores                        | Padrão |
|--------|:-----------------------------------------------------:|--------|
| `lore` | [Lista](#lista) com [códigos de cor](#códigos-de-cor) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
lore:
- "&2Esta é a espada mais fixe"
- "&2de todos os tempos!"
```

<div align="center">

![create_item_lore.jpg](../../../img/wiki/create_item_lore.jpg)

</div>

</div>

</details>

***

### enchantments

Define os encantamentos no item.

| Chave          |                                                                                                               Valores                                                                                                                | Padrão |
|----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|--------|
| `enchantments` | [Lista](#lista) com [encantamentos do Minecraft](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) ou [Encantamentos Personalizados do EliteMobs]($language$/elitemobs/custom_enchantments_list.md) | nenhum |

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

Nota também que encantamentos como sharpness tornam-se elite sharpness por defeito se o nível começar a ultrapassar os
limites do Minecraft vanilla.

***

### potionEffects

Define os efeitos de poção que o item terá. Estes podem ser aplicados ao jogador ou a uma entidade danificada pelo jogador.

| Chave           |                                                                Valores                                                                | Padrão |
|-----------------|:-------------------------------------------------------------------------------------------------------------------------------------:|--------|
| `potionEffects` | [Lista](#lista) com [efeitos de poção do Minecraft](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) | nenhum |

Além disso, os efeitos de poção usam um formato específico que permite aos administradores selecionar quem é afetado e quando:

| Definição                |                                   Descrição                                    |                      Valores                      | Padrão |
|--------------------------|:------------------------------------------------------------------------------:|:-------------------------------------------------:|--------|
| Nível do efeito de poção | Define o nível do efeito de poção. **Os efeitos de poção começam no nível 0**! |         [Número inteiro](#numero-inteiro)         | nenhum |
| Entidade afetada         |                  Define quem é afetado pelo efeito de poção.                   | `self` (o jogador) / `target` (entidade atingida) | nenhum |
| Método de aplicação      |                  Define quando o efeito de poção é aplicado.                   | `onHit` / `continuous` (reaplica constantemente)  | nenhum |

O formato para efeitos de poção é `nomeDoEfeitoDePoção,nívelDoEfeitoDePoção,entidadeAfetada,métodoDeAplicação`. Verifica o exemplo abaixo!

O EliteMobs também apresenta itens personalizados que funcionam como amuletos. Estes itens não fazem mais nada além de
fornecer efeitos de poção ao jogador quando o item está a ser segurado ou está equipado numa slot.

AVISO: Usar o efeito de poção INSTANT_DAMAGE irá curar mobs undead ao impacto, pois esta é uma mecânica padrão no
Minecraft vanilla.

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

Define como o nível do item cresce com o nível do boss que o dropa.

| Chave | Valores | Padrão |
|-|:-:|-|
| `scalability` | `fixed`, `limited` ou `scalable`. Verifica abaixo! | scalable |

Verifica esta lista para entender o que as diferentes opções fazem!

| Definição  |                                                          Descrição                                                          |
|------------|:---------------------------------------------------------------------------------------------------------------------------:|
| `fixed`    |                          O nível do item será sempre o nível definido no ficheiro de configuração.                          |
| `limited`  | O nível máximo do item será limitado pelo definido no ficheiro de configuração ou pelo nível do boss, o que for mais baixo. |
| `scalable` |                            O nível do item será totalmente baseado no nível do boss que o dropa.                            |

Nota que itens com um dropWeight terão sempre uma escalabilidade `fixed`.

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

Define de onde podes obter o item.

| Chave | Valores | Padrão |
|-|:-:|-|
| `itemType` | `custom` ou `unique`. Verifica abaixo! | `custom` |

Existem dois tipos de item:

| Definição |                                                                                         Descrição                                                                                         |
|-----------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `custom`  |                                       O item poderá ser dropado por qualquer mob do EliteMobs capaz de dropar loot e estará na loja personalizada.                                        |
| `unique`  | O item não será dropado por nenhum boss e não estará na loja personalizada. A única forma de o obter é configurando um Boss Personalizado para o dropar através da sua `uniqueLootTable`! |

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

Define a loot table onde o item se encaixará.

| Chave |                  Valores                  | Padrão |
|-|:----------------------------------------:|-|
| `dropWeight` | `dynamic` ou um valor [Double](#double). | `dynamic` |

O EliteMobs tem 5 loot tables diferentes para itens personalizados, excluindo aqueles configurados diretamente como
a `uniqueLootList` em Bosses Personalizados.

Estas são as seguintes:

| Loot table                    |                                        Descrição                                        | Peso padrão |
|-------------------------------|:---------------------------------------------------------------------------------------:|:-----------:|
| Itens gerados processualmente | Itens que são gerados aleatoriamente com base nos ficheiros de configuração do servidor |   `90.0`    |
| Itens ponderados              |                      Itens que têm um peso diferente de `dynamic`                       |    `1.0`    |
| Itens fixos                   |                          Itens que têm uma escalabilidade fixa                          |   `10.0`    |
| Itens limitados               |                          Itens que têm escalabilidade limitada                          |    `3.0`    |
| Itens escaláveis              |                                Itens que são escaláveis                                 |    `6.0`    |

Quando um boss morre, um item destas tabelas é selecionado com base no ficheiro de configuração ItemSettings.yml. Os
valores padrão para os pesos estão listados acima em `Peso padrão`. Quanto maior o peso, maior a probabilidade de um
item ser dropado.

`Itens ponderados` têm um `Peso padrão` pequeno, o que significa que não serão dropados com muita frequência. Itens com
um `dropWeight` que não seja `dynamic` destinam-se a ser raros e são apenas usados nos padrões para os amuletos que os
bosses dropam - itens não usados diretamente para combate, mas sim para buffar jogadores com efeitos de poção.

O `dropWeight` que defines aqui define a hipótese de um `Item ponderado` específico ser dropado da lista
de `Itens ponderados`. Não aumenta a hipótese de `Itens ponderados` serem dropados.

**Se estás confuso e queres apenas criar armas e armaduras, ignora esta definição, pois ela usa o valor padrão
correto, `dynamic`.**

`Itens ponderados` normalmente têm um peso de 1.0.

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

Define a textura do item. Requer o uso de uma textura válida do resource pack!

| Chave           |              Valores              | Padrão |
|-----------------|:---------------------------------:|--------|
| `customModelID` | [Número inteiro](#numero-inteiro) | nenhum |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
material: DIAMOND_SWORD
customModelID: 1
```

</div>

Isto usará a textura personalizada 1 de espadas de diamante do resource pack que o jogador está a usar. É recomendado
que configures o teu servidor para dar resource packs aos jogadores ao iniciar sessão se quiseres usar esta
funcionalidade corretamente.

</details>

***

### customModelV2

A começar com a versão 1.21.4 do Minecraft (EM 9.1.13), esta é a nova definição necessária para configurar IDs de modelo
de item personalizado.
Define a textura do item. Requer o uso de uma textura válida do resource pack!

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

- `elitemobs:` é o diretório principal na pasta `assets` do resource pack.
- `equipment` é um subdiretório dentro de `assets/elitemobs/models`.
- `magmaguys_toothpick` é o ficheiro de modelo localizado em `assets/elitemobs/models/equipment` no resource pack.

O caminho completo para o ficheiro de modelo neste exemplo seria:
`\.minecraft\resourcepacks\elitemobs_resource_pack\assets\elitemobs\models\equipment\magmaguys_toothpick.json`

</div>

Isto usará a textura personalizada `magmaguys_toothpick` do resource pack EliteMobs que o jogador está a usar. É
recomendado que configures o teu servidor para dar resource packs aos jogadores ao iniciar sessão se quiseres usar esta
funcionalidade corretamente.

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

Define se o item deve ser soulbound ao ser dropado.

| Chave       |        Valores        | Padrão |
|-------------|:---------------------:|--------|
| `soulbound` | [Booleano](#booleano) | `true` |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
soulbound: true
```

</div>

</details>


</div>
