# 设置视频

<div class="outer-container">
<div class="iframe-container">
  <iframe class="video-iframe" src="https://www.youtube.com/embed/boRg2X4qhw4?si=2aRLV_j9UzNz_VO0" title="YouTube 视频播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

***

*本指南假设您正在使用 EliteMobs ***7.2.37*** 或更高版本。*

# 首次启动

重启服务器一次。

<details>

<summary><b>为什么？</b></summary>

EliteMobs 会在服务器首次启动时增加您 spigot.yml 配置文件的最大生命值。这是为了让精英怪的生命值可以超过 2000。它不会改变任何其他生物的生命值 - 因此它不会改变原版或插件生物。

此更改需要重启服务器才能真正生效。

</details>

# 权限

自 EliteMobs 7.2.23 起，所有推荐的权限默认情况下都已设置。您可以在[这里]($language$/elitemobs/permissions_and_commands.md)了解更多关于权限的信息。

# 地牢和冒险者公会中心世界

自 EliteMobs 7.2.35 起，EliteMobs 目录中现在有一个 `imports` 文件夹。地牢和冒险者公会世界的安装过程相同：

1) 下载文件。您可以点击 `/em setup` 中的红色玻璃来获取下载链接。

2) 将文件上传/移动到您服务器的 `/plugins/EliteMobs/imports` 文件夹。请确保将 **ZIP** 文件放入 `imports` 文件夹中，不要以任何方式修改它们，EliteMobs 会自动提取文件并将其移动到正确的位置。

<div align="center">

<details>

<summary>视觉示例</summary>

<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_import.webm" type="video/webm">
  您的浏览器不支持 video 标签。
</video>

</details>

</div>

3) 重启或执行 `/em reload`。几秒钟后，地牢应该会自动安装，当您执行 `/em setup` 时，您下载的地牢的指示器应该是绿色的，表明地牢已正确安装并为最新版本。如果任何地牢显示黄色玻璃窗格，则表示该地牢有较新版本，需要更新。

<div align="center">

<details>

<summary>视觉示例</summary>


<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_install.webm" type="video/webm">
  您的浏览器不支持 video 标签。
</video>

</details>

</div>

4) ***如果您的地牢文件有自定义模型***，您可以选择按照[此处]($language$/elitemobs/custom_models.md&section=importing-custom-models-from-dungeons)列出的安装步骤来安装它们。

就是这样！**您可以在 /em 的“传送”页面中找到已安装的地牢和冒险者公会的传送点！**

[在此处了解更多关于冒险者公会的信息！]($language$/elitemobs/adventurers_guild_world.md)
<br>[在此处下载冒险者公会中心世界！](https://magmaguy.itch.io/elitemobs-the-adventurers-guild)

# 推荐插件

- [WorldGuard](https://dev.bukkit.org/projects/worldguard): 用于标志。[EliteMobs 标志列表]($language$/elitemobs/worldguard_flags.md)。
- [WorldGuardExtraFlags](https://www.spigotmc.org/resources/worldguard-extra-flags.4823/): 用于反飞行标志，很有用。
- [PlaceHolderAPI (PAPI)](https://www.spigotmc.org/resources/placeholderapi.6245/): 用于在其他插件上显示 EliteMobs 信息，例如用于聊天。[更多信息]($language$/elitemobs/placeholders.md)。
- [LibsDisguises](https://www.spigotmc.org/resources/libs-disguises-free.81/): 用于将自定义 Boss 伪装成其他任何东西。伪装在我们的官方地牢中大量使用，因此强烈建议您安装此插件。[更多信息]($language$/elitemobs/libsdisguises.md)。
- [DiscordSRV]($language$/elitemobs/discordsrv.md): 用于将 EliteMobs 公告链接到 Discord 聊天。[更多信息]($language$/elitemobs/discordsrv.md)

# 更新地牢内容

要更新地牢内容，只需重复上述安装步骤。**您***不***必删除任何文件**，当您导入更新时，EliteMobs 会处理这些。

# 常见问题 (FAQ)

## 小型地牢只是平坦的地形

<details><summary>答案</summary>

95% 的情况下，这意味着您没有按照设置说明进行操作。如果您解压了任何文件或使用其他插件加载了任何世界，请按照上面列出的步骤重新安装内容。您不需要任何其他插件即可正确加载世界。

</details>

## 安装后 NPC 聊天看起来很奇怪/虫洞不起作用/其他奇怪的行为

<details>

<summary>答案</summary>

设置好地牢后运行命令 `/em reload`，以确保所有值都已完全初始化。重启服务器会更好，但应该没有必要。

</details>

## Boss 没有生成

### Boss 之前在生成！

<details>

<summary>答案</summary>

区域 Boss 有重生时间。您可以通过转到其配置文件并复制生成位置部分中 `:` 之后的数字来查看 Boss 计划何时重生。

示例：

```yml
spawnLocations:
- em_primis,1100.5,22.5,526.5,0.0,0.0:1643259941451
```

在这种情况下，您要查找的数字是 `1643259941451`。您可以使用[此](https://www.unixtimestamp.com/index.php)网站将其转换为特定日期。您可以删除这些数字以强制 Boss 重生，确保在删除后执行 `/em reload`。

</details>

### Boss 从未生成！

<details>

<summary>答案</summary>

检查以下事项：

- 您或其他人是否杀死了 Boss，或者它是否通过超时功能逃脱了？Boss 可能正在重生。检查冷却时间，有关信息请参阅上面的部分。
- 查看控制台上是否有任何错误，尤其是在安装地牢或执行 `/em reload` 之后。错误应该会告诉您出了什么问题。
- 检查您的区域是否受到其他插件的保护，这会阻止生物生成
- 检查您的世界的难度，生物无法在和平难度下生成
- 检查 WorldGuard 标志，看看是否允许生物生成
- 检查您是否在生成区域上安装了地牢内容，默认情况下该区域受到保护
- 非常罕见的情况下，问题可能与您的服务器认为的日期有关。确保您的服务器机器的日期正确，否则重生机制可能会导致一些问题。

</details>

## 有些东西搞砸了，我就是无法修复它

<details>

<summary>答案</summary>

这通常发生在试图修改文件但未能成功，导致 EliteMobs 无法自行修复之后。如果您遇到困难并且无法从启动/地牢安装时的控制台消息中找到修复方法，最好的办法是全新安装 EliteMobs。

备份您的 `~/plugins/EliteMobs/data` 文件夹以保留玩家数据，然后删除 `~/plugins/EliteMobs/` 文件夹。启动您的服务器，将其关闭，**在服务器离线时**恢复您备份的数据文件夹的内容，然后再次启动它。现在您可以继续安装 EliteMobs 内容。

</details>
