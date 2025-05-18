```markdown
# Alvos de Elite Script

Alvos são uma parte central dos Elite Scripts, e são necessários para que Ações e Zonas funcionem.

## Tipos de Alvo

Os tipos de alvo definem quais entidades ou localizações são alvo de um script.

| Tipo de Alvo                  |                                    Detalhes                                     |                                                                                                   Especial                                                                                                   |
|------------------------------|:------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `NEARBY_PLAYERS`             | Jogadores num [raio]($language$/elitemobs/elitescript_targets.md&section=range)  |                                                                Requer [`range`]($language$/elitemobs/elitescript_targets.md&section=range)                                                                |
| `NEARBY_MOBS`                |       Mobs num [raio]($language$/elitemobs/elitescript_targets.md&section=range)        |                                                                Requer [`range`]($language$/elitemobs/elitescript_targets.md&section=range)                                                                |
| `WORLD_PLAYERS`              |                                Jogadores no mundo                                |                                                                                                      ❌                                                                                                      |
| `ALL_PLAYERS`                |                             Jogadores no servidor                              |                                                                                                      ❌                                                                                                      |
| `DIRECT_TARGET`              |                                Jogadores no evento                                |                                                                   [Requer evento compatível]($language$/elitemobs/elitescript_events.md)                                                                   |
| `SELF`                       |                               Elite a usar poder                                |                                                                                                      ❌                                                                                                      |
| `SELF_SPAWN`                 |                      Alveja a localização de spawn de um boss                      |                                                                                                      ❌                                                                                                      |
| `LOCATION`                   |                               Localização específica                                |                                                             Requer [`location`]($language$/elitemobs/elitescript_targets.md&section=location)                                                             |
| `LOCATIONS`                  |                           Várias localizações específicas                           |                                                            Requer [`locations`]($language$/elitemobs/elitescript_targets.md&section=locations)                                                            |
| `ZONE_FULL`                  |                             Alvos dentro da zona                             |                                                                        Requer [`Zone`]($language$/elitemobs/elitescript_zones.md)                                                                         |
| `ZONE_BORDER`                |                             Alvos na fronteira da zona                             |                                                                        Requer [`Zone`]($language$/elitemobs/elitescript_zones.md)                                                                         |
| `ACTION_TARGET`              |                      Herda os alvos de uma ação.                      |                 **Só pode ser usado para [condições]($language$/elitemobs/elitescript_conditions.md) de ação e [Vetores Relativos]($language$/elitemobs/elitescript_relative_vectors.md)!!**                 |
| `LANDING_LOCATION`           |                     Alveja a localização onde um bloco caiu.                      |                                        **Só pode ser usado para a ação [`SPAWN_FALLING_BLOCK`]($language$/elitemobs/elitescript_actions.md&section=spawn_falling_block)!**                                         |
| `INHERIT_SCRIPT_TARGET`      |           Herda o alvo do script que executa este script            |                                                                          Só pode ser executado se o script foi chamado por outro script!                                                                           |
| `INHERIT_SCRIPT_ZONE_FULL`   |     Alvos dentro da zona herdada do script que executa este script     |                                                 Requer [`Zone`]($language$/elitemobs/elitescript_zones.md) **no script que chama este script!**                                                  |
| `INHERIT_SCRIPT_ZONE_BORDER` |     Alvos na fronteira da zona herdada do script que executa este script     |                                                 Requer [`Zone`]($language$/elitemobs/elitescript_zones.md) **no script que chama este script!**                                                  |

<div align="center">

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDeathEvent
    Actions:
      - action: MESSAGE
        Target:
          targetType: ALL_PLAYERS
        sValue: "&2Hello World!"
```

Isto envia uma mensagem para o alvo. Como o alvo está definido para `ALL_PLAYERS`, enviará essa mensagem para todos os jogadores online.

</div>

</details>

</div>

---

## Atributos partilhados

As seguintes configurações podem ser aplicadas a todos os alvos.

| Valores | Detalhes | Especial |
| --- | :-: | :-: |
| `offset` | Define o deslocamento para a localização do alvo. | Não pode alvejar entidades! |

<div align="center">

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDeathEvent
    Actions
    - action: STRIKE_LIGHTNING
      Target:
        targetType: SELF
        offset: "0,2,0"
```

Isto invoca um raio 2 blocos acima do boss. Note que STRIKE_LIGHTNING usa localizações e não afeta entidades, por isso pode ter deslocamentos.

Não pode definir um deslocamento para enviar uma mensagem, pois as mensagens são enviadas para jogadores. Pode, no entanto, definir um deslocamento para uma zona que pode então alvejar entidades.

</div>

</details>

</div>

---

## range

Define o raio para procurar jogadores próximos no tipo de alvo `NEARBY_PLAYERS`.

| Valores | Detalhes | Padrão |
| --- | :-: | :-: |
| `range` | Define o raio, em blocos, para procurar alvos jogadores. | `20.0` |

<div align="center">

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDeathEvent
    Actions:
      - action: MESSAGE
        Target:
          targetType: NEARBY_PLAYERS
          range: 25.0
        sValue: "&2Alvos jogadores dentro de 25 blocos!"
```

Isto envia uma mensagem para jogadores dentro de 25 blocos do boss quando o boss morre.

</div>

</details>

</div>

## location

Define a localização para o tipo de alvo `LOCATION`.

| Valores | Detalhes | Padrão |
| --- | :-: | :-: |
| `location` | Define a localização do mundo que será alvo. | `none` |

Isto usa o formato `location: nomedomundo,x,y,z,pitch,yaw` para a localização.

**Note que `same_as_boss` é um placeholder válido para o nome do mundo, por exemplo: `same_as_boss,100,64,100,0,0` seria uma localização válida que alvejará o mesmo mundo onde o boss está.**

<div align="center">

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDeathEvent
    Actions
    - action: STRIKE_LIGHTNING
      Target:
        targetType: LOCATION
        location: "myWorld,100,64,200,0,0"
```

Isto invoca um raio na localização x=100, y=64, z=200 de um mundo chamado `myWorld`.

</div>

</details>

</div>

---

## locations

Define as localizações para o tipo de alvo `LOCATIONS`.

| Valores | Detalhes | Padrão |
| --- | :-: | :-: |
| `locations` | Define a lista de localizações do mundo que serão alvo. | `none` |

Isto usa o formato `nomedomundo,x,y,z,pitch,yaw` para a localização.

**Note que `same_as_boss` é um placeholder válido para o nome do mundo, por exemplo: `same_as_boss,100,64,100,0,0` seria uma localização válida que alvejará o mesmo mundo onde o boss está.**

<div align="center">

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDeathEvent
    Actions
    - action: STRIKE_LIGHTNING
      Target:
        targetType: LOCATIONS
        locations:
        - "myWorld,100,64,200,0,0"
        - "same_as_boss,-100,12,130,0,0"
```

Isto invoca um raio na localização x=100, y=64, z=200 de um mundo chamado `myWorld` e outro raio no mesmo mundo que o boss na localização x=-100, y=12 e z=130.

</div>

</details>

</div>

---

## Alvejando zonas

[Zonas]($language$/elitemobs/elitescript_zones.md) têm múltiplos alvos, e é importante entender como funcionam para usar o Elite Scripting em todo o seu potencial.

As zonas funcionam em duas partes:

### Parte 1 - Definir onde a zona vai

As zonas precisam de saber onde devem estar, e para isso usa o sistema de alvos da mesma forma que usaria para qualquer outro efeito baseado em localização, como um raio.

<div align="center">

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Events:
    - EliteMobDamagedEvent
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
```

Isto invoca uma zona cilíndrica à volta do boss. Note que nenhuma ação está definida neste exemplo ainda, isso é abordado abaixo.

Algumas zonas, como [STATIC_RAY]($language$/elitemobs/elitescript_zones.md&section=static_ray), têm dois ou mais alvos. Isto acontece porque os raios são linhas, e as linhas são definidas por dois pontos. Isto é abordado mais extensivamente na [página de zonas]($language$/elitemobs/elitescript_zones.md), mas fundamentalmente todas funcionam da mesma forma.

</div>

</details>

</div>

### Parte 2 - Alvejar o interior da zona

Agora que a zona sabe onde está, precisamos que a ação saiba que o seu alvo é a zona que definimos. É para isso que servem `targetType: ZONE_FULL` e `targetType:ZONE_BORDER`.

<div align="center">

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Events:
    - EliteMobDamagedEvent
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
    Actions:
    - action: SPAWN_PARTICLE
      times: 12
      repeatEvery: 5
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
```

Usando a mesma zona da primeira parte, agora adicionamos a ação. O alvo para esta ação é `ZONE_FULL`, o que significa que estará a invocar partículas dentro de toda a zona.

Note que ZONE_BORDER não está disponível para todas as zonas. Mais sobre isso na [página de zonas de script]($language$/elitemobs/elitescript_zones.md).

</div>

</details>

</div>

### Rastreamento de zona

Define se a zona se moverá com o alvo, por exemplo, se a zona se moverá quando o boss se mover para `targetType: SELF`.

| Valores | Detalhes | Padrão |
| --- | :-: | :-: |
| `track` | Define se a zona se moverá com o alvo. | `true` |

Note que zonas animáveis não podem rastrear. [Mais sobre isso aqui.]($language$/elitemobs/elitescript_zones.md&section=animatable)

<div align="center">

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Events:
    - EliteMobDamagedEvent
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
    Actions:
    - action: SPAWN_PARTICLE
      times: 12
      repeatEvery: 5
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        track: false
```

</div>

</details>

</div>

Usando o mesmo exemplo da parte 1 e parte 2, a zona está agora definida para não rastrear. Isto significa que a zona será invocada na localização do boss, mas mesmo que o boss continue a mover-se, a zona permanecerá onde foi invocada pela primeira vez.

Finalmente, note que se uma zona estiver definida para não rastrear, registará a sua localização no momento em que o script é chamado.

Como exemplo, quer ter uma fase de aviso e uma fase de dano para o seu script, terá de garantir que executa todas as ações no início e define um tempo de espera em todas as ações relacionadas com dano que quer executar mais tarde individualmente. Não deve atrasar um script inteiro que chama através de `RUN_SCRIPT` por razões técnicas.

O seguinte é um exemplo correto de um poder com uma fase de aviso e uma fase de dano retirado do Frost Palace Sanctum.

<div align="center">

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Events:
    - EliteMobDamagedEvent
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
    Actions:
    - action: SPAWN_PARTICLE
      times: 12
      repeatEvery: 5
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        track: false
    - action: SPAWN_PARTICLE
      wait: 60
      times: 13
      repeatEvery: 3
      particles:
      - particle: FLAME
        amount: 0
        x: 0
        y: 1
        z: 0
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: 0.5
        y: 1
        z: 0.5
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: 0
        y: 1
        z: 0.5
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: 0.5
        y: 1
        z: 0
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: -0.5
        y: 1
        z: -0.5
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: -0.5
        y: 1
        z: 0
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: 0
        y: 1
        z: -0.5
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: -0.5
        y: 1
        z: 0.5
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: 0.5
        y: 1
        z: -0.5
        speed: 0.2
      Target:
        targetType: ZONE_FULL
        track: false
    - action: RUN_SCRIPT
      scripts:
      - DamageCylinder
    - action: PLAY_ANIMATION
      sValue: fire_zone
      Target:
        targetType: SELF
    - action: SET_MOB_AI
      duration: 100
      bValue: false
      Target:
        targetType: SELF
    Cooldowns:
      local: 1200
      global: 300
  DamageCylinder:
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 10
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
        offset: 0,-1,0
    Actions:
    - action: DAMAGE
      wait: 60
      repeatEvery: 10
      times: 4
      multiplier: 4
      Target:
        targetType: ZONE_FULL
        track: false
    - action: SET_ON_FIRE
      wait: 60
      duration: 80
      Target:
        targetType: ZONE_FULL
        track: false
```

</div>

</details>

</div>

Este script faz muitas coisas, mas está separado em dois scripts claros: `VisualCylinder` e `DamageCylinder`.

VisualCylinder é executado primeiro e tem a ação `RUN_SCRIPT` que imediatamente também executa o `DamageCylinder` ao mesmo tempo que o `VisualCylinder` está a ser executado.

No entanto, cada ação em `DamageCylinder` está definida para esperar 60 ticks, ou 3 segundos.

Isto significa que o boss tem uma fase de aviso de 3 segundos, e depois faz uma fase de dano, e mesmo que as zonas estejam definidas para não rastrear, a zona de aviso e a zona de dano estarão na mesma localização.

### Propriedades de alvo específicas da zona

As zonas têm as seguintes propriedades específicas:

#### coverage

Define a percentagem da zona que será realmente usada para a ação. Só funciona para alvos de localização (não funcionará ao alvejar jogadores ou outras entidades).

| Valores | Detalhes | Padrão |
| --- | :-: | :-: |
| `coverage` | Define a percentagem da zona que será coberta. Pode aleatorizar este valor usando `~` exemplo: `1.0~0.3`. | `1.0` |

<div align="center">

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Events:
    - EliteMobDamagedEvent
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
    Actions:
    - action: SPAWN_PARTICLE
      times: 12
      repeatEvery: 5
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 0.5
```

Neste caso, apenas 50% da zona será coberta por partículas.

</div>

</details>

</div>

### Herdando alvos

Quando um script executa outro script (ou "chama" esse script), é possível passar informações de zona e alvo do primeiro script para o segundo.

**Usos de exemplo**

1. **Executores de script melhorados**

Executores de script são scripts cuja única função é executar muitos outros scripts. São usados para facilitar a gestão de scripts, especialmente ao lidar com vários scripts que requerem timing preciso.

Com a herança de alvos, vários scripts podem usar a mesma zona ou alvo, reduzindo potencialmente centenas de linhas de scripting repetitivo.

2. **Filtragem de alvos Matryoshka / Filtragem de alvos boneca russa**

Condições de filtragem podem ser aplicadas a alvos numa ação. Ao passar os alvos para um script diferente com filtros diferentes, torna-se possível sobrepor as condições e aplicar efeitos diferentes ao mesmo conjunto de alvos com base em critérios cada vez mais específicos.

Como exemplo, é possível criar uma zona que procura jogadores e fazer uma ação que verifica se todos os jogadores na zona têm uma tag específica. Os alvos válidos podem então ser passados para outro script onde outra ação pode então executar uma condição de verificação aleatória e aplicar um efeito com base nessa chance. Os alvos podem então ser passados para outro script onde outra condição pode fazer uma verificação para ver se os alvos ainda estão vivos e fazer algum comportamento especial se estiverem mortos.
```Please specify the language you would like the text translated into. I will translate it while retaining the markdown formatting.