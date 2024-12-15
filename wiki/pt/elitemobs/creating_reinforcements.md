# Criar Reforços Personalizados

Se tem interesse em invocar elites durante o combate para reforçar um chefe, este guia cobre isso detalhadamente.

## Passos para criar um chefe personalizado:

1. Crie o seu chefe personalizado principal que irá invocar o seu chefe personalizado
2. Crie um chefe personalizado para reforços. Tenha em mente que os chefes personalizados podem ser mais fortes que os mobs do jogo base, mas também podem ser mais fracos.
3. Adicione a linha de reforço correta ao ficheiro de configuração

## Criar a linha de reforço

Vamos assumir que tem um chefe personalizado com este formato:

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eBinder of Worlds
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
```

E quer adicionar reforços a ele. Aqui está como um tal reforço poderia ser:

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

O reforço está agora adicionado à entidade chefe. No entanto, como pode ver, existem várias opções aqui que pode personalizar. Vamos cobri-las.

## Todas as opções de Reforço Personalizado

*Dica: Também pode usar EliteScript para invocar reforços, mais sobre isso [aqui]($language$/elitemobs/elitescript_actions.md&section=summon_reinforcement).*

<div align="center">

### summonType

Este é um campo obrigatório. Define quando o reforço deve surgir.

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

| Chave | Descrição                                                                                      |
|-----|--------------------------------------------------------------------------------------------------|
| `ONCE` | Invoca o reforço uma vez, a primeira vez que o chefe é atingido. (pode depender de uma % de chance de acontecer) |
| `ON_HIT` | Invoca o reforço sempre que o chefe é atingido (pode depender de uma % de chance de acontecer)           |
| `ON_COMBAT_ENTER` | Invoca o reforço quando o chefe entra em combate (1)                                                                |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL`    | Especial: isto é especificamente para colocar cristais do end para lutas de dragão quando o chefe entra em combate (1)                                                              |
| `GLOBAL` | Invoca reforços para cada jogador no mesmo mundo que o chefe. Os reforços surgirão perto dos jogadores, não importa quão longe estejam do chefe. Isto requer que o campo `customSpawn` esteja definido para funcionar! |

_(1) Os chefes entram em combate quando são atingidos por jogadores ou quando detetam um jogador dentro do alcance._

***

### filename

Este é um campo obrigatório, pois define qual reforço deve surgir. A única exceção para tornar este campo obrigatório é quando usa a configuração `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`, pois os cristais do end não são elites.

| Chave    |        Valores         | Padrão |
|--------|:---------------------:|:-------:|
| `filename` | [Nome de Ficheiro](#filename) |  nenhum   |

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

`summonType: SUMMON_TYPE` e `filename: filename.yml` são suficientes por si só para criar um Reforço Personalizado. O seguinte exemplo demonstra isto.

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

Este é um campo de configuração opcional feito para complementar as opções `summonType` `ONCE` e `ON_HIT`. Representa a chance do Reforço Personalizado surgir quando um chefe é atingido.

| Chave    |        Valores         | Padrão |
|--------|:---------------------:|:-------:|
| `chance` | [Decimal](#double) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
chance: 0.5
```
*Representa uma chance de 50% de surgir um Reforço Personalizado.*

</div>

</details>

***

### location

`location: x,y,z` é um campo de configuração opcional que permite aos administradores deslocar a localização do reforço por um número de blocos. Aqui estão os conceitos-chave que precisa de saber sobre esta opção:

**A localização de deslocamento é relativa.** Isto significa que `location: 0,10,0` irá gerar um chefe exatamente 10 blocos acima do chefe, e não nas coordenadas do mundo 0,10,0.


**A localização relativa é diferente para chefes regionais.** Os chefes regionais usarão sempre o seu ponto de surgimento como origem para a localização relativa, o que significa que se souber onde está o ponto de surgimento do chefe e contar os blocos, pode fazer com que os chefes de reforço surjam em locais específicos. O covil do Binder of Worlds depende disto para gerar os chefes da torre de desafio em posições de blocos extremamente específicas, independentemente de onde o chefe dragão esteja.


**Os chefes surgirão dentro de blocos se errar a medição das distâncias.**

| Chave    |      Valores       | Padrão |
|--------|:-----------------:|:-------:|
| `location` | [String](#string) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
location: 0,10,0
```
*Para um Chefe Personalizado não regional, o reforço surgirá exatamente 10 blocos acima do chefe, independentemente de onde ele possa estar.*

*Para um Chefe Personalizado regional, o reforço surgirá exatamente 10 blocos acima do ponto de surgimento do chefe regional, independentemente de onde o chefe esteja.*

</div>

</details>

_**Nota importante: Este é um campo obrigatório para `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL` especificamente!**_

***

### lightningRod

É uma configuração especial útil apenas para `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`. Isto dá aos cristais do end a capacidade de atingir o chão à sua volta com um raio com um atraso.

Não pode ser usado com os outros Reforços Personalizados, pois estes devem depender de poderes para este tipo de habilidades.

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

É um campo de configuração opcional que faz com que os Reforços Personalizados herdem os níveis de ameaça do chefe.

Isto é especialmente útil quando quer que os reforços que surgem visem a pessoa que está a causar a maior quantidade de dano.

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

É um campo de configuração opcional que define a quantidade de Reforços que surgem.

| Chave    |       Valores        | Padrão |
|--------|:-------------------:|:-------:|
| `amount` | [Número Inteiro](#integer) |   `1`   |

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

É um campo de configuração opcional que define se o Reforço Personalizado deve surgir nas proximidades em vez de em cima do chefe ou numa localização relativa específica.

Este método deve ter em consideração corretamente a variação do terreno e não gerar chefes dentro de paredes, embora em algumas configurações possa resultar no seu surgimento atrás de paredes se a área de combate for demasiado pequena. Tem um raio de cerca de 30 blocos.

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

É um campo de configuração opcional que define se o Reforço Personalizado deve herdar o nível do Chefe Personalizado que está a reforçar.

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

É um campo de configuração que só é usado para reforços globais. Usa as configurações de surgimento personalizadas para definir onde os reforços poderão surgir.

Isto pode ser usado para fazer com que os reforços possam surgir na superfície, em locais com luz, em biomas específicos e assim por diante. Consulte a página da wiki sobre [Surgimentos Personalizados]($language$/elitemobs/creating_spawns.md) para mais detalhes

| Chave    |        Valores         | Padrão |
|--------|:---------------------:|:-------:|
| `customSpawn` | [Nome de Ficheiro](#filename) |  nenhum   |

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
- O Reforço Personalizado surgirá quando o Chefe Personalizado entrar em combate (`summonType: ON_COMBAT_ENTER`)
- O Reforço Personalizado invocado será o de `test_boss.yml` (`filename: test_boss.yml`)
- O Reforço Personalizado surgirá a 30 blocos da localização atual do Chefe Personalizado (`spawnNearby: true`)
- O Reforço Personalizado herdará a aggro do Chefe Personalizado que está a reforçar, o que significa que atacará o jogador que causou mais dano (`inheritAggro: true`)
- Independentemente da configuração em `test_boss.yml`, o Reforço Personalizado terá o mesmo nível do Chefe Personalizado que está a reforçar (`inheritLevel: true`)

```yaml
- summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL
  location: -80,10,0
  lightningRod: true
```

Isto faz o seguinte:

- Cria um Reforço Personalizado
- O Reforço Personalizado será um Cristal do End que é colocado quando o combate começa (`summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`)
- O Cristal do End irá atingir o chão com um raio à sua volta com um atraso (`lightningRod: true`)

Agora para aplicar isto ao Chefe Personalizado:

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

E já está! Aqui ficam mais algumas dicas:

- Os campos podem ser definidos em qualquer ordem, embora seja recomendado ter sempre `summonable` em primeiro lugar!
- Esta é uma grande melhoria no antigo sistema de reforços, que já não está listado. Não é recomendado depender dele neste momento, pois pode deixar de funcionar no futuro.
