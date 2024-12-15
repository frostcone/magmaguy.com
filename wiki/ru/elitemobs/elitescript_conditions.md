# Условия Elite Script

Условия позволяют сценаристам делать так, чтобы скрипты и/или действия **не** выполнялись при определенных условиях.

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

В этом примере скрипт `Example` будет выполняться только если элитный моб еще жив, и будет размещать блок грязи на 3 блока выше местоположения элитного моба, только если этот блок является блоком воздуха. Отдельные действия могут иметь отдельные условия.

</div>

</details>

</div>

## Цель

Условия используют систему [Целей]($language$/elitemobs/elitescript_targets.md) для определения того, к какой сущности или местоположению применяются условия. Это означает, что вы можете связать условия с боссом, игроками или с чем угодно еще, что можно определить как цель.

---

## Тип условия

| Ключ | Детали | Значения |
| --- | :-: | :-: |
| `conditionType` | Устанавливает тип условия | `BLOCKING` / `FILTERING` |

Существует два типа условий: `BLOCKING` и `FILTERING`. Условия `BLOCKING` заставляют скрипты или действия прекращать выполнение. Условия `FILTERING` заставляют действия пропускать цели, которые не соответствуют условию. Это означает, что если вы хотите нацеливаться только на блоки, которые не являются воздухом, вам понадобится условие `FILTERING`, но если вы хотите остановить действие, если игрок мертв, вам понадобится условие `BLOCKING`.

**Условия вне действий всегда `BLOCKING`**. Условия внутри действий могут быть `BLOCKING` или `FILTERING`.

_**Примечание: если цель - `SELF` (босс), и проверка условия - `isAlive`, проверка всегда `BLOCKING`!**_ Это можно поместить внутрь условия `FILTERING`, и эта конкретная часть все равно будет вести себя как `BLOCKING`.

Условия внутри действий по умолчанию установлены в `FILTERING`.

---

## Условия, основанные на местоположении

### locationIsAir

Устанавливает условие, основанное на том, является ли местоположение цели воздухом.

| Ключ | Детали | Значения |
| --- | :-: |:-------------------:|
| `locationIsAir` | Устанавливает проверку, является ли местоположение блоком воздуха (или наоборот). | [Boolean](#boolean) |

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

Проверяет, является ли местоположение на 2 блока выше босса блоком воздуха.

</div>

</details>

</div>

---

### isOnFloor

Проверяет, находится ли местоположение на полу. Это означает, что блок в этом месте не является твердым, но блок под ним является твердым.

| Ключ | Детали | Значения |
| --- | :-: | :-: |
| `isOnFloor` | Устанавливает проверку, является ли местоположение полом (или наоборот). | [Boolean](#boolean) |

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

Проверяет, находится ли местоположение под целью на блоке соответствующего типа материала.

| Ключ |                     Детали                     |        Значения         |
| --- |:-----------------------------------------------:|:---------------------:|
| `isStandingOnMaterial` | Устанавливает тип материала, который должен быть проверен. | [Материал](#material) |

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

Будет выполняться только если босс стоит на БЕРЕЗОВОМ ДЕРЕВЕ.

</div>

</details>

</div>

## Условия, основанные на сущностях

### isAlive

Устанавливает условие на основе того, жива ли целевая сущность.

| Ключ | Детали | Значения |
| --- | :-: | :-: |
| `isAlive` | Устанавливает проверку, жива ли сущность (или мертва). | [Boolean](#boolean) |

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

Будет выполняться только если босс мертв.

</div>

</details>

</div>

---

### hasTags

Проверяет, есть ли у целевой сущности определенные теги. Сценаристы могут назначать и отменять любые теги через действия и использовать их в качестве условий для последующего поведения. Теги - это просто строки (слова), которые вы можете назначить боссу.

| Ключ | Детали |           Значения            |
| --- | :-: |:---------------------------:|
| `hasTags` | Устанавливает проверку, есть ли у сущности список тегов. | [Список строк](#string_list) |

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

Будет выполняться только если у босса есть теги "isCool" и "hasANiceBeard".

</div>

</details>

</div>


---

### doesNotHaveTags

То же, что и `hasTags`, но проверяет, что у босса нет этих значений.

| Ключ | Детали | Значения |
| --- | :-: | :-: |
| `doesNotHaveTags` | Устанавливает проверку, что у сущности нет списка тегов. | [Список строк](#string_list) |

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

Будет выполняться только если у босса нет тегов "isStinky" и "isSus".

</div>

</details>

</div>

## Другие условия

### randomChance

Дает условию случайный шанс быть действительным.

| Ключ | Детали | Значения |
| --- | :-: | :-: |
| `randomChance` | Шанс того, что условие будет действительным. | Число от 0.0 до 1.0 |

Обратите внимание, что это условие особенное, так как не требует цели.

## Фильтрация NEARBY с помощью тегов

Чтобы отфильтровать `NEARBY_MOBS` или `NEARBY_PLAYERS` на основе определенных тегов, используйте `ACTION_TARGET` в качестве цели условия (если условие применяется к действию, а не к самому скрипту). Это гарантирует, что скрипт точно отфильтрует только мобов/игроков с указанными тегами.

<div align="center">

<details> 

<summary><b>Пример</b></summary>

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
        hasTags:
          - TurnOff
        Target:
          targetType: ACTION_TARGET
```

Этот скрипт будет искать любых ближайших мобов с тегом `TurnOff`, и если у них есть этот тег, он отключит их AI.

</div>

</details>

</div>
