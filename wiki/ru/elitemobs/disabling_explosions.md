# Отключение урона от взрывов

## Отключение повреждения блоков

### Использование gamerule

Выполните команду `/gamerule mobGriefing false`. Это предотвратит все повреждения блоков от взрывов.

### Использование WorldGuard

Установите флаг `ghast-fireball` в deny. Это предотвратит все повреждения от огненных шаров Гаста.

## Отключение файерболов EliteMobs:

1. Перейдите в папку *~plugins\EliteMobs\powers*.
2. Перейдите в *attack_fireball.yml* и установите `isEnabled` в `false`.
3. Перейдите в *tracking_fireball.yml* и установите `isEnabled` в `false`.

