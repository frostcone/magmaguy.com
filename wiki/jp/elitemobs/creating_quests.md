```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# カスタムクエストの作成

# カスタムクエストとは？

カスタムクエストは、プレイヤーがゲーム内で完了する必要がある一連のタスクです。クエストを完了すると、プレイヤーは、EliteMobs の通貨やカスタムアイテムなど、さまざまな報酬を獲得できます。

## カスタムクエストの作成方法

**注意:** カスタムクエストは、`~plugins/EliteMobs/customquests` フォルダに置きます。

### カスタムクエストの例

`test_quest.yml`

```yaml
isEnabled: true
customObjectives:
  Objective1:
    amount: '1'
    filename: test_boss.yml
    objectiveType: KILL_CUSTOM
customRewards:
- filename=magmaguys_toothpick.yml:amount=1:chance=1
name: "&aKill the Test Boss"
questLore: 
- "&cEnd the test boss'' reign of terror!"
```

<div align="center">

![create_quest_quest.jpg](../../../img/wiki/create_quest_quest.jpg)

</div>

*クエストUIがこのようにならない場合は、`/em alt` を使用して変更できます。*

このクエストの例では、プレイヤーはテストボスを 1 体倒すというタスクを与えられます。（クエストトラッカーに表示されるボスの実際の名前は、`test_boss.yml` で設定された `name:` になります）。クエストを完了した報酬として、プレイヤーは MagmaGuy's Toothpick を 1 つ獲得します。

## カスタムクエストの作成

<div align="center">

### customObjectives

クエストの目標を設定します。

| キー       |   値    | デフォルト |
|-----------|:-----------:|:-------:|
| `customObjectives` | Special [1] |  none   |

*注意: 多段階のボスを目標とする場合、目標は最初の段階を目標とする必要があります。*

<details> 

<summary><b>例</b></summary>

<div align="left">

`KILL_CUSTOM`:

```yml
customObjectives:
  Objective1:
    amount: '1'
    filename: my_cool_boss.yml
    objectiveType: KILL_CUSTOM
```

`DIALOG`:

```yml
customObjectives:
  Objective1:
    dialog:
    - "&a[Dialog NPC] &fCome here often?"
    - "&7&oI should eat more apples."
    filename: dialog_npc.yml
    npcName: Dialog NPC
    location: at dialog location.
    objectiveType: DIALOG
```

`FETCH_ITEM`:

```yml
customObjectives:
  Objective1:
    amount: '99'
    itemName: Red Apples
    filename: my_quest_item_red_apples.yml
    objectiveType: FETCH_ITEM
```

<div align="center">

![create_quest_objective.jpg](../../../img/wiki/create_quest_objective.jpg)

</div>

</div>

</details>

**Special [1]**

<details>

<summary><b>テーブルを展開</b></summary>

<div align="center">

カスタムの目標は、次の値を使用して構成されます。

| キー                                     | 説明 |
|-----------------------------------------|-------------|
| `KILL_CUSTOM` / `FETCH_ITEM` / `DIALOG` | これは、この目標が表す目標の種類を設定するために使用されます。`KILL_CUSTOM` は、クエストが特定のカスタムボスを倒すことを目的としていることを示し、`FETCH_ITEM` は、クエストが特定のカスタムアイテムを入手することを目的としていることを示し、`DIALOG` は、クエストが特定の NPC と会話することを目的としていることを示します。            |
| `filename`                                    | 特定のカスタムボス、カスタムアイテム（プレイヤーが倒す/入手する必要がある）、または会話する NPC のファイル名を設定するために使用されます。            |
| `amount`                                      | 倒す必要があるカスタムボスの数または入手する必要があるアイテムの数を設定するために使用されます。            |
| `dialog`                                      | プレイヤーが会話する NPC のダイアログを設定するために使用されます。            |
| `name`                                        | クエストの目標の名前を設定するために使用されます。これは、NPC やカスタムアイテムのいずれかです。表示目的でのみ使用されます。            |

_カスタムの目標の各フィールドは、`:` で区切られます_

</div>

</details>

***

### customRewards

クエストの報酬を設定します。

| キー       |                                値                                 | デフォルト |
|-----------|:---------------------------------------------------------------------:|:-------:|
| `customRewards` | [ユニバーサルEliteMobs loot format]($language$elitemobs/loot_tables.md) |  none   |

<details> 

<summary><b>例</b></summary>

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

クエストを受け入れるためにプレイヤーが持つ必要がある権限を設定します。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
| `questAcceptPermission` | [String](#string) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
questAcceptPermission: elitequest.my_permission
```

</div>

</details>

***

### questAcceptPermissions

クエストを受け入れるためにプレイヤーが持つ必要がある権限を設定します。

| キー       |   値    | デフォルト |
|-----------|:-----------:|:-------:|
| `questAcceptPermissions` | [String List](#string_list) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
questAcceptPermissions: 
- elitequest.my_previous_quest_one.yml
- elitequest.my_previous_quest_two.yml
```

</div>

</details>

***

### questLockoutPermission

クエストを完了した際にプレイヤーが取得する権限を設定します。これにより、プレイヤーはクエストを再度実行できなくなります（通常は、編集しているクエストの [Filename](#fielname) になります）。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
| `questLockoutPermission` | [String](#string) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
questLockoutPermission: elitequest.my_quest.yml
```

</div>

</details>

***

### questLockoutMinutes

クエストを再度実行できるようになるまで、プレイヤーが待機する時間（分）を設定します（クエストのロックアウト権限を削除することで機能します）。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
| `questLockoutMinutes` | [Integer](#integer) |  `-1`(will never repeat)   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
questLockoutMinutes: 60
```

</div>

</details>

***

### name

クエストの名前を設定します。[カラーコード](#color_codes) を受け付けます。

| キー    |      値       | デフォルト |
|--------|:-----------------:|:-------:|
| `name` | [String](#string) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
name: "&aMy Great Quest Name"
```

</div>

</details>

***

### questLore

ゲーム内のクエストメニューに表示されるクエストの説明文を設定します。

| キー    |      値       | デフォルト |
|--------|:-----------------:|:-------:|
| `questLore` | [String List](#string_list) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
questLore:
- "Interesting lore sentence."
- "Yet another interesting lore sentence."
```

<div align="center">

![create_quest_lore.jpg](../../../img/wiki/create_quest_lore.jpg)

</div>

</div>

</details>

***

### temporaryPermissions

クエストを提出するまで、プレイヤーに割り当てられる権限を設定します。

この設定を使用して、特定のクエストがアクティブになっている場合にのみアイテムがドロップされるようにする場合、アイテムの設定ファイルに [同じ権限]($language$/elitemobs/creating_items.md&section=permission) を構成する必要もあります。

| キー    |      値       | デフォルト |
|--------|:-----------------:|:-------:|
| `temporaryPermissions` | [String List](#string_list) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
temporaryPermissions:
- elitequest.item_that_should_drop_only_during_quest.yml
```

</div>

</details>

***

### questAcceptDialog

クエストを受け入れた際にチャットに表示されるダイアログを設定します。

| キー    |      値       | デフォルト |
|--------|:-----------------:|:-------:|
| `questAcceptDialog` | [String List](#string_list) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
questAcceptDialog:
- "My hero! You are so helpful!"
- "I wish you the best of luck!"
```

<div align="center">

![create_quest_accept.jpg](../../../img/wiki/create_quest_accept.jpg)

</div>

</div>

</details>

***

### questCompleteMessage

クエストを完了（提出）した際にチャットに表示されるダイアログを設定します。

| キー    |      値       | デフォルト |
|--------|:-----------------:|:-------:|
| `questCompleteMessage` | [String List](#string_list) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
questCompleteMessage:
- "My hero! You have completed my difficult quest!"
- "As a reward you can have this loaf of bread!"
```

<div align="center">

![create_quest_complete.jpg](../../../img/wiki/create_quest_complete.jpg)

</div>

</div>

</details>

***

### questCompleteCommands

クエスト完了時に実行されるコマンドを設定します。

| キー    |      値       | デフォルト |
|--------|:-----------------:|:-------:|
| `questCompleteCommands` | [String List](#string_list) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
questCompleteCommands:
- say $player has finished a quest!
```

<div align="center">

![create_quest_commands.jpg](../../../img/wiki/create_quest_commands.jpg)

</div>

</div>

</details>

***

### turnInNPC

クエストを完了するためにプレイヤーが話しかける/対話する必要がある NPC のファイル名を設定します。これは、クエストを配布した NPC と同じ NPC である必要はありません。

| キー    |      値       | デフォルト |
|--------|:-----------------:|:-------:|
| `turnInNPC` | [Filename](#filename) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
turnInNPC: my_cool_quest_npc.yml
```

</div>

</details>

***

### trackable

クエストでクエストトラッカーを使用するかどうかを設定します。

| キー    |      値       | デフォルト |
|--------|:-----------------:|:-------:|
| `trackable` | [Boolean](#boolean) | `true`  |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
trackable: true
```

</div>

</details>

***

### questLevel

クエストのレベルを設定します。これは、クエストの難易度をプレイヤーに示すための視覚的なガイドです。これは、ボス、アイテム、その他のレベルをいかなる方法でも変更しません。

| キー    |      値       | デフォルト |
|--------|:-----------------:|:-------:|
| `questLevel` | [Integer](#integer) | `0`  |

<details> 

<summary><b>例</b></summary>

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

クエストを受け入れたときに再生されるサウンドを設定します。Minecraft のサウンドを再生することも、リソースパックからサウンドを再生することもできます。

| キー                |      値       | デフォルト |
|--------------------|:-----------------:|:-------:|
| `questAcceptSound` | [String](#string) |  none   |

<details> 

<summary><b>例</b></summary>

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

クエストを完了（提出）したときに再生されるサウンドを設定します。Minecraft のサウンドを再生することも、リソースパックからサウンドを再生することもできます。

| キー                |      値       | デフォルト |
|--------------------|:-----------------:|:-------:|
| `questCompleteSound` | [String](#string) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
questCompleteSound: entity.player.levelup
```

<div align="center">

![create_quest_level.jpg](../../../img/wiki/create_quest_BUGGEDaddLATER.jpg)

</div>

</div>

</details>

### 権限

上記テーブルで説明したように、権限は通常、[Strings](#string) または [String Lists](#string_list) です。しかし、クエストをロックして解除するためにどのように使用するかを詳しく見ていきましょう。

一連のクエストのクエスト3を作成していて、プレイヤーがクエスト2を完了する前にクエスト3を受け取れないようにしたいとします。クエストファイルは次のように構成されます。

```yml
questAcceptPermission: elitequest.quest_2.yml
questLockoutPermission: elitequest.quest_3.yml
```
`questAcceptPermissions` を `elitequest.quest_2.yml` に設定することで、プレイヤーがクエスト2.ymlを完了する前にクエスト3.ymlを受け取れなくなりました。 </br> `questLockoutPermission` を `elitequest.quest_3.yml` に設定することで、プレイヤーがすでにトラッカーにそのクエストを持っている場合や、すでにそのクエストを完了している場合は、そのクエストを受信できなくなりました。これにより、プレイヤーはクエストを繰り返すことができなくなります。

一連のクエストを完了した後にのみ利用可能になるクエストを作成する場合は、クエストファイルは次のように構成されます。

```yml
questAcceptPermissions: 
- elitequest.quest_2.yml
- elitequest.quest_3.yml
- elitequest.quest_4.yml
```

特定のクエストがアクティブになっている場合にのみプレイヤーが特定のアイテムをlootできるようにするには、`temporaryPermissions` を使用できます。クエストファイルで `temporaryPermissions` を使用して権限を作成し、アイテムファイルで `permission` を使用して一致する [権限]($language$/elitemobs/creating_items.md&section=permission) を作成します。

たとえば、クエストファイルを開いて、次を追加します。

```yml
temporaryPermissions: 
- elitequest.my_cool_item.yml
```
次に、アイテムファイル（この場合は *my_cool_item.yml*）を開き、次を追加します。

```yml
permission: elitequest.my_cool_item.yml
```
これで、両方のファイルで権限が一致するようになったため、アイテムはプレイヤーが正しいクエストをアクティブにしている場合にのみドロップされるようになりました。

</div>

```

