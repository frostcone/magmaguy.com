```markdown
# Отключение урона от взрывов

## Отключение урона блокам

### Использование gamerule

Выполните команду `/gamerule mobGriefing false`. Это предотвращает любой урон блокам от взрывов.

### Использование WorldGuard

Установите флаг `ghast-fireball` в значение `deny`. Это предотвращает любой урон от огненных шаров гастов.

## Отключение огненных шаров EliteMobs:

1. Перейдите в папку *~plugins\EliteMobs\powers*.
2. Перейдите в *attack_fireball.yml* и установите `isEnabled` в значение `false`.
3. Перейдите в *tracking_fireball.yml* и установите `isEnabled` в значение `false`.
```