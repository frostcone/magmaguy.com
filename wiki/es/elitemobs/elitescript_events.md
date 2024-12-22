# Eventos de Script de Élite

Los EliteScripts están basados en eventos. Esto significa que se activan cuando se desencadena un evento específico. Los
siguientes son los eventos válidos actualmente:

| Evento                         |                             Detalles                             | Objetivo Directo [[?]($language$/elitemobs/elitescript_targets.md)] |
|--------------------------------|:----------------------------------------------------------------:|:-------------------------------------------------------------------:|
| EliteMobDamagedByEliteMobEvent |                   Élite dañado por otro élite                    |                                  ❌                                  |
| EliteMobDamagedByPlayerEvent   |                   Élite dañado por un jugador                    |                          Jugador que daña                           |
| EliteMobDamagedEvent           |                 Élite dañado por cualquier cosa                  |                                  ❌                                  |
| EliteMobDeathEvent             |                         Muerte de élite                          |                                  ❌                                  |
| EliteMobEnterCombatEvent       |              Élite entra en combate con un jugador               |                    Jugador que inicia el combate                    |
| EliteMobExitCombatEvent        |                      Élite sale del combate                      |                                  ❌                                  |
| EliteMobHealEvent              |                   Élite se cura completamente                    |                                  ❌                                  |
| EliteMobSpawnEvent             |                          Élite aparece                           |                                  ❌                                  |
| EliteMobTargetPlayerEvent      |                    Élite apunta a un jugador                     |                          Jugador objetivo                           |
| PlayerDamagedByEliteMobEvent   |                     Élite daña a un jugador                      |                           Jugador dañado                            |
| ElitePhaseSwitchEvent          |                 Jefe aparece al cambiar de fase                  |                                  ❌                                  |
| ZoneEnterEvent                 | Entidad entra en una zona. ¡Requiere que se establezca una zona! |                    Entidad que entró en la zona                     |
| ZoneLeaveEvent                 | Entidad sale de una zona. ¡Requiere que se establezca una zona!  |                    Entidad que salió de la zona                     |

**Nota: "Élite" se refiere a cualquier entidad agresiva generada por el plugin, sin importar si es un refuerzo, un jefe o cualquier otra cosa.**
**Nota: ¡Los eventos ZoneEnterEvent y ZoneLeaveEvent son computacionalmente costosos de ejecutar, así que por favor
úsalos con moderación!**

`Objetivo Directo` es utilizado por los Objetivos de Script, más
información [aquí]($language$/elitemobs/elitescript_targets.md).

`ZoneEnterEvent` y `ZoneLeaveEvent` son eventos especiales que permiten a los creadores de scripts activar acciones
basadas en entidades que entran y salen de zonas establecidas en los scripts. El DIRECT_TARGET de ZoneEnterEvent y
ZoneLeaveEvent es la entidad que entró o salió (esto significa que no puedes usar el objetivo directo como el objetivo
de la zona), y debido a cómo funciona la lógica interna, solo se pueden usar puntos absolutos (coordenadas específicas)
y puntos relativos al jefe para escanear la entrada y salida (no se pueden usar zonas que apunten a jugadores).

Solo puede haber una sección de [Event]($language$/elitemobs/elitescript_events.md) por script. Sin embargo, varios
eventos pueden establecerse como disparadores para un script:

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

Este script haría que el élite saltara cuando fuera golpeado por un jugador o cuando apuntara a un jugador.

</div>

</details>

</div>
