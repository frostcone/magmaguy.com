La siguiente es la lista completa de marcadores de posición PAPI para EliteMobs.

| Marcador de posición                               |                                                                                                                                                                                                                                      Descripción                                                                                                                                                                                                                                       |
|----------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `%elitemobs_player_combat_tier%`                   |                                                                                                                                                                                 Muestra el nivel de combate de un jugador, es decir, el nivel utilizado para generar Elite Mobs alrededor del jugador.                                                                                                                                                                                 |
| `%elitemobs_player_active_guild_rank_numerical%`   |                                                                                                                                          Muestra el rango de gremio activo del jugador en forma numérica. Ten cuidado de que el rango de gremio activo puede ser inferior al rango de gremio máximo real si el jugador lo reduce a propósito.                                                                                                                                          |
| `%elitemobs_player_maximum_guild_rank_numerical%`  |                                                                                                                                                     Muestra el rango de gremio máximo del jugador en forma numérica. Ten cuidado de que este puede ser superior al rango de gremio que tienen activo si lo redujeron a propósito.                                                                                                                                                      |
| `%elitemobs_player_active_guild_rank_name%`        |                                                                                                                                                               Muestra el nombre del rango de gremio activo. Esta es la opción que probablemente querrás usar si quieres mostrar el rango de gremio activo de un jugador.                                                                                                                                                               |
| `%elitemobs_player_maximum_guild_rank_name%`       |                                                                                                                                                               Muestra el nombre del rango de gremio máximo. Esta es la opción que probablemente querrás usar si quieres mostrar el rango de gremio máximo de un jugador.                                                                                                                                                               |
| `%elitemobs_player_prestige_guild_rank_numerical%` |                                                                                                                                                                                                              Muestra el nivel de prestigio de un jugador, numéricamente.                                                                                                                                                                                                               |
| `%elitemobs_player_money%`                         |                                                                                                                                                                                                             Muestra cuánta moneda EliteMobs tiene actualmente un jugador.                                                                                                                                                                                                              |
| `%elitemobs_player_top_tier%`                      |                                                                                                                                                                                                         Muestra el nivel de amenaza más alto de todos los jugadores en línea.                                                                                                                                                                                                          |
| `%elitemobs_player_top_guild_rank%`                |                                                                                                                                                                                                        Muestra el nombre del jugador en línea con el rango de gremio más alto.                                                                                                                                                                                                         |
| `%elitemobs_player_shortened_guild_rank%`          | Muestra la versión abreviada de los rangos de prestigio y gremio activos, específicamente para el chat u otras ubicaciones donde los nombres de rango no pueden ocupar demasiado espacio (marcadores). De forma predeterminada, usa una flor de lis y un asterisco unicode para representar el nivel de prestigio y el rango de gremio activo, respectivamente, y usa números romanos para los números. Esto es 100% configurable en el archivo de configuración AdventurersGuild.yml. |
| `%elitemobs_player_top_guild_rank%`                |                                                                                                                                                                                                        Muestra el nombre del jugador en línea con el rango de gremio más alto.                                                                                                                                                                                                         |
| `%elitemobs_player_shortened_guild_rank%`          | Muestra la versión abreviada de los rangos de prestigio y gremio activos, específicamente para el chat u otras ubicaciones donde los nombres de rango no pueden ocupar demasiado espacio (marcadores). De forma predeterminada, usa una flor de lis y un asterisco unicode para representar el nivel de prestigio y el rango de gremio activo, respectivamente, y usa números romanos para los números. Esto es 100% configurable en el archivo de configuración AdventurersGuild.yml. |
| `%elitemobs_player_kills%`                         |                                                                                                                                                                                                             Muestra la cantidad de muertes de Elite que tiene un jugador.                                                                                                                                                                                                              |
| `%elitemobs_player_deaths%`                        |                                                                                                                                                                                                       Muestra la cantidad de veces que un jugador ha muerto a causa de un élite.                                                                                                                                                                                                       |

# Cómo usar

1) ***EliteMobs no requiere el uso de PAPI eCloud.*** Simplemente funciona siempre y cuando EliteMobs esté en tu
   servidor. Puedes omitir este paso.
2) Si deseas utilizar marcadores de posición, deberás tener ***PAPI*** instalado en tu servidor, así como un
   ***plugin para usar esos marcadores de posición***. Eso significa que si quieres usarlo con el chat, necesitarás un
   plugin de chat. Lo mismo si quieres hacer títulos, marcadores, listas de pestañas o cualquier otra cosa.

-----

## Aquí hay una breve lista de plugins que usan PAPI:
### Chat:
- [Venturechat](https://www.spigotmc.org/resources/venturechat.771/)
- [ChatControl](https://www.spigotmc.org/resources/chatcontrol%E2%84%A2-the-ultimate-chat-plugin-500-000-downloads-1-2-5-1-16-4.271/)
### Otros:
- [FeatherBoard](https://www.spigotmc.org/resources/featherboard.2691/)

***La lista anterior es solo algunos de los ejemplos más populares. Hay otros. Por favor, no pidas más recomendaciones
ni soporte para esos plugins. No los he hecho y no daré soporte para ellos.***

-----

3) Añade el marcador de posición (la lista está arriba) en el plugin que elijas.

***Nota: la mayoría de los plugins usan el formato `{elitemobs_XXXXXXX_YYYYYY}` en lugar de `%elitemobs_XXXXXXX_YYYYYY%`
***

Si no te funciona, intenta cambiar tu uso de `%%` a `{}`. Si todavía no funciona después de eso, prueba el
comando `/papi parse TU_NOMBRE_DE_USUARIO_AQUI %elitemobs_TU_MARCADOR_DE_POSICION_AQUI%` desde el juego (reemplaza lo
que está en mayúsculas).

Si eso te da una salida válida, entonces has configurado algo mal y necesitas buscar soporte con el plugin en el que
estás usando los marcadores de posición.
