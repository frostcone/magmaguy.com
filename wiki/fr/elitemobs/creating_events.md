[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

Ce guide est destiné à EliteMobs 7.3.4 et versions ultérieures

# Que sont les événements personnalisés ?

Les événements personnalisés font ici référence aux événements qui se produisent de manière aléatoire dans le jeu, qu'ils soient basés sur les actions des joueurs ou qu'ils aient un déclencheur chronométré. Le plugin est préchargé avec un certain nombre d'événements personnalisés, tels que l'événement Balrog, l'événement Kraken et les événements Treasure Goblin, pour n'en nommer que quelques-uns.

Ce système est appelé événements **personnalisés** car les événements peuvent non seulement être personnalisés, mais également créés à partir de zéro. Ce qui suit est un guide sur la façon de créer et de personnaliser vos propres événements.

# Paramètres de configuration courants

<div align="center">

Les paramètres suivants peuvent/doivent être utilisés pour les événements d'action et les événements chronométrés.

***

### isEnabled

Définit si l'événement est activé.

| Clé | Valeurs | Valeur par défaut |
|---|---|---|
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

| Clé | Valeurs | Valeur par défaut |
|---|---|---|
| `eventType` | `BREAK_BLOCK` / `FISH` / `TILL_SOIL` / `TIMED` | aucune |

*Notez que `BREAK_BLOCK`, `FISH` et `TILL_SOIL` sont des [événements d'action](#action-events) et `TIMED` sont des [événements chronométrés](#timed-events)*

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

Définit la liste des boss qui seront générés. **Obligatoire !**

| Clé | Valeurs | Valeur par défaut |
|---|---|---|
| `bossFilenames` | [Liste de chaînes](#string_list) | aucune |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
bossFilenames:
- balrog.yml
- mon_boss_d_événement.yml
```

</div>

</details>

***

### announcementPriority

Définit la [priorité d'annonce]($language$/elitemobs/creating_bosses.md&section=announcementpriority).

| Clé | Valeurs | Valeur par défaut |
|---|---|---|
| `announcementPriority` | [Entier](#integer) | aucune |

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

| Clé | Valeurs | Valeur par défaut |
|---|---|---|
| `startMessage` | [Chaîne](#string) | aucune |

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

| Clé | Valeurs | Valeur par défaut |
|---|---|---|
| `endMessage` | [Chaîne](#string) | aucune |

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

| Clé | Valeurs | Valeur par défaut |
|---|---|---|
| `eventStartCommands` | [Liste de chaînes](#string_list) | aucune |

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

| Clé | Valeurs | Valeur par défaut |
|---|---|---|
| `eventEndCommands` | [Liste de chaînes](#string_list) | aucune |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
eventEndCommands:
- say L'événement se termine, c'est tellement triste.
- "$chance=0.5$ say Trop lent, mon pote !"
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

Événements qui ont une chance de se produire lorsqu'une action spécifique, telle que casser un bloc ou pêcher, se produit.

### chance

Définit la probabilité que l'événement se produise lorsque l'action se produit.

| Clé | Valeurs | Valeur par défaut |
|---|---|---|
| `chance` | Valeur comprise entre `0.0` et `1.0` | `0` |

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

| Clé | Valeurs | Valeur par défaut |
|---|---|---|
| `breakableMaterials` | Liste de [matériaux](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | aucune |

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

Définit une probabilité de 0,1 % d'exécuter l'événement lorsqu'un bloc de minerai de charbon est cassé, en supposant que le type d'événement est `BREAK_BLOCK`.

</details>

</div>

## Événements chronométrés

<div align="center">

Les événements chronométrés sont des événements qui se produisent à des intervalles de temps configurables. Une fois le temps de recharge d'un événement chronométré écoulé, un événement chronométré aléatoire est choisi dans la liste des événements chronométrés en fonction du poids de l'événement.

### spawnType

Définit l'[apparition personnalisée]($language$/elitemobs/creating_spawns.md) utilisée par l'événement, qui définit où le boss peut apparaître.

| Clé | Valeurs | Valeur par défaut |
|---|---|---|
| `spawnType` | [Nom de fichier](#filename) | aucune |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
spawnType: apparition_nether.yml
```

</div>

</details>

***

### localCooldown

Définit la durée, en minutes, avant que cet événement ne puisse être à nouveau choisi.

| Clé | Valeurs | Valeur par défaut |
|---|---|---|
| `localCooldown` | [Entier](#integer) | `0` |

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

| Clé | Valeurs | Valeur par défaut |
|---|---|---|
| `globalCooldown` | [Entier](#integer) | `0` |

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

Définit le poids de l'événement, affectant la probabilité qu'il soit choisi par rapport à d'autres événements. **Recommandé : 100**.

| Clé | Valeurs | Valeur par défaut |
|---|---|---|
| `weight` | [Nombre décimal](#double) | `0` |

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

| Clé | Valeurs | Valeur par défaut |
|---|---|---|
| `eventDuration` | [Entier](#integer) | `0` |

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

| Clé | Valeurs | Valeur par défaut |
|---|---|---|
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

Définit l'heure dans le jeu à laquelle l'événement se terminera.

| Clé | Valeurs | Valeur par défaut |
|---|---|---|
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

| Clé | Valeurs | Valeur par défaut |
|---|---|---|
| `minimumPlayerCount` | [Entier](#integer) | `1` |

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

*Notez que les événements sont mis en file d'attente, ce qui signifie qu'ils ne démarreront que lorsque les conditions définies dans `customSpawn` seront remplies.*

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
customSpawn: "monApparitionCool.yml"
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



