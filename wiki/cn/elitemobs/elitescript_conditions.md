好的，我将把输入的文本翻译成简体中文，并保留 Markdown 格式。

```markdown
# 精英脚本条件

条件允许脚本编写者根据特定条件来决定脚本和/或动作**是否**运行。

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

在此示例中，`Example` 脚本仅在精英仍然存活时运行，并且仅当精英位置上方 3 格的方块是空气方块时，才会在该位置放置一个泥土方块。单个动作可以拥有独立的条件。

</div>

</details>

</div>

## 目标 (Target)

条件使用 [目标]($zh-cn$/elitemobs/elitescript_targets.md) 系统来指定哪个实体或位置是条件的检查对象。这意味着你可以将条件关联到 Boss、玩家或任何其他你可以指定为目标的实体。

---

## 条件类型 (Condition Type)

| Key | 详情 | 值 |
| --- | :-: | :-: |
| `conditionType` | 设置条件类型 | `BLOCKING` / `FILTERING` |

条件有两种类型：`BLOCKING` 和 `FILTERING`。`BLOCKING` 条件会阻止脚本或动作运行。`FILTERING` 条件会跳过不符合条件的指定目标。这意味着如果你只想指定非空气方块为目标，你会需要一个 `FILTERING` 条件；但如果你想在玩家死亡时停止某个动作，你会需要一个 `BLOCKING` 条件。

**动作之外的条件总是 `BLOCKING` 类型**。动作内部的条件可以是 `BLOCKING` 或 `FILTERING`。

_**注意：如果目标是 `SELF` (Boss) 并且条件检查是 `isAlive`，则该检查总是 `BLOCKING` 类型！**_ 即使将其放在 `FILTERING` 条件内部，这特定部分的行为仍然是 `BLOCKING`。

动作内部的条件默认设置为 `FILTERING`。

---

## 条件块放置 (Condition Block Placement)

你可以通过两种方式放置或嵌套条件块：

1.  **在单个动作下方** – 条件仅应用于特定动作。如果条件满足，动作执行；否则不执行。

2.  **在整个脚本下方** – 条件应用于脚本内的所有动作。如果条件不满足，所有动作都不会执行。

下面是演示如何在单个动作和整个脚本下方嵌套条件块的示例。

**在单个动作下方：**

<div align="center">

<details> 

<summary><b>示例</b></summary>

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

检查 Boss 站立位置上方 2 格的方块是否是空气，如果是，则在 Boss 受伤时运行 SET_WEATHER 动作。否则阻止 SET_WEATHER 动作。但 Boss 受伤时总是会运行 MESSAGE 动作，因为它没有应用任何条件。

</div>

</details>

</div>

**在整个脚本下方：**

<div align="center">

<details> 

<summary><b>示例</b></summary>

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

如果 Boss 站立位置上方两格的方块是空气，则在 Boss 受伤时允许所有脚本运行。否则，阻止整个脚本执行，包括 SET_WEATHER 和 MESSAGE 动作。

</div>

</details>

</div>

---

## 基于位置的条件 (Location-based conditions)

### locationIsAir

设置条件为目标位置是否是空气。

| Key | 详情 | 值 |
| --- | :-: |:-------------------:|
| `locationIsAir` | 设置检查位置是否是空气方块（或相反）。 | [布尔值](#boolean) |

<div align="center">

<details> 

<summary><b>示例</b></summary>

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

检查 Boss 站立位置上方 2 格的方块是否是空气，如果是，则在 Boss 受伤时允许天气脚本运行。否则阻止该动作。

</div>

</details>

</div>

---

### isOnFloor

检查位置是否在地面上。这意味着该位置的方块不是固体，但其下方的方块是固体。

| Key | 详情 | 值 |
| --- | :-: | :-: |
| `isOnFloor` | 设置检查位置是否是地面位置（或相反）。 | [布尔值](#boolean) |

<div align="center">

<details> 

<summary><b>示例</b></summary>

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

检查 Boss 是否站在固体方块上，如果是，则运行脚本，否则阻止脚本运行。

</div>

</details>

</div>

---

### isStandingOnMaterial

检查目标下方的方块是否与指定的材质类型匹配。

| Key | 详情 | 值 |
| --- |:-----------------------------------------------:|:---------------------:|
| `isStandingOnMaterial` | 设置应检查的材质类型。 | [材质](#material) |

<div align="center">

<details> 

<summary><b>示例</b></summary>

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

仅当 Boss 站在 BIRCH_WOOD 方块上时运行，否则脚本将被阻止运行。

</div>

</details>

</div>

## 基于实体的条件 (Entity-based conditions)

### isAlive

设置条件为条件目标实体是否存活。

| Key | 详情 | 值 |
| --- | :-: | :-: |
| `isAlive` | 设置检查实体是否存活（或死亡）。 | [布尔值](#boolean) |

<div align="center">

<details> 

<summary><b>示例</b></summary>

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

仅当 Boss 当前存活时运行，否则脚本将被阻止。

</div>

</details>

</div>

---

### hasTags

检查目标实体是否具有特定的标签。脚本编写者可以通过动作分配和取消分配任何标签，并将其用作后续行为的条件。标签只是你可以分配给 Boss 的字符串（词语）。

| Key | 详情 | 值 |
| --- | :-: |:---------------------------:|
| `hasTags` | 设置检查实体是否具有标签列表。 | [字符串列表](#string_list) |

<div align="center">

<details> 

<summary><b>示例</b></summary>

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

仅当 Boss 具有标签 "isCool" 和 "hasANiceBeard" 时运行，否则脚本将被阻止。

</div>

</details>

</div>

---

### doesNotHaveTags

与 `hasTags` 相同，但检查 Boss 是否不具有这些值。

| Key | 详情 | 值 |
| --- | :-: | :-: |
| `doesNotHaveTags` | 设置检查实体是否不具有标签列表。 | [字符串列表](#string_list) |

<div align="center">

<details> 

<summary><b>示例</b></summary>

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

仅当 Boss 不具有标签 "isStinky" 和 "isSus" 时运行，否则脚本将被阻止。

</div>

</details>

</div>

## 其他条件 (Other conditions)

### randomChance

赋予条件一个随机的有效几率。

| Key | 详情 | 值 |
| --- | :-: | :-: |
| `randomChance` | 条件有效的几率。 | 0.0 到 1.0 之间的数字 |

<div align="center">

<details> 

<summary><b>示例</b></summary>

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
        Target: # 非必需
          targetType: SELF # 非必需
```

这将使脚本有 10% 的几率运行，否则脚本将被阻止。

</div>

</details>

</div>

请注意，此条件是特殊的，因为它不需要目标。

## 使用标签过滤 NEARBY (Filter NEARBY with tags)

要根据特定标签过滤 `NEARBY_MOBS` 或 `NEARBY_PLAYERS`，请使用 `ACTION_TARGET` 作为条件的指定目标（如果条件应用于动作本身而非整个脚本）。这确保脚本能准确地过滤出具有指定标签的怪物/玩家。

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
        conditionType: FILTERING
        hasTags:
          - TurnOff
        Target:
          targetType: ACTION_TARGET
```

此脚本将查找附近带有标签 `TurnOff` 的怪物，如果它们有该标签，则关闭它们的 AI。

</div>

</details>

</div>
```