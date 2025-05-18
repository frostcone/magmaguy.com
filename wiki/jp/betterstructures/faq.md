日本語に翻訳します。Markdownの書式は維持します。

# コマンドの使い方
- ヘルプについてはコマンドページをご覧ください: [コマンドページ]($language$/betterstructures/commands.md)

# 構造物が出現する場所の確認
- サーバー管理者で警告をオフにしていない場合、構造物が出現した際にチャットで通知されます。
- チャットメッセージをクリックすると、その構造物にテレポートできます (Bedrock版では利用できません)。
- `/betterstructures warn` で警告のオン/オフを切り替えられます。

# 構造物が出現しない理由
- 通常、構造物は既に探索済みのエリアには出現しません。構造物を見つけるには、新しいエリアを訪れてください。

<details>
<summary>詳細</summary>

構造物が既に探索済みのエリアに出現しないのは、そのエリアが構造物で埋め尽くされたり、プレイヤーの建築物を損傷したりするのを避けるためです。BetterStructuresは、インストール前にそのエリアが探索済みであったかを知っており、そこに構造物を配置しません。BetterStructuresをインストールする前にワールド全体が探索済みだった場合、ワールドを再生成するか、新しいワールドを作成する必要があります。

</details>

# EliteMobsとBetterStructures

## EliteMobsが提供するもの
- EliteMobsについて学ぶ: [EliteMobs Wiki](#)
- 構造物にボスを追加します。

## 事前に作成されたEliteMobsコンテンツの入手
- [magmaguy.itch.io](https://magmaguy.itch.io/) および [patreon.com/magmaguy](https://www.patreon.com/magmaguy) で入手可能です。

## 他の機能を使わずにEliteMobsを利用する
- 他のEliteMobs機能をオフにすることができます。無効にするには、以下の設定を変更してください:
    - events.yml: `timedEventsEnabled: false` と `actionEventsEnabled: false` ですべてのイベントを無効にします。
    - MobCombatSettings.yml: `doNaturalMobSpawning: false` で自然なエリートのスポーンを無効にします。

## 構造物にEliteMobsボスを追加する

- 看板の1行目に `[elitemobs]` を追加します。
- 看板の2行目/3行目/4行目に、`test_boss.yml` のようにボスのファイル名を追加します。
- 詳細はこちら: [こちら]($language$/betterstructures/creating_structures.md)

# 他のプラグインとの連携

## MMOItems
- 宝箱の設定ファイルに `mmoitems=<TYPE>@<ITEM-ID>` を追加することで、MMOItemsを追加できます。

## 他のプラグインのカスタムアイテム
- lootifyコマンドを使用して、任意のアイテムをチェストに追加できます。[コマンドページ]($language$/betterstructures/commands.md)をご覧ください。

# 独自の構造物の作成
- 作成方法を学ぶ: [構造物作成ガイド]($language$/betterstructures/creating_structures.md)

# パフォーマンスへの影響と最小化
- 多くの構造物を生成すると、サーバーが遅くなる可能性があります。
- [Chunky](https://www.spigotmc.org/resources/chunky.81534/) を使用してワールドを事前に生成し、パフォーマンスの問題を回避してください。
- EliteMobsを使用しない場合、ワールド生成後にBetterStructuresを削除できます。
- EliteMobsを使用する場合、保護エリアの管理のためにBetterStructuresを残しておきます。その場合の影響は最小限です。