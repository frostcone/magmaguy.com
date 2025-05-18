Voici la traduction en français, en conservant le formatage markdown :

# Créer des Boss Mondiaux
*Les Boss Mondiaux sont aussi parfois appelés Boss Régionaux.*
## Qu'est-ce que c'est ?

Les Boss Mondiaux sont des Boss Personnalisés configurés pour apparaître à un endroit spécifique avec un délai spécifique. Ce sont aussi les boss utilisés dans les Donjons. Cependant, dans cette section, nous discuterons spécifiquement de la création de Boss Mondiaux pour une utilisation en dehors des donjons.

## À quoi servent-ils ?

Les Boss Mondiaux permettent aux joueurs d'affronter un défi fixe tout en sachant que le butin sera gratifiant.

## De quoi ai-je besoin pour créer un Boss Mondial ?

1. **Un emplacement**. Une salle de boss est recommandée, avec un rayon d'environ 15 blocs (30 blocs de diamètre) en raison de la portée d'aggro de Minecraft. De plus, assurez-vous que le terrain est protégé par une région [WorldGuard](https://dev.bukkit.org/projects/worldguard) (afin que les joueurs ne puissent pas construire de pièges) et que le terrain ne peut pas être exploité pour le combat.
2. **Un temps de réapparition**. Le minuteur de réapparition est essentiel. Je ne recommande pas de faire moins de 30 minutes de réapparition, sinon la réapparition du boss sera moins un événement. 1 heure est un assez bon temps, mais vous pouvez aussi vouloir faire en sorte que le boss réapparaisse une fois par jour ou même une fois par semaine.
3. **Un temps d'évasion**. Plus la réapparition est longue, plus le temps d'évasion devrait l'être. Tenez également compte du fait que le temps d'évasion doit être suffisamment long pour que les gens puissent affronter confortablement le boss. Les minuteurs d'évasion sont importants si vous ne voulez pas permettre aux joueurs de kamikazer le boss à mort. Ce n'est pas obligatoire, ni même recommandé si vous voulez faire des boss à réapparition massive d'une semaine.
4. **Un Boss Personnalisé**. Les Boss Mondiaux ne sont en réalité que des Boss Personnalisés avec des règles d'apparition personnalisées. Assurez-vous de sélectionner des pouvoirs avec une bonne compatibilité de combat pour des raids de grande taille.
5. **Un butin intéressant**. Le principal attrait des Boss Mondiaux, défi mis à part, est le butin. Assurez-vous que les joueurs peuvent en obtenir quelque chose qu'ils ne peuvent tout simplement pas obtenir ailleurs.
6. **Un thème**. Un bon boss Régional devrait avoir un thème, avec un emplacement thématique et un butin thématique.

## Options de configuration du Boss Personnalisé pour les Boss Mondiaux :

Ces paramètres sont ajoutés aux fichiers de configuration normaux des Boss Personnalisés. [Une page wiki détaillée à ce sujet peut être trouvée ici]($language$/elitemobs/creating_bosses.md).

<div align="center">

***

### isRegionalBoss

Définit si le boss est un boss régional. Les boss régionaux sont un autre nom pour les Boss Mondiaux, vous voulez donc le définir sur `true`.

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

Les emplacements d'apparition doivent être définis en jeu à l'aide de la commande `/em addSpawnLocation <filename.yml>`.

Bien qu'il soit possible d'ajouter manuellement des emplacements depuis la configuration, je ne recommande pas d'essayer de le faire car il est trop facile de se tromper.

| Clé              |           Valeurs            | Par défaut |
|------------------|:---------------------------:|:-------:|
| `spawnLocations` | [Liste de chaînes](#string_list) |  aucun   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

Emplacements dans les fichiers de configuration (pour utilisateurs avancés) Les fichiers de configuration du Boss Régional stockent toutes les instances de ce Boss Régional dans un seul fichier en stockant plusieurs emplacements d'apparition ainsi que des minuteurs de réapparition.

En termes pratiques, cela signifie que cette entrée :

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

contient 7 Boss Régionaux différents, à des emplacements différents, et avec des minuteurs de réapparition différents.

Analysons les détails, en examinant le premier Boss Régional :

```yaml
- elitemobs_sewer_maze,-70.17178578884845,168.2,-173.17112099568718,-271.24023,64.19999:1610710903931
```

Comme cela suit le format `monde,x,y,z,tangage,lacet:unixTimeStamp`, le boss apparaît dans un monde appelé `elitemobs_sewer_maze` aux coordonnées x = `-70.17178578884845`, y = `168.2`, z = `-173.17112099568718`, tangage = `-271.24023`, lacet = `64.19999`.

Le timestamp unix stocke l'heure, en temps unix, à laquelle le boss réapparaîtra. Ceci est utilisé pour stocker les temps de réapparition après les redémarrages. Si vous souhaitez savoir à quelle heure cela correspond, il existe d'innombrables outils de conversion de temps unix en temps réel que vous pouvez trouver en ligne.

Si vous souhaitez qu'un boss spécifique réapparaisse après un rechargement ou un redémarrage, tout ce que vous avez à faire est d'effacer l'entrée `:unixTimeStamp`.

</div>

</details>

***

### spawnCooldown

Définit le temps nécessaire à la réapparition du boss, en **minutes**.

**Note : des réapparitions plus longues sont recommandées pour les gros boss !**.

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `spawnCooldown` | [Entier](#integer) |  aucun   |

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

Définit le rayon à partir de la `spawnLocation` que le Boss Mondial peut atteindre avant d'être téléporté à son point d'apparition. Cela empêche les joueurs de traîner le boss vers un endroit où il serait plus facile de le combattre.

**Note : essayez d'éviter de créer des zones de combat qui nécessitent des laisses plus courtes que 20 blocs, car cela rendra le combat moins bon.**

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `leashRadius` | [Entier](#integer) |  aucun   |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
leashRadius: 30
```

</div>

</details>

***

### Blocs Transitoires

Aussi connus sous les noms de `onSpawnBlockStates` et `onRemoveBlockStates`.

Ces valeurs permettent aux Boss Régionaux de faire apparaître des blocs lorsqu'ils entrent en combat et de les retirer lorsqu'ils sont retirés, c'est-à-dire lorsqu'ils s'échappent en raison d'un délai d'attente ou lorsqu'ils meurent.

**C'est ainsi que vous pouvez faire en sorte que les boss ouvrent ou ferment des portes / zones ou même modifient une arène pendant le combat si vous l'utilisez avec des boss à phases !**

| Clé       |          Valeurs          | Par défaut |
|-----------|:------------------------:|:-------:|
| `onSpawnBlockStates` | Voir l'Explication Détaillée |  aucun   |


| Clé       | Valeurs  | Par défaut |
|-----------|:-------:|:-------:|
| `onRemoveBlockStates` | Voir l'Explication Détaillée |  aucun   |

<details>

<summary><b>Explication Détaillée</b></summary>

<div align="left">

**Tous les blocs sont relatifs à l'emplacement d'apparition. Assurez-vous d'avoir votre emplacement d'apparition final avant de commencer à définir des blocs.**

</br>Si vous avez déjà créé une grande zone de Blocs Transitoires et que vous devez maintenant déplacer le boss, mais que vous ne voulez pas refaire les Blocs Transitoires. Alors vous pouvez utiliser l'action EliteScript [Téléporter]($language$/elitemobs/elitescript_actions.md&section=teleport) pour déplacer le boss à l'emplacement correct après son apparition. Gardez à l'esprit que vous devrez ajuster votre laisse en conséquence.

En raison de la complexité de la définition des blocs, il n'est pas recommandé de le faire manuellement. Vous devriez utiliser les commandes suivantes pour le faire :

- /em registerblocks <fichier\_boss\_régional.yml> <on\_spawn/on\_remove>
- /em registerblocksedit <fichier\_boss\_régional.yml> <on\_spawn/on\_remove>
- /em registerblocksarea <fichier\_boss\_régional.yml> <on\_spawn/on\_remove>
- /em registerblocksareaedit <fichier\_boss\_régional.yml> <on\_spawn/on\_remove>
- /em cancelblocks

Analysons cela.

**/em registerblocks <fichier\_boss\_régional.yml> <on\_spawn/on\_remove>**

La commande la plus basique. C'est un interrupteur que vous exécutez une fois pour commencer, et à nouveau pour valider. Tout comme toutes les autres commandes, vous choisissez si vous définissez ces blocs pour être modifiés pour l'état `on_spawn` ou `on_remove`.

Si vous enregistrez le on\_spawn, cela modifiera les blocs lorsque le boss apparaît ou réapparaît. Si vous enregistrez le on\_remove, cela modifiera les blocs lorsque le boss meurt ou expire en utilisant la mécanique de délai d'attente du Boss Personnalisé.

Pour enregistrer des blocs, placez ou retirez simplement les blocs que vous souhaitez modifier pendant que ce paramètre est activé.

**/em registerblocksedit <fichier\_boss\_régional.yml> <on\_spawn/on\_remove>**

Si vous souhaitez modifier des blocs déjà définis, vous pouvez utiliser cette commande. Fonctionne de manière très similaire à `/em registerblocks <fichier_boss_régional.yml> <on_spawn/on_remove>`.

**/em registerblocksarea <fichier\_boss\_régional.yml> <on\_spawn/on\_remove>**

Tout comme `/em registerblocks <fichier_boss_régional.yml> <on_spawn/on\_remove>`, cela vous permet d'enregistrer des blocs, mais cela permet de les sélectionner en obtenant deux coins diamétralement opposés (identique à la sélection de région worldedit / worldguard) au lieu de sélectionner individuellement des blocs.

Pour des raisons de sécurité, il y a une limite de 200 blocs (par défaut, modifiable dans config.yml) pour les sélections régionales. Gardez à l'esprit que chaque bloc est modifié sur le même tick, donc si vous modifiez beaucoup de terrain, vous commencerez probablement à voir de gros pics de lag lors de l'exécution de ces modifications.

**/em registerblocksareaedit <fichier\_boss\_régional.yml> <on\_spawn/on\_remove>**

Fonctionne de la même manière que `/em registerblocksedit` mais pour les zones. Peut être utilisé pour dépasser la limite d'enregistrement de 200 blocs (par défaut) pour les zones.

**/em cancelblocks**

À tout moment, si une erreur est commise lors de l'enregistrement des blocs, vous pouvez exécuter cette commande pour annuler l'enregistrement. Elle annulera toutes les modifications que vous avez commencé à enregistrer lors de cette édition / enregistrement.

</div>

</details>

</div>

***

## Conseils de pro pour créer un bon et grand combat de Boss Régional

1. **Réfléchissez réellement à la manière dont les pouvoirs de votre Boss Personnalisé se complètent**. Vous ne voulez pas que votre boss passe la majeure partie de son temps arrêté parce qu'il lance quelque chose, car cela peut en fait rendre le combat très facile. Vous ne voulez pas non plus que le boss ait toutes les attaques à distance et aucun pouvoir de mêlée ou l'inverse, sauf si vous concevez quelque chose de très spécifique. Les tests de jeu sont importants.


2. **Santé - beaucoup**. Ce multiplicateur de santé devrait probablement être à un bon 10 si vous voulez que les gens se regroupent réellement pour combattre le boss.


3. **Dégâts - pas trop**. Les EliteMobs sont déjà extrêmement mortels par défaut, et les pouvoirs ont tendance à être exponentiellement plus mortels. Au lieu d'augmenter les dégâts à l'infini, envisagez d'utiliser des pouvoirs pour que le boss frappe plus fort.


4. **Exploits, partout**. Assurez-vous particulièrement que le terrain n'est pas exploitable. Mettez le boss dans une pièce fermée pour empêcher les gens d'essayer de le sniper de loin. Le pouvoir d'invulnérabilité aux flèches est probablement extrêmement important pour beaucoup de Boss Mondiaux car les mobs de Minecraft ne peuvent pas gérer le fait d'être snipés à distance, donc si vous voulez autoriser les attaques à l'arc, assurez-vous que les arcs ne peuvent pas être exploités.


5. **Connaissez le plugin**. Il existe de nombreuses petites astuces pour vaincre les EliteMobs, comme la façon dont certains pouvoirs peuvent être contrés en utilisant des boucliers, tandis que d'autres devraient être contrés en esquivant ou même en s'éloignant temporairement du boss. Plus vous savez comment les pouvoirs fonctionnent et comment ils sont contrés, meilleurs seront les boss que vous créerez.