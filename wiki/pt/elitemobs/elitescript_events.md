# Eventos de Script de Elite

Os EliteScripts são baseados em eventos. Isto significa que são lançados quando um evento específico é acionado. Os
seguintes são os eventos atualmente válidos:

| Evento                         |                           Detalhes                           | Alvo Direto [[?]($language$/elitemobs/elitescript_targets.md)] |
|--------------------------------|:------------------------------------------------------------:|:--------------------------------------------------------------:|
| EliteMobDamagedByEliteMobEvent |               Elite danificado por outro elite               |                               ❌                                |
| EliteMobDamagedByPlayerEvent   |               Elite danificado por um jogador                |                    Jogador que causou dano                     |
| EliteMobDamagedEvent           |             Elite danificado por qualquer coisa              |                               ❌                                |
| EliteMobDeathEvent             |                        Morte de Elite                        |                               ❌                                |
| EliteMobEnterCombatEvent       |              Elite entra em combate com jogador              |                  Jogador que está em combate                   |
| EliteMobExitCombatEvent        |                     Elite sai de combate                     |                               ❌                                |
| EliteMobHealEvent              |                     Elite cura completa                      |                               ❌                                |
| EliteMobSpawnEvent             |                        Elite aparece                         |                               ❌                                |
| EliteMobTargetPlayerEvent      |                Elite define jogador como alvo                |                          Jogador alvo                          |
| PlayerDamagedByEliteMobEvent   |                 Elite causa dano ao jogador                  |                    Jogador que sofreu dano                     |
| ElitePhaseSwitchEvent          |            Chefe aparece devido a mudança de fase            |                               ❌                                |
| ZoneEnterEvent                 | Entidade entra numa zona. Requer que uma zona seja definida! |                  Entidade que entrou na zona                   |
| ZoneLeaveEvent                 | Entidade sai de uma zona. Requer que uma zona seja definida! |                   Entidade que saiu da zona                    |

**Nota: "Elite" refere-se a qualquer entidade agressiva gerada pelo plugin, independentemente de ser um reforço, um chefe ou qualquer outra coisa.**
**Nota: ZoneEnterEvent e ZoneLeaveEvent são computacionalmente dispendiosos de executar, por isso, use-os com moderação!
**

`Alvo Direto` é usado pelos Alvos de Script, mais informações [aqui]($language$/elitemobs/elitescript_targets.md).

`ZoneEnterEvent` e `ZoneLeaveEvent` são eventos especiais que permitem aos scripters acionar ações com base em entidades
que entram e saem de zonas definidas em scripts. O ALVO_DIRETO de ZoneEnterEvent e ZoneLeaveEvent é a entidade que
entrou ou saiu (isto significa que não pode usar o alvo direto como o alvo da zona) e, devido ao funcionamento da lógica
interna, apenas pontos absolutos (coordenadas específicas) e pontos relativos ao chefe podem ser usados para analisar a
entrada e saída (não podem ser usadas zonas que visam jogadores).

Só pode haver uma secção [Evento]($language$/elitemobs/elitescript_events.md) por script. No entanto, vários eventos
podem ser definidos como acionadores para um script:

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDamagedByPlayerEvent
    - EliteMobTargetPlayerEvent
    Ações:
    - ação: EMPURRAR
      Alvo:
        tipoAlvo: AUTO
      vValor: 0,.3,0
    TemposDeRecarga:
      local: 60
      global: 20
```

Este script faria o elite saltar quando fosse atingido por um jogador ou ao definir um jogador como alvo.

</div>

</details>

</div>
