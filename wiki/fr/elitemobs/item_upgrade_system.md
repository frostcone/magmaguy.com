Voici la traduction en français, en conservant le formatage markdown :

À partir d'EliteMobs 7.3.0, il est possible pour les joueurs d'interagir avec les Objets d'Élite de plusieurs manières uniques. Cette page a pour but d'aider les joueurs et les administrateurs à comprendre le fonctionnement des systèmes, et expliquera plus tard l'équilibre du système pour les administrateurs.

***

# Délier les Objets

Si vous possédez un parchemin de déliaison d'objet, vous pouvez utiliser le PNJ Délieur pour combiner 1 parchemin avec 1 objet afin de le délier.

***Note : au moment de la rédaction, il n'y a aucun moyen pour les joueurs d'obtenir le parchemin sans qu'il leur soit donné ou ajouté à un boss spécifique. Le parchemin tombera du combat contre l'Ender Dragon qui sera publié ce mois-ci.***

Le parchemin ne peut être utilisé qu'une seule fois. Une fois déliés, les objets peuvent être vendus ou donnés à d'autres joueurs, ou être utilisés après un prestige.

***

# Désassembler les Objets

Les Objets d'Élite peuvent être désassemblés auprès du PNJ Désassembleur. Lorsque vous désassemblez des objets, en fonction du niveau de l'objet, vous obtiendrez les débris suivants :

- Niveau 0-50 : Petits Débris.
- Niveau 50-100 : Débris Moyens.
- Niveau 100-150 : Grands Débris.
- Niveau 150-200 : Énormes Débris.

Les débris constituent la base du reste du Système d'Objets.

***

# Réparer les Objets d'Élite

Les objets d'élite peuvent être réparés auprès du PNJ Réparateur en utilisant des débris. L'étendue des dégâts sur votre objet détermine la quantité et la taille des débris nécessaires pour le réparer.

***

# Enchanter les Objets d'Élite

Avant de décrire comment enchanter des objets, il est conseillé de vous familiariser avec les objets requis pour l'enchantement et de comprendre leurs fonctions.

**Objet d'Élite**
</br>Un objet d'élite englobe tout butin disponible dans les boutiques EliteMobs, lâché par les Mobs d'Élite, ou reçu en récompense pour avoir terminé une quête, entre autres sources.

**Livres Enchantés**
</br>Les livres enchantés sont généralement lâchés par les Mobs d'Élite ou accordés aux joueurs en récompense dans les Arènes ou les Quêtes. Ils contiennent des enchantements que les joueurs peuvent transférer sur les objets de leur choix.

**Tickets Chanceux**
</br>Les tickets chanceux, généralement obtenus auprès des Mobs d'Élite ou en récompense dans les Arènes ou les Quêtes, permettent aux joueurs de doubler leurs chances de succès lors de l'enchantement d'objets.

Les joueurs peuvent accéder au menu d'enchantement en visitant le PNJ Enchanteur dans la [Guilde des Aventuriers](fr/elitemobs/adventurers_guild_world.md) ou en utilisant le menu `/em`.

Avec à la fois un Objet d'Élite et un Livre Enchanté, les joueurs peuvent tenter d'ajouter l'enchantement stocké dans le livre à leur objet. Chaque tentative coûtera aux joueurs des Pièces d'Élite. Ils peuvent également doubler leurs chances en utilisant un Ticket Chanceux s'ils en ont un.

Pour commencer l'enchantement, les joueurs placeraient un Objet d'Élite, un Livre Enchanté et un Ticket Chanceux (s'ils en ont un) dans la fenêtre d'Enchantement et essaieraient ensuite d'enchanter leur objet. Après cela, ils obtiendraient l'un des résultats suivants :

- **Succès :** L'enchantement est ajouté avec succès à l'objet.
- **Échec :** Tentative infructueuse, entraînant la perte du Livre Enchanté et des Pièces d'Élite.
- **Échec Critique :** Un échec plus sévère, entraînant la perte du Livre Enchanté, des Pièces d'Élite et de l'Objet d'Élite lui-même.
- **Défi :** Engagez un Combat de Boss avec 10 % de chance d'échec critique en cas de défaite. L'objet est enchanté si les joueurs gagnent.

<details>

<summary><b>Exemple Visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/enchant_example.webm" type="video/webm">
  Your browser does not support the video tag.
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

## Créez vos propres Livres Enchantés

Voici un court guide qui explique comment vous pouvez créer vos propres Livres Enchantés.

<div align="center">

***

### isEnabled

Définit si l'objet est activé.

| Clé         |      Valeurs       | Par défaut |
|-------------|:-----------------:|:-------:|
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

Définit le nom de l'objet. Prend en charge les [Codes Couleur](#color_codes).

| Clé         |      Valeurs       | Par défaut |
|-------------|:-----------------:|:-------:|
| `name` | [Chaîne de caractères](#string) |  aucun   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
name: '&aElite Custom Enchanted Book'
```

<div align="center">

![create_book_name.jpg](../../../img/wiki/create_book_name.jpg)

</div>

</div>

</details>

***

### lore

Définit la description (lore) de l'objet. Prend en charge les [Codes Couleur](#color_codes).

| Clé         |           Valeurs            | Par défaut |
|-------------|:---------------------------:|:-------:|
| `lore` | [Liste de chaînes de caractères](#string_list) |  aucun   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
lore:
- '&2Use this custom book to'
- '&2enchant items at the enchanter!'
```

<div align="center">

![create_book_lore.jpg](../../../img/wiki/create_book_lore.jpg)

</div>

</div>

</details>

***

### material

Définit le matériau MineCraft de l'objet.

| Clé         |      Valeurs       | Par défaut |
|-------------|:-----------------:|:-------:|
| `material` | [Matériau](#material) | `BOOK`  |

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

Définit les enchantements que l'objet doit contenir.

| Clé         |    Valeurs    | Par défaut |
|-------------|:------------:|:-------:|
| `enchantments` | [Enchantements MineCraft](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) ou [Enchantements EliteMobs](fr/elitemobs/custom_enchantments_list.md) |  aucun   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
enchantments:
- EARTHQUAKE,1
- LUCK,1
```

<div align="center">

![create_book_enchantments.jpg](../../../img/wiki/create_book_enchantments.jpg)

</div>

</div>

</details>

***

### itemType

Définit d'où vous pouvez obtenir l'objet. Vous pouvez définir ceci sur `custom` si vous voulez que votre livre soit lâché par des élites aléatoires et vendu dans les boutiques.

Sinon, vous pouvez le définir sur `unique` pour qu'il ne tombe que des tables de butin configurées.

| Clé         |    Valeurs    | Par défaut |
|-------------|:------------:|:-------:|
| `itemType` | [Valeurs](fr/elitemobs/creating_items.md&section=itemtype) |  aucun   |

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

Définit si l'objet peut être échangé avec d'autres joueurs.

| Clé         |    Valeurs    | Par défaut |
|-------------|:------------:|:-------:|
| `soulbound` | [Booléen](#boolean) | `true`  |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
soulbound: true
```

</div>

</details>

</div>

## Exemple de Livre Enchanté

<div align="center">

<details>

<summary><b>Exemple de Configuration de Livre Enchanté</b></summary>

<div align="left">

```yml
isEnabled: true
material: BOOK
name: '&5Excellent Mining Enchanted Book'
lore:
- '&2Used to enchant items at the enchanter!'
enchantments:
- MENDING,1
- DRILLING,1
itemType: UNIQUE
soulbound: false
```

Comme vous pouvez le voir, créer vos Livres Enchantés n'est pas si compliqué. La plupart des paramètres sont des paramètres réguliers que vous utiliseriez lors de la création d'un [objet](fr/elitemobs/creating_items.md).

Sauf qu'ici, bien sûr, notre objectif principal serait la section `enchantments`. Notre exemple de livre a un enchantement MineCraft `MENDING` et un enchantement EliteMobs `DRILLING`.

Cela ferait de notre exemple de livre un excellent livre que vous voudriez utiliser sur une pioche.

</div>

</details>

</div>