Voici la liste complète des espaces réservés PAPI pour EliteMobs.

| Espace réservé | Description |
|-------------|:-----------:|
| `%elitemobs_player_combat_tier%`         |     Affiche le niveau de combat d'un joueur, c'est-à-dire le niveau utilisé pour faire apparaître des monstres d'élite autour du joueur.     |
| `%elitemobs_player_active_guild_rank_numerical%`         |     Affiche le rang de guilde actif du joueur sous forme numérique. Attention, le rang de guilde actif peut être inférieur au rang de guilde maximum réel si le joueur le réduit volontairement.     |
| `%elitemobs_player_maximum_guild_rank_numerical%`         |     Affiche le rang de guilde maximum du joueur sous forme numérique. Attention, cela peut être supérieur au rang de guilde qu'il a activé s'il l'a réduit volontairement.     |
| `%elitemobs_player_active_guild_rank_name%`         |     Affiche le nom du rang de guilde actif. C'est l'option que vous devriez probablement utiliser si vous souhaitez afficher le rang de guilde actif d'un joueur.     |
| `%elitemobs_player_maximum_guild_rank_name%`         |     Affiche le nom du rang de guilde maximum. C'est l'option que vous devriez probablement utiliser si vous souhaitez afficher le rang de guilde maximum d'un joueur.     |
| `%elitemobs_player_prestige_guild_rank_numerical%`         |     Affiche le niveau de prestige d'un joueur, numériquement.     |
| `%elitemobs_player_money%`         |     Affiche le montant de la monnaie EliteMobs qu'un joueur possède actuellement.     |
| `%elitemobs_player_top_tier%`         |     Affiche le niveau de menace le plus élevé parmi tous les joueurs en ligne.     |
| `%elitemobs_player_top_guild_rank%`         |     Affiche le nom du joueur en ligne ayant le rang de guilde le plus élevé.     |
| `%elitemobs_player_shortened_guild_rank%`         |     Affiche la version abrégée des rangs de prestige et de guilde actifs, spécifiquement pour le chat ou d'autres emplacements où les noms de rang ne peuvent pas prendre trop de place (tableaux de bord). Par défaut, utilise une fleur de lys et une étoile unicode pour représenter respectivement le niveau de prestige et le rang de guilde actif, et utilise les chiffres romains pour les nombres. Ceci est 100 % configurable dans le fichier de configuration AdventurersGuild.yml.     |
| `%elitemobs_player_top_guild_rank%`         |     Affiche le nom du joueur en ligne ayant le rang de guilde le plus élevé.     |
| `%elitemobs_player_shortened_guild_rank%`         |     Affiche la version abrégée des rangs de prestige et de guilde actifs, spécifiquement pour le chat ou d'autres emplacements où les noms de rang ne peuvent pas prendre trop de place (tableaux de bord). Par défaut, utilise une fleur de lys et une étoile unicode pour représenter respectivement le niveau de prestige et le rang de guilde actif, et utilise les chiffres romains pour les nombres. Ceci est 100 % configurable dans le fichier de configuration AdventurersGuild.yml.     |
| `%elitemobs_player_kills%`         |     Affiche le nombre de tués d'élites d'un joueur.     |
| `%elitemobs_player_deaths%`         |     Affiche le nombre de fois qu'un joueur est mort face à une élite.     |

# Comment utiliser

1) ***EliteMobs ne nécessite pas l'utilisation du eCloud de PAPI.*** Il fonctionne tant qu'EliteMobs est sur votre serveur. Vous pouvez sauter cette étape.
2) Si vous souhaitez utiliser des espaces réservés, vous devrez avoir ***PAPI*** installé sur votre serveur, ainsi qu'un ***plugin pour utiliser ces espaces réservés***. Cela signifie que si vous souhaitez l'utiliser avec le chat, vous aurez besoin d'un plugin de chat. Même chose si vous voulez faire des titres, des tableaux de bord, des listes d'onglets ou autre.

-----

## Voici une courte liste de plugins qui utilisent PAPI :
### Chat :
- [Venturechat](https://www.spigotmc.org/resources/venturechat.771/)
- [ChatControl](https://www.spigotmc.org/resources/chatcontrol%E2%84%A2-the-ultimate-chat-plugin-500-000-downloads-1-2-5-1-16-4.271/)
### Autres :
- [FeatherBoard](https://www.spigotmc.org/resources/featherboard.2691/)

***La liste ci-dessus n'est que quelques-uns des exemples les plus populaires. Il en existe d'autres. Veuillez ne pas demander d'autres recommandations ou de support pour ces plugins. Je ne les ai pas créés et je ne fournirai pas de support pour eux.***

-----

3) Ajoutez l'espace réservé (la liste est ci-dessus) dans le plugin que vous avez choisi.

***Remarque : la plupart des plugins utilisent le format `{elitemobs_XXXXXXX_YYYYYY}` au lieu de `%elitemobs_XXXXXXX_YYYYYY%`*** 

Si cela ne fonctionne pas pour vous, essayez de changer votre utilisation de `%%` en `{}`. Si cela ne fonctionne toujours pas après cela, essayez la commande `/papi parse YOUR_USERNAME_HERE %elitemobs_YOUR_PLACEHOLDER_HERE%` depuis le jeu (remplacez ce qui est en majuscule).

Si cela vous donne une sortie valide, alors vous avez mal configuré quelque chose, et vous devez demander de l'aide au plugin sur lequel vous utilisez les espaces réservés.

```