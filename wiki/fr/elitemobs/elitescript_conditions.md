# Actions du script Elite

Les conditions permettent aux scénaristes de faire en sorte que les scripts et/ou les actions **ne** s'exécutent pas en fonction de conditions spécifiques.

<div align="center">

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Events:
    - EliteMobDamagedByPlayerEvent
    Conditions:
      isAlive: true
      Target:
        targetType: SELF
    Actions:
    - action: PLACE_BLOCK
      Target:
        targetType: DIRECT_TARGET
      duration: 20
      material: DIRT
      offset: 0,3,0
      Conditions:
        locationIsAir: true
        Target:
          targetType: ACTION_TARGET
    Cooldowns:
      local: 60
      global: 20
```

Dans cet exemple, le script `Exemple` ne s'exécutera que si l'élite est toujours en vie et ne placera un bloc de terre que 3 blocs au-dessus de l'emplacement de l'élite si ce bloc est un bloc d'air. Les actions individuelles peuvent avoir des conditions individuelles.

</div>

</details>

</div>

## Cible

Les conditions utilisent le système [Cibles]($language$/elitemobs/elitescript_targets.md) pour cibler quelle entité ou emplacement est soumise aux conditions. Cela signifie que vous pouvez associer des conditions au boss ou aux joueurs ou à toute autre chose que vous pouvez cibler.

---

## Type de condition

| Clé | Détails | Valeurs |
| --- | :-: | :-: |
| `conditionType` | Définit le type de condition | `BLOCKING` / `FILTERING` |

Il existe deux types de conditions : `BLOCKING` et `FILTERING`. Les conditions `BLOCKING` font que les scripts ou les actions cessent de s'exécuter. Les conditions `FILTERING` font que les actions ignorent les cibles qui ne répondent pas à la condition. Cela signifie que si vous souhaitez uniquement cibler des blocs qui ne sont pas de l'air, vous voudrez une condition `FILTERING`, mais si vous souhaitez arrêter une action si un joueur est mort, vous voudrez une condition `BLOCKING`.

**Les conditions en dehors des actions sont toujours `BLOCKING`**. Les conditions à l'intérieur des actions peuvent être `BLOCKING` ou `FILTERING`.

_**Remarque :** si la cible est `SELF` (le boss) et que la vérification de la condition est `isAlive`, la vérification est toujours `BLOCKING` !_ Cela peut être placé dans une condition `FILTERING` et fera toujours en sorte que cette partie spécifique se comporte comme `BLOCKING`.

Les conditions à l'intérieur des actions sont définies sur `FILTERING` par défaut.

---

## Conditions basées sur l'emplacement

### locationIsAir

Définit la condition pour savoir si l'emplacement de la cible est de l'air.

| Clé | Détails |        Valeurs         |
| --- | :-: |:-------------------:|
| `locationIsAir` | Définit la vérification pour savoir si l'emplacement est un bloc d'air (ou l'inverse). | [Booléen](#boolean) |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Conditions:
      locationIsAir: true
      Target:
        targetType: SELF
        offset: "0,3,0"
```

Vérifie si l'emplacement 2 blocs au-dessus de l'endroit où se trouve le boss est de l'air.

</div>

</details>

</div>

---

### isOnFloor

Vérifie si l'emplacement est au sol. Cela signifie que le bloc à l'emplacement n'est pas solide, mais que le bloc en dessous l'est.

| Clé | Détails | Valeurs |
| --- | :-: | :-: |
| `isOnFloor` | Définit la vérification pour savoir si l'emplacement est un emplacement au sol (ou l'inverse). | [Booléen](#boolean) |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Conditions:
      isOnFloor: true
      Target:
        targetType: SELF
```

</div>

</details>

</div>

---

### isStandingOnMaterial

Vérifie si l'emplacement sous la cible est un type de matériau correspondant.

| Clé |                     Détails                     |        Valeurs         |
| --- |:-----------------------------------------------:|:---------------------:|
| `isStandingOnMaterial` | Définit le type de matériau qui doit être vérifié. | [Material](#material) |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Conditions:
      isStandingOnMaterial: BIRCH_WOOD
      Target:
        targetType: SELF
```

S'exécutera seulement si le boss se tient sur BIRCH_WOOD.

</div>

</details>

</div>

## Conditions basées sur l'entité

### isAlive

Définit la condition pour savoir si l'entité cible de la condition est en vie.

| Clé | Détails | Valeurs |
| --- | :-: | :-: |
| `isAlive` | Définit la vérification pour savoir si l'entité est en vie (ou morte). | [Booléen](#booleano) |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Conditions:
      isAlive: false
      Target:
        targetType: SELF
```

Ne s'exécutera que si le boss est mort.

</div>

</details>

</div>

---

### hasTags

Vérifie si l'entité cible possède des balises spécifiques. Les scénaristes peuvent attribuer et annuler l'attribution de n'importe quelle balise par le biais d'actions et les utiliser comme conditions pour un comportement ultérieur. Les balises ne sont que des chaînes de caractères (mots) que vous pouvez attribuer à un boss.

| Clé | Détails |           Valeurs            |
| --- | :-: |:---------------------------:|
| `hasTags` | Définit la vérification pour savoir si l'entité a une liste de balises. | [Liste de chaînes de caractères](#string_list) |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Conditions:
      hasTags:
      - isCool
      - hasANiceBeard
      Target:
        targetType: SELF
```

Ne s'exécutera que si le boss a les balises "isCool" et "hasANiceBeard".

</div>

</details>

</div>

---

### doesNotHaveTags

Identique à `hasTags`, mais vérifie si le boss n'a pas ces valeurs.

| Clé | Détails | Valeurs |
| --- | :-: | :-: |
| `doesNotHaveTags` | Définit la vérification pour savoir si l'entité n'a pas une liste de balises. | [Liste de chaînes de caractères](#string_list) |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Conditions:
      doesNotHaveTags:
      - isStinky
      - isSus
      Target:
        targetType: SELF
```

Ne s'exécutera que si le boss n'a pas les balises "isStinky" et "isSus".

</div>

</details>

</div>

## Autres conditions

### randomChance

Donne à la condition une chance aléatoire d'être valide.

| Clé | Détails | Valeurs |
| --- | :-: | :-: |
| `randomChance` | Chance que la condition soit valide. | Nombre entre 0,0 et 1,0 |

Notez que cette condition est spéciale car elle ne nécessite pas de cible.

## Filtrer NEARBY avec des balises

Pour filtrer `NEARBY_MOBS` ou `NEARBY_PLAYERS` en fonction de balises spécifiques, utilisez `ACTION_TARGET` comme cible de la condition (si la condition est appliquée à une action et non au script lui-même). Cela garantit que le script filtre avec précision uniquement les mobs/joueurs avec les balises spécifiées.

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Actions:
    - action: SET_MOB_AI
      Target:
        targetType: NEARBY_MOBS
        range: 40
      bValue: false
      Conditions:
        hasTags:
          - TurnOff
        Target:
          targetType: ACTION_TARGET
```

Ce script recherchera tous les mobs proches avec la balise `TurnOff` et s'ils ont la balise, il désactivera leur IA.

</div>

</details>

</div>
