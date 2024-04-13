[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# EliteMobs编程系统

以下页面涵盖如何创建精英脚本！

这是一项高级功能，需要对EliteMobs有一些深入的了解。

**注：精英脚本可以作为动力文件或添加到自定义boss文件！**如果将其用作动力文件，可以将其作为正常的动力添加到使用[powers]($language$/elitemobs/creating_bosses.md&section=powers)配置设置的自定义Boss，一如既往。

## 添加EliteScript

要开始向boss添加EliteScript，将以下条目添加到boss文件：

```yml
eliteScript:
```

**注意：以下内容对大小写和空格极其敏感！确保您的空格、换行符和整体格式与示例匹配！**

现在你已经声明了你的脚本开始，你可以添加你的特定脚本。在这个例子中，我们要创建一个叫做`Example`的脚本：

```yml
eliteScript:
  Example:
```

EliteScripts有5个不同的部分：`Events`，`Conditions`，`Zones`，`Actions`和`Cooldowns`。只有`Actions`是强制性的。

让我们看一个简单的例子：

```yml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PUSH
      Target:
        targetType: SELF
      vValue: 0,0.5,0
    Cooldowns:
      local: 60
      global: 20
```

此脚本使得当玩家击中精英时，精英会被推动起来，并且3秒内不会再次这样做（由于我们在"Cooldowns"部分设置的设置，将阻止其他动力触发1秒）。

现在你知道脚本的一般格式，是时候学习你可以用每个部分做什么了！

----

# 事件

[事件]($language$/elitemobs/elitescript_events.md)

点击上面的链接以了解如何使用事件！

# 目标

[目标]($language$/elitemobs/elitescript_targets.md)

点击上面的链接以了解如何使用目标！

# 行动

[行动]($language$/elitemobs/elitescript_actions.md)

点击上面的链接以了解如何使用操作！

# 区域

[区域]($language$/elitemobs/elitescript_zones.md)

点击上面的链接以了解如何使用区域！

# 条件

[条件]($language$/elitemobs/elitescript_conditions.md)

点击上面的链接以了解如何使用条件！

# 冷却期

[冷却期]($language$/elitemobs/elitescript_cooldowns.md)

点击上面的链接以了解如何使用冷却期！

----

## 添加多个EliteScripts

你可以在一个事件上有多个操作，但是如果你想要在同一个boss上有多个脚本怎么办？这就像创建一个新的脚本条目一样简单！让我们扩展以前的例子，向它添加另一个脚本：

```yml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PUSH
      Target:
        targetType: SELF
      vValue: 0,0.5,0
    Cooldowns:
      local: 60
      global: 20
  Example2:
    Events:
    - PlayerDamagedByEliteMobEvent
    Actions:
    - action: SET_ON_FIRE
      Target:
        targetType: DIRECT_TARGET
    Cooldowns:
      local: 200
      global: 60
```
在这个例子中，我们添加了一个叫做Example2的第二个脚本。Example2将会把被boss伤害的玩家设为on-fire，这是因为targetType被设置为[DIRECT_TARGET]($language$/elitemobs/elitescript_targets.md&section=target-types)。 </br>这个脚本的冷却时间设置为200个刻，这意味着boss每10秒才能把玩家设为火焰状。

## 制作独立的权力

独立的权力几乎完全由Elite Script组成。只有两个字段是可选的。不要忘记，为了让独立权力工作，它们必须放在`~plugins/EliteMobs/powers`文件夹中。</br>独立力量例子：

```yml
isEnabled: true
powerType: UNIQUE
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PUSH
      Target:
        targetType: SELF
      vValue: 0,.3,0
    Cooldowns:
      local: 60
      global: 20
```

### isEnabled

与插件中的其他地方一样，设置权力是否启用。

### powerType

优势类型设置了如何分配优势。值包括：

- `UNIQUE`：权力只会被添加到在配额部分设置了权力的自定义boss上。
- `DEFENSIVE` / `MISCELLANEOUS` / `OFFENSIVE`：任意精英都可以获得这些权力，他们会计入到特定的权力子集。
- `MAJOR_ZOMBIE`， `MAJOR_SKELETON`， `MAJOR_BLAZE`， `MAJOR_ENDERMAN`， `MAJOR_GHAST`：只有适当类型的精英才能自然地以这些权力出现，并且他们会计入主要权力。