Voici la traduction en français, en conservant le formatage Markdown :

# Paramètres par défaut de la configuration EliteMobs

**EliteMobs est livré avec les paramètres par défaut recommandés installés par défaut. Si vous modifiez des choses au hasard, il y a de fortes chances que vous ne fassiez qu'empirer l'expérience globale.**

_**EliteMobs est fourni à tous les utilisateurs avec les paramètres par défaut recommandés. Si vous modifiez des choses au hasard et demandez ensuite de l'aide, il y a de très fortes chances qu'on vous dise de réinitialiser vos fichiers de configuration. Les modifications apportées au plugin doivent résulter de tests de jeu et non de simples suppositions.**_

## Pour commencer

EliteMobs offre actuellement une vaste gamme d'options de configuration en raison de la forte demande de personnalisation. Pour garder cette page wiki concise, seules les configurations par défaut seront affichées.

Si vous souhaitez en savoir plus sur un paramètre spécifique, vous pouvez vous référer au fichier de configuration et examiner les commentaires.

---

## config.yml

`config.yml` contient principalement des paramètres divers qui ne pouvaient pas facilement s'intégrer ailleurs au moment de leur création. C'est le fichier de configuration le plus susceptible de subir des modifications entre les versions.

<div align="left">

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Définit le fichier de langue utilisé par EliteMobs
# NE changez PAS ceci manuellement ! Il est destiné à être installé avec la commande '/em language <languagefile>'
language: english
# Définit si les élites et les boss engendrés par elitemobs afficheront toujours leurs étiquettes de nom.
# Non recommandé !
alwaysShowEliteMobNameTags: false
# Définit le nombre de mobs passifs qui doivent être à proximité avant de pouvoir être fusionnés.
# Ne mettez pas ceci à 0 !
superMobStackAmount: 50
# Fait en sorte que les élites n'endommagent pas les mobs passifs avec des explosions.
preventEliteCreeperDamageToPassiveMobs: true
# Définit si EliteMobs utilisera des titres pour avertir les joueurs des permissions manquantes
useTitlesForMissingPermissionMessages: true
# Définit si EliteMobs empêchera la conversion des mobs nommés en élites.
# Particulièrement important pour la compatibilité avec d'autres plugins.
preventEliteMobConversionOfNamedMobs: true
# Définit si EliteMobs convertira les mobs avec des raisons d'apparition personnalisées.
# L'exécution de certains plugins de boss définira automatiquement ceci sur vrai, quelle que soit la valeur dans la configuration.
enableHighCompatibilityMode: false
# Définit le bonus d'apparition d'élite pour le mode de jeu cauchemar
nightmareWorldSpawnBonus: 0.5
# Définit si la commande centralisée /em ouvre la page d'état principale du plugin.
# Fortement recommandé !
emLeadsToStatusMenu: true
# Définit si l'exécution de commandes spécifiques comme /em wallet mènera au menu /em où cette information est centralisée.
otherCommandsLeadToEMStatusMenu: true
# Définit si la configuration est terminée.
# Ne définissez pas cette valeur manuellement, elle est destinée à être modifiée par des commandes en jeu.
setupDoneV3: true
# Définit si les élites empêcheront l'apparition de renforts vanilla, comme pour la fonctionnalité de renforts de zombies.
preventVanillaReinforcementsForEliteEntities: true
# Définit l'emplacement d'apparition par défaut du serveur pour EliteMobs. /em spawntp mènera à cet emplacement.
defaultSpawnLocation: world,16.0,76.0,80.0,0.0,0.0
# Définit si EliteMobs régénérera les blocs détruits par les élites.
doExplosionRegen: true
# Définit si la régénération d'explosion régénérera également le contenu des conteneurs tels que les coffres.
# Le mettre sur faux fera en sorte que les explosions d'élite ne détruisent pas les conteneurs.
doRegenerateContainers: true
defaultTransitiveBlockLimiter: 500
# Définit si le menu /em utilisera uniquement le style de menu basé sur l'inventaire qui est compatible avec Bedrock.
# Pour rappel, les joueurs peuvent autrement utiliser la commande /em alt pour basculer entre les styles de menu /em
onlyUseBedrockMenus: false
# Définit la limite de caractères par ligne pour les pages de menu de livre.
# Diminuez ce montant si le texte est coupé dans les menus de livre tels que pour les quêtes
characterLimitForBookMenuPagesV2: 170
# Définit si l'espace vide du menu sera rempli de vitres.
# Non recommandé si vous utilisez le pack de ressources EliteMobs.
useGlassToFillMenuEmptySpace: false
# Définit si l'unicode sera utilisé pour formater le pack de ressources EliteMobs.
# Ne définissez pas ceci manuellement, il est défini automatiquement lors de l'installation du pack de ressources.
# Ne le définissez manuellement que si vous avez dû fusionner le pack de ressources EliteMobs, et attendez-vous à ce que l'espacement puisse ne pas fonctionner si vous le faites.
menuUnicodeFormatting: false
# Définit le message envoyé aux joueurs s'ils exécutent '/em confirm' sans commandes en attente.
noPendingCommands: '&cVous n''avez actuellement aucune commande en attente !'
# Définit le message de suivi pour les boss qui envoient des messages de suivi.
trackMessage: Suivre le $name
# Définit le message envoyé aux joueurs qui ouvrent des coffres au trésor avec des exigences de niveau supérieures à leur rang de guilde.
chestLowRankMessage: '&7[EM] &cVotre rang de guilde doit être au moins $rank &cpour ouvrir ce coffre !'
# Définit le message envoyé aux joueurs qui essaient de rouvrir un coffre au trésor qu'ils ont déjà ouvert.
chestCooldownMessage: '&7[EM] &cVous avez déjà ouvert ce coffre récemment ! Attendez $time !'
# Définit le message qui apparaît recommandant la commande /em alt pour les joueurs ayant des problèmes avec la commande /em
dismissEMMessage: '&8[EliteMobs] &2/elitemobs &fle menu ne fonctionne pas pour vous ? Essayez &2/elitemobs alt &fpour voir une version alternative du menu ! &cVous ne voulez plus voir ce message ? &4/em dismiss'
# Définit le message qui apparaît lorsque les joueurs exécutent la commande /em alt.
switchEMStyleMessage: '&8[EliteMobs] &2/elitemobs &fle style du menu a changé ! Jetez un œil !'
# Définit le message qui apparaît lorsqu'un joueur ouvre un coffre au trésor mais n'obtient rien
treasureChestNoDropMessage: '&8[EliteMobs] &cVous n''avez rien obtenu ! Meilleure chance la prochaine fois !'
# Définit le message qui apparaît lorsqu'un joueur essaie de suivre un boss qui n'est plus valide
bossAlreadyGoneMessage: '&c[EliteMobs] Désolé, ce boss est déjà parti !'
```

</details>

---

## AdventurersGuild.yml

`AdventurersGuild.yml` contient les paramètres de configuration pertinents à la fois pour le Hub de la Guilde des Aventuriers (le monde) et pour le système de montée en rang de la Guilde des Aventuriers.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Définit si EliteMobs ajoutera de la santé maximale lors du déverrouillage des rangs de guilde en tant que récompense de prestige
Add max health when unlocking higher guild ranks: true
# Définit si EliteMobs ajoutera une chance de coup critique lors du déverrouillage des rangs de guilde en tant que récompense de prestige
Add critical chance when unlocking higher guild ranks: true
# Définit si EliteMobs ajoutera une chance d'esquive lors du déverrouillage des rangs de guilde en tant que récompense de prestige
Add dodge chance when unlocking higher guild ranks: true
# Définit si les commandes utilisateur sont redirigées vers le hub de la guilde des aventuriers. Ceci est fortement recommandé pour l'immersion dans le jeu et à des fins de tutoriel.
userCommandsTeleportToAdventurersGuild: true
# Définit le nom d'affichage en jeu de la guilde des aventuriers
adventurersGuildMenuName: '&6&lHub de l''Aventurier'
Prestige 0 rank 0: '&8Roturier - désactive les élites !'
Prestige 0 rank 0 short placeholder: '&6&l✧&e0'
...
# Définit si le butin du joueur est limité par son niveau de guilde.
#  C'est une partie incroyablement importante d'EliteMobs et extrêmement fortement recommandée.
limitLootBasedOnGuildTier: true
# Définit le message envoyé aux joueurs si leur butin est affaibli en raison de leur faible niveau de guilde.
lootLimiterMessage: '&7[EM] &cVous devez déverrouiller le prochain rang de guilde via /ag pour obtenir de meilleurs objets !'
# Définit les commandes qui s'exécutent lors de la montée en rang de guilde. Les placeholders sont :
# $prestigerank - affiche le rang de prestige
# $activerank - affiche le rang actuellement actif
# $player - affiche le nom du joueur
onRankUpCommand: []
# Définit les commandes qui s'exécutent lors de la montée en rang de prestige.
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
# Définit le nombre de base estimé de boss qui doivent être tués pour pouvoir se permettre une montée en rang.
baseKillsForRankUp: 100
# Définit le nombre supplémentaire estimé de boss qui doivent être tués pour pouvoir monter en rang, par niveau.
# La formule est ce montant x le niveau actuel du joueur.
additionalKillsForRankUpPerTier: 50
# Définit le titre envoyé aux joueurs lorsque quelqu'un déverrouille un rang de prestige.
# $player est un placeholder qui est remplacé par le nom d'affichage du joueur.
prestigeUnlockMessageTitle: $player
# Définit le sous-titre envoyé aux joueurs lorsque quelqu'un déverrouille un rang de prestige.
# $tier est un placeholder qui est remplacé par le niveau de prestige du joueur.
prestigeUnlockMessageSubtitle: '&2a déverrouillé $tier&2 !'
# Définit le multiplicateur qui sera appliqué à la chance d'apparition lorsque les joueurs utilisent le rang pacifique (commoner).
peacefulModeEliteChanceDecrease: 0.2
# Définit la liste des mondes auxquels les bonus de rang de guilde ne seront pas appliqués
worldsWithoutAGBonuses: []
# Désactive la capacité des utilisateurs à passer en mode pacifique pour EliteMobs. Le mode pacifique réduit le niveau et les taux d'apparition des mobs autour de ce joueur spécifiquement
disableCommonerRank: false
```

</details>

---

## AntiExploit.yml

`AntiExploit.yml` permet aux administrateurs de personnaliser différents aspects du système AntiExploit. Le système AntiExploit existe pour empêcher les joueurs d'utiliser des choses comme les fermes à mobs pour farmer facilement des pièces et du butin, et les pousse à faire de vrais combats et des mini-donjons au lieu de cliquer AFK pour atteindre le sommet du plugin.

C'est un système essentiel à maintenir activé si vous ne voulez pas que les gens se contentent de farmer AFK tout le plugin et que vous voulez qu'ils interagissent réellement avec les mini-donjons.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Définit le message qui s'affiche lorsque l'antiexploit est déclenché.
AntiExploit message: '&c[EM AntiExploit] &7L''élite proche ne laissera pas tomber de butin spécial.'
# Définit si l'antiexploit chambre noire 1 est activé.
# Les fonctionnalités spécifiques de l'antiexploit ne sont pas documentées intentionnellement. Les opérateurs de serveur peuvent voir quel type d'antiexploit a été déclenché, mais des informations supplémentaires sur son fonctionnement spécifique ne sont pas disponibles.
Enable darkroom antiexploit 1: true
# Définit si l'antiexploit chambre noire 2 est activé.
# Les fonctionnalités spécifiques de l'antiexploit ne sont pas documentées intentionnellement. Les opérateurs de serveur peuvent voir quel type d'antiexploit a été déclenché, mais des informations supplémentaires sur son fonctionnement spécifique ne sont pas disponibles.
Enable darkroom antiexploit 2: true
# Définit si l'antiexploit chambre noire 3 est activé.
# Les fonctionnalités spécifiques de l'antiexploit ne sont pas documentées intentionnellement. Les opérateurs de serveur peuvent voir quel type d'antiexploit a été déclenché, mais des informations supplémentaires sur son fonctionnement spécifique ne sont pas disponibles.
Enable darkroom antiexploit 3: true
# Définit si l'antiexploit grande chambre noire 1 est activé.
# Les fonctionnalités spécifiques de l'antiexploit ne sont pas documentées intentionnellement. Les opérateurs de serveur peuvent voir quel type d'antiexploit a été déclenché, mais des informations supplémentaires sur son fonctionnement spécifique ne sont pas disponibles.
Enable large darkroom antiexploit 1: true
# Définit si l'antiexploit hauteur enderman est activé.
# Les fonctionnalités spécifiques de l'antiexploit ne sont pas documentées intentionnellement. Les opérateurs de serveur peuvent voir quel type d'antiexploit a été déclenché, mais des informations supplémentaires sur son fonctionnement spécifique ne sont pas disponibles.
Enable enderman height antiexploit: true
# Définit si l'antiexploit monture est activé.
# Les fonctionnalités spécifiques de l'antiexploit ne sont pas documentées intentionnellement. Les opérateurs de serveur peuvent voir quel type d'antiexploit a été déclenché, mais des informations supplémentaires sur son fonctionnement spécifique ne sont pas disponibles.
Enable mount antiexploit: true
# Définit si les mobs élites peuvent ramasser des objets
preventItemPickupByMobs: true
# Définit si l'antiexploit dégâts ambiants est activé.
# Les fonctionnalités spécifiques de l'antiexploit ne sont pas documentées intentionnellement. Les opérateurs de serveur peuvent voir quel type d'antiexploit a été déclenché, mais des informations supplémentaires sur son fonctionnement spécifique ne sont pas disponibles.
Enable ambient damage antiexploit: true
# Définit si l'antiexploit bloc de miel est activé.
# Les fonctionnalités spécifiques de l'antiexploit ne sont pas documentées intentionnellement. Les opérateurs de serveur peuvent voir quel type d'antiexploit a été déclenché, mais des informations supplémentaires sur son fonctionnement spécifique ne sont pas disponibles.
Enable honey block antiexploit: true
# Définit le seuil d'activation de l'antiexploit. Des valeurs plus élevées le rendent plus tolérant. La modification de ceci n'est pas recommandée.
antiExploitThreshold: 10
# Définit si l'antiexploit sans chemin est activé
nPathExploit: true
```

</details>

---

## CombatTag.yml

`CombatTag.yml` contient les paramètres de configuration pour le système de Combat Tag. Ce système est encore très loin d'être complet, mais il tente de gérer le comportement des joueurs une fois qu'ils entrent en combat.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Définit si le combat tag est activé.
# Lorsqu'il est activé, les joueurs en vol qui s'engagent dans un combat sont forcés d'arrêter de voler.
Enable combat tag: true
# Définit le message envoyé lorsque le combat tag est activé.
Combat tag message: '&c[EliteMobs] Combat tag activé !'
# Définit si la commande /ag aura un compte à rebours avant la téléportation
Enable adventurers guild teleport timer: true
# Définit le message d'action affiché en attendant le compte à rebours de téléportation.
Teleport time left: '&7[EM] Téléportation dans &a$time &7secondes...'
# Définit le message envoyé lorsque les joueurs bougent en attendant la téléportation.
Teleport cancelled: '&7[EM] &cTéléportation interrompue !'
```

</details>

---

## DiscordSRV.yml

`DiscordSRV.yml` contient les paramètres de configuration pour DiscordSRV. Si vous voulez voir comment configurer cette fonctionnalité, [cliquez ici !]($language$/elitemobs/discordsrv.md)

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# La documentation peut être trouvée ici : https://magmaguy.com/wiki.html#lang=en&article=elitemobs+discordsrv.md
announcementRoomName: YOU_NEED_TO_PUT_THE_NAME_OF_THE_DISCORD_ROOM_YOU_WANT_ELITEMOBS_ANNOUNCEMENTS_TO_BE_BROADCASTED_IN_AS_YOU_HAVE_IN_YOUR_DISCORDSRV_CONFIGURATION_FILE_CHECK_ELITEMOBS_WIKI_FOR_DETAILS

```

</details>

---

## EconomySettings.yml

`EconomySettings.yml` contient les paramètres de configuration pour l'économie d'EliteMobs.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Définit si l'économie d'EliteMobs est activée. Cela inclut les pièces d'élite, la possibilité d'acheter et de vendre de l'équipement et la possibilité d'améliorer les rangs de guilde
# Si désactivé, les joueurs ne pourront pas progresser dans le plugin !
enableEconomy: true
# Définit le prix de revente des objets, en % du prix d'origine. 5 correspond à 5%
itemResaleValue: 5.0
# Définit le nom en jeu de la monnaie utilisée.
currencyName: Pièces d'Élite
# Définit le plugin pour utiliser Vault. CECI N'EST PAS RECOMMANDÉ ! Lisez pourquoi ici : https://github.com/MagmaGuy/EliteMobs/wiki/%5BThird-party-support%5D-Vault
useVault - not recommended: false
# Définit si les élites laisseront tomber des pièces en fonction de leur niveau.
enableCurrencyShower: true
# Définit le multiplicateur pour la monnaie laissée tomber par les élites.
currencyShowerTierMultiplier: 1.0
# Définit le message envoyé lorsque les joueurs ramassent de la monnaie d'élite.
chatCurrencyShowerMessage: '&7[EM] Vous avez ramassé &a$amount $currency_name !'
# Définit le message de la barre d'action envoyé lorsque les joueurs ramassent de la monnaie d'élite.
actionbarCurrencyShowerMessage: '&7[EM] Vous avez ramassé &a$amount $currency_name !'
# Envoie le message que les joueurs reçoivent après avoir pillé de la monnaie. Utile à des fins de tutoriel.
adventurersGuildNotificationMessages: '&7[EM] Argent de poche supplémentaire ? Essayez &a/ag !'
# Définit le taux de taxe pour les transactions entre joueurs.
# Fortement recommandé pour des raisons d'équilibre, car les joueurs de haut niveau peuvent gagner jusqu'à 6 fois plus de monnaie et essayer d'utiliser d'autres joueurs pour contourner les réinitialisations de monnaie de prestige.
playerToPlayerPaymentTaxes: 0.2
# Message envoyé lors de l'envoi de monnaie d'élite à d'autres joueurs.
Economy pay message v2: '&2Vous avez payé &2$amount_sent $currency_name &2à $receiver&2,
  qui a reçu $amount_received après taxes !'
# Message envoyé après que les joueurs ont envoyé de la monnaie.
Economy currency left message: Vous avez maintenant &2$amount_left $currency_name
# Message reçu lors de la réception de monnaie.
Economy money from payment message: Vous avez reçu &2$amount_received $currency_name
  &fde $sender
# Message envoyé lorsque les joueurs essaient d'envoyer un montant de pièces qu'ils n'ont pas.
Economy payment insufficient currency: '&cVous n''avez pas assez de $currency_name pour
  faire cela !'
# Message /em balance
Wallet command message: Vous avez &2$balance $currency_name
# Message de confirmation envoyé lorsque les joueurs essaient d'envoyer de la monnaie à un autre joueur.
Tax confirmation message: '&cL''envoi d''un paiement coûtera $percentage% en taxes. &aFaites
  &9$command &apour continuer !'
# Message envoyé lorsqu'un joueur achète dans une boutique.
Shop buy message: '&aVous avez acheté $item_name &apour $item_value $currency_name !'
# Message envoyé lorsqu'un joueur interagit avec une boutique.
Shop current balance message: '&aVous avez $currency_amount $currency_name.'
# Message sent when players don't have enough currency to purchase an item
Shop insufficient funds message: '&cVous n''avez pas assez de $currency_name !'
# Deuxième partie du message envoyé lorsque les joueurs essaient d'acheter un objet qu'ils ne peuvent pas se permettre.
Shop item cost message: Cet objet coûte &c$item_value $currency_name.
# Message envoyé lors de la vente d'un objet à une boutique.
Shop sell message: '&aVous avez vendu $item_name &apour $currency_amount $currency_name !'
# Message envoyé lors de la tentative de vente d'un objet qui n'appartient pas à ce joueur.
Shop sale player items warning: '&cVous ne pouvez pas vendre des objets qui ne vous sont pas actuellement liés par l''âme ! Cela inclut les objets d''autres niveaux de prestige !'
# Message envoyé lors de la tentative de vente d'un objet non-EliteMobs
Shop sale instructions: '&cVous ne pouvez vendre ici que le butin d''EliteMobs ! (Armures / armes laissées par les élites affichant une valeur dans leur description)'
# Message envoyé lors de la vente d'un lot d'objets d'élite.
shopBatchSellItem: '&aVous avez vendu vos objets &apour $currency_amount $currency_name !'
lootShowerMaterial:
  # Définit le type de matériau d'une pièce d'élite tombée.
  '1': GOLD_NUGGET
  '5': GOLD_INGOT
  '10': GOLD_BLOCK
  '20': EMERALD
  '50': EMERALD_BLOCK
  '100': DIAMOND
  '500': DIAMOND_BLOCK
  '1000': NETHER_STAR
lootShowerData:
  # Définit l'ID de modèle personnalisé pour une pièce d'élite tombée. Utilisé par le pack de ressources.
  '1': 1
  '5': 1
  '10': 1
  '20': 1
  '50': 1
  '100': 1
  '500': 1
  '1000': 1
materialWorth:
  # Définit la valeur de ce matériau pour le système de monnaie elitemobs.
  DIAMOND_AXE: 17.0
  # Définit la valeur de ce matériau pour le système de monnaie elitemobs.
  DIAMOND_BOOTS: 17.0
  # Définit la valeur de ce matériau pour le système de monnaie elitemobs.
  DIAMOND_CHESTPLATE: 17.0
  # Définit la valeur de ce matériau pour le système de monnaie elitemobs.
  DIAMOND_LEGGINGS: 17.0
  # Définit la valeur de ce matériau pour le système de monnaie elitemobs.
  DIAMOND_HELMET: 17.0
  # Définit la valeur de ce matériau pour le système de monnaie elitemobs.
  DIAMOND_PICKAXE: 17.0
  # Définit la valeur de ce matériau pour le système de monnaie elitemobs.
  DIAMOND_SHOVEL: 17.0
  # Définit la valeur de ce matériau pour le système de monnaie elitemobs.
  DIAMOND_SWORD: 17.0
  # Définit la valeur de ce matériau pour le système de monnaie elitemobs.
  DIAMOND_HOE: 17.0
  # Définit la valeur de ce matériau pour le système de monnaie elitemobs.
  IRON_AXE: 16.0
```

</details>Okay, please provide the target language for the translation. I will translate the text, preserving all markdown formatting and only translating the comments and the text within the summary tags.Please specify the language you would like the text translated into. I will then translate it while retaining the markdown formatting.Please specify the language you would like me to translate the text into. I will retain the markdown formatting once you provide the target language.