# Eventos do Script Elite

Os Scripts Elite são baseados em eventos. Isso significa que eles são iniciados quando um evento específico é acionado. Os seguintes são os eventos atualmente válidos:

| Evento | Detalhes | Alvo Direto [[?]($language$/elitemobs/elitescript_targets.md)] |
| --- | :-: |:----------------------------------------------------------------:|
| EliteMobDamagedByEliteMobEvent | Elite danificado por outro elite |                                ❌                                 |
| EliteMobDamagedByPlayerEvent | Elite danificado por um jogador |                         Jogador que causou dano                          |
| EliteMobDamagedEvent | Elite danificado por qualquer coisa |                                ❌                                 |
| EliteMobDeathEvent | Morte de elite |                                ❌                                 |
| EliteMobEnterCombatEvent | Elite entra em combate com o jogador |                         Jogador que está interagindo                          |
| EliteMobExitCombatEvent | Elite sai do combate |                                ❌                                 |
| EliteMobHealEvent | Elite totalmente curado |                                ❌                                 |
| EliteMobSpawnEvent | Elite é gerado |                                ❌                                 |
| EliteMobTargetPlayerEvent | Elite mira no jogador |                         Jogador que está sendo mirado                          |
| PlayerDamagedByEliteMobEvent | Elite causa dano ao jogador |                          Jogador que sofreu dano                          |
| ElitePhaseSwitchEvent | Chefe é gerado pela mudança de fase |                                ❌                                 |
| ZoneEnterEvent | Entidade entra na zona. Requer que uma zona seja definida! | Entidade que entrou na zona                                 |
| ZoneLeaveEvent | Entidade deixa a zona. Requer que uma zona seja definida! | Entidade que deixou a zona                                 |

**Observação: "Elite" se refere a qualquer entidade agressiva gerada pelo plugin, não importa se é um reforço, um chefe ou qualquer outra coisa.**
**Observação: ZoneEnterEvent e ZoneLeaveEvent são computacionalmente caros para serem executados, então use-os com moderação!**

`Alvo Direto` é usado pelos Alvos do Script, mais sobre isso [aqui]($language$/elitemobs/elitescript_targets.md).

`ZoneEnterEvent` e `ZoneLeaveEvent` são eventos especiais que permitem que os scripters acionem ações com base em entidades entrando e saindo de zonas definidas em scripts. O DIRECT_TARGET de ZoneEnterEvent e ZoneLeaveEvent é a entidade que entrou ou saiu (isso significa que você não pode usar o alvo direto como alvo da zona), e devido à forma como a lógica interna funciona, apenas pontos absolutos (coordenadas específicas) e pontos relativos ao chefe podem ser usados para escanear entrada e saída (não pode usar zonas que tenham como alvo os jogadores).

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

Este script faria com que a elite pulasse quando atingida por um jogador ou quando tivesse como alvo um jogador.

</div>

</details>

</div>




