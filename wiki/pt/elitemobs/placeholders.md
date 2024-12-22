A seguir está a lista completa de placeholders PAPI para EliteMobs.

| Placeholder                                        |                                                                                                                                                                                                                         Descrição                                                                                                                                                                                                                          |
|----------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `%elitemobs_player_combat_tier%`                   |                                                                                                                                                                         Exibe o nível de combate de um jogador, ou seja, o nível usado para gerar Elite Mobs em torno do jogador.                                                                                                                                                                          |
| `%elitemobs_player_active_guild_rank_numerical%`   |                                                                                                                           Exibe a patente ativa da guilda para o jogador em formato numérico. Atenção que a patente ativa da guilda pode ser inferior à patente máxima real da guilda se o jogador a diminuir propositadamente.                                                                                                                            |
| `%elitemobs_player_maximum_guild_rank_numerical%`  |                                                                                                                                        Exibe a patente máxima da guilda para o jogador em formato numérico. Atenção que esta pode ser superior à patente de guilda que têm ativa se a diminuíram propositadamente.                                                                                                                                         |
| `%elitemobs_player_active_guild_rank_name%`        |                                                                                                                                                       Exibe o nome da patente ativa da guilda. Esta é a opção que provavelmente deve usar se quiser exibir a patente ativa da guilda de um jogador.                                                                                                                                                        |
| `%elitemobs_player_maximum_guild_rank_name%`       |                                                                                                                                                      Exibe o nome da patente máxima da guilda. Esta é a opção que provavelmente deve usar se quiser exibir a patente máxima da guilda de um jogador.                                                                                                                                                       |
| `%elitemobs_player_prestige_guild_rank_numerical%` |                                                                                                                                                                                                  Exibe o nível de prestígio de um jogador, numericamente.                                                                                                                                                                                                  |
| `%elitemobs_player_money%`                         |                                                                                                                                                                                            Exibe a quantidade de moeda EliteMobs que um jogador tem atualmente.                                                                                                                                                                                            |
| `%elitemobs_player_top_tier%`                      |                                                                                                                                                                                              Exibe o nível de ameaça mais alto de todos os jogadores online.                                                                                                                                                                                               |
| `%elitemobs_player_top_guild_rank%`                |                                                                                                                                                                                             Exibe o nome do jogador online com a patente de guilda mais alta.                                                                                                                                                                                              |
| `%elitemobs_player_shortened_guild_rank%`          | Exibe a versão abreviada dos níveis de prestígio e patente ativa da guilda, especificamente para chat ou outros locais onde os nomes das patentes não podem ocupar muito espaço (placares). Por padrão, usa um fleur de lis e um unicode de estrela para representar o nível de prestígio e a patente ativa da guilda respetivamente, e usa algarismos romanos para os números. Isto é 100% configurável no ficheiro de configuração AdventurersGuild.yml. |
| `%elitemobs_player_top_guild_rank%`                |                                                                                                                                                                                             Exibe o nome do jogador online com a patente de guilda mais alta.                                                                                                                                                                                              |
| `%elitemobs_player_shortened_guild_rank%`          | Exibe a versão abreviada dos níveis de prestígio e patente ativa da guilda, especificamente para chat ou outros locais onde os nomes das patentes não podem ocupar muito espaço (placares). Por padrão, usa um fleur de lis e um unicode de estrela para representar o nível de prestígio e a patente ativa da guilda respetivamente, e usa algarismos romanos para os números. Isto é 100% configurável no ficheiro de configuração AdventurersGuild.yml. |
| `%elitemobs_player_kills%`                         |                                                                                                                                                                                                   Exibe a quantidade de mortes Elite que um jogador tem.                                                                                                                                                                                                   |
| `%elitemobs_player_deaths%`                        |                                                                                                                                                                                              Exibe a quantidade de vezes que um jogador morreu para um elite.                                                                                                                                                                                              |

# Como usar

1) ***EliteMobs não requer o uso do PAPI eCloud.*** Funciona apenas se o EliteMobs estiver no seu servidor. Pode ignorar
   este passo.
2) Se quiser usar placeholders, terá de ter o ***PAPI*** instalado no seu servidor, bem como um
   ***plugin para usar esses placeholders***. Isso significa que se quiser usá-lo com o chat, precisará de um plugin de
   chat. O mesmo se quiser fazer títulos, placares, listas de tabulação ou qualquer outra coisa.

-----

## Aqui está uma pequena lista de plugins que usam PAPI:

### Chat:
- [Venturechat](https://www.spigotmc.org/resources/venturechat.771/)
- [ChatControl](https://www.spigotmc.org/resources/chatcontrol%E2%84%A2-the-ultimate-chat-plugin-500-000-downloads-1-2-5-1-16-4.271/)
### Outros:
- [FeatherBoard](https://www.spigotmc.org/resources/featherboard.2691/)

***A lista acima é apenas alguns dos exemplos mais populares. Existem outros. Não peça mais recomendações ou suporte
para esses plugins. Eu não os fiz e não darei suporte para eles.***

-----

3) Adicione o placeholder (a lista está acima) no plugin que escolher.

***Nota: a maioria dos plugins usa o formato `{elitemobs_XXXXXXX_YYYYYY}` em vez de `%elitemobs_XXXXXXX_YYYYYY%`***

Se não estiver a funcionar para si, tente mudar o seu uso de `%%` para `{}`. Se ainda não estiver a funcionar depois
disso, experimente o comando `/papi parse SEU_NOME_DE_USUÁRIO_AQUI %elitemobs_SEU_PLACEHOLDER_AQUI%` dentro do jogo (
substitua o que está em maiúsculas).

Se isso lhe der um resultado válido, então configurou algo errado e precisa procurar suporte com o plugin em que está a
usar os placeholders.
