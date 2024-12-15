A seguir, está a lista completa de *placeholders* PAPI para o EliteMobs.

| *Placeholder* | Descrição |
|-------------|:-----------:|
| `%elitemobs_player_combat_tier%`         |     Exibe o nível de combate de um jogador, ou seja, o nível usado para gerar Elite Mobs em torno do jogador.     |
| `%elitemobs_player_active_guild_rank_numerical%`         |     Exibe a classificação ativa da guilda para o jogador em formato numérico. Tenha em atenção que a classificação ativa da guilda pode ser inferior à classificação máxima real da guilda se o jogador a diminuir de propósito.     |
| `%elitemobs_player_maximum_guild_rank_numerical%`         |     Exibe a classificação máxima da guilda para o jogador em formato numérico. Tenha em atenção que esta pode ser superior à classificação da guilda que ele tem ativa se a tiver diminuído de propósito.     |
| `%elitemobs_player_active_guild_rank_name%`         |     Exibe o nome da classificação ativa da guilda. Esta é a opção que provavelmente quer usar se quiser exibir a classificação ativa da guilda de um jogador.     |
| `%elitemobs_player_maximum_guild_rank_name%`         |     Exibe o nome da classificação máxima da guilda. Esta é a opção que provavelmente quer usar se quiser exibir a classificação máxima da guilda de um jogador.     |
| `%elitemobs_player_prestige_guild_rank_numerical%`         |     Exibe o nível de prestígio de um jogador, numericamente.     |
| `%elitemobs_player_money%`         |     Exibe quanto dinheiro na moeda do EliteMobs um jogador tem atualmente.     |
| `%elitemobs_player_top_tier%`         |     Exibe o nível de ameaça mais alto entre todos os jogadores online.     |
| `%elitemobs_player_top_guild_rank%`         |     Exibe o nome do jogador online com a classificação mais alta na guilda.     |
| `%elitemobs_player_shortened_guild_rank%`         |     Exibe a versão abreviada do prestígio e das classificações ativas da guilda, especificamente para o *chat* ou outros locais onde os nomes das classificações não podem ocupar muito espaço (*scoreboards*). Por predefinição, usa um *fleur de lis* e um asterisco *unicode* para representar o nível de prestígio e a classificação ativa da guilda, respetivamente, e usa algarismos romanos para os números. Isso é 100% configurável no ficheiro de configuração AdventurersGuild.yml.     |
| `%elitemobs_player_top_guild_rank%`         |     Exibe o nome do jogador online com a classificação mais alta na guilda.     |
| `%elitemobs_player_shortened_guild_rank%`         |     Exibe a versão abreviada do prestígio e das classificações ativas da guilda, especificamente para o *chat* ou outros locais onde os nomes das classificações não podem ocupar muito espaço (*scoreboards*). Por predefinição, usa um *fleur de lis* e um asterisco *unicode* para representar o nível de prestígio e a classificação ativa da guilda, respetivamente, e usa algarismos romanos para os números. Isso é 100% configurável no ficheiro de configuração AdventurersGuild.yml.     |
| `%elitemobs_player_kills%`         |     Exibe a quantidade de mortes de Elite que um jogador tem.     |
| `%elitemobs_player_deaths%`         |     Exibe a quantidade de vezes que um jogador morreu para um elite.     |

# Como usar

1) ***O EliteMobs não exige o uso do PAPI eCloud.*** Ele funciona simplesmente desde que o EliteMobs esteja no seu servidor. Pode ignorar este passo.
2) Se quiser usar *placeholders*, precisa de ter o ***PAPI*** instalado no seu servidor, bem como um ***plugin para usar esses *placeholders* ***. Isso significa que se quiser usá-lo no *chat*, vai precisar de um *plugin* de *chat*. O mesmo se aplica se quiser criar títulos, *scoreboards*, listas de separadores ou qualquer outra coisa.

-----

## Aqui está uma pequena lista de *plugins* que usam PAPI:
### *Chat*:
- [Venturechat](https://www.spigotmc.org/resources/venturechat.771/)
- [ChatControl](https://www.spigotmc.org/resources/chatcontrol%E2%84%A2-the-ultimate-chat-plugin-500-000-downloads-1-2-5-1-16-4.271/)
### Outros:
- [FeatherBoard](https://www.spigotmc.org/resources/featherboard.2691/)

***A lista acima é apenas alguns dos exemplos mais populares. Existem outros. Por favor, não peça mais recomendações ou suporte para esses *plugins*. Não os fiz e não darei suporte para eles.***

-----

3) Adicione o *placeholder* (a lista está acima) no *plugin* que escolher.

***Nota: a maioria dos *plugins* usa o formato `{elitemobs_XXXXXXX_YYYYYY}` em vez de `%elitemobs_XXXXXXX_YYYYYY%`*** 

Se não estiver a funcionar para si, tente mudar o seu uso de `%%` para `{}`. Se ainda não estiver a funcionar depois disso, tente o comando `/papi parse SEU_NOME_DE_UTILIZADOR_AQUI %elitemobs_SEU_PLACEHOLDER_AQUI%` no jogo (substitua o que está em maiúsculas).

Se isso lhe der uma saída válida, então configurou algo errado e precisa de procurar suporte com qualquer *plugin* em que esteja a usar os *placeholders*.
