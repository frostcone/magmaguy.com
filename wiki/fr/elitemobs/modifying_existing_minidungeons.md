# Modification de mini-donjons existants

Sur demande générale, cette page présente les bases de la modification des mini-donjons existants. Il ne s'agit pas d'un guide étape par étape, mais d'un aperçu plus large de la manière dont les systèmes doivent être modifiés. Vous devrez lire les pages wiki sur les [Boss personnalisés]($language$/elitemobs/creating_bosses.md) et les [Objets personnalisés]($language$/elitemobs/creating_items.md) afin de modifier ces valeurs.

### Modification de la difficulté du donjon

Il existe trois raisons pour lesquelles vous pourriez vouloir modifier la difficulté des donjons, et les voici :

### Modification des multiplicateurs de dégâts/santé des boss

Il s'agit de la modification la plus facile à réaliser. Si vous pensez que les boss infligent trop peu ou trop de dégâts, ou qu'ils ont trop peu ou trop de santé, vous pouvez modifier les valeurs associées à ces modificateurs dans les fichiers de boss contenus dans le dossier `custombosses`.

Exemple de valeurs que vous voudriez modifier :
```yml
healthMultiplier: 0.5
damageMultiplier: 0.5
```
Plus d'informations sur les stats des boss [ici]($language$/elitemobs/creating_bosses.md&section=healthmultiplier).

Veuillez garder à l'esprit que pour de nombreux pouvoirs, le multiplicateur de dégâts ne modifie pas les dégâts appliqués par le pouvoir. Reportez-vous à la section suivante sur la façon de modifier les pouvoirs.

### Modification des pouvoirs des boss

La principale difficulté d'EliteMobs est de gérer les différents pouvoirs que les boss peuvent avoir. Les boss de niveau supérieur ont tendance à avoir des pouvoirs plus nombreux et plus difficiles, et les boss de niveau inférieur ont tendance à avoir des pouvoirs moins nombreux et plus faciles. Certains pouvoirs utilisés ensemble sur le même boss rendent les combats plus faciles, et d'autres pouvoirs combinés peuvent rendre le combat beaucoup plus difficile.

Exemple de valeurs que vous voudriez modifier :
```yml
powers:
- invulnerability_fire.yml
- invulnerability_arrow.yml
```
Plus d'informations sur les pouvoirs des boss [ici]($language$/elitemobs/creating_bosses.md&section=powers).

Comme il y a trop de combinaisons de pouvoirs à énumérer ici, vous devrez apprendre comment fonctionnent les pouvoirs et tester vos rencontres afin de trouver le point idéal pour ce que vous pensez être une rencontre ni trop difficile ni trop facile.

### Modification du niveau des boss

Il s'agit de la question la plus fréquemment posée, et bien qu'il soit possible de le faire, cela nécessite quelques étapes pour s'assurer que vous mettez à l'échelle vos boss de manière adéquate vers le haut ou vers le bas.

Exemple de valeurs que vous voudriez modifier :
```yml
level: 21
```
Plus d'informations sur les niveaux de boss [ici]($language$/elitemobs/creating_bosses.md&section=level).

Cela nécessite une combinaison de ce qui est dit sur les multiplicateurs de dégâts/santé, car les boss à des niveaux inférieurs/supérieurs pourraient avoir besoin de multiplicateurs de santé et de dégâts légèrement différents pour que le combat soit perçu comme juste.

Cependant, l'aspect le plus important à prendre en compte ici est les pouvoirs sur le boss. Les boss de niveau inférieur et de niveau supérieur ont tendance à avoir des ensembles de pouvoirs assez différents en fonction de la difficulté prévue du combat. Avoir le même ensemble de pouvoirs pour un boss de niveau 10 et un boss de niveau 200 entraîne généralement des combats dont la difficulté est très différente. Encore une fois, la seule façon de vraiment trouver le point idéal est d'apprendre comment fonctionnent les pouvoirs du plugin et de les tester.

Et enfin, **mais non des moindres !** Vous voudrez probablement modifier le butin personnalisé. La plupart des boss dans EliteMobs ont un butin personnalisé et, si vous modifiez le niveau du boss, il est probable que vous voudrez modifier la nature du butin qu'il laisse tomber.

Exemple de valeurs que vous voudriez modifier :
```yml
uniqueLootList:
  - filename: mob_drop_boots.yml
    chance: 0.05
```
Plus d'informations sur les butins [ici]($language$/elitemobs/loot_tables.md).

### Créditer/publier le contenu modifié

Dans EliteMobs, vous êtes libre de publier les donjons que vous créez sur les chaînes appropriées pour ce faire (Discord). Toutefois, si votre création n'est qu'une modification d'un donjon existant, votre soumission peut être supprimée, en particulier si ce n'est qu'un petit ajustement ou si elle contient ou est dérivée de contenu premium (pour des raisons évidentes).

Vous êtes libre et invité à modifier tout contenu que vous avez acheté ou téléchargé pour l'adapter aux besoins de votre serveur afin de l'utiliser au sein de votre propre réseau, mais pour des raisons évidentes, cela ne vous donne pas de droits de redistribution.

Nous nous réservons le droit de supprimer les soumissions de la communauté pour quelque raison que ce soit et à tout moment, bien que nous détesterions vraiment avoir à le faire.

### Informations supplémentaires

Si vous pensez que cette page doit être davantage étoffée, laissez une suggestion sur Discord indiquant ce qui doit y être ajouté. Vous trouverez plus d'informations sur les différents systèmes mentionnés ici dans les autres pages wiki.
