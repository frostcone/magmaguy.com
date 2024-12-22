# 为 EliteMobs 构建

以下维基页面帮助您了解创建 EliteMobs 地牢和竞技场所需的过程。

词汇表：

- “Boss” - 大型遭遇战，旨在由很多人战斗
- “小 Boss” - 较小的遭遇战，通常可以被 1 名玩家击杀
- “炮灰” - 相对容易击杀的怪物

## 理解 EliteMobs 地牢类别

### 巢穴

最小的尺寸类别

巢穴通常是 50x50 的单体建筑，分布在各个世界中，通常包含一个大型 Boss 遭遇战，尽管有些也可能包含一个小 Boss 和一些炮灰。

### 小型地牢

中等尺寸类别

小型地牢更接近 100x100 或 150x150 的结构，通常具有多个结构或具有多个部分的结构。这些地牢有 1 个 Boss，通常至少有 3 个或更多的小
Boss。它们也有大量的炮灰。

### 冒险

冒险是完整的冒险地图，通常不以方块衡量。它们有城市大小甚至更大。它们有 1 个 Boss 和 10 个以上的小
Boss，以及数十个独特的炮灰，通常在地图上总计有数百或数千个。

### 竞技场

竞技场是 EliteMobs 中基于波数的生存竞技场挑战。这些通常是 100x100。它们可以有任意数量的波数，但不建议超过 50 波。

### 实例地牢

实例地牢与小型地牢类似，只是它们是实例化的。这意味着每次玩家或一组玩家想要进入实例地牢时，都会为他们生成一个新的世界。

实例地牢的行为很像您在最喜欢的 MMO 中可能找到的实例地牢。它们通常有三个难度级别，难度越高，奖励越好。它们让玩家可以通过装备在实例地牢中掉落的战利品来扮演坦克或
DPS 的角色。怪物也会根据玩家启动实例时选择的难度而使用不同的力量组合。任何在实例中被杀死的怪物都不会在该实例的持续时间内重生。

任何在实例地牢中掉落的战利品都使用贪婪或需求系统，这意味着玩家可以对掉落的物品进行投票。如前所述，实例地牢战利品是专门为防御（坦克）或进攻（DPS）而设计的。

### 团队副本

实例内容 - 即将推出

## 主题

任何 EliteMobs 结构最重要的是主题。主题会影响建筑的设计、内容、背景故事和 Boss。

例如，您可以在此处看到[北极](https://magmaguy.itch.io/elitemobs-the-north-pole)。它有一个将圣诞节相关的 Boss
放在雪球中的概念，从而产生了一个视觉上引人注目且机械上有趣的位置。

这是另一个例子，[绿洲](https://magmaguy.itch.io/elitemobs-oasis)。这完全是为了创建一个被亡灵和木乃伊淹没的古埃及遗址，它是
EliteMobs 中最受欢迎的建筑之一。

## 战斗地点

战斗地点应避免创建容易被利用的地形。这意味着避免创建玩家可以爬上去以确保安全的柱子、可用于欺骗 AI
的装饰品以及其他此类障碍。总会发现一些漏洞，但这并不太重要，但 Boss 地点应更不容易受到这些漏洞的影响。

理想的 Boss 战斗区域相对平坦、畅通无阻，半径约 30 个方块，并且可以包含一些玩家必须躲藏在后面的柱子或其他地图元素，以清除某些
Boss 机制。

如果走廊中打算有小怪，则走廊的宽度应至少为 5 个方块。小 Boss 竞技场的半径可以约为 15 个方块，具体取决于它们拥有的力量/主题。

请注意，这些是最小尺寸。如果您超过这些尺寸，则没有任何问题。

请记住，您可以使用 [EliteScript]($language$/elitemobs/elitescript_actions.md&section=place_block)
或 [传递性方块]($language$elitemobs/creating_world_bosses.md&section=onspawnblockstates-and-onremoveblockstates)
密封或更改环境方块。这是一种确保玩家只有在击败特定怪物后才能进一步前进的好方法。

## 为 EliteMobs 设计

您对 EliteMobs 的了解越多，您为它制作的内容就越好。以下是 EliteMobs 功能的列表，这些功能将帮助您为您的地牢提出有趣的东西：

- [区域 Boss]($language$/elitemobs/creating_world_bosses.md) - 地牢中的每个生物都是区域
  Boss，这意味着它们有牵引绳（如果它们超过一定距离，它们会被拉回它们的生成点）并且在计时器上重生。
- [创建 Boss]($language$/elitemobs/creating_bosses.md) 这将向您展示 Boss 可以做的一切，例如伪装、生命值乘数、它是否可以移动以及移动速度、嘲讽等等！
- [EliteScript]($language$/elitemobs/creating_powers.md) EliteScript 是您在创建难忘的遭遇战时可用的最强大的工具，您的想象力是唯一的限制。
- [宝箱]($language$/elitemobs/creating_treasure_chests.md) 这些可以包含物品甚至变成敌人
- [Boss 阶段]($language$/elitemobs/creating_boss_phases.md) - Boss 可以有阶段。此系统非常强大，因为 Boss
  可以在阶段之间变成任何东西，包括不同的实体类型、不同的伪装、不同的自定义模型等等。
- [传递性方块]($language$/elitemobs/creating_world_bosses.md&section=onspawnblockstates-and-onremoveblockstates) 这些是当
  Boss 生成或死亡时放置的方块。当 Boss 改变阶段时，也可以生成和清除它们！这些可用于制作非常有趣的动态竞技场。
- [虫洞]($language$/elitemobs/creating_wormholes.md) - 可以将玩家传送到其他位置的炫酷传送门。

## 遭遇战设计

在设计战斗区域时，遭遇战设计应优先考虑。理想情况下，您会知道您想要使用哪些力量，或者至少知道力量的主题应该是什么 -
比如火焰、闪电、冰、增援，或任何其他与 EliteMobs 力量相符的东西。一旦您知道您想要的力量是什么，您就可以相应地设计战斗区域。

如果 Boss 的力量需要远离它们，则该区域需要足够大以容纳它。如果有一种力量需要你躲在障碍物后面，那么该结构就需要那种障碍物。建造这些竞技场有很多细节，你考虑得越多，遭遇战就会越好。

## 修改 EliteMobs 资源包

从 Minecraft 版本 1.21.4 和 EliteMobs 版本 9.1.13 开始，EliteMobs 资源包已更新，以符合 Minecraft 使用自定义模型的新方法。

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
            - 此文件夹包含作为 JSON 文件的实际模型文件。
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

让我们分解一下 *.minecraft\resourcepacks\elitemobs_resource_pack\assets\elitemobs\items\coins\* 文件夹中 JSON
文件的结构以及它的作用：

```
{
  "model": {
    "type": "minecraft:model",
    "model": "elitemobs:coins/coin1"
  }
}
```

目的：
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

测试自定义模型是否正常工作的一个好方法是使用以下命令：

/minecraft:give @p apple[item_model="elitemobs:coins/coin1"]

它是如何工作的：
此命令会给您一个使用 `elitemobs:coins/coin1` 模型的苹果。如果资源包设置正确，您应该会看到自定义硬币模型应用于苹果物品。

测试您自己的自定义模型：
如果您已将自己的自定义模型添加到资源包中，请按照以下步骤进行测试：

1. **创建模型 JSON**：
   将您的 JSON 文件放在 `items` 目录中的适当子文件夹中。
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

一切都设置好后，请使用以下命令测试您的模型：

`/minecraft:give @p apple[item_model="elitemobs:mymodel/myawesomemodel"]`

如果一切都正确完成，您将在手中收到一个苹果，它将显示您的自定义模型而不是默认的苹果模型。

## 有问题吗？

[随时在 Discord 上提问！](https://discord.gg/9f5QSka)
