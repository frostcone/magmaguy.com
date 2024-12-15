Voici la liste complète des marqueurs de position PAPI pour EliteMobs.

| Marqueur de position | Description |
|-------------|:-----------:|
| `%elitemobs_player_combat_tier%`         |     Affiche le niveau de combat d'un joueur, c'est-à-dire le niveau utilisé pour générer des mobs d'élite autour du joueur.     |
| `%elitemobs_player_active_guild_rank_numerical%`         |     Affiche le rang de guilde actif du joueur sous forme numérique. Sachez que le rang de guilde actif peut être inférieur au rang de guilde maximal réel si le joueur l'abaisse intentionnellement.     |
| `%elitemobs_player_maximum_guild_rank_numerical%`         |     Affiche le rang de guilde maximal du joueur sous forme numérique. Sachez que cela peut être supérieur au rang de guilde qu'il a actif s'il l'a abaissé intentionnellement.     |
| `%elitemobs_player_active_guild_rank_name%`         |     Affiche le nom du rang de guilde actif. C'est l'option que vous voudrez probablement utiliser si vous souhaitez afficher le rang de guilde actif d'un joueur.     |
| `%elitemobs_player_maximum_guild_rank_name%`         |     Affiche le nom du rang de guilde maximal. C'est l'option que vous voudrez probablement utiliser si vous souhaitez afficher le rang de guilde maximal d'un joueur.     |
| `%elitemobs_player_prestige_guild_rank_numerical%`         |     Affiche le niveau de prestige d'un joueur, numériquement.     |
| `%elitemobs_player_money%`         |     Affiche la quantité de monnaie EliteMobs qu'un joueur a actuellement.     |
| `%elitemobs_player_top_tier%`         |     Affiche le niveau de menace le plus élevé de tous les joueurs en ligne.     |
| `%elitemobs_player_top_guild_rank%`         |     Affiche le nom du joueur en ligne avec le rang de guilde le plus élevé.     |
| `%elitemobs_player_shortened_guild_rank%`         |     Affiche la version abrégée du prestige et des rangs de guilde actifs, en particulier pour le chat ou d'autres emplacements où les noms de rang ne peuvent pas prendre trop de place (tableaux de bord). Par défaut, utilise un fleur de lys et un unicode d'étoile pour représenter respectivement le niveau de prestige et le rang de guilde actif, et utilise des chiffres romains pour les nombres. Ceci est 100 % configurable dans le fichier de configuration AdventurersGuild.yml.     |
| `%elitemobs_player_top_guild_rank%`         |     Affiche le nom du joueur en ligne avec le rang de guilde le plus élevé.     |
| `%elitemobs_player_shortened_guild_rank%`         |     Affiche la version abrégée du prestige et des rangs de guilde actifs, en particulier pour le chat ou d'autres emplacements où les noms de rang ne peuvent pas prendre trop de place (tableaux de bord). Par défaut, utilise un fleur de lys et un unicode d'étoile pour représenter respectivement le niveau de prestige et le rang de guilde actif, et utilise des chiffres romains pour les nombres. Ceci est 100 % configurable dans le fichier de configuration AdventurersGuild.yml.     |
| `%elitemobs_player_kills%`         |     Affiche le nombre de mises à mort d'élite qu'un joueur a réalisées.     |
| `%elitemobs_player_deaths%`         |     Affiche le nombre de fois qu'un joueur est mort à cause d'une élite.     |

# Comment utiliser

1) ***EliteMobs ne nécessite pas l'utilisation de l'eCloud PAPI.*** Il fonctionne simplement tant qu'EliteMobs est sur votre serveur. Vous pouvez ignorer cette étape.
2) Si vous souhaitez utiliser des marqueurs de position, vous devrez avoir ***PAPI*** installé sur votre serveur, ainsi qu'un ***plugin pour utiliser ces marqueurs de position***. Cela signifie que si vous souhaitez l'utiliser avec le chat, vous aurez besoin d'un plugin de chat. Il en va de même si vous souhaitez créer des titres, des tableaux de bord, des listes d'onglets ou autre chose.

-----

## Voici une courte liste de plugins qui utilisent PAPI :
### Chat :
- [Venturechat](https://www.spigotmc.org/resources/venturechat.771/)
- [ChatControl](https://www.spigotmc.org/resources/chatcontrol%E2%84%A2-the-ultimate-chat-plugin-500-000-downloads-1-2-5-1-16-4.271/)
### Autres :
- [FeatherBoard](https://www.spigotmc.org/resources/featherboard.2691/)

***La liste ci-dessus n'est que quelques-uns des exemples les plus populaires. Il y en a d'autres. Veuillez ne pas demander plus de recommandations ou d'assistance pour ces plugins. Je ne les ai pas créés et je n'en ferai pas le support.***

-----

3) Ajoutez le marqueur de position (la liste est ci-dessus) dans le plugin que vous avez choisi.

***Remarque : la plupart des plugins utilisent le format `{elitemobs_XXXXXXX_YYYYYY}` au lieu de `%elitemobs_XXXXXXX_YYYYYY%`***

Si cela ne fonctionne pas pour vous, essayez de remplacer votre utilisation de `%%` par `{}`. Si cela ne fonctionne toujours pas après cela, essayez la commande `/papi parse VOTRE_NOM_D'UTILISATEUR_ICI %elitemobs_VOTRE_MARQUEUR_DE_POSITION_ICI%` dans le jeu (remplacez ce qui est en majuscules).

Si cela vous donne une sortie valide, vous avez configuré quelque chose de mal, et vous devez rechercher une assistance avec le plugin sur lequel vous utilisez les marqueurs de position.
