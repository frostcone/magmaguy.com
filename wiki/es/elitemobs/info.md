¡Bienvenido a la wiki de EliteMobs!

# Licencia

El código fuente de EliteMobs está cubierto por la licencia [GPLV3](https://choosealicense.com/licenses/gpl-3.0/), y esta wiki se proporciona con la [licencia CC0](https://choosealicense.com/licenses/cc0-1.0/).

Siéntete libre de redistribuir y modificar la información de esta wiki.

# Versiones

A partir de la versión 9.0.0 de EliteMobs, la única versión compatible de Minecraft es la 1.21 y superiores.

Para aquellos que buscan compatibilidad con versiones anteriores de Minecraft (1.19.4 - 1.20.4), utilicen la versión 8 de EliteMobs.

**Nota: Ninguna versión de EliteMobs es compatible con las versiones de Minecraft 1.20.5 y 1.20.6.**

# ¿Para qué sirve EliteMobs?

EliteMobs tiene como objetivo extender el final del juego de Minecraft implementando varios contenidos relacionados con jefes.

Esto significa:
- Jefes dinámicos (turbas niveladas)
- Jefes personalizados
- Eventos
- Arenas
- Mazmorras basadas en el mundo
- Mazmorras instanciadas
- Mazmorras aleatorias de mundo abierto (con integración de BetterStructures)
- Objetos personalizados (objetos/botín de élite)
- ... ¡y más!

El complemento no pretende reemplazar el contenido de Minecraft vainilla, sino complementarlo, permitiendo a los jugadores optar por no participar en el contenido de EliteMobs si lo desean. Los objetos de EliteMobs generalmente no afectan el combate PvP o de Minecraft vainilla, ya que sus bonificaciones de daño y defensa solo se aplican durante el combate con EliteMobs.

# Descripción general de las características de EliteMobs

En esta sección, echaremos un vistazo a algunas de las características **principales** que EliteMobs tiene para ofrecer, qué son y cómo puedes desactivarlas. Para obtener una lista completa de características, consulta [esta página]($language$/elitemobs/feature_list.md&section=feature-list).

También puedes consultar [esta]($language$/elitemobs/understanding_the_basics_of_elitemobs.md) página para encontrar la forma prevista en que se supone que los jugadores deben interactuar con EliteMobs.

## Jefes dinámicos

Jefes dinámicos es una de las principales características de EliteMobs. Reemplaza un porcentaje de generaciones de vainilla de Minecraft con generaciones de turbas de élite.

Las élites son turbas más duras diseñadas para desafiar a los jugadores y recompensarlos con posibles botines al derrotarlos. El nivel de las élites está determinado por la calidad de la armadura y el equipo equipados por el jugador. El equipo normal de Minecraft tiene un nivel determinado por la calidad del material, como se explica [aquí]($language$/elitemobs/spawning_tiers_loot.md&section=material-levels). Sin embargo, a medida que los jugadores derroten a las élites y adquieran un mejor botín, eventualmente comenzarán a obtener objetos de élite con niveles establecidos, lo que facilitará la predicción de los niveles de las élites que se generarán.

Esto implica que los niveles de los jugadores están determinados por el equipo que llevan, mientras que los niveles de élite están determinados por los niveles de los jugadores.
No hay un sistema de experiencia en EliteMobs, toda la progresión de nivel del jugador depende del equipo.

Puedes ajustar la dificultad de las élites modificando los valores `damageToEliteMobMultiplierV2` y `damageToPlayerMultiplierV2` en *MobCombatSettings.yml*. Puedes encontrar más información al respecto [aquí]($language$/elitemobs/elitemobs_config_settings.md&section=mobcombatsettings.yml).

Si deseas desactivar esta función por completo, puedes hacerlo estableciendo el valor `doNaturalEliteMobSpawning` en `false`.

<div align="center">

<details> 

<summary><b>Ejemplo visual</b></summary>

![eminfo_dynamic_boss.jpg](../../../img/wiki/eminfo_dynamic_boss.jpg)

</details>

</div>

## Objetos/botín de élite

EliteMobs presenta objetos generados aleatoriamente que se pueden encontrar en tiendas o ser soltados por élites. También hay objetos personalizados que generalmente se encuentran en mazmorras y otro contenido de élite.

Los objetos de élite son como los objetos de vainilla, excepto que generalmente están equipados con extras y son más poderosos que cualquier cosa que puedas encontrar en MineCraft vainilla. Algunos objetos de élite tendrán estadísticas en ellos que se llaman **Nitidez de élite** y **Defensa de élite**, estas estadísticas solo se aplicarán cuando los jugadores estén luchando contra élites y no afecten a las turbas de vainilla.

Los objetos de élite también pueden tener encantamientos, [encantamientos personalizados]($language$/elitemobs/custom_enchantments_list.md) y efectos de poción.

Puedes desactivar los objetos de élite abriendo *ItemSettings.yml* y estableciendo el valor `doEliteMobsLoot` en `false`. (No recomendado, hace que la progresión de nivel MMORPG sea imposible).

<div align="center">

<details> 

<summary><b>Ejemplo visual</b></summary>

![eminfo_elite_items.jpg](../../../img/wiki/eminfo_elite_items.jpg)

</details>

</div>

## Eventos

Los eventos son encuentros únicos en EliteMobs que pueden desencadenarse aleatoriamente en función de un temporizador o mediante acciones específicas del jugador, como minar un bloque o talar un árbol.

Estos encuentros presentan élites personalizadas y únicas que representan un mayor desafío y ofrecen un valioso botín al derrotarlas.

Los jugadores reciben notificaciones en el chat cuando ocurre un evento, con la opción de rastrear la salud y la ubicación de la élite a través de un enlace en el que se puede hacer clic. Si la élite no es derrotada dentro de un cierto período de tiempo, el evento termina y la élite desaparece.

Puedes desactivar todos los eventos abriendo events.yml y estableciendo los valores actionEventsEnabled y timedEventsEnabled en falso.

Si deseas desactivar eventos individuales, puedes ir a ~plugins\EliteMobs\customevents. Allí encontrarás configuraciones para cada evento y puedes desactivar cualquier evento abriendo su configuración y estableciendo el valor isEnabled en falso.

<div align="center">

<details> 

<summary><b>Ejemplo visual</b></summary>

![eminfo_event_boss.jpg](../../../img/wiki/eminfo_event_boss.jpg)

</details>

</div>

## Gremio de aventureros

El Gremio de aventureros es un mundo central adicional que puedes instalar y también es un conjunto de comandos que los jugadores pueden usar.

Si el mundo central no está instalado, los jugadores tendrán que usar comandos; de lo contrario, ejecutar comandos con el mundo central instalado teletransportará a los jugadores al mundo central y allí podrán interactuar con los NPC en lugar de tener que escribir comandos.

¿Qué comandos? EliteMobs tiene varios comandos que los jugadores pueden usar para vender y comprar artículos, reparar artículos, encantar artículos y más. Obtén más información sobre los comandos que los jugadores pueden usar [aquí]($language$/elitemobs/permissions_and_commands.md&section=npc-commands).

Para obtener más información sobre el gremio de aventureros y cómo instalar el mundo central, consulta [esta]($language$/elitemobs/adventurers_guild_world.md) página.

Puedes desactivar el mundo central abriendo *AdventurersGuild.yml* y estableciendo `guildHubIsEnabledv2` en `false`.

<div align="center">

<details> 

<summary><b>Ejemplo visual</b></summary>

![eminfo_ag.jpg](../../../img/wiki/eminfo_ag.jpg)

</details>

</div>

## Nivel/Rango de gremio

A medida que los jugadores progresan y adquieren mejores objetos, eventualmente alcanzarán un límite y las turbas dejarán de soltar objetos de nivel superior, esto se llama limitador de botín de nivel de gremio.

El limitador de botín de nivel de gremio restringe el botín más alto que los jugadores pueden obtener en función de su nivel de gremio y aplica limitaciones predeterminadas desde el nivel 1 hasta el nivel 10 de los objetos, con los niveles de mafia correspondientes. Los niveles de prestigio desbloquean niveles más altos, lo que permite el acceso a un botín superior y turbas más duras, lo que garantiza un juego equilibrado.

Este sistema, combinado con el encantamiento de vinculación del alma, mitiga los problemas de subida de nivel de poder, mantiene el equilibrio del servidor y fomenta el apego del jugador al botín adquirido. Puedes leer más sobre el nivel de gremio [aquí]($language$/elitemobs/guild_tier_loot_limiter.md).

Todas las configuraciones para el nivel de gremio se pueden ajustar y se encuentran en *AdventurersGuild.yml*.

<div align="center">

<details> 

<summary><b>Ejemplo visual</b></summary>

![eminfo_guild_tier.jpg](../../../img/wiki/eminfo_guild_tier.jpg)

</details>

</div>

## Arenas

Las arenas son desafíos basados en oleadas en los que los jugadores pueden participar en combates. Uno o varios jugadores pueden unirse a una arena y enfrentarse a oleadas de enemigos cada vez más difíciles, con recompensas que mejoran a medida que avanza el desafío.

Al instalar el mundo central del Gremio de aventureros, los jugadores obtienen acceso a la Arena de la Liga de Madera, una arena gratuita a la que se puede acceder mediante la interacción con un NPC en el mundo central o a través del menú */em*.

Puedes obtener arenas adicionales yendo a: [Itch.io](https://magmaguy.itch.io/) o suscribiéndote a [Patreon](https://www.patreon.com/magmaguy).

Puedes desactivar las arenas yendo a *~plugins\EliteMobs\customarenas* y luego abriendo la configuración de la arena, por ejemplo, *wood_league.yml*, y luego buscando el valor `isEnabled` y estableciéndolo en `false`.

<div align="center">

<details> 

<summary><b>Ejemplo visual</b></summary>

![eminfo_arena.jpg](../../../img/wiki/eminfo_arena.jpg)

</details>

</div>

## Mazmorras del mundo

Las mazmorras del mundo son contenido personalizado adicional que puedes descargar para EliteMobs. Las mazmorras generalmente tienen jefes de élite personalizados, mundos personalizados, botín personalizado y poderes de jefe personalizados.


Todas las mazmorras del mundo son mazmorras que se encuentran en su propio mundo, lo que significa que cuando los jugadores acceden a ellas, son teletransportados a un mundo que no tiene nada más que esa mazmorra.

Hay varios tipos de mazmorras del mundo; para obtener más información sobre los tipos, haz clic [aquí]($language$/elitemobs/dungeon_packager.md&section=dungeonsizecategory).

Todas las mazmorras del mundo tienen un nivel establecido y cualquier jugador que intente las mazmorras debe estar alrededor de ese nivel para obtener la mejor experiencia.

Puedes obtener mazmorras yendo a: [Itch.io](https://magmaguy.itch.io/) o suscribiéndote a [Patreon](https://www.patreon.com/magmaguy). Hay varias mazmorras gratuitas que puedes descargar desde [aquí](https://magmaguy.itch.io/em-free-content).

Puedes desactivar mazmorras individuales yendo a *~plugins\EliteMobs\dungeonpackages*, abriendo la configuración de la mazmorra que deseas desactivar y estableciendo el valor `isEnabled` en `false`.

<div align="center">

<details> 

<summary><b>Ejemplo visual</b></summary>

![eminfo_world_dungeon.jpg](../../../img/wiki/eminfo_world_dungeon.jpg)

</details>

</div>

## Mazmorras instanciadas

Las mazmorras instanciadas se diferencian de las mazmorras del mundo en varios aspectos. Son instanciadas, lo que significa que se crea dinámicamente un nuevo mundo a partir de un plano, lo que brinda a los jugadores y sus amigos una experiencia de mazmorra privada similar a las que se encuentran en los MMO.

Las mazmorras instanciadas ofrecen varias dificultades con poderes de jefe únicos, mayor salud y mejor botín a medida que aumenta la dificultad. También introducen roles, lo que permite a los jugadores adoptar roles de tanque o DPS en función de su equipo equipado (el equipo específico de rol es exclusivo de las mazmorras instanciadas). Lee más sobre cómo funciona la dificultad [aquí]($language$/elitemobs/instanced_dungeon_difficulty.md).

Además, los jugadores pueden resucitarse entre sí dentro de las mazmorras instanciadas, lo que les permite reanudar rápidamente la batalla si actúan lo suficientemente rápido.

Puedes obtener mazmorras instanciadas yendo a: [Itch.io](https://magmaguy.itch.io/) o suscribiéndote a [Patreon](https://www.patreon.com/magmaguy). Hay mazmorras instanciadas gratuitas que puedes descargar desde [aquí](https://magmaguy.itch.io/em-free-content).

Puedes desactivar mazmorras individuales yendo a *~plugins\EliteMobs\dungeonpackages*, abriendo la configuración de la mazmorra que deseas desactivar y estableciendo el valor `isEnabled` en `false`.

<div align="center">

<details> 

<summary><b>Ejemplo visual</b></summary>

![eminfo_instanced_dungeon.jpg](../../../img/wiki/eminfo_instanced_dungeon.jpg)

</details>

</div>

## Aventuras

Las aventuras representan el contenido adicional más extenso disponible para EliteMobs, con un vasto mundo completo con una historia cautivadora y una multitud de misiones para que los jugadores se embarquen.

Con cientos de jefes, poderes y objetos personalizados, las aventuras ofrecen una experiencia de juego inmersiva. Las misiones dentro de las aventuras funcionan de manera similar a las de los MMO tradicionales, asignando a los jugadores objetivos como derrotar turbas, localizar objetos, interactuar con NPC o cualquier combinación de los mismos.

Las aventuras son tan grandes que incluso tienen otras submazmorras o subarenas ubicadas en su interior.

Si bien las aventuras suelen recomendar un rango de nivel establecido para los jugadores, se aconseja a los jugadores que comiencen su aventura en el extremo inferior de la escala de niveles para un disfrute óptimo.

Puedes obtener aventuras yendo a: [Itch.io](https://magmaguy.itch.io/) o suscribiéndote a [Patreon](https://www.patreon.com/magmaguy).

Puedes desactivar aventuras individuales yendo a *~plugins\EliteMobs\dungeonpackages*, abriendo la configuración de la aventura que deseas desactivar y estableciendo el valor `isEnabled` en `false`. Las aventuras pueden tener submazmorras y subarenas adicionales que vienen con las aventuras, así que asegúrate de desactivarlas también si estás desactivando una aventura.

<div align="center">

<details> 

<summary><b>Ejemplo visual</b></summary>

![eminfo_adventure.jpg](../../../img/wiki/eminfo_adventure.jpg)

</details>

</div>

## Teletransportes de agujero de gusano

EliteMobs también cuenta con teletransportadores simples de A a B llamados agujeros de gusano. Verás que estos se utilizan principalmente en el mundo central del Gremio de aventureros como una forma de teletransportar a los jugadores desde allí a una mazmorra o de regreso al punto de generación del servidor.

Por lo general, tienen la forma de un hexágono, un cubo o un diamante hechos de partículas. Estas partículas a veces pueden causar retraso a los clientes de Bedrock, por lo que es posible que desees desactivar los efectos de las partículas abriendo *Wormholes.yml* y estableciendo `noParticlesMode` en `true`.

Puedes crear tus propios agujeros de gusano y usarlos como desees. Haz clic [aquí]($language$/elitemobs/creating_wormholes.md) para descubrir cómo.

<div align="center">

<details> 

<summary><b>Ejemplo visual</b></summary>

![eminfo_wormhole.jpg](../../../img/wiki/eminfo_wormhole.jpg)

</details>

</div>

## Contenido personalizado

¡EliteMobs también te ofrece la oportunidad de crear tu propio contenido, incluidos [jefes]($language$/elitemobs/creating_bosses.md), [mazmorras]($language$/elitemobs/dungeon_packager.md), [poderes]($language$/elitemobs/creating_powers.md), [NPC]($language$/elitemobs/creating_npcs.md), [misiones]($language$/elitemobs/creating_quests.md), [arenas]($language$/elitemobs/creating_arenas.md) y mucho más! Puedes encontrar guías para crear otros tipos de contenido además de los enumerados anteriormente en el menú de la barra lateral de la wiki.

Para la experiencia de creación de contenido más fácil y eficiente, recomendamos usar la aplicación web. Esta herramienta te permite generar archivos de configuración listos para usar sin la necesidad de navegar extensamente por la wiki para garantizar la corrección, particularmente si estás considerando crear poderes de jefe de EliteScript. Accede a la [aplicación web aquí](https://magmaguy.com/webapp/webapp.html).

# Para administradores y propietarios de servidores

Este complemento está diseñado para servidores de supervivencia y similares a la supervivencia (como Skyblock, Skywars y variantes de supervivencia muy modificadas).

El complemento está diseñado para ser fácilmente utilizable simplemente arrastrando y soltando el archivo jar del complemento en el servidor. La configuración predeterminada es la que utilizo en mis propios servidores y está sujeta a cambios con el tiempo.

**¡Sin embargo!** La capacidad de personalización ha sido una prioridad máxima durante todo el proceso de desarrollo de EliteMobs. Casi todos los aspectos del complemento se pueden traducir, personalizar, deshabilitar o modificar.


# Para otros desarrolladores

A pesar de la GPLV3 y la naturaleza de código abierto de este proyecto, no estoy buscando ni aceptaré adiciones o cambios de código en este momento. Agradezco las bifurcaciones del complemento y me complacería enormemente ver lo que podrías hacer con ellas; sin embargo, este es mi primer proyecto de programación masivo y, como tal, también es una experiencia de aprendizaje.

**¡Sin embargo!** No tomes esto como si estuviera afirmando que estoy más allá de cualquier crítica o que no escucharé los comentarios; todo lo contrario, me encanta cuando la gente señala mejores formas de lograr las cosas que he hecho en el complemento. Deseo que este proyecto sea algo que escribí de principio a fin, sin fragmentos de código que no conozca o que no entienda.


