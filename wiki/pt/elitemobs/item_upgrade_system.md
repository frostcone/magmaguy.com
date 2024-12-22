A partir do EliteMobs 7.3.0, é possível para os jogadores interagirem com Itens de Elite de várias maneiras únicas. Esta
página tem como objetivo ajudar jogadores e administradores a entender como os sistemas funcionam e, mais tarde,
explicar o equilíbrio do sistema para administradores.

***

# Desvincular Itens

Se tiveres um pergaminho de desvinculação de item, podes usar o NPC Desvinculador para combinar 1 pergaminho com 1 item
para o desvincular.

***Nota: até ao momento em que isto foi escrito, não há forma de os jogadores obterem o pergaminho sem que ele seja dado
ou adicionado a um chefe específico. O pergaminho será largado da luta contra o Ender Dragon que será lançada este mês.
***

O pergaminho só pode ser usado uma vez. Depois de desvinculados, os itens podem ser vendidos ou dados a outros
jogadores, ou podem ser usados após um prestígio.

***

# Desmantelar Itens

Os Itens de Elite podem ser desmantelados no NPC Desmantelador. Ao desmantelar itens, dependendo do nível do item,
receberás a seguinte sucata:

- Nível 0-50: Sucata Minúscula.
- Nível 50-100: Sucata Pequena.
- Nível 100-150: Sucata Média.
- Nível 150-200: Sucata Enorme.

A sucata é a base para o resto do Sistema de Itens.

***

# Reparar Itens de Elite

Os itens de elite podem ser reparados no NPC Reparador usando sucata. A extensão dos danos no teu item determina a
quantidade e o tamanho da sucata necessária para o reparar.

***

# Encantar Itens de Elite

Antes de prosseguirmos para descrever como encantar itens, é aconselhável familiarizares-te com os itens necessários
para encantar e compreenderes as suas funções.

**Item de Elite**
</br>Um item de elite engloba qualquer saque disponível nas lojas EliteMobs, largado por Mobs de Elite ou recebido como
recompensa por completar uma missão, entre outras fontes.

**Livros Encantados**
</br>Os livros encantados são normalmente largados por Mobs de Elite ou concedidos aos jogadores como recompensa em
Arenas ou Missões. Eles contêm encantamentos que os jogadores podem transferir para os seus itens desejados.

**Bilhetes da Sorte**
</br>Os bilhetes da sorte, geralmente obtidos de Mobs de Elite ou como recompensa em Arenas ou Missões, permitem que os
jogadores dupliquem as suas chances de sucesso ao encantar itens.

Os jogadores podem aceder ao menu de encantamento visitando o NPC Encantador
na [Guilda do Aventureiro]($language$/elitemobs/adventurers_guild_world.md) ou usando o menu `/em`.

Com um Item de Elite e um Livro Encantado, os jogadores podem tentar adicionar o encantamento armazenado no livro ao seu
item. Cada tentativa custará aos jogadores algumas Moedas de Elite. Também podem duplicar as suas chances usando um
Bilhete da Sorte, se tiverem um.

Para iniciar o encantamento, os jogadores devem colocar um Item de Elite, um Livro Encantado e um Bilhete da Sorte (se
tiverem um) na janela de Encantamento e, em seguida, tentar encantar o seu item. Depois disso, eles terão um dos
seguintes resultados:

- **Sucesso:** O encantamento é adicionado com sucesso ao item.
- **Falha:** Tentativa sem sucesso, resultando na perda do Livro Encantado e das Moedas de Elite.
- **Falha Crítica:** Uma falha mais grave, que leva à perda do Livro Encantado, das Moedas de Elite e do próprio Item de
  Elite.
- **Desafio:** Participar numa Batalha de Chefe com 10% de hipótese de falha crítica ao perder. O item é encantado se os
  jogadores vencerem.

<details>

<summary><b>Exemplo Visual</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/enchant_example.webm" type="video/webm">
  O seu navegador não suporta a tag de vídeo.
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

## Cria os teus próprios Livros Encantados

Aqui está um pequeno guia que explica como podes criar os teus próprios Livros Encantados.

<div align="center">

***

### isEnabled

Define se o item está ativado.

| Chave       |        Valores        | Padrão |
|-------------|:---------------------:|:------:|
| `isEnabled` | [Booleano](#booleano) | `true` |

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

Define o nome do item. Suporta [Códigos de Cor](#códigos_de_cor).

| Chave  |      Valores      | Padrão |
|--------|:-----------------:|:------:|
| `name` | [String](#string) | nenhum |

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

Define o lore do item. Suporta [Códigos de Cor](#códigos_de_cor).

| Chave  |                Valores                | Padrão |
|--------|:-------------------------------------:|:------:|
| `lore` | [Lista de Strings](#lista_de_strings) | nenhum |

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

| Chave      |        Valores        | Padrão |
|------------|:---------------------:|:------:|
| `material` | [Material](#material) | `BOOK` |

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

| Chave          |                                                                                            Valores                                                                                             | Padrão |
|----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:------:|
| `enchantments` | [Encantamentos de MineCraft](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) ou [Encantamentos EliteMobs]($language$/elitemobs/custom_enchantments_list.md) | nenhum |

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

Define onde podes obter o item. Podes definir isto como `custom` se quiseres que o teu livro seja largado por elites
aleatórias e vendido em lojas.

Caso contrário, podes defini-lo como `unique` para que ele apenas seja largado de tabelas de saque configuradas.

| Chave      |                              Valores                               | Padrão |
|------------|:------------------------------------------------------------------:|:------:|
| `itemType` | [Valores]($language$/elitemobs/creating_items.md&section=itemtype) | nenhum |

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

| Chave       |        Valores        | Padrão |
|-------------|:---------------------:|:------:|
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

Como podes ver, criar os teus Livros Encantados não é assim tão complicado. A maioria das configurações são
configurações regulares que usarias ao criar um [item]($language$/elitemobs/creating_items.md).

Exceto que, claro, aqui o nosso foco principal seria a seção `enchantments`. O nosso livro de exemplo tem um
encantamento MineCraft `MENDING` e um encantamento EliteMobs `DRILLING`.

Isto faria do nosso livro de exemplo um excelente livro que gostarias de usar numa picareta.

</div>

</details>

</div>
