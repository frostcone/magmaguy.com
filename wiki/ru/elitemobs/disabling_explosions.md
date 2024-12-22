# Отключение урона от взрывов

## Отключение урона блокам

### Использование gamerule

Выполните команду `/gamerule mobGriefing false`. Это предотвратит любой урон блокам от взрывов.

### Использование WorldGuard

Установите флаг `ghast-fireball` в deny. Это предотвратит весь урон от огненных шаров гастов.

## Отключение огненных шаров EliteMobs:

1. Перейдите в папку *~plugins\EliteMobs\powers*.
2. Откройте файл *attack_fireball.yml* и установите значение `isEnabled` в `false`.
3. Откройте файл *tracking_fireball.yml* и установите значение `isEnabled` в `false`.
