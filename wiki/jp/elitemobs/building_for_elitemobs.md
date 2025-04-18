# EliteMobs のための構築

以下の Wiki ページは、EliteMobs のダンジョンとアリーナを作成するために必要なプロセスを理解するのに役立ちます。

語彙：

- 「ボス」- 大規模な戦闘、多くのプレイヤーで戦うことを想定
- 「ミニボス」- 小規模な戦闘、通常は1人のプレイヤーで倒すことができる
- 「雑魚」- 比較的倒しやすい敵

## EliteMobs のダンジョンカテゴリについて

### ねぐら

最小サイズのカテゴリ

ねぐらは通常、50x50 の単一の建造物で、ワールドとして配布され、通常は1つの大きなボス戦を含みますが、ミニボスや雑魚が含まれる場合もあります。

### ミニダンジョン

中サイズのカテゴリ

ミニダンジョンは、100x100 または 150x150
の構造物に近く、多くの場合、複数の構造物または複数のセクションを持つ構造物を備えています。これらにはボスが1体、通常は3体以上のミニボスがいます。また、たくさんの雑魚もいます。

### アドベンチャー

アドベンチャーは、ブロック単位で測定されない、完全なアドベンチャーマップです。これらは都市サイズか、さらに大きいです。ボスが1体と10体以上のミニボス、そして通常はマップ全体で数百または数千に及ぶ数十のユニークな雑魚がいます。

### アリーナ

アリーナは、EliteMobs のウェーブベースのサバイバルアリーナチャレンジです。これらは通常 100x100
です。ウェーブの数は任意にできますが、通常は50を超えないことをお勧めします。

### インスタンスダンジョン

インスタンスダンジョンは、ミニダンジョンに似ていますが、インスタンス化されています。つまり、プレイヤーまたはプレイヤーグループがインスタンスダンジョンに行きたいときはいつでも、彼ら専用の新しいワールドが生成されます。

インスタンスダンジョンは、お気に入りの MMO
で見られるインスタンスダンジョンによく似た動作をします。通常、3つの難易度レベルがあり、難易度が高いほど報酬が良くなります。プレイヤーは、インスタンスダンジョン内でドロップする戦利品を装備することで、タンクまたは
DPS の役割を担うことができます。敵も、プレイヤーがインスタンスを起動したときに選択した難易度に応じて、異なるパワーセットを使用します。インスタンス内で倒された敵は、そのインスタンスの期間中はリスポーンしません。

インスタンスダンジョン内でドロップした戦利品は、貪欲または必要システムを使用します。つまり、プレイヤーはドロップしたアイテムに投票できます。前述したように、インスタンスダンジョンの戦利品は、防御重視（タンク）または攻撃重視（DPS）のどちらかになるように特別に作られています。

### レイド

インスタンスコンテンツ - 近日公開予定

## テーマ設定

EliteMobs の構造物で最も重要なのはテーマです。テーマは、建築のデザイン、内容、伝承、ボスに影響を与えます。

例として、[ここにある北極](https://magmaguy.itch.io/elitemobs-the-north-pole)
をご覧ください。クリスマスのボスをスノーグローブに入れるというコンセプトで、視覚的に印象的でメカニズム的に興味深い場所になりました。

もう一つの例、[オアシス](https://magmaguy.itch.io/elitemobs-oasis)があります。これは、古代エジプトの場所を不死者やミイラで埋め尽くすことを目的としたもので、EliteMobs
で最も人気のある建築物の1つです。

## 戦闘場所

戦闘場所は、簡単に悪用できる地形を作成することを避ける必要があります。つまり、プレイヤーが安全のために登ることができる柱、AI
をだますために使用できる装飾品、その他の障害物を作ることを避ける必要があります。いくつかの悪用は常に見つかるでしょうし、それはそれほど重要ではありませんが、ボスの場所はこれらの悪用を受けにくいようにする必要があります。

理想的なボスの戦闘エリアは、比較的平坦で、障害物がなく、半径約30ブロックで、プレイヤーが特定のボスのメカニズムをクリアするために隠れる必要がある柱やその他のマップ要素を含むことができます。

通路には、雑魚が配置されることを意図している場合は、少なくとも5ブロックの幅があるようにする必要があります。ミニボスのアリーナは、パワー/テーマに応じて、半径15ブロック程度にすることができます。

これらは最小寸法であることに注意してください。オーバーしても特に問題はありません。

[EliteScript]($language$/elitemobs/elitescript_actions.md&section=place_block)
または[推移ブロック]($language$elitemobs/creating_world_bosses.md&section=onspawnblockstates-and-onremoveblockstates)
を使用して、環境ブロックを封鎖または変更できることに注意してください。これは、プレイヤーが特定の敵を倒した後にのみ先に進めるようにするための優れた方法です。

## EliteMobs のための設計

EliteMobs をよく知れば知るほど、それのために作成するコンテンツがより良くなります。以下は、ダンジョンで興味深いアイデアを思いつくのに役立つ
EliteMobs の機能のリストです。

- [地域ボス]($language$/elitemobs/creating_world_bosses.md) -
  ダンジョン内のすべてのクリーチャーは地域ボスです。つまり、リーシュ（一定の距離を超えるとスポーンポイントに戻されます）とタイマーでのリスポーンがあります。
- [ボスの作成]($language$/elitemobs/creating_bosses.md) - これにより、ボスが偽装、ヘルス乗数、移動できるかどうかとその速度、挑発など、ボスができることとできることがすべてわかります。
- [EliteScript]($language$/elitemobs/creating_powers.md) - EliteScript は、あなたの想像力だけが限界である忘れられない戦闘を作成する上で最も強力なツールです。
- [宝箱]($language$/elitemobs/creating_treasure_chests.md) - これらにはアイテムを入れたり、敵に変身させたりすることができます。
- [ボスのフェーズ]($language$/elitemobs/creating_boss_phases.md) -
  ボスにはフェーズがあります。このシステムは非常に強力で、ボスはフェーズ間で、異なるエンティティタイプ、異なる偽装、異なるカスタムモデルなど、あらゆるものに変化できます。
- [推移ブロック]($language$/elitemobs/creating_world_bosses.md&section=onspawnblockstates-and-onremoveblockstates) -
  これらは、ボスがスポーンまたは死亡したときに配置されるブロックです。また、ボスがフェーズを変化させるときにスポーンおよびクリアすることもできます！これらは、非常に興味深いダイナミックなアリーナを作るために使用できます。
- [ワームホール]($language$/elitemobs/creating_wormholes.md) - プレイヤーを別の場所にテレポートできるクールなポータル。

## 戦闘設計

戦闘設計は、戦闘エリアを設計する際の優先事項である必要があります。理想的には、使用したいパワー、または少なくともパワーのテーマ（炎、雷、氷、増援など、EliteMobs
のパワーに合うもの）のアイデアを持っているでしょう。パワーがどのようなものにしたいのかがわかったら、それに応じて戦闘エリアを設計できます。

ボスに逃げる必要があるパワーがある場合は、それを収容するのに十分な大きさのエリアが必要です。障害物の後ろに隠れる必要があるパワーがある場合は、その種の障害物が必要です。これらのアリーナを構築するには多くの詳細が含まれる可能性があり、考慮に入れるほど、戦闘はより良くなります。

## EliteMobs リソースパックの変更

Minecraft バージョン 1.21.4 および EliteMobs バージョン 9.1.13 の時点で、EliteMobs リソースパックは、カスタムモデルを使用するための
Minecraft の新しい方法に沿って更新されました。

更新された EliteMobs リソースパックの構造は次のとおりです。

**elitemobs_resource_pack**
- **assets**
    - **elitemobs**
        - **items**
            - このディレクトリには、Minecraft が使用できるカスタムモデルを定義する JSON
              ファイルが含まれています。実際のモデルは `models` フォルダーに保存されます。
            - サブディレクトリ:
                - **coins**
                - **equipment**
                - **primis_map**
                - **ui**
        - **models**
            - このフォルダーには、実際のモデルファイルが JSON ファイルとして含まれています。
            - サブディレクトリ:
                - **coins**
                - **equipment**
                - **primis_map**
                - **ui**
        - **textures**
            - このフォルダーには、モデルで使用されるテクスチャを含むすべてのテクスチャが保存されます。
            - サブディレクトリ:
                - **blocks**
                - **gui**
                - **items** (モデル固有のテクスチャが保存される場所です)
                - **primis_map**
                - **ui**
    - **minecraft**
        - **atlases**
        - **font**
        - **models**
            - **items** (Minecraft でどのアイテムがカスタムモデルを使用する必要があるかを指定する JSON
              ファイルが含まれています)
        - **sounds**
            - **custom** (カスタムサウンドファイルを保存します)

---

`*.minecraft\resourcepacks\elitemobs_resource_pack\assets\elitemobs\items\coins\*` フォルダー内の JSON
ファイルがどのように構造化されているか、そしてそれが何をするかを分解してみましょう。

```
{
  "model": {
    "type": "minecraft:model",
    "model": "elitemobs:coins/coin1"
  }
}
```

目的:
この JSON ファイルは、これがモデルであることを Minecraft に伝え、モデルのタイプを指定し、モデルファイルの場所を示します。

主要フィールド:

`type: minecraft:model`
これは、ファイルがモデルタイプを表すことを指定します。
`model: elitemobs:coins/coin1`
これは、リソースパック内のモデルの場所を指します。

パスの詳細:

`elitemobs:` は、アセットディレクトリ内の elitemobs フォルダーを検索するように Minecraft に指示します。
`coins/coin1` は、サブフォルダーとモデルファイル名を指定します。

参照されるモデルファイルへの完全なパスは次のとおりです。
`*.minecraft\resourcepacks\elitemobs_resource_pack\assets\elitemobs\models\coins\coin1.json`

---

カスタムモデルが正しく動作しているかどうかをテストする良い方法は、次のコマンドを使用することです。

`/minecraft:give @p apple[item_model="elitemobs:coins/coin1"]`

仕組み:
このコマンドは、`elitemobs:coins/coin1` モデルを使用するリンゴを提供します。リソースパックが正しく設定されている場合、リンゴのアイテムにカスタムコインモデルが適用されているのがわかります。

独自のカスタムモデルのテスト:
独自のカスタムモデルをリソースパックに追加した場合は、次の手順に従ってテストします。

1. **モデル JSON の作成**:
   JSON ファイルを `items` ディレクトリ内の適切なサブフォルダーに配置します。
   例:
   `assets/elitemobs/items/mymodel/myawesomemodel.json`

2. **モデルファイルの追加**:
   対応するモデルファイル (`myawesomemodel.json`) を同じサブフォルダー内の `models` フォルダーに追加します。
   例:
   `assets/elitemobs/models/mymodel/myawesomemodel.json`

3. **テクスチャの追加**:
   モデルのテクスチャファイルを `textures` フォルダーに追加します。
   例:
   `assets/elitemobs/textures/items/myawesomemodel.png`

---

すべて設定したら、次のコマンドを使用してモデルをテストします。

`/minecraft:give @p apple[item_model="elitemobs:mymodel/myawesomemodel"]`

すべてが正しく行われた場合、手の中にリンゴを受け取り、デフォルトのリンゴモデルの代わりにカスタムモデルが表示されます。

## 質問は？

[いつでも Discord で質問してください！](https://discord.gg/9f5QSka)
