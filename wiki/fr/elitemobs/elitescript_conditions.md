# Conditions d'Elite Script

Les conditions permettent aux scripteurs de faire en sorte que les scripts et/ou les actions ne s'exécutent **pas** en
fonction de conditions spécifiques.

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

Dans cet exemple, le script `Example` ne s'exécutera que si l'élite est toujours en vie, et ne placera un bloc de terre
à 3 blocs au-dessus de l'emplacement de l'élite que si ce bloc est un bloc d'air. Les actions individuelles peuvent
avoir des conditions individuelles.

</div>

</details>

</div>

## Cible

Les conditions utilisent le système [Cibles]($language$/elitemobs/elitescript_targets.md) pour cibler quelle entité ou
quel emplacement est soumis aux conditions. Cela signifie que vous pouvez associer des conditions au boss, aux joueurs
ou à tout ce que vous pouvez cibler.

---

## Type de condition

| Clé | Détails | Valeurs |
| --- | :-: | :-: |
| `conditionType` | Définit le type de condition | `BLOCKING` / `FILTERING` |

Il existe deux types de conditions : `BLOCKING` et `FILTERING`. Les conditions `BLOCKING` empêchent les scripts ou les
actions de s'exécuter. Les conditions `FILTERING` font en sorte que les actions sautent les cibles qui ne remplissent
pas la condition. Cela signifie que si vous voulez uniquement cibler les blocs qui ne sont pas de l'air, vous aurez
besoin d'une condition `FILTERING`, mais si vous voulez arrêter une action si un joueur est mort, vous aurez besoin
d'une condition `BLOCKING`.

**Les conditions en dehors des actions sont toujours `BLOCKING`**. Les conditions à l'intérieur des actions peuvent être `BLOCKING` ou `FILTERING`.

_**Note : si la cible est `SELF` (le boss) et que la vérification de condition est `isAlive`, la vérification est
toujours `BLOCKING` !**_ Cela peut être mis à l'intérieur d'une condition `FILTERING` et cela fera quand même en sorte
que cette partie spécifique se comporte comme `BLOCKING`.

Les conditions à l'intérieur des actions sont définies par défaut sur `FILTERING`.

---

## Conditions basées sur l'emplacement

### locationIsAir

Définit la condition pour savoir si l'emplacement de la cible est de l'air.

| Clé             |                                        Détails                                        |       Valeurs       |
|-----------------|:-------------------------------------------------------------------------------------:|:-------------------:|
| `locationIsAir` | Définit la vérification pour savoir si l'emplacement est un bloc d'air (ou l'opposé). | [Booléen](#boolean) |

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

Vérifie si l'emplacement 2 blocs au-dessus de l'endroit où le boss se tient est de l'air.

</div>

</details>

</div>

---

### isOnFloor

Vérifie si l'emplacement est sur le sol. Cela signifie que le bloc à l'emplacement n'est pas solide, mais que le bloc en
dessous est solide.

| Clé         |                                            Détails                                            |       Valeurs       |
|-------------|:---------------------------------------------------------------------------------------------:|:-------------------:|
| `isOnFloor` | Définit la vérification pour savoir si l'emplacement est un emplacement de sol (ou l'opposé). | [Booléen](#boolean) |

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

Vérifie si l'emplacement sous la cible correspond à un type de matériau.

| Clé                    |                     Détails                      |        Valeurs        |
|------------------------|:------------------------------------------------:|:---------------------:|
| `isStandingOnMaterial` | Définit quel type de matériau doit être vérifié. | [Matériau](#material) |

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

Ne s'exécutera que si le boss se tient sur du BIRCH_WOOD.

</div>

</details>

</div>

## Conditions basées sur l'entité

### isAlive

Définit la condition pour savoir si l'entité cible de la condition est en vie.

| Clé       |                                 Détails                                 |       Valeurs       |
|-----------|:-----------------------------------------------------------------------:|:-------------------:|
| `isAlive` | Définit la vérification pour savoir si l'entité est vivante (ou morte). | [Booléen](#boolean) |

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

Vérifie si l'entité cible possède des tags spécifiques. Les scripteurs peuvent assigner et désassigner n'importe quel
tag via des actions et les utiliser comme conditions pour un comportement ultérieur. Les tags ne sont que des chaînes de
caractères (mots) que vous pouvez assigner à un boss.

| Clé       |                                  Détails                                   |                    Valeurs                     |
|-----------|:--------------------------------------------------------------------------:|:----------------------------------------------:|
| `hasTags` | Définit la vérification pour savoir si l'entité possède une liste de tags. | [Liste de chaînes de caractères](#string_list) |

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

Ne s'exécutera que si le boss a les tags "isCool" et "hasANiceBeard".

</div>

</details>

</div>


---

### doesNotHaveTags

Identique à `hasTags`, mais vérifie si le boss ne possède pas ces valeurs.

| Clé               |                                      Détails                                      |                    Valeurs                     |
|-------------------|:---------------------------------------------------------------------------------:|:----------------------------------------------:|
| `doesNotHaveTags` | Définit la vérification pour savoir si l'entité ne possède pas une liste de tags. | [Liste de chaînes de caractères](#string_list) |

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

Ne s'exécutera que si le boss n'a pas les tags "isStinky" et "isSus".

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

## Filtrer NEARBY avec des tags

Pour filtrer `NEARBY_MOBS` ou `NEARBY_PLAYERS` en fonction de tags spécifiques, utilisez `ACTION_TARGET` comme cible de
la condition (si la condition est appliquée à une action et non au script lui-même). Cela garantit que le script filtre
avec précision uniquement les mobs/joueurs avec les tags spécifiés.

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
        hasTags:
          - TurnOff
        Target:
          targetType: ACTION_TARGET
```

Ce script recherchera tous les mobs proches ayant le tag `TurnOff` et s'ils ont le tag, il désactivera leur IA.

</div>

</details>

</div>
