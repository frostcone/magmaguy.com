Voici les flags WorldGuard qu'EliteMobs possède et leur fonction.

***

# elitemob-spawning (autoriser/refuser)

Détermine si les Elite Mobs peuvent apparaître dans la région. Le comportement par défaut est que les Elite Mobs sont
autorisés à apparaître partout, et par conséquent, l'utilisation principale de ce flag est de les désactiver pour une
région spécifique. Si vous souhaitez désactiver l'apparition d'Elite Mobs pour un monde entier, je vous recommande de
modifier le fichier ValidWorlds.yml à la place.

***

# elitemob-only-spawning (autoriser/refuser)

Détermine si seuls les Elite Mobs peuvent apparaître dans une région. Cela n'augmente pas le nombre d'Elite Mobs qui
apparaissent dans une zone, cela empêche seulement les entités de mobs non-élites d'apparaître dans cette zone. Ceci est
destiné aux utilisateurs qui souhaitent avoir des zones entières où seuls les Elite Mobs peuvent apparaître, comme des
arènes ou des zones de difficulté supérieure.

***

# elitemobs-antiexploit (autoriser/refuser)

Détermine si l'anti-exploit peut se déclencher dans une région. "Autoriser" permettra à l'anti-exploit de s'exécuter, "
refuser" l'empêchera de s'exécuter. "Refuser" est recommandé pour les arènes et les donjons préfabriqués où vous avez
déjà testé le terrain pour les exploits.

***

Veuillez également noter : les PNJ outrepassent le flag de refus d'apparition de mobs en tant que forme de compatibilité
tierce avec WorldGuard. Si vous ne souhaitez pas avoir de PNJ dans une zone, je vous recommande de les supprimer
manuellement.

***

# elitemobs-maximum-level

Définit le niveau maximum des elite mobs qui peuvent apparaître dans une région. N'affecte que les élites qui
apparaissent naturellement (les Boss personnalisés ignorent cela). Le niveau doit être une valeur entière (pas de
valeurs comme `1.5`, vous devez utiliser des nombres entiers comme `1` ou `2`).

***

# elitemobs-minimum-level

Définit le niveau minimum des elite mobs qui peuvent apparaître dans une région. N'affecte que les élites qui
apparaissent naturellement (les Boss personnalisés ignorent cela). Le niveau doit être une valeur entière (pas de
valeurs comme `1.5`, vous devez utiliser des nombres entiers comme `1` ou `2`).

***

# elitemobs-dungeon

Définit la zone pour n'autoriser que les mobs normaux apparus avec la raison d'apparition CUSTOM, ainsi que les Boss
régionaux et les Boss personnalisés. Ceci est à utiliser dans les mini-donjons.
