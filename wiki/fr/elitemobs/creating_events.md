[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

Ce guide concerne EliteMobs 7.3.4 et les versions ultérieures.

# Que sont les Événements Personnalisés ?

Les Événements Personnalisés font référence ici à des événements qui se produisent aléatoirement dans le jeu, qu'ils
soient basés sur les actions du joueur ou qu'ils aient un déclencheur temporel. Le plugin est livré préchargé avec un
certain nombre d'Événements Personnalisés, tels que l'événement Balrog, l'événement Kraken et les événements Gobelin au
trésor, pour n'en citer que quelques-uns.

Ce système est appelé Événements **Personnalisés** car les événements peuvent non seulement être personnalisés, mais
aussi créés de toutes pièces. Ce qui suit est un guide sur la façon de créer et de personnaliser vos propres événements.

# Paramètres de configuration courants

<div align="center">

Les paramètres suivants peuvent/doivent être utilisés pour les événements d'action et les événements programmés.

***

### isEnabled

Définit si l'événement est activé.

| Clé         |       Valeurs       | Défaut |
|-------------|:-------------------:|:------:|
| `isEnabled` | [Booléen](#boolean) | `true` |

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

| Clé         |                    Valeurs                     | Défaut |
|-------------|:----------------------------------------------:|:------:|
| `eventType` | `BREAK_BLOCK` / `FISH` / `TILL_SOIL` / `TIMED` | aucun  |

*Notez que `BREAK_BLOCK`, `FISH` et `TILL_SOIL` sont des [Événements d'action](#action-events) et `TIMED` sont
des [Événements programmés](#timed-events)*

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

Définit la liste des boss qui seront générés. **Obligatoire!**

| Clé             |             Valeurs              | Défaut |
|-----------------|:--------------------------------:|:------:|
| `bossFilenames` | [Liste de chaînes](#string_list) | aucun  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
bossFilenames:
- balrog.yml
- mon_boss_d_evenement.yml
```

</div>

</details>

***

### announcementPriority

Définit la [priorité de l'annonce]($language$/elitemobs/creating_bosses.md&section=announcementpriority).

| Clé                    |      Valeurs       | Défaut |
|------------------------|:------------------:|:------:|
| `announcementPriority` | [Entier](#integer) | aucun  |

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

| Clé            |      Valeurs      | Défaut |
|----------------|:-----------------:|:------:|
| `startMessage` | [Chaîne](#string) | aucun  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
startMessage: Un événement a commencé !
```

<div align="center">

![create_events_start_message.jpg](../../../img/wiki/create_events_start_message.jpg)

</div>

</div>

</details>

***

### endMessage

Définit le message envoyé à la fin de l'événement.

| Clé          |      Valeurs      | Défaut |
|--------------|:-----------------:|:------:|
| `endMessage` | [Chaîne](#string) | aucun  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
endMessage: Un événement s'est terminé !
```

<div align="center">

![create_events_end_message.jpg](../../../img/wiki/create_events_end_message.jpg)

</div>

</div>

</details>

***

### eventStartCommands

Définit les commandes qui s'exécutent au début de l'événement.

| Clé                  |             Valeurs              | Défaut |
|----------------------|:--------------------------------:|:------:|
| `eventStartCommands` | [Liste de chaînes](#string_list) | aucun  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
eventStartCommands:
- say L'événement commence maintenant !!
- "$chance=0.5$ say Quelle apparition !"
```

<div align="center">

![create_events_start_commands.jpg](../../../img/wiki/create_events_start_commands.jpg)

</div>

</div>

</details>

***

### eventEndCommands

Définit les commandes qui s'exécutent à la fin de l'événement.

| Clé                |             Valeurs              | Défaut |
|--------------------|:--------------------------------:|:------:|
| `eventEndCommands` | [Liste de chaînes](#string_list) | aucun  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
eventEndCommands:
- say L'événement se termine, c'est triste.
- "$chance=0.5$ say Trop lent mon pote !"
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
- "boss_cool.yml"
- "autre_boss_cool.yml"
announcementPriority: 3
startMessage: "L'événement cool commence !"
endMessage: "L'événement cool se termine !"
eventStartCommands:
- say L'événement a commencé !
eventEndCommands:
- say L'événement s'est terminé !
```

</div>

</details>

</div>

## Événements d'action

<div align="center">

Événements qui ont une chance de se déclencher lorsqu'une action spécifique, telle que la destruction d'un bloc ou la
pêche, se produit.

### chance

Définit la chance que l'événement se produise lorsque l'action se produit.

| Clé      |           Valeurs           | Défaut |
|----------|:---------------------------:|:------:|
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

| Clé                  |                                         Valeurs                                          | Défaut |
|----------------------|:----------------------------------------------------------------------------------------:|:------:|
| `breakableMaterials` | Liste des [matériaux](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | aucun  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
breakableMaterials:
- RUCHE
- BOIS_DE_BOULEAU
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
- MINERAI_DE_CHARBON
```

</div>

Définit une probabilité de 0,1 % de déclencher l'événement lorsqu'un bloc de minerai de charbon est détruit, en
supposant que le type d'événement est `BREAK_BLOCK`.

</details>

</div>

## Événements programmés

<div align="center">

Les événements programmés sont des événements qui se produisent à des intervalles de temps configurables. Une fois le
temps de recharge d'un événement programmé terminé, un événement programmé aléatoire est choisi dans la liste des
événements programmés en fonction du poids de l'événement.

### spawnType

Définit le [Spawn personnalisé]($language$/elitemobs/creating_spawns.md) utilisé par l'événement, qui définit l'endroit
où le boss peut apparaître.

| Clé         |           Valeurs           | Défaut |
|-------------|:---------------------------:|:------:|
| `spawnType` | [Nom de fichier](#filename) | aucun  |

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

Définit la durée, en minutes, avant que cet événement puisse être sélectionné à nouveau.

| Clé             |      Valeurs       | Défaut |
|-----------------|:------------------:|:------:|
| `localCooldown` | [Entier](#integer) |  `0`   |

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

Définit la durée, en minutes, avant que l'événement suivant ne soit sélectionné.

| Clé              |      Valeurs       | Défaut |
|------------------|:------------------:|:------:|
| `globalCooldown` | [Entier](#integer) |  `0`   |

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

Définit le poids de l'événement, ce qui affecte la probabilité qu'il soit choisi par rapport à d'autres événements. *
*Recommandé: 100**.

| Clé      |      Valeurs      | Défaut |
|----------|:-----------------:|:------:|
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

| Clé             |      Valeurs       | Défaut |
|-----------------|:------------------:|:------:|
| `eventDuration` | [Entier](#integer) |  `0`   |

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

| Clé                      |       Valeurs       | Défaut |
|--------------------------|:-------------------:|:------:|
| `eventEndsWithBossDeath` | [Booléen](#boolean) | `true` |

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

Définit l'heure de fin de l'événement dans le jeu.

| Clé            |       Valeurs       | Défaut |
|----------------|:-------------------:|:------:|
| `eventEndTime` | [Booléen](#boolean) | `true` |

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

Définit le nombre minimum de joueurs en ligne avant que l'événement ne démarre.

| Clé                  |      Valeurs       | Défaut |
|----------------------|:------------------:|:------:|
| `minimumPlayerCount` | [Entier](#integer) |  `1`   |

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

*Notez que les événements sont mis en file d'attente, ce qui signifie qu'ils ne démarreront qu'une fois les conditions
définies dans le `customSpawn` remplies.*

<details>

<summary align="center"><b>Exemple de configuration d'événements</b></summary>

<div align="left">

```yml
isEnabled: true
bossFilenames:
- "boss_cool.yml"
- "autre_boss_cool.yml"
announcementPriority: 3
startMessage: "L'événement cool commence !"
endMessage: "L'événement cool se termine !"
eventStartCommands:
- say L'événement a commencé !
eventEndCommands:
- say L'événement s'est terminé !
customSpawn: "monCoolSpawn.yml"
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
