# 什么是 LibsDisguises？

LibsDisguises 是一个插件，允许服务器将任何实体伪装成任何其他类型的实体。例如，您可以将玩家伪装成绵羊，或将绵羊伪装成玩家。

LibsDisguises 有[免费](https://www.spigotmc.org/resources/libs-disguises-free.81/) 和 [付费](https://www.spigotmc.org/resources/libs-disguises.32453/) 版本。LibsDisguises 由其他开发者创建和维护，因此请不要在 EliteMobs 支持部分请求对其进行支持。

# 如何将实体伪装成玩家？

要将自定义 Boss（或区域 Boss，甚至是 NPC！）伪装成玩家，您需要做的就是在 Boss 配置文件中添加以下行：

```yml
disguise: 玩家:名称
```

例如，如果您想将 Boss 伪装成我的玩家皮肤，则配置行应如下所示：

```yml
disguise: 玩家:magmaguy
```

# 如何将实体伪装成玩家皮肤，但不一定是玩家？

这是将实体伪装成玩家的最灵活的方式，因为它允许管理员使用在线皮肤，甚至创建自己的皮肤来伪装 Boss。这样做也稍微复杂一些。

为了简单起见，此处列出的示例假设您将使用在线可用的皮肤。Libsdisguises 提供了不同的皮肤反序列化方法，包括将您自己的自定义皮肤放入其文件夹中的一种方法。如果您不想使用在线可用的皮肤，请查看其文档。

### 1. 设置伪装

对于伪装，您需要执行以下操作：

```yaml
disguise: custom:您的唯一皮肤名称
```

### 2. 生成伪装数据

这是棘手的部分。您首先创建以下配置条目：

```yaml
customDisguiseData: 玩家 您的唯一皮肤名称 setskin 
```

*您在 disguise 中为您的唯一皮肤名称设置的名称必须与 customDisguiseData 中的名称相匹配！*

然后，您将需要反序列化玩家皮肤。对于在线公开可用的皮肤，最简单的方法是使用 LibsDisguises 的 grabskin 命令。

假设您要获取 [此皮肤](https://www.minecraftskins.com/skin/18512841/buff-villager/)。

为此，您需要运行命令 `/grabskin https://www.minecraftskins.com/uploads/skins/2021/07/28/buff-villager-18512841.png?v437`

**注意：您需要提供指向皮肤文件的直接链接，而不是指向包含皮肤的页面的链接。注意链接指向的位置。在 [skindex](https://www.minecraftskins.com/) 中，您可以通过按下每个皮肤右下角的“图像链接”按钮来获取直接链接。**

成功执行此操作后，LibsDisguises 将为您提供大约 3-6 个数字，显示“点击复制”。如果您点击这些数字，将会出现一长串数字和字母。您需要确保从 1 开始并按顺序执行所有数字。要复制它们，请按 Ctrl-a，然后按 Ctrl-c，然后使用 Ctrl-v 将它们粘贴到文件中。完成后，它应类似于以下内容：

```yaml
customDisguiseData: 玩家 您的唯一皮肤名称 setskin {"id":"d1fbb77f-b184-4718-b0a2-c7ae866798d3","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTYyNzU0ODkwMjQ0OSwKICAicHJvZmlsZUlkIiA6ICIxOTI1MjFiNGVmZGI0MjVjODkzMWYwMmE4NDk2ZTExYiIsCiAgInByb2ZpbGVOYW1lIiA6ICJTZXJpYWxpemFibGUiLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzlmYTZkMWFlODA2YTY2OGI0OTgzYmZhY2ZkMGUzMzQ5MGE5MGU4YTZmMWE2MmEwZGQ5YzQ1YjdkYjBiNjU1MyIKICAgIH0KICB9Cn0=","signature":"P/XSvxX45MUZGc5uuDKuVgmMUk2V1HADPI84Os5J4NnmURhLeS4jL4FSeShmz0cH7sBWmMg80g9ADP33R9PcOmzbHK4hJBFt2VYLJNgSYHK6VGp6qLGXDfdAa3vRNXN7jKtsrqVEANax7Gzv3xcWARLbq1FuQ6yYdXDY8Coc02Y/POMRG/i6iACtro5DQGhr2JgbL++95UhSBFxmU82Zef3UMHLfgt7lC4vWN4c4xrOAKllzF2mwohuMmEkoKzu/6s/eu5q4J4bBH08M8UN02/yJuEH5sTy/iVJfaoPs90ZfcVdRpUZvVDZh5eXapQN1/Q9/79Pc8YOXF/20iygZ/hpvTPKP8wbMP2b1cJSyAaEIUtG9I7mG3bAXbH7mcswM1CNFF3+GEFnZI5dPxzuOelJR/t2mtVl82a4zEm9KG9Fq7iGfuK9aiWR8Yot1KeuIddPbBL8JnxHy2wW9OySjzAbs8tUI/i5KKmZmQrPH0RmHrFIuVK4C849QtRt57sQaUr1+W6Vto3r7J5jhpZ30wIIfS9hvW/ReB9rbwUQWERWie5Lchfcp7YkKbzuuaddnIjPew2IQDESlXzVW84kXtYKCs8hFgYVn27wU8jqtBCVkr0iHW7YLQTl4SFUzTFCSgAx5KSFHGm/4kqXqpHNdjS687o13MWpxrxLkV1svIp4="}],"legacy":false}
```

就这样！`customDisguiseData` 将与任何反序列化的皮肤代码一起使用，因此如果您在 LibsDisguises 中找到生成相同代码的其他方法，则可以在此处使用它。

customDisguiseData 的优势在于它是自包含的，这意味着您不必依赖在线玩家、具有特定皮肤的玩家或其他任何东西。EliteMobs 使用它为地下城包中的所有伪装 Boss 设置皮肤！

# 如何将自定义 Boss 伪装成其他类型的实体？

要将自定义 Boss（或区域 Boss）伪装成其他类型的实体，您需要做的就是在 Boss 配置文件中添加以下行：

```yml
disguise: 实体类型
```

例如，如果您希望您的自定义 Boss 被伪装成绵羊，您可以执行以下操作：

```yml
disguise: 绵羊
```
## 如何将自定义 Boss 伪装成幼年实体？

要将自定义 Boss（或区域 Boss）伪装成幼年实体，您需要做的就是在 Boss 配置文件中添加以下行：

```yml
disguise:疣猪兽:baby
```
正如您在此示例中看到的，我们的 Boss 将被伪装成幼年疣猪兽。

# 如何使用自定义伪装伪装实体？

要将自定义 Boss（或区域 Boss）伪装成自定义 LibsDisguises 实体，您需要先创建 LibsDisguises 伪装。

完成后，正确的语法是：

```yml
disguise: custom:您的自定义伪装名称
```

# 有效的伪装

没有官方的有效实体类型列表，但以下是一个非官方列表，在撰写本文时（2020 年 8 月 3 日）应该有效。

<details>

<summary><b>展开列表</b></summary>

```
    盔甲架
    箭
    蝙蝠
    烈焰人
    船
    猫
    洞穴蜘蛛
    鸡
    鳕鱼
    牛
    爬行者
    海豚
    驴
    龙火球
    溺尸
    掉落物
    鸡蛋
    远古守卫者
    末影水晶
    末影龙
    末影珍珠
    末影之眼
    末影人
    末影螨
    唤魔者
    唤魔者尖牙
    经验球
    下落的方块
    火球
    烟花火箭
    鱼钩
    狐狸
    恶魂
    巨人
    守卫者
    疣猪兽
    马
    尸壳
    幻术师
    铁傀儡
    物品展示框
    羊驼
    羊驼唾液
    拴绳结
    岩浆怪
    矿车
    运输矿车
    命令方块矿车
    动力矿车
    漏斗矿车
    刷怪笼矿车
    TNT 矿车
    模组杂项
    模组生物
    骡
    哞菇
    豹猫
    画
    熊猫
    鹦鹉
    幻翼
    猪
    僵尸猪人
    猪灵
    掠夺者
    玩家
    北极熊
    点燃的 TNT
    河豚
    兔子
    劫掠兽
    鲑鱼
    绵羊
    潜影贝
    潜影弹
    蠹虫
    骷髅
    骷髅马
    史莱姆
    小火球
    雪球
    雪傀儡
    幽灵箭
    喷溅药水
    鱿鱼
    流浪者
    蜘蛛骑士
    投掷的经验瓶
    药箭
    三叉戟
    行商羊驼
    热带鱼
    海龟
    恼鬼
    村民
    卫道士
    流浪商人
    女巫
    凋灵
    凋灵骷髅
    凋灵骷髅头
    狼
    猪灵蛮兵
    僵尸
    僵尸马
    僵尸村民
    僵尸化猪灵
```

</details>

