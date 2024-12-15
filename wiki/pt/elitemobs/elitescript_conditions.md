# Condições de Script Elite

As condições permitem que os criadores de scripts façam com que os scripts e/ou ações **não** sejam executados com base em condições específicas.

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
    - ação: PLACE_BLOCK
      Alvo:
        targetType: DIRECT_TARGET
      duração: 20
      material: DIRT
      offset: 0,3,0
      Condições:
        locationIsAir: true
        Alvo:
          targetType: ACTION_TARGET
    TemposDeRecarga:
      local: 60
      global: 20
```

Neste exemplo, o script `Exemplo` só será executado se o elite ainda estiver vivo e só colocará um bloco de terra 3 blocos acima da localização do elite se esse bloco for um bloco de ar. Ações individuais podem ter condições individuais.

</div>

</details>

</div>

## Alvo

As condições usam o sistema de [Alvos]($language$/elitemobs/elitescript_targets.md) para direcionar qual entidade ou localização está sujeita às condições. Isso significa que você pode associar condições ao boss, aos jogadores ou a qualquer outra coisa que você possa direcionar.

---

## Tipo de Condição

| Chave | Detalhes | Valores |
| --- | :-: | :-: |
| `conditionType` | Define o tipo de condição | `BLOCKING` / `FILTERING` |

Existem dois tipos de condição: `BLOCKING` e `FILTERING`. As condições `BLOCKING` fazem com que os scripts ou ações parem de ser executados. As condições `FILTERING` fazem com que as ações ignorem alvos que não atendam à condição. Isso significa que se você quiser apenas direcionar blocos que não sejam de ar, você vai querer uma condição `FILTERING`, mas se você quiser interromper uma ação se um jogador estiver morto, você vai querer uma condição `BLOCKING`.

**Condições fora das ações são sempre `BLOCKING`**. Condições dentro de ações podem ser `BLOCKING` ou `FILTERING`.

_**Nota: se o alvo for `SELF` (o boss) e a verificação da condição for `isAlive`, a verificação é sempre `BLOCKING`!**_ Isso pode ser colocado dentro de uma condição `FILTERING` e ainda fará com que esta parte específica se comporte como `BLOCKING`.

As condições dentro das ações são definidas como `FILTERING` por padrão.

---

## Condições baseadas em localização

### locationIsAir

Define a condição para ser se a localização do alvo é ar.

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

Verifica se a localização está no chão. Isso significa que o bloco na localização não é sólido, mas o bloco abaixo dele é sólido.

| Chave | Detalhes | Valores |
| --- | :-: | :-: |
| `isOnFloor` | Define para verificar se a localização é uma localização de chão (ou o oposto). | [Boolean](#boolean) |

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

Verifica se a localização abaixo do alvo é um tipo de material correspondente.

| Chave |                     Detalhes                     |        Valores         |
| --- |:-----------------------------------------------:|:---------------------:|
| `isStandingOnMaterial` | Define qual tipo de material deve ser verificado. | [Material](#material) |

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

## Condições baseadas em entidade

### isAlive

Define a condição para ser se a entidade alvo da condição está viva.

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

Verifica se a entidade alvo tem tags específicas. Os criadores de scripts podem atribuir e remover qualquer tag por meio de ações e usá-las como condições para comportamentos posteriores. Tags são apenas strings (palavras) que você pode atribuir a um boss.

| Chave | Detalhes |           Valores            |
| --- | :-: |:---------------------------:|
| `hasTags` | Define para verificar se a entidade tem uma lista de tags. | [Lista de Strings](#string_list) |

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

Só será executado se o boss tiver as tags "isCool" e "hasANiceBeard".

</div>

</details>

</div>


---

### doesNotHaveTags

O mesmo que `hasTags`, mas verifica se o boss não tem esses valores.

| Chave | Detalhes | Valores |
| --- | :-: | :-: |
| `doesNotHaveTags` | Define para verificar se a entidade não tem uma lista de tags. | [Lista de Strings](#string_list) |

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

Só será executado se o boss não tiver as tags "isStinky" e "isSus".

</div>

</details>

</div>

## Outras condições

### randomChance

Dá à condição uma chance aleatória de ser válida.

| Chave | Detalhes | Valores |
| --- | :-: | :-: |
| `randomChance` | Chance de a condição ser válida. | Número entre 0.0 e 1.0 |

Observe que esta condição é especial, pois não requer um alvo.

## Filtrar NEARBY com tags

Para filtrar `NEARBY_MOBS` ou `NEARBY_PLAYERS` com base em tags específicas, use `ACTION_TARGET` como o alvo da condição (se a condição for aplicada a uma ação e não ao próprio script). Isso garante que o script filtre com precisão apenas os mobs/jogadores com as tags especificadas.

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Ações:
    - ação: SET_MOB_AI
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

Este script procurará quaisquer mobs próximos com a tag `TurnOff` e, se eles tiverem a tag, desativará a IA deles.

</div>

</details>

</div>
