# События Elite Script

EliteScripts основаны на событиях. Это означает, что они запускаются при срабатывании определенного события. Ниже приведены текущие допустимые события:

| Событие                        |                    Подробности                    | Прямая цель [[?]($language$/elitemobs/elitescript_targets.md)] |
|:-------------------------------|:-------------------------------------------------:|:--------------------------------------------------------------:|
| EliteMobDamagedByEliteMobEvent |          Элита повреждена другой элитой           |                               ❌                                |
| EliteMobDamagedByPlayerEvent   |             Элита повреждена игроком              |                      Наносящий урон игрок                      |
| EliteMobDamagedEvent           |            Элита повреждена чем угодно            |                               ❌                                |
| EliteMobDeathEvent             |                   Смерть элиты                    |                               ❌                                |
| EliteMobEnterCombatEvent       |          Элита вступает в бой с игроком           |                     Вступивший в бой игрок                     |
| EliteMobExitCombatEvent        |               Элита выходит из боя                |                               ❌                                |
| EliteMobHealEvent              |             Элита полностью исцелена              |                               ❌                                |
| EliteMobSpawnEvent             |                  Появление элиты                  |                               ❌                                |
| EliteMobTargetPlayerEvent      |       Элита выбирает игрока в качестве цели       |                      Игрок, ставший целью                      |
| PlayerDamagedByEliteMobEvent   |             Элита наносит урон игроку             |                     Игрок, получивший урон                     |
| ElitePhaseSwitchEvent          |          Босс появляется при смене фазы           |                               ❌                                |
| ZoneEnterEvent                 | Сущность входит в зону. Требуется установка зоны! |                   Сущность, вошедшая в зону                    |
| ZoneLeaveEvent                 | Сущность покидает зону. Требуется установка зоны! |                   Сущность, покинувшая зону                    |

**Примечание: "Элита" относится к любой агрессивной сущности, порожденной плагином, независимо от того, является ли она
подкреплением, боссом или чем-либо еще.**
**Примечание: ZoneEnterEvent и ZoneLeaveEvent вычислительно затратны, поэтому используйте их экономно!**

`Прямая цель` используется Script Targets, подробнее об этом [здесь]($language$/elitemobs/elitescript_targets.md).

`ZoneEnterEvent` и `ZoneLeaveEvent` — это специальные события, которые позволяют сценаристам запускать действия на
основе входа и выхода сущностей из зон, установленных в скриптах. ПРЯМАЯ_ЦЕЛЬ для ZoneEnterEvent и ZoneLeaveEvent - это
сущность, которая вошла или вышла (это означает, что вы не можете использовать прямую цель в качестве цели зоны), и
из-за того, как работает внутренняя логика, для сканирования входа и выхода могут использоваться только абсолютные
точки (конкретные координаты) и точки относительно босса (нельзя использовать зоны, которые нацеливаются на игроков).

В одном скрипте может быть только один раздел [Event]($language$/elitemobs/elitescript_events.md). Однако несколько
событий могут быть установлены в качестве триггеров для скрипта:

<div align="center">

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    - EliteMobTargetPlayerEvent
    Actions:
    - action: PUSH
      Target:
        targetType: SELF
      vValue: 0,.3,0
    Cooldowns:
      local: 60
      global: 20
```

Этот скрипт заставит элиту прыгать, когда ее ударит игрок или когда она выберет игрока в качестве цели.

</div>

</details>

</div>
