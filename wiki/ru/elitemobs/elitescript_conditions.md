```markdown
# Условия Скриптов Элиты

Условия позволяют скриптерам **не** запускать скрипты и/или действия на основе определенных условий.

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

В этом примере скрипт `Example` будет выполняться только если элита еще жива, и будет размещать блок земли в 3 блоках над местоположением элиты только если этот блок является воздушным. Отдельные действия могут иметь индивидуальные условия.

</div>

</details>

</div>

## Цель

Условия используют систему [Целей]($language$/elitemobs/elitescript_targets.md) для определения сущности или местоположения, к которым применяются условия. Это означает, что вы можете связывать условия с боссом, игроками или любым другим объектом, который можно выбрать в качестве цели.

---

## Тип Условия

| Ключ | Подробности | Значения |
| --- | :-: | :-: |
| `conditionType` | Устанавливает тип условия | `BLOCKING` / `FILTERING` |

Существует два типа условий: `BLOCKING` (БЛОКИРУЮЩИЙ) и `FILTERING` (ФИЛЬТРУЮЩИЙ). Условия `BLOCKING` заставляют скрипты или действия прекращать выполнение. Условия `FILTERING` заставляют действия пропускать цели, которые не соответствуют условию. Это означает, что если вы хотите выбрать целью только блоки, которые не являются воздушными, вам понадобится условие `FILTERING`, но если вы хотите остановить действие, если игрок мертв, вам понадобится условие `BLOCKING`.

**Условия вне действий всегда являются `BLOCKING`**. Условия внутри действий могут быть `BLOCKING` или `FILTERING`.

_**Примечание: если целью является `SELF` (босс) и проверка условия `isAlive`, проверка всегда является `BLOCKING`!**_ Это может быть помещено внутрь условия `FILTERING` и все равно заставит эту конкретную часть вести себя как `BLOCKING`.

Условия внутри действий по умолчанию установлены на `FILTERING`.

---

## Размещение Блоков Условий

Вы можете размещать или вкладывать блоки условий двумя способами:

1. **Под отдельными действиями** – Условие будет применяться только к конкретному действию. Если условие выполняется, действие выполняется; в противном случае — нет.

2. **Под всем скриптом** – Условие применяется ко всем действиям в рамках скрипта. Если условие не выполняется, ни одно из действий не будет выполнено.

Ниже приведены примеры, демонстрирующие, как вкладывать блоки условий как для отдельных действий, так и для всего скрипта.

**Под отдельными действиями:**

<div align="center">

<details>

<summary><b>Пример</b></summary>

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

Проверяет, является ли местоположение в 2 блоках над местом, где стоит босс, воздушным, и если да, то выполняет действие SET_WEATHER при ударе моба. В противном случае блокирует действие SET_WEATHER. Но босс всегда будет выполнять действие MESSAGE при ударе, так как к нему не применяются условия.

</div>

</details>

</div>

**Под всем скриптом:**

<div align="center">

<details>

<summary><b>Пример</b></summary>

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

Если блок, расположенный в двух пространствах над местом, где стоит босс, является воздушным, то разрешить выполнение всех скриптов при ударе моба. В противном случае заблокировать выполнение всего скрипта, включая действия SET_WEATHER и MESSAGE.

</div>

</details>

</div>

---

## Условия, основанные на местоположении

### locationIsAir

Устанавливает условие на то, является ли местоположение цели воздушным.

| Ключ | Подробности | Значения |
| --- | :-: |:-------------------:|
| `locationIsAir` | Устанавливает проверку на то, является ли местоположение воздушным блоком (или наоборот). | [Boolean](#boolean) |

<div align="center">

<details>

<summary><b>Пример</b></summary>

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

Проверяет, является ли местоположение в 2 блоках над местом, где стоит босс, воздушным, и если да, то не блокирует выполнение скрипта погоды при ударе моба. В противном случае блокирует действие.

</div>

</details>

</div>

---

### isOnFloor

Проверяет, находится ли местоположение на полу. Это означает, что блок в данном местоположении не является твердым, но блок под ним — твердый.

| Ключ | Подробности | Значения |
| --- | :-: | :-: |
| `isOnFloor` | Устанавливает проверку на то, является ли местоположение местоположением пола (или наоборот). | [Boolean](#boolean) |

<div align="center">

<details>

<summary><b>Пример</b></summary>

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

Проверяет, находится ли босс на твердом блоке, если да, то выполняет скрипт, в противном случае блокирует выполнение скрипта.

</div>

</details>

</div>

---

### isStandingOnMaterial

Проверяет, соответствует ли местоположение под целью определенному типу материала.

| Ключ | Подробности | Значения |
| --- |:-----------------------------------------------:|:---------------------:|
| `isStandingOnMaterial` | Устанавливает, какой тип материала должен быть проверен. | [Material](#material) |

<div align="center">

<details>

<summary><b>Пример</b></summary>

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

Будет выполняться только если босс стоит на блоке BIRCH_WOOD, в противном случае выполнение скрипта будет заблокировано.

</div>

</details>

</div>

## Условия, основанные на сущностях

### isAlive

Устанавливает условие на то, жива ли сущность, являющаяся целью условия.

| Ключ | Подробности | Значения |
| --- | :-: | :-: |
| `isAlive` | Устанавливает проверку на то, жива ли сущность (или мертва). | [Boolean](#boolean) |

<div align="center">

<details>

<summary><b>Пример</b></summary>

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

Будет выполняться только если босс в данный момент жив, в противном случае скрипт будет заблокирован.

</div>

</details>

</div>

---

### hasTags

Проверяет, имеет ли целевая сущность определенные теги. Скриптеры могут назначать и отменять назначение любых тегов через действия и использовать их в качестве условий для последующего поведения. Теги — это просто строки (слова), которые вы можете присвоить боссу.

| Ключ | Подробности | Значения |
| --- | :-: |:---------------------------:|
| `hasTags` | Устанавливает проверку на наличие у сущности списка тегов. | [String List](#string_list) |

<div align="center">

<details>

<summary><b>Пример</b></summary>

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

Будет выполняться только если у босса есть теги "isCool" и "hasANiceBeard", в противном случае скрипт будет заблокирован.

</div>

</details>

</div>

---

### doesNotHaveTags

То же, что и `hasTags`, но проверяет, отсутствуют ли у босса эти значения.

| Ключ | Подробности | Значения |
| --- | :-: | :-: |
| `doesNotHaveTags` | Устанавливает проверку на отсутствие у сущности списка тегов. | [String List](#string_list) |

<div align="center">

<details>

<summary><b>Пример</b></summary>

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

Будет выполняться только если у босса нет тегов "isStinky" и "isSus", в противном случае скрипт будет заблокирован.

</div>

</details>

</div>

## Другие условия

### randomChance

Дает условию случайный шанс быть действительным.

| Ключ | Подробности | Значения |
| --- | :-: | :-: |
| `randomChance` | Шанс, что условие будет действительным. | Число от 0.0 до 1.0 |

<div align="center">

<details>

<summary><b>Пример</b></summary>

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
        Target: # Not required
          targetType: SELF # Not required
```

Это даст скрипту 10% шанс на выполнение, в противном случае скрипт будет заблокирован.

</div>

</details>

</div>

Обратите внимание, что это условие является особенным, так как оно не требует цели.

## Фильтрация NEARBY по тегам

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
        conditionType: FILTERING
        hasTags:
          - TurnOff
        Target:
          targetType: ACTION_TARGET
```

Этот скрипт будет искать любых ближайших мобов с тегом `TurnOff` и, если у них есть этот тег, отключит их ИИ.

</div>

</details>

</div>
```