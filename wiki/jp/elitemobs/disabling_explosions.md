# 爆発ダメージの無効化

## ブロックダメージの無効化

### gamerule を使用

コマンド `/gamerule mobGriefing false` を実行します。これにより、爆発によるすべてのブロックダメージを防ぐことができます。

### WorldGuard を使用

`ghast-fireball` フラグを拒否に設定します。これにより、すべてのガストの火球ダメージを防ぐことができます。

## EliteMobs の火球の無効化:

1. *~plugins\EliteMobs\powers* フォルダーに移動します。
2. *attack_fireball.yml* に移動して、`isEnabled` を `false` に設定します。
3. *tracking_fireball.yml* に移動して、`isEnabled` を `false` に設定します。

```



