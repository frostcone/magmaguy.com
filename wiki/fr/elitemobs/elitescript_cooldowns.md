# Temps de Recharge des Scripts d'Élite

Les temps de recharge définissent le temps qui doit s'écouler avant que le boss ne puisse exécuter à nouveau le même
script ou une autre puissance\*.

- note: certaines puissances ne sont pas actuellement affectées par les temps de recharge.

Les temps de recharge ont deux valeurs :

## local

`local` définit le temps, en ticks, avant que le même script puisse se reproduire. Exemple :

Exemple

```yaml
local: 60
```

Définit la puissance pour qu'elle puisse se réactiver après 3 secondes.

## global

`global` définit le temps, en ticks, avant qu'un autre script ou une autre puissance ne puisse se produire à nouveau[1].
Exemple :

Exemple

```yaml
global: 20
```

Définit toutes les autres puissances pour qu'elles ne puissent pas démarrer pendant 1 seconde.

[1] Certaines des anciennes puissances ne sont pas affectées par ceci pour le moment, c'est un travail en cours.

**Note : en rendant le temps de recharge local plus long et le temps de recharge global plus court, vous pouvez garantir
que le boss alternera entre ses puissances disponibles !** Ne rendez jamais le temps de recharge global plus long, et je
recommande de laisser au moins une seconde de temps de recharge local pour donner aux autres puissances une chance de se
déclencher.

De plus, si votre puissance a une durée spécifique pendant laquelle elle est active, vous devriez utiliser ce système
pour empêcher d'autres puissances de s'exécuter simultanément et de potentiellement ruiner votre puissance.

### Exécuter des Scripts Une Seule Fois avec des Temps de Recharge

Pour garantir que les scripts ne se déclenchent qu'une seule fois tout en utilisant
un [Événement]($language$/elitemobs/elitescript_events.md) qui peut se produire plusieurs fois pendant un combat,
définissez le temps de recharge local sur un nombre élevé, tel que `99999`. Cet exemple illustre le concept :

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

Dans ce scénario, l'`EliteMobDamagedByPlayerEvent` déclenche l'action `SET_ON_FIRE`. Sans temps de recharge, l'action s'
activerait à chaque fois que le joueur frappe le mob.

Cependant, avec un temps de recharge local réglé sur `99999`, l'action ne se déclenchera que tous les `99999` ticks (83
minutes).

</div>

</details>

</div>
