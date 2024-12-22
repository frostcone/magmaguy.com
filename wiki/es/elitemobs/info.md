¡Bienvenido a la wiki de EliteMobs!

# Licencia

El código fuente de EliteMobs está cubierto bajo la licencia [GPLV3](https://choosealicense.com/licenses/gpl-3.0/), y
esta wiki se proporciona con la [licencia CC0](https://choosealicense.com/licenses/cc0-1.0/).

Siéntete libre de redistribuir y modificar la información de esta wiki.

# Versiones

A partir de la versión 9.0.0 de EliteMobs, la única versión de Minecraft compatible es la 1.21 y superior.

Para aquellos que buscan compatibilidad con versiones anteriores de Minecraft (1.19.4 - 1.20.4), por favor utilicen la
versión 8 de EliteMobs.

**Nota: Ninguna versión de EliteMobs es compatible con las versiones 1.20.5 y 1.20.6 de Minecraft.**

# ¿Para qué sirve EliteMobs?

EliteMobs tiene como objetivo extender el final del juego de Minecraft mediante la implementación de varios contenidos
relacionados con jefes.

Esto significa:

- Jefes Dinámicos (Mobs con Niveles)
- Jefes Personalizados
- Eventos
- Arenas
- Mazmorras Basadas en el Mundo
- Mazmorras Instanciadas
- Mazmorras Aleatorias de Mundo Abierto (con integración BetterStructures)
- Objetos Personalizados (Objetos/Botín de Élite)
- ... ¡y más!

El plugin no tiene como objetivo reemplazar el contenido vanilla de Minecraft, sino complementarlo, permitiendo a los
jugadores optar por no participar en el contenido de EliteMobs si así lo desean. Los objetos de EliteMobs normalmente no
afectan al PvP ni al combate vanilla de Minecraft, ya que sus bonificaciones de daño y defensa solo se aplican durante
el combate con EliteMobs.

# Resumen de las Características de EliteMobs

En esta sección echaremos un vistazo a algunas de las características **principales** que EliteMobs tiene para ofrecer,
qué son y cómo puedes desactivarlas. Para una lista completa de características,
consulta [esta página]($language$/elitemobs/feature_list.md&section=feature-list).

También puedes consultar [esta]($language$/elitemobs/understanding_the_basics_of_elitemobs.md) página para conocer la
forma en que se supone que los jugadores interactúan con EliteMobs.

## Jefes Dinámicos

Los Jefes Dinámicos son una de las principales características de EliteMobs. Reemplaza un porcentaje de las apariciones
de vanilla de Minecraft con apariciones de Mobs de Élite.

Los élites son mobs más duros diseñados para desafiar a los jugadores y recompensarlos con posibles botines al ser
derrotados. El nivel de los élites está determinado por la calidad de la armadura y el equipo que lleve el jugador. El
equipo normal de Minecraft tiene un nivel determinado por la calidad del material, como se
explica [aquí]($language$/elitemobs/spawning_tiers_loot.md&section=material-levels). Sin embargo, a medida que los
jugadores derrotan a los élites y adquieren mejor botín, eventualmente comenzarán a obtener objetos de élite con niveles
establecidos, lo que facilitará la predicción de los niveles de los élites que aparecerán.

Esto implica que los niveles de los jugadores están determinados por el equipo que llevan, mientras que los niveles de
los élites están determinados por los niveles de los jugadores.
No hay un sistema de experiencia en EliteMobs, toda la progresión de nivel del jugador depende del equipo.

Puedes ajustar la dificultad de los élites modificando los valores `damageToEliteMobMultiplierV2`
y `damageToPlayerMultiplierV2` en *MobCombatSettings.yml*. Puedes encontrar más información al
respecto [aquí]($language$/elitemobs/elitemobs_config_settings.md&section=mobcombatsettings.yml).

Si deseas desactivar esta función por completo, puedes hacerlo configurando el valor `doNaturalEliteMobSpawning`
en `false`.

<div align="center">

<details> 

<summary><b>Ejemplo Visual</b></summary>

![eminfo_dynamic_boss.jpg](../../../img/wiki/eminfo_dynamic_boss.jpg)

</details>

</div>

## Objetos/Botín de Élite

EliteMobs cuenta con objetos generados aleatoriamente que se pueden encontrar en las tiendas o que pueden dejar caer los
élites. También hay objetos personalizados que suelen encontrarse en mazmorras y otros contenidos de élite.

Los objetos de élite son como los objetos vanilla, excepto que suelen estar equipados con extras adicionales y son más
poderosos que cualquier cosa que puedas encontrar en Minecraft vanilla. Algunos objetos de élite tendrán estadísticas en
ellos que se llaman **Filo de Élite** y **Defensa de Élite**, estas estadísticas solo se aplicarán cuando los jugadores
estén luchando contra élites y no afectan a los mobs vanilla.

Los objetos de élite también pueden tener
encantamientos, [Encantamientos Personalizados]($language$/elitemobs/custom_enchantments_list.md) y efectos de poción.

Puedes desactivar los objetos de élite abriendo *ItemSettings.yml* y configurando el valor `doEliteMobsLoot`
en `false`. (No recomendado, hace imposible la progresión de nivel estilo MMORPG).

<div align="center">

<details> 

<summary><b>Ejemplo Visual</b></summary>

![eminfo_elite_items.jpg](../../../img/wiki/eminfo_elite_items.jpg)

</details>

</div>

## Eventos

Los eventos son encuentros únicos en EliteMobs que pueden activarse aleatoriamente según un temporizador o por acciones
específicas del jugador, como minar un bloque o talar un árbol.

Estos encuentros cuentan con élites personalizados y únicos que plantean un desafío mayor y ofrecen un valioso botín al
ser derrotados.

Los jugadores reciben notificaciones en el chat cuando se produce un evento, con la opción de rastrear la salud y la
ubicación del élite a través de un enlace en el que se puede hacer clic. Si el élite no es derrotado en un cierto
período de tiempo, el evento termina y el élite desaparece.

Puedes desactivar todos los eventos abriendo events.yml y configurando los valores `actionEventsEnabled`
y `timedEventsEnabled` en `false`.

Si deseas desactivar eventos individuales, puedes ir a *~plugins\EliteMobs\customevents*. allí encontrarás
configuraciones para cada evento y puedes desactivar cualquier evento abriendo su configuración y configurando el
valor `isEnabled` en `false`.

<div align="center">

<details> 

<summary><b>Ejemplo Visual</b></summary>

![eminfo_event_boss.jpg](../../../img/wiki/eminfo_event_boss.jpg)

</details>

</div>

## Gremio de Aventureros

El Gremio de Aventureros es un mundo central adicional que puedes instalar y también es un conjunto de comandos que los
jugadores pueden usar.

Si el mundo central no está instalado, los jugadores tendrán que usar comandos, de lo contrario, ejecutar comandos con
el mundo central instalado teletransportará a los jugadores al mundo central y allí podrán interactuar con los NPC en
lugar de tener que escribir comandos.

¿Qué comandos? EliteMobs tiene varios comandos que los jugadores pueden usar para vender y comprar objetos, reparar
objetos, encantar objetos y más. Aprende más sobre qué comandos pueden usar los
jugadores [aquí]($language$/elitemobs/permissions_and_commands.md&section=npc-commands).

Para obtener más información sobre el Gremio de Aventureros y cómo instalar el mundo central,
consulta [esta]($language$/elitemobs/adventurers_guild_world.md) página.

Puedes desactivar el mundo central abriendo *AdventurersGuild.yml* y configurando el valor `guildHubIsEnabledv2`
en `false`.

<div align="center">

<details> 

<summary><b>Ejemplo Visual</b></summary>

![eminfo_ag.jpg](../../../img/wiki/eminfo_ag.jpg)

</details>

</div>

## Nivel/Rango del Gremio

A medida que los jugadores progresan y adquieren mejores objetos, eventualmente alcanzarán un límite y los mobs dejarán
de dejar caer objetos de nivel superior, esto se llama limitador de botín de nivel del gremio.

El limitador de botín de nivel del gremio restringe el botín más alto que los jugadores pueden obtener según su nivel
del gremio y aplica limitaciones predeterminadas desde los objetos de nivel 1 a nivel 10, con los niveles de mob
correspondientes. Los niveles de prestigio desbloquean niveles superiores, lo que permite el acceso a un botín superior
y mobs más duros, lo que garantiza un juego equilibrado.

Este sistema, combinado con el encantamiento ligadura de alma, mitiga los problemas de subida de nivel rápido, mantiene
el equilibrio del servidor y fomenta el apego del jugador a su botín adquirido. Puedes leer más sobre el nivel del
gremio [aquí]($language$/elitemobs/guild_tier_loot_limiter.md).

Todos los ajustes para el nivel del gremio se pueden ajustar y se encuentran en *AdventurersGuild.yml*.

<div align="center">

<details> 

<summary><b>Ejemplo Visual</b></summary>

![eminfo_guild_tier.jpg](../../../img/wiki/eminfo_guild_tier.jpg)

</details>

</div>

## Arenas

Las arenas son desafíos basados en oleadas donde los jugadores pueden participar en combate. Uno o varios jugadores
pueden unirse a una arena y enfrentarse a oleadas de enemigos cada vez más difíciles, con recompensas que mejoran a
medida que avanza el desafío.

Al instalar el mundo central del Gremio de Aventureros, los jugadores obtienen acceso a la Arena de la Liga de Madera,
una arena gratuita accesible a través de la interacción con un NPC en el mundo central o a través del menú */em*.

Puedes obtener arenas adicionales yendo a: [Itch.io](https://magmaguy.itch.io/) o suscribiéndote
en [Patreon](https://www.patreon.com/magmaguy).

Puedes desactivar las arenas yendo a *~plugins\EliteMobs\customarenas*
y luego abriendo la configuración de la arena, por ejemplo, *wood_league.yml* y luego encontrando el valor `isEnabled` y
configurándolo en `false`.

<div align="center">

<details> 

<summary><b>Ejemplo Visual</b></summary>

![eminfo_arena.jpg](../../../img/wiki/eminfo_arena.jpg)

</details>

</div>

## Mazmorras Mundiales

Las Mazmorras Mundiales son contenido personalizado adicional que puedes descargar para EliteMobs. Las mazmorras suelen
tener jefes de élite personalizados, mundos personalizados, botín personalizado y poderes de jefe personalizados.

Todas las mazmorras mundiales son mazmorras que se encuentran en su propio mundo, lo que significa que cuando los
jugadores acceden a ellas son teletransportados a un mundo que no tiene nada más que esa mazmorra.

Hay varios tipos de mazmorras mundiales, para obtener más información sobre los tipos, haz
clic [aquí]($language$/elitemobs/dungeon_packager.md&section=dungeonsizecategory).

Todas las mazmorras mundiales tienen un nivel establecido y cualquier jugador que intente las mazmorras debería estar
cerca de ese nivel para una mejor experiencia.

Puedes obtener mazmorras yendo a: [Itch.io](https://magmaguy.itch.io/) o suscribiéndote
en [Patreon](https://www.patreon.com/magmaguy). Hay varias mazmorras gratuitas que puedes descargar
de [aquí](https://magmaguy.itch.io/em-free-content).

Puedes desactivar mazmorras individuales yendo a *~plugins\EliteMobs\content_packages* y abriendo la configuración de la
mazmorra que deseas desactivar y configurando el valor `isEnabled` en `false`.

<div align="center">

<details> 

<summary><b>Ejemplo Visual</b></summary>

![eminfo_world_dungeon.jpg](../../../img/wiki/eminfo_world_dungeon.jpg)

</details>

</div>

## Mazmorras Instanciadas

Las Mazmorras Instanciadas difieren de las Mazmorras Mundiales en varios aspectos. Son instanciadas, lo que significa
que un nuevo mundo se crea dinámicamente a partir de un plano, proporcionando a los jugadores y a sus amigos una
experiencia de mazmorra privada similar a las que se encuentran en los MMO.

Las Mazmorras Instanciadas ofrecen varias dificultades con poderes de jefe únicos, mayor salud y botín superior a medida
que aumenta la dificultad. También introducen roles, lo que permite a los jugadores adoptar roles de tanque o DPS en
función de su equipo (el equipo específico del rol es exclusivo de las Mazmorras Instanciadas). Lee más sobre cómo
funciona la dificultad [aquí]($language$/elitemobs/instanced_dungeon_difficulty.md).

Además, los jugadores pueden resucitarse entre sí dentro de las Mazmorras Instanciadas, lo que les permite reanudar
rápidamente la batalla si actúan lo suficientemente rápido.

Puedes obtener mazmorras instanciadas yendo a: [Itch.io](https://magmaguy.itch.io/) o suscribiéndote
en [Patreon](https://www.patreon.com/magmaguy). Hay mazmorras instanciadas gratuitas que puedes descargar
de [aquí](https://magmaguy.itch.io/em-free-content).

Puedes desactivar mazmorras individuales yendo a *~plugins\EliteMobs\dungeonpackages* y abriendo la configuración de la
mazmorra que deseas desactivar y configurando el valor `isEnabled` en `false`.

<div align="center">

<details> 

<summary><b>Ejemplo Visual</b></summary>

![eminfo_instanced_dungeon.jpg](../../../img/wiki/eminfo_instanced_dungeon.jpg)

</details>

</div>

## Aventuras

Las Aventuras representan el contenido adicional más extenso disponible para EliteMobs, con un vasto mundo completo con
una historia cautivadora y una multitud de misiones para que los jugadores se embarquen.

Con cientos de jefes, poderes y objetos personalizados, las Aventuras ofrecen una experiencia de juego inmersiva. Las
misiones dentro de las Aventuras funcionan de manera similar a las de los MMO tradicionales, asignando a los jugadores
objetivos como derrotar a los mobs, localizar objetos, interactuar con los NPC o cualquier combinación de ellos.

Las aventuras son tan grandes que incluso tienen otras sub-mazmorras o sub-arenas ubicadas dentro.

Si bien las aventuras suelen recomendar un rango de niveles establecido para los jugadores, se aconseja a los jugadores
que comiencen su aventura en el extremo inferior de la escala de niveles para un disfrute óptimo.

Puedes obtener aventuras yendo a: [Itch.io](https://magmaguy.itch.io/) o suscribiéndote
en [Patreon](https://www.patreon.com/magmaguy).

Puedes desactivar aventuras individuales yendo a *~plugins\EliteMobs\dungeonpackages* y abriendo la configuración de la
aventura que deseas desactivar y configurando el valor `isEnabled` en `false`. Las aventuras pueden tener sub-mazmorras
y sub-arenas adicionales que vienen con las aventuras, así que asegúrate de desactivarlas también si estás desactivando
una aventura.

<div align="center">

<details> 

<summary><b>Ejemplo Visual</b></summary>

![eminfo_adventure.jpg](../../../img/wiki/eminfo_adventure.jpg)

</details>

</div>

## Teletransportes de Agujeros de Gusano

EliteMobs también cuenta con teletransportadores simples de A a B llamados agujeros de gusano. Los verás principalmente
utilizados en el mundo central del Gremio de Aventureros como una forma de teletransportar a los jugadores desde allí a
una mazmorra o de vuelta a la aparición del servidor.

Suelen tener forma de hexágono, cubo o diamante hecho de partículas. Estas partículas a veces pueden causar lag a los
clientes de Bedrock, por lo que es posible que desees desactivar los efectos de partículas abriendo *Wormholes.yml* y
configurando `noParticlesMode` en `true`.

Puedes crear tus propios agujeros de gusano y usarlos como desees. Haz
clic [aquí]($language$/elitemobs/creating_wormholes.md) para averiguar cómo.

<div align="center">

<details> 

<summary><b>Ejemplo Visual</b></summary>

![eminfo_wormhole.jpg](../../../img/wiki/eminfo_wormhole.jpg)

</details>

</div>

## Contenido Personalizado

EliteMobs también te ofrece la oportunidad de crear tu propio contenido,
incluyendo [jefes]($language$/elitemobs/creating_bosses.md), [mazmorras]($language$/elitemobs/dungeon_packager.md), [poderes]($language$/elitemobs/creating_powers.md), [NPCs]($language$/elitemobs/creating_npcs.md), [misiones]($language$/elitemobs/creating_quests.md), [arenas]($language$/elitemobs/creating_arenas.md),
¡y mucho más! Puedes encontrar guías para crear otros tipos de contenido que los enumerados anteriormente en el menú de
la barra lateral de la wiki.

Para la experiencia de creación de contenido más fácil y eficiente, recomendamos usar la WebApp. Esta herramienta te
permite generar archivos de configuración listos para usar sin la necesidad de navegar extensamente por la wiki para
garantizar la corrección, especialmente si estás considerando crear poderes de jefe EliteScript. Accede a
la [WebApp aquí](https://magmaguy.com/webapp/webapp.html).

# Para Administradores y Propietarios de Servidores

Este plugin está diseñado para servidores de supervivencia y similares (como Skyblock, Skywars y variantes de
supervivencia muy modificadas).

El plugin está pensado para ser fácilmente utilizable simplemente arrastrando y soltando el archivo jar del plugin en el
servidor. La configuración predeterminada es la que uso en mis propios servidores y está sujeta a cambios con el tiempo.

**¡Sin embargo!** La personalización ha sido una prioridad máxima durante todo el proceso de desarrollo de EliteMobs.
Casi todos los aspectos del plugin se pueden traducir, personalizar, desactivar o modificar.

# Para otros desarrolladores

A pesar de la naturaleza de código abierto y GPLV3 de este proyecto, no estoy buscando ni aceptaré ninguna adición o
cambio de código en este momento. Doy la bienvenida a las bifurcaciones del plugin, y me daría un inmenso placer ver lo
que podrías hacer con ellas; sin embargo, este es mi primer proyecto de programación masivo y, como tal, también es una
experiencia de aprendizaje.

**¡Sin embargo!** No tomes esto como si estuviera afirmando que estoy más allá de cualquier crítica o que no voy a
escuchar los comentarios, todo lo contrario, me encanta cuando la gente señala mejores formas de lograr cosas que he
hecho en el plugin. Deseo que este proyecto sea algo que escribí de principio a fin, sin fragmentos de código de los que
no sea consciente o que no entienda.
