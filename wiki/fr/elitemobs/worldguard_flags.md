Voici les drapeaux WorldGuard d'EliteMobs et leur fonction.

***

# elitemob-spawning (autoriser/refuser)
Définit si les Mobs Élite peuvent apparaître dans la région. Le comportement par défaut est que les Mobs Élite sont autorisés à apparaître partout, et l'utilisation principale de ce drapeau est donc de les désactiver pour une région spécifique. Si vous souhaitez désactiver l'apparition des Mobs Élite pour un monde entier, je recommande plutôt de modifier le fichier ValidWorlds.yml.

***

# elitemob-only-spawning (autoriser/refuser)
Définit si seuls les Mobs Élite peuvent apparaître dans une région. Cela n'augmente pas la quantité de Mobs Élite qui apparaissent dans une zone, cela empêche seulement les entités de mobs non-élite d'apparaître dans cette zone. Ceci est destiné aux utilisateurs qui souhaitent avoir des zones entières où seuls les Mobs Élite peuvent apparaître, comme des arènes ou des zones de difficulté supérieure.

***

# elitemobs-antiexploit (autoriser/refuser)
Définit si l'antiexploit peut se déclencher dans une région. Autoriser permettra à l'Antiexploit de s'exécuter, refuser l'empêchera de s'exécuter. Refuser est recommandé pour les arènes et donjons préfabriqués où vous avez déjà testé le terrain pour les exploits.

***

Veuillez également noter : Les PNJ outrepassent le drapeau de refus d'apparition de mobs (mob-spawning deny) comme une forme de compatibilité tierce avec WorldGuard. Si vous ne souhaitez pas avoir de PNJ dans une zone, je recommande de les retirer manuellement.

***

# elitemobs-maximum-level

Définit le niveau maximum des mobs élite qui peuvent apparaître dans une région. N'affecte que les élites apparues naturellement (les Bosses Personnalisés ignorent cela). Le niveau doit être une valeur entière (pas de valeurs comme `1.5`, vous devez utiliser des nombres entiers comme `1` ou `2`).

***

# elitemobs-minimum-level

Définit le niveau minimum des mobs élite qui peuvent apparaître dans une région. N'affecte que les élites apparues naturellement (les Bosses Personnalisés ignorent cela). Le niveau doit être une valeur entière (pas de valeurs comme `1.5`, vous devez utiliser des nombres entiers comme `1` ou `2`).

***

# elitemobs-dungeon

Définit la zone pour n'autoriser que les mobs normaux apparus avec la raison d'apparition CUSTOM, ainsi que les Bosses Régionaux et les Bosses Personnalisés. Ceci est destiné à être utilisé dans les mini-donjons.