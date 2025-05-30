Инстансированные подземелья имеют специальную настройку для легкого определения различных уровней сложности для подземелья.

# Как это работает

Уровни сложности частично смоделированы по системе синхронизации уровней из Final Fantasy 14.

Элитные доспехи и оружие получают особый элитный урон и элитную защиту в зависимости от своего уровня, как вы можете видеть на предметах. Находясь в инстансированном подземелье с включенной сложностью, уровень предмета будет временно и невидимо понижен, чтобы соответствовать синхронизации уровней.

Вот конкретный пример: меч 100-го уровня наносит 100 урона без зачарований. Если игрок находится в инстансированном подземелье со сложностью, которая синхронизирует снаряжение до 50-го уровня, меч будет действовать как меч 50-го уровня и наносить 50 урона.

Однако, если этот меч имеет остроту 10-го уровня, он все равно добавит то же количество урона сверх базового урона.

Это означает, что в инстансированных подземельях с уровнями сложности важен не столько уровень снаряжения, сколько его качество. Игрокам, стремящимся пройти мифическую сложность, придется работать над получением высококачественных предметов из других инстансированных подземелий и, возможно, активно взаимодействовать с системой улучшения предметов.

Это также делает практически невозможным для опытных игроков легко проходить старый высокоуровневый контент и дает стимул заниматься им, даже если их уровень значительно превышает уровень подземелья.

# Система групп

Чтобы учесть группы игроков, боссы разработаны с особыми способностями, которые становятся более опасными по мере присоединения большего числа игроков на арену. Кроме того, боссы получают нелинейное увеличение запаса здоровья по мере присоединения большего числа игроков к инстансу.

# Как определить сложность

Сложности определяются в папке `dungeonpackager` в файле пакета подземелья для инстансированных подземелий.

Давайте посмотрим на пример:

```yml
difficulties:
- levelSync: 60
  name: normal
- levelSync: 50
  name: hard
- levelSync: 40
  name: mythic
```

Это устанавливает три уровня сложности. Уровни сложности имеют два обязательных необязательных поля: `name` и `levelSync`.

Name — это название сложности, которое будет отображаться в настройках сложности в игре. Оно может быть любым.

Level sync устанавливает ограничение на уровень предметов для инстансированного подземелья, как объяснено выше на этой странице.

Вы можете определить столько уровней сложности, сколько хотите. Просто добавьте или удалите записи в настройке difficulties, используя тот же формат.

## Способности в зависимости от сложности

Можно настроить боссов так, чтобы они имели способности только на определенных уровнях сложности. Давайте посмотрим на пример:

```yml
powers:
- filename: invulnerability_fire.yml
  difficultyID:
  - 1
  - 2
```

**Примечание: это часть файла конфигурации пользовательского босса!**

В этом случае босс будет иметь неуязвимость к огню только для уровней сложности с ID `1` и `2`.

*При добавлении уровней сложности их ID будут начинать отсчет с 0 и увеличиваться по мере добавления новых уровней сложности.*

## Добыча в зависимости от сложности

Можно настроить боссов так, чтобы они сбрасывали добычу, специфичную для определенного уровня сложности инстансированного подземелья. Давайте посмотрим на пример:

```yml
uniqueLootList:
- filename: himiko_boss_drop_axe_tank_normal.yml
  chance: 0.05
  difficultyID: 0
```

**Примечание: это часть файла конфигурации пользовательского босса!**

В этом случае босс будет сбрасывать добычу `himiko_boss_drop_axe_tank_normal.yml` только для сложности `0` с шансом 5%.