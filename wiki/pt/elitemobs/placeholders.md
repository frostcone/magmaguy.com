# Marcadores do PlaceholderAPI para o EliteMobs

A seguir, está a lista completa de marcadores do PAPI para o EliteMobs.

| Marcador | Descrição |
|-------------|:-----------:|
| `%elitemobs_player_combat_tier%`         |     Exibe o nível de combate de um jogador, ou seja, o nível usado para gerar Mobs Elite ao redor do jogador.     |
| `%elitemobs_player_active_guild_rank_numerical%`         |     Exibe o nível de guilda ativo para o jogador em forma numérica. Cuidado que o nível de guilda ativo pode ser menor que o nível máximo de guilda real se o jogador o reduzir propositalmente.     |
| `%elitemobs_player_maximum_guild_rank_numerical%`         |     Exibe o nível máximo de guilda para o jogador em forma numérica. Cuidado que isso pode ser maior que o nível de guilda que ele possui ativo se o tiver reduzido propositalmente.     |
| `%elitemobs_player_active_guild_rank_name%`         |     Exibe o nome do nível de guilda ativo. Esta é a opção que você provavelmente deseja usar se quiser exibir o nível de guilda ativo de um jogador.     |
| `%elitemobs_player_maximum_guild_rank_name%`         |     Exibe o nome do nível máximo de guilda. Esta é a opção que você provavelmente deseja usar se quiser exibir o nível máximo de guilda de um jogador.     |
| `%elitemobs_player_prestige_guild_rank_numerical%`         |     Exibe o nível de prestígio de um jogador, numericamente.     |
| `%elitemobs_player_money%`         |     Exibe quanta moeda do EliteMobs um jogador possui atualmente.     |
| `%elitemobs_player_top_tier%`         |     Exibe o nível de ameaça mais alto de todos os jogadores online.     |
| `%elitemobs_player_top_guild_rank%`         |     Exibe o nome do jogador online com o nível de guilda mais alto.     |
| `%elitemobs_player_shortened_guild_rank%`         |     Exibe a versão abreviada dos níveis de prestígio e de guilda ativos, especificamente para bate-papo ou outros locais onde os nomes de nível não podem ocupar muito espaço (placares). Por padrão, usa um lírio-branco e um asterisco unicode para representar o nível de prestígio e o nível de guilda ativo, respectivamente, e usa algarismos romanos para os números. Isso é 100% configurável no arquivo de configuração AdventurersGuild.yml.     |
| `%elitemobs_player_top_guild_rank%`         |     Exibe o nome do jogador online com o nível de guilda mais alto.     |
| `%elitemobs_player_shortened_guild_rank%`         |     Exibe a versão abreviada dos níveis de prestígio e de guilda ativos, especificamente para bate-papo ou outros locais onde os nomes de nível não podem ocupar muito espaço (placares). Por padrão, usa um lírio-branco e um asterisco unicode para representar o nível de prestígio e o nível de guilda ativo, respectivamente, e usa algarismos romanos para os números. Isso é 100% configurável no arquivo de configuração AdventurersGuild.yml.     |
| `%elitemobs_player_kills%`         |     Exibe a quantidade de mortes de Elite que um jogador tem.     |
| `%elitemobs_player_deaths%`         |     Exibe a quantidade de vezes que um jogador morreu para uma elite.     |

# Como usar

1) ***O EliteMobs não requer o uso do PAPI eCloud.*** Ele só funciona desde que o EliteMobs esteja no seu servidor. Você pode pular esta etapa.
2) Se você quiser usar marcadores, precisará ter o ***PAPI*** instalado no seu servidor, bem como um ***plugin para usar esses marcadores***. Isso significa que se você quiser usá-lo com bate-papo, precisará de um plugin de bate-papo. A mesma coisa se você quiser fazer títulos, placares, listas de abas ou qualquer outra coisa.

-----

## Aqui está uma breve lista de plugins que usam o PAPI:
### Bate-papo:
- [Venturechat](https://www.spigotmc.org/resources/venturechat.771/)
- [ChatControl](https://www.spigotmc.org/resources/chatcontrol%E2%84%A2-the-ultimate-chat-plugin-500-000-downloads-1-2-5-1-16-4.271/)
### Outros:
- [FeatherBoard](https://www.spigotmc.org/resources/featherboard.2691/)

***A lista acima é apenas alguns dos exemplos mais populares. Existem outros. Por favor, não peça mais recomendações ou suporte para esses plugins. Eu não os fiz e não darei suporte a eles.***

-----

3) Adicione o marcador (a lista está acima) no plugin que você escolheu.

***Observação: a maioria dos plugins usa o formato `{elitemobs_XXXXXXX_YYYYYY}` em vez de `%elitemobs_XXXXXXX_YYYYYY%`*** 

Se não estiver funcionando para você, tente mudar o uso de `%%` para `{}`. Se ainda não estiver funcionando depois disso, tente o comando `/papi parse YOUR_USERNAME_HERE %elitemobs_YOUR_PLACEHOLDER_HERE%` dentro do jogo (substitua o que está em maiúsculas). 

Se isso fornecer uma saída válida, então você configurou algo errado, e você precisa procurar suporte com qualquer plugin que esteja usando os marcadores.


