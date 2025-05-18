```simplifiedchinese
# 禁用爆炸伤害

## 禁用方块破坏

### 使用 gamerule

运行命令 `/gamerule mobGriefing false`。这将阻止所有爆炸造成的方块破坏。

### 使用 WorldGuard

将旗帜（flag）`ghast-fireball` 设置为 deny。这将阻止所有恶魂火球造成的伤害。

## 禁用 EliteMobs 火球：

1.  前往 *~plugins\EliteMobs\powers* 文件夹。
2.  前往 *attack_fireball.yml* 并将 `isEnabled` 设置为 `false`。
3.  前往 *tracking_fireball.yml* 并将 `isEnabled` 设置为 `false`。
```