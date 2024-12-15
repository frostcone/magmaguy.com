[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Elite Script 条件

条件允许脚本编写者基于特定条件使脚本和/或操作**不**运行。

<div align="center">

<details>

<summary><b>示例</b></summary>

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

在此示例中，`Example` 脚本仅在精英仍然存活时运行，并且仅在方块为空气方块时才在精英位置上方 3 个方块处放置泥土方块。各个操作可以具有各自的条件。

</div>

</details>

</div>

## 目标

条件使用[目标]($language$/elitemobs/elitescript_targets.md)系统来定位哪个实体或位置受到条件约束。这意味着您可以将条件与首领、玩家或其他您可以定位的任何对象相关联。

---

## 条件类型

| 键 | 详细信息 | 值 |
| --- | :-: | :-: |
| `conditionType` | 设置条件类型 | `BLOCKING` / `FILTERING` |

有两种类型的条件：`BLOCKING` 和 `FILTERING`。`BLOCKING` 条件使脚本或操作停止运行。`FILTERING` 条件使操作跳过不满足条件的目标。这意味着，如果您只想定位不是空气的方块，您将需要 `FILTERING` 条件，但如果您想在玩家死亡时停止操作，则需要 `BLOCKING` 条件。

**操作之外的条件始终是 `BLOCKING`**。操作内部的条件可以是 `BLOCKING` 或 `FILTERING`。

_**注意：如果目标是 `SELF`（首领）并且条件检查为 `isAlive`，则检查始终为 `BLOCKING`！**_ 这可以放在 `FILTERING` 条件中，并且仍会使此特定部分的行为类似于 `BLOCKING`。

操作内部的条件默认设置为 `FILTERING`。

---

## 基于位置的条件

### locationIsAir

设置条件以检查目标位置是否为空气。

| 键 | 详细信息 | 值 |
| --- | :-: |:-------------------:|
| `locationIsAir` | 设置为检查位置是否为空气方块（或相反）。 | [布尔值](#boolean) |

<div align="center">

<details>

<summary><b>示例</b></summary>

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

检查首领站立位置上方 2 个方块处的位置是否为空气。

</div>

</details>

</div>

---

### isOnFloor

检查位置是否在地板上。这意味着该位置的方块不是实体方块，但其下方的方块是实体方块。

| 键 | 详细信息 | 值 |
| --- | :-: | :-: |
| `isOnFloor` | 设置为检查位置是否为地板位置（或相反）。 | [布尔值](#boolean) |

<div align="center">

<details>

<summary><b>示例</b></summary>

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

检查目标下方的某个位置是否与材质类型匹配。

| 键 |                     详细信息                     |        值         |
| --- |:-----------------------------------------------:|:---------------------:|
| `isStandingOnMaterial` | 设置应检查的材质类型。 | [材质](#material) |

<div align="center">

<details>

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Conditions:
      isStandingOnMaterial: BIRCH_WOOD
      Target:
        targetType: SELF
```

仅当首领站在 BIRCH_WOOD 上时才会运行。

</div>

</details>

</div>

## 基于实体的条件

### isAlive

设置条件以检查条件目标实体是否存活。

| 键 | 详细信息 | 值 |
| --- | :-: | :-: |
| `isAlive` | 设置为检查实体是否存活（或死亡）。 | [布尔值](#boolean) |

<div align="center">

<details>

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Conditions:
      isAlive: false
      Target:
        targetType: SELF
```

仅当首领死亡时才会运行。

</div>

</details>

</div>

---

### hasTags

检查目标实体是否具有特定标签。脚本编写者可以通过操作分配和取消分配任何标签，并将其用作稍后行为的条件。标签只是您可以分配给首领的字符串（单词）。

| 键 | 详细信息 |           值            |
| --- | :-: |:---------------------------:|
| `hasTags` | 设置为检查实体是否具有标签列表。 | [字符串列表](#string_list) |

<div align="center">

<details>

<summary><b>示例</b></summary>

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

仅当首领具有标签“isCool”和“hasANiceBeard”时才会运行。

</div>

</details>

</div>

---

### doesNotHaveTags

与 `hasTags` 相同，但会检查首领是否不具有这些值。

| 键 | 详细信息 | 值 |
| --- | :-: | :-: |
| `doesNotHaveTags` | 设置为检查实体是否不具有标签列表。 | [字符串列表](#string_list) |

<div align="center">

<details>

<summary><b>示例</b></summary>

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

仅当首领不具有标签“isStinky”和“isSus”时才会运行。

</div>

</details>

</div>

## 其他条件

### randomChance

使条件具有随机的机会使其有效。

| 键 | 详细信息 | 值 |
| --- | :-: | :-: |
| `randomChance` | 条件有效的机会。 | 介于 0.0 和 1.0 之间的数字 |

请注意，此条件很特殊，因为它不需要目标。

## 使用标签筛选 NEARBY

要基于特定标签筛选 `NEARBY_MOBS` 或 `NEARBY_PLAYERS`，请使用 `ACTION_TARGET` 作为条件的 target（如果该条件应用于操作而不是脚本本身）。这可确保脚本仅准确筛选具有指定标签的生物/玩家。

<div align="center">

<details>

<summary><b>示例</b></summary>

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

此脚本将查找附近任何具有标签 `TurnOff` 的生物，并且如果它们具有该标签，则会关闭它们的 AI。

</div>

</details>

</div>
