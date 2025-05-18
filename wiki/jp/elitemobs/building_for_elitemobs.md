はい、承知いたしました。入力されたテキストを日本語に翻訳し、Markdownの書式を維持します。

```markdown
# EliteMobsの建築について

以下のWikiページは、EliteMobsのダンジョンやアリーナを作成するために必要なプロセスを理解するのに役立ちます。

語彙：

- "Boss" - 大規模なエンカウンターで、多くのプレイヤーで戦うことを想定しています。
- "Miniboss" - 小規模なエンカウンターで、通常は1人のプレイヤーで倒すことができます。
- "Fodder" - 比較的簡単に倒せるモブです。

## EliteMobsダンジョンカテゴリーの理解

### Lairs

最小サイズカテゴリー

Lairsは通常、50x50の単一構造物で、ワールドとして配布され、通常は1つの大きなボスエンカウンターを含みますが、一部にはミニボスやFodderを含むものもあります。

### Minidungeons

中サイズカテゴリー

Minidungeonsは100x100または150x150に近い構造物で、しばしば複数の構造物や複数のセクションを持つ構造物です。これらは1体のボスと、通常3体以上のミニボスを含みます。また、多くのFodderもいます。

### Adventures

Adventuresはマップ全体を使ったアドベンチャーで、通常ブロック単位では測定されません。これらは都市サイズかそれ以上の大きさです。1体のボスと10体以上のミニボス、そして数十種類のユニークなFodderを含み、マップ全体では通常数百体から数千体になります。

### Arenas

ArenasはEliteMobsにおけるウェーブベースのサバイバルアリーナチャレンジです。これらは通常100x100です。ウェーブ数は任意ですが、通常50を超えることは推奨されません。

### Instanced Dungeons

Instanced DungeonsはMinidungeonsに似ていますが、インスタンス化されている点が異なります。つまり、プレイヤーまたはプレイヤーのグループがInstanced Dungeonに行きたいと思うたびに、彼らのためだけに新しいワールドが生成されます。

Instanced Dungeonsは、お気に入りのMMOで見られるインスタンスダンジョンと非常によく似た振る舞いをします。通常、難易度は3段階あり、難易度が高くなるほど報酬が良くなります。インスタンスダンジョン内でドロップするルートを装備することで、プレイヤーはタンクまたはDPSの役割を担うことができます。モブも、プレイヤーがインスタンスを開始したときに選択された難易度に応じて、異なるパワーセットを使用します。インスタンス内で倒されたモブは、そのインスタンスの期間中はリスポーンしません。

インスタンスダンジョン内でドロップするルートは、GreedまたはNeedシステムを使用します。これは、プレイヤーがドロップしたアイテムに投票できることを意味します。前述したように、インスタンスダンジョンのルートは、防御志向（タンク）または攻撃志向（DPS）のいずれかになるように特別に作られています。

### Raids

インスタンス化されたコンテンツ - 近日公開

## テーマ設定

EliteMobsの構造物において最も重要なのはテーマです。テーマは、建築のデザイン、その内容、伝承、そしてボスに影響を与えます。

例として、[こちらでThe North Pole](https://magmaguy.itch.io/elitemobs-the-north-pole)を見ることができます。これは、クリスマス関連のボスをスノードームに入れるというコンセプトで、視覚的に印象的でメカニズム的にも興味深い場所となりました。

もう一つの例として、[The Oasis](https://magmaguy.itch.io/elitemobs-oasis)があります。これは、アンデッドやミイラに占拠された古代エジプトの場所を作るというもので、EliteMobsで最も人気のある建築の一つです。

## 戦闘場所

戦闘場所は、簡単に悪用できる地形を作成することを避けるべきです。これは、プレイヤーが安全に登れる柱や、AIを欺くために使用できる装飾品などの障害物を作らないことを意味します。いくつかの悪用方法は常に見つかるものですが、それはそれほど重要ではありません。しかし、ボスの場所はこれらの悪用を受けにくいようにすべきです。

理想的なボス戦闘エリアは、比較的平坦で障害物がなく、半径約30ブロックで、特定のボスメカニズムをクリアするためにプレイヤーが隠れる必要のある柱やその他のマップ要素を含むことができます。

回廊は、雑魚敵（adds）がいることを想定している場合、少なくとも幅5ブロックを目指すべきです。ミニボスアリーナは、そのパワーやテーマ設定に応じて、半径15ブロック程度で構いません。

これらは最小寸法であることに注意してください。これを超えても特に問題はありません。

[EliteScript](ja/elitemobs/elitescript_actions.md&section=place_block)または[Transitive Blocks](jaelitemobs/creating_world_bosses.md&section=onspawnblockstates-and-onremoveblockstates)を使用して、環境ブロックを封鎖または変更できることを覚えておいてください。これは、特定のモブを倒した後にのみプレイヤーが先に進めるようにするための素晴らしい方法です。

## EliteMobs向けのデザイン

EliteMobsをよく知るほど、それ向けに作成するコンテンツはより良いものになります。以下は、ダンジョンのために興味深いアイデアを思いつくのに役立つEliteMobsの機能リストです。

- [Regional Bosses](ja/elitemobs/creating_world_bosses.md) - ダンジョン内のすべてのクリーチャーはリージョナルボスです。これは、リーシュ（一定距離を超えるとスポーン地点に引き戻される）を持ち、タイマーでリスポーンすることを意味します。
- [ボスの作成](ja/elitemobs/creating_bosses.md) これにより、ボスができることすべて、例えば変装、体力倍率、移動できるかどうかとその速度、挑発など、すべてがわかります！
- [EliteScript](ja/elitemobs/creating_powers.md) EliteScriptは、あなたの想像力だけが限界となる忘れられないエンカウンターを作成する上で、あなたが利用できる最も強力なツールです。
- [宝箱](ja/elitemobs/creating_treasure_chests.md) これらはアイテムを持つことも、敵に変化することもあります。
- [ボスフェーズ](ja/elitemobs/creating_boss_phases.md) - ボスはフェーズを持つことができます。このシステムは非常に強力で、ボスはフェーズ間で異なるエンティティタイプ、異なる変装、異なるカスタムモデルなど、何にでも変化できます。
- [Transitive Blocks](ja/elitemobs/creating_world_bosses.md&section=onspawnblockstates-and-onremoveblockstates) これらはボスがスポーンまたは死亡したときに配置されるブロックです。ボスがフェーズを変更したときにもスポーンおよびクリアできます！これらを使用して、非常に興味深い動的なアリーナを作成できます。
- [ワームホール](ja/elitemobs/creating_wormholes.md) - プレイヤーを他の場所にテレポートできるクールなポータルです。

## エンカウンターデザイン

戦闘エリアを設計する際には、エンカウンターデザインを優先すべきです。理想的には、使用したいパワーのアイデア、または少なくともパワーのテーマ（火、雷、氷、援軍など、EliteMobsのパワーに合うもの）のアイデアを持っていると良いでしょう。パワーをどうしたいかがわかれば、それに応じて戦闘エリアを設計できます。

ボスがプレイヤーから逃げる必要があるパワーを持っている場合、エリアはそれに対応できる十分な大きさが必要です。障害物の後ろに隠れる必要があるパワーがある場合、構造物にはその種の障害物が必要です。これらのアリーナを構築するには多くの詳細があり、考慮に入れるほどエンカウンターは良くなります。

## EliteMobsリソースパックの変更

Minecraftバージョン1.21.4およびEliteMobsバージョン9.1.13現在、EliteMobsリソースパックは、カスタムモデルを使用するためのMinecraftの新しい方法に合わせるために更新されました。

更新されたEliteMobsリソースパックの構造は以下の通りです。

**elitemobs_resource_pack**
- **assets**
  - **elitemobs**
    - **items**
      - このディレクトリには、Minecraftがどのカスタムモデルを使用できるかを定義するJSONファイルが含まれています。実際のモデルは`models`フォルダに保存されています。
      - サブディレクトリ：
        - **coins**
        - **equipment**
        - **primis_map**
        - **ui**
    - **models**
      - このフォルダには、実際のモデルファイルがJSONファイルとして含まれています。
      - サブディレクトリ：
        - **coins**
        - **equipment**
        - **primis_map**
        - **ui**
    - **textures**
      - このフォルダには、モデルが使用するものを含むすべてのテクスチャが保存されています。
      - サブディレクトリ：
        - **blocks**
        - **gui**
        - **items** (ここにモデル固有のテクスチャが保存されます)
        - **primis_map**
        - **ui**
  - **minecraft**
    - **atlases**
    - **font**
    - **models**
      - **items** (Minecraft内のどのアイテムがカスタムモデルを使用すべきかを指定するJSONファイルが含まれています)
    - **sounds**
      - **custom** (カスタムサウンドファイルが保存されます)

---

*.minecraft\resourcepacks\elitemobs_resource_pack\assets\elitemobs\items\coins\* フォルダ内のJSONファイルがどのように構造化され、何をするのかを詳しく見ていきましょう。

```
{
  "model": {
    "type": "minecraft:model",
    "model": "elitemobs:coins/coin1"
  }
}
```

目的：
このJSONファイルは、これがモデルであることをMinecraftに伝え、モデルのタイプを指定し、モデルファイルの場所を示します。

主要フィールド：

`type: minecraft:model`
これは、ファイルがモデルタイプを表すことを指定します。
`model: elitemobs:coins/coin1`
これは、リソースパック内のモデルの場所を指します。

パスの詳細：

`elitemobs:` は、assetsディレクトリ内のelitemobsフォルダを見るようにMinecraftに指示します。
`coins/coin1` は、サブフォルダとモデルファイル名を指定します。

参照されるモデルファイルのフルパスは以下の通りです。
`*.minecraft\resourcepacks\elitemobs_resource_pack\assets\elitemobs\models\coins\coin1.json`

---

カスタムモデルが正しく機能しているかテストする良い方法は、以下のコマンドを使用することです。

`/minecraft:give @p apple[item_model="elitemobs:coins/coin1"]`

仕組み：
このコマンドは、`elitemobs:coins/coin1`モデルを使用するリンゴをあなたに与えます。リソースパックが正しく設定されていれば、カスタムコインモデルがリンゴアイテムに適用されているのが見えるはずです。

独自のカスタムモデルのテスト：
独自にカスタムモデルをリソースパックに追加した場合、以下の手順でテストしてください。

1. **モデルJSONを作成する**:
   JSONファイルを`items`ディレクトリ内の適切なサブフォルダに配置します。
   例：
   `assets/elitemobs/items/mymodel/myawesomemodel.json`

2. **モデルファイルを追加する**:
   対応するモデルファイル（`myawesomemodel.json`）を、同じサブフォルダ内の`models`フォルダに追加します。
   例：
   `assets/elitemobs/models/mymodel/myawesomemodel.json`

3. **テクスチャを追加する**:
   モデル用のテクスチャファイルを`textures`フォルダに追加します。
   例：
   `assets/elitemobs/textures/items/myawesomemodel.png`

---

すべてが設定できたら、以下のコマンドを使用してモデルをテストします。

`/minecraft:give @p apple[item_model="elitemobs:mymodel/myawesomemodel"]`

すべてが正しく行われていれば、手にリンゴを受け取り、デフォルトのリンゴモデルの代わりにカスタムモデルが表示されます。

## 質問はありますか？

[いつでもDiscordで質問してください！](https://discord.gg/9f5QSka)
```