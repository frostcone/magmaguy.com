# Temps de recharge d’Elite Script

Les temps de recharge définissent la durée qui doit s'écouler avant que le boss ne soit éligible pour effectuer à la fois le même script ou tout autre pouvoir\*.

- Remarque : certains pouvoirs ne sont pas affectés par les temps de recharge.

Les temps de recharge ont deux valeurs :

## local

`local` définit la durée, en ticks, avant que le même script puisse se reproduire. Exemple :

Exemple

```yaml
local: 60
```

Définit le pouvoir pour qu'il puisse s'exécuter à nouveau pendant 3 secondes.

## global

`global` définit la durée, en ticks, avant que tout autre script ou pouvoir puisse se reproduire[1]. Exemple :

Exemple

```yaml
global: 20
```

Définit que tous les autres pouvoirs ne peuvent pas démarrer pendant 1 seconde.

[1] certains des anciens pouvoirs ne sont actuellement pas affectés par cela, c'est un travail en cours.

**Remarque : en allongeant le temps de recharge local et en raccourcissant le temps de recharge global, vous pouvez garantir que le boss alternera entre ses pouvoirs disponibles !** N'allongez jamais le temps de recharge global, et je recommande de laisser au moins une seconde de temps de recharge local pour donner à d'autres pouvoirs une chance de se déclencher.

De plus, si votre pouvoir a une durée spécifique pendant laquelle il est actif, vous devez utiliser ce système pour empêcher que d'autres pouvoirs ne s'exécutent simultanément et ne risquent de ruiner votre pouvoir.

### Exécuter les scripts une seule fois avec des temps de recharge
Pour vous assurer que les scripts ne se déclenchent qu'une seule fois tout en utilisant un [Événement]($language$/elitemobs/elitescript_events.md) qui peut se produire plusieurs fois pendant un combat, définissez le temps de recharge local sur un nombre élevé, tel que `99999`. Cet exemple illustre le concept :

<div align="center">

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  SetMeOnFireOnlyOnce:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_ON_FIRE
      duration: 60
      Target:
      targetType: DIRECT_TARGET
    Cooldowns:
    local: 99999
    global: 50
```
Dans ce scénario, `EliteMobDamagedByPlayerEvent` déclenche l'action `SET_ON_FIRE`. Sans temps de recharge, l'action s'activerait chaque fois que le joueur frappe le mob.

Cependant, avec un temps de recharge local défini sur `99999`, l'action ne se déclenchera que toutes les `99999` ticks (83 minutes).

</div>

</details>

</div>
