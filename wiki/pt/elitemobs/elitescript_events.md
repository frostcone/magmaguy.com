Aqui está a tradução para português (Portugal), mantendo a formatação markdown:

# Eventos de Elite Script

EliteScripts são baseados em eventos. Isto significa que são lançados quando um evento específico é acionado. Os seguintes são os eventos atualmente válidos:

| Evento                         | Detalhes                                                              | Alvo Direto [[?]($language$/elitemobs/elitescript_targets.md)] |
| :----------------------------- | :-------------------------------------------------------------------- | :-------------------------------------------------------------: |
| EliteMobDamagedByEliteMobEvent | Elite danificado por outro elite                                      |                                ❌                                 |
| EliteMobDamagedByPlayerEvent   | Elite danificado por um jogador                                       |                         Jogador que danifica                      |
| EliteMobDamagedEvent           | Elite danificado por qualquer coisa                                   |                                ❌                                 |
| EliteMobDeathEvent             | Morte do Elite                                                        |                                ❌                                 |
| EliteMobEnterCombatEvent       | Elite entra em combate com jogador                                    |                       Jogador que inicia combate                  |
| EliteMobExitCombatEvent        | Elite sai de combate                                                  |                                ❌                                 |
| EliteMobHealEvent              | Elite cura completa                                                   |                                ❌                                 |
| EliteMobSpawnEvent             | Spawn do Elite                                                        |                                ❌                                 |
| EliteMobTargetPlayerEvent      | Elite mira jogador                                                    |                           Jogador alvo                            |
| PlayerDamagedByEliteMobEvent   | Elite danifica jogador                                                |                         Jogador danificado                          |
| ElitePhaseSwitchEvent          | Spawn do Boss por mudança de fase                                     |                                ❌                                 |
| ZoneEnterEvent                 | Entidade entra na zona. Requer que uma zona esteja definida!          |                  Entidade que entrou na zona                    |
| ZoneLeaveEvent                 | Entidade sai da zona. Requer que uma zona esteja definida!            |                   Entidade que saiu da zona                     |

**Nota: "Elite" refere-se a qualquer entidade agressiva gerada pelo plugin, independentemente de ser um reforço, um boss ou qualquer outra coisa.**
**Nota: ZoneEnterEvent e ZoneLeaveEvent são computacionalmente caros de executar, por favor, use-os com moderação!**

`Alvo Direto` é usado pelos Alvos de Script, mais sobre isso [aqui]($language$/elitemobs/elitescript_targets.md).

`ZoneEnterEvent` e `ZoneLeaveEvent` são eventos especiais que permitem aos scripters acionar ações com base em entidades que entram e saem de zonas definidas nos scripts. O DIRECT_TARGET de ZoneEnterEvent e ZoneLeaveEvent é a entidade que entrou ou saiu (isto significa que não pode usar o alvo direto como o alvo da zona), e devido à forma como a lógica interna funciona, apenas pontos absolutos (coordenadas específicas) e pontos relativos ao boss podem ser usados para verificar entradas e saídas (não pode usar zonas que visam jogadores).

Só pode haver uma secção [Evento]($language$/elitemobs/elitescript_events.md) por script. No entanto, vários eventos podem ser definidos como gatilhos para um script:

<div align="center">

<details>

<summary><b>Exemplo</b></summary>

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

Este script faria o elite saltar quando atingido por um jogador ou quando mira um jogador.

</div>

</details>

</div>