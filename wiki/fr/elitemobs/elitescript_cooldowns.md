Voici la traduction en français, en conservant le formatage markdown :

# Temps de recharge des scripts d'élite

Les temps de recharge définissent la durée qui doit s'écouler avant que le boss ne soit éligible pour exécuter le même script ou toute autre capacité\*.

- note : certaines capacités ne sont actuellement pas affectées par les temps de recharge.

Les temps de recharge ont deux valeurs :

## local

`local` définit le temps, en ticks, avant que le même script puisse se reproduire. Exemple :

Exemple

```yaml
local: 60
```

Permet à la capacité de s'exécuter à nouveau pendant 3 secondes.

## global

`global` définit le temps, en ticks, avant que tout autre script ou capacité puisse se reproduire\[1\]. Exemple :

Exemple

```yaml
global: 20
```

Empêche toutes les autres capacités de démarrer pendant 1 seconde.

[1] certaines des anciennes capacités ne sont actuellement pas affectées par cela, c'est un travail en cours.

**Note : en rendant le temps de recharge local plus long et le temps de recharge global plus court, vous pouvez garantir que le boss alternera entre ses capacités disponibles !** Ne rendez jamais le temps de recharge global plus long, et je recommande de laisser au moins une seconde de temps de recharge local pour donner aux autres capacités une chance de se déclencher.

De plus, si votre capacité a une durée spécifique pendant laquelle elle est active, vous devriez utiliser ce système pour empêcher d'autres capacités de s'exécuter simultanément et potentiellement ruiner votre capacité.

### Exécuter les scripts une seule fois avec les temps de recharge
Pour vous assurer que les scripts ne se déclenchent qu'une seule fois tout en utilisant un [Événement]($language$/elitemobs/elitescript_events.md) qui peut se produire plusieurs fois pendant un combat, définissez le temps de recharge local sur un nombre élevé, tel que `99999`. Cet exemple illustre le concept :

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
Dans ce scénario, l'`EliteMobDamagedByPlayerEvent` déclenche l'action `SET_ON_FIRE`. Sans temps de recharge, l'action s'activerait chaque fois que le joueur frappe le mob.

Cependant, avec un temps de recharge local défini sur `99999`, l'action ne se déclenchera que toutes les `99999` ticks (83 minutes).

</div>

</details>

</div>