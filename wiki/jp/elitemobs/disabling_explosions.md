# 爆発ダメージの無効化

## ブロックダメージの無効化

### gameruleを使う

コマンド `/gamerule mobGriefing false` を実行してください。これにより、爆発によるすべてのブロックダメージを防ぎます。

### WorldGuardを使う

`ghast-fireball` フラグを deny に設定してください。これにより、ガストの火の玉によるすべてのダメージを防ぎます。

## EliteMobsの火の玉の無効化:

1. *~plugins\EliteMobs\powers* フォルダに移動してください。
2. *attack_fireball.yml* に移動し、`isEnabled` を `false` に設定してください。
3. *tracking_fireball.yml* に移動し、`isEnabled` を `false` に設定してください。
