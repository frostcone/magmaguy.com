Ceci est une ventilation complète de la façon dont la santé / les dégâts évoluent dans EliteMobs. Elle doit être utilisée comme référence lors de la conception de donjons.

Elle est axée sur les boss personnalisés, mais les élites normales évoluent de la même manière.

# Avant de commencer !

Vous n'avez pas besoin de lire tout cela si vous voulez juste faire des ajustements rapides. Passez à la section "Utiliser ces données pour les donjons" pour voir des calculs rapides très simplifiés et une série de paramètres recommandés prédéfinis !

# Mise à l'échelle (en général)

Dans EliteMobs, par défaut, les boss obtiennent 7 points de vie maximum et infligent 1 dégât supplémentaire par niveau.

Les armes des joueurs infligent 7 dégâts supplémentaires par niveau, et l'armure réduit les dégâts de 0,25 par niveau (mais il y a 4 emplacements d'armure qui contribuent au total, ce qui équivaut à 1). Enfin, les joueurs gagnent un maximum de points de vie au fur et à mesure qu'ils débloquent les rangs de prestige.

# Dégâts infligés par les boss personnalisés

La formule de dégâts pour les boss personnalisés est la suivante :

```
( ( ( dégâts de base / 2 ) * multiplicateur de dégâts du boss personnalisé) + niveau du boss - réduction d'armure du joueur ) * multiplicateur de dégâts global
```

## Dégâts de base

Il peut s'agir de l'une des deux choses suivantes :

1.  La valeur dans mobproperties pour le type d'entité du boss.
2.  Étant donné qu'il peut être difficile de s'en souvenir lors de la conception de donjons et d'autres contenus, les boss personnalisés peuvent avoir le champ normalizedCombat, qui applique 5 points de dégâts standard, ce qui offre la meilleure mise à l'échelle pour la progression d'EliteMobs. Dans une prochaine mise à jour, le combat normalisé sera activé par défaut pour tous les boss régionaux.

## Multiplicateur de dégâts du boss personnalisé

Il s'agit du multiplicateur de dégâts dans le fichier Custom Boss. Par défaut, il est défini sur 1.

## Niveau du boss

Comme vous pouvez le deviner, il s'agit simplement du niveau du boss. Cela signifie que les boss infligent un dégât supplémentaire par niveau.

## Réduction d'armure du joueur

L'armure du joueur réduit les dégâts de 0,25 par niveau, et il y a 4 emplacements d'armure qui peuvent contribuer au total. De plus, chaque niveau de protection contre les projectiles réduit les dégâts des projectiles de 0,025.

## Multiplicateur de dégâts global

Il s'agit du multiplicateur dans MobCombatSettings. Par défaut, il est défini sur 1.

# Santé maximale des boss personnalisés

La formule de santé pour les boss personnalisés est la suivante :

```
( santé maximale de base + niveau du boss * 7 ) * multiplicateur de santé du boss personnalisé
```

## Santé maximale de base

Il peut s'agir de l'une des deux choses suivantes :

1.  La santé maximale par défaut de l'entité Minecraft vanilla.
2.  Étant donné qu'il peut être difficile de s'en souvenir lors de la conception de donjons et d'autres contenus, les boss personnalisés peuvent avoir le champ normalizedCombat, qui applique une santé standard de 7, ce qui offre la meilleure mise à l'échelle pour la progression d'EliteMobs. Le combat normalisé est activé par défaut pour tous les boss régionaux.

## Niveau

Il s'agit du niveau du boss

## Multiplicateur de santé du boss personnalisé

Il s'agit du multiplicateur dans le fichier Custom Boss. Par défaut, il est défini sur 1.

# Dégâts infligés aux boss personnalisés

La formule de dégâts avec laquelle les joueurs frappent les boss personnalisés comporte trop de petites variables comme les coups critiques et les temps de recharge pour être expliquée en détail ici. Une version simplifiée ressemble à ceci :

```
dégâts = Niveau de l'arme
```

C'est à quoi devraient ressembler les dégâts dans un contexte moyen idéal.

# Utilisation de ces données pour les donjons

**REMARQUE : CECI SUPPOSE QUE VOUS UTILISEZ LES VALEURS `normalizedCombat` !** Ces valeurs ont été spécifiquement conçues pour équilibrer les donjons plus facilement.

Une partie de la difficulté d'un boss consiste à lui donner la santé et les dégâts appropriés pour la rencontre. Cependant, gardez à l'esprit que ce n'est qu'une partie du problème, et que les pouvoirs sont tout aussi importants.

Ce qui suit est présenté dans le format correct pour le fichier Custom Boss.

## Les calculs rapides et faciles

1.  EliteMobs a 7 coups comme nombre de coups qu'un joueur avec une arme du même niveau qu'un boss doit porter pour le tuer, en supposant qu'il n'y ait aucun modificateur.
    1.  Cela signifie qu'un multiplicateur de 2,0 signifie que les joueurs devront frapper le boss 2 x 7 = 14 fois. 0,5 signifie 7 / 2 = 3,5.
2.  Les dégâts de base de normalizedCombat, en supposant que l'armure du joueur est du même niveau que le boss, sont de 2,5 dégâts ou 1,25 cœur de dégâts par coup.
    1.  Cela signifie qu'un multiplicateur de 2,0 signifie que les joueurs perdront 3 cœurs par coup, et un multiplicateur de 0,5 fera perdre aux joueurs 0,75 cœur par coup.

**Gardez à l'esprit que les joueurs ont tendance à privilégier les armes, et finissent souvent par avoir une armure bien pire que les armes. À moins que vous ne conceviez des types d'arènes très spécifiques avec un combat à distance, vous ne voulez probablement pas infliger beaucoup de dégâts par coup.** Testez votre contenu !

## Créer un mob de donjon moyen

Avec la mise à l'échelle de normalizedCombat, vous pouvez appliquer une configuration très minimaliste :

```yaml
normalizedCombat: true
healthMultiplier: 1.0 #4 coups pour tuer 
damageMultiplier: 1.0 #1.5 cœur de dégâts
```

**Remarque : étant donné que 1.0 est la valeur par défaut, cela signifie que vous pouvez également ne rien définir**.

## Créer des groupes de trash mobs

Les groupes de trash mobs sont nombreux mais pas très dangereux :

```yaml
normalizedCombat: true
healthMultiplier: 0.7 #3 coups pour tuer 
damageMultiplier: 0.5 #0.5 cœur de dégâts
```

## Créer des renforts

Les renforts devraient mourir très facilement, mais représenter un danger en termes de dégâts (ces valeurs sont recommandées pour 4+ entités de mêlée, l'utilisation réelle peut varier) :

```yaml
normalizedCombat: true
healthMultiplier: 0.25 #1 coup pour tuer 
damageMultiplier: 0.6 #1 cœur de dégâts
```

## Créer des mini-boss

Les mini-boss devraient tenir bon et représenter un défi mécanique pour les joueurs. Ce devrait être un test de compétence qui dure un certain temps, mais pas quelque chose d'extrêmement mortel :

```yaml
normalizedCombat: true
healthMultiplier: 3.0 #10 coups pour tuer 
damageMultiplier: 1.2 #2 cœurs de dégâts
```

## Créer des boss

Les boss sont un véritable défi, la conclusion d'une accumulation dans un donjon et un véritable test de compétence avec tout en jeu. Les rencontres doivent être longues et la mort doit être une menace présente.

```yaml
normalizedCombat: true
healthMultiplier: 7.0 #23 coups pour tuer 
damageMultiplier: 1.4 #2.5 cœurs de dégâts
```

## Créer des boss mondiaux

Les boss mondiaux sont dangereux, mais surtout, ils ont beaucoup de points de vie et invoquent beaucoup de renforts / ont beaucoup d'attaques à zone d'effet. Ils sont censés être combattus par de grands groupes de joueurs pendant la plus longue période qu'une rencontre d'élite devrait durer. Ils ne sont pas très mortels, mais ont beaucoup de mécanismes qui peuvent submerger les joueurs mal préparés.

```yaml
normalizedCombat: true
healthMultiplier: 40.0 #160 coups pour tuer 
damageMultiplier: 1.5 #2.5-3 cœurs de dégâts
```

Ce ne sont là que des valeurs approximatives recommandées et toutes les valeurs finales doivent être ajustées en fonction des rencontres elles-mêmes.
