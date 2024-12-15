A partir do EliteMobs 7.3.0, é possível que os jogadores interajam com Itens de Elite de várias formas únicas. Esta página tem como objetivo ajudar os jogadores e administradores a perceberem como os sistemas funcionam e, posteriormente, explicar o equilíbrio do sistema para os administradores.

***

# Desvincular Itens

Se tiver um pergaminho de desvinculação de item, poderá usar o NPC Desvinculador para combinar 1 pergaminho com 1 item para o desvincular.

***Nota: ao escrever isto, não há forma de os jogadores obterem o pergaminho sem que este seja dado ou adicionado como um boss específico. O pergaminho será largado na luta contra o Ender Dragon, que será lançada este mês.***

O pergaminho só pode ser usado uma vez. Uma vez desvinculados, os itens podem ser vendidos ou entregues a outros jogadores, ou serem usados após um prestígio.

***

# Desmantelar Itens

Itens de Elite podem ser desmantelados no NPC Desmantelador. Ao desmantelar itens, dependendo do nível do item, receberá os seguintes materiais:

- Nível 0-50: Materiais Pequenos.
- Nível 50-100: Materiais Médios.
- Nível 100-150: Materiais Grandes.
- Nível 150-200: Materiais Enormes.

Os materiais são a base para o resto do Sistema de Itens.

***

# Reparar Itens de Elite

Itens de Elite podem ser reparados no NPC Reparador usando materiais. A extensão dos danos ao seu item determina a quantidade e o tamanho dos materiais necessários para o consertar.

***

# Encantar Itens de Elite

Antes de prosseguirmos para descrever como encantar itens, é aconselhável familiarizar-se com os itens necessários para encantar e entender as suas funções.

**Item de Elite**
</br>Um item de elite abrange qualquer saque disponível nas lojas EliteMobs, largado por Mobs de Elite ou recebido como recompensa por completar uma missão, entre outras fontes.

**Livros Encantados**
</br>Livros encantados são normalmente largados por Mobs de Elite ou concedidos aos jogadores como recompensas em Arenas ou Missões. Eles contêm encantamentos que os jogadores podem transferir para os seus itens desejados.

**Bilhetes da Sorte**
</br>Bilhetes da sorte, geralmente obtidos de Mobs de Elite ou como recompensas em Arenas ou Missões, permitem que os jogadores dupliquem as suas hipóteses de sucesso ao encantar itens.

Os jogadores podem aceder ao menu de encantamento ao visitar o NPC Encantador na [Guilda dos Aventureiros]($language$/elitemobs/adventurers_guild_world.md) ou usando o menu `/em`.

Com um Item de Elite e um Livro Encantado, os jogadores podem tentar adicionar o encantamento armazenado no livro ao seu item. Cada tentativa custará aos jogadores algumas Moedas de Elite. Eles também podem duplicar as suas hipóteses usando um Bilhete da Sorte, se tiverem um.

Para começar o encantamento, os jogadores colocariam um Item de Elite, um Livro Encantado e um Bilhete da Sorte (se tiverem um) na janela de Encantamento e, em seguida, tentariam encantar o seu item. Depois disso, eles obteriam um dos seguintes resultados:

- **Sucesso:** O encantamento é adicionado com sucesso ao item.
- **Falha:** Tentativa malsucedida, resultando na perda do Livro Encantado e das Moedas de Elite.
- **Falha Crítica:** Uma falha mais grave, levando à perda do Livro Encantado, das Moedas de Elite e do próprio Item de Elite.
- **Desafio:** Envolva-se numa Batalha de Boss com 10% de hipóteses de falha crítica ao perder. O item é encantado se os jogadores vencerem.

<details>

<summary><b>Exemplo Visual</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/enchant_example.webm" type="video/webm">
  O seu navegador não suporta a etiqueta de vídeo.
</video>

</div>

</details>

***

<details>
  <summary>Vídeo do MagmaGuy a explicar alguns dos sistemas.</summary>

  <div style="text-align: center;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/MtfeS6fq0Pw" frameborder="0" allowfullscreen></iframe>
  </div>

</details>

## Crie os seus próprios Livros Encantados

Aqui está um pequeno guia que explica como pode criar os seus próprios Livros Encantados.

<div align="center">

***

### isEnabled

Define se o item está ativado.

| Chave        | Valores        | Padrão |
|-------------|:-----------------:|:-------:|
| `isEnabled` | [Boolean](#boolean) | `true`  |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### name

Define o nome do item. Suporta [Códigos de Cores](#color_codes).

| Chave        | Valores        | Padrão |
|-------------|:-----------------:|:-------:|
| `name` | [String](#string) |  nenhum  |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
name: '&aLivro Encantado Personalizado de Elite'
```

<div align="center">

![create_book_name.jpg](../../../img/wiki/create_book_name.jpg)

</div>

</div>

</details>

***

### lore

Define a descrição do item. Suporta [Códigos de Cores](#color_codes).

| Chave        |           Valores            | Padrão |
|-------------|:---------------------------:|:-------:|
| `lore` | [Lista de Strings](#string_list) |  nenhum   |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
lore:
- '&2Use este livro personalizado para'
- '&2encantar itens no encantador!'
```

<div align="center">

![create_book_lore.jpg](../../../img/wiki/create_book_lore.jpg)

</div>

</div>

</details>

***

### material

Define qual material do MineCraft o item deve ser.

| Chave        | Valores        | Padrão |
|-------------|:-----------------:|:-------:|
| `material` | [Material](#material) | `BOOK`  |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
material: BOOK
```

<div align="center">

![create_book_material.jpg](../../../img/wiki/create_book_material.jpg)

</div>

</div>

</details>

***

### enchantments

Define quais encantamentos o item deve ter.

| Chave        |    Valores    | Padrão |
|-------------|:------------:|:-------:|
| `enchantments` | [Encantamentos do MineCraft](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) ou [Encantamentos EliteMobs]($language$/elitemobs/custom_enchantments_list.md) |  nenhum   |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
enchantments:
- EARTHQUAKE,1
- LUCK,1
```

<div align="center">

![create_book_enchantments.jpg](../../../img/wiki/create_book_enchantments.jpg)

</div>

</div>

</details>

***

### itemType

Define onde pode obter o item. Pode definir isto como `custom` se quiser que o seu livro seja largado por elites aleatórios e vendido em lojas.

Caso contrário, pode defini-lo como `unique` para que seja largado apenas em tabelas de saque configuradas.

| Chave        |    Valores    | Padrão |
|-------------|:------------:|:-------:|
| `itemType` | [Valores]($language$/elitemobs/creating_items.md&section=itemtype) |  nenhum   |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
itemType: custom
```

</div>

</details>

***

### soulbound

Define se eles podem ser trocados com outros jogadores.

| Chave        |    Valores    | Padrão |
|-------------|:------------:|:-------:|
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

## Exemplo de Livro Encantado

<div align="center">

<details>

<summary><b>Exemplo de Configuração de Livro Encantado</b></summary>

<div align="left">

```yml
isEnabled: true
material: BOOK
name: '&5Excelente Livro Encantado de Mineração'
lore:
- '&2Usado para encantar itens no encantador!'
enchantments:
- MENDING,1
- DRILLING,1
itemType: UNIQUE
soulbound: false
```

Como pode ver, criar os seus Livros Encantados não é tão complicado. A maioria das configurações são configurações regulares que usaria ao criar um [item]($language$/elitemobs/creating_items.md).

Exceto, claro, que aqui o nosso foco principal seria a secção `enchantments`. O nosso livro de exemplo tem um encantamento do MineCraft `MENDING` e um encantamento do EliteMobs `DRILLING`.

Isto faria do nosso livro de exemplo um excelente livro que gostaria de usar numa picareta.

</div>

</details>

</div>
