日本語に翻訳します。

# 爆発ダメージの無効化

## ブロックダメージの無効化

### gameruleの使用

コマンド `/gamerule mobGriefing false` を実行します。これにより、爆発によるすべてのブロックダメージが無効になります。

### WorldGuardの使用

フラグ `ghast-fireball` を deny に設定します。これにより、ガストの火の玉によるすべてのダメージが無効になります。

## EliteMobsの火の玉の無効化:

1. *~plugins\EliteMobs\powers* フォルダに移動します。
2. *attack_fireball.yml* に移動し、`isEnabled` を `false` に設定します。
3. *tracking_fireball.yml* に移動し、`isEnabled` を `false` に設定します。