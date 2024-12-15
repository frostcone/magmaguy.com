Si tiene alguna pregunta que no aparezca aquí, ***eche un vistazo a la barra lateral*** para ver si tiene una página dedicada en la wiki.

# Preguntas frecuentes sobre configuración e instalación

### ¿Cómo configuro los modelos personalizados?

<details>
<summary>
Información
</summary>

Hay dos plugins diferentes que gestionan los "modelos personalizados".

- LibsDisguises (incluida la edición gratuita) le permite disfrazar mobs como otros mobs o como skins de jugador personalizados. Si ve un jefe personalizado con un disfraz de jugador, está usando LibsDisguises para el disfraz. Tendrá que descargar LibsDisguises para que esta característica específica funcione.

- FreeMinecraftModels (y ModelEngine R3, aunque ya no se recomienda ModelEngine) le permite disfrazar mobs como cualquier modelo personalizado, con muy pocas limitaciones. FreeMinecraftModels le permite hacer esto de forma gratuita y es lo más recomendable. Deberá usar FreeMinecraftModels o ModelEngine R3 (no R4) para que los modelos personalizados funcionen. FreeMinecraftModels se puede ejecutar junto con ModelEngine, por lo que también puede ejecutar ambos.
<br>Si ha instalado FreeMinecraftModels/ModelEngine y los modelos personalizados aún no funcionan, es posible que haya instalado el contenido antes de instalar el plugin de modelos. Para asegurarse de que esto no sea un problema, vuelva a importar el contenido de EliteMobs con los disfraces personalizados y vuelva a instalarlo.

</details>

### La consola/EliteMobs dice que estoy usando la versión incorrecta de WorldGuard

<details>
<summary>
Información
</summary>

Si EliteMobs informa que WorldGuard no está instalado, es porque está utilizando la versión incorrecta de WorldGuard para su plataforma de servidor. WorldGuard es muy sensible a la versión que está utilizando y tiene una versión diferente para el software del servidor.

- Puede descargar la versión de WorldGuard para Spigot/Paper desde aquí: https://dev.bukkit.org/projects/worldguard - ¡Asegúrese de que diga que es compatible con su versión de Minecraft!

</details>

### Los agujeros de gusano/arenas/NPC no parecen funcionar correctamente inmediatamente después de la instalación

<details>
<summary>
Información
</summary>

Si los agujeros de gusano/arenas/NPC no parecen funcionar correctamente inmediatamente después de instalar el contenido, debe ejecutar `/em reload`. Siempre es bueno ejecutarlo después de instalar el contenido de EliteMobs.

</details>

### Los jefes de las mazmorras no reaparecen después de matarlos

<details>
<summary>
Información
</summary>

La mayoría de las veces, esto se debe simplemente a que algunos jefes tienen tiempos de reaparición largos. La Sombra del Vinculador de Mundos tiene el temporizador de reaparición más largo de 1 semana de la vida real. Los jefes de guarida suelen tener un temporizador de reaparición de 4 horas. Todo lo demás suele tener un temporizador de reaparición de 5 a 30 minutos. Puede editar el temporizador de reaparición de un jefe personalizado en su archivo de configuración en la carpeta `~/plugins/EliteMobs/custombosses`.

</details>

### Los jefes de las mazmorras nunca aparecieron después de la instalación

<details>
<summary>
Información
</summary>

Esto se debe casi con seguridad a la interferencia de un plugin de terceros. Compruebe lo siguiente:
- ¿Su mundo está en dificultad Pacífica? Los mobs no aparecen en dificultad Pacífica

- ¿Está su región protegida contra la aparición? Las mazmorras de EliteMobs gestionan su propia protección de región a través de WorldGuard, no necesita proteger los mundos de las mazmorras de EliteMobs, de hecho, hacerlo puede impedir la aparición si se usan los indicadores incorrectos.

- ¿Existe otro plugin que impida que aparezcan los jefes de EliteMobs o que los elimine? Estos conflictos a menudo aparecerán en la consola, así que compruebe los registros de su consola.

</details>

### El plugin no está autocompletando los comandos para el contenido que acabo de instalar

<details>
<summary>
Información
</summary>

CloudCommandFramework gestiona las sugerencias automáticas en los comandos y solo actualiza las sugerencias de comandos **después de un reinicio del servidor**. Desafortunadamente, no hay nada que pueda hacer al respecto.

</details>

### ¿Cómo uso las traducciones de EliteMobs?

<details>
<summary>
Información
</summary>

Puede cambiar el idioma de EliteMob ejecutando `/em language <nombredelidioma>.yml`. para usar la traducción predeterminada del plugin creada y administrada por la comunidad de EliteMobs

Para agregar un idioma que no esté en el plugin o para personalizar el idioma existente, se recomienda que use `custom_language.yml`.

¡Los archivos de idioma solo generan su contenido cuando cambia el idioma!

Si rompe el formato del archivo yml, lo cual es muy fácil de hacer por error, ¡se restablecerá el archivo! ***¡Asegúrese de mantener una copia de seguridad local de su traducción si está traduciendo manualmente el contenido!***

Es más fácil traducir el archivo de idioma en el sitio web de traducción de la comunidad, ¡ya que eso se encarga del formato por usted! También sugiere automáticamente traducciones. Puede encontrarlo aquí: https://crowdin.com/project/elitemobs

Como recordatorio, si está traduciendo, si usa caracteres especiales como `&` para iniciar un valor de configuración, debe colocar ese valor entre comillas como \"&cValor genial\"! De lo contrario, el archivo se romperá y restablecerá su progreso. Puede usar un linter para verificar la validez del archivo yml; simplemente pegue su contenido yml aquí: <https://www.yamllint.com/>

</details>

# Preguntas frecuentes sobre la compatibilidad de EliteMobs y BetterStructures

### ¿Puedo obtener estructuras en BetterStructure con jefes de EliteMobs en ellas?

<details>
<summary>
Información
</summary>

Sí, los paquetes de santuarios de BetterStructures son exactamente este tipo de contenido. Puede descargar los paquetes de santuarios desde [itch.io](https://magmaguy.itch.io/).

</details>

### ¿Por qué los santuarios están protegidos con WorldGuard y cómo puedo evitarlo?

<details>
<summary>
Información
</summary>

Las estructuras de santuario de EliteMobs están protegidas con WorldGuard de forma predeterminada para garantizar que los jugadores no construyan artilugios para abusar del sistema de combate de Minecraft dentro del área de combate.

Las protecciones se eliminan automáticamente una vez que se vence al jefe.

Cada santuario tiene puntos de entrada que los jugadores deben excavar para encontrar si están bajo tierra.

Si no desea utilizar las protecciones de WorldGuard, puede desactivarlas en el archivo de configuración config.yml de BetterStructures.

</details>

### ¿Por qué los santuarios aparecen sin élites en ellos?

<details>
<summary>
Información
</summary>

Esto puede suceder si instala los santuarios de BetterStructures antes de instalar EliteMobs. Para solucionar esto, vuelva a importar y reinstalar los santuarios en su servidor **después** de que se instale EliteMobs.

</details>

### ¿Puedo usar los santuarios sin usar EliteMobs?

<details>
<summary>
Información
</summary>

Los santuarios se crearon específicamente para combatir a los jefes que se encuentran en ellos, pero si solo desea las arenas de combate por la estética, puede ejecutar los paquetes de santuarios sin tener instalado EliteMobs.

</details>

# Preguntas frecuentes sobre la compatibilidad de EliteMobs y FreeMinecraftModels

### ¿FreeMinecraftModels es compatible con EliteMobs?

<details>
<summary>
Información
</summary>

Sí. El plugin FreeMinecraftModels se creó específicamente en torno a EliteMobs y EternalTD.

</details>

### ¿Cómo instalo modelos personalizados de EliteMobs?

<details>
<summary>
Información
</summary>

Puede descargar los modelos personalizados para EliteMobs desde https://www.patreon.com/magmaguy y https://magmaguy.itch.io/. Una vez que los tenga instalados, **deberá fusionar el paquete de recursos** generado por FreeMinecraftModels en su carpeta de salida con el paquete de recursos oficial de EliteMobs si desea utilizar el paquete de recursos oficial y distribuirlo a los jugadores alojándolo en línea.

</details>

### ¿Cómo instalo modelos personalizados de EliteMobs?

<details>
<summary>
Información
</summary>

Puede descargar los modelos personalizados para EliteMobs desde https://www.patreon.com/magmaguy y https://magmaguy.itch.io/. Una vez que los tenga instalados, **tendrá que fusionar el paquete de recursos** generado por FreeMinecraftModels en su carpeta de salida con el paquete de recursos oficial de EliteMobs si desea utilizar el paquete de recursos oficial y distribuirlo a los jugadores alojándolo en línea.

</details>

# Preguntas frecuentes sobre la compatibilidad de EliteMobs y ResurrectionChest

### ¿EliteMobs funciona con ResurrectionChest?

<details>
<summary>
Información
</summary>

Sí. ResurrectionChest se creó específicamente para el contenido de EliteMobs y es totalmente compatible.

</details>

# Compatibilidad con otros plugins: Preguntas frecuentes

### ¿Puedo usar EliteMobs con un plugin similar a MCMMO o AureliumSkills?

<details>
<summary>
Información
</summary>

Sí. Dicho esto, es posible que desee deshabilitar la salud adicional del sistema de prestigio de EliteMobs.

</details>

### ¿Puedo usar EliteMobs con otro plugin de objetos personalizados?

<details>
<summary>
Información
</summary>

Sí. Si desea que los jefes dejen caer objetos específicos de ese plugin, establezca comandos al morir para ejecutarlos y dar objetos a los jugadores de esa manera. Sin embargo, no hay una forma real de equilibrar EliteMobs con cualquier sistema de objetos que esté utilizando. Las élites pasan de tener 7 puntos de salud a cientos de miles de puntos de salud, y como tales, otros plugins de objetos serán increíblemente sobrepotentes o increíblemente infradotados. EliteMobs ya tiene un sistema de objetos integrado y no requiere ningún plugin de objetos externo.

</details>

# Otras preguntas frecuentes

### ¿Ejecutar un comando al morir el mob de élite o dar botín/recompensas de otros plugins al morir el mob de élite?

[Información disponible aquí.]($language$/elitemobs/creating_bosses.md&section=ondeathcommands)

### ¿Soporte de Vault?

[Información disponible aquí.]($language$/elitemobs/vault.md)

### ¿Marcadores de posición de PlaceholderAPI?

[Información disponible aquí.]($language$/elitemobs/placeholders.md)

### ¿Utilizar indicadores de WorldGuard para permitir EliteMobs en algunos lugares pero no en otros?

[Información disponible aquí.]($language$/elitemobs/worldguard_flags.md)

### ¿Puedo hacer que el 100 % de los mobs que aparecen sean mobs de élite?

Esta es una idea terrible, pero puede acceder al archivo de configuración `MobCombatSettings.yml` y editar `eliteMobsSpawnPercentage` para establecer el porcentaje de aparición de mobs de élite.

### ¿Puedo crear poderes personalizados?

[Información disponible aquí.]($language$/elitemobs/creating_powers.md)

### ¿Puedo crear encantamientos personalizados?

Esto está en nuestra lista de tareas pendientes y debería llegar pronto, pero actualmente no es posible.

### ¿Puedo crear efectos de poción personalizados?

La única forma de hacer esto es aprender Java y escribirlos usted mismo. En ese punto, también podría modificar el código fuente de EliteMobs.

### ¿Cómo puedo desactivar las partículas de agujero de gusano?

Para desactivar las partículas de agujero de gusano, vaya a *~plugins\EliteMobs\Wormholes.yml* y luego ubique `noParticlesMode` y cambie el valor a `false`.

### ¿Cómo puedo editar el agujero de gusano en la generación de AG para teletransportar a los jugadores a donde yo quiera?

<div align="center">

![faq_ag_wormhole.jpg](../../../img/wiki/faq_ag_wormhole.jpg)

</div>

Puede hacerlo abriendo *plugins\EliteMobs\wormholes\adventurers_guild_wormhole.yml*.

Luego, busque la siguiente configuración
`location2: su_mundo_aquí,0.5,64,0.5,0,0`
y cambie los valores a su ubicación preferida.

Recuerde ejecutar `/em reload` para que los cambios surtan efecto.

### ¿Cómo puedo desvincular objetos?

La única forma de eliminar el enlace de alma de los objetos es utilizar pergaminos de desvinculación. Lea más sobre esto
[aquí]($language$/elitemobs/soulbind.md).

### ¿Cómo puedo fusionar paquetes de recursos?

Es posible fusionar paquetes de recursos manualmente, pero recomendamos usar una herramienta en línea como [merge.elmakers](https://merge.elmakers.com/) para fusionar sus paquetes de recursos.

### ¿Cuáles son los marcadores de posición de comando de EliteMobs?

| Marcador de posición |          Detalles           |
| --- |:--------------------------:|
| `$player` | Nombre para mostrar del jugador |
| `$bossName` |  Nombre para mostrar del jefe  |
| `$bossLevel` |     Nivel del jefe      |

### ¿Qué hago para desactivar la obligación del paquete de recursos?

Esta configuración se encuentra en su archivo `server.properties`. Por lo general, puede encontrar este archivo en el directorio raíz de su servidor. Después de abrir el archivo, busque la configuración `require-resource-pack` y cambie el valor a `false` para desactivar la obligación del paquete de recursos.

### ¿Cómo puedo desactivar los eventos?

Si desea desactivar eventos como el duende de las armas, el duende de los amuletos, etc., puede abrir *~plugins\EliteMobs\events.yml*, luego ubicar las configuraciones `actionEventsEnabled`, `timedEventsEnabled` y establecerlas en `false`.

### ¿Cómo puedo editar un mundo de mazmorras o el mundo del Gremio de Aventureros?

A partir de EliteMobs 9, EliteMobs ya no depende de WorldGuard para la protección de las mazmorras y el contenido. Para evitar temporalmente esta protección, use el comando `/em protection bypass`.

Si desea deshabilitar permanentemente la protección para una mazmorra específica, siga estos pasos:

1. Vaya a *plugins/EliteMobs/content_packages/*.
2. Busque el archivo *dungeon_config.yml* para la mazmorra que desea modificar.
3. Abra el archivo de configuración y ubique la configuración `protect:`.
4. Cambie el valor a `false` para deshabilitar la protección.
