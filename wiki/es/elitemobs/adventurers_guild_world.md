# Mundo del Gremio de Aventureros

### ¿Qué es el Mundo del Gremio de Aventureros?

El Mundo del Gremio de Aventureros es el nombre de un mundo prefabricado hecho para EliteMobs por Realm of Lotheridon.

![ag_pic_1.jpg](../../../img/wiki/ag_pic_1.jpg)

### ¿Para qué sirve el Mundo del Gremio de Aventureros?

El Mundo del Gremio de Aventureros actúa como un centro para EliteMobs. Al albergar el centro, los jugadores ya no tienen que memorizar ningún comando (aparte de /em) para interactuar con las funciones de EliteMobs.

En el mundo, los siguientes NPC se colocan con anticipación:

- Transportador (para regresar a su ubicación anterior)
- Guía (misión introductoria para conocer a todos los NPC)
- Asistente del gremio (para
  actualizar [Rangos del gremio]($language$/elitemobs/understanding_the_basics_of_elitemobs.md&section=step-2:-discovering-the-economy))
- Teletransportadores de mazmorras (NPC especiales que teletransportarán a los jugadores a
  cualquier [Mazmorra]($language$/elitemobs/dungeons.md) instalada)
- Barman (actualmente no implementado)
- Dador de misiones (para navegar y aceptar misiones generadas aleatoriamente)
- Herrero (para comprar artículos generados por procedimientos y vender botín de mobs de élite)
- Herrero especial (para comprar artículos personalizados y vender botín de mobs de élite)
- Instructor de combate (para dar consejos sobre el combate de EliteMobs)
- Agujeros de gusano (portales que teletransportarán a los jugadores a [Mazmorras]($language$elitemobs/dungeons.md) y
  cualquier otro contenido instalado)
- Maestro de la Arena (este NPC permitirá a los jugadores participar en la [Arena de la Liga de Madera]($language$elitemobs/understanding_the_basics_of_elitemobs.md&section=arenas))
- Misiones del modo historia (permite a los jugadores tomar misiones para
  las [Mazmorras del modo historia](www.magmaguy.com))
- Desvinculador (permite a los
  jugadores [Desvincular]($language$/elitemobs/item_upgrade_system.md&section=unbinding-items) su botín de EliteMobs por
  un precio)
- Desguazador (permite a los jugadores convertir cualquier botín no deseado
  en [Chatarra]($language$/elitemobs/item_upgrade_system.md&section=scrapping-items))
- Reparador (los jugadores pueden interactuar con este NPC
  para [Reparar]($language$/elitemobs/item_upgrade_system.md&section=repairing-elite-items) sus objetos usando chatarra)
- Encantador (permite a los
  jugadores [Encantar]($language$/elitemobs/item_upgrade_system.md&section=enchanting-elite-items) sus objetos)

Además, cuenta con un edificio del gremio de aventureros para los NPC, así como una arena de EliteMobs (actualmente no
implementada, ¡próximamente!).

### Cómo configurar el mundo del gremio de aventureros

Para instalar el mundo del gremio de aventureros, haga lo siguiente:

1. Descarga los archivos. Puede hacer clic en el cristal rojo en `/em setup` para obtener enlaces a las descargas.

2. Cargue/mueva los archivos a la carpeta `/plugins/EliteMobs/imports` de su servidor. Asegúrese de colocar los archivos
   **ZIP** dentro de la carpeta `imports` sin modificarlos de ninguna manera, EliteMobs extraerá automáticamente los
   archivos y los moverá a las ubicaciones correctas.

3. Reinicie o ejecute `/em reload`. Después de unos segundos, cuando ejecute `/em setup`, los indicadores de las
   funciones que descargó deberían ser amarillos.

4. Haga clic en el cristal amarillo en el menú `/em setup` para instalar las funciones importadas. Si todo se instaló
   correctamente, debería estar en el mundo central del gremio de aventureros. Puede teletransportarse al gremio de
   aventureros en cualquier momento ejecutando `/ag`.

#### Configuración del agujero de gusano

Después de instalar el mundo central del gremio de aventureros, notará que hay un agujero de gusano ubicado donde se
teletransportan los jugadores. Se supone que usted debe configurar este agujero de gusano para que regrese al punto de
generación normal de su mundo o a cualquier otra ubicación central de su servidor.

Para configurar el agujero de gusano, vaya al directorio *~plugins\EliteMobs\wormholes* y abra
*adventurers_guild_wormhole.yml*. Localice el valor `location2` y reemplace `su_mundo_aquí` con el nombre de su mundo,
seguido de las coordenadas correctas a las que se deben teletransportar los jugadores.
