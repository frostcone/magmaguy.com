# Modification des mini-donjons existants

Sur la base d'une demande populaire, cette page passe en revue les bases de la modification des mini-donjons existants.
Ce n'est pas un guide étape par étape, mais un aperçu plus large de la manière dont les systèmes doivent être modifiés.
Vous devrez lire les pages du wiki sur [Boss personnalisés]($language$/elitemobs/creating_bosses.md)
et [Objets personnalisés]($language$/elitemobs/creating_items.md) afin de modifier ces valeurs.

### Modification de la difficulté des donjons

Il y a trois raisons pour lesquelles vous pourriez vouloir modifier la difficulté des donjons, et les voici :

### Modification des multiplicateurs de dégâts/santé des boss

C'est la modification la plus facile à faire. Si vous pensez que les boss infligent trop ou trop peu de dégâts, ou
qu'ils ont trop ou trop peu de santé, vous pouvez modifier les valeurs associées à ces modificateurs dans les fichiers
de boss contenus dans le dossier `custombosses`.

Exemple de valeurs que vous voudriez modifier :
```yml
healthMultiplier: 0.5
damageMultiplier: 0.5
```

Plus d'informations sur les statistiques des
boss [ici]($language$/elitemobs/creating_bosses.md&section=healthmultiplier).

Veuillez garder à l'esprit que pour de nombreux pouvoirs, le multiplicateur de dégâts ne modifie pas les dégâts
appliqués par le pouvoir. Reportez-vous à la section suivante pour savoir comment modifier les pouvoirs.

### Modification des pouvoirs des boss

La principale difficulté d'EliteMobs est de gérer les différents pouvoirs que les boss peuvent avoir. Les boss de niveau
supérieur ont tendance à avoir plus de pouvoirs plus difficiles, et les boss de niveau inférieur ont tendance à avoir
moins de pouvoirs plus faciles. Certains pouvoirs utilisés ensemble sur le même boss rendent les combats plus faciles,
et d'autres pouvoirs combinés peuvent rendre le combat beaucoup plus difficile.

Exemple de valeurs que vous voudriez modifier :
```yml
powers:
- invulnerability_fire.yml
- invulnerability_arrow.yml
```
Plus d'informations sur les pouvoirs des boss [ici]($language$/elitemobs/creating_bosses.md&section=powers).

Étant donné qu'il y a trop de combinaisons de pouvoirs à énumérer ici, vous devrez apprendre comment les pouvoirs
fonctionnent et tester vos rencontres afin de trouver le juste milieu pour ce que vous pensez être une rencontre ni trop
difficile ni trop facile.

### Modification du niveau des boss

C'est la question la plus fréquemment posée, et bien qu'il soit possible de le faire, cela prend quelques étapes afin de
s'assurer que vous augmentez ou diminuez correctement l'échelle de vos boss.

Exemple de valeurs que vous voudriez modifier :
```yml
level: 21
```

Plus d'informations sur les niveaux des boss [ici]($language$/elitemobs/creating_bosses.md&section=level).

Cela prend une combinaison de ce qui est dit sur les multiplicateurs de dégâts/santé, car les boss à des niveaux
inférieurs/supérieurs peuvent avoir besoin de multiplicateurs de santé et de dégâts légèrement différents pour que le
combat soit satisfaisant.

Cependant, l'aspect le plus important à considérer ici est les pouvoirs du boss. Les boss de niveau inférieur et
supérieur ont tendance à avoir des ensembles de pouvoirs assez différents selon la difficulté du combat. Avoir le même
ensemble de pouvoirs pour un boss de niveau 10 et un boss de niveau 200 se traduit généralement par des combats dont la
difficulté est très différente. Encore une fois, la seule façon de vraiment trouver le juste milieu est d'apprendre
comment fonctionnent les pouvoirs du plugin et de les tester.

Et enfin, **mais non des moindres!** Vous voudrez probablement modifier le butin personnalisé. La plupart des boss
d'EliteMobs ont un butin personnalisé, et si vous modifiez le niveau du boss, il y a fort à parier que vous voudrez
modifier la nature du butin qu'il laisse tomber.

Exemple de valeurs que vous voudriez modifier :
```yml
uniqueLootList:
  - filename: mob_drop_boots.yml
    chance: 0.05
```
Plus d'informations sur les butins [ici]($language$/elitemobs/loot_tables.md).

### Mentionner / publier du contenu modifié

Sous EliteMobs, vous êtes libre de publier les donjons que vous créez sur les canaux appropriés pour le faire (Discord).
Cependant, si votre création n'est qu'une modification d'un donjon existant, votre soumission peut être supprimée,
surtout s'il ne s'agit que d'un petit ajustement ou s'il contient ou est dérivé de contenu premium (pour des raisons
évidentes).

Vous êtes libre et invité à modifier tout contenu que vous avez acheté ou téléchargé afin de l'adapter aux besoins de
votre serveur pour une utilisation au sein de votre propre réseau, mais pour des raisons évidentes, cela ne vous donne
pas de droits de redistribution.

Nous nous réservons le droit de supprimer les soumissions de la communauté pour quelque raison que ce soit et à tout
moment, bien que nous détesterions avoir à le faire.

### Informations supplémentaires

Si vous pensez que cette page devrait être davantage développée, laissez une suggestion sur Discord en indiquant ce qui
devrait y être ajouté. Plus d'informations sur les différents systèmes mentionnés ici sont présentes dans les autres
pages du wiki.
