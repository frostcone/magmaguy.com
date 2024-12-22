# Condições do Script Elite

As condições permitem que os scripters façam com que os scripts e/ou ações **não** sejam executados com base em
condições específicas.

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDamagedByPlayerEvent
    Condições:
      isAlive: true
      Alvo:
        targetType: SELF
    Ações:
    - action: PLACE_BLOCK
      Alvo:
        targetType: DIRECT_TARGET
      duration: 20
      material: DIRT
      offset: 0,3,0
      Condições:
        locationIsAir: true
        Alvo:
          targetType: ACTION_TARGET
    Cooldowns:
      local: 60
      global: 20
```

Neste exemplo, o script `Exemplo` só será executado se o elite ainda estiver vivo e só colocará um bloco de terra 3 blocos acima da localização do elite se esse bloco for um bloco de ar. Ações individuais podem ter condições individuais.

</div>

</details>

</div>

## Alvo

As condições usam o sistema de [Alvos]($language$/elitemobs/elitescript_targets.md) para definir qual entidade ou
localização está sujeita às condições. Isto significa que pode associar condições ao boss ou a jogadores ou a qualquer
outra coisa que possa definir como alvo.

---

## Tipo de Condição

| Chave | Detalhes | Valores |
| --- | :-: | :-: |
| `conditionType` | Define o tipo de condição | `BLOCKING` / `FILTERING` |

Existem dois tipos de condições: `BLOCKING` e `FILTERING`. As condições `BLOCKING` fazem com que scripts ou ações parem
de ser executados. As condições `FILTERING` fazem com que as ações ignorem alvos que não cumpram a condição. Isto
significa que, se pretender ter como alvo apenas blocos que não sejam ar, vai querer uma condição `FILTERING`, mas se
pretender impedir uma ação se um jogador estiver morto, vai querer uma condição `BLOCKING`.

**As condições fora das ações são sempre `BLOCKING`**. As condições dentro das ações podem ser `BLOCKING`
ou `FILTERING`.

_**Nota: se o alvo for `SELF` (o boss) e a verificação da condição for `isAlive`, a verificação é sempre `BLOCKING`!**_
Isto pode ser colocado dentro de uma condição `FILTERING` e ainda assim fará com que esta parte específica se comporte
como `BLOCKING`.

As condições dentro das ações são definidas como `FILTERING` por padrão.

---

## Condições baseadas na localização

### locationIsAir

Define a condição para verificar se a localização do alvo é ar.

| Chave | Detalhes |       Valores        |
| --- | :-: |:-------------------:|
| `locationIsAir` | Define para verificar se a localização é um bloco de ar (ou o oposto). | [Boolean](#boolean) |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Condições:
      locationIsAir: true
      Alvo:
        targetType: SELF
        offset: "0,3,0"
```

Verifica se a localização 2 blocos acima de onde o boss está é ar.

</div>

</details>

</div>

---

### isOnFloor

Verifica se a localização está no chão. Isto significa que o bloco na localização não é sólido, mas o bloco abaixo é
sólido.

| Chave       |                                    Detalhes                                     |       Valores       |
|-------------|:-------------------------------------------------------------------------------:|:-------------------:|
| `isOnFloor` | Define para verificar se a localização é uma localização no chão (ou o oposto). | [Boolean](#boolean) |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Condições:
      isOnFloor: true
      Alvo:
        targetType: SELF
```

</div>

</details>

</div>

---

### isStandingOnMaterial

Verifica se a localização por baixo do alvo corresponde a um tipo de material.

| Chave                  |                        Detalhes                         |        Valores        |
|------------------------|:-------------------------------------------------------:|:---------------------:|
| `isStandingOnMaterial` | Define qual o tipo de material que deve ser verificado. | [Material](#material) |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Condições:
      isStandingOnMaterial: BIRCH_WOOD
      Alvo:
        targetType: SELF
```

Só será executado se o boss estiver em cima de BIRCH_WOOD.

</div>

</details>

</div>

## Condições baseadas na entidade

### isAlive

Define a condição para verificar se a entidade alvo da condição está viva.

| Chave | Detalhes | Valores |
| --- | :-: | :-: |
| `isAlive` | Define para verificar se a entidade está viva (ou morta). | [Boolean](#boolean) |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Condições:
      isAlive: false
      Alvo:
        targetType: SELF
```

Só será executado se o boss estiver morto.

</div>

</details>

</div>

---

### hasTags

Verifica se a entidade alvo tem etiquetas específicas. Os scripters podem atribuir e remover qualquer etiqueta através
de ações e usá-las como condições para um comportamento posterior. As etiquetas são apenas strings (palavras) que pode
atribuir a um boss.

| Chave     |                            Detalhes                             |           Valores           |
|-----------|:---------------------------------------------------------------:|:---------------------------:|
| `hasTags` | Define para verificar se a entidade tem uma lista de etiquetas. | [String List](#string_list) |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Condições:
      hasTags:
      - isCool
      - hasANiceBeard
      Alvo:
        targetType: SELF
```

Só será executado se o boss tiver as etiquetas "isCool" e "hasANiceBeard".

</div>

</details>

</div>

---

### doesNotHaveTags

Igual a `hasTags`, mas verifica se o boss não tem estes valores.

| Chave             |                              Detalhes                               |           Valores           |
|-------------------|:-------------------------------------------------------------------:|:---------------------------:|
| `doesNotHaveTags` | Define para verificar se a entidade não tem uma lista de etiquetas. | [String List](#string_list) |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Condições:
      doesNotHaveTags:
      - isStinky
      - isSus
      Alvo:
        targetType: SELF
```

Só será executado se o boss não tiver as etiquetas "isStinky" e "isSus".

</div>

</details>

</div>

## Outras condições

### randomChance

Dá à condição uma probabilidade aleatória de ser válida.

| Chave          |                Detalhes                 |        Valores         |
|----------------|:---------------------------------------:|:----------------------:|
| `randomChance` | Probabilidade de a condição ser válida. | Número entre 0.0 e 1.0 |

Note que esta condição é especial, pois não requer um alvo.

## Filtrar NEARBY com etiquetas

Para filtrar `NEARBY_MOBS` ou `NEARBY_PLAYERS` com base em etiquetas específicas, utilize `ACTION_TARGET` como alvo da
condição (se a condição for aplicada a uma ação e não ao próprio script). Isto garante que o script filtra corretamente
apenas os mobs/jogadores com as etiquetas especificadas.

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Ações:
    - action: SET_MOB_AI
      Alvo:
        targetType: NEARBY_MOBS
        range: 40
      bValue: false
      Condições:
        hasTags:
          - TurnOff
        Alvo:
          targetType: ACTION_TARGET
```

Este script irá procurar quaisquer mobs nas proximidades com a etiqueta `TurnOff` e, se tiverem a etiqueta, irá então
desativar a sua IA.

</div>

</details>

</div>
