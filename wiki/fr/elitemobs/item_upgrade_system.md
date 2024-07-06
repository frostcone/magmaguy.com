```markdown
À partir de la version 7.3.0 d'EliteMobs, les joueurs peuvent interagir avec les objets Elite de plusieurs façons uniques. Cette page vise à aider les joueurs et les administrateurs à comprendre comment les systèmes fonctionnent et à expliquer ensuite l'équilibre du système aux administrateurs.


***

# Délier les objets

Si vous avez un parchemin de déliaison d'objets, vous pouvez utiliser le PNJ Délieur pour combiner 1 parchemin avec 1 objet afin de le délier.

***Remarque : au moment de la rédaction de ce document, il n'y a aucun moyen pour les joueurs d'obtenir le parchemin sans qu'il ne leur soit donné ou sans l'ajouter à un boss spécifique. Le parchemin tombera du combat contre le dragon d'Ender qui sera publié ce mois-ci.***

Le parchemin ne peut être utilisé qu'une seule fois. Une fois délié, les objets peuvent être vendus ou donnés à d'autres joueurs, ou être utilisés après un prestige.

***

# Démanteler les objets

Les objets Elite peuvent être démantelés auprès du PNJ Démanteleur. Lorsque vous démantelez des objets, vous obtiendrez le démantèlement suivant en fonction du niveau de l'objet :

- Niveau 0-50 : Petit démantèlement.
- Niveau 50-100 : Moyen démantèlement.
- Niveau 100-150 : Grand démantèlement.
- Niveau 150-200 : Énorme démantèlement.

Le démantèlement est à la base du reste du système d'objets.

***

# Réparer les objets Elite

Les objets Elite peuvent être réparés auprès du PNJ Réparateur à l'aide de démantèlement. L'étendue des dommages de votre objet détermine la quantité et la taille du démantèlement nécessaires pour le réparer.

***

# Enchanter les objets Elite

Avant de passer à la description de la façon d'enchanter des objets, il est conseillé de se familiariser avec les objets nécessaires à l'enchantement et de comprendre leurs fonctions.

**Objet Elite**
</br>Un objet Elite comprend tout butin disponible dans les boutiques EliteMobs, lâché par des mobs Elite, ou reçu en récompense de la réalisation d'une quête, entre autres sources.

**Livres enchantés**
</br>Les livres enchantés sont généralement lâchés par des mobs Elite ou donnés aux joueurs en récompense dans les arènes ou les quêtes. Ils contiennent des enchantements que les joueurs peuvent transférer sur les objets de leur choix.

**Tickets chanceux**
</br>Les tickets chanceux, généralement obtenus auprès de mobs Elite ou en récompense dans les arènes ou les quêtes, permettent aux joueurs de doubler leurs chances de réussite lors de l'enchantement d'objets.

Les joueurs peuvent accéder au menu d'enchantement en visitant le PNJ Enchanteur dans la [Guilde des aventuriers]($language$/elitemobs/adventurers_guild_world.md) ou en utilisant le menu `/em`.
 
Avec un objet Elite et un livre enchanté, les joueurs peuvent tenter d'ajouter l'enchantement stocké dans le livre à leur objet. Chaque tentative coûtera aux joueurs quelques pièces Elite. Ils peuvent également doubler leurs chances en utilisant un ticket chanceux s'ils en ont un.

Pour commencer l'enchantement, les joueurs doivent placer un objet Elite, un livre enchanté et un ticket chanceux (s'ils en ont un) dans la fenêtre d'enchantement, puis tenter d'enchanter leur objet. Ensuite, ils obtiendront l'un des résultats suivants :

- **Succès :** L'enchantement est ajouté avec succès à l'objet.
- **Échec :** Tentative infructueuse, entraînant la perte du livre enchanté et des pièces Elite.
- **Échec critique :** Un échec plus grave, entraînant la perte du livre enchanté, des pièces Elite et de l'objet Elite lui-même.
- **Défi :** Participez à un combat de boss avec 10 % de chances d'échec critique en cas de défaite. L'objet est enchanté si les joueurs gagnent.

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
  <summary>Vidéo de MagmaGuy expliquant certains systèmes.</summary>

  <div style="text-align: center;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/MtfeS6fq0Pw" frameborder="0" allowfullscreen></iframe>
  </div>

</details>

## Créez vos propres livres enchantés

Voici un bref guide qui explique comment créer vos propres livres enchantés.

<div align="center">

***

### isEnabled

Définit si l'objet est activé.

| Clé         |      Valeurs       | Par défaut |
|-------------|:-----------------:|:-------:|
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

### name

Définit le nom de l'objet. Prend en charge les [codes de couleur](#color_codes).

| Clé         |      Valeurs       | Par défaut |
|-------------|:-----------------:|:-------:|
| `name` | [String](#string) |  none   |

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

Définit le lore de l'objet. Prend en charge les [codes de couleur](#color_codes).

| Clé         |           Valeurs            | Par défaut |
|-------------|:---------------------------:|:-------:|
| `lore` | [String List](#string_list) |  none   |

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

Définit le matériau Minecraft que l'objet doit être.

| Clé         |      Valeurs       | Par défaut |
|-------------|:-----------------:|:-------:|
| `material` | [Material](#material) | `BOOK`  |

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
| `enchantments` | [Enchantements MineCraft](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) ou [Enchantements EliteMobs]($language$/elitemobs/custom_enchantments_list.md) |  none   |

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

Définit l'endroit où vous pouvez obtenir l'objet. Vous pouvez définir cette valeur sur `custom` si vous souhaitez que votre livre soit lâché par des élites aléatoires et vendu dans les boutiques. 

Sinon, vous pouvez le définir sur `unique` pour qu'il ne tombe que des tables de butin configurées.

| Clé         |    Valeurs    | Par défaut |
|-------------|:------------:|:-------:|
| `itemType` | [Valeurs]($language$/elitemobs/creating_items.md&section=itemtype) |  none   |

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
| `soulbound` | [Boolean](#boolean) | `true`  |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
soulbound: true
```

</div>

</details>

</div>

## Exemple de livre enchanté

<div align="center">

<details> 

<summary><b>Exemple de configuration de livre enchanté</b></summary>

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

Comme vous pouvez le constater, la création de vos livres enchantés n'est pas si compliquée. La plupart des paramètres sont des paramètres standard que vous utiliseriez lors de la création d'un [objet]($language$/elitemobs/creating_items.md).

Sauf, bien sûr, que notre principal objectif ici est la section `enchantments`. Notre exemple de livre contient un enchantement MineCraft `MENDING` et un enchantement EliteMobs `DRILLING`.

Cela ferait de notre exemple de livre un excellent livre que vous voudriez utiliser sur une pioche.

</div>

</details>

</div>

```