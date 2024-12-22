如果这里没有列出您的问题，请***查看侧边栏***，看看是否有专门针对该问题的维基页面！

# 设置和安装常见问题解答

### 如何设置自定义模型？

<details>
<summary>
信息
</summary>

有两种不同的插件可以处理“自定义模型”。

- LibsDisguises（包括免费版）允许您将生物伪装成其他生物或自定义玩家皮肤。如果您看到一个伪装成玩家的自定义 Boss，它正在使用
  LibsDisguises 进行伪装。您必须下载 LibsDisguises 才能使此特定功能正常工作。

- FreeMinecraftModels（和 ModelEngine R3，尽管不再推荐使用 ModelEngine）允许您将生物伪装成任何自定义模型，几乎没有限制。FreeMinecraftModels
  允许您免费执行此操作，因此推荐使用。您必须使用 FreeMinecraftModels 或 ModelEngine R3（而不是
  R4）才能使自定义模型正常工作。FreeMinecraftModels 可以与 ModelEngine 一起运行，因此您也可以同时运行两者。
  <br>如果您已安装 FreeMinecraftModels/ModelEngine 并且自定义模型仍然无法工作，则可能是您在安装模型插件之前安装了内容。为了确保这不是问题，请重新导入带有自定义伪装的
  EliteMobs 内容并再次安装。

</details>

### 控制台/EliteMobs 说我使用的 WorldGuard 版本不正确

<details>
<summary>
信息
</summary>

如果 EliteMobs 报告 WorldGuard 未安装，那是因为您正在为您的服务器平台使用错误的 WorldGuard 版本。WorldGuard
对您使用的版本非常敏感，并且服务器软件有不同的版本。

- 您可以从此处下载适用于 Spigot / Paper 的 WorldGuard 版本：https://dev.bukkit.org/projects/worldguard - 确保它表明它与您的
  Minecraft 版本兼容！

</details>

### 安装后，虫洞/竞技场/NPC 似乎无法立即正常工作

<details>
<summary>
信息
</summary>

如果虫洞/竞技场/NPC 在安装内容后似乎无法立即正常工作，则应运行 `/em reload`。在安装 EliteMobs 内容后运行它总是好的。

</details>

### 地牢 Boss 在被杀死后不会重新出现

<details>
<summary>
信息
</summary>

大多数情况下，这只是因为一些 Boss 有很长的重生时间。世界束缚者的阴影的重生时间最长，为现实生活中的 1 周。巢穴 Boss 通常有 4
小时的重生时间。其他一切通常都有 5-30 分钟的重生时间。您可以在 `~/plugins/EliteMobs/custombosses` 文件夹中的其配置文件中编辑自定义
Boss 的重生时间。

</details>

### 安装后，地牢 Boss 从未出现

<details>
<summary>
信息
</summary>

这几乎肯定是由第三方插件的干扰造成的。检查以下各项：
- 您的世界是否处于和平难度？生物不会在和平难度下生成

- 您的区域是否受到保护以防止生成？EliteMobs 地牢通过 WorldGuard 处理自己的区域保护，您不需要保护 EliteMobs
  地牢世界，实际上这样做可能会阻止生成（如果使用了错误的标志）。

- 是否有其他插件阻止 EliteMobs Boss 生成或移除它们？这些冲突通常会显示在控制台中，因此请检查您的控制台日志。

</details>

### 插件没有自动完成我刚刚安装的内容的命令

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

您可以通过运行 `/em language <languagename>.yml` 来更改 EliteMob 的语言。使用由 EliteMobs 社区创建和管理的默认插件翻译

要添加插件中没有的语言，或自定义现有语言，建议您使用 `custom_language.yml`。

语言文件仅在您切换语言时生成其内容！

如果您破坏了 yml 文件的格式（这很容易意外发生），它将重置该文件！***如果您正在手动翻译内容，请务必保留本地备份您的翻译！***

在社区翻译网站中翻译语言文件更容易，因为它会为您处理格式！它还会自动建议翻译。您可以在此处找到它：https://crowdin.com/project/elitemobs

提醒一下，如果您正在翻译，如果您使用诸如 `&` 之类的特殊字符来启动配置值，则必须将该值放在引号之间，例如 \"&cCool
value\"！否则，文件将损坏，并且会重置您的进度。您可以使用 linter 来检查 yml 文件的有效性 - 只需在此处粘贴您的 yml
内容：<https://www.yamllint.com/>

</details>

# EliteMobs 和 BetterStructures 兼容性常见问题解答

### 我可以在 BetterStructure 中获得带有 EliteMobs 中 Boss 的结构吗？

<details>
<summary>
信息
</summary>

是的，BetterStructures 神社包正是此类内容。您可以从 [itch.io](https://magmaguy.itch.io/) 下载神社包。

</details>

### 为什么神社受到 WorldGuard 的保护，我如何防止这种情况

<details>
<summary>
信息
</summary>

EliteMobs 神社结构默认受 WorldGuard 保护，以确保玩家不会在战斗区域内构建滥用 Minecraft 战斗系统的装置。

一旦 Boss 被击败，保护将自动删除。

每个神社都有入口点，如果它们在地下，玩家必须在周围挖掘才能找到它们。

如果您不希望使用 WorldGuard 保护，则可以在 BetterStructures config.yml 配置文件中禁用它。

</details>

### 为什么神社在没有精英的情况下生成？

<details>
<summary>
信息
</summary>

如果您在安装 EliteMobs 之前安装了 BetterStructures 神社，则会发生这种情况。要解决此问题，请在安装 EliteMobs **之后**
将神社重新导入并重新安装到您的服务器中。

</details>

### 我可以在不使用 EliteMobs 的情况下使用神社吗

<details>
<summary>
信息
</summary>

神社是专门为对抗其中的 Boss 而制作的，但如果您只是想要用于美学的战斗竞技场，您可以只运行神社包，而无需安装 EliteMobs。

</details>

# EliteMobs 和 FreeMinecraftModels 兼容性常见问题解答

### FreeMinecraftModels 与 EliteMobs 兼容吗？

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

您可以从 https://www.patreon.com/magmaguy 和 https://magmaguy.itch.io/ 下载 EliteMobs 的自定义模型。安装后，*
*如果您想使用官方资源包并通过在线托管将其分发给玩家，则必须将** FreeMinecraftModels 在其输出文件夹中生成的资源包与
EliteMobs 的官方资源包合并。

</details>

### 如何安装 EliteMobs 自定义模型？

<details>
<summary>
信息
</summary>

您可以从 https://www.patreon.com/magmaguy 和 https://magmaguy.itch.io/ 下载 EliteMobs 的自定义模型。安装后，*
*如果您想使用官方资源包并通过在线托管将其分发给玩家，则必须将** FreeMinecraftModels 在其输出文件夹中生成的资源包与
EliteMobs 的官方资源包合并。

</details>

# EliteMobs 和 ResurrectionChest 兼容性常见问题解答

### EliteMobs 是否与 ResurrectionChest 一起工作？

<details>
<summary>
信息
</summary>

是的。ResurrectionChest 专为 EliteMobs 内容制作，并且完全兼容。

</details>

# 与其他插件的兼容性常见问题解答

### 我可以将 EliteMobs 与类似 MCMMO 或 AureliumSkills 的插件一起使用吗？

<details>
<summary>
信息
</summary>

是的。话虽如此，您可能需要禁用 EliteMobs 声望系统中的奖励生命值。

</details>

### 我可以将 EliteMobs 与另一个自定义物品插件一起使用吗？

<details>
<summary>
信息
</summary>

是的。如果您希望 Boss 掉落该插件中的特定物品，您可以设置在死亡时运行的命令并以这种方式给予玩家物品。但是，没有真正的方法可以将
EliteMobs 与您正在使用的任何物品系统相平衡。精英的生命值从 7 个增加到数十万个，因此其他物品插件要么过于强大，要么非常弱。EliteMobs
已经内置了物品系统，不需要任何外部物品插件。

</details>

# 其他常见问题解答

### 在精英怪死亡时运行命令或在精英怪死亡时从其他插件获得战利品/奖励？

[此处提供信息。]($language$/elitemobs/creating_bosses.md&section=ondeathcommands)

### Vault 支持？

[此处提供信息。]($language$/elitemobs/vault.md)

### PlaceholderAPI 占位符？

[此处提供信息。]($language$/elitemobs/placeholders.md)

### 使用 WorldGuard 标志允许在某些地方使用 EliteMobs，而在其他地方不使用？

[此处提供信息。]($language$/elitemobs/worldguard_flags.md)

### 我可以使 100% 生成的生物都成为精英怪吗？

这是一个糟糕的主意，但是您可以访问 `MobCombatSettings.yml` 配置文件并编辑 `eliteMobsSpawnPercentage` 来设置精英怪的生成百分比。

### 我可以创建自定义能力吗？

[此处提供信息。]($language$/elitemobs/creating_powers.md)

### 我可以创建自定义附魔吗？

这在我们的待办事项列表中，应该很快就会推出，但目前不可能。

### 我可以创建自定义药水效果吗？

执行此操作的唯一方法是学习 Java 并自己编写。那时，您不妨修改 EliteMobs 源代码。

### 如何关闭虫洞粒子？

要关闭虫洞粒子，请导航到 *~plugins\EliteMobs\Wormholes.yml*，然后找到 `noParticlesMode` 并将值更改为 `false`。

### 如何编辑 AG 生成中的虫洞以将玩家传送到我想要的位置？

<div align="center">

![faq_ag_wormhole.jpg](../../../img/wiki/faq_ag_wormhole.jpg)

</div>

您可以通过打开 *plugins\EliteMobs\wormholes\adventurers_guild_wormhole.yml* 来实现。

然后找到以下设置
`location2: your_world_here,0.5,64,0.5,0,0`
并将值更改为您喜欢的位置。

记住运行 `/em reload` 以使更改生效。

### 如何取消绑定物品？

从物品中移除灵魂绑定的唯一方法是使用取消绑定卷轴。在此处阅读更多内容[此处]($language$/elitemobs/soulbind.md)。

### 如何合并资源包？

可以手动合并资源包，但我们建议使用在线工具（例如 [merge.elmakers](https://merge.elmakers.com/)）来合并您的资源包。

### EliteMobs 命令占位符是什么？

| 占位符          |    详细信息    |
|--------------|:----------:|
| `$player`    |  玩家的显示名称   |
| `$bossName`  | Boss 的显示名称 |
| `$bossLevel` |  Boss 的等级  |

### 如何关闭强制资源包？

此设置实际上位于您的 `server.properties`
文件中。您通常可以在服务器的根目录中找到此文件。打开文件后，找到 `require-resource-pack` 设置并将值更改为 `false` 以关闭强制资源包。

### 如何关闭事件？

如果您想关闭诸如武器地精、护符地精等事件。那么您可以打开 *~plugins\EliteMobs\events.yml*
，然后找到设置 `actionEventsEnabled`、`timedEventsEnabled` 并将它们设置为 `false`。

### 如何编辑地牢世界或冒险者公会世界？

从 EliteMobs 9 开始，EliteMobs 不再依赖 WorldGuard
进行地牢和内容保护。要临时绕过此保护，请使用命令 `/em protection bypass`。

如果您想永久禁用特定地牢的保护，请按照以下步骤操作：

1. 导航到 *plugins/EliteMobs/content_packages/*.
2. 找到您要修改的地牢的 *dungeon_config.yml* 文件。
3. 打开配置文件并找到 `protect:` 设置。
4. 将值更改为 `false` 以禁用保护。
