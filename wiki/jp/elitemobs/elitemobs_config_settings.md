# EliteMobs Configのデフォルト値

**EliteMobsには、推奨されるデフォルト値がデフォルトでインストールされています。ランダムに変更すると、全体的なエクスペリエンスが悪化する可能性があります。**

_**EliteMobsは、推奨されるデフォルト設定ですべてのユーザーに提供されています。ランダムに変更を加えてからサポートをリクエストすると、設定ファイルをリセットするように指示される可能性が非常に高くなります。プラグインの変更は、単なる推測ではなく、プレイテストに基づいて行う必要があります。**_

## はじめに

EliteMobsは現在、カスタマイズの需要が高いため、非常に多くの設定オプションを提供しています。このwikiページを簡潔にするために、デフォルトの構成のみが表示されます。

特定の設定について詳しく知りたい場合は、設定ファイルを参照してコメントを確認してください。

---

## config.yml

`config.yml` には、作成時に他の場所にうまく収まらなかったランダムな設定が主に含まれています。バージョン間で変更される可能性が最も高い設定ファイルです。

<div align="left">

<details>

<summary><b>表を展開</b></summary>

```yml
# EliteMobsで使用される言語ファイルを設定します
# 手動で変更しないでください！ '/em language <languagefile>'コマンドでインストールすることを意図しています
language: english
# エリートモブによってスポーンされたエリートとボスが常にネームタグを表示するかどうかを設定します。
# 推奨されません！
alwaysShowEliteMobNameTags: false
# マージできるようになる前に、近接している必要があるパッシブモブの量を設定します。
# これを0に設定しないでください！
superMobStackAmount: 50
# エリートが爆発でパッシブモブにダメージを与えないようにします。
preventEliteCreeperDamageToPassiveMobs: true
# EliteMobsが権限の欠如についてプレイヤーに警告するためにタイトルを使用するかどうかを設定します
useTitlesForMissingPermissionMessages: true
# EliteMobsが名前付きモブをエリートに変換するのを防ぐかどうかを設定します。
# 他のプラグインとの互換性のために特に重要です。
preventEliteMobConversionOfNamedMobs: true
# EliteMobsがカスタムスポーン理由を持つモブを変換するかどうかを設定します。
# 特定のボスプレグインを実行すると、設定の値に関係なく、これが自動的にtrueに設定されます。
enableHighCompatibilityMode: false
# ナイトメアゲームモードのエリートスポーンボーナスを設定します
nightmareWorldSpawnBonus: 0.5
# 集中化された/emコマンドがプラグインのメインステータスページを開くかどうかを設定します。
# 強くお勧めします！
emLeadsToStatusMenu: true
# /em walletなどの特定のコマンドを実行すると、その情報が集中化されている/emメニューに移動するかどうかを設定します。
otherCommandsLeadToEMStatusMenu: true
# セットアップが完了したかどうかを設定します。
# この値を手動で設定しないでください。ゲーム内コマンドで変更することを意図しています。
setupDoneV3: true
# エリートが、ゾンビの増援機能などのバニラの増援のスポーンを防ぐかどうかを設定します。
preventVanillaReinforcementsForEliteEntities: true
# EliteMobsのサーバーのデフォルトのスポーン場所を設定します。 /em spawntpはこの場所に移動します。
defaultSpawnLocation: world,16.0,76.0,80.0,0.0,0.0
# EliteMobsがエリートによって爆破されたブロックを再生するかどうかを設定します。
doExplosionRegen: true
# 爆発の再生が、チェストなどのコンテナの内容も再生するかどうかを設定します。
# falseにすると、エリートの爆発でコンテナが爆発しなくなります。
doRegenerateContainers: true
defaultTransitiveBlockLimiter: 500
# /emメニューが、基盤岩と互換性のあるインベントリベースのメニュースタイルのみを使用するかどうかを設定します。
# プレイヤーは、/em altコマンドを実行して/emメニューのスタイルを切り替えることができます
onlyUseBedrockMenus: false
# ブックメニューページの1行あたりの文字制限を設定します。
# クエストなどのブックメニューでテキストが途切れる場合は、この量を減らしてください
characterLimitForBookMenuPagesV2: 170
# 空のメニュースペースがガラス板で埋められるかどうかを設定します。
# EliteMobsリソースパックを使用している場合は、推奨されません。
useGlassToFillMenuEmptySpace: false
# EliteMobsリソースパックのフォーマットにUnicodeを使用するかどうかを設定します。
# 手動で設定しないでください。リソースパックのインストール時に自動的に設定されます。
# EliteMobsリソースパックをマージする必要があり、スペースが機能しない可能性がある場合は、手動で設定してください。
menuUnicodeFormatting: false
# 保留中のコマンドなしで '/em confirm' を実行した場合にプレイヤーに送信されるメッセージを設定します。
noPendingCommands: '&c現在、保留中のコマンドはありません！'
# 追跡メッセージを送信するボスの追跡メッセージを設定します。
trackMessage: $name を追跡する
# ギルドランクを超えるレベル要件で宝箱を開くプレイヤーに送信されるメッセージを設定します。
chestLowRankMessage: '&7[EM] &cこのチェストを開くには、ギルドランクが少なくとも $rank &cである必要があります！'
# 既に開いた宝箱を再度開こうとしたプレイヤーに送信されるメッセージを設定します。
chestCooldownMessage: '&7[EM] &c最近このチェストを開いたばかりです！ $time 待ってください！'
# /emコマンドに問題があるプレイヤーに/em altコマンドを推奨するメッセージを設定します
dismissEMMessage: '&8[EliteMobs] &2/elitemobs &fメニューが機能しませんか？ &2/elitemobs
  alt &fを試して、メニューの代替バージョンを表示してください！ &cこのメッセージを二度と表示したくないですか？ &4/em dismiss'
# プレイヤーが/em altコマンドを実行したときに表示されるメッセージを設定します。
switchEMStyleMessage: '&8[EliteMobs] &2/elitemobs &fメニュースタイルが変更されました！ チェックしてください！'
# プレイヤーが宝箱を開いたが何も得られなかったときに表示されるメッセージを設定します
treasureChestNoDropMessage: '&8[EliteMobs] &c何も手に入りませんでした！ 次回頑張ってください！'
# プレイヤーが有効期限切れのボスを追跡しようとしたときに表示されるメッセージを設定します
bossAlreadyGoneMessage: '&c[EliteMobs] 申し訳ありませんが、このボスはすでに消えています！'
```

</details>

---

## AdventurersGuild.yml

`AdventurersGuild.yml` には、冒険者ギルドハブ（ワールド）と冒険者ギルドのランクアップシステムに関連する設定が含まれています。

<details>

<summary><b>表を展開</b></summary>

```yml
# 名声報酬としてギルドランクのロックを解除するときに、EliteMobsが最大ヘルスを追加するかどうかを設定します
Add max health when unlocking higher guild ranks: true
# 名声報酬としてギルドランクのロックを解除するときに、EliteMobsがクリティカルストライクチャンスを追加するかどうかを設定します
Add critical chance when unlocking higher guild ranks: true
# 名声報酬としてギルドランクのロックを解除するときに、EliteMobsが回避チャンスを追加するかどうかを設定します
Add dodge chance when unlocking higher guild ranks: true
# ユーザーコマンドが冒険者ギルドハブに再ルーティングされるかどうかを設定します。ゲームプレイの没入感とチュートリアル目的で強くお勧めします。
userCommandsTeleportToAdventurersGuild: true
# 冒険者ギルドのゲーム内表示名を設定します
adventurersGuildMenuName: '&6&l冒険者ハブ'
Prestige 0 rank 0: '&8平民 - エリートを無効にします！'
Prestige 0 rank 0 short placeholder: '&6&l✧&e0'
...
# プレイヤーの戦利品がギルドレベルによって制限されるかどうかを設定します。
# これはEliteMobsの非常に重要な部分であり、強くお勧めします。
limitLootBasedOnGuildTier: true
# ギルドレベルが低いため、戦利品が弱体化された場合にプレイヤーに送信されるメッセージを設定します。
lootLimiterMessage: '&7[EM] &cより良いアイテムを略奪するには、/agを介して次のギルドランクのロックを解除する必要があります！'
# ギルドランクアップ時に実行されるコマンドを設定します。プレースホルダーは次のとおりです。
# $prestigerank - 名声ランクを出力します
# $activerank - 現在アクティブなランクを出力します
# $player - プレイヤー名を出力します
onRankUpCommand: []
# 名声ランクアップ時に実行されるコマンドを設定します。
# $prestigerank - 名声ランクを出力します
# $activerank - 現在アクティブなランクを出力します
# $player - プレイヤー名を出力します
onPrestigeUpCommand: []
# 最初の回避ボーナスの名声レベルを設定します。
dodgePrestige3Bonus: 3.0
# 2番目の回避ボーナスの名声レベルを設定します。
dodgePrestige6Bonus: 6.0
# 3番目の回避ボーナスの名声レベルを設定します。
dodgePrestige9Bonus: 10.0
# 最初のクリティカルヒットボーナスの名声レベルを設定します。
critPrestige2Bonus: 3.0
# 2番目のクリティカルヒットボーナスの名声レベルを設定します。
critPrestige5Bonus: 6.0
# 3番目のクリティカルヒットボーナスの名声レベルを設定します。
critPrestige8Bonus: 10.0
# 最初の最大ヘルスボーナスの名声レベルを設定します。
healthPrestige1Bonus: 2.0
# 2番目の最大ヘルスボーナスの名声レベルを設定します。
healthPrestige4Bonus: 2.5
# 3番目の最大ヘルスボーナスの名声レベルを設定します。
healthPrestige7Bonus: 3.0
# 3番目の最大ヘルスボーナスの名声レベルを設定します。
healthPrestige10Bonus: 4.0
# ランクアップできるようになるために倒す必要があるボスの推定基本量を設定します。
baseKillsForRankUp: 100
# レベルごとにランクアップできるようになるために倒す必要があるボスの推定追加量を設定します。
# 式はこの量×プレイヤーの現在のレベルです。
additionalKillsForRankUpPerTier: 50
# 誰かが名声ランクのロックを解除したときにプレイヤーに送信されるタイトルを設定します。
# $playerは、プレイヤーの表示名に置き換えられるプレースホルダーです。
prestigeUnlockMessageTitle: $player
# 誰かが名声ランクのロックを解除したときにプレイヤーに送信される字幕を設定します。
# $tierは、プレイヤーの名声レベルに置き換えられるプレースホルダーです。
prestigeUnlockMessageSubtitle: '&2が$tier&2のロックを解除しました！'
# プレイヤーが平和な（平民）ランクを使用しているときにスポーンチャンスに適用される乗数を設定します。
peacefulModeEliteChanceDecrease: 0.2
# ギルドランクボーナスが適用されないワールドのリストを設定します
worldsWithoutAGBonuses: []
# EliteMobsの平和モードに切り替えるユーザーの機能を無効にします。平和モードは、そのプレイヤーの周りのモブのレベルとスポーン率を specifically 低下させます
disableCommonerRank: false
```

</details>

---

## AntiExploit.yml

`AntiExploit.yml` を使用すると、管理者はAntiExploitシステムのさまざまな側面をカスタマイズできます。AntiExploitシステムは、プレイヤーがモブグラインダーなどのものを使用してコインや戦利品を簡単にファームするのを防ぎ、プラグインのトップに到達するためにafkクリックするのではなく、実際の戦闘やミニダンジョンを実行するように促すために存在します。

これは、人々がプラグイン全体をafkグラインドするのではなく、実際にミニダンジョンと対話させたい場合に、オンにしておくことが重要なシステムです。

<details>

<summary><b>表を展開</b></summary>

```yml
# アンチエクスプロイトがトリガーされたときに表示されるメッセージを設定します。
AntiExploit message: '&c[EM AntiExploit] &7近くのエリートは特別な戦利品をドロップしません。'
# ダークルームアンチエクスプロイト1が有効になっているかどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターは、どのアンチエクスプロイトタイプがトリガーされたかを確認できますが、その具体的な仕組みについての詳細情報は提供されません。
Enable darkroom antiexploit 1: true
# ダークルームアンチエクスプロイト2が有効になっているかどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターは、どのアンチエクスプロイトタイプがトリガーされたかを確認できますが、その具体的な仕組みについての詳細情報は提供されません。
Enable darkroom antiexploit 2: true
# ダークルームアンチエクスプロイト3が有効になっているかどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターは、どのアンチエクスプロイトタイプがトリガーされたかを確認できますが、その具体的な仕組みについての詳細情報は提供されません。
Enable darkroom antiexploit 3: true
# 大きなダークルームアンチエクスプロイト1が有効になっているかどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターは、どのアンチエクスプロイトタイプがトリガーされたかを確認できますが、その具体的な仕組みについての詳細情報は提供されません。
Enable large darkroom antiexploit 1: true
# エンダーマンの高さのアンチエクスプロイトが有効になっているかどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターは、どのアンチエクスプロイトタイプがトリガーされたかを確認できますが、その具体的な仕組みについての詳細情報は提供されません。
Enable enderman height antiexploit: true
# マウントアンチエクスプロイトが有効になっているかどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターは、どのアンチエクスプロイトタイプがトリガーされたかを確認できますが、その具体的な仕組みについての詳細情報は提供されません。
Enable mount antiexploit: true
# エリートモブがアイテムを拾うことができるかどうかを設定します
preventItemPickupByMobs: true
# アンビエントダメージアンチエクスプロイトが有効になっているかどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターは、どのアンチエクスプロイトタイプがトリガーされたかを確認できますが、その具体的な仕組みについての詳細情報は提供されません。
Enable ambient damage antiexploit: true
# ハニーブロックアンチエクスプロイトが有効になっているかどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターは、どのアンチエクスプロイトタイプがトリガーされたかを確認できますが、その具体的な仕組みについての詳細情報は提供されません。
Enable honey block antiexploit: true
# アンチエクスプロイトアクティベーションのしきい値を設定します。値が高いほど、許容範囲が広がります。これを変更することはお勧めしません。
antiExploitThreshold: 10
# パスなしのアンチエクスプロイトが有効になっているかどうかを設定します
nPathExploit: true
```

</details>

---

## CombatTag.yml

`CombatTag.yml` には、コンバットタグシステムの設定が含まれています。このシステムはまだ完成にはほど遠いですが、プレイヤーが戦闘に入った後の行動を管理しようとします。

<details>

<summary><b>表を展開</b></summary>

```yml
# コンバットタグが有効になっているかどうかを設定します。
# 有効にすると、戦闘に参加する飛行中のプレイヤーは飛行を停止するように設定されます。
Enable combat tag: true
# コンバットタグがアクティブになったときに送信されるメッセージを設定します。
Combat tag message: '&c[EliteMobs] コンバットタグがアクティブになりました！'
# /agコマンドがテレポートの前にタイマーを持つかどうかを設定します
Enable adventurers guild teleport timer: true
# テレポートタイマーを待っている間に設定されるアクションメッセージを設定します。
Teleport time left: '&7[EM] &a$time &7秒でテレポートします...'
# プレイヤーがテレポートを待っている間に移動したときに送信されるメッセージを設定します。
Teleport cancelled: '&7[EM] &cテレポートが中断されました！'
```

</details>

---

## DiscordSRV.yml

`DiscordSRV.yml` には、DiscordSRVの設定が含まれています。この機能の設定方法については、[ここをクリックしてください！]($language$/elitemobs/discordsrv.md)

<details>

<summary><b>表を展開</b></summary>

```yml
# ドキュメントはこちらにあります：https://magmaguy.com/wiki.html#lang=en&article=elitemobs+discordsrv.md
announcementRoomName: EliteMobsのアナウンスをブロードキャストするDiscordルームの名前を、DiscordSRV設定ファイルにあるように入力する必要があります。詳細については、EliteMobs Wikiを確認してください。

```

</details>

---

## EconomySettings.yml

`EconomySettings.yml` には、EliteMobsエコノミーの設定が含まれています。

<details>

<summary><b>表を展開</b></summary>

```yml
# EliteMobsエコノミーが有効になっているかどうかを設定します。これは、エリートコイン、装備を購入および販売する機能、ギルドランクをアップグレードする機能を意味します
# 無効にすると、プレイヤーはプラグインで進行できなくなります！
enableEconomy: true
# アイテムの再販アイテムを元の価格の％として設定します。 5は5％です
itemResaleValue: 5.0
# 使用される通貨のゲーム内名を設定します。
currencyName: エリートコイン
# Vaultを使用するようにプラグインを設定します。これはお勧めしません！理由はこちらをご覧ください：https://github.com/MagmaGuy/EliteMobs/wiki/%5BThird-party-support%5D-Vault
useVault - not recommended: false
# エリートがレベルに基づいてコインをドロップするかどうかを設定します。
enableCurrencyShower: true
# エリートによってドロップされた通貨の乗数を設定します。
currencyShowerTierMultiplier: 1.0
# プレイヤーがエリート通貨を拾ったときに送信されるメッセージを設定します。
chatCurrencyShowerMessage: '&7[EM] &a$amount $currency_name&aを拾いました！'
# プレイヤーがエリート通貨を拾ったときに送信されるアクションバーメッセージを設定します。
actionbarCurrencyShowerMessage: '&7[EM] &a$amount $currency_name&aを拾いました！'
# 通貨を略奪した後にプレイヤーが受け取るメッセージを送信します。チュートリアル目的で役立ちます。
adventurersGuildNotificationMessages: '&7[EM] 余分な支出のお金？ &a/ag &aを試してみてください！'
# プレイヤー間の取引の税率を設定します。
# 高レベルのプレイヤーは最大6倍の通貨を獲得し、名声通貨のリセットをバイパスするために他のプレイヤーを使用しようとする可能性があるため、バランスの理由から強くお勧めします。
playerToPlayerPaymentTaxes: 0.2
# 他のプレイヤーにエリート通貨を送信するときに送信されるメッセージ。
Economy pay message v2: '&2あなたは$receiver&2に&2$amount_sent $currency_name &2を支払いました。
  税金の後、$amount_receivedを受け取りました！'
# プレイヤーが通貨を送信した後に送信されるメッセージ。
Economy currency left message: あなたは今&2$amount_left $currency_name&aを持っています
# 通貨を受け取ったときに受け取るメッセージ。
Economy money from payment message: あなたは$senderから&2$amount_received $currency_name&aを受け取りました
# プレイヤーが持っていないコインの量を送信しようとしたときに送信されるメッセージ。
Economy payment insufficient currency: '&cそれを行うのに十分な$currency_name&aがありません！'
# /em残高メッセージ
Wallet command message: あなたは&2$balance $currency_name&aを持っています
# プレイヤーが別のプレイヤーに通貨を送信しようとしたときに送信される確認メッセージ。
Tax confirmation message: '&c支払いの送信には税金として$percentage％かかります。 &a&9$command &aを実行して続行してください！'
# プレイヤーがお店から購入したときに送信されるメッセージ。
Shop buy message: '&aあなたは$item_value $currency_name&aで$item_name&aを購入しました！'
# プレイヤーがお店と対話したときに送信されるメッセージ。
Shop current balance message: '&aあなたは$currency_amount $currency_name&aを持っています。'
# プレイヤーがアイテムを購入するのに十分な通貨を持っていないときに送信されるメッセージ
Shop insufficient funds message: '&c十分な$currency_name&aがありません！'
# プレイヤーが購入できないアイテムを購入しようとしたときに送信されるメッセージの2番目の部分。
Shop item cost message: そのアイテムは&c$item_value $currency_name&aかかります。
# お店にアイテムを販売したときに送信されるメッセージ。
Shop sell message: '&aあなたは$currency_amount $currency_name&aで$item_name&aを販売しました！'
# そのプレイヤーに属していないアイテムを販売しようとしたときに送信されるメッセージ。
Shop sale player items warning: '&cあなたは現在ソウルバウンドされていないアイテムを販売することはできません
  あなたに！ これには、他の名声ティアのアイテムも含まれます！'
# EliteMobs以外のアイテムを販売しようとしたときに送信されるメッセージ
Shop sale instructions: '&cここで販売できるのはEliteMobsの戦利品のみです！ （値が表示されているエリートからドロップされたアーマー/武器
  彼らの伝承について）'
# エリートアイテムのバッチを販売したときに送信されるメッセージ。
shopBatchSellItem: '&aあなたは$currency_amount $currency_name&aでアイテムを販売しました！'
lootShowerMaterial:
  # ドロップされた1つのエリートコインの素材タイプを設定します。
  '1': GOLD_NUGGET
  '5': GOLD_INGOT
  '10': GOLD_BLOCK
  '20': EMERALD
  '50': EMERALD_BLOCK
  '100': DIAMOND
  '500': DIAMOND_BLOCK
  '1000': NETHER_STAR
lootShowerData:
  # ドロップされた1つのエリートコインのカスタムモデルIDを設定します。リソースパックで使用されます。
  '1': 1
  '5': 1
  '10': 1
  '20': 1
  '50': 1
  '100': 1
  '500': 1
  '1000': 1
materialWorth:
  # エリートモブ通貨システムのこの素材の価値を設定します。
  DIAMOND_AXE: 17.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  DIAMOND_BOOTS: 17.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  DIAMOND_CHESTPLATE: 17.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  DIAMOND_LEGGINGS: 17.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  DIAMOND_HELMET: 17.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  DIAMOND_PICKAXE: 17.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  DIAMOND_SHOVEL: 17.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  DIAMOND_SWORD: 17.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  DIAMOND_HOE: 17.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  IRON_AXE: 16.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  IRON_BOOTS: 16.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  IRON_LEGGINGS: 16.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  IRON_CHESTPLATE: 16.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  IRON_HELMET: 16.0


```

</details>

---


  # エリートモブ通貨システムのこの素材の価値を設定します。
  IRON_PICKAXE: 16.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  IRON_SHOVEL: 16.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  IRON_HOE: 16.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  IRON_SWORD: 16.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  SHIELD: 16.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  BOW: 16.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  CHAINMAIL_BOOTS: 15.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  CHAINMAIL_LEGGINGS: 15.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  CHAINMAIL_CHESTPLATE: 15.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  CHAINMAIL_HELMET: 15.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  STONE_SWORD: 15.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  STONE_AXE: 15.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  STONE_PICKAXE: 15.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  STONE_SHOVEL: 15.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  STONE_HOE: 15.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  GOLDEN_AXE: 13.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  GOLDEN_BOOTS: 13.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  GOLDEN_LEGGINGS: 13.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  GOLDEN_CHESTPLATE: 13.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  GOLDEN_HELMET: 13.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  GOLDEN_SWORD: 13.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  GOLDEN_SHOVEL: 13.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  GOLDEN_PICKAXE: 13.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  GOLDEN_HOE: 13.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  GOLDEN_APPLE: 17.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  ENCHANTED_GOLDEN_APPLE: 17.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  LEATHER_BOOTS: 13.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  LEATHER_LEGGINGS: 13.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  LEATHER_CHESTPLATE: 13.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  LEATHER_HELMET: 13.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  WOODEN_SWORD: 13.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  WOODEN_AXE: 13.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  WOODEN_HOE: 13.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  WOODEN_PICKAXE: 13.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  TRIDENT: 17.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  ELYTRA: 17.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  TURTLE_HELMET: 13.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  NETHERITE_AXE: 18.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  NETHERITE_PICKAXE: 18.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  NETHERITE_SHOVEL: 18.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  NETHERITE_HOE: 18.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  NETHERITE_SWORD: 18.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  NETHERITE_HELMET: 18.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  NETHERITE_CHESTPLATE: 18.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  NETHERITE_LEGGINGS: 18.0
  # エリートモブ通貨システムのこの素材の価値を設定します。
  NETHERITE_BOOTS: 18.0
  # 特に定義されていないアイテムのデフォルトの素材価値を設定します。
  defaultMaterialWorth: 1.0
```

</details>

---

## events.yml

`events.yml` には、イベントの構成オプションが含まれています。

_**注：これらは、非常に基本的なグローバル設定です。**_

`events`フォルダーで特定のイベントをさらに変更できます。

<details>

<summary><b>表を展開</b></summary>

```yml
# イベントが発生した世界でのみイベントメッセージがブロードキャストされるかどうかを設定します。
Only broadcast event message in event worlds: false
# 時間指定イベント間の最小クールダウン（分単位）を設定します
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

`ItemSettings.yml` には、Eliteアイテムのグローバル設定が含まれています。

<details>

<summary><b>表を展開</b></summary>

```yml
# アイテムの伝承でバニラのエンチャントの前に付加される文字を設定します。
noItemDurabilityMessage: '&8[EliteMobs] $item &4が壊れています！ 修理するまで動作しません！'
# EliteMobsの戦利品がドロップするかどうかを設定します。
# エリートコイン、カスタムアイテム、手続き的に生成されたアイテムが含まれます-すべて！
# 推奨されません。mmorpgの進行が不可能になります。
doEliteMobsLoot: true
# 手続き的に生成された戦利品が、アイテムの品質に基づいて異なる色になるかどうかを設定します。
doMMORPGColorsForItems: true
# バナーやブロックなどのカスタムアイテムの配置が禁止されているかどうかを設定します。
# これはお勧めです-カスタムアイテムは配置されると壊れてしまい、復元できません！
preventCustomItemPlacement: true
# すべてのカスタムEliteMobsアイテムの伝承の形式を設定します！
# 次の有効なプレースホルダーは次のとおりです。
# $itemLevel - アイテムレベルを表示します
# $prestigeLevel - 名声レベルを表示します
# $weaponOrArmorStats - アイテムに応じて、エリートDPSまたはエリートアーマーのステータスを表示します
# $soulbindInfo - アイテムがソウルバウンドされている場合は、その相手を表示します
# $itemSource - モブやショップなど、アイテムの入手元を表示します
# $ifLore - アイテムにカスタム伝承がある場合にのみ行を表示します。カスタムアイテムにのみ適用されます
# $customLore - カスタム伝承全体を表示します。カスタムアイテムにのみ適用されます
# $ifEnchantments - アイテムにエンチャントがある場合にのみ行を表示します
# $enchantments - アイテムのエンチャントを表示します
# $eliteEnchantments - アイテムのエリートエンチャントを表示します
# $ifCustomEnchantments - アイテムのカスタムエンチャントを表示します
# $customEnchantments - アイテムのカスタムエンチャントを表示します
# $ifPotionEffects - アイテムにポーション効果がある場合にのみ行を表示します
# $potionEffects - アイテムのポーション効果を表示します
# $loreResaleValue - アイテムの価値を表示します。表示場所によっては、購入価格または販売価格が表示される場合があります
# 重要：いくつかのプレースホルダーは、さらに下の構成設定でさらにカスタマイズできます
itemLoreStructureV2:
- §7§m§l---------§7<§l装備情報§7>§m§l---------
- '§7アイテムレベル：§f$itemLevel §7名声§6$prestigeLevel'
- $weaponOrArmorStats
- $soulbindInfo
- $itemSource
- $ifLore§7§m§l-----------§7< §f§lLore§7 >§m§l-----------
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
# ストアで購入したストアソースの伝承を設定します
shopSourceItemLores: '&7ストアで購入'
# ボスから略奪したアイテムのストアソースの伝承を設定します
mobSourceItemLores: '&7$mobから略奪'
# アイテムの価値の伝承を設定します
loreWorths: '&7価値：$worth $currencyName'
# アイテムの再販価値の伝承を設定します
loreResaleValues: '&7販売価格：$resale $currencyName'
# エリートモブからエリートアイテムがドロップする基本的な確率を設定します
flatDropRateV3: 0.2
# 地域のボスからエリートアイテムがドロップする基本的な確率を設定します
regionalBossNonUniqueDropRate: 0.05
# 地域のボスがバニラの戦利品をドロップできるかどうかを設定します
regionalBossesDropVanillaLoot: false
# ボスのレベルに基づいて、エリートアイテムのドロップの確率がどれだけ増加するかを設定します。
# ボスのレベルにこの値が掛けられ、基本確率に追加されます。
# これを0.0以上に設定することはもうお勧めしません！
levelIncreaseDropRateV2: 0.0
# 手続き的に生成されたアイテムがドロップされる加重確率を設定します。
# このシステムは加重確率を使用します！それが何かわからない場合は、Googleで調べてください。
proceduralItemDropWeight: 90.0
# 重み付けされたアイテムがドロップされる相対的な確率を設定します。
# 重み付けされたアイテムは、チャームのように動的な重みを持たないカスタムアイテムです。
weighedItemDropWeight: 1.0
# 固定アイテムがドロップされる相対的な確率を設定します。これらはスケールされないカスタムアイテムです。
fixedItemDropWeight: 10.0
# 制限されたアイテムがドロップされる相対的な確率を設定します。これらは、特定のレベルまでスケールアップするカスタムアイテムです
limitedItemDropWeight: 3.0
# スケーラブルなアイテムがドロップされる相対的な確率を設定します。これらは、任意のレベルにスケールできるカスタムアイテムであり、プラグインで最も一般的です。
scalableItemDropWeight: 6.0
# モブのレベルに基づいて、モブのバニラの戦利品の乗数を設定します。
defaultLootMultiplier: 0.0
# デフォルトの戦利品乗数の最大レベルを設定します。
levelCapForDefaultLootMultiplier: 200
# ボスのレベルに基づいて、ボスがドロップしたバニラのMinecraftエクスペリエンスの乗数を設定します。
defaultExperienceMultiplier: 1.0
# EliteMobsによってドロップされる最大戦利品のレベルを設定します。200のままにすることを強くお勧めします。
maximumItemLevel: 200
# エリートエンチャントを使用するかどうかを設定します。
# エリートエンチャントは、エリートアイテムがバニラの制限を超えるエンチャントレベルを取得すると、バニラのエンチャントを置き換えます。
# 例：エリートソードのシャープネスが10である場合、Minecraftの制限はレベル5であるため、シャープネス5とエリートシャープネス5になります。
# エリートシャープネスは、EliteMobsによってスポーンされたモブにのみ影響します。これは、PVPとバニラの戦闘のバランスが崩れないようにするために行われます。
useEliteEnchantments: true
# アイテムの伝承のエリートエンチャントに使用される表示名を設定します。
eliteEnchantmentLoreStrings: エリート
# EliteMobsがダメージ計算に有効な武器として鍬を認識するかどうかを設定します。
useHoesAsWeapons: false
# EliteMobsが高品質のドロップアイテムの上に特別なパーティクルをスポーンするかどうかを設定します。
enableRareItemParticleEffects: true
# 攻撃時にヒットしたエンティティにポーション効果が適用されることを示すために、アイテムの伝承で使用される記号を設定します。
potionEffectOnHitTargetLore: '&4⚔☠'
# 攻撃時に攻撃を実行しているプレイヤーにポーション効果が適用されることを示すために、アイテムの伝承で使用される記号を設定します。
potionEffectOnHitSelfLore: '&9⚔🛡'
# プレイヤーがそれを振るう限り、ポーション効果が再適用され続けることを示すために、アイテムの伝承で使用される記号を設定します。
potionEffectContinuousLore: '&6⟲'
# アイテムの伝承のエリートエンチャントの前に付加される文字を設定します。
eliteEnchantmentLoreColor: '&9◇'
# アイテムの伝承のバニラのエンチャントの前に付加される文字を設定します。
vanillaEnchantmentLoreColor: '&7◇'
# アイテムの伝承のカスタムエンチャントの前に付加される文字を設定します。
customEnchantmentColor: '&3◇'
# アイテムの伝承のポーション効果の前に付加される文字を設定します。
potionEffectLoreColor: '&5◇'
# アイテムがソウルバウンドされていない場合にアイテムに表示されるテキストを設定します。
noSoulbindLore: '&7ソウルバウンドされていません！'
# バニラの方法でエリートアイテムをエンチャントできるかどうかを設定します。 EliteMobsには独自のバランスを持つ独自のカスタムエンチャントシステムがあるため、これはお勧めしません！
preventEliteItemEnchantment: true
# バニラの方法でエリートアイテムをエンチャント解除できるかどうかを設定します。
preventEliteItemDisenchantment: true
# プレイヤーがアイテムをエンチャント解除しようとしたときに許可されていない場合に表示されるメッセージを設定します。
preventEliteItemDisenchantmentMessage: '&c[EliteMobs] エリートアイテムをエンチャント解除できません！'
# バニラの方法でエリートアイテムをダイヤモンドからネザライトにアップグレードできるかどうかを設定します。 お勧めしません！
preventEliteItemDiamondToNetheriteUpgrade: true
# エリートアイテムが死亡時にのみ耐久性を失うかどうかを設定します。
# これはEliteMobsにとって重要なシステムであり、高レベルの戦闘ではこれがなければほぼ不可能であるため、強くお勧めします！
eliteItemsDurabilityLossOnlyOnDeath: true
# 死亡時に耐久性を失うように設定されている場合のエリートアイテムの耐久性損失乗数を設定します。
# 0.0から1.0の間の値は耐久性損失を減らし、1.0を超える値は耐久性損失を増やします。
# 例：0.5は耐久性損失の50％を扱い、2.0は耐久性損失の200％を扱います。
eliteItemsDurabilityLossMultiplier: 1.0
# アイテムのスクラップが成功したときに表示されるメッセージを設定します。
scrapSucceededMessageV2: '&8[EliteMobs] &2スクラップが$amount回成功しました！'
# アイテムのスクラップが失敗したときに表示されるメッセージを設定します。
scrapFailedMessageV2: '&8[EliteMobs] &cスクラップが$amount回失敗しました！'
# エリートの戦利品をプレイヤーのインベントリに直接入れる必要があるかどうかを設定します。
putLootDirectlyIntoPlayerInventory: false
# プレイヤーがレベルの低すぎるアイテムを略奪できなくなるまでの最大レベル差を設定します。
# これは、プレイヤーが着用している戦利品の平均レベルに基づいて計算されます。
# 例として、これが10に設定されており、プレイヤーがレベル50の装備を持っている場合、レベル39のボスをファームすることはできません。
lootLevelDifferenceLockout: 10
# EliteMobsが、死亡時に耐久性を失うシステムを使用しているときに、エリートアイテムの破壊を防ぐかどうかを設定します。
# プレイヤーはとにかく耐久性のないアイテムを使用することはできません。これは、高レベルであるが耐久性の低いアイテムの偶発的な損失を防ぐためです。
preventEliteItemsFromBreaking: true
# EliteMobsで手続き的に生成されたダイヤモンド装備をドロップできるボスの最小レベル（+7）を設定します。
# EliteMobsには、手続き的に生成されたネザライト装備はなく、カスタム戦利品のみがあります。
minimumProcedurallyGeneratedDiamondLootLevelPlusSeven: 10
# /em simloot <レベル> <回数>コマンドで戦利品のロールに成功したときにチャットに表示されるメッセージを設定します。
simlootMessageSuccess: '&8[EliteMobs] &2戦利品のロールに成功し、$itemName&2を獲得しました！'
# /em simloot <レベル> <回数>コマンドで戦利品のロールに失敗したときにチャットに表示されるメッセージを設定します。
simlootMessageFailure: '&8[EliteMobs] &c戦利品のロールに失敗し、何も獲得しませんでした！'
# エリートの戦利品がインベントリに直接預けられたときにプレイヤーが受け取るメッセージを設定します。
directDropCustomLootMessage: '&8[EliteMobs] &2$itemName&2を獲得しました！'
# バニラの戦利品がインベントリに直接預けられたときにプレイヤーが受け取るメッセージを設定します。
directDropMinecraftLootMessage: '&8[EliteMobs] &a$itemName&aを獲得しました！'
# エリートコインがインベントリに直接預けられたときにプレイヤーが受け取るメッセージを設定します。
directDropCoinMessage: '&8[EliteMobs] &a&2$amount $currencyName&aを獲得しました！'
# EliteMobsがバニラのMinecraftの属性を非表示にするかどうかを設定します。
hideItemAttributes: true
# エリートアイテムの武器固有の伝承エントリを設定します。 $EDPSプレースホルダーは、武器のエリートDPS（1秒あたりのダメージ）に置き換えられます。
weaponEntry: '&7エリートDPS：&2$EDPS'
# エリートアイテムのアーマー固有の伝承エントリを設定します。 $EDEFプレースホルダーは、武器のエリートDEF（防御力）に置き換えられます。
armorEntry: '&7エリートアーマー：&2$EDEF'
# プレイヤーがボスを倒したが、装備レベルがボスレベルと違いすぎてコインを獲得できない場合に送信されるメッセージを設定します
levelRangeTooDifferent: '&8EM] &4あなたの装備レベルは$playerLevelで、ボスのレベルは
  $bossLevel、レベル差が大きすぎてコインを獲得できません！'
```

</details>

---

## MobCombatSettings.yml

`MobCombatSettings.yml` には、カスタム戦闘システムに関連するすべての設定オプションと、エリートモブの動作方法に一般的に関連するほとんどの設定オプションが含まれています。

<details>

<summary><b>表を展開</b></summary>

```yml
# 自然にスポーンしたエリートがスポーンするかどうかを設定します。注：ゾンビキングのようなイベントモブは、自然にスポーンしたエリートではありません！イベントボスを無効にする場合は、イベントを無効にする必要があります。
doNaturalEliteMobSpawning: true
# モブスポナーからスポーンしたスポーンをエリートに変換できるかどうかを設定します。お勧めしません！
doSpawnersSpawnEliteMobs: false
# エリートモブに変換される自然にスポーンしたモブの割合を設定します。
eliteMobsSpawnPercentage: 0.05
# スーパーモブスタッキングをスキャンするためのスーパーモブ範囲を設定します
superMobStackRange: 15
# エリートがスポーンできる最大レベルを設定します。
# 注：エリートモブのレベルは、プレイヤーが着用している鎧と武器に基づいており、鎧はレベル200までしかスケールしません。
naturalEliteMobsLevelCap: 250
# エリートがレベルに基づいて鎧を着用するかどうかを設定します。これは視覚的な目的のためだけであり、戦闘には影響しません。
doElitesWearArmor: true
# エリートがレベルに基づいてヘルメットを着用するかどうかを設定します。これにより、日中に簡単に燃え尽きることがなくなります。
doElitesWearHelmets: true
# エリートが周囲に視覚的な軌跡を残し、プレイヤーに彼らが持っているプレイヤーについて警告するかどうかを設定します。
doNaturalEliteMobVisualEffects: true
# スポナーからスポーンされたエリートが視覚効果を発揮するかどうかを設定します。
doSpawnerEliteMobVisualEffects: false
# 一部の力が力の警告フェーズを行うかどうかを設定します。警告フェーズは通常、力を回避できることを意味するため、これは非常に重要であり、ビジュアルはプレイヤーにどこに回避するかを知らせます。
doPowerBuildupVisualEffects: true
# プレイヤーがエリートによって死亡したときにカスタムデスメッセージを使用するかどうかを設定します。
doCustomEliteMobsDeathMessages: true
# EliteMobsがエリートのヘルスインジケータを表示するかどうかを設定します。
doDisplayMobHealthOnHit: true
# EliteMobsがエリートに与えられたダメージのダメージインジケータを表示するかどうかを設定します。
doDisplayMobDamageOnHit: true
# エリートのレベルがスポーンからの距離に基づいて増加するかどうかを設定します。
# これは、通常のレベルに追加される値です。つまり、プレイヤーがスポーンの近くでレベル100の装備を着用していて、ボスがスポーンからの距離のために+1レベルを持っている場合、ボスはレベル101でスポーンします。
# このオプションは、サーバーにランダムtpシステムがある場合、特に推奨されません。
doIncreaseEliteMobLevelBasedOnSpawnDistance: false
# 距離に基づくレベル増加のレベル増分間の距離を設定します。
distanceBetweenIncrements: 100.0
# 距離に基づくレベル増加の各距離増分でいくつのレベルが増加するかを設定します。
levelIncreaseAtIncrements: 1.0
# エリートの力が戦闘に入るまで隠されるかどうかを設定します。パフォーマンス上の理由から、これはお勧めです。
hideEliteMobPowersUntilAggro: true
# 正規化されたダメージシステム（地域のダンジョンボス）を使用しているものを除いて、EliteMobsによってスポーンされたすべてのボスに与えられるダメージの乗数を設定します。値が高いほど、与えられるダメージが増加し、ボスを倒しやすくなります。
# 2.0 = 200％、0.5 = 50％
damageToEliteMobMultiplierV2: 1.0
# エリートがプレイヤーに与えるダメージの乗数を設定します。値が高いほど、正規化されたダメージシステム（地域のダンジョンボス）を使用しているものを除いて、ボスが与えるダメージ量が増加し、ボスがより強くヒットします。
# 2.0 = 200％、0.5 = 50％
damageToPlayerMultiplierV2: 1.0
# 特殊なボスを追跡できるかどうかを設定します。
showCustomBossLocation: true
# ボスの場所を追跡するためにプレイヤーに送信されるメッセージを設定します。
bossLocationMessage: '&7[EM] &2[クリックして追跡！]'
# エリートが死亡したときに実行されるコマンドを設定します。有効なプレースホルダーは次のとおりです。
# $level ボスのレベル
# $name ボスの名前
# $players コマンドを、キルに参加した各プレイヤーに対して実行します。たとえば、ボブとスティーブがボスを倒した場合、「broadcast $players killed the boss！」は「bob killed the boss」と「steve killed the boss！」を実行します
commandsOnEliteMobDeath: []


```

</details>

---



# 大きなボスのキルに参加したプレイヤーに送信されるメッセージを設定します。
bossKillParticipationMessage: '&eあなたのダメージ：&2$playerDamage'
# ボスが戦闘から外れたときに体力を回復するかどうかを設定します。強くお勧めします。
regenerateCustomBossHealthOnCombatEnd: true
# 異なるワールドにいるボスを追跡しようとしているプレイヤーに送信されるメッセージを設定します。
defaultOtherWorldBossLocationMessage: '$name: 異なるワールドにいます！'
# プレイヤーがボスに対して弱点となるものでボスを攻撃したときに、ダメージインジケータに追加されるプレフィックスを設定します。
weakTextColor: '&9'
# プレイヤーがボスに対して耐性を持つものでボスを攻撃したときに、ダメージインジケータに追加されるプレフィックスを設定します。
resistTextColor: '&c'
# プレイヤーがボスに対して弱点となるものでボスを攻撃したときに表示されるメッセージを設定します。
weakText: '&9&l弱点！'
# プレイヤーがボスに対して耐性を持つものでボスを攻撃したときに表示されるメッセージを設定します。
resistText: '&c&l耐性！'
# ボスが攻撃に対して弱点であることを示すためにビジュアルを使用するかどうかを設定します。
doWeakEffect: true
# ボスが攻撃に対して耐性を持つことを示すためにビジュアルを使用するかどうかを設定します。
doResistEffect: true
# 正規化されたダメージシステム（地域のダンジョンボス）を使用しているボスに与えられるダメージの乗数を設定します。値が高いほど、与えられるダメージが増加し、ボスを倒しやすくなります。
# 2.0 = 200％、0.5 = 50％
damageToEliteMobMultiplier: 1.0
# 正規化されたダメージシステム（地域のダンジョンボス）を使用しているボスがプレイヤーに与えるダメージの乗数を設定します。値が高いほど、ボスが与えるダメージ量が増加し、ボスがより強くヒットします。
# 2.0 = 200％、0.5 = 50％
damageToPlayerMultiplier: 1.0
# 正規化されたダメージを使用するカスタムボス（通常は地域のボス）のベースラインダメージを設定します。
normalizedRegionalBossBaselineDamageV2: 3.0
# 正規化された体力を使用するカスタムボス（通常は地域のボス）のベースライン体力を設定します。
normalizedRegionalBossBaselineHealthV3: 4.0
# 地域のボスが正規化された戦闘システムを使用するかどうかを設定します。
# これは強くお勧めします。変更すると、事前に作成されたコンテンツのバランスが適切に取れなくなります。
normalizeRegionalBosses: true
# ボスが戦闘から外れたときに回復したときに表示されるメッセージを設定します。
fullHealMessage: '&2完全回復！'
# ボスが弱点と耐性を持つ攻撃に適用される乗数を設定します。
strengthAndWeaknessDamageMultipliers: 2.0
# プレイヤーの耐性ポーション効果によるダメージ軽減に適用される乗数を設定します。
resistanceDamageMultiplier: 1.0
# プレイヤーが近接攻撃（パワーを除く）に対してシールドを構えているときのダメージ軽減に適用される乗数を設定します。
blockingDamageReduction: 0.8
```

</details>

---

## ProceduralItemGenerationSettings.yml

`ProceduralItemGenerationSettings.yml` には、手続き的に生成されたアイテムを設定するためのすべての構成オプションが含まれています。

<details>

<summary><b>表を展開</b></summary>

```yml
dropProcedurallyGeneratedItems: true
customEnchantmentsChance: 0.5
materialNames:
  swordName: 剣
  bowName: 弓
  pickaxe: つるはし
  spade: シャベル
  hoe: クワ
  axe: 斧
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
- Dawn
...
adjectives:
- Adorable
- Beautiful
...
verbs:
- Slashing
- Cutting
...
verb-ers (noun):
- World Breaker
- World Shatterer
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

`ValidWorlds.yml` には、EliteMobsが検出したワールドのリストと、それらに対するEliteMobsの機能をカスタマイズするオプションが含まれています。

<details>

<summary><b>表を展開</b></summary>

```yml
# ゾーンベースのワールドのリストを設定します。
# ゾーンベースのゲームモードは古くなっており、まもなく削除されます！
zoneBasedWorlds: []
# ナイトメアモードのワールドのリストを設定します。
# ナイトメアモードのワールドは、昼が短く、プレイヤーが眠ることができないゲームモードです。
# ナイトメアワールドでは、エリートのスポーン数も多くなります。
# https://github.com/MagmaGuy/EliteMobs/wiki/%5BGame-Mode%5D-Nightmare-mode
nightmareWorlds: []
有効なワールド：
  world: true
  world_nether: true
  world_the_end: true
```

</details>

---

## Arenas.yml

`Arenas.yml` には、変更できるArenasのデフォルトのメッセージと設定が含まれています。

<details>

<summary><b>表を展開</b></summary>

```yml
# アリーナを開始するのに十分なプレイヤーがいない場合に表示されるメッセージ。
notEnoughPlayersMessage: '&8[EliteMobs] &c試合を開始するには、少なくとも$amount人が必要です！'
# アリーナの開始時に表示されるタイトル。
startingMessage: '&2開始！'
# アリーナの開始時に表示される字幕。
startingSubtitle: '&2$countで...'
# アリーナがいっぱいになったときに表示されるメッセージ。
arenaFullMessage: '&4[EliteMobs] &cアリーナはいっぱいです！ 終了するまで観戦できます！'
# プレイヤーがアクティブなアリーナに参加しようとすると表示されるメッセージ。
arenasOngoingMessage: '&4[EliteMobs] &c現在試合が行われているため、アリーナに参加できません！ 終了するまで観戦できます！'
# プレイヤーとして参加した後、アリーナの開始方法をプレイヤーに思い出させるために表示されるメッセージ。
instanceStartHintMessage: '&2[EliteMobs] &a&2/emを実行することでインスタンスを開始できます
  start'
# アリーナの退出方法をプレイヤーに思い出させるために表示されるメッセージ。
instanceQuitHintMessage: '&4[EliteMobs] &c&4/emを実行することでインスタンスを退出できます
  quit'
# プレイヤーがアリーナに参加したときに表示されるメッセージ。
arenaJoinPlayerMessage: "&2[EliteMobs] &a&2/em startを実行することでアリーナを開始できます\
  \ &a少なくとも&2$count &a人のプレイヤーがいる場合！ \n&c/em quitを実行することでアリーナを退出できます"
# 観客として参加した後、アリーナの退出方法をプレイヤーに思い出させるために表示されるメッセージ。
arenaJoinSpectatorMessage: '&2[EliteMobs] &a&2/em quitを使用していつでもアリーナを退出できます'
# ウェーブの開始時に表示されるタイトルメッセージ。
waveTitle: '&aウェーブ&2$wave'
# ウェーブの開始時に表示される字幕メッセージ。
waveSubtitle: ''
# アリーナが完了したときに表示されるタイトル。
victoryTitle: '&2勝利！'
# アリーナが完了したときに表示される字幕。
victorySubtitle: '&a&2$wave &aウェーブ完了！'
# プレイヤーがアリーナで失敗したときに表示されるタイトル。
defeatTitle: '&4敗北！'
# プレイヤーがアリーナで失敗したときに表示される字幕。
defeatSubtitle: '&c&4$wave&cウェーブに到達しました！'
# プレイヤーがアリーナをクリアしたときにブロードキャストされるメッセージ。
victoryBroadcast: アリーナ$arenaNameは$playersによって征服されました！
# プレイヤーがアリーナに参加したときに表示されるタイトル。
joinPlayerTitle: '&a&2/em start &aで開始！'
# プレイヤーがアリーナに参加したときに表示される字幕。
joinPlayerSubtitle: '&c&4/em quit &cで退出！'
# 観客がアリーナに参加したときに表示されるタイトル。
joinSpectatorTitle: '&a観戦中！'
# 観客がアリーナに参加したときに表示される字幕。
joinSpectatorSubtitle: '&c&4/em quit &cで退出！'
# アリーナに入る権限がないプレイヤーに送信されるメッセージを設定します。
noArenaPermissionMessage: '[EliteMobs] このアリーナに入る権限がありません！'
```

</details>

---

## Database.yml

`Database.yml` には、EMにデータベースを処理させる方法の設定が含まれています。

<details>

<summary><b>表を展開</b></summary>

```yml
# MySQLを使用するかどうかを設定します。デフォルトでは、EliteMobsはSQLiteを使用します。MySQLを使用する場合は、有効なMySQL構成が必要です。
useMySQL: false
# MySQLデータベースのホスト
mysqlHost: localhost
# MySQLデータベースのポート
mysqlPort: '3306'
# データベースの名前
mysqlDatabaseName: elitemobs
# MySQlのユーザー名
mysqlUsername: your_username_mysql_here
# MysSQLデータベースのパスワード
mysqlPassword: your_mysql_password_here
# SSLを使用するかどうか
useSSL: true
```

</details>

---

## dungeons.yml

`dungeons.yml` には、ダンジョンに表示されるメッセージを調整できる設定と、適用された効果のダメージ乗数などのその他の設定が含まれています。

<details>

<summary><b>表を展開</b></summary>

```yml
# ダンジョンでの毒ダメージのダメージ乗数を設定します
# デフォルトでは、ダメージが設計したダンジョンに対して少し高すぎるため、バランスをとるためにこれは重要です
poisonDamageMultiplier: 0.5
# ダンジョンでの火災によるダメージのダメージ乗数を設定します
# デフォルトでは、ダメージが設計したダンジョンに対して少し高すぎるため、バランスをとるためにこれは重要です
fireDamageMultiplier: 0.5
# ダンジョンでのウィザーダメージのダメージ乗数を設定します
# デフォルトでは、ダメージが設計したダンジョンに対して少し高すぎるため、バランスをとるためにこれは重要です
witherDamageMultiplier: 0.5
# ダンジョンでPvPが許可されるかどうかを設定します
friendlyFireInDungeons: false
# ダンジョンの復活バナーの上に表示されるテキストを設定します
dungeonRezInstructions: '&aパンチして復活！'
# ダンジョンでプレイヤーに残っているライフの数を示すテキストを設定します！プレースホルダー：
# $amount - 残りのライフの数
dungeonLivesLeftText: '&c残り$amountライフ！'
# プレイヤーとしてダンジョンに参加するためのテキストを設定します！プレースホルダー：
# $dungeonName - ダンジョンの名前
joinDungeonAsPlayerText: '&fプレイヤーとして$dungeonNameに参加！'
# 観客としてダンジョンに参加するためのテキストを設定します！プレースホルダー：
# $dungeonName - ダンジョンの名前
joinDungeonAsSpectatorText: '&f観客として$dungeonNameに参加！'
# インスタンス化されたダンジョンメニューのアイテム説明に表示されるタイトルを設定します
# $difficultyは、ダンジョンの構成ファイルの難易度名のプレースホルダーです
instancedDungeonTitle: $difficulty難易度のダンジョンを開始！
# インスタンス化されたダンジョンメニューのアイテム説明に表示される説明を設定します
# $dungeonNameは、ダンジョンの構成ファイルのダンジョン名のプレースホルダーです
instancedDungeonDescription:
- '&fダンジョンの新しいインスタンスを作成する'
- $dungeonName &f自分と多分
- '&f何人かの友達のために！'
# インスタンス化されたコンテンツの観戦が可能になるかどうかを設定します。
allowSpectatorsInInstancedContent: true
# インスタンス化されたダンジョンが完了したときに表示されるメッセージを設定します
instancedDungeonCompleteMessage: '[EliteMobs] ダンジョン完了！ 2分後に自爆します！'
# インスタンス化されたダンジョンが閉じるときに表示されるメッセージを設定します
instancedDungeonClosingInstanceMessage: '[EliteMobs] インスタンスを閉じています！'
```

</details>

---

## Quests.yml

`Quests.yml` には、クエストの設定と表示されるメッセージが含まれています。

<details>

<summary><b>表を展開</b></summary>

```yml
# クエストを完了するためにクエストをクエストギバーに返す必要があるかどうかを設定します。
requireQuestTurnIn: true
# クエストが受け入れられたときに送信されるメッセージを設定します。
questJoinMessage: '&aあなたはクエスト$questName&aを受け入れました！'
# クエストが放棄されたときに送信されるメッセージを設定します。
questLeaveMessage: '&cあなたはクエスト$questName&cを放棄しました！'
# クエストが完了したときに送信されるメッセージを設定します。
questCompleteMessage: '&2あなたはクエスト$questName&2を完了しました！'
# アクティブなクエストがないときにプレイヤーがクエストを放棄しようとしたときに送信されるメッセージを設定します。
leaveWhenNoActiveQuestsExist: '&c現在、アクティブなクエストはありません！'
# プレイヤーがクエストを離れようとしたときに送信される確認メッセージを設定します。
questLeaveConfirmationMessage: '&c現在のクエストを放棄してもよろしいですか？
  &a/em confirm &cを実行して選択を確認してください！'
# クエストに関連するメッセージの一部で、チャットメッセージの代わりにタイトルを使用するかどうかを設定します。
useQuestAcceptTitles: true
# プレイヤーがクエストを開始したときに送信されるタイトルを設定します。
questStartTitle: '&aクエストが受け入れられました！'
# プレイヤーがクエストを開始したときに送信される字幕を設定します。
questStartSubtitle: $questName
# プレイヤーがクエストを完了したときにタイトルを送信するかどうかを設定します。
useQuestCompleteTitles: true
# プレイヤーがクエストを完了したときに送信されるタイトルを設定します。
questCompleteTitle: '&2クエスト完了！'
# プレイヤーがクエストを完了したときに送信される字幕を設定します。
questCompleteSubtitle: $questName
# プレイヤーがクエストを離れるときにタイトルを送信するかどうかを設定します。
useQuestLeaveTitles: true
# プレイヤーがクエストを離れるときに送信されるタイトルを設定します。
questLeaveTitle: '&cクエスト放棄！'
# プレイヤーがクエストを離れるときに送信される字幕を設定します。
questLeaveSubtitle: $questName
# クエストの目標の進行状況を報告するチャットにメッセージを送信するかどうかを設定します。
doQuestChatProgression: true
# 完了した目標のカラーコードを設定します。
ongoingQuestColorCode: '&2'
# キルクエストの進行状況メッセージのフォーマットを設定します。
killQuestChatProgressionMessage: '&8[EliteMobs]&c➤$nameをキルする：$color$current&0/$color$target'
# フェッチクエストの進行状況メッセージのフォーマットを設定します。
fetchQuestChatProgressionMessage: '&8[EliteMobs]&c➤$nameを取得する：$color$current&0/$color$target'
# ダイアログクエストの進行状況メッセージのフォーマットを設定します。
dialogQuestChatProgressionMessage: '&8[EliteMobs]&c➤$nameと話す：$color$current&0/$color$target'
# プレイヤーが持つことができる受け入れられたクエストの最大量を設定します。
maximumActiveQuests: 10
# アクティブなクエストの上限を超える数のクエストを受け入れようとしたときにプレイヤーに送信されるメッセージを設定します。
questCapMessage: '&8[EliteMobs] &cアクティブなクエストの最大数に達しました
  （10）！ &4さらにクエストを取得する場合は、少なくとも1つのアクティブなクエストを放棄または完了してください！'
# クエストにスコアボードメッセージを使用するかどうかを設定します。
useQuestScoreboards: true
# キルクエストのスコアボードの進行状況メッセージのフォーマットを設定します。
killQuestScoreboardProgressionMessage: '&c➤$nameをキルする：$color$current&0/$color$target'
# フェッチクエストのスコアボードの進行状況メッセージのフォーマットを設定します。
fetchQuestScoreboardProgressionMessage: '&c➤$nameを取得する：$color$current&0/$color$target'
# ダイアログクエストのスコアボードの進行状況メッセージのフォーマットを設定します。
dialogQuestScoreboardProgressionMessage: '&c➤$nameと話す：$color$current&0/$color$target'
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
# クエスト追跡をアクティブにするためにプレイヤーに送信されるメッセージを設定します。
chatTrackMessage: '&8[EliteMobs]&2 ここをクリックしてクエストを追跡してください！'
# クエスト追跡メッセージのホバーメッセージを設定します。
chatTrackHover: '&2クリックして追跡！'
# 追跡メッセージをクリックしたときに送信されるコマンドを設定します。これは変更しないでください。
chatTrackCommand: /elitemobs quest track $questID
# クエスト追跡をアクティブにしたときにプレイヤーに送信されるメッセージを設定します。
chatTrackingMessage: '&8[EliteMobs]&9 クエストを追跡しています！'
# クエスト追跡が有効になっているメッセージのホバーメッセージを設定します。
chatTrackingHover: '&2クリックして追跡を解除/追跡！ /em->別のクエストを追跡するクエスト！'
# クエスト追跡のアクティブ化メッセージをクリックしたときに送信されるコマンドを設定します。これは変更しないでください。
chatTrackingCommand: /elitemobs quest track $questID
# 受け入れられたときにクエストが自動的に追跡されるかどうかを設定します。
autoTrackQuestsOnAccept: true
# クエストの目的地が見つからなかったときに表示されるメッセージを設定します。
noQuestDestinationFound: '[EM] クエストの目的地が見つかりません！'
# クエストのターゲットが別のワールドにいるときに表示されるメッセージを設定します。
questDestinationInOtherWorld: '[EM] ワールド$worldに移動してください！'
# プレイヤーがすでに完了したクエストを受け入れようとしたときに送信されるメッセージを設定します。
questAlreadyCompletedMessage: '&8[EliteMobs] &cこのクエストはすでに完了しています！'
# プレイヤーが権限のないクエストを受け入れようとしたときに送信されるメッセージを設定します。
questPrerequisitesMissingMessage: '&8[EliteMobs] &cこのNPCには、いくつかのクエストがあります
  まだ受け入れられません！'
# 正しいギルドランクがアクティブ化されていないクエストを取得しようとしているプレイヤーに送信されるメッセージを設定します。
lowRankDynamicQuestWarning: '&8[EliteMobs] &c現在のギルドランクではこれらのクエストを受けることができません！ これらのクエストを受け入れるには、ギルドランクを上げてください。'
# クエストの提出メッセージのフォーマットを設定します。
questTurnInObjective: '&a2$npcNameと話す'
# クエストのインベントリベースのメニューが行を壊す前に持つことができる最大文字数を設定します。
horizontalCharacterLimitBedrockMenu: 30
# エントリを続行するために別のアイテムを作成する前に、クエストのインベントリベースのメニューのアイテムエントリあたりの最大文字数を設定します。
itemEntryCharacterLimitBedrockMenu: 300
```

</details>

---

## resource_pack_config.yml

`resource_pack_config.yml` には、EliteMobsリソースパックに関連する設定が含まれています。

<details>

<summary><b>表を展開</b></summary>

```yml
eliteMobsResourcePackEnabled: false
forceResourcePack: false
resourcePackPrompt: '[EliteMobs] リソースパックの使用を強くお勧めします！'
resourcePackLink: https://www.magmaguy.com/downloads/elitemobs_resource_pack.zip
```

</details>

---

## Sounds.yml

`Sounds.yml` には、特定のEliteMobsのインタラクションが実行されたときに再生する必要があるサウンドを定義する設定が含まれています。サウンドファイルはリソースパックに保存されます。

<details>

<summary><b>表を展開</b></summary>

```yml
# 宝箱が開いたときに再生されるサウンドを設定します
treasureChestOpenSound: elitemobs:treasure_chest.open
# プレイヤーがギルドでランクアップしたときに再生されるサウンドを設定します
guildRankUpSound: elitemobs:guild.rankup
# プレイヤーがギルドで名声を獲得したときに再生されるサウンドを設定します
guildPrestigeSound: elitemobs:guild.prestige
# プレイヤーがクエストを進めたときに再生されるサウンドを設定します
questProgressionSound: elitemobs:quest.progression
# プレイヤーがクエストを完了したときに再生されるサウンドを設定します
questCompleteSound: elitemobs:quest.completion
# プレイヤーがクエストを放棄したときに再生されるサウンドを設定します
questAbandonSound: elitemobs:quest.abandon
# プレイヤーがクエストを受け入れたときに再生されるサウンドを設定します
questAcceptSound: elitemobs:quest.accept
```

</details>

---

## Wormholes.yml

`Wormholes.yml` には、EliteMobsワームホールテレポートの設定が含まれています。

<details>

<summary><b>表を展開</b></summary>

```yml
# インストールされていないダンジョンにテレポートが使用されたときに表示されるメッセージを設定します。
dungeonNotInstalledMessage: '&8[EliteMobs] &cDungeon $dungeonID &cがインストールされていません！
  このテレポートは機能しません。'
# インストールされていないダンジョンにワームホールが使用されたときに表示されるメッセージを設定します。
defaultPortalMissingMessage: '&8[EliteMobs] &cこのポータルはどこにもつながっていないようです！'
# ワームホールに削減されたパーティクルモードが使用されているかどうかを設定します。基盤岩クライアントを許可している場合は、特にお勧めします。
reducedParticlesMode: true
# ワームホールがまったくパーティクルを使用しないかどうかを設定します。お勧めしませんが、本当に悪い基盤岩クライアントには必要になる場合があります。
noParticlesMode: false
# プレイヤーがワームホールを使用しようとしたが、使用するのに十分な通貨がない場合に送信されるメッセージを設定します。
insufficientCurrencyForWormholeMessage: '&8[EliteMobs] &c通貨が足りません！ あなた
  このワームホールを使用するには$amountが必要です！'
```

</details>


