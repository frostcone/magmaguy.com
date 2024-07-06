# Délais de recharge des scripts Elite

Les délais de recharge définissent le temps qui doit s'écouler avant que le boss ne soit autorisé à réutiliser le même script ou tout autre pouvoir*.

- Remarque : certains pouvoirs ne sont actuellement pas affectés par les délais de recharge.

Les délais de recharge ont deux valeurs :

## local

`local` définit le temps, en ticks, avant que le même script puisse être réexécuté. Exemple :

Exemple

```yaml
local: 60
```

Définit le pouvoir pour qu'il puisse être réutilisé après 3 secondes.

## global

`global` définit le temps, en ticks, avant que tout autre script ou pouvoir puisse être réutilisé\[1\]. Exemple :

Exemple

```yaml
global: 20
```

Définit tous les autres pouvoirs pour qu'ils ne puissent pas être réutilisés avant 1 seconde.

[1] certains des pouvoirs les plus anciens ne sont actuellement pas affectés par cela, c'est un travail en cours.

**Remarque : en définissant un délai de recharge local plus long et un délai de recharge global plus court, vous pouvez garantir que le boss alternera entre ses pouvoirs disponibles !** Ne définissez jamais le délai de recharge global plus long, et je recommande de laisser au moins une seconde de délai de recharge local pour donner aux autres pouvoirs une chance de se déclencher.

De plus, si votre pouvoir a une durée spécifique pendant laquelle il est actif, vous devez utiliser ce système pour empêcher d'autres pouvoirs de s'exécuter simultanément et de potentiellement ruiner votre pouvoir.

### Exécuter des scripts une seule fois avec des délais de recharge
Pour vous assurer que les scripts ne se déclenchent qu'une seule fois tout en utilisant un [événement]($language$/elitemobs/elitescript_events.md) susceptible de se produire plusieurs fois au cours d'un combat, définissez le délai de recharge local sur un nombre élevé, tel que `99999`. Cet exemple illustre le concept :

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
Dans ce scénario, l'`EliteMobDamagedByPlayerEvent` déclenche l'action `SET_ON_FIRE`. Sans délais de recharge, l'action s'activerait chaque fois que le joueur frappe le mob. 

Cependant, avec un délai de recharge local défini sur `99999`, l'action ne se déclenchera que toutes les `99999` ticks (83 minutes).

</div>

</details>

</div>


