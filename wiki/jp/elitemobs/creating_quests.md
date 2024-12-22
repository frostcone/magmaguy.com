[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# クエストの例

EliteMobsには、あらかじめ`test_quest.yml`が同梱されており、これを簡単なクエスト形式として分析します。

_カスタムクエストは`~plugins/EliteMobs/customquests`フォルダーにあります！_

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
name: "&aテストボスを倒せ"
questLore: 
- "&cテストボスの恐怖政治を終わらせろ！"
```

<div align="center">

![create_quest_quest.jpg](../../../img/wiki/create_quest_quest.jpg)

</div>

*クエストUIがこのようにならない場合は、`/em alt`を使用して一致するように変更できます。*

このクエストの例では、プレイヤーは1体のtest_boss.ymlを倒すタスクを与えられます。（クエストトラッカーに表示されるボスの実際の名前は、test_boss.ymlで設定された`name:`
になります。）また、クエストを完了すると、報酬としてMagmaguyのToothpickが1つ与えられます。

## カスタムクエストの作成

<div align="center">

### customObjectives

クエストの目標を設定します。

| キー                 |   値    | デフォルト |
|--------------------|:------:|:-----:|
| `customObjectives` | 特殊 [1] |  なし   |

*注：マルチフェーズボスを目標として使用している場合、目標は最初のフェーズをターゲットとして使用する必要があります。*

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
    - "&a[会話NPC] &fよくここに来るんですか？"
    - "&7&oもっとリンゴを食べるべきだ。"
    filename: dialog_npc.yml
    npcName: 会話NPC
    location: 会話場所で.
    objectiveType: DIALOG
```

`FETCH_ITEM`:

```yml
customObjectives:
  Objective1:
    amount: '99'
    itemName: 赤いリンゴ
    filename: my_quest_item_red_apples.yml
    objectiveType: FETCH_ITEM
```

<div align="center">

![create_quest_objective.jpg](../../../img/wiki/create_quest_objective.jpg)

</div>

</div>

</details>

**特殊 [1]**

<details>

<summary><b>テーブルを展開</b></summary>

<div align="center">

カスタム目標は、以下の値を使用して構築されます。

| キー                                      | 説明                                                                                                                                            |
|-----------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| `KILL_CUSTOM` / `FETCH_ITEM` / `DIALOG` | この目標が表すタイプを設定するために使用されます。`KILL_CUSTOM`は、クエストが特定のカスタムボスのキルを伴うことを示し、`FETCH_ITEM`は、クエストが特定のカスタムアイテムの入手を伴うことを示し、`DIALOG`は、クエストがNPCとの会話を伴うことを示します。 |
| `filename`                              | プレイヤーがキル/入手する必要のあるカスタムボス、カスタムアイテム、または会話する必要のあるNPCのファイル名を設定するために使用されます。                                                                        |
| `amount`                                | キルする必要のあるカスタムボスの数、または入手する必要のあるアイテムの数を設定するために使用されます。                                                                                           |
| `dialog`                                | プレイヤーが会話するNPCの会話を設定するために使用されます。                                                                                                               |
| `name`                                  | クエスト目標の名前を設定するために使用します。NPCまたはカスタムアイテムの場合があります。視覚的な目的のみに使用されます。                                                                                |

_すべてのカスタム目標フィールドは、`:`で区切られていることに注意してください！_

</div>

</details>

***

### customRewards

クエストの報酬を設定します。

| キー              |                                   値                                   | デフォルト |
|-----------------|:---------------------------------------------------------------------:|:-----:|
| `customRewards` | [Universal EliteMobs loot format]($language$elitemobs/loot_tables.md) |  なし   |

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

プレイヤーがクエストを受けるために必要な権限を設定します。

| キー                      |       値        | デフォルト |
|-------------------------|:--------------:|:-----:|
| `questAcceptPermission` | [文字列](#string) |  なし   |

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

プレイヤーがクエストを受けるために必要な権限を設定します。

| キー                       |           値            | デフォルト |
|--------------------------|:----------------------:|:-----:|
| `questAcceptPermissions` | [文字列リスト](#string_list) |  なし   |

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

クエストを完了するとプレイヤーが得る権限を設定します。これにより、プレイヤーは再びクエストを実行できなくなります（通常、編集しているクエストの[ファイル名](#fielname)）。

| キー                       |       値        | デフォルト |
|--------------------------|:--------------:|:-----:|
| `questLockoutPermission` | [文字列](#string) |  なし   |

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

プレイヤーがクエストを再度実行できるようになるまでに待機する必要がある時間（分単位）を設定します（クエストロックアウト権限を削除することで機能します）。

| キー                    |       値        |    デフォルト     |
|-----------------------|:--------------:|:------------:|
| `questLockoutMinutes` | [整数](#integer) | `-1`(繰り返し不可) |

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

クエスト名を設定します。[カラーコード](#color_codes)を受け入れます。

| キー     |       値        | デフォルト |
|--------|:--------------:|:-----:|
| `name` | [文字列](#string) |  なし   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
name: "&a私の偉大なクエスト名"
```

</div>

</details>

***

### questLore

ゲーム内クエストメニューに表示されるクエストの伝承を設定します。

| キー          |           値            | デフォルト |
|-------------|:----------------------:|:-----:|
| `questLore` | [文字列リスト](#string_list) |  なし   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
questLore:
  - "興味深い伝承文。"
  - "さらに別の興味深い伝承文。"
```

<div align="center">

![create_quest_lore.jpg](../../../img/wiki/create_quest_lore.jpg)

</div>

</div>

</details>

***

### temporaryPermissions

クエストを完了するまでプレイヤーに割り当てられる権限を設定します。

この設定を使用して、プレイヤーが特定のクエストをアクティブにしている場合にのみアイテムがドロップするようにする場合は、アイテムの構成ファイルで[同じ権限]($language$/elitemobs/creating_items.md&section=permission)
も構成する必要があります。

| キー                     |           値            | デフォルト |
|------------------------|:----------------------:|:-----:|
| `temporaryPermissions` | [文字列リスト](#string_list) |  なし   |

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

クエストを受けたときにチャットに表示されるダイアログを設定します。

| キー                  |           値            | デフォルト |
|---------------------|:----------------------:|:-----:|
| `questAcceptDialog` | [文字列リスト](#string_list) |  なし   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
questAcceptDialog:
  - "私のヒーロー！あなたはとても親切です！"
  - "幸運を祈ります！"
```

<div align="center">

![create_quest_accept.jpg](../../../img/wiki/create_quest_accept.jpg)

</div>

</div>

</details>

***

### questCompleteMessage

クエスト完了時にチャットに表示されるダイアログを設定します。

| キー                     |           値            | デフォルト |
|------------------------|:----------------------:|:-----:|
| `questCompleteMessage` | [文字列リスト](#string_list) |  なし   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
questCompleteMessage:
  - "私のヒーロー！あなたは私の難しいクエストを完了しました！"
  - "報酬として、このパンをあげましょう！"
```

<div align="center">

![create_quest_complete.jpg](../../../img/wiki/create_quest_complete.jpg)

</div>

</div>

</details>

***

### questCompleteCommands

クエスト完了時に実行されるコマンドを設定します。

| キー                      |           値            | デフォルト |
|-------------------------|:----------------------:|:-----:|
| `questCompleteCommands` | [文字列リスト](#string_list) |  なし   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
questCompleteCommands:
- say $player がクエストを完了しました！
```

<div align="center">

![create_quest_commands.jpg](../../../img/wiki/create_quest_commands.jpg)

</div>

</div>

</details>

***

### turnInNPC

クエストを完了するために、プレイヤーが会話/対話する必要のあるNPCのファイル名を設定します。これは、クエストを渡したNPCと同じである必要は
**ありません**。

| キー          |         値          | デフォルト |
|-------------|:------------------:|:-----:|
| `turnInNPC` | [ファイル名](#filename) |  なし   |

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

クエストがクエストトラッカーを使用するかどうかを設定します。

| キー          |        値        | デフォルト  |
|-------------|:---------------:|:------:|
| `trackable` | [真偽値](#boolean) | `true` |

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

クエストのレベルを設定します。これは視覚的なガイドに過ぎないため、プレイヤーはクエストがどれほど難しいかを知ることができます。これは、ボス、アイテム、またはその他のレベルを修正するものでは
**ありません**。

| キー           |       値        | デフォルト |
|--------------|:--------------:|:-----:|
| `questLevel` | [整数](#integer) |  `0`  |

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

クエストを受けたときに再生されるサウンドを設定します。Minecraftのサウンドを再生することも、リソースパックからサウンドを再生することも可能です。

| キー                 |       値        | デフォルト |
|--------------------|:--------------:|:-----:|
| `questAcceptSound` | [文字列](#string) |  なし   |

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

クエストが完了したとき（引き渡されたとき）に再生されるサウンドを設定します。Minecraftのサウンドを再生することも、リソースパックからサウンドを再生することも可能です。

| キー                   |       値        | デフォルト |
|----------------------|:--------------:|:-----:|
| `questCompleteSound` | [文字列](#string) |  なし   |

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

上記の表で述べたように、権限は通常、[文字列](#string)または[文字列リスト](#string_list)
です。ただし、これらの権限を使用してクエストをロックおよびロック解除する方法について詳しく説明しましょう。

たとえば、計画している一連のクエストのクエスト3を作成しており、プレイヤーがクエスト2を完了する前にクエスト3を受け取ることができないようにしたいとします。クエストファイルを次のように構成します。

```yml
questAcceptPermission: elitequest.quest_2.yml
questLockoutPermission: elitequest.quest_3.yml
```

`questAcceptPermissions`を`elitequest.quest_2.yml`
に設定することで、プレイヤーがquest_2.ymlを完了する前にquest_3.ymlを受け取ることを防ぎました。</br> `questLockoutPermission`
を`elitequest.quest_3.yml`
に設定することで、プレイヤーがすでにトラッカーにそのクエストを持っている場合、またはすでにそのクエストを完了している場合、プレイヤーがそのクエストを受け取ることができないようにしました。これにより、プレイヤーがクエストを繰り返すことができなくなります。

プレイヤーが一連のクエストを完了した後にのみ利用可能になるクエストを作成する場合は、クエストファイルを次のように構成します。

```yml
questAcceptPermissions: 
- elitequest.quest_2.yml
- elitequest.quest_3.yml
- elitequest.quest_4.yml
```

プレイヤーが正しいクエストをアクティブにしている場合にのみ特定のアイテムを略奪できるようにする場合は、`temporaryPermissions`
を使用してそれを行うことができます。`temporaryPermissions`を使用してクエストファイルに権限を作成し、次に`permission`
を使用してアイテムファイルに一致する[権限]($language$/elitemobs/creating_items.md&section=permission)を作成します。

たとえば、クエストファイルを開き、以下を追加します。

```yml
temporaryPermissions: 
- elitequest.my_cool_item.yml
```

次に、アイテムファイル（この場合は*my_cool_item.yml*）を開き、以下を追加します。

```yml
permission: elitequest.my_cool_item.yml
```

両方のファイルに一致する権限があり、これでプレイヤーが正しいクエストをアクティブにしている場合にのみアイテムがドロップされるようになります。

</div>
