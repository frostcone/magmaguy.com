Si tienes una pregunta que no está aquí, ***echa un vistazo a la barra lateral*** para ver si tiene una página dedicada a eso en la wiki!

# Preguntas frecuentes sobre configuración e instalación

### ¿Cómo puedo configurar modelos personalizados?

<details>
<summary>
Info
</summary>

Hay dos plugins diferentes que manejan "Modelos Personalizados".

- LibsDisguises (incluyendo la edición gratuita) te permite disfrazar a los mobs como otros mobs o como skins de jugador personalizadas. Si ves un Jefe Personalizado con un disfraz de jugador, está utilizando LibsDisguises para el disfraz. Tendrás que descargar LibsDisguises para que esta función específica funcione.

- FreeMinecraftModels (y ModelEngine R3, aunque ya no se recomienda ModelEngine) te permite disfrazar a los mobs como cualquier Modelo Personalizado, con muy pocas limitaciones. FreeMinecraftModels te permite hacer esto de forma gratuita y se recomienda. Tendrás que usar bien FreeMinecraftModels o ModelEngine R3 (no R4) para que los Modelos Personalizados funcionen. FreeMinecraftModels puede funcionar junto a ModelEngine, por lo que también puedes ejecutar ambos.
  <br>Si has instalado FreeMinecraftModels/ModelEngine y los Modelos Personalizados aún no funcionan, puede que hayas instalado el contenido antes de tener el plugin del modelo. Para asegurarte de que esto no es un problema, vuelve a importar el contenido de EliteMobs con los Disfraces Personalizados y vuelve a instalarlo.

</details>

### La consola / EliteMobs dice que estoy usando la versión incorrecta de WorldGuard / WorldEdit

<details>
<summary>
Info
</summary>

Si EliteMobs informa que WorldGuard o WorldEdit no están instalados, es porque estás usando la versión incorrecta de WorldGuard / WorldEdit para tu plataforma de servidor. WorldGuard / WorldEdit son muy sensibles acerca de la versión que estás usando, y tienen diferentes versiones para el software del servidor.
- Puedes descargar la versión de WorldEdit para Spigot / Paper desde aquí: https://dev.bukkit.org/projects/worldedit - ¡Asegúrate de que dice que es compatible con tu versión de Minecraft!

- Puedes descargar la versión de WorldGuard para Spigot / Paper desde aquí: https://dev.bukkit.org/projects/worldguard - ¡Asegúrate de que dice que es compatible con tu versión de Minecraft!

</details>

### Los agujeros de gusano / Arenas / PNJs no parecen funcionar correctamente justo después de la instalación

<details>
<summary>
Info
</summary>

Si los agujeros de gusano / arenas / PNJs no parecen funcionar correctamente inmediatamente después de instalar el contenido, debes ejecutar `/em recargar`. Siempre es bueno ejecutarlo después de instalar contenido de EliteMobs.

</details>

### Los jefes de las mazmorras no vuelven a aparecer después de matarlos

<details>
<summary>
Info
</summary>

La mayoría de las veces, esto se debe simplemente a que algunos jefes tienen largos tiempos de reaparición. La Sombra del Encuadernador de Mundos tiene el tiempo de reaparición más largo de 1 semana en la vida real. Los jefes de la guarida suelen tener un tiempo de reaparición de 4 horas. Todo lo demás tiende a tener un tiempo de reaparición de 5-30 minutos. Puedes editar el tiempo de reaparición de un Jefe Personalizado en su archivo de configuración en la carpeta `~/plugins/EliteMobs/custombosses`.

</details>

### Los jefes de las mazmorras nunca aparecieron después de la instalación

<details>
<summary>
Info
</summary>

Casi con certeza, esto se debe a la interferencia de un plugin de terceros. Verifica lo siguiente:
- ¿Está tu mundo en dificultad Pacífica? Los mobs no aparecen en dificultad pacífica.

- ¿Está tu región protegida contra el spawn? Las mazmorras de EliteMobs manejan su propia protección de la región a través de WorldGuard, no necesitas proteger los mundos de las mazmorras de EliteMobs, hacerlo puede prevenir el spawn si se usan las banderas incorrectas.

- ¿Hay otro plugin que impide que los jefes de EliteMobs aparezcan o los elimina? Estos conflictos a menudo se muestran en la consola, por lo que verifica los logs de tu consola.

</details>

### El plugin no está autocompletando comandos para el contenido que acabo de instalar

<details>
<summary>
Info
</summary>

Las sugerencias automáticas en los comandos son manejadas por CloudCommandFramework y sólo actualiza las sugerencias de los comandos **después de un reinicio del servidor**. Desafortunadamente, no hay nada que pueda hacer al respecto.

</details>

### ¿Cómo uso las traducciones de EliteMobs?

<details>
<summary>
Info
</summary>

Puedes cambiar el idioma de EliteMob ejecutando el comando `/em language <languagename>.yml`. para usar la traducción por defecto del plugin creada y gestionada por la comunidad de EliteMobs

Para añadir un idioma que no está en el plugin, o para personalizar el idioma existente, se recomienda que uses `custom_language.yml`.

¡Los archivos de idioma sólo generan su contenido cuando cambias el idioma!

Si rompes el formato del archivo yml, lo cual es muy fácil de hacer por error, ¡se reseteará el archivo! ***¡Asegúrate de mantener una copia de seguridad local de tu traducción si estás traduciendo el contenido manualmente!***

Es más fácil traducir el archivo de idioma en el sitio web de traducciones de la comunidad, ya que eso maneja el formato para ti. También sugiere traducciones automáticamente. Puedes encontrarlo aquí: https://crowdin.com/project/elitemobs

Como recordatorio, si estás traduciendo, si usas caracteres especiales como `&` para comenzar un valor de configuración, debes poner ese valor entre comillas como \"&cValor genial\". De lo contrario, el archivo estará roto, y se reseteará tu progreso. Puedes usar un "linter" para comprobar la validez del archivo yml - sólo pega el contenido de tu yml aquí: <https://www.yamllint.com/>

</details>

# FAQ de compatibilidad entre EliteMobs y BetterStructures

### ¿Puedo obtener estructuras en BetterStructure con jefes de EliteMobs?

<details>
<summary>
Info
</summary>

Sí, los paquetes de santuarios de BetterStructures son exactamente este tipo de contenido. Puedes descargar los packs de santuarios desde [itch.io](https://magmaguy.itch.io/).

</details>

### ¿Por qué están protegidos los santuarios con WorldGuard y cómo puedo evitarlo?

<details>
<summary>
Info
</summary>

Las estructuras del santuario de EliteMobs están protegidas con WorldGuard por defecto para asegurarse de que los jugadores no construyan trampas para abusar del sistema de combate de Minecraft dentro del área de lucha.

Las protecciones se eliminan automáticamente una vez que se derrota al jefe.

Cada santuario tiene puntos de entrada que los jugadores deben cavar para encontrar si están bajo tierra.

Si no deseas usar las protecciones de WorldGuard, puedes desactivarlas en el archivo de configuración config.yml de BetterStructures.

</details>

### ¿Por qué están apareciendo los santuarios sin élites dentro de ellos?

<details>
<summary>
Info
</summary>

Esto puede ocurrir si instalas los santuarios de BetterStructures antes de instalar EliteMobs. Para solucionar esto, vuelve a importar e instala los santuarios en tu servidor **después** de que se instale EliteMobs.

</details>

### ¿Puedo usar los santuarios sin usar EliteMobs?

<details>
<summary>
Info
</summary>

Los santuarios se hicieron específicamente para combatir a los jefes que están en ellos, pero si sólo quieres las arenas de combate por la estética, puedes ejecutar los paquetes de santuarios sin tener instalado EliteMobs.

</details>

# Preguntas frecuentes de compatibilidad entre EliteMobs y FreeMinecraftModels

### ¿Es FreeMinecraftModels compatible con EliteMobs?

<details>
<summary>
Info
</summary>

Sí, el plugin FreeMinecraftModels fue creado específicamente para EliteMobs y EternalTD.

</details>

### ¿Cómo instalo los modelos personalizados de EliteMobs?

<details>
<summary>
Info
</summary>

Puedes descargar los modelos personalizados para EliteMobs desde https://www.patreon.com/magmaguy y https://magmaguy.itch.io/. Una vez que los tengas instalados, **tendrás que fusionar el paquete de recursos** generado por FreeMinecraftModels en su carpeta de salida con el paquete de recursos oficial de EliteMobs si quieres usar el paquete de recursos oficial y distribuirlo a los jugadores albergándolo en línea.

</details>

### ¿Cómo instalo los modelos personalizados de EliteMobs?

<details>
<summary>
Info
</summary>

Puedes descargar los modelos personalizados para EliteMobs desde https://www.patreon.com/magmaguy y https://magmaguy.itch.io/ . Una vez que los tengas instalados, tendrás **que fusionar el paquete de recursos** generado por FreeMinecraftModels en su carpeta de salida con el paquete de recursos oficial de EliteMobs si quieres usar el paquete de recursos oficial y distribuirlo a los jugadores albergándolo en línea.

</details>


# Preguntas frecuentes sobre la compatibilidad entre EliteMobs y ResurrectionChest

### ¿funciona EliteMobs con ResurrectionChest?

<details>
<summary>
Info
</summary>

Sí, ResurrectionChest fue creado específicamente para el contenido de EliteMobs y es totalmente compatible.

</details>

# FAQ de compatibilidad con otros plugins

### ¿Puedo usar EliteMobs con un plugin similar a MCMMO o AureliumSkills?

<details>
<summary>
Info
</summary>

Sí. Dicho esto, es posible que quieras desactivar la salud extra del sistema de prestigio de EliteMobs.

</details>

### ¿Puedo usar EliteMobs con otro plugin de items personalizados?

<details>
<summary>
Info
</summary>

Sí. Si quieres que los jefes tiren items específicos de ese plugin, puedes establecer comandos de muerte para dar items a los jugadores de esa manera. Sin embargo, no hay una forma real de equilibrar EliteMobs con cualquier sistema de items que estés usando. Los Elites pasan de tener 7 puntos de salud a cientos de miles de puntos de salud, y como tal otros plugins de items serán o extremadamente potentes o increíblemente débiles. EliteMobs ya tiene un sistema de items incorporado y no requiere ningún plugin de items externo.

</details>

# Otras preguntas frecuentes

### ¿Ejecutar un comando a la muerte del Elite Mob o dar botín/recompensas de otros plugins a la muerte del Elite Mob?

[La información está disponible aquí.]($language$/elitemobs/creating_bosses.md&section=ondeathcommands)

### ¿Soporte para Vault?

[La información está disponible aquí.]($language$/elitemobs/vault.md)

### ¿ Placeholders de PlaceholderAPI?

[La información está disponible aquí.]($language$/elitemobs/placeholders.md)

### ¿Utilizar banderas de WorldGuard para permitir EliteMobs en algunos lugares pero no en otros?

[La información está disponible aquí.]($language$/elitemobs/worldguard_flags.md)

### ¿Puedo hacer que el 100% de los mobs que aparecen sean Elite Mobs?

Esta es una idea terrible, pero, puedes acceder al archivo de configuración `MobCombatSettings.yml` y editar `eliteMobsSpawnPercentage` para establecer el porcentaje de spawn de Elite Mobs.

### ¿Puedo crear poderes personalizados?

[La información está disponible aquí.]($language$/elitemobs/creating_powers.md)

### ¿Puedo crear encantamientos personalizados?

Esto está en nuestra lista de cosas por hacer y debería llegar pronto, pero actualmente no es posible.

### ¿Puedo crear efectos de poción personalizados?

La única forma de hacer esto es aprender Java y escribirlas tú mismo. A ese punto, podrías modificar el código fuente de EliteMobs.

### ¿Cómo puedo desactivar las partículas del agujero de gusano?

Para desactivar las partículas del agujero de gusano navega a *~plugins\EliteMobs\Wormholes.yml* y luego localiza `noParticlesMode` y cambia el valor a `false`.

### ¿Cómo puedo editar el agujero de gusano en AG spawn para teleportar a los jugadores donde yo quiera?

<div align="center">

![faq_ag_wormhole.jpg](../../../img/wiki/faq_ag_wormhole.jpg)

</div>

Puedes hacerlo abriendo *plugins\EliteMobs\wormholes\adventurers_guild_wormhole.yml*.

Luego encuentra la siguiente configuración
`location2: your_world_here,0.5,64,0.5,0,0`
y cambia los valores a tu ubicación preferida.

### ¿Cómo puedo desvincular objetos?

La única forma de quitar la vinculación del alma de los objetos es usar los Pergaminos de Desvinculación. Lee más sobre eso [aquí]($language$/elitemobs/soulbind.md).

### ¿Cómo puedo desactivar Super Mobs?

Los Super Mobs son animales de granja que se agruparán en un solo mob cuando cincuenta del mismo mob estén en proximidad cercana. Si deseas desactivar esta característica puedes ir a *~plugins\EliteMobs\mobproperties* luego entra en cualquier archivo que tenga prefijo con *super_* (ejemplo: *super_pig.yml*) y cambia `isEnabled` a `false`.

### ¿Cómo puedo fusionar paquetes de recursos?

Es posible fusionar paquetes de recursos manualmente, pero recomendamos usar una herramienta en línea como [merge.elmakers](https://merge.elmakers.com/) para fusionar tus paquetes de recursos.

### ¿Cuáles son los placeholders de comandos de EliteMobs?

| Placeholder |          Detalles           |
| --- |:--------------------------:|
| `$player` | Nombre en pantalla del jugador |
| `$bossName` |  Nombre en pantalla del jefe  |
| `$bossLevel` |     Nivel del jefe      |

### ¿Qué hago para desactivar el paquete de recursos forzado?

Esta configuración en realidad está ubicada en su archivo `server.properties`. Por lo general, puedes encontrar este archivo en el directorio raíz de tu servidor. Después de abrir el archivo localiza la configuración `require-resource-pack` y cambia el valor a `false` para desactivar el paquete de recursos forzado.

### ¿Cómo puedo desactivar eventos?

Si deseas desactivar eventos como el goblin de armas, goblin de encantamientos, etc. Entonces puedes abrir *~plugins\EliteMobs\events.yml* luego localiza las configuraciones `actionEventsEnabled`, `timedEventsEnabled` y configúralas a `false`.