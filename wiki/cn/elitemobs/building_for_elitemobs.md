# 为 EliteMobs 构建

以下 wiki 页面可帮助您了解创建 EliteMobs 地牢和竞技场所需的过程。

词汇：

- “首领” - 大型遭遇战，旨在由很多人一起战斗
- “迷你首领” - 较小的遭遇战，通常可以由 1 个玩家杀死
- “炮灰” - 相对容易杀死的生物

## 了解 EliteMobs 地牢类别

### 巢穴

最小尺寸类别

巢穴通常是 50x50 的单构建结构，以世界形式分布，通常包含一次大型首领遭遇战，尽管有些也可以包含一个迷你首领和一些炮灰。

### 迷你地牢

中等尺寸类别

迷你地牢更接近 100x100 或 150x150 的结构，通常具有多个结构或具有多个部分的结构。这些地牢有 1 个首领，通常至少有 3
个或更多迷你首领。它们也有很多炮灰。

### 冒险

冒险是完整的冒险地图，通常不以方块来衡量。这些地图的大小与城市相当，甚至更大。它们有 1 个首领和 10
多个迷你首领，以及数十个独特的炮灰，这些炮灰通常在地图上的总数达到数百或数千。

### 竞技场

竞技场是 EliteMobs 中基于波次的生存竞技场挑战。这些通常是 100x100。它们可以有任意数量的波次，但通常不建议超过 50 次。

### 实例地牢

实例地牢与迷你地牢类似，不同之处在于它们是实例化的。这意味着每次玩家或一组玩家希望进入实例地牢时，都会专门为他们生成一个新的世界。

实例地牢的行为很像您在自己喜欢的 MMO 中可能找到的实例地牢。它们通常具有三个难度级别，难度越高奖励越好。它们让玩家通过装备实例地牢中掉落的战利品来扮演坦克或
DPS 的角色。生物也会根据玩家启动实例时选择的难度来使用不同的能力集。在实例中被杀死的任何生物都不会在该实例的持续时间内重生。

在实例地牢中掉落的任何战利品都使用贪婪或需求系统，这意味着玩家可以对掉落的物品进行投票。如前所述，实例地牢战利品是专门为防御型（坦克）或攻击型（DPS）而制作的。

### 团队副本

实例内容 - 即将推出

## 主题

任何 EliteMobs 结构最重要的事情是主题。主题会影响建筑的设计、其内容、其背景故事及其首领。

例如，您可以在[此处](https://magmaguy.itch.io/elitemobs-the-north-pole)看到[北极]
。它的概念是将与圣诞节相关的首领放在一个雪球中，从而形成一个视觉上引人注目且在机械上有趣的位置。

这是另一个示例，[绿洲](https://magmaguy.itch.io/elitemobs-oasis)。这完全是为了制作一个被不死生物和木乃伊淹没的古埃及地点，它是
EliteMobs 中最受欢迎的建筑之一。

## 战斗地点

战斗地点应避免创建容易被利用的地形。这意味着避免制作玩家可以攀爬以确保安全的柱子、可用于欺骗 AI
的装饰以及其他此类障碍。总会发现一些漏洞，但这并不太重要，但首领地点应该更不容易受到这些漏洞的影响。

理想的首领战斗区域相对平坦、无障碍、半径约为 30 个方块，并且可以包含一些柱子或其他地图元素，玩家必须躲在这些柱子或其他地图元素后面才能清除某些首领机制。

如果走廊中打算有小怪，则走廊的目标宽度应至少为 5 个方块。迷你首领竞技场的半径可以为 15 个方块左右，具体取决于它们的能力/主题。

请注意，这些是最小尺寸。如果超过了，实际上没有任何问题。

请记住，您可以使用 [EliteScript]($language$/elitemobs/elitescript_actions.md&section=place_block)
或 [过渡方块]($language$elitemobs/creating_world_bosses.md&section=onspawnblockstates-and-onremoveblockstates)
密封或更改环境方块。这是确保玩家只有在击败特定生物后才能进一步前进的好方法。

## 为 EliteMobs 设计

您越了解 EliteMobs，您为它制作的内容就会越好。以下是 EliteMobs 功能的列表，这些功能将帮助您为地牢提出有趣的东西：

- [区域首领]($language$/elitemobs/creating_world_bosses.md) -
  地牢中的每个生物都是区域首领，这意味着它们有束缚（如果它们超过一定距离，它们会被拉回到它们的生成点）并且会按计时器重生。
- [创建首领]($language$/elitemobs/creating_bosses.md) 这将向您展示首领可以做的所有事情，例如伪装、生命值倍增器、它是否可以移动以及移动速度、嘲讽等等！
- [EliteScript]($language$/elitemobs/creating_powers.md) EliteScript 是您在创建令人难忘的遭遇战时可以使用的最强大的工具，在其中只有您的想象力才是极限。
- [宝箱]($language$/elitemobs/creating_treasure_chests.md) 这些可以包含物品甚至变成敌人
- [首领阶段]($language$/elitemobs/creating_boss_phases.md) -
  首领可以有阶段。这个系统非常强大，因为首领可以在阶段之间变成任何东西，包括不同的实体类型、不同的伪装、不同的自定义模型等等。
- [过渡方块]($language$/elitemobs/creating_world_bosses.md&section=onspawnblockstates-and-onremoveblockstates)
  这些是首领生成或死亡时放置的方块。当首领改变阶段时，它们也可以生成和清除！这些可用于制作非常有趣的动态竞技场。
- [虫洞]($language$/elitemobs/creating_wormholes.md) - 可以将玩家传送到其他位置的酷炫传送门。

## 遭遇战设计

设计战斗区域时应优先考虑遭遇战设计。理想情况下，您会了解您想使用哪些能力，或者至少了解这些能力的主题应该是什么 -
例如火焰、闪电、冰、增援或其他任何适合 EliteMobs 能力的东西。一旦您知道自己想要什么能力，就可以相应地设计战斗区域。

如果首领具有需要远离它们的能力，则该区域需要足够大以容纳该能力。如果有一种能力要求您躲在障碍物后面，则结构需要那种障碍物。构建这些竞技场有很多细节可以考虑，您考虑的越多，遭遇战就会越好。

## 修改 EliteMobs 资源包

从 Minecraft 1.21.4 版本和 EliteMobs 9.1.13 版本开始，EliteMobs 资源包已更新，以与 Minecraft 使用自定义模型的新方法保持一致。

更新后的 EliteMobs 资源包结构如下：

**elitemobs_resource_pack**

- **assets**
    - **elitemobs**
        - **items**
            - 此目录包含定义 Minecraft 可以使用哪些自定义模型的 JSON 文件。实际模型存储在 `models` 文件夹中。
            - 子目录：
                - **coins**
                - **equipment**
                - **primis_map**
                - **ui**
        - **models**
            - 此文件夹包含 JSON 文件形式的实际模型文件。
            - 子目录：
                - **coins**
                - **equipment**
                - **primis_map**
                - **ui**
        - **textures**
            - 此文件夹存储所有纹理，包括模型使用的纹理。
            - 子目录：
                - **blocks**
                - **gui**
                - **items**（这是存储特定于模型的纹理的位置）
                - **primis_map**
                - **ui**
    - **minecraft**
        - **atlases**
        - **font**
        - **models**
            - **items**（包含指定 Minecraft 中哪些物品应使用自定义模型的 JSON 文件）
        - **sounds**
            - **custom**（存储自定义声音文件）

---

让我们分解一下 `*.minecraft\resourcepacks\elitemobs_resource_pack\assets\elitemobs\items\coins\*` 文件夹中 JSON
文件的结构及其作用：

```
{
  "model": {
    "type": "minecraft:model",
    "model": "elitemobs:coins/coin1"
  }
}
```

用途：
此 JSON 文件告诉 Minecraft 这是一个模型，指定模型的类型，并指示模型文件的位置。

关键字段：

`type: minecraft:model`
这指定该文件代表模型类型。
`model: elitemobs:coins/coin1`
这指向资源包中模型的位置。

路径详细信息：

`elitemobs:` 指示 Minecraft 在 assets 目录中查找 elitemobs 文件夹。
`coins/coin1` 指定子文件夹和模型文件名。

引用的模型文件的完整路径为：
`*.minecraft\resourcepacks\elitemobs_resource_pack\assets\elitemobs\models\coins\coin1.json`

---

测试您的自定义模型是否正常工作的一个好方法是使用以下命令：

/minecraft:give @p apple[item_model="elitemobs:coins/coin1"]

工作原理：
此命令会给您一个使用 `elitemobs:coins/coin1` 模型的苹果。如果资源包设置正确，您应该会看到应用于苹果物品的自定义硬币模型。

测试您自己的自定义模型：
如果您已将自己的自定义模型添加到资源包中，请按照以下步骤进行测试：

1. **创建模型 JSON**：
   将您的 JSON 文件放置在 `items` 目录中的适当子文件夹中。
   例如：
   `assets/elitemobs/items/mymodel/myawesomemodel.json`

2. **添加模型文件**：
   将相应的模型文件 (`myawesomemodel.json`) 添加到同一子文件夹中的 `models` 文件夹中。
   例如：
   `assets/elitemobs/models/mymodel/myawesomemodel.json`

3. **添加纹理**：
   在 `textures` 文件夹中添加模型的纹理文件。
   例如：
   `assets/elitemobs/textures/items/myawesomemodel.png`

---

一切设置好后，使用以下命令测试您的模型：

`/minecraft:give @p apple[item_model="elitemobs:mymodel/myawesomemodel"]`

如果一切都正确完成，您将收到一个在您手中的苹果，并且它将显示您的自定义模型而不是默认的苹果模型。

## 问题？

[随时在 discord 上提问！](https://discord.gg/9f5QSka)
