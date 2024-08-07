# Elite 脚本条件

条件允许脚本编写者根据特定条件使脚本和/或动作**不**运行。

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  示例:
    事件:
    - EliteMobDamagedByPlayerEvent
    条件:
      isAlive: true
      目标:
        目标类型: 自身
    动作:
    - action: 放置方块
      目标:
        目标类型: 直接目标
      duration: 20
      material: 泥土
      offset: 0,3,0
      条件:
        locationIsAir: true
        目标:
          目标类型: 动作目标
    冷却时间:
      本地: 60
      全局: 20
```

在本例中，`示例` 脚本仅在精英还活着时运行，并且仅当精英位置上方 3 个方块的方块是空气方块时才会放置一个泥土方块。单个动作可以具有单个条件。

</div>

</details>

</div>

## 目标

条件使用 [目标]($language$/elitemobs/elitescript_targets.md) 系统来定位哪个实体或位置受条件约束。这意味着您可以将条件与 Boss 或玩家或您可以定位的任何其他内容相关联。

---

## 条件类型

| 键            | 详细信息                                   | 值                   |
|----------------|:-------------------------------------:|-----------------------|
| `conditionType` | 设置条件类型。                          | `阻止` / `过滤` |

条件有两种类型：`阻止` 和 `过滤`。`阻止` 条件使脚本或动作停止运行。`过滤` 条件使动作跳过不满足条件的目标。这意味着如果您只想定位非空气的方块，您将需要一个 `过滤` 条件，但如果您想在玩家死亡时停止动作，则需要一个 `阻止` 条件。

**动作之外的条件始终是 `阻止`**。动作内部的条件可以是 `阻止` 或 `过滤`。

_**注意：如果目标是 `自身`（Boss），并且条件检查是 `isAlive`，则检查始终是 `阻止`！**_ 这可以放在 `过滤` 条件内，并且仍然会使此特定部分表现为 `阻止`。

默认情况下，动作内部的条件设置为 `过滤`。

---

## 基于位置的条件

### locationIsAir

将条件设置为目标的位置是否是空气。

| 键              | 详细信息                                                 | 值              |
|-----------------|:---------------------------------------------------------:|-----------------|
| `locationIsAir` | 设置为检查位置是否是空气方块（或相反）。                 | [布尔值](#布尔值) |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  示例:
    条件:
      locationIsAir: true
      目标:
        目标类型: 自身
        offset: "0,3,0"
```

检查 Boss 所站位置上方 2 个方块的位置是否是空气。

</div>

</details>

</div>

---

### isOnFloor

检查位置是否在地板上。这意味着该位置的方块不是固体方块，但其下方的方块是固体方块。

| 键        | 详细信息                                                 | 值              |
|------------|:---------------------------------------------------------:|-----------------|
| `isOnFloor` | 设置为检查位置是否是地板位置（或相反）。                 | [布尔值](#布尔值) |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  示例:
    条件:
      isOnFloor: true
      目标:
        目标类型: 自身
```

</div>

</details>

</div>

---

### isStandingOnMaterial

检查目标下方位置是否是匹配的材料类型。

| 键                      | 详细信息                                      | 值                 |
|--------------------------|:--------------------------------------------:|----------------------|
| `isStandingOnMaterial` | 设置应该检查哪种材料类型。                  | [材料](#材料)       |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  示例:
    条件:
      isStandingOnMaterial: 白桦木
      目标:
        目标类型: 自身
```

仅在 Boss 站在白桦木上时才会运行。

</div>

</details>

</div>

## 基于实体的条件

### isAlive

将条件设置为条件目标实体是否活着。

| 键        | 详细信息                                   | 值              |
|------------|:-------------------------------------:|-----------------|
| `isAlive` | 设置为检查实体是否活着（或死亡）。       | [布尔值](#布尔值) |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  示例:
    条件:
      isAlive: false
      目标:
        目标类型: 自身
```

仅在 Boss 死亡时才会运行。

</div>

</details>

</div>

---

### hasTags

检查目标实体是否具有特定标签。脚本编写者可以通过动作分配和取消分配任何标签，并将其用作以后行为的条件。标签只是您可以分配给 Boss 的字符串（单词）。

| 键       | 详细信息                                  | 值                     |
|-----------|:----------------------------------------:|-------------------------|
| `hasTags` | 设置为检查实体是否具有标签列表。         | [字符串列表](#字符串列表) |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  示例:
    条件:
      hasTags:
      - 很酷
      - 有胡子
      目标:
        目标类型: 自身
```

仅在 Boss 具有“很酷”和“有胡子”标签时才会运行。

</div>

</details>

</div>


---

### doesNotHaveTags

与 `hasTags` 相同，但检查 Boss 是否没有这些值。

| 键                | 详细信息                                     | 值                     |
|--------------------|:------------------------------------------:|-------------------------|
| `doesNotHaveTags` | 设置为检查实体是否没有标签列表。            | [字符串列表](#字符串列表) |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  示例:
    条件:
      doesNotHaveTags:
      - 很臭
      - 很可疑
      目标:
        目标类型: 自身
```

仅在 Boss 没有“很臭”和“很可疑”标签时才会运行。

</div>

</details>

</div>

## 其他条件

### randomChance

使条件具有随机的有效几率。

| 键            | 详细信息                 | 值                                     |
|----------------|:--------------------------:|------------------------------------------|
| `randomChance` | 条件有效的几率。          | 0.0 到 1.0 之间的数字                      |

请注意，此条件很特殊，因为它不需要目标。


