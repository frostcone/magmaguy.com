# BetterStructures コマンド

以下は、BetterStructures プラグインで使用可能なコマンドの包括的なリストと、それぞれの必要な権限です。

## リロードコマンド

**コマンド:** `/betterstructures reload`

**権限:** `betterstructures.*`

**説明:** プラグインをリロードします。また、インポートが必要な構造物をインポートします。

## Lootify コマンド

**コマンド:** `/betterstructures lootify <宝ファイル名> <レア度> <最小量> <最大量> <重み>`

**権限:** `betterstructures.*`

**説明:** 現在手に持っているアイテムを、特定の `generator` の特定の `レア度`
テーブルに追加します。チェスト内で見つかるアイテムの量が `最小量` と `最大量` の間でランダムになり、`重み` で指定した確率で出現します。

これは非常に特殊なシステムです。これらの値がどのように機能するかの詳細については、[このページ]($language$/betterstructures/creating_structures.md)
を参照してください。

## Place コマンド

**コマンド:** `/betterstructures place <構造ファイル名> <ジェネレータータイプ>`

**権限:** `betterstructures.*`

**説明:** 選択した構造物を現在地に強制的に配置します。

## Teleportcoords コマンド

**コマンド:** `/betterstructures teleporttocoords <ワールド名> <x> <y> <z>`

**権限:** `betterstructures.*`

**説明:** 直接使用することを意図していません。これは、管理者が構造物へのテレポートを可能にするチャット警告をクリックしたときに実行されるコマンドです。

## Version コマンド

**コマンド:** `/betterstructures version`

**権限:** `betterstructures.*`

**説明:** チャットにプラグインのバージョンを出力します。

## Silent コマンド

**コマンド:** `/betterstructures silent`

**権限:** `betterstructures.*`

**説明:** サーバーで構造物が生成されることに関するサーバーオペレーター向けのチャット警告のサイレント化またはサイレント解除を行います。
