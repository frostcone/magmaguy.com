¡Bienvenido a la wiki de EliteMobs!

# Licencia

El código fuente de EliteMobs está cubierto bajo la licencia [GPLV3](https://choosealicense.com/licenses/gpl-3.0/), y esta wiki se proporciona con la licencia [CC0](https://choosealicense.com/licenses/cc0-1.0/).

Siéntete libre de redistribuir y modificar la información en esta wiki.

# ¿Para qué sirve EliteMobs?

EliteMobs tiene como objetivo extender el final del juego de Minecraft implementando varios contenidos relacionados con los jefes.

Esto significa:
- Jefes Dinámicos (Mobs Nivelado)
- Jefes Personalizados
- Eventos
- Arenas
- Mazmorras basadas en el mundo
- Mazmorras instanciadas
- Mazmorras aleatorias de mundo abierto (con integración de BetterStructures)
- Items personalizados (Items / Botín Elite)
- ... ¡y más!

El plugin no tiene como objetivo reemplazar el contenido de Minecraft, sino complementarlo, permitiendo a los jugadores optar por no usar el contenido de EliteMobs si lo desean. Los artículos EliteMobs normalmente no afectan el PvP o el combate de Minecraft, ya que sus bonificaciones de daño y defensa solo se aplican durante el combate con EliteMobs.

# Resumen de las características de EliteMobs

En esta sección vamos a echar un vistazo a algunas de las características **principales** que ofrece EliteMobs, qué son y cómo puedes desactivarlas. Para ver la lista completa de características consulta [esta página]($language$/elitemobs/feature_list.md&section=feature-list).

También puedes consultar [esta]($language$/elitemobs/understanding_the_basics_of_elitemobs.md) página para saber cómo se espera que los jugadores interactúen con EliteMobs.

## Jefes Dinámicos

Los Jefes Dinámicos son una de las características principales de EliteMobs. Reemplaza un porcentaje de los spawns de Minecraft con spawns de Elite Mob.

Los elites son mobs más fuertes diseñados para desafiar a los jugadores y recompensarlos con posibles drops de loot al derrotarlos. El nivel de los elites se determina por la calidad del equipo y la armadura equipada por el jugador. El equipo normal de Minecraft tiene un nivel determinado por la calidad del material, como se explica [aquí]($language$/elitemobs/spawning_tiers_loot.md&section=material-levels). Sin embargo, a medida que los jugadores derrotan a los elites y obtienen mejor botín, eventualmente comenzarán obteniendo artículos de elite con niveles establecidos, lo que facilita la predicción de los niveles de Elites que aparecerán.

Esto implica que los niveles de los jugadores se determinan por el equipo que usan, mientras que los niveles de Elite se determinan por los niveles de los jugadores.
No existe un sistema de experiencia en EliteMobs, toda la progresión del nivel del jugador depende del equipo.

Puedes ajustar la dificultad de los elites modificando los valores `damageToEliteMobMultiplierV2` y `damageToPlayerMultiplierV2` en *MobCombatSettings.yml*. Puedes encontrar más información sobre esto [aquí]($language$/elitemobs/elitemobs_config_settings.md&section=mobcombatsettings.yml).

Si deseas desactivar esta función por completo, puedes hacerlo estableciendo el valor `doNaturalEliteMobSpawning` en `false`.

<div align="center">

<details> 

<summary><b>Ejemplo Visual</b></summary>

![eminfo_dynamic_boss.jpg](../../../img/wiki/eminfo_dynamic_boss.jpg)

</details>

</div>

## Artículos / Botín de Elite

EliteMobs cuenta con objetos generados aleatoriamente que puedes encontrar en tiendas o ser dropeados por elites. También hay elementos personalizados que generalmente se encuentran en mazmorras y otros contenidos de elite.

Los objetos de elite son como los objetos de la versión base, excepto que normalmente están equipados con extras y son más poderosos que cualquier cosa que puedas encontrar en MineCraft. Algunos objetos de elite tendrán estadísticas en ellos que se llaman **Elite Sharpness** y **Elite Defense**, estas estadísticas solo se aplicarán cuando los jugadores están luchando contra los elites y no afectan a los mobs de la versión base.

Los objetos de Elite también pueden tener encantamientos, [encantamientos personalizados]($language$/elitemobs/custom_enchantments_list.md) y efectos de poción.

Puedes deshabilitar los objetos de elite abriendo *ItemSettings.yml* y estableciendo el valor `doEliteMobsLoot` en `false`. (No recomendado, hace que la progresión a nivel MMORPG sea imposible.)

<div align="center">

<details> 

<summary><b>Ejemplo visual</b></summary>

![eminfo_elite_items.jpg](../../../img/wiki/eminfo_elite_items.jpg)

</details>

</div>

## Eventos

Los eventos son encuentros únicos en EliteMobs que pueden desencadenarse aleatoriamente en base a un temporizador o por acciones específicas de los jugadores, como minar un bloque o cortar un árbol.

Estos encuentros presentan elites personalizados y únicos que presentan un mayor desafío y ofrecen botín valioso al ser derrotados.

Los jugadores reciben notificaciones en el chat cuando ocurre un evento, con la opción de rastrear la salud y ubicación del Elite a través de un enlace en el que se puede hacer clic. Si el Elite no es derrotado dentro de un tiempo determinado, el evento termina y el Elite desaparece.

Puedes deshabilitar todos los eventos abriendo events.yml y estableciendo los valores actionEventsEnabled y timedEventsEnabled en false.

Si deseas desactivar eventos individuales, puedes ir a ~ plugins \ EliteMobs \ customevents. Allí encontrarás configuraciones para cada evento y podrás deshabilitar cualquier evento abriendo su configuración y estableciendo el valor isEnabled en false.

<div align="center">

<details> 

<summary><b>Ejemplo Visual</b></summary>

![eminfo_event_boss.jpg](../../../img/wiki/eminfo_event_boss.jpg)

</details>

</div>

## Gremio de Aventureros

El Gremio de Aventureros es un mundo adicional que puedes instalar y también es un conjunto de comandos que los jugadores pueden usar.

Si el mundo del centro no está instalado, entonces los jugadores tendrán que usar comandos, de lo contrario, al ejecutar comandos con el mundo del centro instalado se teletransportará a los jugadores al mundo del centro y allí podrán interactuar con los NPC en lugar de tener que escribir comandos.

¿Qué comandos? EliteMobs tiene varios comandos que los jugadores pueden usar para vender y comprar objetos, reparar objetos, encantar objetos y más. Obtén más información acerca de qué comandos pueden usar los jugadores [aquí]($language$/elitemobs/permissions_and_commands.md&section=npc-commands).

Para obtener más información sobre el Gremio de Aventureros y cómo instalar el mundo del centro, consulta [esta]($language$/elitemobs/adventurers_guild_world.md) página.

Puedes deshabilitar el mundo del centro abriendo *AdventurersGuild.yml* y estableciendo el `guildHubIsEnabledv2` a `false`.

<div align="center">

<details> 

<summary><b>Ejemplo Visual</b></summary>

![eminfo_ag.jpg](../../../img/wiki/eminfo_ag.jpg)

</details>

</div>

## Rango/Tier de Gremio

A medida que los jugadores progresan y adquieren mejores objetos, eventualmente alcanzarán un límite y los mobs dejarán de soltar objetos de nivel superior, esto se llama gremio tier loot limiter.

El gremio tier loot limiter restringe el botín más alto que los jugadores pueden obtener basándose en su tier de gremio y aplica limitaciones predeterminadas de tier 1 a tier 10, con niveles de mobs correspondientes. Los niveles de prestigio desbloquean tiers más altos, permitiendo el acceso a botín superior y mobs más difíciles, garantizando un juego equilibrado.

Este sistema, combinado con el encantamiento soulbind, mitiga los problemas de powerleveling, mantiene el equilibrio del servidor y fomenta el apego del jugador a su botín adquirido. Puedes leer más sobre gremio tier [aquí]($language$/elitemobs/guild_tier_loot_limiter.md).

Todos los ajustes para el Gremio Tier se pueden ajustar y se encuentran en *AdventurersGuild.yml*.

<div align="center">

<details> 

<summary><b>Ejemplo Visual</b></summary>

![eminfo_guild_tier.jpg](../../../img/wiki/eminfo_guild_tier.jpg)

</details>

</div>

## Arenas

Las Arenas son desafíos basados en olas donde los jugadores pueden participar en combate. Uno o varios jugadores pueden unirse a una arena y enfrentar olas de enemigos cada vez más difíciles, con recompensas que mejoran a medida que avanza el desafío.

Al instalar el mundo del Gremio de Aventureros, los jugadores tienen acceso a la Wood League Arena, una arena gratuita a la que se puede acceder interactuando con un NPC en el Gremio de Aventureros o a través del menú */em*.

Puedes obtener arenas adicionales yendo a: [Itch.io](https://magmaguy.itch.io/) o suscribiéndote en [Patreon](https://www.patreon.com/magmaguy).

Puedes deshabilitar las arenas yendo a *~plugins\EliteMobs\customarenas* y luego abriendo la configuración de la arena, por ejemplo *wood_league.yml* y luego buscando el valor `isEnabled` y estableciéndolo en `false`.

<div align="center">

<details> 

<summary><b>Ejemplo Visual</b></summary>

![eminfo_arena.jpg](../../../img/wiki/eminfo_arena.jpg)

</details>

</div>

## Mazmorras del Mundo

Las Mazmorras del Mundo son contenido personalizado adicional que puedes descargar para EliteMobs. Las mazmorras generalmente tienen jefes Elite personalizados, mundos personalizados, botín personalizado y poderes de jefes personalizados.

Todas las mazmorras del mundo son mazmorras que están ubicadas en su propio mundo, lo que significa que cuando los jugadores las acceden son teletransportados a un mundo que no tiene nada en él más que esa mazmorra.

Existen varios tipos de mazmorras del mundo, para saber más acerca de los tipos haz click [aquí]($language$/elitemobs/dungeon_packager.md&section=dungeonsizecategory).

Todas las mazmorras del mundo tienen un nivel establecido y cualquier jugador que intente las mazmorras debería estar alrededor de ese nivel para una mejor experiencia.

Puedes obtener mazmorras yendo a: [Itch.io](https://magmaguy.itch.io/) o suscribiéndote en [Patreon](https://www.patreon.com/magmaguy). Hay varias mazmorras gratuitas que puedes descargar desde [aquí](https://magmaguy.itch.io/em-free-content).

Puedes deshabilitar mazmorras individuales yendo a *~plugins\EliteMobs\dungeonpackages* y abriendo la configuración de la mazmorra para la mazmorra que deseas deshabilitar y estableciendo el valor `isEnabled` en `false`.

<div align="center">

<details> 

<summary><b>Ejemplo Visual</b></summary>

![eminfo_world_dungeon.jpg](../../../img/wiki/eminfo_world_dungeon.jpg)

</details>

</div>

## Mazmorras Instanciadas

Las Mazmorras Instanciadas difieren de las Mazmorras del Mundo en varios aspectos. Son instanciadas, lo que significa que se crea dinámicamente un nuevo mundo a partir de un borrador, proporcionando a los jugadores y sus amigos una experiencia de mazmorra privada similar a las que se encuentran en los MMO.

Las Mazmorras Instanciadas ofrecen varias dificultades con poderes de jefes únicos, mayor salud y botín superior a medida que la dificultad aumenta. También introducen roles, permitiendo a los jugadores adoptar roles de tanque o DPS según su equipo equipado (el equipo específico del rol es exclusivo de las Mazmorras Instanciadas). Lee más sobre cómo funciona la dificultad [aquí]($language$/elitemobs/instanced_dungeon_difficulty.md).

Además, los jugadores pueden resucitarse entre sí dentro de las Mazmorras Instanciadas, lo que les permite reanudar rápidamente la batalla si actúan lo suficientemente rápido.

Puedes obtener mazmorras instanciadas yendo a: [Itch.io](https://magmaguy.itch.io/) o suscribiéndote en [Patreon](https://www.patreon.com/magmaguy). Hay mazmorras instanciadas gratuitas que puedes descargar desde [aquí](https://magmaguy.itch.io/em-free-content).

Puedes deshabilitar mazmorras individuales yendo a *~plugins\EliteMobs\dungeonpackages* y abriendo la configuración de la mazmorra para la mazmorra que deseas deshabilitar y estableciendo el valor `isEnabled` en `false`.

<div align="center">

<details> 

<summary><b>Ejemplo Visual</b></summary>

![eminfo_instanced_dungeon.jpg](../../../img/wiki/eminfo_instanced_dungeon.jpg)

</details>

</div>

## Aventuras

Las Aventuras representan el contenido adicional más expansivo disponible para EliteMobs, con un vasto mundo completo con una cautivadora historia y una multitud de misiones para que los jugadores se embarquen.

Con cientos de jefes personalizados, poderes y objetos, las Aventuras ofrecen una experiencia de juego inmersiva. Las misiones dentro de las Aventuras funcionan de manera similar a las de los MMOs tradicionales, asignando a los jugadores objetivos como derrotar a los mobs, buscar objetos, interactuar con los NPC, o cualquier combinación de estos.

Las Aventuras son tan grandes que incluso tienen otras sub-mazmorras o sub-arenas ubicadas dentro.

Mientras que las aventuras típicamente recomiendan un rango de niveles establecido para los jugadores, se recomienda que los jugadores comiencen su aventura en el extremo inferior de la escala de niveles para un disfrute óptimo.

Puedes obtener aventuras yendo a: [Itch.io](https://magmaguy.itch.io/) o suscribiéndote en [Patreon](https://www.patreon.com/magmaguy).

Puedes desactivar aventuras individuales yendo a *~plugins\EliteMobs\dungeonpackages* y abriendo la configuración para la aventura que deseas desactivar y estableciendo el valor `isEnabled` en `false`. Las Aventuras pueden tener sub-mazmorras y sub-arenas adicionales que vienen con aventuras, así que asegúrate de también deshabilitar esas si estás deshabilitando una aventura.

<div align="center">

<details> 

<summary><b>Ejemplo Visual</b></summary>

![eminfo_adventure.jpg](../../../img/wiki/eminfo_adventure.jpg)

</details>

</div>

## Wormhole Teleports

EliteMobs también presenta teletransportadores simples de A a B llamados agujeros de gusano. Verás que estos se utilizan principalmente en el mundo del centro de la Hermandad de los aventureros como una forma de teletransportar a los jugadores desde allí a una mazmorra o de regreso al inicio del servidor.

Por lo general, están en forma de un hexágono, cubo o un diamante hecho de partículas. Estas partículas a veces pueden causar retrasos a los clientes de bedrock, por lo que es posible que desee desactivar los efectos de partículas abriendo *Wormholes.yml* y estableciendo `noParticlesMode` en `true`.

Puedes hacer tus propios agujeros de gusano y usarlos como quieras. Haz clic [aquí]($language$/elitemobs/creating_wormholes.md) para averiguar cómo.

<div align="center">

<details> 

<summary><b>Ejemplo visual</b></summary>

![eminfo_wormhole.jpg](../../../img/wiki/eminfo_wormhole.jpg)

</details>

</div>

## Contenido personalizado

EliteMobs también te ofrece la oportunidad de crear tu propio contenido, incluyendo [jefes]($language$/elitemobs/creating_bosses.md), [mazmorras]($language$/elitemobs/dungeon_packager.md), [poderes]($language$/elitemobs/creating_powers.md), [NPCs]($language$/elitemobs/creating_npcs.md), [misiones]($language$/elitemobs/creating_quests.md), [arenas]($language$/elitemobs/creating_arenas.md), ¡y mucho más! Puedes encontrar guías para crear otros tipos de contenido que no sean los mencionados anteriormente en el menú lateral de la wiki.

Para la experiencia de creación de contenido más fácil y eficiente, recomendamos usar la WebApp. Esta herramienta te permite generar archivos de configuración listos para usar sin la necesidad de explorar ampliamente la wiki para asegurar la corrección, particularmente si estás considerando crear poderes de jefes EliteScript. Accede a la [WebApp aquí](https://magmaguy.com/webapp/webapp.html).

# Para administradores y propietarios de servidores

Este plugin está diseñado para servidores de supervivencia y variantes de supervivencia (como Skyblock, Skywars y variantes de supervivencia muy modificadas).

El plugin está destinado a ser fácilmente utilizable simplemente arrastrando y soltando el jar del plugin en el servidor. Los ajustes predeterminados son los que uso en mis propios servidores y están sujetos a cambios con el tiempo.

**¡Sin embargo!** La personalización ha sido una prioridad máxima durante todo el proceso de desarrollo de EliteMobs. Casi cada aspecto del complemento se puede traducir, personalizar, deshabilitar o modificar.


# Para otros desarrolladores

A pesar de la naturaleza GPLV3 y de código abierto de este proyecto, ni estoy buscando ni aceptaré ninguna adición o cambio de código en este momento. Agradezco las bifurcaciones del plugin y tendría un inmenso placer en ver lo que podrías hacer con ellas; sin embargo, este es mi primer proyecto de programación masiva y como tal también es una experiencia de aprendizaje.

**¡Sin embargo!** No tomes esto como si estuviera afirmando que estoy más allá de cualquier crítica o que no escucharé las sugerencias, todo lo contrario, me encanta cuando la gente señala mejores maneras de lograr cosas que he hecho en el plugin. Deseo que este proyecto sea algo que escribí de principio a fin, sin fragmentos de código de los que no esté consciente o que no entienda.