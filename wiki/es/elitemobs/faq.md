Si tienes una pregunta que no aparece en esta lista, ***echa un vistazo a la barra lateral*** para ver si tiene una
página dedicada a ella
¡en la wiki!

# Preguntas frecuentes sobre la configuración e instalación

### ¿Cómo configuro modelos personalizados?

<details>
<summary>
Información
</summary>

Hay dos complementos diferentes que manejan los "Modelos personalizados".

- LibsDisguises (incluida la edición gratuita) te permite disfrazar mobs como otros mobs o como skins de jugadores
  personalizados. Si ves un jefe personalizado con un disfraz de jugador, está usando LibsDisguises para el disfraz.
  Tendrás que descargar LibsDisguises para que esta característica específica funcione.

- FreeMinecraftModels (y ModelEngine R3, aunque ModelEngine ya no se recomienda) te permite disfrazar mobs como
  cualquier modelo personalizado, con muy pocas limitaciones. FreeMinecraftModels te permite hacer esto de forma
  gratuita y se recomienda. Tendrás que usar FreeMinecraftModels o ModelEngine R3 (no R4) para que funcionen los modelos
  personalizados. FreeMinecraftModels puede ejecutarse junto con ModelEngine, por lo que también puedes ejecutarlos
  ambos.
  <br>Si has instalado FreeMinecraftModels/ModelEngine y los modelos personalizados siguen sin funcionar, es posible que
  hayas instalado el contenido antes de instalar el complemento de modelos. Para asegurarte de que esto no sea un
  problema, vuelve a importar el contenido de EliteMobs con los disfraces personalizados e instálalo de nuevo.

</details>

### La consola / EliteMobs dice que estoy usando la versión incorrecta de WorldGuard

<details>
<summary>
Información
</summary>

Si EliteMobs informa que WorldGuard no está instalado, es porque estás usando la versión incorrecta de WorldGuard para
tu plataforma de servidor. WorldGuard es muy sensible a la versión que estás usando y tiene diferentes versiones para el
software del servidor.

- Puedes descargar la versión de WorldGuard para Spigot / Paper desde aquí: https://dev.bukkit.org/projects/worldguard -
  ¡Asegúrate de que diga que es compatible con tu versión de Minecraft!

</details>

### Los agujeros de gusano / Arenas / NPC no parecen funcionar correctamente inmediatamente después de la instalación

<details>
<summary>
Información
</summary>

Si los agujeros de gusano / arenas / NPC no parecen funcionar correctamente inmediatamente después de instalar el
contenido, debes ejecutar `/em reload`. Siempre es bueno ejecutarlo después de instalar el contenido de EliteMobs.

</details>

### Los jefes de mazmorra no reaparecen después de matarlos

<details>
<summary>
Información
</summary>

La mayoría de las veces, esto se debe a que algunos jefes tienen tiempos de reaparición largos. La Sombra del Vinculador
de Mundos tiene el temporizador de reaparición más largo de 1 semana de la vida real. Los jefes de guarida suelen tener
un temporizador de reaparición de 4 horas. Todo lo demás tiende a tener un temporizador de reaparición de 5 a 30
minutos. Puedes editar el temporizador de reaparición de un jefe personalizado en su archivo de configuración en la
carpeta `~/plugins/EliteMobs/custombosses`.

</details>

### Los jefes de mazmorra nunca aparecieron después de la instalación

<details>
<summary>
Información
</summary>

Esto es casi con seguridad debido a la interferencia de un complemento de terceros. Comprueba lo siguiente:

- ¿Está tu mundo en dificultad Pacífica? Los mobs no aparecen en dificultad Pacífica.

- ¿Está tu región protegida contra la aparición? Las mazmorras de EliteMobs gestionan su propia protección de región a
  través de WorldGuard, no necesitas proteger los mundos de mazmorras de EliteMobs, de hecho, hacerlo puede impedir la
  aparición si se utilizan las banderas equivocadas.

- ¿Hay otro complemento que impida que los jefes de EliteMobs aparezcan o que los elimine? Estos conflictos suelen
  aparecer en la consola, así que revisa los registros de tu consola.

</details>

### El complemento no autocompleta los comandos para el contenido que acabo de instalar

<details>
<summary>
Información
</summary>

Las sugerencias automáticas en los comandos son gestionadas por CloudCommandFramework y sólo actualizan las sugerencias
de comandos **después de reiniciar el servidor**. Desafortunadamente, no hay nada que pueda hacer al respecto.

</details>

### ¿Cómo uso las traducciones de EliteMobs?

<details>
<summary>
Información
</summary>

Puedes cambiar el idioma de EliteMob ejecutando `/em language <nombredeidioma>.yml`. para usar la traducción
predeterminada del complemento creada y gestionada por la comunidad de EliteMobs.

Para añadir un idioma que no esté en el complemento, o para personalizar el idioma existente, se recomienda que
uses `custom_language.yml`.

¡Los archivos de idioma sólo generan su contenido cuando cambias el idioma!

Si rompes el formato del archivo yml, lo cual es muy fácil de hacer por error, ¡se restablecerá el archivo!
***¡Asegúrate de mantener una copia de seguridad local de tu traducción si estás traduciendo manualmente el contenido!
***

Es más fácil traducir el archivo de idioma en el sitio web de traducción de la comunidad, ya que eso se encarga del
formato por ti. También sugiere traducciones automáticamente. Puedes encontrarlo
aquí: https://crowdin.com/project/elitemobs

Como recordatorio, si estás traduciendo, si usas caracteres especiales como `&` para iniciar un valor de configuración,
debes poner ese valor entre comillas como \"&cValor genial\"! De lo contrario, el archivo se romperá y se restablecerá
tu progreso. Puedes usar un linter para comprobar la validez del archivo yml - sólo tienes que pegar el contenido de tu
yml aquí: <https://www.yamllint.com/>

</details>

# Preguntas frecuentes sobre la compatibilidad de EliteMobs y BetterStructures

### ¿Puedo obtener estructuras en BetterStructure con jefes de EliteMobs dentro?

<details>
<summary>
Información
</summary>

Sí, los paquetes de santuarios de BetterStructures son exactamente este tipo de contenido. Puedes descargar los paquetes
de santuarios de [itch.io](https://magmaguy.itch.io/).

</details>

### ¿Por qué los santuarios están protegidos con WorldGuard y cómo puedo evitarlo?

<details>
<summary>
Información
</summary>

Las estructuras de santuarios de EliteMobs están protegidas con WorldGuard por defecto para asegurarse de que los
jugadores no construyan artilugios para abusar del sistema de combate de Minecraft dentro del área de lucha.

Las protecciones se eliminan automáticamente una vez que el jefe es derrotado.

Cada santuario tiene puntos de entrada que los jugadores deben excavar para encontrar si están bajo tierra.

Si no deseas utilizar las protecciones de WorldGuard, puedes desactivarlas en el archivo de configuración config.yml de
BetterStructures.

</details>

### ¿Por qué los santuarios aparecen sin élites dentro?

<details>
<summary>
Información
</summary>

Esto puede ocurrir si instalas los santuarios de BetterStructures antes de instalar EliteMobs. Para solucionarlo, vuelve
a importar y reinstalar los santuarios en tu servidor **después** de que EliteMobs esté instalado.

</details>

### ¿Puedo usar los santuarios sin usar EliteMobs?

<details>
<summary>
Información
</summary>

Los santuarios se hicieron específicamente para combatir a los jefes que hay en ellos, pero si sólo quieres las arenas
de combate por la estética, puedes ejecutar los paquetes de santuarios sin tener EliteMobs instalado.

</details>

# Preguntas frecuentes sobre la compatibilidad de EliteMobs y FreeMinecraftModels

### ¿Es FreeMinecraftModels compatible con EliteMobs?

<details>
<summary>
Información
</summary>

Sí. El plugin FreeMinecraftModels fue hecho específicamente para EliteMobs y EternalTD.

</details>

### ¿Cómo instalo los modelos personalizados de EliteMobs?

<details>
<summary>
Información
</summary>

Puedes descargar los modelos personalizados para EliteMobs desde https://www.patreon.com/magmaguy
y https://magmaguy.itch.io/. Una vez que los tengas instalados, **tendrás que fusionar el paquete de recursos** generado
por FreeMinecraftModels en su carpeta de salida con el paquete de recursos oficial de EliteMobs si quieres utilizar el
paquete de recursos oficial y distribuirlo a los jugadores alojándolo en línea.

</details>

### ¿Cómo instalo los modelos personalizados de EliteMobs?

<details>
<summary>
Información
</summary>

Puedes descargar los modelos personalizados para EliteMobs desde https://www.patreon.com/magmaguy
y https://magmaguy.itch.io/. Una vez que los tengas instalados, **tendrás que fusionar el paquete de recursos** generado
por FreeMinecraftModels en su carpeta de salida con el paquete de recursos oficial de EliteMobs si quieres utilizar el
paquete de recursos oficial y distribuirlo a los jugadores alojándolo en línea.

</details>

# Preguntas frecuentes sobre la compatibilidad de EliteMobs y ResurrectionChest

### ¿Funciona EliteMobs con ResurrectionChest?

<details>
<summary>
Información
</summary>

Sí. ResurrectionChest se hizo específicamente para el contenido de EliteMobs y es totalmente compatible.

</details>

# Preguntas frecuentes sobre la compatibilidad con otros plugins

### ¿Puedo usar EliteMobs con un plugin similar a MCMMO o AureliumSkills?

<details>
<summary>
Información
</summary>

Sí. Dicho esto, es posible que desees desactivar la bonificación de salud del sistema de prestigio de EliteMobs.

</details>

### ¿Puedo usar EliteMobs con otro plugin de objetos personalizados?

<details>
<summary>
Información
</summary>

Sí. Si quieres que los jefes suelten objetos específicos de ese plugin, tienes que establecer comandos al morir para
ejecutar y dar a los jugadores objetos de esa manera. Sin embargo, no hay una forma real de equilibrar EliteMobs con
cualquier sistema de objetos que estés usando. Los élites pasan de tener 7 puntos de salud a cientos de miles de puntos
de salud, y como tal, otros plugins de objetos estarán increíblemente sobre potenciados o increíblemente sub
potenciados. EliteMobs ya tiene un sistema de objetos incorporado y no requiere ningún plugin de objetos externos.

</details>

# Otras preguntas frecuentes

### ¿Ejecutar un comando al morir un Elite Mob o dar botín/recompensas de otros plugins al morir un Elite Mob?

[Información disponible aquí.]($language$/elitemobs/creating_bosses.md&section=ondeathcommands)

### ¿Soporte de Vault?

[Información disponible aquí.]($language$/elitemobs/vault.md)

### ¿Placeholders de PlaceholderAPI?

[Información disponible aquí.]($language$/elitemobs/placeholders.md)

### ¿Usar las flags de WorldGuard para permitir EliteMobs en algunos lugares pero no en otros?

[Información disponible aquí.]($language$/elitemobs/worldguard_flags.md)

### ¿Puedo hacer que el 100% de los mobs que aparecen sean Elite Mobs?

Esta es una idea terrible, pero puedes acceder al archivo de configuración `MobCombatSettings.yml` y
editar `eliteMobsSpawnPercentage` para establecer el porcentaje de aparición de Elite Mobs.

### ¿Puedo crear poderes personalizados?

[Información disponible aquí.]($language$/elitemobs/creating_powers.md)

### ¿Puedo crear encantamientos personalizados?

Esto está en nuestra lista de tareas pendientes y debería llegar pronto, pero actualmente no es posible.

### ¿Puedo crear efectos de poción personalizados?

La única forma de hacerlo es aprender Java y escribirlos tú mismo. En ese momento, también podrías modificar el
código fuente de EliteMobs.

### ¿Cómo puedo desactivar las partículas de agujero de gusano?

Para desactivar las partículas de agujero de gusano, ve a *~plugins\EliteMobs\Wormholes.yml* y luego
localiza `noParticlesMode` y
cambia el valor a `false`.

### ¿Cómo puedo editar el agujero de gusano en AG spawn para teletransportar a los jugadores donde quiero?

<div align="center">

![faq_ag_wormhole.jpg](../../../img/wiki/faq_ag_wormhole.jpg)

</div>

Puedes hacerlo abriendo *plugins\EliteMobs\wormholes\adventurers_guild_wormhole.yml*.

Luego, busca la siguiente configuración
`location2: tu_mundo_aqui,0.5,64,0.5,0,0`
y cambia los valores a tu ubicación preferida.

Recuerda hacer `/em reload` para que los cambios surtan efecto.

### ¿Cómo puedo desvincular objetos?

La única forma de eliminar la unión de alma de los objetos es usar Rollos de Desvinculación. Lee más sobre eso
[aquí]($language$/elitemobs/soulbind.md).

### ¿Cómo puedo fusionar paquetes de recursos?

Es posible fusionar paquetes de recursos manualmente, pero recomendamos utilizar una herramienta en línea
como [merge.elmakers](https://merge.elmakers.com/) para fusionar tus paquetes de recursos.

### ¿Cuáles son los placeholders de comandos de EliteMobs?

| Placeholder  |              Detalles               |
|--------------|:-----------------------------------:|
| `$player`    | Nombre de visualización del jugador |
| `$bossName`  |  Nombre de visualización del jefe   |
| `$bossLevel` |           Nivel del jefe            |

### ¿Qué hago para desactivar el paquete de recursos forzado?

Esta configuración se encuentra en realidad en el archivo `server.properties`. Normalmente puedes encontrar este archivo
en el directorio raíz de tu servidor. Después de abrir el archivo, busca la configuración `require-resource-pack` y
cambia el valor a `false` para desactivar el paquete de recursos forzado.

### ¿Cómo puedo desactivar los eventos?

Si deseas desactivar eventos como el goblin de armas, el goblin de amuletos, etc., puedes abrir *~
plugins\EliteMobs\events.yml* y luego localizar la configuración `actionEventsEnabled`, `timedEventsEnabled` y
establecerlos en `false`.

### ¿Cómo puedo editar un mundo de mazmorra o el mundo del Gremio de Aventureros?

A partir de EliteMobs 9, EliteMobs ya no depende de WorldGuard para la protección de mazmorras y contenido. Para evitar
temporalmente esta protección, utiliza el comando `/em protection bypass`.

Si deseas desactivar permanentemente la protección de una mazmorra específica, sigue estos pasos:

1. Navega a *plugins/EliteMobs/content_packages/*.
2. Busca el archivo *dungeon_config.yml* para la mazmorra que deseas modificar.
3. Abre el archivo de configuración y localiza la configuración `protect:`.
4. Cambia el valor a `false` para desactivar la protección.
