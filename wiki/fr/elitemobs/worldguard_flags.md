Voici une liste des indicateurs WorldGuard qu'EliteMobs possède et de leur fonction.

***

# elitemob-spawning (autoriser/refuser)
Indique si les mobs d'élite peuvent apparaître dans la région. Le comportement par défaut est que les mobs d'élite sont autorisés à apparaître partout, et donc l'utilisation principale de cet indicateur est de les désactiver pour une région spécifique. Si vous souhaitez désactiver la génération de mobs d'élite pour un monde entier, je vous recommande de modifier plutôt le fichier ValidWorlds.yml.

***

# elitemob-only-spawning (autoriser/refuser)
Indique si seuls les mobs d'élite peuvent apparaître dans une région. Cela n'augmente pas la quantité de mobs d'élite qui apparaissent dans une zone, cela empêche uniquement les entités de mob non élite d'apparaître dans cette zone. Ceci est destiné aux utilisateurs qui souhaitent avoir des zones entières où seuls les mobs d'élite peuvent apparaître, comme les arènes ou les zones de difficulté supérieure.

***

# elitemobs-antiexploit (autoriser/refuser)
Indique si l'antiexploit peut se déclencher dans une région. Autoriser permettra l'exécution de l'antiexploit, refuser l'empêchera de s'exécuter. Le refus est recommandé pour les arènes et les donjons préfabriqués où vous avez déjà testé le terrain à la recherche d'exploits.

***

Veuillez également noter : les PNJ remplacent l'indicateur de refus de la génération de mobs comme une forme de compatibilité tierce avec WorldGuard. Si vous ne souhaitez pas avoir de PNJ dans une zone, je vous recommande de les supprimer manuellement.

***

# elitemobs-maximum-level

Définit le niveau maximal des mobs d'élite qui peuvent apparaître dans une région. N'affecte que les élites générées naturellement (les boss personnalisés ignorent ceci). Le niveau doit être une valeur entière (pas de valeurs comme `1.5`, vous devez utiliser des nombres entiers comme `1` ou `2`).

***

# elitemobs-minimum-level

Définit le niveau minimal des mobs d'élite qui peuvent apparaître dans une région. N'affecte que les élites générées naturellement (les boss personnalisés ignorent ceci). Le niveau doit être une valeur entière (pas de valeurs comme `1.5`, vous devez utiliser des nombres entiers comme `1` ou `2`).

***

# elitemobs-dungeon

Définit la zone pour n'autoriser que les mobs normaux engendrés avec la raison de génération CUSTOM, ainsi que les boss régionaux et les boss personnalisés. Ceci est à utiliser dans les mini-donjons.
