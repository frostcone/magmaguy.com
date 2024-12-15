# Qu'est-ce que le système de prestige ?

Le système de prestige récompense les joueurs pour avoir réinitialisé leur rang, leurs objets et leur monnaie EliteMobs (en bref, toute leur progression) pour deux avantages : de **grandes primes fixes** et la **possibilité de se montrer**.

Il est possible, et encouragé, de mettre les rangs des joueurs comme préfixes sur le chat grâce à l'utilisation de l'API Placeholder en combinaison avec n'importe quel plugin de chat qui est compatible avec l'API Placeholder.

L'un des objectifs de ceci est de permettre aux joueurs de se distinguer clairement comme ayant non seulement battu toute la progression EliteMobs, mais l'avoir potentiellement fait plusieurs fois, établissant leur statut de joueurs d'élite très cool.

## Comment les joueurs peuvent-ils débloquer le système de prestige ?

Une fois que les joueurs ont atteint le rang de guilde maximal, ils auront la possibilité de réinitialiser leur progression et leur prestige. Cela se fait via le menu de rang de guilde ou en parlant au PNJ préposé à la guilde dans la guilde d'aventuriers.

<div align="center">

![prestige_guild_rank.jpg](../../../img/wiki/prestige_guild_rank.jpg)

</div>

## Quel est le coût du système de prestige ?

**Tout.** Du moins, tout ce qui est lié à EliteMobs. Le rang de guilde actuel du joueur sera réinitialisé à 1, la monnaie sera effacée et **tous les objets perdront leur liaison avec le joueur**, ce qui signifie que lorsque le joueur essaiera de l'équiper, il tombera et il ne pourra pas le récupérer.

Il est assez amusant de voir tout cela se produire en même temps lorsqu'un joueur entièrement équipé active le prestige alors qu'il a tout son équipement équipé, ce qui donne l'impression qu'il renaît de nouveau.

## Quelles sont les grandes primes fixes du système de prestige ?

L'activation du système de prestige débloquera les éléments suivants en quantités différentes, en fonction du niveau de prestige et du niveau de rang de guilde :

- Santé maximale (à partir du prestige 1)
- Chance de critique (à partir du prestige 2)
- Chance d'esquive (à partir du prestige 3)

De plus, les joueurs gagneront plus d'argent par élimination pour chaque niveau de prestige qu'ils augmenteront, mais les coûts de rang augmenteront également proportionnellement. <br>Ceci est fait pour récompenser les joueurs pour la mise à niveau, mais aussi pour diminuer l'incitation qu'un joueur pourrait avoir à essayer de farmer à un niveau vraiment élevé, puis de trouver un moyen d'utiliser cet argent pour accélérer les rangs de la prochaine exécution de prestige.

Un joueur entièrement amélioré peut avoir 100 de santé maximale (par rapport aux 20 vanilla), une chance de base de 10 % d'esquive, une chance de base de 10 % de critique et un multiplicateur de chute de monnaie de 15x. Cela suppose une configuration par défaut. ***Il est également important de noter que ceci est pour le rang maximal du Prestige 10 rang 20, ce qui prend des années à des joueurs dévoués pour l'obtenir.*** La plupart des gens arrêteront de jouer à Minecraft avant d'avoir farmé suffisamment pour atteindre ce niveau.

## Aperçu des primes du système de prestige
Voici une liste des primes et de leur déblocage, telles que définies par **défaut** dans la configuration du Gremio de Aventureros :

<div align="center">

| Prestige |   Prime    | Valeur |
|:--------:|:----------:|:-----:|
| Prestige 1  |  Santé 1   |   2   |
| Prestige 2  | Critique 1 |   3   | En réalité 3
| Prestige 3  |  Esquive 1   |   3   | En réalité 4
| Prestige 4  |  Santé 2  |  2.5  |
| Prestige 5  | Critique 2 |   6   |
| Prestige 6  |  Esquive 2   |   6   |
| Prestige 7  |  Santé 3  |   3   |
| Prestige 8  | Critique 3 |  10   |
| Prestige 9  |  Esquive 3   |  10   |
| Prestige 10 |  Santé 4  |   4   |

</div>

Ces valeurs s'écrasent mutuellement, ce qui indique que, par exemple, au prestige 1, les joueurs recevraient une prime de 2 points de santé pour chaque rang. Cependant, une fois atteint le prestige 4, cette prime passe à 2,5 par rang.
<br>Les valeurs de bonus d'esquive et de critique définissent la valeur du bonus au rang maximum pour ce niveau de prestige. Ce qui signifie que si un joueur atteint le maximum de tous les rangs au niveau de prestige 6, il aurait un bonus d'esquive et de critique de 6 %.
