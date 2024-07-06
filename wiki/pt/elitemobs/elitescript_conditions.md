# Condições do Script Elite

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
        Target:
          targetType: ACTION_TARGET
    Cooldowns:
      local: 60
      global: 20
```

Neste exemplo, o script `Example` só será executado se a elite ainda estiver viva e só colocará um bloco de terra 3 blocos acima da localização da elite se aquele bloco for um bloco de ar. Ações individuais podem ter condições individuais.

</div>

</details>

</div>

## Alvo

As condições usam o sistema [Alvos]($language$/elitemobs/elitescript_targets.md) para definir qual entidade ou localização está sujeita às condições. Isso significa que você pode associar condições ao chefe, aos jogadores ou a qualquer outra coisa que você possa direcionar.

---

## Tipo de Condição

| Chave | Detalhes | Valores |
| --- | :-: | :-: |
| `conditionType` | Define o tipo de condição | `BLOCKING` / `FILTERING` |

Existem dois tipos de condição: `BLOCKING` e `FILTERING`. As condições `BLOCKING` fazem com que scripts ou ações parem de ser executados. As condições `FILTERING` fazem com que as ações ignorem os alvos que não atendem à condição. Isso significa que se você quiser direcionar apenas o bloco que não é ar, precisará de uma condição `FILTERING`, mas se você quiser interromper uma ação se um jogador estiver morto, precisará de uma condição `BLOCKING`.

**As condições fora das ações são sempre `BLOCKING`.** As condições dentro das ações podem ser `BLOCKING` ou `FILTERING`.

_**Observação: se o alvo for `SELF` (o chefe) e a verificação da condição for `isAlive`, a verificação será sempre `BLOCKING`!**_ Isso pode ser colocado dentro de uma condição `FILTERING` e ainda fará com que essa parte específica se comporte como `BLOCKING`.

As condições dentro das ações são definidas como `FILTERING` por padrão.

---

## Condições baseadas em localização

### locationIsAir

Define a condição como sendo se a localização do alvo é ar.

| Chave | Detalhes |       Valores        |
| --- | :-: |:-------------------:|
| `locationIsAir` | Define para verificar se a localização é um bloco de ar (ou o oposto). | [Booleano](#boolean) |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Conditions:
      locationIsAir: true
      Target:
        targetType: SELF
        offset: "0,3,0"
```

Verifica se a localização 2 blocos acima de onde o chefe está é ar.

</div>

</details>

</div>

---

### isOnFloor

Verifica se a localização está no chão. Isso significa que o bloco na localização não é sólido, mas o bloco abaixo é sólido.

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
    Conditions:
      isOnFloor: true
      Target:
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
  Example:
    Conditions:
      isStandingOnMaterial: BIRCH_WOOD
      Target:
        targetType: SELF
```

Só será executado se o chefe estiver em pé em BIRCH_WOOD.

</div>

</details>

</div>

## Condições baseadas em entidade

### isAlive

Define a condição como sendo se a entidade alvo da condição está viva.

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
    Conditions:
      isAlive: false
      Target:
        targetType: SELF
```

Só será executado se o chefe estiver morto.

</div>

</details>

</div>

---

### hasTags

Verifica se a entidade alvo tem tags específicas. Os scripters podem atribuir e remover qualquer tag por meio de ações e usá-las como condições para comportamento posterior. As tags são apenas strings (palavras) que você pode atribuir a um chefe.

| Chave | Detalhes |           Valores            |
| --- | :-: |:---------------------------:|
| `hasTags` | Define para verificar se a entidade possui uma lista de tags. | [Lista de Strings](#string_list) |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Conditions:
      hasTags:
      - isCool
      - hasANiceBeard
      Target:
        targetType: SELF
```

Só será executado se o chefe tiver as tags "isCool" e "hasANiceBeard".

</div>

</details>

</div>


---

### doesNotHaveTags

Igual a `hasTags`, mas verifica se o chefe não possui esses valores.

| Chave | Detalhes | Valores |
| --- | :-: | :-: |
| `doesNotHaveTags` | Define para verificar se a entidade não possui uma lista de tags. | [Lista de Strings](#string_list) |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Conditions:
      doesNotHaveTags:
      - isStinky
      - isSus
      Target:
        targetType: SELF
```

Só será executado se o chefe não tiver as tags "isStinky" e "isSus".

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

