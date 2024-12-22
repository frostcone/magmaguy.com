# コマンドの使い方

- ヘルプについてはコマンドページを参照してください: [コマンドページ]($language$/betterstructures/commands.md)

# ストラクチャーの出現場所の確認

- サーバー管理者で、警告をオフにしていない場合は、ストラクチャーが出現するとチャットで通知されます。
- チャットメッセージをクリックするとストラクチャーにテレポートします（Bedrock版は除く）。
- 警告のオン/オフは、`/betterstructures warn` で切り替えます。

# ストラクチャーが出現しない理由

- 通常、ストラクチャーはすでに探索されたエリアには出現しません。新しいエリアに足を運んでストラクチャーを探してください。

<details> 
<summary>詳細</summary>

ストラクチャーが既に探索されたエリアに出現しないのは、そこを埋め尽くしすぎたり、プレイヤーの建物を損壊したりするのを避けるためです。BetterStructuresは、エリアがインストール前に探索されたかどうかを認識し、そこにストラクチャーを配置しません。もしワールドがBetterStructuresをインストールする前に完全に探索済みの場合、ワールドを再生成するか、新しいワールドを作成する必要があります。

</details>

# EliteMobsとBetterStructures

## EliteMobsが提供するもの

- EliteMobsについて学ぶ: [EliteMobs Wiki](#)
- ストラクチャーにボスを追加します。

## 事前に作成されたEliteMobsコンテンツの入手

- [magmaguy.itch.io](https://magmaguy.itch.io/) および [patreon.com/magmaguy](https://www.patreon.com/magmaguy) で入手できます。

## 他の機能を使用せずにEliteMobsを使用する

- 他のEliteMobsの機能をオフにすることができます。無効にするには、次の設定を変更してください:
    - events.yml: `timedEventsEnabled: false` と `actionEventsEnabled: false` で全てのイベントを無効にします。
    - MobCombatSettings.yml: `doNaturalMobSpawning: false` で自然なエリートスポーンを無効にします。

## EliteMobsのボスをストラクチャーに追加する

- 看板の1行目に `[elitemobs]` を追加します
- 看板の2/3/4行目にボスファイルの名前を `test_boss.yml` のように追加します
- 詳細は [こちら]($language$/betterstructures/creating_structures.md) を参照してください。

# BetterStructuresと他のプラグイン

## MythicMobs

- 看板に `[mythicmobs]` を追加し、他の行にmob識別子を追加することで、MythicMobsをスポーンさせます。
- EliteMobsはBetterStructuresのボスに適しています。なぜなら両方とも私が作ったからです。

## MMOItems

- トレジャー設定ファイルに `mmoitems=<TYPE>@<ITEM-ID>` を追加してMMOItemsを追加します。

## 他のプラグインのカスタムアイテム

-
lootifyコマンドを使用して、任意のアイテムをチェストに追加します。[コマンドページ]($language$/betterstructures/commands.md)
を参照してください。

# 独自のストラクチャーの作成

- 方法はこちらを参照してください: [ストラクチャー作成ガイド]($language$/betterstructures/creating_structures.md)

# パフォーマンスへの影響と最小化

- 多数のストラクチャーを生成すると、サーバーの動作が遅くなる可能性があります。
- [Chunky](https://www.spigotmc.org/resources/chunky.81534/) を使用してワールドを事前に生成し、パフォーマンスの問題を回避してください。
- EliteMobsを使用しない場合は、ワールド生成後にBetterStructuresを削除できます。
- EliteMobsを使用する場合は、保護されたエリア管理のためにBetterStructuresを維持してください（影響は最小限です）。
