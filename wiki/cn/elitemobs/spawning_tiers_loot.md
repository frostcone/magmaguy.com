注意：本节讨论的是普通精英怪物的生成，而不是自定义 Boss。它还假设您使用的是默认配置设置。

# 精英怪物何时生成？

当普通怪物在穿着盔甲的玩家附近生成时。只有至少 1 级的盔甲才会导致精英怪物出现。更高级别的盔甲会生成更高级别的怪物。
<br>它们的生成基于百分比几率，这可以在 MobCombatSettings.yml 文件中配置。

**如果玩家装备不够好，则不会生成精英怪物。如果您在荒野中漫游时没有穿戴任何装备，您将不会找到任何精英怪物。**

## 什么决定了精英怪物的等级？

* 怪物的等级与玩家穿着的装备的平均等级相同。

## 什么决定了物品的等级？

* 非精英物品的等级等于材料的等级（如下所列）。精英物品的等级*通常*基于被杀死的精英的等级。

### 材料等级
* 三叉戟材料：9 级
* 下界合金材料：8 级
* 钻石材料：7 级
* 铁制材料：6 级
* 石头/锁链材料：5 级
* 金/木/皮革材料：3 级

***

# 我可以从精英怪物那里获得哪些奖励？
在讨论特殊奖励之前，需要注意的是，**只有自然生成的精英怪物才会掉落特殊战利品**。您不能使用怪物生成器获得特殊战利品。此外，反作弊机制可能会取消精英怪物掉落特殊战利品的资格。

这意味着，如果系统检测到您正在与一个被困住或由于某种原因无法接触到您的精英怪物战斗（您正在飞行/在一个塔上/它在一个洞里），它将停止显示其力量轨迹，并且不再掉落任何特殊战利品。


精英怪物可以掉落三种类型的特殊物品：程序生成的物品、自定义物品和独特物品。此外，它们比普通怪物掉落更多的普通战利品。掉落几率不是 100%，但获得战利品的几率会随着怪物等级的增加而增加。

## 什么是程序生成的物品？
程序生成的物品是根据服务器的配置设置半随机生成的物品。程序生成的物品几乎有无限种可能性。

通常，程序生成的物品是任何材料质量的盔甲、武器和工具，附魔数量和等级各不相同。

## 什么是自定义物品？
自定义物品是预加载到插件中的物品（例如 MagmaGuy 的牙签和饰品）或由管理员添加的物品。这些物品是完全自定义的，并且可以在玩家穿着或持于主手或副手时给予玩家药水效果。

## 什么是独特物品？
独特物品是自定义 Boss 掉落的特殊物品，类似于自定义物品。它们有时还可能具有独特的力量，例如僵尸王的斧头的火焰喷射器力量。

***

# 如何获得更好的战利品？
被杀死的精英怪物的等级越高，掉落的物品就越好！

