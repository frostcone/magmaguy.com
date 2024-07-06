# 设置视频

<div class="outer-container">
<div class="iframe-container">
  <iframe class="video-iframe" src="https://www.youtube.com/embed/boRg2X4qhw4?si=2aRLV_j9UzNz_VO0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

***


*本指南假设您使用的是 EliteMobs ***7.2.37*** 或更高版本。*

# 首次启动

重新启动服务器一次。

<details>

<summary><b>为什么？</b></summary>

EliteMobs 在服务器首次启动时会增加 spigot.yml 配置文件中的最大生命值。这是为了让精英怪物可以拥有超过 2000 点生命值。它不会改变任何其他怪物的生命值 - 因此它不会改变普通怪物或插件怪物。

此更改需要重新启动服务器才能真正生效。

</details>

# 权限

从 EliteMobs 7.2.23 版本开始，所有推荐的权限默认情况下都已设置好。您可以在 [此处]($language$/elitemobs/permissions_and_commands.md) 了解更多有关权限的信息。

# 地下城和冒险家公会中心世界

从 EliteMobs 7.2.35 版本开始，EliteMobs 目录中现在有一个 `imports` 文件夹。地下城、冒险家公会世界的安装过程相同：

1) 下载文件。您可以点击 `/em setup` 中的红色玻璃获取下载链接。

2) 将文件上传/移动到服务器的 `/plugins/EliteMobs/imports` 文件夹中。确保将 **压缩** 文件放在 `imports` 文件夹中，不要以任何方式修改它们，EliteMobs 会自动解压缩文件并将其移动到正确的位置。

<div align="center">

<details>

<summary>视觉示例</summary>

<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_import.webm" type="video/webm">
  您的浏览器不支持视频标签。
</video>

</details>

</div>

3) 重新启动或执行 `/em reload`。几秒钟后，地下城应自动安装，当您执行 `/em setup` 时，您下载的地下城的指示器应为绿色，并指示地下城已正确安装且是最新的。如果有任何地下城显示一个黄色玻璃板，则表示存在更新版本的地下城，需要更新。

<div align="center">

<details>

<summary>视觉示例</summary>


<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_install.webm" type="video/webm">
  您的浏览器不支持视频标签。
</video>

</details>

</div>

4) ***如果您的地下城文件有自定义模型***，您可以选择按照 [此处]($language$/elitemobs/custom_models.md&section=importing-custom-models-from-dungeons) 列出的安装步骤来安装它们。

就这样！**您可以在 /em 的“传送”页面中找到已安装的地下城和冒险家公会的传送点！**

[有关冒险家公会的更多信息，请参阅此处！]($language$/elitemobs/adventurers_guild_world.md)
<br>[在此处下载冒险家公会中心世界！](https://magmaguy.itch.io/elitemobs-the-adventurers-guild)

# 推荐的插件

- [WorldGuard](https://dev.bukkit.org/projects/worldguard)：用于标志。[EliteMobs 标志列表]($language$/elitemobs/worldguard_flags.md)。
- [WorldGuardExtraFlags](https://www.spigotmc.org/resources/worldguard-extra-flags.4823/)：用于反飞行标志，很有用。
- [PlaceHolderAPI (PAPI)](https://www.spigotmc.org/resources/placeholderapi.6245/)：用于在其他插件（例如聊天）上显示 EliteMobs 信息。[更多信息]($language$/elitemobs/placeholders.md)。
- [LibsDisguises](https://www.spigotmc.org/resources/libs-disguises-free.81/)：用于将自定义 Boss 伪装成任何其他东西。伪装在我们的官方地下城中被大量使用，因此强烈建议您安装此插件。[更多信息]($language$/elitemobs/libsdisguises.md)。
- [DiscordSRV]($language$/elitemobs/discordsrv.md)：用于将 EliteMobs 公告链接到 Discord 聊天。[更多信息]($language$/elitemobs/discordsrv.md)

# 更新地下城内容

要更新地下城内容，只需重复上述安装步骤。**您***无需***删除任何文件**，EliteMobs 会在您导入更新时处理该问题。

# 常见问题解答 (FAQ)

## 小型地下城只是平坦的地形

<details><summary>答案</summary>

95% 的情况下，这意味着您没有按照设置说明进行操作。如果您使用其他插件解压缩了任何文件或加载了任何世界，请按照上面列出的步骤重新安装内容。您不需要任何其他插件即可正确加载世界。

</details>

## 安装后，NPC 聊天看起来很奇怪/虫洞无法正常工作/其他奇怪的行为

<details>

<summary>答案</summary>

设置地下城后运行命令 `/em reload` 以确保所有值都已完全初始化。重新启动甚至更好，但应该不是必需的。

</details>

## Boss 没有生成

### Boss 之前正在生成！

<details>

<summary>答案</summary>

区域 Boss 有重生时间。您可以通过转到其配置文件并复制生成位置部分中 `:` 之后的数字来检查 Boss 计划何时重生。

示例：

```yml
spawnLocations:
- em_primis,1100.5,22.5,526.5,0.0,0.0:1643259941451
```

在这种情况下，您要查找的数字是 `1643259941451`。您可以使用 [此](https://www.unixtimestamp.com/index.php) 网站将其转换为特定日期。您可以删除这些数字以强制 Boss 重生，确保在删除它们后执行 `/em reload`。

</details>

### Boss 从未生成过！

<details>

<summary>答案</summary>

检查以下内容：

- 您或其他人是否杀死了 Boss，或者它是否通过超时功能逃脱了？Boss 可能会重生。检查冷却时间，有关信息请参见上面的部分。
- 查看控制台上是否有任何错误，尤其是在您安装地下城或执行 `/em reload` 之后。错误应该会告诉您出了什么问题。
- 检查您的区域是否受到其他插件的保护，这会阻止怪物生成
- 检查您的世界的难度，怪物无法在和平难度下生成
- 检查 WorldGuard 标志，查看怪物生成是否设置为允许
- 检查您是否在生成区域上安装了地下城内容，该区域默认受保护
- 非常非常罕见的是，问题可能与您的服务器认为的日期有关。确保您的服务器机器的日期正确，否则重生机制可能会导致一些问题。

</details>


## 某些东西弄乱了，我无法修复它

<details>

<summary>答案</summary>

这通常发生在尝试以 EliteMobs 无法自我修复的方式正确修改文件并失败之后。如果您卡住了，并且无法从启动/地下城安装时的控制台消息中找出如何修复它，那么最好的办法是全新安装 EliteMobs。

备份您的 `~/plugins/EliteMobs/data` 文件夹以保留玩家数据，然后删除 `~/plugins/EliteMobs/` 文件夹。启动您的服务器，将其关闭，**在服务器离线时**恢复您备份的数据文件夹的内容，然后再次启动它。您现在可以继续安装 EliteMobs 内容。

</details>



