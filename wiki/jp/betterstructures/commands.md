# BetterStructures のコマンド

以下は、BetterStructures プラグインで使用可能なコマンドの包括的なリストと、それらに対応する必要な権限です。

## リロード コマンド

**コマンド:** `/betterstructures reload`

**権限:** `betterstructures.*`

**説明:** プラグインを再読み込みします。また、インポートが必要な構造もインポートします。

## Lootify コマンド

**コマンド:** `/betterstructures lootify <treasure filename> <rarity> <minAmount> <maxAmount> <weight>`

**権限:** `betterstructures.*`

**説明:** 現在保持しているアイテムを特定の `ジェネレーター` の特定の `rarity` テーブルに追加し、`minAmount`
と `maxAmount` の間でチェストで見つけられるアイテムの量をランダム化し、指定された `weight` を使用します。

これは非常に特殊なシステムであり、これらの値の仕組みの詳細については、[このページ]($language$/betterstructures/creating_structures.md)
を参照してください。

## Place コマンド

**コマンド:** `/betterstructures place <structure filename> <generator type>`

**権限:** `betterstructures.*`

**説明:** 選択した構造を現在地に強制的に配置します。

## Teleportcoords コマンド

**コマンド:** `/betterstructures teleporttocoords <worldName> <x> <y> <z>`

**権限:** `betterstructures.*`

**説明:** 直接使用することを意図したものではありません。これは、管理者が構造体にテレポートできるチャット警告をクリックしたときに実行されるコマンドです。

## Version コマンド

**コマンド:** `/betterstructures version`

**権限:** `betterstructures.*`

**説明:** プラグインのバージョンをチャットに出力します。

## Silent コマンド

**コマンド:** `/betterstructures silent`

**権限:** `betterstructures.*`

**説明:** サーバーオペレーターがサーバーで生成されている構造に関するチャットに表示される警告をミュートまたはミュート解除します。
