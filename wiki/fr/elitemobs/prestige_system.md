# Qu'est-ce que le système de Prestige ?

Le système de Prestige récompense les joueurs pour avoir réinitialisé leur rang, leurs objets et leur monnaie EliteMobs (en bref, toute leur progression) pour deux avantages : **de gros bonus fixes** et **la possibilité de se montrer**.

Il est possible, et encouragé, de mettre les rangs des joueurs en préfixes sur le chat en utilisant Placeholder API en combinaison avec n'importe quel plugin de chat compatible avec Placeholder API.

L'un des objectifs de ce système est de permettre aux joueurs de se distinguer clairement non seulement en ayant vaincu toute la progression d'EliteMobs, mais aussi en l'ayant peut-être fait plusieurs fois, établissant ainsi leur statut de joueur d'élite très cool.

## Comment les joueurs peuvent-ils déverrouiller le système de Prestige ?

Une fois que les joueurs ont atteint le rang de guilde maximum, ils auront la possibilité de réinitialiser leur progression et leur Prestige. Cela se fait via le menu de rang de guilde ou en parlant au PNJ de la guilde dans la guilde des aventuriers.

<div align="center">

![prestige_guild_rank.jpg](../../../img/wiki/prestige_guild_rank.jpg)

</div>

## Quel est le coût du système de Prestige ?

**Tout.** Du moins, tout ce qui concerne EliteMobs. Le rang de guilde actuel du joueur sera remis à 1, la monnaie sera effacée et **tous les objets perdront leur lien avec le joueur**, ce qui signifie que lorsque le joueur essaiera de l'équiper, il tombera et il ne pourra pas le ramasser.

C'est assez drôle à voir arriver tout d'un coup lorsqu'un joueur entièrement équipé active le prestige tout en ayant tout l'équipement équipé, ce qui donne l'impression qu'il renaît.

## Quels sont les gros bonus fixes du système de Prestige ?

L'activation du système de prestige déverrouillera les éléments suivants en quantités différentes, en fonction du niveau de prestige et du niveau de rang de guilde :

- Santé maximum (à partir du prestige 1)
- Chance de coup critique (à partir du prestige 2)
- Chance d'esquive (à partir du prestige 3)

De plus, les joueurs gagneront plus d'argent par tué pour chaque niveau de prestige qu'ils augmentent, mais les coûts de rang augmenteront également proportionnellement. <br> Cela vise à récompenser les joueurs pour leur mise à niveau, mais aussi à réduire l'incitation qu'un joueur pourrait avoir à essayer de farmer à un niveau très élevé, puis à trouver un moyen d'utiliser cet argent pour accélérer les rangs de la prochaine série de prestige.

Un joueur entièrement mis à niveau peut avoir 100 points de santé maximum (contre 20 points de santé vanilla), une chance de base de 10 % d'esquiver, une chance de base de 10 % de coup critique et un multiplicateur de chute de monnaie de 15x. Cela suppose une configuration par défaut. ***Il est également important de noter que cela concerne le rang maximum de prestige 10 rang 20, ce qui prend des années aux joueurs dévoués pour l'obtenir.*** La plupart des gens arrêteront de jouer à Minecraft avant de grinder suffisamment pour atteindre ce niveau.

## Aperçu des bonus du système de Prestige
Voici une liste des bonus et de leur date de déverrouillage par **défaut** dans la configuration de la guilde des aventuriers :

<div align="center">

| Prestige |   Bonus    | Valeur |
|:--------:|:----------:|:-----:|
| Prestige 1  |  Santé 1  |   2   |
| Prestige 2  | Critical 1 |   3   | En réalité 3
| Prestige 3  |  Esquive 1   |   3   | En réalité 4
| Prestige 4  |  Santé 2  |  2.5  |
| Prestige 5  | Critical 2 |   6   |
| Prestige 6  |  Esquive 2   |   6   |
| Prestige 7  |  Santé 3  |   3   |
| Prestige 8  | Critical 3 |  10   |
| Prestige 9  |  Esquive 3   |  10   |
| Prestige 10 |  Santé 4  |   4   |

</div>

Ces valeurs se remplacent les unes les autres, ce qui indique que, par exemple, au niveau de prestige 1, les joueurs recevraient un bonus de 2 points de santé pour chaque rang. Cependant, en atteignant le niveau de prestige 4, ce bonus passe à 2,5 points de santé par rang.
<br>Les valeurs de bonus d'esquive et de coup critique définissent ce que sera le bonus au rang maximum pour ce niveau de prestige. Ce qui signifie que si un joueur atteint le rang maximum de tous les rangs au niveau de prestige 6, il aura un bonus d'esquive et de coup critique de 6 %.

```
