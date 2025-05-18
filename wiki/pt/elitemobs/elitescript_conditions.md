```markdown
# Condições de Elite Script

As condições permitem que os scripters façam com que scripts e/ou ações **não** sejam executados com base em condições específicas.

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Conditions:
      isAlive: true
      conditionType: BLOCKING
      Target:
        targetType: SELF
    Actions:
    - action: PLACE_BLOCK
      Target:
        targetType: DIRECT_TARGET
      duration: 20
      material: DIRT
      offset: 0,3,0
      Conditions:
        locationIsAir: true
        conditionType: BLOCKING
        Target:
          targetType: ACTION_TARGET
    Cooldowns:
      local: 60
      global: 20
```

Neste exemplo, o script `Example` só será executado se o elite ainda estiver vivo, e só colocará um bloco de terra 3 blocos acima da localização do elite se esse bloco for um bloco de ar. Ações individuais podem ter condições individuais.

</div>

</details>

</div>

## Alvo

As condições usam o sistema [Alvos](pt/elitemobs/elitescript_targets.md) para definir qual entidade ou localização está sujeita às condições. Isto significa que pode associar condições ao boss, a jogadores ou a qualquer outra coisa que possa ser alvo.

---

## Tipo de Condição

| Chave | Detalhes | Valores |
| --- | :-: | :-: |
| `conditionType` | Define o tipo de condição | `BLOCKING` / `FILTERING` |

Existem dois tipos de condição: `BLOCKING` e `FILTERING`. Condições `BLOCKING` fazem com que scripts ou ações parem de ser executados. Condições `FILTERING` fazem com que as ações ignorem alvos que não satisfazem a condição. Isto significa que se quiser apenas atingir blocos que não são ar, vai querer uma condição `FILTERING`, mas se quiser parar uma ação se um jogador estiver morto, vai querer uma condição `BLOCKING`.

**Condições fora das ações são sempre `BLOCKING`**. Condições dentro das ações podem ser `BLOCKING` ou `FILTERING`.

_**Nota: se o alvo for `SELF` (o boss) e a verificação da condição for `isAlive`, a verificação é sempre `BLOCKING`!**_ Isto pode ser colocado dentro de uma condição `FILTERING` e ainda fará com que esta parte específica se comporte como `BLOCKING`.

As condições dentro das ações são definidas como `FILTERING` por padrão.

---

## Posicionamento do Bloco de Condição

Pode colocar ou aninhar blocos de condição de duas formas:

1. **Sob ações individuais** – A condição aplicar-se-á apenas a uma ação específica. Se a condição for satisfeita, a ação é executada; caso contrário, não é.

2. **Sob o script inteiro** – A condição aplica-se a todas as ações dentro do script. Se a condição não for satisfeita, nenhuma das ações será executada.

Abaixo estão exemplos que demonstram como aninhar blocos de condição tanto para ações individuais quanto para o script inteiro.

**Sob ações individuais:**

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MESSAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&2Hello World!"
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        locationIsAir: true
        Target:
          targetType: SELF
          offset: "0,3,0"
```

Verifica se a localização 2 blocos acima de onde o boss está é ar e, se for, executa a ação SET_WEATHER quando o mob é atingido. Caso contrário, bloqueia a ação SET_WEATHER. Mas o boss sempre executará a ação MESSAGE quando atingido, pois nenhuma condição está a ser aplicada a ela.

</div>

</details>

</div>

**Sob o script inteiro:**

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MESSAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&2Hello World!"
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
    Conditions:
      conditionType: BLOCKING
      locationIsAir: true
      Target:
        targetType: SELF
        offset: "0,3,0"
```

Se o bloco localizado dois espaços acima de onde o boss está for ar, então permite que todos os scripts sejam executados quando o mob é atingido. Caso contrário, bloqueia a execução do script inteiro, incluindo as ações SET_WEATHER e MESSAGE.

</div>

</details>

</div>

---

## Condições baseadas em localização

### locationIsAir

Define a condição para ser se a localização do alvo é ar.

| Chave | Detalhes | Valores |
| --- | :-: |:-------------------:|
| `locationIsAir` | Define para verificar se a localização é um bloco de ar (ou o oposto). | [Booleano](#boolean) |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        locationIsAir: true
        Target:
          targetType: SELF
          offset: "0,3,0"
```

Verifica se a localização 2 blocos acima de onde o boss está é ar e, se for, não bloqueia a execução do script de clima quando o mob é atingido. Caso contrário, bloqueia a ação.

</div>

</details>

</div>

---

### isOnFloor

Verifica se a localização está no chão. Isto significa que o bloco na localização não é sólido, mas o bloco abaixo dele é sólido.

| Chave | Detalhes | Valores |
| --- | :-: | :-: |
| `isOnFloor` | Define para verificar se a localização é uma localização de chão (ou o oposto). | [Booleano](#boolean) |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        isOnFloor: true
        Target:
          targetType: SELF
```

Verifica se o boss está num bloco sólido, se estiver, então executa o script, caso contrário, bloqueia a execução do script.

</div>

</details>

</div>

---

### isStandingOnMaterial

Verifica se a localização debaixo do alvo é de um tipo de material correspondente.

| Chave | Detalhes | Valores |
| --- |:-----------------------------------------------:|:---------------------:|
| `isStandingOnMaterial` | Define qual tipo de material deve ser verificado. | [Material](#material) |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        isStandingOnMaterial: BIRCH_WOOD
        Target:
          targetType: SELF
```

Só será executado se o boss estiver em cima de um bloco BIRCH_WOOD, caso contrário, o script será bloqueado.

</div>

</details>

</div>

## Condições baseadas em entidade

### isAlive

Define a condição para ser se a entidade alvo da condição está viva.

| Chave | Detalhes | Valores |
| --- | :-: | :-: |
| `isAlive` | Define para verificar se a entidade está viva (ou morta). | [Booleano](#boolean) |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        isAlive: true
        Target:
          targetType: SELF
```

Só será executado se o boss estiver atualmente vivo, caso contrário, o script será bloqueado.

</div>

</details>

</div>

---

### hasTags

Verifica se a entidade alvo tem tags específicas. Scripters podem atribuir e remover qualquer tag através de ações e usá-las como condições para comportamento posterior. Tags são apenas strings (palavras) que pode atribuir a um boss.

| Chave | Detalhes | Valores |
| --- | :-: |:---------------------------:|
| `hasTags` | Define para verificar se a entidade tem uma lista de tags. | [Lista de Strings](#string_list) |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        hasTags:
        - isCool
        - hasANiceBeard
        Target:
          targetType: SELF
```

Só será executado se o boss tiver as tags "isCool" e "hasANiceBeard", caso contrário, o script será bloqueado.

</div>

</details>

</div>


---

### doesNotHaveTags

O mesmo que `hasTags`, mas verifica se o boss não tem estes valores.

| Chave | Detalhes | Valores |
| --- | :-: | :-: |
| `doesNotHaveTags` | Define para verificar se a entidade não tem uma lista de tags. | [Lista de Strings](#string_list) |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        doesNotHaveTags:
        - isStinky
        - isSus
        Target:
          targetType: SELF
```

Só será executado se o boss não tiver as tags "isStinky" e "isSus", caso contrário, o script será bloqueado.

</div>

</details>

</div>

## Outras condições

### randomChance

Dá à condição uma chance aleatória de ser válida.

| Chave | Detalhes | Valores |
| --- | :-: | :-: |
| `randomChance` | Chance de a condição ser válida. | Número entre 0.0 e 1.0 |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        randomChance: 0.1
        Target: # Não é obrigatório
          targetType: SELF # Não é obrigatório
```

Isto dará ao script uma chance de 10% de ser executado, caso contrário, o script será bloqueado.

</div>

</details>

</div>

Note que esta condição é especial, pois não requer um alvo.

---

## Filtrar NEARBY com tags

Para filtrar `NEARBY_MOBS` ou `NEARBY_PLAYERS` com base em tags específicas, use `ACTION_TARGET` como alvo da condição (Se a condição for aplicada a uma ação e não ao script em si). Isto garante que o script filtra com precisão apenas os mobs/jogadores com as tags especificadas.

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Actions:
    - action: SET_MOB_AI
      Target:
        targetType: NEARBY_MOBS
        range: 40
      bValue: false
      Conditions:
        conditionType: FILTERING
        hasTags:
          - TurnOff
        Target:
          targetType: ACTION_TARGET
```

Este script procurará por quaisquer mobs próximos com a tag `TurnOff` e, se tiverem a tag, desativará a sua IA.

</div>

</details>

</div>
```