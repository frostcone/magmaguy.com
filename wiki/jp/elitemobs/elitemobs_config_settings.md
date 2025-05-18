はい、承知いたしました。入力されたテキストを日本語に翻訳し、Markdownの書式設定を維持します。

```markdown
# EliteMobs 設定デフォルト

**EliteMobsは、デフォルトで推奨されるデフォルト設定がインストールされています。無作為に変更すると、全体的なエクスペリエンスが悪化する可能性が高いです。**

_**EliteMobsは、推奨されるデフォルト設定ですべてのユーザーに提供されます。無作為に変更してからサポートを要求した場合、設定ファイルをリセットするように言われる可能性が非常に高いです。プラグインの変更は、推測ではなくプレイテストに基づいて行うべきです。**_

## はじめに

EliteMobsは現在、カスタマイズへの高い需要により、膨大な数の設定オプションを提供しています。このWikiページを簡潔に保つため、デフォルト設定のみが表示されます。

特定の設定について詳しく知りたい場合は、設定ファイルを参照してコメントを確認してください。

---

## config.yml

`config.yml`には、作成時に他の場所にうまく収まらなかったほとんどランダムな設定が含まれています。バージョン間で最も変更される可能性が高い設定ファイルです。

<div align="left">

<details>

<summary><b>テーブルを展開</b></summary>

```yml
# EliteMobsが使用する言語ファイルを指定します
# これを手動で変更しないでください！コマンド '/em language <languagefile>' でインストールされることを意図しています
language: english
# elitemobsによってスポーンされたエリートやボスが常にネームタグを表示するかどうかを設定します。
# 非推奨です！
alwaysShowEliteMobNameTags: false
# パッシブモブがマージされる前に、どれだけ近くにいる必要があるかを設定します。
# これを0に設定しないでください！
superMobStackAmount: 50
# エリートが爆発でパッシブモブにダメージを与えないようにします。
preventEliteCreeperDamageToPassiveMobs: true
# EliteMobsがタイトルを使用して、権限がないことをプレイヤーに警告するかどうかを設定します。
useTitlesForMissingPermissionMessages: true
# EliteMobsが名前付きモブをエリートに変換するのを防ぐかどうかを設定します。
# 他のプラグインとの互換性にとって特に重要です。
preventEliteMobConversionOfNamedMobs: true
# EliteMobsがカスタムスポーン理由を持つモブを変換するかどうかを設定します。
# 特定のボスプラグインを実行すると、設定の値に関係なく、これが自動的にtrueに設定されます。
enableHighCompatibilityMode: false
# ナイトメアゲームモードのエリートスポーンボーナスを設定します。
nightmareWorldSpawnBonus: 0.5
# 一元化された /em コマンドがプラグインのメインステータスページを開くかどうかを設定します。
# 強く推奨されます！
emLeadsToStatusMenu: true
# /em wallet のような特定のコマンドを実行すると、情報が一元化されている /em メニューに移動するかどうかを設定します。
otherCommandsLeadToEMStatusMenu: true
# セットアップが完了したかどうかを設定します。
# この値を手動で設定しないでください。ゲーム内コマンドで変更されることを意図しています。
setupDoneV3: true
# エリートが、ゾンビの増援機能などのバニラの増援のスポーンを防ぐかどうかを設定します。
preventVanillaReinforcementsForEliteEntities: true
# EliteMobsのサーバーのデフォルトのスポーン場所を設定します。/em spawntp はこの場所に移動します。
defaultSpawnLocation: world,16.0,76.0,80.0,0.0,0.0
# EliteMobsがエリートによって爆破されたブロックを再生するかどうかを設定します。
doExplosionRegen: true
# 爆発再生がチェストなどのコンテナの内容も再生するかどうかを設定します。
# これをfalseにすると、エリートの爆発でコンテナが爆破されなくなります。
doRegenerateContainers: true
defaultTransitiveBlockLimiter: 500
# /em メニューが、Bedrockと互換性のあるインベントリベースのメニュー形式のみを使用するかどうかを設定します。
# 念のため、プレイヤーはコマンド /em alt を実行して /em メニューのスタイルを切り替えることができます。
onlyUseBedrockMenus: false
# ブックメニューページの1行あたりの文字数制限を設定します。
# クエストなどのブックメニューでテキストが途切れる場合は、この値を下げてください。
characterLimitForBookMenuPagesV2: 170
# 空のメニュー領域をガラス板で埋めるかどうかを設定します。
# EliteMobsリソースパックを使用している場合は推奨されません。
useGlassToFillMenuEmptySpace: false
# EliteMobsリソースパックのフォーマットにUnicodeを使用するかどうかを設定します。
# これを手動で設定しないでください。リソースパックのインストール時に自動的に設定されます。
# EliteMobsリソースパックをマージする必要があった場合にのみ手動で設定してください。その場合、間隔がうまく機能しない可能性があることを想定してください。
menuUnicodeFormatting: false
# 保留中のコマンドがない状態で '/em confirm' を実行したプレイヤーに送信されるメッセージを設定します。
noPendingCommands: '&c現在、保留中のコマンドはありません！'
# トラッキングメッセージを送信するボスのトラッキングメッセージを設定します。
trackMessage: $name を追跡
# ギルドランクよりも高いレベル要件を持つ宝箱を開けたプレイヤーに送信されるメッセージを設定します。
chestLowRankMessage: '&7[EM] &cこのチェストを開けるには、ギルドランクが少なくとも $rank &cである必要があります！'
# すでに開けた宝箱を再度開けようとしたプレイヤーに送信されるメッセージを設定します。
chestCooldownMessage: '&7[EM] &c最近このチェストをすでに開けました！ $time 待ってください！'
# /em コマンドに問題があるプレイヤーに /em alt コマンドを推奨するメッセージを設定します。
dismissEMMessage: '&8[EliteMobs] &2/elitemobs &fメニューが機能しませんか？ &2/elitemobs alt &fを試して代替バージョンのメニューを見てください！ &cこのメッセージを再度表示したくないですか？ &4/em dismiss'
# プレイヤーが /em alt コマンドを実行したときに表示されるメッセージを設定します。
switchEMStyleMessage: '&8[EliteMobs] &2/elitemobs &fメニューのスタイルが変更されました！確認してください！'
# プレイヤーが宝箱を開けたが何も得られなかったときに表示されるメッセージを設定します。
treasureChestNoDropMessage: '&8[EliteMobs] &c何も得られませんでした！次回は幸運を！'
# 無効になったボスを追跡しようとしたときに表示されるメッセージを設定します。
bossAlreadyGoneMessage: '&c[EliteMobs] 申し訳ありません、このボスはすでにいなくなりました！'
```

</details>

---

## AdventurersGuild.yml

`AdventurersGuild.yml`には、冒険者ギルドハブ（ワールド）に関連する設定と、冒険者ギルドのランクアップシステムに関連する設定が含まれています。

<details>

<summary><b>テーブルを展開</b></summary>

```yml
# EliteMobsがプレステージ報酬としてギルドランクをアンロックする際に最大体力を追加するかどうかを設定します。
Add max health when unlocking higher guild ranks: true
# EliteMobsがプレステージ報酬としてギルドランクをアンロックする際にクリティカルストライクチャンスを追加するかどうかを設定します。
Add critical chance when unlocking higher guild ranks: true
# EliteMobsがプレステージ報酬としてギルドランクをアンロックする際に回避チャンスを追加するかどうかを設定します。
Add dodge chance when unlocking higher guild ranks: true
# ユーザーコマンドが冒険者ギルドハブにリダイレクトされるかどうかを設定します。これはゲームプレイの没入感とチュートリアル目的で強く推奨されます。
userCommandsTeleportToAdventurersGuild: true
# 冒険者ギルドのゲーム内表示名を設定します。
adventurersGuildMenuName: '&6&l冒険者のハブ'
# プレステージ0 ランク0 を設定します。
Prestige 0 rank 0: '&8一般人 - エリートを無効化します！'
# プレステージ0 ランク0 の短いプレースホルダーを設定します。
Prestige 0 rank 0 short placeholder: '&6&l✧&e0'
...
# プレイヤーのルートがギルドレベルによって制限されるかどうかを設定します。
# これはEliteMobsの信じられないほど重要な部分であり、非常に強く推奨されます。
limitLootBasedOnGuildTier: true
# ギルドレベルが低いためにルートが弱体化されたプレイヤーに送信されるメッセージを設定します。
lootLimiterMessage: '&7[EM] &cより良いアイテムをルートするには、/ag を通じて次のギルドランクをアンロックする必要があります！'
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
# 2番目の回避ボーナスのプレステージレベルを設定します。
dodgePrestige6Bonus: 6.0
# 3番目の回避ボーナスのプレステージレベルを設定します。
dodgePrestige9Bonus: 10.0
# 最初のクリティカルヒットボーナスのプレステージレベルを設定します。
critPrestige2Bonus: 3.0
# 2番目のクリティカルヒットボーナスのプレステージレベルを設定します。
critPrestige5Bonus: 6.0
# 3番目のクリティカルヒットボーナスのプレステージレベルを設定します。
critPrestige8Bonus: 10.0
# 最初の最大体力ボーナスのプレステージレベルを設定します。
healthPrestige1Bonus: 2.0
# 2番目の最大体力ボーナスのプレステージレベルを設定します。
healthPrestige4Bonus: 2.5
# 3番目の最大体力ボーナスのプレステージレベルを設定します。
healthPrestige7Bonus: 3.0
# 3番目の最大体力ボーナスのプレステージレベルを設定します。
healthPrestige10Bonus: 4.0
# ランクアップするために倒す必要があるボスの推定基本数を設定します。
baseKillsForRankUp: 100
# ランクアップするために倒す必要があるボスの推定追加数を、レベルごとに設定します。
# 計算式は、この数 x プレイヤーの現在のレベルです。
additionalKillsForRankUpPerTier: 50
# 誰かがプレステージランクをアンロックしたときにプレイヤーに送信されるタイトルを設定します。
# $player はプレイヤーの表示名に置き換えられるプレースホルダーです。
prestigeUnlockMessageTitle: $player
# 誰かがプレステージランクをアンロックしたときにプレイヤーに送信されるサブタイトルを設定します。
# $tier はプレイヤーのプレステージレベルに置き換えられるプレースホルダーです。
prestigeUnlockMessageSubtitle: '&2が $tier&2 をアンロックしました！'
# プレイヤーが平和（一般人）ランクを使用している場合にスポーン確率に適用される乗数を設定します。
peacefulModeEliteChanceDecrease: 0.2
# ギルドランクボーナスが適用されないワールドのリストを設定します。
worldsWithoutAGBonuses: []
# EliteMobsの平和モードへの切り替えをユーザーが無効にできるようにします。平和モードは、そのプレイヤーの周りのモブのレベルとスポーン率を特に低下させます。
disableCommonerRank: false
```

</details>

---

## AntiExploit.yml

`AntiExploit.yml`を使用すると、管理者はアンチエクスプロイトシステムのさまざまな側面をカスタマイズできます。アンチエクスプロイトシステムは、プレイヤーがモブグラインダーなどを使用してコインやルートを簡単にファームするのを防ぎ、プラグインのトップにAFKクリックで到達するのではなく、実際の戦闘やミニダンジョンを行うように促します。

これは、人々がプラグイン全体をAFKグラインドするだけでなく、実際にミニダンジョンと交流させたい場合に、オンにしておくことが非常に重要なシステムです。

<details>

<summary><b>テーブルを展開</b></summary>

```yml
# アンチエクスプロイトがトリガーされたときに表示されるメッセージを設定します。
AntiExploit message: '&c[EM AntiExploit] &7近くのエリートは特別なルートをドロップしません。'
# ダークルームアンチエクスプロイト1が有効になっているかどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターはどのアンチエクスプロイトタイプがトリガーされたかを確認できますが、それが具体的にどのように機能するかについての詳細情報は提供されていません。
Enable darkroom antiexploit 1: true
# ダークルームアンチエクスプロイト2が有効になっているかどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターはどのアンチエクスプロイトタイプがトリガーされたかを確認できますが、それが具体的にどのように機能するかについての詳細情報は提供されていません。
Enable darkroom antiexploit 2: true
# ダークルームアンチエクスプロイト3が有効になっているかどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターはどのアンチエクスプロイトタイプがトリガーされたかを確認できますが、それが具体的にどのように機能するかについての詳細情報は提供されていません。
Enable darkroom antiexploit 3: true
# 大規模ダークルームアンチエクスプロイト1が有効になっているかどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターはどのアンチエクスプロイトタイプがトリガーされたかを確認できますが、それが具体的にどのように機能するかについての詳細情報は提供されていません。
Enable large darkroom antiexploit 1: true
# エンダーマン高さアンチエクスプロイトが有効になっているかどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターはどのアンチエクスプロイトタイプがトリガーされたかを確認できますが、それが具体的にどのように機能するかについての詳細情報は提供されていません。
Enable enderman height antiexploit: true
# マウントアンチエクスプロイトが有効になっているかどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターはどのアンチエクスプロイトタイプがトリガーされたかを確認できますが、それが具体的にどのように機能するかについての詳細情報は提供されていません。
Enable mount antiexploit: true
# エリートモブがアイテムを拾うことができるかどうかを設定します。
preventItemPickupByMobs: true
# 環境ダメージアンチエクスプロイトが有効になっているかどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターはどのアンチエクスプロイトタイプがトリガーされたかを確認できますが、それが具体的にどのように機能するかについての詳細情報は提供されていません。
Enable ambient damage antiexploit: true
# ハニーブロックアンチエクスプロイトが有効になっているかどうかを設定します。
# 特定のアンチエクスプロイト機能は意図的に文書化されていません。サーバーオペレーターはどのアンチエクスプロイトタイプがトリガーされたかを確認できますが、それが具体的にどのように機能するかについての詳細情報は提供されていません。
Enable honey block antiexploit: true
# アンチエクスプロイトアクティベーションのしきい値を設定します。値が高いほど寛容になります。これを変更することは推奨されません。
antiExploitThreshold: 10
# パスなしアンチエクスプロイトが有効になっているかどうかを設定します。
nPathExploit: true
```

</details>

---

## CombatTag.yml

`CombatTag.yml`には、コンバットタグシステムの設定が含まれています。このシステムはまだ完成には程遠いですが、プレイヤーが戦闘に入った後の行動を管理しようとします。

<details>

<summary><b>テーブルを展開</b></summary>

```yml
# コンバットタグが有効になっているかどうかを設定します。
# 有効にすると、戦闘に参加した飛行中のプレイヤーは飛行を停止するように設定されます。
Enable combat tag: true
# コンバットタグがアクティベートされたときに送信されるメッセージを設定します。
Combat tag message: '&c[EliteMobs] コンバットタグがアクティベートされました！'
# /ag コマンドにテレポート前のタイマーがあるかどうかを設定します。
Enable adventurers guild teleport timer: true
# テレポートタイマーを待っている間に設定されるアクションメッセージを設定します。
Teleport time left: '&7[EM] &a$time &7秒後にテレポートします...'
# テレポートを待っている間にプレイヤーが移動したときに送信されるメッセージを設定します。
Teleport cancelled: '&7[EM] &cテレポートが中断されました！'
```

</details>

---

## DiscordSRV.yml

`DiscordSRV.yml`には、DiscordSRVの設定が含まれています。この機能の設定方法を確認したい場合は、[ここをクリックしてください！]($language$/elitemobs/discordsrv.md)

<details>

<summary><b>テーブルを展開</b></summary>

```yml
# ドキュメントはこちらにあります: https://magmaguy.com/wiki.html#lang=en&article=elitemobs+discordsrv.md
announcementRoomName: YOU_NEED_TO_PUT_THE_NAME_OF_THE_DISCORD_ROOM_YOU_WANT_ELITEMOBS_ANNOUNCEMENTS_TO_BE_BROADCASTED_IN_AS_YOU_HAVE_IN_YOUR_DISCORDSRV_CONFIGURATION_FILE_CHECK_ELITEMOBS_WIKI_FOR_DETAILS
```

</details>

---

## EconomySettings.yml

`EconomySettings.yml`には、EliteMobsエコノミーの設定が含まれています。

<details>

<summary><b>テーブルを展開</b></summary>

```yml
# EliteMobsエコノミーが有効になっているかどうかを設定します。これは、エリートコイン、装備の売買能力、ギルドランクのアップグレード能力を意味します。
# 無効にすると、プレイヤーはプラグインで進行できなくなります！
enableEconomy: true
# アイテムの再販価格を元の価格の%で設定します。5は5%です。
itemResaleValue: 5.0
# 使用される通貨のゲーム内名を設定します。
currencyName: エリートコイン
# プラグインがVaultを使用するように設定します。これは推奨されません！理由はこちらをお読みください: https://github.com/MagmaGuy/EliteMobs/wiki/%5BThird-party-support%5D-Vault
useVault - not recommended: false
# エリートがレベルに基づいてコインをドロップするかどうかを設定します。
enableCurrencyShower: true
# エリートがドロップする通貨の乗数を設定します。
currencyShowerTierMultiplier: 1.0
# プレイヤーがエリート通貨を拾ったときに送信されるチャットメッセージを設定します。
chatCurrencyShowerMessage: '&7[EM] &a$amount $currency_name を拾いました！'
# プレイヤーがエリート通貨を拾ったときに送信されるアクションバーメッセージを設定します。
actionbarCurrencyShowerMessage: '&7[EM] &a$amount $currency_name を拾いました！'
# 通貨をルートした後にプレイヤーが得るメッセージを送信します。チュートリアル目的で役立ちます。
adventurersGuildNotificationMessages: '&7[EM] 余分な小遣い？ &a/ag ! を試してみてください！'
# プレイヤー間の取引の税率を設定します。
# 高レベルのプレイヤーは最大6倍の通貨を獲得でき、他のプレイヤーを使用してプレステージ通貨のリセットを回避しようとする可能性があるため、バランス上の理由から強く推奨されます。
playerToPlayerPaymentTaxes: 0.2
# 他のプレイヤーにエリート通貨を送信したときに送信されるメッセージを設定します。
Economy pay message v2: '&2$receiver&2 に &2$amount_sent $currency_name &2を支払いました。税引き後、&2$amount_received &2を受け取りました！'
# プレイヤーが通貨を送信した後に送信されるメッセージを設定します。
Economy currency left message: 現在、&2$amount_left $currency_name を持っています
# 通貨を受け取ったときに受信されるメッセージを設定します。
Economy money from payment message: &f$sender から &2$amount_received $currency_name &fを受け取りました
# プレイヤーが持っていない量のコインを送信しようとしたときに送信されるメッセージを設定します。
Economy payment insufficient currency: '&cそれを行うには、$currency_name が足りません！'
# /em balance メッセージ
Wallet command message: &2$balance $currency_name を持っています
# プレイヤーが他のプレイヤーに通貨を送信しようとしたときに送信される確認メッセージを設定します。
Tax confirmation message: '&c支払いを送信すると、$percentage% の税金がかかります。 &a続行するには &9$command &aを実行してください！'
# プレイヤーがショップから購入したときに送信されるメッセージを設定します。
Shop buy message: '&a$item_name を &a$item_value $currency_name &aで購入しました！'
# プレイヤーがショップとインタラクトしたときに送信されるメッセージを設定します。
Shop current balance message: '&a$currency_amount $currency_name を持っています。'
# アイテムを購入するのに十分な通貨を持っていないときに送信されるメッセージを設定します。
Shop insufficient funds message: '&c$currency_name が足りません！'
# プレイヤーが購入できないアイテムを購入しようとしたときに送信されるメッセージの2番目の部分を設定します。
Shop item cost message: そのアイテムは &c$item_value $currency_name です。
# アイテムをショップに売却したときに送信されるメッセージを設定します。
Shop sell message: '&a$item_name を &a$currency_amount $currency_name &aで売却しました！'
# そのプレイヤーに属さないアイテムを売却しようとしたときに送信されるメッセージを設定します。
Shop sale player items warning: '&c現在ソウルバウンドされていないアイテムは売却できません！これには他のプレステージティアのアイテムも含まれます！'
# EliteMobs以外のアイテムを売却しようとしたときに送信されるメッセージを設定します。
Shop sale instructions: '&cここではEliteMobsのルートのみを売却できます！（エリートからドロップした、ロアに価値が表示されている防具/武器）'
# エリートアイテムのバッチを売却したときに送信されるメッセージを設定します。
shopBatchSellItem: '&aアイテムを &a$currency_amount $currency_name &aで売却しました！'
lootShowerMaterial:
  # ドロップされたエリートコイン1個の素材タイプを設定します。
  '1': GOLD_NUGGET
  # ドロップされたエリートコイン5個の素材タイプを設定します。
  '5': GOLD_INGOT
  # ドロップされたエリートコイン10個の素材タイプを設定します。
  '10': GOLD_BLOCK
  # ドロップされたエリートコイン20個の素材タイプを設定します。
  '20': EMERALD
  # ドロップされたエリートコイン50個の素材タイプを設定します。
  '50': EMERALD_BLOCK
  # ドロップされたエリートコイン100個の素材タイプを設定します。
  '100': DIAMOND
  # ドロップされたエリートコイン500個の素材タイプを設定します。
  '500': DIAMOND_BLOCK
  # ドロップされたエリートコイン1000個の素材タイプを設定します。
  '1000': NETHER_STAR
lootShowerData:
  # ドロップされたエリートコイン1個のカスタムモデルIDを設定します。リソースパックで使用されます。
  '1': 1
  # ドロップされたエリートコイン5個のカスタムモデルIDを設定します。
  '5': 1
  # ドロップされたエリートコイン10個のカスタムモデルIDを設定します。
  '10': 1
  # ドロップされたエリートコイン20個のカスタムモデルIDを設定します。
  '20': 1
  # ドロップされたエリートコイン50個のカスタムモデルIDを設定します。
  '50': 1
  # ドロップされたエリートコイン100個のカスタムモデルIDを設定します。
  '100': 1
  # ドロップされたエリートコイン500個のカスタムモデルIDを設定します。
  '500': 1
  # ドロップされたエリートコイン1000個のカスタムモデルIDを設定します。
  '1000': 1
materialWorth:
  # elitemobs通貨システムにおけるこの素材の価値を設定します。
  DIAMOND_AXE: 17.0
  # elitemobs通貨システムにおけるこの素材の価値を設定します。
  DIAMOND_BOOTS: 17.0
  # elitemobs通貨システムにおけるこの素材の価値を設定します。
  DIAMOND_CHESTPLATE: 17.0
  # elitemobs通貨システムにおけるこの素材の価値を設定します。
  DIAMOND_LEGGINGS: 17.0
  # elitemobs通貨システムにおけるこの素材の価値を設定します。
  DIAMOND_HELMET: 17.0
  # elitemobs通貨システムにおけるこの素材の価値を設定します。
  DIAMOND_PICKAXE: 17.0
  # elitemobs通貨システムにおけるこの素材の価値を設定します。
  DIAMOND_SHOVEL: 17.0
  # elitemobs通貨システムにおけるこの素材の価値を設定します。
  DIAMOND_SWORD: 17.0
  # elitemobs通貨システムにおけるこの素材の価値を設定します。
  DIAMOND_HOE: 17.0
  # elitemobs通貨システムにおけるこの素材の価値を設定します。
  IRON_AXE: 16.0
```

</details>
```Okay, I can do that. Please specify the language you want the text translated into.Please specify the language you would like the text translated into. I will translate it and retain the markdown formatting once you provide the language.Please specify the language you would like the text translated into. I will then translate it while retaining the markdown formatting.