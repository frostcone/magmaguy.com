# Eventos de Elite Script

Los EliteScripts están basados en eventos. Esto significa que se inician cuando se activa un evento específico. Los siguientes son los eventos actualmente válidos:

| Evento | Detalles | Objetivo directo [[?]($language$/elitemobs/elitescript_targets.md)] |
| --- | :-: |:----------------------------------------------------------------:|
| EliteMobDamagedByEliteMobEvent | Élite dañada por otra élite |                                ❌                                 |
| EliteMobDamagedByPlayerEvent | Élite dañada por un jugador |                         Jugador dañino                          |
| EliteMobDamagedEvent | Élite dañada por cualquier cosa |                                ❌                                 |
| EliteMobDeathEvent | Muerte de élite |                                ❌                                 |
| EliteMobEnterCombatEvent | Élite entra en combate con el jugador |                         Jugador comprometido                         |
| EliteMobExitCombatEvent | Élite sale del combate |                                ❌                                 |
| EliteMobHealEvent | Curación completa de élite |                                ❌                                 |
| EliteMobSpawnEvent | Generación de élite |                                ❌                                 |
| EliteMobTargetPlayerEvent | Élite apunta al jugador |                         Jugador objetivo                         |
| PlayerDamagedByEliteMobEvent | Élite daña al jugador |                          Jugador dañado                         |
| ElitePhaseSwitchEvent | Jefe generado por cambio de fase |                                ❌                                 |
| ZoneEnterEvent | La entidad entra en la zona. ¡Requiere que se establezca una zona! | Entidad que entró en la zona                                 |
| ZoneLeaveEvent | La entidad abandona la zona. ¡Requiere que se establezca una zona! | Entidad que abandonó la zona                                 |

**Nota: "Élite" se refiere a cualquier entidad agresiva generada por el complemento, sin importar si es un refuerzo, un jefe o cualquier otra cosa.**
**Nota: ZoneEnterEvent y ZoneLeaveEvent son computacionalmente costosos de ejecutar, ¡así que úsalos con moderación!**

`Objetivo directo` es utilizado por los Objetivos de Script, más sobre eso [aquí]($language$/elitemobs/elitescript_targets.md).

`ZoneEnterEvent` y `ZoneLeaveEvent` son eventos especiales que permiten a los scripters activar acciones basadas en entidades que entran y salen de las zonas establecidas en los scripts. El DIRECT_TARGET de ZoneEnterEvent y ZoneLeaveEvent es la entidad que entró o salió (esto significa que no puedes usar el objetivo directo como objetivo de la zona), y debido a cómo funciona la lógica interna, solo se pueden usar puntos absolutos (coordenadas específicas) y puntos relativos al jefe para escanear la entrada y la salida (no se pueden usar zonas que apunten a los jugadores).

Solo puede haber una sección [Evento]($language$/elitemobs/elitescript_events.md) por script. Sin embargo, se pueden establecer varios eventos como desencadenantes para un script:

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
    - action: PUSH
      Target:
        targetType: SELF
      vValue: 0,.3,0
    Enfriamientos:
      local: 60
      global: 20
```

Este script haría que la élite saltara cuando un jugador la golpea o cuando apunta a un jugador.

</div>

</details>

</div>




