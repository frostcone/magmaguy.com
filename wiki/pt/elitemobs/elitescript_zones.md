# Zonas de Script de Elite

Zonas são locais definidos por uma forma que podem ser usados como alvos por criadores de scripts para executar qualquer tipo de ação.

Apenas uma zona pode ser definida por script.

Para atingir zonas, o tipo de alvo `ZONE_FULL` ou `ZONE_BORDER` pode ser usado.

As próprias zonas também usam [Alvos de Script]($language$/elitemobs/elitescript_targets.md) para definir onde a zona irá aparecer.

## forma

Define a forma da zona. Formas válidas:

| Tipo de Forma                                                               | Detalhes | Animável | Borda |
|--------------------------------------------------------------------------| :-: | :-: | :-: |
| [`CILINDRO`]($language$/elitemobs/elitescript_zones.md&section=cylinder)         | Forma cilíndrica | ❌ | ✅ |
| [`ESFERA`]($language$/elitemobs/elitescript_zones.md&section=sphere)             | Forma esférica | ❌ | ✅ |
| [`CÚPULA`]($language$/elitemobs/elitescript_zones.md&section=dome)                 | Forma de cúpula (meia esfera) | ❌ | ✅ |
| [`CUBOIDE`]($language$/elitemobs/elitescript_zones.md&section=cuboid)             | Forma cuboide (semelhante a um cubo) | ❌ | ✅ |
| [`RAIO_ESTÁTICO`]($language$/elitemobs/elitescript_zones.md&section=static_ray)     | Uma linha fixa entre dois pontos | ❌ | ❌ |
| [`RAIO_ROTATIVO`]($language$/elitemobs/elitescript_zones.md&section=rotating_ray) | Uma linha rotativa entre dois pontos | ✅ | ❌ |
| [`RAIO_TRANSLADADOR`]($language$/elitemobs/elitescript_zones.md&section=translating_ray) | Uma linha que se move entre dois pontos iniciais para dois pontos finais | ✅ | ❌ |

---

#### Animável

Zonas com animações iniciam a animação da zona quando o script é chamado pela primeira vez.

Isto significa que se uma ação tiver um tempo de espera, quando a ação começar, a zona já estará a mover-se enquanto a ação estava à espera.

As zonas são sempre animadas em cada tick. Isto significa que se usar a ação `SPAWN_PARTICLES`, pode defini-la para ser executada em cada tick, pois a zona estará a mover-se em cada tick. Se executar a cada segundo, verá as partículas a saltar, pois a zona continuou a mover-se mesmo em ticks onde as partículas não foram geradas.

Se quiser criar uma ação de zona rotativa, mas quiser esperar por uma quantidade definida de ticks antes de iniciar a ação, faça disso um script diferente e chame esse script através de `RUN_SCRIPT`. Certifique-se de que o `RUN_SCRIPT` tem o tempo de espera que pretende.

As zonas permanecerão na localização final depois de terminarem a animação.

Todas as zonas animáveis estão definidas para não rastrear nos alvos de script, uma vez que o movimento extra tornaria as coisas muito difíceis de entender para os criadores de scripts e jogadores. Isto significa que estas zonas não seguirão bosses ou jogadores e mover-se-ão sempre em relação aos seus pontos de spawn iniciais.

---

#### Borda

Certas zonas podem ter bordas. Bordas significam que `ZONE_BORDER` pode ser usado como o alvo da zona. As bordas são definidas através da criação de uma segunda forma mais pequena dentro da primeira forma maior. A área entre a zona mais pequena e a zona maior é a borda.

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
      - EliteMobDamagedByPlayerEvent
    Zone:
      shape: CYLINDER
      radius: 4
      borderRadius: 3
      height: 8
      Target:
        targetType: SELF
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: SMOKE_LARGE
        Target:
          targetType: ZONE_BORDER
        repeatEvery: 5
        times: 20
```

<div align="center">

![elitescript_zones_border.jpg](../../../img/wiki/elitescript_zones_border.jpg)

</div>

Este script cria partículas de fumo que aparecem **apenas** na borda da zona durante 5 segundos (repetir a cada 5 x vezes 20 = 100 ticks).

Se não tivesse usado a opção `ZONE_BORDER`, mas a opção `ZONE_FULL`, toda a zona ficaria coberta de partículas de fumo como esta:

<div align="center">

![elitescript_zones_borderfull.jpg](../../../img/wiki/elitescript_zones_borderfull.jpg)

</div>

</div>

</details>

</div>

---

### ESFERA

| Chave                                                         | Detalhes | Obrigatório |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Define a forma da zona. Deve ser `SPHERE` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Define a localização para o centro da esfera | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Define quais os tipos de entidades que são alvo | ❌ |
| `radius`                                                    | Raio da esfera | ✅ |
| `borderRadius`                                              | Raio da esfera interior | ❌ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
      - EliteMobDamagedByPlayerEvent
    Zone:
      shape: SPHERE
      radius: 4
      borderRadius: 3
      Target:
        targetType: SELF
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 5
        times: 20
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

| Chave                                                         | Detalhes | Obrigatório |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Define a forma da zona. Deve ser `DOME` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Define a localização para o centro da cúpula | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Define quais os tipos de entidades que são alvo | ❌ |
| `radius`                                                    | Raio da cúpula | ✅ |
| `borderRadius`                                              | Raio da cúpula interior | ❌ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
      - EliteMobDamagedByPlayerEvent
    Zone:
      shape: DOME
      radius: 4
      borderRadius: 3
      Target:
        targetType: SELF
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 5
        times: 20
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

| Chave                                                         | Detalhes | Obrigatório |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Define a forma da zona. Deve ser `CYLINDER` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Define a localização para o centro do cilindro | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Define quais os tipos de entidades que são alvo | ❌ |
| `radius`                                                    | Raio do cilindro | ✅ |
| `borderRadius`                                              | Raio do cilindro interior | ❌ |
| `height`                                                    | Altura do cilindro | ❌ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
      - EliteMobDamagedByPlayerEvent
    Zone:
      shape: CYLINDER
      radius: 4
      borderRadius: 3
      height: 8
      Target:
        targetType: SELF
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 5
        times: 20
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

| Chave                                                         | Detalhes | Obrigatório |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Define a forma da zona. Deve ser `CUBOID` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Define a localização para o centro do cuboide | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Define quais os tipos de entidades que são alvo | ❌ |
| `x`                                                         | Define o comprimento do cuboide | ✅ |
| `y`                                                         | Define a altura do cuboide | ✅ |
| `z`                                                         | Define a largura do cuboide, o padrão é `x` | ❌ |
| `xBorder`                                                   | Define o comprimento do cuboide interior | ❌ |
| `yBorder`                                                   | Define a altura do cuboide interior | ❌ |
| `zBorder`                                                   | Define a largura do cuboide interior, o padrão é `x` | ❌ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
      - EliteMobDamagedByPlayerEvent
    Zone:
      shape: CUBOID
      x: 4
      y: 4
      z: 4
      xBorder: 3
      yBorder: 3
      zBorder: 3
      Target:
        targetType: SELF
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 5
        times: 20
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

| Chave                                                         | Detalhes | Obrigatório |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Define a forma da zona. Deve ser `STATIC_RAY` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Define a localização para o primeiro ponto da linha | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)    | Define a localização para o último ponto da linha | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Define quais os tipos de entidades que são alvo | ❌ |
| `ignoresSolidBlocks`                                        | Define se o raio passará por blocos sólidos | ❌ |
| `pointRadius`                                               | Define a espessura do raio. O padrão é 0,5 blocos. | ❌ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
      - EliteMobDamagedByPlayerEvent
    Zone:
      shape: STATIC_RAY
      Target2:
        targetType: DIRECT_TARGET
        offset: 0,1,0
      Target:
        targetType: SELF
        offset: 0,1,0
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 5
        times: 20
```

<div align="center">

![elitescript_zones_staticray.jpg](../../../img/wiki/elitescript_zones_staticray.jpg)

</div>

Este script demonstra a forma de um raio estático usando partículas de nuvem.

Ajustámos a altura da zona usando a opção `offset` em ambas as extremidades da zona para fazer o raio aparecer do meio do jogador e do boss, caso contrário, o raio apareceria aos seus pés.

</div>

</details>

</div>

---

### RAIO_ROTATIVO

| Chave                                                         | Detalhes | Obrigatório |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Define a forma da zona. Deve ser `ROTATING_RAY` | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Define quais os tipos de entidades que são alvo | ❌ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Define a localização para o primeiro ponto da linha | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)    | Define a localização para o último ponto da linha | ✅ |
| `animationDuration`                                         | Define, em ticks, a quantidade de tempo para a rotação | ✅ |
| `pitchPreRotation`                                          | Aplica uma rotação inicial ao pitch antes da animação | ❌ |
| `yawPreRotation`                                            | Aplica uma rotação inicial ao yaw antes da animação | ❌ |
| `pitchRotation`                                             | Define a rotação do pitch para a animação | ❌ |
| `yawRotation`                                               | Define a rotação do yaw para a animação | ❌ |
| `ignoresSolidBlocks`                                        | Define se o raio passará por blocos sólidos | ❌ |
| `pointRadius`                                               | Define a espessura do raio. O padrão é 0,5 blocos. | ❌ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
      - EliteMobDamagedByPlayerEvent
    Zone:
      shape: ROTATING_RAY
      animationDuration: 100
      pitchPrerotation: 0
      yawPrerotation: 0
      pitchRotation: 0
      yawRotation: 360
      ignoresSolidBlocks: true
      Target:
        targetType: SELF
        offset: 0,1,0
      Target2:
        targetType: DIRECT_TARGET
        offset: 0,1,0
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 1
        times: 100
```

<div align="center">

![elitescript_zones_rotatingray.gif](../../../img/wiki/elitescript_zones_rotatingray.gif)

</div>

Este script mostra como um raio rotativo se parece usando partículas de nuvem.

Primeiro, cria um raio do boss para o jogador que o prejudicou, usando partículas de nuvem. Em seguida, ajusta as posições ligeiramente para cima por um bloco usando `offset`.

Depois, roda o raio num círculo completo à volta do jogador que foi alvo. Esta rotação dura 5 segundos (100 ticks) para ser concluída, com o jogador visado como centro.

</div>

</details>

</div>

---

### RAIO_TRANSLADADOR

| Chave                                                          | Detalhes | Obrigatório |
|--------------------------------------------------------------| :-: | :-: |
| `shape`                                                      | Define a forma da zona. Deve ser `TRANSLATING_RAY` | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter)  | Define quais os tipos de entidades que são alvo | ❌ |
| `animationDuration`                                          | Define, em ticks, a quantidade de tempo para a translação | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)      | Define a localização para o primeiro ponto da linha | ✅ |
| [`finalTarget`]($language$/elitemobs/elitescript_targets.md) | Define a localização do destino para o primeiro ponto da linha | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)     | Define a localização para o segundo ponto da linha | ✅ |
| [`finalTarget2`]($language$/elitemobs/elitescript_targets.md) | Define a localização do destino para o segundo ponto da linha | ✅ |
| `ignoresSolidBlocks`                                         | Define se o raio passará por blocos sólidos | ❌ |
| `pointRadius`                                                | Define a espessura do raio. O padrão é 0,5 blocos. | ❌ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Events:
      - EliteMobDamagedByPlayerEvent
    Zone:
      shape: TRANSLATING_RAY
      Target:
        targetType: SELF
      FinalTarget:
        targetType: SELF
        offset: 0,10,0
      Target2:
        targetType: DIRECT_TARGET
      FinalTarget2:
        targetType: DIRECT_TARGET
        offset: 0,10,0
      animationDuration: 100
      ignoresSolidBlocks: true
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 1
        times: 100
```

<div align="center">

![elitescript_zones_translatingray.gif](../../../img/wiki/elitescript_zones_translatingray.gif)

</div>

Este script mostra como um raio transladador se parece usando partículas de nuvem.

Primeiro, cria um raio do boss para o jogador que o prejudicou, usando partículas de nuvem.

Depois, anima o raio para subir 10 blocos de ambos os alvos usando o `offset` no `FinalTarget1` e `FinalTarget2`.

A animação demora 5 segundos (100 ticks) para ser concluída.

Podemos facilmente fazer o raio mover-se lateralmente ajustando o `offset` Z para algo como `offset: 0,0,10`:

<div align="center">

![elitescript_zones_translatingray2.gif](../../../img/wiki/elitescript_zones_translatingray2.gif)

</div>

Este comportamento pode mudar dependendo de onde estiver a olhar no jogo.
<br>Se modificarmos o `offset` X no script mostrado na imagem GIF, o raio parecerá afastar-se de nós numa linha reta da nossa perspetiva.

</div>

</details>

---

## filtro

A propriedade de filtro pode ser usada para atingir apenas entidades específicas dentro da zona. Estas entidades podem ser:

| Valor | Detalhes |
| --- | :-: |
| `PLAYER` | Atinge apenas jogadores na zona (padrão) |
| `ELITE` | Atinge apenas elites na zona |
| `LIVING` | Atinge todas as entidades vivas na zona |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  FilterExample:
    Events:
    - PlayerDamagedByEliteMobEvent
    Zone:
      shape: SPHERE
      radius: 12
      borderRadius: 11
      filter: ELITE
      Target:
        targetType: SELF
        track: false
```

Este script de exemplo mostra como usar o filtro para fazer com que a zona tenha como alvo apenas elites.

</div>
