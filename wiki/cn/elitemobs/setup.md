好的，这是翻译成简体中文并保留 Markdown 格式的文本：

# 设置视频

<div class="outer-container">
<div class="iframe-container">
  <iframe class="video-iframe" src="https://www.youtube.com/embed/boRg2X4qhw4?si=2aRLV_j9UzNz_VO0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

***

*本指南假设您正在使用 EliteMobs ***7.2.37*** 或更高版本。*

# 首次启动

重启服务器一次。

<details>

<summary><b>为什么？</b></summary>

EliteMobs 在服务器首次启动时会增加 spigot.yml 配置文件中的最大生命值。这是为了让精英怪物能够拥有超过 2000 的生命值。它不会改变任何其他怪物的生命值 - 因此不会改变原版或插件怪物的生命值。

此更改需要重启服务器才能生效。

</details>

# 权限

自 EliteMobs 7.2.23 版本起，所有推荐的权限已默认设置。您可以在[此处](zh-cn/elitemobs/permissions_and_commands.md)查看更多关于权限的信息。

# 地下城与冒险者公会中心世界

自 EliteMobs 7.2.35 版本起，EliteMobs 目录下新增了一个 `imports` 文件夹。地下城、冒险者公会世界的安装过程如下：

1) 下载文件。您可以点击 `/em setup` 中的红色玻璃来获取下载链接。

2) 将文件上传/移动到您服务器的 `/plugins/EliteMobs/imports` 文件夹。请确保将**压缩后的**文件原封不动地放入 `imports` 文件夹中，EliteMobs 将自动提取文件并将其移动到正确的位置。

<div align="center">

<details>

<summary>视觉示例</summary>

<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_import.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</details>

</div>

3) 重启或执行 `/em reload`。几秒钟后，地下城应该会自动安装，当您执行 `/em setup` 时，您下载的地下城的指示器应该是绿色的，表示地下城已正确安装并是最新的。如果任何地下城显示黄色玻璃板，则表示有新版本的地下城需要更新。

<div align="center">

<details>

<summary>视觉示例</summary>

<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_install.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</details>

</div>

4) ***如果您的地下城文件包含自定义模型***，您可以选择按照[此处](zh-cn/elitemobs/custom_models.md&section=importing-custom-models-from-dungeons)列出的安装步骤进行安装。

就是这样！**您可以在 /em 的传送页面中找到已安装的地下城和冒险者公会的传送点！**

[在此处查看更多关于冒险者公会的信息！](zh-cn/elitemobs/adventurers_guild_world.md)
<br>[在此处下载冒险者公会中心世界！](https://magmaguy.itch.io/elitemobs-the-adventurers-guild)

# 推荐插件

- [WorldGuard](https://dev.bukkit.org/projects/worldguard)：用于旗帜。 [EliteMobs 旗帜列表](zh-cn/elitemobs/worldguard_flags.md)。
- [WorldGuardExtraFlags](https://www.spigotmc.org/resources/worldguard-extra-flags.4823/)：用于反飞行旗帜，很有用。
- [PlaceHolderAPI (PAPI)](https://www.spigotmc.org/resources/placeholderapi.6245/)：用于在其他插件上显示 EliteMobs 信息，例如聊天。 [更多信息](zh-cn/elitemobs/placeholders.md)。
- [LibsDisguises](https://www.spigotmc.org/resources/libs-disguises-free.81/)：用于将自定义 Boss 伪装成其他任何东西。伪装在我们的官方地下城中被大量使用，因此强烈建议您安装此插件。 [更多信息](zh-cn/elitemobs/libsdisguises.md)。
- [DiscordSRV](zh-cn/elitemobs/discordsrv.md)：用于将 EliteMobs 公告链接到 Discord 聊天。 [更多信息](zh-cn/elitemobs/discordsrv.md)

# 更新地下城内容

要更新地下城内容，只需重复上述安装步骤。**您***无需***删除任何文件**，EliteMobs 在您导入更新时会处理。

# 常见问题 (FAQ)

## 迷你地下城只是平坦的地形

<details><summary>回答</summary>

95% 的情况下，这意味着您没有遵循设置说明。如果您解压了任何文件或使用其他插件加载了任何世界，请按照上面列出的步骤重新安装内容。您不需要任何其他插件来正确加载世界。

</details>

## 安装后 NPC 聊天看起来很奇怪 / 虫洞不工作 / 其他奇怪行为

<details>

<summary>回答</summary>

设置好地下城后，运行命令 `/em reload` 以确保所有值都完全初始化。重启更好，但应该不是必需的。

</details>

## Boss 不生成

### Boss 之前生成过！

<details>

<summary>回答</summary>

区域 Boss 有重生时间。您可以通过查看其配置文件并复制生成位置部分中 `:` 后面的数字来检查 Boss 计划何时重生。

示例：

```yml
spawnLocations:
- em_primis,1100.5,22.5,526.5,0.0,0.0:1643259941451
```

在这种情况下，您要查找的数字是 `1643259941451`。您可以使用[此](https://www.unixtimestamp.com/index.php)网站将其转换为特定日期。您可以删除这些数字以强制 Boss 重生，删除后请务必执行 `/em reload`。

</details>

### Boss 从未生成！

<details>

<summary>回答</summary>

检查以下事项：

- 您或其他人是否杀死了 Boss，或者它是否通过超时功能逃脱了？Boss 可能正在重生。检查冷却时间，相关信息在上面一节中。
- 查看控制台上是否有任何错误，尤其是在安装地下城或执行 `/em reload` 后。错误应该会告诉您哪里出了问题。
- 检查您的区域是否受到其他插件的保护，从而阻止怪物生成
- 检查您的世界难度，和平难度下无法生成怪物
- 检查 WorldGuard 旗帜，查看怪物生成是否设置为允许
- 检查您是否将地下城内容安装在了默认受保护的生成区域上
- 极少数情况下，问题可能与您的服务器认为的日期有关。请确保您的服务器机器日期正确，否则重生机制可能会导致一些问题。

</details>

## 出了问题，我就是无法修复

<details>

<summary>回答</summary>

这通常发生在尝试修改文件但失败，且 EliteMobs 无法自行修复的情况下。如果您陷入困境，无法从启动/地下城安装时的控制台消息中找出如何修复，最好的办法是全新安装 EliteMobs。

备份您的 `~/plugins/EliteMobs/data` 文件夹以保留玩家数据，然后删除 `~/plugins/EliteMobs/` 文件夹。启动您的服务器，然后关闭，**在服务器离线时**恢复您备份的数据文件夹内容，然后再次启动。现在您可以继续安装 EliteMobs 内容了。

</details>