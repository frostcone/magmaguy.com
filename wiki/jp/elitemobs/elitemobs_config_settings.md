# EliteMobs 設定のデフォルト

**EliteMobs には推奨されるデフォルト設定が最初からインストールされています。もしランダムに設定を変更すると、全体的な体験が悪化する可能性が高いです。
**

_**EliteMobs
は推奨されるデフォルト設定で全てのユーザーに提供されます。もしランダムに設定を変更し、その後サポートを求める場合、設定ファイルをリセットするように言われる可能性が非常に高いです。プラグインの変更は、推測ではなくプレイテストに基づいて行うべきです。
**_

## はじめに

EliteMobs は、カスタマイズに対する高い需要のため、現在非常に多くの設定オプションを提供しています。この wiki
ページを簡潔に保つため、デフォルト設定のみが表示されます。

特定のセッティングについて詳しく知りたい場合は、設定ファイルを参照し、コメントを確認してください。

---

## config.yml

`config.yml` には、作成時に他の場所にうまく収まらなかった、ほとんどがランダムな設定が含まれています。これは、バージョン間で変更が最も多い設定ファイルです。

<div align="left">

<details>

<summary><b>テーブルを展開</b></summary>

```yml
# EliteMobs が使用する言語ファイルを設定します
# 手動で変更しないでください！これはコマンド '/em language <言語ファイル>' でインストールするためのものです。
language: english
# EliteMobs によってスポーンされたエリートやボスが常にネームタグを表示するかを設定します。
# 推奨しません！
alwaysShowEliteMobNameTags: false
# 合成される前に近くにいる必要があるパッシブモブの数を設定します。
# これを 0 に設定しないでください！
superMobStackAmount: 50
# エリートが爆発でパッシブモブにダメージを与えないようにします。
preventEliteCreeperDamageToPassiveMobs: true
# EliteMobs がパーミッション不足についてプレイヤーに警告するためにタイトルを使用するかを設定します。
useTitlesForMissingPermissionMessages: true
# EliteMobs が名前付きモブをエリートに変換するのを防ぐかどうかを設定します。
# 他のプラグインとの互換性にとって特に重要です。
preventEliteMobConversionOfNamedMobs: true
# EliteMobs がカスタムスポーン理由を持つモブを変換するかを設定します。
# 特定のボスプラグインを実行すると、設定の値に関係なく自動的に true に設定されます。
enableHighCompatibilityMode: false
# ナイトメアゲームモードのエリートスポーンボーナスを設定します。
nightmareWorldSpawnBonus: 0.5
# 中央の /em コマンドがプラグインのメインステータスページを開くかどうかを設定します。
# 強く推奨します！
emLeadsToStatusMenu: true
# /em wallet のような特定のコマンドを実行すると、その情報が集約された /em メニューに移動するかを設定します。
otherCommandsLeadToEMStatusMenu: true
# セットアップが完了したかどうかを設定します。
# この値を手動で設定しないでください。ゲーム内コマンドを通じて変更されるように設計されています。
setupDoneV3: true
# エリートが、ゾンビの増援機能などのバニラの増援スポーンを防ぐかどうかを設定します。
preventVanillaReinforcementsForEliteEntities: true
# EliteMobs のサーバーのデフォルトのスポーン場所を設定します。/em spawntp はこの場所に移動します。
defaultSpawnLocation: world,16.0,76.0,80.0,0.0,0.0
# EliteMobs がエリートによって吹き飛ばされたブロックを再生するかを設定します。
doExplosionRegen: true
# 爆発による再生が、チェストのようなコンテナの内容も再生するかどうかを設定します。
# false にすると、エリートの爆発でコンテナが吹き飛ばされなくなります。
doRegenerateContainers: true
defaultTransitiveBlockLimiter: 500
# /em メニューが、Bedrock と互換性のあるインベントリベースのメニュー スタイルのみを使用するかを設定します。
# 念のため、プレイヤーは /em alt コマンドを実行して /em メニュー スタイルを切り替えることができます
onlyUseBedrockMenus: false
# ブックメニューページの 1 行あたりの文字数制限を設定します。
# クエストのようなブックメニューでテキストが途切れる場合は、この値を下げてください。
characterLimitForBookMenuPagesV2: 170
# 空のメニュー スペースがガラス板で埋められるかどうかを設定します。
# EliteMobs リソースパックを使用している場合は推奨しません。
useGlassToFillMenuEmptySpace: false
# Unicode を使用して EliteMobs リソースパックをフォーマットするかを設定します。
# これを手動で設定しないでください。リソースパックのインストール時に自動的に設定されます。
# EliteMobs リソースパックをマージする必要があった場合にのみ手動で設定し、その場合、間隔が機能しない可能性があることをご了承ください。
menuUnicodeFormatting: false
# 保留中のコマンドなしに '/em confirm' を実行した場合にプレイヤーに送信されるメッセージを設定します。
noPendingCommands: '&c現在保留中のコマンドはありません！'
# トラッキングメッセージを送信するボスのトラッキングメッセージを設定します。
trackMessage: $name を追跡
# ギルドランクがレベル要件よりも高いトレジャーチェストを開いたプレイヤーに送信されるメッセージを設定します。
chestLowRankMessage: '&7[EM] &cこのチェストを開くには、ギルドランクが少なくとも $rank である必要があります！'
# すでに開けたトレジャーチェストを再度開こうとしたプレイヤーに送信されるメッセージを設定します。
chestCooldownMessage: '&7[EM] &c最近このチェストを開けました！$time 待ってください！'
# /em コマンドで問題が発生しているプレイヤーに /em alt コマンドを推奨するメッセージを設定します。
dismissEMMessage: '&8[EliteMobs] &2/elitemobs &fメニューが機能しませんか？&2/elitemobs alt &fでメニューの代替バージョンを見てみてください！ &cこのメッセージを二度と見たくないですか？ &4/em dismiss'
# プレイヤーが /em alt コマンドを実行したときに表示されるメッセージを設定します。
switchEMStyleMessage: '&8[EliteMobs] &2/elitemobs &fメニューのスタイルが変わりました！確認してみてください！'
# プレイヤーがトレジャーチェストを開けたが何も得られなかったときに表示されるメッセージを設定します。
treasureChestNoDropMessage: '&8[EliteMobs] &c何も得られませんでした！また次回頑張ってください！'
# もはや有効でないボスを追跡しようとしたときにプレイヤーに表示されるメッセージを設定します。
bossAlreadyGoneMessage: '&c[EliteMobs] 申し訳ありませんが、このボスは既に行ってしまいました！'
```

</details>

---

## AdventurersGuild.yml

`AdventurersGuild.yml` には、冒険者ギルドハブ（ワールド）と冒険者ギルドのランクアップシステムに関連する設定が含まれています。

<details>

<summary><b>テーブルを展開</b></summary>

```yml
# EliteMobs がプレステージ報酬としてギルドランクを解除するときに最大ヘルスを追加するかどうかを設定します。
Add max health when unlocking higher guild ranks: true
# EliteMobs がプレステージ報酬としてギルドランクを解除するときにクリティカルストライクの確率を追加するかどうかを設定します。
Add critical chance when unlocking higher guild ranks: true
# EliteMobs がプレステージ報酬としてギルドランクを解除するときに回避率を追加するかどうかを設定します。
Add dodge chance when unlocking higher guild ranks: true
# ユーザーコマンドが冒険者ギルドハブにリダイレクトされるかどうかを設定します。これはゲームプレイの没入感とチュートリアルの目的で強く推奨されます。
userCommandsTeleportToAdventurersGuild: true
# 冒険者ギルドのゲーム内表示名を設定します。
adventurersGuildMenuName: '&6&l冒険者のハブ'
Prestige 0 rank 0: '&8平民 - エリートを無効にします！'
Prestige 0 rank 0 short placeholder: '&6&l✧&e0'
...
# プレイヤーの戦利品がギルドレベルによって制限されるかどうかを設定します。
# これは EliteMobs の非常に重要な部分であり、強く推奨されます。
limitLootBasedOnGuildTier: true
# ギルドレベルが低いために戦利品が弱体化された場合にプレイヤーに送信されるメッセージを設定します。
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
# 最初の最大ヘルスボーナスのプレステージレベルを設定します。
healthPrestige1Bonus: 2.0
# 2 番目の最大ヘルスボーナスのプレステージレベルを設定します。
healthPrestige4Bonus: 2.5
# 3 番目の最大ヘルスボーナスのプレステージレベルを設定します。
healthPrestige7Bonus: 3.0
# 3 番目の最大ヘルスボーナスのプレステージレベルを設定します。
healthPrestige10Bonus: 4.0
# ランクアップを購入できるようになるまでに倒す必要のあるボスの推定基本数を設定します。
baseKillsForRankUp: 100
# ランクアップするために倒す必要のあるボスの追加数の推定値をレベルごとに設定します。
# 式はこの値 × プレイヤーの現在のレベルです。
additionalKillsForRankUpPerTier: 50
# 誰かがプレステージランクを解除したときにプレイヤーに送信されるタイトルを設定します。
# $player は、プレイヤーの表示名に置き換えられるプレースホルダーです。
prestigeUnlockMessageTitle: $player
# 誰かがプレステージランクを解除したときにプレイヤーに送信されるサブタイトルを設定します。
# $tier は、プレイヤーのプレステージレベルに置き換えられるプレースホルダーです。
prestigeUnlockMessageSubtitle: '&2が $tier&2 を解除しました！'
# プレイヤーが平和（一般人）ランクを使用しているときにスポーン確率に適用される乗数を設定します。
peacefulModeEliteChanceDecrease: 0.2
# ギルドランクボーナスが適用されない世界のリストを設定します。
worldsWithoutAGBonuses: []
# EliteMobs の平和モードへの切り替えをユーザーが無効にする機能を無効にします。平和モードでは、プレイヤーのレベルとスポーン率が低下します。
disableCommonerRank: false
```

</details>

---

## AntiExploit.yml

`AntiExploit.yml` を使用すると、管理者は AntiExploit システムのさまざまな側面をカスタマイズできます。 AntiExploit
システムは、プレイヤーがモブグラインダーのようなものを使用してコインや戦利品を簡単にファームするのを防ぎ、プラグインのトップにAFKクリックするのではなく、実際の戦闘やミニダンジョンを行うように促します。

これは、人々がプラグイン全体を AFK でグラインドせず、実際にミニダンジョンと対話させたい場合は、オンにしておくべき重要なシステムです。

<details>

<summary><b>テーブルを展開</b></summary>

```yml
# アンチエクスプロイトがトリガーされたときに表示されるメッセージを設定します。
AntiExploit message: '&c[EM AntiExploit] &7近くのエリートは特別な戦利品をドロップしません。'
# ダークルームアンチエクスプロイト 1 が有効になっているかどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターはどのアンチエクスプロイトタイプがトリガーされたかを確認できますが、その具体的な動作方法に関する詳細情報は利用できません。
Enable darkroom antiexploit 1: true
# ダークルームアンチエクスプロイト 2 が有効になっているかどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターはどのアンチエクスプロイトタイプがトリガーされたかを確認できますが、その具体的な動作方法に関する詳細情報は利用できません。
Enable darkroom antiexploit 2: true
# ダークルームアンチエクスプロイト 3 が有効になっているかどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターはどのアンチエクスプロイトタイプがトリガーされたかを確認できますが、その具体的な動作方法に関する詳細情報は利用できません。
Enable darkroom antiexploit 3: true
# 大規模なダークルームアンチエクスプロイト 1 が有効になっているかどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターはどのアンチエクスプロイトタイプがトリガーされたかを確認できますが、その具体的な動作方法に関する詳細情報は利用できません。
Enable large darkroom antiexploit 1: true
# エンダーマンの高さアンチエクスプロイトが有効になっているかどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターはどのアンチエクスプロイトタイプがトリガーされたかを確認できますが、その具体的な動作方法に関する詳細情報は利用できません。
Enable enderman height antiexploit: true
# マウントアンチエクスプロイトが有効になっているかどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターはどのアンチエクスプロイトタイプがトリガーされたかを確認できますが、その具体的な動作方法に関する詳細情報は利用できません。
Enable mount antiexploit: true
# エリートモブがアイテムを拾うことができるかどうかを設定します。
preventItemPickupByMobs: true
# 周囲ダメージアンチエクスプロイトが有効になっているかどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターはどのアンチエクスプロイトタイプがトリガーされたかを確認できますが、その具体的な動作方法に関する詳細情報は利用できません。
Enable ambient damage antiexploit: true
# ハニーブロックアンチエクスプロイトが有効になっているかどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターはどのアンチエクスプロイトタイプがトリガーされたかを確認できますが、その具体的な動作方法に関する詳細情報は利用できません。
Enable honey block antiexploit: true
# アンチエクスプロイト起動のしきい値を設定します。値が大きいほど寛容になります。これを変更することは推奨されません。
antiExploitThreshold: 10
# パスなしアンチエクスプロイトが有効になっているかどうかを設定します。
nPathExploit: true
```

</details>

---

## CombatTag.yml

`CombatTag.yml` には、コンバットタグシステムの設定が含まれています。このシステムはまだ完成にはほど遠いですが、戦闘に入った後のプレイヤーの行動を管理しようとします。

<details>

<summary><b>テーブルを展開</b></summary>

```yml
# コンバットタグが有効になっているかどうかを設定します。
# 有効にすると、戦闘に参加した飛行中のプレイヤーは飛行を停止するように設定されます。
Enable combat tag: true
# コンバットタグが有効になったときに送信されるメッセージを設定します。
Combat tag message: '&c[EliteMobs] コンバットタグが有効になりました！'
# /ag コマンドがテレポート前にタイマーを持つかどうかを設定します。
Enable adventurers guild teleport timer: true
# テレポートタイマーを待っている間に設定されたアクションメッセージを設定します。
Teleport time left: '&7[EM] &a$time &7秒後にテレポートします...'
# テレポートを待っている間に移動したときにプレイヤーに送信されるメッセージを設定します。
Teleport cancelled: '&7[EM] &cテレポートが中断されました！'
```

</details>

---

## DiscordSRV.yml

`DiscordSRV.yml` には、DiscordSRV
の設定が含まれています。この機能を設定する方法を確認したい場合は、[ここをクリックしてください！]($language$/elitemobs/discordsrv.md)

<details>

<summary><b>テーブルを展開</b></summary>

```yml
# ドキュメントはこちらにあります: https://magmaguy.com/wiki.html#lang=en&article=elitemobs+discordsrv.md
announcementRoomName: YOU_NEED_TO_PUT_THE_NAME_OF_THE_DISCORD_ROOM_YOU_WANT_ELITEMOBS_ANNOUNCEMENTS_TO_BE_BROADCASTED_IN_AS_YOU_HAVE_IN_YOUR_DISCORDSRV_CONFIGURATION_FILE_CHECK_ELITEMOBS_WIKI_FOR_DETAILS

```

</details>

---

## EconomySettings.yml

`EconomySettings.yml` には、EliteMobs の経済設定が含まれています。

<details>

<summary><b>テーブルを展開</b></summary>

```yml
# EliteMobs の経済が有効になっているかどうかを設定します。これは、エリートコイン、装備の売買、ギルドランクのアップグレードを意味します。
# 無効にすると、プレイヤーはプラグインを進めることができなくなります！
enableEconomy: true
# アイテムの再販額を、元の価格の % として設定します。5 は 5% です。
itemResaleValue: 5.0
# 使用する通貨のゲーム内名を設定します。
currencyName: エリートコイン
# Vault を使用するプラグインを設定します。これは推奨されません！理由はこちらをご覧ください: https://github.com/MagmaGuy/EliteMobs/wiki/%5BThird-party-support%5D-Vault
useVault - not recommended: false
# エリートがレベルに基づいてコインをドロップするかを設定します。
enableCurrencyShower: true
# エリートがドロップする通貨の乗数を設定します。
currencyShowerTierMultiplier: 1.0
# プレイヤーがエリート通貨を拾ったときに送信されるメッセージを設定します。
chatCurrencyShowerMessage: '&7[EM] &a$amount $currency_name を拾いました！'
# プレイヤーがエリート通貨を拾ったときに送信されるアクションバーメッセージを設定します。
actionbarCurrencyShowerMessage: '&7[EM] &a$amount $currency_name を拾いました！'
# 通貨を略奪した後にプレイヤーが受け取るメッセージを送信します。チュートリアル目的で役立ちます。
adventurersGuildNotificationMessages: '&7[EM] 余分なお金がありますか？&a/ag を試してみてください！'
# プレイヤー間の取引に対する税率を設定します。
# 高レベルのプレイヤーは最大 6 倍多くの通貨を獲得でき、プレステージ通貨のリセットをバイパスするために他のプレイヤーを利用しようとする可能性があるため、バランス上の理由から強く推奨されます。
playerToPlayerPaymentTaxes: 0.2
# エリート通貨を他のプレイヤーに送信するときに送信されるメッセージ。
Economy pay message v2: '&2$receiver&2 に &2$amount_sent $currency_name &2 を支払いました。税引き後 $amount_received を受け取りました！'
# プレイヤーが通貨を送信した後に送信されるメッセージ。
Economy currency left message: 現在 &2$amount_left $currency_name を所持しています
# 通貨を受け取ったときに受け取るメッセージ。
Economy money from payment message: $sender から &2$amount_received $currency_name &f を受け取りました
# プレイヤーが持っていないコインを送ろうとしたときに送信されるメッセージ。
Economy payment insufficient currency: '&cそれを行うための $currency_name が不足しています！'
# /em 残高メッセージ
Wallet command message: &2$balance $currency_name を所持しています
# プレイヤーが別のプレイヤーに通貨を送信しようとしたときに送信される確認メッセージ。
Tax confirmation message: '&c支払いを送信すると税金として $percentage% かかります。&a続行するには &9$command &a を実行してください！'
# プレイヤーがショップで購入するときに送信されるメッセージ。
Shop buy message: '&a$item_value $currency_name で $item_name を購入しました！'
# プレイヤーがショップと対話するときに送信されるメッセージ。
Shop current balance message: '&a$currency_amount $currency_name を所持しています。'
# プレイヤーがアイテムを購入するのに十分な通貨を持っていないときに送信されるメッセージ。
Shop insufficient funds message: '&c$currency_name が不足しています！'
# プレイヤーが購入できないアイテムを購入しようとしたときに送信されるメッセージの 2 番目の部分。
Shop item cost message: そのアイテムは &c$item_value $currency_name です。
# ショップにアイテムを販売したときに送信されるメッセージ。
Shop sell message: '&a$currency_amount $currency_name で $item_name を売却しました！'
# そのプレイヤーに属していないアイテムを販売しようとしたときに送信されるメッセージ。
Shop sale player items warning: '&c現在あなたにソウルバインドされていないアイテムを販売することはできません！これには、他のプレステージティアのアイテムも含まれます！'
# EliteMobs アイテムではないものを販売しようとしたときに送信されるメッセージ
Shop sale instructions: '&cここでは EliteMobs の戦利品のみを販売できます！ (鎧 / 武器は、その伝承に価値を示すエリートからドロップします)'
# エリートアイテムのバッチを販売したときに送信されるメッセージ。
shopBatchSellItem: '&a$currency_amount $currency_name でアイテムを販売しました！'
lootShowerMaterial:
  # ドロップされた 1 つのエリートコインの素材タイプを設定します。
  '1': GOLD_NUGGET
  '5': GOLD_INGOT
  '10': GOLD_BLOCK
  '20': EMERALD
  '50': EMERALD_BLOCK
  '100': DIAMOND
  '500': DIAMOND_BLOCK
  '1000': NETHER_STAR
lootShowerData:
  # ドロップされた 1 つのエリートコインのカスタムモデル ID を設定します。リソースパックで使用されます。
  '1': 1
  '5': 1
  '10': 1
  '20': 1
  '50': 1
  '100': 1
  '500': 1
  '1000': 1
materialWorth:
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  DIAMOND_AXE: 17.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  DIAMOND_BOOTS: 17.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  DIAMOND_CHESTPLATE: 17.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  DIAMOND_LEGGINGS: 17.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  DIAMOND_HELMET: 17.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  DIAMOND_PICKAXE: 17.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  DIAMOND_SHOVEL: 17.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  DIAMOND_SWORD: 17.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  DIAMOND_HOE: 17.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  IRON_AXE: 16.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  IRON_BOOTS: 16.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  IRON_LEGGINGS: 16.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  IRON_CHESTPLATE: 16.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  IRON_HELMET: 16.0
```

</details>
# elitemobs 通貨システムにおけるこの素材の価値を設定します。
  IRON_PICKAXE: 16.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  IRON_SHOVEL: 16.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  IRON_HOE: 16.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  IRON_SWORD: 16.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  SHIELD: 16.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  BOW: 16.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  CHAINMAIL_BOOTS: 15.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  CHAINMAIL_LEGGINGS: 15.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  CHAINMAIL_CHESTPLATE: 15.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  CHAINMAIL_HELMET: 15.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  STONE_SWORD: 15.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  STONE_AXE: 15.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  STONE_PICKAXE: 15.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  STONE_SHOVEL: 15.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  STONE_HOE: 15.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  GOLDEN_AXE: 13.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  GOLDEN_BOOTS: 13.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  GOLDEN_LEGGINGS: 13.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  GOLDEN_CHESTPLATE: 13.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  GOLDEN_HELMET: 13.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  GOLDEN_SWORD: 13.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  GOLDEN_SHOVEL: 13.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  GOLDEN_PICKAXE: 13.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  GOLDEN_HOE: 13.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  GOLDEN_APPLE: 17.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  ENCHANTED_GOLDEN_APPLE: 17.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  LEATHER_BOOTS: 13.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  LEATHER_LEGGINGS: 13.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  LEATHER_CHESTPLATE: 13.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  LEATHER_HELMET: 13.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  WOODEN_SWORD: 13.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  WOODEN_AXE: 13.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  WOODEN_HOE: 13.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  WOODEN_PICKAXE: 13.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  TRIDENT: 17.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  ELYTRA: 17.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  TURTLE_HELMET: 13.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  NETHERITE_AXE: 18.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  NETHERITE_PICKAXE: 18.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  NETHERITE_SHOVEL: 18.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  NETHERITE_HOE: 18.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  NETHERITE_SWORD: 18.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  NETHERITE_HELMET: 18.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  NETHERITE_CHESTPLATE: 18.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  NETHERITE_LEGGINGS: 18.0
  # elitemobs 通貨システムにおけるこの素材の価値を設定します。
  NETHERITE_BOOTS: 18.0
  # 特に定義されていないアイテムのデフォルトのマテリアル価値を設定します。
  defaultMaterialWorth: 1.0
```

</details>

---

## events.yml

`events.yml` には、イベントの設定オプションが含まれています。

_**注意：これらはほんの基本的なグローバル設定です。**_

`events` フォルダで特定のイベントをさらに変更できます。

<details>

<summary><b>テーブルを展開</b></summary>

```yml
# イベントが発生したワールドでのみイベントがブロードキャストされるように設定します。
Only broadcast event message in event worlds: false
# 時間指定イベントの最小クールダウン時間（分単位）を設定します。
actionEventMinimumCooldownMinutes: 240
# アクションイベントが発生するかどうかを設定します。
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#action-events
actionEventsEnabled: true
# 時間指定イベントが発生するかどうかを設定します。
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events
timedEventsEnabled: true
```

</details>

---

## ItemSettings.yml

`ItemSettings.yml` には、エリートアイテムのグローバル設定が含まれています。

<details>

<summary><b>テーブルを展開</b></summary>

```yml
# アイテムの伝承におけるバニラのエンチャントに付加される文字を設定します。
noItemDurabilityMessage: '&8[EliteMobs] $item &4が壊れています！修理するまで動作しません！'
# エリートモブの戦利品がドロップするかどうかを設定します。
# エリートコイン、カスタムアイテム、手続き型生成アイテムなど、すべてが含まれます！
# 推奨しません。MMORPGの進行を不可能にします。
doEliteMobsLoot: true
# 手続き型生成された戦利品が、アイテムの品質に基づいて異なる色を持つかどうかを設定します。
doMMORPGColorsForItems: true
# バナーやブロックのようなカスタムアイテムの配置が禁止されているかどうかを設定します。
# これは推奨されます。カスタムアイテムは配置されると破損し、回復できません。
preventCustomItemPlacement: true
# すべてのエリートモブアイテムの伝承の形式を設定します！
# 次のプレースホルダーが有効です。
# $itemLevel - アイテムレベルを表示します
# $prestigeLevel - プレステージレベルを表示します
# $weaponOrArmorStats - アイテムに応じて、エリートDPSまたはエリートアーマーステータスを表示します
# $soulbindInfo - アイテムがソウルバインドされている場合は、誰にソウルバインドされているかを表示します
# $itemSource - アイテムがどこから来たかを表示します。モブやショップなど
# $ifLore - アイテムにカスタム伝承がある場合にのみ行を表示します。カスタムアイテムにのみ適用されます
# $customLore - カスタム伝承全体を表示します。カスタムアイテムにのみ適用されます
# $ifEnchantments - アイテムにエンチャントがある場合にのみ行を表示します
# $enchantments - アイテムのエンチャントを表示します
# $eliteEnchantments - アイテムのエリートエンチャントを表示します
# $ifCustomEnchantments - アイテムにカスタムエンチャントがある場合にのみ行を表示します
# $customEnchantments - アイテムのカスタムエンチャントを表示します
# $ifPotionEffects - アイテムにポーション効果がある場合にのみ行を表示します
# $potionEffects - アイテムのポーション効果を表示します
# $loreResaleValue - アイテムの価値を表示します。表示されている場所に応じて購入価格または販売価格が表示される場合があります
# 重要：プレースホルダーのいくつかは、さらに下の設定でカスタマイズできます
itemLoreStructureV2:
- §7§m§l---------§7<§l装備情報§7>§m§l---------
- '§7アイテムレベル：§f$itemLevel §7プレステージ §6$prestigeLevel'
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
# 店舗購入用のショップソース伝承を設定します
shopSourceItemLores: '&7店舗で購入'
# ボスから略奪されたアイテムのショップソース伝承を設定します
mobSourceItemLores: '&7$mob から略奪'
# アイテムの価値の伝承を設定します
loreWorths: '&7価値 $worth $currencyName'
# アイテムの再販価値の伝承を設定します
loreResaleValues: '&7$resale $currencyName で販売'
# エリートモブからドロップするエリートアイテムの基本確率を設定します
flatDropRateV3: 0.2
# 地域ボスからドロップするエリートアイテムの基本確率を設定します
regionalBossNonUniqueDropRate: 0.05
# 地域ボスがバニラの戦利品をドロップできるかどうかを設定します
regionalBossesDropVanillaLoot: false
# ボスのレベルに基づいて、エリートアイテムのドロップ率がどれだけ増加するかを設定します。
# ボスのレベルにこの値を掛けて、基本確率に追加します。
# これを 0.0 より大きくすることは推奨されなくなりました！
levelIncreaseDropRateV2: 0.0
# 手続き型生成されたアイテムのドロップの重み付けされた確率を設定します。
# このシステムは重み付けされた確率を使用します！それが何であるか知らない場合は、Googleで調べてください。
proceduralItemDropWeight: 90.0
# 重み付けされたアイテムのドロップの相対確率を設定します。
# 重み付けされたアイテムは、お守りのように動的な重みを持たないカスタムアイテムです。
weighedItemDropWeight: 1.0
# 固定アイテムのドロップの相対確率を設定します。これらは、スケールしないカスタムアイテムです。
fixedItemDropWeight: 10.0
# 限定アイテムのドロップの相対確率を設定します。これらは特定のレベルまでスケールするカスタムアイテムです
limitedItemDropWeight: 3.0
# スケーラブルなアイテムのドロップの相対確率を設定します。これらは任意のレベルにスケールできるカスタムアイテムであり、プラグインで最も一般的です。
scalableItemDropWeight: 6.0
# モブのバニラの戦利品の乗数を、モブのレベルに基づいて設定します。
defaultLootMultiplier: 0.0
# デフォルトの戦利品乗数の最大レベルを設定します。
levelCapForDefaultLootMultiplier: 200
# ボスのバニラのMinecraft経験値ドロップ乗数を、ボスのレベルに基づいて設定します。
defaultExperienceMultiplier: 1.0
# EliteMobsによってドロップされる最大戦利品レベルを設定します。200のままにしておくことを強く推奨します。
maximumItemLevel: 200
# エリートエンチャントを使用するかどうかを設定します。
# エリートエンチャントは、エリートアイテムがバニラの制限を超えるエンチャントレベルを取得すると、バニラのエンチャントを置き換えます。
# 例：エリートソードがシャープネス10を持っていると仮定した場合、Minecraftの制限はレベル5であるため、シャープネス5とエリートシャープネス5になります。
# エリートシャープネスは、EliteMobsによってスポーンされたモブにのみ影響します。これは、PVPとバニラの戦闘がバランスを崩さないようにするためです。
useEliteEnchantments: true
# アイテムの伝承でエリートエンチャントに使用される表示名を設定します。
eliteEnchantmentLoreStrings: エリート
# EliteMobsがダメージ計算の有効な武器としてクワを見るかどうかを設定します。
useHoesAsWeapons: false
# EliteMobsが高品質のドロップアイテムの上に特別なパーティクルをスポーンするかどうかを設定します。
enableRareItemParticleEffects: true
# ポーション効果がヒットしたエンティティに適用されることを示すためにアイテムの伝承で使用される記号を設定します。
potionEffectOnHitTargetLore: '&4⚔☠'
# ポーション効果がヒットしたプレイヤーに適用されることを示すためにアイテムの伝承で使用される記号を設定します。
potionEffectOnHitSelfLore: '&9⚔🛡'
# ポーション効果がプレイヤーがそれを振るっている限り再適用されることを示すためにアイテムの伝承で使用される記号を設定します。
potionEffectContinuousLore: '&6⟲'
# アイテムの伝承におけるエリートエンチャントに付加される文字を設定します。
eliteEnchantmentLoreColor: '&9◇'
# アイテムの伝承におけるバニラのエンチャントに付加される文字を設定します。
vanillaEnchantmentLoreColor: '&7◇'
# アイテムの伝承におけるカスタムエンチャントに付加される文字を設定します。
customEnchantmentColor: '&3◇'
# アイテムの伝承におけるポーション効果に付加される文字を設定します。
potionEffectLoreColor: '&5◇'
# アイテムがソウルバインドされていない場合、アイテムに表示されるテキストを設定します。
noSoulbindLore: '&7ソウルバインドされていません！'
# エリートアイテムをバニラの手段でエンチャントできるかどうかを設定します。EliteMobsには独自のバランスを備えた独自のカスタムエンチャントシステムがあるため、これは推奨されません！
preventEliteItemEnchantment: true
# エリートアイテムをバニラの手段でエンチャント解除できるかどうかを設定します。
preventEliteItemDisenchantment: true
# アイテムをエンチャント解除しようとして許可されていない場合にプレイヤーに表示されるメッセージを設定します。
preventEliteItemDisenchantmentMessage: '&c[EliteMobs] エリートアイテムをエンチャント解除できません！'
# エリートアイテムをバニラの手段でダイヤモンドからネザライトにアップグレードできるかどうかを設定します。推奨されません！
preventEliteItemDiamondToNetheriteUpgrade: true
# エリートアイテムが死亡時にのみ耐久性を失うかどうかを設定します。
# これはEliteMobsの重要なシステムであり、高レベルの戦闘はほぼ不可能であるため、強く推奨されます！
eliteItemsDurabilityLossOnlyOnDeath: true
# エリートアイテムが死亡時に耐久性を失うように設定されている場合の耐久性損失乗数を設定します。
# 0.0から1.0の間の値は耐久性損失を減らし、1.0を超える値は耐久性損失を増やします。
# 例：0.5は耐久性損失の50％を扱い、2.0は耐久性損失の200％を扱います。
eliteItemsDurabilityLossMultiplier: 1.0
# アイテムのスクラップが成功したときに表示されるメッセージを設定します。
scrapSucceededMessageV2: '&8[EliteMobs] &2スクラップに $amount 回成功しました！'
# アイテムのスクラップが失敗したときに表示されるメッセージを設定します。
scrapFailedMessageV2: '&8[EliteMobs] &cスクラップに $amount 回失敗しました！'
# エリート戦利品をプレイヤーのインベントリに直接配置するかどうかを設定します。
putLootDirectlyIntoPlayerInventory: false
# プレイヤーが低レベルすぎるアイテムを略奪できなくなる前に、プレイヤーが持つことができる最大レベル差を設定します。
# これは、プレイヤーが着用している戦利品の平均レベルに基づいて計算されます。
# 例として、10に設定されていて、プレイヤーがレベル50のギアを持っている場合、レベル39のボスをファームすることはできません。
lootLevelDifferenceLockout: 10
# EliteMobsが、死亡時の耐久性損失システムを使用している場合に、エリートアイテムが破損するのを防ぐかどうかを設定します。
# プレイヤーはいずれにせよ耐久性がなくなったアイテムを使用することはできません。これは、高レベルだが耐久性の低いアイテムを誤って紛失するのを防ぐためです。
preventEliteItemsFromBreaking: true
# EliteMobsで手続き型に生成されたダイヤモンドギアをドロップできるボスの最小レベル（+7）を設定します。
# EliteMobsには手続き型に生成されたネザライトギアはなく、カスタム戦利品のみです。
minimumProcedurallyGeneratedDiamondLootLevelPlusSeven: 10
# /em simloot <level> <times> コマンドで戦利品を正常にロールした場合にチャットに表示されるメッセージを設定します。
simlootMessageSuccess: '&8[EliteMobs] &2戦利品をロールして $itemName &2 を取得しました！'
# /em simloot <level> <times> コマンドで戦利品をロールできなかった場合にチャットに表示されるメッセージを設定します。
simlootMessageFailure: '&8[EliteMobs] &c戦利品をロールしましたが、何も得られませんでした！'
# エリート戦利品がインベントリに直接入ったときにプレイヤーが受け取るメッセージを設定します。
directDropCustomLootMessage: '&8[EliteMobs] &2$itemName &2 を取得しました！'
# バニラの戦利品がインベントリに直接入ったときにプレイヤーが受け取るメッセージを設定します。
directDropMinecraftLootMessage: '&8[EliteMobs] &a$itemName &a を取得しました！'
# エリートコインがインベントリに直接入ったときにプレイヤーが受け取るメッセージを設定します。
directDropCoinMessage: '&8[EliteMobs] &a&2$amount $currencyName &a を取得しました！'
# EliteMobsがバニラのMinecraft属性を非表示にするかどうかを設定します。
hideItemAttributes: true
# エリートアイテムの武器固有の伝承エントリを設定します。$EDPS プレースホルダーは、武器のエリートDPS（毎秒ダメージ）に置き換えられます。
weaponEntry: '&7エリートDPS：&2$EDPS'
# エリートアイテムの防具固有の伝承エントリを設定します。$EDEF プレースホルダーは、武器のエリートDEF（防御力）に置き換えられます。
armorEntry: '&7エリートアーマー：&2$EDEF'
# プレイヤーがボスを倒したが、ギアレベルがボスのレベルと異なりすぎてコインを入手できない場合に送信されるメッセージ
levelRangeTooDifferent: '&8EM] &4あなたのギアはレベル $playerLevel で、ボスはレベル $bossLevel です。レベル差が大きすぎてコインを獲得できません！'
```

</details>

---

## MobCombatSettings.yml

`MobCombatSettings.yml` には、カスタム戦闘システムに関連するすべての設定オプションと、一般的にエリートモブの動作方法に関連するほとんどの設定オプションが含まれています。

<details>

<summary><b>テーブルを展開</b></summary>

```yml
# 自然にスポーンするエリートがスポーンするかどうかを設定します。注：ゾンビキングのようなイベントモブは自然にスポーンするエリートではありません！イベントボスを無効にする場合は、イベントを無効にする必要があります。
doNaturalEliteMobSpawning: true
# モブスポーナーからスポーンしたスポーンをエリートに変換できるかどうかを設定します。推奨しません！
doSpawnersSpawnEliteMobs: false
# 自然にスポーンするモブのうち、エリートモブに変換される割合を設定します。
eliteMobsSpawnPercentage: 0.05
# スーパーモブスタックをスキャンするスーパーモブ範囲を設定します
superMobStackRange: 15
# エリートがスポーンできる最大レベルを設定します。
# 注：エリートモブレベルは、プレイヤーが着用している鎧と武器に基づいており、鎧はレベル200までしかスケールしません。
naturalEliteMobsLevelCap: 250
# エリートがレベルに基づいて鎧を着用するかどうかを設定します。これは視覚的な目的のみであり、戦闘には影響しません。
doElitesWearArmor: true
# エリートがレベルに基づいてヘルメットを着用するかどうかを設定します。これにより、日中に簡単に燃え尽きるのを防ぐことができます。
doElitesWearHelmets: true
# エリートが周囲に視覚的なトレイルを持ち、プレイヤーが持っているものを警告するかどうかを設定します。
doNaturalEliteMobVisualEffects: true
# スポーナーからスポーンしたエリートが視覚効果を行うかどうかを設定します。
doSpawnerEliteMobVisualEffects: false
# 一部のパワーがパワーの警告フェーズを実行するかどうかを設定します。警告フェーズは通常、パワーを回避できることを意味し、ビジュアルによってプレイヤーは回避する場所を知ることができるため、これは非常に重要です。
doPowerBuildupVisualEffects: true
# プレイヤーがエリートから死亡した場合にカスタム死亡メッセージを使用するかどうかを設定します。
doCustomEliteMobsDeathMessages: true
# EliteMobsがエリートのヘルスインジケーターを表示するかどうかを設定します。
doDisplayMobHealthOnHit: true
# EliteMobsがエリートへのダメージインジケーターを表示するかどうかを設定します。
doDisplayMobDamageOnHit: true
# エリートのレベルがスポーンからの距離に基づいて増加するかどうかを設定します。
# これは通常のレベルに追加される値です。つまり、プレイヤーがスポーン近くでレベル100のギアを着用しており、ボスがスポーンからの距離で+1レベルである場合、ボスはレベル101でスポーンします。
# このオプションは、サーバーにランダムTPシステムがある場合は特に、一般的に推奨されません。
doIncreaseEliteMobLevelBasedOnSpawnDistance: false
# 距離ベースのレベル増加のレベル増分の間の距離を設定します。
distanceBetweenIncrements: 100.0
# 距離ベースのレベル増加の各距離増分で増加するレベル数を設定します。
levelIncreaseAtIncrements: 1.0
# エリートのパワーが戦闘に入るまで非表示になるかどうかを設定します。これはパフォーマンス上の理由で推奨されます。
hideEliteMobPowersUntilAggro: true
# 正規化されたダメージシステム（地域ダンジョンボス）を使用するものを除き、EliteMobsによってスポーンされたすべてのボスに与えられるダメージの乗数を設定します。値が大きいほど与えるダメージが増加し、ボスを倒しやすくなります。
# 2.0 = 200%, 0.5 = 50%
damageToEliteMobMultiplierV2: 1.0
# エリートによるプレイヤーへのダメージの乗数を設定します。正規化されたダメージシステム（地域ダンジョンボス）を使用するものを除き、値が大きいほどボスが与えるダメージ量が増加し、ボスがより強力になります。
# 2.0 = 200%, 0.5 = 50%
damageToPlayerMultiplierV2: 1.0
# 特別なボスを追跡できるかどうかを設定します。
showCustomBossLocation: true
# ボスの場所を追跡するためにプレイヤーに送信されるメッセージを設定します。
bossLocationMessage: '&7[EM] &2[クリックして追跡！]'
# エリートが死亡したときに実行されるコマンドを設定します。有効なプレースホルダーは次のとおりです。
# ボスのレベルの $level
# ボスの名前の $name
# $players は、キルに参加した各プレイヤーに対してコマンドを実行します。たとえば、BobとSteveがボスを倒した場合、「broadcast $players killed the boss!」は「bob killed the boss」と「steve killed the boss!」を実行します。
commandsOnEliteMobDeath: []
```

# 大規模なボス戦に参加したプレイヤーに送信されるメッセージを設定します。

bossKillParticipationMessage: '&eあなたのダメージ：&2$playerDamage'

# ボスが戦闘から離脱したときに体力を回復するかどうかを設定します。強く推奨します。
regenerateCustomBossHealthOnCombatEnd: true
# 現在別のワールドにいるボスを追跡しようとしているプレイヤーに送信されるメッセージを設定します。
defaultOtherWorldBossLocationMessage: '$name: 別のワールドにいます！'

# プレイヤーがボスに弱い攻撃を与えた場合にダメージインジケーターに追加されるプレフィックスを設定します。
weakTextColor: '&9'

# プレイヤーがボスに強い攻撃を与えた場合にダメージインジケーターに追加されるプレフィックスを設定します。
resistTextColor: '&c'

# プレイヤーがボスに弱い攻撃を与えた場合に表示されるメッセージを設定します。

weakText: '&9&l弱い！'

# プレイヤーがボスに強い攻撃を与えた場合に表示されるメッセージを設定します。

resistText: '&c&l抵抗！'

# ボスが攻撃に対して弱いことを示すためにビジュアルを使用するかどうかを設定します。
doWeakEffect: true

# ボスが攻撃に対して強いことを示すためにビジュアルを使用するかどうかを設定します。
doResistEffect: true

# 正規化されたダメージシステム（地域ダンジョンボス）を使用するボスに与えるダメージの乗数を設定します。値が大きいほど与えるダメージが増加し、ボスを倒しやすくなります。

# 2.0 = 200%, 0.5 = 50%
damageToEliteMobMultiplier: 1.0

# 正規化されたダメージシステム（地域ダンジョンボス）を使用するボスによるプレイヤーへのダメージの乗数を設定します。値が大きいほどボスが与えるダメージ量が増加し、ボスがより強力になります。

# 2.0 = 200%, 0.5 = 50%
damageToPlayerMultiplier: 1.0

# 正規化されたダメージ（通常は地域ボス）を使用するカスタムボスのベースラインダメージを設定します。
normalizedRegionalBossBaselineDamageV2: 3.0

# 正規化された体力（通常は地域ボス）を使用するカスタムボスのベースライン体力を設定します。
normalizedRegionalBossBaselineHealthV3: 4.0
# 地域ボスが正規化された戦闘システムを使用するかどうかを設定します。

# これは非常に強く推奨されており、事前に作成されたコンテンツは変更すると適切にバランスが取れなくなります。
normalizeRegionalBosses: true

# ボスが戦闘から離脱して回復するときに表示されるメッセージを設定します。

fullHealMessage: '&2フル回復！'

# ボスが強く、弱い攻撃に適用される乗数を設定します。
strengthAndWeaknessDamageMultipliers: 2.0

# プレイヤーの耐性ポーション効果によるダメージ軽減に適用される乗数を設定します。
resistanceDamageMultiplier: 1.0

# プレイヤーが近接攻撃（パワーを除く）に対してシールドを掲げている場合のダメージ軽減に適用される乗数を設定します。
blockingDamageReduction: 0.8
```

</details>

---

## ProceduralItemGenerationSettings.yml

`ProceduralItemGenerationSettings.yml` には、手続き型生成されたアイテムを構成するためのすべての設定オプションが含まれています。

<details>

<summary><b>テーブルを展開</b></summary>

```yml
dropProcedurallyGeneratedItems: true
customEnchantmentsChance: 0.5
materialNames:
  swordName: 剣
  bowName: 弓
  pickaxe: ツルハシ
  spade: スコップ
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

`ValidWorlds.yml` には、EliteMobs が検出したワールドのリストと、それらのワールドで EliteMobs 機能をカスタマイズするためのオプションが含まれています。

<details>

<summary><b>テーブルを展開</b></summary>

```yml
# ゾーンベースのワールドのリストを設定します。
# ゾーンベースのゲームモードは古く、まもなく削除されます！
zoneBasedWorlds: []
# ナイトメアモードのワールドのリストを設定します。
# ナイトメアモードのワールドは、昼が短く、プレイヤーが眠ることができないゲームモードです。
# ナイトメアワールドでは、エリートのスポーン数も増えます。
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

```yml
# アリーナを開始するのに十分なプレイヤーが存在しない場合に表示されるメッセージ。
notEnoughPlayersMessage: '&8[EliteMobs] &cマッチを開始するには、少なくとも $amount が必要です！'
# アリーナが開始されるときに表示されるタイトル。
startingMessage: '&2開始！'
# アリーナが開始されるときに表示されるサブタイトル。
startingSubtitle: '&2$count で...'
# アリーナがいっぱいのときに表示されるメッセージ。
arenaFullMessage: '&4[EliteMobs] &cアリーナはいっぱいです！終了を待つ間、代わりに観戦できます！'
# プレイヤーがアクティブなアリーナに参加しようとしたときに表示されるメッセージ。
arenasOngoingMessage: '&4[EliteMobs] &c現在アリーナに参加できません - マッチが現在発生しています！終了を待つ間、代わりに観戦できます！'
# プレイヤーとして参加した後、プレイヤーにアリーナを開始する方法を思い出させるメッセージ。
instanceStartHintMessage: '&2[EliteMobs] &a/em start &aを実行してインスタンスを開始できます'
# プレイヤーにアリーナを離れる方法を思い出させるメッセージ。
instanceQuitHintMessage: '&4[EliteMobs] &c/em quit &4を実行してインスタンスを離れることができます'
# プレイヤーがアリーナに参加したときに表示されるメッセージ。
arenaJoinPlayerMessage: "&2[EliteMobs] &a/em start &2 を実行してアリーナを開始できます。&a少なくとも &2$count &a人のプレイヤーがいる場合！\n&c/em quit &4を実行してアリーナを離れることができます"
# 観戦者として参加した後、プレイヤーにアリーナを離れる方法を思い出させるメッセージ。
arenaJoinSpectatorMessage: '&2[EliteMobs] &a/em quit &2 を使用していつでもアリーナを離れることができます'
# ウェーブが開始されるときに表示されるタイトルメッセージ。
waveTitle: '&aウェーブ &2$wave'
# ウェーブが開始されるときに表示されるサブタイトルメッセージ。
waveSubtitle: ''
# アリーナが完了したときに表示されるタイトル。
victoryTitle: '&2勝利！'
# アリーナが完了したときに表示されるサブタイトル。
victorySubtitle: '&a$wave &2ウェーブを完了しました！'
# プレイヤーがアリーナに失敗したときに表示されるタイトル。
defeatTitle: '&4敗北！'
# プレイヤーがアリーナに失敗したときに表示されるサブタイトル。
defeatSubtitle: '&cウェーブ &4$wave&c に到達しました！'
# プレイヤーがアリーナを打ち負かしたときにブロードキャストされるメッセージ。
victoryBroadcast: アリーナ $arenaName が $players によって征服されました！
# プレイヤーがアリーナに参加したときに表示されるタイトル。
joinPlayerTitle: '&a/em start &2 で開始！'
# プレイヤーがアリーナに参加したときに表示されるサブタイトル。
joinPlayerSubtitle: '&c/em quit &4 で離脱！'
# 観戦者がアリーナに参加したときに表示されるタイトル。
joinSpectatorTitle: '&a観戦中！'
# 観戦者がアリーナに参加したときに表示されるサブタイトル。
joinSpectatorSubtitle: '&c/em quit &4 で離脱！'
# アリーナに入る権限がない場合にプレイヤーに送信されるメッセージを設定します。
noArenaPermissionMessage: '[EliteMobs] このアリーナに入る権限がありません！'
```

</details>

---

## Database.yml

`Database.yml` には、EM がデータベースを処理する方法に関する設定が含まれています。

<details>

<summary><b>テーブルを展開</b></summary>

```yml
# MySQL を使用するかどうかを設定します。デフォルトでは、EliteMobs は SQLite を使用します。MySQL を使用する場合は、有効な MySQL 構成が必要です。
useMySQL: false
# MySQL データベースのホスト
mysqlHost: localhost
# MySQL データベースのポート
mysqlPort: '3306'
# データベースの名前
mysqlDatabaseName: elitemobs
# MySQL のユーザー名
mysqlUsername: ここにあなたのmysqlのユーザー名を入力してください
# MySQLデータベースのパスワード
mysqlPassword: ここにあなたのmysqlのパスワードを入力してください
# SSL を使用するかどうか
useSSL: true
```

</details>

---

## dungeons.yml

`dungeons.yml` には、ダンジョンに表示されるメッセージを調整できる設定や、適用された効果のダメージ乗数などのその他の設定が含まれています。

<details>

<summary><b>テーブルを展開</b></summary>

```yml
# ダンジョンでの毒ダメージのダメージ乗数を設定します
# デフォルトではダメージがダンジョンの設計上少し高すぎるため、これはバランスを取る上で重要です。
poisonDamageMultiplier: 0.5
# ダンジョンでの火ダメージのダメージ乗数を設定します
# デフォルトではダメージがダンジョンの設計上少し高すぎるため、これはバランスを取る上で重要です。
fireDamageMultiplier: 0.5
# ダンジョンでのウィザーダメージのダメージ乗数を設定します
# デフォルトではダメージがダンジョンの設計上少し高すぎるため、これはバランスを取る上で重要です。
witherDamageMultiplier: 0.5
# ダンジョンでのPvPが許可されるかどうかを設定します
friendlyFireInDungeons: false
# ダンジョン内の復活バナーの上に表示されるテキストを設定します
dungeonRezInstructions: '&aパンチで復活！'
# ダンジョンでプレイヤーが残りのライフ数を表示するテキストを設定します！プレースホルダー：
# $amount - 残りのライフ数
dungeonLivesLeftText: '&c残りライフ：$amount！'
# プレイヤーとしてダンジョンに参加するためのテキストを設定します！プレースホルダー：
# $dungeonName - ダンジョンの名前
joinDungeonAsPlayerText: '&fプレイヤーとして $dungeonName に参加！'
# 観戦者としてダンジョンに参加するためのテキストを設定します！プレースホルダー：
# $dungeonName - ダンジョンの名前
joinDungeonAsSpectatorText: '&f観戦者として $dungeonName に参加！'
# インスタンス化されたダンジョンメニューのアイテムの説明に表示されるタイトルを設定します
# $difficulty はダンジョンの構成ファイルでの難易度の名前のプレースホルダーです
instancedDungeonTitle: $difficulty 難易度ダンジョンを開始！
# インスタンス化されたダンジョンメニューのアイテムの説明に表示される説明を設定します
# $dungeonName はダンジョンの構成ファイルでのダンジョン名のプレースホルダーです
instancedDungeonDescription:
- '&fダンジョンの新しいインスタンスを作成します'
- $dungeonName &f自分と
- '&f何人かの友達のために！'
# インスタンス化されたコンテンツで観戦が可能になるかどうかを設定します。
allowSpectatorsInInstancedContent: true
# インスタンス化されたダンジョンが完了したときに表示されるメッセージを設定します
instancedDungeonCompleteMessage: '[EliteMobs] ダンジョンが完了しました！2分後に自爆します！'
# インスタンス化されたダンジョンが終了するときに表示されるメッセージを設定します
instancedDungeonClosingInstanceMessage: '[EliteMobs] インスタンスを閉じます！'
```

</details>

---

## Quests.yml

`Quests.yml` には、クエストと表示されるメッセージの設定が含まれています。

<details>

<summary><b>テーブルを展開</b></summary>

```yml
# クエストを完了するために、クエストの依頼者に返却する必要があるかどうかを設定します。
requireQuestTurnIn: true
# クエストが受け入れられたときに送信されるメッセージを設定します。
questJoinMessage: '&aクエスト $questName &aを受け入れました！'
# クエストが破棄されたときに送信されるメッセージを設定します。
questLeaveMessage: '&cクエスト $questName &c を破棄しました！'
# クエストが完了したときに送信されるメッセージを設定します。
questCompleteMessage: '&2クエスト $questName &2 を完了しました！'
# アクティブなクエストがないときにプレイヤーがクエストを破棄しようとしたときに送信されるメッセージを設定します。
leaveWhenNoActiveQuestsExist: '&c現在アクティブなクエストはありません！'
# プレイヤーがクエストを離れようとしたときに送信される確認メッセージを設定します。
questLeaveConfirmationMessage: '&c現在のクエストを破棄してもよろしいですか？選択を確定するには &a/em confirm &c を実行してください！'
# クエストに関連する一部のメッセージがチャットメッセージではなくタイトルを使用するかどうかを設定します。
useQuestAcceptTitles: true
# プレイヤーがクエストを開始したときに送信されるタイトルを設定します。
questStartTitle: '&aクエストを受け付けました！'
# プレイヤーがクエストを開始したときに送信されるサブタイトルを設定します。
questStartSubtitle: $questName
# プレイヤーがクエストを完了したときにタイトルが送信されるかどうかを設定します。
useQuestCompleteTitles: true
# プレイヤーがクエストを完了したときに送信されるタイトルを設定します。
questCompleteTitle: '&2クエストが完了しました！'
# プレイヤーがクエストを完了したときに送信されるサブタイトルを設定します。
questCompleteSubtitle: $questName
# プレイヤーがクエストを離れたときにタイトルが送信されるかどうかを設定します。
useQuestLeaveTitles: true
# プレイヤーがクエストを離れたときに送信されるタイトルを設定します。
questLeaveTitle: '&cクエストを破棄しました！'
# プレイヤーがクエストを離れたときに送信されるサブタイトルを設定します。
questLeaveSubtitle: $questName
# クエスト目標の進行状況を報告するメッセージがチャットで送信されるかどうかを設定します。
doQuestChatProgression: true
# 完了した目標のカラーコードを設定します。
ongoingQuestColorCode: '&2'
# キルクエストの進行状況メッセージの書式設定を設定します。
killQuestChatProgressionMessage: '&8[EliteMobs]&c➤$name を倒す：$color$current&0/$color$target'
# フェッチクエストの進行状況メッセージの書式設定を設定します。
fetchQuestChatProgressionMessage: '&8[EliteMobs]&c➤$name を取得する：$color$current&0/$color$target'
# ダイアログクエストの進行状況メッセージの書式設定を設定します。
dialogQuestChatProgressionMessage: '&8[EliteMobs]&c➤$name と話す：$color$current&0/$color$target'
# プレイヤーが持つことができる受け入れられたクエストの最大数を設定します。
maximumActiveQuests: 10
# アクティブなクエストの最大数を超えるクエストを受け入れようとしたときにプレイヤーに送信されるメッセージを設定します。
questCapMessage: '&8[EliteMobs] &cアクティブなクエストの最大数（10）に達しました！ &4より多くのクエストを取得したい場合は、少なくとも1つのアクティブなクエストを破棄または完了してください！'
# クエストにスコアボードメッセージを使用するかどうかを設定します。
useQuestScoreboards: true
# キルクエストのスコアボード進行状況メッセージの書式設定を設定します。
killQuestScoreboardProgressionMessage: '&c➤$name を倒す：$color$current&0/$color$target'
# フェッチクエストのスコアボード進行状況メッセージの書式設定を設定します。
fetchQuestScoreboardProgressionMessage: '&c➤$name を取得する：$color$current&0/$color$target'
# ダイアログクエストのスコアボード進行状況メッセージの書式設定を設定します。
dialogQuestScoreboardProgressionMessage: '&c➤$name と話す：$color$current&0/$color$target'
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
# クエストの追跡を有効にするためにプレイヤーに送信されるメッセージを設定します。
chatTrackMessage: '&8[EliteMobs]&2 ここをクリックしてクエストを追跡してください！'
# クエスト追跡メッセージのホバーメッセージを設定します。
chatTrackHover: '&2クリックして追跡！'
# 追跡メッセージをクリックしたときに送信されるコマンドを設定します。これは変更しないでください。
chatTrackCommand: /elitemobs quest track $questID
# クエストの追跡を有効にしたときにプレイヤーに送信されるメッセージを設定します。
chatTrackingMessage: '&8[EliteMobs]&9 クエストを追跡しています！'
# クエスト追跡が有効になったメッセージのホバーメッセージを設定します。
chatTrackingHover: '&2クリックして追跡/追跡解除！/em -> 別のクエストを追跡するためのクエスト！'
# クエスト追跡アクティベーションメッセージをクリックしたときに送信されるコマンドを設定します。これは変更しないでください。
chatTrackingCommand: /elitemobs quest track $questID
# クエストが受け入れられたときに自動的に追跡されるかどうかを設定します。
autoTrackQuestsOnAccept: true
# クエストの目的地が見つからなかったときに表示されるメッセージを設定します。
noQuestDestinationFound: '[EM] クエストの目的地が見つかりません！'
# クエストのターゲットが別のワールドにいるときに表示されるメッセージを設定します。
questDestinationInOtherWorld: '[EM] ワールド $world に移動してください！'
# すでに完了しているクエストを受け入れようとしたときにプレイヤーに送信されるメッセージを設定します。
questAlreadyCompletedMessage: '&8[EliteMobs] &cこのクエストはすでに完了しています！'
# 権限のないクエストを受け入れようとしたときにプレイヤーに送信されるメッセージを設定します。
questPrerequisitesMissingMessage: '&8[EliteMobs] &cこのNPCにはまだ受け付けられないクエストがあります！'
# アクティブ化された適切なギルドランクを持っていないクエストを取得しようとしたときにプレイヤーに送信されるメッセージを設定します。
lowRankDynamicQuestWarning: '&8[EliteMobs] &c現在のギルドランクではこれらのクエストを受け入れることはできません！これらのクエストを受け入れるには、ギルドランクを上げてください。'
# クエストのターンインメッセージの書式設定を設定します。
questTurnInObjective: '&a2$npcName と話す'
# クエストのインベントリベースのメニューが改行するまでの最大文字数を設定します。
horizontalCharacterLimitBedrockMenu: 30
# エントリを続行するために別のアイテムを作成する前に、クエストのインベントリベースのメニューのアイテムエントリあたりの最大文字数を設定します。
itemEntryCharacterLimitBedrockMenu: 300
```

</details>

---

## resource_pack_config.yml

`resource_pack_config.yml` には、EliteMobs リソースパックに関連する設定が含まれています。

<details>

<summary><b>テーブルを展開</b></summary>

```yml
eliteMobsResourcePackEnabled: false
forceResourcePack: false
resourcePackPrompt: '[EliteMobs] リソースパックの使用を強く推奨します！'
resourcePackLink: https://www.magmaguy.com/downloads/elitemobs_resource_pack.zip
```

</details>

---

## Sounds.yml

`Sounds.yml` には、特定のエリートモブの相互作用が実行されたときに再生する必要があるサウンドを定義する設定が含まれています。サウンドファイルはリソースパックに保存されます。

<details>

<summary><b>テーブルを展開</b></summary>

```yml
# トレジャーチェストが開くときに再生されるサウンドを設定します
treasureChestOpenSound: elitemobs:treasure_chest.open
# プレイヤーがギルドでランクアップしたときに再生されるサウンドを設定します
guildRankUpSound: elitemobs:guild.rankup
# プレイヤーがギルドでプレステージしたときに再生されるサウンドを設定します
guildPrestigeSound: elitemobs:guild.prestige
# プレイヤーがクエストを進めたときに再生されるサウンドを設定します
questProgressionSound: elitemobs:quest.progression
# プレイヤーがクエストを完了したときに再生されるサウンドを設定します
questCompleteSound: elitemobs:quest.completion
# プレイヤーがクエストを破棄したときに再生されるサウンドを設定します
questAbandonSound: elitemobs:quest.abandon
# プレイヤーがクエストを受け入れたときに再生されるサウンドを設定します
questAcceptSound: elitemobs:quest.accept
```

</details>

---

## Wormholes.yml

`Wormholes.yml` には、EliteMobs ワームホールテレポートの設定が含まれています。

<details>

<summary><b>テーブルを展開</b></summary>

```yml
# インストールされていないダンジョンにテレポートが使用された場合に表示されるメッセージを設定します。
dungeonNotInstalledMessage: '&8[EliteMobs] &cダンジョン $dungeonID &cはインストールされていません！このテレポートは機能しません。'
# インストールされていないダンジョンにワームホールが使用された場合に表示されるメッセージを設定します。
defaultPortalMissingMessage: '&8[EliteMobs] &cこのポータルはどこにもつながっていないようです！'
# ワームホールのパーティクル削減モードを使用するかどうかを設定します。Bedrockクライアントを許可している場合は特に推奨されます。
reducedParticlesMode: true
# ワームホールがパーティクルをまったく使用しないかどうかを設定します。推奨しませんが、非常に悪いBedrockクライアントには必要になる可能性があります。
noParticlesMode: false
# プレイヤーがワームホールを使用しようとしたが、それを使用するのに十分な通貨を持っていない場合に送信されるメッセージを設定します。
insufficientCurrencyForWormholeMessage: '&8[EliteMobs] &c通貨が不足しています！このワームホールを使用するには $amount が必要です！'
```

</details>
