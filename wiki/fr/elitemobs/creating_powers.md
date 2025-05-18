Voici la traduction en français, en conservant le formatage markdown :

[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Système de Scripting EliteMobs

La page suivante explique comment créer des Scripts Élite !

Il s'agit d'une fonctionnalité avancée qui nécessite une connaissance approfondie d'EliteMobs.

**Note : Les Scripts Élite peuvent être ajoutés en tant que fichiers de pouvoir (power files) ou à des fichiers de boss personnalisés (custom boss files) !** S'ils sont utilisés comme fichiers de pouvoir, vous pouvez les ajouter comme des pouvoirs normaux aux boss en utilisant le paramètre de configuration [powers]($language$/elitemobs/creating_bosses.md&section=powers) des Boss Personnalisés, comme d'habitude.

## Ajouter un EliteScript

Pour commencer à ajouter un EliteScript à un boss, ajoutez l'entrée suivante au fichier du boss :

```yml
eliteScript:
```

**Note : Ce qui suit est extrêmement sensible à la casse et aux espaces ! Assurez-vous que vos espaces, sauts de ligne et le formatage général correspondent aux exemples !**

Maintenant que le début de votre script est déclaré, vous pouvez ajouter votre script spécifique. Pour cet exemple, nous allons créer un script appelé `Example` :

```yml
eliteScript:
  Example:
```

Les EliteScripts ont 5 sections différentes : `Events`, `Conditions`, `Zones`, `Actions` et `Cooldowns`. Seules les `Actions` sont obligatoires.

Regardons un exemple simple :

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

Ce script fait qu'un élite est poussé vers le haut lorsqu'il est touché par un joueur, et ne le fera pas à nouveau pendant 3 secondes (et empêchera d'autres pouvoirs de se déclencher pendant 1 seconde grâce aux paramètres que nous avons définis dans la section Cooldowns).

Maintenant que vous connaissez le format général de la structure des scripts, il est temps d'apprendre ce que vous pouvez faire avec chaque section !

----

# Événements (Events)

[Événements]($language$/elitemobs/elitescript_events.md)

Cliquez sur le lien ci-dessus pour apprendre à utiliser les événements !

# Cibles (Targets)

[Cibles]($language$/elitemobs/elitescript_targets.md)

Cliquez sur le lien ci-dessus pour apprendre à utiliser les cibles !

# Actions (Actions)

[Actions]($language$/elitemobs/elitescript_actions.md)

Cliquez sur le lien ci-dessus pour apprendre à utiliser les actions !

# Zones (Zones)

[Zones]($language$/elitemobs/elitescript_zones.md)

Cliquez sur le lien ci-dessus pour apprendre à utiliser les zones !

# Conditions (Conditions)

[Conditions]($language$/elitemobs/elitescript_conditions.md)

Cliquez sur le lien ci-dessus pour apprendre à utiliser les conditions !

# Temps de recharge (Cooldowns)

[Temps de recharge]($language$/elitemobs/elitescript_cooldowns.md)

Cliquez sur le lien ci-dessus pour apprendre à utiliser les temps de recharge !

----

## Ajouter plusieurs EliteScripts

Vous pouvez avoir plusieurs actions sur un événement, mais que faire si vous voulez plusieurs scripts sur le même boss ? C'est aussi simple que de créer une nouvelle entrée de script ! Développons l'exemple précédent et ajoutons-y un autre script :

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
Dans cet exemple, nous avons ajouté un deuxième script appelé Example2. Example2 mettra le feu au joueur qui est blessé par le boss, ceci est dû au fait que le targetType est défini sur [DIRECT_TARGET]($language$/elitemobs/elitescript_targets.md&section=target-types). </br>Le temps de recharge pour ce script est défini à 200 ticks, ce qui signifie que le boss ne pourra mettre le feu aux joueurs que toutes les 10 secondes.

## Créer des pouvoirs autonomes (standalone powers)

Les pouvoirs autonomes sont presque entièrement composés par l'Elite Script. Il n'y a que deux champs qui sont optionnels. N'oubliez pas que pour que les pouvoirs autonomes fonctionnent, ils doivent être placés dans le dossier `~plugins/EliteMobs/powers`. </br>Exemple de pouvoir autonome :

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

Le type de pouvoir définit comment le pouvoir est attribué. Les valeurs sont :

- `UNIQUE` : Le pouvoir ne sera appliqué qu'aux boss personnalisés qui ont le pouvoir défini dans la section powers.
- `DEFENSIVE` / `MISCELLANEOUS` / `OFFENSIVE` : N'IMPORTE QUEL élite pourra obtenir ces pouvoirs, et ils compteront pour un sous-ensemble spécifique de pouvoirs.
- `MAJOR_ZOMBIE`, `MAJOR_SKELETON`, `MAJOR_BLAZE`, `MAJOR_ENDERMAN`, `MAJOR_GHAST` : Seuls les élites du type d'entité adéquat pourront apparaître naturellement avec ces pouvoirs, et ils compteront pour les pouvoirs majeurs.