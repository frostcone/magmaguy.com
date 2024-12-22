# Zonas de Script de Elite

Zonas são locais definidos por uma forma que podem ser usados como alvos por scripters para executar qualquer tipo de
ação.

Apenas uma zona pode ser definida por script.

Para ter como alvo zonas, o tipo de alvo `ZONE_FULL` ou `ZONE_BORDER` pode ser usado.

As próprias zonas também usam [Alvos de Script]($language$/elitemobs/elitescript_targets.md) para definir onde a zona irá aparecer.

## forma

Define a forma da zona. Formas válidas:

| Tipo de Forma                                                                          |                                 Detalhes                                 | Animável | Borda |
|----------------------------------------------------------------------------------------|:------------------------------------------------------------------------:|:--------:|:-----:|
| [`CILINDRO`]($language$/elitemobs/elitescript_zones.md&section=cilindro)               |                             Forma cilíndrica                             |    ❌     |   ✅   |
| [`ESFERA`]($language$/elitemobs/elitescript_zones.md&section=esfera)                   |                              Forma esférica                              |    ❌     |   ✅   |
| [`CÚPULA`]($language$/elitemobs/elitescript_zones.md&section=cúpula)                   |                      Forma de cúpula (meia esfera)                       |    ❌     |   ✅   |
| [`CUBOIDE`]($language$/elitemobs/elitescript_zones.md&section=cuboide)                 |                        Forma cuboide (tipo cubo)                         |    ❌     |   ✅   |
| [`RAIO_ESTÁTICO`]($language$/elitemobs/elitescript_zones.md&section=raio_estático)     |                     Uma linha fixa entre dois pontos                     |    ❌     |   ❌   |
| [`RAIO_ROTATIVO`]($language$/elitemobs/elitescript_zones.md&section=raio_rotativo)     |                   Uma linha rotativa entre dois pontos                   |    ✅     |   ❌   |
| [`RAIO_TRANSLAÇÃO`]($language$/elitemobs/elitescript_zones.md&section=raio_translação) | Uma linha que se move entre dois pontos iniciais para dois pontos finais |    ✅     |   ❌   |

---

#### Animável

Zonas com animações iniciam a animação da zona quando o script é chamado pela primeira vez.

Isto significa que, se uma ação tiver um tempo de espera, quando a ação começar, a zona já estará a mover-se enquanto a
ação estava à espera.

As zonas são sempre animadas em cada tick. Isto significa que, se usar a ação `SPAWN_PARTICLES`, pode defini-la para ser
executada em cada tick, pois a zona estará a mover-se em cada tick. Se executar a cada segundo, verá as partículas a
saltar, pois a zona continuou a mover-se mesmo em ticks em que as partículas não foram geradas.

Se quiser fazer uma ação de zona rotativa, mas quiser esperar uma certa quantidade de ticks antes de iniciar a ação,
faça disso um script diferente e chame esse script através de `RUN_SCRIPT`. Certifique-se de que o `RUN_SCRIPT` tem o
tempo de espera que pretende.

As zonas permanecerão na localização final assim que terminarem de animar.

Todas as zonas animáveis são definidas para não rastrear nos alvos de script, pois o movimento extra tornaria as coisas
muito difíceis de entender para scripters e jogadores. Isto significa que estas zonas não seguirão bosses ou jogadores e
mover-se-ão sempre relativamente aos seus pontos de spawn iniciais.

---

#### Borda

Certos tipos de zonas podem ter bordas. Bordas significam que `ZONE_BORDER` pode ser usado como alvo da zona. As bordas
são definidas através da criação de uma segunda forma, mais pequena, dentro da primeira forma, maior. A área entre a
zona menor e a zona maior é a borda.

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
      - EliteMobDamagedByPlayerEvent
    Zona:
      forma: CILINDRO
      raio: 4
      raioDaBorda: 3
      altura: 8
      Alvo:
        tipoDeAlvo: SELF
    Ações:
      - ação: SPAWN_PARTICLE
        partículas:
          - partícula: SMOKE_LARGE
        Alvo:
          tipoDeAlvo: ZONE_BORDER
        repeatEvery: 5
        vezes: 20
```

<div align="center">

![elitescript_zones_border.jpg](../../../img/wiki/elitescript_zones_border.jpg)

</div>

Este script cria partículas de fumo que **apenas** aparecem na borda da zona durante 5 segundos (repetir a cada 5 x
vezes 20 = 100 ticks).

Se não tivesse usado a opção `ZONE_BORDER`, mas sim a opção `ZONE_FULL`, então toda a zona estaria coberta de partículas
de fumo, como esta:

<div align="center">

![elitescript_zones_borderfull.jpg](../../../img/wiki/elitescript_zones_borderfull.jpg)

</div>

</div>

</details>

</div>

---

### ESFERA

| Chave                                                                |                   Detalhes                   | Obrigatório |
|----------------------------------------------------------------------|:--------------------------------------------:|:-----------:|
| `forma`                                                              |  Define a forma da zona. Deve ser `ESFERA`   |      ✅      |
| [`alvo`]($language$/elitemobs/elitescript_targets.md)                | Define a localização para o centro da esfera |      ✅      |
| [`filtro`]($language$/elitemobs/elitescript_zones.md&section=filtro) |    Define que tipos de entidades são alvo    |      ❌      |
| `raio`                                                               |                Raio da esfera                |      ✅      |
| `raioDaBorda`                                                        |           Raio da esfera interior            |      ❌      |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
      - EliteMobDamagedByPlayerEvent
    Zona:
      forma: ESFERA
      raio: 4
      raioDaBorda: 3
      Alvo:
        tipoDeAlvo: SELF
    Ações:
      - ação: SPAWN_PARTICLE
        partículas:
          - partícula: CLOUD
        Alvo:
          tipoDeAlvo: ZONE_FULL
        repeatEvery: 5
        vezes: 20
```

<div align="center">

![elitescript_zones_sphere.jpg](../../../img/wiki/elitescript_zones_sphere.jpg)

</div>

Este script demonstra a forma de uma esfera usando partículas de nuvem.

</div>

</details>

</div>

---

### CÚPULA

| Chave                                                                |                   Detalhes                   | Obrigatório |
|----------------------------------------------------------------------|:--------------------------------------------:|:-----------:|
| `forma`                                                              |  Define a forma da zona. Deve ser `CÚPULA`   |      ✅      |
| [`alvo`]($language$/elitemobs/elitescript_targets.md)                | Define a localização para o centro da cúpula |      ✅      |
| [`filtro`]($language$/elitemobs/elitescript_zones.md&section=filtro) |    Define que tipos de entidades são alvo    |      ❌      |
| `raio`                                                               |                Raio da cúpula                |      ✅      |
| `raioDaBorda`                                                        |           Raio da cúpula interior            |      ❌      |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
      - EliteMobDamagedByPlayerEvent
    Zona:
      forma: CÚPULA
      raio: 4
      raioDaBorda: 3
      Alvo:
        tipoDeAlvo: SELF
    Ações:
      - ação: SPAWN_PARTICLE
        partículas:
          - partícula: CLOUD
        Alvo:
          tipoDeAlvo: ZONE_FULL
        repeatEvery: 5
        vezes: 20
```

<div align="center">

![elitescript_zones_dome.jpg](../../../img/wiki/elitescript_zones_dome.jpg)

</div>

Este script demonstra a forma de uma cúpula usando partículas de nuvem.

</div>

</details>

</div>

---

### CILINDRO

| Chave                                                                |                    Detalhes                    | Obrigatório |
|----------------------------------------------------------------------|:----------------------------------------------:|:-----------:|
| `forma`                                                              |  Define a forma da zona. Deve ser `CILINDRO`   |      ✅      |
| [`alvo`]($language$/elitemobs/elitescript_targets.md)                | Define a localização para o centro do cilindro |      ✅      |
| [`filtro`]($language$/elitemobs/elitescript_zones.md&section=filtro) |     Define que tipos de entidades são alvo     |      ❌      |
| `raio`                                                               |                Raio do cilindro                |      ✅      |
| `raioDaBorda`                                                        |           Raio do cilindro interior            |      ❌      |
| `altura`                                                             |               Altura do cilindro               |      ❌      |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
      - EliteMobDamagedByPlayerEvent
    Zona:
      forma: CILINDRO
      raio: 4
      raioDaBorda: 3
      altura: 8
      Alvo:
        tipoDeAlvo: SELF
    Ações:
      - ação: SPAWN_PARTICLE
        partículas:
          - partícula: CLOUD
        Alvo:
          tipoDeAlvo: ZONE_FULL
        repeatEvery: 5
        vezes: 20
```

<div align="center">

![elitescript_zones_cylinder.jpg](../../../img/wiki/elitescript_zones_cylinder.jpg)

</div>

Este script demonstra a forma de um cilindro usando partículas de nuvem.

</div>

</details>

</div>

---

### CUBOIDE

| Chave                                                                |                         Detalhes                         | Obrigatório |
|----------------------------------------------------------------------|:--------------------------------------------------------:|:-----------:|
| `forma`                                                              |        Define a forma da zona. Deve ser `CUBOIDE`        |      ✅      |
| [`alvo`]($language$/elitemobs/elitescript_targets.md)                |      Define a localização para o centro do cuboide       |      ✅      |
| [`filtro`]($language$/elitemobs/elitescript_zones.md&section=filtro) |          Define que tipos de entidades são alvo          |      ❌      |
| `x`                                                                  |             Define o comprimento do cuboide              |      ✅      |
| `y`                                                                  |                Define a altura do cuboide                |      ✅      |
| `z`                                                                  |     Define a largura do cuboide, por omissão, é `x`      |      ❌      |
| `xBorda`                                                             |         Define o comprimento do cuboide interior         |      ❌      |
| `yBorda`                                                             |           Define a altura do cuboide interior            |      ❌      |
| `zBorda`                                                             | Define a largura do cuboide interior, por omissão, é `x` |      ❌      |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
      - EliteMobDamagedByPlayerEvent
    Zona:
      forma: CUBOIDE
      x: 4
      y: 4
      z: 4
      xBorda: 3
      yBorda: 3
      zBorda: 3
      Alvo:
        tipoDeAlvo: SELF
    Ações:
      - ação: SPAWN_PARTICLE
        partículas:
          - partícula: CLOUD
        Alvo:
          tipoDeAlvo: ZONE_FULL
        repeatEvery: 5
        vezes: 20
```

<div align="center">

![elitescript_zones_cuboid.jpg](../../../img/wiki/elitescript_zones_cuboid.jpg)

</div>

Este script demonstra a forma de um cuboide usando partículas de nuvem.

</div>

</details>

</div>

---

### RAIO_ESTÁTICO

| Chave                                                                |                       Detalhes                        | Obrigatório |
|----------------------------------------------------------------------|:-----------------------------------------------------:|:-----------:|
| `forma`                                                              |   Define a forma da zona. Deve ser `RAIO_ESTÁTICO`    |      ✅      |
| [`alvo`]($language$/elitemobs/elitescript_targets.md)                |  Define a localização para o primeiro ponto da linha  |      ✅      |
| [`alvo2`]($language$/elitemobs/elitescript_targets.md)               |   Define a localização para o último ponto da linha   |      ✅      |
| [`filtro`]($language$/elitemobs/elitescript_zones.md&section=filtro) |        Define que tipos de entidades são alvo         |      ❌      |
| `ignoraBlocosSólidos`                                                |      Define se o raio atravessará blocos sólidos      |      ❌      |
| `raioDoPonto`                                                        | Define a espessura do raio. Por omissão é 0.5 blocos. |      ❌      |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
      - EliteMobDamagedByPlayerEvent
    Zona:
      forma: RAIO_ESTÁTICO
      Alvo2:
        tipoDeAlvo: DIRECT_TARGET
        desvio: 0,1,0
      Alvo:
        tipoDeAlvo: SELF
        desvio: 0,1,0
    Ações:
      - ação: SPAWN_PARTICLE
        partículas:
          - partícula: CLOUD
        Alvo:
          tipoDeAlvo: ZONE_FULL
        repeatEvery: 5
        vezes: 20
```

<div align="center">

![elitescript_zones_staticray.jpg](../../../img/wiki/elitescript_zones_staticray.jpg)

</div>

Este script demonstra a forma de um raio estático usando partículas de nuvem.

Ajustamos a altura da zona usando a opção `desvio` em ambas as extremidades da zona para fazer com que o raio apareça a
partir do meio do jogador e do boss, caso contrário, o raio apareceria aos seus pés.

</div>

</details>

</div>

---

### RAIO_ROTATIVO

| Chave                                                                |                         Detalhes                          | Obrigatório |
|----------------------------------------------------------------------|:---------------------------------------------------------:|:-----------:|
| `forma`                                                              |     Define a forma da zona. Deve ser `RAIO_ROTATIVO`      |      ✅      |
| [`filtro`]($language$/elitemobs/elitescript_zones.md&section=filtro) |          Define que tipos de entidades são alvo           |      ❌      |
| [`alvo`]($language$/elitemobs/elitescript_targets.md)                |    Define a localização para o primeiro ponto da linha    |      ✅      |
| [`alvo2`]($language$/elitemobs/elitescript_targets.md)               |     Define a localização para o último ponto da linha     |      ✅      |
| `duraçãoDaAnimação`                                                  |  Define, em ticks, a quantidade de tempo para a rotação   |      ✅      |
| `inclinaçãoPréRotação`                                               | Aplica uma rotação inicial à inclinação antes da animação |      ❌      |
| `guinadaPréRotação`                                                  |  Aplica uma rotação inicial à guinada antes da animação   |      ❌      |
| `inclinaçãoRotação`                                                  |      Define a rotação da inclinação para a animação       |      ❌      |
| `guinadaRotação`                                                     |        Define a rotação da guinada para a animação        |      ❌      |
| `ignoraBlocosSólidos`                                                |        Define se o raio atravessará blocos sólidos        |      ❌      |
| `raioDoPonto`                                                        |   Define a espessura do raio. Por omissão é 0.5 blocos.   |      ❌      |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
      - EliteMobDamagedByPlayerEvent
    Zona:
      forma: RAIO_ROTATIVO
      duraçãoDaAnimação: 100
      inclinaçãoPréRotação: 0
      guinadaPréRotação: 0
      inclinaçãoRotação: 0
      guinadaRotação: 360
      ignoraBlocosSólidos: true
      Alvo:
        tipoDeAlvo: SELF
        desvio: 0,1,0
      Alvo2:
        tipoDeAlvo: DIRECT_TARGET
        desvio: 0,1,0
    Ações:
      - ação: SPAWN_PARTICLE
        partículas:
          - partícula: CLOUD
        Alvo:
          tipoDeAlvo: ZONE_FULL
        repeatEvery: 1
        vezes: 100
```

<div align="center">

![elitescript_zones_rotatingray.gif](../../../img/wiki/elitescript_zones_rotatingray.gif)

</div>

Este script mostra como um raio rotativo se parece usando partículas de nuvem.

Primeiro, ele cria um raio do boss para o jogador que o magoou, usando partículas de nuvem. Em seguida, ajusta as
posições ligeiramente para cima por um bloco usando `desvio`.

Em seguida, ele gira o raio em um círculo completo em torno do jogador que foi alvo. Esta rotação dura 5 segundos (100
ticks) para ser concluída, com o jogador alvo como o centro.

</div>

</details>

</div>

---

### RAIO_TRANSLAÇÃO

| Chave                                                                |                            Detalhes                            | Obrigatório |
|----------------------------------------------------------------------|:--------------------------------------------------------------:|:-----------:|
| `forma`                                                              |       Define a forma da zona. Deve ser `RAIO_TRANSLAÇÃO`       |      ✅      |
| [`filtro`]($language$/elitemobs/elitescript_zones.md&section=filtro) |             Define que tipos de entidades são alvo             |      ❌      |
| `duraçãoDaAnimação`                                                  |   Define, em ticks, a quantidade de tempo para a translação    |      ✅      |
| [`alvo`]($language$/elitemobs/elitescript_targets.md)                |      Define a localização para o primeiro ponto da linha       |      ✅      |
| [`alvoFinal`]($language$/elitemobs/elitescript_targets.md)           | Define a localização do destino para o primeiro ponto da linha |      ✅      |
| [`alvo2`]($language$/elitemobs/elitescript_targets.md)               |       Define a localização para o segundo ponto da linha       |      ✅      |
| [`alvoFinal2`]($language$/elitemobs/elitescript_targets.md)          | Define a localização do destino para o segundo ponto da linha  |      ✅      |
| `ignoraBlocosSólidos`                                                |          Define se o raio atravessará blocos sólidos           |      ❌      |
| `raioDoPonto`                                                        |     Define a espessura do raio. Por omissão é 0.5 blocos.      |      ❌      |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
      - EliteMobDamagedByPlayerEvent
    Zona:
      forma: RAIO_TRANSLAÇÃO
      Alvo:
        tipoDeAlvo: SELF
      AlvoFinal:
        tipoDeAlvo: SELF
        desvio: 0,10,0
      Alvo2:
        tipoDeAlvo: DIRECT_TARGET
      AlvoFinal2:
        tipoDeAlvo: DIRECT_TARGET
        desvio: 0,10,0
      duraçãoDaAnimação: 100
      ignoraBlocosSólidos: true
    Ações:
      - ação: SPAWN_PARTICLE
        partículas:
          - partícula: CLOUD
        Alvo:
          tipoDeAlvo: ZONE_FULL
        repeatEvery: 1
        vezes: 100
```

<div align="center">

![elitescript_zones_translatingray.gif](../../../img/wiki/elitescript_zones_translatingray.gif)

</div>

Este script mostra como um raio de translação se parece usando partículas de nuvem.

Primeiro, ele cria um raio do boss para o jogador que o magoou, usando partículas de nuvem.

Em seguida, ele anima o raio para subir 10 blocos a partir de ambos os alvos usando o `desvio` em `AlvoFinal1`
e `AlvoFinal2`.

A animação demora 5 segundos (100 ticks) para ser concluída.

Podemos facilmente fazer o raio mover-se lateralmente ajustando o `desvio` Z para algo como `desvio: 0,0,10`:

<div align="center">

![elitescript_zones_translatingray2.gif](../../../img/wiki/elitescript_zones_translatingray2.gif)

</div>

Este comportamento pode mudar dependendo de onde está a olhar no jogo.
<br>Se modificarmos o `desvio` X no script mostrado na imagem GIF, o raio pareceria afastar-se de nós numa linha reta da
nossa perspetiva.

</div>

</details>

---

## filtro

A propriedade filtro pode ser usada para apenas ter como alvo entidades específicas dentro da zona. Estas entidades
podem ser:

| Valor      |                       Detalhes                       |
|------------|:----------------------------------------------------:|
| `JOGADOR`  | Apenas tem como alvo jogadores na zona (por omissão) |
| `ELITE`    |         Apenas tem como alvo elites na zona          |
| `SER_VIVO` |    Tem como alvo todas as entidades vivas na zona    |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  ExemploDeFiltro:
    Eventos:
    - PlayerDamagedByEliteMobEvent
    Zona:
      forma: ESFERA
      raio: 12
      raioDaBorda: 11
      filtro: ELITE
      Alvo:
        tipoDeAlvo: SELF
        rastrear: false
```

Este script de exemplo mostra como usar o filtro para fazer com que a zona tenha como alvo apenas elites.

</div>
