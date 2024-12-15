# Tabela de Saque Personalizada

Formato de saque universal. Usado pelo EliteMobs em vários locais diferentes.

Por favor, note que este é o formato mais recente e o que é recomendado para usar, mas alguns formatos antigos alternativos existem.

Certifique-se de começar as suas tabelas de saque com `uniqueLootList:` antes de adicionar quaisquer configurações, caso contrário, a configuração .yml irá apresentar erro.

### Deixar cair itens de elite:

| Chave      | Detalhes                                                                  | Valores                                  | Padrão |
| ----------- | :------------------------------------------------------------------------: | ----------------------------------------- | -----: |
| `filename` | Define o nome do arquivo do Item Personalizado a ser usado. | [Nome do Arquivo](#filename) |  nenhum  |

<details>

<summary align="center"><b>Exemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
```

Isto fará com que o mob deixe cair 1 de *Palito de Dente do MagmaGuy* com uma chance de 100% de queda.

</div>

</details>

### Configurações gerais:

| Chave               | Detalhes                                | Valores                 | Padrão |
| -------------------- | :-------------------------------------: | ----------------------- | -----: |
| `chance`            | Define a chance de o saque cair.          | [Double](#double)       | `1.0`  |
| `amount`            | Define a quantidade desta entrada de saque a ser deixada cair. | [Integer](#integer) |   `1`  |
| `ignorePlayerLevel` | Faz com que o saque ignore o limitador de saque do jogador.     | [Boolean](#boolean)    | `false` |

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

Isto fará com que o mob deixe cair 10 de *Palito de Dente do MagmaGuy* com uma chance de 50% de queda, ignorando o nível do jogador.

</div>

</details>

### Deixar cair moedas de elite:

| Chave            | Detalhes                                     | Valores              | Padrão |
| ----------------- | :------------------------------------------: | -------------------- | -----: |
| `currencyAmount` | Define a quantidade de moedas que serão deixadas cair. | [Integer](#integer) | nenhum |

<details>

<summary align="center"><b>Exemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - currencyAmount: 344
    chance: 0.5
```

Isto fará com que o mob deixe cair 344 *Moedas de Elite* com uma chance de 50% de queda.

</div>

</details>

### Deixar cair itens vanilla:

| Chave     | Detalhes                                   | Valores                | Padrão |
| --------- | :----------------------------------------: | ---------------------- | -----: |
| `material`| Define o material do item deixado cair.   | [Material](#material) | nenhum |

<details>

<summary align="center"><b>Exemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - material: APPLE
    chance: 0.3
    amount: 5
```
Isto fará com que o mob deixe cair 5 *Maçãs* com uma chance de 30% de queda.

</div>

</details>

### Arenas: TRABALHO EM PROGRESSO (Não funciona atualmente)
Ao fazer tabelas de saque de arena, por favor, certifique-se de que começa a sua tabela de saque com `rawArenaReward:` em vez de `uniqueLootList:`.

| Chave   | Detalhes                                           | Valores              | Padrão |
| ------- | :------------------------------------------------: | -------------------- | -----: |
| `wave`  | Define a onda em que esta entrada de saque irá cair. Apenas para uso em arenas. | [Integer](#integer) | nenhum |
| `level` | Define o nível da queda de saque. Apenas para uso em arenas.            | [Integer](#integer) | nenhum |

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
Quando os jogadores vencerem a primeira onda, isto fará com que a arena deixe cair 10 *Pães* com uma chance de 50% de queda e 1 *Palito de Dente do MagmaGuy* que é de nível 2 com uma chance de 100% de queda.

</div>

</details>

### Masmorras Instanciadas:

| Chave          | Detalhes                                                               | Valores                | Padrão |
| -------------- | :---------------------------------------------------------------------: | ---------------------- | -----: |
| `difficultyID` | Define a lista de dificuldades de masmorra instanciada para as quais este saque irá cair. Apenas para uso em masmorras instanciadas. | [String](#string) | nenhum |

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
Isto fará com que o mob deixe cair 1 *Palito de Dente do MagmaGuy* com uma chance de 50% de queda se os jogadores derrotarem o chefe na dificuldade 1 ou 2.

</div>

</details>
