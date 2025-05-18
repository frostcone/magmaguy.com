好的，这是将输入的文本翻译成简体中文并保留Markdown格式的结果：

# 创建世界Boss
*世界Boss有时也被称为区域Boss。*
## 它们是什么？

世界Boss是自定义Boss，被设定在特定位置按特定延迟生成。它们也是地下城中使用的Boss。不过，在本节中，我们将专门讨论如何创建用于地下城之外的世界Boss。

## 它们有什么用？

世界Boss允许玩家面对固定的挑战，同时知道战利品将是丰厚的。

## 我需要什么来创建一个世界Boss？

1.  **一个位置**。建议使用一个Boss房间，由于Minecraft的仇恨范围，房间半径大约为15格（直径30格）。此外，确保地形通过[WorldGuard](https://dev.bukkit.org/projects/worldguard)区域得到保护（这样玩家就不能建造陷阱），并且地形不能被用于战斗利用。
2.  **一个重生时间**。重生计时器至关重要。我不建议设置少于30分钟的重生计时器，否则Boss重生将不再是一个事件。1小时是一个相当不错的时间，但你也可以设置成Boss每天或甚至每周重生一次。
3.  **一个逃脱时间**。重生时间越长，逃脱时间也应该越长。还要考虑到逃脱时间应该足够长，以便玩家能够舒适地挑战Boss。如果你不想让玩家通过自杀式攻击杀死Boss，逃脱计时器就很重要。如果你想做大型的每周重生Boss，这不是强制性的，甚至不推荐。
4.  **一个自定义Boss**。世界Boss实际上只是具有自定义生成规则的自定义Boss。确保你选择的技能具有良好的团队规模战斗兼容性。
5.  **有趣的战利品**。除了挑战之外，世界Boss最大的吸引力在于战利品。确保玩家可以从中获得一些他们在其他地方根本无法获得的东西。
6.  **一个主题**。一个好的区域Boss应该有一个主题，包括主题性的位置和主题性的战利品。

## 世界Boss的自定义Boss配置选项：

这些设置被添加到普通的自定义Boss配置文件中。[关于这些的详细维基页面可以在这里找到]($language$/elitemobs/creating_bosses.md)。

<div align="center">

***

### isRegionalBoss

设置Boss是否为区域Boss。区域Boss是世界Boss的另一个名称，所以你需要将其设置为 `true`。

| Key       |       值        | 默认值 |
|-----------|:-------------------:|:-------:|
| `isRegionalBoss` | [布尔值](#boolean) | `false` |

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

生成位置应该在游戏中使用命令 `/em addSpawnLocation <filename.yml>` 进行设置。

虽然可以手动从配置文件中添加位置，但我不建议尝试这样做，因为太容易出错。

| Key              |           值            | 默认值 |
|------------------|:---------------------------:|:-------:|
| `spawnLocations` | [字符串列表](#string_list) |  无   |

<details>

<summary><b>示例</b></summary>

<div align="left">

配置文件中的位置（供高级用户使用）区域Boss的配置文件将该区域Boss的所有实例存储在一个文件中，通过存储多个生成位置以及重生计时器。

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

包含7个不同的区域Boss，位于不同的位置，并具有不同的重生计时器。

让我们分解细节，看看第一个区域Boss：

```yaml
- elitemobs_sewer_maze,-70.17178578884845,168.2,-173.17112099568718,-271.24023,64.19999:1610710903931
```

由于这遵循 `world,x,y,z,pitch,yaw:unixTimeStamp` 的格式，Boss将在名为 `elitemobs_sewer_maze` 的世界中生成，坐标为 x = `-70.17178578884845`，y = `168.2`，z = `-173.17112099568718`，俯仰角 = `-271.24023`，偏航角 = `64.19999`。

Unix时间戳存储了Boss将重生的时间（以Unix时间表示）。这用于在重启后存储重生时间。如果你想知道这对应于什么时间，可以在线找到无数的Unix时间到实际时间的转换工具。

如果你希望在重载或重启后某个特定的Boss重生，你只需要清除 `:unixTimeStamp` 条目即可。

</div>

</details>

***

### spawnCooldown

设置Boss重生所需的时间，单位为**分钟**。

**注意：对于大型Boss，建议设置更长的重生时间！**。

| Key       |       值        | 默认值 |
|-----------|:-------------------:|:-------:|
| `spawnCooldown` | [整数](#integer) |  无   |

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

设置世界Boss在被传送回其生成点之前可以离开 `spawnLocation` 的半径。这可以防止玩家将Boss拖到更容易战斗的位置。

**注意：尽量避免将需要牵制半径的战斗区域设置得小于20格，因为这会使战斗体验变差。**

| Key       |       值        | 默认值 |
|-----------|:-------------------:|:-------:|
| `leashRadius` | [整数](#integer) |  无   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
leashRadius: 30
```

</div>

</details>

***

### 瞬态方块

也称为 `onSpawnBlockStates` 和 `onRemoveBlockStates`。

这些值允许区域Boss在进入战斗时生成方块，并在它们被移除时（即因超时逃脱或死亡时）移除方块。

**如果你将其与阶段Boss一起使用，这就是你可以让Boss在战斗中打开或关闭门/区域，甚至修改竞技场的方式！**

| Key       |          值          | 默认值 |
|-----------|:------------------------:|:-------:|
| `onSpawnBlockStates` | 参见详细解释 |  无   |

| Key       | 值  | 默认值 |
|-----------|:-------:|:-------:|
| `onRemoveBlockStates` | 参见详细解释 |  无   |

<details>

<summary><b>详细解释</b></summary>

<div align="left">

**所有方块都相对于生成位置。在开始设置任何方块之前，请确保你已经确定了最终的生成位置。**

</br>如果你已经创建了一个大型的瞬态方块区域，现在需要移动Boss，但你不想重新设置瞬态方块。那么你可以使用EliteScript的[传送]($language$/elitemobs/elitescript_actions.md&section=teleport)动作在Boss生成后将其移动到正确的位置。请记住，你需要相应地调整牵制半径。

由于设置方块的复杂性，不建议手动进行。你应该使用以下命令来完成：

-   /em registerblocks <regional\_boss\_file.yml> <on\_spawn/on\_remove>
-   /em registerblocksedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>
-   /em registerblocksarea <regional\_boss\_file.yml> <on\_spawn/on\_remove>
-   /em registerblocksareaedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>
-   /em cancelblocks

让我们分解一下。

**/em registerblocks <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

最基本的命令。这是一个开关，运行一次开始，再运行一次提交。就像所有其他命令一样，你选择是为 `on_spawn` 状态还是 `on_remove` 状态设置要修改的方块。

如果注册 `on_spawn`，这将在Boss生成或重生时修改方块。如果注册 `on_remove`，这将在Boss死亡或使用自定义Boss超时机制超时时修改方块。

要注册方块，只需在此设置开启时放置或移除你希望修改的方块。

**/em registerblocksedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

如果你想修改已经设置的方块，可以使用此命令。其工作方式与 `/em registerblocks <regional_boss_file.yml> <on_spawn/on\_remove>` 非常相似。

**/em registerblocksarea <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

就像 `/em registerblocks <regional_boss_file.yml> <on_spawn/on\_remove>` 一样，这允许你注册方块，但它允许通过选择两个对角（与worldedit / worldguard区域选择相同）来选择区域，而不是单独选择方块。

出于安全原因，区域选择的方块数量有上限（默认为200个，可在config.yml中修改）。请记住，每个方块都在同一个tick中被修改，所以如果你修改大量地形，在运行这些修改时可能会出现明显的延迟峰值。

**/em registerblocksareaedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

工作方式与 `/em registerblocksedit` 相同，但用于区域。可用于超出区域的200个（默认）方块注册限制。

**/em cancelblocks**

在任何时候，如果在注册方块时出错，你可以运行此命令取消注册。它将撤销你在该编辑/注册中开始注册的任何更改。

</div>

</details>

</div>

***

## 创建一个优秀、大型区域Boss战的专业技巧

1.  **认真思考你的自定义Boss的技能如何相互补充**。你不想让你的Boss大部分时间都因为施法而停滞不动，因为那实际上会让战斗变得非常容易。你也不想让Boss只有远程攻击而没有近战技能，或者反过来，除非你正在设计非常特殊的东西。实战测试很重要。
2.  **生命值 - 很多**。如果你想让人们真正组队来对抗Boss，生命值乘数应该稳定在10左右。
3.  **伤害 - 不要太多**。EliteMobs默认情况下已经非常致命，而且技能往往会呈指数级地更致命。与其将伤害提升到天花板，不如考虑使用技能来让Boss攻击更具威胁性。
4.  **漏洞无处不在**。格外确保地形不可利用。将Boss放在一个封闭的房间里，以防止人们试图从远处狙击它。箭矢免疫技能对于许多世界Boss来说可能极其重要，因为Minecraft的生物无法应对从远处区块被狙击的情况，所以如果你想允许弓箭攻击，请确保弓箭无法被利用。
5.  **了解插件**。击败EliteMobs有很多小技巧，比如有些技能可以通过使用盾牌来反制，而另一些则应该通过闪避甚至暂时逃离Boss来反制。你越了解技能的工作原理以及如何反制它们，你创建的Boss就会越好。