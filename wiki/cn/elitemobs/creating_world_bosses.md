# 创建世界Boss
*世界Boss有时也被称为区域Boss。*
## 他们是什么？

世界Boss是设置在特定位置以特定延迟时间出现的自定义Boss。这些也是Dungeons（地下城）中使用的boss。虽然在本节中，我们将专门讨论制作用于地下城之外的世界boss。

## 它们的目的是什么？

世界Boss允许玩家在知道战利品将会丰厚的情况下面对固定的挑战。

## 我需要什么才能制作一个世界Boss？

1. **一个地点**。建议选择一个Boss房间，周围大约有15个块的半径（横跨30个块）是由于Minecraft的攻击范围。此外，确保通过[WorldGuard](https://dev.bukkit.org/projects/worldguard)区域保护地形（以便玩家无法构建陷阱），且此地形不能被用于压迫战斗。
2. **一个复活时间**。复活计时器是必不可少的。我不建议将复活时间设定为不到30分钟，否则Boss的复活将会变得无足轻重。1小时是一个相当好的时间，但你也可能希望设定为Boss每天或者每周复活一次。
3. **一个逃脱时间**。复活的时间越长，逃脱的时间也应越长。也要考虑到逃脱时间应足够长，以便人们能舒适地挑战Boss。如果你不希望允许玩家对Boss进行自杀式攻击，那么逃脱计时器就很重要。即使你想进行大规模的每周复活Boss行动，也不建议，也不推荐这样做。
4. **一个自定义Boss**。世界Boss其实就是具有自定义产卵规则的自定义Boss。确保你选择的能力与良好的团队尺寸战斗兼容性。
5. **有趣的战利品**。对于世界Boss来说，除了挑战之外，最大的吸引力就是战利品。确保玩家可以从中获取一些他们无法从其他地方获取的东西。
6. **一个主题**。一个好的区域Boss应该有一个主题，包括主题位置和主题战利品。

## 特定于世界Boss的自定义Boss配置选项：

这些设置会在正常的自定义Boss配置文件中。 [一个关于这些选项的详细wiki页可以在这里找到]($language$/elitemobs/creating_bosses.md)。

<div align="center">

***

### isRegionalBoss

设置该boss是否为地区boss。地区boss又称为世界boss，所以你要将其设为 `true`。

| 键       |       值        | 默认值 |
|-----------|:-------------------:|:-------:|
| `isRegionalBoss` | [Boolean](#boolean) | `false` |

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

应通过使用命令 `/em addSpawnLocation <filename.yml>` 在游戏内设置出生点。

虽然有可能手动从配置中添加位置，但我不建议尝试这样做，因为错误的可能性太高。

| 键              |           值            | 默认值 |
|------------------|:---------------------------:|:-------:|
| `spawnLocations` | [字符串列表](#string_list) |  无   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

在配置文件中的位置（供高级用户使用）地区Boss的配置文件将该地区Boss的所有实例存储在一个单独的文件中，该文件包含多个降生位置以及响应计时器。

实际上，这意味着这个项目：

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

包含7个不同的地区Boss，位于不同的位置，并且响应计时器不同。

让我们详细地看看第一个地区Boss的情况：

```yaml
- elitemobs_sewer_maze,-70.17178578884845,168.2,-173.17112099568718,-271.24023,64.19999:1610710903931
```

由于这符合`world,x,y,z,pitch,yaw:unixTimeStamp`的格式，Boss在一个名为`elitemobs_sewer_maze`的世界中产生，x=`-70.17178578884845`, y=`168.2`, z=`-173.17112099568718`, pitch=`-271.24023`, yaw=`64.19999`。

Unix时间戳存储了Unix时间的时间，我们将在这个时间点再次响应。这被用于通过重新启动来存储响应时间。如果你想知道对应的时间是什么时候，你可以在线上找到许多Unix时间到真实时间的转换工具。

如果你希望一个特定的Boss在重新加载或重新启动后重新生产，你需要做的就是清除`:unixTimeStamp`项目。

</div>

</details>

***

### spawnCooldown

设置Boss重生需要多久，以**分钟**位单位.

**注意：推荐大Boss更长的复活！**.

| 键       |       值        | 默认值 |
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

设置世界Boss从`spawnLocation`能去的半径范围，超过这个范围，世界Boss会被传送回它的出生点。这可以防止玩家把boss拖到对战斗更有利的地方。

**注意：尽量避免制造需要小于20个块的束缚区的战斗区，这会使得战斗变得更糟。

| 键       |       值        | 默认值 |
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

### Transitive Blocks

也被称为`onSpawnBlockStates`和`onRemoveBlockStates`。

这些值允许地区Boss在进入战斗时产生块，在被移除时（也就是在超时或者死亡时）移除它们。

**这就是你可以使Boss在开门或关闭区域，或者甚至在战斗过程中修改竞技场的方式，如果你正在使用阶段Boss！**

| 键       |           值          | 默认值 |
|-----------|:----------------------:|:-------:|
| `onSpawnBlockStates` | 见详细解释 |  无   |


| 键       | 值  | 默认值 |
|-----------|:-------:|:-------:|
| `onRemoveBlockStates` | 见详细解释 |  无   |

<details> 

<summary><b>详细解释</b></summary>

<div align="left">

**所有的块都是相对于出生位置的。请确保你在设置任何块之前已经有了最后的出生位置。**

如果你已经做了一个大的可转换块区域，现在需要移动boss，但你不想重新设置可转换块。然后你可以使用EliteScript [Teleport]($language$/elitemobs/elitescript_actions.md&section=teleport) 操作，在boss出现后把它移动到正确的位置。请记住你将不得不相应地调整你的绳子。

由于设置块的复杂性，不推荐你手动操作。你应该使用以下命令进行操作：

- /em registerblocks <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em registerblocksedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em registerblocksarea <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em registerblocksareaedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em cancelblocks

让我们来详细介绍一下。

**/em registerblocks <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

这是最基本的命令。这是一个开关，你可以运行一次以开始，然后再运行一次以提交。就像所有其他命令一样，你可以选择你是为`on_spawn`还是`on_remove`状态设置这些块。

如果是在注册on\_spawn，当boss出生或重新出生时，这将修改块。如果是注册on\_remove，当boss通过自定义Boss超时机制死亡或超时时，这将会修改块。

要注册块，只需在此设置开启时，放置或移除你希望修改的块即可。

**/em registerblocksedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

如果你想修改已经设置的块，你可以使用这个命令。它的工作方式非常类似于`/em registerblocks <regional_boss_file.yml> <on_spawn/on_remove>`。

**/em registerblocksarea <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

这个命令会像`/em registerblocks <regional_boss_file.yml> <on_spawn/on_remove>`一样允许你注册块，但是它允许你通过获取两个对角线对应的角（就像worldedit / worldguard region selection一样）来选择它们，而不是逐个选择块。

出于安全原因，区域选择的块数有一个上限，默认是200个（可以在config.yml中修改）。记住，每个块在同一个刻都被修改，所以如果你修改了很多的地形，你可能会开始看到大的延迟峰值。

**/em registerblocksareaedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

这个命令的工作方式和`/em registerblocksedit`一样，但是它是针对区域的。可以用来超过区域的最高200（默认）块注册限制。

**/em cancelblocks**

任何时候，如果在注册块的过程中出现了错误，你都可以运行这个命令来取消注册。它将撤销你在那个编辑/注册过程中开始注册的所有更改。

</div>

</details>

</div>

***

## 制作一个好的、大的地区Boss战斗的专业技巧

1. **真正思考你的自定义Boss的能力是如何互补的**。你不希望你的boss在大部分时间里都停下来，因为他在施放某种东西，因为这可能会使战斗变得非常容易。你也不希望Boss有所有的远程攻击而没有近战能力，或者反过来，除非你正在设计一些非常特别的东西。游戏测试是非常重要的。


2. **健康——特别多**。如果你希望人们真正群聚起来对抗boss，那么那个健康乘子应该固定在10。


3. **伤害——不要太多**。EliteMobs本来就非常致命，默认情况下，能力往往是指数级的致命。而不是通过把伤害提得很高，考虑使用能力来让boss打得更硬。

4. **利用各种各样的漏洞**。务必确保地形不能被利用。把boss放在一个闭合的房间里，防止人们试图从远处狙击它。箭头无敌力量对于许多世界Boss可能都非常重要，因为Minecraft的怪物无法处理从区块远处被狙击的情况，所以如果你想允许弓箭攻击，确保弓箭不能被利用。

5. **了解插件**。EliteMobs有很多小技巧可以打败，比如一些力量可以通过使用盾牌来抵消，而其他的则应该通过躲闪或者暂时逃离Boss来抵消。你对力量的工作方式和它们是如何被抵消的了解得越多，你制作的boss就会越好。