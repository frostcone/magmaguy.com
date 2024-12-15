# EliteMobs 設定デフォルト

**EliteMobs には、推奨されるデフォルト設定が初期状態でインストールされています。設定をランダムに変更すると、全体的な体験が悪化する可能性が高くなります。**

_**EliteMobs は、推奨されるデフォルト設定で全ユーザーに提供されます。設定をランダムに変更してサポートを依頼した場合、設定ファイルをリセットするように指示される可能性が非常に高いです。プラグインの変更は、プレイテストに基づいて行う必要があり、単なる推測で行うべきではありません。**_

## はじめに

EliteMobs は現在、カスタマイズに対する高い需要に応えるため、膨大な設定オプションを提供しています。この Wiki ページを簡潔にするため、デフォルト設定のみを表示します。

特定の設定について詳しく知りたい場合は、設定ファイルを参照し、コメントを確認してください。

---

## config.yml

`config.yml` には、作成時に他の場所にうまく収まらなかった、ほとんどランダムな設定が含まれています。これは、バージョン間で最も変更される可能性の高い設定ファイルです。

<div align="left">

<details>

<summary><b>テーブルを展開</b></summary>

```yml
# EliteMobs が使用する言語ファイルを設定します
# これを手動で変更しないでください！ '/em language <言語ファイル>' コマンドでインストールすることを想定しています。
language: english
# EliteMobs によってスポーンされたエリートとボスが常にネームタグを表示するかどうかを設定します。
# 推奨しません！
alwaysShowEliteMobNameTags: false
# 合体する前に近くにいる必要があるパッシブモブの数を設定します。
# これを 0 に設定しないでください！
superMobStackAmount: 50
# エリートが爆発でパッシブモブにダメージを与えないようにします。
preventEliteCreeperDamageToPassiveMobs: true
# EliteMobs が権限がないことを警告するためにタイトルを使用するかどうかを設定します
useTitlesForMissingPermissionMessages: true
# EliteMobs が名前付きモブをエリートに変換するのを防ぐかどうかを設定します。
# 特に他のプラグインとの互換性にとって重要です。
preventEliteMobConversionOfNamedMobs: true
# EliteMobs がカスタムスポーン理由を持つモブを変換するかどうかを設定します。
# 特定のボスプラグインを実行すると、設定の値に関係なく、自動的に true に設定されます。
enableHighCompatibilityMode: false
# ナイトメアゲームモードのエリートスポーンボーナスを設定します
nightmareWorldSpawnBonus: 0.5
# 一元化された /em コマンドがプラグインのメインステータスページを開くかどうかを設定します。
# 強く推奨します！
emLeadsToStatusMenu: true
# /em wallet などの特定のコマンドを実行すると、その情報が一元化されている /em メニューに移動するかどうかを設定します。
otherCommandsLeadToEMStatusMenu: true
# セットアップが完了したかどうかを設定します。
# この値を手動で設定しないでください。ゲーム内コマンドを通じて変更することを想定しています。
setupDoneV3: true
# エリートが、ゾンビの増援機能など、バニラの増援スポーンを阻止するかどうかを設定します。
preventVanillaReinforcementsForEliteEntities: true
# EliteMobs のサーバーのデフォルトスポーン位置を設定します。/em spawntp はこの場所に移動します。
defaultSpawnLocation: world,16.0,76.0,80.0,0.0,0.0
# EliteMobs がエリートによって吹き飛ばされたブロックを再生するかどうかを設定します。
doExplosionRegen: true
# 爆発再生がチェストなどのコンテナの内容も再生するかどうかを設定します。
# これを false にすると、エリートの爆発でコンテナが爆破されなくなります。
doRegenerateContainers: true
defaultTransitiveBlockLimiter: 500
# /em メニューが、Bedrock と互換性のあるインベントリベースのメニューのみを使用するかどうかを設定します。
# 念のため、プレイヤーは /em alt コマンドを実行して /em メニュースタイルを切り替えることができます
onlyUseBedrockMenus: false
# ブックメニューページの 1 行あたりの文字数制限を設定します。
# クエストなどでブックメニューのテキストが途切れる場合は、この値を下げてください
characterLimitForBookMenuPagesV2: 170
# 空のメニュースペースがガラス板で埋められるかどうかを設定します。
# EliteMobs リソースパックを使用している場合は推奨しません。
useGlassToFillMenuEmptySpace: false
# Unicode を使用して EliteMobs リソースパックをフォーマットするかどうかを設定します。
# これを手動で設定しないでください。リソースパックのインストール時に自動的に設定されます。
# EliteMobs リソースパックをマージする必要があり、その場合、間隔が機能しない可能性がある場合にのみ手動で設定してください。
menuUnicodeFormatting: false
# 保留中のコマンドがない状態でプレイヤーが '/em confirm' を実行した場合に送信されるメッセージを設定します。
noPendingCommands: '&c現在、保留中のコマンドはありません！'
# 追跡メッセージを送信するボスの追跡メッセージを設定します。
trackMessage: $name を追跡
# ギルドランク以上のレベル要件を持つ宝箱を開くプレイヤーに送信されるメッセージを設定します。
chestLowRankMessage: '&7[EM] &cこのチェストを開くには、ギルドランクが少なくとも $rank &cである必要があります！'
# すでに開けた宝箱を再び開こうとするプレイヤーに送信されるメッセージを設定します。
chestCooldownMessage: '&7[EM] &c最近このチェストを開けました！$time 待ってください！'
# /em コマンドに問題があるプレイヤーに /em alt コマンドを推奨するメッセージが表示されます
dismissEMMessage: '&8[EliteMobs] &2/elitemobs &fメニューが機能しない場合、&2/elitemobs alt &fを試して、メニューの別のバージョンを確認してください！&cこのメッセージを再び表示したくないですか？&4/em dismiss'
# プレイヤーが /em alt コマンドを実行したときに表示されるメッセージを設定します。
switchEMStyleMessage: '&8[EliteMobs] &2/elitemobs &fメニューのスタイルが変更されました！チェックしてください！'
# プレイヤーが宝箱を開けたが何も得られなかった場合に表示されるメッセージを設定します
treasureChestNoDropMessage: '&8[EliteMobs] &c何も得られませんでした！次回は幸運を祈ります！'
# 無効になったボスを追跡しようとしたプレイヤーに表示されるメッセージを設定します
bossAlreadyGoneMessage: '&c[EliteMobs] すみません、このボスは既にいなくなっています！'
```

</details>

---

## AdventurersGuild.yml

`AdventurersGuild.yml` には、冒険者ギルドハブ（ワールド）に関連する設定と、冒険者ギルドランクアップシステムに関連する設定が含まれています。

<details>

<summary><b>テーブルを展開</b></summary>

```yml
# EliteMobs が、プレステージ報酬としてギルドランクを解除する際に最大体力を追加するかどうかを設定します
Add max health when unlocking higher guild ranks: true
# EliteMobs が、プレステージ報酬としてギルドランクを解除する際にクリティカルストライクチャンスを追加するかどうかを設定します
Add critical chance when unlocking higher guild ranks: true
# EliteMobs が、プレステージ報酬としてギルドランクを解除する際に回避チャンスを追加するかどうかを設定します
Add dodge chance when unlocking higher guild ranks: true
# ユーザーコマンドが冒険者ギルドハブにリダイレクトされるかどうかを設定します。これは、ゲームプレイへの没入感とチュートリアル目的のために強く推奨されます。
userCommandsTeleportToAdventurersGuild: true
# 冒険者ギルドのゲーム内表示名を設定します
adventurersGuildMenuName: '&6&l冒険者のハブ'
Prestige 0 rank 0: '&8コモン - エリートを無効にします！'
Prestige 0 rank 0 short placeholder: '&6&l✧&e0'
...
# プレイヤーの戦利品がギルドレベルによって制限されるかどうかを設定します。
# これは EliteMobs の非常に重要な部分であり、強く推奨されます。
limitLootBasedOnGuildTier: true
# 戦利品がギルドレベルの低さのためにナーフされた場合にプレイヤーに送信されるメッセージを設定します。
lootLimiterMessage: '&7[EM] &cより良いアイテムを略奪するには、/ag で次のギルドランクを解除する必要があります！'
# ギルドランクアップ時に実行されるコマンドを設定します。プレースホルダーは次のとおりです。
# $prestigerank - プレステージランクを出力します
# $activerank - 現在アクティブなランクを出力します
# $player - プレイヤー名を出力します
onRankUpCommand: []
# プレステージランクアップ時に実行されるコマンドを設定します。
# $prestigerank - プレステージランクを出力します
# $activerank - 現在アクティブなランクを出力します
# $player - プレイヤー名を出力します
onPrestigeUpCommand: []
# 最初の回避ボーナスのプレステージレベルを設定します。
dodgePrestige3Bonus: 3.0
# 2 番目の回避ボーナスのプレステージレベルを設定します。
dodgePrestige6Bonus: 6.0
# 3 番目の回避ボーナスのプレステージレベルを設定します。
dodgePrestige9Bonus: 10.0
# 最初のクリティカルヒットボーナスのプレステージレベルを設定します。
critPrestige2Bonus: 3.0
# 2 番目のクリティカルヒットボーナスのプレステージレベルを設定します。
critPrestige5Bonus: 6.0
# 3 番目のクリティカルヒットボーナスのプレステージレベルを設定します。
critPrestige8Bonus: 10.0
# 最初の最大体力ボーナスのプレステージレベルを設定します。
healthPrestige1Bonus: 2.0
# 2 番目の最大体力ボーナスのプレステージレベルを設定します。
healthPrestige4Bonus: 2.5
# 3 番目の最大体力ボーナスのプレステージレベルを設定します。
healthPrestige7Bonus: 3.0
# 3 番目の最大体力ボーナスのプレステージレベルを設定します。
healthPrestige10Bonus: 4.0
# ランクアップのために必要なボスの推定基本量を設定します。
baseKillsForRankUp: 100
# ランクアップするために必要な、1 レベルあたりのボスの推定追加量を設定します。
# 式は、この量 x プレイヤーが現在いるレベルです。
additionalKillsForRankUpPerTier: 50
# 誰かがプレステージランクを解除したときにプレイヤーに送信されるタイトルを設定します。
# $player は、プレイヤーの表示名に置き換えられるプレースホルダーです。
prestigeUnlockMessageTitle: $player
# 誰かがプレステージランクを解除したときにプレイヤーに送信されるサブタイトルを設定します。
# $tier は、プレイヤーのプレステージレベルに置き換えられるプレースホルダーです。
prestigeUnlockMessageSubtitle: '&2が $tier&2を解除しました！'
# プレイヤーが平和 (コモン) ランクを使用している場合に、スポーンチャンスに適用される乗数を設定します。
peacefulModeEliteChanceDecrease: 0.2
# ギルドランクボーナスが適用されない世界のリストを設定します
worldsWithoutAGBonuses: []
# EliteMobs の平和モードに切り替えるユーザーの機能を無効にします。平和モードは、特にそのプレイヤーの周りのモブのレベルとスポーン率を下げます
disableCommonerRank: false
```

</details>

---

## AntiExploit.yml

`AntiExploit.yml` を使用すると、管理者は AntiExploit システムのさまざまな側面をカスタマイズできます。AntiExploit システムは、プレイヤーがモブグラインダーなどを使用してコインや戦利品を簡単にファームするのを防ぎ、プラグインの頂点まで AFK でクリックする代わりに、実際の戦闘やミニダンジョンを行うことを推奨するために存在します。

人々がプラグイン全体を AFK でグラインドするのを避け、実際にミニダンジョンとインタラクトさせたい場合は、これをオンにしておくことが非常に重要です。

<details>

<summary><b>テーブルを展開</b></summary>

```yml
# アンチエクスプロイトがトリガーされたときに表示されるメッセージを設定します。
AntiExploit message: '&c[EM アンチエクスプロイト] &7近くのエリートは特別な戦利品をドロップしません。'
# ダークルームアンチエクスプロイト 1 が有効かどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターは、どのアンチエクスプロイトタイプがトリガーされたかを確認できますが、それが具体的にどのように機能するかについての詳細は提供されていません。
Enable darkroom antiexploit 1: true
# ダークルームアンチエクスプロイト 2 が有効かどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターは、どのアンチエクスプロイトタイプがトリガーされたかを確認できますが、それが具体的にどのように機能するかについての詳細は提供されていません。
Enable darkroom antiexploit 2: true
# ダークルームアンチエクスプロイト 3 が有効かどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターは、どのアンチエクスプロイトタイプがトリガーされたかを確認できますが、それが具体的にどのように機能するかについての詳細は提供されていません。
Enable darkroom antiexploit 3: true
# 大規模ダークルームアンチエクスプロイト 1 が有効かどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターは、どのアンチエクスプロイトタイプがトリガーされたかを確認できますが、それが具体的にどのように機能するかについての詳細は提供されていません。
Enable large darkroom antiexploit 1: true
# エンダーマン高さアンチエクスプロイトが有効かどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターは、どのアンチエクスプロイトタイプがトリガーされたかを確認できますが、それが具体的にどのように機能するかについての詳細は提供されていません。
Enable enderman height antiexploit: true
# マウントアンチエクスプロイトが有効かどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターは、どのアンチエクスプロイトタイプがトリガーされたかを確認できますが、それが具体的にどのように機能するかについての詳細は提供されていません。
Enable mount antiexploit: true
# エリートモブがアイテムを拾うことができるかどうかを設定します
preventItemPickupByMobs: true
# 周囲ダメージアンチエクスプロイトが有効かどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターは、どのアンチエクスプロイトタイプがトリガーされたかを確認できますが、それが具体的にどのように機能するかについての詳細は提供されていません。
Enable ambient damage antiexploit: true
# ハニーブロックアンチエクスプロイトが有効かどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターは、どのアンチエクスプロイトタイプがトリガーされたかを確認できますが、それが具体的にどのように機能するかについての詳細は提供されていません。
Enable honey block antiexploit: true
# アンチエクスプロイトアクティベーションのしきい値を設定します。値が高いほど寛容になります。これを変更することはお勧めしません。
antiExploitThreshold: 10
# パスなしアンチエクスプロイトが有効かどうかを設定します
nPathExploit: true
```

</details>

---

## CombatTag.yml

`CombatTag.yml` には、戦闘タグシステムの設定が含まれています。このシステムはまだ完成には程遠いですが、戦闘に入った後のプレイヤーの行動を管理しようとしています。

<details>

<summary><b>テーブルを展開</b></summary>

```yml
# 戦闘タグが有効かどうかを設定します。
# 有効にすると、戦闘に参加した飛行中のプレイヤーは飛行を停止するように設定されます。
Enable combat tag: true
# 戦闘タグがアクティブ化されたときに送信されるメッセージを設定します。
Combat tag message: '&c[EliteMobs] 戦闘タグがアクティブ化されました！'
# /ag コマンドがテレポート前にタイマーを持つかどうかを設定します
Enable adventurers guild teleport timer: true
# テレポートタイマーを待機中に設定されるアクションメッセージを設定します。
Teleport time left: '&7[EM] &a$time &7秒後にテレポートします...'
# テレポートを待機中にプレイヤーが移動した場合に送信されるメッセージを設定します。
Teleport cancelled: '&7[EM] &cテレポートが中断されました！'
```

</details>

---

## DiscordSRV.yml

`DiscordSRV.yml` には、DiscordSRV の設定が含まれています。この機能の設定方法については、[ここをクリックしてください！]($language$/elitemobs/discordsrv.md)

<details>

<summary><b>テーブルを展開</b></summary>

```yml
# ドキュメントはこちらにあります: https://magmaguy.com/wiki.html#lang=en&article=elitemobs+discordsrv.md
announcementRoomName: ELITEMOBS_の_アナウンスを_ブロードキャストする_DISCORD_ルームの_名前を_DISCORDSRV_設定ファイルに入力する必要があります_詳細は_ELITEMOBS_WIKI_を確認してください

```

</details>

---

## EconomySettings.yml

`EconomySettings.yml` には、EliteMobs エコノミーの設定が含まれています。

<details>

<summary><b>テーブルを展開</b></summary>

```yml
# EliteMobs エコノミーが有効かどうかを設定します。これは、エリートコイン、ギアの売買機能、ギルドランクをアップグレードする機能があることを意味します
# 無効にすると、プレイヤーはプラグインを進めることができません！
enableEconomy: true
# アイテムの再販価格を、元の価格の % で設定します。5 は 5% です
itemResaleValue: 5.0
# 使用する通貨のゲーム内名前を設定します。
currencyName: エリートコイン
# Vault を使用するようにプラグインを設定します。これはお勧めしません！理由はこちらをご覧ください: https://github.com/MagmaGuy/EliteMobs/wiki/%5BThird-party-support%5D-Vault
useVault - not recommended: false
# エリートがレベルに基づいてコインをドロップするかどうかを設定します。
enableCurrencyShower: true
# エリートがドロップする通貨の乗数を設定します。
currencyShowerTierMultiplier: 1.0
# プレイヤーがエリート通貨を拾ったときに送信されるメッセージを設定します。
chatCurrencyShowerMessage: '&7[EM] &a$amount $currency_name を拾いました！'
# プレイヤーがエリート通貨を拾ったときに送信されるアクションバーメッセージを設定します。
actionbarCurrencyShowerMessage: '&7[EM] &a$amount $currency_name を拾いました！'
# 通貨を略奪した後にプレイヤーが受け取るメッセージを送信します。チュートリアル目的で役立ちます。
adventurersGuildNotificationMessages: '&7[EM] 余分なお金？&a/ag を試してみてください！'
# プレイヤー間のトランザクションの税率を設定します。
# 高レベルのプレイヤーが最大 6 倍の通貨を獲得し、他のプレイヤーを使用してプレステージ通貨のリセットをバイパスしようとする可能性があるため、バランス上の理由から強く推奨されます。
playerToPlayerPaymentTaxes: 0.2
# エリート通貨を他のプレイヤーに送信するときに送信されるメッセージ。
Economy pay message v2: '&2$receiver&2に &2$amount_sent $currency_name &2を支払いました。&2税引き後 $amount_received を受け取りました！'
# プレイヤーが通貨を送信した後に送信されるメッセージ。
Economy currency left message: 現在 $amount_left $currency_name を持っています
# 通貨を受け取るときに受信されるメッセージ。
Economy money from payment message: &2$amount_received $currency_name &ffrom $sender を受け取りました
# プレイヤーが持っていないコインの量を送信しようとしたときに送信されるメッセージ。
Economy payment insufficient currency: '&cそれだけの $currency_name がありません！'
# /em バランスメッセージ
Wallet command message: 現在 $balance $currency_name を持っています
# プレイヤーが別のプレイヤーに通貨を送信しようとしたときに送信される確認メッセージ。
Tax confirmation message: '&c支払いを送信すると $percentage% の税金がかかります。&a続行するには &9$command &aを実行してください！'
# プレイヤーがショップから購入したときに送信されるメッセージ。
Shop buy message: '&a$item_name &aを $item_value $currency_name で購入しました！'
# プレイヤーがショップとインタラクトしたときに送信されるメッセージ。
Shop current balance message: '&a$currency_amount $currency_name を持っています。'
# プレイヤーがアイテムを購入するのに十分な通貨を持っていない場合に送信されるメッセージ
Shop insufficient funds message: '&c$currency_name が足りません！'
# プレイヤーが購入できないアイテムを購入しようとした場合に送信されるメッセージの 2 番目の部分。
Shop item cost message: このアイテムの費用は &c$item_value $currency_name です。
# アイテムをショップに販売したときに送信されるメッセージ。
Shop sell message: '&a$item_name &aを $currency_amount $currency_name で販売しました！'
# そのプレイヤーに所属していないアイテムを販売しようとした場合に送信されるメッセージ。
Shop sale player items warning: '&c現在ソウルバインドされていないアイテムは販売できません！これには、他のプレステージティアからのアイテムも含まれます！'
# EliteMobs 以外のアイテムを販売しようとした場合に送信されるメッセージ
Shop sale instructions: '&cここでは EliteMobs の戦利品のみを販売できます！(その伝承に値が表示されているエリートからドロップした鎧/武器)'
# エリートアイテムのバッチを販売したときに送信されるメッセージ。
shopBatchSellItem: '&aアイテムを &a$currency_amount $currency_name で販売しました！'
lootShowerMaterial:
  # 1 つのドロップしたエリートコインの素材タイプを設定します。
  '1': GOLD_NUGGET
  '5': GOLD_INGOT
  '10': GOLD_BLOCK
  '20': EMERALD
  '50': EMERALD_BLOCK
  '100': DIAMOND
  '500': DIAMOND_BLOCK
  '1000': NETHER_STAR
lootShowerData:
  # 1 つのドロップしたエリートコインのカスタムモデル ID を設定します。リソースパックで使用されます。
  '1': 1
  '5': 1
  '10': 1
  '20': 1
  '50': 1
  '100': 1
  '500': 1
  '1000': 1
materialWorth:
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  DIAMOND_AXE: 17.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  DIAMOND_BOOTS: 17.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  DIAMOND_CHESTPLATE: 17.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  DIAMOND_LEGGINGS: 17.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  DIAMOND_HELMET: 17.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  DIAMOND_PICKAXE: 17.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  DIAMOND_SHOVEL: 17.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  DIAMOND_SWORD: 17.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  DIAMOND_HOE: 17.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  IRON_AXE: 16.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  IRON_BOOTS: 16.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  IRON_LEGGINGS: 16.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  IRON_CHESTPLATE: 16.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  IRON_HELMET: 16.0
```

</details>
```yaml
# elitemobs 通貨システムでのこの素材の価値を設定します。
  IRON_PICKAXE: 16.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  IRON_SHOVEL: 16.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  IRON_HOE: 16.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  IRON_SWORD: 16.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  SHIELD: 16.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  BOW: 16.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  CHAINMAIL_BOOTS: 15.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  CHAINMAIL_LEGGINGS: 15.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  CHAINMAIL_CHESTPLATE: 15.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  CHAINMAIL_HELMET: 15.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  STONE_SWORD: 15.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  STONE_AXE: 15.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  STONE_PICKAXE: 15.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  STONE_SHOVEL: 15.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  STONE_HOE: 15.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  GOLDEN_AXE: 13.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  GOLDEN_BOOTS: 13.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  GOLDEN_LEGGINGS: 13.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  GOLDEN_CHESTPLATE: 13.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  GOLDEN_HELMET: 13.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  GOLDEN_SWORD: 13.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  GOLDEN_SHOVEL: 13.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  GOLDEN_PICKAXE: 13.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  GOLDEN_HOE: 13.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  GOLDEN_APPLE: 17.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  ENCHANTED_GOLDEN_APPLE: 17.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  LEATHER_BOOTS: 13.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  LEATHER_LEGGINGS: 13.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  LEATHER_CHESTPLATE: 13.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  LEATHER_HELMET: 13.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  WOODEN_SWORD: 13.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  WOODEN_AXE: 13.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  WOODEN_HOE: 13.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  WOODEN_PICKAXE: 13.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  TRIDENT: 17.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  ELYTRA: 17.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  TURTLE_HELMET: 13.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  NETHERITE_AXE: 18.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  NETHERITE_PICKAXE: 18.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  NETHERITE_SHOVEL: 18.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  NETHERITE_HOE: 18.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  NETHERITE_SWORD: 18.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  NETHERITE_HELMET: 18.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  NETHERITE_CHESTPLATE: 18.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  NETHERITE_LEGGINGS: 18.0
  # elitemobs 通貨システムでのこの素材の価値を設定します。
  NETHERITE_BOOTS: 18.0
  # 特に定義されていないアイテムのデフォルトの素材価値を設定します。
  defaultMaterialWorth: 1.0
```

</details>

---

## events.yml

`events.yml` には、イベントの設定オプションが含まれています。

_**注: これらはごく基本的なグローバル設定です。**_

`events` フォルダーで特定のイベントをさらに変更できます。

<details>

<summary><b>テーブルを展開</b></summary>

```yaml
# イベントがイベントが発生するワールドでのみブロードキャストされるかどうかを設定します。
Only broadcast event message in event worlds: false
# 時限イベント間の最小クールダウン時間 (分単位) を設定します
actionEventMinimumCooldownMinutes: 240
# アクションイベントが発生するかどうかを設定します。
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#action-events
actionEventsEnabled: true
# 時限イベントが発生するかどうかを設定します。
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events
timedEventsEnabled: true
```

</details>

---

## ItemSettings.yml

`ItemSettings.yml` には、エリートアイテムのグローバル設定が含まれています。

<details>

<summary><b>テーブルを展開</b></summary>

```yaml
# アイテムの伝承でバニラのエンチャントにプレフィックスされる文字を設定します。
noItemDurabilityMessage: '&8[EliteMobs] $item &4が壊れています！修理するまで機能しません！'
# EliteMobs の戦利品がドロップするかどうかを設定します。
# エリートコイン、カスタムアイテム、手続き型生成アイテムなど、すべてが含まれます。
# 推奨されません。mmorpg の進行を不可能にします。
doEliteMobsLoot: true
# 手続き的に生成された戦利品が、アイテムの品質に基づいて異なる色になるかどうかを設定します。
doMMORPGColorsForItems: true
# バナーやブロックなどのカスタムアイテムの配置が禁止されるかどうかを設定します。
# これは推奨されます - カスタムアイテムは配置すると壊れ、回復できません！
preventCustomItemPlacement: true
# すべての EliteMobs アイテムの伝承の形式を設定します！
# 次のプレースホルダーが有効です。
# $itemLevel - アイテムレベルを表示します
# $prestigeLevel - プレステージレベルを表示します
# $weaponOrArmorStats - アイテムに応じて、エリート DPS またはエリート鎧のステータスを表示します
# $soulbindInfo - アイテムが誰にソウルバインドされているか (ソウルバインドされている場合) を表示します
# $itemSource - アイテムの出所 (モブやショップなど) を表示します
# $ifLore - アイテムにカスタムの伝承がある場合にのみ行を表示します。カスタムアイテムにのみ適用されます
# $customLore - カスタムの伝承全体を表示します。カスタムアイテムにのみ適用されます
# $ifEnchantments - アイテムにエンチャントがある場合にのみ行を表示します
# $enchantments - アイテムのエンチャントを表示します
# $eliteEnchantments - アイテムのエリートエンチャントを表示します
# $ifCustomEnchantments - アイテムのカスタムエンチャントを表示します
# $customEnchantments - アイテムのカスタムエンチャントを表示します
# $ifPotionEffects - アイテムにポーション効果がある場合にのみ行を表示します
# $potionEffects - アイテムのポーション効果を表示します
# $loreResaleValue - アイテムの価値を表示します。表示されている場所に応じて、購入価格または販売価格が表示される場合があります
# 重要: 一部のプレースホルダーは、以下にある構成設定でさらにカスタマイズできます
itemLoreStructureV2:
- §7§m§l---------§7<§l装備情報§7>§m§l---------
- '§7アイテムレベル: §f$itemLevel §7プレステージ §6$prestigeLevel'
- $weaponOrArmorStats
- $soulbindInfo
- $itemSource
- $ifLore§7§m§l-----------§7< §f§l伝承§7 >§m§l-----------
- $customLore
- $ifEnchantments§7§m§l--------§7<§9§lエンチャント§7>§m§l--------
- $enchantments
- $eliteEnchantments
- $ifCustomEnchantments§7§m§l------§7< §3§lカスタムエンチャント§7 >§m§l------
- $customEnchantments
- $ifPotionEffects§7§m§l----------§7< §5§l効果§7 >§m§l----------
- $potionEffect
- §7§l§m-----------------------------
- $loreResaleValue
# ストア購入のショップソース伝承を設定します
shopSourceItemLores: '&7ストアから購入'
# ボスから略奪したアイテムのショップソース伝承を設定します
mobSourceItemLores: '&7$mob から略奪'
# アイテムの価値の伝承を設定します
loreWorths: '&7価値 $worth $currencyName'
# アイテムの再販価値の伝承を設定します
loreResaleValues: '&7$resale $currencyName で販売'
# エリートモブからエリートアイテムがドロップする基本チャンスを設定します
flatDropRateV3: 0.2
# 地域ボスからエリートアイテムがドロップする基本チャンスを設定します
regionalBossNonUniqueDropRate: 0.05
# 地域ボスがバニラの戦利品をドロップできるかどうかを設定します
regionalBossesDropVanillaLoot: false
# ボスのレベルに基づいてエリートアイテムがドロップするチャンスがどれだけ増加するかを設定します。
# ボスのレベルにこの値を掛け、基本チャンスに追加します。
# これを 0.0 以上にすることはお勧めしません！
levelIncreaseDropRateV2: 0.0
# 手続き型で生成されたアイテムがドロップする重み付けされたチャンスを設定します。
# このシステムは、重み付けされた確率を使用します！それが何かを知らない場合は、Google で調べてください。
proceduralItemDropWeight: 90.0
# 重み付けされたアイテムがドロップする相対的なチャンスを設定します。
# 重み付けされたアイテムは、チャームのように動的な重みを持たないカスタムアイテムです。
weighedItemDropWeight: 1.0
# 固定アイテムがドロップする相対的なチャンスを設定します。これらは、スケーリングしないカスタムアイテムです。
fixedItemDropWeight: 10.0
# 制限されたアイテムがドロップする相対的なチャンスを設定します。これらは、特定のレベルまでスケールするカスタムアイテムです
limitedItemDropWeight: 3.0
# スケーラブルなアイテムがドロップする相対的なチャンスを設定します。これらは、任意のレベルまでスケールできるカスタムアイテムであり、プラグインで最も一般的です。
scalableItemDropWeight: 6.0
# モブのバニラ戦利品の乗数を、モブのレベルに基づいて設定します。
defaultLootMultiplier: 0.0
# デフォルトの戦利品乗数の最大レベルを設定します。
levelCapForDefaultLootMultiplier: 200
# ボスのレベルに基づいて、ボスがドロップするバニラの Minecraft 経験値の乗数を設定します。
defaultExperienceMultiplier: 1.0
# EliteMobs がドロップする戦利品の最大レベルを設定します。200 にしておくことを強くお勧めします。
maximumItemLevel: 200
# エリートエンチャントを使用するかどうかを設定します。
# エリートエンチャントは、エリートアイテムがバニラの制限を超えるエンチャントレベルを取得した場合に、バニラのエンチャントを置き換えます。
# 例: エリートソードがシャープネス 10 を持つことになっている場合、Minecraft の制限はレベル 5 であるため、シャープネス 5 とエリートシャープネス 5 を持つことになります。
# エリートシャープネスは、EliteMobs によってスポーンされたモブにのみ影響します。これは、PVP とバニラ戦闘がバランスを崩さないようにするためです。
useEliteEnchantments: true
# アイテムの伝承でエリートエンチャントに使用される表示名を設定します。
eliteEnchantmentLoreStrings: エリート
# EliteMobs が、ダメージ計算のためにクワを有効な武器として認識するかどうかを設定します。
useHoesAsWeapons: false
# EliteMobs が、高品質のドロップアイテムの上に特別なパーティクルをスポーンするかどうかを設定します。
enableRareItemParticleEffects: true
# ポーション効果がヒット時にヒットしたエンティティに適用されることを示すために、アイテムの伝承で使用される記号を設定します。
potionEffectOnHitTargetLore: '&4⚔☠'
# ポーション効果がヒット時にヒットしたプレイヤーに適用されることを示すために、アイテムの伝承で使用される記号を設定します。
potionEffectOnHitSelfLore: '&9⚔🛡'
# ポーション効果がプレイヤーがそれを装備している限り再適用されることを示すために、アイテムの伝承で使用される記号を設定します。
potionEffectContinuousLore: '&6⟲'
# アイテムの伝承でエリートエンチャントにプレフィックスされる文字を設定します。
eliteEnchantmentLoreColor: '&9◇'
# アイテムの伝承でバニラのエンチャントにプレフィックスされる文字を設定します。
vanillaEnchantmentLoreColor: '&7◇'
# アイテムの伝承でカスタムエンチャントにプレフィックスされる文字を設定します。
customEnchantmentColor: '&3◇'
# アイテムの伝承でポーション効果にプレフィックスされる文字を設定します。
potionEffectLoreColor: '&5◇'
# アイテムがソウルバインドされていない場合に、アイテムに表示されるテキストを設定します。
noSoulbindLore: '&7ソウルバインドされていません！'
# エリートアイテムをバニラの方法でエンチャントできるかどうかを設定します。EliteMobs には独自のバランスを備えた独自のカスタムエンチャントシステムがあるため、これは推奨されません。
preventEliteItemEnchantment: true
# エリートアイテムをバニラの方法で解体できるかどうかを設定します。
preventEliteItemDisenchantment: true
# アイテムを解体しようとしたときにプレイヤーに表示され、それが許可されていない場合に表示されるメッセージを設定します。
preventEliteItemDisenchantmentMessage: '&c[EliteMobs] エリートアイテムを解体できません！'
# エリートアイテムをバニラの方法でダイヤモンドからネザライトにアップグレードできるかどうかを設定します。推奨されません！
preventEliteItemDiamondToNetheriteUpgrade: true
# エリートアイテムが、死亡時のみ耐久性を失うかどうかを設定します。
# これは EliteMobs にとって重要なシステムであり、高レベルの戦闘はほぼ不可能であるため、強く推奨されます！
eliteItemsDurabilityLossOnlyOnDeath: true
# エリートアイテムが死亡時に耐久性を失うように設定されている場合の耐久性損失乗数を設定します。
# 0.0 ～ 1.0 の値は耐久性損失を下げ、1.0 より大きい値は耐久性損失を増やします。
# 例: 0.5 は耐久性損失の 50% を処理し、2.0 は耐久性損失の 200% を処理します。
eliteItemsDurabilityLossMultiplier: 1.0
# アイテムのスクラップが成功した場合に表示されるメッセージを設定します。
scrapSucceededMessageV2: '&8[EliteMobs] &2スクラップに $amount 回成功しました！'
# アイテムのスクラップに失敗した場合に表示されるメッセージを設定します。
scrapFailedMessageV2: '&8[EliteMobs] &cスクラップに $amount 回失敗しました！'
# エリート戦利品をプレイヤーのインベントリに直接配置する必要があるかどうかを設定します。
putLootDirectlyIntoPlayerInventory: false
# 低レベルすぎるアイテムを略奪できなくなるまでに、プレイヤーが持つことができる最大レベル差を設定します。
# これは、プレイヤーが着用している戦利品の平均レベルに基づいて計算されます。
# 例として、10 に設定され、プレイヤーがレベル 50 のギアを持っている場合、レベル 39 のボスをファームすることはできなくなります。
lootLevelDifferenceLockout: 10
# EliteMobs が、死亡時に耐久性損失を使用するシステムを使用する際に、エリートアイテムが壊れないようにするかどうかを設定します。
# プレイヤーは耐久性がなくなったアイテムを使用できなくなります。これは、高レベルで耐久性の低いアイテムが誤って失われるのを防ぐためのものです。
preventEliteItemsFromBreaking: true
# EliteMobs で手続き的に生成されたダイヤモンドギアをドロップできるボスの最小レベル (+7) を設定します。
# EliteMobs には、手続き的に生成されたネザライトギアはなく、カスタム戦利品のみです。
minimumProcedurallyGeneratedDiamondLootLevelPlusSeven: 10
# /em simloot <レベル> <回数> コマンドを通じて戦利品を正常にロールしたときにチャットに表示されるメッセージを設定します。
simlootMessageSuccess: '&8[EliteMobs] &2戦利品をロールし、$itemName &2を獲得しました！'
# /em simloot <レベル> <回数> コマンドを通じて戦利品をロールできなかったときにチャットに表示されるメッセージを設定します。
simlootMessageFailure: '&8[EliteMobs] &c戦利品をロールしましたが、何もありませんでした！'
# エリート戦利品がインベントリに直接デポジットされたときにプレイヤーが受け取るメッセージを設定します。
directDropCustomLootMessage: '&8[EliteMobs] &2$itemName &2を取得しました！'
# バニラの戦利品がインベントリに直接デポジットされたときにプレイヤーが受け取るメッセージを設定します。
directDropMinecraftLootMessage: '&8[EliteMobs] &a$itemName &aを取得しました！'
# エリートコインがインベントリに直接デポジットされたときにプレイヤーが受け取るメッセージを設定します。
directDropCoinMessage: '&8[EliteMobs] &a&2$amount $currencyName &aを取得しました！'
# EliteMobs がバニラ Minecraft の属性を非表示にするかどうかを設定します。
hideItemAttributes: true
# エリートアイテムの武器固有の伝承エントリを設定します。$EDPS プレースホルダーは、武器のエリート DPS (1 秒あたりのダメージ) に置き換えられます。
weaponEntry: '&7エリート DPS: &2$EDPS'
# エリートアイテムの鎧固有の伝承エントリを設定します。$EDEF プレースホルダーは、武器のエリート DEF (防御力) に置き換えられます。
armorEntry: '&7エリート鎧: &2$EDEF'
# プレイされたときにボスを倒した場合に送信されるメッセージですが、ギアレベルがコインを獲得するにはボスのレベルと異なりすぎる場合
levelRangeTooDifferent: '&8EM] &4ギアはレベル $playerLevel で、ボスはレベル $bossLevel です。レベル差が大きすぎてコインを獲得できません！'
```

</details>

---

## MobCombatSettings.yml

`MobCombatSettings.yml` には、カスタム戦闘システムに関連するすべての構成オプションと、一般的にエリートモブの動作方法に関連するほとんどの構成オプションが含まれています。

<details>

<summary><b>テーブルを展開</b></summary>

```yaml
# 自然にスポーンするエリートがスポーンするかどうかを設定します。注: ゾンビキングのようなイベントモブは、自然にスポーンするエリートではありません！イベントボスを無効にする場合は、イベントを無効にする必要があります。
doNaturalEliteMobSpawning: true
# モブスポーナーからスポーンしたスポーンをエリートに変換できるかどうかを設定します。推奨しません！
doSpawnersSpawnEliteMobs: false
# 自然にスポーンしたモブのうち、エリートモブに変換される割合を設定します。
eliteMobsSpawnPercentage: 0.05
# スーパーモブスタッキングをスキャンするスーパーモブ範囲を設定します
superMobStackRange: 15
# エリートがスポーンできる最大レベルを設定します。
# 注: エリートモブのレベルは、プレイヤーが着用している鎧と武器に基づいており、鎧はレベル 200 までしかスケールしません。
naturalEliteMobsLevelCap: 250
# エリートがレベルに基づいて鎧を着用するかどうかを設定します。これは視覚的な目的のみであり、戦闘には影響しません。
doElitesWearArmor: true
# エリートがレベルに基づいてヘルメットを着用するかどうかを設定します。これにより、日中に簡単に燃え尽きるのを防ぎます。
doElitesWearHelmets: true
# エリートの周りに、どのプレイヤーを持っているかについてプレイヤーに警告する視覚的な軌跡を表示するかどうかを設定します。
doNaturalEliteMobVisualEffects: true
# スポーナーからスポーンしたエリートが視覚効果を行うかどうかを設定します。
doSpawnerEliteMobVisualEffects: false
# 一部のパワーがパワーの警告フェーズを実行するかどうかを設定します。警告フェーズは通常、パワーを回避できることを意味し、視覚的にプレイヤーがどこに回避する必要があるかを知るため、これは非常に重要です。
doPowerBuildupVisualEffects: true
# プレイヤーがエリートによって死亡した場合に、カスタム死亡メッセージを使用するかどうかを設定します。
doCustomEliteMobsDeathMessages: true
# EliteMobs がエリートの体力インジケーターを表示するかどうかを設定します。
doDisplayMobHealthOnHit: true
# EliteMobs がエリートへのダメージのダメージインジケーターを表示するかどうかを設定します。
doDisplayMobDamageOnHit: true
# スポーンからの距離に基づいてエリートのレベルが上がるかどうかを設定します。
# これは通常のレベルに追加される値です。つまり、プレイヤーがスポーンの近くでレベル 100 のギアを着用しており、ボスがスポーンからの距離のために +1 レベルを持っている場合、ボスはレベル 101 でスポーンします。
# このオプションは、特にサーバーにランダム tp システムがある場合は、一般的に推奨されません。
doIncreaseEliteMobLevelBasedOnSpawnDistance: false
# 距離ベースのレベル増加のレベル増分の間の距離を設定します。
distanceBetweenIncrements: 100.0
# 距離ベースのレベル増加の距離増分ごとにレベルがどれだけ増加するかを設定します。
levelIncreaseAtIncrements: 1.0
# エリートのパワーが戦闘に入るまで非表示になるかどうかを設定します。これはパフォーマンス上の理由から推奨されます。
hideEliteMobPowersUntilAggro: true
# 正規化されたダメージシステム (地域ダンジョンのボス) を使用するボスを除き、EliteMobs によってスポーンされたすべてのボスに与えられるダメージの乗数を設定します。値が高いほど、与えるダメージが増加し、ボスが倒しやすくなります。
# 2.0 = 200%、0.5 = 50%
damageToEliteMobMultiplierV2: 1.0
# エリートがプレイヤーに与えるダメージの乗数を設定します。正規化されたダメージシステム (地域ダンジョンのボス) を使用するボスを除き、値が高いほど、ボスが与えるダメージが増加し、ボスがより強く攻撃します。
# 2.0 = 200%、0.5 = 50%
damageToPlayerMultiplierV2: 1.0
# 特別なボスを追跡できるかどうかを設定します。
showCustomBossLocation: true
# ボスの場所を追跡するためにプレイヤーに送信されるメッセージを設定します。
bossLocationMessage: '&7[EM] &2[クリックして追跡！]'
# エリートが死亡したときに実行されるコマンドを設定します。有効なプレースホルダーは次のとおりです。
# ボスのレベルを表す $level
# ボスの名前を表す $name
# $players は、キルに参加した各プレイヤーに対してコマンドを実行します。たとえば、ボブとスティーブがボスを倒した場合、「broadcast $players がボスを倒しました！」を実行すると、「ボブがボスを倒しました」と「スティーブがボスを倒しました！」が実行されます。
commandsOnEliteMobDeath: []
```
```yaml
# 大規模なボスのキルに参加したプレイヤーに送信されるメッセージを設定します。
bossKillParticipationMessage: '&eあなたのダメージ: &2$playerDamage'
# ボスが戦闘から離脱したときに体力を再生するかどうかを設定します。強く推奨されます。
regenerateCustomBossHealthOnCombatEnd: true
# 現在別のワールドにいるボスを追跡しようとしているプレイヤーに送信されるメッセージを設定します。
defaultOtherWorldBossLocationMessage: '$name: 別のワールドにいます！'
# プレイヤーがボスに対して弱点攻撃をしたときに、ダメージインジケーターに追加されるプレフィックスを設定します。
weakTextColor: '&9'
# プレイヤーがボスに対して耐性攻撃をしたときに、ダメージインジケーターに追加されるプレフィックスを設定します。
resistTextColor: '&c'
# プレイヤーがボスに対して弱点攻撃をしたときに表示されるメッセージを設定します。
weakText: '&9&l弱点！'
# プレイヤーがボスに対して耐性攻撃をしたときに表示されるメッセージを設定します。
resistText: '&c&l耐性！'
# ボスが攻撃に対して弱いことを示すために、ビジュアルを使用するかどうかを設定します。
doWeakEffect: true
# ボスが攻撃に対して強いことを示すために、ビジュアルを使用するかどうかを設定します。
doResistEffect: true
# 正規化されたダメージシステム (地域ダンジョンのボス) を使用するボスに与えられるダメージの乗数を設定します。値が高いほど、与えるダメージが増加し、ボスが倒しやすくなります。
# 2.0 = 200%、0.5 = 50%
damageToEliteMobMultiplier: 1.0
# 正規化されたダメージシステム (地域ダンジョンのボス) を使用するボスがプレイヤーに与えるダメージの乗数を設定します。値が高いほど、ボスが与えるダメージが増加し、ボスがより強く攻撃します。
# 2.0 = 200%、0.5 = 50%
damageToPlayerMultiplier: 1.0
# 正規化されたダメージ (通常は地域ボス) を使用するカスタムボスのベースラインダメージを設定します。
normalizedRegionalBossBaselineDamageV2: 3.0
# 正規化された体力 (通常は地域ボス) を使用するカスタムボスのベースライン体力を設定します。
normalizedRegionalBossBaselineHealthV3: 4.0
# 地域ボスが正規化された戦闘システムを使用するかどうかを設定します。
# これは非常に強く推奨されており、変更すると事前に作成されたコンテンツのバランスが適切に保たれなくなります。
normalizeRegionalBosses: true
# ボスが戦闘から離脱して回復したときに表示されるメッセージを設定します。
fullHealMessage: '&2全回復！'
# ボスが強いまたは弱い攻撃に適用される乗数を設定します。
strengthAndWeaknessDamageMultipliers: 2.0
# プレイヤーの抵抗ポーション効果によるダメージ軽減に適用される乗数を設定します。
resistanceDamageMultiplier: 1.0
# プレイヤーが近接攻撃 (パワーは除く) に対してシールドを掲げているときに、ダメージ軽減に適用される乗数を設定します。
blockingDamageReduction: 0.8
```

</details>

---

## ProceduralItemGenerationSettings.yml

`ProceduralItemGenerationSettings.yml` には、手続き的に生成されたアイテムを設定するためのすべての構成オプションが含まれています。

<details>

<summary><b>テーブルを展開</b></summary>

```yaml
dropProcedurallyGeneratedItems: true
customEnchantmentsChance: 0.5
materialNames:
  swordName: 剣
  bowName: 弓
  pickaxe: ピッケル
  spade: シャベル
  hoe: クワ
  axe: オノ
  helmet: ヘルメット
  chestplate: チェストプレート
  leggings: レギンス
  boots: ブーツ
  shears: ハサミ
  fishingRod: 釣り竿
  shield: シールド
  trident: トライデント
  crossbow: クロスボウ
nameFormats:
- $verb $itemType of the $adjective $noun
- $itemType of the $adjective $noun
- $noun's $adjective $verb $itemType
- $verb $itemType
- $adjective $verb $itemType
- The $verb-er
- The $adjective $verb-er
nouns:
- MagmaGuy
- 夜明け
...
adjectives:
- 愛らしい
- 美しい
...
verbs:
- 切り裂く
- 切断する
...
verb-ers (noun):
- 世界破壊者
- 世界粉砕者
...
validMaterials:
  DIAMOND_HELMET: true
  DIAMOND_CHESTPLATE: true
  DIAMOND_LEGGINGS: true
  DIAMOND_BOOTS: true
  DIAMOND_SWORD: true
  DIAMOND_AXE: true
  IRON_HELMET: true
  IRON_CHESTPLATE: true
  IRON_LEGGINGS: true
  IRON_BOOTS: true
  IRON_SWORD: true
  IRON_AXE: true
  GOLDEN_HELMET: true
  GOLDEN_CHESTPLATE: true
  GOLDEN_LEGGINGS: true
  GOLDEN_BOOTS: true
  GOLDEN_SWORD: true
  GOLDEN_AXE: true
  CHAINMAIL_HELMET: true
  CHAINMAIL_CHESTPLATE: true
  CHAINMAIL_LEGGINGS: true
  CHAINMAIL_BOOTS: true
  LEATHER_HELMET: true
  LEATHER_CHESTPLATE: true
  LEATHER_LEGGINGS: true
  LEATHER_BOOTS: true
  STONE_SWORD: true
  STONE_AXE: true
  WOODEN_SWORD: true
  WOODEN_AXE: true
  SHIELD: true
  TURTLE_HELMET: true
  TRIDENT: true
  BOW: true
  CROSSBOW: true
```

</details>

---

## ValidWorlds.yml

`ValidWorlds.yml` には、EliteMobs が検出したワールドのリストと、それらで EliteMobs 機能をカスタマイズするためのオプションが含まれています。

<details>

<summary><b>テーブルを展開</b></summary>

```yaml
# ゾーンベースのワールドのリストを設定します。
# ゾーンベースのゲームモードは古くなっており、間もなく削除されます！
zoneBasedWorlds: []
# ナイトメアモードのワールドのリストを設定します。
# ナイトメアモードのワールドは、昼が短く、プレイヤーが眠ることができないゲームモードです。
# ナイトメアワールドでは、エリートスポーンの数も多くなります。
# https://github.com/MagmaGuy/EliteMobs/wiki/%5BGame-Mode%5D-Nightmare-mode
nightmareWorlds: []
Valid worlds:
  world: true
  world_nether: true
  world_the_end: true
```

</details>

---

## Arenas.yml

`Arenas.yml` には、変更できるアリーナのデフォルトメッセージと設定が含まれています。

<details>

<summary><b>テーブルを展開</b></summary>

```yaml
# アリーナを開始するのに十分なプレイヤーがいない場合に表示されるメッセージ。
notEnoughPlayersMessage: '&8[EliteMobs] &c試合を開始するには、少なくとも $amount 人必要です！'
# アリーナが開始するときに表示されるタイトル。
startingMessage: '&2開始！'
# アリーナが開始するときに表示されるサブタイトル。
startingSubtitle: '&2$count で...'
# アリーナがいっぱいになったときに表示されるメッセージ。
arenaFullMessage: '&4[EliteMobs] &cArena がいっぱいです！終了するまで、代わりに観戦できます！'
# プレイヤーがアクティブなアリーナに参加しようとしたときに表示されるメッセージ。
arenasOngoingMessage: '&4[EliteMobs] &cArena には参加できません。現在試合中です！終了するまで、代わりに観戦できます！'
# プレイヤーとして参加した後、アリーナを開始する方法をプレイヤーにリマインドするために表示されるメッセージ。
instanceStartHintMessage: '&2[EliteMobs] &a/em start を実行してインスタンスを開始できます'
# アリーナを離れる方法をプレイヤーにリマインドするために表示されるメッセージ。
instanceQuitHintMessage: '&4[EliteMobs] &c/em quit を実行してインスタンスを離れることができます'
# プレイヤーがアリーナに参加したときに表示されるメッセージ。
arenaJoinPlayerMessage: "&2[EliteMobs] &a少なくとも &2$count &a人のプレイヤーがいる場合は、&2/em start &aを実行してアリーナを開始できます。\n&c/em quit を実行してアリーナを離れることができます"
# 観客として参加した後、アリーナを離れる方法をプレイヤーにリマインドするために表示されるメッセージ。
arenaJoinSpectatorMessage: '&2[EliteMobs] &a&2/em quit を使用すると、いつでもアリーナを離れることができます'
# ウェーブが開始するときに表示されるタイトルメッセージ。
waveTitle: '&aウェーブ &2$wave'
# ウェーブが開始するときに表示されるサブタイトルメッセージ。
waveSubtitle: ''
# アリーナが完了したときに表示されるタイトル。
victoryTitle: '&2勝利！'
# アリーナが完了したときに表示されるサブタイトル。
victorySubtitle: '&a$wave &aウェーブを完了しました！'
# プレイヤーがアリーナに失敗したときに表示されるタイトル。
defeatTitle: '&4敗北！'
# プレイヤーがアリーナに失敗したときに表示されるサブタイトル。
defeatSubtitle: '&cウェーブ &4$wave&c に到達！'
# プレイヤーがアリーナに勝利したときにブロードキャストされるメッセージ。
victoryBroadcast: アリーナ $arenaName は $players によって征服されました！
# プレイヤーがアリーナに参加したときに表示されるタイトル。
joinPlayerTitle: '&a/em start &a で開始！'
# プレイヤーがアリーナに参加したときに表示されるサブタイトル。
joinPlayerSubtitle: '&c/em quit &c で離脱！'
# 観客がアリーナに参加したときに表示されるタイトル。
joinSpectatorTitle: '&a観戦中！'
# 観客がアリーナに参加したときに表示されるサブタイトル。
joinSpectatorSubtitle: '&c/em quit &c で離脱！'
# プレイヤーがアリーナに入る許可を持っていない場合に、プレイヤーに送信されるメッセージを設定します。
noArenaPermissionMessage: '[EliteMobs] このアリーナに入る許可がありません！'
```

</details>

---

## Database.yml

`Database.yml` には、EM がデータベースを処理する方法の設定が含まれています。

<details>

<summary><b>テーブルを展開</b></summary>

```yaml
# MySQL を使用するかどうかを設定します。デフォルトでは、EliteMobs は SQLite を使用します。MySQL を使用する場合は、有効な MySQL 設定が必要です。
useMySQL: false
# MySQL データベースのホスト
mysqlHost: localhost
# MySQL データベースのポート
mysqlPort: '3306'
# データベースの名前
mysqlDatabaseName: elitemobs
# MySQl のユーザー名
mysqlUsername: ここに_mysql_の_ユーザー名
# MysSQL データベースのパスワード
mysqlPassword: ここに_mysql_パスワード
# SSL を使用するかどうか
useSSL: true
```

</details>

---

## dungeons.yml

`dungeons.yml` には、ダンジョンに表示されるメッセージや、適用される効果のダメージ乗数などの他の設定を調整できる設定が含まれています。

<details>

<summary><b>テーブルを展開</b></summary>

```yaml
# ダンジョンの毒ダメージのダメージ乗数を設定します
# これは、デフォルトではダメージがダンジョンに対して少し高すぎるため、バランスのために重要です
poisonDamageMultiplier: 0.5
# ダンジョンの火ダメージのダメージ乗数を設定します
# これは、デフォルトではダメージがダンジョンに対して少し高すぎるため、バランスのために重要です
fireDamageMultiplier: 0.5
# ダンジョンのウィザーダメージのダメージ乗数を設定します
# これは、デフォルトではダメージがダンジョンに対して少し高すぎるため、バランスのために重要です
witherDamageMultiplier: 0.5
# ダンジョンでの PvP を許可するかどうかを設定します
friendlyFireInDungeons: false
# ダンジョンの復活バナーの上に表示されるテキストを設定します
dungeonRezInstructions: '&aパンチして復活！'
# ダンジョンでプレイヤーが残りのライフを何回表示するかを示すテキストを設定します！プレースホルダー:
# $amount - 残りのライフ数
dungeonLivesLeftText: '&c残りライフ数 $amount！'
# プレイヤーとしてダンジョンに参加するためのテキストを設定します！プレースホルダー:
# $dungeonName - ダンジョンの名前
joinDungeonAsPlayerText: '&fプレイヤーとして $dungeonName に参加！'
# 観客としてダンジョンに参加するためのテキストを設定します！プレースホルダー:
# $dungeonName - ダンジョンの名前
joinDungeonAsSpectatorText: '&f観客として $dungeonName に参加！'
# インスタンス化されたダンジョンメニューのアイテムの説明に表示されるタイトルを設定します
# $difficulty はダンジョンの構成ファイルにある難易度の名前のプレースホルダーです
instancedDungeonTitle: $difficulty 難易度ダンジョンを開始！
# インスタンス化されたダンジョンメニューのアイテムの説明に表示される説明を設定します
# $dungeonName はダンジョンの構成ファイルにあるダンジョン名のプレースホルダーです
instancedDungeonDescription:
- '&fダンジョンの新しいインスタンスを作成する'
- $dungeonName &f自分用、そして多分
- '&f友達も！'
# インスタンス化されたコンテンツの観戦を許可するかどうかを設定します。
allowSpectatorsInInstancedContent: true
# インスタンス化されたダンジョンが完了したときに表示されるメッセージを設定します
instancedDungeonCompleteMessage: '[EliteMobs] ダンジョンが完了しました！2 分後に自壊します！'
# インスタンス化されたダンジョンが閉じるときに表示されるメッセージを設定します
instancedDungeonClosingInstanceMessage: '[EliteMobs] インスタンスを閉じます！'
```

</details>

---

## Quests.yml

`Quests.yml` には、クエストの設定と、表示されるメッセージが含まれています。

<details>

<summary><b>テーブルを展開</b></summary>

```yaml
# クエストを完了するためにクエスト提供者に返す必要があるかどうかを設定します。
requireQuestTurnIn: true
# クエストが受け入れられたときに送信されるメッセージを設定します。
questJoinMessage: '&aクエスト $questName &a を受け付けました！'
# クエストが放棄されたときに送信されるメッセージを設定します。
questLeaveMessage: '&cクエスト $questName &c を放棄しました！'
# クエストが完了したときに送信されるメッセージを設定します。
questCompleteMessage: '&2クエスト $questName &2 を完了しました！'
# アクティブなクエストがないときにプレイヤーがクエストを放棄しようとしたときに送信されるメッセージを設定します。
leaveWhenNoActiveQuestsExist: '&c現在アクティブなクエストはありません！'
# プレイヤーがクエストを離れようとしたときに送信される確認メッセージを設定します。
questLeaveConfirmationMessage: '&c現在のクエストを放棄してもよろしいですか？選択を確定するには、&a/em confirm &c を実行してください！'
# クエストに関連する一部のメッセージが、チャットメッセージの代わりにタイトルを使用するかどうかを設定します。
useQuestAcceptTitles: true
# プレイヤーがクエストを開始したときに送信されるタイトルを設定します。
questStartTitle: '&aクエストを受け付けました！'
# プレイヤーがクエストを開始したときに送信されるサブタイトルを設定します。
questStartSubtitle: $questName
# プレイヤーがクエストを完了したときにタイトルが送信されるかどうかを設定します。
useQuestCompleteTitles: true
# プレイヤーがクエストを完了したときに送信されるタイトルを設定します。
questCompleteTitle: '&2クエストを完了しました！'
# プレイヤーがクエストを完了したときに送信されるサブタイトルを設定します。
questCompleteSubtitle: $questName
# プレイヤーがクエストを離れるときにタイトルが送信されるかどうかを設定します。
useQuestLeaveTitles: true
# プレイヤーがクエストを離れるときに送信されるタイトルを設定します。
questLeaveTitle: '&cクエストを放棄しました！'
# プレイヤーがクエストを離れるときに送信されるサブタイトルを設定します。
questLeaveSubtitle: $questName
# クエストの目標進行状況を報告するメッセージがチャットで送信されるかどうかを設定します。
doQuestChatProgression: true
# 完了した目標のカラーコードを設定します。
ongoingQuestColorCode: '&2'
# キルクエストの進行状況メッセージの形式を設定します。
killQuestChatProgressionMessage: '&8[EliteMobs]&c➤$name を倒す:$color$current&0/$color$target'
# フェッチクエストの進行状況メッセージの形式を設定します。
fetchQuestChatProgressionMessage: '&8[EliteMobs]&c➤$name を取得する:$color$current&0/$color$target'
# ダイアログクエストの進行状況メッセージの形式を設定します。
dialogQuestChatProgressionMessage: '&8[EliteMobs]&c➤$name と話す:$color$current&0/$color$target'
# プレイヤーが持つことができる受け入れられたクエストの最大数を設定します。
maximumActiveQuests: 10
# アクティブなクエストの上限を超える数のクエストを受け入れようとしたときに、プレイヤーに送信されるメッセージを設定します。
questCapMessage: '&8[EliteMobs] &cアクティブなクエストの最大数 (10) に達しました！&4さらにクエストを取得する場合は、少なくとも 1 つのアクティブなクエストを放棄または完了してください！'
# クエストにスコアボードメッセージを使用するかどうかを設定します。
useQuestScoreboards: true
# キルクエストのスコアボード進行状況メッセージの形式を設定します。
killQuestScoreboardProgressionMessage: '&c➤$name を倒す:$color$current&0/$color$target'
# フェッチクエストのスコアボード進行状況メッセージの形式を設定します。
fetchQuestScoreboardProgressionMessage: '&c➤$name を取得する:$color$current&0/$color$target'
# ダイアログクエストのスコアボード進行状況メッセージの形式を設定します。
dialogQuestScoreboardProgressionMessage: '&c➤$name と話す:$color$current&0/$color$target'
questEntityTypes:
- BLAZE
- CAVE_SPIDER
- DROWNED
- ELDER_GUARDIAN
- ENDERMAN
- ENDERMITE
- EVOKER
- GHAST
- GUARDIAN
- HUSK
- ILLUSIONER
- IRON_GOLEM
- PILLAGER
- RAVAGER
- SILVERFISH
- SKELETON
- SPIDER
- STRAY
- VINDICATOR
- WITCH
- WITHER_SKELETON
- WOLF
- ZOMBIE
- HOGLIN
- ZOGLIN
- PIGLIN_BRUTE
- PIGLIN
- ZOMBIFIED_PIGLIN
# クエスト追跡をアクティブ化するためにプレイヤーに送信されるメッセージを設定します。
chatTrackMessage: '&8[EliteMobs]&2 ここをクリックしてクエストを追跡してください！'
# クエスト追跡メッセージのホバーメッセージを設定します。
chatTrackHover: '&2クリックして追跡！'
# 追跡メッセージをクリックしたときに送信されるコマンドを設定します。これは変更しないでください。
chatTrackCommand: /elitemobs quest track $questID
# クエスト追跡をアクティブ化するときにプレイヤーに送信されるメッセージを設定します。
chatTrackingMessage: '&8[EliteMobs]&9 現在クエストを追跡しています！'
# クエスト追跡が有効なメッセージのホバーメッセージを設定します。
chatTrackingHover: '&2クリックして追跡/追跡解除！/em -> クエスト で別のクエストを追跡できます！'
# クエスト追跡アクティベーションメッセージをクリックしたときに送信されるコマンドを設定します。これは変更しないでください。
chatTrackingCommand: /elitemobs quest track $questID
# クエストが受け入れられたときに自動的に追跡されるかどうかを設定します。
autoTrackQuestsOnAccept: true
# クエストの目的地が見つからなかったときに表示されるメッセージを設定します。
noQuestDestinationFound: '[EM] クエストの目的地が見つかりません！'
# クエストのターゲットが別のワールドにあるときに表示されるメッセージを設定します。
questDestinationInOtherWorld: '[EM] ワールド $world に移動してください！'
# すでに完了したクエストを受け入れようとしたときに、プレイヤーに送信されるメッセージを設定します。
questAlreadyCompletedMessage: '&8[EliteMobs] &cこのクエストは既に完了しています！'
# 許可を持っていないクエストを受け入れようとしたときに、プレイヤーに送信されるメッセージを設定します。
questPrerequisitesMissingMessage: '&8[EliteMobs] &cこの NPC には、まだ受け入れられないクエストがあります！'
# 有効化された正しいギルドランクを持っていないクエストを取得しようとするプレイヤーに送信されるメッセージを設定します。
lowRankDynamicQuestWarning: '&8[EliteMobs] &c現在のギルドランクではこれらのクエストを受け入れることができません！これらのクエストを受け入れるには、ギルドランクを上げてください。'
# クエストのターンインメッセージの形式を設定します。
questTurnInObjective: '&a2$npcName と話す'
# クエストのインベントリベースのメニューが線を分割するまでの最大文字数を設定します。
horizontalCharacterLimitBedrockMenu: 30
# エントリーを続行するために別のアイテムを作成する前に、クエストのインベントリベースのメニューでアイテムエントリごとの最大文字数を設定します。
itemEntryCharacterLimitBedrockMenu: 300
```

</details>

---

## resource_pack_config.yml

`resource_pack_config.yml` には、EliteMobs リソースパックに関連する設定が含まれています。

<details>

<summary><b>テーブルを展開</b></summary>

```yaml
eliteMobsResourcePackEnabled: false
forceResourcePack: false
resourcePackPrompt: '[EliteMobs] リソースパックの使用を強くお勧めします！'
resourcePackLink: https://www.magmaguy.com/downloads/elitemobs_resource_pack.zip
```

</details>

---

## Sounds.yml

`Sounds.yml` には、特定のエリートモブインタラクションが実行されたときに再生するサウンドを定義する設定が含まれています。サウンドファイルはリソースパックに保存されています。

<details>

<summary><b>テーブルを展開</b></summary>

```yaml
# 宝箱が開いたときに再生するサウンドを設定します
treasureChestOpenSound: elitemobs:treasure_chest.open
# プレイヤーがギルドでランクアップしたときに再生するサウンドを設定します
guildRankUpSound: elitemobs:guild.rankup
# プレイヤーがギルドでプレステージしたときに再生するサウンドを設定します
guildPrestigeSound: elitemobs:guild.prestige
# プレイヤーがクエストを進めたときに再生するサウンドを設定します
questProgressionSound: elitemobs:quest.progression
# プレイヤーがクエストを完了したときに再生するサウンドを設定します
questCompleteSound: elitemobs:quest.completion
# プレイヤーがクエストを放棄したときに再生するサウンドを設定します
questAbandonSound: elitemobs:quest.abandon
# プレイヤーがクエストを受け入れたときに再生するサウンドを設定します
questAcceptSound: elitemobs:quest.accept
```

</details>

---

## Wormholes.yml

`Wormholes.yml` には、EliteMobs ワームホールテレポートの設定が含まれています。

<details>

<summary><b>テーブルを展開</b></summary>

```yaml
# インストールされていないダンジョンでテレポートが使用されたときに表示されるメッセージを設定します。
dungeonNotInstalledMessage: '&8[EliteMobs] &cダンジョン $dungeonID &cがインストールされていません！このテレポートは機能しません。'
# インストールされていないダンジョンにワームホールが使用されたときに表示されるメッセージを設定します。
defaultPortalMissingMessage: '&8[EliteMobs] &cこのポータルはどこにもつながっていないようです！'
# ワームホールのパーティクルを減らすモードを使用するかどうかを設定します。特に Bedrock クライアントを許可している場合は、これをお勧めします。
reducedParticlesMode: true
# ワームホールがパーティクルをまったく使用しないかどうかを設定します。推奨されませんが、本当に悪い Bedrock クライアントには必要な場合があります。
noParticlesMode: false
# プレイヤーがワームホールを使用しようとしたが、それを使用するのに十分な通貨を持っていない場合に送信されるメッセージを設定します。
insufficientCurrencyForWormholeMessage: '&8[EliteMobs] &c通貨が不足しています！このワームホールを使用するには $amount 必要です！'
```

</details>
