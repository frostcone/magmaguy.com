# 禁用爆炸伤害

## 禁用方块破坏

### 使用游戏规则

运行命令 `/gamerule mobGriefing false`。这可以阻止所有爆炸造成的方块破坏。

### 使用 WorldGuard

将标记 `ghast-fireball` 设置为 deny。这可以阻止所有恶魂火球造成的伤害。

## 禁用 EliteMobs 火球:

1. 进入 *~plugins\EliteMobs\powers* 文件夹。
2. 进入 *attack_fireball.yml* 文件，并将 `isEnabled` 设置为 `false`。
3. 进入 *tracking_fireball.yml* 文件，并将 `isEnabled` 设置为 `false`。
