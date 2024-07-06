```
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Création d'objets personnalisés

## Que sont les objets personnalisés ?

Les objets personnalisés sont des objets définis par EliteMobs via des fichiers de configuration. Vous pouvez personnaliser plusieurs aspects de ces objets, tels que le niveau de l'objet, les enchantements, le nom, la description, la texture et plus encore !

## Application Web

Vous pouvez facilement et rapidement créer du butin personnalisé [ici](https://magmaguy.com/webapp/webapp.html) !

## Avant de commencer

### Où vont les objets personnalisés ?

Les fichiers d'objets personnalisés vont dans le dossier de configuration `~/plugins/EliteMobs/customitems`

Il est possible de créer des sous-dossiers, tels que `~/plugins/EliteMobs/customitems/myitems`. Ceci est recommandé pour maintenir l'ordre.

Les fichiers sont stockés au format de fichier `.yml` et [Notepad++](https://notepad-plus-plus.org/) est le logiciel de modification de fichier recommandé pour le travail de configuration. Un fichier définit un boss, bien qu'il soit possible de faire apparaître le même boss plusieurs fois et même de définir plusieurs emplacements d'apparition pour le même fichier de boss.

Il est possible d'utiliser l'[application Web](https://magmaguy.com/webapp/webapp.html) pour créer rapidement et facilement des boss personnalisés et plus encore.

<div align="center">

### Configuration la plus petite possible

**Veuillez noter que la configuration la plus petite possible pour un objet personnalisé est :**

```yml
```

Notez que ce n'est qu'un fichier vide. Cela utilisera par défaut une épée en bois appelée « Nom par défaut ». **Tout sur cette page est facultatif !**

### Objet d'exemple

Jetons un coup d'œil à un exemple de ce à quoi ressemble un fichier d'objet.

<details> 
<summary><b>Exemple</b></summary>

<div align="left">

```yml
isEnabled: true
material: WOODEN_AXE
name: '&4Test item'
lore:
- This is a cool item
- It has cool lore
enchantments:
- DAMAGE_ALL,4
- FLAMETHROWER,1
potionEffects:
- FAST_DIGGING,0,self,onHit
- POISON,0,target,onHit
- GLOWING,0,self,continuous
dropWeight: dynamic
scalability: scalable
itemType: custom
```

</div>

</details>

</div>

##  Paramètres des objets personnalisés

Voici une liste de tous les éléments que vous pouvez configurer pour les objets personnalisés :

<div align="center">

***

### isEnabled

Définit si l'objet est activé. N'affecte pas les objets qui ont déjà été générés.

| Clé | Valeurs | Par défaut |
|-|:-:|-|
| `isEnabled` | `true` / `false` | `true` |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### material

Définit le matériau de l'objet.

| Clé | Valeurs | Par défaut |
|-|:-:|-|
| `material` | [Choisissez dans cette liste !](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | `WOODEN_SWORD` |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
material: DIAMOND_SWORD
```

</div>

</details>


***

### level

Définit le niveau de l'objet.

| Clé | Valeurs | Par défaut |
|-|:-:|-|
| `level` | [Entier](#integer) | `0` |

Notez que ce paramètre n'est pas pertinent si vous définissez l'[extensibilité](#scalability) de l'objet sur `scalable`. Si vous le définissez sur `limited`, ce sera le niveau le plus élevé possible de l'objet.

De plus, les matériaux ont un niveau minimum. Les matériaux en fer sont de niveau 6, les matériaux en diamant sont de niveau 7. Vous ne pouvez pas forcer les objets à être de niveau inférieur au niveau du matériau.

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
level: 100
```

</div>

</details>


***

### name

Définit le nom affiché de l'objet.

| Clé | Valeurs | Par défaut |
|-|:-:|-|
| `material` | [Chaîne](#string) avec [codes de couleur](#color-codes) | "Nom par défaut" |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
name: "&2Cool item"
```

<div align="center">

![create_item_name.jpg](../../../img/wiki/create_item_name.jpg)

</div>

</div>

</details>

***

### lore

Définit la description de l'objet.

| Clé | Valeurs | Par défaut |
|-|:-:|-|
| `lore` | [Liste](#list) avec [codes de couleur](#color-codes) | aucun |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
lore:
- "&2This is the coolest sword"
- "&2of all time!"
```

<div align="center">

![create_item_lore.jpg](../../../img/wiki/create_item_lore.jpg)

</div>

</div>

</details>

***

### enchantments

Définit les enchantements de l'objet.

| Clé |                                                                                                       Valeurs                                                                                                        | Par défaut |
|-|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `enchantments` | [Liste](#list) avec [enchantements Minecraft](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) ou [Enchantements personnalisés EliteMobs]($language$/elitemobs/custom_enchantments_list.md) | aucun |

Notez que ces entrées suivent le format `nomDeLEnchantement:niveauDeLEnchantement`. Consultez l'exemple ci-dessous !

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
enchantments: 
- "DAMAGE_UNDEAD,8"
- "DURABILITY,4"
- "DAMAGE_ALL,7"
- "LOUD_STRIKES,3"
```

<div align="center">

![create_item_enchantments.jpg](../../../img/wiki/create_item_enchantments.jpg)

</div>

</div>

</details>

Notez également que les enchantements comme la netteté deviennent la netteté d'élite par défaut si le niveau commence à dépasser les limites vanilla Minecraft.

***

### potionEffects

Définit les effets de potion que l'objet aura. Ceux-ci peuvent être appliqués au joueur ou à une entité endommagée par le joueur.

| Clé | Valeurs | Par défaut |
|-|:-:|-|
| `potionEffects` | [Liste](#list) avec [effets de potion Minecraft](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html)| aucun |

De plus, les effets de potion utilisent un format spécifique qui permet aux administrateurs de choisir qui est affecté et quand :

| Paramètre | Description | Valeurs | Par défaut |
|-|:-:|:-:|-|
| Niveau d'effet de potion | Définit le niveau de l'effet de potion. **Les effets de potion commencent au niveau 0** ! | [Entier](#integer) | aucun |
| Entité affectée | Définit qui est affecté par l'effet de potion. | `self` (le joueur) / `target` (entité qui est touchée) | aucun |
| Méthode d'application | Définit quand l'effet de potion est appliqué. | `onHit` / `continuous` (s'applique en permanence) | aucun |

Le format des effets de potion est `nomDeLEffetDePotion,niveauDeLEffetDePotion,entitéAffectée,méthodeDApplication`. Consultez l'exemple ci-dessous !

EliteMobs propose également des objets personnalisés qui fonctionnent comme des charmes. Ces objets ne font rien d'autre que de fournir des effets de potion au joueur lorsque l'objet est tenu ou est équipé dans un emplacement.

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
potionEffects: 
- "POISON,0,target,onHit"
- "HEAL,1,self,onHit"
- "NIGHT_VISION,0,self,continuous"
```

<div align="center">

![create_item_potion_effects.jpg](../../../img/wiki/create_item_potion_effects.jpg)

</div>

</div>

Avec cet ensemble d'effets de potion, les choses suivantes se produiront :

Lorsqu'il est touché, l'effet de potion de poison (niveau 1) sera appliqué à l'entité qui a été touchée par le joueur. De plus, le joueur sera affecté par un effet de potion de guérison instantanée de niveau 2.

En permanence, le joueur aura la vision nocturne. Cela signifie que le joueur aura la vision nocturne tant qu'il portera ou tiendra l'objet.

</details>

***

### scalability

Définit la façon dont le niveau de l'objet augmente avec le niveau du boss qui le laisse tomber.

| Clé | Valeurs | Par défaut |
|-|:-:|-|
| `scalability` | `fixed`, `limited` ou `scalable`. Vérifiez ci-dessous ! | scalable |

Consultez cette liste pour comprendre ce que font les différentes options !

| Paramètre | Description |
|-|:-:|
| `fixed` | Le niveau de l'objet sera toujours le niveau défini dans le fichier de configuration. |
| `limited` | Le niveau maximum de l'objet sera limité par celui défini dans le fichier de configuration ou le niveau du boss, le plus bas des deux. |
| `scalable` | Le niveau de l'objet sera entièrement basé sur le niveau du boss qui le laisse tomber. |

Notez que les objets avec un `dropWeight` auront toujours une extensibilité `fixed`.

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
scalability: "scalable"
```

</div>

</details>

***

### itemType

Définit d'où vous pouvez obtenir l'objet.

| Clé | Valeurs | Par défaut |
|-|:-:|-|
| `itemType` | `custom` ou `unique`. Vérifiez ci-dessous ! | `custom` |

Il existe deux types d'objets :

| Paramètre | Description |
|-|:-:|
| `custom` | L'objet pourra être laissé tomber par tout mob EliteMobs capable de laisser tomber du butin et sera dans la boutique personnalisée. `
| `unique` | L'objet ne sera pas laissé tomber par un boss et ne sera pas dans la boutique personnalisée. La seule façon de l'obtenir est de configurer un boss personnalisé pour qu'il le laisse tomber via son `uniqueLootTable` ! |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
itemType: "unique"
```

</div>

</details>

***

### dropWeight

Définit la table de butin dans laquelle l'objet s'intègrera.

| Clé |                  Valeurs                  | Par défaut |
|-|:----------------------------------------:|-|
| `dropWeight` | `dynamic` ou une valeur [Double](#double). | `dynamic` |

EliteMobs dispose de 5 tables de butin différentes pour les objets personnalisés, à l'exception de celles configurées directement comme le `uniqueLootList` sur les boss personnalisés.

Voici les suivants :

| Table de butin | Description | Poids par défaut |
|-|:-:|:-:|
| Objets générés de manière procédurale | Objets générés aléatoirement en fonction des fichiers de configuration du serveur | `90.0` |
| Objets pondérés | Objets dont le poids est autre que `dynamic` | `1.0` |
| Objets fixes | Objets dont l'extensibilité est fixe | `10.0` |
| Objets limités | Objets dont l'extensibilité est limitée | `3.0` |
| Objets extensibles | Objets qui sont extensibles | `6.0` |

Lorsqu'un boss meurt, un objet de ces tables est sélectionné en fonction du fichier de configuration ItemSettings.yml. Les valeurs par défaut pour les poids sont répertoriées ci-dessus dans `Poids par défaut`. Plus le poids est élevé, plus l'objet a de chances de tomber.

Les `Objets pondérés` ont un petit `Poids par défaut`, ce qui signifie qu'ils ne tomberont pas très souvent. Les objets dont le `dropWeight` n'est pas `dynamic` sont censés être rares et ne sont utilisés que dans les valeurs par défaut pour les charmes que les boss laissent tomber : des objets non utilisés directement pour le combat, mais plutôt pour renforcer les joueurs avec des effets de potion.

Le `dropWeight` que vous définissez ici définit la chance qu'un `Objet pondéré` spécifique tombe de la liste des `Objets pondérés`. Il n'augmente pas la chance que les `Objets pondérés` tombent.

**Si vous êtes confus et que vous voulez simplement créer des armes et des armures, sautez ce paramètre car il est correctement défini par défaut sur `dynamic`.**

Les `Objets pondérés` ont généralement un poids de 1,0.

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
dropWeight: "dynamic"
```

</div>

</details>


***

### customModelID

Définit la texture de l'objet. Nécessite l'utilisation d'une texture valide du pack de ressources !

| Clé | Valeurs | Par défaut |
|-|:-:|-|
| `customModelID` | [Entier](#integer) | aucun |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
material: DIAMOND_SWORD
customModelID: 1
```

</div>

Cela utilisera la texture personnalisée 1 des épées en diamant du pack de ressources que le joueur utilise. Il est recommandé de configurer votre serveur pour fournir des packs de ressources aux joueurs à la connexion si vous souhaitez utiliser cette fonctionnalité correctement.

</details>

***

### permission

Définit la permission requise pour obtenir l'objet.

| Clé | Valeurs | Par défaut |
|-|:-:|-|
| `permission` | [Chaîne](#string) | aucun |

Vous aurez besoin d'un plugin de gestion des permissions pour donner des permissions aux joueurs. Cela ne fonctionnera correctement que si vous n'avez pas désactivé l'enchantement d'âme liée.

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
permission: "elitemobs.cool.permission"
```

</div>

Avec cette configuration, seuls les joueurs disposant de la permission `elitemobs.cool.permission` pourront obtenir cet objet.

</details>

***

### soulbound

Définit si l'objet doit être lié à l'âme lors de la chute.

| Clé |       Valeurs        | Par défaut |
|-|:-------------------:|---------|
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

