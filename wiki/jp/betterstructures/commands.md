日本語に翻訳します。Markdownの書式は維持します。

# BetterStructures コマンド

以下は、BetterStructures プラグインで使用できるコマンドの包括的なリストと、それぞれの必要な権限です。

## リロードコマンド

**コマンド:** `/betterstructures reload`

**権限:** `betterstructures.*`

**説明:** プラグインをリロードします。また、インポートする必要がある構造物もインポートします。

## ルーティファイコマンド

**コマンド:** `/betterstructures lootify <treasure filename> <rarity> <minAmount> <maxAmount> <weight>`

**権限:** `betterstructures.*`

**説明:** 現在手に持っているアイテムを、指定された `generator` の指定された `rarity` テーブルに追加します。チェストで見つかるアイテムの量は `minAmount` から `maxAmount` の間でランダム化され、指定された `weight` が適用されます。

これは非常に特殊なシステムです。これらの値がどのように機能するかの詳細については、[このページ]($language$/betterstructures/creating_structures.md)を参照してください。

## 配置コマンド

**コマンド:** `/betterstructures place <structure filename> <generator type>`

**権限:** `betterstructures.*`

**説明:** 選択した構造物をあなたの現在地に強制的に配置します。

## テレポート座標コマンド

**コマンド:** `/betterstructures teleporttocoords <worldName> <x> <y> <z>`

**権限:** `betterstructures.*`

**説明:** 直接使用することを意図していません。これは、管理者が構造物へのテレポートを許可するチャット警告をクリックしたときに実行されるコマンドです。

## バージョンコマンド

**コマンド:** `/betterstructures version`

**権限:** `betterstructures.*`

**説明:** チャットにプラグインのバージョンを出力します。

## サイレントコマンド

**コマンド:** `/betterstructures silent`

**権限:** `betterstructures.*`

**説明:** サーバーオペレーター向けに、サーバー内で構造物が生成されることに関するチャット警告をミュートまたはミュート解除します。