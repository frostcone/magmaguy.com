[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Paramètres de configuration

<div align="center">

### isEnabled

Définit si un PNJ est activé.

| Clé         |       Valeurs       | Par défaut |
|-------------|:-------------------:|:----------:|
| `isEnabled` | [Booléen](#boolean) |   `true`   |

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

Définit le nom d'affichage d'un PNJ. Prend en charge les [Codes de couleur](#color_codes).

| Clé    |      Valeurs      | Par défaut |
|--------|:-----------------:|:----------:|
| `name` | [Chaîne](#string) |   aucun    |

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

| Clé     |            Valeurs            | Par défaut |
|---------|:-----------------------------:|:----------:|
| `scale` | [Multiplicateur](#multiplier) |   `1.0`    |

Lors de la mise à l'échelle, `1.0` représente la taille par défaut. Pour agrandir l'entité, augmentez la valeur (par
exemple, `1.2`). Pour réduire l'entité, diminuez la valeur (par exemple, `0.8`).

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

Définit le rôle du PNJ, sous son nom. Uniquement visuel. Prend en charge les [Codes de couleur](#color_codes).

| Clé    |      Valeurs      | Par défaut |
|--------|:-----------------:|:----------:|
| `role` | [Chaîne](#string) |   aucun    |

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

Définit la profession du PNJ, ce qui définit son apparence lorsqu'il **n'utilise pas** de déguisement.

| Clé          |                                              Valeurs                                              | Par défaut |
|--------------|:-------------------------------------------------------------------------------------------------:|:----------:|
| `profession` | [Profession](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) |  `NITWIT`  |

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

Définit la liste de salutations que le PNJ prononce lorsqu'un joueur s'approche.

| Clé         |             Valeurs              | Par défaut |
|-------------|:--------------------------------:|:----------:|
| `greetings` | [Liste de chaînes](#string_list) |   aucun    |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
greetings:
- Salut !
- Bonjour.
```

<div align="center">

![create_npc_greetings.jpg](../../../img/wiki/create_npc_greetings.jpg)

</div>

</div>

</details>

***

### dialog

Définit le dialogue que le PNJ prononcera lorsqu'un joueur est à proximité (dans le cas du type d'interaction `DIALOG`,
ce serait le dialogue).

| Clé      |             Valeurs              | Par défaut |
|----------|:--------------------------------:|:----------:|
| `dialog` | [Liste de chaînes](#string_list) |   aucun    |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
dialog:
- J'aime les pommes !
- Il fait chaud, n'est-ce pas ?
```

<div align="center">

![create_npc_dialog.jpg](../../../img/wiki/create_npc_dialog.jpg)

</div>

</div>

</details>

***

### farewell

Définit le message d'adieu du PNJ.

| Clé        |             Valeurs              | Par défaut |
|------------|:--------------------------------:|:----------:|
| `farewell` | [Liste de chaînes](#string_list) |   aucun    |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
farewell:
- À la prochaine !
- Au revoir !
```

<div align="center">

![create_npc_farewell.jpg](../../../img/wiki/create_npc_farewell.jpg)

</div>

</div>

</details>

***

### canTalk

Définit si le PNJ peut parler.

| Clé       |       Valeurs       | Par défaut |
|-----------|:-------------------:|:----------:|
| `canTalk` | [Booléen](#boolean) |   `true`   |

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

| Clé                |      Valeurs      | Par défaut |
|--------------------|:-----------------:|:----------:|
| `activationRadius` | [Double](#double) |   `3.0`    |

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

| Clé               |   Valeurs   | Par défaut |
|-------------------|:-----------:|:----------:|
| `interactionType` | Spécial [1] |   aucun    |

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

Lorsqu'un PNJ téléporteur n'a pas de position précédente vers laquelle téléporter un joueur, il affichera ce message.
Accepte les [Codes de couleur](#color_codes).

| Clé                         |      Valeurs      | Par défaut |
|-----------------------------|:-----------------:|:----------:|
| `noPreviousLocationMessage` | [Chaîne](#string) |   aucun    |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
noPreviousLocationMessage: '&8[EliteMobs] &cImpossible de vous renvoyer à votre position précédente - aucune position précédente trouvée !'
```

<div align="center">

![create_npc_noteleportlocation.jpg](../../../img/wiki/create_npc_noteleportlocation.jpg)

</div>

</div>

</details>

***

### timeout

Définit la durée, en minutes, avant qu'un PNJ ne disparaisse définitivement.

| Clé       |      Valeurs       |  Par défaut  |
|-----------|:------------------:|:------------:|
| `timeout` | [Entier](#integer) | `0` (jamais) |

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

| Clé             |             Valeurs              | Par défaut |
|-----------------|:--------------------------------:|:----------:|
| `questFileName` | [Liste de chaînes](#string_list) |   aucun    |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
questFileName:
- ma_quete_un.yml
- ma_quete_deux.yml
```

</div>

</details>

***

### disguise

Définit le déguisement LibsDisguises que le PNJ possède.

| Clé        |                            Valeurs                            | Par défaut |
|------------|:-------------------------------------------------------------:|:----------:|
| `disguise` | [Format LibsDisguises]($language$/elitemobs/libsdisguises.md) |   aucun    |

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

| Clé                  |                                                          Valeurs                                                           | Par défaut |
|----------------------|:--------------------------------------------------------------------------------------------------------------------------:|:----------:|
| `customDisguiseData` | [Format LibsDisguises]($language$/elitemobs/libsdisguises.md&section=how-can-i-disguise-an-entity-with-a-custom-disguise?) |   aucun    |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
disguise: custom:mon_super_deguisement
customDisguiseData: player mon_super_deguisement setskin {"id":"364acb6d-9050-46f7-b5fb-f8c3fd83a6fc","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTYxMTk4ODA4Nzc1NSwKICAicHJvZmlsZUlkIiA6ICJkZGVkNTZlMWVmOGI0MGZlOGFkMTYyOTIwZjdhZWNkYSIsCiAgInByb2ZpbGVOYW1lIiA6ICJEaXNjb3JkQXBwIiwKICAic2lnbmF0dXJlUmVxdWlyZWQiIDogdHJ1ZSwKICAidGV4dHVyZXMiIDogewogICAgIlNLSU4iIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlLzliYmVkODQzNWY4YmYyNzhhZmUyNmU2NGZkOTI2YjhiMzc3MzJkODhlMzM0ODk3ZGJkNTI3ZDU2ZmY5MTk5MGUiCiAgICB9CiAgfQp9","signature":"ujLq1joYVktuQAp1xpFKlxQFUVinSePiDBiVCAxxix/mA5vP86i/eAOfb1mtGjaAZ6sO0l2olbzvycnGXNBtbAxgqprguROXY4tpWiePVTDmy3iD4GdOCxHAkYLoyMV5qTT4SNsldUFFuND8GSEgbNMltKDLmhNKwzm08iCigPfpeuYpwljgJPxu6ka54PKNaQu4doI0ZDZXKqq4hPhR3Bs2Sz9MI0SmdmQWwcCzUz3DFdVno27fmQ6LwqmT+eSoOv0EttVG/XMaTYQ5lhBY61mqf6WlJyYVUSfjJk1AbYsctu7dWM+sbY8jFq5ljvXJGGr5TyKi+fs8vHy06Z2go20QgTYOw+caFxFijAS6fgm3oY57VEO/+/9OLHdD+Z9BrWqQWcIIrVeIfxjue/yt4pyeVv9jX59hjNFjhcPEwotkxJ+vZ96WlTLWDG4BiqauDr2VeGyLlVaygO9ZU0wwsN65iSh91GI3tMIA5wbDR0Hts/9ABvt9eafHbowS+4SZXN0i9mYnKg7op1eiB8nMEAGsPJg3DwsmUrh3ACAapQ6eYHiJpo59RXDqKlRcXwo7wsEFp//5LgQWbPj0NP3nxnywdpozqSAeq6236qlhE9BT9eiyJ41V9sMelYFEWMlUAltR40NdbIrHB0J3nmfuLJz44/sTwWf6P1khOy//XX0="}],"legacy":false}
```

<div align="center">

![create_npc_custom_disguise.jpg](../../../img/wiki/create_npc_custom_disguise.jpg)

</div>

</div>

</details>

***

### customModel

Définit le modèle personnalisé ModelEngine que le PNJ utilisera.

| Clé           |      Valeurs      | Par défaut |
|---------------|:-----------------:|:----------:|
| `customModel` | [Chaîne](#string) |   aucun    |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
customModel: MON_MODELE_UN
```

</div>

</details>

***

### arena

Définit le nom de fichier de l'arène pour laquelle le PNJ ouvrira un menu (nécessite le type
d'interaction `ARENA_MASTER`).

| Clé     |           Valeurs           | Par défaut |
|---------|:---------------------------:|:----------:|
| `arena` | [Nom de fichier](#filename) |   aucun    |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
arena: mon_arene.yml
```

</div>

</details>

***

### command

Définit la commande que le PNJ exécutera (nécessite le type d'interaction `COMMAND`).

| Clé       |      Valeurs      | Par défaut |
|-----------|:-----------------:|:----------:|
| `command` | [Chaîne](#string) |   aucun    |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
command: say Regardez-moi exécuter une commande, c'est génial !
```

<div align="center">

![create_npc_command.jpg](../../../img/wiki/create_npc_command.jpg)

</div>

</div>

</details>

***

### spawnLocation

Définit l'emplacement d'apparition des PNJ. Vous devez le définir à l'aide de la
commande `/em spawnnpc <nom_de_fichier_du_pnj.yml>`.

| Clé             |      Valeurs      | Par défaut |
|-----------------|:-----------------:|:----------:|
| `spawnLocation` | [Chaîne](#string) |   aucun    |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
spawnLocation: mon_monde,10,50,10,0,0
```

</div>

</details>

***

### spawnLocations

Définit les emplacements d'apparition des PNJ. Vous devez le définir à l'aide de la
commande `/em spawnnpc <nom_de_fichier_du_pnj.yml>`.

| Clé              |             Valeurs              | Par défaut |
|------------------|:--------------------------------:|:----------:|
| `spawnLocations` | [Liste de chaînes](#string_list) |   aucun    |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
spawnLocations:
- mon_monde,10,50,10,0,0
- mon_monde,-10,50,-10,0,0
```

</div>

</details>

### instanced

Définit si le PNJ doit être instancié (pour une utilisation dans les donjons instanciés).

| Clé         |       Valeurs       | Par défaut |
|-------------|:-------------------:|:----------:|
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
name: "&cRubin Rouge"
role: "&a<PNJ générique>"
profession: NITWIT
greetings:
- Salut !
- Bonjour !
dialog:
- Super conversation !
- Plaisir de discuter avec vous !
farewell:
- Au revoir !
- À plus tard !
canTalk: true
activationRadius: 4
interactionType: CHAT
timeout: 0
questFileName:
- ma_quete.yml #le type d'interaction du PNJ doit être défini sur CUSTOM_QUEST_GIVER
disguise: SKELETON
customDisguiseData: #utilisé lorsqu'un déguisement libsdisguise personnalisé est en cours de configuration
customModel: MODELE_UN
arena: mon_arene.yml #le type d'interaction du PNJ doit être défini sur ARENA_MASTER
command: /say Hello World! #le type d'interaction du PNJ doit être défini sur COMMAND
spawnLocation: mon_monde,584,55,127,90,10 #n'oubliez pas que les PNJ utilisent le tangage et le lacet pour définir où ils regardent. Ceci est également automatiquement défini lors de l'exécution de la commande /em spawnnpc <nom_de_fichier_du_pnj.yml>, alors assurez-vous de poser où vous voulez que le PNJ soit orienté lors de l'exécution de la commande.
```

<div align="center">

![create_npc_npc.jpg](../../../img/wiki/create_npc_npc.jpg)

</div>

</div>

</details>

***

## Spécial [1]

Voici la liste des types d'interaction valides pour les PNJ :

| Type                          |                                       Description                                        |
|-------------------------------|:----------------------------------------------------------------------------------------:|
| `GUILD_GREETER`               |                        Ouvre le menu de la guilde des aventuriers                        |
| `CHAT`                        |                   Un clic droit fait défiler les éléments de `dialog`                    |
| `CUSTOM_SHOP`                 |                        Ouvre le menu de la boutique personnalisée                        |
| `PROCEDURALLY_GENERATED_SHOP` |                     Ouvre la boutique générée de manière procédurale                     |
| `BAR`                         |                                   Ouvre le menu du bar                                   |
| `ARENA`                       |                                 Ouvre le menu de l'arène                                 |
| `QUEST_GIVER`                 |                 Ouvre le menu des quêtes générées de manière procédurale                 |
| `CUSTOM_QUEST_GIVER`          |    Ouvre le menu de quête pour un ensemble de quêtes spécifique dans `questFileName`     |
| `NONE`                        |                                    Aucune interaction                                    |
| `SELL`                        |                                  Ouvre le menu de vente                                  |
| `TELEPORT_BACK`               | Téléporte les joueurs à la dernière position du monde non-elitemobs où ils se trouvaient |
| `SCRAPPER`                    |                              Ouvre le menu de mise au rebut                              |
| `REPAIRMAN`                   |                               Ouvre le menu de réparation                                |
| `ENCHANTER`                   |                               Ouvre le menu d'enchantement                               |
| `REFINER`                     |                               Ouvre le menu de raffinement                               |
| `UNBINDER`                    |                              Ouvre le menu de dissociation                               |
| `ARENA_MASTER`                |            Ouvre le menu de l'arène pour l'arène définie dans `arenaFilename`            |
| `COMMAND`                     |                        Exécute la commande définie dans `command`                        |

*Pour plus d'informations sur ce que font le SCRAPPER et les types d'interaction similaires,
cliquez [ici]($language$/elitemobs/item_upgrade_system.md).*
