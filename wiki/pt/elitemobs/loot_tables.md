# Tabela de Saque Personalizada

Formato de saque universal. Usado pelo EliteMobs em vários locais diferentes.

Por favor, note que este é o formato mais recente e o recomendado para usar, mas existem alguns formatos antigos
alternativos.

Certifique-se de começar as suas tabelas de saque com `uniqueLootList:` antes de adicionar quaisquer definições, caso
contrário, a configuração .yml irá apresentar um erro.

### Soltar itens de elite:

| Chave      |                           Detalhes                           | Valores                       | Padrão |
|------------|:------------------------------------------------------------:|-------------------------------|--------|
| `filename` | Define o nome do ficheiro do Item Personalizado a ser usado. | [Nome do Ficheiro](#filename) | nenhum |

<details> 

<summary align="center"><b>Exemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
```

Isto fará com que o mob deixe cair 1 *Palito de Dentes do MagmaGuy* com uma chance de drop de 100%.

</div>

</details>

### Definições gerais:

| Chave               |                            Detalhes                            | Valores             | Padrão  |
|---------------------|:--------------------------------------------------------------:|---------------------|---------|
| `chance`            |           Define a chance do saque ser deixado cair.           | [Double](#double)   | `1.0`   |
| `amount`            | Define a quantidade desta entrada de saque a ser deixada cair. | [Integer](#integer) | `1`     |
| `ignorePlayerLevel` |  Faz com que o saque ignore o limitador de saque do jogador.   | [Boolean](#boolean) | `false` |

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

Isto fará com que o mob deixe cair 10 *Palitos de Dentes do MagmaGuy* com uma chance de drop de 50%, ignorando o nível
do jogador.

</div>

</details>

### Soltar moedas de elite:

| Chave            |                        Detalhes                        | Valores             | Padrão |
|------------------|:------------------------------------------------------:|---------------------|--------|
| `currencyAmount` | Define a quantidade de moedas que serão deixadas cair. | [Integer](#integer) | nenhum |

<details> 

<summary align="center"><b>Exemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - currencyAmount: 344
    chance: 0.5
```

Isto fará com que o mob deixe cair 344 *Moedas de Elite* com uma chance de drop de 50%.

</div>

</details>

### Soltar itens vanilla:

| Chave      |                Detalhes                 | Valores               | Padrão |
|------------|:---------------------------------------:|-----------------------|--------|
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

Isto fará com que o mob deixe cair 5 *Maçãs* com uma chance de drop de 30%.

</div>

</details>

### Arenas: EM DESENVOLVIMENTO (Não funciona atualmente)

Ao criar tabelas de saque de arena, certifique-se de começar a sua tabela de saque com `rawArenaReward:` em vez
de `uniqueLootList:`.

| Chave   |                                         Detalhes                                         | Valores             | Padrão |
|---------|:----------------------------------------------------------------------------------------:|---------------------|--------|
| `wave`  | Define a onda em que esta entrada de saque será deixada cair. Apenas para uso em arenas. | [Integer](#integer) | nenhum |
| `level` |             Define o nível do saque deixado cair. Apenas para uso em arenas.             | [Integer](#integer) | nenhum |

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

Quando os jogadores vencerem a primeira onda, isto fará com que a arena deixe cair 10 *Pães* com uma chance de drop de
50% e 1 *Palito de Dentes do MagmaGuy* que seja de nível 2 com uma chance de drop de 100%.

</div>

</details>

### Masmorras Instanciadas:

| Chave          |                                                                    Detalhes                                                                     | Valores           | Padrão |
|----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------:|-------------------|--------|
| `difficultyID` | Define a lista de dificuldades de masmorras instanciadas para as quais este saque será deixado cair. Apenas para uso em masmorras instanciadas. | [String](#string) | nenhum |

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

Isto fará com que o mob deixe cair 1 *Palito de Dentes do MagmaGuy* com uma chance de drop de 50% se os jogadores
derrotarem o boss na dificuldade 1 ou 2.

</div>

</details>
