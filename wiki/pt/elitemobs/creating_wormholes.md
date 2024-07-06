[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# O que são Buracos de Minhoca?

Buracos de Minhoca são um tipo de sistema de teletransporte de portal a portal altamente eficiente. Os portais são marcados com efeitos visuais.

# Mecânicas do Buraco de Minhoca

Os Buracos de Minhoca podem fazer o seguinte:

*   Passar por um portal para alcançar o portal de destino e voltar do portal de destino para o primeiro.
*   Reproduzir um som quando os jogadores passam por eles.
*   Cegar temporariamente os jogadores enquanto eles passam por eles para suavizar a transição.
*   Empurrar os jogadores para fora para evitar que fiquem presos em um loop de teletransporte.
*   Bloquear os jogadores do teletransporte por 5 segundos para evitar que fiquem presos em um loop de teletransporte.
*   Reproduzir efeitos visuais elaborados.
*   Exigir permissões para usar o buraco de minhoca.
*   Exigir o uso de moeda para usar o buraco de minhoca.
*   Notificar os jogadores e administradores quando o portal de destino não estiver disponível.

# Criando um Buraco de Minhoca

Os Buracos de Minhoca são adicionados como arquivos de configuração à pasta de buracos de minhoca. É possível criar subpastas, e é recomendável fazê-lo se você estiver adicionando buracos de minhoca para masmorras específicas, no formato `~/plugins/EliteMobs/wormholes/dungeonName/dungeonName_identifier.yml`.

### Ejeção

Yaw e Pitch (os dois últimos dígitos nas coordenadas) em `location1` e `location2` definirão de onde os jogadores serão ejetados do buraco de minhoca quando viajarem por ele. Vejamos este exemplo:

`location1: my_world,20,10,20,180,20`

Com Yaw definido como `180`, o jogador seria ejetado voltado para o Norte, e com Pitch definido como `20`, ele também seria ejetado ligeiramente para cima. Se você deseja que o jogador permaneça no mesmo bloco que o buraco de minhoca ao ser ejetado, então é uma boa ideia definir o Pitch como negativo para garantir que os jogadores não deslizem para fora do bloco.

## Configuração do Buraco de Minhoca
A seguir, um exemplo de uma configuração válida do Buraco de Minhoca:

```yaml
isEnabled: true
location1: em_primis,1288.5,19,452.5,135,-23
location2: em_primis,1288.5,-39,451.5,180,-1
```

***

<div align="center">

### isEnabled

Define se o buraco de minhoca está habilitado.

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
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

### location1

Especifica a primeira localização para o buraco de minhoca.

| Chave       |      Valores       | Padrão |
|-----------|:-----------------:|:-------:|
| `location1` | [String](#string) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
location1: world_one,50,100,50,0,0
```

</div>

</details>

***

### location2

Especifica a segunda localização para o buraco de minhoca.

| Chave         |      Valores       | Padrão |
|-------------|:-----------------:|:-------:|
| `location2` | [String](#string) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
location2: world_two,100,33,100,0,0
```

</div>

</details>

***

### location1Text

Define o texto de exibição da primeira localização.

| Chave         |      Valores       | Padrão |
|-------------|:-----------------:|:-------:|
| `location1Text` | [String](#string) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
location1Text: Awesome Wormhole In World One
```

<div align="center">

![create_wormhole_location1text.jpg](../../../img/wiki/create_wormhole_location1text.jpg)

</div>

</div>

</details>

***

### location2Text

Define o texto de exibição da segunda localização.

| Chave         |      Valores       | Padrão |
|-------------|:-----------------:|:-------:|
| `location2Text` | [String](#string) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
location2Text: Awesome Wormhole In World Two
```

<div align="center">

![create_wormhole_location2text.jpg](../../../img/wiki/create_wormhole_location2text.jpg)

</div>

</div>

</details>

***

### permission

Define a permissão necessária para usar o buraco de minhoca.

| Chave         |      Valores       | Padrão |
|-------------|:-----------------:|:-------:|
| `permission` | [String](#string) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
permission: elitemobs.mypermission
```

</div>

</details>

***

### coinCost

Define o custo, em moedas elite, de usar o buraco de minhoca.

| Chave         |      Valores       | Padrão |
|-------------|:-----------------:|:-------:|
| `coinCost` | [Double](#double) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
coinCost: 2.5
```

</div>

</details>

***

### style

Define a forma visual do buraco de minhoca.

*As partículas que compõem essas formas podem causar lag em certos clientes. Para desabilitar as partículas, vá para **Wormholes.yml** e defina `noParticlesMode` como `true`.*

| Chave         |      Valores       | Padrão |
|-------------|:-----------------:|:-------:|
| `style` | `NONE` / `CRYSTAL` / `ISOCAHEDRON` / `CUBE` |  `CUBE`   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
style: CRYSTAL
```

<div align="center">

![create_wormhole_style.jpg](../../../img/wiki/create_wormhole_style.jpg)

</div>

</div>

</details>

***

### particleColor

Define a cor das partículas usadas na configuração `style`.

| Chave         |      Valores       | Padrão |
|-------------|:-----------------:|:-------:|
| `particleColor` | [`0x` seguido por um hexcode](https://www.w3schools.com/colors/colors_hexadecimal.asp) |  `0x800080`   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
particleColor: 0x9f5cdd
```

<div align="center">

![create_wormhole_particlecolor.jpg](../../../img/wiki/create_wormhole_particlecolor.jpg)

</div>

</div>

</details>

***

### blindPlayer

Define se o portal cega o jogador para um teletransporte mais suave.

| Chave         |      Valores       | Padrão |
|-------------|:-----------------:|:-------:|
| `blindPlayer` | [Booleano](#boolean) | `false` |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
blindPlayer: true
```

<div align="center">

![create_wormhole_blind.jpg](../../../img/wiki/create_wormhole_blind.jpg)

</div>

</div>

</details>

***

### sizeMultiplier

Multiplica o tamanho do portal e a forma definida por `style`.

| Chave         |      Valores       | Padrão |
|-------------|:-----------------:|:-------:|
| `sizeMultiplier` | [Multiplier](#multiplier) |   `1`   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
sizeMultiplier: 3
```

*Lembre-se de que você terá que ajustar as coordenadas Y do buraco de minhoca após aplicar o multiplicador de tamanho.*

<div align="center">

![create_wormhole_size.jpg](../../../img/wiki/create_wormhole_size.jpg)

</div>

</div>

</details>

</div>

***

<details>

<summary align="center"><b>Exemplo de Configuração do Buraco de Minhoca</b></summary>

<div align="left">

Neste exemplo, faremos um buraco de minhoca simples que nos leva de um mundo para outro. Não se esqueça de que os buracos de minhoca também podem simplesmente teletransportar os jogadores para uma localização diferente no mesmo mundo.

```yml
isEnabled: true #Habilitamos o buraco de minhoca definindo este valor como true
location1: my_world,1.5,11.0,1.5,108.0,5.0 #este é o local onde o buraco de minhoca aparecerá em my_world
location2: my_other_world,766.5,29.0,517.5,-136.0,5.0 #este é o local onde o buraco de minhoca aparecerá em my_other_world
location1Text: "&aGo to My World" #cria um texto de exibição legal acima da localização 1 do buraco de minhoca
location2Text: "&aGo to My Other World" #cria um texto de exibição legal acima da localização 2 do buraco de minhoca
permission: eliteperm.coolplayers #apenas os jogadores com essa permissão poderão usar o buraco de minhoca, tanto para localização 1 quanto para localização 2
coinCost: 2 #os jogadores precisarão pagar 12 moedas elite para poderem usar o buraco de minhoca
style: CRYSTAL #este buraco de minhoca será na forma de um cristal
particleColor: 0x00ff00 #isso definirá as partículas do buraco de minhoca como verdes
blindPlayer: true #o teletransporte do buraco de minhoca cegará o jogador por um curto período para tornar a transição menos desagradável
sizeMultiplier: 1.0 #define o tamanho da forma do buraco de minhoca
```

</div>

</details>

#### Problemas de Desempenho

As partículas do buraco de minhoca podem causar problemas de desempenho do cliente para jogadores que estão executando bedrock. Se você deseja desabilitar as partículas do buraco de minhoca, pode ir para `~plugins\EliteMobs\Wormholes.yml` e alterar a configuração `noParticlesMode` para `true`.

