# Création de Boss Mondiaux

*Les Boss Mondiaux sont parfois appelés Boss Régionaux.*

## Que sont-ils ?

Les Boss Mondiaux sont des Boss personnalisés configurés pour apparaître à un endroit spécifique, avec un délai
spécifique. Ce sont également les boss utilisés dans les donjons. Cependant, dans cette section, nous discuterons
spécifiquement de la création de Boss Mondiaux à utiliser en dehors des donjons.

## À quoi servent-ils ?

Les Boss Mondiaux permettent aux joueurs de relever un défi fixe en sachant que le butin sera gratifiant.

## De quoi ai-je besoin pour créer un Boss Mondial ?

1. **Un emplacement**. Une salle de boss est recommandée, avec un rayon d'environ 15 blocs (30 blocs de diamètre) en
   raison de la portée d'aggro de Minecraft. De plus, assurez-vous que le terrain est protégé par une
   région [WorldGuard](https://dev.bukkit.org/projects/worldguard) (afin que les joueurs ne puissent pas construire de
   pièges) et que le terrain ne puisse pas être exploité pour le combat.
2. **Un temps de réapparition**. Le minuteur de réapparition est essentiel. Je ne recommande pas de faire moins de 30
   minutes de temps de réapparition, car sinon, la réapparition du boss sera moins un événement. 1 heure est un temps
   assez correct, mais vous pouvez également faire en sorte que le boss réapparaisse une fois par jour, voire une fois
   par semaine.
3. **Un temps de fuite**. Plus la réapparition est longue, plus le temps de fuite doit être long. Tenez également compte
   du fait que le temps de fuite doit être suffisamment long pour que les gens puissent affronter confortablement le
   boss. Les minuteurs de fuite sont importants si vous ne voulez pas permettre aux joueurs de se suicider pour tuer le
   boss. Ce n'est ni obligatoire, ni même recommandé si vous voulez faire des boss de réapparition massifs sur une
   semaine.
4. **Un Boss personnalisé**. Les Boss Mondiaux ne sont en fait que des Boss personnalisés avec des règles d'apparition
   personnalisées. Assurez-vous de sélectionner des pouvoirs avec une bonne compatibilité de combat pour une taille de
   raid.
5. **Un butin intéressant**. Le grand attrait des Boss Mondiaux, au-delà du défi, est le butin. Assurez-vous que les
   joueurs peuvent obtenir quelque chose qu'ils ne peuvent tout simplement pas obtenir ailleurs.
6. **Un thème**. Un bon boss régional doit avoir un thème, avec un emplacement thématique et un butin thématique.

## Options de configuration de boss personnalisées pour les Boss Mondiaux :

Ces paramètres sont ajoutés aux fichiers de configuration de Boss personnalisés
normaux. [Une page wiki détaillée à ce sujet se trouve ici]($language$/elitemobs/creating_bosses.md).

<div align="center">

***

### isRegionalBoss

Définit si le boss est un boss régional. Les boss régionaux sont un autre nom pour les Boss Mondiaux, vous devez donc
définir cette valeur sur `true`.

| Clé              |       Valeurs       | Par défaut |
|------------------|:-------------------:|:----------:|
| `isRegionalBoss` | [Booléen](#boolean) |  `false`   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
isRegionalBoss: true
```

</div>

</details>

***

### spawnLocations

Les emplacements d'apparition doivent être définis en jeu à l'aide de la
commande `/em addSpawnLocation <nomdefichier.yml>`.

Bien qu'il soit possible d'ajouter manuellement des emplacements à partir de la configuration, je ne recommande pas
d'essayer de le faire, car il est trop facile de se tromper.

| Clé              |             Valeurs              | Par défaut |
|------------------|:--------------------------------:|:----------:|
| `spawnLocations` | [Liste de chaînes](#string_list) |   aucun    |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

Emplacements dans les fichiers de configuration (pour les utilisateurs avancés) Les fichiers de configuration du boss
régional stockent toutes les instances de ce boss régional dans un seul fichier en stockant plusieurs emplacements
d'apparition ainsi que les minuteurs de réapparition.

En termes pratiques, cela signifie que cette entrée:

```yaml
spawnLocations:
- elitemobs_sewer_maze,-70.17178578884845,168.2,-173.17112099568718,-271.24023,64.19999:1610710903931
- elitemobs_sewer_maze,-135.02262355317436,168.2,-153.28849346821508,-98.53906,60.750263:1609026066482
- elitemobs_sewer_maze,-70.43846307626053,168.2,-174.13499832314378,-271.24023,64.19999:1610710886530
- elitemobs_sewer_maze,-130.39762674971664,168.2,-171.67396911490718,-47.532227,51.900173:1609026066482
- elitemobs_sewer_maze,-117.12782160766056,162.2,-166.40989416757444,-71.37402,-1.4997427:1610710974882
- elitemobs_sewer_maze,-105.13138759611667,168.2,-169.85898023126538,-124.34766,41.24988:1610710945331
- elitemobs_sewer_maze,-106.21847515732084,169.2,-152.3609257554766,-170.86523,21.450315:1610537606222
```

contient 7 boss régionaux différents, à différents endroits et avec différents minuteurs de réapparition.

Décomposons les détails en examinant le premier boss régional:

```yaml
- elitemobs_sewer_maze,-70.17178578884845,168.2,-173.17112099568718,-271.24023,64.19999:1610710903931
```

Puisque cela suit le format `monde,x,y,z,pitch,yaw:unixTimeStamp`, le boss apparaît dans un monde
appelé `elitemobs_sewer_maze` à x = `-70.17178578884845`, y = `168.2`, z = `-173.17112099568718`, pitch = `-271.24023`,
yaw = `64.19999`.

L'horodatage Unix stocke l'heure, en temps Unix, à laquelle le boss réapparaîtra. Ceci est utilisé pour stocker les
temps de réapparition lors des redémarrages. Si vous souhaitez savoir à quelle heure cela correspond, il existe
d'innombrables outils de conversion du temps Unix en temps réel que vous pouvez trouver en ligne.

Si vous souhaitez qu'un boss spécifique réapparaisse après un rechargement ou un redémarrage, il vous suffit d'effacer
l'entrée `:unixTimeStamp`.

</div>

</details>

***

### spawnCooldown

Définit le temps nécessaire à la réapparition du boss, en **minutes**.

**Remarque: des réapparitions plus longues sont recommandées pour les gros boss!**.

| Clé             |      Valeurs       | Par défaut |
|-----------------|:------------------:|:----------:|
| `spawnCooldown` | [Entier](#integer) |   aucun    |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
spawnCooldown: 20
```

</div>

</details>

***

### leashRadius

Définit le rayon à partir du `spawnLocation` que le Boss Mondial atteindra avant d'être téléporté vers son point d'
apparition. Cela empêche les joueurs de traîner le boss vers un endroit où il pourrait être plus facile de le combattre.

**Remarque: essayez d'éviter de créer des zones de combat qui nécessitent des laisses de moins de 20 blocs, car cela
rendra le combat pire.**

| Clé           |      Valeurs       | Par défaut |
|---------------|:------------------:|:----------:|
| `leashRadius` | [Entier](#integer) |   aucun    |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
leashRadius: 30
```

</div>

</details>

***

### Blocs transitifs

Également connus sous les noms de `onSpawnBlockStates` et `onRemoveBlockStates`.

Ces valeurs permettent aux Boss Régionaux de faire apparaître des blocs lorsqu'ils entrent en combat et de les supprimer
lorsqu'ils sont supprimés, c'est-à-dire lorsqu'ils s'échappent en raison d'un délai d'attente ou lorsqu'ils meurent.

**C'est ainsi que vous pouvez faire en sorte que les boss ouvrent ou ferment des portes/zones ou même modifient une
arène pendant le combat si vous l'utilisez avec des boss de phase!**

| Clé       |          Valeurs          | Par défaut |
|-----------|:------------------------:|:-------:|
| `onSpawnBlockStates` | Voir l'explication détaillée |  aucun   |

| Clé       | Valeurs  | Par défaut |
|-----------|:-------:|:-------:|
| `onRemoveBlockStates` | Voir l'explication détaillée |  aucun   |

<details> 

<summary><b>Explication détaillée</b></summary>

<div align="left">

**Tous les blocs sont relatifs à l'emplacement d'apparition. Assurez-vous d'avoir votre emplacement d'apparition final
avant de commencer à définir des blocs.**

</br>Si vous avez déjà créé une grande zone de bloc transitive et que vous devez maintenant déplacer le boss, mais que
vous ne voulez pas refaire les blocs transitifs. Ensuite, vous pouvez utiliser l'action
EliteScript [Teleport]($language$/elitemobs/elitescript_actions.md&section=teleport) pour déplacer le boss vers
l'emplacement correct après son apparition. N'oubliez pas que vous devrez ajuster votre laisse en conséquence.

En raison de la complexité de la définition des blocs, il n'est pas recommandé de le faire manuellement. Vous devez
utiliser les commandes suivantes pour le faire:

- /em registerblocks <fichier\_boss\_régional.yml> <on\_spawn/on\_remove>
- /em registerblocksedit <fichier\_boss\_régional.yml> <on\_spawn/on\_remove>
- /em registerblocksarea <fichier\_boss\_régional.yml> <on\_spawn/on\_remove>
- /em registerblocksareaedit <fichier\_boss\_régional.yml> <on\_spawn/on\_remove>
- /em cancelblocks

Décomposons cela.

**/em registerblocks <fichier\_boss\_régional.yml> <on\_spawn/on\_remove>**

La commande la plus basique. Il s'agit d'un commutateur que vous exécutez une fois pour démarrer, puis à nouveau pour
valider. Tout comme toutes les autres commandes, vous choisissez si vous définissez ces blocs pour qu'ils soient
modifiés pour l'état `on_spawn` ou `on_remove`.

Si vous enregistrez le on\_spawn, cela modifiera les blocs lorsque le boss apparaît ou réapparaît. Si vous enregistrez
le on\_remove, cela modifiera les blocs lorsque le boss meurt ou expire en utilisant le mécanisme de délai d'attente de
Boss personnalisé.

Pour enregistrer des blocs, placez ou supprimez simplement les blocs que vous souhaitez modifier pendant que ce
paramètre est activé.

**/em registerblocksedit <fichier\_boss\_régional.yml> <on\_spawn/on\_remove>**

Si vous souhaitez modifier des blocs déjà définis, vous pouvez utiliser cette commande. Fonctionne de manière très
similaire à `/em registerblocks <fichier_boss_régional.yml> <on_spawn/on_remove>`.

**/em registerblocksarea <fichier\_boss\_régional.yml> <on\_spawn/on\_remove>**

Tout comme `/em registerblocks <fichier_boss_régional.yml> <on_spawn/on_remove>`, cela vous permet d'enregistrer des
blocs, mais il permet de les sélectionner en obtenant deux coins diamétralement opposés (identique à la sélection de
région worldedit / worldguard) au lieu de sélectionner individuellement des blocs.

Pour des raisons de sécurité, il existe une limite de 200 blocs (par défaut, modifiable dans config.yml) pour les
sélections régionales. N'oubliez pas que chaque bloc est modifié sur le même tick, donc si vous modifiez beaucoup de
terrain, vous commencerez probablement à voir de gros pics de lag lors de l'exécution de ces modifications.

**/em registerblocksareaedit <fichier\_boss\_régional.yml> <on\_spawn/on\_remove>**

Fonctionne de la même manière que `/em registerblocksedit` mais pour les zones. Peut être utilisé pour dépasser la
limite d'enregistrement de bloc de 200 (par défaut) pour les zones.

**/em cancelblocks**

À tout moment, si une erreur est commise lors de l'enregistrement de blocs, vous pouvez exécuter cette commande pour
annuler l'enregistrement. Cela annulera toutes les modifications que vous avez commencé à enregistrer sur cette
modification / enregistrement.

</div>

</details>

</div>

***

## Conseils de pro pour créer un bon et gros combat de boss régional

1. **Réfléchissez réellement à la manière dont les pouvoirs de votre Boss personnalisé se complètent**. Vous ne voulez
   pas que votre boss passe la plupart de son temps à être arrêté parce qu'il lance quelque chose, car cela peut en fait
   rendre le combat très facile. Vous ne voulez pas non plus que le boss ait toutes les attaques à distance et aucun
   pouvoir de mêlée ou l'inverse, à moins que vous ne conceviez quelque chose de très spécifique. Le playtesting est
   important.


2. **Santé: beaucoup de santé**. Ce multiplicateur de santé devrait probablement être à un solide 10 si vous voulez que
   les gens se regroupent pour combattre le boss.


3. **Dégâts: pas trop**. Les EliteMobs sont déjà extrêmement mortels par défaut, et les pouvoirs ont tendance à être
   exponentiellement plus mortels. Au lieu d'augmenter les dégâts à des niveaux extrêmes, envisagez d'utiliser des
   pouvoirs pour rendre le boss plus puissant.


4. **Exploits, partout**. Assurez-vous que le terrain n'est pas exploitable. Placez le boss dans une pièce fermée pour
   empêcher les gens d'essayer de le sniper de loin. Le pouvoir d'invulnérabilité aux flèches est probablement
   extrêmement important pour beaucoup de Boss Mondiaux, car les créatures de Minecraft ne peuvent pas gérer le fait
   d'être snippées de loin, donc si vous voulez autoriser les attaques à l'arc, assurez-vous que les arcs ne peuvent pas
   être exploités.


5. **Connaissez le plugin**. Il existe de nombreuses petites astuces pour battre les EliteMobs, comme la façon dont
   certains pouvoirs peuvent être contrés en utilisant des boucliers, tandis que d'autres doivent être contrés en
   esquivant ou même en fuyant temporairement le boss. Plus vous savez comment les pouvoirs fonctionnent et comment ils
   sont contrés, meilleurs seront les boss que vous créerez.
