```yaml
# Définit le niveau maximum, +7, des jefes qui pueden dejar caer equipo de diamante generado por procedimientos en EliteMobs.
# Il n'y a pas d'équipement en netherite généré de façon procédurale dans EliteMobs, uniquement du butin personnalisé.
minimumProcedurallyGeneratedDiamondLootLevelPlusSeven: 10
# Définit le mensaje que se muestra en el chat al conseguir botín con éxito a través del comando /em simloot <level> <times>.
simlootMessageSuccess: '&8[EliteMobs] &2Rolled for loot and got $itemName &2!'
# Définit le mensaje que se muestra en el chat al no obtener botín a través del comando /em simloot <level> <times>.
simlootMessageFailure: '&8[EliteMobs] &cRolled for loot and got nothing!'
# Définit le mensaje que reciben los jugadores cuando el botín de élite se deposita directamente en sus inventarios.
directDropCustomLootMessage: '&8[EliteMobs] &2Obtained $itemName &2!'
# Définit le mensaje que reciben los jugadores cuando el botín de vainilla se deposita directamente en sus inventarios.
directDropMinecraftLootMessage: '&8[EliteMobs] &aObtained $itemName &a!'
# Définit le mensaje que reciben los jugadores cuando las monedas de élite se depositan directamente en sus inventarios.
directDropCoinMessage: '&8[EliteMobs] &aObtained &2$amount $currencyName &a!'
# Establece si EliteMobs ocultará los atributos de vainilla de Minecraft.
hideItemAttributes: true
# Définit l'entrée de tradition spécifique aux armes sur un objet d'élite. Le marqueur de position $EDPS est remplacé par le DPS d'élite (dégâts par seconde) de l'arme.
weaponEntry: '&7DPS d'élite : &2$EDPS'
# Définit l'entrée de tradition spécifique aux armures sur un objet d'élite. Le marqueur de position $EDEF est remplacé par la DEF (défense) d'élite de l'arme.
armorEntry: '&7Armure d'élite : &2$EDEF'
# Définit le message envoyé lorsqu'un joueur tue un boss, mais que le niveau de l'équipement est trop différent du niveau du boss pour obtenir des pièces.
levelRangeTooDifferent: '&8EM] &4Votre équipement est de niveau $playerLevel et le boss est de niveau
  $bossLevel, la différence de niveau est trop élevée pour obtenir des pièces !'
```

</details>

---

## MobCombatSettings.yml

`MobCombatSettings.yml` contient tous les paramètres de configuration liés au système de combat personnalisé et la plupart des options de configuration généralement liées au fonctionnement des mobs d'élite.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Définit si les élites générées naturellement apparaîtront. Remarque : les mobs d'événement comme le roi zombie ne sont pas des élites générées naturellement ! Vous devrez désactiver les événements si vous voulez désactiver les boss d'événement.
doNaturalEliteMobSpawning: true
# Définit si les apparitions générées à partir des générateurs de mobs peuvent être converties en élites. Non recommandé !
doSpawnersSpawnEliteMobs: false
# Définit le pourcentage de mobs générés naturellement qui sont convertis en mobs d'élite.
eliteMobsSpawnPercentage: 0.05
# Définit la plage des super mobs pour la recherche d'empilement de super mobs
superMobStackRange: 15
# Définit le niveau maximum auquel les élites peuvent apparaître.
# Remarque : le niveau de mob d'élite est basé sur l'armure et les armes que les joueurs portent, et l'armure ne peut être mise à l'échelle que jusqu'au niveau 200.
naturalEliteMobsLevelCap: 250
# Définit si les élites porteront une armure en fonction de leur niveau. Ceci est uniquement à des fins visuelles et n'affecte pas le combat.
doElitesWearArmor: true
# Définit si les élites porteront des casques en fonction de leur niveau. Cela les empêchera de brûler facilement pendant la journée.
doElitesWearHelmets: true
# Définit si les élites auront des traînées visuelles autour d'elles, avertissant les joueurs des joueurs qu'elles possèdent.
doNaturalEliteMobVisualEffects: true
# Définit si les élites générées à partir de générateurs feront des effets visuels.
doSpawnerEliteMobVisualEffects: false
# Définit si certains pouvoirs feront la phase d'avertissement du pouvoir. Ceci est très important car les phases d'avertissement signifient généralement que le pouvoir peut être esquivé et l'élément visuel permet aux joueurs de savoir où esquiver.
doPowerBuildupVisualEffects: true
# Définit si des messages de mort personnalisés seront utilisés lorsque les joueurs meurent à cause des élites.
doCustomEliteMobsDeathMessages: true
# Définit si EliteMobs affichera des indicateurs de santé pour les élites.
doDisplayMobHealthOnHit: true
# Définit si EliteMobs affichera des indicateurs de dégâts pour les dégâts infligés aux élites.
doDisplayMobDamageOnHit: true
# Définit si le niveau des élites augmentera en fonction de la distance de l'apparition.
# Il s'agit d'une valeur ajoutée en plus de leur niveau normal, ce qui signifie que si un joueur porte un équipement de niveau 100 près de l'apparition et que le boss a +1 de niveau en raison de la distance de l'apparition, le boss apparaîtra au niveau 101.
# En général, cette option n'est pas recommandée, en particulier si vous avez un système de tp aléatoire sur votre serveur.
doIncreaseEliteMobLevelBasedOnSpawnDistance: false
# Définit la distance entre les incréments de niveau pour les augmentations de niveau basées sur la distance.
distanceBetweenIncrements: 100.0
# Définit le nombre de niveaux qui augmentent à chaque incrément de distance pour les augmentations de niveau basées sur la distance.
levelIncreaseAtIncrements: 1.0
# Définit si les pouvoirs des élites seront cachés jusqu'à ce qu'elles entrent en combat. Ceci est recommandé pour des raisons de performances.
hideEliteMobPowersUntilAggro: true
# Définit le multiplicateur pour les dégâts infligés à tous les boss générés par EliteMobs, sauf ceux qui utilisent le système de dégâts normalisé (boss de donjons régionaux). Des valeurs plus élevées augmentent les dégâts infligés, ce qui facilite la mort des boss.
# 2.0 = 200 %, 0.5 = 50 %
damageToEliteMobMultiplierV2: 1.0
# Définit le multiplicateur pour les dégâts infligés aux joueurs par les élites. Des valeurs plus élevées augmentent la quantité de dégâts infligés par les boss, sauf ceux qui utilisent le système de dégâts normalisé (boss de donjons régionaux), ce qui rend les boss plus difficiles à frapper.
# 2.0 = 200 %, 0.5 = 50 %
damageToPlayerMultiplierV2: 1.0
# Définit si les boss spéciaux peuvent être suivis.
showCustomBossLocation: true
# Définit le message envoyé aux joueurs pour suivre l'emplacement d'un boss.
bossLocationMessage: '&7[EM] &2[Cliquez pour suivre !]'
# Définit les commandes qui s'exécutent lorsqu'une élite meurt. Les marqueurs de position valides sont :
# $level pour le niveau du boss
# $name pour le nom du boss
# $players fera en sorte que la commande s'exécute pour chaque joueur qui a participé à la mort. Par exemple, si Bob et Steve ont tué un boss, 'broadcast $players a tué le boss !' exécutera 'bob a tué le boss' et 'steve a tué le boss !'
commandsOnEliteMobDeath: []
# Définit le message envoyé aux joueurs qui participent à de grandes mises à mort de boss.
bossKillParticipationMessage: '&eVos dégâts : &2$playerDamage'
# Définit si les boss régénéreront leur santé lorsqu'ils sortiront du combat. Fortement recommandé.
regenerateCustomBossHealthOnCombatEnd: true
# Définit le message envoyé aux joueurs qui tentent de suivre les boss qui se trouvent actuellement dans un monde différent.
defaultOtherWorldBossLocationMessage: '$name : Dans un autre monde !'
# Définit le préfixe ajouté aux indicateurs de dégâts lorsque les joueurs frappent un boss avec quelque chose contre lequel le boss est faible.
weakTextColor: '&9'
# Définit le préfixe ajouté aux indicateurs de dégâts lorsque les joueurs frappent un boss avec quelque chose contre lequel le boss est fort.
resistTextColor: '&c'
# Définit le message qui apparaît lorsque les joueurs frappent le boss avec quelque chose contre lequel le boss est faible.
weakText: '&9&lFaible !'
# Définit le message qui apparaît lorsque les joueurs frappent le boss avec quelque chose contre lequel le boss est fort.
resistText: '&c&lRésistance !'
# Définit si des visuels seront utilisés pour montrer qu'un boss est faible contre une attaque.
doWeakEffect: true
# Définit si des visuels seront utilisés pour montrer qu'un boss est fort contre une attaque.
doResistEffect: true
# Définit le multiplicateur pour les dégâts infligés aux boss utilisant le système de dégâts normalisé (boss de donjons régionaux). Des valeurs plus élevées augmentent les dégâts infligés, ce qui facilite la mort des boss.
# 2.0 = 200 %, 0.5 = 50 %
damageToEliteMobMultiplier: 1.0
# Définit le multiplicateur pour les dégâts infligés aux joueurs par les boss utilisant le système de dégâts normalisé (boss de donjons régionaux). Des valeurs plus élevées augmentent la quantité de dégâts infligés par les boss, ce qui rend les boss plus difficiles à frapper.
# 2.0 = 200 %, 0.5 = 50 %
damageToPlayerMultiplier: 1.0
# Définit les dégâts de référence pour les boss personnalisés utilisant les dégâts normalisés (généralement les boss régionaux de donjons).
normalizedRegionalBossBaselineDamageV2: 3.0
# Définit la santé de référence pour les boss personnalisés utilisant la santé normalisée (généralement les boss régionaux de donjons).
normalizedRegionalBossBaselineHealthV3: 4.0
# Définit si les boss régionaux utiliseront le système de combat normalisé.
# Ceci est très fortement recommandé et le contenu préfabriqué ne sera pas équilibré correctement s'il est modifié.
normalizeRegionalBosses: true
# Définit le message qui apparaît lorsqu'un boss guérit en sortant du combat.
fullHealMessage: '&2GUÉRISON COMPLÈTE !'
# Définit les multiplicateurs appliqués aux attaques contre lesquelles les boss sont forts et faibles.
strengthAndWeaknessDamageMultipliers: 2.0
# Définit le multiplicateur appliqué à la réduction de dégâts de l'effet de potion de résistance pour les joueurs.
resistanceDamageMultiplier: 1.0
# Définit le multiplicateur appliqué à la réduction de dégâts lorsqu'un joueur tient un bouclier pour les attaques de mêlée (pouvoirs exclus).
blockingDamageReduction: 0.8
```

</details>

---

## ProceduralItemGenerationSettings.yml

`ProceduralItemGenerationSettings.yml` contient toutes les options de configuration pour la configuration des objets générés de façon procédurale.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
dropProcedurallyGeneratedItems: true
customEnchantmentsChance: 0.5
materialNames:
  swordName: Épée
  bowName: Arc
  pickaxe: Pioche
  spade: Pelle
  hoe: Houe
  axe: Hache
  helmet: Casque
  chestplate: Plastron
  leggings: Jambières
  boots: Bottes
  shears: Cisailles
  fishingRod: Canne à pêche
  shield: Bouclier
  trident: Trident
  crossbow: Arbalète
nameFormats:
- $verb $itemType de $adjective $noun
- $itemType de $adjective $noun
- $noun's $adjective $verb $itemType
- $verb $itemType
- $adjective $verb $itemType
- The $verb-er
- The $adjective $verb-er
nouns:
- MagmaGuy
- Aube
...
adjectives:
- Adorable
- Magnifique
...
verbs:
- Tailler
- Couper
...
verb-ers (noun):
- Brise-monde
- Brise-destructeur_de_monde
...
validMaterials:
  DIAMOND_HELMET: true
  DIAMOND_CHESTPLATE: true
  DIAMOND_LEGGINGS: true
  DIAMOND_BOOTS: true
  DIAMOND_SWORD: true
  DIAMOND_AXE: true
  IRON_HELMET: true
  IRON_CHESTPLATE: true
  IRON_LEGGINGS: true
  IRON_BOOTS: true
  IRON_SWORD: true
  IRON_AXE: true
  GOLDEN_HELMET: true
  GOLDEN_CHESTPLATE: true
  GOLDEN_LEGGINGS: true
  GOLDEN_BOOTS: true
  GOLDEN_SWORD: true
  GOLDEN_AXE: true
  CHAINMAIL_HELMET: true
  CHAINMAIL_CHESTPLATE: true
  CHAINMAIL_LEGGINGS: true
  CHAINMAIL_BOOTS: true
  LEATHER_HELMET: true
  LEATHER_CHESTPLATE: true
  LEATHER_LEGGINGS: true
  LEATHER_BOOTS: true
  STONE_SWORD: true
  STONE_AXE: true
  WOODEN_SWORD: true
  WOODEN_AXE: true
  SHIELD: true
  TURTLE_HELMET: true
  TRIDENT: true
  BOW: true
  CROSSBOW: true
```

</details>
