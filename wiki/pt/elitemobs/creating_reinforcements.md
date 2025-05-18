Claro, aqui está a tradução para português (Portugal), mantendo a formatação markdown:

# Criar Reforços Personalizados

Se estiver interessado em invocar elites durante o combate para reforçar um boss, este guia cobre isso em detalhe.

## Passos para criar um boss personalizado:

1. Crie o seu boss personalizado principal que irá invocar o seu boss personalizado
2. Crie um boss personalizado para reforços. Tenha em mente que bosses personalizados podem ser mais fortes que mobs vanilla, mas também podem ser mais fracos.
3. Adicione a linha de reforço correta ao ficheiro de configuração

## Criar a linha de reforço

Vamos assumir que tem um boss personalizado com este formato:

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eBinder of Worlds
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
```

E quer adicionar reforços a ele. Eis como um desses reforços poderia ser:

```yaml
- summonType:ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

E para o tornar válido, adicione-o à lista de poderes:

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eBinder of Worlds
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

O reforço está agora adicionado à entidade do boss. No entanto, como pode ver, existem várias opções aqui que pode personalizar. Vamos abordá-las.

## Todas as opções de Reforço Personalizado

*Dica: Também pode usar EliteScript para invocar reforços, mais sobre isso [aqui](pt-pt/elitemobs/elitescript_actions.md&section=summon_reinforcement).*

<div align="center">

### summonType

Este é um campo obrigatório. Define quando o reforço deve aparecer.

| Chave    |   Valores    | Padrão  |
|--------|:-----------:|:--------:|
| `summonType` | Especial [1] | `ON_HIT` |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
summonType: ON_HIT
```

</div>

</details>

#### Especial [1]

| Chave | Descrição                                                                                       |
|-----|---------------------------------------------------------------------------------------------------|
|  `ONCE`   | Faz aparecer o reforço uma vez, na primeira vez que o boss é atingido. (pode depender de uma % de probabilidade de acontecer) |
| `ON_HIT`  | Faz aparecer o reforço sempre que o boss é atingido (pode depender de uma % de probabilidade de acontecer)             |
| `ON_COMBAT_ENTER`    | Faz aparecer o reforço quando o boss entra em combate (1)                                                                                                  |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL`    |  Especial: isto é especificamente para colocar cristais do fim para lutas de dragão quando o boss entra em combate (1)                                                                                                 |
| `GLOBAL`    |  Faz aparecer reforços para cada jogador no mesmo mundo que o boss. Os reforços aparecerão perto dos jogadores, independentemente da distância a que estejam do boss. Isto requer que o campo `customSpawn` esteja definido para funcionar!                                                                                                 |

_(1) Bosses entram em combate quando são atingidos por jogadores ou quando detetam um jogador dentro do alcance._

***

### filename

Este é um campo obrigatório, pois define qual reforço deve aparecer. A única exceção a tornar este campo obrigatório é ao usar a configuração `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`, pois os cristais do fim não são elites.

| Chave    |        Valores         | Padrão |
|--------|:---------------------:|:-------:|
| `filename` | [Nome do Ficheiro](#filename) |  nenhum   |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
filename: test_boss.yml
```

</div>

</details>

</div>

***

**Viabilidade Mínima**

`summonType: SUMMON_TYPE` e `filename: filename.yml` são suficientes por si só para criar um Reforço Personalizado. O exemplo seguinte demonstra isto.

<div align="center">

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eBinder of Worlds
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

*No entanto, se quiser ou precisar de algo mais complexo, continue a ler abaixo para ver o que mais pode fazer com estas opções.*

</div>

</details>

</div>

<div align="center">

***

### chance

Este é um campo de configuração opcional feito para complementar as opções `summonType` `ONCE` e `ON_HIT`. Representa a probabilidade do Reforço Personalizado aparecer quando um boss é atingido.

| Chave    |        Valores         | Padrão |
|--------|:---------------------:|:-------:|
| `chance` | [Duplo](#double) |  nenhum   |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
chance: 0.5
```
*Representa uma probabilidade de 50% de fazer aparecer um Reforço Personalizado.*

</div>

</details>

***

### location

`location: x,y,z` é um campo de configuração opcional que permite aos administradores deslocar a localização do reforço por um número de blocos. Aqui estão os conceitos chave que precisa de saber sobre esta opção:

**A localização do deslocamento é relativa.** Isto significa que `location: 0,10,0` fará aparecer um boss exatamente 10 blocos acima do boss, e não nas coordenadas do mundo 0,10,0.

**A localização relativa é diferente para bosses regionais.** Bosses regionais usarão sempre o seu ponto de aparição como origem para a localização relativa, o que significa que se souber onde está o ponto de aparição do boss e contar os blocos, pode fazer com que os bosses de reforço apareçam em localizações específicas. O covil do Binder of Worlds depende disto para fazer aparecer os bosses da torre de desafio em posições de bloco extremamente específicas, independentemente de onde o boss dragão esteja.

**Bosses aparecerão dentro de blocos se medir mal as distâncias.**

| Chave    |      Valores       | Padrão |
|--------|:-----------------:|:-------:|
| `location` | [String](#string) |  nenhum   |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
location: 0,10,0
```
*Para um Boss Personalizado não regional, fará aparecer o reforço exatamente 10 blocos acima do boss, independentemente de onde ele possa estar.*

*Para um Boss Personalizado regional, fará aparecer o reforço exatamente 10 blocos acima do ponto de aparição do boss regional, independentemente de onde o boss esteja.*

</div>

</details>

_**Nota importante: Este é um campo obrigatório especificamente para `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`!**_

***

### lightningRod

É uma configuração especial útil apenas para `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`. Isto dá aos cristais do fim a capacidade de atingir o chão à sua volta com um atraso.

Não pode ser usado com os outros Reforços Personalizados, pois estes devem depender de poderes para este tipo de habilidades.

| Chave    |       Valores        | Padrão |
|--------|:-------------------:|:-------:|
| `lightningRod` | [Booleano](#boolean) | `false` |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
lightningRod: false
```

</div>

</details>

***

### inheritAggro

É um campo de configuração opcional que faz com que os Reforços Personalizados herdem os níveis de ameaça do boss.

Isto é especialmente útil quando quer que os reforços que aparecem ataquem a pessoa que está a causar a maior quantidade de dano.

| Chave    |       Valores        | Padrão |
|--------|:-------------------:|:-------:|
| `inheritAggro` | [Booleano](#boolean) | `false` |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
inheritAggro: false
```

</div>

</details>

***

### amount

É um campo de configuração opcional que define a quantidade de Reforços que aparecem.

| Chave    |       Valores        | Padrão |
|--------|:-------------------:|:-------:|
| `amount` | [Inteiro](#integer) |   `1`   |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
amount: 1
```

</div>

</details>

***

### spawnNearby

É um campo de configuração opcional que define se o Reforço Personalizado deve aparecer por perto em vez de em cima do boss ou numa localização relativa específica.

Este método deve ter em conta corretamente a variação do terreno e não fazer aparecer bosses dentro de paredes, embora em algumas configurações possa resultar em eles aparecerem atrás de paredes se a área de combate for muito pequena. Tem um raio de ~30 blocos.

| Chave    |       Valores        | Padrão |
|--------|:-------------------:|:-------:|
| `spawnNearby` | [Booleano](#boolean) | `false` |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
spawnNearby: false
```

</div>

</details>

***

### inheritLevel

É um campo de configuração opcional que define se o Reforço Personalizado deve herdar o nível do Boss Personalizado que está a reforçar.

| Chave    |       Valores        | Padrão |
|--------|:-------------------:|:-------:|
| `inheritLevel` | [Booleano](#boolean) | `false` |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
inheritLevel: false
```

</div>

</details>

***

### customSpawn

É um campo de configuração que é usado apenas para reforços globais. Usa as configurações de aparição personalizadas para definir onde os reforços poderão aparecer.

Isto pode ser usado para fazer com que os reforços possam aparecer na superfície, em locais com luz, em biomas específicos e assim por diante. Consulte a página wiki sobre [Aparições Personalizadas](pt-pt/elitemobs/creating_spawns.md) para mais detalhes

| Chave    |        Valores         | Padrão |
|--------|:---------------------:|:-------:|
| `customSpawn` | [Nome do Ficheiro](#filename) |  nenhum   |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
customSpawn: normal_surface_spawn.yml
```

</div>

</details>

</div>

## Juntar um grande reforço

Vamos criar um exemplo de reforço usando a maioria dos campos anteriores:

```yaml
- summonType: ON_COMBAT_ENTER
  filename: test_boss.yml
  spawnNearby: true
  inheritAggro: true
  inheritLevel: true
```

Isto faz o seguinte:

- Cria um Reforço Personalizado
- O Reforço Personalizado aparecerá quando o Boss Personalizado entrar em combate (`summonType: ON_COMBAT_ENTER`)
- O Reforço Personalizado invocado será o do `test_boss.yml` (`filename: test_boss.yml`)
- O Reforço Personalizado aparecerá num raio de 30 blocos da localização atual do Boss Personalizado (`spawnNearby: true`)
- O Reforço Personalizado herdará o aggro do Boss Personalizado que está a reforçar, o que significa que atacará o jogador que causou a maior quantidade de dano (`inheritAggro: true`)
- Independentemente da configuração em `test_boss.yml`, o Reforço Personalizado terá o mesmo nível que o Boss Personalizado que está a reforçar (`inheritLevel: true`)

```yaml
- summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL
  location: -80,10,0
  lightningRod: true
```

Isto faz o seguinte:

- Cria um Reforço Personalizado
- O Reforço Personalizado será um Cristal do Fim que é colocado quando o combate começa (`summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`)
- O Cristal do Fim atingirá o chão à volta com um atraso (`lightningRod: true`)

Agora para aplicar isto ao Boss Personalizado:

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eBinder of Worlds
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: test_boss.yml
  spawnNearby: true
  inheritAggro: true
  inheritLevel: true
- summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL
  location: -80,10,0
  lightningRod: true
```

E está feito! Aqui ficam mais algumas dicas:

- Os campos podem ser definidos em qualquer ordem, embora seja recomendado ter sempre `summonable` primeiro!
- Esta é uma grande melhoria em relação ao antigo sistema de reforços, que já não está listado. Não é recomendado depender dele neste momento, pois pode deixar de funcionar no futuro.