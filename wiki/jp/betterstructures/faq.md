# コマンドの使用方法
- ヘルプについては、コマンド ページを参照してください: [コマンド ページ]($language$/betterstructures/commands.md)

# 構造物が現れる場所の確認
- サーバー管理者であり、警告をオフにしていない場合は、構造物が現れるとチャットで通知されます。
- チャット メッセージをクリックして、構造体にテレポートします (Bedrock エディションの場合ではありません)。
- `/betterstructures warn` で警告をオン/オフにします。

# 構造物が表示されない理由
- 通常、構造物はすでに探索されたエリアには表示されません。構造体を探して新しいエリアを訪れてください。

<details>
<summary>詳細情報</summary>

構造物がすでに探索されたエリアに表示されないのは、それらを過度に埋め尽くし、プレイヤーの建物を損傷するのを避けるためです。BetterStructures は、エリアがインストール前に探索されたかどうかを認識しており、そこに構造物を配置しません。BetterStructures をインストールする前にワールドが完全に探索された場合は、再生成するか、新しいワールドを作成する必要があります。

</details>

# EliteMobs と BetterStructures

## EliteMobs が提供するもの
- EliteMobs について学ぶ: [EliteMobs Wiki](#)
- 構造体にボスを追加します。

## 事前に作成された EliteMobs コンテンツの入手
- [magmaguy.itch.io](https://magmaguy.itch.io/) および [patreon.com/magmaguy](https://www.patreon.com/magmaguy) で入手可能

## 他の機能を使用せずに EliteMobs を使用する
- 他の EliteMobs 機能をオフにすることができます。無効にするには、次の設定を変更します。
    - events.yml: `timedEventsEnabled: false` および `actionEventsEnabled: false` は、すべてのイベントを無効にします
    - MobCombatSettings.yml: `doNaturalMobSpawning: false` は、自然なエリート スポーンを無効にします

## EliteMobs ボスを構造体に追加する

- サインの最初の行に `[elitemobs]` を追加します。
- サインの 2 番目/3 番目/4 番目の行に、`test_boss.yml` のようにボスのファイル名を追加します。
- 詳細については [こちら]($language$/betterstructures/creating_structures.md) を参照してください。

# BetterStructures とその他のプラグイン

## MythicMobs
- `[mythicmobs]` が記述されたサインを使用し、サインの他の行に続けてモブ識別子を使用して、神話のモブをスポーンします。
- EliteMobs は、両方を作成したため、BetterStructures を持つボスに適しています。

## MMOItems
- トレジャー設定ファイルに `mmoitems=<TYPE>@<ITEM-ID>` を使用して MMOItems を追加します。

## 他のプラグインのカスタム アイテム
- lootify コマンドを使用して、任意のアイテムをチェストに追加します。[コマンド ページ]($language$/betterstructures/commands.md)を参照してください。

# 独自の構造を作成する
- 方法を学ぶ: [構造作成ガイド]($language$/betterstructures/creating_structures.md)

# パフォーマンスへの影響と最小化
- 多くの構造物を生成すると、サーバーの速度が低下する可能性があります。
- [Chunky](https://www.spigotmc.org/resources/chunky.81534/) を使用してワールドを事前生成し、パフォーマンスの問題を回避します。
- EliteMobs を使用しない場合は、ワールドの生成後に BetterStructures を削除できます。
- EliteMobs を使用する場合は、パフォーマンスへの影響を最小限に抑えながら、BetterStructures を保護されたエリアの管理のために維持します。
