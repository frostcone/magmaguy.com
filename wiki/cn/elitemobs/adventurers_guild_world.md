好的，这是翻译成简体中文的版本，保留了 Markdown 格式：

# 冒险者公会世界

### 什么是冒险者公会世界？

冒险者公会世界是由 Realm of Lotheridon 为 EliteMobs 制作的一个预设世界名称。

![ag_pic_1.jpg](../../../img/wiki/ag_pic_1.jpg)

### 冒险者公会世界有什么用？

冒险者公会世界充当 EliteMobs 的一个中心。通过托管这个中心，玩家不再需要记住任何命令（除了 /em）来与 EliteMobs 的功能进行交互。

在这个世界中，提前放置了以下 NPC：

- 传送师（用于返回你之前的位置）
- 向导（介绍性任务，让你认识所有 NPC）
- 公会服务员（用于升级[公会等级]($language$/elitemobs/understanding_the_basics_of_elitemobs.md&section=step-2:-discovering-the-economy)）
- 地下城传送师（特殊的 NPC，会将玩家传送到任何已安装的[地下城]($language$/elitemobs/dungeons.md)）
- 酒保（目前未实现）
- 任务给予者（用于浏览和接受随机生成的任务）
- 铁匠（用于购买程序生成的物品和出售精英怪物的掉落物）
- 特殊铁匠（用于购买自定义物品和出售精英怪物的掉落物）
- 战斗教练（提供关于 EliteMobs 战斗的技巧）
- 虫洞（会将玩家传送到[地下城]($language$elitemobs/dungeons.md)和任何其他已安装内容的传送门）
- 竞技场大师（这个 NPC 会让玩家参与[木材联盟竞技场]($language$elitemobs/understanding_the_basics_of_elitemobs.md&section=arenas)）
- 故事模式任务（让玩家接受[故事模式地下城](www.magmaguy.com)的任务）
- 解绑师（让玩家花费一定价格[解绑]($language$/elitemobs/item_upgrade_system.md&section=unbinding-items)他们的 EliteMobs 战利品）
- 拆解师（让玩家将任何不需要的战利品转换为[废料]($language$/elitemobs/item_upgrade_system.md&section=scrapping-items)）
- 修理工（玩家可以与这个 NPC 互动，使用废料[修理]($language$/elitemobs/item_upgrade_system.md&section=repairing-elite-items)他们的物品）
- 附魔师（让玩家[附魔]($language$/elitemobs/item_upgrade_system.md&section=enchanting-elite-items)他们的物品）

此外，还为 NPC 们提供了一个冒险者公会建筑，以及一个 EliteMobs 竞技场（目前未实现，即将推出！）。

### 如何设置冒险者公会世界

要安装冒险者公会世界，请执行以下操作：

1. 下载文件。你可以点击 /em setup 中的红色玻璃来获取下载链接。

2. 将文件上传/移动到你服务器的 /plugins/EliteMobs/imports 文件夹。确保将**压缩的**文件原封不动地放入 imports 文件夹中，EliteMobs 会自动解压文件并将它们移动到正确的位置。

3. 重启或执行 /em reload。几秒钟后，当你执行 /em setup 时，你下载的功能指示器应该会变成黄色。

4. 点击 /em setup 菜单中的黄色玻璃来安装导入的功能。如果一切安装正确，你应该会进入冒险者公会中心世界。你可以随时通过执行 /ag 传送到冒险者公会。

#### 配置虫洞

安装冒险者公会中心世界后，你会注意到玩家传送进入的地方有一个虫洞。这个虫洞应该由你来配置，以便将其连接回你的常规世界出生点或你服务器的任何其他中心位置。

要配置虫洞，请导航到目录 *~plugins\EliteMobs\wormholes* 并打开 *adventurers_guild_wormhole.yml*。找到 location2 值，并将 your_world_here 替换为你世界的名称，后面跟着玩家应该被传送到的正确坐标。