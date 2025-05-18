Voici la traduction en français, en conservant le formatage markdown :

[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Créer des arènes

<div align="center">

### isEnabled

Définit si l'arène est activée.

| Clé       |      Valeurs      | Défaut  |
|-----------|:-----------------:|:-------:|
|`isEnabled`| [Boolean](#boolean) | `true`  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### arenaName

Définit le nom de l'arène.

| Clé       |      Valeurs      | Défaut |
|-----------|:-----------------:|:-------:|
|`arenaName`| [String](#string) | aucun  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
arenaName: Bedrock Arena
```

<div align="center">

![create_arena_name.jpg](../../../img/wiki/create_arena_name.jpg)

</div>

</div>

</details>

***

### corner1

Définit le premier coin de l'arène.

| Clé       |      Valeurs       | Défaut |
|-----------|:------------------:|:-------:|
|`corner1`| [Location](#serialized_location) | aucun  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
corner1: my_arena_world,10,50,-10,0,0
```

<div align="center">

Dans cette image, `corner1` est représenté par de la *laine verte* et `corner2` est représenté par de la *laine rouge*. Cette configuration désigne la zone entre eux comme l'arène, représentée par de la *laine jaune*.

![create_arena_corner.jpg](../../../img/wiki/create_arena_corner.jpg)

</div>

</div>

</details>

***

### corner2

Définit le deuxième coin de l'arène, doit être diamétralement opposé à `corner1`.

| Clé       |      Valeurs       | Défaut |
|-----------|:------------------:|:-------:|
| `corner2` | [Location](#serialized_location) | aucun  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
corner2: my_arena_world,-10,50,10,0,0
```

<div align="center">

Dans cette image, `corner1` est représenté par de la *laine verte* et `corner2` est représenté par de la *laine rouge*. Cette configuration désigne la zone entre eux comme l'arène, représentée par de la *laine jaune*.

![create_arena_corner.jpg](../../../img/wiki/create_arena_corner.jpg)

</div>

</div>

</details>

***

### startLocation

Définit l'emplacement de départ de l'arène.

| Clé       |      Valeurs       | Défaut |
|-----------|:------------------:|:-------:|
| `startLocation` | [Location](#serialized_location) | aucun  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
startLocation: my_arena_world,1,50,1,0,0
```

</div>

</details>

***

### exitLocation

Définit l'emplacement de sortie de l'arène.

| Clé       |      Valeurs       | Défaut |
|-----------|:------------------:|:-------:|
| `exitLocation` | [Location](#serialized_location) | aucun  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
exitLocation: my_world,1,50,1,0,0
```

</div>

</details>

***

### waveCount

Définit le nombre de vagues que l'arène possède.

| Clé       |      Valeurs      | Défaut |
|-----------|:-----------------:|:-------:|
| `waveCount` | [Integer](#integer) | aucun  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
waveCount: 10
```

</div>

</details>

***

### delayBetweenWaves

Définit le délai, en secondes, entre les vagues.

| Clé       |      Valeurs      | Défaut |
|-----------|:-----------------:|:-------:|
| `delayBetweenWaves` | [Integer](#integer) | `0`    |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
delayBetweenWaves: 5
```

</div>

</details>

***

### spawnPoints

Définit les emplacements d'apparition pour les boss de l'arène.

| Clé       |      Valeurs       | Défaut |
|-----------|:------------------:|:-------:|
| `spawnPoints` | [String List](#string_list) [1] | aucun  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
spawnPoints:
- name=north:location=my_arena_world,219.5,71,273.5
- name=south:location=my_arena_world,219.5,71,316.5
- name=west:location=my_arena_world,197.5,71,295.5
- name=east:location=my_arena_world,240.5,71,295.5
- name=center:location=my_arena_world,219.5,71,295.5
```

</div>

</details>

***

### bossList

Définit la liste des boss qui apparaissent pendant les vagues de l'arène. Les arènes EliteMobs prennent en charge l'apparition de Mythic Mobs dans les arènes.

| Clé       |      Valeurs       | Défaut |
|-----------|:------------------:|:-------:|
| `bossList` | [String List](#string_list) [2] | aucun  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
bossList:
- wave=1:spawnPoint=north:boss=my_boss_wave_1.yml
- wave=1:spawnPoint=south:boss=my_boss_wave_1.yml
- wave=2:spawnPoint=center:boss=my_mythicmobs_boss:mythicmob=true:level=10
```

Dans cet exemple, la vague 1 fera apparaître un boss au point d'apparition nord et un boss au point d'apparition sud. Ensuite, à la vague 2, un boss mythique apparaîtra, au niveau 10, au point central.

Notez que vous pouvez également forcer un niveau pour les boss EliteMobs, mais il est recommandé de définir leur niveau dans leur fichier de configuration.

</div>

</details>

***

### rawArenaReward

Définit les récompenses données à la fin des vagues.

| Clé       |      Valeurs       | Défaut |
|-----------|:------------------:|:-------:|
| `rawArenaReward` | [Universal EliteMobs loot table](fr/elitemobs/loot_tables.md) | aucun  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
rawArenaReward:
- filename=enchanted_book_damage_all.yml:wave=5:chance=0.25
- filename=elite_scrap_tiny.yml:wave=1:chance=0.5:amount=5
- currencyAmount=3:wave=3
- level=5:filename=summon_merchant_scroll.yml:wave=5
- filename=magmaguys_toothpick.yml:itemlevel=10:wave=10:chance=0.95
```

</div>

</details>

***

### minimumPlayerCount

Définit le nombre minimum de joueurs qu'une arène doit avoir avant de commencer.

| Clé       |      Valeurs      | Défaut |
|-----------|:-----------------:|:-------:|
| `minimumPlayerCount` | [Integer](#integer) | `1`    |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
minimumPlayerCount: 1
```

</div>

</details>

***

### maximumPlayerCount

Définit le nombre maximum de joueurs qu'une arène peut avoir.

| Clé       |      Valeurs      | Défaut |
|-----------|:-----------------:|:-------:|
| `maximumPlayerCount` | [Integer](#integer) | `100`  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
maximumPlayerCount: 100
```

</div>

</details>

***

### arenaMessages

Définit les messages qui s'affichent entre les vagues.

| Clé       |      Valeurs      | Défaut |
|-----------|:-----------------:|:-------:|
| `arenaMessages` | Spécial [3] | aucun  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
arenaMessages:
- wave=1:message="&a[Arena Announcer] &fTime for wave one!"
- wave=2:message="&a[Arena Announcer] &fWow, wave two already."
```

<div align="center">

![create_arena_messages.jpg](../../../img/wiki/create_arena_messages.jpg)

</div>

</div>

</details>

***

### cylindricalArena

Définit si l'arène utilise une forme cylindrique (par défaut, elle est cuboïde).

| Clé       |      Valeurs      | Défaut |
|-----------|:-----------------:|:-------:|
| `cylindricalArena` | [Boolean](#boolean) | `false` |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
cylindricalArena: false
```

</div>

</details>

***

### permission

Définit la permission requise pour utiliser l'arène.

| Clé       |      Valeurs      | Défaut |
|-----------|:-----------------:|:-------:|
| `permission` | [String](#integer) | aucun  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
permission: mypermission.arena
```

</div>

</details>

***

</div>

## Spécial [1]
Points d'apparition : Utilise le format suivant : `name=nomDuPoint:location=nom_du_monde,x,y,z`.

## Spécial [2]
Liste des boss : Utilise le format suivant : `wave=x:spawnPoint=Y:boss=nomDuFichierBoss.yml`.

## Spécial [3]
Messages de l'arène : Utilise le format suivant : `wave=X:message=votre message ici`.

<details>

<summary align="center"><b>Exemple de configuration d'arène</b></summary>

<div align="left">

```yml
isEnabled: true
arenaName: Example Arena
corner1: my_arena_world,0,0,0,0,0
corner2: my_arena_world,50,50,50,0,0
startLocation: my_arena_world,25,0,25,0,0
exitLocation: my_minecraft_world,234,44,245,0,0
waveCount: 5
delayBetweenWaves: 5
spawnPoints:
  - name=north:location=my_arena_world,40.5,0,0
  - name=south:location=my_arena_world,10.5,0,0
  - name=west:location=my_arena_world,0,0,40.5
  - name=east:location=my_arena_world,0,0,10.5
  - name=center:location=my_arena_world,25.5,0,25.5
bossList:
  - wave=1:spawnPoint=north:boss=example_arena_wave_1_mob.yml
  - wave=1:spawnPoint=center:boss=example_arena_wave_1_mob.yml
  - wave=1:spawnPoint=south:boss=example_arena_wave_1_mob.yml
  - wave=2:spawnPoint=center:boss=example_arena_wave_2_mob.yml
  - wave=3:spawnPoint=east:boss=example_arena_wave_3_mob.yml
  - wave=3:spawnPoint=west:boss=example_arena_wave_3_mob.yml
  - wave=4:spawnPoint=center:boss=example_arena_wave_4_mob.yml
  - wave=4:spawnPoint=center:boss=example_arena_wave_4_mob.yml
  - wave=5:spawnPoint=center:boss=example_arena_wave_5_mob.yml
  - wave=5:spawnPoint=south:boss=example_arena_wave_5_mob.yml
  - wave=5:spawnPoint=west:boss=example_arena_wave_5_mob.yml
rawArenaReward:
  - currencyAmount=5:wave=1
  - currencyAmount=10:wave=2
  - currencyAmount=15:wave=3
  - currencyAmount=20:wave=4
  - currencyAmount=25:wave=5
  - filename=magmaguys_toothpick.yml:itemlevel=5:wave=5:chance=0.5
minimumPlayerCount: 1
maximumPlayerCount: 3
arenaMessages:
  - wave=1:message=&d[Arena NPC] &fWow! Wave 1!
  - wave=2:message=&d[Arena NPC] &fAmazing it is wave 2!
  - wave=3:message=&d[Arena NPC] &fWave 3 is now on!
  - wave=4:message=&d[Arena NPC] &fWave 4 already!
  - wave=5:message=&d[Arena NPC] &fWell it is all over after this one.
cylindricalArena: false
permission: arena.mypermission
```
</div>

</details>

<details>

<summary align="center"><b>Analyse de l'exemple</b></summary>

<div align="left">

Passons en revue cet exemple depuis le début et expliquons ce que fait cette configuration d'arène.

Tout d'abord, l'arène est activée avec `isEnabled`, et nous pouvons voir qu'elle s'appelle Example Arena en utilisant le paramètre `arenaName`. Le nom sera affiché lorsque vous interagirez avec le PNJ de l'arène (nous expliquons comment créer un PNJ d'arène plus loin) qui permettra aux joueurs de rejoindre l'arène. `corner1` et `corner2` définissent la taille de l'arène. Ces coins doivent être aux côtés opposés l'un de l'autre dans la zone que vous prévoyez d'utiliser pour l'arène.

`startLocation` est l'endroit où les joueurs apparaîtront lorsqu'ils rejoindront l'arène ; dans l'exemple, ce serait au centre de l'arène dans le monde `my_arena_world`. `exitLocation` est l'endroit où les joueurs seront téléportés après avoir échoué ou terminé l'arène. Dans ce cas, ce serait le monde `my_minecraft_world` et les coordonnées de l'exemple.

`waveCount` définit simplement le nombre de vagues que durera l'arène. Dans ce cas, ce serait 5 vagues. Si les joueurs parviennent à survivre aux 5 vagues, ils ont réussi à survivre à l'arène. `delayBetweenWaves` définira le nombre de secondes avant le début de la vague suivante. Dans notre exemple, les joueurs auraient 5 secondes pour se préparer avant le début de la vague suivante.

`spawnPoints` définit les emplacements où nos mobs peuvent apparaître. Nous pouvons en créer autant que nous le souhaitons et les nommer comme nous le souhaitons. Dans l'exemple, nous avons décidé de créer 5 points d'apparition et de les nommer nord, sud, centre, est et ouest.

`bossList` est l'endroit où nous définissons quel boss doit apparaître à quelle vague et à quel endroit. Dans l'exemple, la vague 1 aura 3 boss apparaissant depuis les points d'apparition que nous avons nommés nord, centre et sud. Les trois sont configurés pour utiliser le même fichier de boss, mais nous aurions pu utiliser des fichiers de boss différents pour chacun.

`rawArenaReward` définit les récompenses qui seront distribuées après qu'un joueur ait réussi à survivre/battre une vague. Comme nous pouvons le voir dans l'exemple, battre la vague 1 récompensera le joueur avec 5 pièces d'élite. S'ils parviennent à survivre au reste des vagues et à battre la vague 5, ils seront récompensés par 25 pièces d'élite et une chance de 50 % d'obtenir un MagmaGuy's Toothpick de niveau 5.

`minimumPlayerCount` définit le nombre minimum de joueurs requis avant que l'arène ne commence. Dans notre exemple, ce paramètre est défini sur 1, donc un seul joueur est nécessaire pour que l'arène commence. `maximumPlayerCount` définit le nombre maximum de joueurs pouvant participer à l'arène. Dans notre exemple, ce paramètre est défini sur 3, ce qui signifie que si plus de 3 joueurs essaient de participer à l'arène, l'arène ne commencera pas tant qu'il n'y aura pas 3 joueurs ou moins.

`arenaMessages` vous permet d'ajouter du texte d'ambiance qui sera affiché dans le chat au début des vagues définies. Dans notre exemple, nous avons décidé d'afficher un court message au début de chaque vague. Nous avons également décidé d'inclure le nom du PNJ au début de chaque message, donnant l'illusion que le texte est un dialogue parlé par l'annonceur (maître d'arène).

`cylindricalArena` ce paramètre nous permettra de basculer si la zone définie que nous avons configurée avec `corner1` et `corner2` doit être de forme cylindrique au lieu de cuboïde. Dans notre exemple, nous l'avons défini sur `false`, ce qui signifie que l'arène de l'exemple est de forme cuboïde.

`permission` nous permet de définir une permission que les joueurs devront avoir pour pouvoir rejoindre/démarrer l'arène. Dans notre exemple, les joueurs auront besoin de la permission `arena.mypermission` pour pouvoir utiliser l'arène.

</div>

</details>

## Créer le PNJ de l'arène

<div align="center">

### isEnabled

Définit si le PNJ est activé.

| Clé       |      Valeurs      | Défaut |
|-----------|:-----------------:|:-------:|
| `isEnabled` | [Boolean](#boolean) | `true` |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### name

Définit le nom d'affichage du PNJ.

| Clé       |      Valeurs      | Défaut |
|-----------|:-----------------:|:-------:|
| `name` | [String](#string) | aucun  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
name: "&aGladius"
```

<div align="center">

![create_arena_npc_name.jpg](../../../img/wiki/create_arena_npc_name.jpg)

</div>

</div>

</details>

***

### role

Définit le rôle affiché sous le nom du PNJ.

| Clé       |      Valeurs      | Défaut |
|-----------|:-----------------:|:-------:|
| `role` | [String](#string) | aucun  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
role: "&c<Arena Master>"
```
<div align="center">

![create_arena_npc_role.jpg](../../../img/wiki/create_arena_npc_role.jpg)

</div>

</div>

</details>

***

### profession

Définit la profession MineCraft du PNJ.

| Clé       |      Valeurs      | Défaut |
|-----------|:-----------------:|:-------:|
| `profession` | [Profession](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) | aucun  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
profession: ARMORER
```

<div align="center">

*Sera remplacé si un `disguise` est utilisé.*

![create_arena_npc_profession.jpg](../../../img/wiki/create_arena_npc_profession.jpg)

</div>

</div>

</details>

***

### spawnLocation

Définit l'emplacement d'apparition du PNJ.

| Clé       |      Valeurs       | Défaut |
|-----------|:------------------:|:-------:|
| `spawnLocation` | [Location](#serialized_location) | aucun  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
spawnLocation: my_world,1.5,50,1.5,-108,0
```

</div>

</details>

***

### greetings

Définit le dialogue de salutation pour le PNJ.

| Clé       |      Valeurs       | Défaut |
|-----------|:------------------:|:-------:|
| `greetings` | [String List](#string_list) | aucun  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
greetings:
- Welcome to the Arena!
- The Arena welcomes you!
```

<div align="center">

![create_arena_npc_greetings.jpg](../../../img/wiki/create_arena_npc_greetings.jpg)

</div>

</div>

</details>

***

### dialog

Définit le dialogue lorsque les joueurs interagissent avec le PNJ.

| Clé       |      Valeurs       | Défaut |
|-----------|:------------------:|:-------:|
| `dialog` | [String List](#string_list) | aucun  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
dialog:
- Ready for a challenge?
- Face the Arena?
```

<div align="center">

![create_arena_npc_dialog.jpg](../../../img/wiki/create_arena_npc_dialog.jpg)

</div>

</div>

</details>

***

### farewell

Définit le dialogue d'adieu pour le PNJ.

| Clé       |           Valeurs            | Défaut |
|-----------|:----------------------------:|:-------:|
| `farewell` | [String List](#string_list) | aucun  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
farewell:
- Bye.
- Return with your shield, or on it!
```

<div align="center">

![create_arena_npc_farewell.jpg](../../../img/wiki/create_arena_npc_farewell.jpg)

<div align="center">

*Si une chaîne est trop longue, vous pouvez utiliser \n pour séparer la chaîne en plusieurs lignes.*

<div align="left">

```yml
farewell:
- Bye.
- Return with your\nshield, or on it!
```
</div>

![create_arena_npc_lines.jpg](../../../img/wiki/create_arena_npc_lines.jpg)

</div>

</div>

</div>

</details>

***

### canTalk

Définit si le PNJ peut parler.

| Clé       |           Valeurs            | Défaut |
|-----------|:----------------------------:|:-------:|
| `canTalk` | [Boolean](#boolean) | `true` |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
canTalk: true
```

</div>

</details>

***

### activationRadius

Définit le rayon à partir duquel le PNJ doit commencer à parler.

| Clé       |           Valeurs            | Défaut |
|-----------|:----------------------------:|:-------:|
| `activationRadius` | [Double](#double) | `3.0`  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
activationRadius: 3.0
```

</div>

</details>

***

### interactionType

Définit le type d'interaction que le PNJ effectuera.

| Clé       |           Valeurs            | Défaut |
|-----------|:----------------------------:|:-------:|
| `interactionType` | Spécial [4] | `ARENA_MASTER` |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
interactionType: ARENA_MASTER
```

</div>

</details>

***

### disguise

Définit le déguisement personnalisé du PNJ.

| Clé       |           Valeurs            | Défaut |
|-----------|:----------------------------:|:-------:|
| `disguise` | [Disguise](fr/elitemobs/libsdisguises.md) | aucun  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
disguise: ZOMBIE
```

<div align="center">

![create_arena_npc_disguise.jpg](../../../img/wiki/create_arena_npc_disguise.jpg)

<div align="center">

</div>

</details>

***

### arena

Définit vers quelle arène les joueurs seront téléportés.

| Clé       |           Valeurs            | Défaut |
|-----------|:----------------------------:|:-------:|
| `arena` | [Filename](#filename) | aucun  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
arena: my_arena.yml
```

</div>Please specify the language you would like the text translated into.