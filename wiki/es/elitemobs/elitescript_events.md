# Eventos de Script de Élite

Los Scripts de Élite están basados en eventos. Esto significa que se lanzan cuando se activa un evento específico. Los siguientes son los eventos actualmente válidos:

| Evento | Detalles | Objetivo Directo [[?]($language$/elitemobs/elitescript_targets.md)] |
| --- | :-: |:----------------------------------------------------------------:|
| EliteMobDamagedByEliteMobEvent | Élite dañada por otra élite |                                ❌                                 |
| EliteMobDamagedByPlayerEvent | Élite dañada por un jugador |                         Jugador que daña                          |
| EliteMobDamagedEvent | Élite dañada por cualquier cosa |                                ❌                                 |
| EliteMobDeathEvent | Muerte de élite |                                ❌                                 |
| EliteMobEnterCombatEvent | Élite entra en combate con jugador |                         Jugador con el que se compromete                          |
| EliteMobExitCombatEvent | Élite sale del combate |                                ❌                                 |
| EliteMobHealEvent | Cura completa de élite |                                ❌                                 |
| EliteMobSpawnEvent | Aparece élite |                                ❌                                 |
| EliteMobTargetPlayerEvent | Jugador objetivo de élite |                         Jugador apuntado                          |
| PlayerDamagedByEliteMobEvent | Élite daña al jugador |                          Jugador dañado                          |
| ElitePhaseSwitchEvent | Jefe aparece al cambiar de fase |                                ❌                                 |

**Nota: "Élite" se refiere a cualquier entidad agresiva generada por el plugin, sin importar si son refuerzos, un jefe u otra cosa.**

`Objetivo Directo` se utiliza en los Objetivos del Script, más detalles [aquí]($language$/elitemobs/elitescript_targets.md).

Solo puede haber una sección de [Evento]($language$/elitemobs/elitescript_events.md) por script. Sin embargo, varios eventos pueden ser establecidos como disparadores para un script:

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
    Eventos:
    - EliteMobDamagedByPlayerEvent
    - EliteMobTargetPlayerEvent
    Acciones:
    - acción: EMPUJE
      Objetivo:
        tipoDeObjetivo: AUTOS
      vValor: 0,.3,0
    Tiempos de espera:
      local: 60
      global: 20
```

Este script haría que la élite saltara cuando fuera golpeada por un jugador o cuando apuntara a un jugador.

</div>

</details>

</div>