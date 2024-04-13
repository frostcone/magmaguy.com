# 冒险家公会的世界

### 什么是冒险家公会的世界？

冒险家公会的世界是由洛瑟里多尼亚领域为 EliteMobs 制作的预制世界的名称。

![ag_pic_1.jpg](../../../img/wiki/ag_pic_1.jpg)

### 冒险家公会世界的作用是什么？

冒险家公会世界作为 EliteMobs 的枢纽。通过托管枢纽，玩家不再需要记住任何命令（除了 /em）就可以与 EliteMobs 功能进行交互。

在世界中，以下 NPCs 提前布置：

- 传送者（返回到你之前的位置）
- 指南（初级任务以满足所有 NPC's）
- 公会服务员（用于升级[公会级别]($language$/elitemobs/understanding_the_basics_of_elitemobs.md&section=step-2:-discovering-the-economy)）
- 地牢传送者（特殊 NPC's，将玩家传送到安装的任何[Dungeons]($language$/elitemobs/dungeons.md)）
- 酒保（目前未实现）
- 任务发布者（浏览和接受随机生成的任务）
- 铁匠（购买程序生成的物品和销售精英怪物的掉落物）
- 特别铁匠（购买定制物品和销售精英怪物的掉落物）
- 战斗指导员（为 EliteMobs 的战斗提供提示）
- 虫洞（传送玩家到 [Dungeons]($language$elitemobs/dungeons.md) 和任何其他已安装的内容的传送门）
- 战场主人（该 NPC 会让玩家参加 [Wood League Arena]($language$elitemobs/understanding_the_basics_of_elitemobs.md&section=arenas)）
- 故事模式任务（让玩家接受 [Story Mode Dungeons](www.magmaguy.com) 中的任务）
- Unbinder（让玩家以一个价格 [Unbind]($language$/elitemobs/item_upgrade_system.md&section=unbinding-items) 他们的 EliteMobs 奖励）
- 废品商（让玩家将任何不需要的战利品转换为 [Scrap]($language$/elitemobs/item_upgrade_system.md&section=scrapping-items)）
- 修理工（玩家可以与该 NPC 互动，使用废品 [Repair]($language$/elitemobs/item_upgrade_system.md&section=repairing-elite-items) 他们的物品）
- 附魔师（让玩家 [Enchant]($language$/elitemobs/item_upgrade_system.md&section=enchanting-elite-items) 他们的物品）

此外，还设有一个冒险者公会大楼供 NPC 使用，以及一个 EliteMobs Arena（目前未实施，即将推出！）。

### 如何设置冒险家公会世界

要安装冒险者公会世界，请执行以下操作：

1. 下载文件。你可以点击 `/em setup` 中的红色玻璃以获取下载链接。

2. 将文件上传/移动到你的服务器的 `/plugins/EliteMobs/imports` 文件夹。确保将 **压缩** 文件放入 `imports` 文件夹中，不修改它们，EliteMobs 会自动提取文件并将它们移动到正确的位置。

3. 重启或执行 `/em reload`. 几秒钟后，当你执行 `/em setup` 时，你下载的功能的指标应该是黄色的。

   **重要：如果你想在 ELITEMOBS 中安装一些内容，[WORLDGUARD](https://dev.bukkit.org/projects/worldguard) 和 [WORLDEDIT](https://dev.bukkit.org/projects/worldedit)（或 [FastAsyncWorldEdit](https://www.spigotmc.org/resources/fastasyncworldedit.13932/)）是必需的！**

4. 在 `/em setup` 菜单中点击黄色的玻璃以安装导入的特性。如果一切都安装正确，你应该在冒险家公会枢纽世界。你可以随时通过执行 `/ag` 来传送到冒险家公会。

#### 配置虫洞

安装了冒险家公会枢纽世界后，你会注意到玩家传送进来的位置有一个虫洞。这个虫洞应由你配置，导回你的常规世界出生点或服务器的任何其他中心位置。

若要配置虫洞，请导航至目录 *~plugins\EliteMobs\wormholes* 并打开 *adventurers_guild_wormhole.yml*。找到 `location2` 值，并将 `your_world_here` 替换为你的世界名称，然后加上玩家应被传送到的正确坐标。