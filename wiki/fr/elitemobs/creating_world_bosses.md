```
# Créer des boss mondiaux
*Les boss mondiaux sont aussi parfois appelés boss régionaux.*
## Qu'est-ce que c'est ?

Les boss mondiaux sont des boss personnalisés configurés pour apparaître à un emplacement spécifique avec un délai spécifique. Ce sont aussi les boss utilisés dans les donjons. Cependant, dans cette section, nous parlerons spécifiquement de la création de boss mondiaux à utiliser en dehors des donjons.

## À quoi servent-ils ?

Les boss mondiaux permettent aux joueurs de relever un défi fixe tout en sachant que le butin sera gratifiant.

## De quoi ai-je besoin pour créer un boss mondial ?

1. **Un emplacement**. Une salle de boss est recommandée, avec un rayon d'environ 15 blocs (30 blocs de large) en raison de la portée d'aggro de Minecraft. De plus, assurez-vous que le terrain est protégé par une région [WorldGuard](https://dev.bukkit.org/projects/worldguard) (afin que les joueurs ne puissent pas construire de pièges) et que le terrain ne peut pas être exploité pour le combat.
2. **Un temps de réapparition**. Le compteur de réapparition est essentiel. Je ne recommande pas de faire moins de 30 minutes de réapparition, sinon la réapparition du boss sera moins un événement. 1 heure est un bon moment, mais vous pouvez aussi faire en sorte que le boss réapparaisse une fois par jour ou même une fois par semaine.
3. **Un temps d'évasion**. Plus le temps de réapparition est long, plus le temps d'évasion doit être long. Tenez également compte du fait que le temps d'évasion doit être suffisamment long pour que les gens puissent défier le boss confortablement. Les compteurs d'évasion sont importants si vous ne voulez pas permettre aux joueurs de faire un kamikaze sur le boss pour le tuer. Ce n'est pas obligatoire, ni même recommandé si vous souhaitez faire de gros boss de réapparition d'une semaine.
4. **Un boss personnalisé**. Les boss mondiaux ne sont en réalité que des boss personnalisés avec des règles d'apparition personnalisées. Assurez-vous de sélectionner des pouvoirs avec une bonne compatibilité de combat de taille de raid.
5. **Un butin intéressant**. Le principal attrait des boss mondiaux, défi mis à part, est le butin. Assurez-vous que les joueurs peuvent obtenir quelque chose qu'ils ne peuvent tout simplement pas obtenir ailleurs.
6. **Un thème**. Un bon boss régional doit avoir un thème, avec un emplacement thématique et un butin thématique.

## Options de configuration des boss personnalisés pour les boss mondiaux :

Ces paramètres sont ajoutés aux fichiers de configuration normaux des boss personnalisés. [Une page wiki exhaustive sur ceux-ci est disponible ici]($language$/elitemobs/creating_bosses.md).

<div align="center">

***

### isRegionalBoss

Définit si le boss est un boss régional. Les boss régionaux sont un autre nom pour les boss mondiaux, vous devez donc le définir sur `true`.

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `isRegionalBoss` | [Booléen](#boolean) | `false` |

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

Les emplacements d'apparition doivent être définis depuis le jeu à l'aide de la commande `/em addSpawnLocation <filename.yml>`.

Bien qu'il soit possible d'ajouter manuellement des emplacements depuis la configuration, je ne recommande pas d'essayer de le faire, car il est trop facile de se tromper.

| Clé              |           Valeurs            | Par défaut |
|------------------|:---------------------------:|:-------:|
| `spawnLocations` | [Liste de chaînes](#string_list) |  none   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

Les emplacements dans les fichiers de configuration (pour les utilisateurs avancés) Les fichiers de configuration des boss régionaux stockent toutes les instances de ce boss régional dans un seul fichier en stockant plusieurs emplacements d'apparition ainsi que des compteurs de réapparition.

En termes pratiques, cela signifie que cette entrée :

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

contient 7 boss régionaux différents, à des emplacements différents, avec des compteurs de réapparition différents.

Décomposons les détails, en examinant le premier boss régional :

```yaml
- elitemobs_sewer_maze,-70.17178578884845,168.2,-173.17112099568718,-271.24023,64.19999:1610710903931
```

Comme cela suit le format `world,x,y,z,pitch,yaw:unixTimeStamp`, le boss apparaît dans un monde appelé `elitemobs_sewer_maze` à x = `-70.17178578884845`, y = `168.2`, z = `-173.17112099568718`, pitch = `-271.24023`, yaw = `64.19999`.

L'horodatage Unix stocke l'heure, en temps Unix, à laquelle le boss réapparaîtra. Cela sert à stocker les temps de réapparition via les redémarrages. Si vous souhaitez savoir à quelle heure cela correspond, vous pouvez trouver d'innombrables outils de conversion du temps Unix en temps réel en ligne.

Si vous souhaitez qu'un boss spécifique réapparaisse après un rechargement ou un redémarrage, il vous suffit de supprimer l'entrée `:unixTimeStamp`.

</div>

</details>

***

### spawnCooldown

Définit le temps nécessaire pour que le boss réapparaisse, en **minutes**.

**Remarque : des réapparitions plus longues sont recommandées pour les gros boss !**.

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `spawnCooldown` | [Entier](#integer) |  none   |

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

Définit le rayon depuis le `spawnLocation` auquel le boss mondial va avant d'être téléporté vers son point d'apparition. Cela empêche les joueurs d'entraîner le boss à un endroit où il pourrait être plus facile de le combattre.

**Remarque : essayez d'éviter de créer des zones de combat qui nécessitent des laisses plus courtes que 20 blocs, car cela rendra le combat plus difficile.**

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `leashRadius` | [Entier](#integer) |  none   |

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

Aussi connus sous le nom de `onSpawnBlockStates` et `onRemoveBlockStates`.

Ces valeurs permettent aux boss régionaux de faire apparaître des blocs lorsqu'ils entrent en combat et de les supprimer lorsqu'ils sont supprimés, ce qui signifie qu'ils s'échappent soit en raison du délai d'expiration, soit lorsqu'ils meurent.

**C'est comme ça que vous pouvez faire en sorte que les boss ouvrent ou ferment des portes/des zones ou même modifient une arène pendant le combat si vous l'utilisez avec des boss de phase !**

| Clé       |          Valeurs          | Par défaut |
|-----------|:------------------------:|:-------:|
| `onSpawnBlockStates` | Voir Explication Détaillée |  none   |


| Clé       | Valeurs  | Par défaut |
|-----------|:-------:|:-------:|
| `onRemoveBlockStates` | Voir Explication Détaillée |  none   |

<details> 

<summary><b>Explication Détaillée</b></summary>

<div align="left">

**Tous les blocs sont relatifs à l'emplacement d'apparition. Assurez-vous d'avoir votre emplacement d'apparition final avant de commencer à définir des blocs.**

</br>Si vous avez déjà créé une grande zone de blocs transitifs et que vous devez maintenant déplacer le boss, mais que vous ne voulez pas refaire les blocs transitifs. Vous pouvez alors utiliser l'action EliteScript [Téléportation]($language$/elitemobs/elitescript_actions.md&section=teleport) pour déplacer le boss vers le bon emplacement après qu'il soit apparu. Gardez à l'esprit que vous devrez ajuster votre laisse en conséquence.

En raison de la complexité de la définition des blocs, il n'est pas recommandé de le faire manuellement. Vous devriez utiliser les commandes suivantes pour le faire :

- /em registerblocks <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em registerblocksedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em registerblocksarea <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em registerblocksareaedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em cancelblocks

Décomposons tout ça.

**/em registerblocks <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

La commande la plus basique. C'est une bascule que vous activez une fois pour démarrer, et une fois de plus pour valider. Comme toutes les autres commandes, vous choisissez si vous définissez ces blocs pour qu'ils soient modifiés pour l'état `on_spawn` ou `on_remove`.

Si vous enregistrez le `on_spawn`, cela modifiera les blocs lorsque le boss apparaît ou réapparaît. Si vous enregistrez le `on_remove`, cela modifiera les blocs lorsque le boss meurt ou expire en utilisant le mécanisme de délai d'expiration du boss personnalisé.

Pour enregistrer des blocs, il suffit de placer ou de supprimer les blocs que vous souhaitez modifier pendant que ce paramètre est activé.

**/em registerblocksedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

Si vous souhaitez modifier des blocs déjà définis, vous pouvez utiliser cette commande. Fonctionne de manière très similaire à `/em registerblocks <regional_boss_file.yml> <on_spawn/on_remove>`.

**/em registerblocksarea <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

Tout comme `/em registerblocks <regional_boss_file.yml> <on_spawn/on_remove>`, cela vous permet d'enregistrer des blocs, mais cela vous permet de les sélectionner en obtenant deux coins diamétralement opposés (comme la sélection de région de worldedit/worldguard) au lieu de sélectionner individuellement les blocs.

Pour des raisons de sécurité, il existe une limite de 200 blocs (par défaut, modifiable dans config.yml) pour les sélections régionales. Gardez à l'esprit que chaque bloc est modifié sur le même tick, donc si vous modifiez beaucoup de terrain, vous constaterez probablement de gros pics de lag lorsque vous exécuterez ces modifications.

**/em registerblocksareaedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

Fonctionne de la même manière que `/em registerblocksedit` mais pour les zones. Peut être utilisé pour dépasser la limite d'enregistrement de 200 blocs (par défaut) pour les zones.

**/em cancelblocks**

À tout moment, si une erreur est commise lors de l'enregistrement de blocs, vous pouvez exécuter cette commande pour annuler l'enregistrement. Elle annulera toutes les modifications que vous avez commencées à enregistrer lors de cette édition/enregistrement.

</div>

</details>

</div>

***

## Conseils professionnels pour créer un bon combat de boss régional

1. **Réfléchissez vraiment à la façon dont les pouvoirs de votre boss personnalisé se complètent**. Vous ne voulez pas que votre boss passe la plupart de son temps arrêté parce qu'il lance quelque chose, car cela peut en fait rendre le combat très facile. Vous ne voulez pas non plus que le boss ait toutes les attaques à distance et aucun pouvoir de mêlée ou le contraire, à moins que vous ne conceviez quelque chose de très spécifique. Les tests de jeu sont importants.


2. **Santé - beaucoup de santé**. Ce multiplicateur de santé devrait probablement être à un solide 10 si vous voulez que les gens se rassemblent réellement pour combattre le boss.


3. **Dégâts - pas trop**. Les élites de EliteMobs sont déjà extrêmement mortelles par défaut, et les pouvoirs ont tendance à être exponentiellement plus mortels. Au lieu d'augmenter les dégâts jusqu'au plafond, envisagez d'utiliser des pouvoirs pour faire frapper le boss plus fort.


4. **Exploits, partout**. Assurez-vous que le terrain n'est pas exploitable. Placez le boss dans une pièce fermée pour empêcher les gens d'essayer de le cibler de loin. Le pouvoir d'invulnérabilité aux flèches est probablement extrêmement important pour beaucoup de boss mondiaux, car les monstres de Minecraft ne peuvent pas supporter d'être ciblés de loin, donc si vous voulez permettre les attaques à l'arc, assurez-vous que les arcs ne peuvent pas être exploités.


5. **Connaissez le plugin**. Il existe de nombreuses petites astuces pour battre EliteMobs, comme le fait que certains pouvoirs peuvent être contrés en utilisant des boucliers, tandis que d'autres doivent être contrés en esquivant ou même en fuyant temporairement le boss. Plus vous connaissez le fonctionnement des pouvoirs et la façon dont ils sont contrés, meilleurs seront les boss que vous créez.

```