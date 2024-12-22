Voici la liste complète des espaces réservés PAPI pour EliteMobs.

| Espace réservé                                     |                                                                                                                                                                                                                                      Description                                                                                                                                                                                                                                       |
|----------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `%elitemobs_player_combat_tier%`                   |                                                                                                                                                                          Affiche le niveau de combat d'un joueur, c'est-à-dire le niveau utilisé pour faire apparaître des monstres élites autour du joueur.                                                                                                                                                                           |
| `%elitemobs_player_active_guild_rank_numerical%`   |                                                                                                                                            Affiche le rang de guilde actif du joueur sous forme numérique. Attention, le rang de guilde actif peut être inférieur au rang de guilde maximum réel si le joueur le réduit intentionnellement.                                                                                                                                            |
| `%elitemobs_player_maximum_guild_rank_numerical%`  |                                                                                                                                                        Affiche le rang de guilde maximum du joueur sous forme numérique. Attention, il peut être supérieur au rang de guilde actif si le joueur l'a réduit intentionnellement.                                                                                                                                                         |
| `%elitemobs_player_active_guild_rank_name%`        |                                                                                                                                                               Affiche le nom du rang de guilde actif. C'est l'option que vous devriez probablement utiliser si vous voulez afficher le rang de guilde actif d'un joueur.                                                                                                                                                               |
| `%elitemobs_player_maximum_guild_rank_name%`       |                                                                                                                                                             Affiche le nom du rang de guilde maximum. C'est l'option que vous devriez probablement utiliser si vous voulez afficher le rang de guilde maximum d'un joueur.                                                                                                                                                             |
| `%elitemobs_player_prestige_guild_rank_numerical%` |                                                                                                                                                                                                               Affiche le niveau de prestige d'un joueur, numériquement.                                                                                                                                                                                                                |
| `%elitemobs_player_money%`                         |                                                                                                                                                                                                      Affiche le montant de la devise EliteMobs qu'un joueur possède actuellement.                                                                                                                                                                                                      |
| `%elitemobs_player_top_tier%`                      |                                                                                                                                                                                                       Affiche le niveau de menace le plus élevé parmi tous les joueurs en ligne.                                                                                                                                                                                                       |
| `%elitemobs_player_top_guild_rank%`                |                                                                                                                                                                                                        Affiche le nom du joueur en ligne ayant le rang de guilde le plus élevé.                                                                                                                                                                                                        |
| `%elitemobs_player_shortened_guild_rank%`          | Affiche la version abrégée des rangs de prestige et de guilde actifs, spécialement pour le chat ou d'autres emplacements où les noms de rang ne peuvent pas prendre trop de place (tableaux de score). Par défaut, utilise une fleur de lys et un unicode étoile pour représenter respectivement le niveau de prestige et le rang de guilde actif, et utilise des chiffres romains pour les nombres. Ceci est 100% configurable dans le fichier de configuration AdventurersGuild.yml. |
| `%elitemobs_player_top_guild_rank%`                |                                                                                                                                                                                                        Affiche le nom du joueur en ligne ayant le rang de guilde le plus élevé.                                                                                                                                                                                                        |
| `%elitemobs_player_shortened_guild_rank%`          | Affiche la version abrégée des rangs de prestige et de guilde actifs, spécialement pour le chat ou d'autres emplacements où les noms de rang ne peuvent pas prendre trop de place (tableaux de score). Par défaut, utilise une fleur de lys et un unicode étoile pour représenter respectivement le niveau de prestige et le rang de guilde actif, et utilise des chiffres romains pour les nombres. Ceci est 100% configurable dans le fichier de configuration AdventurersGuild.yml. |
| `%elitemobs_player_kills%`                         |                                                                                                                                                                                                                 Affiche le nombre d'éliminations d'élites d'un joueur.                                                                                                                                                                                                                 |
| `%elitemobs_player_deaths%`                        |                                                                                                                                                                                                          Affiche le nombre de fois où un joueur est mort à cause d'une élite.                                                                                                                                                                                                          |

# Comment utiliser

1) ***EliteMobs ne nécessite pas l'utilisation du eCloud PAPI.*** Il fonctionne simplement tant qu'EliteMobs est sur
   votre serveur. Vous pouvez ignorer cette étape.
2) Si vous voulez utiliser des espaces réservés, vous devez avoir ***PAPI*** installé sur votre serveur, ainsi qu'un
   ***plugin pour utiliser ces espaces réservés***. Cela signifie que si vous voulez l'utiliser avec le chat, vous aurez
   besoin d'un plugin de chat. Il en va de même si vous voulez faire des titres, des tableaux de score, des listes de
   tabulation ou quoi que ce soit d'autre.

-----

## Voici une courte liste de plugins qui utilisent PAPI :

### Chat :
- [Venturechat](https://www.spigotmc.org/resources/venturechat.771/)
- [ChatControl](https://www.spigotmc.org/resources/chatcontrol%E2%84%A2-the-ultimate-chat-plugin-500-000-downloads-1-2-5-1-16-4.271/)

### Autre :
- [FeatherBoard](https://www.spigotmc.org/resources/featherboard.2691/)

***La liste ci-dessus n'est qu'un petit nombre des exemples les plus populaires. Il y en a d'autres. Veuillez ne pas
demander d'autres recommandations ou de l'aide pour ces plugins. Je ne les ai pas créés et je ne fournirai pas d'aide
pour eux.***

-----

3) Ajoutez l'espace réservé (la liste est ci-dessus) dans le plugin que vous avez choisi.

***Remarque : la plupart des plugins utilisent le format `{elitemobs_XXXXXXX_YYYYYY}` au lieu de `%elitemobs_XXXXXXX_YYYYYY%`***

Si cela ne fonctionne pas pour vous, essayez de remplacer l'utilisation de `%%` par `{}`. Si cela ne fonctionne toujours
pas après cela, essayez la commande `/papi parse VOTRE_NOM_D'UTILISATEUR_ICI %elitemobs_VOTRE_ESPACE_RESERVÉ_ICI%` en
jeu (remplacez ce qui est en majuscules).

Si cela vous donne un résultat valide, alors vous avez mal configuré quelque chose et vous devez demander de l'aide au
plugin sur lequel vous utilisez les espaces réservés.
