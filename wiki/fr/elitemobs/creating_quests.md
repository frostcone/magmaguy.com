[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Quête d'exemple

EliteMobs est livré pré-installé avec un fichier `test_quest.yml`, qui sera analysé ici comme un format de quête simple
à suivre.

_Les quêtes personnalisées se trouvent dans le dossier `~plugins/EliteMobs/customquests`!_

`test_quest.yml`

```yaml
isEnabled: true
customObjectives:
  Objective1:
    amount: '1'
    filename: test_boss.yml
    objectiveType: KILL_CUSTOM
customRewards:
- filename=magmaguys_toothpick.yml:amount=1:chance=1
name: "&aTuer le boss test"
questLore: 
- "&cMettez fin au règne de terreur du boss test !"
```

<div align="center">

![create_quest_quest.jpg](../../../img/wiki/create_quest_quest.jpg)

</div>

*Si votre interface utilisateur de quête n'est pas comme celle-ci, vous pouvez la modifier pour qu'elle corresponde en
utilisant `/em alt`.*

Cette quête d'exemple donnera aux joueurs la tâche de tuer 1 test_boss.yml. (Le nom réel du boss affiché dans le suivi
de quête sera le `nom :` défini dans test_boss.yml.) Et en récompense pour avoir terminé la quête, ils recevront 1
cure-dent de Magmaguy.

## Création de quêtes personnalisées

<div align="center">

### customObjectives

Définit les objectifs de quête.

| Clé                |   Valeurs   | Par défaut |
|--------------------|:-----------:|:----------:|
| `customObjectives` | Spécial [1] |   aucun    |

*Remarque: si vous utilisez un boss multiphases comme objectif, l'objectif doit utiliser la première phase comme cible.*

<details> 

<summary><b>Exemples</b></summary>

<div align="left">

`KILL_CUSTOM`:

```yml
customObjectives:
  Objective1:
    amount: '1'
    filename: my_cool_boss.yml
    objectiveType: KILL_CUSTOM
```

`DIALOG`:

```yml
customObjectives:
  Objective1:
    dialog:
    - "&a[PNJ de dialogue] &fVous venez souvent ici ?"
    - "&7&oJe devrais manger plus de pommes."
    filename: dialog_npc.yml
    npcName: PNJ de dialogue
    location: à l'endroit du dialogue.
    objectiveType: DIALOG
```

`FETCH_ITEM`:

```yml
customObjectives:
  Objective1:
    amount: '99'
    itemName: Pommes rouges
    filename: my_quest_item_red_apples.yml
    objectiveType: FETCH_ITEM
```

<div align="center">

![create_quest_objective.jpg](../../../img/wiki/create_quest_objective.jpg)

</div>

</div>

</details>

**Spécial [1]**

<details>

<summary><b>Développer le tableau</b></summary>

<div align="center">

Les objectifs personnalisés sont construits à l'aide des valeurs suivantes:

| Clé                                     | Description                                                                                                                                                                                                                                                                                           |
|-----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `KILL_CUSTOM` / `FETCH_ITEM` / `DIALOG` | Utilisé pour définir le type d'objectif que cela représente. `KILL_CUSTOM` indique que la quête implique de tuer un boss personnalisé spécifique, `FETCH_ITEM` indique que la quête implique d'obtenir un objet personnalisé spécifique et `DIALOG` indique que la quête implique de parler à un PNJ. |
| `filename`                              | Utilisé pour définir le nom de fichier du boss personnalisé, de l'objet personnalisé que le joueur doit tuer/obtenir ou du PNJ auquel il doit parler.                                                                                                                                                 |
| `amount`                                | Utilisé pour définir le nombre de boss personnalisés qui doivent être tués ou d'objets qui doivent être obtenus.                                                                                                                                                                                      |
| `dialog`                                | Utilisé pour définir le dialogue du PNJ auquel le joueur parle.                                                                                                                                                                                                                                       |
| `name`                                  | Utilisé pour définir le nom de l'objectif de la quête, que ce soit un PNJ ou un objet personnalisé. À des fins visuelles uniquement.                                                                                                                                                                  |

_Veuillez noter que chaque champ Objectif personnalisé est séparé par un `:`!_

</div>

</details>

***

### customRewards

Définit les récompenses de la quête.

| Clé             |                                  Valeurs                                  | Par défaut |
|-----------------|:-------------------------------------------------------------------------:|:----------:|
| `customRewards` | [Format de butin universel EliteMobs]($language$elitemobs/loot_tables.md) |   aucun    |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
customRewards:
- currencyAmount=50:amount=1:chance=0.05
- material=COOKED_COD:amount=3:chance=1.0
- filename=magmaguys_toothpick.yml:amount=1:chance=1.0
```

<div align="center">

![create_quest_rewards.jpg](../../../img/wiki/create_quest_rewards.jpg)

</div>

</div>

</details>

***

### questAcceptPermission

Définit l'autorisation que le joueur doit avoir pour accepter la quête.

| Clé                     |      Valeurs      | Par défaut |
|-------------------------|:-----------------:|:----------:|
| `questAcceptPermission` | [Chaîne](#string) |   aucun    |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
questAcceptPermission: elitequest.my_permission
```

</div>

</details>

***

### questAcceptPermissions

Définit les autorisations que le joueur doit avoir pour accepter la quête.

| Clé                      |             Valeurs              | Par défaut |
|--------------------------|:--------------------------------:|:----------:|
| `questAcceptPermissions` | [Liste de chaînes](#string_list) |   aucun    |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
questAcceptPermissions: 
- elitequest.my_previous_quest_one.yml
- elitequest.my_previous_quest_two.yml
```

</div>

</details>

***

### questLockoutPermission

Définit l'autorisation que le joueur recevra une fois la quête terminée et qui l'empêchera de refaire la quête (
généralement le [Nom de fichier](#fielname) de la quête que vous modifiez).

| Clé                      |      Valeurs      | Par défaut |
|--------------------------|:-----------------:|:----------:|
| `questLockoutPermission` | [Chaîne](#string) |   aucun    |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
questLockoutPermission: elitequest.my_quest.yml
```

</div>

</details>

***

### questLockoutMinutes

Définit la durée, en minutes, pendant laquelle le joueur devra attendre avant de pouvoir refaire la quête (fonctionne en
supprimant l'autorisation de verrouillage de quête).

| Clé                   |      Valeurs       |          Par défaut          |
|-----------------------|:------------------:|:----------------------------:|
| `questLockoutMinutes` | [Entier](#integer) | `-1` (ne se répétera jamais) |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
questLockoutMinutes: 60
```

</div>

</details>

***

### name

Définit le nom de la quête. Accepte les [Codes de couleurs](#color_codes).

| Clé    |      Valeurs      | Par défaut |
|--------|:-----------------:|:----------:|
| `name` | [Chaîne](#string) |   aucun    |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
name: "&aMon excellent nom de quête"
```

</div>

</details>

***

### questLore

Définit l'histoire de la quête qui apparaîtra dans le menu de quête en jeu.

| Clé         |             Valeurs              | Par défaut |
|-------------|:--------------------------------:|:----------:|
| `questLore` | [Liste de chaînes](#string_list) |   aucun    |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
questLore:
- "Phrase d'histoire intéressante."
- "Encore une autre phrase d'histoire intéressante."
```

<div align="center">

![create_quest_lore.jpg](../../../img/wiki/create_quest_lore.jpg)

</div>

</div>

</details>

***

### temporaryPermissions

Définit les autorisations attribuées au joueur jusqu'à ce qu'il remette la quête.

Si vous utilisez ce paramètre pour vous assurer qu'un objet ne tombe que lorsque les joueurs ont une quête spécifique
active, vous devrez également configurer
la [Même autorisation]($language$/elitemobs/creating_items.md&section=permission) dans le fichier de configuration de
l'objet.

| Clé                    |             Valeurs              | Par défaut |
|------------------------|:--------------------------------:|:----------:|
| `temporaryPermissions` | [Liste de chaînes](#string_list) |   aucun    |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
temporaryPermissions:
- elitequest.item_that_should_drop_only_during_quest.yml
```

</div>

</details>

***

### questAcceptDialog

Définit le dialogue qui apparaît dans le chat lors de l'acceptation de la quête.

| Clé                 |             Valeurs              | Par défaut |
|---------------------|:--------------------------------:|:----------:|
| `questAcceptDialog` | [Liste de chaînes](#string_list) |   aucun    |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
questAcceptDialog:
- "Mon héros ! Vous êtes si serviable !"
- "Je vous souhaite bonne chance !"
```

<div align="center">

![create_quest_accept.jpg](../../../img/wiki/create_quest_accept.jpg)

</div>

</div>

</details>

***

### questCompleteMessage

Définit le dialogue qui apparaît dans le chat à la fin de la quête.

| Clé                    |             Valeurs              | Par défaut |
|------------------------|:--------------------------------:|:----------:|
| `questCompleteMessage` | [Liste de chaînes](#string_list) |   aucun    |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
questCompleteMessage:
- "Mon héros ! Vous avez terminé ma quête difficile !"
- "En récompense, vous pouvez prendre ce pain !"
```

<div align="center">

![create_quest_complete.jpg](../../../img/wiki/create_quest_complete.jpg)

</div>

</div>

</details>

***

### questCompleteCommands

Définit les commandes qui s'exécuteront à la fin de la quête.

| Clé                     |             Valeurs              | Par défaut |
|-------------------------|:--------------------------------:|:----------:|
| `questCompleteCommands` | [Liste de chaînes](#string_list) |   aucun    |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
questCompleteCommands:
- say $player a terminé une quête !
```

<div align="center">

![create_quest_commands.jpg](../../../img/wiki/create_quest_commands.jpg)

</div>

</div>

</details>

***

### turnInNPC

Définit le nom de fichier du PNJ auquel les joueurs doivent parler/interagir pour terminer la quête. Il n'est **pas**
nécessaire que ce soit le même PNJ qui a remis la quête.

| Clé         |           Valeurs           | Par défaut |
|-------------|:---------------------------:|:----------:|
| `turnInNPC` | [Nom de fichier](#filename) |   aucun    |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
turnInNPC: my_cool_quest_npc.yml
```

</div>

</details>

***

### trackable

Définit si la quête utilisera le suivi de quête.

| Clé         |       Valeurs       | Par défaut |
|-------------|:-------------------:|:----------:|
| `trackable` | [Booléen](#boolean) |   `true`   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
trackable: true
```

</div>

</details>

***

### questLevel

Définit le niveau de la quête. Il s'agit uniquement d'un guide visuel pour que les joueurs puissent savoir à quel point
la quête sera difficile. Cela ne modifie **en aucun cas** les niveaux des boss, des objets ou autres.

| Clé          |      Valeurs       | Par défaut |
|--------------|:------------------:|:----------:|
| `questLevel` | [Entier](#integer) |    `0`     |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
questLevel: 10
```

<div align="center">

![create_quest_level.jpg](../../../img/wiki/create_quest_BUGGEDaddLATER.jpg)

</div>

</div>

</details>

***

### questAcceptSound

Définit le son qui est joué lorsqu'une quête est acceptée. Il est possible à la fois de jouer des sons de Minecraft et
de jouer des sons d'un pack de ressources.

| Clé                |      Valeurs      | Par défaut |
|--------------------|:-----------------:|:----------:|
| `questAcceptSound` | [Chaîne](#string) |   aucun    |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
questAcceptSound: entity.experience_orb.pickup
```

<div align="center">

![create_quest_level.jpg](../../../img/wiki/create_quest_BUGGEDaddLATER.jpg)

</div>

</div>

</details>

***

### questCompleteSound

Définit le son qui est joué lorsqu'une quête est terminée (remise). Il est possible à la fois de jouer des sons de
Minecraft et de jouer des sons d'un pack de ressources.

| Clé                  |      Valeurs      | Par défaut |
|----------------------|:-----------------:|:----------:|
| `questCompleteSound` | [Chaîne](#string) |   aucun    |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
questCompleteSound: entity.player.levelup
```

<div align="center">

![create_quest_level.jpg](../../../img/wiki/create_quest_BUGGEDaddLATER.jpg)

</div>

</div>

</details>

### Autorisations

Comme mentionné dans les tableaux ci-dessus, les autorisations sont généralement des [Chaînes](#string) ou
des [Listes de chaînes](#string_list). Mais examinons plus en détail comment vous les utiliserez pour verrouiller et
déverrouiller des quêtes.

Supposons que vous créez la quête_3 dans une série de quêtes que vous avez planifiées et que vous ne voulez pas que les
joueurs puissent prendre la quête_3 avant d'avoir terminé la quête_2. Nous configurerions le fichier de quête comme
ceci:

```yml
questAcceptPermission: elitequest.quest_2.yml
questLockoutPermission: elitequest.quest_3.yml
```

En définissant `questAcceptPermissions` sur `elitequest.quest_2.yml`, nous avons maintenant empêché les joueurs de
prendre quest_3.yml avant d'avoir terminé quest_2.yml. </br> En définissant `questLockoutPermission`
sur `elitequest.quest_3.yml`, nous avons empêché les joueurs de pouvoir recevoir cette quête tant qu'ils ont déjà cette
quête dans leur suivi ou s'ils ont déjà terminé cette quête. Cela empêche les joueurs de pouvoir répéter la quête.

Si vous souhaitez créer une quête qui n'est disponible qu'une fois que les joueurs ont terminé une série de quêtes, vous
configurez le fichier de quête comme ceci:

```yml
questAcceptPermissions: 
- elitequest.quest_2.yml
- elitequest.quest_3.yml
- elitequest.quest_4.yml
```

Si vous souhaitez que les joueurs ne puissent piller certains objets que lorsqu'ils ont la bonne quête active, nous
pouvons le faire en utilisant `temporaryPermissions`. Nous créerions une autorisation dans le fichier de quête en
utilisant `temporaryPermissions`, puis nous créerions
une [autorisation]($language$/elitemobs/creating_items.md&section=permission) correspondante dans le fichier d'objet en
utilisant `permission`.

Par exemple, nous ouvrons notre fichier de quête et nous ajoutons ce qui suit:

```yml
temporaryPermissions: 
- elitequest.my_cool_item.yml
```

Ensuite, nous ouvrons le fichier d'objet, dans notre cas *my_cool_item.yml*, puis nous ajoutons ce qui suit:

```yml
permission: elitequest.my_cool_item.yml
```

Les deux fichiers ont maintenant des autorisations correspondantes, ce qui devrait maintenant faire en sorte que notre
objet ne tombe que lorsque les joueurs ont la bonne quête active.
</div>
