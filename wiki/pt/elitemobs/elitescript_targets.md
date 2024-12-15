# Alvos de Script Elite

Os alvos são uma parte central dos Scripts Elite e são necessários para que as Ações e Zonas funcionem.

## Tipos de Alvo

Os tipos de alvo definem quais entidades ou locais são alvo de um script.

| Tipo de Alvo                  |                                    Detalhes                                     |                                                                                                   Especial                                                                                                   |
|------------------------------|:------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `JOGADORES_PRÓXIMOS`             | Jogadores em [alcance]($language$/elitemobs/elitescript_targets.md&section=range) |                                                                Requer [`alcance`]($language$/elitemobs/elitescript_targets.md&section=range)                                                                |
| `MOBS_PRÓXIMOS`                |      Mobs em [alcance]($language$/elitemobs/elitescript_targets.md&section=range)        |                                                                Requer [`alcance`]($language$/elitemobs/elitescript_targets.md&section=range)                                                                |
| `JOGADORES_MUNDIAIS`              |                                Jogadores no mundo                                |                                                                                                      ❌                                                                                                      |
| `TODOS_JOGADORES`                |                             Jogadores no servidor                              |                                                                                                      ❌                                                                                                      |
| `ALVO_DIRETO`              |                                Jogadores no evento                                |                                                                   [Requer evento compatível]($language$/elitemobs/elitescript_events.md)                                                                   |
| `EU_PRÓPRIO`                       |                               Elite a usar poder                                |                                                                                                      ❌                                                                                                      |
| `PONTO_DE_INÍCIO_PRÓPRIO`                 |                      Alvos no local de início de um chefe                      |                                                                                                      ❌                                                                                                      |
| `LOCALIZAÇÃO`                   |                               Localização específica                                |                                                             Requer [`localização`]($language$/elitemobs/elitescript_targets.md&section=location)                                                             |
| `LOCALIZAÇÕES`                  |                           Várias localizações específicas                           |                                                            Requer [`localizações`]($language$/elitemobs/elitescript_targets.md&section=locations)                                                            |
| `ZONA_COMPLETA`                  |                             Alvos dentro da zona                             |                                                                        Requer [`Zona`]($language$/elitemobs/elitescript_zones.md)                                                                         |
| `FRONTEIRA_ZONA`                |                             Alvos na fronteira da zona                             |                                                                        Requer [`Zona`]($language$/elitemobs/elitescript_zones.md)                                                                         |
| `ALVO_AÇÃO`              |                      Herda os alvos de uma ação.                      |                 **Só pode ser usado para [condições] de ação ($language$/elitemobs/elitescript_conditions.md) e [Vetores Relativos] ($language$/elitemobs/elitescript_relative_vectors.md)!!**                 |
| `LOCALIZAÇÃO_DE_ATERRAMENTO`           |                     Alvos no local onde um bloco caiu.                      |                                        **Só pode ser usado para a ação [`GERAR_BLOCO_A_CAIR`] ($language$/elitemobs/elitescript_actions.md&section=spawn_falling_block)!**                                         |
| `HERDAR_ALVO_SCRIPT`      |           Herda o alvo do script que executa este script            |                                                                          Só pode ser executado se o script foi chamado por outro script!                                                                           |
| `HERDAR_ZONA_SCRIPT_COMPLETA`   |     Alvos dentro da zona herdada do script que executa este script     |                                                 Requer [`Zona`]($language$/elitemobs/elitescript_zones.md) **no script que chama este script!**                                                  |
| `HERDAR_ZONA_SCRIPT_FRONTEIRA` |     Alvos na fronteira da zona herdada do script que executa este script     |                                                 Requer [`Zona`]($language$/elitemobs/elitescript_zones.md) **no script que chama este script!**                                                  |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDeathEvent
    Ações:
      - action: MENSAGEM
        Alvo:
          targetType: TODOS_JOGADORES
        sValue: "&2Olá Mundo!"
```

Isto envia uma mensagem ao alvo. Uma vez que o alvo está definido como `TODOS_JOGADORES`, irá enviar essa mensagem a todos os jogadores online.

</div>

</details>

</div>

---

## Atributos Partilhados

As seguintes definições podem ser aplicadas a todos os alvos.

| Valores | Detalhes | Especial |
| --- | :-: | :-: |
| `deslocamento` | Define o deslocamento para a localização do alvo. | Não pode ter como alvo entidades! |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDeathEvent
    Ações
    - action: RAIO_ATINGIR
      Alvo:
        targetType: EU_PRÓPRIO
        deslocamento: "0,2,0"
```

Isto lança um raio 2 blocos acima do chefe. Note que o RAIO_ATINGIR usa localizações e não afeta entidades, por isso pode ter deslocamentos.

Não pode definir um deslocamento para enviar uma mensagem, uma vez que as mensagens são enviadas aos jogadores. No entanto, pode definir um deslocamento para uma zona que pode então ter entidades como alvo.

</div>

</details>

</div>

---

## alcance

Define o alcance para procurar jogadores próximos no tipo de alvo `JOGADORES_PRÓXIMOS`.

| Valores | Detalhes | Predefinição |
| --- | :-: | :-: |
| `alcance` | Define o alcance, em blocos, para procurar alvos de jogadores. | `20.0` |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDeathEvent
    Ações:
      - action: MENSAGEM
        Alvo:
          targetType: JOGADORES_PRÓXIMOS
          alcance: 25.0
        sValue: "&2Jogadores com alvo dentro de 25 blocos!"
```

Isto envia uma mensagem aos jogadores num raio de 25 blocos do chefe quando o chefe morre.

</div>

</details>

</div>

## localização

Define a localização para o tipo de alvo `LOCALIZAÇÃO`.

| Valores | Detalhes | Predefinição |
| --- | :-: | :-: |
| `localização` | Define a localização mundial que será o alvo. | `nenhum` |

Isto usa o formato `localização: nome_mundo,x,y,z,pitch,yaw` para a localização.

**Note que `igual_ao_chefe` é um marcador de posição válido para o nome do mundo, tal como `igual_ao_chefe,100,64,100,0,0` seria uma localização válida que teria como alvo o mesmo mundo onde o chefe está.**

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDeathEvent
    Ações
    - action: RAIO_ATINGIR
      Alvo:
        targetType: LOCALIZAÇÃO
        localização: "meuMundo,100,64,200,0,0"
```

Isto gera um raio na localização x=100, y=64, z=200 de um mundo chamado `meuMundo`.

</div>

</details>

</div>

---

## localizações

Define as localizações para o tipo de alvo `LOCALIZAÇÕES`.

| Valores | Detalhes | Predefinição |
| --- | :-: | :-: |
| `localizações` | Define a lista de localizações mundiais que serão o alvo. | `nenhum` |

Isto usa o formato `nome_mundo,x,y,z,pitch,yaw` para a localização.

**Note que `igual_ao_chefe` é um marcador de posição válido para o nome do mundo, tal como `igual_ao_chefe,100,64,100,0,0` seria uma localização válida que teria como alvo o mesmo mundo onde o chefe está.**

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDeathEvent
    Ações
    - action: RAIO_ATINGIR
      Alvo:
        targetType: LOCALIZAÇÕES
        localizações:
        - "meuMundo,100,64,200,0,0"
        - "igual_ao_chefe,-100,12,130,0,0"
```

Isto gera um raio na localização x=100, y=64, z=200 de um mundo chamado `meuMundo` e outro raio no mesmo mundo que o chefe na localização x=-100, y=12 e z=130.

</div>

</details>

</div>

---

## Zonas de alvo

[Zonas]($language$/elitemobs/elitescript_zones.md) têm múltiplos alvos, e é importante perceber como funcionam para usar o Script Elite em todo o seu potencial.

As zonas funcionam em duas partes:

### Parte 1 - Definir para onde a zona vai

As zonas precisam de saber para onde se devem dirigir, e para o fazer, usa o sistema de alvos da mesma forma que faria para qualquer outro efeito baseado em localização, como um raio.

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  CilindroVisual:
    Eventos:
    - EliteMobDamagedEvent
    Zona:
      raio: 10.0
      forma: CILINDRO
      altura: 1
      filtro: JOGADOR
      raioFronteira: 5.0
      Alvo:
        targetType: EU_PRÓPRIO
```

Isto gera uma zona cilíndrica em redor do chefe. Note que nenhuma ação está definida neste exemplo, isto é abordado abaixo.

Algumas zonas, como [RAIO_ESTÁTICO]($language$/elitemobs/elitescript_zones.md&section=static_ray), têm dois ou mais alvos. Isto porque os raios são linhas, e as linhas são definidas por dois pontos. Isto é abordado mais extensivamente na [página de zonas]($language$/elitemobs/elitescript_zones.md), mas fundamentalmente todos funcionam da mesma maneira.

</div>

</details>

</div>

### Parte 2 - Ter como alvo o interior da zona

Agora que a zona sabe onde está, precisamos que a ação saiba que o seu alvo é a zona que definimos. É para isso que serve `targetType: ZONA_COMPLETA` e `targetType:FRONTEIRA_ZONA`.

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  CilindroVisual:
    Eventos:
    - EliteMobDamagedEvent
    Zona:
      raio: 10.0
      forma: CILINDRO
      altura: 1
      filtro: JOGADOR
      raioFronteira: 5.0
      Alvo:
        targetType: EU_PRÓPRIO
    Ações:
    - action: GERAR_PARTÍCULA
      vezes: 12
      repetirCada: 5
      partículas:
      - partícula: FUMO_NORMAL
      Alvo:
        targetType: ZONA_COMPLETA
```

Usando a mesma zona da primeira parte, adicionamos agora a ação. O alvo para esta ação é `ZONA_COMPLETA`, o que significa que irá gerar partículas dentro de toda a zona.

Note que FRONTEIRA_ZONA não está disponível para todas as zonas. Mais informações sobre isso na página [zonas de script]($language$/elitemobs/elitescript_zones.md).

</div>

</details>

</div>

### Rastreio da Zona

Define se a zona se moverá com o alvo, como se a zona se moverá quando o chefe se move para `targetType: EU_PRÓPRIO`.

| Valores | Detalhes | Predefinição |
| --- | :-: | :-: |
| `rastrear` | Define se a zona se moverá com o alvo. | `verdadeiro` |

Note que as zonas animáveis não podem rastrear. [Mais informações sobre isso aqui.]($language$/elitemobs/elitescript_zones.md&section=animatable)

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  CilindroVisual:
    Eventos:
    - EliteMobDamagedEvent
    Zona:
      raio: 10.0
      forma: CILINDRO
      altura: 1
      filtro: JOGADOR
      raioFronteira: 5.0
      Alvo:
        targetType: EU_PRÓPRIO
    Ações:
    - action: GERAR_PARTÍCULA
      vezes: 12
      repetirCada: 5
      partículas:
      - partícula: FUMO_NORMAL
      Alvo:
        targetType: ZONA_COMPLETA
        rastrear: falso
```

</div>

</details>

</div>

Usando o mesmo exemplo da parte 1 e da parte 2, a zona está agora definida para não rastrear. Isto significa que a zona irá aparecer na localização do chefe, mas mesmo que o chefe continue a afastar-se, a zona permanecerá onde surgiu pela primeira vez.

Finalmente, note que se uma zona estiver definida para não rastrear, ela registará a sua localização no momento em que o script é chamado.

Como exemplo, quer ter uma fase de aviso e uma fase de dano para o seu script, terá de se certificar que executa todas as ações no início e coloca um tempo de espera em todas as ações relacionadas com o dano que quer executar mais tarde individualmente. Não deve atrasar um script inteiro que chama através de `EXECUTAR_SCRIPT` por razões técnicas.

O seguinte é um exemplo correto de um poder com uma fase de aviso e uma fase de dano retirado do Santuário do Palácio de Gelo.

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  CilindroVisual:
    Eventos:
    - EliteMobDamagedEvent
    Zona:
      raio: 10.0
      forma: CILINDRO
      altura: 1
      filtro: JOGADOR
      raioFronteira: 5.0
      Alvo:
        targetType: EU_PRÓPRIO
    Ações:
    - action: GERAR_PARTÍCULA
      vezes: 12
      repetirCada: 5
      partículas:
      - partícula: FUMO_NORMAL
      Alvo:
        targetType: ZONA_COMPLETA
        rastrear: falso
    - action: GERAR_PARTÍCULA
      esperar: 60
      vezes: 13
      repetirCada: 3
      partículas:
      - partícula: CHAMAS
        quantidade: 0
        x: 0
        y: 1
        z: 0
        velocidade: 0.2
      - partícula: CHAMAS
        quantidade: 0
        x: 0.5
        y: 1
        z: 0.5
        velocidade: 0.2
      - partícula: CHAMAS
        quantidade: 0
        x: 0
        y: 1
        z: 0.5
        velocidade: 0.2
      - partícula: CHAMAS
        quantidade: 0
        x: 0.5
        y: 1
        z: 0
        velocidade: 0.2
      - partícula: CHAMAS
        quantidade: 0
        x: -0.5
        y: 1
        z: -0.5
        velocidade: 0.2
      - partícula: CHAMAS
        quantidade: 0
        x: -0.5
        y: 1
        z: 0
        velocidade: 0.2
      - partícula: CHAMAS
        quantidade: 0
        x: 0
        y: 1
        z: -0.5
        velocidade: 0.2
      - partícula: CHAMAS
        quantidade: 0
        x: -0.5
        y: 1
        z: 0.5
        velocidade: 0.2
      - partícula: CHAMAS
        quantidade: 0
        x: 0.5
        y: 1
        z: -0.5
        velocidade: 0.2
      Alvo:
        targetType: ZONA_COMPLETA
        rastrear: falso
    - action: EXECUTAR_SCRIPT
      scripts:
      - CilindroDeDano
    - action: REPRODUZIR_ANIMAÇÃO
      sValue: zona_de_fogo
      Alvo:
        targetType: EU_PRÓPRIO
    - action: DEFINIR_IA_MOB
      duração: 100
      bValue: falso
      Alvo:
        targetType: EU_PRÓPRIO
    TemposDeRecarga:
      local: 1200
      global: 300
  CilindroDeDano:
    Zona:
      raio: 10.0
      forma: CILINDRO
      altura: 10
      filtro: JOGADOR
      raioFronteira: 5.0
      Alvo:
        targetType: EU_PRÓPRIO
        deslocamento: 0,-1,0
    Ações:
    - action: DANO
      esperar: 60
      repetirCada: 10
      vezes: 4
      multiplicador: 4
      Alvo:
        targetType: ZONA_COMPLETA
        rastrear: falso
    - action: INCENDIAR
      esperar: 60
      duração: 80
      Alvo:
        targetType: ZONA_COMPLETA
        rastrear: falso
```

</div>

</details>

</div>

Este script faz muitas coisas, mas está separado em dois scripts claros: `CilindroVisual` e `CilindroDeDano`.

O CilindroVisual é executado primeiro e tem a ação `EXECUTAR_SCRIPT` que também executa imediatamente o `CilindroDeDano` ao mesmo tempo que o `CilindroVisual` está a ser executado.

No entanto, cada ação em `CilindroDeDano` está definida para esperar 60 ticks, ou 3 segundos.

Isto significa que o chefe tem uma fase de aviso de 3 segundos e depois faz uma fase de dano, e mesmo que as zonas estejam definidas para não rastrear, a zona de aviso e a zona de dano estarão no mesmo local.

### Propriedades de alvo específicas da zona

As zonas têm as seguintes propriedades específicas:

#### cobertura

Define a percentagem da zona que será realmente utilizada para a ação. Só funciona para alvos de localização (não funciona quando o alvo são jogadores ou outras entidades).

| Valores | Detalhes | Predefinição |
| --- | :-: | :-: |
| `cobertura` | Define a percentagem da zona que será coberta. | `1.0` |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  CilindroVisual:
    Eventos:
    - EliteMobDamagedEvent
    Zona:
      raio: 10.0
      forma: CILINDRO
      altura: 1
      filtro: JOGADOR
      raioFronteira: 5.0
      Alvo:
        targetType: EU_PRÓPRIO
    Ações:
    - action: GERAR_PARTÍCULA
      vezes: 12
      repetirCada: 5
      partículas:
      - partícula: FUMO_NORMAL
      Alvo:
        targetType: ZONA_COMPLETA
        rastrear: falso
        cobertura: 0.5
```

Neste caso, apenas 50% da zona será coberta por partículas.

</div>

</details>

</div>

### Herdando alvos

Quando um script executa outro script (ou "chama" esse script), é possível passar informações de zona e alvo do primeiro script para o segundo.

**Exemplos de utilização**

1.  **Executores de scripts melhorados**

Os executores de scripts são scripts cuja única função é executar muitos outros scripts. São utilizados para facilitar a gestão de scripts, especialmente ao lidar com vários scripts que exigem um tempo preciso.

Com a herança de alvos, vários scripts podem usar a mesma zona ou alvo, reduzindo potencialmente centenas de linhas de scripting repetitivo.

2.  **Filtragem de alvos Matryoshka / filtragem de alvos de boneca russa**

As condições de filtragem podem ser aplicadas aos alvos numa ação. Ao passar os alvos para um script diferente com filtros diferentes, torna-se possível sobrepor as condições e aplicar efeitos diferentes ao mesmo conjunto de alvos com base em critérios cada vez mais específicos.

Como exemplo, é possível criar uma zona que procure jogadores e fazer uma ação que verifique se todos os jogadores na zona têm uma tag específica. Os alvos válidos podem então ser passados para outro script onde outra ação pode então executar uma condição de verificação aleatória e aplicar um efeito com base nessa hipótese. Os alvos podem então ser passados para outro script onde outra condição pode fazer uma verificação para ver se os alvos ainda estão vivos e fazer algum comportamento especial se estiverem mortos.

Estes são, claro, apenas exemplos. É um sistema altamente flexível.

3.  **Zonas complexas**

Finalmente, é possível sobrepor alvos para criar zonas complexas, opcionalmente usando condições, se necessário, e é mesmo possível criar zonas semi-aleatorizadas usando as condições do script e a capacidade de executar apenas um dos scripts listados a partir das ações do script.

**Nota:** Para esta secção, **"script principal"** refere-se ao script que executa o **"script herdeiro"**, que é o script que irá utilizar os alvos herdados.
Ao usar a herança de alvos, é importante observar atentamente o _script principal_ para garantir que os dados corretos estão a ser transmitidos.

#### HERDAR_ALVO_SCRIPT

Ao usar `HERDAR_ALVO_SCRIPT`, os alvos do _script principal_ serão transmitidos para o script herdeiro. Isso tem algumas ressalvas:

- Ao passar **alvos de entidades**, é possível executar ações que requerem localizações (como gerar partículas), pois a localização das entidades será usada. É, claro, também possível usar ações que requerem entidades.

- Ao passar **alvos de localização**, só é possível usar localizações. **A única forma de obter uma entidade a partir de uma localização é criar uma zona nessa localização e procurar entidades.** Portanto, embora não seja impossível passar uma localização e, em seguida, obter entidades, isso exigirá um pouco de trabalho extra.

#### Herdando zonas

Ao usar `HERDAR_ZONA_SCRIPT_COMPLETA` ou `HERDAR_ZONA_SCRIPT_FRONTEIRA`, é imperativo que o _script principal_ defina uma zona, caso contrário, o _script herdeiro_ não poderá ser executado corretamente.

Além disso, as zonas podem ser [rastreadas]($language$/elitemobs/elitescript_targets.md&section=zone-track) opcionalmente. Isso também será transmitido juntamente com a zona.

- Uma zona **não rastreada** sempre criará uma zona onde definida pelo _script herdeiro_. Isso significa que as definições de zona serão usadas pelas ações nos _scripts herdeiros_ para criar novas zonas sempre que uma ação é executada, e a localização dessas zonas será definida pela ação.

- Uma zona **rastreada** pode passar a mesma localização exata da zona para todos os _scripts herdeiros_ se o _script principal_ estiver definido para ter como alvo `ZONA_COMPLETA` ou `FRONTEIRA_ZONA`. Isso significa que todos os scripts estarão a agir nas mesmas localizações.
