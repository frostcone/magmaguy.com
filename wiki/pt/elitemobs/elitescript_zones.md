Okay, here is the translation of the text to Portuguese (Portugal), retaining the markdown formatting.

# Zonas de Script Elite

Zonas são localizações definidas por uma forma que podem ser usadas como alvos por scripters para executar qualquer tipo de ação.

Apenas uma zona pode ser definida por script.

Para alvejar zonas, o tipo de alvo `ZONE_FULL` ou `ZONE_BORDER` pode ser usado.

As próprias zonas também usam [Alvos de Script]($language$/elitemobs/elitescript_targets.md) para definir onde a zona aparecerá.

## shape

Define a forma da zona. Formas válidas:

| Tipo de Forma                                                               | Detalhes | Animável | Contorno |
|--------------------------------------------------------------------------| :-: | :-: | :-: |
| [`CYLINDER`]($language$/elitemobs/elitescript_zones.md&section=cylinder)         | Forma cilíndrica | ❌ | ✅ |
| [`SPHERE`]($language$/elitemobs/elitescript_zones.md&section=sphere)             | Forma esférica | ❌ | ✅ |
| [`DOME`]($language$/elitemobs/elitescript_zones.md&section=dome)                 | Forma de cúpula (meia esfera) | ❌ | ✅ |
| [`CUBOID`]($language$/elitemobs/elitescript_zones.md&section=cuboid)             | Forma cuboide (tipo cubo) | ❌ | ✅ |
| [`STATIC_RAY`]($language$/elitemobs/elitescript_zones.md&section=static_ray)     | Uma linha fixa entre dois pontos | ❌ | ❌ |
| [`ROTATING_RAY`]($language$/elitemobs/elitescript_zones.md&section=rotating_ray) | Uma linha rotativa entre dois pontos | ✅ | ❌ |
| [`TRANSLATING_RAY`]($language$/elitemobs/elitescript_zones.md&section=translating_ray) | Uma linha que se move entre dois pontos iniciais para dois pontos finais | ✅ | ❌ |

---

#### Animável

Zonas com animações iniciam a animação da zona quando o script é chamado pela primeira vez.

Isto significa que se uma ação tiver um tempo de espera, quando a ação começar, a zona já se moveu enquanto a ação esperava.

As zonas são sempre animadas a cada tick. Isto significa que se usar a ação `SPAWN_PARTICLES`, pode defini-la para correr a cada tick, pois a zona estará a mover-se a cada tick. Se correr a cada segundo, verá as partículas a saltar, pois a zona continuou a mover-se mesmo nos ticks em que as partículas não foram geradas.

Se quiser fazer uma ação de zona rotativa, mas quiser esperar por uma quantidade definida de ticks antes de iniciar a ação, faça isso num script diferente e chame esse script através de `RUN_SCRIPT`. Certifique-se de que o `RUN_SCRIPT` tem o tempo de espera que deseja.

As zonas permanecerão na localização final assim que terminarem a animação.

Todas as zonas animáveis são definidas para não rastrear os alvos do script, pois o movimento extra tornaria as coisas demasiado difíceis de entender para scripters e jogadores. Isto significa que estas zonas não seguirão bosses ou jogadores e mover-se-ão sempre relativamente aos seus pontos de spawn iniciais.

---

#### Contorno

Certas zonas podem ter contornos. Contornos significam que `ZONE_BORDER` pode ser usado como alvo da zona. Os contornos são definidos criando uma segunda forma, menor, dentro da primeira forma, maior. A área entre a zona menor e a zona maior é o contorno.

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
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

Este script cria partículas de fumo que **apenas** aparecem no contorno da zona durante 5 segundos (repetir a cada 5 x vezes 20 = 100 ticks).

Se não usasse a opção `ZONE_BORDER`, mas sim a opção `ZONE_FULL`, então a zona inteira seria coberta por partículas de fumo assim:

<div align="center">

![elitescript_zones_borderfull.jpg](../../../img/wiki/elitescript_zones_borderfull.jpg)

</div>

</div>

</details>

</div>

---

### SPHERE

| Chave                                                       | Detalhes | Obrigatório |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Define a forma da zona. Deve ser `SPHERE` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Define a localização para o centro da esfera | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Define que tipos de entidades são alvejados | ❌ |
| `radius`                                                    | Raio da esfera | ✅ |
| `borderRadius`                                              | Raio da esfera interior | ❌ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
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

### DOME

| Chave                                                       | Detalhes | Obrigatório |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Define a forma da zona. Deve ser `DOME` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Define a localização para o centro da cúpula | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Define que tipos de entidades são alvejados | ❌ |
| `radius`                                                    | Raio da cúpula | ✅ |
| `borderRadius`                                              | Raio da cúpula interior | ❌ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
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

### CYLINDER

| Chave                                                       | Detalhes | Obrigatório |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Define a forma da zona. Deve ser `CYLINDER` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Define a localização para o centro do cilindro | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Define que tipos de entidades são alvejados | ❌ |
| `radius`                                                    | Raio do cilindro | ✅ |
| `borderRadius`                                              | Raio do cilindro interior | ❌ |
| `height`                                                    | Altura do cilindro | ❌ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
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

### CUBOID

| Chave                                                       | Detalhes | Obrigatório |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Define a forma da zona. Deve ser `CUBOID` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Define a localização para o centro do cuboide | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Define que tipos de entidades são alvejados | ❌ |
| `x`                                                         | Define o comprimento do cuboide | ✅ |
| `y`                                                         | Define a altura do cuboide | ✅ |
| `z`                                                         | Define a largura do cuboide, padrão é `x` | ❌ |
| `xBorder`                                                   | Define o comprimento do cuboide interior | ❌ |
| `yBorder`                                                   | Define a altura do cuboide interior | ❌ |
| `zBorder`                                                   | Define a largura do cuboide interior, padrão é `x` | ❌ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
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

### STATIC_RAY

| Chave                                                       | Detalhes | Obrigatório |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Define a forma da zona. Deve ser `STATIC_RAY` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Define a localização para o primeiro ponto da linha | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)    | Define a localização para o último ponto da linha | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Define que tipos de entidades são alvejados | ❌ |
| `ignoresSolidBlocks`                                        | Define se o raio passará por blocos sólidos | ❌ |
| `pointRadius`                                               | Define a espessura do raio. O padrão é 0.5 blocos. | ❌ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
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

Ajustámos a altura da zona usando a opção `offset` em ambas as extremidades da zona para fazer o raio aparecer do meio do jogador e do boss, caso contrário o raio apareceria nos seus pés.

</div>

</details>

</div>

---

### ROTATING_RAY

| Chave                                                       | Detalhes | Obrigatório |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Define a forma da zona. Deve ser `ROTATING_RAY` | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Define que tipos de entidades são alvejados | ❌ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Define a localização para o primeiro ponto da linha | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)    | Define a localização para o último ponto da linha | ✅ |
| `animationDuration`                                         | Define, em ticks, a quantidade de tempo para a rotação | ✅ |
| `pitchPreRotation`                                          | Aplica uma rotação inicial à inclinação antes da animação | ❌ |
| `yawPreRotation`                                            | Aplica uma rotação inicial à guinada antes da animação | ❌ |
| `pitchRotation`                                             | Define a rotação de inclinação para a animação | ❌ |
| `yawRotation`                                               | Define a rotação de guinada para a animação | ❌ |
| `ignoresSolidBlocks`                                        | Define se o raio passará por blocos sólidos | ❌ |
| `pointRadius`                                               | Define a espessura do raio. O padrão é 0.5 blocos. | ❌ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
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

Este script mostra como é um raio rotativo usando partículas de nuvem.

Primeiro, cria um raio do boss para o jogador que o feriu, usando partículas de nuvem. Depois, ajusta as posições ligeiramente para cima em um bloco usando `offset`.

De seguida, faz o raio girar num círculo completo à volta do jogador que foi alvejado. Esta rotação dura 5 segundos (100 ticks) para completar, tendo o jogador alvejado como centro.

</div>

</details>

</div>

---

### TRANSLATING_RAY

| Chave                                                          | Detalhes | Obrigatório |
|--------------------------------------------------------------| :-: | :-: |
| `shape`                                                      | Define a forma da zona. Deve ser `TRANSLATING_RAY` | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter)  | Define que tipos de entidades são alvejados | ❌ |
| `animationDuration`                                          | Define, em ticks, a quantidade de tempo para a translação | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)      | Define a localização para o primeiro ponto da linha | ✅ |
| [`finalTarget`]($language$/elitemobs/elitescript_targets.md) | Define a localização do destino para o primeiro ponto da linha | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)     | Define a localização para o segundo ponto da linha | ✅ |
| [`finalTarget2`]($language$/elitemobs/elitescript_targets.md) | Define a localização do destino para o segundo ponto da linha | ✅ |
| `ignoresSolidBlocks`                                         | Define se o raio passará por blocos sólidos | ❌ |
| `pointRadius`                                                | Define a espessura do raio. O padrão é 0.5 blocos. | ❌ |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
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

Este script mostra como é um raio translacional usando partículas de nuvem.

Primeiro, cria um raio do boss para o jogador que o feriu, usando partículas de nuvem.

Depois, anima o raio para ir para cima 10 blocos de ambos os alvos usando o `offset` em `FinalTarget1` e `FinalTarget2`.

A animação demora 5 segundos (100 ticks) a completar.

Podemos facilmente fazer o raio mover-se para o lado ajustando o `offset` Z para algo como `offset: 0,0,10`:

<div align="center">

![elitescript_zones_translatingray2.gif](../../../img/wiki/elitescript_zones_translatingray2.gif)

</div>

Este comportamento pode mudar dependendo para onde está a olhar no jogo.
<br>Se modificarmos o `offset` X no script mostrado na imagem GIF, o raio pareceria mover-se para longe de nós numa linha reta da nossa perspetiva.

</div>

</details>

---

## filter

A propriedade filtro pode ser usada para alvejar apenas entidades específicas dentro da zona. Estas entidades podem ser:

| Valor | Detalhes |
| --- | :-: |
| `PLAYER` | Alveja apenas jogadores na zona (padrão) |
| `ELITE` | Alveja apenas elites na zona |
| `LIVING` | Alveja todas as entidades vivas na zona |

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

Este script de exemplo mostra como usar o filtro para fazer a zona alvejar apenas elites.

</div>