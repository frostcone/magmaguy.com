Здесь перечислены флаги WorldGuard, которые использует EliteMobs, и их функции.

***

# elitemob-spawning (allow/deny)
Устанавливает, могут ли элитные мобы появляться в регионе. Поведение по умолчанию заключается в том, что элитные мобы разрешены к появлению везде, и поэтому основное назначение этого флага — отключить их для конкретного региона. Если вы хотите отключить появление элитных мобов для всего мира, вместо этого рекомендуется отредактировать файл ValidWorlds.yml.

***

# elitemob-only-spawning (allow/deny)
Устанавливает, могут ли в регионе появляться *только* элитные мобы. Это не увеличивает количество элитных мобов, появляющихся в области, а лишь предотвращает появление неэлитных мобов в этой области. Это предназначено для пользователей, которые хотят иметь целые области, где могут появляться только элитные мобы, например, арены или зоны повышенной сложности.

***

# elitemobs-antiexploit (allow/deny)
Устанавливает, может ли антиэксплойт срабатывать в регионе. `allow` позволит антиэксплойту работать, `deny` предотвратит его работу. `deny` рекомендуется для готовых арен и подземелий, где вы уже протестировали местность на наличие эксплойтов.

***

Также обратите внимание: NPC переопределяют флаг `mob-spawning deny` в качестве формы совместимости со сторонними плагинами (WorldGuard). Если вы не хотите, чтобы NPC находились в области, рекомендуется удалить их вручную.

***

# elitemobs-maximum-level

Устанавливает максимальный уровень элитных мобов, которые могут появляться в регионе. Влияет только на естественно появляющихся элитных мобов (Пользовательские Боссы игнорируют это). Уровень должен быть целочисленным значением (без значений вроде `1.5`, нужно использовать целые числа, такие как `1` или `2`).

***

# elitemobs-minimum-level

Устанавливает минимальный уровень элитных мобов, которые могут появляться в регионе. Влияет только на естественно появляющихся элитных мобов (Пользовательские Боссы игнорируют это). Уровень должен быть целочисленным значением (без значений вроде `1.5`, нужно использовать целые числа, такие как `1` или `2`).

***

# elitemobs-dungeon

Устанавливает, что в области разрешены только обычные мобы, появляющиеся с причиной появления `CUSTOM`, а также Региональные Боссы и Пользовательские Боссы. Это предназначено для использования в мини-подземельях.