```markdown
# Mundo del Gremio de Aventureros

### ¿Qué es el Mundo del Gremio de Aventureros?

El Mundo del Gremio de Aventureros es el nombre de un mundo prefabricado hecho para EliteMobs por Realm of Lotheridon.

![ag_pic_1.jpg](../../../img/wiki/ag_pic_1.jpg)

### ¿Para qué sirve el Mundo del Gremio de Aventureros?

El Mundo del Gremio de Aventureros actúa como un centro para EliteMobs. Al albergar el centro, los jugadores ya no tienen que memorizar ningún comando (aparte de /em) para interactuar con las funciones de EliteMobs.

En el mundo, los siguientes PNJ están colocados de antemano:

- Transportador (para volver a tu ubicación anterior)
- Guía (misión introductoria para conocer a todos los PNJ)
- Encargado del Gremio (para mejorar [Rangos del Gremio]($language$/elitemobs/understanding_the_basics_of_elitemobs.md&section=step-2:-discovering-the-economy))
- Teletransportadores de Mazmorras (PNJ especiales que teletransportarán a los jugadores a cualquier [Mazmorra]($language$/elitemobs/dungeons.md) instalada)
- Tabernero (actualmente no implementado)
- Dador de Misiones (para buscar y aceptar misiones generadas aleatoriamente)
- Herrero (para comprar objetos generados proceduralmente y vender botines de mobs de élite)
- Herrero Especial (para comprar objetos personalizados y vender botines de mobs de élite)
- Instructor de Combate (para dar consejos sobre el combate en EliteMobs)
- Agujeros de Gusano (portales que teletransportarán a los jugadores a [Mazmorras]($language$elitemobs/dungeons.md) y cualquier otro contenido instalado)
- Maestro de Arena (este PNJ permitirá a los jugadores participar en la [Arena de la Liga de Madera]($language$elitemobs/understanding_the_basics_of_elitemobs.md&section=arenas))
- Misiones del Modo Historia (permite a los jugadores tomar misiones para las [Mazmorras del Modo Historia](www.magmaguy.com))
- Desvinculador (permite a los jugadores [Desvincular]($language$/elitemobs/item_upgrade_system.md&section=unbinding-items) su botín de EliteMobs por un precio)
- Chatarrero (permite a los jugadores convertir cualquier botín no deseado en [Chatarra]($language$/elitemobs/item_upgrade_system.md&section=scrapping-items))
- Reparador (los jugadores pueden interactuar con este PNJ para [Reparar]($language$/elitemobs/item_upgrade_system.md&section=repairing-elite-items) sus objetos usando chatarra)
- Encantador (permite a los jugadores [Encantar]($language$/elitemobs/item_upgrade_system.md&section=enchanting-elite-items) sus objetos)

Además, cuenta con un edificio del gremio de aventureros para los PNJ, así como una Arena de EliteMobs (actualmente no implementada, ¡próximamente!).

### Cómo configurar el Mundo del Gremio de Aventureros

Para instalar el Mundo del Gremio de Aventureros haz lo siguiente:

1. Descarga los archivos. Puedes hacer clic en el cristal rojo en `/em setup` para obtener enlaces a las descargas.

2. Sube / mueve los archivos a la carpeta `/plugins/EliteMobs/imports` de tu servidor. Asegúrate de poner los archivos **COMPRIMIDOS** dentro de la carpeta `imports` sin modificarlos de ninguna manera, EliteMobs extraerá automáticamente los archivos y los moverá a las ubicaciones correctas.

3. Reinicia o ejecuta `/em reload`. Después de unos segundos, cuando ejecutes `/em setup`, los indicadores de las funciones que descargaste deberían estar amarillos.

4. Haz clic en el cristal amarillo en el menú `/em setup` para instalar las funciones importadas. Si todo se instaló correctamente, deberías estar en el mundo central del Gremio de Aventureros. Puedes teletransportarte al Gremio de Aventureros en cualquier momento ejecutando `/ag`.

#### Configurando el Agujero de Gusano

Después de instalar el mundo central del Gremio de Aventureros, notarás que hay un agujero de gusano ubicado donde se teletransportan los jugadores. Este agujero de gusano debe ser configurado por ti, para que lleve de vuelta al punto de aparición de tu mundo regular o a cualquier otra ubicación central de tu servidor.

Para configurar el agujero de gusano, navega al directorio *~plugins\EliteMobs\wormholes* y abre *adventurers_guild_wormhole.yml*. Localiza el valor `location2` y reemplaza `your_world_here` con el nombre de tu mundo, seguido de las coordenadas correctas a donde los jugadores deben ser teletransportados.
```