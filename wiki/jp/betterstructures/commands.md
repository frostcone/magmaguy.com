# BetterStructures コマンド

以下は、BetterStructures プラグインで使用できるコマンドの包括的なリストと、それぞれの必要な権限です。

## リロードコマンド

**コマンド:** `/betterstructures reload`

**権限:** `betterstructures.*`

**説明:** プラグインをリロードします。また、インポートする必要がある構造をインポートします。

## Lootify コマンド

**コマンド:** `/betterstructures lootify <宝のファイル名> <レアリティ> <最小量> <最大量> <ウェイト>`

**権限:** `betterstructures.*`

**説明:** 現在保持しているアイテムを、特定の `ジェネレーター` の特定の `レアリティ` テーブルに追加します。チェストで見つかるアイテムの量は `最小量` と `最大量` の間でランダム化され、`ウェイト` が指定されます。

これは非常に特殊なシステムです。これらの値がどのように機能するかについての詳細は、[このページ]($language$/betterstructures/creating_structures.md)をご覧ください。

## 配置コマンド

**コマンド:** `/betterstructures place <構造ファイル名> <ジェネレータータイプ>`

**権限:** `betterstructures.*`

**説明:** 選択した構造を、現在地の場所に強制的に配置します。

## Teleportcoords コマンド

**コマンド:** `/betterstructures teleporttocoords <ワールド名> <x> <y> <z>`

**権限:** `betterstructures.*`

**説明:** 直接使用するためのものではなく、管理者が構造にテレポートできるようにするチャット警告をクリックしたときに実行されるコマンドです。

## バージョンコマンド

**コマンド:** `/betterstructures version`

**権限:** `betterstructures.*`

**説明:** チャットにプラグインのバージョンを出力します。

## サイレントコマンド

**コマンド:** `/betterstructures silent`

**権限:** `betterstructures.*`

**説明:** サーバーオペレーターに表示される構造生成に関するチャット警告をサイレントにしたり、サイレントを解除したりします。

```



