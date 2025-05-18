Voici la traduction en français, en conservant le formatage markdown :

# Modification des mini-donjons existants

Suite à une demande populaire, cette page aborde les bases de la modification des mini-donjons existants. Ce n'est pas un guide étape par étape, mais un aperçu plus large de la manière dont les systèmes doivent être modifiés. Vous devrez lire les pages wiki sur les [Boss personnalisés]($language$/elitemobs/creating_bosses.md) et les [Objets personnalisés]($language$/elitemobs/creating_items.md) afin de modifier ces valeurs.

### Modification de la difficulté des donjons

Il y a trois raisons pour lesquelles vous pourriez vouloir modifier la difficulté des donjons, et elles sont les suivantes :

### Modification des multiplicateurs de dégâts/santé des boss

C'est la modification la plus facile à réaliser. Si vous pensez que les boss infligent trop peu ou trop de dégâts, ou qu'ils ont trop peu ou trop de santé, vous pouvez modifier les valeurs associées à ces modificateurs dans les fichiers de boss contenus dans le dossier `custombosses`.

Exemple de valeurs que vous voudriez modifier :
```yml
healthMultiplier: 0.5
damageMultiplier: 0.5
```
Plus d'informations sur les statistiques des boss [ici]($language$/elitemobs/creating_bosses.md&section=healthmultiplier).

Veuillez garder à l'esprit que pour beaucoup de pouvoirs, le multiplicateur de dégâts ne modifie pas les dégâts appliqués par le pouvoir. Référez-vous à la section suivante sur la façon de modifier les pouvoirs.

### Modification des pouvoirs des boss

La principale difficulté d'EliteMobs est de gérer les différents pouvoirs que les boss peuvent avoir. Les boss de niveau supérieur ont tendance à avoir plus de pouvoirs et des pouvoirs plus difficiles, et les boss de niveau inférieur ont tendance à avoir moins de pouvoirs et des pouvoirs plus faciles. Certains pouvoirs utilisés ensemble sur le même boss rendent les combats plus faciles, et d'autres pouvoirs combinés peuvent rendre le combat significativement plus difficile.

Exemple de valeurs que vous voudriez modifier :
```yml
powers:
- invulnerability_fire.yml
- invulnerability_arrow.yml
```
Plus d'informations sur les pouvoirs des boss [ici]($language$/elitemobs/creating_bosses.md&section=powers).

Comme il y a trop de combinaisons de pouvoirs à lister ici, vous devrez apprendre comment fonctionnent les pouvoirs et tester vos rencontres afin de trouver le juste milieu pour ce que vous considérez comme une rencontre ni trop difficile ni trop facile.

### Modification du niveau des boss

C'est la question la plus fréquemment posée, et bien qu'il soit possible de le faire, cela nécessite quelques étapes pour s'assurer que vous adaptez correctement vos boss à la hausse ou à la baisse.

Exemple de valeurs que vous voudriez modifier :
```yml
level: 21
```
Plus d'informations sur les niveaux des boss [ici]($language$/elitemobs/creating_bosses.md&section=level).

Cela combine ce qui est dit sur les multiplicateurs de dégâts/santé, car les boss de niveaux inférieurs/supérieurs pourraient nécessiter des multiplicateurs de santé et de dégâts légèrement différents pour que le combat semble correct.

Cependant, l'aspect le plus important à considérer ici est les pouvoirs du boss. Les boss de niveau inférieur et supérieur ont tendance à avoir des ensembles de pouvoirs assez différents selon la difficulté prévue du combat. Avoir le même ensemble de pouvoirs pour un boss de niveau 10 et un boss de niveau 200 entraîne généralement des combats dont la difficulté semble radicalement différente. Encore une fois, la seule façon de vraiment trouver le juste milieu est d'apprendre comment fonctionnent les pouvoirs du plugin et de les tester.

Et enfin, **mais non des moindres !** Vous voudrez probablement ajuster le butin personnalisé. La plupart des boss dans EliteMobs ont un butin personnalisé, et si vous modifiez le niveau du boss, il y a de fortes chances que vous souhaitiez changer la nature du butin qu'il laisse tomber.

Exemple de valeurs que vous voudriez modifier :
```yml
uniqueLootList:
  - filename: mob_drop_boots.yml
    chance: 0.05
```
Plus d'informations sur les butins [ici]($language$/elitemobs/loot_tables.md).

### Créditer / publier du contenu modifié

Dans le cadre d'EliteMobs, vous êtes libre de publier les donjons que vous créez sur les canaux appropriés (Discord). Cependant, si votre création n'est qu'une modification d'un donjon existant, votre soumission peut être retirée, surtout s'il ne s'agit que d'un petit ajustement ou si elle contient ou dérive de contenu premium (pour des raisons évidentes).

Vous êtes libre et bienvenu de modifier tout contenu que vous avez acheté ou téléchargé autrement pour l'adapter aux besoins de votre serveur pour une utilisation au sein de votre propre réseau, cependant, pour des raisons évidentes, cela ne vous confère pas de droits de redistribution.

Nous nous réservons le droit de retirer les soumissions de la communauté pour toute raison et à tout moment, bien que nous détesterions avoir à le faire.

### Informations supplémentaires

Si vous pensez que cette page devrait être davantage développée, laissez une suggestion sur Discord en indiquant ce qui devrait y être ajouté. Plus d'informations sur les différents systèmes mentionnés ici sont présentes dans les autres pages wiki.