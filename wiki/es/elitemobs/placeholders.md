La siguiente es la lista completa de marcadores de posición de PAPI para EliteMobs.

| Marcador de posición | Descripción |
|-------------|:-----------:|
| `%elitemobs_player_combat_tier%`         |     Muestra el nivel de combate de un jugador, es decir, el nivel utilizado para generar turbas de élite alrededor del jugador.     |
| `%elitemobs_player_active_guild_rank_numerical%`         |     Muestra el rango de gremio activo del jugador en forma numérica. Ten en cuenta que el rango de gremio activo puede ser inferior al rango de gremio máximo real si el jugador lo reduce a propósito.     |
| `%elitemobs_player_maximum_guild_rank_numerical%`         |     Muestra el rango de gremio máximo del jugador en forma numérica. Ten en cuenta que esto puede ser más alto que el rango de gremio que tienen activo si lo redujeron a propósito.     |
| `%elitemobs_player_active_guild_rank_name%`         |     Muestra el nombre del rango de gremio activo. Esta es la opción que probablemente querrás usar si quieres mostrar el rango de gremio activo de un jugador.     |
| `%elitemobs_player_maximum_guild_rank_name%`         |     Muestra el nombre del rango de gremio máximo. Esta es la opción que probablemente querrás usar si quieres mostrar el rango de gremio máximo de un jugador.     |
| `%elitemobs_player_prestige_guild_rank_numerical%`         |     Muestra el nivel de prestigio de un jugador, numéricamente.     |
| `%elitemobs_player_money%`         |     Muestra cuánta moneda de EliteMobs tiene actualmente un jugador.     |
| `%elitemobs_player_top_tier%`         |     Muestra el nivel de amenaza más alto de todos los jugadores en línea.     |
| `%elitemobs_player_top_guild_rank%`         |     Muestra el nombre del jugador en línea con el rango de gremio más alto.     |
| `%elitemobs_player_shortened_guild_rank%`         |     Muestra la versión abreviada del prestigio y los rangos de gremio activos, específicamente para el chat u otras ubicaciones donde los nombres de rango no pueden ocupar demasiado espacio (marcadores). De forma predeterminada, utiliza una flor de lis y un unicode de estrella para representar el nivel de prestigio y el rango de gremio activo respectivamente, y utiliza números romanos para los números. Esto es 100% configurable en el archivo de configuración AdventurersGuild.yml.     |
| `%elitemobs_player_top_guild_rank%`         |     Muestra el nombre del jugador en línea con el rango de gremio más alto.     |
| `%elitemobs_player_shortened_guild_rank%`         |     Muestra la versión abreviada del prestigio y los rangos de gremio activos, específicamente para el chat u otras ubicaciones donde los nombres de rango no pueden ocupar demasiado espacio (marcadores). De forma predeterminada, utiliza una flor de lis y un unicode de estrella para representar el nivel de prestigio y el rango de gremio activo respectivamente, y utiliza números romanos para los números. Esto es 100% configurable en el archivo de configuración AdventurersGuild.yml.     |
| `%elitemobs_player_kills%`         |     Muestra la cantidad de asesinatos de élite que tiene un jugador.     |
| `%elitemobs_player_deaths%`         |     Muestra la cantidad de veces que un jugador ha muerto ante una élite.     |

# Cómo utilizar

1) ***EliteMobs no requiere el uso de PAPI eCloud.*** Simplemente funciona siempre que EliteMobs esté en tu servidor. Puedes omitir este paso.
2) Si quieres usar marcadores de posición, deberás tener ***PAPI*** instalado en tu servidor, así como un ***complemento para usar esos marcadores de posición***. Eso significa que si quieres usarlo con el chat, necesitarás un complemento de chat. Lo mismo si quieres hacer títulos, marcadores, listas de pestañas o cualquier otra cosa.

-----

## Aquí hay una breve lista de complementos que usan PAPI:
### Chat:
- [Venturechat](https://www.spigotmc.org/resources/venturechat.771/)
- [ChatControl](https://www.spigotmc.org/resources/chatcontrol%E2%84%A2-the-ultimate-chat-plugin-500-000-downloads-1-2-5-1-16-4.271/)
### Otro:
- [FeatherBoard](https://www.spigotmc.org/resources/featherboard.2691/)

***La lista anterior es solo algunos de los ejemplos más populares. Hay otros. No solicites más recomendaciones ni soporte para esos complementos. No los hice y no les daré soporte.***

-----

3) Agrega el marcador de posición (la lista está arriba) en el complemento que elegiste.

***Nota: la mayoría de los complementos usan el formato `{elitemobs_XXXXXXX_YYYYYY}` en lugar de `%elitemobs_XXXXXXX_YYYYYY%`***

Si no te funciona, intenta cambiar el uso de `%%` a `{}`. Si aún no funciona después de eso, prueba el comando `/papi parse TU_NOMBRE_DE_USUARIO_AQUÍ %elitemobs_TU_MARCADOR_DE_POSICIÓN_AQUÍ%` desde el juego (reemplaza lo que está en mayúsculas).

Si eso te da un resultado válido, entonces configuraste algo mal y necesitas buscar soporte con el complemento en el que estás usando los marcadores de posición.


