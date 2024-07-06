# コマンドの使い方

- ヘルプについては、コマンドページを参照してください: [コマンドページ]($language$/betterstructures/commands.md)

# 構造物の出現場所の確認

- サーバー管理者で、警告をオフにしていない場合は、構造物が表示されるとチャットで通知されます。
- チャットメッセージをクリックして構造物にテレポートします（Bedrock Edition は除く）。
- `/betterstructures warn` を使用して警告をオン/オフします。

# 構造物が表示されない理由

- 通常、構造物はすでに探索されたエリアには表示されません。構造物を探すには、新しいエリアに移動してください。

<details> 
<summary>詳細</summary>

構造物は、すでに探索されたエリアに配置されすぎるのを防ぎ、プレイヤーの建物を損傷させないように、すでに探索されたエリアには表示されません。BetterStructures は、インストール前にエリアが探索されたかどうかを認識しており、そこに構造物を配置しません。BetterStructures をインストールする前にワールドが完全に探索されていた場合は、ワールドを再生成するか、新しいワールドを作成する必要があります。

</details>

# EliteMobs と BetterStructures

## EliteMobs が提供するもの
- EliteMobs について学ぶ: [EliteMobs Wiki](#)
- 構造物にボスを追加します。

## 事前作成済みの EliteMobs コンテンツの入手
- [magmaguy.itch.io](https://magmaguy.itch.io/) と [patreon.com/magmaguy](https://www.patreon.com/magmaguy) で入手できます

## 他の機能を使用しない EliteMobs の使い方
- EliteMobs の他の機能をオフにすることができます。無効にするには、次のように設定を変更します。
    - events.yml: `timedEventsEnabled: false` と `actionEventsEnabled: false` にすると、すべてのイベントが無効になります。
    - MobCombatSettings.yml: `doNaturalMobSpawning: false` にすると、自然なエリートのスポーンが無効になります。

## 構造物に EliteMobs ボスを追加する

- サインの最初の行に `[elitemobs]` を追加します。
- サインの 2 行目/3 行目/4 行目にボスのファイル名 (`test_boss.yml` など) を追加します。
- 詳細については、[こちら]($language$/betterstructures/creating_structures.md)をご覧ください。

# BetterStructures と他のプラグイン

## MythicMobs
- サインの他の行に `[mythicmobs]` の後にモブ識別子を追加して、マイシックモブをスポーンします。
- EliteMobs は、BetterStructures との組み合わせでボスを使用する方が優れています。これは、私が両方を作成したためです。

## MMOItems
- 宝の構成ファイルに `mmoitems=<TYPE>@<ITEM-ID>` を追加して、MMOItems を追加します。

## 他のプラグインのカスタムアイテム
- Lootify コマンドを使用して、アイテムをチェストに追加します。[コマンドページ]($language$/betterstructures/commands.md) を参照してください。

# 独自の構造物の作成
- 作成方法については、[構造物の作成ガイド]($language$/betterstructures/creating_structures.md) を参照してください。

# パフォーマンスへの影響と最小化

- 多くの構造物を生成すると、サーバーの速度が低下する可能性があります。
- [Chunky](https://www.spigotmc.org/resources/chunky.81534/) を使用してワールドを事前に生成し、パフォーマンスの問題を回避してください。
- EliteMobs を使用しない場合は、ワールド生成後に BetterStructures を削除できます。
- EliteMobs を使用している場合は、BetterStructures を保護エリアの管理に使用し、影響を最小限に抑えます。


