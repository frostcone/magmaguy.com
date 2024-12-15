[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Creación de fases de jefes

Las fases de jefe son una submecánica de los jefes personalizados. El sistema detrás de estas fases es tan flexible y poderoso que requiere su propia explicación dedicada para asegurarse de que haga un buen uso de esta característica.

### ¿Cómo funcionan las fases de jefe?

Las fases de jefe se pueden agregar a cualquier jefe personalizado en EliteMobs utilizando el siguiente formato de configuración:

```yaml
phases:
- phase_2_boss.yml:0.X
- phase_3_boss.yml:0.Y
```

_**Nota:** El jefe que genera originalmente y que contiene la información para todas las demás fases se denominará jefe de fase 1. No debe estar en la entrada de fases._

La intención básica detrás de esta mecánica es permitir a los administradores cambiar los atributos del jefe personalizado durante el combate. Al utilizar el formato de configuración anterior, puede cambiar completamente los archivos de configuración de una fase a otra, lo que significa que puede cambiar el 99,99 % de los atributos, como poderes, multiplicadores de daño, multiplicadores de salud, tipo de entidad, disfraz, armadura usada...

Para lograr esto, EliteMobs elimina a su jefe durante el combate y lo reemplaza instantáneamente con la versión de la siguiente fase. El proceso detrás de esto es instantáneo, por lo que tiende a ser bastante fluido, a menos que desee hacerlo llamativo a propósito.

### Ejemplo

Tome este ejemplo de jefe de fase:

Archivo: phase_1_boss.yml

```yaml
isEnabled: true
level: 50
healthMultiplier: 10
entityType: STRAY
powers:
- attack_gravity.yml
phases:
- phase_2_boss.yml:0.60
- phase_3_boss.yml:0.30
```

Archivo: phase_2_boss.yml

```yaml
isEnabled: true
level: 50
healthMultiplier: 10
entityType: SKELETON
powers:
- attack_gravity.yml
- arrow_fireworks.yml
```

Archivo: phase_3_boss.yml

```yaml
isEnabled: true
level: 50
healthMultiplier: 10
entityType: WITHER_SKELETON
powers:
- arrow_rain
```

Esto constituye un jefe de fase válido. Si genera phase_1_boss.yml, aparecerá un Stray con los atributos enumerados anteriormente. Después de ser dañado hasta el _60 %_ de su salud, será reemplazado de inmediato en la misma ubicación por el jefe personalizado según lo formado en phase_2_boss.yml, ya que el archivo de configuración establece `- phase_2_boss.yml:0.60` (_phase_2_boss.yml es el nombre de archivo para ese jefe personalizado, 0.60 es el 60 % de salud_). _Tenga en cuenta que el jefe de la fase 2 aparecerá con el 60 % de su salud, ya que es cuando cambia a esa fase_. El jefe tendrá los poderes enumerados en el archivo phase_2_boss.yml. Una vez que el jefe de la fase 2 se daña hasta el 30 % de su salud, genera al jefe establecido para la fase 3. Tenga en cuenta que los poderes para la fase 3 no están relacionados con los de antes: puede cambiar completamente los poderes entre fases, al igual que casi todos los demás atributos.

## Avanzado

### Mecánicas heredadas

Aquí hay una lista de cosas que no cambian de fase a fase:

- El primer jefe de fase en la cadena determina por qué fases pasará el jefe, lo que significa que no debe poner una entrada de fases para los otros jefes en la fase.

- La tabla de amenazas/tabla de daños se mantiene igual, lo que significa que la distribución del botín y el sistema avanzado de aggro no se ven afectados por un cambio de fase

- El cambio de fase se basa en el % de pérdida de salud, que se conserva de una fase a otra. Esto significa que si su jefe está configurado para entrar en la fase 2 con un 50 % de salud, el jefe que aparecerá para reemplazar al jefe de la fase 1 seguirá teniendo el 50 % de salud. Esto también significa que cada fase puede tener cantidades de salud completamente diferentes sin que cause problemas.

- Los jefes de fase vuelven a la fase 1 si se curan de nuevo a su salud máxima a través del sistema de regeneración de jefes predeterminado fuera de combate

- Los jefes de fase que también son jefes regionales comparten el mismo radio de correa y la misma mecánica de tiempo de espera en todas las fases, y volverán a aparecer como el jefe de la fase 1 después de que finalice el temporizador de reaparición.

#### Advertencias

Aquí hay una lista de mecánicas que funcionan de una manera que inicialmente puede ser contraria a la intuición:

- Si un jefe de fase muere durante cualquier fase, dejará caer el botín de esa fase. Esto significa que si alguien logra matar a un jefe de fase demasiado rápido (de un solo golpe), en realidad morirá y dejará caer el botín que está configurado para ese archivo de jefe, que puede no ser necesariamente la fase final. Puede solucionar esto configurando que la tabla de botín sea la misma en todos los archivos de jefe para este jefe de fase, o asegurándose de que sus jefes de fase tengan suficiente HP hasta el punto en que sea imposible matarlos en unos pocos golpes. Alternativamente, puede tener tablas de botín especiales para las personas capaces de saltarse fases.

- Dado que los jefes de fase en realidad hacen que los jefes personalizados aparezcan durante el combate, harán toda su rutina de generación cuando aparezcan. Como tal, tenga cuidado con los mensajes de generación y los comandos que se ejecutan al generar. Además, los jefes de fase no mueren si cambian de fase, simplemente se intercambian con otra cosa. Esto significa que los comandos que se ejecutan al morir solo se ejecutarán para el último jefe de fase, o si el jugador logra omitir una fase al infligir suficiente daño. Los comandos que se ejecutan al generar se pueden usar para conectarse a los cambios de fase. *Nota:* el mensaje de generación no se enviará nuevamente para el jefe de la fase 1 si reaparecen debido a que el jefe de fase se regenera de nuevo a su salud máxima.

- Los jefes de fase pueden venir montados o dejar de estar montados entre fases. Si el jefe de fase muere antes de que muera la montura, la montura persistirá hasta la siguiente fase. Si el jefe se regenera de nuevo por completo, la montura se elimina y el jefe queda desmontado, a menos que esté configurado para montar una entidad durante la fase 1.

- Dado que se generan nuevos jefes personalizados entre fases, la mecánica de generación única se restablece entre fases y en curaciones completas.

### Consejos y trucos

- Puede utilizar el hecho de que el equipo y los tipos de entidades se pueden cambiar durante el combate para hacer que el jefe se vea cada vez más (o menos) peligroso durante toda la pelea

- Aunque es posible, a menos que haya un objetivo de diseño específico en mente, es probable que sea mejor que los poderes que tiene el jefe de fase no cambien demasiado drásticamente entre fases, ya que es más probable que los jugadores disfruten de una progresión que se sienta natural durante toda la pelea.

- Puede usar comandos onSpawn para ejecutar comandos entre fases

- Las fases se pueden usar para cambiar el jefe del modo cuerpo a cuerpo al modo a distancia y viceversa

- Los jefes de fase fueron diseñados para ser jefes duros con mucha HP. Por lo general, se sirven mejor como encuentro final con el jefe para mazmorras o como grandes jefes mundiales.

- Al diseñar encuentros, tenga en cuenta que es posible que los refuerzos no sean asesinados por los jugadores entre fases.

- Los jefes pueden tener cualquier número de fases que desee, pero cuantas más fases tengan, más salud necesitarán para que cada fase importe.
