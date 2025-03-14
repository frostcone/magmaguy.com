# 创建世界首领

*世界首领有时也被称为区域首领。*
## 它们是什么？

世界首领是自定义首领，它们会在特定位置以特定延迟生成。这些也是地牢中使用的首领。尽管在本节中，我们将专门讨论在地下城外使用的世界首领。

## 它们的用途是什么？

世界首领允许玩家面对固定的挑战，同时知道战利品将是丰厚的。

## 创建世界首领需要什么？

1. **一个位置**。建议使用首领房间，半径约为 15 个方块（跨度 30 个方块），因为这是 Minecraft
   的攻击范围。此外，请确保地形受到 [WorldGuard](https://dev.bukkit.org/projects/worldguard)
   区域的保护（因此玩家无法建造陷阱），并且地形不会被利用进行战斗。
2. **一个重生时间**。重生计时器至关重要。我不建议设置少于 30 分钟的重生计时器，否则首领的重生将不再是一个事件。1
   小时是一个相当不错的时间，但您可能还希望让首领每天甚至每周重生一次。
3. **一个逃脱时间**
   。重生时间越长，逃脱时间应该越长。还要考虑到逃脱时间应该足够长，以便人们可以舒适地挑战首领。如果您不想让玩家通过神风特攻的方式杀死首领，逃脱计时器非常重要。如果您想进行为期一周的大型重生首领，这不是强制性的，甚至不建议这样做。
4. **一个自定义首领**。世界首领实际上只是具有自定义生成规则的自定义首领。请确保您选择具有良好突袭规模战斗兼容性的能力。
5. **有趣的战利品**。除了挑战之外，世界首领的最大吸引力在于战利品。确保玩家可以从中获得一些在其他地方根本无法获得的东西。
6. **一个主题**。一个好的区域首领应该有一个主题，包括主题位置和主题战利品。

## 世界首领的自定义首领配置选项：

这些设置已添加到普通的自定义首领配置文件中。 [有关这些配置文件的详细维基页面，请点击此处]($language$/elitemobs/creating_bosses.md)。

<div align="center">

***

### isRegionalBoss

设置首领是否为区域首领。区域首领是世界首领的另一个名称，因此您需要将其设置为 `true`。

| 键                |       值        |   默认值   |
|------------------|:--------------:|:-------:|
| `isRegionalBoss` | [布尔](#boolean) | `false` |

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

生成位置应该使用游戏中的命令 `/em addSpawnLocation <filename.yml>` 进行设置。

虽然可以手动从配置文件中添加位置，但我并不建议这样做，因为它太容易出错。

| 键                |           值           | 默认值 |
|------------------|:---------------------:|:---:|
| `spawnLocations` | [字符串列表](#string_list) |  无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

配置文件中的位置（供高级用户使用）区域首领的配置文件通过存储多个生成位置以及重生计时器，在一个文件中存储该区域首领的所有实例。

实际上，这意味着此条目：

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

包含 7 个不同的区域首领，位于不同的位置，并具有不同的重生计时器。

让我们分解一下详细信息，看看第一个区域首领：

```yaml
- elitemobs_sewer_maze,-70.17178578884845,168.2,-173.17112099568718,-271.24023,64.19999:1610710903931
```

由于这遵循格式 `world,x,y,z,pitch,yaw:unixTimeStamp`，因此首领生成在名为 `elitemobs_sewer_maze` 的世界中，坐标为
x = `-70.17178578884845`，y = `168.2`，z = `-173.17112099568718`，俯仰角 = `-271.24023`，偏航角 = `64.19999`。

unix 时间戳以 unix 时间格式存储首领重生的时间。这用于通过重启存储重生时间。如果您想知道它对应的时间，您可以在网上找到无数的
unix 时间到实时转换工具。

如果您希望特定的首领在重新加载或重启后重生，您只需清除 `:unixTimeStamp` 条目即可。

</div>

</details>

***

### spawnCooldown

设置首领重生的时间，以**分钟**为单位。

**注意：对于大型首领，建议使用更长的重生时间！**。

| 键               |       值        | 默认值 |
|-----------------|:--------------:|:---:|
| `spawnCooldown` | [整数](#integer) |  无  |

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

设置世界首领在被传送回其生成点之前，距离 `spawnLocation` 的半径。这可以防止玩家将首领拖到更容易战斗的位置。

**注意：尽量避免创建需要栓绳才能小于 20 个方块的战斗区域，因为这会使战斗变得更糟。**

| 键             |       值        | 默认值 |
|---------------|:--------------:|:---:|
| `leashRadius` | [整数](#integer) |  无  |

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

这些值允许区域首领在进入战斗时生成方块，并在被移除时移除它们，这意味着当它们因超时而逃脱或死亡时。

**这就是您如何在战斗中使首领打开或关闭门/区域，甚至修改竞技场的方式，如果您将其与阶段首领一起使用！**

| 键                    |    值    | 默认值 |
|----------------------|:-------:|:---:|
| `onSpawnBlockStates` | 请参阅详细说明 |  无  |

| 键                     |    值    | 默认值 |
|-----------------------|:-------:|:---:|
| `onRemoveBlockStates` | 请参阅详细说明 |  无  |

<details> 

<summary><b>详细说明</b></summary>

<div align="left">

**所有方块都相对于生成位置。在开始设置任何方块之前，请确保您拥有最终的生成位置。**

</br>如果您已经制作了一个大型的可传递方块区域，现在需要移动首领，但您不想重做可传递方块。然后，您可以使用
EliteScript [传送]($language$/elitemobs/elitescript_actions.md&section=teleport) 操作在首领生成后将其移动到正确的位置。请记住，您必须相应地调整您的栓绳。

由于设置方块的复杂性，不建议您手动执行此操作。您应该使用以下命令来执行此操作：

- /em registerblocks <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em registerblocksedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em registerblocksarea <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em registerblocksareaedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em cancelblocks

让我们分解一下。

**/em registerblocks <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

最基本的命令。这是一个切换，您运行一次以启动，再次运行以提交。就像所有其他命令一样，您选择是否将这些方块设置为针对 `on_spawn`
或 `on_remove` 状态进行修改。

如果注册 on\_spawn，这将在首领生成或重生时修改方块。如果注册 on\_remove，这将在首领死亡或使用自定义首领超时机制超时时修改方块。

要注册方块，只需在此设置开启时放置或移除您希望修改的方块即可。

**/em registerblocksedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

如果您想修改已经设置的方块，您可以使用此命令。其工作方式与 `/em registerblocks <regional_boss_file.yml> <on_spawn/on_remove>`
非常相似。

**/em registerblocksarea <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

与 `/em registerblocks <regional_boss_file.yml> <on_spawn/on\_remove>` 类似，这允许您注册方块，但它允许通过获取两个相对的角（与
worldedit / worldguard 区域选择相同）来选择它们，而不是单独选择方块。

出于安全原因，区域选择的上限为 200 个方块（默认情况下，可在 config.yml
中修改）。请记住，每个方块都在同一刻进行修改，因此如果您正在修改大量地形，您可能会在运行这些修改时开始看到大的延迟峰值。

**/em registerblocksareaedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

其工作方式与 `/em registerblocksedit` 相同，但用于区域。可用于超过区域的 200 个（默认）方块注册限制。

**/em cancelblocks**

如果您在注册方块时犯了错误，您可以随时运行此命令以取消注册。它将恢复您在该编辑/注册中开始注册的任何更改。

</div>

</details>

</div>

***

## 制作一场精彩的大型区域首领战斗的专业技巧

1. **认真思考您的自定义首领的能力如何相互补充**
   。您不希望您的首领花费大部分时间停止，因为它正在施放某些东西，因为这实际上会使战斗变得非常容易。您也不希望首领拥有所有远程攻击而没有近战能力，反之亦然，除非您正在设计非常具体的东西。游戏测试非常重要。


2. **生命值 - 大量生命值**。如果您希望人们真正组队来对抗首领，那么生命值倍增器可能应该达到 10。


3. **伤害 - 不要太多**。默认情况下，EliteMobs 已经非常致命，并且能力往往会呈指数级地致命。与其将伤害提升到极限，不如考虑使用能力使首领攻击更强。


4. **漏洞，无处不在**。请格外确保地形不可利用。将首领放在封闭的房间里，以防止人们试图从远处狙击它。箭矢无敌能力对于许多世界首领来说可能非常重要，因为
   Minecraft 怪物无法应对从远处被狙击，因此如果您想允许弓箭攻击，请确保弓箭不会被利用。


5. **了解插件**。击败 EliteMobs 有很多小技巧，例如如何通过使用盾牌来对抗某些能力，而其他能力应该通过躲避甚至暂时逃离首领来对抗。您越了解这些能力的工作原理以及如何对抗它们，您制作的首领就越好。
