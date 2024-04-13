# 设置视频

<div class="outer-container">
<div class="iframe-container">
  <iframe class="video-iframe" src="https://www.youtube.com/embed/boRg2X4qhw4?si=2aRLV_j9UzNz_VO0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

***

*本指南假设您正在使用EliteMobs ***7.2.37*** 或更高版本。*


# 首次启动

重启服务器一次。

<details>

<summary><b>为什么？</b></summary>

EliteMobs在服务器第一次启动时会增加你的spigot.yml配置文件中的最大生命值。这样，精英怪物可以有超过2000的生命值。它并不改变任何其他生物的生命值 - 所以它不会改变原版或插件生物的生命值。

这个变更需要服务器重启才能实际生效。

</details>

# 权限配置

从EliteMobs 7.2.23开始，所有推荐的权限默认已经设置好了。你可以在[这里]($language$/elitemobs/permissions_and_commands.md)查看更多关于权限的信息。

# 地下城和冒险者公会大厅世界

从EliteMobs 7.2.35开始，在EliteMobs目录下新增了一个`imports`文件夹。地下城，冒险者公会大厅世界的安装过程是一样的：

1) 下载文件。你可以在`/em setup`点击红色玻璃获取下载链接。

2) 上传/移动文件到你的服务器的`/plugins/EliteMobs/imports`文件夹。确保你把**压缩**的文件放入`imports`文件夹，不要以任何方式修改它们，EliteMobs会自动解压这些文件并移到正确的位置。

<div align="center">

<details>

<summary>图片示例</summary>

<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_import.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</details>

</div>

3) 重启或执行`/em reload`。几秒钟之后，当你执行`/em setup`，你下载的功能的指示灯应该是黄色的。

<div align="center">

<details>

<summary>图片示例</summary>

<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_reload.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</details>

</div>

**重要提示：如果你想在ELITEMOBS中安装一些内容，[WORLDGUARD](https://dev.bukkit.org/projects/worldguard) 和 [WORLDEDIT](https://dev.bukkit.org/projects/worldedit) (或 [FastAsyncWorldEdit](https://www.spigotmc.org/resources/fastasyncworldedit.13932/)) 是必需的！**

4) 在`/em setup`菜单中点击黄色玻璃以安装功能！

<div align="center">

<details>

<summary>图片示例</summary>

<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_install.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</details>

</div>

5) ***如果你的地下城文件中有自定义模型***，你可以选择按照这里列出的安装步骤[这里]($language$/elitemobs/custom_models.md&section=importing-custom-models-from-dungeons)进行安装。

就这样！**你可以在/em找到通往已安装的地下城和冒险者公会的传送门，在传送页面查找！**

[更多关于冒险者公会的信息在这里!]($language$/elitemobs/adventurers_guild_world.md)
<br>[在这里下载冒险者公会大厅世界！](https://magmaguy.itch.io/elitemobs-the-adventurers-guild)

# 推荐插件

- [WorldGuard](https://dev.bukkit.org/projects/worldguard)：用于设置和保护区域。[EliteMobs标志列表]($language$/elitemobs/worldguard_flags.md)。
- [WorldGuardExtraFlags](https://www.spigotmc.org/resources/worldguard-extra-flags.4823/)：用于反飞行标志，非常实用。
- [PlaceHolderAPI (PAPI)](https://www.spigotmc.org/resources/placeholderapi.6245/)：用于显示EliteMobs信息在其他插件，比如聊天。[更多信息]($language$/elitemobs/placeholders.md)。
- [LibsDisguises](https://www.spigotmc.org/resources/libs-disguises-free.81/)：用于将自定义Boss假扮成其他任何东西。伪装在官方地下城中被大量使用，因此强烈建议你安装这个插件。[更多信息]($language$/elitemobs/libsdisguises.md)。
- [DiscordSRV]($language$/elitemobs/discordsrv.md)：用于将EliteMobs通知链接到Discord聊天。[更多信息]($language$/elitemobs/discordsrv.md)

# 更新地下城内容

要更新地下城内容，只需重复上述的安装步骤。**你不需要删除任何文件**，当你导入更新时，EliteMobs会处理。

# 常见问题解答 (FAQ)

## EliteMobs说WorldGuard / WorldEdit没有安装，但是我已经安装了

<details><summary>答案</summary>

这100%意味着你在服务器上使用的WorldGuard / WorldEdit版本错误。你可以从上面的部分获得正确的版本。

</details>

## 世界基础小型地下城仅为平坦地形

<details><summary>答案</summary>

95％的情况下，这意味着你没有按照设置指示进行操作。如果你解压了任何文件或使用其他插件加载了任何世界，重新按照上述步骤安装内容。你不需要任何其他插件来正确加载世界。

</details>

## 在安装后，NPC聊天看起来很奇怪 / 虫洞无法工作 / 其他奇怪的行为

<details>

<summary>答案</summary>

在设置地下城后运行命令`/em reload`，以确保所有值得到完全初始化。重启会更好，但不是必需的。

</details>

## Bosses aren't spawning

### The boss was spawning earlier!

<details>

<summary>答案</summary>

区域boss具有重生时间。你可以通过访问其配置文件和复制"spawn locations"部分后面的`:`的数字，查看boss预计重生的时间。

例如：

```yml
spawnLocations:
- em_primis,1100.5,22.5,526.5,0.0,0.0:1643259941451
```

在这个场景，你在寻找的数字是`1643259941451`。你可以使用[此](https://www.unixtimestamp.com/index.php)网站将数字转换为特定日期。删除这个数字以强制boss重生，确保删除后执行`/em reload`。

</details>

### The boss was never spawning!

<details>

<summary>答案</summary>

检查以下事项：

- 你或其他人有没有杀掉boss，或者是它通过超时功能逃跑了吗？boss可能正在冷却重生。查看冷却时间，信息在上文中。
- 查看控制台是否有任何错误，尤其是在你安装地下城或者执行`/em reload`之后。错误应该会告诉你哪里出问题了。
- 检查你的区域是否被其他插件保护了，禁止怪物生成
- 检查你的世界难度，和平模式下怪物不能生成
- 检查WorldGuard标志，查看是否允许怪物生成
- 检查你是否在生成区域之上安装了地下城内容，这是默认受到保护的
- 极少数情况下，问题可能与服务器认为是哪一天有关。确保你的服务器机器日期是正确的，否则重生机制可能会导致一些问题。

</details>


## Something's messed up and I just can't fix it

<details>

<summary>答案</summary>

这通常发生在试图并未正确修改EliteMobs无法自我修复文件之后。如果你被困住了，无法从启动/地下城安装的控制台消息中找到如何修复的方法，最好的做法是清除安装EliteMobs。

备份你的`~/plugins/EliteMobs/data`文件夹以保留玩家数据，然后删除`~/plugins/EliteMobs/`文件夹。启动你的服务器，关闭它，在服务器离线时恢复备份的数据文件夹的内容，然后再次启动它。现在你可以继续安装EliteMobs内容。

</details>
