# Comment créer une carte EternalTD personnalisée

## Création du fichier level.yml pour votre carte

Commencez votre carte en créant un fichier de configuration de niveau en suivant ces étapes simples :

1. Commencez par créer un nouveau document texte et donnez-lui un nom comme *nom_de_votre_niveau.yml* (remplacez "nom_de_votre_niveau" par le nom réel de votre niveau/carte).

2. Ouvrez le fichier dans votre éditeur de texte préféré.

3. Commençons par la partie amusante ! Ajoutez le nom de votre niveau en utilisant ce paramètre :
```yaml
levelName: "&aMon niveau génial"
```
N'hésitez pas à le pimenter avec des couleurs Minecraft ou d'autres modificateurs de texte.

4. Maintenant, donnez du caractère à votre niveau avec une description cool :
```yaml
levelDescription:
- "&aMon niveau est plutôt cool."
- "&aJ'espère que vous apprécierez !"
```
Vous pouvez ajouter d'autres lignes à la description, mais il est préférable de la garder brève.

5. Place aux vagues ! Spécifiez quelles vagues d'EternalTD votre niveau doit utiliser :
```yaml
wavesConfigFile: my_waves.yml
```
N'oubliez pas d'utiliser le nom réel de votre fichier de vagues. Une vague par niveau !

6. Définissez le monde (construction) que votre niveau utilisera :
```yaml
worldName: my_world_folder_name
```
Utilisez le nom réel du monde trouvé dans le dossier *worlds* d'EternalTD.

7. Enfin, choisissez l'environnement parfait pour le paramètre de votre niveau :
```yaml
environment: NORMAL
```
Vous pouvez choisir entre NORMAL, NETHER ou THE_END. Faites votre choix.

Votre fichier de configuration de niveau est prêt ! Le reste du fichier sera rempli par les commandes EternalTD que nous utiliserons dans les étapes suivantes lorsque nous allons mapper la construction.

## Préparation de votre construction
Avant de mapper votre construction pour une utilisation avec EternalTD, il est essentiel de la configurer de la manière suivante :

- Configurez-la dans un monde vide. Si vous utilisez Multiverse, vous pouvez utiliser la commande :
  ```
  /mvcreate votrenomdemondeici NORMAL -g VoidGen:.
  ```
- Ayez une bordure de monde étroite autour de la construction.
- Créez un cylindre de barrière à quelques blocs sous la construction avec une hauteur d'un bloc et un rayon suffisamment grand pour atteindre la bordure du monde (rayon de 200 blocs recommandé). En utilisant WorldEdit, vous pouvez exécuter :
  ```
  //cyl barrier 200 1
  ```
- Définissez le point d'apparition pour qu'il soit au centre de la construction dans un endroit sûr.
- Appliquez les règles suivantes :
    - /gamerule doWeatherCycle false
    - /gamerule doDaylightCycle false
    - /gamerule doMobSpawning false
    - /gamerule doFireTick false
    - /gamerule fireDamage false
    - /gamerule mobGriefing false
    - /gamerule disableRaids true
    - /gamerule announceAdvancements false
- L'aire de jeu de la carte doit se trouver sur le même niveau Y. Tout ce qui est plus haut ou plus bas sera ignoré lorsque nous commencerons le processus de mappage.

## Mappage de la construction pour une utilisation avec EternalTD
Pour mapper l'aire de jeu de votre construction pour une utilisation avec EternalTD, suivez ces étapes :

1. Mesurez manuellement la construction en vous assurant d'inclure uniquement l'aire de jeu et rien d'autre. Notez les coordonnées au fur et à mesure que vous mesurez.
<br>L'aire de jeu doit inclure les sections de début (apparition de monstres) et de fin de la carte. Le début est généralement construit à l'aide de blocs verts et les blocs rouges pour la fin.

2. Commencez par mesurer les axes X, Y et Z de la construction. Tenez-vous à un coin de l'aire de jeu de vos cartes sur l'axe X et écrivez la coordonnée indiquée (vous pouvez utiliser les coordonnées de bloc pour cela). Déplacez-vous du côté opposé de l'axe X et écrivez cette coordonnée.

3. Pour l'axe Y, tenez-vous sur l'**aire de jeu** et écrivez la coordonnée indiquée.

4. Répétez le même processus que celui effectué pour l'axe X pour mesurer l'axe Z. Vous pouvez jeter un coup d'œil à cette image d'exemple pour vous aider à comprendre ce que nous essayons d'accomplir ici :
   ![Exemple de mappage](https://i.imgur.com/IZfh2Nt.jpeg)
   Remarquez comment nous ne mesurons que les coordonnées où nous voulons que se trouve notre aire de jeu et en ignorant le reste. Comme dans l'exemple, veuillez vous assurer d'inclure le début et la fin lors de la mesure de l'aire de jeu. <br>Si l'aire de jeu que vous mesurez est plus large à une extrémité et plus étroite à l'autre, vous devez mesurer la section la plus large.

5. Après avoir terminé les mesures, vous devriez avoir quelque chose comme ceci :
   ```
   Axe X : -57, 56
   Axe Y : 65
   Axe Z : 34, -34
   ```

6. Réorganisez ces nombres du plus élevé au plus bas pour obtenir deux ensembles complets de coordonnées XYZ :
   ```
   56 65 34 (valeurs XYZ les plus élevées)
   -57 65 -34 (valeurs XYZ les plus basses)
   ```

7. Utilisez la commande suivante pour sélectionner les coordonnées :
   ```
   /etd selectfloorcoordinate Xhaut Y Zhaut Xbas Y Zbas
   Exemple : /etd selectfloorcoordinate 56 65 34 -57 65 -34
   ```

8. Les coordonnées ont maintenant été sélectionnées et sont en mémoire. Si vous obtenez une erreur, cela signifie que votre mesure était incorrecte ou que l'aire de jeu n'a pas été construite correctement. Pour vérifier si nous avons mappé correctement l'aire de jeu, exécutez la commande suivante :
   ```
   /etd register votre_nom_de_niveau.yml test
   ```
   Remplacez "votre_nom_de_niveau" par le nom réel du niveau/carte que vous essayez de créer. Si tout a été fait correctement, vous devriez voir des barrières marquant chaque tuile de votre aire de jeu.

9. Examinez l'aire de jeu et assurez-vous que tout semble correct, puis exécutez à nouveau la commande, mais cette fois sans le *test* à la fin.
   ````
   /etd register votre_nom_de_niveau.yml
   ````
   Cela enregistrera maintenant l'aire de jeu dans votre fichier de niveau et votre fichier de niveau devrait maintenant être prêt à l'emploi.

## Découpage du dossier du monde
Il y a plusieurs fichiers et dossiers situés dans votre dossier de monde que nous pouvons supprimer car EternalTD ne les utilise pas tous. Cela réduira la taille de votre monde et facilitera sa distribution.

Pour un environnement NORMAL :

Pour préparer votre monde, **conservez** les fichiers et dossiers suivants :

1.  dossier **region**

2.  **raids.dat** à partir du dossier **data** (assurez-vous qu'il se trouve à l'intérieur du dossier **data** lors de la copie)

3.  fichier **level.dat**

Vous pouvez supprimer en toute sécurité tous les autres fichiers et dossiers situés dans le dossier du monde. Cela configurera correctement votre monde pour l'environnement NORMAL.

Pour les environnements NETHER et THE_END :

Pour préparer votre monde, conservez les fichiers et dossiers suivants :

1.  dossier **region** à l'intérieur du dossier **DIM-1** (assurez-vous qu'il se trouve à l'intérieur du dossier **DIM-1** lors de la copie)

2.  **raids.dat** à partir du dossier **data** (assurez-vous qu'il se trouve à l'intérieur du dossier **data** lors de la copie)

3.  fichier **level.dat**

Vous pouvez supprimer en toute sécurité tous les autres fichiers et dossiers situés dans le dossier du monde. Cela configurera correctement votre monde pour les environnements NETHER et THE_END.
