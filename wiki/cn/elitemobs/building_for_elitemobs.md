```markdown
# 为 EliteMobs 构建内容

以下维基页面将帮助您了解创建 EliteMobs 地下城和竞技场所需的流程。

词汇表：

- "Boss"（首领）- 大型遭遇战，旨在由多人共同对抗
- "Miniboss"（小首领）- 较小的遭遇战，通常可以由 1 名玩家击杀
- "Fodder"（杂兵）- 相对容易击杀的怪物

## 理解 EliteMobs 地下城类别

### 巢穴 (Lairs)

最小的尺寸类别

巢穴通常是 50x50 的单体建筑，以世界形式分布，通常包含一个大型首领遭遇战，尽管有些也可能包含一个小首领和一些杂兵。

### 小型地下城 (Minidungeons)

中等尺寸类别

小型地下城更接近 100x100 或 150x150 的结构，通常包含多个结构或具有多个部分的结构。它们有 1 个首领，通常至少有 3 个或更多小首领。它们也有很多杂兵。

### 冒险 (Adventures)

冒险是完整的冒险地图，通常不以方块衡量。它们是城市大小甚至更大。它们有 1 个首领和 10+ 个小首领，以及数十种独特的杂兵，地图中总数通常达到数百或数千。

### 竞技场 (Arenas)

竞技场是 EliteMobs 中基于波次的生存竞技场挑战。它们通常是 100x100。它们可以有任意数量的波次，但通常不建议超过 50 波。

### 副本地下城 (Instanced Dungeons)

副本地下城类似于小型地下城，但它们是副本化的。这意味着每当一个玩家或一组玩家希望进入一个副本地下城时，都会为他们生成一个新的世界。

副本地下城的行为很像您在喜爱的 MMO 中可能找到的副本地下城。它们通常有三个难度级别，难度越高，奖励越好。它们允许玩家通过装备在副本地下城中掉落的战利品来扮演坦克或 DPS 的角色。怪物也会根据玩家启动副本时选择的难度使用不同的能力组合。在副本中被击杀的任何怪物在该副本持续期间都不会重生。

在副本地下城中掉落的任何战利品都使用贪婪或需求系统，这意味着玩家可以对掉落的物品进行投票。如前所述，副本地下城战利品是专门制作的，要么偏向防御（坦克），要么偏向攻击（DPS）。

### 团队副本 (Raids)

副本化内容 - 即将推出

## 主题设计

关于任何 EliteMobs 结构，最重要的事情是主题。主题影响建筑的设计、其内容、其背景故事及其首领。

举个例子，您可以在这里看到[北极](https://magmaguy.itch.io/elitemobs-the-north-pole)。它的概念是将与圣诞节相关的首领放入一个雪球中，从而形成一个视觉上引人注目且机制上有趣的地点。

这是另一个例子，[绿洲](https://magmaguy.itch.io/elitemobs-oasis)。它的核心是创建一个被亡灵和木乃伊占领的古埃及地点，它是 EliteMobs 中最受欢迎的建筑之一。

## 战斗区域

战斗区域应避免创建容易被利用的地形。这意味着要避免制作玩家可以爬上去以确保安全的柱子、可以用来“卡”AI 的装饰物以及其他此类障碍物。总会发现一些漏洞，这不太重要，但首领区域应较少受到这些漏洞的影响。

理想的首领战斗区域应相对平坦、无障碍，半径约 30 个方块，并且可以包含一些玩家必须躲在后面以应对某些首领机制的柱子或其他地图元素。

如果走廊中会有增援怪物，其宽度应至少为 5 个方块。小首领竞技场半径约为 15 个方块，具体取决于它们的能力/主题。

请注意，这些是最小尺寸。如果超出这些尺寸，通常没有问题。

请记住，您可以使用 [EliteScript]($language$/elitemobs/elitescript_actions.md&section=place_block) 或 [过渡方块]($language$elitemobs/creating_world_bosses.md&section=onspawnblockstates-and-onremoveblockstates) 来封闭或改变环境方块。这是确保玩家只有在击败特定怪物后才能进一步前进的好方法。

## 为 EliteMobs 设计内容

您对 EliteMobs 了解得越多，您为其制作的内容就会越好。以下是 EliteMobs 功能列表，它们将帮助您为您的地下城构思有趣的内容：

- [区域首领]($language$/elitemobs/creating_world_bosses.md) - 地下城中的每个生物都是区域首领，这意味着它们有一个牵引范围（如果它们超出一定距离，就会被拉回它们的生成点）并按计时器重生。
- [创建首领]($language$/elitemobs/creating_bosses.md) 这将向您展示首领可以做和成为的一切，例如伪装、生命值乘数、是否可以移动以及移动速度、嘲讽等等！
- [EliteScript]($language$/elitemobs/creating_powers.md) EliteScript 是您在创建令人难忘的遭遇战时最强大的工具，只有您的想象力是极限。
- [宝箱]($language$/elitemobs/creating_treasure_chests.md) 它们可以包含物品，甚至变成敌人
- [首领阶段]($language$/elitemobs/creating_boss_phases.md) - 首领可以有阶段。这个系统非常强大，因为首领在阶段之间可以变成任何东西，包括不同的实体类型、不同的伪装、不同的自定义模型等等。
- [过渡方块]($language$/elitemobs/creating_world_bosses.md&section=onspawnblockstates-and-onremoveblockstates) 这些是首领生成或死亡时放置的方块。它们也可以在首领改变阶段时生成和清除！这些可以用来制作非常有趣的动态竞技场。
- [虫洞]($language$/elitemobs/creating_wormholes.md) - 可以将玩家传送到其他地点的酷炫传送门。

## 遭遇战设计

在设计战斗区域时，遭遇战设计应优先考虑。理想情况下，您应该对想要使用的能力有一个想法，或者至少对能力的主题有一个想法——例如火焰、闪电、冰霜、增援，或任何其他符合 EliteMobs 能力的内容。一旦您知道想要的能力是什么，就可以相应地设计战斗区域。

如果首领有需要逃离它们的能力，区域就需要足够大以容纳这一点。如果有一种能力需要躲在障碍物后面，结构就需要那种障碍物。构建这些竞技场有很多细节需要考虑，您考虑得越多，遭遇战就会越好。

## 修改 EliteMobs 资源包

截至 Minecraft 1.21.4 版本和 EliteMobs 9.1.13 版本，EliteMobs 资源包已更新，以符合 Minecraft 使用自定义模型的新方法。

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
      - 此文件夹包含实际的模型文件，格式为 JSON 文件。
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
        - **items** （这是存储模型特定纹理的地方）
        - **primis_map**
        - **ui**
  - **minecraft**
    - **atlases**
    - **font**
    - **models**
      - **items** （包含指定 Minecraft 中哪些物品应使用自定义模型的 JSON 文件）
    - **sounds**
      - **custom** （存储自定义声音文件）

---

让我们分解一下 *.minecraft\resourcepacks\elitemobs_resource_pack\assets\elitemobs\items\coins\* 文件夹中的 JSON 文件是如何构建的以及它的作用：

```
{
  "model": {
    "type": "minecraft:model",
    "model": "elitemobs:coins/coin1"
  }
}
```

目的：
这个 JSON 文件告诉 Minecraft 这是一个模型，指定了模型的类型，并指明了模型文件的位置。

关键字段：

`type: minecraft:model`
这指定了文件代表一个模型类型。
`model: elitemobs:coins/coin1`
这指向了资源包中模型的位置。

路径详情：

`elitemobs:` 指示 Minecraft 在 assets 目录内的 elitemobs 文件夹中查找。
`coins/coin1` 指定了子文件夹和模型文件名。

引用模型文件的完整路径是：
`*.minecraft\resourcepacks\elitemobs_resource_pack\assets\elitemobs\models\coins\coin1.json`

---

测试您的自定义模型是否正常工作的一个好方法是使用以下命令：

`/minecraft:give @p apple[item_model="elitemobs:coins/coin1"]`

工作原理：
此命令会给您一个使用 `elitemobs:coins/coin1` 模型的苹果。如果资源包设置正确，您应该会看到自定义硬币模型应用于苹果物品。

测试您自己的自定义模型：
如果您已将自己的自定义模型添加到资源包中，请按照以下步骤进行测试：

1. **创建模型 JSON 文件：**
   将您的 JSON 文件放置在 `items` 目录内的相应子文件夹中。
   例如：
   `assets/elitemobs/items/mymodel/myawesomemodel.json`

2. **添加模型文件：**
   将相应的模型文件 (`myawesomemodel.json`) 添加到同一子文件夹内的 `models` 文件夹中。
   例如：
   `assets/elitemobs/models/mymodel/myawesomemodel.json`

3. **添加纹理：**
   在 `textures` 文件夹中添加模型的纹理文件。
   例如：
   `assets/elitemobs/textures/items/myawesomemodel.png`

---

一切设置完成后，使用以下命令测试您的模型：

`/minecraft:give @p apple[item_model="elitemobs:mymodel/myawesomemodel"]`

如果一切操作正确，您的手中会收到一个苹果，并且它将显示您的自定义模型，而不是默认的苹果模型。

## 有问题？

[随时在 Discord 上提问！](https://discord.gg/9f5QSka)
```