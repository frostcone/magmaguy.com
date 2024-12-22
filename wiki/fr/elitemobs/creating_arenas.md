[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Création d'arènes

<div align="center">

### isEnabled

Définit si l'arène est activée.

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

### arenaName

Définit le nom de l'arène.

| Clé         |             Valeurs             | Défaut |
|-------------|:-------------------------------:|:------:|
| `arenaName` | [Chaîne de caractères](#string) | aucun  |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
arenaName: Arène Bedrock
```

<div align="center">

![create_arena_name.jpg](../../../img/wiki/create_arena_name.jpg)

</div>

</div>

</details>

***

### corner1

Définit le premier coin de l'arène.

| Clé       |               Valeurs               | Défaut |
|-----------|:-----------------------------------:|:------:|
| `corner1` | [Emplacement](#serialized_location) | aucun  |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
corner1: mon_monde_arene,10,50,-10,0,0
```

<div align="center">

Sur cette image, `corner1` est représenté par de la *laine verte* et `corner2` est représenté par de la *laine rouge*.
Cette configuration désigne la zone entre les deux comme étant l'arène, représentée par de la *laine jaune*.

![create_arena_corner.jpg](../../../img/wiki/create_arena_corner.jpg)

</div>

</div>

</details>

***

### corner2

Définit le deuxième coin de l'arène, il doit être diamétralement opposé à `corner1`.

| Clé       |               Valeurs               | Défaut |
|-----------|:-----------------------------------:|:------:|
| `corner2` | [Emplacement](#serialized_location) | aucun  |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
corner2: mon_monde_arene,-10,50,10,0,0
```

<div align="center">

Sur cette image, `corner1` est représenté par de la *laine verte* et `corner2` est représenté par de la *laine rouge*.
Cette configuration désigne la zone entre les deux comme étant l'arène, représentée par de la *laine jaune*.

![create_arena_corner.jpg](../../../img/wiki/create_arena_corner.jpg)

</div>

</div>

</details>

***

### startLocation

Définit l'emplacement de départ de l'arène.

| Clé             |               Valeurs               | Défaut |
|-----------------|:-----------------------------------:|:------:|
| `startLocation` | [Emplacement](#serialized_location) | aucun  |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
startLocation: mon_monde_arene,1,50,1,0,0
```

</div>

</details>

***

### exitLocation

Définit l'emplacement de sortie de l'arène.

| Clé            |               Valeurs               | Défaut |
|----------------|:-----------------------------------:|:------:|
| `exitLocation` | [Emplacement](#serialized_location) | aucun  |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
exitLocation: mon_monde,1,50,1,0,0
```

</div>

</details>

***

### waveCount

Définit le nombre de vagues de l'arène.

| Clé         |      Valeurs       | Défaut |
|-------------|:------------------:|:------:|
| `waveCount` | [Entier](#integer) | aucun  |

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

| Clé                 |      Valeurs       | Défaut |
|---------------------|:------------------:|:------:|
| `delayBetweenWaves` | [Entier](#integer) |  `0`   |

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

Définit les emplacements d'apparition des boss de l'arène.

| Clé           |                      Valeurs                       | Défaut |
|---------------|:--------------------------------------------------:|:------:|
| `spawnPoints` | [Liste de chaînes de caractères](#string_list) [1] | aucun  |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
spawnPoints:
- name=nord:location=mon_monde_arene,219.5,71,273.5
- name=sud:location=mon_monde_arene,219.5,71,316.5
- name=ouest:location=mon_monde_arene,197.5,71,295.5
- name=est:location=mon_monde_arene,240.5,71,295.5
- name=centre:location=mon_monde_arene,219.5,71,295.5
```

</div>

</details>

***

### bossList

Définit la liste des boss qui apparaissent pendant les vagues de l'arène. Les arènes EliteMobs prennent en charge
l'apparition de Mythic Mobs dans les arènes.

| Clé        |                      Valeurs                       | Défaut |
|------------|:--------------------------------------------------:|:------:|
| `bossList` | [Liste de chaînes de caractères](#string_list) [2] | aucun  |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
bossList:
- wave=1:spawnPoint=nord:boss=mon_boss_vague_1.yml
- wave=1:spawnPoint=sud:boss=mon_boss_vague_1.yml
- wave=2:spawnPoint=centre:boss=mon_boss_mythicmobs:mythicmob=true:level=10
```

Dans cet exemple, la vague 1 fera apparaître un boss au point d'apparition nord et un boss au point d'apparition sud.
Ensuite, à la vague 2, un boss mythique apparaîtra, au niveau 10, au point central.

Notez que vous pouvez également forcer un niveau pour les boss EliteMobs, mais il est recommandé de définir leur niveau
dans leur fichier de configuration.

</div>

</details>

***

### rawArenaReward

Définit les récompenses données à la fin des vagues.

| Clé              |                                   Valeurs                                   | Défaut |
|------------------|:---------------------------------------------------------------------------:|:------:|
| `rawArenaReward` | [Tableau de butin universel EliteMobs]($language$/elitemobs/loot_tables.md) | aucun  |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
rawArenaReward:
- filename=livre_enchante_degats_tous.yml:wave=5:chance=0.25
- filename=ferraille_elite_minuscule.yml:wave=1:chance=0.5:amount=5
- currencyAmount=3:wave=3
- level=5:filename=parchemin_invocation_marchand.yml:wave=5
- filename=cure_dent_magmaguy.yml:itemlevel=10:wave=10:chance=0.95
```

</div>

</details>

***

### minimumPlayerCount

Définit le nombre minimum de joueurs qu'une arène doit avoir avant de démarrer.

| Clé                  |      Valeurs       | Défaut |
|----------------------|:------------------:|:------:|
| `minimumPlayerCount` | [Entier](#integer) |  `1`   |

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

| Clé                  |      Valeurs       | Défaut |
|----------------------|:------------------:|:------:|
| `maximumPlayerCount` | [Entier](#integer) | `100`  |

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

| Clé             |   Valeurs   | Défaut |
|-----------------|:-----------:|:------:|
| `arenaMessages` | Spécial [3] | aucun  |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
arenaMessages:
- wave=1:message="&a[Annonceur de l'arène] &fC'est l'heure de la vague un !"
- wave=2:message="&a[Annonceur de l'arène] &fWow, déjà la vague deux."
```

<div align="center">

![create_arena_messages.jpg](../../../img/wiki/create_arena_messages.jpg)

</div>

</div>

</details>

***

### cylindricalArena

Définit si l'arène utilise une forme cylindrique (la valeur par défaut est cuboïde).

| Clé                |       Valeurs       | Défaut  |
|--------------------|:-------------------:|:-------:|
| `cylindricalArena` | [Booléen](#boolean) | `false` |

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

Définit l'autorisation requise pour utiliser l'arène.

| Clé          |             Valeurs              | Défaut |
|--------------|:--------------------------------:|:------:|
| `permission` | [Chaîne de caractères](#integer) | aucun  |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
permission: monautorisation.arene
```

</div>

</details>

***

</div>

## Spécial [1]

Points d'apparition: Utilise le format suivant: `name=nom_point:location=nom_monde,x,y,z`.

## Spécial [2]

Liste des boss: Utilise le format suivant: `wave=x:spawnPoint=Y:boss=nomdefichierboss.yml`.

## Spécial [3]

Messages de l'arène: Utilise le format suivant: `wave=X:message=votre message ici`.

<details> 

<summary align="center"><b>Exemple de configuration d'arène</b></summary>

<div align="left">

```yml
isEnabled: true
arenaName: Arène d'exemple
corner1: mon_monde_arene,0,0,0,0,0
corner2: mon_monde_arene,50,50,50,0,0
startLocation: mon_monde_arene,25,0,25,0,0
exitLocation: mon_monde_minecraft,234,44,245,0,0
waveCount: 5
delayBetweenWaves: 5
spawnPoints:
  - name=nord:location=mon_monde_arene,40.5,0,0
  - name=sud:location=mon_monde_arene,10.5,0,0
  - name=ouest:location=mon_monde_arene,0,0,40.5
  - name=est:location=mon_monde_arene,0,0,10.5
  - name=centre:location=mon_monde_arene,25.5,0,25.5
bossList:
  - wave=1:spawnPoint=nord:boss=mob_exemple_vague_1.yml
  - wave=1:spawnPoint=centre:boss=mob_exemple_vague_1.yml
  - wave=1:spawnPoint=sud:boss=mob_exemple_vague_1.yml
  - wave=2:spawnPoint=centre:boss=mob_exemple_vague_2.yml
  - wave=3:spawnPoint=est:boss=mob_exemple_vague_3.yml
  - wave=3:spawnPoint=ouest:boss=mob_exemple_vague_3.yml
  - wave=4:spawnPoint=centre:boss=mob_exemple_vague_4.yml
  - wave=4:spawnPoint=centre:boss=mob_exemple_vague_4.yml
  - wave=5:spawnPoint=centre:boss=mob_exemple_vague_5.yml
  - wave=5:spawnPoint=sud:boss=mob_exemple_vague_5.yml
  - wave=5:spawnPoint=ouest:boss=mob_exemple_vague_5.yml
rawArenaReward:
  - currencyAmount=5:wave=1
  - currencyAmount=10:wave=2
  - currencyAmount=15:wave=3
  - currencyAmount=20:wave=4
  - currencyAmount=25:wave=5
  - filename=cure_dent_magmaguy.yml:itemlevel=5:wave=5:chance=0.5
minimumPlayerCount: 1
maximumPlayerCount: 3
arenaMessages:
  - wave=1:message=&d[PNJ de l'arène] &fWow ! Vague 1 !
  - wave=2:message=&d[PNJ de l'arène] &fIncroyable, c'est la vague 2 !
  - wave=3:message=&d[PNJ de l'arène] &fLa vague 3 est lancée !
  - wave=4:message=&d[PNJ de l'arène] &fDéjà la vague 4 !
  - wave=5:message=&d[PNJ de l'arène] &fEh bien, tout est fini après celle-ci.
cylindricalArena: false
permission: arene.monautorisation
```

</div>

</details>

<details> 

<summary align="center"><b>Analyse de l'exemple</b></summary>

<div align="left">

Passons en revue cet exemple du début et expliquons ce que fait cette configuration d'arène.

Tout d'abord, l'arène est activée avec `isEnabled`, et nous pouvons voir qu'elle est appelée Arène d'exemple à l'aide du
paramètre `arenaName`. Le nom sera affiché lorsque vous interagirez avec le PNJ de l'arène (nous verrons comment créer
un PNJ d'arène plus bas) qui permettra aux joueurs de rejoindre l'arène. corner1 et corner2 définissent la taille de
l'arène. Ces coins doivent être aux côtés opposés l'un de l'autre dans la zone que vous prévoyez d'utiliser pour l'
arène.

`startLocation` est l'endroit où les joueurs apparaîtront lorsqu'ils rejoindront l'arène, dans l'exemple, ce serait au
centre de l'arène dans le monde mon_monde_arene. `exitLocation` est l'endroit où les joueurs seront téléportés après
avoir échoué ou terminé l'arène. Dans ce cas, ce serait le monde mon_monde_minecraft et les coordonnées dans l'exemple.

`waveCount` définit simplement le nombre de vagues que durera l'arène. Dans ce cas, ce serait 5 vagues. Si les joueurs
parviennent à survivre aux 5 vagues, ils auront réussi à survivre à l'arène. `delayBetweenWaves` définira le nombre de
secondes avant le début de la vague suivante. Dans notre exemple, les joueurs auraient 5 secondes pour se préparer avant
le début de la vague suivante.

`spawnPoints` définit les emplacements où nous pouvons faire apparaître nos monstres. Nous pouvons en créer autant que
nous voulons et les nommer comme nous le souhaitons. Dans l'exemple, nous avons décidé de créer 5 points d'apparition et
de les nommer nord, sud, centre, est et ouest.

`bossList` est l'endroit où nous définissons quel boss doit apparaître à quelle vague et à quel endroit. Dans l'exemple,
la vague 1 aura 3 boss apparaissant aux emplacements que nous avons nommés nord, centre et sud. Tous les trois sont
configurés pour utiliser le même fichier de boss, mais nous aurions pu utiliser des fichiers de boss différents pour
chacun.

`rawArenaReward` définit les récompenses qui seront distribuées après qu'un joueur a réussi à survivre/vaincre une
vague. Comme nous pouvons le voir dans l'exemple, le fait de battre la vague 1 récompensera le joueur avec 5 pièces
d'élite. S'ils parviennent à survivre au reste des vagues et à battre la vague 5, ils seront récompensés par 25 pièces
d'élite et 50 % de chance d'obtenir un Cure-dent de MagmaGuy de niveau 5.

`minimumPlayerCount` définit le nombre minimum de joueurs nécessaires avant que l'arène ne démarre. Dans notre exemple,
ce paramètre est réglé sur 1, donc un seul joueur est nécessaire pour que l'arène démarre. `maximumPlayerCount` définit
le nombre maximum de joueurs qui peuvent participer à l'arène. Dans notre exemple, ce paramètre est réglé sur 3, ce qui
signifie que si plus de 3 joueurs essaient de participer à l'arène, l'arène ne démarrera pas tant qu'il n'y aura pas 3
joueurs ou moins.

`arenaMessages` vous permet d'ajouter un texte descriptif qui sera affiché dans le chat au début des vagues définies.
Dans notre exemple, nous avons décidé d'afficher un court message au début de chaque vague. Nous avons également décidé
d'inclure le nom du PNJ au début de chaque message en donnant l'illusion que le texte est un dialogue prononcé par
l'annonceur (maître de l'arène).

`cylindricalArena` Ce paramètre nous permettra de basculer si la zone définie que nous avons définie avec `corner1`
et `corner2` doit être une forme cylindrique au lieu d'une forme cuboïde. Dans notre exemple, nous avons défini ceci
sur `false`, ce qui signifie que l'arène d'exemple est une forme cuboïde.

`permission` nous permet de définir une autorisation que les joueurs devront avoir pour pouvoir rejoindre/démarrer
l'arène. Dans notre exemple, les joueurs auront besoin de l'autorisation `arene.monautorisation` pour pouvoir utiliser
l'arène.

</div>

</details>

## Création du PNJ de l'arène

<div align="center">

### isEnabled

Définit si le PNJ est activé.

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

### name

Définit le nom d'affichage du PNJ.

| Clé    |             Valeurs             | Défaut |
|--------|:-------------------------------:|:------:|
| `name` | [Chaîne de caractères](#string) | aucun  |

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

| Clé    |             Valeurs             | Défaut |
|--------|:-------------------------------:|:------:|
| `role` | [Chaîne de caractères](#string) | aucun  |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
role: "&c<Maître de l'arène>"
```

<div align="center">

![create_arena_npc_role.jpg](../../../img/wiki/create_arena_npc_role.jpg)

</div>

</div>

</details>

***

### profession

Définit la profession MineCraft du PNJ.

| Clé          |                                              Valeurs                                              | Défaut |
|--------------|:-------------------------------------------------------------------------------------------------:|:------:|
| `profession` | [Profession](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) | aucun  |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
profession: FORGERON
```

<div align="center">


*Sera remplacé si un `diguise` est utilisé.*

![create_arena_npc_profession.jpg](../../../img/wiki/create_arena_npc_profession.jpg)

</div>

</div>

</details>

***

### spawnLocation

Définit l'emplacement d'apparition du PNJ.

| Clé             |               Valeurs               | Défaut |
|-----------------|:-----------------------------------:|:------:|
| `spawnLocation` | [Emplacement](#serialized_location) | aucun  |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
spawnLocation: mon_monde,1.5,50,1.5,-108,0
```

</div>

</details>

***

### greetings

Définit le dialogue de salutation du PNJ.

| Clé         |                    Valeurs                     | Défaut |
|-------------|:----------------------------------------------:|:------:|
| `greetings` | [Liste de chaînes de caractères](#string_list) | aucun  |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
greetings:
- Bienvenue dans l'arène !
- L'arène vous souhaite la bienvenue !
```

<div align="center">

![create_arena_npc_greetings.jpg](../../../img/wiki/create_arena_npc_greetings.jpg)

</div>

</div>

</details>

***

### dialog

Définit le dialogue lorsque les joueurs interagissent avec le PNJ.

| Clé      |                    Valeurs                     | Défaut |
|----------|:----------------------------------------------:|:------:|
| `dialog` | [Liste de chaînes de caractères](#string_list) | aucun  |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
dialog:
- Prêt pour un défi ?
- Affronter l'arène ?
```

<div align="center">

![create_arena_npc_dialog.jpg](../../../img/wiki/create_arena_npc_dialog.jpg)

</div>

</div>

</details>

***

### farewell

Définit le dialogue d'adieu du PNJ.

| Clé        |                    Valeurs                     | Défaut |
|------------|:----------------------------------------------:|:------:|
| `farewell` | [Liste de chaînes de caractères](#string_list) | aucun  |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
farewell:
- Au revoir.
- Revenez avec votre bouclier, ou dessus !
```

<div align="center">

![create_arena_npc_farewell.jpg](../../../img/wiki/create_arena_npc_farewell.jpg)

<div align="center">

*Si une chaîne est trop longue, vous pouvez utiliser \n pour séparer la chaîne en plusieurs lignes.*

<div align="left">

```yml
farewell:
- Au revoir.
- Revenez avec votre\nbouclier, ou dessus !
```

</div>

![create_arena_npc_lines.jpg](../../../img/wiki/create_arena_npc_lines.jpg)

</div>

</div>

</div>

</details>

***

### canTalk

Définit le dialogue d'adieu du PNJ.

| Clé       |       Valeurs       | Défaut |
|-----------|:-------------------:|:------:|
| `canTalk` | [Booléen](#boolean) | `true` |

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

| Clé                |      Valeurs      | Défaut |
|--------------------|:-----------------:|:------:|
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

| Clé               |   Valeurs   |     Défaut     |
|-------------------|:-----------:|:--------------:|
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

| Clé        |                       Valeurs                        | Défaut |
|------------|:----------------------------------------------------:|:------:|
| `disguise` | [Déguisement]($language$/elitemobs/libsdisguises.md) | aucun  |

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

| Clé     |           Valeurs           | Défaut |
|---------|:---------------------------:|:------:|
| `arena` | [Nom de fichier](#filename) | aucun  |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
arena: mon_arene.yml
```

</div>

</details>

***

### teleportLocation

Définit l'endroit où les joueurs doivent être téléportés après avoir interagi avec le PNJ. Ce paramètre est généralement
utilisé pour téléporter les joueurs vers une zone de type lobby dédiée de l'arène où ils peuvent commencer le défi de l'
arène ou attendre que d'autres joueurs terminent l'arène.

| Clé                |         Valeurs          | Défaut |
|--------------------|:------------------------:|:------:|
| `teleportLocation` | [Emplacement](#location) | aucun  |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
teleportLocation: mon_monde_arene,10,50,10,0,0
```

</div>

</details>

</div>

***

<details>

<summary align="center"><b>Exemple de configuration d'arène</b></summary>

<div align="left">

```yml
isEnabled: true
name: PNJ d'exemple
role: <Maître de l'arène>
profession: FORGERON
spawnLocation: mon_monde_minecraft,233,44,245,0,0
greetings:
  - Bienvenue dans l'arène !
dialog:
```

- Prêt à entrer dans l'arène ?
farewell:
    - Au revoir!
canTalk: true
activationRadius: 3.0
interactionType: ARENA_MASTER
disguise: ZOMBIE
      arena: example_arena.yml
```
Cet exemple montre un PNJ d'arène de base qui apparaîtra dans mon_monde_minecraft avec un déguisement de zombie. Les joueurs peuvent interagir avec ce PNJ pour défier l'arène d'exemple.

</div>

</details>

## Spécial [4]
Voici la liste des types d'interaction PNJ valides :

| Type | Description |
| --- | :-: |
| `GUILD_GREETER` | Ouvre le menu de la guilde des aventuriers |
| `CHAT` | Un clic droit fait défiler le `dialog` |
| `CUSTOM_SHOP` | Ouvre le menu de la boutique personnalisée |
| `PROCEDURALLY_GENERATED_SHOP` | Ouvre la boutique générée de manière procédurale |
| `BAR` | Ouvre le menu du bar |
| `ARENA` | Ouvre le menu de l'arène |
| `QUEST_GIVER` | Ouvre le menu des quêtes générées de manière procédurale |
| `CUSTOM_QUEST_GIVER` | Ouvre le menu des quêtes pour un ensemble de quêtes spécifique défini dans `questFilenames` |
| `NONE` | Aucune interaction |
| `SELL` | Ouvre le menu de vente |
| `TELEPORT_BACK` | Téléporte les joueurs vers le dernier emplacement du monde non elitemobs où ils se trouvaient |
| `SCRAPPER` | Ouvre le menu de mise au rebut |
| `SMELTER` | Ouvre le menu de fusion |
| `REPAIRMAN` | Ouvre le menu de réparation |
| `ENHANCER` | Ouvre le menu d'amélioration d'objets |
| `REFINER` | Ouvre le menu de raffinage |
| `UNBINDER` | Ouvre le menu de déliage |
| `ARENA_MASTER` | Ouvre le menu de l'arène pour l'arène définie dans `arenaFilename` |
| `COMMAND` | Exécute la commande définie dans `command` |
