```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Paramètres de configuration

<div align="center">

### isEnabled

Définit si un PNJ est activé.

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `isEnabled` | [Booléen](#boolean) | `true`  |

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

Définit le nom affiché d'un PNJ. Prend en charge les [Codes couleur](#color_codes).

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `name` | [Chaîne de caractères](#string) |  none   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
name: "&aEnn Peecee"
```

<div align="center">

![create_npc_name.jpg](../../../img/wiki/create_npc_name.jpg)

</div>

</div>

</details>

***

### scale

Définit l'échelle (taille) du PNJ.

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `scale` | [Multiplicateur](#multiplier) | `1.0` |

Lors de la mise à l'échelle, `1.0` représente la taille par défaut. Pour agrandir l'entité, augmentez la valeur (par exemple, `1.2`). Pour réduire l'entité, diminuez la valeur (par exemple, `0.8`).

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
scale: 1.2
```

</div>

</details>

***

### role

Définit le rôle du PNJ, sous le nom. Visuel uniquement. Prend en charge les [Codes couleur](#color_codes).

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `role` | [Chaîne de caractères](#string) |  none   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
role: "&c<Red Fellow>"
```

<div align="center">

![create_npc_role.jpg](../../../img/wiki/create_npc_role.jpg)

</div>

</div>

</details>

***

### profession

Définit la profession du PNJ, qui détermine son apparence lorsqu'il **n'utilise pas** de déguisement.

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `profession` | [Profession](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) |  `NITWIT`   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
profession: NITWIT
```

<div align="center">

![create_npc_profession.jpg](../../../img/wiki/create_npc_profession.jpg)

</div>

</div>

</details>

***

### greetings

Définit la liste des salutations que le PNJ dit lorsqu'un joueur s'approche.

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `greetings` | [Liste de chaînes de caractères](#string_list) |  none   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
greetings:
- Hi there!
- Good day.
```

<div align="center">

![create_npc_greetings.jpg](../../../img/wiki/create_npc_greetings.jpg)

</div>

</div>

</details>

***

### dialog

Définit le dialogue que le PNJ dira lorsqu'un joueur est à proximité (Dans le cas du `interactionType` `DIALOG`, ce serait le dialogue).

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `dialog` | [Liste de chaînes de caractères](#string_list) |  none   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
dialog:
- I like apples!
- Sure is hot.
```

<div align="center">

![create_npc_dialog.jpg](../../../img/wiki/create_npc_dialog.jpg)

</div>

</div>

</details>

***

### farewell

Définit le message d'adieu du PNJ.

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `farewell` | [Liste de chaînes de caractères](#string_list) |  none   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
farewell:
- Until next time!
- Bye!
```

<div align="center">

![create_npc_farewell.jpg](../../../img/wiki/create_npc_farewell.jpg)

</div>

</div>

</details>

***

### canTalk

Définit si le PNJ peut parler.

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `canTalk` | [Booléen](#boolean) | `true`  |

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

Définit le rayon dans lequel un PNJ peut détecter l'approche d'un joueur.

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `activationRadius` | [Double](#double) |  `3.0`  |

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

| Clé       |      Valeurs       | Par défaut |
|-----------|:-----------------:|:-------:|
| `interactionType` |    Spécial [1]    |  none   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
interactionType: TELEPORT_BACK
```

</div>

</details>

***

### noPreviousLocationMessage

Lorsqu'un PNJ Téléporteur n'a pas d'emplacement précédent où téléporter un joueur, il affichera ce message. Accepte les [Codes couleur](#color_codes)

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `noPreviousLocationMessage` | [Chaîne de caractères](#string) |  none   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
noPreviousLocationMessage: '&8[EliteMobs] &cCouldn''t send you back to your previous location - no previous location found!'
```

<div align="center">

![create_npc_noteleportlocation.jpg](../../../img/wiki/create_npc_noteleportlocation.jpg)

</div>

</div>

</details>

***

### timeout

Définit la durée, en minutes, avant qu'un PNJ ne disparaisse définitivement.

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `timeout` | [Entier](#integer) |  `0` (jamais)   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
timeout: 0
```

</div>

</details>

***

### questFileName

Définit les quêtes que le PNJ donne.

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `questFileName` | [Liste de chaînes de caractères](#string_list) |  none   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
questFileName:
- my_quest_one.yml
- my_quest_two.yml
```

</div>

</details>

***

### disguise

Définit le déguisement LibsDisguises que le PNJ a.

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `disguise` | [Format LibsDisguises]($language$/elitemobs/libsdisguises.md) |  none   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
disguise: SKELETON
```

<div align="center">

![create_npc_disguise.jpg](../../../img/wiki/create_npc_disguise.jpg)

</div>

</div>

</details>

***

### customDisguiseData

Définit les données pour un déguisement LibsDisguises personnalisé.

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `customDisguiseData` | [Format LibsDisguises]($language$/elitemobs/libsdisguises.md&section=how-can-i-disguise-an-entity-with-a-custom-disguise?) |  none   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
disguise: custom:my_cool_disguise_name
customDisguiseData: player my_cool_disguise_name setskin {"id":"364acb6d-9050-46f7-b5fb-f8c3fd83a6fc","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTYxMTk4ODA4Nzc1NSwKICAicHJvZmlsZUlkIiA6ICJkZGVkNTZlMWVmOGI0MGZlOGFkMTYyOTIwZjdhZWNkYSIsCiAgInByb2ZpbGVOYW1lIiA6ICJEaXNjb3JkQXBwIiwKICAic2lnbmF0dXJlUmVxdWlyZWQiIDogdHJ1ZSwKICAidGV4dHVyZXMiIDogewogICAgIlNLSU4iIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlLzliYmVkODQzNWY4YmYyNzhhZmUyNmU2NGZkOTI2bCg4YjM3NzMyZDg4ZTMzNDg5N2RiZDUyN2Q1NmZmOTE5OTBlIiAKICAgIH0KICAKICB9Cn0=","signature":"ujLq1joYVktuQAp1xpFKlxQFUVinSePiDBiVCAxxix/mA5vP86i/eAOfb1mtGjaAZ6sO0l2olbzvycnGXNBtbAxgqprguROXY4tpWiePVTDmy3iD4GdOCxHAkYLoyMV5qTT4SNsldUFFuND8GSEgbNMltKDLmhNKwzm08iCigPfpeuYpwljgJPxu6ka54PKNaQu4doI0ZDZXKqq4hPhR3Bs2Sz9MI0SmdmQWwcCzUz3DFdVno27fmQ6LwqmT+eSoOv0EttVG/XMaTYQ5lhBY61mqf6WlJyYVUSfjJk1AbYsctu7dWM+sbY8jFq5ljvXJGGr5TyKi+fs8vHy06Z2go20QgTYOw+caFxFijAS6fgm3oY57VEO/+/9OLHdD+Z9BrWqQWcIIrVeIfxjue/yt4pyeVv9jX59hjNFjhcPEwotkxJ+vZ96WlTLWDG4BiqauDr2VeGyLlVaygO9ZU0wwsN65iSh91GI3tMIA5wbDR0Hts/9ABvt9eafHbowS+4SZXN0i9mYnKg7op1eiB8nMEAGsPJg3DwsmUrh3ACAapQ6eYHiJpo59RXDqKlRcXwo7wsEFp//5LgQWbPj0NP3nxnywdpozqSAeq6236qlhE9BT9eiyJ41V9sMelYFEWMlUAltR40NdbIrHB0J3nmfuLJz44/sTwWf6P1khOy//XX0="}],"legacy":false}
```

<div align="center">

![create_npc_custom_disguise.jpg](../../../img/wiki/create_npc_custom_disguise.jpg)

</div>

</div>

</details>

***

### customModel

Définit le modèle personnalisé ModelEngine que le PNJ utilisera.

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `customModel` | [Chaîne de caractères](#string) |  none   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
customModel: MY_MODEL_ONE
```

</div>

</details>

***

### arena

Définit le nom de fichier de l'arène pour laquelle le PNJ ouvrira un menu (nécessite le type d'interaction `ARENA_MASTER`).

| Clé       |        Valeurs         | Par défaut |
|-----------|:---------------------:|:-------:|
| `arena` | [Nom de fichier](#filename) |  none   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
arena: my_arena.yml
```

</div>

</details>

***

### command

Définit la commande que le PNJ exécutera (nécessite le type d'interaction `COMMAND`).

| Clé       |        Valeurs         | Par défaut |
|-----------|:---------------------:|:-------:|
| `command` | [Chaîne de caractères](#string) |  none   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
command: say Look at me running a command, how cool!
```

<div align="center">

![create_npc_command.jpg](../../../img/wiki/create_npc_command.jpg)

</div>

</div>

</details>

***

### spawnLocation

Définit l'emplacement d'apparition des PNJ. Vous devriez le définir via la commande `/em spawnnpc <nomfichierpnj.yml>`.

| Clé       |        Valeurs         | Par défaut |
|-----------|:---------------------:|:-------:|
| `spawnLocation` | [Chaîne de caractères](#string) |  none   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
spawnLocation: my_world,10,50,10,0,0
```

</div>

</details>

***

### spawnLocations

Définit les emplacements d'apparition des PNJ. Vous devriez les définir via la commande `/em spawnnpc <nomfichierpnj.yml>`.

| Clé              |           Valeurs            | Par défaut |
|------------------|:---------------------------:|:-------:|
| `spawnLocations` | [Liste de chaînes de caractères](#string_list) |  none   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
spawnLocations:
- my_world,10,50,10,0,0
- my_world,-10,50,-10,0,0
```

</div>

</details>

### instanced

Définit si le PNJ doit être instancié (pour une utilisation dans les donjons instanciés).

| Clé              |           Valeurs            | Par défaut |
|------------------|:---------------------------:|:-------:|
| `instanced` | [Booléen](#boolean) |  `false`   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
instanced: false
```

</div>

</details>

</div>

***

<details>

<summary align="center"><b>Exemple de configuration de PNJ</b></summary>

<div align="left">

```yml
isEnabled: true
name: "&cRed Rubin"
role: "&a<Generic NPC>"
profession: NITWIT
greetings:
- Hiya!
- Hello!
dialog:
- Great conversation!
- Pleasure talking with you!
farewell:
- Goodbye!
- Laters!
canTalk: true
activationRadius: 4
interactionType: CHAT
timeout: 0
questFileName:
- my_quest.yml #le type d'interaction du PNJ doit être défini sur CUSTOM_QUEST_GIVER
disguise: SKELETON
customDisguiseData: #utilisé lorsqu'un déguisement libsdisguise personnalisé est défini
customModel: MODEL_ONE
arena: my_arena.yml #le type d'interaction du PNJ doit être défini sur ARENA_MASTER
command: /say Hello World! #le type d'interaction du PNJ doit être défini sur COMMAND
spawnLocation: my_world,584,55,127,90,10 #rappelez-vous que les PNJ utilisent le tangage (pitch) et le lacet (yaw) pour définir où ils regardent. ceci est également défini automatiquement lors de l'exécution de la commande /em spawnnpc <nomfichierpnj.yml>, alors assurez-vous de vous positionner là où vous voulez que le PNJ regarde lors de l'exécution de la commande.
```

<div align="center">

![create_npc_npc.jpg](../../../img/wiki/create_npc_npc.jpg)

</div>

</div>

</details>

***

## Spécial [1]
Voici la liste des types d'interaction de PNJ valides :

| Type                          |                                Description                                |
|-------------------------------|:-------------------------------------------------------------------------:|
| `GUILD_GREETER`               |                     Ouvre le menu de la guilde des aventuriers                      |
| `CHAT`                        |                Le clic droit fait défiler le `dialogue`                 |
| `CUSTOM_SHOP`                 |                        Ouvre le menu de la boutique personnalisée                         |
| `PROCEDURALLY_GENERATED_SHOP` |                   Ouvre la boutique générée procéduralement                   |
| `BAR`                         |                            Ouvre le menu du bar                             |
| `ARENA`                       |                           Ouvre le menu de l'arène                            |
| `QUEST_GIVER`                 |               Ouvre le menu des quêtes générées procéduralement                |
| `CUSTOM_QUEST_GIVER`          |     Ouvre le menu de quête pour une quête spécifique définie dans `questFileName`      |
| `NONE`                        |                              Aucune interaction                              |
| `SELL`                        |                            Ouvre le menu de vente                            |
| `TELEPORT_BACK`               | Téléporte les joueurs à leur dernier emplacement dans le monde (hors elitemobs) |
| `SCRAPPER`                    |                           Ouvre le menu de recyclage                            |
| `REPAIRMAN`                   |                           Ouvre le menu de réparation                           |
| `ENCHANTER`                   |                          Ouvre le menu d'enchantement                           |
| `REFINER`                     |                          Ouvre le menu de raffinage                           |
| `UNBINDER`                    |                           Ouvre le menu de déliaison                           |
| `ARENA_MASTER`                |         Ouvre le menu de l'arène définie dans `arenaFilename`         |
| `COMMAND`                     |                     Exécute la commande définie dans `command`                     |

*Pour plus d'informations sur ce que font le SCRAPPER et les types d'interaction similaires, cliquez [ici]($language$/elitemobs/item_upgrade_system.md).*
```