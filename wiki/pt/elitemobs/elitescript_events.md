# Eventos de Script Elite

EliteScripts são baseados em eventos. Isto significa que são lançados quando um evento específico é acionado. Os seguintes são os eventos válidos atualmente:

| Evento | Detalhes | Alvo Direto [[?]($language$/elitemobs/elitescript_targets.md)] |
| --- | :-: |:----------------------------------------------------------------:|
| EliteMobDamagedByEliteMobEvent | Elite danificado por outro elite |                                ❌                                 |
| EliteMobDamagedByPlayerEvent | Elite danificado por um jogador |                         Jogador que causou dano                          |
| EliteMobDamagedEvent | Elite danificado por qualquer coisa |                                ❌                                 |
| EliteMobDeathEvent | Morte de elite |                                ❌                                 |
| EliteMobEnterCombatEvent | Elite entra em combate com jogador |                         Jogador que iniciou o combate                         |
| EliteMobExitCombatEvent | Elite sai de combate |                                ❌                                 |
| EliteMobHealEvent | Elite cura totalmente |                                ❌                                 |
| EliteMobSpawnEvent | Elite aparece |                                ❌                                 |
| EliteMobTargetPlayerEvent | Elite mira jogador |                         Jogador alvo                          |
| PlayerDamagedByEliteMobEvent | Elite causa dano a jogador |                          Jogador que sofreu dano                          |
| ElitePhaseSwitchEvent | Chefe aparece devido a mudança de fase |                                ❌                                 |
| ZoneEnterEvent | Entidade entra numa zona. Requer que uma zona seja definida! | Entidade que entrou na zona                                 |
| ZoneLeaveEvent | Entidade sai de uma zona. Requer que uma zona seja definida! | Entidade que saiu da zona                                 |

**Nota: "Elite" refere-se a qualquer entidade agressiva gerada pelo plugin, independentemente de ser um reforço, um chefe ou qualquer outra coisa.**
**Nota: ZoneEnterEvent e ZoneLeaveEvent são computacionalmente dispendiosos para executar, por favor use-os com moderação!**

`Alvo Direto` é usado pelos Alvos de Script, mais sobre isso [aqui]($language$/elitemobs/elitescript_targets.md).

`ZoneEnterEvent` e `ZoneLeaveEvent` são eventos especiais que permitem aos criadores de scripts acionar ações com base em entidades que entram e saem de zonas definidas em scripts. O ALVO_DIRETO de ZoneEnterEvent e ZoneLeaveEvent é a entidade que entrou ou saiu (isto significa que não pode usar o alvo direto como o alvo da zona), e devido à forma como a lógica interna funciona apenas pontos absolutos (coordenadas específicas) e pontos relativos ao chefe podem ser usados para verificar entradas e saídas (não pode usar zonas que tenham jogadores como alvo).

Só pode haver uma seção [Evento]($language$/elitemobs/elitescript_events.md) por script. No entanto, vários eventos podem ser definidos como gatilhos para um script:

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
