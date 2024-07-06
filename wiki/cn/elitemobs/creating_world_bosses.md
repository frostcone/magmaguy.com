# 创建世界 Boss
*世界 Boss 有时也被称为区域 Boss。*
## 它们是什么？

世界 Boss 是设置为在特定延迟后在特定位置生成的自定义 Boss。这些也是在地下城中使用的 Boss。虽然在本节中，我们将专门讨论为地下城之外使用而制作世界 Boss。

## 它们的用途是什么？

世界 Boss 允许玩家面对固定的挑战，同时知道战利品将是有价值的。

## 我需要做什么才能制作世界 Boss？

1. **一个位置**。建议使用 Boss 房间，由于 Minecraft 的仇恨范围，半径约为 15 个方块（跨度为 30 个方块）。此外，请确保通过 [WorldGuard](https://dev.bukkit.org/projects/worldguard) 区域保护地形（这样玩家就无法建造陷阱），并确保地形不能被利用来进行战斗。
2. **重生时间**。重生计时器至关重要。我不建议重生计时器少于 30 分钟，否则 Boss 重生将不再是一个事件。1 小时是一个相当不错的时间，但您可能还想让 Boss 每天重生一次，甚至每周重生一次。
3. **逃跑时间**。重生时间越长，逃跑时间就应该越长。还要考虑到逃跑时间应该足够长，以便人们可以轻松地挑战 Boss。如果您不想让玩家神风式地杀死 Boss，那么逃跑计时器很重要。这不是强制性的，如果您想制作持续一周的大规模重生 Boss，甚至不建议这样做。
4. **自定义 Boss**。世界 Boss 实际上只是具有自定义生成规则的自定义 Boss。确保您选择具有良好团队规模战斗兼容性的力量。
5. **有趣的战利品**。除了挑战之外，世界 Boss 的一大吸引力在于战利品。确保玩家可以从中获得他们根本无法从其他地方获得的东西。
6. **主题**。一个好的区域 Boss 应该有一个主题，一个主题位置和主题战利品。

## 世界 Boss 的自定义 Boss 配置选项：

这些设置添加到普通的自定义 Boss 配置文件中。[有关这些内容的详细维基页面可以在这里找到]($language$/elitemobs/creating_bosses.md)。

<div align="center">

***

### isRegionalBoss

设置 Boss 是否是区域 Boss。区域 Boss 是世界 Boss 的另一个名称，因此您需要将其设置为 `true`。

| 键            | 值              | 默认值  |
|----------------|:-----------------|---------|
| `isRegionalBoss` | [布尔值](#布尔值) | `false` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
isRegionalBoss: true
```

</div>

</details>

***

### spawnLocations

生成位置应使用命令 `/em addSpawnLocation <filename.yml>` 在游戏中设置。

虽然可以从配置中手动添加位置，但我不建议尝试这样做，因为很容易出错。

| 键              | 值                     | 默认值 |
|-----------------|:------------------------:|--------|
| `spawnLocations` | [字符串列表](#字符串列表)      | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

配置文件中的位置（适用于高级用户）区域 Boss 的配置文件通过存储多个生成位置以及重生计时器，将该区域 Boss 的所有实例存储在一个文件中。

实际上，这意味着以下条目：

```yaml
spawnLocations:
- elitemobs_sewer_maze,-70.17178578884845,168.2,-173.17112099568718,-271.24023,64.19999:1610710903931
- elitemobs_sewer_maze,-135.02262355317436,168.2,-153.28849346821508,-98.53906,60.750263:1609026066482
- elitemobs_sewer_maze,-70.43846307626053,168.2,-174.13499832314378,-271.24023,64.19999:1610710886530
- elitemobs_sewer_maze,-130.39762674971664,168.2,-171.67396911490718,-47.532227,51.900173:1609026066482
- elitemobs_sewer_maze,-117.12782160766056,162.2,-166.40989416757444,-71.37402,-1.4997427:1610710974882
- elitemobs_sewer_maze,-105.13138759611667,168.2,-169.85898023126538,-124.34766,41.24988:1610710945331
- elitemobs_sewer_maze,-106.21847515732084,169.2,-152.3609257554766,-170.86523,21.450315:1610537606222
```

包含 7 个不同的区域 Boss，位于不同的位置，并且具有不同的重生计时器。

让我们分解细节，看看第一个区域 Boss：

```yaml
- elitemobs_sewer_maze,-70.17178578884845,168.2,-173.17112099568718,-271.24023,64.19999:1610710903931
```

由于这遵循格式 `世界,x,y,z,俯仰角,偏航角:unix时间戳`，因此 Boss 生成在名为 `elitemobs_sewer_maze` 的世界中，x = `-70.17178578884845`，y = `168.2`，z = `-173.17112099568718`，俯仰角 = `-271.24023`，偏航角 = `64.19999`。

unix 时间戳存储 Boss 将在哪个时间重生，以 unix 时间表示。这用于通过重新启动来存储重生时间。如果您想知道它对应于什么时间，可以在线找到无数的 unix 时间到真实时间转换工具。

如果您希望特定的 Boss 在重新加载或重新启动后重生，您需要做的就是清除 `:unix时间戳` 条目。

</div>

</details>

***

### spawnCooldown

设置 Boss 重生所需的时间，以**分钟**为单位。

**注意：建议为大型 Boss 设置更长的重生时间！**。

| 键            | 值                | 默认值 |
|----------------|:------------------:|--------|
| `spawnCooldown` | [整数](#整数)          | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
spawnCooldown: 20
```

</div>

</details>

***

### leashRadius

设置世界 Boss 从其 `spawnLocation` 到被传送到其生成点之前的半径。这可以防止玩家将 Boss 拖到更容易与之战斗的位置。

**注意：尽量避免使战斗区域需要小于 20 个方块的牵引绳，因为这会使战斗变得更糟。**

| 键          | 值                | 默认值 |
|--------------|:------------------:|--------|
| `leashRadius` | [整数](#整数)          | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
leashRadius: 30
```

</div>

</details>

***

### 可传递方块

也称为 `onSpawnBlockStates` 和 `onRemoveBlockStates`。

这些值允许区域 Boss 在进入战斗时生成方块，并在它们被移除时移除方块，这意味着当它们因超时而逃跑或死亡时。

**如果您将其与阶段 Boss 一起使用，这就是您如何使 Boss 打开或关闭门/区域，甚至在战斗期间修改竞技场的方式！**

| 键                   | 值                   | 默认值 |
|-----------------------|:-----------------------:|--------|
| `onSpawnBlockStates` | 请参阅详细说明        | 无      |


| 键                   | 值        | 默认值 |
|-----------------------|:----------:|--------|
| `onRemoveBlockStates` | 请参阅详细说明 | 无      |

<details> 

<summary><b>详细说明</b></summary>

<div align="left">

**所有方块都相对于生成位置。在开始设置任何方块之前，请确保您拥有最终的生成位置。**

</br>如果您已经制作了一个大型可传递方块区域，现在需要移动 Boss，但您不想重做可传递方块。那么您可以使用 EliteScript [传送]($language$/elitemobs/elitescript_actions.md&section=teleport) 动作在 Boss 生成后将其移动到正确的位置。请记住，您必须相应地调整牵引绳。

由于设置方块的复杂性，不建议您手动执行此操作。您应该使用以下命令来执行此操作：

- /em registerblocks <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em registerblocksedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em registerblocksarea <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em registerblocksareaedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em cancelblocks

让我们分解一下。

**/em registerblocks <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

最基本的命令。这是一个切换，您运行一次以开始，再次运行以提交。就像所有其他命令一样，您可以选择是要将这些方块设置为在 `on_spawn` 状态下修改还是在 `on_remove` 状态下修改。

如果注册 on\_spawn，这将在 Boss 生成或重生时修改方块。如果注册 on\_remove，这将在 Boss 使用自定义 Boss 超时机制死亡或超时时修改方块。

要注册方块，只需放置或移除您希望在此设置打开时修改的方块。

**/em registerblocksedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

如果您想修改已经设置的方块，可以使用此命令。工作方式与 `/em registerblocks <regional_boss_file.yml> <on_spawn/on_remove>` 非常相似。

**/em registerblocksarea <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

就像 `/em registerblocks <regional_boss_file.yml> <on_spawn/on_remove>` 一样，这允许您注册方块，但它允许通过获取两个对角线相对的角（与 worldedit / worldguard 区域选择相同）来选择它们，而不是单独选择方块。

出于安全原因，区域选择的上限为 200 个方块（默认情况下，可在 config.yml 中修改）。请记住，每个方块都在同一个滴答上被修改，因此如果您正在修改大量地形，则在运行这些修改时可能会开始看到很大的延迟峰值。

**/em registerblocksareaedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

工作方式与 `/em registerblocksedit` 相同，但适用于区域。可用于超过区域的 200 个（默认）方块注册限制。

**/em cancelblocks**

在任何时候，如果在注册方块时出错，您可以运行此命令以取消注册。它将恢复您在该编辑/注册中开始注册的任何更改。

</div>

</details>

</div>

***

## 制作一场精彩的大型区域 Boss 战斗的专业技巧

1. **认真思考自定义 Boss 的力量如何相互补充**。您不希望您的 Boss 将大部分时间都花在停止上，因为它正在施放某些东西，因为这实际上会使战斗变得非常容易。您也不希望 Boss 拥有所有远程攻击而没有近战力量，反之亦然，除非您正在设计一些非常具体的东西。游戏测试很重要。


2. **生命值 - 大量生命值**。如果您希望人们真正组队与 Boss 战斗，那么生命值倍增器应该至少为 10。


3. **伤害 - 不要太多**。EliteMobs 默认情况下已经非常致命，而且力量往往呈指数级致命。与其将伤害提高到天花板，不如考虑使用力量让 Boss 攻击更强。


4. **漏洞，无处不在**。格外确保地形不能被利用。将 Boss 放在一个封闭的房间里，以防止人们试图从远处狙击它。对于很多世界 Boss 来说，箭矢无敌力量可能非常重要，因为 Minecraft 怪物无法处理从远处区块被狙击的情况，所以如果您想允许弓箭攻击，请确保弓箭不能被利用。


5. **了解插件**。有很多小技巧可以击败 EliteMobs，例如如何使用盾牌来抵消某些力量，而其他力量应该通过躲避甚至暂时逃离 Boss 来抵消。您越了解力量是如何工作的以及如何抵消它们，您制作的 Boss 就越好。



