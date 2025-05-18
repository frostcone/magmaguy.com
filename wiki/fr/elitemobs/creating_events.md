[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

Ce guide est pour EliteMobs 7.3.4 et versions ultérieures

# Qu'est-ce que les événements personnalisés ?

Les événements personnalisés (Custom Events) désignent ici les événements qui se produisent aléatoirement en jeu, qu'ils soient basés sur les actions des joueurs ou déclenchés par un minuteur. Le plugin est préchargé avec un certain nombre d'événements personnalisés, tels que l'événement Balrog, l'événement Kraken et les événements Gobelins au Trésor, pour n'en nommer que quelques-uns.

Ce système est appelé événements **personnalisés** (Custom Events) car les événements peuvent non seulement être personnalisés mais aussi créés de toutes pièces. Ce qui suit est un guide sur la façon de créer et de personnaliser vos propres événements.

# Paramètres de configuration courants

<div align="center">

Les paramètres suivants peuvent/doivent être utilisés pour les événements d'action et les événements chronométrés.

***

### isEnabled

Définit si l'événement est activé.

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `isEnabled` | [Boolean](#boolean) | `true`  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### eventType

Définit le type d'événement.

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `eventType` | `BREAK_BLOCK` / `FISH` / `TILL_SOIL` / `TIMED` | none  |

*Notez que `BREAK_BLOCK`, `FISH` et `TILL_SOIL` sont des [événements d'action](#action-events) et `TIMED` est un [événement chronométré](#timed-events)*

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
eventType: BREAK_BLOCK
```

</div>

</details>

***

### bossFilenames

Définit la liste des boss qui seront générés. **Obligatoire !**

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `bossFilenames` | [String List](#string_list) | none  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
bossFilenames:
- balrog.yml
- my_event_boss.yml
```

</div>

</details>

***

### announcementPriority

Définit la [priorité d'annonce]($language$/elitemobs/creating_bosses.md&section=announcementpriority).

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `announcementPriority` | [Integer](#integer) |  none   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
announcementPriority: 1
```

</div>

</details>

***

### startMessage

Définit le message envoyé au début de l'événement.

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `startMessage` | [String](#string) |  none   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
startMessage: An event has started!
```

<div align="center">

![create_events_start_message.jpg](../../../img/wiki/create_events_start_message.jpg)

</div>

</div>

</details>

***

### endMessage

Définit le message envoyé à la fin de l'événement.

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `endMessage` | [String](#string) |  none   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
endMessage: An event has ended!
```

<div align="center">

![create_events_end_message.jpg](../../../img/wiki/create_events_end_message.jpg)

</div>

</div>

</details>

***

### eventStartCommands

Définit les commandes qui s'exécutent au début de l'événement.

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `eventStartCommands` | [String List](#string_list) |  none   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
eventStartCommands:
- say The event now starts!!
- "$chance=0.5$ say What a spawn!"
```

<div align="center">

![create_events_start_commands.jpg](../../../img/wiki/create_events_start_commands.jpg)

</div>

</div>

</details>

***

### eventEndCommands

Définit les commandes qui s'exécutent à la fin de l'événement.

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `eventEndCommands` | [String List](#string_list) |  none   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
eventEndCommands:
- say The event ends, so sad.
- "$chance=0.5$ say Too slow bud!"
```

<div align="center">

![create_events_end_commands.jpg](../../../img/wiki/create_events_end_commands.jpg)

</div>

</div>

</details>

</div>

***

<details>

<summary align="center"><b>Exemple de configuration d'événement</b></summary>

<div align="left">

```yml
isEnabled: true
bossFilenames:
- "cool_boss.yml"
- "other_cool_boss.yml"
announcementPriority: 3
startMessage: "Cool event is starting!"
endMessage: "Cool event is ending!"
eventStartCommands:
- say The event started!
eventEndCommands:
- say The event ended!
```

</div>

</details>


</div>

## Événements d'action

<div align="center">

Événements qui ont une chance de se déclencher lorsqu'une action spécifique, comme casser un bloc ou pêcher, se produit.

### chance

Définit la chance que l'événement se produise lorsque l'action a lieu.

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `chance` | Valeur entre `0.0` et `1.0` |  `0`   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
chance: 0.001
```

</div>

</details>

***

### breakableMaterials

Définit la liste des matériaux à vérifier si l'action est définie sur `BREAK_BLOCK`.

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `breakableMaterials` | Liste de [materials](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) |  none   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
breakableMaterials:
- BEEHIVE
- BIRCH_WOOD
```

</div>

</details>

</div>

***

<details>

<summary align="center"><b>Exemple de configuration</b></summary>

<div align="left">

```yml
chance: 0.001
breakableMaterials:
- COAL_ORE
```

</div>

Définit une chance de 0,1 % que l'événement se déclenche lorsqu'un bloc de minerai de charbon est cassé, en supposant que le type d'événement est `BREAK_BLOCK`.

</details>

</div>

## Événements chronométrés

<div align="center">

Les événements chronométrés (Timed Events) sont des événements qui se produisent à des intervalles de temps configurables. Une fois le délai de récupération (cooldown) d'un événement chronométré terminé, un événement chronométré aléatoire est choisi dans la liste des événements chronométrés en fonction du poids de l'événement.

### spawnType

Définit le [point d'apparition personnalisé]($language$/elitemobs/creating_spawns.md) (Custom Spawn) utilisé par l'événement, qui définit où le boss peut apparaître.

| Clé       |        Valeurs         | Par défaut |
|-----------|:---------------------:|:-------:|
| `spawnType` | [Filename](#filename) |  none   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
spawnType: nether_spawn.yml
```

</div>

</details>

***

### localCooldown

Définit la durée, en minutes, avant que cet événement puisse être choisi à nouveau.

| Clé       |        Valeurs         | Par défaut |
|-----------|:---------------------:|:-------:|
| `localCooldown` | [Integer](#integer) |  `0`   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
localCooldown: 120
```

</div>

</details>

***

### globalCooldown

Définit la durée, en minutes, avant que le prochain événement ne soit choisi.

| Clé       |        Valeurs         | Par défaut |
|-----------|:---------------------:|:-------:|
| `globalCooldown` | [Integer](#integer) |  `0`   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
globalCooldown: 60
```

</div>

</details>

***

### weight

Définit le poids de l'événement, affectant la chance qu'il soit choisi par rapport à d'autres événements. **Recommandé : 100**.

| Clé       |        Valeurs         | Par défaut |
|-----------|:---------------------:|:-------:|
| `weight` | [Double](#double) |  `0`   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
weight: 60.5
```

</div>

</details>

***

### eventDuration

Définit la durée maximale de l'événement, en minutes.

| Clé       |        Valeurs         | Par défaut |
|-----------|:---------------------:|:-------:|
| `eventDuration` | [Integer](#integer) |  `0`   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
eventDuration: 30
```

</div>

</details>

***

### eventEndsWithBossDeath

Définit si l'événement se termine avec la mort du boss.

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `eventEndsWithBossDeath` | [Boolean](#boolean) | `true`  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
eventEndsWithBossDeath: true
```

</div>

</details>

***

### eventEndTime

Définit l'heure en jeu à laquelle l'événement se terminera.

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `eventEndTime` | [Boolean](#boolean) | `true`  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
eventEndTime: true
```

</div>

</details>

***

### minimumPlayerCount

Définit le nombre minimum de joueurs en ligne avant que l'événement ne commence.

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `minimumPlayerCount` | [Integer](#integer) |   `1`   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
minimumPlayerCount: true
```

</div>

</details>

</div>

***

*Notez que les événements sont mis en file d'attente, ce qui signifie qu'ils ne commenceront que lorsque les conditions définies dans le `customSpawn` seront remplies.*

<details>

<summary align="center"><b>Exemple de configuration d'événements</b></summary>

<div align="left">

```yml
isEnabled: true
bossFilenames:
- "cool_boss.yml"
- "other_cool_boss.yml"
announcementPriority: 3
startMessage: "Cool event is starting!"
endMessage: "Cool event is ending!"
eventStartCommands:
- say The event started!
eventEndCommands:
- say The event ended!
customSpawn: "myCoolSpawn.yml"
localCooldown: 30
globalCooldown: 15
weight: 100
eventDuration: 20
eventEndsWithBossDeath: true
eventEndTime: 10000
minimumPlayerCount: 5
```

</div>

</details>

</div>