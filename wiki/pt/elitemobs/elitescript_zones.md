# Zonas do Script Elite

As zonas são localizações definidas por uma forma que pode ser usada como alvos pelos scripters para executar qualquer tipo de ação.

Apenas uma zona pode ser definida por script.

Para direcionar zonas, o tipo de alvo `ZONE_FULL` ou `ZONE_BORDER` pode ser usado.

As próprias zonas também usam [Alvos de Script]($language$/elitemobs/elitescript_targets.md) para definir onde a zona aparecerá.

## shape

Define a forma da zona. Formas válidas:

| Tipo de Forma                                                               | Detalhes | Animável | Borda |
|--------------------------------------------------------------------------| :-: | :-: | :-: |
| [`CYLINDER`]($language$/elitemobs/elitescript_zones.md&section=cylinder)         | Forma cilíndrica | ❌ | ✅ |
| [`SPHERE`]($language$/elitemobs/elitescript_zones.md&section=sphere)             | Forma esférica | ❌ | ✅ |
| [`DOME`]($language$/elitemobs/elitescript_zones.md&section=dome)                 | Forma de cúpula (meia esfera) | ❌ | ✅ |
| [`CUBOID`]($language$/elitemobs/elitescript_zones.md&section=cuboid)             | Forma cúbica (semelhante a um cubo) | ❌ | ✅ |
| [`STATIC_RAY`]($language$/elitemobs/elitescript_zones.md&section=static_ray)     | Uma linha fixa entre dois pontos | ❌ | ❌ |
| [`ROTATING_RAY`]($language$/elitemobs/elitescript_zones.md&section=rotating_ray) | Uma linha giratória entre dois pontos | ✅ | ❌ |
| [`TRANSLATING_RAY`]($language$/elitemobs/elitescript_zones.md&section=translating_ray) | Uma linha que se move entre dois pontos iniciais para dois pontos finais | ✅ | ❌ |

---

#### Animável

As zonas com animações iniciam a animação da zona quando o script é chamado pela primeira vez.

Isso significa que se uma ação tiver um tempo de espera, quando a ação iniciar, a zona já estará se movendo enquanto a ação estava esperando.

As zonas são sempre animadas em cada tick. Isso significa que se você usar a ação `SPAWN_PARTICLES`, pode configurá-la para ser executada a cada tick, pois a zona estará se movendo a cada tick. Se você executar a cada segundo, verá as partículas pulando, pois a zona continua se movendo mesmo nos ticks em que as partículas não foram geradas.

Se você quiser criar uma ação de zona giratória, mas quiser esperar uma determinada quantidade de ticks antes de iniciar a ação, crie um script diferente e chame esse script por meio do `RUN_SCRIPT`. Certifique-se de que o `RUN_SCRIPT` tenha o tempo de espera que você deseja.

As zonas permanecerão na localização final quando a animação terminar.

Todas as zonas animáveis são definidas para não rastrear nos alvos do script, pois o movimento extra tornaria as coisas muito difíceis de entender para os scripters e jogadores. Isso significa que essas zonas não seguirão os chefes ou jogadores e sempre se moverão em relação aos seus pontos de geração iniciais.

---

#### Borda

Certas zonas podem ter bordas. As bordas significam que `ZONE_BORDER` pode ser usado como alvo da zona. As bordas são definidas criando uma segunda forma menor dentro da primeira forma maior. A área entre a zona menor e a zona maior é a borda.

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

Este script cria partículas de fumaça que **apenas** aparecem na borda da zona por 5 segundos (repeat every 5 x times 20 = 100 ticks).

Se você não usasse a opção `ZONE_BORDER`, mas a opção `ZONE_FULL`, toda a zona seria coberta por partículas de fumaça como esta:

<div align="center">

![elitescript_zones_borderfull.jpg](../../../img/wiki/elitescript_zones_borderfull.jpg)

</div>

</div>

</details>

</div>

---

### SPHERE

| Chave                                                         | Detalhes | Obrigatório |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Define a forma da zona. Deve ser `SPHERE` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Define a localização para o centro da esfera | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Define quais tipos de entidades são direcionadas | ❌ |
| `radius`                                                    | Raio da esfera | ✅ |
| `borderRadius`                                              | Raio da esfera interna | ❌ |

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

| Chave                                                         | Detalhes | Obrigatório |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Define a forma da zona. Deve ser `DOME` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Define a localização para o centro da cúpula | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Define quais tipos de entidades são direcionadas | ❌ |
| `radius`                                                    | Raio da cúpula | ✅ |
| `borderRadius`                                              | Raio da cúpula interna | ❌ |

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

| Chave                                                         | Detalhes | Obrigatório |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Define a forma da zona. Deve ser `CYLINDER` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Define a localização para o centro do cilindro | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Define quais tipos de entidades são direcionadas | ❌ |
| `radius`                                                    | Raio do cilindro | ✅ |
| `borderRadius`                                              | Raio do cilindro interno | ❌ |
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

| Chave                                                         | Detalhes | Obrigatório |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Define a forma da zona. Deve ser `CUBOID` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Define a localização para o centro do cuboide | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Define quais tipos de entidades são direcionadas | ❌ |
| `x`                                                         | Define o comprimento do cuboide | ✅ |
| `y`                                                         | Define a altura do cuboide | ✅ |
| `z`                                                         | Define a largura do cuboide, o padrão é `x` | ❌ |
| `xBorder`                                                   | Define o comprimento do cuboide interno | ❌ |
| `yBorder`                                                   | Define a altura do cuboide interno | ❌ |
| `zBorder`                                                   | Define a largura do cuboide interno, o padrão é `x` | ❌ |

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

| Chave                                                         | Detalhes | Obrigatório |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Define a forma da zona. Deve ser `STATIC_RAY` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Define a localização para o primeiro ponto da linha | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)    | Define a localização para o último ponto da linha | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Define quais tipos de entidades são direcionadas | ❌ |
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

Ajustamos a altura da zona usando a opção `offset` em ambas as extremidades da zona para fazer o raio aparecer do meio do jogador e do chefe, caso contrário, o raio apareceria em seus pés.

</div>

</details>

</div>

---

### ROTATING_RAY

| Chave                                                         | Detalhes | Obrigatório |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Define a forma da zona. Deve ser `ROTATING_RAY` | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter)  | Define quais tipos de entidades são direcionadas | ❌ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Define a localização para o primeiro ponto da linha | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)    | Define a localização para o último ponto da linha | ✅ |
| `animationDuration`                                         | Define, em ticks, a quantidade de tempo para a rotação | ✅ |
| `pitchPreRotation`                                          | Aplica uma rotação inicial ao pitch antes da animação | ❌ |
| `yawPreRotation`                                            | Aplica uma rotação inicial ao yaw antes da animação | ❌ |
| `pitchRotation`                                             | Define a rotação de pitch para a animação | ❌ |
| `yawRotation`                                               | Define a rotação de yaw para a animação | ❌ |
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

Este script mostra como um raio giratório fica usando partículas de nuvem.

Primeiro, ele cria um raio do chefe para o jogador que o atingiu, usando partículas de nuvem. Em seguida, ajusta as posições ligeiramente para cima por um bloco usando `offset`.

Em seguida, ele gira o raio em um círculo completo ao redor do jogador que foi alvo. Esta rotação leva 5 segundos (100 ticks) para ser concluída, com o jogador alvo como o centro.

</div>

</details>

</div>

---

### TRANSLATING_RAY

| Chave                                                          | Detalhes | Obrigatório |
|--------------------------------------------------------------| :-: | :-: |
| `shape`                                                      | Define a forma da zona. Deve ser `TRANSLATING_RAY` | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter)  | Define quais tipos de entidades são direcionadas | ❌ |
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

Este script mostra como um raio que se move fica usando partículas de nuvem.

Primeiro, ele cria um raio do chefe para o jogador que o atingiu, usando partículas de nuvem. 

Em seguida, ele anima o raio para ir 10 blocos para cima de ambos os alvos usando o `offset` no `FinalTarget1` e `FinalTarget2`.

A animação leva 5 segundos (100 ticks) para ser concluída.

Podemos facilmente fazer o raio se mover para os lados ajustando o Z `offset` para algo como `offset: 0,0,10`:

<div align="center">

![elitescript_zones_translatingray2.gif](../../../img/wiki/elitescript_zones_translatingray2.gif)

</div>

Este comportamento pode mudar dependendo de onde você está olhando no jogo. 
<br>Se modificarmos o X `offset` no script mostrado na imagem GIF, o raio parecerá se mover para longe de nós em uma linha reta da nossa perspectiva.

</div>

</details>

---

## filter

A propriedade de filtro pode ser usada para direcionar apenas entidades específicas dentro da zona. Essas entidades podem ser:

| Valor | Detalhes |
| --- | :-: |
| `PLAYER` | Só direciona os jogadores na zona (padrão) |
| `ELITE` | Só direciona as elites na zona |
| `LIVING` | Direciona todas as entidades vivas na zona |

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

Este script de exemplo mostra como usar o filtro para fazer com que a zona só tenha como alvo as elites.

</div>



