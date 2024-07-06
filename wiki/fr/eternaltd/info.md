# Comment créer une carte EternalTD personnalisée

## Créer le fichier level.yml pour votre carte

Lancez la création de votre carte en créant un fichier de configuration de niveau en suivant ces étapes simples :

1. Commencez par créer un nouveau document texte et donnez-lui un nom comme *your_level_name.yml* (remplacez « your_level_name » par le nom réel de votre niveau/carte).

2. Ouvrez le fichier dans votre éditeur de texte préféré.

3. Commençons par la partie amusante ! Ajoutez le nom de votre niveau en utilisant ce paramètre :
```yaml
levelName: "&aMy Awesome Level"
```
N'hésitez pas à l'agrémenter de couleurs Minecraft ou d'autres modificateurs de texte.

4. Maintenant, donnez à votre niveau du caractère avec une description cool :
```yaml
levelDescription:
- "&aMy level is pretty cool."
- "&aHope you enjoy!"
```
Vous pouvez ajouter plus de lignes à la description, mais il est bon de la garder brève.

5. C'est l'heure des vagues ! Spécifiez les vagues EternalTD que votre niveau doit utiliser :
```yaml
wavesConfigFile: my_waves.yml
```
N'oubliez pas d'utiliser le nom réel de votre fichier de vague. Une vague par niveau !

6. Définissez le monde (construction) que votre niveau utilisera :
```yaml
worldName: my_world_folder_name
```
Utilisez le nom réel du monde que vous trouverez dans le dossier *worlds* d'EternalTD.

7. Enfin, mais non des moindres, choisissez l'environnement idéal pour le cadre de votre niveau :
```yaml
environment: NORMAL
```
Vous pouvez choisir entre NORMAL, NETHER ou THE_END. À vous de choisir.

Votre fichier de configuration de niveau est prêt ! Le reste du fichier sera rempli par les commandes EternalTD que nous utiliserons dans les étapes suivantes lorsque nous cartographierons la construction.

## Préparer votre construction

Avant de cartographier votre construction pour une utilisation avec EternalTD, il est essentiel de la configurer de la manière suivante :

- Définissez-la dans un monde vide. Si vous utilisez Multiverse, vous pouvez utiliser la commande :
  ```
  /mvcreate yourworldnamehere NORMAL -g VoidGen:.
  ```
- Ayez une frontière mondiale serrée autour de la construction.
- Créez un cylindre de barrière quelques blocs en dessous de la construction avec une hauteur d'un bloc et un rayon suffisamment grand pour atteindre la frontière mondiale (rayon de 200 blocs recommandé). En utilisant WorldEdit, vous pouvez exécuter :
  ```
  //cyl barrier 200 1
  ```
- Définissez le point d'apparition au centre de la construction dans un endroit sûr.
- Appliquez les règles suivantes :
    - /gamerule doWeatherCycle false
    - /gamerule doDaylightCycle false
    - /gamerule doMobSpawning false
    - /gamerule doFireTick false
    - /gamerule fireDamage false
    - /gamerule mobGriefing false
    - /gamerule disableRaids true
    - /gamerule announceAdvancements false
- La zone de jeu de la carte doit être au même niveau Y. Tout ce qui est plus haut ou plus bas sera ignoré lorsque nous commencerons le processus de cartographie.

## Cartographier la construction pour une utilisation avec EternalTD

Pour cartographier la zone de jeu de votre construction pour une utilisation avec EternalTD, suivez ces étapes :

1. Mesurez manuellement la construction, en vous assurant de n'inclure que la zone de jeu et rien d'autre. Notez les coordonnées au fur et à mesure que vous mesurez.
<br>La zone de jeu doit inclure les sections de début (apparition des monstres) et de fin de la carte. Le début est généralement construit en utilisant des blocs verts et des blocs rouges pour la fin.


2. Commencez par mesurer les axes X, Y et Z de la construction. Placez-vous à un coin de la zone de jeu de vos cartes sur l'axe X et notez la coordonnée signalée (vous pouvez utiliser les coordonnées des blocs pour cela). Déplacez-vous du côté opposé de l'axe X et notez cette coordonnée.


3. Pour l'axe Y, placez-vous sur la **zone de jeu** et notez la coordonnée signalée.


4. Répétez le même processus que celui effectué pour l'axe X pour mesurer l'axe Z. Vous pouvez consulter cette image d'exemple pour vous aider à comprendre ce que nous essayons de réaliser ici :
   ![Mapping Example](https://i.imgur.com/IZfh2Nt.jpeg)
   Remarquez comment nous ne mesurons que les coordonnées où nous voulons que notre zone de jeu se trouve et que nous ignorons le reste. Comme dans l'exemple, assurez-vous d'inclure le début et la fin lorsque vous mesurez la zone de jeu. <br>Si la zone de jeu que vous mesurez est plus large à une extrémité et plus étroite à l'autre, vous devez mesurer la section la plus large.


5. Après avoir terminé les mesures, vous devriez obtenir quelque chose comme ceci :
   ```
   Axe X : -57, 56
   Axe Y : 65
   Axe Z : 34, -34
   ```

6. Réorganisez ces nombres du plus élevé au plus faible pour obtenir deux ensembles complets de coordonnées XYZ :
   ```
   56 65 34 (valeurs XYZ les plus élevées)
   -57 65 -34 (valeurs XYZ les plus basses)
   ```

7. Utilisez la commande suivante pour sélectionner les coordonnées :
   ```
   /etd selectfloorcoordinate Xhigh Y Zhigh Xlow Y Zlow
   Exemple : /etd selectfloorcoordinate 56 65 34 -57 65 -34
   ```

8. Les coordonnées ont maintenant été sélectionnées et sont en mémoire. Si vous obtenez une erreur, c'est que votre mesure était incorrecte ou que la zone de jeu n'a pas été correctement construite. Pour vérifier si nous avons correctement cartographié la zone de jeu, exécutez la commande suivante :
   ```
   /etd register your_level_name.yml test
   ```
   Remplacez « your_level_name » par le nom réel du niveau/de la carte que vous essayez de créer. Si tout a été fait correctement, vous devriez voir des barrières marquant chaque tuile de votre zone de jeu.


9. Parcourez la zone de jeu et assurez-vous que tout a l'air comme il faut, puis exécutez la commande à nouveau, mais cette fois sans le mot *test* à la fin.
   ````
   /etd register your_level_name.yml
   ````
   Cela enregistrera maintenant la zone de jeu dans votre fichier de niveau, et votre fichier de niveau devrait maintenant être prêt à être utilisé.

## Rogner le dossier du monde

Il existe plusieurs fichiers et dossiers situés dans votre dossier de monde que nous pouvons supprimer, car EternalTD ne les utilise pas tous. Cela réduira la taille de votre monde et le rendra plus facile à distribuer.

Pour l'environnement NORMAL :

Pour préparer votre monde, **gardez** les fichiers et dossiers suivants :

1.  Dossier **region**


2.  Fichier **raids.dat** dans le dossier **data** (assurez-vous qu'il se trouve dans le dossier **data** lors de la copie)


3.  Fichier **level.dat**

Vous pouvez supprimer en toute sécurité tous les autres fichiers et dossiers situés dans le dossier du monde. Cela configurera correctement votre monde pour l'environnement NORMAL.

Pour l'environnement NETHER et THE_END :

Pour préparer votre monde, gardez les fichiers et dossiers suivants :

1.  Dossier **region** dans le dossier **DIM-1** (assurez-vous qu'il se trouve dans le dossier **DIM-1** lors de la copie)


2.  Fichier **raids.dat** dans le dossier **data** (assurez-vous qu'il se trouve dans le dossier **data** lors de la copie)


3.  Fichier **level.dat**

Vous pouvez supprimer en toute sécurité tous les autres fichiers et dossiers situés dans le dossier du monde. Cela configurera correctement votre monde pour les environnements NETHER et THE_END.

```

