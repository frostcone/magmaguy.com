
注意：这部分谈论的是正常精英怪物的生成，而不是自定义Boss。同时也假设您使用的是默认配置设置。

# 精英怪物何时生成？

当一只普通怪物在穿着盔甲的玩家附近生成时，精英怪物会出现。只有至少是1级的盔甲才会导致精英怪物出现。更高级的盔甲会生成更高级的怪物。
<br>精英怪物的生成基于一定的百分比概率，这个可以在MobCombatSettings.yml文件中进行配置。

**如果玩家的装备不够好，就不会生成精英怪物。如果您只是在野外游荡而没有穿戴任何装备，你就不会找到任何精英怪物。**

## 什么决定了精英怪物的等级？

* 怪物的等级与玩家所穿戴的装备的平均等级相同。

## 什么决定了物品的等级？

* 非精英物品的等级等于材料的等级(如下所列)。精英物品的等级通常是基于被杀掉的精英的等级。

### 材料等级
* 三叉戟材料：9级
* 下界合金材料：8级
* 钻石材料：7级
* 铁材料：6级
* 石/链材料：5级
* 金/木/皮革材料：3级

***

# 我可以从精英怪物那里获得什么奖励？
在谈论特殊奖励之前，需要注意的是 **只有自然生成的精英怪物才会掉落特殊战利品**。你不能使用怪物生成器来获取特殊战利品。此外，反作弊机制可能会移除精英怪物掉落特殊战利品的资格。

这意味着如果系统检测到你正在攻击一个被困住的精英怪物，或者由于某种原因它不能到达你的位置（你正在飞翔/在塔上/它在一个洞里），它将停止显示其能量路径，并不再掉落任何特殊战利品。

精英怪物可以掉落三种类型的特殊物品：程序生成的物品，自定义物品和独特物品。另外，他们掉落的普通战利品比常规怪物要多。掉落几率不是100%，但获取战利品的机会会随着怪物级别的增加而增加。

## 什么是程序生成的物品？
程序生成的物品是根据服务器的配置设置生成的半随机的物品。程序生成的物品有无数可能。

通常程序生成的物品是具有不同的附魔数量和等级的任何材料质量的盔甲，武器和工具。

## 什么是自定义物品？
自定义物品是在插件中预加载的物品（如MagmaGuy的牙签和魔法符）或由管理员添加的物品。这些物品是完全定制的，可以在玩家拿在主手或副手上或穿戴时给玩家药水效果。

## 什么是独特物品？
独特物品是来自自定义Boss的特殊掉落物，这与自定义物品类似。它们有时也可能有独特的能力，例如为僵尸王的斧子提供喷火器能力。

***

# 我如何获得更好的战利品？
杀死的精英怪物等级越高，掉落的物品就越好！