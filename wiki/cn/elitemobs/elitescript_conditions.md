
# 精英脚本条件

条件使得脚本编写者可以基于特定条件来使脚本和/或操作**不**运行。

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  示例:
    事件:
    - 精英怪物受到玩家伤害事件
    条件:
      是否存活: true
      目标:
        目标类型: 自己
    操作:
    - 操作: 放置方块
      目标:
        目标类型: 直接目标
      持续时间: 20
      阶段: 土
      偏移: 0,3,0
      条件:
        地点是空气: true
        目标:
          目标类型: 动作目标
    冷却时间:
      本地: 60
      全局: 20
```

在此示例中，`示例`脚本只会在精英仍然活着时运行，并且只在该方块是空气块的情况下，在精英位置上方3个块的位置放置一个土块。单个操作可以具有单独的条件。

</div>

</details>

</div>

## 目标

条件使用[目标]($language$/elitemobs/elitescript_targets.md)系统来确定哪个实体或位置受到条件的影响。这意味着您可以将条件关联到boss或玩家，或您可以设定的任何其他目标。

---

## 条件类型

| 键 | 详情 | 值 |
| --- | :-: | :-: |
| `conditionType` | 设定条件类型 | `BLOCKING` / `FILTERING` |

条件有两种类型:`BLOCKING`和`FILTERING`.`BLOCKING`条件使脚本或操作停止运行.`FILTERING`条件使操作跳过不满足条件的目标。这意味着如果你想只关注不是空气的方块，你会希望一个`FILTERING`条件，但是如果你想在玩家死亡时停止操作，你需要一个`BLOCKING`条件。

**操作外部的条件总是`BLOCKING`**。操作内部的条件可以是`BLOCKING`或`FILTERING`.

_**注意：如果目标是`SELF`（boss）并且条件检查是`isAlive`，检查总是`BLOCKING`！**_  这可以放在`FILTERING`条件内部，但仍会使这个特定部分的行为变为`BLOCKING`.

操作内部的条件默认设置为`FILTERING`.

---

## 基于位置的条件

### locationIsAir

设置条件为目标的位置是否为空气.

| 键 | 详情 |       值        |
| --- | :-: |:-------------------:|
| `locationIsAir` | 设置是否需要检查位置是否为空气方块 (或者相反)。 | [布尔值](#boolean) |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  示例:
    条件:
      地点是空气: true
      目标:
        目标类型: 自己
        偏移: "0,3,0"
```

检查boss站立的位置2块上方的位置是否为空气。

</div>

</details>

</div>

---

### isOnFloor

检查位置是否在地板上。这意味着位置的方块不是实心的，但下方的方块是实心的。

| 键 | 详情 | 值 |
| --- | :-: | :-: |
| `isOnFloor` | 设定是否需要检查位置是否是地板位置 (或者相反)。 | [布尔值](#boolean) |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  示例:
    条件:
      是地板: true
      目标:
        目标类型: 自己
```

</div>

</details>

</div>

---

### isStandingOnMaterial

检查目标下面的位置是否是匹配的材料类型。

| 键 |                     详情                     |        值         |
| --- |:-----------------------------------------------:|:---------------------:|
| `isStandingOnMaterial` | 设定应检查的材料类型。 | [材质类型](#material) |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  示例:
    条件:
      战立材料: 白桦木
      目标:
        目标类型: 自己
```

只有当boss站在白桦木上面时，才会运行。

</div>

</details>

</div>

## 基于实体的条件

### isAlive

设置条件为条件目标实体是否活着。

| 键 | 详情 | 值 |
| --- | :-: | :-: |
| `isAlive` | 设置是否需要检查实体是否活着 (或者相反)。 | [布尔值](#boolean) |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  示例:
    条件:
      是否存活: false
      目标:
        目标类型: 自己
```

只有当boss死亡时才会运行。

</div>

</details>

</div>

---

### hasTags

检查目标实体是否具有特定的标签。脚本编写者可以通过操作分配和取消分配任何标签，并在之后的行为中将其作为条件使用。标签只是你可以分配给boss的字符串（单词）。

| 键 | 详情 |           值            |
| --- | :-: |:---------------------------:|
| `hasTags` | 设置是否需要检查实体是否具有一组标签。 | [字符串列表](#string_list) |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  示例:
    条件:
      有标签:
      - isCool
      - hasANiceBeard
      目标:
        目标类型: 自己
```

只有当boss具有"isCool"和"hasANiceBeard"这两个标签时，才会运行。

</div>

</details>

</div>


---

### doesNotHaveTags

与`hasTags`相同，但检查boss是否不具有这些值。

| 键 | 详情 | 值 |
| --- | :-: | :-: |
| `doesNotHaveTags` | 设置是否需要检查实体是否不具有一组标签。 | [字符串列表](#string_list) |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  示例:
    条件:
      无以下标签:
      - isStinky
      - isSus
      目标:
        目标类型: 自己
```

只有当boss没有"isStinky"和"isSus"这两个标签时，才会运行。

</div>

</details>

</div>

## 其他条件

### randomChance

给条件一个随机的有效机会。

| 键 | 详情 | 值 |
| --- | :-: | :-: |
| `randomChance` | 条件为有效的机会。 | 0.0和1.0之间的数字 |

注意，这个条件是特殊的，因为它不需要目标。
