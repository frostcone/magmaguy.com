[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Criando Reforços Personalizados

Se você está interessado em invocar elites durante o combate para reforçar um chefe, este guia aborda isso em detalhes.

## Passos para criar um chefe personalizado:

1. Crie seu chefe personalizado principal que invocará seu chefe personalizado
2. Crie um chefe personalizado para reforços. Lembre-se de que os chefes personalizados podem ser mais fortes do que os mobs do vanilla, mas também podem ser mais fracos.
3. Adicione a linha de reforço correta ao arquivo de configuração

## Criando a linha de reforço

Vamos supor que você tenha um chefe personalizado com este formato:

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eBinder of Worlds
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
```

E você quer adicionar reforços a ele. Aqui está como um desses reforços poderia ser:

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

O reforço agora é adicionado à entidade do chefe. No entanto, como você pode ver, existem várias opções aqui que você pode personalizar. Vamos cobri-las.

## Todas as opções de reforço personalizadas

*Dica: Você também pode usar o EliteScript para invocar reforços, mais sobre isso [aqui]($language$/elitemobs/elitescript_actions.md&section=summon_reinforcement).*

<div align="center">

### summonType

Este é um campo obrigatório. Ele define quando o reforço deve ser gerado.

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
|  `ONCE`   | Gera o reforço uma vez, na primeira vez que o chefe é atingido. (pode depender de uma porcentagem de chance de acontecer) |
| `ON_HIT`  | Gere o reforço sempre que o chefe for atingido (pode depender de uma porcentagem de chance de acontecer)             |
| `ON_COMBAT_ENTER`    | Gere o reforço quando o chefe entrar em combate (1)                                                                                                  |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL`    |  Especial: isto é especificamente para colocar cristais finais para lutas de dragão quando o chefe entrar em combate(1)                                                                                                 |
| `GLOBAL`    |  Gera reforços para cada jogador no mesmo mundo que o chefe. Os reforços serão gerados perto dos jogadores, não importa quão longe eles estejam do chefe. Isso requer que o campo `customSpawn` seja definido para funcionar!                                                                                                 |

_(1) Os chefes entram em combate quando são atingidos por jogadores ou quando detectam um jogador dentro do alcance._

***

### filename

Este é um campo obrigatório, pois define qual reforço deve ser gerado. A única exceção para tornar este campo obrigatório é ao usar a configuração `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`, pois os cristais finais não são elites.

| Chave    |        Valores         | Padrão |
|--------|:---------------------:|:-------:|
| `filename` | [Nome do Arquivo](#filename) |  nenhum   |

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

`summonType: SUMMON_TYPE` e `filename: filename.yml` são suficientes por si só para criar um Reforço Personalizado. O exemplo a seguir demonstra isso.

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

*No entanto, se você quiser ou precisar de algo mais complexo, continue lendo abaixo para ver o que mais você pode fazer com essas opções.*

</div>

</details>

</div>

<div align="center">

***

### chance

Este é um campo de configuração opcional feito para complementar as opções `summonType` `ONCE` e `ON_HIT`. Ele representa a chance de o Reforço Personalizado ser gerado quando um chefe é atingido.

| Chave    |        Valores         | Padrão |
|--------|:---------------------:|:-------:|
| `chance` | [Double](#double) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
chance: 0.5
```
*Representa uma chance de 50% de gerar um Reforço Personalizado.*

</div>

</details>

***

### location

`location: x,y,z` é um campo de configuração opcional que permite que os administradores desloquem a localização do reforço por um número de blocos. Aqui estão os conceitos-chave que você precisa saber sobre esta opção:

**A localização de deslocamento é relativa.** Isso significa que `location: 0,10,0` gerará um chefe exatamente 10 blocos acima do chefe e não nas coordenadas do mundo 0,10,0.


**A localização relativa é diferente para os chefes regionais.** Os chefes regionais sempre usarão seu ponto de geração como a origem para a localização relativa, o que significa que se você souber onde está o ponto de geração do chefe e contar os blocos, poderá fazer com que os chefes de reforço sejam gerados em localizações específicas. O covil do Binder of Worlds depende disso para gerar os chefes da torre de desafio em posições de bloco extremamente específicas, independentemente de onde o chefe dragão esteja.


**Os chefes serão gerados dentro de blocos se você errar ao medir distâncias.**

| Chave    |      Valores       | Padrão |
|--------|:-----------------:|:-------:|
| `location` | [String](#string) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
location: 0,10,0
```
*Para um Chefe Personalizado não regional, gerará o reforço exatamente 10 blocos acima do chefe, independentemente de onde ele possa estar.*

*Para um Chefe Personalizado regional, gerará o reforço exatamente 10 blocos acima do ponto de geração do chefe regional, independentemente de onde o chefe esteja.*

</div>

</details>

_**Observação importante: Este é um campo obrigatório para `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL` especificamente!**_

***

### lightningRod

É uma configuração especial útil apenas para `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`. Isso dá aos cristais finais a capacidade de golpear o chão ao redor deles com um atraso. 

Não pode ser usado com os outros Reforços Personalizados, pois esses devem depender de poderes para esses tipos de habilidades.

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

É um campo de configuração opcional que faz com que os Reforços Personalizados herdem os níveis de ameaça do chefe. 

Isso é especialmente útil quando você deseja ter os reforços que geram como alvo a pessoa que está causando a maior quantidade de dano.

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

É um campo de configuração opcional que define a quantidade de Reforços que são gerados.

| Chave    |       Valores        | Padrão |
|--------|:-------------------:|:-------:|
| `amount` | [Integer](#integer) |   `1`   |

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

É um campo de configuração opcional que define se o Reforço Personalizado deve ser gerado nas proximidades em vez de em cima do chefe ou em uma localização relativa específica. 

Este método deve levar em consideração a variação do terreno corretamente e não gerar chefes dentro de paredes, embora em algumas configurações possa resultar em que eles sejam gerados atrás de paredes se a área de combate for muito pequena. Tem um raio de ~30 blocos.

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

É um campo de configuração opcional que define se o Reforço Personalizado deve herdar o nível do Chefe Personalizado que está reforçando.

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

É um campo de configuração que é usado apenas para reforços globais. Ele usa as configurações de geração personalizadas para definir onde os reforços serão capazes de gerar. 

Isso pode ser usado para fazer com que os reforços sejam capazes de gerar na superfície, em lugares com luz, em biomas específicos e assim por diante. Verifique a página da wiki sobre [Geração Personalizada]($language$/elitemobs/creating_spawns.md) para mais detalhes

| Chave    |        Valores         | Padrão |
|--------|:---------------------:|:-------:|
| `customSpawn` | [Nome do Arquivo](#filename) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
customSpawn: normal_surface_spawn.yml
```

</div>

</details>

</div>

## Montando um grande reforço

Vamos criar um exemplo de reforço usando a maioria dos campos anteriores:

```yaml
- summonType: ON_COMBAT_ENTER
  filename: test_boss.yml
  spawnNearby: true
  inheritAggro: true
  inheritLevel: true
```

Isso faz o seguinte:

- Cria um Reforço Personalizado
- O Reforço Personalizado será gerado quando o Chefe Personalizado entrar em combate (`summonType: ON_COMBAT_ENTER`)
- O Reforço Personalizado invocado será o de `test_boss.yml` (`filename: test_boss.yml`)
- O Reforço Personalizado será gerado dentro de 30 blocos da localização atual do Chefe Personalizado (`spawnNearby: true`)
- O Reforço Personalizado herdará o aggro do Chefe Personalizado que está reforçando, o que significa que ele atacará o jogador que causou mais dano (`inheritAggro: true`)
- Independentemente da configuração em `test_boss.yml`, o Reforço Personalizado terá o mesmo nível que o Chefe Personalizado que está reforçando (`inheritLevel: true`)

```yaml
- summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL
  location: -80,10,0
  lightningRod: true
```

Isso faz o seguinte:

- Cria um Reforço Personalizado
- O Reforço Personalizado será um Cristal Final que será colocado quando o combate começar (`summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`)
- O Cristal Final golpeará o chão ao redor com um atraso (`lightningRod: true`)

Agora, para aplicar isso ao Chefe Personalizado:

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

E pronto! Aqui estão mais algumas dicas:

- Os campos podem ser definidos em qualquer ordem, embora seja recomendado que `summonable` esteja sempre em primeiro lugar!
- Esta é uma grande melhoria em relação ao antigo sistema de reforços, que não está mais listado. Não é recomendado depender dele neste momento, pois ele pode parar de funcionar no futuro.

