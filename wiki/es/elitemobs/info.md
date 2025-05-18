¡Bienvenido a la wiki de EliteMobs!

# Licencia

El código fuente de EliteMobs está cubierto por la licencia [GPLV3](https://choosealicense.com/licenses/gpl-3.0/), y esta wiki se proporciona con la licencia [CC0](https://choosealicense.com/licenses/cc0-1.0/).

Siéntete libre de redistribuir y modificar la información de esta wiki.

# Versiones

A partir de la versión 9.0.0 de EliteMobs, la única versión de Minecraft compatible es la 1.21 y superiores.

Para aquellos que busquen compatibilidad con versiones anteriores de Minecraft (1.19.4 - 1.20.4), por favor, usen la versión 8 de EliteMobs.

**Nota: Ninguna versión de EliteMobs es compatible con las versiones 1.20.5 y 1.20.6 de Minecraft.**

# ¿Para qué sirve EliteMobs?

EliteMobs tiene como objetivo extender el contenido final (end-game) de Minecraft implementando diverso contenido relacionado con jefes.

Esto significa:
- Jefes Dinámicos (Mobs con Nivel)
- Jefes Personalizados
- Eventos
- Arenas
- Mazmorras Basadas en Mundos
- Mazmorras Instanciadas
- Mazmorras Aleatorias de Mundo Abierto (con integración de BetterStructures)
- Objetos Personalizados (Objetos/Botín de Élite)
- ... ¡y más!

El plugin no pretende reemplazar el contenido vanilla de Minecraft, sino complementarlo, permitiendo a los jugadores optar por no participar en el contenido de EliteMobs si lo desean. Los objetos de EliteMobs típicamente no afectan el PvP ni el combate vanilla de Minecraft, ya que sus bonificaciones de daño y defensa solo se aplican durante el combate con EliteMobs.

# Resumen de Características de EliteMobs

En esta sección echaremos un vistazo a algunas de las características **principales** que EliteMobs tiene para ofrecer, qué son y cómo puedes deshabilitarlas. Para ver una lista completa de características, consulta [esta página]($language$/elitemobs/feature_list.md&section=feature-list).

También puedes consultar [esta página]($language$/elitemobs/understanding_the_basics_of_elitemobs.md) para encontrar la forma prevista en que los jugadores deben interactuar con EliteMobs.

## Jefes Dinámicos

Los Jefes Dinámicos son una de las características principales de EliteMobs. Reemplaza un porcentaje de las apariciones vanilla de Minecraft con apariciones de Mobs de Élite.

Los Élite son mobs más duros diseñados para desafiar a los jugadores y recompensarlos con posibles botines al ser derrotados. El nivel de los Élite está determinado por la calidad de la armadura y el equipo que lleva el jugador. El equipo normal de Minecraft tiene un nivel determinado por la calidad del material, como se explica [aquí]($language$/elitemobs/spawning_tiers_loot.md&section=material-levels). Sin embargo, a medida que los jugadores derrotan a los Élite y adquieren mejor botín, eventualmente comenzarán a obtener objetos de Élite con niveles establecidos, lo que facilita la predicción de los niveles de los Élite que aparecerán.

Esto implica que los niveles de los jugadores están determinados por el equipo que llevan, mientras que los niveles de los Élite están determinados por los niveles de los jugadores.
No hay un sistema de experiencia en EliteMobs, toda la progresión de nivel del jugador depende del equipo.

Puedes ajustar la dificultad de los élite modificando los valores `damageToEliteMobMultiplierV2` y `damageToPlayerMultiplierV2` en *MobCombatSettings.yml*. Puedes encontrar más información sobre esto [aquí]($language$/elitemobs/elitemobs_config_settings.md&section=mobcombatsettings.yml).

Si deseas deshabilitar esta característica por completo, puedes hacerlo estableciendo el valor `doNaturalEliteMobSpawning` en `false`.

<div align="center">

<details>

<summary><b>Ejemplo Visual</b></summary>

![eminfo_dynamic_boss.jpg](../../../img/wiki/eminfo_dynamic_boss.jpg)

</details>

</div>

## Objetos/Botín de Élite

EliteMobs presenta objetos generados aleatoriamente que se pueden encontrar en tiendas o ser soltados por los Élite. También hay objetos personalizados que se suelen encontrar en mazmorras y otro contenido de Élite.

Los objetos de Élite son como los objetos vanilla, excepto que suelen estar equipados con extras y son más poderosos que cualquier cosa que puedas encontrar en Minecraft vanilla. Algunos objetos de Élite tendrán estadísticas llamadas **Filo de Élite** y **Defensa de Élite**, estas estadísticas solo se aplicarán cuando los jugadores luchen contra Élite y no afectarán a los mobs vanilla.

Los objetos de Élite también pueden tener encantamientos, [Encantamientos Personalizados]($language$/elitemobs/custom_enchantments_list.md) y efectos de poción.

Puedes deshabilitar los objetos de Élite abriendo *ItemSettings.yml* y estableciendo el valor `doEliteMobsLoot` en `false`. (No recomendado, hace imposible la progresión de nivel tipo MMORPG.)

<div align="center">

<details>

<summary><b>Ejemplo Visual</b></summary>

![eminfo_elite_items.jpg](../../../img/wiki/eminfo_elite_items.jpg)

</details>

</div>

## Eventos

Los Eventos son encuentros únicos en EliteMobs que pueden activarse aleatoriamente según un temporizador o por acciones específicas del jugador, como minar un bloque o talar un árbol.

Estos encuentros presentan Élite personalizados y únicos que plantean un desafío mayor y ofrecen botín valioso al ser derrotados.

Los jugadores reciben notificaciones en el chat cuando ocurre un evento, con la opción de rastrear la salud y ubicación del Élite a través de un enlace clickeable. Si el Élite no es derrotado dentro de un cierto plazo, el evento termina y el Élite desaparece.

Puedes deshabilitar todos los eventos abriendo events.yml y estableciendo los valores `actionEventsEnabled` y `timedEventsEnabled` en `false`.

Si deseas deshabilitar eventos individuales, puedes ir a *~plugins\EliteMobs\customevents*. Allí encontrarás configuraciones para cada evento y podrás deshabilitar cualquier evento abriendo su configuración y estableciendo el valor `isEnabled` en `false`.

<div align="center">

<details>

<summary><b>Ejemplo Visual</b></summary>

![eminfo_event_boss.jpg](../../../img/wiki/eminfo_event_boss.jpg)

</details>

</div>

## Gremio de Aventureros

El Gremio de Aventureros es un mundo central adicional que puedes instalar y también es un conjunto de comandos que los jugadores pueden usar.

Si el mundo central no está instalado, los jugadores tendrán que usar comandos; de lo contrario, ejecutar comandos con el mundo central instalado teletransportará a los jugadores al mundo central y allí podrán interactuar con NPCs en lugar de tener que escribir comandos.

¿Qué comandos? EliteMobs tiene varios comandos que los jugadores pueden usar para vender y comprar objetos, reparar objetos, encantar objetos y más. Aprende más sobre qué comandos pueden usar los jugadores [aquí]($language$/elitemobs/permissions_and_commands.md&section=npc-commands).

Para más información sobre el Gremio de Aventureros y cómo instalar el mundo central, consulta [esta página]($language$/elitemobs/adventurers_guild_world.md).

Puedes deshabilitar el mundo central abriendo *AdventurersGuild.yml* y estableciendo `guildHubIsEnabledv2` en `false`.

<div align="center">

<details>

<summary><b>Ejemplo Visual</b></summary>

![eminfo_ag.jpg](../../../img/wiki/eminfo_ag.jpg)

</details>

</div>

## Nivel/Rango de Gremio

A medida que los jugadores progresan y adquieren mejores objetos, eventualmente alcanzarán un límite y los mobs dejarán de soltar objetos de nivel superior; esto se llama el limitador de botín por nivel de gremio.

El limitador de botín por nivel de gremio restringe el botín más alto que los jugadores pueden obtener según su nivel de gremio y aplica limitaciones predeterminadas desde objetos de nivel 1 hasta nivel 10, con niveles de mob correspondientes. Los niveles de prestigio desbloquean niveles superiores, permitiendo acceso a botín superior y mobs más duros, asegurando un juego equilibrado.

Este sistema, combinado con el encantamiento de vínculo de alma (soulbind), mitiga los problemas de powerleveling, mantiene el equilibrio del servidor y fomenta el apego del jugador a su botín adquirido. Puedes leer más sobre el nivel de gremio [aquí]($language$/elitemobs/guild_tier_loot_limiter.md).

Todas las configuraciones para el Nivel de Gremio se pueden ajustar y se encuentran en *AdventurersGuild.yml*.

<div align="center">

<details>

<summary><b>Ejemplo Visual</b></summary>

![eminfo_guild_tier.jpg](../../../img/wiki/eminfo_guild_tier.jpg)

</details>

</div>

## Arenas

Las Arenas son desafíos basados en oleadas donde los jugadores pueden participar en combate. Uno o varios jugadores pueden unirse a una arena y enfrentarse a oleadas de enemigos cada vez más difíciles, con recompensas que mejoran a medida que avanza el desafío.

Al instalar el mundo central del Gremio de Aventureros, los jugadores obtienen acceso a la Arena de la Liga de Madera, una arena gratuita accesible mediante la interacción con un NPC en el mundo central o a través del menú */em*.

Puedes obtener arenas adicionales visitando: [Itch.io](https://magmaguy.itch.io/) o suscribiéndote en [Patreon](https://www.patreon.com/magmaguy).

Puedes deshabilitar arenas yendo a *~plugins\EliteMobs\customarenas* y luego abriendo la configuración de la arena, por ejemplo *wood_league.yml*, y encontrando el valor `isEnabled` y estableciéndolo en `false`.

<div align="center">

<details>

<summary><b>Ejemplo Visual</b></summary>

![eminfo_arena.jpg](../../../img/wiki/eminfo_arena.jpg)

</details>

</div>

## Mazmorras de Mundo

Las Mazmorras de Mundo son contenido personalizado adicional que puedes descargar para EliteMobs. Las mazmorras suelen tener jefes Élite personalizados, mundos personalizados, botín personalizado y poderes de jefe personalizados.

Todas las mazmorras de mundo son mazmorras que se encuentran en su propio mundo, lo que significa que cuando los jugadores acceden a ellas, son teletransportados a un mundo que no contiene nada más que esa mazmorra.

Hay varios tipos de mazmorras de mundo; para aprender más sobre los tipos, haz clic [aquí]($language$/elitemobs/dungeon_packager.md&section=dungeonsizecategory).

Todas las mazmorras de mundo tienen un nivel establecido y cualquier jugador que intente las mazmorras debería estar alrededor de ese nivel para la mejor experiencia.

Puedes obtener mazmorras visitando: [Itch.io](https://magmaguy.itch.io/) o suscribiéndote en [Patreon](https://www.patreon.com/magmaguy). Hay varias mazmorras gratuitas que puedes descargar desde [aquí](https://magmaguy.itch.io/em-free-content).

Puedes deshabilitar mazmorras individuales yendo a *~plugins\EliteMobs\content_packages* y abriendo la configuración de la mazmorra que deseas deshabilitar y estableciendo el valor `isEnabled` en `false`.

<div align="center">

<details>

<summary><b>Ejemplo Visual</b></summary>

![eminfo_world_dungeon.jpg](../../../img/wiki/eminfo_world_dungeon.jpg)

</details>

</div>

## Mazmorras Instanciadas

Las Mazmorras Instanciadas difieren de las Mazmorras de Mundo en varios aspectos. Son instanciadas, lo que significa que se crea dinámicamente un nuevo mundo a partir de un plano, proporcionando a los jugadores y a sus amigos una experiencia de mazmorra privada similar a las que se encuentran en los MMOs.

Las Mazmorras Instanciadas ofrecen varias dificultades con poderes de jefe únicos, salud aumentada y botín superior a medida que aumenta la dificultad. También introducen roles, permitiendo a los jugadores adoptar roles de tanque o DPS según su equipo (el equipo específico de rol es exclusivo de las Mazmorras Instanciadas). Lee más sobre cómo funciona la dificultad [aquí]($language$/elitemobs/instanced_dungeon_difficulty.md).

Además, los jugadores pueden resucitarse mutuamente dentro de las Mazmorras Instanciadas, permitiéndoles reanudar rápidamente la batalla si actúan lo suficientemente rápido.

Puedes obtener mazmorras instanciadas visitando: [Itch.io](https://magmaguy.itch.io/) o suscribiéndote en [Patreon](https://www.patreon.com/magmaguy). Hay mazmorras instanciadas gratuitas que puedes descargar desde [aquí](https://magmaguy.itch.io/em-free-content).

Puedes deshabilitar mazmorras individuales yendo a *~plugins\EliteMobs\dungeonpackages* y abriendo la configuración de la mazmorra que deseas deshabilitar y estableciendo el valor `isEnabled` en `false`.

<div align="center">

<details>

<summary><b>Ejemplo Visual</b></summary>

![eminfo_instanced_dungeon.jpg](../../../img/wiki/eminfo_instanced_dungeon.jpg)

</details>

</div>

## Aventuras

Las Aventuras representan el contenido adicional más extenso disponible para EliteMobs, con un vasto mundo completo con una cautivadora historia y una multitud de misiones para que los jugadores emprendan.

Con cientos de jefes, poderes y objetos personalizados, las Aventuras ofrecen una experiencia de juego inmersiva. Las misiones dentro de las Aventuras funcionan de manera similar a las de los MMOs tradicionales, asignando a los jugadores objetivos como derrotar mobs, localizar objetos, interactuar con NPCs, o cualquier combinación de estos.

Las Aventuras son tan grandes que incluso tienen otras sub-mazmorras o sub-arenas ubicadas dentro.

Aunque las Aventuras suelen recomendar un rango de nivel establecido para los jugadores, se aconseja que los jugadores comiencen su aventura en el extremo inferior de la escala de niveles para un disfrute óptimo.

Puedes obtener aventuras visitando: [Itch.io](https://magmaguy.itch.io/) o suscribiéndote en [Patreon](https://www.patreon.com/magmaguy).

Puedes deshabilitar aventuras individuales yendo a *~plugins\EliteMobs\dungeonpackages* y abriendo la configuración de la aventura que deseas deshabilitar y estableciendo el valor `isEnabled` en `false`. Las Aventuras pueden tener sub-mazmorras y sub-arenas adicionales que vienen con ellas, así que asegúrate de deshabilitarlas también si estás deshabilitando una aventura.

<div align="center">

<details>

<summary><b>Ejemplo Visual</b></summary>

![eminfo_adventure.jpg](../../../img/wiki/eminfo_adventure.jpg)

</details>

</div>

## Teletransportadores de Agujero de Gusano

EliteMobs también presenta teletransportadores simples de A a B llamados agujeros de gusano. Los verás usados principalmente en el mundo central del Gremio de Aventureros como una forma de teletransportar a los jugadores desde allí a una mazmorra o de regreso al punto de aparición del servidor.

Suelen tener la forma de un hexágono, cubo o diamante hecho de partículas. Estas partículas a veces pueden causar lag a los clientes de Bedrock, por lo que es posible que quieras deshabilitar los efectos de partículas abriendo *Wormholes.yml* y estableciendo `noParticlesMode` en `true`.

Puedes crear tus propios agujeros de gusano y usarlos como desees. Haz clic [aquí]($language$/elitemobs/creating_wormholes.md) para saber cómo.

<div align="center">

<details>

<summary><b>Ejemplo Visual</b></summary>

![eminfo_wormhole.jpg](../../../img/wiki/eminfo_wormhole.jpg)

</details>

</div>

## Contenido Personalizado

EliteMobs también te ofrece la oportunidad de crear tu propio contenido, incluyendo [jefes]($language$/elitemobs/creating_bosses.md), [mazmorras]($language$/elitemobs/dungeon_packager.md), [poderes]($language$/elitemobs/creating_powers.md), [NPCs]($language$/elitemobs/creating_npcs.md), [misiones]($language$/elitemobs/creating_quests.md), [arenas]($language$/elitemobs/creating_arenas.md), ¡y mucho más! Puedes encontrar guías para crear otros tipos de contenido además de los mencionados anteriormente en el menú lateral de la wiki.

Para la experiencia de creación de contenido más fácil y eficiente, recomendamos usar la WebApp. Esta herramienta te permite generar archivos de configuración listos para usar sin necesidad de navegar extensamente por la wiki para asegurar la corrección, particularmente si estás considerando crear poderes de jefe con EliteScript. Accede a la [WebApp aquí](https://magmaguy.com/webapp/webapp.html).

# Para Administradores y Dueños de Servidores

Este plugin está diseñado para servidores de supervivencia y similares (como Skyblock, Skywars y variantes de supervivencia con muchas modificaciones).

El plugin está diseñado para ser fácil de usar simplemente arrastrando y soltando el archivo .jar del plugin en el servidor. La configuración predeterminada es la que uso en mis propios servidores y está sujeta a cambios con el tiempo.

**¡Sin embargo!** La personalización ha sido una prioridad principal durante todo el proceso de desarrollo de EliteMobs.
Casi todos los aspectos del plugin pueden ser traducidos, personalizados, deshabilitados o modificados.

# Para otros desarrolladores

A pesar de la naturaleza GPLV3 y de código abierto de este proyecto, no estoy buscando ni aceptaré adiciones o cambios de código en este momento. Doy la bienvenida a las bifurcaciones (forks) del plugin, y me daría un inmenso placer ver lo que podrías hacer con ellas; sin embargo, este es mi primer proyecto de programación masivo y, como tal, también es una experiencia de aprendizaje.

**¡Sin embargo!** No tomes esto como si afirmara que estoy más allá de cualquier crítica o que no escucharé comentarios; todo lo contrario, me encanta cuando la gente señala mejores formas de lograr cosas que he hecho en el plugin. Deseo que este proyecto sea algo que escribí de principio a fin, sin fragmentos de código de los que no sea consciente o que no entienda.