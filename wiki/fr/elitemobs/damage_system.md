Voici une analyse complète de la façon dont la santé/les dégâts sont mis à l'échelle dans EliteMobs. Il doit être utilisé comme référence lors de la conception de donjons.

Il est axé sur les boss personnalisés, mais les élites normales sont mises à l'échelle de la même manière.

# Avant de commencer !

Vous n'avez pas besoin de lire tout cela si vous voulez simplement faire des ajustements rapides. Passez à la section "Utilisation de ces données pour les donjons" pour voir des calculs rapides très simplifiés et une série de paramètres recommandés préfabriqués !

# Mise à l'échelle (en général)

Dans EliteMobs, par défaut, les boss obtiennent 7 de santé maximale et infligent 1 de dégâts supplémentaires par niveau.

Les armes du joueur infligent 7 dégâts supplémentaires par niveau et l'armure réduit de 0,25 les dégâts par niveau (mais il y a 4 emplacements d'armure qui contribuent au total, ce qui équivaut à 1). Enfin, les joueurs gagnent une santé maximale à mesure qu'ils débloquent les rangs de prestige.

# Dégâts infligés par les boss personnalisés

La formule de dégâts pour les boss personnalisés est :

```
( ( ( dégâts de base / 2 ) * multiplicateur de dégâts de boss personnalisé) + niveau du boss - réduction de l'armure du joueur ) * multiplicateur de dégâts global
```

## dégâts de base

Il peut s'agir de l'une des deux choses suivantes :

1.  La valeur dans mobproperties pour le type d'entité du boss.
2.  Étant donné qu'il peut être difficile de s'en souvenir lors de la conception de donjons et d'autres contenus, les boss personnalisés peuvent avoir le champ normalizedCombat, qui applique un dégât standard de 5, ce qui a la meilleure échelle pour la progression EliteMobs. Dans une mise à jour ultérieure, le combat normalisé sera activé par défaut pour tous les boss régionaux.

## multiplicateur de dégâts de boss personnalisé

Il s'agit du multiplicateur de dégâts dans le fichier du boss personnalisé. La valeur par défaut est 1.

## niveau du boss

Comme vous pouvez le deviner, il s'agit simplement du niveau du boss. Cela signifie que les boss infligent un dégât supplémentaire par niveau.

## réduction de l'armure du joueur

L'armure du joueur réduit les dégâts de 0,25 par niveau, et il existe 4 emplacements d'armure qui peuvent contribuer au total. De plus, chaque niveau de protection contre les projectiles réduit les dégâts des projectiles de 0,025.

## multiplicateur de dégâts global

Il s'agit du multiplicateur dans MobCombatSettings. La valeur par défaut est 1.

# Santé maximale des boss personnalisés

La formule de santé des boss personnalisés est :

```
( santé maximale de base + niveau du boss * 7 ) * multiplicateur de santé du boss personnalisé
```

## santé maximale de base

Il peut s'agir de l'une des deux choses suivantes :

1.  La santé maximale par défaut de l'entité Minecraft vanilla.
2.  Étant donné qu'il peut être difficile de s'en souvenir lors de la conception de donjons et d'autres contenus, les boss personnalisés peuvent avoir le champ normalizedCombat, qui applique une santé standard de 7, ce qui a la meilleure échelle pour la progression d'EliteMobs. Le combat normalisé est activé par défaut pour tous les boss régionaux.

## niveau

Ceci est le niveau du boss

## multiplicateur de santé du boss personnalisé

Il s'agit du multiplicateur dans le fichier du boss personnalisé. La valeur par défaut est 1.

# Dégâts infligés aux boss personnalisés

La formule de dégâts avec laquelle les joueurs frappent les boss personnalisés a trop de petites variables comme les coups critiques et les temps de recharge pour être expliquée en détail ici. Une version simplifiée ressemble à ceci :

```
dégâts = Niveau de l'arme
```

Voici à quoi devraient ressembler à peu près les dégâts dans un environnement moyen idéal.

# Utilisation de ces données pour les donjons

**REMARQUE : CELA SUPPOSE QUE VOUS UTILISEZ LES VALEURS `normalizedCombat` !** Ces valeurs ont été spécialement conçues pour équilibrer les donjons plus facilement.

Une partie de la difficulté d'un boss est de faire en sorte qu'il ait la santé et les dégâts appropriés pour la rencontre. Cependant, gardez à l'esprit que ce n'est qu'une partie de celui-ci et que les pouvoirs sont tout aussi importants.

Ce qui suit est présenté dans le format correct pour le fichier de boss personnalisé.

## Les calculs rapides et faciles

1.  EliteMobs a 7 coups comme la quantité de coups qu'un joueur avec une arme du même niveau qu'un boss met pour le tuer, en supposant qu'il n'y ait pas de modificateurs.
    1.  Cela signifie qu'un multiplicateur de 2,0 signifie que les joueurs devront frapper le boss 2 x 7 = 14 fois. 0,5 signifie 7 / 2 = 3,5.
2.  Les dégâts de normalizedCombat de référence, en supposant que l'armure du joueur est du même niveau que le boss, sont de 2,5 dégâts ou 1,25 cœurs de dégâts par coup.
    1.  Cela signifie qu'un multiplicateur de 2,0 signifie que les joueurs perdront 3 cœurs par coup, et un multiplicateur de 0,5 fera perdre 0,75 cœurs par coup aux joueurs.

**Gardez à l'esprit que les joueurs ont tendance à privilégier les armes et se retrouvent souvent avec une armure bien pire que les armes. À moins que vous ne conceviez des types d'arènes très spécifiques avec des combats à distance, vous ne voudrez probablement pas infliger beaucoup de dégâts par coup.** Testez votre contenu !

## Création d'un mob de donjon moyen

Avec la mise à l'échelle de normalizedCombat, vous pouvez appliquer une configuration très minimaliste :

```yaml
normalizedCombat: true
healthMultiplier: 1.0 #4 hits to slay
damageMultiplier: 1.0 #1.5 hearts of dmg
```

**Remarque : étant donné que 1.0 est la valeur par défaut, cela signifie que vous pouvez également simplement ne rien définir**.

## Création de packs de déchets

Les packs de déchets sont nombreux, mais pas très dangereux :

```yaml
normalizedCombat: true
healthMultiplier: 0.7 #3 coups pour tuer
damageMultiplier: 0.5 #0,5 cœur de dégâts
```

## Création de renforts

Les renforts devraient mourir très facilement, mais présenter un danger en termes de dégâts (ces valeurs sont recommandées pour plus de 4 entités de mêlée, l'utilisation réelle peut varier) :

```yaml
normalizedCombat: true
healthMultiplier: 0.25 #1 coup pour tuer
damageMultiplier: 0.6 #1 cœur de dégâts
```

## Création de mini-boss

Les mini-boss doivent tenir bon et représenter un défi mécanique pour les joueurs. Il devrait s'agir d'un test d'adresse qui dure un certain temps, mais pas quelque chose d'extrêmement mortel :

```yaml
normalizedCombat: true
healthMultiplier: 3.0 #10 coups pour tuer
damageMultiplier: 1.2 #2 cœurs de dégâts
```

## Création de boss

Les boss sont un véritable défi, la conclusion d'une accumulation dans un donjon et un véritable test d'adresse avec tout en jeu. Les rencontres doivent être longues et la mort doit être une menace présente.

```yaml
normalizedCombat: true
healthMultiplier: 7.0 #23 coups pour tuer
damageMultiplier: 1.4 #2.5 cœurs de dégâts
```

## Création de boss mondiaux

Les boss mondiaux sont dangereux, mais surtout, ils ont beaucoup de santé et invoquent beaucoup de renforts / ont beaucoup d'attaques à effet de zone. Ceux-ci sont destinés à être combattus par de grands groupes de joueurs pendant la plus longue période qu'une rencontre d'élite devrait durer. Ils ne sont pas très mortels, mais ont beaucoup de mécanismes qui peuvent submerger les joueurs mal préparés.

```yaml
normalizedCombat: true
healthMultiplier: 40.0 #160 coups pour tuer
damageMultiplier: 1.5 #2,5-3 cœurs de dégâts
```

Ce ne sont que des valeurs recommandées approximatives et toutes les valeurs finales doivent être ajustées en fonction des rencontres elles-mêmes.
