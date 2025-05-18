A partir do EliteMobs 7.3.0, é possível para os jogadores interagir com Itens de Elite de várias formas únicas. Esta página destina-se a ajudar jogadores e administradores a entender como os sistemas funcionam, e mais tarde explicar o equilíbrio do sistema para os administradores.

***

# Desvincular Itens

Se tiver um pergaminho de desvinculação de item, pode usar o NPC Desvinculador para combinar 1 pergaminho com 1 item para o desvincular.

***Nota: à data de escrita, não há forma de os jogadores obterem o pergaminho sem lhes ser dado ou adicionado a um boss específico. O pergaminho cairá do combate contra o Ender Dragon que será lançado este mês.***

O pergaminho só pode ser usado uma vez. Uma vez desvinculados, os itens podem ser vendidos ou dados a outros jogadores, ou ser usados após um prestígio.

***

# Desmantelar Itens

Itens de Elite podem ser desmantelados no NPC Desmantelador. Ao desmantelar itens, dependendo do nível do item, obterá o seguinte sucata:

- Nível 0-50: Sucata Minúscula.
- Nível 50-100: Sucata Pequena.
- Nível 100-150: Sucata Média.
- Nível 150-200: Sucata Enorme.

A Sucata é a base para o resto do Sistema de Itens.

***

# Reparar Itens de Elite

Itens de Elite podem ser reparados no NPC Reparador usando sucata. A extensão do dano no seu item determina a quantidade e o tamanho da sucata necessária para o reparar.

***

# Encantar Itens de Elite

Antes de prosseguir para descrever como encantar itens, é aconselhável familiarizar-se com os itens necessários para encantar e entender as suas funções.

**Item de Elite**
</br>Um item de elite abrange qualquer saque disponível nas lojas do EliteMobs, largado por Mobs de Elite, ou recebido como recompensa por completar uma missão, entre outras fontes.

**Livros Encantados**
</br>Livros encantados são tipicamente largados por Mobs de Elite ou concedidos aos jogadores como recompensas em Arenas ou Missões. Contêm encantamentos que os jogadores podem transferir para os seus itens desejados.

**Bilhetes de Sorte**
</br>Bilhetes de Sorte, geralmente obtidos de Mobs de Elite ou como recompensas em Arenas ou Missões, permitem aos jogadores duplicar as suas chances de sucesso ao encantar itens.

Os jogadores podem aceder ao menu de encantamento visitando o NPC Encantador na [Guilda dos Aventureiros](pt-pt/elitemobs/adventurers_guild_world.md) ou usando o menu `/em`.

Com um Item de Elite e um Livro Encantado, os jogadores podem tentar adicionar o encantamento armazenado no livro ao seu item. Cada tentativa custará aos jogadores algumas Moedas de Elite. Também podem duplicar as suas chances usando um Bilhete de Sorte, se tiverem um.

Para iniciar o encantamento, os jogadores colocariam um Item de Elite, um Livro Encantado e um Bilhete de Sorte (Se tiverem um) na janela de Encantamento e depois tentariam encantar o seu item. Depois disso, encontrariam um dos seguintes resultados:

- **Sucesso:** O encantamento é adicionado com sucesso ao item.
- **Falha:** Tentativa sem sucesso, resultando na perda do Livro Encantado e das Moedas de Elite.
- **Falha Crítica:** Uma falha mais severa, levando à perda do Livro Encantado, das Moedas de Elite e do próprio Item de Elite.
- **Desafio:** Participar numa Batalha de Boss com 10% de chance de falha crítica ao perder. O item é encantado se os jogadores ganharem.

<details>

<summary><b>Exemplo Visual</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/enchant_example.webm" type="video/webm">
  Your browser does not support the video tag.
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

| Chave         |      Valores       | Padrão |
|-------------|:-----------------:|:-------:|
| `isEnabled` | [Booleano](#boolean) | `true`  |

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

Define o nome do item. Suporta [Códigos de Cor](#color_codes).

| Chave         |      Valores       | Padrão |
|-------------|:-----------------:|:-------:|
| `name` | [String](#string) |  nenhum   |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
name: '&aElite Custom Enchanted Book'
```

<div align="center">

![create_book_name.jpg](../../../img/wiki/create_book_name.jpg)

</div>

</div>

</details>

***

### lore

Define a descrição (lore) do item. Suporta [Códigos de Cor](#color_codes).

| Chave         |           Valores            | Padrão |
|-------------|:---------------------------:|:-------:|
| `lore` | [Lista de Strings](#string_list) |  nenhum   |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
lore:
- '&2Use this custom book to'
- '&2enchant items at the enchanter!'
```

<div align="center">

![create_book_lore.jpg](../../../img/wiki/create_book_lore.jpg)

</div>

</div>

</details>

***

### material

Define qual material do MineCraft o item deve ser.

| Chave         |      Valores       | Padrão |
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

Define quais encantamentos o item deve conter.

| Chave         |    Valores    | Padrão |
|-------------|:------------:|:-------:|
| `enchantments` | [Encantamentos do MineCraft](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) ou [Encantamentos do EliteMobs](pt-pt/elitemobs/custom_enchantments_list.md) |  nenhum   |

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

Caso contrário, pode defini-lo como `unique` para que apenas caia de tabelas de saque configuradas.

| Chave         |    Valores    | Padrão |
|-------------|:------------:|:-------:|
| `itemType` | [Valores](pt-pt/elitemobs/creating_items.md&section=itemtype) |  nenhum   |

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

Define se podem ser trocados com outros jogadores.

| Chave         |    Valores    | Padrão |
|-------------|:------------:|:-------:|
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

## Exemplo de Livro Encantado

<div align="center">

<details>

<summary><b>Exemplo de Configuração de Livro Encantado</b></summary>

<div align="left">

```yml
isEnabled: true
material: BOOK
name: '&5Excellent Mining Enchanted Book'
lore:
- '&2Used to enchant items at the enchanter!'
enchantments:
- MENDING,1
- DRILLING,1
itemType: UNIQUE
soulbound: false
```

Como pode ver, criar os seus Livros Encantados não é assim tão complicado. A maioria das configurações são configurações regulares que usaria ao criar um [item](pt-pt/elitemobs/creating_items.md).

Exceto que, claro, aqui o nosso foco principal seria a secção `enchantments`. O nosso livro de exemplo tem um encantamento do MineCraft `MENDING` e um encantamento do EliteMobs `DRILLING`.

Isto faria do nosso livro de exemplo um excelente livro que gostaria de usar numa picareta.

</div>

</details>

</div>