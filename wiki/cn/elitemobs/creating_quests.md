[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 示例任务

EliteMobs 预装了一个 `测试任务.yml`，这里将对其进行分析，作为一个简单的任务格式供您参考。

_自定义任务位于 `~plugins/EliteMobs/customquests` 文件夹中！_

`测试任务.yml`

```yaml
isEnabled: true
customObjectives:
  Objective1:
    amount: '1'
    filename: 测试_Boss.yml
    objectiveType: KILL_CUSTOM
customRewards:
- filename=magmaguys_toothpick.yml:amount=1:chance=1
name: "&a杀死测试 Boss"
questLore: 
- "&c结束测试 Boss 的恐怖统治！"
```

<div align="center">

![create_quest_quest.jpg](../../../img/wiki/create_quest_quest.jpg)

</div>

*如果您的任务界面看起来不像这样，您可以使用 `/em alt` 将其更改为匹配。*

此示例任务将为玩家提供杀死 1 个测试_Boss.yml 的任务。（任务追踪器中显示的 Boss 的实际名称将是在测试_Boss.yml 中设置的 `name:`。）作为完成任务的奖励，他们将获得 1 个 Magmaguy 的牙签。

## 创建自定义任务

<div align="center">

### customObjectives

设置任务目标。

| 键                | 值           | 默认值 |
|--------------------|:------------:|--------|
| `customObjectives` | 特殊 [1]      | 无      |

*注意：如果您使用多阶段 Boss 作为您的目标，则目标应该使用第一阶段作为目标。*

<details> 

<summary><b>示例</b></summary>

<div align="left">

`KILL_CUSTOM`：

```yml
customObjectives:
  Objective1:
    amount: '1'
    filename: 我的酷_Boss.yml
    objectiveType: KILL_CUSTOM
```

`DIALOG`：

```yml
customObjectives:
  Objective1:
    dialog:
    - "&a[对话 NPC] &f经常来这里吗？"
    - "&7&o我应该多吃苹果。"
    filename: 对话_npc.yml
    npcName: 对话 NPC
    location: 在对话位置。
    objectiveType: DIALOG
```

`FETCH_ITEM`：

```yml
customObjectives:
  Objective1:
    amount: '99'
    itemName: 红苹果
    filename: 我的任务_物品_红苹果.yml
    objectiveType: FETCH_ITEM
```

<div align="center">

![create_quest_objective.jpg](../../../img/wiki/create_quest_objective.jpg)

</div>

</div>

</details>

**特殊 [1]**

<details>

<summary><b>展开表格</b></summary>

<div align="center">

自定义目标使用以下值构建：

| 键                      | 描述                                                                                                                   |
|-------------------------|------------------------------------------------------------------------------------------------------------------------|
| `KILL_CUSTOM` / `FETCH_ITEM` / `DIALOG` | 用于设置此目标代表的目标类型。`KILL_CUSTOM` 表示任务涉及杀死特定的自定义 Boss，`FETCH_ITEM` 表示任务涉及获得特定的自定义物品，`DIALOG` 表示任务涉及与 NPC 交谈。 |
| `filename`              | 用于设置玩家必须杀死/获得的自定义 Boss、自定义物品或他们必须与之交谈的 NPC 的文件名。                                                                      |
| `amount`                | 用于设置必须杀死的自定义 Boss 数量或必须获得的物品数量。                                                                                        |
| `dialog`                | 用于设置玩家与之交谈的 NPC 的对话。                                                                                               |
| `name`                  | 用于设置任务目标的名称，无论是 NPC 还是自定义物品。仅用于视觉目的。                                                                               |

_请注意，每个自定义目标字段都用 `:` 分隔！_

</div>

</details>

***

### customRewards

设置任务奖励。

| 键             | 值                                                                      | 默认值 |
|----------------|:-------------------------------------------------------------------------:|--------|
| `customRewards` | [通用 EliteMobs 战利品格式]($language$elitemobs/loot_tables.md) | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
customRewards:
- currencyAmount=50:amount=1:chance=0.05
- material=COOKED_COD:amount=3:chance=1.0
- filename=magmaguys_toothpick.yml:amount=1:chance=1.0
```

<div align="center">

![create_quest_rewards.jpg](../../../img/wiki/create_quest_rewards.jpg)

</div>

</div>

</details>

***

### questAcceptPermission

设置玩家接受任务必须拥有的权限。

| 键                    | 值              | 默认值 |
|------------------------|:-----------------|--------|
| `questAcceptPermission` | [字符串](#字符串) | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
questAcceptPermission: elitequest.我的权限
```

</div>

</details>

***

### questAcceptPermissions

设置玩家接受任务必须拥有的权限。

| 键                       | 值                     | 默认值 |
|---------------------------|:------------------------:|--------|
| `questAcceptPermissions` | [字符串列表](#字符串列表)      | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
questAcceptPermissions: 
- elitequest.我的先前任务_一.yml
- elitequest.我的先前任务_二.yml
```

</div>

</details>

***

### questLockoutPermission

设置玩家在完成任务后将获得的权限，该权限将阻止他们再次执行任务（通常是您正在编辑的任务的 [文件名](#文件名)）。

| 键                      | 值              | 默认值 |
|--------------------------|:-----------------|--------|
| `questLockoutPermission` | [字符串](#字符串) | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
questLockoutPermission: elitequest.我的任务.yml
```

</div>

</details>

***

### questLockoutMinutes

设置玩家在可以再次执行任务之前必须等待的时间（以分钟为单位）（通过删除任务锁定权限来实现）。

| 键                   | 值                | 默认值                     |
|-----------------------|:------------------:|------------------------------|
| `questLockoutMinutes` | [整数](#整数)          | `-1`（将永远无法重复） |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
questLockoutMinutes: 60
```

</div>

</details>

***

### name

设置任务名称。接受 [颜色代码](#颜色代码)。

| 键     | 值              | 默认值 |
|---------|:-----------------|--------|
| `name` | [字符串](#字符串) | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
name: "&a我的伟大任务名称"
```

</div>

</details>

***

### questLore

设置将出现在游戏内任务菜单中的任务传说。

| 键         | 值                     | 默认值 |
|-------------|:------------------------:|--------|
| `questLore` | [字符串列表](#字符串列表)      | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
questLore:
- "有趣的传说句子。"
- "另一个有趣的传说句子。"
```

<div align="center">

![create_quest_lore.jpg](../../../img/wiki/create_quest_lore.jpg)

</div>

</div>

</details>

***

### temporaryPermissions

设置分配给玩家的权限，直到他们完成任务。

如果您使用此设置来确保只有在玩家激活了特定任务时才会掉落物品，则还需要在物品的配置文件中配置 [相同的权限]($language$/elitemobs/creating_items.md&section=permission)。

| 键                     | 值                     | 默认值 |
|-------------------------|:------------------------:|--------|
| `temporaryPermissions` | [字符串列表](#字符串列表)      | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
temporaryPermissions:
- elitequest.任务期间应掉落的物品.yml
```

</div>

</details>

***

### questAcceptDialog

设置在接受任务时出现在聊天中的对话。

| 键                  | 值                     | 默认值 |
|----------------------|:------------------------:|--------|
| `questAcceptDialog` | [字符串列表](#字符串列表)      | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
questAcceptDialog:
- "我的英雄！你真是太有帮助了！"
- "祝你好运！"
```

<div align="center">

![create_quest_accept.jpg](../../../img/wiki/create_quest_accept.jpg)

</div>

</div>

</details>

***

### questCompleteMessage

设置在完成任务（提交）时出现在聊天中的对话。

| 键                      | 值                     | 默认值 |
|--------------------------|:------------------------:|--------|
| `questCompleteMessage` | [字符串列表](#字符串列表)      | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
questCompleteMessage:
- "我的英雄！你完成了我的困难任务！"
- "作为奖励，你可以得到这条面包！"
```

<div align="center">

![create_quest_complete.jpg](../../../img/wiki/create_quest_complete.jpg)

</div>

</div>

</details>

***

### questCompleteCommands

设置在完成任务时将运行的命令。

| 键                       | 值                     | 默认值 |
|---------------------------|:------------------------:|--------|
| `questCompleteCommands` | [字符串列表](#字符串列表)      | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
questCompleteCommands:
- say $player 完成了任务！
```

<div align="center">

![create_quest_commands.jpg](../../../img/wiki/create_quest_commands.jpg)

</div>

</div>

</details>

***

### turnInNPC

设置玩家需要与之交谈/互动以完成任务的 NPC 的文件名。这**不**一定是发布任务的同一个 NPC。

| 键          | 值                  | 默认值 |
|--------------|:----------------------:|--------|
| `turnInNPC` | [文件名](#文件名)      | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
turnInNPC: 我的酷任务_npc.yml
```

</div>

</details>

***

### trackable

设置任务是否将使用任务追踪器。

| 键         | 值              | 默认值 |
|-------------|:-----------------|--------|
| `trackable` | [布尔值](#布尔值) | `true` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
trackable: true
```

</div>

</details>

***

### questLevel

设置任务的等级。这只是一个视觉指南，因此玩家可以判断任务的难度。这**不**会以任何方式修改 Boss、物品或其他等级。

| 键          | 值                | 默认值 |
|--------------|:------------------:|--------|
| `questLevel` | [整数](#整数)          | `0`    |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
questLevel: 10
```

<div align="center">

![create_quest_level.jpg](../../../img/wiki/create_quest_BUGGEDaddLATER.jpg)

</div>

</div>

</details>

***

### questAcceptSound

设置接受任务时播放的声音。可以同时播放 Minecraft 声音和资源包中的声音。

| 键                  | 值              | 默认值 |
|----------------------|:-----------------|--------|
| `questAcceptSound` | [字符串](#字符串) | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
questAcceptSound: entity.experience_orb.pickup
```

<div align="center">

![create_quest_level.jpg](../../../img/wiki/create_quest_BUGGEDaddLATER.jpg)

</div>

</div>

</details>

***

### questCompleteSound

设置完成任务（提交）时播放的声音。可以同时播放 Minecraft 声音和资源包中的声音。

| 键                     | 值              | 默认值 |
|-------------------------|:-----------------|--------|
| `questCompleteSound` | [字符串](#字符串) | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
questCompleteSound: entity.player.levelup
```

<div align="center">

![create_quest_level.jpg](../../../img/wiki/create_quest_BUGGEDaddLATER.jpg)

</div>

</div>

</details>

### 权限

如上表所述，权限通常是 [字符串](#字符串) 或 [字符串列表](#字符串列表)。但让我们更详细地了解您将如何使用这些权限来锁定和解锁任务。

假设您正在制作一系列任务中的任务_3，并且您不希望玩家在完成任务_2 之前能够接受任务_3。我们将按如下方式配置任务文件：

```yml
questAcceptPermission: elitequest.任务_2.yml
questLockoutPermission: elitequest.任务_3.yml
```
通过将 `questAcceptPermissions` 设置为 `elitequest.任务_2.yml`，我们现在阻止了玩家在完成任务_2.yml 之前接受任务_3.yml。</br> 通过将 `questLockoutPermission` 设置为 `elitequest.任务_3.yml`，我们阻止了玩家在他们的追踪器中已经有该任务或他们已经完成了该任务的情况下再次接收该任务。这可以阻止玩家重复执行任务。

如果您希望创建一个只有在玩家完成一系列任务后才会可用的任务，则您应该按如下方式配置任务文件：

```yml
questAcceptPermissions: 
- elitequest.任务_2.yml
- elitequest.任务_3.yml
- elitequest.任务_4.yml
```

如果您希望玩家只有在激活了正确的任务时才能拾取某些物品，我们可以通过使用 `temporaryPermissions` 来做到这一点。我们将在任务文件中使用 `temporaryPermissions` 创建一个权限，然后在物品文件中使用 `permission` 创建一个匹配的 [权限]($language$/elitemobs/creating_items.md&section=permission)。

例如，我们将打开我们的任务文件并添加以下内容：

```yml
temporaryPermissions: 
- elitequest.我的酷物品.yml
```
然后，我们将打开物品文件，在本例中为 *我的酷物品.yml*，然后添加以下内容：

```yml
permission: elitequest.我的酷物品.yml
```
现在，这两个文件都具有匹配的权限，这应该使我们的物品仅在玩家激活了正确的任务时才会掉落。

</div>



