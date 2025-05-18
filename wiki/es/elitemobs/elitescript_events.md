```markdown
# Eventos de Script de Élite

Los EliteScripts se basan en eventos. Esto significa que se activan cuando se desencadena un evento específico. Los siguientes son los eventos actualmente válidos:

| Evento | Detalles | Objetivo Directo [[?]($language$/elitemobs/elitescript_targets.md)] |
| --- | :-: |:----------------------------------------------------------------:|
| EliteMobDamagedByEliteMobEvent | Élite dañada por otra élite |                                ❌                                 |
| EliteMobDamagedByPlayerEvent | Élite dañada por un jugador |                         Jugador que daña                          |
| EliteMobDamagedEvent | Élite dañada por cualquier cosa |                                ❌                                 |
| EliteMobDeathEvent | Muerte de la élite |                                ❌                                 |
| EliteMobEnterCombatEvent | Élite entra en combate con jugador |                         Jugador con el que entra en combate                          |
| EliteMobExitCombatEvent | Élite sale de combate |                                ❌                                 |
| EliteMobHealEvent | Curación completa de la élite |                                ❌                                 |
| EliteMobSpawnEvent | Aparición de la élite |                                ❌                                 |
| EliteMobTargetPlayerEvent | Élite apunta a jugador |                         Jugador al que apunta                          |
| PlayerDamagedByEliteMobEvent | Élite daña a jugador |                          Jugador dañado                          |
| ElitePhaseSwitchEvent | Aparición de jefe por cambio de fase |                                ❌                                 |
| ZoneEnterEvent | Entidad entra en zona. ¡Requiere que se establezca una zona! | Entidad que entró en la zona                                 |
| ZoneLeaveEvent | Entidad sale de zona. ¡Requiere que se establezca una zona! | Entidad que salió de la zona                                 |

**Nota: "Élite" se refiere a cualquier entidad agresiva generada por el plugin, sin importar si es un refuerzo, un jefe o cualquier otra cosa.**
**Nota: ZoneEnterEvent y ZoneLeaveEvent son computacionalmente costosos de ejecutar, ¡así que úsalos con moderación!**

`Objetivo Directo` es utilizado por los Objetivos de Script, más información [aquí]($language$/elitemobs/elitescript_targets.md).

`ZoneEnterEvent` y `ZoneLeaveEvent` son eventos especiales que permiten a los scripters desencadenar acciones basadas en entidades que entran y salen de zonas establecidas en los scripts. El DIRECT_TARGET de ZoneEnterEvent y ZoneLeaveEvent es la entidad que entró o salió (esto significa que no puedes usar el objetivo directo como objetivo de la zona), y debido a cómo funciona la lógica interna, solo se pueden usar puntos absolutos (coordenadas específicas) y puntos relativos al jefe para escanear entradas y salidas (no se pueden usar zonas que apunten a jugadores).

Solo puede haber una sección de [Eventos]($language$/elitemobs/elitescript_events.md) por script. Sin embargo, se pueden establecer varios eventos como desencadenantes para un script:

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

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

Este script haría que la élite saltara al ser golpeada por un jugador o al apuntar a un jugador.

</div>

</details>

</div>
```