[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Eventos de Elite Script

Los EliteScripts se basan en eventos. Esto significa que se inician cuando se activa un evento específico. Los siguientes son los eventos válidos actualmente:

| Evento | Detalles | Objetivo directo [[?]($language$/elitemobs/elitescript_targets.md)] |
| --- | :-: |:----------------------------------------------------------------:|
| EliteMobDamagedByEliteMobEvent | Élite dañado por otra élite |                                ❌                                 |
| EliteMobDamagedByPlayerEvent | Élite dañado por un jugador |                         Jugador dañino                          |
| EliteMobDamagedEvent | Élite dañado por cualquier cosa |                                ❌                                 |
| EliteMobDeathEvent | Muerte de élite |                                ❌                                 |
| EliteMobEnterCombatEvent | Élite entra en combate con un jugador |                         Jugador participante                          |
| EliteMobExitCombatEvent | Élite sale de combate |                                ❌                                 |
| EliteMobHealEvent | Élite se cura por completo |                                ❌                                 |
| EliteMobSpawnEvent | Generación de élite |                                ❌                                 |
| EliteMobTargetPlayerEvent | Élite apunta a un jugador |                         Jugador objetivo                          |
| PlayerDamagedByEliteMobEvent | La élite daña al jugador |                          Jugador dañado                          |
| ElitePhaseSwitchEvent | Generación de jefe por cambio de fase |                                ❌                                 |
| ZoneEnterEvent | La entidad entra en la zona. ¡Requiere que se establezca una zona! | Entidad que entró en la zona                                |
| ZoneLeaveEvent | La entidad sale de la zona. ¡Requiere que se establezca una zona! | Entidad que salió de la zona                                |

**Nota: "Élite" se refiere a cualquier entidad agresiva generada por el plugin, sin importar si es un refuerzo, un jefe o cualquier otra cosa.**
**Nota: los eventos ZoneEnterEvent y ZoneLeaveEvent son computacionalmente costosos de ejecutar, ¡así que úselos con moderación!**

`Objetivo directo` es utilizado por los objetivos de script, más sobre esto [aquí]($language$/elitemobs/elitescript_targets.md).

`ZoneEnterEvent` y `ZoneLeaveEvent` son eventos especiales que permiten a los creadores de scripts activar acciones basadas en las entidades que entran y salen de las zonas establecidas en los scripts. El DIRECT_TARGET de ZoneEnterEvent y ZoneLeaveEvent es la entidad que entró o salió (esto significa que no puede usar el objetivo directo como el objetivo de la zona) y, debido a cómo funciona la lógica interna, solo se pueden usar puntos absolutos (coordenadas específicas) y puntos relativos al jefe para buscar la entrada y salida (no se pueden usar zonas que se dirijan a los jugadores).

Solo puede haber una sección [Evento]($language$/elitemobs/elitescript_events.md) por script. Sin embargo, se pueden establecer varios eventos como activadores para un script:

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Ejemplo:
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

Este script haría que la élite saltara cuando es golpeada por un jugador o cuando apunta a un jugador.

</div>

</details>

</div>
