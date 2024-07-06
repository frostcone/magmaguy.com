# Alvos do Script Elite

Os Alvos são uma parte central dos Scripts Elite e são necessários para que as Ações e Zonas funcionem.

## Tipos de Alvos

Os tipos de alvo definem quais entidades ou localizações são direcionadas por um script.

| Tipo de Alvo                  |                                    Detalhes                                     |                                                                                                   Especial                                                                                                   |
|------------------------------|:------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `NEARBY_PLAYERS`             | Players em [alcance]($language$/elitemobs/elitescript_targets.md&section=range)  |                                                                Requer [`alcance`]($language$/elitemobs/elitescript_targets.md&section=range)                                                                |
| `NEARBY_MOBS`                |       Mobs em [alcance]($language$/elitemobs/elitescript_targets.md&section=range)        |                                                                Requires [`alcance`]($language$/elitemobs/elitescript_targets.md&section=range)                                                                |
| `WORLD_PLAYERS`              |                                Players no mundo                                |                                                                                                      ❌                                                                                                      |
| `ALL_PLAYERS`                |                             Players no servidor                              |                                                                                                      ❌                                                                                                      |
| `DIRECT_TARGET`              |                                Players no evento                                |                                                                   [Requer evento compatível]($language$/elitemobs/elitescript_events.md)                                                                   |
| `SELF`                       |                               Elite usando o poder                                |                                                                                                      ❌                                                                                                      |
| `SELF_SPAWN`                 |                      Direciona a localização de geração de um chefe                      |                                                                                                      ❌                                                                                                      |
| `LOCATION`                   |                               Localização específica                                |                                                             Requer [`localização`]($language$/elitemobs/elitescript_targets.md&section=location)                                                             |
| `LOCATIONS`                  |                           Várias localizações específicas                           |                                                            Requires [`locações`]($language$/elitemobs/elitescript_targets.md&section=locations)                                                            |
| `ZONE_FULL`                  |                             Direciona o interior da zona                             |                                                                        Requer [`Zona`]($language$/elitemobs/elitescript_zones.md)                                                                         |
| `ZONE_BORDER`                |                             Direciona a borda da zona                             |                                                                        Requer [`Zona`]($language$/elitemobs/elitescript_zones.md)                                                                         |
| `ACTION_TARGET`              |                      Herda os alvos de uma ação.                      |                 **Só pode ser usado para [condições]($language$/elitemobs/elitescript_conditions.md) e [Vetores Relativos]($language$/elitemobs/elitescript_relative_vectors.md) de ação!!**                 |
| `LANDING_LOCATION`           |                     Direciona a localização em que um bloco caiu.                      |                                        **Só pode ser usado para a ação [`SPAWN_FALLING_BLOCK` ]($language$/elitemobs/elitescript_actions.md&section=spawn_falling_block)!**                                         |
| `INHERIT_SCRIPT_TARGET`      |           Herda o alvo do script que executa este script            |                                                                          Só pode ser executado se o script for chamado por outro script!                                                                           |
| `INHERIT_SCRIPT_ZONE_FULL`   |     Direciona o interior da zona herdada do script que executa este script     |                                                 Requer [`Zona`]($language$/elitemobs/elitescript_zones.md) **no script que chama este script!**                                                  |
| `INHERIT_SCRIPT_ZONE_BORDER` |     Direciona a borda da zona herdada do script que executa este script     |                                                 Requer [`Zona`]($language$/elitemobs/elitescript_zones.md) **no script que chama este script!**                                                  |

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

Isso envia uma mensagem para o alvo. Como o alvo está definido como `ALL_PLAYERS`, ele enviará essa mensagem para todos os jogadores online.

</div>

</details>

</div>

---

## Atributos Compartilhados

As seguintes configurações podem ser aplicadas a todos os alvos.

| Valores | Detalhes | Especial |
| --- | :-: | :-: |
| `offset` | Define o deslocamento para a localização do alvo. | Não pode direcionar entidades! |

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

Isso gera um raio 2 blocos acima do chefe. Observe que o STRIKE_LIGHTNING usa localizações e não afeta entidades, então ele pode ter deslocamentos. 

Você não pode definir um deslocamento para enviar uma mensagem, pois as mensagens são enviadas para os jogadores. No entanto, você pode definir um deslocamento para uma zona que pode então direcionar entidades.

</div>

</details>

</div>

---

## alcance

Define o alcance para escanear jogadores próximos no tipo de alvo `NEARBY_PLAYERS`.

| Valores | Detalhes | Padrão |
| --- | :-: | :-: |
| `range` | Define o alcance, em blocos, para escanear alvos de jogadores. | `20.0` |

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
        sValue: "&2Targeted players within 25 blocks!"
```

Isso envia uma mensagem para jogadores dentro de 25 blocos do chefe quando o chefe quando o chefe morre.

</div>

</details>

</div>

## localização

Define a localização para o tipo de alvo `LOCATION`.

| Valores | Detalhes | Padrão |
| --- | :-: | :-: |
| `location` | Define a localização do mundo que será direcionada. | `none` |

Isso usa o formato `location: worldname,x,y,z,pitch,yaw` para a localização.

**Observe que `same_as_boss` é um marcador válido para o nome do mundo, como `same_as_boss,100,64,100,0,0` seria uma localização válida que direcionaria o mesmo mundo em que o chefe está.**

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

Isso gera um raio na localização x=100, y=64, z=200 de um mundo chamado `myWorld`.

</div>

</details>

</div>

---

## locações

Define as locações para o tipo de alvo `LOCATIONS`.

| Valores | Detalhes | Padrão |
| --- | :-: | :-: |
| `locations` | Define a lista de localizações do mundo que serão direcionadas. | `none` |

Isso usa o formato `worldname,x,y,z,pitch,yaw` para a localização.

**Observe que `same_as_boss` é um marcador válido para o nome do mundo, como `same_as_boss,100,64,100,0,0` seria uma localização válida que direcionaria o mesmo mundo em que o chefe está.**

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

Isso gera um raio na localização x=100, y=64, z=200 de um mundo chamado `myWorld` e outro raio no mesmo mundo que o chefe na localização x=-100, y=12 e z=130.

</div>

</details>

</div>

---

## Direcionando zonas

[Zonas]($language$/elitemobs/elitescript_zones.md) têm vários alvos, e é importante entender como elas funcionam para usar o Script Elite em todo o seu potencial.

As zonas funcionam em duas partes:

### Parte 1 - Definindo para onde a zona vai

As zonas precisam saber onde devem estar e, para fazer isso, você usa o sistema de alvo da mesma forma que faria para qualquer outro efeito baseado em localização, como um raio.

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

Isso gera uma zona cilíndrica ao redor do chefe. Observe que nenhuma ação é definida neste exemplo ainda, isso é coberto abaixo.

Algumas zonas, como [STATIC_RAY]($language$/elitemobs/elitescript_zones.md&section=static_ray), têm dois ou mais alvos. Isso ocorre porque os raios são linhas e as linhas são definidas por dois pontos. Isso é coberto mais extensivamente na página de [zonas]($language$/elitemobs/elitescript_zones.md), mas, fundamentalmente, todas elas funcionam da mesma forma.

</div>

</details>

</div>

### Parte 2 - Direcionando o interior da zona

Agora que a zona sabe onde está, precisamos que a ação saiba que seu alvo é a zona que definimos. É para isso que `targetType: ZONE_FULL` e `targetType:ZONE_BORDER` servem.

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

Usando a mesma zona da primeira parte, agora adicionamos a ação. O alvo desta ação é `ZONE_FULL`, o que significa que estará gerando partículas dentro de toda a zona.

Observe que ZONE_BORDER não está disponível para todas as zonas. Mais informações na página de [zonas de script]($language$/elitemobs/elitescript_zones.md).

</div>

</details>

</div>

### Rastreamento de Zona

Define se a zona se moverá com o alvo, como se a zona se moverá quando o chefe se mover para `targetType: SELF`.

| Valores | Detalhes | Padrão |
| --- | :-: | :-: |
| `track` | Define se a zona se moverá com o alvo. | `true` |

Observe que as zonas animáveis não podem ser rastreadas. [Mais informações aqui.]($language$/elitemobs/elitescript_zones.md&section=animatable)

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

Usando o mesmo exemplo da parte 1 e da parte 2, a zona agora está definida para não rastrear. Isso significa que a zona será gerada na localização do chefe, mas mesmo que o chefe continue se movendo para longe, a zona permanecerá onde foi gerada.

Por fim, observe que se uma zona estiver definida para não rastrear, ela registrará sua localização no momento em que o script é chamado.

Como exemplo, você deseja ter uma fase de aviso e uma fase de dano para seu script, você precisará garantir que todas as ações sejam executadas no início e colocar um tempo de espera em todas as ações relacionadas ao dano que você deseja executar depois individualmente. Você não deve atrasar um script inteiro que você chama por meio do `RUN_SCRIPT` por motivos técnicos.

O seguinte é um exemplo correto de um poder com uma fase de aviso e uma fase de dano retirado do Santuário do Palácio de Gelo.

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

Este script faz muitas coisas, mas está separado em dois scripts distintos: `VisualCylinder` e `DamageCylinder`.

VisualCylinder é executado primeiro e tem a ação `RUN_SCRIPT` que também executa imediatamente o `DamageCylinder` ao mesmo tempo que o `VisualCylinder` está sendo executado.

No entanto, cada ação em `DamageCylinder` está definida para aguardar 60 ticks, ou 3 segundos.

Isso significa que o chefe tem uma fase de aviso de 3 segundos, e depois faz uma fase de dano, e mesmo que as zonas estejam definidas para não rastrear a zona de aviso e a zona de dano estarão na mesma localização.

### Propriedades de alvo específicas da zona

A zona tem as seguintes propriedades específicas:

#### coverage

Define a porcentagem da zona que será realmente usada para a ação. Funciona apenas para alvos de localização (não funciona ao direcionar jogadores ou outras entidades).

| Valores | Detalhes | Padrão |
| --- | :-: | :-: |
| `coverage` | Define a porcentagem da zona que será coberta. | `1.0` |

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

### Herança de alvos

Quando um script executa outro script (ou "chama" aquele script), é possível passar informações de zona e alvo do primeiro script para o segundo.

**Exemplos de uso**

1. **Executores de script aprimorados**

Os executores de script são scripts cuja única função é executar muitos outros scripts. Eles são usados para facilitar o gerenciamento de scripts, especialmente ao lidar com vários scripts que exigem tempo preciso.

Com a herança de alvos, vários scripts podem usar a mesma zona ou alvo, reduzindo potencialmente centenas de linhas de scripting repetitivo.

2. **Filtragem de alvo Matryoshka / Filtragem de alvo de boneca russa aninhada**

As condições de filtragem podem ser aplicadas aos alvos em uma ação. Ao passar os alvos para um script diferente com filtros diferentes, torna-se possível organizar as condições e aplicar efeitos diferentes ao mesmo conjunto de alvos com base em critérios cada vez mais específicos.

Como exemplo, é possível criar uma zona que procura jogadores e fazer uma ação que verifica se todos os jogadores na zona têm uma tag específica. Os alvos válidos podem então ser passados para outro script onde outra ação pode então executar uma verificação aleatória de condição e aplicar um efeito com base nessa chance. Os alvos podem então ser passados para outro script, onde outra condição pode fazer uma verificação para ver se os alvos ainda estão vivos e fazer algum comportamento especial se estiverem mortos.

Esses são, é claro, apenas exemplos. É um sistema altamente flexível.

3. **Zonas complexas**

Por fim, é possível organizar alvos para criar zonas complexas, opcionalmente usando condições se necessário, e é até possível criar zonas semi-aleatórias usando as condições do script e a capacidade de executar apenas um dos scripts listados a partir das ações do script.

**Observação:** Para esta seção, **"script pai"** se refere ao script que executa o **"script herdeiro"**, que é o script que usará os alvos herdados.

Ao usar a herança de alvo, é importante observar cuidadosamente o _script pai_ para garantir que os dados corretos sejam repassados.

#### INHERIT_SCRIPT_TARGET

Ao usar `INHERIT_SCRIPT_TARGET`, os alvos do _script pai_ serão repassados para o script herdeiro. Isso tem algumas ressalvas:

- Ao passar **alvos de entidade**, é possível executar ações que exigem localizações (como gerar partículas), pois a localização das entidades será usada. É claro que também é possível usar ações que exigem entidades.

- Ao passar **alvos de localização**, só é possível usar localizações. **A única maneira de obter uma entidade de uma localização é criando uma zona naquela localização e procurando entidades.** Portanto, embora não seja impossível passar uma localização e depois obter entidades, isso exigirá um pouco de trabalho extra.


#### Herdando zonas

Ao usar `INHERIT_SCRIPT_ZONE_FULL` ou `INHERIT_SCRIPT_ZONE_BORDER`, é fundamental que o _script pai_ defina uma zona, ou então o _script herdeiro_ não poderá ser executado corretamente.

Além disso, as zonas podem opcionalmente ser [rastreadas]($language$/elitemobs/elitescript_targets.md&section=zone-track). Isso também será repassado junto com a zona.

- Uma zona **não rastreada** sempre criará uma zona onde definida pelo _script herdeiro_. Isso significa que as configurações da zona serão usadas pelas ações nos _scripts herdeiros_ para criar zonas novas a cada vez que uma ação é executada, e a localização dessas zonas será definida pela ação.

- Uma zona **rastreada** pode passar a mesma localização exata da zona para todos os _scripts herdeiros_ se o _script pai_ estiver definido para direcionar `ZONE_FULL` ou `ZONE_BORDER`. Isso significa que todos os scripts estarão atuando nas mesmas localizações.

