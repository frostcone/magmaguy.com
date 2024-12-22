Voici une analyse complète de la manière dont la santé/les dégâts évoluent dans EliteMobs. Elle doit être utilisée comme
référence lors de la conception de donjons.

Elle est axée sur les Boss personnalisés, mais les Élites normales évoluent de la même manière.

# Avant de commencer !

Vous n'avez pas besoin de lire tout cela si vous voulez simplement faire des ajustements rapides. Passez à la section "
Utiliser ces données pour les donjons" pour voir des calculs rapides très simplifiés et une série de paramètres
préfabriqués recommandés !

# Évolution (en général)

Dans EliteMobs, par défaut, les boss gagnent 7 points de vie maximum et infligent 1 dégât supplémentaire par niveau.

Les armes des joueurs infligent 7 dégâts supplémentaires par niveau, et l'armure réduit de 0,25 les dégâts par niveau (
mais il y a 4 emplacements d'armure qui contribuent au total, ce qui équivaut à 1). Enfin, les joueurs gagnent de la
santé maximale lorsqu'ils débloquent les rangs de prestige.

# Dégâts infligés par les Boss personnalisés

La formule de dégâts pour les Boss personnalisés est la suivante :

```
( ( ( dégâts de base / 2 ) * multiplicateur de dégâts du boss personnalisé) + niveau du boss - réduction d'armure du joueur ) * multiplicateur de dégâts global
```

## dégâts de base

Il peut s'agir de deux choses :

1.  La valeur dans mobproperties pour le type d'entité du boss.
2. Comme il peut être difficile de garder cela à l'esprit lors de la conception de donjons et d'autres contenus, les
   Boss personnalisés peuvent avoir le champ normalizedCombat, qui applique un dégât standard de 5, ce qui a la
   meilleure évolution pour la progression dans EliteMobs. Dans une mise à jour ultérieure, le combat normalisé sera
   activé par défaut pour tous les boss régionaux.

## multiplicateur de dégâts du boss personnalisé

Il s'agit du multiplicateur de dégâts dans le fichier Boss personnalisé. La valeur par défaut est 1.

## niveau du boss

Comme vous pouvez le deviner, il s'agit simplement du niveau du boss. Cela signifie que les boss infligent un dégât supplémentaire par niveau.

## réduction d'armure du joueur

L'armure du joueur réduit de 0,25 les dégâts par niveau, et il y a 4 emplacements d'armure qui peuvent contribuer au
total. De plus, chaque niveau de protection contre les projectiles réduit les dégâts des projectiles de 0,025.

## multiplicateur de dégâts global

Il s'agit du multiplicateur dans MobCombatSettings. La valeur par défaut est 1.

# Santé maximale des Boss personnalisés

La formule de santé pour les Boss personnalisés est la suivante :

```
( santé maximale de base + niveau du boss * 7 ) * multiplicateur de santé du boss personnalisé
```

## santé maximale de base

Il peut s'agir de deux choses :

1. La santé maximale par défaut de l'entité vanilla Minecraft.
2. Comme il peut être difficile de garder cela à l'esprit lors de la conception de donjons et d'autres contenus, les
   Boss personnalisés peuvent avoir le champ normalizedCombat, qui applique une santé standard de 7, ce qui a la
   meilleure évolution pour la progression dans EliteMobs. Le combat normalisé est activé par défaut pour tous les boss
   régionaux.

## niveau

Il s'agit du niveau du boss.

## multiplicateur de santé du boss personnalisé

Il s'agit du multiplicateur dans le fichier Boss personnalisé. La valeur par défaut est 1.

# Dégâts infligés aux Boss personnalisés

La formule de dégâts que les joueurs infligent aux Boss personnalisés comporte trop de petites variables, comme les
coups critiques et les temps de recharge, pour être expliquée en détail ici. Une version simplifiée ressemble à ceci :

```
dégâts = Niveau de l'arme
```

Voici à quoi devraient ressembler les dégâts dans un cadre moyen idéal.

# Utilisation de ces données pour les donjons

**REMARQUE : CELA SUPPOSE QUE VOUS UTILISEZ LES VALEURS `normalizedCombat` !** Ces valeurs ont été spécifiquement
conçues pour équilibrer les donjons plus facilement.

Une partie de la difficulté d'un boss consiste à lui donner la santé et les dégâts appropriés pour la rencontre.
Cependant, gardez à l'esprit que ce n'est qu'une partie, et que les pouvoirs sont tout aussi importants.

Ce qui suit est présenté dans le format correct pour le fichier Boss personnalisé.

## Les calculs rapides et faciles

1. EliteMobs a 7 coups comme nombre de coups qu'un joueur avec une arme du même niveau qu'un boss doit faire pour le
   tuer, en supposant qu'il n'y ait pas de modificateurs.
    1. Cela signifie qu'un multiplicateur de 2,0 signifie que les joueurs devront frapper le boss 2 x 7 = 14 fois. 0,5
       signifie 7 / 2 = 3,5.
2. Les dégâts de base normalisés, en supposant que l'armure du joueur soit du même niveau que le boss, sont de 2,5
   dégâts ou 1,25 cœurs de dégâts par coup.
    1. Cela signifie qu'un multiplicateur de 2,0 signifie que les joueurs perdront 3 cœurs par coup, et un
       multiplicateur de 0,5 fera perdre aux joueurs 0,75 cœurs par coup.

**Gardez à l'esprit que les joueurs ont tendance à privilégier les armes et se retrouvent souvent avec une armure bien
moins bonne que leurs armes. À moins que vous ne conceviez des types d'arènes très spécifiques avec des combats à
distance, vous ne voudrez probablement pas infliger beaucoup de dégâts par coup.** Testez votre contenu !

## Création d'un monstre de donjon moyen

Avec l'évolution de normalizedCombat, vous pouvez appliquer une configuration très minimaliste :

```yaml
normalizedCombat: true
healthMultiplier: 1.0 #4 coups pour tuer
damageMultiplier: 1.0 #1.5 cœurs de dégâts
```

**Remarque : comme 1.0 est la valeur par défaut, cela signifie que vous pouvez aussi ne rien définir.**

## Création de groupes de monstres

Les groupes de monstres sont nombreux, mais peu dangereux :

```yaml
normalizedCombat: true
healthMultiplier: 0.7 #3 coups pour tuer
damageMultiplier: 0.5 #0.5 cœurs de dégâts
```

## Création de renforts

Les renforts doivent mourir très facilement, mais constituent un danger en termes de dégâts (ces valeurs sont
recommandées pour 4 entités de mêlée ou plus, l'utilisation réelle peut varier) :

```yaml
normalizedCombat: true
healthMultiplier: 0.25 #1 coup pour tuer
damageMultiplier: 0.6 #1 cœur de dégâts
```

## Création de mini-boss

Les mini-boss doivent tenir le coup et constituer un défi mécanique pour les joueurs. Il doit s'agir d'un test de
compétence qui dure un certain temps, mais pas quelque chose d'extrêmement mortel :

```yaml
normalizedCombat: true
healthMultiplier: 3.0 #10 coups pour tuer
damageMultiplier: 1.2 #2 cœurs de dégâts
```

## Création de boss

Les boss sont un véritable défi, la conclusion d'une montée en puissance dans un donjon et un véritable test de
compétence avec tout en jeu. Les rencontres doivent être longues et la mort doit être une menace présente.

```yaml
normalizedCombat: true
healthMultiplier: 7.0 #23 coups pour tuer
damageMultiplier: 1.4 #2.5 cœurs de dégâts
```

## Création de boss du monde

Les boss du monde sont dangereux, mais surtout, ils ont beaucoup de santé et invoquent de nombreux renforts/ont beaucoup
d'attaques de zone. Ils sont censés être combattus par de grands groupes de joueurs pendant la plus longue durée qu'une
rencontre d'élite doit durer. Ils ne sont pas très mortels, mais ils ont beaucoup de mécanismes qui peuvent submerger
les joueurs mal préparés.

```yaml
normalizedCombat: true
healthMultiplier: 40.0 #160 coups pour tuer
damageMultiplier: 1.5 #2.5-3 cœurs de dégâts
```

Ce ne sont que des valeurs recommandées et les valeurs finales doivent être ajustées en fonction des rencontres
elles-mêmes.
