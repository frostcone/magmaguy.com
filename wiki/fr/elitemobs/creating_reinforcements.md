```
# Créer des renforts personnalisés

Si vous souhaitez invoquer des élites pendant le combat pour renforcer un boss, ce guide couvre cela en détail.

## Étapes pour créer un boss personnalisé :

1. Créez votre boss personnalisé principal qui invoquera votre boss personnalisé.
2. Créez un boss personnalisé pour les renforts. Gardez à l'esprit que les boss personnalisés peuvent être plus forts que les monstres vanilla, mais ils peuvent aussi être plus faibles.
3. Ajoutez la ligne de renfort correcte au fichier de configuration.

## Créer la ligne de renfort

Supposons que vous ayez un boss personnalisé avec ce format :

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eBinder of Worlds
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
```

Et que vous souhaitez y ajouter des renforts. Voici à quoi pourrait ressembler un de ces renforts :

```yaml
- summonType:ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

Et pour le rendre valide, ajoutez-le à la liste des pouvoirs :

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eBinder of Worlds
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

Le renfort est maintenant ajouté à l'entité boss. Cependant, comme vous pouvez le voir, il existe plusieurs options ici que vous pouvez personnaliser. Couvrons-les.

## Toutes les options de renfort personnalisées

*Astuce : Vous pouvez également utiliser EliteScript pour invoquer des renforts, plus d'informations à ce sujet [ici]($language$/elitemobs/elitescript_actions.md&section=summon_reinforcement).*

<div align="center">

### summonType

Il s'agit d'un champ obligatoire. Il définit quand le renfort doit apparaître.

| Clé    |   Valeurs    | Par défaut  |
|--------|:-----------:|:--------:|
| `summonType` | Spécial [1] | `ON_HIT` |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
summonType: ON_HIT
```

</div>

</details>

#### Spécial [1]

| Clé | Description                                                                                       |
|-----|---------------------------------------------------------------------------------------------------|
|  `ONCE`   | Apparaît une fois, la première fois que le boss est touché. (peut s'appuyer sur un % de chance) |
| `ON_HIT`  | Apparaît chaque fois que le boss est touché (peut s'appuyer sur un % de chance)             |
| `ON_COMBAT_ENTER`    | Apparaît lorsque le boss entre en combat (1)                                                                                                  |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL`    |  Spécial : cela concerne spécifiquement le placement de cristaux de fin pour les combats de dragon lorsque le boss entre en combat (1)                                                                                                 |
| `GLOBAL`    |  Apparaît pour tous les joueurs du même monde que le boss. Les renforts apparaissent près des joueurs, quelle que soit leur distance du boss. Cela nécessite que le champ `customSpawn` soit défini pour fonctionner !                                                                                                 |

_(1) Les boss entrent en combat soit lorsqu'ils sont touchés par des joueurs, soit lorsqu'ils détectent un joueur à portée._

***

### filename

Il s'agit d'un champ obligatoire car il définit quel renfort doit apparaître. La seule exception à la nécessité de ce champ est lorsque vous utilisez le paramètre `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`, car les cristaux de fin ne sont pas des élites.

| Clé    |        Valeurs         | Par défaut |
|--------|:---------------------:|:-------:|
| `filename` | [Nom de fichier](#filename) |  none   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
filename: test_boss.yml
```

</div>

</details>

</div>

***

**Viabilité minimale**

`summonType: SUMMON_TYPE` et `filename: filename.yml` sont suffisants en eux-mêmes pour créer un renfort personnalisé. L'exemple suivant le montre.

<div align="center">

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eBinder of Worlds
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parko