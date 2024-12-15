[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

La siguiente es la lista completa de marcadores de posición de PAPI para EliteMobs.

| Marcador de posición | Descripción |
|-------------|:-----------:|
| `%elitemobs_player_combat_tier%`         |     Muestra el nivel de combate de un jugador, lo que significa el nivel utilizado para generar mobs de élite alrededor del jugador.     |
| `%elitemobs_player_active_guild_rank_numerical%`         |     Muestra el rango de gremio activo del jugador en forma numérica. Tenga en cuenta que el rango de gremio activo puede ser inferior al rango de gremio máximo real si el jugador lo baja a propósito.     |
| `%elitemobs_player_maximum_guild_rank_numerical%`         |     Muestra el rango de gremio máximo del jugador en forma numérica. Tenga en cuenta que este puede ser superior al rango de gremio que tienen activo si lo bajaron a propósito.     |
| `%elitemobs_player_active_guild_rank_name%`         |     Muestra el nombre del rango de gremio activo. Esta es la opción que probablemente desee utilizar si desea mostrar el rango de gremio activo de un jugador.     |
| `%elitemobs_player_maximum_guild_rank_name%`         |     Muestra el nombre del rango de gremio máximo. Esta es la opción que probablemente desee utilizar si desea mostrar el rango de gremio máximo de un jugador.     |
| `%elitemobs_player_prestige_guild_rank_numerical%`         |     Muestra el nivel de prestigio de un jugador, numéricamente.     |
| `%elitemobs_player_money%`         |     Muestra cuánta moneda de EliteMobs tiene actualmente un jugador.     |
| `%elitemobs_player_top_tier%`         |     Muestra el nivel de amenaza más alto de cualquiera de los jugadores en línea.     |
| `%elitemobs_player_top_guild_rank%`         |     Muestra el nombre del jugador en línea con el rango de gremio más alto.     |
| `%elitemobs_player_shortened_guild_rank%`         |     Muestra la versión abreviada del prestigio y los rangos de gremio activos, específicamente para el chat u otras ubicaciones donde los nombres de rango no pueden ocupar demasiado espacio (marcadores). De forma predeterminada, utiliza un lirio y un unicode de estrella para representar el nivel de prestigio y el rango de gremio activo respectivamente, y utiliza números romanos para los números. Esto es 100 % configurable en el archivo de configuración AdventurersGuild.yml.     |
| `%elitemobs_player_top_guild_rank%`         |     Muestra el nombre del jugador en línea con el rango de gremio más alto.     |
| `%elitemobs_player_shortened_guild_rank%`         |     Muestra la versión abreviada del prestigio y los rangos de gremio activos, específicamente para el chat u otras ubicaciones donde los nombres de rango no pueden ocupar demasiado espacio (marcadores). De forma predeterminada, utiliza un lirio y un unicode de estrella para representar el nivel de prestigio y el rango de gremio activo respectivamente, y utiliza números romanos para los números. Esto es 100 % configurable en el archivo de configuración AdventurersGuild.yml.     |
| `%elitemobs_player_kills%`         |     Muestra la cantidad de muertes de élite que tiene un jugador.     |
| `%elitemobs_player_deaths%`         |     Muestra la cantidad de veces que un jugador ha muerto a causa de una élite.     |

# Cómo utilizar

1) ***EliteMobs no requiere el uso de PAPI eCloud.*** Simplemente funciona siempre y cuando EliteMobs esté en su servidor. Puede omitir este paso.
2) Si desea utilizar marcadores de posición, deberá tener instalado ***PAPI*** en su servidor, así como un ***plugin para usar esos marcadores de posición***. Eso significa que si desea utilizarlo con el chat, necesitará un plugin de chat. Lo mismo ocurre si desea crear títulos, marcadores, listas de pestañas o cualquier otra cosa.

-----

## Aquí hay una breve lista de plugins que usan PAPI:
### Chat:
- [Venturechat](https://www.spigotmc.org/resources/venturechat.771/)
- [ChatControl](https://www.spigotmc.org/resources/chatcontrol%E2%84%A2-the-ultimate-chat-plugin-500-000-downloads-1-2-5-1-16-4.271/)
### Otros:
- [FeatherBoard](https://www.spigotmc.org/resources/featherboard.2691/)

***La lista anterior es solo algunos de los ejemplos más populares. Hay otros. No solicite más recomendaciones ni soporte para esos plugins. No los hice y no daré soporte para ellos.***

-----

3) Agregue el marcador de posición (la lista está arriba) en el plugin que elija.

***Nota: la mayoría de los plugins utilizan el formato `{elitemobs_XXXXXXX_YYYYYY}` en lugar de `%elitemobs_XXXXXXX_YYYYYY%`***

Si no le funciona, intente cambiar su uso de `%%` a `{}`. Si todavía no funciona después de eso, pruebe el comando `/papi parse SU_NOMBRE_DE_USUARIO_AQUÍ %elitemobs_SU_MARCADOR_DE_POSICIÓN_AQUÍ%` desde el juego (reemplace lo que está en mayúsculas).

Si eso le da una salida válida, entonces configuró algo mal y necesita buscar soporte con cualquier plugin en el que esté utilizando los marcadores de posición.
