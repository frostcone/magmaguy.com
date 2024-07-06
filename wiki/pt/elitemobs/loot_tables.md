# Tabela de Loot Personalizada

Formato universal de loot. Usado pelo EliteMobs em vários locais diferentes.

Observe que este é o formato mais recente e o que é recomendado para usar, mas alguns formatos antigos alternativos existem. 

Certifique-se de iniciar suas tabelas de loot com `uniqueLootList:` antes de adicionar qualquer configuração, caso contrário, a configuração .yml apresentará um erro.

### Deixando cair itens elite:

| Chave | Detalhes | Valores                | Padrão |
| --- | :-: |-----------------------| --- |
| `filename` | Define o nome do arquivo do Item Personalizado a ser usado. | [Nome do Arquivo](#filename) | nenhum |

<details> 

<summary align="center"><b>Exemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
```

Isso fará com que o mob deixe cair 1 *Palito de Dente do MagmaGuy* com uma chance de 100% de drop.

</div>

</details>

### Configurações Gerais:

| Chave | Detalhes | Valores              | Padrão |
| --- | :-: |---------------------| --- |
| `chance` | Define a chance de o loot ser deixado cair. | [Double](#double)   | `1.0` |
| `amount` | Define a quantidade desta entrada de loot a ser deixada cair | [Integer](#integer) | `1` |
| `ignorePlayerLevel` | Faz com que o loot ignore o limitador de loot do jogador | [Booleano](#boolean) | `false` |

<details> 

<summary align="center"><b>Exemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
    chance: 0.5
    amount: 10
    ignorePlayerLevel: true
```

Isso fará com que o mob deixe cair 10 *Palitos de Dente do MagmaGuy* com uma chance de 50% de drop, ignorando o nível do jogador.

</div>

</details>

### Deixando cair moedas elite:

| Chave | Detalhes | Valores              | Padrão |
| --- | :-: |---------------------| --- |
| `currencyAmount` | Define a quantidade de moedas que serão deixadas cair. | [Integer](#integer) | nenhum |

<details> 

<summary align="center"><b>Exemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - currencyAmount: 344
    chance: 0.5
```
Isso fará com que o mob deixe cair 344 *Moedas Elite* com uma chance de 50% de drop.

</div>

</details>

### Deixando cair itens do vanilla:

| Chave | Detalhes | Valores                | Padrão |
| --- | :-: |-----------------------| --- |
| `material` | Define o material do item deixado cair. | [Material](#material) | nenhum |

<details> 

<summary align="center"><b>Exemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - material: APPLE
    chance: 0.3
    amount: 5
```
Isso fará com que o mob deixe cair 5 *Maçãs* com uma chance de 30% de drop.

</div>

</details>

### Arenas: EM ANDAMENTO (Não está funcionando atualmente)
Ao criar tabelas de loot de arena, certifique-se de iniciar sua tabela de loot com `rawArenaReward:` em vez de `uniqueLootList:`.

| Chave | Detalhes | Valores              | Padrão |
| --- | :-: |---------------------| --- |
| `wave` | Define a onda em que esta entrada de loot será deixada cair. Somente para uso em arenas. | [Integer](#integer) | nenhum |
| `level` | Define o nível do loot deixado cair. Somente para uso em arenas. | [Integer](#integer) | nenhum |

<details> 

<summary align="center"><b>Exemplo</b></summary>

<div align="left">

```yml
rawArenaReward:
  - material: BREAD
    wave: 1
    amount: 10
    chance: 0.5
  - filename: magmaguys_toothpick.yml
    wave: 1
    level: 2
```
Quando os jogadores vencerem a primeira onda, isso fará com que a arena deixe cair 10 *Pães* com uma chance de 50% de drop e 1 *Palito de Dente do MagmaGuy* que está no nível 2 com uma chance de 100% de drop.

</div>

</details>

### Masmorras Instanciadas:

| Chave | Detalhes | Valores            | Padrão |
| --- | :-: |-------------------| --- |
| `difficultyID` | Define a lista de dificuldades de masmorra instanciada para a qual este loot será deixado cair. Somente para uso em masmorras instanciadas. | [String](#string) | nenhum |

<details> 

<summary align="center"><b>Exemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
    chance: 0.5
    difficultyID:
    - 1
    - 2
```
Isso fará com que o mob deixe cair 1 *Palito de Dente do MagmaGuy* com uma chance de 50% de drop se os jogadores tiverem derrotado o chefe na dificuldade 1 ou 2.

</div>

</details>

