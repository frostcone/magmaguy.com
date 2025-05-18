如果您有此处未列出的问题，请***查看侧边栏***，看看维基中是否有专门介绍它的页面！

# 设置和安装常见问题解答

### 如何禁用 EliteMobs 的战利品或金币掉落，以及是否应该这样做？

<details>
<summary>
信息
</summary>

EliteMobs 允许您控制战利品和金币掉落，但在进行更改之前，了解这些掉落如何影响游戏玩法和进程非常重要：

- **战利品和金币掉落：**
战利品掉落是 EliteMobs 的核心功能，与玩家穿戴的装备相关。禁用战利品将使玩家无法获得面对更高级精英所需的更好装备，从而完全停止进程。

金币对于游戏内经济至关重要，用于购买和升级装备。禁用金币掉落将严重扰乱此系统，对玩家体验和平衡产生负面影响。

要禁用战利品和金币掉落，请打开 `ItemSettings.yml` 文件并将 `doEliteMobsLoot` 设置为 `false`。

- **地下城中的自定义 Boss 战利品：**
自定义 Boss 的战利品在其配置文件中定义，位于 `~/elitemobs/custombosses`。禁用这些掉落将移除其独特的奖励，扰乱预期的体验。

</details>

### 如何设置自定义模型？

<details>
<summary>
信息
</summary>

有两种不同的插件处理“自定义模型”。

- LibsDisguises（包括免费版）允许您将生物伪装成其他生物或自定义玩家皮肤。如果您看到一个自定义 Boss 带有玩家伪装，则它正在使用 LibsDisguises 进行伪装。您必须下载 LibsDisguises 才能使此特定功能正常工作。

- FreeMinecraftModels（和 ModelEngine R3，尽管 ModelEngine 不再推荐）允许您将生物伪装成任何自定义模型，限制很少。FreeMinecraftModels 允许您免费执行此操作，并且推荐使用。您必须使用 FreeMinecraftModels 或 ModelEngine R3（不是 R4）才能使自定义模型正常工作。FreeMinecraftModels 可以与 ModelEngine 同时运行，因此您也可以同时运行两者。
<br>如果您已安装 FreeMinecraftModels/ModelEngine 但自定义模型仍然无法工作，您可能在安装模型插件之前安装了内容。为确保这不是问题，请重新导入带有自定义伪装的 EliteMobs 内容并再次安装。

</details>

### 控制台 / EliteMobs 说我使用的 WorldGuard 版本错误

<details>
<summary>
信息
</summary>

如果 EliteMobs 报告 WorldGuard 未安装，那是因为您使用的 WorldGuard 版本与您的服务器平台不兼容。WorldGuard 对您使用的版本非常敏感，并且针对不同的服务器软件有不同的版本。

- 您可以从此处下载 Spigot / Paper 的 WorldGuard 版本：https://dev.bukkit.org/projects/worldguard - 确保它说明与您的 Minecraft 版本兼容！

</details>

### 安装后虫洞 / 竞技场 / NPC 似乎无法正常工作

<details>
<summary>
信息
</summary>

如果安装内容后虫洞 / 竞技场 / NPC 似乎无法正常工作，您应该运行 `/em reload`。安装 EliteMobs 内容后运行此命令总是好的。

</details>

### 地下城 Boss 被击杀后没有重新出现

<details>
<summary>
信息
</summary>

大多数情况下，这只是因为某些 Boss 的重生时间较长。世界束缚者之影的重生时间最长，为 1 周现实时间。巢穴 Boss 通常有 4 小时的重生时间。其他所有 Boss 的重生时间通常在 5-30 分钟之间。您可以在 `~/plugins/EliteMobs/custombosses` 文件夹中的自定义 Boss 配置文件中编辑其重生时间。

</details>

### 安装后地下城 Boss 从未出现

<details>
<summary>
信息
</summary>

这几乎肯定是由于第三方插件的干扰。检查以下内容：
- 您的世界是否处于和平难度？和平难度下不会生成生物。

- 您的区域是否受到生成保护？EliteMobs 地下城通过 WorldGuard 处理自己的区域保护，您无需保护 EliteMobs 地下城世界，实际上这样做如果使用了错误的旗帜可能会阻止生成。

- 是否有其他插件阻止 EliteMobs Boss 生成或移除它们？这些冲突通常会显示在控制台中，因此请检查您的控制台日志。

</details>

### 插件没有为我刚刚安装的内容自动补全命令

<details>
<summary>
信息
</summary>

命令中的自动建议由 CloudCommandFramework 处理，并且仅在**服务器重启后**更新命令建议。不幸的是，我对此无能为力。

</details>

### 如何使用 EliteMobs 翻译？

<details>
<summary>
信息
</summary>

您可以通过运行 `/em language <languagename>.yml` 来更改 EliteMob 的语言，以使用由 EliteMobs 社区创建和管理的默认插件翻译。

要添加插件中没有的语言，或自定义现有语言，建议您使用 `custom_language.yml`。

语言文件仅在您切换语言时生成其内容！

如果您破坏了 yml 文件的格式（这很容易意外发生），文件将会重置！***如果您手动翻译内容，请务必保留您的翻译的本地备份！***

在社区翻译网站上翻译语言文件更容易，因为它会为您处理格式！它还会自动建议翻译。您可以在这里找到它：https://crowdin.com/project/elitemobs

提醒一下，如果您正在翻译，如果您使用特殊字符（例如 `&`）作为配置值的开头，您必须将该值放在引号之间，例如 \"&cCool value\"！否则，文件将损坏，并且会重置您的进度。您可以使用 linter 检查 yml 文件的有效性 - 只需将您的 yml 内容粘贴到这里：<https://www.yamllint.com/>

</details>

# EliteMobs 和 BetterStructures 兼容性常见问题解答

### 我能否在 BetterStructure 中获得包含 EliteMobs Boss 的结构？

<details>
<summary>
信息
</summary>

是的，BetterStructures 神殿包正是这种内容。您可以从 [itch.io](https://magmaguy.itch.io/) 下载神殿包。

</details>

### 为什么神殿受到 WorldGuard 保护，以及如何阻止它？

<details>
<summary>
信息
</summary>

EliteMobs 神殿结构默认受到 WorldGuard 保护，以确保玩家不会在战斗区域内建造装置来滥用 Minecraft 战斗系统。

一旦 Boss 被击败，保护会自动删除。

每个神殿都有入口点，如果它们在地下，玩家必须挖掘才能找到。

如果您不想使用 WorldGuard 保护，可以在 BetterStructures 的 config.yml 配置文件中禁用它。

</details>

### 为什么神殿生成时没有精英生物？

<details>
<summary>
信息
</summary>

如果您在安装 EliteMobs 之前安装了 BetterStructures 神殿，可能会发生这种情况。要解决此问题，请在安装 EliteMobs **之后**重新导入并重新安装神殿到您的服务器。

</details>

### 我能否在不使用 EliteMobs 的情况下使用神殿？

<details>
<summary>
信息
</summary>

神殿是专门为对抗其中的 Boss 而制作的，但如果您只是想要战斗竞技场的美观，您可以在不安装 EliteMobs 的情况下运行神殿包。

</details>

# EliteMobs 和 FreeMinecraftModels 兼容性常见问题解答

### FreeMinecraftModels 是否与 EliteMobs 兼容？

<details>
<summary>
信息
</summary>

是的。FreeMinecraftModels 插件是专门围绕 EliteMobs 和 EternalTD 制作的。

</details>

### 如何安装 EliteMobs 自定义模型？

<details>
<summary>
信息
</summary>

您可以从 https://www.patreon.com/magmaguy 和 https://magmaguy.itch.io/ 下载 EliteMobs 的自定义模型。安装后，如果您想使用官方资源包并通过在线托管将其分发给玩家，您将**必须将** FreeMinecraftModels 在其输出文件夹中生成的资源包与 EliteMobs 的官方资源包合并。

</details>

### 如何安装 EliteMobs 自定义模型？

<details>
<summary>
信息
</summary>

您可以从 https://www.patreon.com/magmaguy 和 https://magmaguy.itch.io/ 下载 EliteMobs 的自定义模型。安装后，如果您想使用官方资源包并通过在线托管将其分发给玩家，您将**必须将** FreeMinecraftModels 在其输出文件夹中生成的资源包与 EliteMobs 的官方资源包合并。

</details>

# EliteMobs 和 ResurrectionChest 兼容性常见问题解答

### EliteMobs 是否与 ResurrectionChest 兼容？

<details>
<summary>
信息
</summary>

是的。ResurrectionChest 是专门为 EliteMobs 内容制作的，并且完全兼容。

</details>

# 与其他插件的兼容性常见问题解答

### 我能否将 EliteMobs 与类似于 MCMMO 或 AureliumSkills 的插件一起使用？

<details>
<summary>
信息
</summary>

是的。话虽如此，您可能需要禁用 EliteMobs 声望系统提供的额外生命值。

</details>

### 我能否将 EliteMobs 与另一个自定义物品插件一起使用？

<details>
<summary>
信息
</summary>

是的。如果您希望 Boss 掉落该插件中的特定物品，您可以设置死亡时运行的命令，并以这种方式给予玩家物品。然而，没有真正的方法来平衡 EliteMobs 与您正在使用的任何物品系统。精英生物的生命值从 7 点到数十万点不等，因此其他物品插件要么过于强大，要么过于弱小。EliteMobs 已经内置了物品系统，不需要任何外部物品插件。

</details>

# 其他常见问题解答

### 在精英生物死亡时运行命令或从其他插件获得战利品/奖励？

[信息可在此处获取。]($language$/elitemobs/creating_bosses.md&section=ondeathcommands)

### Vault 支持？

[信息可在此处获取。]($language$/elitemobs/vault.md)

### PlaceholderAPI 占位符？

[信息可在此处获取。]($language$/elitemobs/placeholders.md)

### 使用 WorldGuard 旗帜允许 EliteMobs 在某些地方出现而在其他地方不出现？

[信息可在此处获取。]($language$/elitemobs/worldguard_flags.md)

### 我能否让生成的所有生物都成为精英生物？

这是一个糟糕的主意，但是，您可以访问 `MobCombatSettings.yml` 配置文件并编辑 `eliteMobsSpawnPercentage` 来设置精英生物的生成百分比。

### 我能否创建自定义能力？

[信息可在此处获取。]($language$/elitemobs/creating_powers.md)

### 我能否创建自定义附魔？

这在我们的待办事项列表中，应该很快就会推出，但目前尚不可能。

### 我能否创建自定义药水效果？

唯一的方法是学习 Java 并自己编写。到那时，您不妨修改 EliteMobs 源代码。

### 如何关闭虫洞粒子效果？

要关闭虫洞粒子效果，请导航到 *~plugins\EliteMobs\Wormholes.yml*，然后找到 `noParticlesMode` 并将其值更改为 `false`。

### 如何编辑冒险者公会 (AG) 生成点中的虫洞，使其传送到我想要的位置？

<div align="center">

![faq_ag_wormhole.jpg](../../../img/wiki/faq_ag_wormhole.jpg)

</div>

您可以通过打开 *plugins\EliteMobs\wormholes\adventurers_guild_wormhole.yml* 来做到这一点。

然后找到以下设置
`location2: your_world_here,0.5,64,0.5,0,0`
并将值更改为您偏好的位置。

记住运行 `/em reload` 使更改生效。

### 如何解绑物品？

移除物品灵魂绑定的唯一方法是使用解绑卷轴。在此处阅读更多信息：[此处]($language$/elitemobs/soulbind.md)。

### 如何合并资源包？

可以手动合并资源包，但我们建议使用在线工具，例如 [merge.elmakers](https://merge.elmakers.com/) 来合并您的资源包。

### EliteMobs 命令占位符是什么？

| 占位符      |          详细信息           |
| ----------- |:--------------------------:|
| `$player`   | 玩家的显示名称             |
| `$bossName` |  Boss 的显示名称           |
| `$bossLevel`|     Boss 的等级            |

### 如何关闭强制资源包？

此设置实际上位于您的 `server.properties` 文件中。您通常可以在服务器的根目录中找到此文件。打开文件后，找到 `require-resource-pack` 设置并将其值更改为 `false` 以关闭强制资源包。

### 如何关闭事件？

如果您想关闭事件，例如武器哥布林、魅力哥布林等，您可以打开 *~plugins\EliteMobs\events.yml*，然后找到设置 `actionEventsEnabled`、`timedEventsEnabled` 并将它们设置为 `false`。

### 如何编辑地下城世界或冒险者公会世界？

从 EliteMobs 9 开始，EliteMobs 不再依赖 WorldGuard 进行地下城和内容保护。要暂时绕过此保护，请使用命令 `/em protection bypass`。

如果您想永久禁用特定地下城的保护，请按照以下步骤操作：

1. 导航到 *plugins/EliteMobs/content_packages/*。
2. 找到您要修改的地下城的 *dungeon_config.yml* 文件。
3. 打开配置文件并找到 `protect:` 设置。
4. 将值更改为 `false` 以禁用保护。

### Elite 卷轴是什么以及如何使用它们？

**Elite 卷轴**是特殊的升级物品，允许玩家将普通（非精英）装备转换为精英级装备，与 EliteMobs 的升级和战利品系统无缝集成。

- **插件兼容性：** 非常适合使用其他物品插件（如 **ItemAdder**）的服务器，允许这些物品获得精英等级。
- **升级方法：** 可以在**冒险者公会**通过与卷轴应用者 NPC **Scotty** 对话来应用（位于附魔师旁边）。*此功能默认禁用。*
- **平衡进程：** 卷轴从同等级的**精英生物**掉落，确保公平且符合等级的升级。
- **自定义物品支持：** 允许自定义或基于插件的物品在 EliteMobs 的进程系统中发挥作用。

> **注意：** Elite 伤害效果仅在 EliteMobs 系统内激活。卷轴强化的物品在 EliteMobs 内容之外的普通游戏玩法中不会过于强大。

#### 如何启用 Elite 卷轴

默认情况下，Elite 卷轴是**禁用**的。要启用它们：

1. 打开配置文件：
   `plugins/EliteMobs/ItemSettings.yml`
2. 将以下选项设置为 `true`：
   `useEliteItemScrolls`
3. 然后运行以下命令：
   `/em reload`