# 冒险者公会世界

### 冒险者公会世界是什么？

冒险者公会世界是 Realm of Lotheridon 为 EliteMobs 制作的一个预制世界。

![ag_pic_1.jpg](../../../img/wiki/ag_pic_1.jpg)

### 冒险者公会世界有什么用？

冒险者公会世界是 EliteMobs 的中心枢纽。通过创建这个枢纽，玩家不再需要记住任何命令（除了 /em）来与 EliteMobs 的功能互动。

在这个世界里，以下 NPC 会被预先放置：

- 传送员（用于返回你之前的位置）
- 指导员（引导玩家完成介绍性任务，并与所有 NPC 会面）
- 公会管理员（用于升级 [公会等级]($language$/elitemobs/understanding_the_basics_of_elitemobs.md&section=step-2:-discovering-the-economy))
- 地牢传送员（特殊的 NPC，可以将玩家传送到任何已安装的 [地牢]($language$/elitemobs/dungeons.md)）
- 酒吧老板（目前尚未实施）
- 任务发布者（用于浏览和接受随机生成的的任务）
- 锻造师（用于购买程序生成物品，以及出售从精英怪身上掉落的物品）
- 特殊锻造师（用于购买定制物品，以及出售从精英怪身上掉落的物品）
- 战斗教练（提供关于 EliteMobs 战斗的提示）
- 虫洞（传送门，用于将玩家传送到 [地牢]($language$elitemobs/dungeons.md) 和任何其他已安装的内容）
- 竞技场大师（这个 NPC 将允许玩家参加 [木联赛竞技场]($language$elitemobs/understanding_the_basics_of_elitemobs.md&section=arenas))
- 故事模式任务（允许玩家接取 [故事模式地牢](www.magmaguy.com) 的任务）
- 解绑师（允许玩家以一定价格 [解绑]($language$/elitemobs/item_upgrade_system.md&section=unbinding-items) 他们的 EliteMobs 战利品）
- 拆解师（允许玩家将任何不需要的战利品转换为 [碎片]($language$/elitemobs/item_upgrade_system.md&section=scrapping-items))
- 修理工（玩家可以与这个 NPC 互动来 [修理]($language$/elitemobs/item_upgrade_system.md&section=repairing-elite-items) 他们的物品，使用碎片）
- 附魔师（允许玩家 [附魔]($language$/elitemobs/item_upgrade_system.md&section=enchanting-elite-items) 他们的物品）

此外，还包括一个冒险者公会的建筑，用于容纳这些 NPC，以及一个 EliteMobs 竞技场（目前尚未实施，即将推出！）。

### 如何设置冒险者公会世界

要安装冒险者公会世界，请执行以下操作：

1. 下载文件。你可以点击 `/em setup` 中的红色玻璃，获取下载链接。

2. 将文件上传/移动到服务器的 `/plugins/EliteMobs/imports` 文件夹。确保将 **压缩的** 文件放在 `imports` 文件夹中，不要进行任何修改。EliteMobs 会自动解压缩文件，并将其移动到正确的位置。

3. 重启服务器或执行 `/em reload`。几秒钟后，当你执行 `/em setup` 时，你下载的功能的指示器应该变为黄色。

4. 点击 `/em setup` 菜单中的黄色玻璃，安装导入的功能。如果一切安装顺利，你应该位于冒险者公会的中心世界。你可以随时通过执行 `/ag` 传送到冒险者公会。

#### 配置虫洞

安装冒险者公会中心世界后，你将注意到玩家传送到的位置有一个虫洞。这个虫洞应该由你配置，以便引导玩家回到你服务器的常规世界重生点或任何其他中心位置。

要配置虫洞，请导航到 *~plugins\EliteMobs\wormholes* 目录，并打开 *adventurers_guild_wormhole.yml*。找到 `location2` 值，并将 `your_world_here` 替换为你的世界的名称，以及玩家应该被传送到的位置的正确坐标。


