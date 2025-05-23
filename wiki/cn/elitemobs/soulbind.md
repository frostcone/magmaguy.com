灵魂绑定附魔将所有 EliteMobs 掉落物与掉落物所属的玩家绑定。这意味着每个玩家从击杀精英怪物中获得自己的奖励，使得分享掉落物不再是问题。

玩家无法从地面拾取不属于他们的灵魂绑定掉落物。他们可以从箱子中拾取，但在战斗中无法装备，这意味着它们只能被携带。

这是为了防止玩家不小心用无法移动的物品堵塞彼此的箱子。此外，玩家只能出售灵魂绑定给他们的物品。

这个附魔旨在与公会等级掉落限制器配合使用。

***

和所有附魔一样，可以在 enchantments 文件夹中禁用它 (soulbind.yml，设置 `isEnabled` 为 `false`)，但强烈不建议这样做。

***移除灵魂绑定可能导致的问题：***
- 精英怪物将不再掉落金币
- 玩家只需少量肝就能免费将钻石或下界合金装备分发给所有人
- 经济将立即崩溃，老玩家可以瞬间将玩家提升数十个等级
- 掉落限制器将不再起作用，这意味着玩家可以直接穿戴最高等级玩家的护甲和武器

***

管理员可以使用 `/em unbind` 命令移除物品上的灵魂绑定。

玩家可以使用解绑卷轴移除物品上的灵魂绑定。默认情况下，这由世界绑定者掉落，但如果需要，你可以配置其他 Boss 掉落它。