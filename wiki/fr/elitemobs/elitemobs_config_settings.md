# Configurations par défaut d'EliteMobs

**EliteMobs est livré avec les configurations par défaut recommandées. Si vous modifiez des éléments au hasard, il y a
de fortes chances que vous ne fassiez qu'empirer l'expérience globale.**

_**EliteMobs est fourni à tous les utilisateurs avec les paramètres par défaut recommandés. Si vous modifiez des
éléments au hasard et que vous demandez ensuite de l'aide, il y a de fortes chances qu'on vous demande de réinitialiser
vos fichiers de configuration. Les modifications du plugin doivent être le fruit de tests en jeu et non de simples
suppositions.**_

## Mise en route

EliteMobs propose actuellement un large éventail d'options de configuration en raison de la forte demande de
personnalisation. Afin de garder cette page wiki concise, seules les configurations par défaut seront affichées.

Si vous souhaitez en savoir plus sur un paramètre spécifique, vous pouvez vous référer au fichier de configuration et
consulter les commentaires.

---

## config.yml

`config.yml` contient principalement des paramètres aléatoires qui ne pouvaient pas être intégrés ailleurs au moment de
leur création. C'est le fichier de configuration le plus susceptible de subir des modifications entre les versions.

<div align="left">

<details>

<summary><b>Dérouler le tableau</b></summary>

```yml
# Définit le fichier de langue utilisé par EliteMobs
# Ne modifiez PAS cela manuellement ! Il est destiné à être installé avec la commande « /em language <fichierlangue> »
language: french
# Définit si les élites et les boss engendrés par elitemobs afficheront toujours leurs étiquettes de nom.
# Non recommandé !
alwaysShowEliteMobNameTags: false
# Définit la quantité de mobs passifs qui doivent être à proximité avant de pouvoir être fusionnés.
# Ne mettez pas cette valeur à 0 !
superMobStackAmount: 50
# Fait en sorte que les élites n'endommagent pas les mobs passifs avec des explosions.
preventEliteCreeperDamageToPassiveMobs: true
# Définit si EliteMobs utilisera des titres pour avertir les joueurs de l'absence d'autorisations
useTitlesForMissingPermissionMessages: true
# Définit si EliteMobs empêchera la conversion des mobs nommés en élites.
# Particulièrement important pour la compatibilité avec d'autres plugins.
preventEliteMobConversionOfNamedMobs: true
# Définit si EliteMobs convertira les mobs avec des raisons d'apparition personnalisées.
# L'exécution de certains plugins de boss définira automatiquement cette valeur à true, quelle que soit la valeur du fichier de configuration.
enableHighCompatibilityMode: false
# Définit le bonus d'apparition d'élite pour le mode de jeu cauchemar
nightmareWorldSpawnBonus: 0.5
# Définit si la commande centralisée /em ouvre la page d'état principale du plugin.
# Fortement recommandé !
emLeadsToStatusMenu: true
# Définit si l'exécution de commandes spécifiques comme /em wallet mènera au menu /em où cette information est centralisée.
otherCommandsLeadToEMStatusMenu: true
# Définit si la configuration est terminée.
# Ne définissez pas cette valeur manuellement, elle est destinée à être modifiée par des commandes en jeu.
setupDoneV3: true
# Définit si les élites empêcheront l'apparition de renforts vanille, comme pour la fonction de renfort de zombie.
preventVanillaReinforcementsForEliteEntities: true
# Définit l'emplacement d'apparition par défaut du serveur pour EliteMobs. /em spawntp mènera à cet emplacement.
defaultSpawnLocation: world,16.0,76.0,80.0,0.0,0.0
# Définit si EliteMobs régénérera les blocs détruits par les élites.
doExplosionRegen: true
# Définit si la régénération d'explosion régénérera également le contenu des conteneurs tels que les coffres.
# Le fait de mettre cette valeur à false empêchera les explosions d'élite de faire exploser les conteneurs.
doRegenerateContainers: true
defaultTransitiveBlockLimiter: 500
# Définit si le menu /em utilisera uniquement le style de menu basé sur l'inventaire qui est compatible avec Bedrock.
# Pour rappel, les joueurs peuvent également exécuter la commande /em alt pour passer d'un style de menu /em à un autre.
onlyUseBedrockMenus: false
# Définit la limite de caractères par ligne pour les pages de menu du livre.
# Diminuez cette quantité si le texte est coupé dans les menus du livre, comme pour les quêtes.
characterLimitForBookMenuPagesV2: 170
# Définit si l'espace vide du menu sera rempli de vitres.
# Non recommandé si vous utilisez le pack de ressources EliteMobs.
useGlassToFillMenuEmptySpace: false
# Définit si l'unicode sera utilisé pour formater le pack de ressources EliteMobs.
# Ne définissez pas cela manuellement, il est défini automatiquement lors de l'installation du pack de ressources.
# Ne le définissez manuellement que si vous avez dû fusionner le pack de ressources EliteMobs, et attendez-vous à ce que l'espacement puisse ne pas fonctionner si vous le faites.
menuUnicodeFormatting: false
# Définit le message envoyé aux joueurs s'ils exécutent '/em confirm' sans commande en attente.
noPendingCommands: '&cVous n''avez actuellement aucune commande en attente !'
# Définit le message de suivi pour les boss qui envoient des messages de suivi.
trackMessage: Suivre le $name
# Définit le message envoyé aux joueurs qui ouvrent des coffres au trésor avec des exigences de niveau supérieures à leur rang de guilde.
chestLowRankMessage: '&7[EM] &cVotre rang de guilde doit être au moins $rank &cpour
  ouvrir ce coffre !'
# Définit le message envoyé aux joueurs qui essaient de rouvrir un coffre au trésor qu'ils ont déjà ouvert.
chestCooldownMessage: '&7[EM] &cVous avez déjà ouvert ce coffre récemment ! Attendez $time !'
# Définit le message qui apparaît en recommandant la commande /em alt pour les joueurs ayant des problèmes avec la commande /em
dismissEMMessage: '&8[EliteMobs] &2/elitemobs &fmenu ne fonctionne pas pour vous ? Essayez &2/elitemobs
  alt &fpour voir une autre version du menu ! &cN'voulez pas revoir ce message
  ? &4/em ignorer'
# Définit le message qui apparaît lorsque les joueurs exécutent la commande /em alt.
switchEMStyleMessage: '&8[EliteMobs] &2/elitemobs &fstyle de menu changé ! Allez voir !'
# Définit le message qui apparaît lorsqu'un joueur ouvre un coffre au trésor mais ne reçoit rien
treasureChestNoDropMessage: '&8[EliteMobs] &cVous n''avez rien reçu ! Meilleure chance
  la prochaine fois !'
# Définit le message qui apparaît lorsqu'un joueur essaie de suivre un boss qui n'est plus valide
bossAlreadyGoneMessage: '&c[EliteMobs] Désolé, ce boss est déjà parti !'
```

</details>

---

## AdventurersGuild.yml

`AdventurersGuild.yml` contient les paramètres de configuration pertinents pour le Hub de la guilde des aventuriers (le
monde) et les paramètres pertinents pour le système de classement de la guilde des aventuriers.

<details>

<summary><b>Dérouler le tableau</b></summary>

```yml
# Définit si EliteMobs ajoutera un maximum de points de vie lors du déblocage des rangs de guilde en tant que récompense de prestige
Ajouter un maximum de points de vie lors du déblocage de rangs de guilde supérieurs : true
# Définit si EliteMobs ajoutera une chance de coup critique lors du déblocage des rangs de guilde en tant que récompense de prestige
Ajouter une chance critique lors du déblocage de rangs de guilde supérieurs : true
# Définit si EliteMobs ajoutera une chance d'esquive lors du déblocage des rangs de guilde en tant que récompense de prestige
Ajouter une chance d'esquive lors du déblocage de rangs de guilde supérieurs : true
# Définit si les commandes utilisateur sont redirigées vers le hub de la guilde des aventuriers. Ceci est fortement recommandé pour l'immersion dans le jeu et les didacticiels.
userCommandsTeleportToAdventurersGuild: true
# Définit le nom d'affichage dans le jeu de la guilde des aventuriers
adventurersGuildMenuName: '&6&lHub de l''aventurier'
Prestige 0 rang 0 : '&8Roturier - désactive les élites !'
Prestige 0 rang 0 abrégé : '&6&l✧&e0'
...
# Définit si le butin des joueurs est limité par leur niveau de guilde.
# Il s'agit d'une partie incroyablement importante d'EliteMobs et elle est extrêmement recommandée.
limitLootBasedOnGuildTier: true
# Définit le message envoyé aux joueurs si leur butin est amoindri en raison de leur faible niveau de guilde.
lootLimiterMessage: '&7[EM] &cVous devez débloquer le rang de guilde suivant via /ag pour piller
  de meilleurs objets !'
# Définit les commandes qui sont exécutées lors d'une amélioration du rang de guilde. Les espaces réservés sont :
# $prestigerank - affiche le rang de prestige
# $activerank - affiche le rang actuellement actif
# $player - affiche le nom du joueur
onRankUpCommand: []
# Définit les commandes qui sont exécutées lors d'une amélioration du rang de prestige.
# $prestigerank - affiche le rang de prestige
# $activerank - affiche le rang actuellement actif
# $player - affiche le nom du joueur
onPrestigeUpCommand: []
# Définit le niveau de prestige pour le premier bonus d'esquive.
dodgePrestige3Bonus: 3.0
# Définit le niveau de prestige pour le deuxième bonus d'esquive.
dodgePrestige6Bonus: 6.0
# Définit le niveau de prestige pour le troisième bonus d'esquive.
dodgePrestige9Bonus: 10.0
# Définit le niveau de prestige pour le premier bonus de coup critique.
critPrestige2Bonus: 3.0
# Définit le niveau de prestige pour le deuxième bonus de coup critique.
critPrestige5Bonus: 6.0
# Définit le niveau de prestige pour le troisième bonus de coup critique.
critPrestige8Bonus: 10.0
# Définit le niveau de prestige pour le premier bonus de points de vie maximum.
healthPrestige1Bonus: 2.0
# Définit le niveau de prestige pour le deuxième bonus de points de vie maximum.
healthPrestige4Bonus: 2.5
# Définit le niveau de prestige pour le troisième bonus de points de vie maximum.
healthPrestige7Bonus: 3.0
# Définit le niveau de prestige pour le troisième bonus de points de vie maximum.
healthPrestige10Bonus: 4.0
# Définit le nombre estimé de boss de base qui doivent être tués pour pouvoir se permettre une amélioration de rang.
baseKillsForRankUp: 100
# Définit le nombre supplémentaire estimé de boss qui doivent être tués pour pouvoir monter en grade, par niveau.
# La formule est ce nombre x le niveau auquel le joueur est actuellement.
additionalKillsForRankUpPerTier: 50
# Définit le titre envoyé aux joueurs lorsqu'une personne débloque un rang de prestige.
# $player est un espace réservé qui est remplacé par le nom d'affichage du joueur.
prestigeUnlockMessageTitle: $player
# Définit le sous-titre envoyé aux joueurs lorsqu'une personne débloque un rang de prestige.
# $tier est un espace réservé qui est remplacé par le niveau de prestige du joueur.
prestigeUnlockMessageSubtitle: '&2a débloqué $tier&2 !'
# Définit le multiplicateur qui sera appliqué à la probabilité d'apparition lorsque les joueurs utilisent le rang pacifique (roturier).
peacefulModeEliteChanceDecrease: 0.2
# Définit la liste des mondes auxquels les bonus de rang de guilde ne seront pas appliqués
worldsWithoutAGBonuses: []
# Désactive la possibilité pour les utilisateurs de passer en mode pacifique pour EliteMobs. Le mode pacifique réduit le niveau et les taux d'apparition des mobs autour de ce joueur en particulier
disableCommonerRank: false
```

</details>

---

## AntiExploit.yml

`AntiExploit.yml` permet aux administrateurs de personnaliser différents aspects du système AntiExploit. Le système
AntiExploit existe pour empêcher les joueurs d'utiliser des éléments tels que des broyeurs de mobs pour obtenir
facilement des pièces et du butin, et les incite à mener de vrais combats et des mini-donjons au lieu de cliquer en mode
AFK pour atteindre le sommet du plugin.

Il s'agit d'un système essentiel à maintenir activé si vous ne voulez pas que les gens se contentent de farmer en mode
AFK tout le plugin et que vous voulez qu'ils interagissent réellement avec les mini-donjons.

<details>

<summary><b>Dérouler le tableau</b></summary>

```yml
# Définit le message qui apparaît lorsque l'antiexploit est déclenché.
Message AntiExploit : '&c[EM AntiExploit] &7L'élite à proximité ne lâchera pas de butin spécial.'
# Définit si l'antiexploit de salle noire 1 est activé.
# Les fonctions spécifiques d'antiexploit ne sont pas documentées intentionnellement. Les opérateurs de serveur peuvent voir quel type d'antiexploit a été déclenché, mais de plus amples informations sur son fonctionnement spécifique ne sont pas rendues disponibles.
Activer l'antiexploit de salle noire 1 : true
# Définit si l'antiexploit de salle noire 2 est activé.
# Les fonctions spécifiques d'antiexploit ne sont pas documentées intentionnellement. Les opérateurs de serveur peuvent voir quel type d'antiexploit a été déclenché, mais de plus amples informations sur son fonctionnement spécifique ne sont pas rendues disponibles.
Activer l'antiexploit de salle noire 2 : true
# Définit si l'antiexploit de salle noire 3 est activé.
# Les fonctions spécifiques d'antiexploit ne sont pas documentées intentionnellement. Les opérateurs de serveur peuvent voir quel type d'antiexploit a été déclenché, mais de plus amples informations sur son fonctionnement spécifique ne sont pas rendues disponibles.
Activer l'antiexploit de salle noire 3 : true
# Définit si l'antiexploit de grande salle noire 1 est activé.
# Les fonctions spécifiques d'antiexploit ne sont pas documentées intentionnellement. Les opérateurs de serveur peuvent voir quel type d'antiexploit a été déclenché, mais de plus amples informations sur son fonctionnement spécifique ne sont pas rendues disponibles.
Activer l'antiexploit de grande salle noire 1 : true
# Définit si l'antiexploit de hauteur d'enderman est activé.
# Les fonctions spécifiques d'antiexploit ne sont pas documentées intentionnellement. Les opérateurs de serveur peuvent voir quel type d'antiexploit a été déclenché, mais de plus amples informations sur son fonctionnement spécifique ne sont pas rendues disponibles.
Activer l'antiexploit de hauteur d'enderman : true
# Définit si l'antiexploit de monture est activé.
# Les fonctions spécifiques d'antiexploit ne sont pas documentées intentionnellement. Les opérateurs de serveur peuvent voir quel type d'antiexploit a été déclenché, mais de plus amples informations sur son fonctionnement spécifique ne sont pas rendues disponibles.
Activer l'antiexploit de monture : true
# Définit si les mobs d'élite peuvent ramasser des objets
preventItemPickupByMobs: true
# Définit si l'antiexploit de dégâts ambiants est activé.
# Les fonctions spécifiques d'antiexploit ne sont pas documentées intentionnellement. Les opérateurs de serveur peuvent voir quel type d'antiexploit a été déclenché, mais de plus amples informations sur son fonctionnement spécifique ne sont pas rendues disponibles.
Activer l'antiexploit de dégâts ambiants : true
# Définit si l'antiexploit de bloc de miel est activé.
# Les fonctions spécifiques d'antiexploit ne sont pas documentées intentionnellement. Les opérateurs de serveur peuvent voir quel type d'antiexploit a été déclenché, mais de plus amples informations sur son fonctionnement spécifique ne sont pas rendues disponibles.
Activer l'antiexploit de bloc de miel : true
# Définit le seuil d'activation de l'antiexploit. Des valeurs plus élevées le rendent plus tolérant. Il n'est pas recommandé de modifier cette valeur.
antiExploitThreshold: 10
# Définit si l'antiexploit sans chemin est activé
nPathExploit: true
```

</details>

---

## CombatTag.yml

`CombatTag.yml` contient les paramètres de configuration du système d'identification de combat. Ce système est encore
loin d'être terminé, mais il tente de gérer le comportement des joueurs une fois qu'ils entrent en combat.

<details>

<summary><b>Dérouler le tableau</b></summary>

```yml
# Définit si l'identification de combat est activée.
# Lorsqu'elle est activée, les joueurs en vol qui engagent le combat sont réglés pour arrêter de voler.
Activer l'identification de combat : true
# Définit le message envoyé lorsque l'identification de combat est activée.
Message d'identification de combat : '&c[EliteMobs] Identification de combat activée !'
# Définit si la commande /ag aura un délai avant la téléportation
Activer le délai de téléportation de la guilde des aventuriers : true
# Définit le message d'action défini pendant l'attente du délai de téléportation.
Temps de téléportation restant : '&7[EM] Téléportation dans &a$time &7secondes...'
# Définit le message envoyé lorsque les joueurs bougent en attendant la téléportation.
Téléportation annulée : '&7[EM] &cTéléportation interrompue !'
```

</details>

---

## DiscordSRV.yml

`DiscordSRV.yml` contient les paramètres de configuration pour DiscordSRV. Si vous voulez voir comment configurer cette
fonctionnalité, [cliquez ici !]($language$/elitemobs/discordsrv.md)

<details>

<summary><b>Dérouler le tableau</b></summary>

```yml
# La documentation se trouve ici : https://magmaguy.com/wiki.html#lang=en&article=elitemobs+discordsrv.md
announcementRoomName: VOUS_DEVEZ_INDIQUER_LE_NOM_DE_LA_SALLE_DISCORD_DANS_LAQUELLE_VOUS_SOUHAITEZ_QUE_LES_ANNONCES_D'ELITEMOBS_SOIENT_DIFFUSÉES_TEL_QUE_VOUS_L'AVEZ_INDIQUÉ_DANS_VOTRE_FICHIER_DE_CONFIGURATION_DISCORDSRV_CONSULTEZ_LE_WIKI_D'ELITEMOBS_POUR_PLUS_DE_DÉTAILS

```

</details>

---

## EconomySettings.yml

`EconomySettings.yml` contient les paramètres de configuration de l'économie d'EliteMobs.

<details>

<summary><b>Dérouler le tableau</b></summary>

```yml
# Définit si l'économie d'EliteMobs est activée. Cela signifie les pièces d'élite, la possibilité d'acheter et de vendre de l'équipement et la possibilité d'améliorer les rangs de guilde.
# Si cette option est désactivée, les joueurs ne pourront pas progresser dans le plugin !
enableEconomy: true
# Définit la valeur de revente des objets, en % du prix d'origine. 5 correspond à 5 %
itemResaleValue: 5.0
# Définit le nom en jeu de la devise utilisée.
currencyName: Pièces d'élite
# Définit le plugin pour utiliser Vault. CECI N'EST PAS RECOMMANDÉ ! Lisez pourquoi ici : https://github.com/MagmaGuy/EliteMobs/wiki/%5BThird-party-support%5D-Vault
useVault - not recommended: false
# Définit si les élites laisseront tomber des pièces en fonction de leur niveau.
enableCurrencyShower: true
# Définit le multiplicateur de la devise lâchée par les élites.
currencyShowerTierMultiplier: 1.0
# Définit le message envoyé lorsque les joueurs ramassent la devise d'élite.
chatCurrencyShowerMessage: '&7[EM] Vous avez ramassé &a$amount $currency_name !'
# Définit le message de barre d'action envoyé lorsque les joueurs ramassent la devise d'élite.
actionbarCurrencyShowerMessage: '&7[EM] Vous avez ramassé &a$amount $currency_name !'
# Envoie le message que les joueurs reçoivent après avoir pillé la devise. Utile à des fins didactiques.
adventurersGuildNotificationMessages: '&7[EM] De l'argent de poche supplémentaire ? Essayez &a/ag !'
# Définit le taux d'imposition pour les transactions entre les joueurs.
# Fortement recommandé pour des raisons d'équilibre, car les joueurs de haut niveau peuvent gagner jusqu'à 6 fois plus de devises et essayer d'utiliser d'autres joueurs pour contourner les réinitialisations de devises de prestige.
playerToPlayerPaymentTaxes: 0.2
# Message envoyé lors de l'envoi de devise d'élite à d'autres joueurs.
Message de paiement d'économie v2 : '&2Vous avez payé &2$amount_sent $currency_name &2à $receiver&2,
  qui a reçu $amount_received après impôts !'
# Message envoyé après que les joueurs ont envoyé une devise.
Message de la devise restante de l'économie : Il vous reste maintenant &2$amount_left $currency_name
# Message reçu lors de la réception de la devise.
Message d'argent de paiement de l'économie : Vous avez reçu &2$amount_received $currency_name
  &ffrom $sender
# Message envoyé lorsque les joueurs essaient d'envoyer un montant de pièces qu'ils n'ont pas.
Paiement de l'économie devise insuffisante : '&cVous n''avez pas assez de $currency_name pour
  faire ça !'
# /em message de solde
Message de la commande de portefeuille : Vous avez &2$balance $currency_name
# Message de confirmation envoyé lorsque les joueurs essaient d'envoyer une devise à un autre joueur.
Message de confirmation de la taxe : '&cL'envoi d'un paiement coûtera $percentage % d'impôt. &aFaites
  &9$command &apour continuer !'
# Message envoyé lorsqu'un joueur achète dans une boutique.
Message d'achat en boutique : '&aVous avez acheté $item_name &apour $item_value $currency_name !'
# Message envoyé lorsqu'un joueur interagit avec une boutique.
Message du solde actuel de la boutique : '&aVous avez $currency_amount $currency_name.'
# Message envoyé lorsque les joueurs n'ont pas assez de devises pour acheter un article
Message de fonds insuffisants de la boutique : '&cVous n''avez pas assez de $currency_name !'
# Deuxième partie du message envoyé lorsque les joueurs essaient d'acheter un article qu'ils ne peuvent pas se permettre.
Message du coût de l'article de la boutique : Cet article coûte &c$item_value $currency_name.
# Message envoyé lors de la vente d'un article à une boutique.
Message de vente en boutique : '&aVous avez vendu $item_name &apour $currency_amount $currency_name !'
# Message envoyé lors d'une tentative de vente d'un article qui n'appartient pas à ce joueur.
Avertissement d'articles de joueurs de la vente en boutique : '&cVous ne pouvez pas vendre des articles qui ne sont pas actuellement liés à votre âme ! Cela comprend les articles provenant d'autres niveaux de prestige !'
# Message envoyé lors d'une tentative de vente d'un article non-EliteMobs
Instructions de vente en boutique : '&cVous ne pouvez vendre que du butin EliteMobs ici ! (Armure/armes
  laissées par les élites affichant une valeur sur leur texte)'
# Message envoyé lors de la vente d'un lot d'articles d'élite.
shopBatchSellItem: '&aVous avez vendu vos articles &apour $currency_amount $currency_name !'
lootShowerMaterial:
  # Définit le type de matériau de 1 pièce d'élite lâchée.
  '1': GOLD_NUGGET
  '5': GOLD_INGOT
  '10': GOLD_BLOCK
  '20': EMERALD
  '50': EMERALD_BLOCK
  '100': DIAMOND
  '500': DIAMOND_BLOCK
  '1000': NETHER_STAR
lootShowerData:
  # Définit l'ID de modèle personnalisé pour 1 pièce d'élite lâchée. Utilisé par le pack de ressources.
  '1': 1
  '5': 1
  '10': 1
  '20': 1
  '50': 1
  '100': 1
  '500': 1
  '1000': 1
materialWorth:
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  DIAMOND_AXE: 17.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  DIAMOND_BOOTS: 17.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  DIAMOND_CHESTPLATE: 17.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  DIAMOND_LEGGINGS: 17.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  DIAMOND_HELMET: 17.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  DIAMOND_PICKAXE: 17.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  DIAMOND_SHOVEL: 17.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  DIAMOND_SWORD: 17.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  DIAMOND_HOE: 17.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  IRON_AXE: 16.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  IRON_BOOTS: 16.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  IRON_LEGGINGS: 16.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  IRON_CHESTPLATE: 16.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  IRON_HELMET: 16.0
```

</details>
```yml
# Définit la valeur de ce matériau pour le système de devise elitemobs.
  IRON_PICKAXE: 16.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  IRON_SHOVEL: 16.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  IRON_HOE: 16.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  IRON_SWORD: 16.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  SHIELD: 16.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  BOW: 16.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  CHAINMAIL_BOOTS: 15.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  CHAINMAIL_LEGGINGS: 15.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  CHAINMAIL_CHESTPLATE: 15.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  CHAINMAIL_HELMET: 15.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  STONE_SWORD: 15.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  STONE_AXE: 15.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  STONE_PICKAXE: 15.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  STONE_SHOVEL: 15.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  STONE_HOE: 15.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  GOLDEN_AXE: 13.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  GOLDEN_BOOTS: 13.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  GOLDEN_LEGGINGS: 13.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  GOLDEN_CHESTPLATE: 13.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  GOLDEN_HELMET: 13.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  GOLDEN_SWORD: 13.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  GOLDEN_SHOVEL: 13.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  GOLDEN_PICKAXE: 13.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  GOLDEN_HOE: 13.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  GOLDEN_APPLE: 17.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  ENCHANTED_GOLDEN_APPLE: 17.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  LEATHER_BOOTS: 13.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  LEATHER_LEGGINGS: 13.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  LEATHER_CHESTPLATE: 13.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  LEATHER_HELMET: 13.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  WOODEN_SWORD: 13.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  WOODEN_AXE: 13.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  WOODEN_HOE: 13.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  WOODEN_PICKAXE: 13.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  TRIDENT: 17.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  ELYTRA: 17.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  TURTLE_HELMET: 13.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  NETHERITE_AXE: 18.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  NETHERITE_PICKAXE: 18.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  NETHERITE_SHOVEL: 18.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  NETHERITE_HOE: 18.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  NETHERITE_SWORD: 18.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  NETHERITE_HELMET: 18.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  NETHERITE_CHESTPLATE: 18.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  NETHERITE_LEGGINGS: 18.0
  # Définit la valeur de ce matériau pour le système de devise elitemobs.
  NETHERITE_BOOTS: 18.0
  # Définit la valeur par défaut du matériau pour les articles qui ne sont pas définis spécifiquement.
  defaultMaterialWorth: 1.0
```

</details>

---

## events.yml

`events.yml` contient les options de configuration pour les événements.

_**Remarque: ce ne sont que les paramètres globaux de base.**_

Vous pouvez modifier davantage d'événements spécifiques dans le dossier `events`.

<details>

<summary><b>Dérouler le tableau</b></summary>

```yml
# Définit si les événements ne seront diffusés que dans le monde où les événements se produisent.
Diffuser le message d'événement uniquement dans les mondes d'événement : false
# Définit le délai minimum, en minutes, entre les événements chronométrés
actionEventMinimumCooldownMinutes : 240
# Définit si les événements d'action auront lieu.
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#action-events
actionEventsEnabled : true
# Définit si les événements chronométrés auront lieu.
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events
timedEventsEnabled : true
```

</details>

---

## ItemSettings.yml

`ItemSettings.yml` contient les paramètres globaux pour les objets d'élite.

<details>

<summary><b>Dérouler le tableau</b></summary>

```yml
# Définit les caractères préfixés aux enchantements vanille dans la description d'un article.
noItemDurabilityMessage : '&8[EliteMobs] $item &4est cassé ! Il ne fonctionnera pas avant d''être réparé !'
# Définit si un butin d'EliteMobs sera lâché.
# Comprend les pièces d'élite, les objets personnalisés, les objets générés de manière procédurale, tout !
# Non recommandé, rend la progression mmorpg impossible.
doEliteMobsLoot : true
# Définit si le butin généré de manière procédurale aura des couleurs différentes en fonction de la qualité de l'objet.
doMMORPGColorsForItems : true
# Définit si le placement d'objets personnalisés, tels que des bannières ou des blocs, est empêché.
# Ceci est recommandé - les objets personnalisés se brisent lorsqu'ils sont placés et ne peuvent pas être récupérés !
preventCustomItemPlacement : true
# Définit le format de la description pour tous les objets personnalisés d'EliteMobs !
# Les espaces réservés valides sont les suivants :
# $itemLevel - affiche le niveau de l'objet
# $prestigeLevel - affiche le niveau de prestige
# $weaponOrArmorStats - affiche les stats DPS d'élite ou armure d'élite, selon l'objet
# $soulbindInfo - affiche à qui, le cas échéant, l'objet est lié
# $itemSource - affiche la provenance de l'objet, comme un mob ou une boutique
# $ifLore - fait apparaître une ligne uniquement si l'objet a une description personnalisée. S'applique uniquement aux objets personnalisés
# $customLore - affiche l'intégralité de la description personnalisée. S'applique uniquement aux objets personnalisés
# $ifEnchantments - fait apparaître une ligne uniquement si l'objet a des enchantements
# $enchantments - affiche les enchantements de l'objet
# $eliteEnchantments - affiche les enchantements d'élite de l'objet
# $ifCustomEnchantments - affiche les enchantements personnalisés de l'objet
# $customEnchantments - affiche les enchantements personnalisés de l'objet
# $ifPotionEffects - affiche uniquement la ligne si l'objet a des effets de potion
# $potionEffects - affiche les effets de potion de l'objet
# $loreResaleValue - affiche la valeur de l'objet. Peut afficher le prix d'achat ou de vente selon l'endroit où il est consulté
# Important : Plusieurs des espaces réservés peuvent être personnalisés davantage par les paramètres de configuration ci-dessous
itemLoreStructureV2:
- §7§m§l---------§7<§lInfo d'équipement§7>§m§l---------
- '§7Niveau de l'objet : §f$itemLevel §7Prestige §6$prestigeLevel'
- $weaponOrArmorStats
- $soulbindInfo
- $itemSource
- $ifLore§7§m§l-----------§7< §f§lLégende§7 >§m§l-----------
- $customLore
- $ifEnchantments§7§m§l--------§7<§9§lEnchantements§7>§m§l--------
- $enchantments
- $eliteEnchantments
- $ifCustomEnchantments§7§m§l------§7< §3§lEnchantements personnalisés§7 >§m§l------
- $customEnchantments
- $ifPotionEffects§7§m§l----------§7< §5§lEffets§7 >§m§l----------
- $potionEffect
- §7§l§m-----------------------------
- $loreResaleValue
# Définit la description de la provenance de la boutique pour les achats en boutique
shopSourceItemLores : '&7Acheté dans une boutique'
# Définit la description de la provenance de la boutique pour les objets pillés sur les boss
mobSourceItemLores : '&7Pillé sur $mob'
# Définit la description de la valeur de l'objet
loreWorths : '&7Vaut $worth $currencyName'
# Définit la description de la valeur de revente de l'objet
loreResaleValues : '&7Se vend pour $resale $currencyName'
# Définit la chance de base que n'importe quel objet d'élite soit lâché par les mobs d'élite
flatDropRateV3 : 0.2
# Définit la chance de base que n'importe quel objet d'élite soit lâché par les boss régionaux
regionalBossNonUniqueDropRate : 0.05
# Définit si les boss régionaux peuvent lâcher du butin vanille
regionalBossesDropVanillaLoot : false
# Définit dans quelle mesure la chance de lâcher un objet d'élite augmente en fonction du niveau du boss.
# Le niveau du boss est multiplié par cette valeur et ajouté à la chance de base.
# Il n'est plus recommandé d'avoir une valeur supérieure à 0.0 !
levelIncreaseDropRateV2 : 0.0
# Définit la chance pondérée qu'un objet généré de manière procédurale soit lâché.
# Ce système utilise des probabilités pondérées ! Faites des recherches sur Google si vous ne savez pas ce que c'est.
proceduralItemDropWeight : 90.0
# Définit la chance relative qu'un objet pondéré soit lâché.
# Les objets pondérés sont des objets personnalisés qui n'ont pas de poids dynamique, comme des charmes.
weighedItemDropWeight : 1.0
# Définit la chance relative qu'un objet fixe soit lâché. Ce sont des objets personnalisés qui ne sont pas mis à l'échelle.
fixedItemDropWeight : 10.0
# Définit la chance relative qu'un objet limité soit lâché. Ce sont des objets personnalisés qui sont mis à l'échelle jusqu'à un niveau spécifique
limitedItemDropWeight : 3.0
# Définit la chance relative qu'un objet évolutif soit lâché. Ce sont des objets personnalisés qui peuvent être mis à l'échelle à n'importe quel niveau et qui sont les plus courants dans le plugin.
scalableItemDropWeight : 6.0
# Définit le multiplicateur du butin vanille du mob, en fonction du niveau du mob.
defaultLootMultiplier : 0.0
# Définit le niveau maximum du multiplicateur de butin par défaut.
levelCapForDefaultLootMultiplier : 200
# Définit le multiplicateur d'expérience Minecraft vanille lâchée pour le boss, en fonction du niveau du boss.
defaultExperienceMultiplier : 1.0
# Définit le niveau du butin maximum qui sera lâché par EliteMobs. Il est fortement recommandé de le laisser à 200.
maximumItemLevel : 200
# Définit si les enchantements d'élite seront utilisés.
# Les enchantements d'élite remplacent les enchantements vanille lorsque les objets d'élite obtiennent des niveaux d'enchantement qui dépassent les limites vanille.
# Exemple : si une épée d'élite est censée avoir une netteté de niveau 10, étant donné que la limite de Minecraft est le niveau 5, elle aura une netteté de 5 et une netteté d'élite de 5.
# La netteté d'élite n'affecte que les mobs engendrés par EliteMobs. Cela est fait pour que le JcJ et le combat vanille ne deviennent pas déséquilibrés.
useEliteEnchantments : true
# Définit le nom d'affichage qui sera utilisé pour les enchantements d'élite dans la description des objets.
eliteEnchantmentLoreStrings : Élite
# Définit si EliteMobs considérera les houes comme des armes valides pour les calculs de dégâts.
useHoesAsWeapons : false
# Définit si EliteMobs fera apparaître des particules spéciales sur les objets lâchés de haute qualité.
enableRareItemParticleEffects : true
# Définit les symboles qui seront utilisés dans la description des objets pour indiquer qu'un effet de potion s'applique lors d'une frappe à l'entité qui est touchée.
potionEffectOnHitTargetLore : '&4⚔☠'
# Définit les symboles qui seront utilisés dans la description des objets pour indiquer qu'un effet de potion s'applique lors d'une frappe au joueur qui frappe.
potionEffectOnHitSelfLore : '&9⚔🛡'
# Définit les symboles qui seront utilisés dans la description des objets pour indiquer qu'un effet de potion continuera de s'appliquer tant que le joueur l'utilisera.
potionEffectContinuousLore : '&6⟲'
# Définit les caractères préfixés aux enchantements d'élite dans la description des objets.
eliteEnchantmentLoreColor : '&9◇'
# Définit les caractères préfixés aux enchantements vanille dans la description des objets.
vanillaEnchantmentLoreColor : '&7◇'
# Définit les caractères préfixés aux enchantements personnalisés dans la description des objets.
customEnchantmentColor : '&3◇'
# Définit les caractères préfixés aux effets de potion dans la description des objets.
potionEffectLoreColor : '&5◇'
# Définit le texte qui apparaîtra sur l'objet si l'objet n'est pas lié à une âme.
noSoulbindLore : '&7Non lié à l''âme !'
# Définit si les objets d'élite peuvent être enchantés par des moyens vanille. Ceci n'est pas recommandé, car EliteMobs a son propre système d'enchantements personnalisés avec son propre équilibre !
preventEliteItemEnchantment : true
# Définit si les objets d'élite peuvent être désenchantés par des moyens vanille.
preventEliteItemDisenchantment : true
# Définit le message qui apparaît pour les joueurs lorsqu'ils tentent de désenchanter un objet et que cela n'est pas autorisé.
preventEliteItemDisenchantmentMessage : '&c[EliteMobs] Impossible de désenchanter les objets d''élite !'
# Définit si les objets d'élite peuvent être mis à niveau du diamant au netherite par des moyens vanille. Non recommandé !
preventEliteItemDiamondToNetheriteUpgrade : true
# Définit si les objets d'élite ne perdront de la durabilité qu'à la mort.
# Il s'agit d'un système important pour EliteMobs, et il est fortement recommandé, car les combats de haut niveau sont presque impossibles sans lui !
eliteItemsDurabilityLossOnlyOnDeath : true
# Définit le multiplicateur de perte de durabilité pour les objets d'élite s'il est réglé pour perdre de la durabilité à la mort.
# Les valeurs comprises entre 0.0 et 1.0 abaissent la perte de durabilité et les valeurs supérieures à 1.0 l'augmentent.
# Exemple : 0.5 inflige 50 % de la perte de durabilité, 2.0 inflige 200 % de la perte de durabilité.
eliteItemsDurabilityLossMultiplier : 1.0
# Définit le message qui apparaît lorsque la mise au rebut d'un objet réussit.
scrapSucceededMessageV2 : '&8[EliteMobs] &2Mise au rebut réussie $amount fois !'
# Définit le message qui apparaît lorsque la mise au rebut d'un objet échoue.
scrapFailedMessageV2 : '&8[EliteMobs] &cMise au rebut échouée $amount fois !'
# Définit si le butin d'élite doit être placé directement dans l'inventaire des joueurs.
putLootDirectlyIntoPlayerInventory : false
# Définit la différence de niveau maximale que les joueurs peuvent avoir avant de ne plus pouvoir piller des objets de niveau trop bas.
# Ceci est calculé en fonction du niveau moyen du butin que le joueur porte.
# Par exemple, si cette valeur est définie à 10 et qu'un joueur a un équipement de niveau 50, il ne pourra pas farmer des boss de niveau 39.
lootLevelDifferenceLockout : 10
# Définit si EliteMobs empêchera les objets d'élite de se briser lors de l'utilisation du système de perte de durabilité à la mort.
# Les joueurs ne pourront de toute façon pas utiliser les objets qui n'ont plus de durabilité, c'est simplement pour éviter la perte accidentelle d'objets de haut niveau mais de faible durabilité.
preventEliteItemsFromBreaking : true
# Définit le niveau minimum, +7, des boss qui peuvent lâcher de l'équipement en diamant généré de manière procédurale dans EliteMobs.
# Il n'y a pas d'équipement en netherite généré de manière procédurale dans EliteMobs, seulement du butin personnalisé.
minimumProcedurallyGeneratedDiamondLootLevelPlusSeven : 10
# Définit le message affiché dans le chat lors d'un lancer de butin réussi via la commande /em simloot <niveau> <fois>.
simlootMessageSuccess : '&8[EliteMobs] &2A lancé le butin et a obtenu $itemName &2 !'
# Définit le message affiché dans le chat lors d'un échec de lancement de butin via la commande /em simloot <niveau> <fois>.
simlootMessageFailure : '&8[EliteMobs] &cA lancé le butin et n'a rien obtenu !'
# Définit le message que les joueurs reçoivent lorsque le butin d'élite est déposé directement dans leur inventaire.
directDropCustomLootMessage : '&8[EliteMobs] &2A obtenu $itemName &2 !'
# Définit le message que les joueurs reçoivent lorsque le butin vanille est déposé directement dans leur inventaire.
directDropMinecraftLootMessage : '&8[EliteMobs] &aA obtenu $itemName &a !'
# Définit le message que les joueurs reçoivent lorsque les pièces d'élite sont déposées directement dans leur inventaire.
directDropCoinMessage : '&8[EliteMobs] &aA obtenu &2$amount $currencyName &a !'
# Définit si EliteMobs masquera les attributs vanille de Minecraft.
hideItemAttributes : true
# Définit l'entrée de description spécifique à l'arme sur un objet d'élite. L'espace réservé $EDPS est remplacé par le DPS d'élite (dégâts par seconde) de l'arme.
weaponEntry : '&7DPS d''élite : &2$EDPS'
# Définit l'entrée de description spécifique à l'armure sur un objet d'élite. L'espace réservé $EDEF est remplacé par la DEF d'élite (défense) de l'arme.
armorEntry : '&7Armure d''élite : &2$EDEF'
# Définit le message envoyé lorsqu'un joueur tue un boss, mais que le niveau de l'équipement est trop différent du niveau du boss pour obtenir des pièces
levelRangeTooDifferent : '&8EM] &4Votre équipement est de niveau $playerLevel et le boss est de niveau
  $bossLevel, la différence de niveau est trop élevée pour obtenir des pièces !'
```

</details>

---

## MobCombatSettings.yml

`MobCombatSettings.yml` contient toutes les options de configuration liées au système de combat personnalisé et la
plupart des options de configuration généralement liées au fonctionnement des mobs d'élite.

<details>

<summary><b>Dérouler le tableau</b></summary>

```yml
# Définit si les élites engendrées naturellement apparaîtront. Remarque : les mobs d'événements comme le roi zombie ne sont pas des élites engendrées naturellement ! Vous devrez désactiver les événements si vous souhaitez désactiver les boss d'événements.
doNaturalEliteMobSpawning : true
# Définit si les engendreurs engendrés à partir de mobs peuvent être convertis en élites. Non recommandé !
doSpawnersSpawnEliteMobs : false
# Définit le pourcentage de mobs engendrés naturellement qui sont convertis en mobs d'élite.
eliteMobsSpawnPercentage : 0.05
# Définit la portée du super mob pour analyser l'empilement des super mobs
superMobStackRange : 15
# Définit le niveau maximal auquel les élites peuvent apparaître.
# Remarque : le niveau de mob d'élite est basé sur l'armure et les armes que les joueurs portent, et l'armure n'est mise à l'échelle que jusqu'au niveau 200.
naturalEliteMobsLevelCap : 250
# Définit si les élites porteront une armure en fonction de leur niveau. Ceci n'est qu'à des fins visuelles et n'affecte pas le combat.
doElitesWearArmor : true
# Définit si les élites porteront des casques en fonction de leur niveau. Cela les empêchera de brûler facilement pendant la journée.
doElitesWearHelmets : true
# Définit si les élites auront des traînées visuelles autour d'elles pour avertir les joueurs des joueurs qu'elles ont.
doNaturalEliteMobVisualEffects : true
# Définit si les élites engendrées à partir d'engendreurs effectueront des effets visuels.
doSpawnerEliteMobVisualEffects : false
# Définit si certains pouvoirs effectueront la phase d'avertissement du pouvoir. Ceci est très important, car les phases d'avertissement signifient généralement que le pouvoir peut être esquivé, et l'effet visuel permet aux joueurs de savoir où esquiver.
doPowerBuildupVisualEffects : true
# Définit si des messages de mort personnalisés seront utilisés lorsque les joueurs meurent à cause des élites.
doCustomEliteMobsDeathMessages : true
# Définit si EliteMobs affichera les indicateurs de santé des élites.
doDisplayMobHealthOnHit : true
# Définit si EliteMobs affichera les indicateurs de dégâts pour les dégâts infligés aux élites.
doDisplayMobDamageOnHit : true
# Définit si le niveau des élites augmentera en fonction de la distance par rapport à l'apparition.
# Il s'agit d'une valeur ajoutée en plus de leur niveau normal, ce qui signifie que si un joueur porte un équipement de niveau 100 près de l'apparition et que le boss a un niveau de plus en raison de la distance par rapport à l'apparition, le boss apparaîtra au niveau 101.
# Cette option n'est généralement pas recommandée, surtout si vous avez un système de téléportation aléatoire sur votre serveur.
doIncreaseEliteMobLevelBasedOnSpawnDistance : false
# Définit la distance entre les incréments de niveau pour les augmentations de niveau basées sur la distance.
distanceBetweenIncrements : 100.0
# Définit le nombre de niveaux qui augmentent à chaque incrément de distance pour les augmentations de niveau basées sur la distance.
levelIncreaseAtIncrements : 1.0
# Définit si les pouvoirs des élites seront masqués jusqu'à ce qu'ils entrent en combat. Ceci est recommandé pour des raisons de performance.
hideEliteMobPowersUntilAggro : true
# Définit le multiplicateur des dégâts infligés à tous les boss engendrés par EliteMobs, à l'exception de ceux qui utilisent le système de dégâts normalisé (boss de donjon régionaux). Des valeurs plus élevées augmentent les dégâts infligés, ce qui rend les boss plus faciles à tuer.
# 2.0 = 200 %, 0.5 = 50 %
damageToEliteMobMultiplierV2 : 1.0
# Définit le multiplicateur des dégâts infligés aux joueurs par les élites. Des valeurs plus élevées augmentent la quantité de dégâts infligés par les boss, à l'exception de ceux qui utilisent le système de dégâts normalisé (boss de donjon régionaux), ce qui rend les boss plus difficiles à frapper.
# 2.0 = 200 %, 0.5 = 50 %
damageToPlayerMultiplierV2 : 1.0
# Définit si les boss spéciaux peuvent être suivis.
showCustomBossLocation : true
# Définit le message envoyé aux joueurs pour suivre l'emplacement d'un boss.
bossLocationMessage : '&7[EM] &2[Cliquez pour suivre !]'
# Définit les commandes qui s'exécutent lorsqu'une élite meurt. Les espaces réservés valides sont :
# $level pour le niveau du boss
# $name pour le nom du boss
# $players exécutera la commande pour chaque joueur ayant participé à la mise à mort. Par exemple, si Bob et Steve ont tué un boss, « broadcast $players a tué le boss ! » exécutera « bob a tué le boss » et « steve a tué le boss ! »
commandsOnEliteMobDeath: []
```

</details>
```yml
# Définit le message envoyé aux joueurs qui participent aux grandes mises à mort de boss.
bossKillParticipationMessage: '&eVos dégâts : &2$playerDamage'
# Définit si les boss régénèrent leur santé lorsqu'ils sortent du combat. Fortement recommandé.
regenerateCustomBossHealthOnCombatEnd: true
# Définit le message envoyé aux joueurs qui essaient de suivre les boss actuellement dans un autre monde.
defaultOtherWorldBossLocationMessage: '$name : Dans un autre monde !'
# Définit le préfixe ajouté aux indicateurs de dégâts lorsque les joueurs frappent un boss avec quelque chose contre lequel le boss est faible.
weakTextColor: '&9'
# Définit le préfixe ajouté aux indicateurs de dégâts lorsque les joueurs frappent un boss avec quelque chose contre lequel le boss est fort.
resistTextColor: '&c'
# Définit le message qui apparaît lorsque les joueurs frappent le boss avec quelque chose contre lequel le boss est faible.
weakText: '&9&lFaible !'
# Définit le message qui apparaît lorsque les joueurs frappent le boss avec quelque chose contre lequel le boss est fort.
resistText: '&c&lRésiste !'
# Définit si des effets visuels seront utilisés pour montrer qu'un boss est faible contre une attaque.
doWeakEffect: true
# Définit si des effets visuels seront utilisés pour montrer qu'un boss est fort contre une attaque.
doResistEffect: true
# Définit le multiplicateur des dégâts infligés aux boss à l'aide du système de dégâts normalisé (boss de donjon régionaux). Des valeurs plus élevées augmentent les dégâts infligés, ce qui rend les boss plus faciles à tuer.
# 2.0 = 200 %, 0.5 = 50 %
damageToEliteMobMultiplier: 1.0
# Définit le multiplicateur des dégâts infligés aux joueurs par les boss à l'aide du système de dégâts normalisé (boss de donjon régionaux). Des valeurs plus élevées augmentent la quantité de dégâts infligés par les boss, ce qui rend les boss plus difficiles à frapper.
# 2.0 = 200 %, 0.5 = 50 %
damageToPlayerMultiplier: 1.0
# Définit les dégâts de référence pour les boss personnalisés à l'aide des dégâts normalisés (généralement les boss régionaux).
normalizedRegionalBossBaselineDamageV2: 3.0
# Définit la santé de référence pour les boss personnalisés à l'aide de la santé normalisée (généralement les boss régionaux).
normalizedRegionalBossBaselineHealthV3: 4.0
# Définit si les boss régionaux utiliseront le système de combat normalisé.
# Ceci est très fortement recommandé et le contenu préfabriqué ne sera pas équilibré correctement s'il est modifié.
normalizeRegionalBosses: true
# Définit le message qui apparaît lorsqu'un boss se soigne après être sorti du combat.
fullHealMessage: '&2SOINS COMPLETS !'
# Définit les multiplicateurs appliqués aux attaques contre lesquelles les boss sont forts et faibles.
strengthAndWeaknessDamageMultipliers: 2.0
# Définit le multiplicateur appliqué à la réduction des dégâts de l'effet de potion de résistance pour les joueurs.
resistanceDamageMultiplier: 1.0
# Définit le multiplicateur appliqué à la réduction des dégâts lorsqu'un joueur tient un bouclier pour les attaques de mêlée (pouvoirs exclus).
blockingDamageReduction: 0.8
```

</details>

---

## ProceduralItemGenerationSettings.yml

`ProceduralItemGenerationSettings.yml` contient toutes les options de configuration pour configurer les objets générés
de manière procédurale.

<details>

<summary><b>Dérouler le tableau</b></summary>

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
- $verb $itemType du $adjective $noun
- $itemType du $adjective $noun
- $noun's $adjective $verb $itemType
- $verb $itemType
- $adjective $verb $itemType
- Le $verb-er
- Le $adjective $verb-er
nouns:
- MagmaGuy
- Aube
...
adjectives:
- Adorable
- Beau
...
verbs:
- Tranchant
- Coupant
...
verb-ers (noun):
- Briseur de monde
- Briseur du monde
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

---

## ValidWorlds.yml

`ValidWorlds.yml` contient la liste des mondes qu'EliteMobs a détectés, ainsi que des options pour personnaliser les
fonctionnalités d'EliteMobs sur ces mondes.

<details>

<summary><b>Dérouler le tableau</b></summary>

```yml
# Définit la liste des mondes basés sur des zones.
# LE MODE DE JEU BASÉ SUR DES ZONES EST OBSOLÈTE ET SERA BIENTÔT SUPPRIMÉ !
zoneBasedWorlds: []
# Définit la liste des mondes en mode cauchemar.
# Les mondes en mode cauchemar sont un mode de jeu où les jours sont plus courts et où les joueurs ne peuvent pas dormir.
# Les mondes en mode cauchemar ont également un plus grand nombre d'apparitions d'élite.
# https://github.com/MagmaGuy/EliteMobs/wiki/%5BGame-Mode%5D-Nightmare-mode
nightmareWorlds: []
Mondes valides :
  world: true
  world_nether: true
  world_the_end: true
```

</details>

---

## Arenas.yml

`Arenas.yml` contient les messages et paramètres par défaut pour les arènes que vous pouvez modifier.

<details>

<summary><b>Dérouler le tableau</b></summary>

```yml
# Message qui apparaît lorsqu'il n'y a pas assez de joueurs pour démarrer une arène.
notEnoughPlayersMessage: '&8[EliteMobs] &cVous avez besoin d'au moins $amount pour commencer le match !'
# Titre qui apparaît lorsqu'une arène démarre.
startingMessage: '&2Démarrage !'
# Sous-titre qui apparaît lorsqu'une arène démarre.
startingSubtitle: '&2dans $count...'
# Message qui apparaît lorsqu'une arène est pleine.
arenaFullMessage: '&4[EliteMobs] &cL'arène est pleine ! Vous pouvez regarder en spectateur pendant que vous
  attendez qu'elle se termine !'
# Message qui apparaît lorsqu'un joueur tente de rejoindre une arène active.
arenasOngoingMessage: '&4[EliteMobs] &cImpossible de rejoindre l'arène maintenant : un match est en cours ! Vous pouvez regarder en spectateur pendant que vous
  attendez qu'elle se termine !'
# Message qui apparaît pour rappeler aux joueurs comment démarrer une arène après avoir rejoint en tant que joueur.
instanceStartHintMessage: '&2[EliteMobs] &aVous pouvez démarrer l'instance en faisant &2/em
  start'
# Message qui apparaît pour rappeler aux joueurs comment quitter une arène.
instanceQuitHintMessage: '&4[EliteMobs] &cVous pouvez quitter l'instance en faisant &4/em
  quit'
# Message qui apparaît lorsque les joueurs rejoignent une arène.
arenaJoinPlayerMessage: "&2[EliteMobs] &aVous pouvez démarrer l'arène en faisant &2/em start\
  \ &as'il y a au moins &2$count &ajoueurs dedans ! \nVous pouvez quitter l'arène en\
  \ faisant &c/em quit"
# Message qui apparaît pour rappeler aux joueurs comment quitter une arène après avoir rejoint en tant que spectateur.
arenaJoinSpectatorMessage: '&2[EliteMobs] &aVous pouvez quitter l'arène à tout moment en utilisant
  &2/em quit'
# Message de titre qui apparaît lorsqu'une vague commence.
waveTitle: '&aVague &2$wave'
# Message de sous-titre qui apparaît lorsqu'une vague commence.
waveSubtitle: ''
# Titre qui apparaît lorsqu'une arène est terminée.
victoryTitle: '&2Victoire !'
# Sous-titre qui apparaît lorsqu'une arène est terminée.
victorySubtitle: '&aTerminé &2$wave &avagues !'
# Titre qui apparaît lorsque les joueurs échouent dans une arène.
defeatTitle: '&4Défaite !'
# Sous-titre qui apparaît lorsque les joueurs échouent dans une arène.
defeatSubtitle: '&cAtteint la vague &4$wave&c !'
# Message diffusé lorsque les joueurs gagnent une arène.
victoryBroadcast: L'arène $arenaName a été conquise par $players !
# Titre qui apparaît lorsqu'un joueur rejoint une arène.
joinPlayerTitle: '&aCommencez avec &2/em start &a !'
# Sous-titre qui apparaît lorsqu'un joueur rejoint une arène.
joinPlayerSubtitle: '&cQuittez avec &4/em quit &c !'
# Titre qui apparaît lorsqu'un spectateur rejoint une arène.
joinSpectatorTitle: '&aRegarde maintenant !'
# Sous-titre qui apparaît lorsqu'un spectateur rejoint une arène.
joinSpectatorSubtitle: '&cQuittez avec &4/em quit &c !'
# Définit le message envoyé aux joueurs s'ils n'ont pas l'autorisation d'entrer dans une arène.
noArenaPermissionMessage: '[EliteMobs] Vous n''avez pas l''autorisation d''entrer dans cette arène !'
```

</details>

---

## Database.yml

`Database.yml` comprend les paramètres qui définissent la façon dont EM gère les bases de données.

<details>

<summary><b>Dérouler le tableau</b></summary>

```yml
# Définit si MySQL sera utilisé. Par défaut, EliteMobs utilise SQLite. Si vous souhaitez utiliser MySQL, vous aurez besoin d'une configuration MySQL valide.
useMySQL: false
# L'hôte de votre base de données MySQL
mysqlHost: localhost
# Le port de votre base de données MySQL
mysqlPort: '3306'
# Le nom de la base de données
mysqlDatabaseName: elitemobs
# Le nom d'utilisateur pour MySQL
mysqlUsername: votre_nom_utilisateur_mysql_ici
# Le mot de passe pour votre base de données MySQL
mysqlPassword: votre_mot_de_passe_mysql_ici
# Faut-il utiliser SSL ?
useSSL: true
```

</details>

---

## dungeons.yml

`dungeons.yml` comprend des paramètres qui vous permettent d'ajuster les messages qui apparaissent dans les donjons et
d'autres paramètres tels que les multiplicateurs de dégâts pour les effets appliqués.

<details>

<summary><b>Dérouler le tableau</b></summary>

```yml
# Définit le multiplicateur de dégâts pour les dégâts de poison dans les donjons
# Ceci est important pour l'équilibre, car par défaut, les dégâts sont un peu trop élevés pour les donjons tels que nous les concevons.
poisonDamageMultiplier: 0.5
# Définit le multiplicateur de dégâts pour les dégâts de feu dans les donjons
# Ceci est important pour l'équilibre, car par défaut, les dégâts sont un peu trop élevés pour les donjons tels que nous les concevons.
fireDamageMultiplier: 0.5
# Définit le multiplicateur de dégâts pour les dégâts de flétrissure dans les donjons
# Ceci est important pour l'équilibre, car par défaut, les dégâts sont un peu trop élevés pour les donjons tels que nous les concevons.
witherDamageMultiplier: 0.5
# Définit si le JcJ sera autorisé dans les donjons
friendlyFireInDungeons: false
# Définit le texte qui apparaît au-dessus des bannières de résurrection dans les donjons
dungeonRezInstructions: '&aFrapper pour réanimer !'
# Définit le texte qui indique combien de vies il reste aux joueurs dans un donjon ! Espaces réservés :
# $amount - le nombre de vies restantes
dungeonLivesLeftText: '&c$amount vies restantes !'
# Définit le texte pour rejoindre un donjon en tant que joueur ! Espaces réservés :
# $dungeonName - le nom du donjon
joinDungeonAsPlayerText: '&fRejoindre $dungeonName en tant que joueur !'
# Définit le texte pour rejoindre un donjon en tant que spectateur ! Espaces réservés :
# $dungeonName - le nom du donjon
joinDungeonAsSpectatorText: '&fRejoindre $dungeonName en tant que spectateur !'
# Définit le titre qui s'affichera dans la description des objets des menus de donjon instanciés
# $difficulty est l'espace réservé au nom de la difficulté dans le fichier de configuration du donjon
instancedDungeonTitle: Démarrer le donjon de difficulté $difficulty !
# Définit la description qui s'affichera dans la description des objets des menus de donjon instanciés
# $dungeonName est l'espace réservé au nom du donjon dans le fichier de configuration du donjon
instancedDungeonDescription:
- '&fCréer une nouvelle instance du donjon'
- $dungeonName &fpour vous et peut-être
- '&fquelques amis !'
# Définit si le visionnage du contenu instancié sera disponible.
allowSpectatorsInInstancedContent: true
# Définit le message qui apparaît lorsqu'un donjon instancié est terminé
instancedDungeonCompleteMessage: '[EliteMobs] Donjon terminé ! Il s'autodétruira
  dans 2 minutes !'
# Définit le message qui apparaît lorsqu'un donjon instancié se ferme
instancedDungeonClosingInstanceMessage: '[EliteMobs] Fermeture de l'instance !'
```

</details>

---

## Quests.yml

`Quests.yml` comprend les paramètres pour les quêtes et les messages qui sont affichés.

<details>

<summary><b>Dérouler le tableau</b></summary>

```yml
# Définit si les quêtes doivent être remises aux donneurs de quêtes pour terminer la quête.
requireQuestTurnIn: true
# Définit le message envoyé lorsqu'une quête est acceptée.
questJoinMessage: '&aVous avez accepté la quête $questName &a !'
# Définit le message envoyé lorsqu'une quête est abandonnée.
questLeaveMessage: '&cVous avez abandonné la quête $questName &c !'
# Définit le message envoyé lorsqu'une quête est terminée.
questCompleteMessage: '&2Vous avez terminé la quête $questName &2 !'
# Définit le message envoyé lorsqu'un joueur essaie d'abandonner une quête alors qu'il n'y en a aucune d'active.
leaveWhenNoActiveQuestsExist: '&cVous n''avez actuellement aucune quête active !'
# Définit le message de confirmation envoyé lorsque les joueurs essaient de quitter une quête.
questLeaveConfirmationMessage: '&cÊtes-vous sûr de vouloir abandonner votre quête actuelle ?
  Faites &a/em confirm &c pour confirmer votre choix !'
# Définit si certains des messages relatifs aux quêtes utiliseront des titres au lieu de messages de chat.
useQuestAcceptTitles: true
# Définit le titre envoyé lorsqu'un joueur commence une quête.
questStartTitle: '&aQuête acceptée !'
# Définit le sous-titre envoyé lorsqu'un joueur commence une quête.
questStartSubtitle: $questName
# Définit si des titres seront envoyés lorsque les joueurs terminent une quête.
useQuestCompleteTitles: true
# Définit le titre envoyé lorsqu'un joueur termine une quête.
questCompleteTitle: '&2Quête terminée !'
# Définit le sous-titre envoyé lorsqu'un joueur termine une quête.
questCompleteSubtitle: $questName
# Définit si des titres sont envoyés lorsque les joueurs quittent une quête.
useQuestLeaveTitles: true
# Définit le titre envoyé lorsqu'un joueur quitte une quête.
questLeaveTitle: '&cQuête abandonnée !'
# Définit le sous-titre envoyé lorsqu'un joueur quitte une quête.
questLeaveSubtitle: $questName
# Définit si des messages sont envoyés sur le chat pour signaler la progression des objectifs de quête.
doQuestChatProgression: true
# Définit les codes de couleur pour les objectifs terminés.
ongoingQuestColorCode: '&2'
# Définit le format des messages de progression des quêtes de mise à mort.
killQuestChatProgressionMessage: '&8[EliteMobs]&c➤Tuer $name:$color$current&0/$color$target'
# Définit le format des messages de progression des quêtes de récupération.
fetchQuestChatProgressionMessage: '&8[EliteMobs]&c➤Obtenir $name:$color$current&0/$color$target'
# Définit le format des messages de progression des quêtes de dialogue.
dialogQuestChatProgressionMessage: '&8[EliteMobs]&c➤Parler à $name:$color$current&0/$color$target'
# Définit le nombre maximal de quêtes acceptées qu'un joueur peut avoir.
maximumActiveQuests: 10
# Définit le message envoyé aux joueurs lorsqu'ils essaient d'accepter un nombre de quêtes qui dépasse le maximum de quêtes actives.
questCapMessage: '&8[EliteMobs] &cVous avez atteint le nombre maximal de quêtes actives
  (10) ! &4Abandonnez ou terminez au moins une quête active si vous voulez obtenir plus de quêtes !'
# Définit si les messages de tableaux de bord seront utilisés pour les quêtes.
useQuestScoreboards: true
# Définit le format des messages de progression des tableaux de bord des quêtes de mise à mort.
killQuestScoreboardProgressionMessage: '&c➤Tuer $name:$color$current&0/$color$target'
# Définit le format des messages de progression des tableaux de bord des quêtes de récupération.
fetchQuestScoreboardProgressionMessage: '&c➤Obtenir $name:$color$current&0/$color$target'
# Définit le format des messages de progression des tableaux de bord des quêtes de dialogue.
dialogQuestScoreboardProgressionMessage: '&c➤Parler à $name:$color$current&0/$color$target'
questEntityTypes:
- BLAZE
- CAVE_SPIDER
- DROWNED
- ELDER_GUARDIAN
- ENDERMAN
- ENDERMITE
- EVOKER
- GHAST
- GUARDIAN
- HUSK
- ILLUSIONER
- IRON_GOLEM
- PILLAGER
- RAVAGER
- SILVERFISH
- SKELETON
- SPIDER
- STRAY
- VINDICATOR
- WITCH
- WITHER_SKELETON
- WOLF
- ZOMBIE
- HOGLIN
- ZOGLIN
- PIGLIN_BRUTE
- PIGLIN
- ZOMBIFIED_PIGLIN
# Définit le message envoyé aux joueurs pour activer le suivi des quêtes.
chatTrackMessage: '&8[EliteMobs]&2 Cliquez ici pour suivre votre quête !'
# Définit le message de survol du message de suivi de quête.
chatTrackHover: '&2Cliquez pour suivre !'
# Définit la commande envoyée lorsque vous cliquez sur le message de suivi. Vous ne devriez vraiment pas modifier cela.
chatTrackCommand: /elitemobs quest track $questID
# Définit le message envoyé aux joueurs lors de l'activation du suivi de quête.
chatTrackingMessage: '&8[EliteMobs]&9 Vous suivez maintenant une quête !'
# Définit le message de survol du message d'activation du suivi de quête.
chatTrackingHover: '&2Cliquez pour arrêter/suivre ! /em -> Quêtes pour suivre une quête différente !'
# Définit la commande envoyée lorsque vous cliquez sur le message d'activation du suivi de quête. Vous ne devriez vraiment pas modifier cela.
chatTrackingCommand: /elitemobs quest track $questID
# Définit si les quêtes sont automatiquement suivies lorsqu'elles sont acceptées.
autoTrackQuestsOnAccept: true
# Définit le message qui apparaît lorsque la destination de la quête n'a pas pu être trouvée.
noQuestDestinationFound: '[EM] Aucune destination de quête trouvée !'
# Définit le message qui apparaît lorsque la cible de la quête se trouve dans un autre monde.
questDestinationInOtherWorld: '[EM] Aller au monde $world !'
# Définit le message envoyé aux joueurs lorsqu'ils essaient d'accepter une quête qu'ils ont déjà terminée.
questAlreadyCompletedMessage: '&8[EliteMobs] &cVous avez déjà terminé cette quête !'
# Définit le message envoyé aux joueurs lorsqu'ils essaient d'accepter une quête pour laquelle ils n'ont pas l'autorisation.
questPrerequisitesMissingMessage: '&8[EliteMobs] &cCe PNJ a des quête(s) que vous
  ne pouvez pas encore accepter !'
# Définit le message envoyé aux joueurs qui essaient d'obtenir une quête pour laquelle ils n'ont pas le bon rang de guilde activé.
lowRankDynamicQuestWarning: '&8[EliteMobs] &cVous ne pouvez pas accepter ces quêtes avec votre
  rang de guilde actuel ! Augmentez votre rang de guilde pour accepter ces quêtes.'
# Définit le format du message de remise de quête.
questTurnInObjective: '&a2Parler à $npcName'
# Définit le nombre maximal de caractères que les menus basés sur l'inventaire pour les quêtes auront avant de casser la ligne.
horizontalCharacterLimitBedrockMenu: 30
# Définit le nombre maximal de caractères par entrée d'élément dans les menus basés sur l'inventaire pour les quêtes avant de créer un autre élément pour continuer l'entrée.
itemEntryCharacterLimitBedrockMenu: 300
```

</details>

---

## resource_pack_config.yml

`resource_pack_config.yml` comprend les paramètres relatifs au pack de ressources EliteMobs.

<details>

<summary><b>Dérouler le tableau</b></summary>

```yml
eliteMobsResourcePackEnabled: false
forceResourcePack: false
resourcePackPrompt: '[EliteMobs] L'utilisation du pack de ressources est fortement recommandée !'
resourcePackLink: https://www.magmaguy.com/downloads/elitemobs_resource_pack.zip
```

</details>

---

## Sounds.yml

`Sounds.yml` comprend les paramètres qui définissent quels sons doivent être lus lorsque certaines interactions
EliteMobs sont effectuées. Les fichiers sonores sont stockés dans le pack de ressources.

<details>

<summary><b>Dérouler le tableau</b></summary>

```yml
# Définit le son qui sera joué lorsqu'un coffre au trésor s'ouvre
treasureChestOpenSound: elitemobs:treasure_chest.open
# Définit le son qui sera joué lorsqu'un joueur monte de rang à la guilde
guildRankUpSound: elitemobs:guild.rankup
# Définit le son qui sera joué lorsqu'un joueur monte en prestige à la guilde
guildPrestigeSound: elitemobs:guild.prestige
# Définit le son qui sera joué lorsqu'un joueur progresse dans une quête
questProgressionSound: elitemobs:quest.progression
# Définit le son qui sera joué lorsqu'un joueur termine une quête
questCompleteSound: elitemobs:quest.completion
# Définit le son qui sera joué lorsqu'un joueur abandonne une quête
questAbandonSound: elitemobs:quest.abandon
# Définit le son qui sera joué lorsqu'un joueur accepte une quête
questAcceptSound: elitemobs:quest.accept
```

</details>

---

## Wormholes.yml

`Wormholes.yml` comprend les paramètres pour les téléportations par trou de ver d'EliteMobs.

<details>

<summary><b>Dérouler le tableau</b></summary>

```yml
# Définit le message qui apparaît lorsqu'une téléportation est utilisée pour un donjon qui n'est pas installé.
dungeonNotInstalledMessage: '&8[EliteMobs] &cLe donjon $dungeonID &cn'est pas installé !
  Cette téléportation ne fonctionnera pas.'
# Définit le message qui apparaît lorsqu'un trou de ver est utilisé pour un donjon qui n'est pas installé.
defaultPortalMissingMessage: '&8[EliteMobs] &cCe portail ne semble mener nulle part !'
# Définit si le mode de particules réduit pour les trous de ver est utilisé. Ceci est particulièrement recommandé si vous autorisez les clients Bedrock.
reducedParticlesMode: true
# Définit si les trous de ver n'utilisent pas du tout de particules. Non recommandé, mais pourrait être nécessaire pour les clients Bedrock vraiment mauvais.
noParticlesMode: false
# Définit le message qui est envoyé lorsqu'un joueur essaie d'utiliser un trou de ver, mais qu'il n'a pas assez de devises pour l'utiliser.
insufficientCurrencyForWormholeMessage: '&8[EliteMobs] &cDevise insuffisante ! Vous
  avez besoin de $amount pour utiliser ce trou de ver !'
```

</details>
