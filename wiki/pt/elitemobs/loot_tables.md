```markdown
# Tabela de Saque Personalizada

Formato de saque universal. Usado pelo EliteMobs em vários locais diferentes.

Por favor, note que este é o formato mais recente e o recomendado para usar, mas existem alguns formatos alternativos mais antigos.

Certifique-se de começar as suas tabelas de saque com `uniqueLootList:` antes de adicionar quaisquer configurações, caso contrário, a configuração .yml dará erro.

### Saque de itens de elite:

| Chave | Detalhes | Valores                | Padrão  |
| --- | :-: |-----------------------| --- |
| `filename` | Define o nome do ficheiro do Item Personalizado a usar. | [Nome do Ficheiro](#filename) | nenhum |

<details>

<summary align="center"><b>Exemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
```

Isto fará com que o mob largue 1 de *MagmaGuy's Toothpick* com 100% de probabilidade de saque.

</div>

</details>

### Configurações gerais:

| Chave | Detalhes | Valores              | Padrão |
| --- | :-: |---------------------| --- |
| `chance` | Define a probabilidade de o saque ser largado. | [Duplo](#double)   | `1.0` |
| `amount` | Define a quantidade desta entrada de saque a largar | [Inteiro](#integer) | `1` |
| `ignorePlayerLevel` | Faz com que o saque ignore o limitador de saque do jogador | [Booleano](#boolean) | `false` |

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

Isto fará com que o mob largue 10 de *MagmaGuy's Toothpick* com 50% de probabilidade de saque, ignorando o nível do jogador.

</div>

</details>

### Saque de moedas de elite:

| Chave | Detalhes | Valores              | Padrão  |
| --- | :-: |---------------------| --- |
| `currencyAmount` | Define a quantidade de moedas que serão largadas. | [Inteiro](#integer) | nenhum |

<details>

<summary align="center"><b>Exemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - currencyAmount: 344
    chance: 0.5
```
Isto fará com que o mob largue 344 *Moedas de Elite* com 50% de probabilidade de saque.

</div>

</details>

### Saque de itens vanilla:

| Chave | Detalhes | Valores                | Padrão  |
| --- | :-: |-----------------------| --- |
| `material` | Define o material do item largado. | [Material](#material) | nenhum |

<details>

<summary align="center"><b>Exemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - material: APPLE
    chance: 0.3
    amount: 5
```
Isto fará com que o mob largue 5 *Maçãs* com 30% de probabilidade de saque.

</div>

</details>

### Arenas: EM PROGRESSO (Não está a funcionar atualmente)
Ao criar tabelas de saque de arena, por favor, certifique-se de começar a sua tabela de saque com `rawArenaReward:` em vez de `uniqueLootList:`.

| Chave | Detalhes | Valores              | Padrão  |
| --- | :-: |---------------------| --- |
| `wave` | Define a vaga em que esta entrada de saque será largada. Apenas para uso em arenas. | [Inteiro](#integer) | nenhum |
| `level` | Define o nível do saque. Apenas para uso em arenas. | [Inteiro](#integer) | nenhum |

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
Quando os jogadores vencerem a primeira vaga, isto fará com que a arena largue 10 *Pão* com 50% de probabilidade de saque e 1 *MagmaGuy's Toothpick* de nível 2 com 100% de probabilidade de saque.

</div>

</details>

### Masmorras Instanciadas:

| Chave | Detalhes | Valores            | Padrão  |
| --- | :-: |-------------------| --- |
| `difficultyID` | Define a lista de dificuldades de masmorra instanciada para as quais este saque será largado. Apenas para uso em masmorras instanciadas. | [String](#string) | nenhum |

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
Isto fará com que o mob largue 1 *MagmaGuy's Toothpick* com 50% de probabilidade de saque se os jogadores derrotarem o boss na dificuldade 1 ou 2.

</div>

</details>
```