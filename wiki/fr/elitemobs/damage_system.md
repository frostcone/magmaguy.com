Voici une analyse complète de la manière dont la santé / les dégâts s'adaptent dans EliteMobs. Elle devrait être utilisée comme référence lors de la conception de donjons.

Elle est axée sur les Bosses Personnalisés, mais les Élites normaux s'adaptent de la même manière.

# Avant de commencer !

Vous n'avez pas besoin de lire tout ceci si vous souhaitez simplement effectuer des ajustements rapides. Passez à la section "Utilisation de ces données pour les donjons" pour voir des calculs rapides très simplifiés et une série de paramètres recommandés prédéfinis !

# Mise à l'échelle (en général)

Dans EliteMobs, par défaut, les bosses gagnent 7 points de santé maximale et infligent 1 dégât supplémentaire par niveau.

Les armes des joueurs infligent 7 dégâts supplémentaires par niveau, et l'armure réduit 0,25 dégât par niveau (mais il y a 4 emplacements d'armure qui contribuent au total, ce qui équivaut à 1). Enfin, les joueurs gagnent de la santé maximale lorsqu'ils débloquent les rangs de prestige.

# Dégâts infligés par les Bosses Personnalisés

La formule de dégâts pour les Bosses Personnalisés est :

```
( ( ( dégâts de base / 2 ) * multiplicateur de dégâts du boss personnalisé) + niveau du boss - réduction d'armure du joueur ) * multiplicateur de dégâts global
```

## dégâts de base

Cela peut être l'une des deux choses suivantes :

1.  La valeur dans `mobproperties` pour le type d'entité du boss.
2.  Comme cela peut être difficile à garder à l'esprit lors de la conception de donjons et d'autres contenus, les Bosses Personnalisés peuvent avoir le champ `normalizedCombat`, qui applique une valeur standard de 5 dégâts, offrant la meilleure mise à l'échelle pour la progression d'EliteMobs. Dans une mise à jour ultérieure, `normalizedCombat` sera activé par défaut pour tous les bosses régionaux.

## multiplicateur de dégâts du boss personnalisé

C'est le multiplicateur de dégâts dans le fichier du Boss Personnalisé. La valeur par défaut est 1.

## niveau du boss

Comme vous pouvez le deviner, c'est simplement le niveau du boss. Cela signifie que les bosses infligent un dégât supplémentaire par niveau.

## réduction d'armure du joueur

L'armure du joueur réduit 0,25 dégât par niveau, et il y a 4 emplacements d'armure qui peuvent contribuer au total. De plus, chaque niveau de protection contre les projectiles réduit les dégâts des projectiles de 0,025.

## multiplicateur de dégâts global

C'est le multiplicateur dans `MobCombatSettings`. La valeur par défaut est 1.

# Santé maximale des Bosses Personnalisés

La formule de santé pour les Bosses Personnalisés est :

```
( santé maximale de base + niveau du boss * 7 ) * multiplicateur de santé du boss personnalisé
```

## santé maximale de base

Cela peut être l'une des deux choses suivantes :

1.  La santé maximale par défaut de l'entité vanilla de Minecraft.
2.  Comme cela peut être difficile à garder à l'esprit lors de la conception de donjons et d'autres contenus, les Bosses Personnalisés peuvent avoir le champ `normalizedCombat`, qui applique une valeur standard de 7 points de santé, offrant la meilleure mise à l'échelle pour la progression d'EliteMobs. `normalizedCombat` est activé par défaut pour tous les bosses régionaux.

## niveau

C'est le niveau du boss.

## multiplicateur de santé du boss personnalisé

C'est le multiplicateur dans le fichier du Boss Personnalisé. La valeur par défaut est 1.

# Dégâts infligés aux Bosses Personnalisés

La formule de dégâts que les joueurs infligent aux Bosses Personnalisés comporte trop de petites variables comme les coups critiques et les temps de recharge pour être expliquée en détail ici. Une version simplifiée ressemble à ceci :

```
dégâts = Niveau de l'arme
```

Voici à quoi les dégâts devraient ressembler approximativement dans un cadre moyen idéal.

# Utilisation de ces données pour les donjons

**NOTE : CECI SUPPOSE QUE VOUS UTILISEZ LES VALEURS `normalizedCombat` !** Ces valeurs ont été spécifiquement conçues pour faciliter l'équilibrage des donjons.

Une partie de la difficulté d'un boss consiste à lui donner la santé et les dégâts appropriés pour la rencontre. Cependant, gardez à l'esprit que ce n'est qu'une partie de celle-ci, et que les pouvoirs sont tout aussi importants.

Ce qui suit est présenté dans le format correct pour le fichier du Boss Personnalisé.

## Les calculs rapides et faciles

1.  EliteMobs considère 7 coups comme le nombre de coups qu'un joueur avec une arme du même niveau qu'un boss doit donner pour le tuer, en supposant aucun modificateur.
    1.  Cela signifie qu'un multiplicateur de 2,0 signifie que les joueurs devront frapper le boss 2 x 7 = 14 fois. 0,5 signifie 7 / 2 = 3,5.
2.  Les dégâts de base de `normalizedCombat`, en supposant que l'armure du joueur est du même niveau que le boss, sont de 2,5 dégâts ou 1,25 cœurs de dégâts par coup.
    1.  Cela signifie qu'un multiplicateur de 2,0 signifie que les joueurs perdront 3 cœurs par coup, et un multiplicateur de 0,5 fera perdre aux joueurs 0,75 cœurs par coup.

**Gardez à l'esprit que les joueurs ont tendance à prioriser les armes, et finissent souvent avec une armure bien moins bonne que leurs armes. À moins que vous ne conceviez des types d'arènes très spécifiques avec des combats à distance, vous ne voudrez probablement pas infliger beaucoup de dégâts par coup.** Testez votre contenu !

## Création d'un mob de donjon moyen

Avec la mise à l'échelle de `normalizedCombat`, vous pouvez appliquer une configuration très minimaliste :

```yaml
normalizedCombat: true
healthMultiplier: 1.0 # 4 coups pour tuer
damageMultiplier: 1.0 # 1,5 cœurs de dégâts
```

**Note : puisque 1.0 est la valeur par défaut, cela signifie que vous pouvez aussi simplement ne rien définir**.

## Création de groupes de mobs faibles (trash packs)

Les groupes de mobs faibles sont nombreux mais pas très dangereux :

```yaml
normalizedCombat: true
healthMultiplier: 0.7 # 3 coups pour tuer
damageMultiplier: 0.5 # 0,5 cœurs de dégâts
```

## Création de renforts

Les renforts devraient mourir très facilement, mais représenter un danger en termes de dégâts (ces valeurs sont recommandées pour 4+ entités de mêlée, l'utilisation réelle peut varier) :

```yaml
normalizedCombat: true
healthMultiplier: 0.25 # 1 coup pour tuer
damageMultiplier: 0.6 # 1 cœur de dégâts
```

## Création de mini-bosses

Les mini-bosses devraient tenir bon et représenter un défi mécanique pour les joueurs. Ce devrait être un test d'habileté qui dure un peu, mais pas quelque chose d'extrêmement mortel :

```yaml
normalizedCombat: true
healthMultiplier: 3.0 # 10 coups pour tuer
damageMultiplier: 1.2 # 2 cœurs de dégâts
```

## Création de bosses

Les bosses sont un véritable défi, la conclusion d'une montée en puissance dans un donjon et un véritable test d'habileté où tout est en jeu. Les rencontres devraient être longues et la mort devrait être une menace présente.

```yaml
normalizedCombat: true
healthMultiplier: 7.0 # 23 coups pour tuer
damageMultiplier: 1.4 # 2,5 cœurs de dégâts
```

## Création de Bosses Mondiaux

Les bosses mondiaux sont dangereux, mais surtout ils ont beaucoup de santé et invoquent beaucoup de renforts / ont beaucoup d'attaques de zone d'effet. Ils sont destinés à être combattus par de grands groupes de joueurs pendant la plus longue durée qu'une rencontre d'élite devrait durer. Ils ne sont pas très mortels, mais ont beaucoup de mécaniques qui peuvent submerger les joueurs mal préparés.

```yaml
normalizedCombat: true
healthMultiplier: 40.0 # 160 coups pour tuer
damageMultiplier: 1.5 # 2,5-3 cœurs de dégâts
```

Ce ne sont que des valeurs recommandées approximatives et toutes les valeurs finales devraient être ajustées en fonction des rencontres elles-mêmes.