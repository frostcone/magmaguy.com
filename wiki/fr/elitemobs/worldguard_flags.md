Voici les drapeaux WorldGuard d'EliteMobs et leur fonction.


***

# elitemob-spawning (autoriser/refuser)
Définit si les monstres d'élite peuvent apparaître dans la région. Le comportement par défaut est que les monstres d'élite sont autorisés à apparaître partout, et par conséquent, l'utilisation principale de ce drapeau est de les désactiver pour une région spécifique. Si vous souhaitez désactiver l'apparition de monstres d'élite pour un monde entier, je vous recommande de modifier le fichier ValidWorlds.yml à la place.


***

# elitemob-only-spawning (autoriser/refuser)
Définit si seuls les monstres d'élite peuvent apparaître dans une région. Cela n'augmente pas le nombre de monstres d'élite qui apparaissent dans une zone, cela empêche uniquement les entités de monstres non-élites d'apparaître dans cette zone. Ceci est destiné aux utilisateurs qui souhaitent avoir des zones entières où seuls les monstres d'élite peuvent apparaître, comme des arènes ou des zones de difficulté plus élevée.


***

# elitemobs-antiexploit (autoriser/refuser)
Définit si l'anti-exploitation peut se déclencher dans une région. Autoriser permettra à l'anti-exploitation de s'exécuter, refuser l'empêchera de s'exécuter. Refuser est recommandé pour les arènes et les donjons préconfigurés où vous avez déjà testé le terrain pour les exploits.

***

Veuillez également noter que les PNJ remplacent le drapeau de refus d'apparition de monstres comme une forme de compatibilité tierce avec WorldGuard. Si vous ne souhaitez pas avoir de PNJ dans une zone, je vous recommande de les supprimer manuellement.

***

# elitemobs-maximum-level

Définit le niveau maximum des monstres d'élite qui peuvent apparaître dans une région. Affecte uniquement les élites qui apparaissent naturellement (les boss personnalisés ignorent cela). Le niveau doit être une valeur entière (pas de valeurs comme `1.5`, vous devez utiliser des nombres entiers comme `1` ou `2`).

***

# elitemobs-minimum-level

Définit le niveau minimum des monstres d'élite qui peuvent apparaître dans une région. Affecte uniquement les élites qui apparaissent naturellement (les boss personnalisés ignorent cela). Le niveau doit être une valeur entière (pas de valeurs comme `1.5`, vous devez utiliser des nombres entiers comme `1` ou `2`).

***

# elitemobs-dungeon

Définit la zone pour n'autoriser que les monstres normaux générés avec la raison d'apparition CUSTOM, ainsi que les boss régionaux et les boss personnalisés. Ceci est destiné à une utilisation dans les mini-donjons.

```

