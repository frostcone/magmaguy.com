[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# EliteMobs 脚本系统

以下页面介绍了如何创建 Elite 脚本！

这是一个高级功能，需要对 EliteMobs 有深入的了解。

**注意：Elite 脚本可以作为能力文件或添加到自定义 Boss 文件中！** 如果作为能力文件使用，您可以像往常一样，通过自定义 Boss 的 [powers]($language$/elitemobs/creating_bosses.md&section=powers) 配置设置，将它们作为普通能力添加到 Boss 中。

## 添加 EliteScript

要开始向 Boss 添加 EliteScript，请在 Boss 文件中添加以下条目：

```yml
eliteScript:
```

**注意：以下内容对大小写和空格极其敏感！请确保您的空格、换行符和整体格式与示例匹配！**

现在您已经声明了脚本的开始，您可以添加您的特定脚本。在此示例中，我们将创建一个名为 `Example` 的脚本：

```yml
eliteScript:
  Example:
```

EliteScripts 有 5 个不同的部分：`Events`（事件）、`Conditions`（条件）、`Zones`（区域）、`Actions`（动作）和 `Cooldowns`（冷却）。只有 `Actions` 是必需的。

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

此脚本使精英怪在被玩家击中时向上推，并且在 3 秒内不会再次发生（并且由于我们在 Cooldowns 部分设置的设置，将在 1 秒内阻止其他能力触发）。

现在您知道了脚本结构的一般格式，是时候学习每个部分可以做什么了！

----

# 事件 (Events)

[事件 (Events)]($language$/elitemobs/elitescript_events.md)

点击上面的链接了解如何使用事件！

# 目标 (Targets)

[目标 (Targets)]($language$/elitemobs/elitescript_targets.md)

点击上面的链接了解如何使用目标！

# 动作 (Actions)

[动作 (Actions)]($language$/elitemobs/elitescript_actions.md)

点击上面的链接了解如何使用动作！

# 区域 (Zones)

[区域 (Zones)]($language$/elitemobs/elitescript_zones.md)

点击上面的链接了解如何使用区域！

# 条件 (Conditions)

[条件 (Conditions)]($language$/elitemobs/elitescript_conditions.md)

点击上面的链接了解如何使用条件！

# 冷却 (Cooldowns)

[冷却 (Cooldowns)]($language$/elitemobs/elitescript_cooldowns.md)

点击上面的链接了解如何使用冷却！

----

## 添加多个 EliteScripts

一个事件可以有多个动作，但是如果您想在同一个 Boss 上使用多个脚本怎么办？这就像创建一个新的脚本条目一样简单！让我们扩展前面的示例，并向其中添加另一个脚本：

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
在此示例中，我们添加了第二个名为 Example2 的脚本。Example2 将点燃被 Boss 伤害的玩家，这是因为 targetType 被设置为 [DIRECT_TARGET]($language$/elitemobs/elitescript_targets.md&section=target-types)。</br>此脚本的冷却时间设置为 200 刻，这意味着 Boss 每 10 秒才能点燃玩家一次。

## 制作独立能力

独立能力几乎完全由 Elite 脚本组成。只有两个字段是可选的。不要忘记，要使独立能力起作用，它们必须放置在 `~plugins/EliteMobs/powers` 文件夹中。</br>独立能力示例：

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

与插件中的其他地方一样，设置能力是否启用。

### powerType

Power type 设置能力的分配方式。值包括：

- `UNIQUE`：能力只会应用于在 powers 部分设置了该能力的自定义 Boss。
- `DEFENSIVE` / `MISCELLANEOUS` / `OFFENSIVE`：任何精英怪都可以获得这些能力，并且它们将计入特定的能力子集。
- `MAJOR_ZOMBIE`, `MAJOR_SKELETON`, `MAJOR_BLAZE`, `MAJOR_ENDERMAN`, `MAJOR_GHAST`：只有相应实体类型的精英怪才能自然生成并带有这些能力，并且它们将计入主要能力。