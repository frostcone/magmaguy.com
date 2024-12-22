# 爆発ダメージの無効化

## ブロックダメージの無効化

### gamerule を使用する

`/gamerule mobGriefing false` コマンドを実行します。これにより、爆発によるすべてのブロックダメージを防ぎます。

### WorldGuard を使用する

`ghast-fireball` フラグを deny に設定します。これにより、ガストの火球によるすべてのダメージを防ぎます。

## EliteMobs の火球の無効化

1. *~plugins\EliteMobs\powers* フォルダに移動します。
2. *attack_fireball.yml* に移動し、`isEnabled` を `false` に設定します。
3. *tracking_fireball.yml* に移動し、`isEnabled` を `false` に設定します。
