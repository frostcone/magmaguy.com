Aquí tienes la lista completa de marcadores de posición de PAPI para EliteMobs.

| Marcador de posición | Descripción |
|-------------|:-----------:|
| `%elitemobs_player_combat_tier%`         |     Muestra el nivel de combate de un jugador, es decir, el nivel utilizado para generar Mobs de Élite alrededor del jugador.     |
| `%elitemobs_player_active_guild_rank_numerical%`         |     Muestra el rango de gremio activo del jugador en formato numérico. Ten en cuenta que el rango de gremio activo puede ser inferior al rango de gremio máximo real si el jugador lo baja a propósito.     |
| `%elitemobs_player_maximum_guild_rank_numerical%`         |     Muestra el rango de gremio máximo del jugador en formato numérico. Ten en cuenta que este puede ser superior al rango de gremio que tienen activo si lo bajaron a propósito.     |
| `%elitemobs_player_active_guild_rank_name%`         |     Muestra el nombre del rango de gremio activo. Esta es la opción que probablemente quieras usar si deseas mostrar el rango de gremio activo de un jugador.     |
| `%elitemobs_player_maximum_guild_rank_name%`         |     Muestra el nombre del rango de gremio máximo. Esta es la opción que probablemente quieras usar si deseas mostrar el rango de gremio máximo de un jugador.     |
| `%elitemobs_player_prestige_guild_rank_numerical%`         |     Muestra el nivel de prestigio de un jugador, numéricamente.     |
| `%elitemobs_player_money%`         |     Muestra cuánta moneda de EliteMobs tiene un jugador actualmente.     |
| `%elitemobs_player_top_tier%`         |     Muestra el nivel de amenaza más alto de cualquier jugador en línea.     |
| `%elitemobs_player_top_guild_rank%`         |     Muestra el nombre del jugador en línea con el rango de gremio más alto.     |
| `%elitemobs_player_shortened_guild_rank%`         |     Muestra la versión abreviada de los rangos de prestigio y de gremio activo, específicamente para el chat u otras ubicaciones donde los nombres de rango no pueden ocupar demasiado espacio (marcadores). Por defecto, utiliza un símbolo de flor de lis y un símbolo de estrella unicode para representar el nivel de prestigio y el rango de gremio activo respectivamente, y utiliza números romanos para los números. Esto es 100% configurable en el archivo de configuración AdventurersGuild.yml.     |
| `%elitemobs_player_top_guild_rank%`         |     Muestra el nombre del jugador en línea con el rango de gremio más alto.     |
| `%elitemobs_player_shortened_guild_rank%`         |     Muestra la versión abreviada de los rangos de prestigio y de gremio activo, específicamente para el chat u otras ubicaciones donde los nombres de rango no pueden ocupar demasiado espacio (marcadores). Por defecto, utiliza un símbolo de flor de lis y un símbolo de estrella unicode para representar el nivel de prestigio y el rango de gremio activo respectivamente, y utiliza números romanos para los números. Esto es 100% configurable en el archivo de configuración AdventurersGuild.yml.     |
| `%elitemobs_player_kills%`         |     Muestra la cantidad de asesinatos de Élite que tiene un jugador.     |
| `%elitemobs_player_deaths%`         |     Muestra la cantidad de veces que un jugador ha muerto a manos de un élite.     |

# Cómo usar

1) ***EliteMobs no requiere usar la eCloud de PAPI.*** Simplemente funciona siempre que EliteMobs esté en tu servidor. Puedes saltarte este paso.
2) Si quieres usar marcadores de posición, necesitarás tener ***PAPI*** instalado en tu servidor, así como un ***plugin para usar esos marcadores de posición***. Esto significa que si quieres usarlo con el chat, necesitarás un plugin de chat. Lo mismo si quieres hacer títulos, marcadores, listas de pestañas o cualquier otra cosa.

-----

## Aquí hay una breve lista de plugins que usan PAPI:
### Chat:
- [Venturechat](https://www.spigotmc.org/resources/venturechat.771/)
- [ChatControl](https://www.spigotmc.org/resources/chatcontrol%E2%84%A2-the-ultimate-chat-plugin-500-000-downloads-1-2-5-1-16-4.271/)
### Otros:
- [FeatherBoard](https://www.spigotmc.org/resources/featherboard.2691/)

***La lista anterior es solo algunos de los ejemplos más populares. Hay otros. Por favor, no pidas más recomendaciones ni soporte para esos plugins. Yo no los hice y no daré soporte para ellos.***

-----

3) Añade el marcador de posición (la lista está arriba) en el plugin que elegiste.

***Nota: la mayoría de los plugins usan el formato `{elitemobs_XXXXXXX_YYYYYY}` en lugar de `%elitemobs_XXXXXXX_YYYYYY%`***

Si no te funciona, intenta cambiar el uso de `%%` por `{}`. Si aún así no funciona después de eso, intenta el comando `/papi parse YOUR_USERNAME_HERE %elitemobs_YOUR_PLACEHOLDER_HERE%` desde el juego (reemplaza lo que está en mayúsculas).

Si eso te da una salida válida, entonces configuraste algo mal y necesitas buscar soporte con el plugin en el que estás usando los marcadores de posición.