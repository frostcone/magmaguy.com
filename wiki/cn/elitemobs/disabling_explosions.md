# 禁用爆炸伤害

## 禁用方块伤害

### 使用 gamerule

运行命令 `/gamerule mobGriefing false`。这将阻止爆炸造成的所有方块损坏。

### 使用 WorldGuard

将标志 `ghast-fireball` 设置为拒绝。这会阻止所有恶魂火球的伤害。

## 禁用 EliteMobs 火球：

1. 转到 *~plugins\EliteMobs\powers* 文件夹。
2. 转到 *attack_fireball.yml* 并将 `isEnabled` 设置为 `false`。
3. 转到 *tracking_fireball.yml* 并将 `isEnabled` 设置为 `false`。
