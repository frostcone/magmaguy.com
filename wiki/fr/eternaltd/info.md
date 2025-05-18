Voici la traduction en français, en conservant le formatage markdown :

# Comment créer une carte EternalTD personnalisée

## Créer le fichier level.yml pour votre carte

Commencez à créer votre carte en créant un fichier de configuration de niveau en suivant ces étapes simples :

1.  Commencez par créer un nouveau document texte et donnez-lui un nom comme *nom_de_votre_niveau.yml* (remplacez "nom_de_votre_niveau" par le nom réel de votre niveau/carte).

2.  Ouvrez le fichier dans votre éditeur de texte préféré.

3.  Commençons par la partie amusante ! Ajoutez le nom de votre niveau en utilisant ce paramètre :
    ```yaml
    levelName: "&aMy Awesome Level"
    ```
    N'hésitez pas à l'agrémenter de couleurs Minecraft ou d'autres modificateurs de texte.

4.  Maintenant, donnez du caractère à votre niveau avec une description sympa :
    ```yaml
    levelDescription:
    - "&aMy level is pretty cool."
    - "&aHope you enjoy!"
    ```
    Vous pouvez ajouter plus de lignes à la description, mais il est conseillé de la garder brève.

5.  C'est l'heure des vagues ! Spécifiez quelles vagues EternalTD votre niveau doit utiliser :
    ```yaml
    wavesConfigFile: my_waves.yml
    ```
    N'oubliez pas d'utiliser le nom réel de votre fichier de vagues. Une vague par niveau !

6.  Définissez le monde (construction) que votre niveau utilisera :
    ```yaml
    worldName: my_world_folder_name
    ```
    Utilisez le nom réel du monde trouvé dans le dossier *worlds* d'EternalTD.

7.  Enfin et surtout, choisissez l'environnement parfait pour le cadre de votre niveau :
    ```yaml
    environment: NORMAL
    ```
    Vous pouvez choisir entre NORMAL, NETHER ou THE_END. Faites votre choix.

Votre fichier de configuration de niveau est prêt ! Le reste du fichier sera rempli par les commandes EternalTD que nous utiliserons dans les prochaines étapes lorsque nous mapperons la construction.

## Préparer votre construction

Avant de mapper votre construction pour l'utiliser avec EternalTD, il est essentiel de la configurer de la manière suivante :

-   Placez-la dans un monde Vide (Void). Si vous utilisez Multiverse, vous pouvez utiliser la commande :
    ```
    /mvcreate yourworldnamehere NORMAL -g VoidGen:.
    ```
-   Ayez une bordure de monde (world border) serrée autour de la construction.
-   Créez un cylindre de barrière (barrier) quelques blocs en dessous de la construction avec une hauteur d'un bloc et un rayon suffisamment grand pour atteindre la bordure du monde (rayon recommandé de 200 blocs). En utilisant WorldEdit, vous pouvez exécuter :
    ```
    //cyl barrier 200 1
    ```
-   Définissez le point d'apparition (spawn point) au centre de la construction dans un endroit sûr.
-   Appliquez les règles suivantes :
    -   /gamerule doWeatherCycle false
    -   /gamerule doDaylightCycle false
    -   /gamerule doMobSpawning false
    -   /gamerule doFireTick false
    -   /gamerule fireDamage false
    -   /gamerule mobGriefing false
    -   /gamerule disableRaids true
    -   /gamerule announceAdvancements false
-   La zone de jeu de la carte doit être au même niveau Y. Tout ce qui est plus haut ou plus bas sera ignoré lorsque nous commencerons le processus de mappage.

## Mapper la construction pour l'utiliser avec EternalTD

Pour mapper la zone de jeu de votre construction afin de l'utiliser avec EternalTD, suivez ces étapes :

1.  Mesurez manuellement la construction, en vous assurant d'inclure uniquement la zone de jeu et rien d'autre. Notez les coordonnées au fur et à mesure de votre mesure.
    <br>La zone de jeu doit inclure les sections de début (apparition des monstres) et de fin de la carte. Le début est généralement construit avec des blocs verts et la fin avec des blocs rouges.

2.  Commencez par mesurer les axes X, Y et Z de la construction. Tenez-vous à un coin de la zone de jeu de votre carte sur l'axe X et notez la coordonnée rapportée (vous pouvez utiliser les coordonnées de bloc pour cela). Déplacez-vous vers le côté opposé de l'axe X et notez cette coordonnée.

3.  Pour l'axe Y, tenez-vous sur la **zone de jeu** et notez la coordonnée rapportée.

4.  Répétez le même processus que pour l'axe X pour mesurer l'axe Z. Vous pouvez jeter un œil à cette image d'exemple pour vous aider à comprendre ce que nous essayons d'accomplir ici :
    ![Mapping Example](https://i.imgur.com/IZfh2Nt.jpeg)
    Remarquez comment nous ne mesurons que les coordonnées où nous voulons que notre zone de jeu se trouve et ignorons le reste. Comme dans l'exemple, assurez-vous d'inclure le début et la fin lors de la mesure de la zone de jeu. <br>Si la zone de jeu que vous mesurez est plus large à une extrémité et plus étroite à l'autre, vous devez mesurer la section la plus large.

5.  Après avoir terminé les mesures, vous devriez avoir quelque chose comme ceci :
    ```
    X axis: -57, 56
    Y axis: 65
    Z axis: 34, -34
    ```

6.  Réorganisez ces nombres du plus élevé au plus bas pour obtenir deux ensembles complets de coordonnées XYZ :
    ```
    56 65 34 (valeurs XYZ les plus élevées)
    -57 65 -34 (valeurs XYZ les plus basses)
    ```

7.  Utilisez la commande suivante pour sélectionner les coordonnées :
    ```
    /etd selectfloorcoordinate Xhigh Y Zhigh Xlow Y Zlow
    Exemple : /etd selectfloorcoordinate 56 65 34 -57 65 -34
    ```

8.  Les coordonnées ont maintenant été sélectionnées et sont en mémoire. Si vous obtenez une erreur, c'est que votre mesure était incorrecte ou que la zone de jeu n'a pas été correctement construite. Pour vérifier si nous avons correctement mappé la zone de jeu, exécutez la commande suivante :
    ```
    /etd register your_level_name.yml test
    ```
    Remplacez "your_level_name" par le nom réel du niveau/carte que vous essayez de créer. Si tout a été fait correctement, vous devriez voir des barrières marquant chaque tuile de votre zone de jeu.

9.  Parcourez la zone de jeu et assurez-vous que tout semble correct, puis exécutez à nouveau la commande, mais cette fois sans le *test* à la fin.
    ````
    /etd register your_level_name.yml
    ````
    Cela enregistrera maintenant la zone de jeu dans votre fichier de niveau et votre fichier de niveau devrait maintenant être prêt à être utilisé.

## Alléger le dossier du monde

Il y a plusieurs fichiers et dossiers situés dans le dossier de votre monde que nous pouvons supprimer car EternalTD ne les utilise pas tous. Cela réduira la taille de votre monde et le rendra plus facile à distribuer.

Pour l'environnement NORMAL :

Pour préparer votre monde, **conservez** les fichiers et dossiers suivants :

1.  Le dossier **region**

2.  Le fichier **raids.dat** depuis l'intérieur du dossier **data** (assurez-vous qu'il se trouve bien dans le dossier **data** lors de la copie)

3.  Le fichier **level.dat**

Vous pouvez supprimer en toute sécurité tous les autres fichiers et dossiers situés dans le dossier du monde. Cela configurera correctement votre monde pour l'environnement NORMAL.

Pour les environnements NETHER et THE_END :

Pour préparer votre monde, conservez les fichiers et dossiers suivants :

1.  Le dossier **region** à l'intérieur du dossier **DIM-1** (assurez-vous qu'il se trouve bien dans le dossier **DIM-1** lors de la copie)

2.  Le fichier **raids.dat** depuis l'intérieur du dossier **data** (assurez-vous qu'il se trouve bien dans le dossier **data** lors de la copie)

3.  Le fichier **level.dat**

Vous pouvez supprimer en toute sécurité tous les autres fichiers et dossiers situés dans le dossier du monde. Cela configurera correctement votre monde pour les environnements NETHER et THE_END.