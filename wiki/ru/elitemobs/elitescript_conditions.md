# Условия Elite Script

Условия позволяют scripters  сделать так, чтобы скрипты и/или действия **не** выполнялись на основе определенных условий.

<div align="center">

<details> 

<summary><b>Пример</b></summary>

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

В этом примере скрипт `Example` будет выполняться только в том случае, если элита все еще жива, и будет размещать блок грязи на 3 блока выше местоположения элиты только в том случае, если этот блок - блок воздуха. Отдельные действия могут иметь отдельные условия.

</div>

</details>

</div>

## Цель

Условия используют систему [Цели]($language$/elitemobs/elitescript_targets.md), чтобы определить, к какой сущности или местоположению применяются условия. Это означает, что вы можете связывать условия с боссом, с игроками или с чем-либо еще, что вы можете выбрать в качестве цели.

---

## Тип условия

| Ключ | Детали | Значения |
| --- | :-: | :-: |
| `conditionType` | Задает тип условия | `BLOCKING` / `FILTERING` |

Существует два типа условий: `BLOCKING` и `FILTERING`. Условия `BLOCKING`  заставляют скрипты или действия прекращать выполнение. Условия `FILTERING`  заставляют действия пропускать цели, которые не соответствуют условию. Это означает, что если вы хотите выбрать только блоки, которые не являются воздухом, вам нужна будет  `FILTERING`  условие, но если вы хотите остановить действие, если игрок мертв, вам нужно будет  `BLOCKING`  условие.

**Условия за пределами действий всегда `BLOCKING`**. Условия внутри действий могут быть `BLOCKING` или `FILTERING`.

_**Примечание: если целью является `SELF` (босс) и проверяемое условие - `isAlive`, то проверка всегда `BLOCKING`!**_ Это можно поместить внутрь условия `FILTERING`, и эта конкретная часть все равно будет вести себя как `BLOCKING`.

Условия внутри действий по умолчанию установлены как `FILTERING`.

---

## Условия, основанные на местоположении

### locationIsAir

Задает условие, которое определяет, является ли местоположение цели блоком воздуха.

| Ключ | Детали |       Значения        |
| --- | :-: |:-------------------:|
| `locationIsAir` | Устанавливает проверку на то, является ли местоположение блоком воздуха (или наоборот). | [Boolean](#boolean) |

<div align="center">

<details> 

<summary><b>Пример</b></summary>

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

Проверяет, является ли местоположение на 2 блока выше, чем место, где стоит босс, блоком воздуха.

</div>

</details>

</div>

---

### isOnFloor

Проверяет, находится ли местоположение на полу. Это означает, что блок в местоположении не является твердым, но блок под ним является твердым.

| Ключ | Детали | Значения |
| --- | :-: | :-: |
| `isOnFloor` | Устанавливает проверку на то, является ли местоположение местоположением пола (или наоборот). | [Boolean](#boolean) |

<div align="center">

<details> 

<summary><b>Пример</b></summary>

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

Проверяет, находится ли блок под целью, соответствующий заданному типу материала.

| Ключ |                     Детали                     |        Значения         |
| --- |:-----------------------------------------------:|:---------------------:|
| `isStandingOnMaterial` | Задает тип материала, который необходимо проверить. | [Material](#material) |

<div align="center">

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Conditions:
      isStandingOnMaterial: BIRCH_WOOD
      Target:
        targetType: SELF
```

Будет выполняться только в том случае, если босс стоит на BIRCH_WOOD.

</div>

</details>

</div>

## Условия, основанные на сущности

### isAlive

Задает условие, которое определяет, жива ли целевая сущность условия.

| Ключ | Детали | Значения |
| --- | :-: | :-: |
| `isAlive` | Устанавливает проверку на то, жива ли сущность (или мертва). | [Boolean](#boolean) |

<div align="center">

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Conditions:
      isAlive: false
      Target:
        targetType: SELF
```

Будет выполняться только в том случае, если босс мертв.

</div>

</details>

</div>

---

### hasTags

Проверяет, есть ли у целевой сущности определенные теги. Scripters  могут назначать и удалять любые теги с помощью действий и использовать их в качестве условий для последующего поведения. Теги - это просто строки (слова), которые вы можете назначить боссу.

| Ключ | Детали |           Значения            |
| --- | :-: |:---------------------------:|
| `hasTags` | Задает проверку на то, есть ли у сущности список тегов. | [String List](#string_list) |

<div align="center">

<details> 

<summary><b>Пример</b></summary>

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

Будет выполняться только в том случае, если у босса есть теги "isCool" и "hasANiceBeard".

</div>

</details>

</div>


---

### doesNotHaveTags

То же, что и `hasTags`, но проверяет, нет ли у босса этих значений.

| Ключ | Детали | Значения |
| --- | :-: | :-: |
| `doesNotHaveTags` | Задает проверку на то, нет ли у сущности списка тегов. | [String List](#string_list) |

<div align="center">

<details> 

<summary><b>Пример</b></summary>

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

Будет выполняться только в том случае, если у босса нет тегов "isStinky" и "isSus".

</div>

</details>

</div>

## Другие условия

### randomChance

Дает условию случайную вероятность быть действительным.

| Ключ | Детали | Значения |
| --- | :-: | :-: |
| `randomChance` | Вероятность того, что условие будет действительным. | Число от 0.0 до 1.0 |

Обратите внимание, что это условие является специальным, так как оно не требует цели.

