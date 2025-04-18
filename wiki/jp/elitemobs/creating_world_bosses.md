# ワールドボスの作成

*ワールドボスは、リージョナルボスとも呼ばれることがあります。*

## ワールドボスとは？

ワールドボスは、特定の場所で特定の遅延でスポーンするように設定されたカスタムボスです。これらはダンジョンで使用されるボスでもあります。ただし、このセクションでは、ダンジョンの外で使用するためのワールドボスの作成について具体的に説明します。

## ワールドボスの目的は？

ワールドボスを使用すると、プレイヤーは固定されたチャレンジに直面し、戦利品が価値あるものになることを知ることができます。

## ワールドボスを作成するために必要なものは？

1. **場所**。
   Minecraftのアグロ範囲のため、半径約15ブロック（直径30ブロック）のボスの部屋をお勧めします。さらに、[WorldGuard](https://dev.bukkit.org/projects/worldguard)
   リージョンを使用して地形が保護されていること（プレイヤーがトラップを構築できないようにするため）、および戦闘のために地形を悪用できないことを確認してください。
2. **リスポーン時間**
   。リスポーンタイマーは不可欠です。リスポーンタイマーを30分未満に設定することは推奨しません。そうしないと、ボスのリスポーンがイベントとして機能しなくなります。1時間はかなり良い時間ですが、ボスを1日1回、または1週間に1回リスポーンさせることもできます。
3. **脱出時間**
   。リスポーン時間が長いほど、脱出時間も長くする必要があります。また、脱出時間は、人々が快適にボスに挑戦できる程度に長くする必要があることも考慮してください。脱出タイマーは、プレイヤーがボスに特攻して倒すことを許可したくない場合に重要です。これは必須ではなく、週単位のリスポーンボスを作成したい場合は推奨さえされません。
4. **カスタムボス**。ワールドボスは、カスタムスポーンルールを持つカスタムボスに過ぎません。適切なレイドサイズ戦闘互換性のあるパワーを選択してください。
5. **興味深い戦利品**。ワールドボスの大きな魅力は、挑戦は別として、戦利品です。プレイヤーが他の場所では簡単に入手できない何かを入手できるようにしてください。
6. **テーマ**。優れたリージョナルボスには、テーマのある場所とテーマのある戦利品を備えたテーマが必要です。

## ワールドボスのためのカスタムボスの構成オプション：

これらの設定は、通常のカスタムボス構成ファイルに追加されます。[詳細なWikiページはこちらです]($language$/elitemobs/creating_bosses.md)。

<div align="center">

***

### isRegionalBoss

ボスがリージョナルボスかどうかを設定します。リージョナルボスはワールドボスの別名なので、`true`に設定する必要があります。

| キー               |        値        |  デフォルト  |
|------------------|:---------------:|:-------:|
| `isRegionalBoss` | [ブール](#boolean) | `false` |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
isRegionalBoss: true
```

</div>

</details>

***

### spawnLocations

スポーンロケーションは、ゲーム内でコマンド`/em addSpawnLocation <filename.yml>`を使用して設定する必要があります。

設定ファイルから手動でロケーションを追加することもできますが、間違えやすいだけなので、お勧めしません。

| キー               |           値            | デフォルト |
|------------------|:----------------------:|:-----:|
| `spawnLocations` | [文字列リスト](#string_list) |  なし   |

<details> 

<summary><b>例</b></summary>

<div align="left">

構成ファイル内のロケーション（上級ユーザー向け）リージョナルボスの構成ファイルには、複数のスポーンロケーションとリスポーンタイマーを保存することにより、そのリージョナルボスのすべてのインスタンスが1つのファイルに保存されます。

実際には、これは次のエントリを意味します。

```yaml
spawnLocations:
- elitemobs_sewer_maze,-70.17178578884845,168.2,-173.17112099568718,-271.24023,64.19999:1610710903931
- elitemobs_sewer_maze,-135.02262355317436,168.2,-153.28849346821508,-98.53906,60.750263:1609026066482
- elitemobs_sewer_maze,-70.43846307626053,168.2,-174.13499832314378,-271.24023,64.19999:1610710886530
- elitemobs_sewer_maze,-130.39762674971664,168.2,-171.67396911490718,-47.532227,51.900173:1609026066482
- elitemobs_sewer_maze,-117.12782160766056,162.2,-166.40989416757444,-71.37402,-1.4997427:1610710974882
- elitemobs_sewer_maze,-105.13138759611667,168.2,-169.85898023126538,-124.34766,41.24988:1610710945331
- elitemobs_sewer_maze,-106.21847515732084,169.2,-152.3609257554766,-170.86523,21.450315:1610537606222
```

7つの異なるリージョナルボスが、異なる場所で、異なるリスポーンタイマーで含まれています。

詳細を分解し、最初のリージョナルボスを見てみましょう。

```yaml
- elitemobs_sewer_maze,-70.17178578884845,168.2,-173.17112099568718,-271.24023,64.19999:1610710903931
```

これは形式 `world,x,y,z,pitch,yaw:unixTimeStamp` に従うため、ボスは`elitemobs_sewer_maze`というワールドの
x = `-70.17178578884845`、y = `168.2`、z = `-173.17112099568718`、pitch = `-271.24023`、yaw = `64.19999`でスポーンしています。

unixタイムスタンプは、ボスがリスポーンする時間をunix時間で保存します。これは、再起動を通じてリスポーン時間を保存するために使用されます。それが対応する時間を知りたい場合は、オンラインで見つけることができる無数のunix時間からリアルタイムへの変換ツールがあります。

リロードまたは再起動後に特定のボスをリスポーンさせたい場合は、 `:unixTimeStamp` エントリをクリアするだけです。

</div>

</details>

***

### spawnCooldown

ボスがリスポーンするまでにかかる時間を**分**単位で設定します。

**注：大きなボスには、より長いリスポーンをお勧めします！**。

| キー              |       値        | デフォルト |
|-----------------|:--------------:|:-----:|
| `spawnCooldown` | [整数](#integer) |  なし   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
spawnCooldown: 20
```

</div>

</details>

***

### leashRadius

ワールドボスがスポーンポイントに戻る前に移動する`spawnLocation`からの半径を設定します。これにより、プレイヤーがボスをより簡単に戦える場所にドラッグすることができなくなります。

**注：戦闘エリアが20ブロック未満のリーシュを必要とする場合は避けてください。戦闘がさらに悪化するからです。**

| キー            |       値        | デフォルト |
|---------------|:--------------:|:-----:|
| `leashRadius` | [整数](#integer) |  なし   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
leashRadius: 30
```

</div>

</details>

***

### 過渡ブロック

`onSpawnBlockStates`と`onRemoveBlockStates`とも呼ばれます。

これらの値を使用すると、リージョナルボスは戦闘に入るときにブロックをスポーンし、タイムアウトまたは死亡により削除されたときにブロックを削除できます。

**これは、フェーズボスで使用している場合に、ボスがドアやエリアを開閉したり、戦闘中にアリーナを修正したりする方法です！**

| キー                   |    値     | デフォルト |
|----------------------|:--------:|:-----:|
| `onSpawnBlockStates` | 詳細な説明を参照 |  なし   |

| キー                    |    値     | デフォルト |
|-----------------------|:--------:|:-----:|
| `onRemoveBlockStates` | 詳細な説明を参照 |  なし   |

<details> 

<summary><b>詳細な説明</b></summary>

<div align="left">

**すべてのブロックは、スポーンロケーションに対して相対的です。ブロックを設定する前に、最終的なスポーンロケーションがあることを確認してください。
**

</br>
すでに大規模な過渡ブロックエリアを作成していて、ボスを移動する必要があるが、過渡ブロックをやり直したくない場合は、EliteScriptの[Teleport]($language$/elitemobs/elitescript_actions.md&section=teleport)
アクションを使用して、スポーン後にボスを正しい場所に移動できます。それに応じてリーシュを調整する必要があることに注意してください。

ブロックの設定が複雑なため、手動で設定することは推奨されません。次のコマンドを使用して実行する必要があります。

- /em registerblocks <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em registerblocksedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em registerblocksarea <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em registerblocksareaedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em cancelblocks

詳しく見ていきましょう。

**/em registerblocks <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

最も基本的なコマンド。これは、開始するために1回、コミットするために再度実行するトグルです。他のすべてのコマンドと同様に、これらのブロックを`on_spawn`
または`on_remove`の状態に変更するかどうかを選択します。

on_spawnを登録する場合、これはボスがスポーンまたはリスポーンするときにブロックを変更します。on_removeを登録する場合、これはボスが死亡するか、カスタムボスタイムアウトメカニズムを使用してタイムアウトしたときにブロックを変更します。

ブロックを登録するには、この設定がオンになっている間に変更したいブロックを配置または削除するだけです。

**/em registerblocksedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

既に設定されているブロックを変更する場合は、このコマンドを使用できます。`/em registerblocks <regional_boss_file.yml> <on_spawn/on_remove>`
と非常によく似た方法で機能します。

**/em registerblocksarea <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

`/em registerblocks <regional_boss_file.yml> <on_spawn/on_remove>`
と同様に、これによりブロックを登録できますが、ブロックを個別に選択する代わりに、対角線上にある2つの角（worldedit /
worldguardリージョン選択と同じ）を取得して選択できます。

安全上の理由から、リージョナル選択には200ブロックの制限があります（デフォルトでは、config.ymlで変更可能）。すべてのブロックが同じティックで変更されることに注意してください。したがって、多くの地形を変更する場合は、これらの変更を実行するときに大きなラグスパイクが発生し始める可能性があります。

**/em registerblocksareaedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

`/em registerblocksedit`と同じように機能しますが、エリア用です。エリアの200（デフォルト）ブロック登録制限を超えるために使用できます。

**/em cancelblocks**

ブロックを登録中に間違いを犯した場合は、いつでもこのコマンドを実行して登録をキャンセルできます。その編集/登録で登録を開始した変更はすべて元に戻されます。

</div>

</details>

</div>

***

## 大きくて優れたリージョナルボス戦を作るためのプロのヒント

1. **カスタムボスのパワーが互いにどのように補完し合うかを実際に考えてください**
   。ボスが何かのキャストでほとんどの時間を停止させていると、実際に戦いが非常に簡単になる可能性があるため、そのような状態にしたくありません。また、非常に具体的なものを設計する場合を除き、ボスにすべての遠隔攻撃があり、近接攻撃がない、またはその逆にならないようにしてください。プレイテストは重要です。

2. **体力 - たくさん**。人々が実際に集団でボスと戦わせたい場合は、その体力乗数は確実に10になるはずです。

3. **ダメージ - あまりにも多くない**
   。EliteMobsはデフォルトですでに非常に危険であり、パワーは指数関数的に危険になる傾向があります。ダメージを天井までブーストする代わりに、パワーを使用してボスをより強力にする検討をしてください。

4. **悪用はいたるところに**
   。地形が悪用できないように十分に注意してください。人々が遠くから狙撃しようとするのを防ぐために、ボスを閉鎖された部屋に配置します。MinecraftのMobはチャンク離れた場所からの狙撃に対応できないため、矢の無敵パワーは、多くのワールドボスにとっておそらく非常に重要です。そのため、弓攻撃を許可する場合は、弓が悪用されないようにしてください。

5. **プラグインを理解する**
   。EliteMobsを打ち負かすための小さなトリックがたくさんあります。たとえば、一部のパワーはシールドを使用することで対抗できますが、他のパワーはドッジングまたは一時的にボスから逃げることで対抗する必要があります。パワーがどのように機能し、どのように対抗するかを理解すればするほど、より良いボスを作成できます。
