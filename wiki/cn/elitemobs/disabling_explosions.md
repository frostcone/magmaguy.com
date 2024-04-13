# 禁用爆炸伤害

## 禁用方块伤害

### 使用gamerule

运行命令 `/gamerule mobGriefing false`。这将阻止所有的爆炸破坏方块。

### 使用世界保护

设置标志 `ghast-fireball` 为 deny。这将阻止所有恶魂火球的伤害。

## 禁用精英怪物火球：

1. 转到 *~plugins\EliteMobs\powers* 文件夹。
2. 转到 *attack_fireball.yml* 文件，并将 `isEnabled` 设置为 `false`。
3. 到 *tracking_fireball.yml* 文件，并将 `isEnabled` 设置为 `false`。