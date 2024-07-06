# Conditions de script Elite

Les conditions permettent aux scripteurs de faire en sorte que les scripts et/ou les actions **ne soient pas** exécutés en fonction de conditions spécifiques.

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

Dans cet exemple, le script `Example` ne s'exécutera que si l'élite est toujours en vie, et ne placera un bloc de terre 3 blocs au-dessus de l'emplacement de l'élite que si ce bloc est un bloc d'air. Les actions individuelles peuvent avoir des conditions individuelles.

</div>

</details>

</div>

## Cible

Les conditions utilisent le système de [Cibles]($language$/elitemobs/elitescript_targets.md) pour cibler quelle entité ou quel emplacement est soumis aux conditions. Cela signifie que vous pouvez associer des conditions au boss, aux joueurs ou à toute autre chose que vous pouvez cibler.

---

## Type de condition

| Clé | Détails | Valeurs |
| --- | :-: | :-: |
| `conditionType` | Définit le type de condition | `BLOCKING` / `FILTERING` |

Il existe deux types de conditions : `BLOCKING` et `FILTERING`. Les conditions `BLOCKING` empêchent l'exécution des scripts ou des actions. Les conditions `FILTERING` font que les actions ignorent les cibles qui ne remplissent pas la condition. Cela signifie que si vous voulez cibler uniquement les blocs qui ne sont pas de l'air, vous voudrez une condition `FILTERING`, mais si vous voulez arrêter une action si un joueur est mort, vous voudrez une condition `BLOCKING`.

**Les conditions en dehors des actions sont toujours de type `BLOCKING`**. Les conditions à l'intérieur des actions peuvent être de type `BLOCKING` ou `FILTERING`.

_**Remarque : si la cible est `SELF` (le boss) et que la vérification de la condition est `isAlive`, la vérification est toujours de type `BLOCKING` !**_ Elle peut être placée à l'intérieur d'une condition `FILTERING` et cette partie spécifique se comportera toujours comme `BLOCKING`.

Les conditions à l'intérieur des actions sont définies sur `FILTERING` par défaut.

---

## Conditions basées sur l'emplacement

### locationIsAir

Définit la condition pour savoir si l'emplacement de la cible est de l'air.

| Clé | Détails |       Valeurs        |
| --- | :-: |:-------------------:|
| `locationIsAir` | Définit si l'emplacement est un bloc d'air (ou l'inverse). | [Booléen](#boolean) |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Conditions:
      locationIsAir: true
      Target:
        targetType: SELF
        offset: "0,3,0"
```

Vérifie si l'emplacement 2 blocs au-dessus de l'endroit où se trouve le boss est de l'air.

</div>

</details>

</div>

---

### isOnFloor

Vérifie si l'emplacement se trouve sur le sol. Cela signifie que le bloc à l'emplacement n'est pas solide, mais que le bloc en dessous est solide.

| Clé | Détails | Valeurs |
| --- | :-: | :-: |
| `isOnFloor` | Définit s'il faut vérifier si l'emplacement est un emplacement au sol (ou l'inverse). | [Booléen](#boolean) |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
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
| `isStandingOnMaterial` | Définit le type de matériau à vérifier. | [Matériau](#material) |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Conditions:
      isStandingOnMaterial: BIRCH_WOOD
      Target:
        targetType: SELF
```

Ne s'exécutera que si le boss se trouve sur du BIRCH_WOOD.

</div>

</details>

</div>

## Conditions basées sur les entités

### isAlive

Définit la condition pour savoir si l'entité cible de la condition est en vie.

| Clé | Détails | Valeurs |
| --- | :-: | :-: |
| `isAlive` | Définit s'il faut vérifier si l'entité est en vie (ou morte). | [Booléen](#boolean) |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
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

Vérifie si l'entité cible possède des balises spécifiques. Les scripteurs peuvent attribuer et désattribuer n'importe quelle balise par le biais d'actions et les utiliser comme conditions pour un comportement ultérieur. Les balises sont simplement des chaînes de caractères (des mots) que vous pouvez attribuer à un boss.

| Clé | Détails |           Valeurs            |
| --- | :-: |:---------------------------:|
| `hasTags` | Définit s'il faut vérifier si l'entité possède une liste de balises. | [Liste de chaînes de caractères](#string_list) |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Conditions:
      hasTags:
      - isCool
      - hasANiceBeard
      Target:
        targetType: SELF
```

Ne s'exécutera que si le boss possède les balises "isCool" et "hasANiceBeard".

</div>

</details>

</div>


---

### doesNotHaveTags

Identique à `hasTags`, mais vérifie si le boss ne possède pas ces valeurs.

| Clé | Détails | Valeurs |
| --- | :-: | :-: |
| `doesNotHaveTags` | Définit s'il faut vérifier si l'entité ne possède pas une liste de balises. | [Liste de chaînes de caractères](#string_list) |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Conditions:
      doesNotHaveTags:
      - isStinky
      - isSus
      Target:
        targetType: SELF
```

Ne s'exécutera que si le boss ne possède pas les balises "isStinky" et "isSus".

</div>

</details>

</div>

## Autres conditions

### randomChance

Donne à la condition une chance aléatoire d'être valide.

| Clé | Détails | Valeurs |
| --- | :-: | :-: |
| `randomChance` | Chance que la condition soit valide. | Nombre entre 0.0 et 1.0 |

Notez que cette condition est spéciale car elle ne nécessite pas de cible.
