# Comment créer une carte EternalTD personnalisée

## Création du fichier level.yml pour votre carte

Commencez votre carte en créant un fichier de configuration de niveau en suivant ces étapes simples :

1. Commencez par créer un nouveau document texte et donnez-lui un nom comme *nom_de_votre_niveau.yml* (remplacez "nom_de_votre_niveau" par le nom réel de votre niveau/carte).

2. Ouvrez le fichier dans votre éditeur de texte préféré.

3. Commençons par la partie amusante ! Ajoutez le nom de votre niveau en utilisant ce paramètre :
```yaml
levelName: "&aMon niveau génial"
```

N'hésitez pas à l'agrémenter de quelques couleurs Minecraft ou d'autres modificateurs de texte.

4. Maintenant, donnez un peu de caractère à votre niveau avec une description cool:
```yaml
levelDescription:
- "&aMon niveau est plutôt cool."
- "&aJ'espère que vous apprécierez !"
```
Vous pouvez ajouter d'autres lignes à la description, mais il est préférable de la garder brève.

5. Place aux vagues! Indiquez quelles vagues d'EternalTD votre niveau doit utiliser:
```yaml
wavesConfigFile: mes_vagues.yml
```
N'oubliez pas d'utiliser le nom réel de votre fichier de vagues. Une vague par niveau !

6. Définissez le monde (construction) que votre niveau utilisera :
```yaml
worldName: mon_nom_de_dossier_de_monde
```
Utilisez le nom réel du monde trouvé dans le dossier *worlds* d'EternalTD.

7. Enfin, choisissez l'environnement idéal pour le cadre de votre niveau:
```yaml
environment: NORMAL
```
Vous pouvez choisir entre NORMAL, NETHER ou THE_END. Faites votre choix.

Votre fichier de configuration de niveau est prêt! Le reste du fichier sera complété par des commandes EternalTD que
nous utiliserons dans les étapes suivantes lors du mappage de la construction.

## Préparation de votre construction
Avant de mapper votre construction pour une utilisation avec EternalTD, il est essentiel de la configurer de la manière suivante :

- Configurez-la dans un monde Vide. Si vous utilisez Multiverse, vous pouvez utiliser la commande:
  ```
  /mvcreate nomdevotremodneici NORMAL -g VoidGen:.
  ```
- Ayez une bordure de monde étroite autour de la construction.
- Créez un cylindre de barrière à quelques blocs en dessous de la construction, d'une hauteur d'un bloc et d'un rayon
  suffisamment grand pour atteindre la bordure du monde (rayon de 200 blocs recommandé). En utilisant WorldEdit, vous
  pouvez exécuter:
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
- La zone de jeu de la carte doit être au même niveau Y. Tout ce qui est plus haut ou plus bas sera ignoré lorsque nous
  commencerons le processus de mappage.

## Mappage de la construction pour une utilisation avec EternalTD

Pour mapper la zone de jeu de votre construction pour une utilisation avec EternalTD, suivez ces étapes:

1. Mesurez manuellement la construction, en veillant à n'inclure que la zone de jeu et rien d'autre. Notez les
   coordonnées au fur et à mesure de vos mesures.
   <br>La zone de jeu doit inclure les sections de départ (apparition des monstres) et de fin de la carte. Le départ est
   généralement construit à l'aide de blocs verts et la fin avec des blocs rouges.


2. Commencez par mesurer les axes X, Y et Z de la construction. Tenez-vous à un coin de la zone de jeu de votre carte
   sur l'axe X et notez la coordonnée signalée (vous pouvez utiliser les coordonnées des blocs pour cela). Déplacez-vous
   du côté opposé de l'axe X et notez cette coordonnée.


3. Pour l'axe Y, tenez-vous sur la **zone de jeu** et notez la coordonnée signalée.


4. Répétez le même processus que pour l'axe X pour mesurer l'axe Z. Vous pouvez consulter cet exemple d'image pour vous
   aider à comprendre ce que nous essayons d'accomplir ici:
   ![Exemple de mappage](https://i.imgur.com/IZfh2Nt.jpeg)
   Remarquez que nous ne mesurons que les coordonnées où nous voulons que notre zone de jeu se trouve et nous ignorons
   le reste. Comme dans l'exemple, assurez-vous d'inclure le début et la fin lors de la mesure de la zone de jeu. <br>Si
   la zone de jeu que vous mesurez est plus large à une extrémité et plus étroite à l'autre, vous devez mesurer la
   section la plus large.


5. Après avoir terminé les mesures, vous devriez avoir quelque chose comme ceci :
   ```
   Axe X : -57, 56
   Axe Y : 65
   Axe Z : 34, -34
   ```

6. Réorganisez ces nombres du plus élevé au plus bas pour obtenir deux ensembles complets de coordonnées XYZ:
   ```
   56 65 34 (valeurs XYZ les plus élevées)
   -57 65 -34 (valeurs XYZ les plus basses)
   ```

7. Utilisez la commande suivante pour sélectionner les coordonnées :
   ```
   /etd selectfloorcoordinate Xhaut Y Zhaut Xbas Y Zbas
   Exemple : /etd selectfloorcoordinate 56 65 34 -57 65 -34
   ```

8. Les coordonnées ont maintenant été sélectionnées et sont en mémoire. Si vous obtenez une erreur, votre mesure était
   incorrecte ou la zone de jeu n'a pas été correctement construite. Pour vérifier si nous avons correctement mappé la
   zone de jeu, exécutez la commande suivante:
   ```
   /etd register nom_de_votre_niveau.yml test
   ```
   Remplacez "nom_de_votre_niveau" par le nom réel du niveau/de la carte que vous essayez de créer. Si tout a été fait
   correctement, vous devriez voir des barrières marquer chaque tuile de votre zone de jeu.


9. Examinez la zone de jeu et assurez-vous que tout semble correct, puis réexécutez la commande, mais cette fois sans le
   *test* à la fin.
   ```
   /etd register nom_de_votre_niveau.yml
   ```
   Cela enregistrera maintenant la zone de jeu dans votre fichier de niveau et votre fichier de niveau devrait
   maintenant être prêt à être utilisé.

## Réduction du dossier du monde

Il existe plusieurs fichiers et dossiers situés dans votre dossier de monde que nous pouvons supprimer, car EternalTD ne
les utilise pas tous. Cela réduira la taille de votre monde et le rendra plus facile à distribuer.

Pour l'environnement NORMAL:

Pour préparer votre monde, **conservez** les fichiers et dossiers suivants :

1.  dossier **region**


2. **raids.dat** à l'intérieur du dossier **data** (assurez-vous qu'il se trouve à l'intérieur du dossier **data** lors
   de la copie)


3.  fichier **level.dat**

Vous pouvez supprimer en toute sécurité tous les autres fichiers et dossiers situés dans le dossier du monde. Cela configurera correctement votre monde pour l'environnement NORMAL.

Pour les environnements NETHER et THE_END :

Pour préparer votre monde, conservez les fichiers et dossiers suivants :

1.  dossier **region** à l'intérieur du dossier **DIM-1** (assurez-vous qu'il se trouve à l'intérieur du dossier **DIM-1** lors de la copie)


2. **raids.dat** à l'intérieur du dossier **data** (assurez-vous qu'il se trouve à l'intérieur du dossier **data** lors
   de la copie)


3.  fichier **level.dat**

Vous pouvez supprimer en toute sécurité tous les autres fichiers et dossiers situés dans le dossier du monde. Cela configurera correctement votre monde pour les environnements NETHER et THE_END.
