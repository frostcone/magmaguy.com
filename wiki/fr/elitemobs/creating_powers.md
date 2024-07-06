[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Système de script EliteMobs

La page suivante explique comment créer des scripts Elite !

Il s’agit d’une fonctionnalité avancée qui nécessite une connaissance approfondie d’EliteMobs.

**Remarque : les scripts Elite peuvent être ajoutés en tant que fichiers de pouvoir ou à des fichiers de boss personnalisés !** S’ils sont utilisés en tant que fichiers de pouvoir, vous pouvez les ajouter en tant que pouvoirs normaux aux boss à l’aide du paramètre de configuration [powers]($language$/elitemobs/creating_bosses.md&section=powers) des boss personnalisés, comme d’habitude.

## Ajout d’un script Elite

Pour commencer à ajouter un script Elite à un boss, ajoutez l’entrée suivante au fichier du boss :

```yml
eliteScript:
```

**Remarque : les éléments suivants sont extrêmement sensibles à la casse et aux espaces ! Assurez-vous que vos espaces, sauts de ligne et formatage général correspondent aux exemples !**

Maintenant que le début de votre script est déclaré, vous pouvez ajouter votre script spécifique. Pour cet exemple, nous allons créer un script appelé « Example » :

```yml
eliteScript:
  Example:
```

Les scripts Elite comportent 5 sections différentes : « Events », « Conditions », « Zones », « Actions » et « Cooldowns ». Seules les « Actions » sont obligatoires.

Voyons un exemple simple :

```yml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PUSH
      Target:
        targetType: SELF
      vValue: 0,0.5,0
    Cooldowns:
      local: 60
      global: 20
```

Ce script fait qu’une élite est repoussée lorsqu’elle est touchée par un joueur, et ne le fera plus avant 3 secondes (et empêchera d’autres pouvoirs de se déclencher pendant 1 seconde en raison des paramètres que nous avons définis dans la section Cooldowns).

Maintenant que vous connaissez le format général de la structure des scripts, il est temps d’apprendre ce que vous pouvez faire avec chaque section !

----

# Événements

[Events]($language$/elitemobs/elitescript_events.md)

Cliquez sur le lien ci-dessus pour savoir comment utiliser les événements !

# Cibles

[Targets]($language$/elitemobs/elitescript_targets.md)

Cliquez sur le lien ci-dessus pour savoir comment utiliser les cibles !

# Actions

[Actions]($language$/elitemobs/elitescript_actions.md)

Cliquez sur le lien ci-dessus pour savoir comment utiliser les actions !

# Zones

[Zones]($language$/elitemobs/elitescript_zones.md)

Cliquez sur le lien ci-dessus pour savoir comment utiliser les zones !

# Conditions

[Conditions]($language$/elitemobs/elitescript_conditions.md)

Cliquez sur le lien ci-dessus pour savoir comment utiliser les conditions !

# Temps de recharge

[Cooldowns]($language$/elitemobs/elitescript_cooldowns.md)

Cliquez sur le lien ci-dessus pour savoir comment utiliser les temps de recharge !

----

## Ajout de plusieurs scripts Elite

Vous pouvez avoir plusieurs actions sur un événement, mais que se passe-t-il si vous voulez plusieurs scripts sur le même boss ? C’est aussi simple que de créer une nouvelle entrée de script ! Développons l’exemple précédent et ajoutons-y un autre script :

```yml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PUSH
      Target:
        targetType: SELF
      vValue: 0,0.5,0
    Cooldowns:
      local: 60
      global: 20
  Example2:
    Events:
    - PlayerDamagedByEliteMobEvent
    Actions:
    - action: SET_ON_FIRE
      Target:
        targetType: DIRECT_TARGET
    Cooldowns:
      local: 200
      global: 60
```
Dans cet exemple, nous avons ajouté un deuxième script appelé Example2. Example2 mettra le feu au joueur qui est endommagé par le boss, ceci est dû au fait que targetType est défini sur [DIRECT_TARGET]($language$/elitemobs/elitescript_targets.md&section=target-types). </br>Le temps de recharge de ce script est défini sur 200 ticks, ce qui signifie que le boss ne pourra mettre le feu aux joueurs que toutes les 10 secondes.

## Créer des pouvoirs autonomes

Les pouvoirs autonomes sont presque entièrement composés par le script Elite. Seuls deux champs sont facultatifs. N’oubliez pas que pour que les pouvoirs autonomes fonctionnent, ils doivent être placés dans le dossier `~plugins/EliteMobs/powers`. </br>Exemple de pouvoir autonome :

```yml
isEnabled: true
powerType: UNIQUE
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PUSH
      Target:
        targetType: SELF
      vValue: 0,.3,0
    Cooldowns:
      local: 60
      global: 20
```

### isEnabled

Comme partout ailleurs dans le plugin, définit si le pouvoir est activé.

### powerType

Le type de pouvoir définit la manière dont le pouvoir est attribué. Les valeurs sont :

- `UNIQUE` : le pouvoir ne sera appliqué qu’aux boss personnalisés dont le pouvoir est défini dans la section des pouvoirs.
- `DEFENSIVE` / `MISCELLANEOUS` / `OFFENSIVE` : TOUTE élite pourra obtenir ces pouvoirs, qui seront comptabilisés dans un sous-ensemble spécifique de pouvoirs.
- `MAJOR_ZOMBIE`, `MAJOR_SKELETON`, `MAJOR_BLAZE`, `MAJOR_ENDERMAN`, `MAJOR_GHAST` : seules les élites du type d’entité adéquat pourront apparaître naturellement avec ces pouvoirs, qui seront comptabilisés dans les pouvoirs majeurs.
