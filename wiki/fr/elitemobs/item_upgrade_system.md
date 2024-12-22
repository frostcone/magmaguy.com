À partir d'EliteMobs 7.3.0, il est possible pour les joueurs d'interagir avec les Objets d'élite de plusieurs manières
uniques. Cette page a pour but d'aider les joueurs et les administrateurs à comprendre le fonctionnement des systèmes,
puis d'expliquer l'équilibre du système pour les administrateurs.

***

# Dissocier les Objets

Si vous avez un parchemin de dissociation d'objet, vous pouvez utiliser le PNJ Dissociateur pour combiner 1 parchemin
avec 1 objet afin de le dissocier.

***Remarque: au moment de la rédaction de cet article, il n'y a aucun moyen pour les joueurs d'obtenir le parchemin sans
qu'il ne soit donné ou ajouté à un boss spécifique. Le parchemin sera lâché par le combat contre l'Ender Dragon qui sera
publié ce mois-ci.***

Le parchemin ne peut être utilisé qu'une seule fois. Une fois dissociés, les objets peuvent être vendus ou donnés à
d'autres joueurs, ou être utilisés après un prestige.

***

# Mise au rebut des Objets

Les Objets d'élite peuvent être mis au rebut auprès du PNJ Ferrailleur. Lors de la mise au rebut d'objets, en fonction
du niveau de l'objet, vous obtiendrez la ferraille suivante:

- Niveau 0-50: Petite ferraille.
- Niveau 50-100: Petite ferraille.
- Niveau 100-150: Ferraille moyenne.
- Niveau 150-200: Grosse ferraille.

La ferraille est la base du reste du Système d'objets.

***

# Réparation des Objets d'élite

Les objets d'élite peuvent être réparés auprès du PNJ Réparateur en utilisant de la ferraille. L'étendue des dégâts de
votre objet détermine la quantité et la taille de la ferraille nécessaire pour le réparer.

***

# Enchantement des Objets d'élite

Avant de décrire comment enchanter les objets, il est conseillé de vous familiariser avec les objets nécessaires à
l'enchantement et de comprendre leurs fonctions.

**Objet d'élite**
</br>Un objet d'élite englobe tout butin disponible dans les boutiques EliteMobs, lâché par les Mobs d'élite ou reçu en
récompense pour avoir terminé une quête, entre autres sources.

**Livres enchantés**
</br>Les livres enchantés sont généralement lâchés par les Mobs d'élite ou offerts aux joueurs en récompenses dans les
Arènes ou les Quêtes. Ils contiennent des enchantements que les joueurs peuvent transférer à leurs objets désirés.

**Tickets de chance**
</br>Les tickets de chance, généralement obtenus auprès des Mobs d'élite ou en récompenses dans les Arènes ou les
Quêtes, permettent aux joueurs de doubler leurs chances de succès lors de l'enchantement d'objets.

Les joueurs peuvent accéder au menu d'enchantement en se rendant auprès du PNJ Enchanteur dans
la [Guilde des Aventuriers]($language$/elitemobs/adventurers_guild_world.md) ou en utilisant le menu `/em`.

Avec à la fois un Objet d'élite et un Livre enchanté, les joueurs peuvent tenter d'ajouter l'enchantement stocké dans le
livre à leur objet. Chaque tentative coûtera aux joueurs quelques Pièces d'élite. Ils peuvent également doubler leurs
chances en utilisant un Ticket de chance s'ils en ont un.

Pour commencer l'enchantement, les joueurs placent un Objet d'élite, un Livre enchanté et un Ticket de chance (s'ils en
ont un) dans la fenêtre d'enchantement, puis tentent d'enchanter leur objet. Après cela, ils seront confrontés à l'un
des résultats suivants:

- **Succès:** L'enchantement est ajouté avec succès à l'objet.
- **Échec:** Tentative infructueuse, entraînant la perte du Livre enchanté et des Pièces d'élite.
- **Échec critique:** Un échec plus grave, entraînant la perte du Livre enchanté, des Pièces d'élite et de l'Objet
  d'élite lui-même.
- **Défi:** Engagez-vous dans une bataille de boss avec 10 % de chances d'échec critique en cas de perte. L'objet est
  enchanté si les joueurs gagnent.

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/enchant_example.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

<details>
  <summary>Vidéo de MagmaGuy expliquant certains des systèmes.</summary>

  <div style="text-align: center;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/MtfeS6fq0Pw" frameborder="0" allowfullscreen></iframe>
  </div>

</details>

## Créez vos propres Livres enchantés

Voici un petit guide qui explique comment vous pouvez créer vos propres Livres enchantés.

<div align="center">

***

### isEnabled

Définit si l'objet est activé.

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

Définit le nom de l'objet. Prend en charge les [Codes de couleurs](#color_codes).

| Clé    |      Valeurs      | Défaut |
|--------|:-----------------:|:------:|
| `name` | [Chaîne](#string) | aucun  |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
name: '&aLivre enchanté personnalisé d'élite'
```

<div align="center">

![create_book_name.jpg](../../../img/wiki/create_book_name.jpg)

</div>

</div>

</details>

***

### lore

Définit le texte de l'objet. Prend en charge les [Codes de couleurs](#color_codes).

| Clé    |             Valeurs              | Défaut |
|--------|:--------------------------------:|:------:|
| `lore` | [Liste de chaînes](#string_list) | aucun  |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
lore:
- '&2Utilisez ce livre personnalisé pour'
- '&2enchanter des objets chez l'enchanteur !'
```

<div align="center">

![create_book_lore.jpg](../../../img/wiki/create_book_lore.jpg)

</div>

</div>

</details>

***

### material

Définit le matériau MineCraft que doit être l'objet.

| Clé        |        Valeurs        | Défaut |
|------------|:---------------------:|:------:|
| `material` | [Matériau](#material) | `BOOK` |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
material: BOOK
```

<div align="center">

![create_book_material.jpg](../../../img/wiki/create_book_material.jpg)

</div>

</div>

</details>

***

### enchantments

Définit les enchantements que doit contenir l'objet.

| Clé            |                                                                                           Valeurs                                                                                           | Défaut |
|----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:------:|
| `enchantments` | [Enchantements MineCraft](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) ou [Enchantements EliteMobs]($language$/elitemobs/custom_enchantments_list.md) | aucun  |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
enchantments:
- TREMBLEMENT_DE_TERRE,1
- CHANCE,1
```

<div align="center">

![create_book_enchantments.jpg](../../../img/wiki/create_book_enchantments.jpg)

</div>

</div>

</details>

***

### itemType

Définit l'endroit où vous pouvez obtenir l'objet. Vous pouvez définir cette option sur `custom` si vous voulez que votre
livre soit lâché par des élites aléatoires et vendu dans les boutiques.

Sinon, vous pouvez le définir sur `unique` pour qu'il ne soit lâché qu'à partir de tables de butin configurées.

| Clé        |                              Valeurs                               | Défaut |
|------------|:------------------------------------------------------------------:|:------:|
| `itemType` | [Valeurs]($language$/elitemobs/creating_items.md&section=itemtype) | aucun  |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
itemType: custom
```

</div>

</details>

***

### soulbound

Définit si vous pouvez les échanger avec d'autres joueurs.

| Clé         |       Valeurs       | Défaut |
|-------------|:-------------------:|:------:|
| `soulbound` | [Booléen](#boolean) | `true` |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
soulbound: true
```

</div>

</details>

</div>

## Exemple de Livre enchanté

<div align="center">

<details> 

<summary><b>Exemple de configuration de Livre enchanté</b></summary>

<div align="left">

```yml
isEnabled: true
material: BOOK
name: '&5Excellent livre enchanté de minage'
lore:
- '&2Utilisé pour enchanter des objets chez l'enchanteur !'
enchantments:
- RÉPARATION,1
- FORAGE,1
itemType: UNIQUE
soulbound: false
```

Comme vous pouvez le constater, la création de vos Livres enchantés n'est pas si compliquée. La plupart des paramètres
sont des paramètres réguliers que vous utiliseriez lors de la création
d'un [objet]($language$/elitemobs/creating_items.md).

Sauf qu'ici, bien sûr, notre objectif principal serait la section `enchantments`. Notre exemple de livre possède un
enchantement MineCraft `RÉPARATION` et un enchantement EliteMobs `FORAGE`.

Cela ferait de notre exemple de livre un excellent livre que vous voudriez utiliser sur une pioche.

</div>

</details>

</div>
