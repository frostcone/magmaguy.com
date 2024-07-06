# Modifier des mini-donjons existants

Suite à de nombreuses demandes, cette page aborde les bases de la modification des mini-donjons existants. Ce n'est pas un guide étape par étape, mais un aperçu plus large de la manière dont les systèmes doivent être modifiés. Vous devrez lire les pages wiki sur les [Boss personnalisés]($language$/elitemobs/creating_bosses.md) et les [Objets personnalisés]($language$/elitemobs/creating_items.md) afin de modifier ces valeurs.

### Modifier la difficulté du donjon

Il existe trois raisons pour lesquelles vous pourriez vouloir modifier la difficulté des donjons, et elles sont les suivantes :

### Modifier les multiplicateurs de dégâts/de santé des boss

Il s'agit de la modification la plus facile à réaliser. Si vous pensez que les boss infligent trop peu ou trop de dégâts, ou qu'ils ont trop peu ou trop de santé, vous pouvez modifier les valeurs associées à ces modificateurs dans les fichiers de boss contenus dans le dossier `custombosses`.

Exemple de valeurs que vous voudriez modifier :
```yml
healthMultiplier: 0.5
damageMultiplier: 0.5
```
Plus d'informations sur les statistiques des boss [ici]($language$/elitemobs/creating_bosses.md&section=healthmultiplier).

Veuillez garder à l'esprit que pour de nombreux pouvoirs, le multiplicateur de dégâts ne modifie pas les dégâts appliqués par le pouvoir. Reportez-vous à la section suivante pour savoir comment modifier les pouvoirs.

### Modifier les pouvoirs des boss

La principale difficulté d'EliteMobs est de gérer les différents pouvoirs que les boss peuvent avoir. Les boss de niveau supérieur ont tendance à avoir plus de pouvoirs et des pouvoirs plus difficiles, et les boss de niveau inférieur ont tendance à avoir moins de pouvoirs et des pouvoirs plus faciles. Certains pouvoirs utilisés ensemble sur le même boss rendent les combats plus faciles, et d'autres pouvoirs combinés peuvent rendre le combat beaucoup plus difficile.

Exemple de valeurs que vous voudriez modifier :
```yml
powers:
- invulnerability_fire.yml
- invulnerability_arrow.yml
```
Plus d'informations sur les pouvoirs des boss [ici]($language$/elitemobs/creating_bosses.md&section=powers).

Étant donné qu'il existe trop de combinaisons de pouvoirs pour les énumérer ici, vous devrez apprendre comment les pouvoirs fonctionnent et tester vos rencontres pour trouver le bon équilibre pour ce que vous considérez comme une rencontre ni trop difficile ni trop facile.

### Modifier le niveau des boss

Il s'agit de la question la plus fréquemment posée, et bien qu'il soit possible de le faire, cela nécessite quelques étapes pour s'assurer que vous évoluez correctement vos boss vers le haut ou vers le bas.

Exemple de valeurs que vous voudriez modifier :
```yml
level: 21
```
Plus d'informations sur les niveaux des boss [ici]($language$/elitemobs/creating_bosses.md&section=level).

Cela nécessite une combinaison de ce qui est dit à propos des multiplicateurs de dégâts/de santé, car les boss de niveau inférieur/supérieur peuvent avoir besoin de multiplicateurs de santé et de dégâts légèrement différents pour que le combat ait l'air juste.

Cependant, l'aspect le plus important à prendre en compte ici est le pouvoir du boss. Les boss de niveau inférieur et de niveau supérieur ont tendance à avoir des ensembles de pouvoirs assez différents en fonction de la difficulté du combat. Avoir le même ensemble de pouvoirs pour un boss de niveau 10 et un boss de niveau 200 se traduit généralement par des combats dont la difficulté est radicalement différente. Encore une fois, la seule façon de trouver le bon équilibre est d'apprendre comment fonctionnent les pouvoirs du plugin et de les tester.

Et enfin, **mais pas des moindres !** Vous voudrez probablement ajuster le butin personnalisé. La plupart des boss d'EliteMobs ont un butin personnalisé, et si vous changez le niveau du boss, il y a de fortes chances que vous souhaitiez changer la nature du butin qu'il laisse tomber.

Exemple de valeurs que vous voudriez modifier :
```yml
uniqueLootList:
  - filename: mob_drop_boots.yml
    chance: 0.05
```
Plus d'informations sur les chutes de butin [ici]($language$/elitemobs/loot_tables.md).

### Attribution de crédit/publication de contenu modifié

Sous EliteMobs, vous êtes libre de publier les donjons que vous créez sur les canaux appropriés pour le faire (Discord). Cependant, si votre création n'est qu'une modification d'un donjon existant, votre soumission peut être supprimée, en particulier s'il ne s'agit que d'une petite modification ou si elle contient ou est dérivée de contenu premium (pour des raisons évidentes).

Vous êtes libre et bienvenu de modifier tout contenu que vous avez acheté ou téléchargé autrement pour l'ajuster aux besoins de votre serveur pour une utilisation au sein de votre propre réseau, mais pour des raisons évidentes, cela ne vous confère pas de droits de redistribution.

Nous nous réservons le droit de retirer les soumissions de la communauté pour quelque raison que ce soit et à tout moment, bien que nous détestions avoir à le faire.

### Informations complémentaires

Si vous pensez que cette page devrait être développée, laissez une suggestion sur Discord en indiquant ce qui devrait y être ajouté. Plus d'informations sur les différents systèmes mentionnés ici sont disponibles dans les autres pages wiki.

```