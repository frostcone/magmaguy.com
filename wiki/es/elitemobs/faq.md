Si tienes una pregunta que no aparece aquí, ***echa un vistazo a la barra lateral*** para ver si tiene una página dedicada a ella en la wiki.

# Preguntas Frecuentes sobre Configuración e Instalación

### ¿Cómo puedo desactivar las caídas de botín o monedas de EliteMobs, y debería hacerlo?

<details>
<summary>
Información
</summary>

EliteMobs te permite controlar las caídas de botín y monedas, pero antes de hacer cambios, es importante entender cómo estas caídas afectan la jugabilidad y la progresión:

- **Caídas de Botín y Monedas:**
Las caídas de botín son una característica central de EliteMobs, ligadas al equipo que usan los jugadores. Desactivar el botín hará imposible que los jugadores adquieran el mejor equipo necesario para enfrentarse a Elites de mayor nivel, deteniendo por completo la progresión.

Las monedas son vitales para la economía del juego, utilizadas para comprar y mejorar equipo. Desactivar las caídas de monedas interrumpirá gravemente este sistema, afectando negativamente la experiencia y el equilibrio del jugador.

Para desactivar las caídas de botín y monedas, abre `ItemSettings.yml` y establece `doEliteMobsLoot` en `false`.

- **Botín de Jefes Personalizados en Mazmorras:**
Los jefes personalizados tienen botín definido en sus archivos de configuración, ubicados en `~/elitemobs/custombosses`. Desactivar estas caídas eliminará sus recompensas únicas, interrumpiendo la experiencia prevista.

</details>


### ¿Cómo configuro modelos personalizados?

<details>
<summary>
Información
</summary>

Hay dos plugins diferentes que manejan los "Modelos Personalizados".

- LibsDisguises (incluida la edición gratuita) te permite disfrazar mobs como otros mobs o como skins de jugador personalizadas. Si ves un Jefe Personalizado con un disfraz de jugador, está usando LibsDisguises para el disfraz. Tendrás que descargar LibsDisguises para que esta característica específica funcione.


- FreeMinecraftModels (y ModelEngine R3, aunque ModelEngine ya no es recomendado) te permite disfrazar mobs como cualquier Modelo Personalizado, con muy pocas limitaciones. FreeMinecraftModels te permite hacer esto de forma gratuita y es recomendado. Tendrás que usar FreeMinecraftModels o ModelEngine R3 (no R4) para que los Modelos Personalizados funcionen. FreeMinecraftModels puede ejecutarse junto con ModelEngine, así que también puedes ejecutar ambos.
<br>Si has instalado FreeMinecraftModels/ModelEngine y los Modelos Personalizados aún no funcionan, es posible que hayas instalado el contenido antes de instalar el plugin de modelos. Para asegurarte de que esto no sea un problema, reimporta el contenido de EliteMobs con los Disfraces Personalizados e instálalo de nuevo.

</details>

### La Consola / EliteMobs dice que estoy usando la versión incorrecta de WorldGuard

<details>
<summary>
Información
</summary>

Si EliteMobs informa que WorldGuard no está instalado, es porque estás usando la versión incorrecta de WorldGuard para la plataforma de tu servidor. WorldGuard es muy sensible sobre qué versión estás usando, y tiene versiones diferentes para el software del servidor.

- Puedes descargar la versión de WorldGuard para Spigot / Paper desde aquí: https://dev.bukkit.org/projects/worldguard - ¡Asegúrate de que diga que es compatible con tu versión de Minecraft!

</details>

### Los Agujeros de Gusano / Arenas / NPCs no parecen funcionar correctamente inmediatamente después de la instalación

<details>
<summary>
Información
</summary>

Si los agujeros de gusano / arenas / NPCs no parecen funcionar correctamente inmediatamente después de instalar contenido, deberías ejecutar `/em reload`. Siempre es bueno ejecutarlo después de instalar contenido de EliteMobs.

</details>

### Los Jefes de Mazmorra no reaparecen después de matarlos

<details>
<summary>
Información
</summary>

La mayoría de las veces, esto se debe simplemente a que algunos jefes tienen tiempos de reaparición largos. La Sombra del Ligador de Mundos tiene el tiempo de reaparición más largo, de 1 semana de la vida real. Los jefes de guarida suelen tener un tiempo de reaparición de 4 horas. Todo lo demás tiende a tener un tiempo de reaparición de 5 a 30 minutos. Puedes editar el tiempo de reaparición de un Jefe Personalizado en su archivo de configuración en la carpeta `~/plugins/EliteMobs/custombosses`.

</details>

### Los Jefes de Mazmorra nunca aparecieron después de la instalación

<details>
<summary>
Información
</summary>

Esto se debe casi con certeza a la interferencia de un plugin de terceros. Verifica lo siguiente:
- ¿Está tu mundo en dificultad Pacífica? Los mobs no aparecen en dificultad Pacífica


- ¿Está tu región protegida contra la aparición de mobs? Las mazmorras de EliteMobs manejan su propia protección de región a través de WorldGuard, no necesitas proteger los mundos de mazmorras de EliteMobs, de hecho, hacerlo puede impedir la aparición si se usan las flags incorrectas.


- ¿Hay otro plugin que impida que los jefes de EliteMobs aparezcan o los elimine? Estos conflictos a menudo aparecerán en la consola, así que revisa tus registros de consola.

</details>

### El plugin no autocompleta comandos para el contenido que acabo de instalar

<details>
<summary>
Información
</summary>

Las autosugerencias en los comandos son manejadas por CloudCommandFramework y solo actualiza las sugerencias de comandos **después de reiniciar el servidor**. Desafortunadamente, no hay nada que pueda hacer al respecto.

</details>

### ¿Cómo uso las traducciones de EliteMobs?

<details>
<summary>
Información
</summary>

Puedes cambiar el idioma de EliteMobs ejecutando `/em language <languagename>.yml`. para usar la traducción predeterminada del plugin creada y gestionada por la comunidad de EliteMobs

Para añadir un idioma que no está en el plugin, o para personalizar el idioma existente, se recomienda usar `custom_language.yml`.

¡Los archivos de idioma solo generan su contenido cuando cambias el idioma!

Si rompes el formato del archivo yml, lo cual es muy fácil de hacer por error, ¡el archivo se restablecerá! ***¡Asegúrate de guardar una copia de seguridad local de tu traducción si estás traduciendo el contenido manualmente!***

Es más fácil traducir el archivo de idioma en el sitio web de traducción de la comunidad, ¡ya que maneja el formato por ti! También sugiere traducciones automáticamente. Puedes encontrarlo aquí: https://crowdin.com/project/elitemobs

Como recordatorio, si estás traduciendo, si usas caracteres especiales como `&` para iniciar un valor de configuración, ¡debes poner ese valor entre comillas como \"&cCool value\"! De lo contrario, el archivo se romperá y restablecerá tu progreso. Puedes usar un linter para verificar la validez del archivo yml; simplemente pega el contenido de tu yml aquí: <https://www.yamllint.com/>

</details>

# Preguntas Frecuentes sobre compatibilidad entre EliteMobs y BetterStructures

### ¿Puedo obtener estructuras en BetterStructures con jefes de EliteMobs dentro?

<details>
<summary>
Información
</summary>

Sí, los paquetes de santuarios de BetterStructures son exactamente este tipo de contenido. Puedes descargar los paquetes de santuarios desde [itch.io](https://magmaguy.itch.io/).

</details>

### ¿Por qué los santuarios están protegidos con WorldGuard y cómo evito eso?

<details>
<summary>
Información
</summary>

Las estructuras de santuarios de EliteMobs están protegidas con WorldGuard por defecto para asegurar que los jugadores no construyan artilugios para abusar del sistema de combate de Minecraft dentro del área de lucha.

Las protecciones se eliminan automáticamente una vez que el jefe es derrotado.

Cada santuario tiene puntos de entrada que los jugadores deben excavar para encontrar si están bajo tierra.

Si no deseas usar las protecciones de WorldGuard, puedes desactivarlas en el archivo de configuración config.yml de BetterStructures.

</details>

### ¿Por qué los santuarios aparecen sin elites dentro?

<details>
<summary>
Información
</summary>

Esto puede suceder si instalas los santuarios de BetterStructures antes de instalar EliteMobs. Para solucionar esto, reimporta y reinstala los santuarios en tu servidor **después** de que EliteMobs esté instalado.

</details>

### ¿Puedo usar los santuarios sin usar EliteMobs?

<details>
<summary>
Información
</summary>

Los santuarios fueron hechos específicamente para combatir a los jefes que están en ellos, pero si solo quieres las arenas de combate por la estética, puedes simplemente ejecutar los paquetes de santuarios sin tener EliteMobs instalado.

</details>

# Preguntas Frecuentes sobre compatibilidad entre EliteMobs y FreeMinecraftModels

### ¿Es FreeMinecraftModels compatible con EliteMobs?

<details>
<summary>
Información
</summary>

Sí. el plugin FreeMinecraftModels fue hecho específicamente en torno a EliteMobs y EternalTD.

</details>

### ¿Cómo instalo modelos personalizados de EliteMobs?

<details>
<summary>
Información
</summary>

Puedes descargar los modelos personalizados para EliteMobs desde https://www.patreon.com/magmaguy y https://magmaguy.itch.io/. Una vez que los hayas instalado, **tendrás que fusionar el paquete de recursos** generado por FreeMinecraftModels en su carpeta de salida con el paquete de recursos oficial de EliteMobs si quieres usar el paquete de recursos oficial y distribuirlo a los jugadores alojándolo en línea.

</details>

### ¿Cómo instalo modelos personalizados de EliteMobs?

<details>
<summary>
Información
</summary>

Puedes descargar los modelos personalizados para EliteMobs desde https://www.patreon.com/magmaguy y https://magmaguy.itch.io/. Una vez que los hayas instalado, **tendrás que fusionar el paquete de recursos** generado por FreeMinecraftModels en su carpeta de salida con el paquete de recursos oficial de EliteMobs si quieres usar el paquete de recursos oficial y distribuirlo a los jugadores alojándolo en línea.

</details>


# Preguntas Frecuentes sobre compatibilidad entre EliteMobs y ResurrectionChest

### ¿Funciona EliteMobs con ResurrectionChest?

<details>
<summary>
Información
</summary>

Sí. ResurrectionChest fue hecho específicamente para contenido de EliteMobs y es totalmente compatible.

</details>

# Preguntas Frecuentes sobre compatibilidad con otros plugins

### ¿Puedo usar EliteMobs con un plugin similar a MCMMO o AureliumSkills?

<details>
<summary>
Información
</summary>

Sí. Dicho esto, es posible que quieras desactivar la salud adicional del sistema de prestigio de EliteMobs.

</details>

### ¿Puedo usar EliteMobs con otro plugin de objetos personalizados?

<details>
<summary>
Información
</summary>

Sí. Si quieres que los jefes suelten objetos específicos de ese plugin, puedes configurar comandos al morir para que se ejecuten y den objetos a los jugadores de esa manera. Sin embargo, no hay una forma real de equilibrar EliteMobs con cualquier sistema de objetos que estés usando. Los Elites pasan de tener 7 puntos de salud a cientos de miles de puntos de salud, y como tal, otros plugins de objetos serán increíblemente poderosos o increíblemente débiles. EliteMobs ya tiene un sistema de objetos incorporado y no requiere ningún plugin de objetos externo.

</details>

# Otras Preguntas Frecuentes

### ¿Ejecutar un comando al morir un Elite Mob o dar botín/recompensas de otros plugins al morir un Elite Mob?

[Información disponible aquí.]($language$/elitemobs/creating_bosses.md&section=ondeathcommands)

### ¿Soporte para Vault?

[Información disponible aquí.]($language$/elitemobs/vault.md)

### ¿Placeholders de PlaceholderAPI?

[Información disponible aquí.]($language$/elitemobs/placeholders.md)

### ¿Usar flags de WorldGuard para permitir EliteMobs en algunos lugares pero no en otros?

[Información disponible aquí.]($language$/elitemobs/worldguard_flags.md)

### ¿Puedo hacer que el 100% de los mobs que aparecen sean Elite Mobs?

Esta es una idea terrible pero, puedes acceder al archivo de configuración `MobCombatSettings.yml` y
editar `eliteMobsSpawnPercentage` para establecer el porcentaje de aparición de Elite Mobs.

### ¿Puedo crear poderes personalizados?

[Información disponible aquí.]($language$/elitemobs/creating_powers.md)

### ¿Puedo crear encantamientos personalizados?

Esto está en nuestra lista de tareas pendientes y debería llegar pronto, pero actualmente no es posible.

### ¿Puedo crear efectos de poción personalizados?

La única forma de hacer esto es aprender Java y escribirlos tú mismo. En ese punto, podrías modificar el
código fuente de EliteMobs.

### ¿Cómo puedo desactivar las partículas de agujero de gusano?

Para desactivar las partículas de agujero de gusano, navega a *~plugins\EliteMobs\Wormholes.yml* y luego localiza `noParticlesMode` y cambia el valor a `false`.

### ¿Cómo puedo editar el agujero de gusano en el spawn del Gremio de Aventureros para teletransportar a los jugadores donde quiero?

<div align="center">

![faq_ag_wormhole.jpg](../../../img/wiki/faq_ag_wormhole.jpg)

</div>

Puedes hacerlo abriendo *plugins\EliteMobs\wormholes\adventurers_guild_wormhole.yml*.

Luego encuentra la siguiente configuración
`location2: your_world_here,0.5,64,0.5,0,0`
y cambia los valores a tu ubicación preferida.

Recuerda ejecutar `/em reload` para que los cambios surtan efecto.

### ¿Cómo puedo desvincular objetos?

La única forma de eliminar el soulbound de los objetos es usar Pergaminos de Desvinculación. Lee más sobre
eso [aquí]($language$/elitemobs/soulbind.md).

### ¿Cómo puedo fusionar paquetes de recursos?

Es posible fusionar paquetes de recursos manualmente, pero recomendamos usar una herramienta en línea como [merge.elmakers](https://merge.elmakers.com/) para fusionar tus paquetes de recursos.

### ¿Cuáles son los placeholders de comandos de EliteMobs?

| Placeholder |          Detalles           |
| --- |:--------------------------:|
| `$player` | Nombre visible del jugador |
| `$bossName` |  Nombre visible del jefe  |
| `$bossLevel` |     Nivel del jefe      |

### ¿Qué hago para desactivar el paquete de recursos forzado?

Esta configuración se encuentra en tu archivo `server.properties`. Normalmente puedes encontrar este archivo en el directorio raíz de tu servidor. Después de abrir el archivo, localiza la configuración `require-resource-pack` y cambia el valor a `false` para desactivar el paquete de recursos forzado.

### ¿Cómo puedo desactivar los eventos?

Si deseas desactivar eventos como el goblin de armas, el goblin de amuletos, etc., puedes abrir *~plugins\EliteMobs\events.yml*, luego localizar las configuraciones `actionEventsEnabled`, `timedEventsEnabled` y establecerlas en `false`.

### ¿Cómo puedo editar un mundo de mazmorra o el mundo del Gremio de Aventureros?

A partir de EliteMobs 9, EliteMobs ya no depende de WorldGuard para la protección de mazmorras y contenido. Para omitir temporalmente esta protección, usa el comando `/em protection bypass`.

Si quieres desactivar permanentemente la protección para una mazmorra específica, sigue estos pasos:

1. Navega a *plugins/EliteMobs/content_packages/*.
2. Encuentra el archivo *dungeon_config.yml* de la mazmorra que quieres modificar.
3. Abre el archivo de configuración y localiza la configuración `protect:`.
4. Cambia el valor a `false` para desactivar la protección.


### ¿Qué son los Pergaminos Elite y cómo puedo usarlos?

**Pergaminos Elite** son objetos de mejora especiales que permiten a los jugadores convertir equipo regular (no elite) en equipo de nivel elite, integrándose perfectamente con los sistemas de nivelación y botín de EliteMobs.

- **Compatibilidad con Plugins:** Ideal para servidores que usan otros plugins de objetos como **ItemAdder**, permitiendo que esos objetos ganen niveles elite.
- **Método de Mejora:** Se pueden aplicar en el **Gremio de Aventureros** hablando con **Scotty**, el NPC Aplicador de Pergaminos (ubicado junto al Encantador). *Esta característica está desactivada por defecto.*
- **Progresión Equilibrada:** Los pergaminos caen de **Elite Mobs** del mismo nivel, asegurando mejoras justas y apropiadas para el nivel.
- **Soporte para Objetos Personalizados:** Permite que los objetos personalizados o basados en plugins funcionen dentro del sistema de progresión de EliteMobs.

> **Nota:** Los efectos de daño Elite solo están activos dentro del sistema EliteMobs. Los objetos mejorados con pergaminos no estarán demasiado poderosos en la jugabilidad general fuera del contenido de EliteMobs.

#### Cómo Habilitar los Pergaminos Elite

Por defecto, los Pergaminos Elite están **desactivados**. Para habilitarlos:

1. Abre el archivo de configuración:
   `plugins/EliteMobs/ItemSettings.yml`
2. Establece la siguiente opción en `true`:
   `useEliteItemScrolls`
3. Luego ejecuta el siguiente comando:
   `/em reload`