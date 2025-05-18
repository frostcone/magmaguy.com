[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# クエスト例

EliteMobsには`test_quest.yml`がプリパッケージされており、ここでは簡単なクエスト形式として分析します。

_カスタムクエストは`~plugins/EliteMobs/customquests`フォルダにあります！_

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
name: "&aテストボスを倒す"
questLore:
- "&cテストボスの恐怖の支配を終わらせろ！"
```

<div align="center">

![create_quest_quest.jpg](../../../img/wiki/create_quest_quest.jpg)

</div>

*クエストUIがこのように見えない場合は、`/em alt`を使用して一致するように変更できます。*

このクエスト例では、プレイヤーに1体のtest_boss.ymlを倒すタスクを与えます。（クエストトラッカーに表示されるボスの実際の名前は、test_boss.ymlで設定された`name:`になります。）そして、クエストを完了した報酬として、Magmaguy's Toothpickが1つ与えられます。

## カスタムクエストの作成

<div align="center">

### customObjectives

クエストの目標を設定します。

| キー               |   値    | デフォルト |
|--------------------|:-------:|:--------:|
| `customObjectives` | 特殊 [1] |   なし   |

*注：目標としてマルチフェーズボスを使用している場合、目標は最初のフェーズをターゲットとして使用する必要があります。*

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
    - "&a[Dialog NPC] &fよくここに来るの？"
    - "&7&oもっとリンゴを食べなきゃ。"
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

**特殊 [1]**

<details>

<summary><b>テーブルを展開</b></summary>

<div align="center">

カスタム目標は、以下の値を使用して構築されます。

| キー                                     | 説明 |
|-----------------------------------------|-------------|
| `KILL_CUSTOM` / `FETCH_ITEM` / `DIALOG` | これが表す目標のタイプを設定するために使用されます。`KILL_CUSTOM`は特定のカスタムボスを倒すクエストであることを示し、`FETCH_ITEM`は特定のカスタムアイテムを入手するクエストであることを示し、`DIALOG`はNPCと話すクエストであることを示します。            |
| `filename`                                    | プレイヤーが倒す/入手する必要があるカスタムボス、カスタムアイテム、または話す必要のあるNPCのファイル名を設定するために使用されます。            |
| `amount`                                      | 倒す必要があるカスタムボスの数、または入手する必要があるアイテムの数を設定するために使用されます。            |
| `dialog`                                      | プレイヤーが話すNPCのダイアログを設定するために使用されます。            |
| `name`                                        | NPCであろうとカスタムアイテムであろうと、クエスト目標の名前を設定するために使用されます。視覚的な目的のみです。            |

_すべてのカスタム目標フィールドは`:`で区切られていることに注意してください！_

</div>

</details>

***

### customRewards

クエストの報酬を設定します。

| キー               |                                値                                 | デフォルト |
|--------------------|:---------------------------------------------------------------------:|:--------:|
| `customRewards` | [ユニバーサル EliteMobs ルート形式]($language$elitemobs/loot_tables.md) |   なし   |

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

プレイヤーがクエストを受諾するために必要な権限を設定します。

| キー                      |      値       | デフォルト |
|---------------------------|:-------------:|:--------:|
| `questAcceptPermission` | [文字列](#string) |   なし   |

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

プレイヤーがクエストを受諾するために必要な権限を設定します。

| キー                       |      値       | デフォルト |
|----------------------------|:-------------:|:--------:|
| `questAcceptPermissions` | [文字列リスト](#string_list) |   なし   |

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

クエスト完了時にプレイヤーが付与される権限を設定します。これにより、同じクエストを再度行うことができなくなります（通常、編集しているクエストの[ファイル名](#fielname)を使用します）。

| キー                         |      値       | デフォルト |
|------------------------------|:-------------:|:--------:|
| `questLockoutPermission` | [文字列](#string) |   なし   |

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

プレイヤーがクエストを再度行うことができるようになるまで待つ必要がある時間（分単位）を設定します（クエストロックアウト権限を削除することで機能します）。

| キー                        |      値       | デフォルト         |
|-----------------------------|:-------------:|:----------------:|
| `questLockoutMinutes` | [整数](#integer) |  `-1`(繰り返さない)   |

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

| キー   |      値       | デフォルト |
|--------|:-------------:|:--------:|
| `name` | [文字列](#string) |   なし   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
name: "&a私の素晴らしいクエスト名"
```

</div>

</details>

***

### questLore

ゲーム内のクエストメニューに表示されるクエストのロア（説明文）を設定します。

| キー        |      値       | デフォルト |
|-------------|:-------------:|:--------:|
| `questLore` | [文字列リスト](#string_list) |   なし   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
questLore:
- "興味深いロアの文章。"
- "さらに別の興味深いロアの文章。"
```

<div align="center">

![create_quest_lore.jpg](../../../img/wiki/create_quest_lore.jpg)

</div>

</div>

</details>

***

### temporaryPermissions

プレイヤーがクエストを提出するまで付与される権限を設定します。

この設定を使用して、特定のクエストがアクティブな場合にのみアイテムがドロップするようにする場合は、アイテムの設定ファイルで[同じ権限]($language$/elitemobs/creating_items.md&section=permission)も設定する必要があります。

| キー                 |      値       | デフォルト |
|----------------------|:-------------:|:--------:|
| `temporaryPermissions` | [文字列リスト](#string_list) |   なし   |

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

クエスト受諾時にチャットに表示されるダイアログを設定します。

| キー                 |      値       | デフォルト |
|----------------------|:-------------:|:--------:|
| `questAcceptDialog` | [文字列リスト](#string_list) |   なし   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
questAcceptDialog:
- "私のヒーロー！あなたはとても親切です！"
- "幸運を祈っています！"
```

<div align="center">

![create_quest_accept.jpg](../../../img/wiki/create_quest_accept.jpg)

</div>

</div>

</details>

***

### questCompleteMessage

クエスト完了時にチャットに表示されるダイアログを設定します。

| キー                   |      値       | デフォルト |
|------------------------|:-------------:|:--------:|
| `questCompleteMessage` | [文字列リスト](#string_list) |   なし   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
questCompleteMessage:
- "私のヒーロー！私の難しいクエストを完了しましたね！"
- "報酬として、このパンをどうぞ！"
```

<div align="center">

![create_quest_complete.jpg](../../../img/wiki/create_quest_complete.jpg)

</div>

</div>

</details>

***

### questCompleteCommands

クエスト完了時に実行されるコマンドを設定します。

| キー                    |      値       | デフォルト |
|-------------------------|:-------------:|:--------:|
| `questCompleteCommands` | [文字列リスト](#string_list) |   なし   |

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

プレイヤーがクエストを完了するために話す/インタラクトする必要があるNPCのファイル名を設定します。これは、クエストを配布したNPCと同じである必要は**ありません**。

| キー        |      値       | デフォルト |
|-------------|:-------------:|:--------:|
| `turnInNPC` | [ファイル名](#filename) |   なし   |

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

| キー        |      値       | デフォルト |
|-------------|:-------------:|:--------:|
| `trackable` | [ブール値](#boolean) | `true`  |

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

クエストのレベルを設定します。これはプレイヤーがクエストの難易度を判断するための視覚的なガイドにすぎません。ボス、アイテム、その他のレベルを**一切**変更しません。

| キー         |      値       | デフォルト |
|--------------|:-------------:|:--------:|
| `questLevel` | [整数](#integer) | `0`  |

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

クエスト受諾時に再生されるサウンドを設定します。Minecraftのサウンドとリソースパックからのサウンドの両方を再生できます。

| キー                 |      値       | デフォルト |
|----------------------|:-------------:|:--------:|
| `questAcceptSound` | [文字列](#string) |   なし   |

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

クエスト完了時（提出時）に再生されるサウンドを設定します。Minecraftのサウンドとリソースパックからのサウンドの両方を再生できます。

| キー                   |      値       | デフォルト |
|------------------------|:-------------:|:--------:|
| `questCompleteSound` | [文字列](#string) |   なし   |

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

上記の表で述べたように、権限は通常[文字列](#string)または[文字列リスト](#string_list)です。しかし、これらをどのように使用してクエストをロック/アンロックするかについて、さらに詳しく見ていきましょう。

計画している一連のクエストでクエスト3を作成しており、プレイヤーがクエスト2を完了する前にクエスト3を受け取れないようにしたいとします。クエストファイルを次のように設定します。

```yml
questAcceptPermission: elitequest.quest_2.yml
questLockoutPermission: elitequest.quest_3.yml
```
`questAcceptPermissions`を`elitequest.quest_2.yml`に設定することで、プレイヤーがquest_2.ymlを完了する前にquest_3.ymlを受け取れないようにしました。</br> `questLockoutPermission`を`elitequest.quest_3.yml`に設定することで、プレイヤーがそのクエストをトラッカーに持っているか、すでに完了している限り、そのクエストを受け取れないようにしました。これにより、プレイヤーがクエストを繰り返すことができなくなります。

プレイヤーが一連のクエストを完了した後にのみ利用可能になるクエストを作成したい場合は、クエストファイルを次のように設定します。

```yml
questAcceptPermissions:
- elitequest.quest_2.yml
- elitequest.quest_3.yml
- elitequest.quest_4.yml
```

プレイヤーが正しいクエストがアクティブな場合にのみ特定のアイテムをルートできるようにしたい場合は、`temporaryPermissions`を使用することでそれが可能です。クエストファイルで`temporaryPermissions`を使用して権限を作成し、アイテムファイルで[権限]($language$/elitemobs/creating_items.md&section=permission)を使用して一致する権限を作成します。

例えば、クエストファイルを開いて以下を追加します。

```yml
temporaryPermissions:
- elitequest.my_cool_item.yml
```
次に、アイテムファイル（この場合は*my_cool_item.yml*）を開いて以下を追加します。

```yml
permission: elitequest.my_cool_item.yml
```
これで両方のファイルに一致する権限が設定され、プレイヤーが正しいクエストをアクティブにしている場合にのみアイテムがドロップするようになります。

</div>