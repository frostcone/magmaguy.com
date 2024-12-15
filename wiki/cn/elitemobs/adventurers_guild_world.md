# 冒险者公会世界

### 什么是冒险者公会世界？

冒险者公会世界是由 Realm of Lotheridon 为 EliteMobs 制作的预制世界的名称。

![ag_pic_1.jpg](../../../img/wiki/ag_pic_1.jpg)

### 冒险者公会世界是干什么用的？

冒险者公会世界充当 EliteMobs 的中心。通过托管中心，玩家不再需要记住任何命令（除了 /em）即可与 EliteMobs 功能交互。

在世界中，以下 NPC 会提前放置：

- 传送器（用于返回您之前的位置）
- 向导（介绍性任务，以会见所有 NPC）
-
公会侍者（用于升级 [公会等级]($language$/elitemobs/understanding_the_basics_of_elitemobs.md&section=step-2:-discovering-the-economy)）
- 地牢传送器（将玩家传送到任何已安装的 [地牢]($language$/elitemobs/dungeons.md) 的特殊 NPC）
- 酒保（当前未实现）
- 任务给予者（用于浏览和接受随机生成的任务）
- 铁匠（用于购买程序化生成的物品和出售精英生物的掉落物）
- 特殊铁匠（用于购买自定义物品和出售精英生物的掉落物）
- 战斗导师（用于提供有关 EliteMobs 战斗的提示）
- 虫洞（将玩家传送到 [地牢]($language$elitemobs/dungeons.md) 和任何其他已安装内容的传送门）
- 竞技场大师（此 NPC
  将允许玩家参加 [木制联赛竞技场]($language$elitemobs/understanding_the_basics_of_elitemobs.md&section=arenas)）
- 故事模式任务（让玩家为 [故事模式地牢](www.magmaguy.com) 接取任务）
- 解绑器（让玩家以一定的价格 [解绑]($language$/elitemobs/item_upgrade_system.md&section=unbinding-items) 他们的 EliteMobs
  战利品）
- 拆解器（让玩家将任何不需要的战利品转换为 [废料]($language$/elitemobs/item_upgrade_system.md&section=scrapping-items)）
- 修理工（玩家可以与此 NPC
  互动，以使用废料 [修理]($language$/elitemobs/item_upgrade_system.md&section=repairing-elite-items) 他们的物品）
- 附魔师（让玩家 [附魔]($language$/elitemobs/item_upgrade_system.md&section=enchanting-elite-items) 他们的物品）

此外，还为 NPC 提供了一个冒险者公会大楼，以及一个 EliteMobs 竞技场（当前未实现，即将推出！）。

### 如何设置冒险者公会世界

要安装冒险者公会世界，请执行以下操作：

1. 下载文件。您可以单击 `/em setup` 中的红色玻璃以获取下载链接。

2. 将文件上传/移动到服务器的 `/plugins/EliteMobs/imports` 文件夹。确保将 **ZIP** 文件放入 `imports`
   文件夹内，而不要以任何方式修改它们，EliteMobs 将自动提取文件并将它们移动到正确的位置。

3. 重新启动或执行 `/em reload`。几秒钟后，当您执行 `/em setup` 时，您下载的功能的指示器应为黄色。

4. 单击 `/em setup`
   菜单中的黄色玻璃以安装导入的功能。如果一切安装正确，您应该在冒险者公会中心世界中。您可以随时通过执行 `/ag` 传送到冒险者公会。

#### 配置虫洞

安装冒险者公会中心世界后，您会注意到玩家传送进入的位置有一个虫洞。此虫洞应该由您配置，以引导返回您的常规世界生成点或服务器的任何其他中心位置。

要配置虫洞，请导航到目录 *~plugins\EliteMobs\wormholes* 并打开 *adventurers_guild_wormhole.yml*。找到 `location2`
值，并将 `your_world_here` 替换为您的世界名称，后跟玩家应传送到的正确坐标。
