El siguiente es la lista completa de los marcadores de posición de PAPI para EliteMobs.

| Marcador de posición | Descripción |
|-------------|:-----------:|
| `%elitemobs_player_combat_tier%`         |     Muestra el nivel de combate de un jugador, es decir, el nivel utilizado para generar Mobs Elite alrededor del jugador.     |
| `%elitemobs_player_active_guild_rank_numerical%`         |     Muestra el rango de la guild activa para el jugador en forma de número. Tenga en cuenta que el rango de la guild activa puede ser más bajo que el rango máximo de la guild si el jugador lo disminuye a propósito.     |
| `%elitemobs_player_maximum_guild_rank_numerical%`         |     Muestra el rango máximo de la guild para el jugador en forma de número. Tenga en cuenta que esto puede ser mayor que el rango de guild que tienen activo si lo disminuyeron a propósito.     |
| `%elitemobs_player_active_guild_rank_name%`         |     Muestra el nombre del rango de la guild  activa. Esta es la opción que probablemente querrá utilizar si desea mostrar el rango de la guild activa de un jugador.     |
| `%elitemobs_player_maximum_guild_rank_name%`         |     Muestra el nombre del rango máximo de la guild. Esta es la opción que probablemente querrá utilizar si desea mostrar el rango máximo de la guild de un jugador.     |
| `%elitemobs_player_prestige_guild_rank_numerical%`         |     Muestra el nivel de prestigio de un jugador, numéricamente.     |
| `%elitemobs_player_money%`         |     Muestra cuánta moneda EliteMobs tiene un jugador actualmente.     |
| `%elitemobs_player_top_tier%`         |     Muestra el nivel de amenaza más alto de cualquier jugador en línea.     |
| `%elitemobs_player_top_guild_rank%`         |     Muestra el nombre del jugador en línea con el rango más alto de guild.     |
| `%elitemobs_player_shortened_guild_rank%`         |     Muestra la versión abreviada de los rangos de prestigio y activos de la guild, específicamente para el chat u otros lugares donde los nombres de rango no pueden ocupar demasiado espacio (tablas de puntuaciones). Por defecto, utiliza una flor de lis y una estrella unicode para representar el nivel de prestigio y el rango activo de la guild, respectivamente, y utiliza números romanos para los números. Esto es 100% configurable en el archivo de configuración AdventurersGuild.yml .     |
| `%elitemobs_player_top_guild_rank%`         |     Muestra el nombre del jugador en línea con el rango más alto de guild.     |
| `%elitemobs_player_shortened_guild_rank%`         |     Muestra la versión abreviada de los rangos de prestigio y activos de la guild, específicamente para el chat u otros lugares donde los nombres de rango no pueden ocupar demasiado espacio (tablas de puntuaciones). Por defecto, utiliza una flor de lis y una estrella unicode para representar el nivel de prestigio y el rango activo de la guild, respectivamente, y utiliza números romanos para los números. Esto es 100% configurable en el archivo de configuración AdventurersGuild.yml .     |
| `%elitemobs_player_kills%`         |     Muestra la cantidad de muertes de Elite que tiene un jugador.     |
| `%elitemobs_player_deaths%`         |     Muestra la cantidad de veces que un jugador ha muerto en manos de un elite.     |

# Cómo utilizar

1) ***EliteMobs no requiere el uso de PAPI eCloud.*** Funciona siempre y cuando EliteMobs esté en su servidor. Puede saltarse este paso.
2) Si desea utilizar marcadores de posición, necesitará tener ***PAPI*** instalado en su servidor, así como un ***plugin para utilizar esos marcadores de posición***. Eso significa que si desea utilizarlo con el chat, necesitará un plugin de chat. Lo mismo si quieres hacer títulos, tablas de puntuaciones, listas de tabulaciones o cualquier otra cosa.

-----

## Aquí hay una lista corta de plugins que usan PAPI:
### Chat:
- [Venturechat](https://www.spigotmc.org/resources/venturechat.771/)
- [ChatControl](https://www.spigotmc.org/resources/chatcontrol%E2%84%A2-the-ultimate-chat-plugin-500-000-downloads-1-2-5-1-16-4.271/)
### Otros:
- [FeatherBoard](https://www.spigotmc.org/resources/featherboard.2691/)

***La lista de arriba son solo algunos de los ejemplos más populares. Hay otros. Por favor, no pida más recomendaciones o soporte para esos plugins. Yo no los hice y no daré soporte para ellos.***

-----

3) Añada el marcador de posición (la lista está arriba) en el plugin que eligió.

***Nota: la mayoría de los plugins usan el formato `{elitemobs_XXXXXXX_YYYYYY}` en lugar de `%elitemobs_XXXXXXX_YYYYYY%`***

Si no está funcionando para usted, intente cambiar el uso de `%%` a `{}`. Si todavía no funciona después de eso, intente el comando `/papi parse YOUR_USERNAME_HERE %elitemobs_YOUR_PLACEHOLDER_HERE%` desde el juego (reemplaza lo que está en mayúscula).

Si eso le da una salida válida, entonces configuró algo mal, y necesita buscar soporte con el plugin en el que está utilizando los marcadores de posición.
