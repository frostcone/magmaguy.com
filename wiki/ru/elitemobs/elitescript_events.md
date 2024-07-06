# События Elite Script

EliteScripts  основаны на событиях. Это означает, что они запускаются, когда происходит определенное событие. Вот список  действительных событий:

| Событие | Детали | Direct Target [[?]($language$/elitemobs/elitescript_targets.md)] |
| --- | :-: |:----------------------------------------------------------------:|
| EliteMobDamagedByEliteMobEvent | Элита получает урон от другой элиты |                                ❌                                 |
| EliteMobDamagedByPlayerEvent | Элита получает урон от игрока |                         Игрок, нанесший урон                          |
| EliteMobDamagedEvent | Элита получает урон от чего-либо |                                ❌                                 |
| EliteMobDeathEvent | Смерть элиты |                                ❌                                 |
| EliteMobEnterCombatEvent | Элита вступает в бой с игроком |                         Игрок, вступивший в бой                          |
| EliteMobExitCombatEvent | Элита выходит из боя |                                ❌                                 |
| EliteMobHealEvent | Полное исцеление элиты |                                ❌                                 |
| EliteMobSpawnEvent | Появление элиты |                                ❌                                 |
| EliteMobTargetPlayerEvent | Элита нацеливается на игрока |                         Игрок, на которого нацелились                          |
| PlayerDamagedByEliteMobEvent | Элита наносит урон игроку |                          Игрок, получивший урон                          |
| ElitePhaseSwitchEvent | Появление босса из-за переключения фазы |                                ❌                                 |
| ZoneEnterEvent | Существо входит в зону. Требуется, чтобы зона была установлена! |  Существо, вошедшее в зону                                 |
| ZoneLeaveEvent | Существо покидает зону. Требуется, чтобы зона была установлена! | Существо, покинувшее зону                                 |

**Примечание: "Elite"  относится к любой агрессивной сущности, порожденной плагином, независимо от того, является ли она подкреплением, боссом или чем-то еще.**
**Примечание: ZoneEnterEvent  и  ZoneLeaveEvent  требуют много ресурсов для выполнения, поэтому, пожалуйста, используйте их экономно!**

`Direct Target`  используется  Script Targets,  подробнее об этом [здесь]($language$/elitemobs/elitescript_targets.md).

`ZoneEnterEvent` и `ZoneLeaveEvent`  - это специальные события, которые позволяют scripters  запускать действия, основанные на входе и выходе сущностей из зон, установленных в скриптах. DIRECT_TARGET  ZoneEnterEvent  и  ZoneLeaveEvent  - это сущность, которая вошла или вышла (это означает, что вы не можете использовать  direct target  в качестве цели зоны), и из-за внутренней логики для сканирования входа и выхода могут использоваться только абсолютные точки (конкретные координаты) и точки, относительные к боссу (нельзя использовать зоны, которые направлены на игроков).

Может быть только одна секция [Event]($language$/elitemobs/elitescript_events.md)  на скрипт. Однако в качестве триггеров для скрипта можно задать несколько событий:

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

Этот скрипт заставит элиту прыгать вверх, когда ее бьет игрок, или когда она нацеливается на игрока.

</div>

</details>

</div>



