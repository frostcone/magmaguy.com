Здесь перечислены флаги WorldGuard, которые есть у EliteMobs, и их функции.

***

# elitemob-spawning (allow/deny)

Определяет, могут ли элитные мобы появляться в регионе. По умолчанию элитные мобы могут появляться везде, поэтому
основное назначение этого флага - отключить их для определенного региона. Если вы хотите отключить появление элитных
мобов для всего мира, я рекомендую отредактировать файл ValidWorlds.yml.

***

# elitemob-only-spawning (allow/deny)

Определяет, могут ли в регионе появляться только элитные мобы. Это не увеличивает количество элитных мобов, которые
появляются в области, это только предотвращает появление не-элитных мобов в этой области. Это для пользователей, которые
хотят иметь целые области, где могут появляться только элитные мобы, такие как арены или зоны повышенной сложности.

***

# elitemobs-antiexploit (allow/deny)

Определяет, может ли антиэксплойт срабатывать в регионе. Allow позволит антиэксплойту работать, deny предотвратит его
работу. Deny рекомендуется для готовых арен и подземелий, где вы уже протестировали местность на наличие эксплойтов.

***

Также обратите внимание: NPC отменяют флаг запрета появления мобов как форма сторонней совместимости с WorldGuard. Если
вы не хотите иметь NPC в области, я рекомендую удалить их вручную.

***

# elitemobs-maximum-level

Устанавливает максимальный уровень элитных мобов, которые могут появляться в регионе. Влияет только на естественным
образом появившихся элитов (Пользовательские боссы игнорируют это). Уровень должен быть целым числом (никаких значений
типа `1.5`, вы должны использовать целые числа, такие как `1` или `2`).

***

# elitemobs-minimum-level

Устанавливает минимальный уровень элитных мобов, которые могут появляться в регионе. Влияет только на естественным
образом появившихся элитов (Пользовательские боссы игнорируют это). Уровень должен быть целым числом (никаких значений
типа `1.5`, вы должны использовать целые числа, такие как `1` или `2`).

***

# elitemobs-dungeon

Устанавливает область, чтобы разрешить только обычных мобов, появляющихся с причиной CUSTOM, а также региональных боссов
и пользовательских боссов. Это для использования в мини-подземельях.
