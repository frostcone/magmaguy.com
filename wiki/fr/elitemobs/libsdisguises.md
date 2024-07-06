```markdown
# Qu'est-ce que LibsDisguises ?

LibsDisguises est un plugin qui permet aux serveurs de déguiser n'importe quelle entité en n'importe quel autre type d'entité. Par exemple, vous pouvez déguiser des joueurs en moutons, ou déguiser des moutons en joueurs.

Il existe une version [gratuite](https://www.spigotmc.org/resources/libs-disguises-free.81/) et une version [premium](https://www.spigotmc.org/resources/libs-disguises.32453/) de LibsDisguises. LibsDisguises a été créé et est maintenu par d'autres développeurs, alors veuillez ne pas demander de l'aide à son sujet dans les sections d'assistance EliteMobs.

# Comment puis-je déguiser une entité en joueur ?

Pour déguiser un boss personnalisé (ou un boss régional, ou même un PNJ !) en joueur, il vous suffit d'ajouter la ligne suivante au fichier de configuration du boss :

```yml
disguise: player:name
```

Par exemple, si vous souhaitez déguiser un boss en tant que skin de mon joueur, la ligne de configuration ressemblera à ceci :

```yml
disguise: player:magmaguy
```

# Comment puis-je déguiser une entité en skin de joueur, mais pas nécessairement en joueur ?

Il s'agit de la manière la plus flexible de déguiser une entité en joueur, car elle permet aux administrateurs d'utiliser des skins en ligne ou même de créer leurs propres skins pour déguiser un boss. C'est aussi un peu plus complexe à faire.

Par souci de simplicité, les exemples listés ici supposent que vous allez utiliser un skin disponible en ligne. Libsdisguises propose différentes manières de désérialiser des skins, notamment une qui consiste à placer votre propre skin personnalisé dans son dossier. Consultez sa documentation si vous ne souhaitez pas utiliser un skin déjà disponible en ligne.

### 1. Définir le déguisement

Pour le déguisement, vous voudrez faire quelque chose comme ça :

```yaml
disguise: custom:your_unique_skin_name
```

### 2. Génération des données de déguisement

C'est la partie délicate. Vous commencez par créer l'entrée de configuration suivante :

```yaml
customDisguiseData: player your_unique_skin_name setskin 
```

*Il est crucial que le nom que vous avez défini dans `disguise` pour `your_unique_skin_name` corresponde à celui de `customDisguiseData` !*

Ensuite, vous devrez désérialiser un skin de joueur. La manière la plus simple de le faire pour un skin disponible publiquement en ligne est d'utiliser la commande `grabskin` de LibsDisguises.

Disons que vous voulez obtenir [ce skin](https://www.minecraftskins.com/skin/18512841/buff-villager/).

Pour ce faire, vous devez exécuter la commande `/grabskin https://www.minecraftskins.com/uploads/skins/2021/07/28/buff-villager-18512841.png?v437`

**Remarque : vous devez fournir un lien direct vers le fichier de skin, et non vers la page contenant le skin. Notez où pointe le lien. Dans [skindex](https://www.minecraftskins.com/), vous pouvez obtenir le lien direct en appuyant sur le bouton "Lien de l'image" qui est présent en bas à droite de chaque skin.**

Une fois que vous avez fait cela avec succès, LibsDisguises vous fournira environ 3 à 6 chiffres qui indiquent "Cliquez pour copier". Si vous cliquez dessus, une longue liste de chiffres et de lettres apparaîtra. Vous devez vous assurer de commencer à 1 et de faire tous les chiffres dans l'ordre. Pour les copier, appuyez sur Ctrl-A, puis sur Ctrl-C, puis collez-les dans le fichier avec Ctrl-V. Une fois terminé, cela devrait ressembler à ceci :

```yaml
customDisguiseData: player your_unique_skin_name setskin {"id":"d1fbb77f-b184-4718-b0a2-c7ae866798d3","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTYyNzU0ODkwMjQ0OSwKICAicHJvZmlsZUlkIiA6ICIxOTI1MjFiNGVmZGI0MjVjODkzMWYwMmE4NDk2ZTExYiIsCiAgInByb2ZpbGVOYW1lIiA6ICJTZXJpYWxpemFibGUiLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzlmYTZkMWFlODA2YTY2OGI0OTgzYmZhY2ZkMGUzMzQ5MGE5MGU4YTZmMWE2MmEwZGQ5YzQ1YjdkYjBiNjU1MyIKICAgIH0KICB9Cn0=","signature":"P/XSvxX45MUZGc5uuDKuVgmMUk2V1HADPI84Os5J4NnmURhLeS4jL4FSeShmz0cH7sBWmMg80g9ADP33R9PcOmzbHK4hJBFt2VYLJNgSYHK6VGp6qLGXDfdAa3vRNXN7jKtsrqVEANax7Gzv3xcWARLbq1FuQ6yYdXDY8Coc02YdXDOMRG/i6iACtro5DQGhr2JgbL++95UhSBFxmU82Zef3UMHLfgt7lC4vWN4c4xrOAKllzF2mwohuMmEkoKzu/6s/eu5q4J4bBH08M8UN02/yJuEH5sTy/iVJfaoPs90ZfcVdRpUZvVDZh5eXapQN1/Q9/79Pc8YOXF/20iygZ/hpvTPKP8wbMP2b1cJSyAaEIUtG9I7mG3bAXbH7mcswM1CNFF3+GEFnZI5dPxzuOelJR/t2mtVl82a4zEm9KG9Fq7iGfuK9aiWR8Yot1KeuIddPbBL8JnxHy2wW9OySjzAbs8tUI/i5KKmZmQrPH0RmHrFIuVK4C849QtRt57sQaUr1+W6Vto3r7J5jhpZ30wIIfS9hvW/ReB9rbwUQWERWie5Lchfcp7YkKbzuuaddnIjPew2IQDESlXzVW84kXtYKCs8hFgYVn27wU8jqtBCVkr0iHW7YLQTl4SFUzTFCSgAx5KSFHGm/4kqXqpHNdjS687o13MWpxrxLkV1svIp4="}],"legacy":false}
```

Et voilà ! `customDisguiseData` fonctionnera avec n'importe quel code de skin désérialisé, donc si vous trouvez d'autres moyens de générer le même code dans LibsDisguises, vous pouvez l'utiliser ici.

L'avantage de customDisguiseData est qu'il est autonome, ce qui signifie que vous n'avez pas à dépendre des joueurs en ligne, des joueurs ayant des skins spécifiques ou de quoi que ce soit d'autre. EliteMobs l'utilise pour donner un skin à tous les boss déguisés dans les packages de donjons !

# Comment puis-je déguiser un boss personnalisé en un autre type d'entité ?

Pour déguiser un boss personnalisé (ou un boss régional) en un autre type d'entité, il vous suffit d'ajouter la ligne suivante au fichier de configuration du boss :

```yml
disguise: ENTITY_TYPE
```

Par exemple, si vous souhaitez que votre boss personnalisé soit déguisé en mouton, vous feriez ceci :

```yml
disguise: SHEEP
```
## Comment puis-je déguiser un boss personnalisé en une entité bébé ?

Pour déguiser un boss personnalisé (ou un boss régional) en une entité bébé, il vous suffit d'ajouter la ligne suivante au fichier de configuration du boss :

```yml
disguise: HOGLIN:baby
```
Comme vous pouvez le constater dans cet exemple, notre boss serait déguisé en Hoglin bébé.

# Comment puis-je déguiser une entité avec un déguisement personnalisé ?

Pour déguiser un boss personnalisé (ou un boss régional) en une entité LibsDisguises personnalisée, vous devez d'abord créer le déguisement LibsDisguises.

Une fois que c'est fait, la syntaxe correcte est la suivante :

```yml
disguise: custom:you_custom_disguise_name
```

# Déguisements valides

Il n'existe pas de liste officielle des types d'entités valides, mais voici une liste non officielle qui devrait fonctionner au moment de la rédaction de ce document (3 août 2020)

<details>

<summary><b>Développer la liste</b></summary>

```
    ARMOR_STAND
    ARROW
    BAT
    BLAZE
    BOAT
    CAT
    CAVE_SPIDER
    CHICKEN
    COD
    COW
    CREEPER
    DOLPHIN
    DONKEY
    DRAGON_FIREBALL
    DROWNED
    DROPPED_ITEM
    EGG
    ELDER_GUARDIAN
    ENDER_CRYSTAL
    ENDER_DRAGON
    ENDER_PEARL
    ENDER_SIGNAL
    ENDERMAN
    ENDERMITE
    EVOKER
    EVOKER_FANGS
    EXPERIENCE_ORB
    FALLING_BLOCK
    FIREBALL
    FIREWORK
    FISHING_HOOK
    FOX
    GHAST
    GIANT
    GUARDIAN
    HOGLIN
    HORSE
    HUSK
    ILLUSIONER
    IRON_GOLEM
    ITEM_FRAME
    LLAMA
    LLAMA_SPIT
    LEASH_HITCH
    MAGMA_CUBE
    MINECART
    MINECART_CHEST
    MINECART_COMMAND
    MINECART_FURNACE
    MINECART_HOPPER
    MINECART_MOB_SPAWNER
    MINECART_TNT
    MODDED_MISC
    MODDED_LIVING
    MULE
    MUSHROOM_COW
    OCELOT
    PAINTING
    PANDA
    PARROT
    PHANTOM
    PIG
    PIG_ZOMBIE
    PIGLIN
    PILLAGER
    PLAYER
    POLAR_BEAR
    PRIMED_TNT
    PUFFERFISH
    RABBIT
    RAVAGER
    SALMON
    SHEEP
    SHULKER
    SHULKER_BULLET
    SILVERFISH
    SKELETON
    SKELETON_HORSE
    SLIME
    SMALL_FIREBALL
    SNOWBALL
    SNOWMAN
    SPECTRAL_ARROW
    SPLASH_POTION
    SQUID
    STRAY
    STRIDER
    THROWN_EXP_BOTTLE
    TIPPED_ARROW
    TRIDENT
    TRADER_LLAMA
    TROPICAL_FISH
    TURTLE
    VEX
    VILLAGER
    VINDICATOR
    WANDERING_TRADER
    WITCH
    WITHER
    WITHER_SKELETON
    WITHER_SKULL
    WOLF
    ZOGLIN
    ZOMBIE
    ZOMBIE_HORSE
    ZOMBIE_VILLAGER
    ZOMBIFIED_PIGLIN
```

</details>

```

