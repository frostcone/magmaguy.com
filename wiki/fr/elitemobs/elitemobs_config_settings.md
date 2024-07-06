# Valeurs par défaut de la configuration d'EliteMobs

**EliteMobs est livré avec les valeurs par défaut recommandées installées par défaut. Si vous modifiez les choses au hasard, vous risquez de détériorer l'expérience globale.**

_**EliteMobs est fourni à tous les utilisateurs avec les paramètres par défaut recommandés. Si vous modifiez des éléments au hasard, puis demandez de l'aide, il y a de fortes chances qu'on vous demande de réinitialiser vos fichiers de configuration. Les modifications du plugin doivent provenir de tests en jeu et non de simples suppositions.**_

## Démarrage

EliteMobs offre actuellement une vaste gamme d'options de configuration en raison de la forte demande de personnalisation. Pour que cette page wiki soit concise, seules les configurations par défaut seront affichées. 

Si vous souhaitez en savoir plus sur un paramètre spécifique, vous pouvez vous référer au fichier de configuration et consulter les commentaires.

---

## config.yml

`config.yml` contient principalement des paramètres aléatoires qui ne pouvaient pas être placés ailleurs au moment de leur création. C'est le fichier de configuration le plus susceptible de voir des changements entre les versions.

<div align="left">

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Définit le fichier de langue utilisé par EliteMobs
# Ne modifiez PAS ceci manuellement ! Il est destiné à être installé avec la commande '/em language <fichier_de_langue>'
language: english
# Définit si les élites et les boss générés par elitemobs afficheront toujours leurs étiquettes de nom.
# Non recommandé !
alwaysShowEliteMobNameTags: false
# Définit le nombre de mobs passifs qui doivent être à proximité avant de pouvoir être fusionnés.
# Ne définissez pas ceci sur 0 !
superMobStackAmount: 50
# Empêche les élites d'endommager les mobs passifs avec des explosions.
preventEliteCreeperDamageToPassiveMobs: true
# Définit si EliteMobs utilisera des titres pour avertir les joueurs des permissions manquantes
useTitlesForMissingPermissionMessages: true
# Définit si EliteMobs empêchera la conversion des mobs nommés en élites.
# Particulièrement important pour la compatibilité avec d'autres plugins.
preventEliteMobConversionOfNamedMobs: true
# Définit si EliteMobs convertira les mobs avec des raisons de génération personnalisées.
# L'exécution de certains plugins de boss définira automatiquement ceci sur true, quelle que soit la valeur dans la configuration.
enableHighCompatibilityMode: false
# Définit le bonus de génération d'élite pour le mode de jeu cauchemar
nightmareWorldSpawnBonus: 0.5
# Définit si la commande /em centralisée ouvre la page d'état principale du plugin.
# Fortement recommandé !
emLeadsToStatusMenu: true
# Définit si l'exécution de commandes spécifiques comme /em wallet mènera au menu /em où ces informations sont centralisées.
otherCommandsLeadToEMStatusMenu: true
# Définit si la configuration est terminée.
# Ne définissez pas cette valeur manuellement, elle est destinée à être modifiée via des commandes en jeu.
setupDoneV3: true
# Définit si les élites empêcheront la génération de renforts vanilla, tels que la fonction de renfort de zombies.
preventVanillaReinforcementsForEliteEntities: true
# Définit l'emplacement de génération par défaut du serveur pour EliteMobs. /em spawntp mènera à cet emplacement.
defaultSpawnLocation: world,16.0,76.0,80.0,0.0,0.0
# Définit si EliteMobs régénérera les blocs détruits par les élites.
doExplosionRegen: true
# Définit si la régénération d'explosion régénérera également le contenu des conteneurs tels que les coffres.
# Le mettre sur false empêchera les explosions d'élite de faire exploser les conteneurs.
doRegenerateContainers: true
defaultTransitiveBlockLimiter: 500
# Définit si le menu /em utilisera uniquement le style de menu basé sur l'inventaire qui est compatible avec Bedrock.
# Pour rappel, les joueurs peuvent utiliser la commande /em alt pour basculer entre les styles de menu /em
onlyUseBedrockMenus: false
# Définit la limite de caractères par ligne pour les pages du menu du livre.
# Réduisez ce nombre si le texte est coupé dans les menus du livre, comme pour les quêtes
characterLimitForBookMenuPagesV2: 170
# Définit si l'espace vide du menu sera rempli de vitres.
# Non recommandé si vous utilisez le pack de ressources EliteMobs.
useGlassToFillMenuEmptySpace: false
# Définit si unicode sera utilisé pour formater le pack de ressources EliteMobs.
# Ne définissez pas ceci manuellement, il est défini automatiquement lors de l'installation du pack de ressources.
# Ne le définissez manuellement que si vous avez dû fusionner le pack de ressources EliteMobs, et attendez-vous à ce que l'espacement ne fonctionne pas si vous le faites.
menuUnicodeFormatting: false
# Définit le message envoyé aux joueurs s'ils exécutent '/em confirm' sans commandes en attente.
noPendingCommands: '&cVous n'avez actuellement aucune commande en attente !'
# Définit le message de suivi pour les boss qui envoient des messages de suivi.
trackMessage: Suivre $name
# Définit le message envoyé aux joueurs qui ouvrent des coffres au trésor avec des exigences de niveau supérieures à leur rang de guilde.
chestLowRankMessage: '&7[EM] &cVotre rang de guilde doit être au moins $rank &cpour
  ouvrir ce coffre !'
# Définit le message envoyé aux joueurs qui tentent de rouvrir un coffre au trésor qu'ils ont déjà ouvert.
chestCooldownMessage: '&7[EM] &cVous avez déjà ouvert ce coffre récemment ! Attendez $time !'
# Définit le message qui apparaît recommandant la commande /em alt aux joueurs ayant des problèmes avec la commande /em
dismissEMMessage: '&8[EliteMobs] &2/elitemobs &fle menu ne fonctionne pas pour vous ? Essayez &2/elitemobs
  alt &fpour voir une version alternative du menu ! &cVous ne voulez plus voir ce message
  ? &4/em dismiss'
# Définit le message qui apparaît lorsque les joueurs exécutent la commande /em alt.
switchEMStyleMessage: '&8[EliteMobs] &2/elitemobs &fle style du menu a changé ! Allez voir !'
# Définit le message qui apparaît lorsqu'un joueur ouvre un coffre au trésor mais ne reçoit rien
treasureChestNoDropMessage: '&8[EliteMobs] &cVous n'avez rien reçu ! Meilleure chance
  la prochaine fois !'
# Définit le message qui apparaît lorsqu'un joueur tente de suivre un boss qui n'est plus valide
bossAlreadyGoneMessage: '&c[EliteMobs] Désolé, ce boss est déjà parti !'
```

</details>

---

## AdventurersGuild.yml

`AdventurersGuild.yml` contient les paramètres de configuration relatifs à la fois au Hub de la Guilde des Aventuriers (le monde) et aux paramètres relatifs au système de classement de la Guilde des Aventuriers.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Définit si EliteMobs ajoutera une santé maximale lors du déverrouillage des rangs de guilde en tant que récompense de prestige
Add max health when unlocking higher guild ranks: true
# Définit si EliteMobs ajoutera une chance de coup critique lors du déverrouillage des rangs de guilde en tant que récompense de prestige
Add critical chance when unlocking higher guild ranks: true
# Définit si EliteMobs ajoutera une chance d'esquive lors du déverrouillage des rangs de guilde en tant que récompense de prestige
Add dodge chance when unlocking higher guild ranks: true
# Définit si les commandes utilisateur sont redirigées vers le hub de la guilde des aventuriers. Ceci est fortement recommandé pour l'immersion dans le jeu et à des fins de tutoriel.
userCommandsTeleportToAdventurersGuild: true
# Définit le nom affiché dans le jeu de la guilde des aventuriers
adventurersGuildMenuName: '&6&lHub des Aventuriers'
Prestige 0 rank 0: '&8Roturier - désactive les élites !'
Prestige 0 rank 0 short placeholder: '&6&l✧&e0'
...
# Définit si le butin du joueur est limité par son niveau de guilde.
# Ceci est une partie incroyablement importante d'EliteMobs et est extrêmement fortement recommandé.
limitLootBasedOnGuildTier: true
# Définit le message envoyé aux joueurs si leur butin est nerfé en raison de leur faible niveau de guilde.
lootLimiterMessage: '&7[EM] &cVous devez débloquer le rang de guilde suivant via /ag pour piller
  de meilleurs objets !'
# Définit les commandes qui s'exécutent lors de la montée en grade de guilde. Les espaces réservés sont :
# $prestigerank - affiche le rang de prestige
# $activerank - affiche le rang actuellement actif
# $player - affiche le nom du joueur
onRankUpCommand: []
# Définit les commandes qui s'exécutent lors de la montée en grade de prestige.
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
# Définit le niveau de prestige pour le premier bonus de santé maximale.
healthPrestige1Bonus: 2.0
# Définit le niveau de prestige pour le deuxième bonus de santé maximale.
healthPrestige4Bonus: 2.5
# Définit le niveau de prestige pour le troisième bonus de santé maximale.
healthPrestige7Bonus: 3.0
# Définit le niveau de prestige pour le troisième bonus de santé maximale.
healthPrestige10Bonus: 4.0
# Définit le nombre de base estimé de boss qui doivent être tués pour pouvoir se permettre une montée en grade.
baseKillsForRankUp: 100
# Définit le nombre supplémentaire estimé de boss qui doivent être tués pour pouvoir monter en grade, par niveau.
# La formule est ce montant x le niveau actuel du joueur.
additionalKillsForRankUpPerTier: 50
# Définit le titre envoyé aux joueurs lorsque quelqu'un débloque un rang de prestige.
# $player est un espace réservé qui est remplacé par le nom affiché du joueur.
prestigeUnlockMessageTitle: $player
# Définit le sous-titre envoyé aux joueurs lorsque quelqu'un débloque un rang de prestige.
# $tier est un espace réservé qui est remplacé par le niveau de prestige du joueur.
prestigeUnlockMessageSubtitle: '&2a débloqué $tier&2 !'
# Définit le multiplicateur qui sera appliqué à la chance de génération lorsque les joueurs utilisent le rang pacifique (roturier).
peacefulModeEliteChanceDecrease: 0.2
# Définit la liste des mondes auxquels les bonus de rang de guilde ne seront pas appliqués
worldsWithoutAGBonuses: []
# Désactive la possibilité pour les utilisateurs de passer en mode pacifique pour EliteMobs. Le mode pacifique réduit le niveau et les taux de génération des mobs autour de ce joueur en particulier
disableCommonerRank: false
```

</details>

---

## AntiExploit.yml

`AntiExploit.yml` permet aux administrateurs de personnaliser différents aspects du système AntiExploit. Le système AntiExploit existe pour empêcher les joueurs d'utiliser des éléments tels que les grinders de mobs pour farmer facilement des pièces et du butin, et les pousse à faire de vrais combats et des mini-donjons au lieu de cliquer AFK pour atteindre le sommet du plugin.

Il s'agit d'un système essentiel à maintenir si vous ne voulez pas que les gens se contentent de farmer AFK l'ensemble du plugin et que vous voulez qu'ils interagissent réellement avec les mini-donjons.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Définit le message qui s'affiche lorsque l'antiexploit est déclenché.
AntiExploit message: '&c[EM AntiExploit] &7Les élites à proximité ne laisseront pas tomber de butin spécial.'
# Définit si l'antiexploit de salle noire 1 est activé.
# Les fonctionnalités antiexploit spécifiques ne sont pas documentées intentionnellement. Les opérateurs de serveur peuvent voir quel type d'antiexploit a été déclenché, mais aucune information supplémentaire sur son fonctionnement spécifique n'est mise à disposition.
Enable darkroom antiexploit 1: true
# Définit si l'antiexploit de salle noire 2 est activé.
# Les fonctionnalités antiexploit spécifiques ne sont pas documentées intentionnellement. Les opérateurs de serveur peuvent voir quel type d'antiexploit a été déclenché, mais aucune information supplémentaire sur son fonctionnement spécifique n'est mise à disposition.
Enable darkroom antiexploit 2: true
# Définit si l'antiexploit de salle noire 3 est activé.
# Les fonctionnalités antiexploit spécifiques ne sont pas documentées intentionnellement. Les opérateurs de serveur peuvent voir quel type d'antiexploit a été déclenché, mais aucune information supplémentaire sur son fonctionnement spécifique n'est mise à disposition.
Enable darkroom antiexploit 3: true
# Définit si l'antiexploit de grande salle noire 1 est activé.
# Les fonctionnalités antiexploit spécifiques ne sont pas documentées intentionnellement. Les opérateurs de serveur peuvent voir quel type d'antiexploit a été déclenché, mais aucune information supplémentaire sur son fonctionnement spécifique n'est mise à disposition.
Enable large darkroom antiexploit 1: true
# Définit si l'antiexploit de hauteur d'enderman est activé.
# Les fonctionnalités antiexploit spécifiques ne sont pas documentées intentionnellement. Les opérateurs de serveur peuvent voir quel type d'antiexploit a été déclenché, mais aucune information supplémentaire sur son fonctionnement spécifique n'est mise à disposition.
Enable enderman height antiexploit: true
# Définit si l'antiexploit de monture est activé.
# Les fonctionnalités antiexploit spécifiques ne sont pas documentées intentionnellement. Les opérateurs de serveur peuvent voir quel type d'antiexploit a été déclenché, mais aucune information supplémentaire sur son fonctionnement spécifique n'est mise à disposition.
Enable mount antiexploit: true
# Définit si les mobs d'élite peuvent ramasser des objets
preventItemPickupByMobs: true
# Définit si l'antiexploit de dégâts ambiants est activé.
# Les fonctionnalités antiexploit spécifiques ne sont pas documentées intentionnellement. Les opérateurs de serveur peuvent voir quel type d'antiexploit a été déclenché, mais aucune information supplémentaire sur son fonctionnement spécifique n'est mise à disposition.
Enable ambient damage antiexploit: true
# Définit si l'antiexploit de bloc de miel est activé.
# Les fonctionnalités antiexploit spécifiques ne sont pas documentées intentionnellement. Les opérateurs de serveur peuvent voir quel type d'antiexploit a été déclenché, mais aucune information supplémentaire sur son fonctionnement spécifique n'est mise à disposition.
Enable honey block antiexploit: true
# Définit le seuil d'activation de l'antiexploit. Des valeurs plus élevées le rendent plus tolérant. Il n'est pas recommandé de modifier ceci.
antiExploitThreshold: 10
# Définit si l'antiexploit sans chemin est activé
nPathExploit: true
```

</details>

---

## CombatTag.yml

`CombatTag.yml` contient les paramètres de configuration du système Combat Tag. Ce système est encore très loin d'être complet, mais il tente de gérer le comportement des joueurs une fois qu'ils entrent en combat.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Définit si l'étiquette de combat est activée.
# Lorsqu'elle est activée, les joueurs volants qui s'engagent dans un combat sont définis pour arrêter de voler.
Enable combat tag: true
# Définit le message envoyé lorsque l'étiquette de combat est activée.
Combat tag message: '&c[EliteMobs] Étiquette de combat activée !'
# Définit si la commande /ag aura une minuterie avant la téléportation
Enable adventurers guild teleport timer: true
# Définit le message d'action défini en attendant la minuterie de téléportation.
Teleport time left: '&7[EM] Téléportation dans &a$time &7secondes...'
# Définit le message envoyé lorsque les joueurs se déplacent en attendant la téléportation.
Teleport cancelled: '&7[EM] &cTéléportation interrompue !'
```

</details>

---

## DiscordSRV.yml

`DiscordSRV.yml` contient les paramètres de configuration de DiscordSRV. Si vous souhaitez voir comment configurer cette fonctionnalité, [cliquez ici !]($language$/elitemobs/discordsrv.md)

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# La documentation est disponible ici : https://magmaguy.com/wiki.html#lang=en&article=elitemobs+discordsrv.md
announcementRoomName: VOUS_DEVEZ_METTRE_LE_NOM_DU_SALON_DISCORD_DANS_LEQUEL_VOUS_VOULEZ_QUE_LES_ANNONCES_ELITEMOBS_SOIENT_DIFFUSÉES_COMME_VOUS_L'AVEZ_FAIT_DANS_VOTRE_FICHIER_DE_CONFIGURATION_DISCORDSRV_CONSULTEZ_LE_WIKI_ELITEMOBS_POUR_PLUS_DE_DÉTAILS

```

</details>

---

## EconomySettings.yml

`EconomySettings.yml` contient les paramètres de configuration de l'économie d'EliteMobs.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Définit si l'économie d'EliteMobs est activée. Cela signifie les pièces d'élite, la possibilité d'acheter et de vendre du matériel et la possibilité d'améliorer les rangs de guilde
# Si désactivé, les joueurs ne pourront pas progresser dans le plugin !
enableEconomy: true
# Définit la valeur de revente des objets, en % du prix d'origine. 5 est 5 %
itemResaleValue: 5.0
# Définit le nom de la devise utilisée dans le jeu.
currencyName: Pièces d'élite
# Définit le plugin à utiliser Vault. CECI N'EST PAS RECOMMANDÉ ! Lisez pourquoi ici : https://github.com/MagmaGuy/EliteMobs/wiki/%5BThird-party-support%5D-Vault
useVault - not recommended: false
# Définit si les élites laisseront tomber des pièces en fonction de leur niveau.
enableCurrencyShower: true
# Définit le multiplicateur de la devise lâchée par les élites.
currencyShowerTierMultiplier: 1.0
# Définit le message envoyé lorsque les joueurs ramassent de la monnaie d'élite.
chatCurrencyShowerMessage: '&7[EM] Vous avez ramassé &a$amount $currency_name !'
# Définit le message de la barre d'action envoyé lorsque les joueurs ramassent de la monnaie d'élite.
actionbarCurrencyShowerMessage: '&7[EM] Vous avez ramassé &a$amount $currency_name !'
# Envoyer le message que les joueurs reçoivent après avoir pillé de la monnaie. Utile à des fins de tutoriel.
adventurersGuildNotificationMessages: '&7[EM] De l'argent supplémentaire à dépenser ? Essayez &a/ag !'
# Définit le taux d'imposition pour les transactions entre joueurs.
# Fortement recommandé pour des raisons d'équilibre, car les joueurs de haut niveau peuvent gagner jusqu'à 6 fois plus de monnaie et essayer d'utiliser d'autres joueurs pour contourner les réinitialisations de monnaie de prestige.
playerToPlayerPaymentTaxes: 0.2
# Message envoyé lors de l'envoi de monnaie d'élite à d'autres joueurs.
Economy pay message v2: '&2Vous avez payé &2$amount_sent $currency_name &2à $receiver&2,
  qui a obtenu $amount_received après impôts !'
# Message envoyé après que les joueurs ont envoyé de la monnaie.
Economy currency left message: Vous avez maintenant &2$amount_left $currency_name
# Message reçu lors de la réception de monnaie.
Economy money from payment message: Vous avez reçu &2$amount_received $currency_name
  &fde $sender
# Message envoyé lorsque les joueurs tentent d'envoyer un montant de pièces qu'ils n'ont pas.
Economy payment insufficient currency: '&cVous n'avez pas assez de $currency_name pour
  faire ça !'
# Message de solde /em
Wallet command message: Vous avez &2$balance $currency_name
# Message de confirmation envoyé lorsque les joueurs tentent d'envoyer de la monnaie à un autre joueur.
Tax confirmation message: '&cL'envoi d'un paiement coûtera $percentage% de taxes. &aFaites
  &9$command &apour continuer !'
# Message envoyé lorsqu'un joueur achète dans une boutique.
Shop buy message: '&aVous avez acheté $item_name &apour $item_value $currency_name !'
# Message envoyé lorsqu'un joueur interagit avec une boutique.
Shop current balance message: '&aVous avez $currency_amount $currency_name.'
# Message envoyé lorsque les joueurs n'ont pas assez de monnaie pour acheter un objet
Shop insufficient funds message: '&cVous n'avez pas assez de $currency_name !'
# Deuxième partie du message envoyé lorsque les joueurs tentent d'acheter un objet qu'ils ne peuvent pas se permettre.
Shop item cost message: Cet objet coûte &c$item_value $currency_name.
# Message envoyé lors de la vente d'un objet à une boutique.
Shop sell message: '&aVous avez vendu $item_name &apour $currency_amount $currency_name !'
# Message envoyé lors de la tentative de vente d'un objet qui n'appartient pas à ce joueur.
Shop sale player items warning: '&cVous ne pouvez pas vendre d'objets qui ne sont pas actuellement liés à votre âme
  à vous! Cela inclut les objets d'autres niveaux de prestige !'
# Message envoyé lors de la tentative de vente d'un objet non EliteMobs
Shop sale instructions: '&cVous ne pouvez vendre que du butin EliteMobs ici ! (Armure / armes
  lâchées par des élites montrant une valeur sur leur savoir)'
# Message envoyé lors de la vente d'un lot d'objets d'élite.
shopBatchSellItem: '&aVous avez vendu vos objets &apour $currency_amount $currency_name !'
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
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  DIAMOND_AXE: 17.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  DIAMOND_BOOTS: 17.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  DIAMOND_CHESTPLATE: 17.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  DIAMOND_LEGGINGS: 17.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  DIAMOND_HELMET: 17.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  DIAMOND_PICKAXE: 17.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  DIAMOND_SHOVEL: 17.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  DIAMOND_SWORD: 17.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  DIAMOND_HOE: 17.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  IRON_AXE: 16.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  IRON_BOOTS: 16.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  IRON_LEGGINGS: 16.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  IRON_CHESTPLATE: 16.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  IRON_HELMET: 16.0


```

</details>

---


  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  IRON_PICKAXE: 16.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  IRON_SHOVEL: 16.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  IRON_HOE: 16.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  IRON_SWORD: 16.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  SHIELD: 16.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  BOW: 16.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  CHAINMAIL_BOOTS: 15.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  CHAINMAIL_LEGGINGS: 15.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  CHAINMAIL_CHESTPLATE: 15.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  CHAINMAIL_HELMET: 15.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  STONE_SWORD: 15.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  STONE_AXE: 15.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  STONE_PICKAXE: 15.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  STONE_SHOVEL: 15.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  STONE_HOE: 15.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  GOLDEN_AXE: 13.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  GOLDEN_BOOTS: 13.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  GOLDEN_LEGGINGS: 13.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  GOLDEN_CHESTPLATE: 13.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  GOLDEN_HELMET: 13.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  GOLDEN_SWORD: 13.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  GOLDEN_SHOVEL: 13.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  GOLDEN_PICKAXE: 13.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  GOLDEN_HOE: 13.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  GOLDEN_APPLE: 17.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  ENCHANTED_GOLDEN_APPLE: 17.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  LEATHER_BOOTS: 13.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  LEATHER_LEGGINGS: 13.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  LEATHER_CHESTPLATE: 13.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  LEATHER_HELMET: 13.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  WOODEN_SWORD: 13.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  WOODEN_AXE: 13.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  WOODEN_HOE: 13.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  WOODEN_PICKAXE: 13.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  TRIDENT: 17.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  ELYTRA: 17.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  TURTLE_HELMET: 13.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  NETHERITE_AXE: 18.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  NETHERITE_PICKAXE: 18.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  NETHERITE_SHOVEL: 18.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  NETHERITE_HOE: 18.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  NETHERITE_SWORD: 18.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  NETHERITE_HELMET: 18.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  NETHERITE_CHESTPLATE: 18.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  NETHERITE_LEGGINGS: 18.0
  # Définit la valeur de ce matériau pour le système de monnaie des elitemobs.
  NETHERITE_BOOTS: 18.0
  # Définit la valeur matérielle par défaut pour les objets non spécifiquement définis.
  defaultMaterialWorth: 1.0
```

</details>

---

## events.yml

`events.yml` contient les options de configuration des événements. 

_**Remarque : il ne s'agit que des paramètres globaux très basiques.**_ 

Vous pouvez modifier davantage des événements spécifiques dans le dossier `events`.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Définit si les événements seront diffusés uniquement dans le monde où les événements se produisent.
Only broadcast event message in event worlds: false
# Définit le temps de recharge minimum, en minutes, entre les événements chronométrés
actionEventMinimumCooldownMinutes: 240
# Définit si les événements d'action se produiront.
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#action-events
actionEventsEnabled: true
# Définit si les événements chronométrés se produiront.
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events
timedEventsEnabled: true
```

</details>

---

## ItemSettings.yml

`ItemSettings.yml` contient les paramètres globaux des objets Elite.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Définit les caractères préfixés aux enchantements vanilla dans l'histoire de l'objet.
noItemDurabilityMessage: '&8[EliteMobs] $item &4est cassé ! Il ne fonctionnera pas tant qu'il ne sera pas réparé !'
# Définit si un butin EliteMobs tombera.
# Inclut les pièces d'élite, les objets personnalisés, les objets générés de manière procédurale - tout !
# Non recommandé, rend la progression mmorpg impossible.
doEliteMobsLoot: true
# Définit si le butin généré de manière procédurale aura des couleurs différentes en fonction de la qualité de l'objet.
doMMORPGColorsForItems: true
# Définit si le placement d'objets personnalisés, comme des bannières ou des blocs, est empêché.
# Ceci est recommandé - les objets personnalisés se cassent lorsqu'ils sont placés et ne peuvent pas être récupérés !
preventCustomItemPlacement: true
# Définit le format de l'histoire de tous les objets EliteMobs personnalisés !
# Les espaces réservés suivants sont valides :
# $itemLevel - affiche le niveau de l'objet
# $prestigeLevel - affiche le niveau de prestige
# $weaponOrArmorStats - affiche les statistiques d'élite DPS ou d'armure d'élite, selon l'objet
# $soulbindInfo - affiche à qui, le cas échéant, l'objet est lié à l'âme
# $itemSource - affiche d'où vient l'objet, comme un mob ou une boutique
# $ifLore - fait qu'une ligne n'apparaît que si l'objet a une histoire personnalisée. Ne s'applique qu'aux objets personnalisés
# $customLore - affiche l'intégralité de l'histoire personnalisée. Ne s'applique qu'aux objets personnalisés
# $ifEnchantments - fait qu'une ligne n'apparaît que si l'objet a des enchantements
# $enchantments - affiche les enchantements sur l'objet
# $eliteEnchantments - affiche les enchantements d'élite sur l'objet
# $ifCustomEnchantments - affiche les enchantements personnalisés sur l'objet
# $customEnchantments - affiche les enchantements personnalisés sur l'objet
# $ifPotionEffects - n'affiche la ligne que si l'objet a des effets de potion
# $potionEffects - affiche les effets de potion sur l'objet
# $loreResaleValue - affiche la valeur de l'objet. Peut afficher le prix d'achat ou de vente selon l'endroit où il est vu
# Important : plusieurs espaces réservés peuvent être personnalisés davantage par les paramètres de configuration ci-dessous.
itemLoreStructureV2:
- §7§m§l---------§7<§lInfos d'équipement§7>§m§l---------
- '§7Niveau de l'objet : §f$itemLevel §7Prestige §6$prestigeLevel'
- $weaponOrArmorStats
- $soulbindInfo
- $itemSource
- $ifLore§7§m§l-----------§7< §f§lHistoire§7 >§m§l-----------
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
# Définit l'histoire de la source de la boutique pour les achats en magasin
shopSourceItemLores: '&7Acheté dans une boutique'
# Définit l'histoire de la source de la boutique pour les objets pillés sur les boss
mobSourceItemLores: '&7Butin de $mob'
# Définit l'histoire de la valeur de l'objet
loreWorths: '&7Valeur : $worth $currencyName'
# Définit l'histoire de la valeur de revente de l'objet
loreResaleValues: '&7Se vend pour $resale $currencyName'
# Définit la chance de base pour tout objet d'élite de tomber des mobs d'élite
flatDropRateV3: 0.2
# Définit la chance de base pour tout objet d'élite de tomber des boss régionaux
regionalBossNonUniqueDropRate: 0.05
# Définit si les boss régionaux peuvent laisser tomber du butin vanilla
regionalBossesDropVanillaLoot: false
# Définit de combien la chance qu'un objet d'élite tombe augmente en fonction du niveau du boss.
# Le niveau du boss est multiplié par cette valeur et ajouté à la chance de base.
# Il n'est plus recommandé d'avoir ceci au-dessus de 0.0 !
levelIncreaseDropRateV2: 0.0
# Définit la chance pondérée qu'un objet généré de manière procédurale tombe.
# Ce système utilise des probabilités pondérées ! Recherchez sur Google si vous ne savez pas ce que c'est.
proceduralItemDropWeight: 90.0
# Définit la chance relative qu'un objet pondéré tombe.
# Les objets pondérés sont des objets personnalisés qui n'ont pas de poids dynamique, comme les charmes.
weighedItemDropWeight: 1.0
# Définit la chance relative qu'un objet fixe tombe. Ce sont des objets personnalisés qui ne sont pas mis à l'échelle.
fixedItemDropWeight: 10.0
# Définit la chance relative qu'un objet limité tombe. Ce sont des objets personnalisés qui évoluent jusqu'à un niveau spécifique
limitedItemDropWeight: 3.0
# Définit la chance relative qu'un objet évolutif tombe. Ce sont des objets personnalisés qui peuvent évoluer à n'importe quel niveau et sont les plus courants dans le plugin.
scalableItemDropWeight: 6.0
# Définit le multiplicateur pour le butin vanilla du mob, en fonction du niveau du mob.
defaultLootMultiplier: 0.0
# Définit le niveau maximum pour le multiplicateur de butin par défaut.
levelCapForDefaultLootMultiplier: 200
# Définit le multiplicateur d'expérience Minecraft vanilla lâché pour le boss, en fonction du niveau du boss.
defaultExperienceMultiplier: 1.0
# Définit le niveau du butin maximum qui sera lâché par EliteMobs. Fortement recommandé de le laisser à 200.
maximumItemLevel: 200
# Définit si les enchantements d'élite seront utilisés. 
# Les enchantements d'élite remplacent les enchantements vanilla lorsque les objets d'élite atteignent des niveaux d'enchantement qui dépassent les limites de vanilla.
# Exemple : si une épée d'élite est censée avoir une netteté 10, puisque la limite de Minecraft est le niveau 5, elle aura une netteté 5 et une netteté d'élite 5.
# La netteté d'élite n'affecte que les mobs générés par EliteMobs. Ceci est fait pour que le PVP et le combat vanilla ne deviennent pas déséquilibrés.
useEliteEnchantments: true
# Définit le nom affiché qui sera utilisé pour les enchantements d'élite dans l'histoire de l'objet.
eliteEnchantmentLoreStrings: Elite
# Définit si EliteMobs considérera les houes comme des armes valides pour les calculs de dégâts.
useHoesAsWeapons: false
# Définit si EliteMobs générera des particules spéciales sur les objets de haute qualité lâchés.
enableRareItemParticleEffects: true
# Définit les symboles qui seront utilisés dans l'histoire de l'objet pour montrer qu'un effet de potion s'applique au coup à l'entité qui est touchée.
potionEffectOnHitTargetLore: '&4⚔☠'
# Définit les symboles qui seront utilisés dans l'histoire de l'objet pour montrer qu'un effet de potion s'applique au coup au joueur qui frappe.
potionEffectOnHitSelfLore: '&9⚔🛡'
# Définit les symboles qui seront utilisés dans l'histoire de l'objet pour montrer qu'un effet de potion continuera à s'appliquer tant que le joueur le manie.
potionEffectContinuousLore: '&6⟲'
# Définit les caractères préfixés aux enchantements d'élite dans l'histoire de l'objet.
eliteEnchantmentLoreColor: '&9◇'
# Définit les caractères préfixés aux enchantements vanilla dans l'histoire de l'objet.
vanillaEnchantmentLoreColor: '&7◇'
# Définit les caractères préfixés aux enchantements personnalisés dans l'histoire de l'objet.
customEnchantmentColor: '&3◇'
# Définit les caractères préfixés aux effets de potion dans l'histoire de l'objet.
potionEffectLoreColor: '&5◇'
# Définit le texte qui apparaîtra sur l'objet si l'objet n'est pas lié à l'âme.
noSoulbindLore: '&7Pas lié à l'âme !'
# Définit si l'objet d'élite peut être enchanté par des moyens vanilla. Ceci n'est pas recommandé car EliteMobs a son propre système d'enchantements personnalisés avec son propre équilibre !
preventEliteItemEnchantment: true
# Définit si les objets d'élite peuvent être désenchantés par des moyens vanilla.
preventEliteItemDisenchantment: true
# Définit le message qui apparaît pour les joueurs lorsqu'ils tentent de désenchanter un objet et que cela n'est pas autorisé.
preventEliteItemDisenchantmentMessage: '&c[EliteMobs] Impossible de désenchanter les objets d'élite !'
# Définit si les objets d'élite peuvent être améliorés du diamant au netherite par des moyens vanilla. Non recommandé !
preventEliteItemDiamondToNetheriteUpgrade: true
# Définit si les objets d'élite ne perdront en durabilité qu'à la mort.
# Il s'agit d'un système important pour EliteMobs, et il est fortement recommandé car les combats de haut niveau sont presque impossibles sans lui !
eliteItemsDurabilityLossOnlyOnDeath: true
# Définit le multiplicateur de perte de durabilité pour les objets d'élite s'il est défini pour perdre en durabilité à la mort.
# Les valeurs comprises entre 0.0 et 1.0 réduisent la perte de durabilité et les valeurs supérieures à 1.0 l'augmentent.
# Exemple : 0.5 inflige 50 % de la perte de durabilité, 2.0 inflige 200 % de la perte de durabilité.
eliteItemsDurabilityLossMultiplier: 1.0
# Définit le message qui apparaît lorsque la mise au rebut d'un objet est réussie.
scrapSucceededMessageV2: '&8[EliteMobs] &2La mise au rebut a réussi $amount fois !'
# Définit le message qui apparaît lorsque la mise au rebut d'un objet échoue.
scrapFailedMessageV2: '&8[EliteMobs] &cLa mise au rebut a échoué $amount fois !'
# Définit si le butin d'élite doit être placé directement dans les inventaires des joueurs.
putLootDirectlyIntoPlayerInventory: false
# Définit la différence de niveau maximale que les joueurs peuvent avoir avant de ne plus pouvoir piller d'objets de niveau trop bas.
# Ceci est calculé en fonction du niveau moyen du butin que porte le joueur.
# Par exemple, s'il est défini sur 10 et qu'un joueur a un équipement de niveau 50, il ne pourra pas farmer les boss de niveau 39.
lootLevelDifferenceLockout: 10
# Définit si EliteMobs empêchera les objets d'élite de se casser lors de l'utilisation du système de perte de durabilité à la mort.
# Les joueurs ne pourront de toute façon pas utiliser d'objets sans durabilité, il s'agit simplement d'éviter la perte accidentelle d'objets de haut niveau mais de faible durabilité.
preventEliteItemsFromBreaking: true
# Définit le niveau minimum, +7, des boss qui peuvent générer de manière procédurale du matériel en diamant dans EliteMobs.
# Il n'y a pas d'équipement en netherite généré de manière procédurale dans EliteMobs, uniquement du butin personnalisé.
minimumProcedurallyGeneratedDiamondLootLevelPlusSeven: 10
# Définit le message affiché dans le chat en cas de réussite du tirage au sort pour le butin via la commande /em simloot <level> <times>.
simlootMessageSuccess: '&8[EliteMobs] &2Tirage au sort pour le butin et obtenu $itemName &2 !'
# Définit le message affiché dans le chat en cas d'échec du tirage au sort pour le butin via la commande /em simloot <level> <times>.
simlootMessageFailure: '&8[EliteMobs] &cTirage au sort pour le butin et rien obtenu !'
# Définit le message que les joueurs reçoivent lorsque le butin d'élite est déposé directement dans leurs inventaires.
directDropCustomLootMessage: '&8[EliteMobs] &2Obtenu $itemName &2 !'
# Définit le message que les joueurs reçoivent lorsque le butin vanilla est déposé directement dans leurs inventaires.
directDropMinecraftLootMessage: '&8[EliteMobs] &aObtenu $itemName &a !'
# Définit le message que les joueurs reçoivent lorsque des pièces d'élite sont déposées directement dans leurs inventaires.
directDropCoinMessage: '&8[EliteMobs] &aObtenu &2$amount $currencyName &a !'
# Définit si EliteMobs masquera les attributs de Minecraft vanilla.
hideItemAttributes: true
# Définit l'entrée d'histoire spécifique à l'arme sur un objet d'élite. L'espace réservé $EDPS est remplacé par le DPS d'élite (dégâts par seconde) de l'arme.
weaponEntry: '&7DPS d'élite : &2$EDPS'
# Définit l'entrée d'histoire spécifique à l'armure sur un objet d'élite. L'espace réservé $EDEF est remplacé par la DEF d'élite (défense) de l'arme.
armorEntry: '&7Armure d'élite : &2$EDEF'
# Définit le message envoyé lorsqu'un joueur tue un boss mais que le niveau de l'équipement est trop différent du niveau du boss pour obtenir des pièces
levelRangeTooDifferent: '&8EM] &4Votre équipement est au niveau $playerLevel et le boss est au niveau
  $bossLevel, la différence de niveau est trop élevée pour obtenir des pièces !'
```

</details>

---

## MobCombatSettings.yml

`MobCombatSettings.yml` contient toutes les options de configuration liées au système de combat personnalisé et la plupart des options de configuration généralement liées au fonctionnement d'Elite Mobs.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Définit si les élites générées naturellement apparaîtront. Remarque : les mobs d'événements comme le roi zombie ne sont pas des élites générées naturellement ! Vous devrez désactiver les événements si vous souhaitez désactiver les boss d'événements.
doNaturalEliteMobSpawning: true
# Définit si les spawns générés à partir de générateurs de mobs peuvent être convertis en élites. Non recommandé !
doSpawnersSpawnEliteMobs: false
# Définit le pourcentage de mobs générés naturellement qui sont convertis en mobs d'élite.
eliteMobsSpawnPercentage: 0.05
# Définit la plage de super mob pour analyser l'empilement de super mob
superMobStackRange: 15
# Définit le niveau maximum auquel les élites peuvent apparaître.
# Remarque : le niveau de mob d'élite est basé sur l'armure et les armes que les joueurs portent, et l'armure ne s'adapte qu'au niveau 200.
naturalEliteMobsLevelCap: 250
# Définit si les élites porteront une armure en fonction de leur niveau. Ceci est uniquement à des fins visuelles et n'affecte pas le combat.
doElitesWearArmor: true
# Définit si les élites porteront des casques en fonction de leur niveau. Cela les empêchera de brûler facilement pendant la journée.
doElitesWearHelmets: true
# Définit si les élites auront des traînées visuelles autour d'elles avertissant les joueurs des joueurs qu'elles ont.
doNaturalEliteMobVisualEffects: true
# Définit si les élites générées à partir de générateurs auront des effets visuels.
doSpawnerEliteMobVisualEffects: false
# Définit si certains pouvoirs passeront par la phase d'avertissement du pouvoir. Ceci est très important car les phases d'avertissement signifient généralement que le pouvoir peut être esquivé, et le visuel permet aux joueurs de savoir où esquiver.
doPowerBuildupVisualEffects: true
# Définit si des messages de mort personnalisés seront utilisés lorsque les joueurs meurent des élites.
doCustomEliteMobsDeathMessages: true
# Définit si EliteMobs affichera des indicateurs de santé pour les élites.
doDisplayMobHealthOnHit: true
# Définit si EliteMobs affichera des indicateurs de dégâts pour les dégâts infligés aux élites.
doDisplayMobDamageOnHit: true
# Définit si le niveau des élites augmentera en fonction de la distance par rapport au spawn.
# Il s'agit d'une valeur ajoutée à leur niveau normal, ce qui signifie que si un joueur porte un équipement de niveau 100 près du spawn et que le boss a un niveau +1 en raison de la distance par rapport au spawn, le boss apparaîtra au niveau 101.
# Cette option n'est généralement pas recommandée, surtout si vous avez un système tp aléatoire sur votre serveur.
doIncreaseEliteMobLevelBasedOnSpawnDistance: false
# Définit la distance entre les incréments de niveau pour les augmentations de niveau basées sur la distance.
distanceBetweenIncrements: 100.0
# Définit le nombre de niveaux qui augmentent à chaque incrément de distance pour les augmentations de niveau basées sur la distance.
levelIncreaseAtIncrements: 1.0
# Définit si les pouvoirs des élites seront cachés jusqu'à ce qu'elles entrent en combat. Ceci est recommandé pour des raisons de performance.
hideEliteMobPowersUntilAggro: true
# Définit le multiplicateur pour les dégâts infligés à tous les boss générés par EliteMobs, à l'exception de ceux utilisant le système de dégâts normalisés (boss de donjon régionaux). Des valeurs plus élevées augmentent les dégâts infligés, ce qui rend les boss plus faciles à tuer.
# 2,0 = 200 %, 0,5 = 50 %
damageToEliteMobMultiplierV2: 1.0
# Définit le multiplicateur pour les dégâts infligés aux joueurs par les élites. Des valeurs plus élevées augmentent la quantité de dégâts infligés par les boss, à l'exception de ceux utilisant le système de dégâts normalisés (boss de donjon régionaux), ce qui rend les boss plus forts.
# 2,0 = 200 %, 0,5 = 50 %
damageToPlayerMultiplierV2: 1.0
# Définit si les boss spéciaux peuvent être suivis.
showCustomBossLocation: true
# Définit le message envoyé aux joueurs pour suivre l'emplacement d'un boss.
bossLocationMessage: '&7[EM] &2[Cliquez pour suivre !]'
# Définit les commandes qui s'exécutent lorsqu'une élite meurt. Les espaces réservés valides sont :
# $level pour le niveau du boss
# $name pour le nom du boss
# $players fera exécuter la commande pour chaque joueur qui a participé à la mise à mort. Par exemple, si Bob et Steve ont tué un boss, 'broadcast $players killed the boss !' exécutera 'bob killed the boss' et 'steve killed the boss !'
commandsOnEliteMobDeath: []


```

</details>

---



# Définit le message envoyé aux joueurs qui participent aux éliminations de boss importants.
bossKillParticipationMessage: '&eVos dégâts : &2$playerDamage'
# Définit si les boss régénèrent la santé lorsqu'ils sont hors combat. Fortement recommandé.
regenerateCustomBossHealthOnCombatEnd: true
# Définit le message envoyé aux joueurs qui essaient de suivre des boss actuellement dans un monde différent.
defaultOtherWorldBossLocationMessage: '$name : Dans un monde différent !'
# Définit le préfixe ajouté aux indicateurs de dégâts lorsque les joueurs frappent un boss avec quelque chose contre lequel le boss est faible.
weakTextColor: '&9'
# Définit le préfixe ajouté aux indicateurs de dégâts lorsque les joueurs frappent un boss avec quelque chose contre lequel le boss est fort.
resistTextColor: '&c'
# Définit le message qui apparaît lorsque les joueurs frappent le boss avec quelque chose contre lequel le boss est faible.
weakText: '&9&lFaible !'
# Définit le message qui apparaît lorsque les joueurs frappent le boss avec quelque chose contre lequel le boss est fort.
resistText: '&c&lRésiste !'
# Définit si des éléments visuels seront utilisés pour montrer qu'un boss est faible contre une attaque.
doWeakEffect: true
# Définit si des éléments visuels seront utilisés pour montrer qu'un boss est fort contre une attaque.
doResistEffect: true
# Définit le multiplicateur des dégâts infligés aux boss utilisant le système de dégâts normalisés (boss de donjon régionaux). Des valeurs plus élevées augmentent les dégâts infligés, ce qui rend les boss plus faciles à tuer.
# 2,0 = 200 %, 0,5 = 50 %
damageToEliteMobMultiplier: 1.0
# Définit le multiplicateur des dégâts infligés aux joueurs par les boss utilisant le système de dégâts normalisés (boss de donjon régionaux). Des valeurs plus élevées augmentent la quantité de dégâts infligés par les boss, ce qui rend les boss plus forts.
# 2,0 = 200 %, 0,5 = 50 %
damageToPlayerMultiplier: 1.0
# Définit les dégâts de base pour les boss personnalisés utilisant les dégâts normalisés (généralement les boss régionaux).
normalizedRegionalBossBaselineDamageV2: 3.0
# Définit la santé de base pour les boss personnalisés utilisant la santé normalisée (généralement les boss régionaux).
normalizedRegionalBossBaselineHealthV3: 4.0
# Définit si les boss régionaux utiliseront le système de combat normalisé.
# Ceci est très fortement recommandé, et le contenu préfabriqué ne sera pas correctement équilibré s'il est modifié.
normalizeRegionalBosses: true
# Définit le message qui apparaît lorsqu'un boss se soigne en sortant du combat.
fullHealMessage: '&2SOIN COMPLET !'
# Définit les multiplicateurs appliqués aux attaques contre lesquelles les boss sont forts et faibles.
strengthAndWeaknessDamageMultipliers: 2.0
# Définit le multiplicateur appliqué à la réduction des dégâts de l'effet de potion de résistance pour les joueurs.
resistanceDamageMultiplier: 1.0
# Définit le multiplicateur appliqué à la réduction des dégâts lorsqu'un joueur brandit un bouclier pour les attaques de mêlée (pouvoirs exclus).
blockingDamageReduction: 0.8
```

</details>

---

## ProceduralItemGenerationSettings.yml

`ProceduralItemGenerationSettings.yml` contient toutes les options de configuration pour configurer les objets générés de manière procédurale.

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
- $verb $itemType of the $adjective $noun
- $itemType of the $adjective $noun
- $noun's $adjective $verb $itemType
- $verb $itemType
- $adjective $verb $itemType
- The $verb-er
- The $adjective $verb-er
nouns:
- MagmaGuy
- Dawn
...
adjectives:
- Adorable
- Beautiful
...
verbs:
- Slashing
- Cutting
...
verb-ers (noun):
- World Breaker
- World Shatterer
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

`ValidWorlds.yml` contient la liste des mondes qu'EliteMobs a détectés, ainsi que des options pour personnaliser les fonctionnalités d'EliteMobs sur ceux-ci.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Définit la liste des mondes basés sur des zones.
# LE MODE DE JEU BASÉ SUR DES ZONES EST OBSOLÈTE ET SERA BIENTÔT SUPPRIMÉ !
zoneBasedWorlds: []
# Définit la liste des mondes en mode cauchemar.
# Les mondes en mode cauchemar sont un mode de jeu où les journées sont plus courtes et les joueurs ne peuvent pas dormir.
# Les mondes cauchemardesques ont également des quantités plus élevées d'apparitions d'élite.
# https://github.com/MagmaGuy/EliteMobs/wiki/%5BGame-Mode%5D-Nightmare-mode
nightmareWorlds: []
Valid worlds:
  world: true
  world_nether: true
  world_the_end: true
```

</details>

---

## Arenas.yml

`Arenas.yml` contient les messages et paramètres par défaut des arènes que vous pouvez modifier.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Message qui apparaît lorsqu'il n'y a pas assez de joueurs présents pour démarrer une arène.
notEnoughPlayersMessage: '&8[EliteMobs] &cVous avez besoin d'au moins $amount pour démarrer le match !'
# Titre qui apparaît lorsqu'une arène démarre.
startingMessage: '&2Démarrage !'
# Sous-titre qui apparaît lorsqu'une arène démarre.
startingSubtitle: '&2dans $count...'
# Message qui apparaît lorsqu'une arène est pleine.
arenaFullMessage: '&4[EliteMobs] &cL'arène est pleine ! Vous pouvez regarder à la place pendant que vous
  attendez qu'elle se termine !'
# Message qui apparaît lorsqu'un joueur tente de rejoindre une arène active.
arenasOngoingMessage: '&4[EliteMobs] &cImpossible de rejoindre l'arène maintenant - un match est en cours
  ! Vous pouvez regarder à la place pendant que vous attendez qu'elle se termine !'
# Message qui apparaît pour rappeler aux joueurs comment démarrer une arène après avoir rejoint en tant que joueur.
instanceStartHintMessage: '&2[EliteMobs] &aVous pouvez démarrer l'instance en faisant &2/em
  start'
# Message qui apparaît pour rappeler aux joueurs comment quitter une arène.
instanceQuitHintMessage: '&4[EliteMobs] &cVous pouvez quitter l'instance en faisant &4/em
  quit'
# Message qui apparaît lorsque les joueurs rejoignent une arène.
arenaJoinPlayerMessage: "&2[EliteMobs] &aVous pouvez démarrer l'arène en faisant &2/em start\
  \ &as'il y a au moins &2$count &ajoueurs dedans ! \nVous pouvez quitter l'arène en
  \ faisant &c/em quit"
# Message qui apparaît pour rappeler aux joueurs comment quitter une arène après avoir rejoint en tant que spectateur.
arenaJoinSpectatorMessage: '&2[EliteMobs] &aVous pouvez quitter l'arène à tout moment en utilisant
  &2/em quit'
# Message de titre qui apparaît lorsqu'une vague démarre.
waveTitle: '&aVague &2$wave'
# Message de sous-titre qui apparaît lorsqu'une vague démarre.
waveSubtitle: ''
# Titre qui apparaît lorsqu'une arène est terminée.
victoryTitle: '&2Victoire !'
# Sous-titre qui apparaît lorsqu'une arène est terminée.
victorySubtitle: '&aTerminé &2$wave &avagues !'
# Titre qui apparaît lorsque les joueurs échouent dans une arène.
defeatTitle: '&4Défaite !'
# Sous-titre qui apparaît lorsque les joueurs échouent dans une arène.
defeatSubtitle: '&cVague atteinte &4$wave&c !'
# Message diffusé lorsque les joueurs battent une arène.
victoryBroadcast: L'arène $arenaName a été conquise par $players !
# Titre qui apparaît lorsqu'un joueur rejoint une arène.
joinPlayerTitle: '&aCommencez avec &2/em start &a !'
# Sous-titre qui apparaît lorsqu'un joueur rejoint une arène.
joinPlayerSubtitle: '&cQuittez avec &4/em quit &c !'
# Titre qui apparaît lorsqu'un spectateur rejoint une arène.
joinSpectatorTitle: '&aEn train de regarder !'
# Sous-titre qui apparaît lorsqu'un spectateur rejoint une arène.
joinSpectatorSubtitle: '&cQuittez avec &4/em quit &c !'
# Définit le message envoyé aux joueurs s'ils n'ont pas la permission d'entrer dans une arène.
noArenaPermissionMessage: '[EliteMobs] Vous n'avez pas la permission d'entrer dans cette
  arène !'
```

</details>

---

## Database.yml

`Database.yml` Inclut les paramètres pour la façon dont vous souhaitez qu'EM gère les bases de données.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Définit si MySQL sera utilisé. Par défaut, EliteMobs utilise SQLite. Si vous souhaitez utiliser MySQL, vous aurez besoin d'une configuration MySQL valide.
useMySQL: false
# L'hôte de votre base de données MySQL
mysqlHost: localhost
# Le port de votre base de données MySQL
mysqlPort: '3306'
# Le nom de la base de données
mysqlDatabaseName: elitemobs
# Le nom d'utilisateur pour MySQl
mysqlUsername: votre_nom_d_utilisateur_mysql_ici
# Le mot de passe de votre base de données MysSQL
mysqlPassword: votre_mot_de_passe_mysql_ici
# S'il faut utiliser SSL
useSSL: true
```

</details>

---

## dungeons.yml

`dungeons.yml` Inclut les paramètres qui vous permettent d'ajuster les messages qui apparaissent dans les donjons et d'autres paramètres comme les multiplicateurs de dégâts pour les effets appliqués.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Définit le multiplicateur de dégâts pour les dégâts de poison dans les donjons
# Ceci est important pour l'équilibre car, par défaut, les dégâts sont un peu trop élevés pour les donjons tels que nous les concevons.
poisonDamageMultiplier: 0.5
# Définit le multiplicateur de dégâts pour les dégâts de feu dans les donjons
# Ceci est important pour l'équilibre car, par défaut, les dégâts sont un peu trop élevés pour les donjons tels que nous les concevons.
fireDamageMultiplier: 0.5
# Définit le multiplicateur de dégâts pour les dégâts de flétrissement dans les donjons
# Ceci est important pour l'équilibre car, par défaut, les dégâts sont un peu trop élevés pour les donjons tels que nous les concevons.
witherDamageMultiplier: 0.5
# Définit si le PvP sera autorisé dans les donjons
friendlyFireInDungeons: false
# Définit le texte qui apparaît au-dessus des bannières de résurrection dans les donjons
dungeonRezInstructions: '&aFrappez pour réanimer !'
# Définit le texte qui indique combien de vies il reste aux joueurs dans un donjon ! Espaces réservés :
# $amount - le nombre de vies restantes
dungeonLivesLeftText: '&c$amount vies restantes !'
# Définit le texte pour rejoindre un donjon en tant que joueur ! Espaces réservés :
# $dungeonName - le nom du donjon
joinDungeonAsPlayerText: '&fRejoindre $dungeonName en tant que joueur !'
# Définit le texte pour rejoindre un donjon en tant que spectateur ! Espaces réservés :
# $dungeonName - le nom du donjon
joinDungeonAsSpectatorText: '&fRejoindre $dungeonName en tant que spectateur !'
# Définit le titre qui apparaîtra dans la description de l'objet des menus de donjon instanciés
# $difficulty est l'espace réservé pour le nom de la difficulté dans le fichier de configuration du donjon
instancedDungeonTitle: Démarrer le donjon de difficulté $difficulty !
# Définit la description qui apparaîtra dans la description de l'objet des menus de donjon instanciés
# $dungeonName est l'espace réservé pour le nom du donjon dans le fichier de configuration du donjon
instancedDungeonDescription:
- '&fCréez une nouvelle instance du donjon'
- $dungeonName &fpour vous-même et peut-être
- '&fdes amis !'
# Définit si le contenu instancié spectateur sera disponible.
allowSpectatorsInInstancedContent: true
# Définit le message qui apparaît lorsqu'un donjon instancié est terminé
instancedDungeonCompleteMessage: '[EliteMobs] Donjon terminé ! Il s'autodétruira
  dans 2 minutes !'
# Définit le message qui apparaît lors de la fermeture d'un donjon instancié
instancedDungeonClosingInstanceMessage: '[EliteMobs] Fermeture de l'instance !'
```

</details>

---

## Quests.yml

`Quests.yml` Inclut les paramètres des quêtes et les messages qui sont affichés.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Définit si les quêtes doivent être retournées aux donneurs de quêtes pour terminer la quête.
requireQuestTurnIn: true
# Définit le message envoyé lorsqu'une quête est acceptée.
questJoinMessage: '&aVous avez accepté la quête $questName &a !'
# Définit le message envoyé lorsqu'une quête est abandonnée.
questLeaveMessage: '&cVous avez abandonné la quête $questName &c !'
# Définit le message envoyé lorsqu'une quête est terminée.
questCompleteMessage: '&2Vous avez terminé la quête $questName &2 !'
# Définit le message envoyé lorsqu'un joueur a essayé d'abandonner une quête alors qu'aucune n'est active.
leaveWhenNoActiveQuestsExist: '&cVous n'avez actuellement aucune quête active !'
# Définit le message de confirmation envoyé lorsque les joueurs tentent de quitter une quête.
questLeaveConfirmationMessage: '&cÊtes-vous sûr de vouloir abandonner votre quête actuelle ?
  Faites &a/em confirm &c pour confirmer votre choix !'
# Définit si certains des messages liés aux quêtes utiliseront des titres au lieu de messages de chat.
useQuestAcceptTitles: true
# Définit le titre envoyé lorsqu'un joueur démarre une quête.
questStartTitle: '&aQuête acceptée !'
# Définit le sous-titre envoyé lorsqu'un joueur démarre une quête.
questStartSubtitle: $questName
# Définit si les titres seront envoyés lorsque les joueurs termineront une quête.
useQuestCompleteTitles: true
# Définit le titre envoyé lorsqu'un joueur termine une quête.
questCompleteTitle: '&2Quête terminée !'
# Définit le sous-titre envoyé lorsqu'un joueur termine une quête.
questCompleteSubtitle: $questName
# Définit si les titres sont envoyés lorsque les joueurs quittent les quêtes.
useQuestLeaveTitles: true
# Définit le titre envoyé lorsqu'un joueur quitte une quête.
questLeaveTitle: '&cQuête abandonnée !'
# Définit le sous-titre envoyé lorsqu'un joueur quitte une quête.
questLeaveSubtitle: $questName
# Définit si les messages sont envoyés sur le chat pour signaler la progression de l'objectif de la quête.
doQuestChatProgression: true
# Définit les codes de couleur pour les objectifs terminés.
ongoingQuestColorCode: '&2'
# Définit le formatage des messages de progression des quêtes d'élimination.
killQuestChatProgressionMessage: '&8[EliteMobs]&c➤Tuer $name : $color$current&0/$color$target'
# Définit le formatage des messages de progression des quêtes de récupération.
fetchQuestChatProgressionMessage: '&8[EliteMobs]&c➤Obtenir $name : $color$current&0/$color$target'
# Définit le formatage des messages de progression des quêtes de dialogue.
dialogQuestChatProgressionMessage: '&8[EliteMobs]&c➤Parler à $name : $color$current&0/$color$target'
# Définit le nombre maximum de quêtes acceptées qu'un joueur peut avoir.
maximumActiveQuests: 10
# Définit le message envoyé aux joueurs lorsqu'ils tentent d'accepter un nombre de quêtes qui dépasse le plafond de quêtes actives.
questCapMessage: '&8[EliteMobs] &cVous avez atteint le nombre maximum de quêtes actives
  (10) ! &4Abandonnez ou terminez au moins une quête active si vous souhaitez obtenir plus de quêtes !'
# Définit si les messages des tableaux de bord seront utilisés pour les quêtes.
useQuestScoreboards: true
# Définit le formatage des messages de progression du tableau de bord des quêtes d'élimination.
killQuestScoreboardProgressionMessage: '&c➤Tuer $name : $color$current&0/$color$target'
# Définit le formatage du message de progression du tableau de bord des quêtes de récupération.
fetchQuestScoreboardProgressionMessage: '&c➤Obtenir $name : $color$current&0/$color$target'
# Définit le formatage des messages de progression du tableau de bord des quêtes de dialogue.
dialogQuestScoreboardProgressionMessage: '&c➤Parler à $name : $color$current&0/$color$target'
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
# Définit la commande envoyée en cliquant sur le message de suivi. Vous ne devriez vraiment pas modifier cela.
chatTrackCommand: /elitemobs quest track $questID
# Définit le message envoyé aux joueurs lors de l'activation du suivi des quêtes.
chatTrackingMessage: '&8[EliteMobs]&9 Vous suivez maintenant une quête !'
# Définit le message de survol du message de suivi de quête activé.
chatTrackingHover: '&2Cliquez pour désactiver/activer le suivi ! /em -> Quêtes pour suivre une quête différente !'
# Définit la commande envoyée en cliquant sur le message d'activation du suivi des quêtes. Vous ne devriez vraiment pas modifier cela.
chatTrackingCommand: /elitemobs quest track $questID
# Définit si les quêtes sont automatiquement suivies lorsqu'elles sont acceptées.
autoTrackQuestsOnAccept: true
# Définit le message qui apparaît lorsque la destination de la quête est introuvable.
noQuestDestinationFound: '[EM] Aucune destination de quête trouvée !'
# Définit le message qui apparaît lorsque la cible de la quête se trouve dans un monde différent.
questDestinationInOtherWorld: '[EM] Allez dans le monde $world !'
# Définit le message envoyé aux joueurs lorsqu'ils tentent d'accepter une quête qu'ils ont déjà terminée.
questAlreadyCompletedMessage: '&8[EliteMobs] &cVous avez déjà terminé cette quête !'
# Définit le message envoyé aux joueurs lorsqu'ils tentent d'accepter une quête pour laquelle ils n'ont pas la permission.
questPrerequisitesMissingMessage: '&8[EliteMobs] &cCe PNJ a des quêtes que vous
  ne pouvez pas encore accepter !'
# Définit le message envoyé aux joueurs qui essaient d'obtenir une quête pour laquelle ils n'ont pas le bon rang de guilde activé.
lowRankDynamicQuestWarning: '&8[EliteMobs] &cVous ne pouvez pas prendre ces quêtes avec votre
  rang de guilde actuel ! Augmentez votre rang de guilde pour accepter ces quêtes.'
# Définit le formatage du message de remise de quête.
questTurnInObjective: '&a2Parlez à $npcName'
# Définit le nombre maximum de caractères que les menus basés sur l'inventaire pour les quêtes auront avant de casser la ligne.
horizontalCharacterLimitBedrockMenu: 30
# Définit le nombre maximum de caractères par entrée d'objet dans les menus basés sur l'inventaire pour les quêtes avant de créer un autre objet pour continuer l'entrée.
itemEntryCharacterLimitBedrockMenu: 300
```

</details>

---

## resource_pack_config.yml

`resource_pack_config.yml` Inclut les paramètres liés au pack de ressources EliteMobs.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
eliteMobsResourcePackEnabled: false
forceResourcePack: false
resourcePackPrompt: '[EliteMobs] L'utilisation du pack de ressources est fortement recommandée !'
resourcePackLink: https://www.magmaguy.com/downloads/elitemobs_resource_pack.zip
```

</details>

---

## Sounds.yml

`Sounds.yml` Inclut les paramètres qui définissent les sons qui doivent être lus lorsque certaines interactions EliteMobs sont effectuées. Les fichiers sonores sont stockés dans le pack de ressources.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Définit le son qui sera lu lorsqu'un coffre au trésor s'ouvre
treasureChestOpenSound: elitemobs:treasure_chest.open
# Définit le son qui sera lu lorsqu'un joueur monte en grade dans la guilde
guildRankUpSound: elitemobs:guild.rankup
# Définit le son qui sera lu lorsqu'un joueur obtient un prestige dans la guilde
guildPrestigeSound: elitemobs:guild.prestige
# Définit le son qui sera lu lorsqu'un joueur progresse dans une quête
questProgressionSound: elitemobs:quest.progression
# Définit le son qui sera lu lorsqu'un joueur termine une quête
questCompleteSound: elitemobs:quest.completion
# Définit le son qui sera lu lorsqu'un joueur abandonne une quête
questAbandonSound: elitemobs:quest.abandon
# Définit le son qui sera lu lorsqu'un joueur accepte une quête
questAcceptSound: elitemobs:quest.accept
```

</details>

---

## Wormholes.yml

`Wormholes.yml` Inclut les paramètres pour les téléportations de trous de ver EliteMobs.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Définit le message qui apparaît lorsqu'une téléportation est utilisée pour un donjon qui n'est pas installé.
dungeonNotInstalledMessage: '&8[EliteMobs] &cDungeon $dungeonID &cn'est pas installé !
  Cette téléportation ne fonctionnera pas.'
# Définit le message qui apparaît lorsqu'un trou de ver est utilisé pour un donjon qui n'est pas installé.
defaultPortalMissingMessage: '&8[EliteMobs] &cCe portail ne semble mener nulle part !'
# Définit si le mode de particules réduites pour les trous de ver est utilisé. Ceci est particulièrement recommandé si vous autorisez les clients Bedrock.
reducedParticlesMode: true
# Définit si les trous de ver n'utilisent pas du tout de particules. Non recommandé, mais peut être nécessaire pour les très mauvais clients Bedrock.
noParticlesMode: false
# Définit le message qui est envoyé lorsqu'un joueur tente d'utiliser un trou de ver mais n'a pas assez de monnaie pour l'utiliser.
insufficientCurrencyForWormholeMessage: '&8[EliteMobs] &cMonnaie insuffisante ! Vous
  avez besoin de $amount pour utiliser ce trou de ver !'
```

</details>



