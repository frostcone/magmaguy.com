# Criando Reforços Personalizados

Se tem interesse em invocar elites durante o combate para reforçar um boss, este guia cobre isso em detalhe.

## Passos para criar um boss personalizado:

1. Crie o seu boss personalizado principal que irá invocar o seu boss personalizado.
2. Crie um boss personalizado para reforços. Tenha em mente que os bosses personalizados podem ser mais fortes do que os
   mobs do jogo base, mas também podem ser mais fracos.
3. Adicione a linha de reforço correta ao ficheiro de configuração

## Criando a linha de reforço

Vamos assumir que tem um boss personalizado com este formato:

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eBinder of Worlds
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
```

E quer adicionar reforços a ele. Aqui está como um tal reforço poderia parecer:

```yaml
- summonType:ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

E para torná-lo válido, adicione-o à lista de poderes:

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

O reforço agora foi adicionado à entidade boss. No entanto, como pode ver, existem várias opções aqui que pode
personalizar. Vamos analisá-las.

## Todas as opções de Reforço Personalizado

*Dica: Também pode usar EliteScript para invocar reforços, mais sobre isso [aqui]($language$/elitemobs/elitescript_actions.md&section=summon_reinforcement).*

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

| Chave                           | Descrição                                                                                                                                                                                                                 |
|---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ONCE`                          | Invoca o reforço uma vez, na primeira vez que o boss é atingido. (pode depender de uma probabilidade % de acontecer)                                                                                                      |
| `ON_HIT`                        | Invoca o reforço sempre que o boss é atingido (pode depender de uma probabilidade % de acontecer)                                                                                                                         |
| `ON_COMBAT_ENTER`               | Invoca o reforço quando o boss entra em combate (1)                                                                                                                                                                       |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL` | Especial: isto é especificamente para colocar cristais do end para lutas de dragão quando o boss entra em combate (1)                                                                                                     |
| `GLOBAL`                        | Invoca reforços para cada jogador no mesmo mundo que o boss. Os reforços aparecerão perto dos jogadores, não importa quão longe eles estejam do boss. Isto requer que o campo `customSpawn` seja definido para funcionar! |

_(1) Os bosses entram em combate quando são atingidos por jogadores ou quando detetam um jogador dentro do alcance._

***

### filename

Este é um campo obrigatório, pois define qual reforço deve aparecer. A única exceção para tornar este campo obrigatório
é quando se usa a definição `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`, pois os cristais do end não são elites.

| Chave      |            Valores            | Padrão |
|------------|:-----------------------------:|:------:|
| `filename` | [Nome do Ficheiro](#filename) | nenhum |

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

`summonType: SUMMON_TYPE` e `filename: filename.yml` são suficientes por si só para criar um Reforço Personalizado. O
exemplo a seguir demonstra isso.

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

Este é um campo de configuração opcional feito para complementar as opções `summonType` `ONCE` e `ON_HIT`. Representa a
probabilidade do Reforço Personalizado aparecer quando um boss é atingido.

| Chave    |      Valores      | Padrão |
|----------|:-----------------:|:------:|
| `chance` | [Double](#double) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
chance: 0.5
```

*Representa uma probabilidade de 50% de invocar um Reforço Personalizado.*

</div>

</details>

***

### location

`location: x,y,z` é um campo de configuração opcional que permite aos administradores compensar a localização do reforço
por um número de blocos. Aqui estão os conceitos-chave que precisa saber sobre esta opção:

**A localização de compensação é relativa.** Isto significa que `location: 0,10,0` irá invocar um boss exatamente 10
blocos acima do boss, e não nas coordenadas do mundo 0,10,0.

**A localização relativa é diferente para bosses regionais.** Os bosses regionais usarão sempre o seu ponto de spawn
como a origem para a localização relativa, o que significa que se souber onde está o ponto de spawn do boss e contar os
blocos, pode fazer com que os bosses de reforço apareçam em localizações de blocos específicas. O covil do Binder of
Worlds depende disso para invocar os bosses da torre de desafio em posições de bloco extremamente específicas,
independentemente de onde o boss dragão esteja.

**Os bosses aparecerão dentro de blocos se falhar a medição das distâncias.**

| Chave    |      Valores       | Padrão |
|--------|:-----------------:|:-------:|
| `location` | [String](#string) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
location: 0,10,0
```

*Para um Boss Personalizado não regional, irá invocar o reforço exatamente 10 blocos acima do boss, independentemente de
onde ele possa estar.*

*Para um Boss Personalizado regional, irá invocar o reforço exatamente 10 blocos acima do ponto de spawn do boss
regional, independentemente de onde o boss esteja.*

</div>

</details>

_**Nota importante: Este é um campo obrigatório para `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL` especificamente!**_

***

### lightningRod

É uma configuração especial útil apenas para `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`. Isto dá aos cristais do end a
capacidade de atingir o chão à sua volta com um relâmpago num atraso.

Não pode ser usado com os outros Reforços Personalizados, pois esses devem depender de poderes para estes tipos de
habilidades.

| Chave    |       Valores        | Padrão |
|--------|:-------------------:|:-------:|
| `lightningRod` | [Boolean](#boolean) | `false` |

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

Isto é especialmente útil quando quer que os reforços que aparecem tenham como alvo a pessoa que está a causar a maior
quantidade de dano.

| Chave    |       Valores        | Padrão |
|--------|:-------------------:|:-------:|
| `inheritAggro` | [Boolean](#boolean) | `false` |

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

| Chave    |       Valores       | Padrão |
|----------|:-------------------:|:------:|
| `amount` | [Integer](#integer) |  `1`   |

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

É um campo de configuração opcional que define se o Reforço Personalizado deve aparecer nas proximidades, em vez de em
cima do boss ou num local relativo específico.

Este método deve ter em conta corretamente a variação do terreno, e não invocar bosses dentro de paredes, embora em
algumas configurações possa resultar em que apareçam atrás de paredes se a área de combate for demasiado pequena. Tem um
raio de ~30 blocos.

| Chave    |       Valores        | Padrão |
|--------|:-------------------:|:-------:|
| `spawnNearby` | [Boolean](#boolean) | `false` |

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

É um campo de configuração opcional que define se o Reforço Personalizado deve herdar o nível do Boss Personalizado que
está a reforçar.

| Chave    |       Valores        | Padrão |
|--------|:-------------------:|:-------:|
| `inheritLevel` | [Boolean](#boolean) | `false` |

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

É um campo de configuração que é usado apenas para reforços globais. Ele usa as configurações de spawn personalizado
para definir onde os reforços poderão aparecer.

Isto pode ser usado para fazer com que os reforços possam aparecer na superfície, em locais com luz, em biomas
específicos e assim por diante. Consulte a página wiki
sobre [Spawns Personalizados]($language$/elitemobs/creating_spawns.md) para mais detalhes

| Chave         |            Valores            | Padrão |
|---------------|:-----------------------------:|:------:|
| `customSpawn` | [Nome do Ficheiro](#filename) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
customSpawn: normal_surface_spawn.yml
```

</div>

</details>

</div>

## Juntando um grande reforço

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
- O Reforço Personalizado irá aparecer quando o Boss Personalizado entrar em combate (`summonType: ON_COMBAT_ENTER`)
- O Reforço Personalizado invocado será o de `test_boss.yml` (`filename: test_boss.yml`)
- O Reforço Personalizado irá aparecer dentro de 30 blocos da localização atual do Boss
  Personalizado (`spawnNearby: true`)
- O Reforço Personalizado irá herdar a agressão do Boss Personalizado que está a reforçar, o que significa que irá
  atacar o jogador que causou mais dano (`inheritAggro: true`)
- Independentemente da configuração em `test_boss.yml`, o Reforço Personalizado terá o mesmo nível do Boss Personalizado
  que está a reforçar (`inheritLevel: true`)

```yaml
- summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL
  location: -80,10,0
  lightningRod: true
```

Isto faz o seguinte:

- Cria um Reforço Personalizado
- O Reforço Personalizado será um Cristal do End que é colocado quando o combate começa (`summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`)
- O Cristal do End irá atingir o chão à volta com um relâmpago num atraso (`lightningRod: true`)

Agora, para aplicar isto ao Boss Personalizado:

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

E já está! Aqui estão mais algumas dicas:

- Os campos podem ser definidos em qualquer ordem, embora seja recomendado ter sempre `summonable` primeiro!
- Esta é uma grande melhoria em relação ao antigo sistema de reforços, que já não está listado. Não é recomendável
  depender dele neste momento, pois pode deixar de funcionar no futuro.
