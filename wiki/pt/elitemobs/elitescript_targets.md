# Alvos de Script de Elite

Os alvos são uma parte central dos Scripts de Elite e são necessários para que as Ações e as Zonas funcionem.

## Tipos de Alvo

Os tipos de alvo definem quais entidades ou locais são alvo de um script.

| Tipo de Alvo                 |                                     Detalhes                                      |                                                                                   Especial                                                                                    |
|------------------------------|:---------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `NEARBY_PLAYERS`             | Jogadores no [alcance]($language$/elitemobs/elitescript_targets.md&section=range) |                                                 Requer [`alcance`]($language$/elitemobs/elitescript_targets.md&section=range)                                                 |
| `NEARBY_MOBS`                |   Mobs no [alcance]($language$/elitemobs/elitescript_targets.md&section=range)    |                                                 Requer [`alcance`]($language$/elitemobs/elitescript_targets.md&section=range)                                                 |
| `WORLD_PLAYERS`              |                                Jogadores no mundo                                 |                                                                                       ❌                                                                                       |
| `ALL_PLAYERS`                |                               Jogadores no servidor                               |                                                                                       ❌                                                                                       |
| `DIRECT_TARGET`              |                                Jogadores no evento                                |                                                    [Requer evento compatível]($language$/elitemobs/elitescript_events.md)                                                     |
| `SELF`                       |                                Elite usando poder                                 |                                                                                       ❌                                                                                       |
| `SELF_SPAWN`                 |                  Tem como alvo a localização de spawn de um boss                  |                                                                                       ❌                                                                                       |
| `LOCATION`                   |                              Localização específica                               |                                             Requer [`localização`]($language$/elitemobs/elitescript_targets.md&section=location)                                              |
| `LOCATIONS`                  |                          Várias localizações específicas                          |                                            Requer [`localizações`]($language$/elitemobs/elitescript_targets.md&section=locations)                                             |
| `ZONE_FULL`                  |                               Alvos dentro da zona                                |                                                          Requer [`Zona`]($language$/elitemobs/elitescript_zones.md)                                                           |
| `ZONE_BORDER`                |                            Alvos na fronteira da zona                             |                                                          Requer [`Zona`]($language$/elitemobs/elitescript_zones.md)                                                           |
| `ACTION_TARGET`              |                            Herda os alvos de uma ação.                            | **Só pode ser usado para [condições] de ação ($language$/elitemobs/elitescript_conditions.md) e [Vetores Relativos]($language$/elitemobs/elitescript_relative_vectors.md)!!** |
| `LANDING_LOCATION`           |                  Tem como alvo a localização onde um bloco caiu.                  |                      **Só pode ser usado para a ação [`SPAWN_FALLING_BLOCK`]($language$/elitemobs/elitescript_actions.md&section=spawn_falling_block)!**                      |
| `INHERIT_SCRIPT_TARGET`      |                  Herda o alvo do script que executa este script                   |                                                        Só pode ser executado se o script foi chamado por outro script!                                                        |
| `INHERIT_SCRIPT_ZONE_FULL`   |          Alvos dentro da zona herdada do script que executa este script           |                                        Requer [`Zona`]($language$/elitemobs/elitescript_zones.md) **no script que chama este script!**                                        |
| `INHERIT_SCRIPT_ZONE_BORDER` |       Alvos na fronteira da zona herdada do script que executa este script        |                                        Requer [`Zona`]($language$/elitemobs/elitescript_zones.md) **no script que chama este script!**                                        |

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
        sValue: "&2Olá Mundo!"
```

Isto envia uma mensagem para o alvo. Como o alvo está definido para `ALL_PLAYERS`, irá enviar essa mensagem para todos
os jogadores online.

</div>

</details>

</div>

---

## Atributos Partilhados

As seguintes definições podem ser aplicadas a todos os alvos.

| Valores  |                  Detalhes                   |             Especial              |
|----------|:-------------------------------------------:|:---------------------------------:|
| `offset` | Define o offset para a localização do alvo. | Não pode ter como alvo entidades! |

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

Isto cria um relâmpago 2 blocos acima do boss. Note que o STRIKE_LIGHTNING usa localizações e não afeta as entidades,
pelo que pode ter offsets.

Não pode definir um offset para enviar uma mensagem, uma vez que as mensagens são enviadas para jogadores. No entanto,
pode definir um offset para uma zona que possa então ter como alvo entidades.

</div>

</details>

</div>

---

## alcance

Define o alcance para procurar jogadores próximos no tipo de alvo `NEARBY_PLAYERS`.

| Valores |                           Detalhes                           | Padrão |
|---------|:------------------------------------------------------------:|:------:|
| `range` | Define o alcance, em blocos, para procurar alvos de jogador. | `20.0` |

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
        sValue: "&2Jogadores alvo a 25 blocos!"
```

Isto envia uma mensagem para jogadores a 25 blocos do boss quando o boss morre.

</div>

</details>

</div>

## localização

Define a localização para o tipo de alvo `LOCATION`.

| Valores    |                    Detalhes                    |  Padrão  |
|------------|:----------------------------------------------:|:--------:|
| `location` | Define a localização do mundo que será o alvo. | `nenhum` |

Isto usa o formato `location: nomedomundo,x,y,z,pitch,yaw` para a localização.

**Note que `same_as_boss` é um espaço reservado válido para o nome do mundo, tal como `same_as_boss,100,64,100,0,0`
seria uma localização válida que teria como alvo o mesmo mundo em que o boss está.**

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
        location: "meuMundo,100,64,200,0,0"
```

Isto faz aparecer um raio na localização x=100, y=64, z=200 de um mundo chamado `meuMundo`.

</div>

</details>

</div>

---

## localizações

Define as localizações para o tipo de alvo `LOCATIONS`.

| Valores     |                        Detalhes                         |  Padrão  |
|-------------|:-------------------------------------------------------:|:--------:|
| `locations` | Define a lista de localizações do mundo que serão alvo. | `nenhum` |

Isto usa o formato `nomedomundo,x,y,z,pitch,yaw` para a localização.

**Note que `same_as_boss` é um espaço reservado válido para o nome do mundo, tal como `same_as_boss,100,64,100,0,0`
seria uma localização válida que teria como alvo o mesmo mundo em que o boss está.**

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
        - "meuMundo,100,64,200,0,0"
        - "same_as_boss,-100,12,130,0,0"
```

Isto faz aparecer um raio na localização x=100, y=64, z=200 de um mundo chamado `meuMundo` e outro raio no mesmo mundo
que o boss na localização x=-100, y=12 e z=130.

</div>

</details>

</div>

---

## Zonas de Alvo

[Zonas]($language$/elitemobs/elitescript_zones.md) têm múltiplos alvos e é importante compreender como funcionam para
usar o Script de Elite em todo o seu potencial.

As zonas funcionam em duas partes:

### Parte 1 - Definir para onde a zona vai

As zonas precisam de saber onde é que supostamente estão, e para isso usa o sistema de alvos da mesma forma que faria
para qualquer outro efeito baseado na localização, como um raio.

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

Isto cria uma zona cilíndrica em torno do boss. Note que ainda não estão definidas ações neste exemplo, isso está
abordado abaixo.

Algumas zonas, como [STATIC_RAY]($language$/elitemobs/elitescript_zones.md&section=static_ray), têm dois ou mais alvos.
Isto porque os raios são linhas e as linhas são definidas por dois pontos. Isto está abordado mais detalhadamente
na [página de zonas]($language$/elitemobs/elitescript_zones.md), mas fundamentalmente funcionam todas da mesma forma.

</div>

</details>

</div>

### Parte 2 - Ter como alvo o interior da zona

Agora que a zona sabe onde está, precisamos que a ação saiba que o seu alvo é a zona que definimos. É para isso que
servem `targetType: ZONE_FULL` e `targetType:ZONE_BORDER`.

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

Usando a mesma zona da primeira parte, agora adicionamos a ação. O alvo para esta ação é `ZONE_FULL`, o que significa
que irá fazer aparecer partículas dentro de toda a zona.

Note que o ZONE_BORDER não está disponível para todas as zonas. Mais informações sobre isso na página
de [zonas de script]($language$/elitemobs/elitescript_zones.md).

</div>

</details>

</div>

### Rastreio de zona

Define se a zona se move com o alvo, tal como se a zona se move quando o boss se move para `targetType: SELF`.

| Valores |               Detalhes               | Padrão |
|---------|:------------------------------------:|:------:|
| `track` | Define se a zona se move com o alvo. | `true` |

Note que as zonas animáveis não podem rastrear. [Mais informações sobre isso aqui.]($language$/elitemobs/elitescript_zones.md&section=animatable)

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

Usando o mesmo exemplo da parte 1 e parte 2, a zona está agora definida para não rastrear. Isto significa que a zona irá
aparecer na localização do boss, mas mesmo que o boss continue a afastar-se, a zona irá ficar onde apareceu
inicialmente.

Finalmente, note que se uma zona estiver definida para não rastrear, irá registar a sua localização no momento em que o
script é chamado.

Como exemplo, se quiser ter uma fase de aviso e uma fase de dano para o seu script, terá de se certificar de que executa
todas as ações no início e coloca um tempo de espera em todas as ações relacionadas com o dano que quer executar mais
tarde individualmente. Não deve atrasar um script inteiro que chama através do `RUN_SCRIPT` por razões técnicas.

O seguinte é um exemplo correto de um poder com uma fase de aviso e uma fase de dano retirado do Santuário do Palácio
Gelado.

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

O VisualCylinder é executado primeiro e tem a ação `RUN_SCRIPT` que executa também imediatamente o `DamageCylinder` ao
mesmo tempo que o `VisualCylinder` está a ser executado.

No entanto, cada ação em `DamageCylinder` está definida para esperar por 60 ticks, ou 3 segundos.

Isto significa que o boss tem uma fase de aviso de 3 segundos, e depois faz uma fase de dano e, mesmo que as zonas
estejam definidas para não rastrear, a zona de aviso e a zona de dano estarão na mesma localização.

### Propriedades de alvo específicas da zona

As zonas têm as seguintes propriedades específicas:

#### cobertura

Define a percentagem da zona que será efetivamente utilizada para a ação. Só funciona para alvos de localização (não
funcionará ao ter como alvo jogadores ou outras entidades).

| Valores    |                    Detalhes                    | Padrão |
|------------|:----------------------------------------------:|:------:|
| `coverage` | Define a percentagem da zona que será coberta. | `1.0`  |

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

Neste caso, apenas 50% da zona estará coberta de partículas.

</div>

</details>

</div>

### Herdar alvos

Quando um script executa outro script (ou "chama" esse script), é possível passar informações de zona e alvo do primeiro script para o segundo.

**Exemplos de uso**

1. **Executores de scripts melhorados**

Os executores de scripts são scripts cuja única função é executar muitos outros scripts. São usados para tornar o
gerenciamento de scripts mais fácil, especialmente ao lidar com vários scripts que exigem uma temporização precisa.

Com a herança de alvos, vários scripts podem usar a mesma zona ou alvo, reduzindo potencialmente centenas de linhas de
scripts repetitivos.

2. **Filtragem de alvos matryoshka / Filtragem de alvos de bonecas russas**

As condições de filtragem podem ser aplicadas a alvos numa ação. Ao passar os alvos para um script diferente com filtros
diferentes, torna-se possível sobrepor as condições e aplicar diferentes efeitos ao mesmo conjunto de alvos com base em
critérios cada vez mais específicos.

Por exemplo, é possível criar uma zona que procura jogadores e fazer uma ação que verifica se todos os jogadores na zona
têm uma etiqueta específica. Os alvos válidos podem então ser passados para outro script onde outra ação pode então
executar uma condição de verificação aleatória e aplicar um efeito com base nessa hipótese. Os alvos podem então ser
passados para outro script onde outra condição pode fazer uma verificação para ver se os alvos ainda estão vivos e fazer
algum comportamento especial se estiverem mortos.

Estes são, claro, apenas exemplos. É um sistema altamente flexível.

3. **Zonas complexas**

Finalmente, é possível sobrepor alvos para criar zonas complexas, opcionalmente usando condições, se necessário, e é
mesmo possível criar zonas semi-aleatorizadas usando as condições de script e a capacidade de executar apenas um dos
scripts listados a partir das ações de script.

**Nota:** Para esta secção, **"script pai"** refere-se ao script que executa o **"script herdeiro"**, que é o script que
usará os alvos herdados.
Ao usar a herança de alvos, é importante analisar cuidadosamente o _script pai_ para garantir que os dados corretos
estão a ser transmitidos.

#### INHERIT_SCRIPT_TARGET

Ao usar `INHERIT_SCRIPT_TARGET`, os alvos do _script pai_ serão transmitidos para o script herdeiro. Isto tem algumas
ressalvas:

- Ao passar **alvos de entidade**, é possível executar ações que requerem localizações (como fazer aparecer partículas)
  uma vez que a localização das entidades será usada. É, claro, também possível usar ações que requerem entidades.

- Ao passar **alvos de localização**, só é possível usar localizações. **A única forma de obter uma entidade a partir de
  uma localização é criar uma zona nessa localização e procurar por entidades.** Portanto, embora não seja impossível
  passar uma localização e depois obter entidades, será necessário um pouco mais de trabalho.

#### Herdar zonas

Ao usar `INHERIT_SCRIPT_ZONE_FULL` ou `INHERIT_SCRIPT_ZONE_BORDER`, é imperativo que o _script pai_ defina uma zona,
caso contrário o _script herdeiro_ não será capaz de ser executado corretamente.

Além disso, as zonas podem opcionalmente
ser [rastreadas]($language$/elitemobs/elitescript_targets.md&section=zone-track). Isto também será transmitido
juntamente com a zona.

- Uma zona **não rastreada** irá sempre criar uma zona onde é definida pelo _script herdeiro_. Isto significa que as
  definições de zona serão usadas pelas ações nos _scripts herdeiros_ para criar novas zonas de cada vez que uma ação é
  executada, e a localização dessas zonas será definida pela ação.

- Uma zona **rastreada** pode passar a mesma localização exata da zona para todos os _scripts herdeiros_ se o _script
  pai_ estiver definido para ter como alvo `ZONE_FULL` ou `ZONE_BORDER`. Isto significa que cada script estará a agir
  nas mesmas localizações.
