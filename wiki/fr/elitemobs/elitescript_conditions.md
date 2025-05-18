Voici la traduction en français, en conservant le formatage markdown :

# Conditions des Scripts d'Élite

Les conditions permettent aux scripteurs de faire en sorte que les scripts et/ou les actions **ne s'exécutent pas** en fonction de conditions spécifiques.

<div align="center">

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Conditions:
      isAlive: true
      conditionType: BLOCKING
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
        conditionType: BLOCKING
        Target:
          targetType: ACTION_TARGET
    Cooldowns:
      local: 60
      global: 20
```

Dans cet exemple, le script `Example` ne s'exécutera que si l'élite est toujours en vie, et ne placera un bloc de terre 3 blocs au-dessus de l'emplacement de l'élite que si ce bloc est un bloc d'air. Les actions individuelles peuvent avoir des conditions individuelles.

</div>

</details>

</div>

## Cible (Target)

Les conditions utilisent le système de [Cibles]($language$/elitemobs/elitescript_targets.md) pour déterminer quelle entité ou quel emplacement est soumis aux conditions. Cela signifie que vous pouvez associer des conditions au boss, aux joueurs ou à toute autre chose que vous pouvez cibler.

---

## Type de Condition (Condition Type)

| Clé | Détails | Valeurs |
| --- | :-: | :-: |
| `conditionType` | Définit le type de condition | `BLOCKING` / `FILTERING` |

Il existe deux types de conditions : `BLOCKING` et `FILTERING`. Les conditions `BLOCKING` empêchent les scripts ou les actions de s'exécuter. Les conditions `FILTERING` font que les actions ignorent les cibles qui ne remplissent pas la condition. Cela signifie que si vous voulez cibler uniquement les blocs qui ne sont pas de l'air, vous voudrez une condition `FILTERING`, mais si vous voulez arrêter une action si un joueur est mort, vous voudrez une condition `BLOCKING`.

**Les conditions en dehors des actions sont toujours `BLOCKING`**. Les conditions à l'intérieur des actions peuvent être `BLOCKING` ou `FILTERING`.

_**Note : si la cible est `SELF` (le boss) et que la vérification de la condition est `isAlive`, la vérification est toujours `BLOCKING` !**_ Cela peut être placé à l'intérieur d'une condition `FILTERING` et cette partie spécifique se comportera toujours comme `BLOCKING`.

Les conditions à l'intérieur des actions sont définies par défaut sur `FILTERING`.

---

## Placement des Blocs de Condition (Condition Block Placement)

Vous pouvez placer ou imbriquer des blocs de condition de deux manières :

1. **Sous les actions individuelles** – La condition s'appliquera uniquement à une action spécifique. Si la condition est remplie, l'action s'exécute ; sinon, elle ne s'exécute pas.

2. **Sous l'intégralité du script** – La condition s'applique à toutes les actions du script. Si la condition n'est pas remplie, aucune des actions ne s'exécutera.

Voici des exemples montrant comment imbriquer des blocs de condition pour les actions individuelles et pour l'intégralité du script.

**Sous les actions individuelles :**

<div align="center">

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MESSAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&2Hello World!"
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        locationIsAir: true
        Target:
          targetType: SELF
          offset: "0,3,0"
```

Vérifie si l'emplacement 2 blocs au-dessus de l'endroit où se tient le boss est de l'air et si c'est le cas, exécute l'action SET_WEATHER lorsque le mob est touché. Sinon, bloque l'action SET_WEATHER. Mais le boss exécutera toujours l'action MESSAGE lorsqu'il est touché car aucune condition ne lui est appliquée.

</div>

</details>

</div>

**Sous l'intégralité du script :**

<div align="center">

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MESSAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&2Hello World!"
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
    Conditions:
      conditionType: BLOCKING
      locationIsAir: true
      Target:
        targetType: SELF
        offset: "0,3,0"
```

Si le bloc situé deux espaces au-dessus de l'endroit où se tient le boss est de l'air, alors autorise tous les scripts à s'exécuter lorsque le mob est touché. Sinon, bloque l'exécution de l'intégralité du script, y compris les actions SET_WEATHER et MESSAGE.

</div>

</details>

</div>

---

## Conditions basées sur l'emplacement (Location-based conditions)

### locationIsAir

Définit la condition pour vérifier si l'emplacement de la cible est de l'air.

| Clé | Détails | Valeurs |
| --- | :-: |:-------------------:|
| `locationIsAir` | Définit pour vérifier si l'emplacement est un bloc d'air (ou l'inverse). | [Booléen](#boolean) |

<div align="center">

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        locationIsAir: true
        Target:
          targetType: SELF
          offset: "0,3,0"
```

Vérifie si l'emplacement 2 blocs au-dessus de l'endroit où se tient le boss est de l'air et si c'est le cas, ne bloque pas l'exécution du script météo lorsque le mob est touché. Sinon, bloque l'action.

</div>

</details>

</div>

---

### isOnFloor

Vérifie si l'emplacement est sur le sol. Cela signifie que le bloc à l'emplacement n'est pas solide, mais que le bloc en dessous est solide.

| Clé | Détails | Valeurs |
| --- | :-: | :-: |
| `isOnFloor` | Définit pour vérifier si l'emplacement est un emplacement de sol (ou l'inverse). | [Booléen](#boolean) |

<div align="center">

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        isOnFloor: true
        Target:
          targetType: SELF
```

Vérifie si le boss est sur un bloc solide, si c'est le cas, exécute le script sinon bloque l'exécution du script.

</div>

</details>

</div>

---

### isStandingOnMaterial

Vérifie si l'emplacement sous la cible correspond à un type de matériau.

| Clé | Détails | Valeurs |
| --- |:-----------------------------------------------:|:---------------------:|
| `isStandingOnMaterial` | Définit le type de matériau à vérifier. | [Matériau](#material) |

<div align="center">

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        isStandingOnMaterial: BIRCH_WOOD
        Target:
          targetType: SELF
```

Ne s'exécutera que si le boss se tient sur un bloc de BIRCH_WOOD, sinon le script sera bloqué.

</div>

</details>

</div>

## Conditions basées sur les entités (Entity-based conditions)

### isAlive

Définit la condition pour vérifier si l'entité cible de la condition est en vie.

| Clé | Détails | Valeurs |
| --- | :-: | :-: |
| `isAlive` | Définit pour vérifier si l'entité est en vie (ou morte). | [Booléen](#boolean) |

<div align="center">

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        isAlive: true
        Target:
          targetType: SELF
```

Ne s'exécutera que si le boss est actuellement en vie, sinon le script sera bloqué.

</div>

</details>

</div>

---

### hasTags

Vérifie si l'entité cible possède des tags spécifiques. Les scripteurs peuvent assigner et désassigner n'importe quel tag via des actions et les utiliser comme conditions pour un comportement ultérieur. Les tags sont simplement des chaînes de caractères (mots) que vous pouvez assigner à un boss.

| Clé | Détails | Valeurs |
| --- | :-: |:---------------------------:|
| `hasTags` | Définit pour vérifier si l'entité possède une liste de tags. | [Liste de Chaînes](#string_list) |

<div align="center">

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        hasTags:
        - isCool
        - hasANiceBeard
        Target:
          targetType: SELF
```

Ne s'exécutera que si le boss possède les tags "isCool" et "hasANiceBeard", sinon le script sera bloqué.

</div>

</details>

</div>

---

### doesNotHaveTags

Identique à `hasTags`, mais vérifie si le boss ne possède pas ces valeurs.

| Clé | Détails | Valeurs |
| --- | :-: | :-: |
| `doesNotHaveTags` | Définit pour vérifier si l'entité ne possède pas une liste de tags. | [Liste de Chaînes](#string_list) |

<div align="center">

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        doesNotHaveTags:
        - isStinky
        - isSus
        Target:
          targetType: SELF
```

Ne s'exécutera que si le boss ne possède pas les tags "isStinky" et "isSus", sinon le script sera bloqué.

</div>

</details>

</div>

## Autres conditions (Other conditions)

### randomChance

Donne à la condition une chance aléatoire d'être valide.

| Clé | Détails | Valeurs |
| --- | :-: | :-: |
| `randomChance` | Chance que la condition soit valide. | Nombre entre 0.0 et 1.0 |

<div align="center">

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        randomChance: 0.1
        Target: # Non requis
          targetType: SELF # Non requis
```

Cela donnera au script une chance de 10% de s'exécuter, sinon le script sera bloqué.

</div>

</details>

</div>

Notez que cette condition est spéciale car elle ne nécessite pas de cible.

## Filtrer les CIBLES PROCHES (NEARBY) avec des tags

Pour filtrer les `NEARBY_MOBS` ou `NEARBY_PLAYERS` en fonction de tags spécifiques, utilisez `ACTION_TARGET` comme cible de la condition (si la condition est appliquée à une action et non au script lui-même). Cela garantit que le script filtre précisément uniquement les mobs/joueurs avec les tags spécifiés.

<div align="center">

<details>

<summary><b>Exemple</b></summary>

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
        conditionType: FILTERING
        hasTags:
          - TurnOff
        Target:
          targetType: ACTION_TARGET
```

Ce script recherchera tous les mobs proches ayant le tag `TurnOff` et s'ils ont le tag, il désactivera leur IA.

</div>

</details>

</div>