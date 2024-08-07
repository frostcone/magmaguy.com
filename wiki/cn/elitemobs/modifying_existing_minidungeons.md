# 修改现有小型地下城

根据大众的需求，此页面将介绍修改现有小型地下城的基础知识。这不是一个循序渐进的指南，而是对如何修改系统的更广泛的概述。您需要阅读关于 [自定义 Boss]($language$/elitemobs/creating_bosses.md) 和 [自定义物品]($language$/elitemobs/creating_items.md) 的维基页面才能修改这些值。

### 修改地下城难度

您可能希望修改地下城难度的三个原因如下：

### 修改 Boss 的伤害/生命值倍增器

这是最容易进行的修改。如果您认为 Boss 造成的伤害过少或过多，或者它们的健康值过低或过高，您可以修改 `custombosses` 文件夹中包含的 Boss 文件中与这些修改器关联的值。

您可能想要修改的值的示例：
```yml
healthMultiplier: 0.5
damageMultiplier: 0.5
```
有关 Boss 属性的更多信息，请参阅 [此处]($language$/elitemobs/creating_bosses.md&section=healthmultiplier)。

请记住，对于很多力量，伤害倍增器不会修改力量造成的伤害。有关如何修改力量的信息，请参阅下一部分。

### 修改 Boss 的力量

EliteMobs 的主要难点是处理 Boss 可能拥有的各种力量。更高级别的 Boss 往往拥有更多更强大的力量，而较低级别的 Boss 往往拥有更少更简单的力量。某些力量在同一个 Boss 身上一起使用会使战斗变得更容易，而其他力量组合在一起则会使战斗变得更加困难。

您可能想要修改的值的示例：
```yml
powers:
- invulnerability_fire.yml
- invulnerability_arrow.yml
```
有关 Boss 力量的更多信息，请参阅 [此处]($language$/elitemobs/creating_bosses.md&section=powers)。

由于这里列出的力量组合太多，您需要了解力量的工作原理并测试您的遭遇战，以便找到您认为既不太难也不太容易的遭遇战的最佳点。

### 修改 Boss 的等级

这是最常见的问题，虽然可以做到，但需要几个步骤才能确保您适当地向上或向下缩放您的 Boss。

您可能想要修改的值的示例：
```yml
level: 21
```
有关 Boss 等级的更多信息，请参阅 [此处]($language$/elitemobs/creating_bosses.md&section=level)。

这需要结合关于伤害/生命值倍增器的说明，因为较低/较高等级的 Boss 可能需要稍微不同的生命值和伤害倍增器才能使战斗感觉良好。

但是，这里要考虑的最重要的方面是 Boss 的力量。较低级别和较高级别的 Boss 往往具有相当不同的力量组合，具体取决于战斗的难度。为 10 级 Boss 和 200 级 Boss 使用相同的力量组合通常会导致战斗难度感觉截然不同。同样，真正找到最佳点的唯一方法是了解插件的力量是如何工作的并对其进行测试。

最后，**但并非最不重要！** 您可能想要调整自定义战利品。EliteMobs 中的大多数 Boss 都有自定义战利品，如果您要更改 Boss 的等级，很可能您想更改它掉落的战利品的性质。

您可能想要修改的值的示例：
```yml
uniqueLootList:
  - filename: mob_drop_boots.yml
    chance: 0.05
```
有关战利品掉落的更多信息，请参阅 [此处]($language$/elitemobs/loot_tables.md)。

### 署名/发布修改后的内容

在 EliteMobs 下，您可以自由地在适当的频道（Discord）上发布您创建的地下城。但是，如果您的作品只是对现有地下城的修改，则您的提交可能会被删除，尤其是如果它只是一个小小的调整，或者它包含或源自付费内容（出于显而易见的原因）。

您可以自由地修改您已购买或以其他方式下载的任何内容，以使其适应您服务器的需求，以便在您自己的网络中使用，但是出于显而易见的原因，这不会授予您重新分发的权利。

我们保留出于任何原因随时删除社区提交内容的权利，尽管我们实际上不愿意这样做。

### 更多信息

如果您认为此页面应该进一步扩展，请在 Discord 上留下建议，说明应该添加哪些内容。有关此处提到的各种系统的更多信息，请参阅其他维基页面。





