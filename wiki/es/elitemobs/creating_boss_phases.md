# Creando Fases de Jefes

Las Fases de Jefes son una sub-mecánica de los Jefes Personalizados. El sistema detrás de estas fases es tan flexible y poderoso que requiere su propia explicación dedicada para asegurarse de que haga buen uso de esta característica.

### ¿Cómo funcionan las Fases de Jefes?

Las Fases de Jefes pueden añadirse a cualquier Jefe Personalizado en EliteMobs utilizando el siguiente formato de configuración:

```yaml
phases:
- phase_2_boss.yml:0.X
- phase_3_boss.yml:0.Y
```

_**Nota: El jefe que originalmente desova que contiene la información para todas las demás fases se denominará jefe de la fase 1. No debería estar en la entrada de fases.**_

La intención básica detrás de esta mecánica es permitir a los administradores cambiar los atributos del Jefe Personalizado durante el combate. Al utilizar el formato de configuración anterior, es posible cambiar completamente los archivos de configuración de fase a fase, lo que significa que puedes cambiar el 99,99% de los atributos, como poderes, multiplicadores de daño, multiplicadores de salud, tipo de entidad, disfraz, armadura usada...

Para lograr esto, EliteMobs elimina tu jefe durante el combate y lo reemplaza instantáneamente con la versión de la próxima fase. Este proceso es instantáneo, por lo general es bastante fluido, a menos que desees que sea llamativo a propósito.

### Ejemplo

Mira este ejemplo de un jefe de fase:

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

Este representa un Jefe de Fase válido. Si desovas phase_1_boss.yml, aparecerá un Stray con los atributos enumerados anteriormente. Después de haber sido dañado hasta _60%_ de su salud, será reemplazado instantáneamente en el mismo lugar por el Jefe Personalizado formado en phase_2_boss.yml, dado que el archivo de configuración establece `- phase_2_boss.yml:0.60` (_phase_2_boss.yml es el nombre del archivo para ese jefe personalizado, 0.60 es 60% de salud_). _Nota que el jefe de la fase 2 aparecerá con el 60% de su salud, ya que es cuando cambia a esa fase._ El jefe tendrá los poderes enumerados en el archivo phase_2_boss.yml. Una vez que el jefe de la fase 2 sea dañado hasta el 30% de su salud, aparecerá el jefe configurado para la fase 3. Nota que los poderes de la fase 3 no tienen relación con los anteriores - puedes cambiar completamente los poderes entre fases, al igual que casi todos los demás atributos.

## Avanzado

### Mecánicas heredadas

Aquí hay una lista de cosas que no cambian de una fase a otra:

- El primer Jefe de Fase en la cadena determina que fases atravesará el jefe, lo que significa que no deberías poner una entrada de fases para los otros jefes en la fase.

- La tabla de amenaza / tabla de daño se mantiene igual, lo que significa que la distribución del botín y el avanzado sistema de agresión no se ven afectados por un cambio de fase

- El cambio de fases se basa en % de salud perdida, que se conserva de una fase a otra. Esto significa que si tu jefe está configurado para entrar en la fase 2 al 50% de salud, el jefe que aparecerá para reemplazar al jefe de la fase 1 todavía estará al 50% de salud. Esto también significa que cada fase puede tener cantidades completamente diferentes de salud sin que cause problemas.

- Los Jefes de Fase vuelven a la Fase 1 si son sanados completamente mediante el sistema de regeneración de jefes fuera de combate por defecto.

- Los Jefes de Fase que también son Jefes Regionales comparten el mismo radio de correa y la mecánica de tiempo de espera a través de todas las fases, y reaparecerán como el jefe de la fase 1 después de que el temporizador de reaparición haya terminado.

#### Advertencias

Aquí hay una lista de mecánicas que funcionan de una manera que inicialmente puede parecer contraintuitiva:

- Si un Jefe de Fase es asesinado durante cualquier fase, soltará el botín de esa fase. Esto significa que si alguien es capaz de matar a un jefe de fase demasiado rápido (1 golpe), realmente morirá y soltará el botín que está configurado para ese archivo de jefe, que no necesariamente puede ser la fase final. Esto se puede arreglar configurando la tabla de botín para ser la misma en todos los archivos de jefe para este jefe de fase, o asegurando que tus Jefes de Fase tengan suficiente HP hasta el punto en que es imposible matarlos con solo unos pocos golpes. Alternativamente, puedes tener tablas de botín especiales para las personas que pueden saltarse fases.

- Dado que los Jefes de Fase hacen que los Jefes Personalizados desove durante el combate, realizarán toda su rutina de desove cuando aparezcan. Como tal, ten cuidado cuando se trata de mensajes de desove y comandos que se ejecutan al desovar. Además, los jefes de fase no mueren si cambian de fase, simplemente se cambian por algo más. Esto significa que los comandos que se ejecutan a la muerte solo se ejecutarán para el último Jefe de Fase, o si el jugador logra saltar una fase al tratar suficiente daño. Los comandos que se ejecutan al desovar pueden ser usados para engancharse a los cambios de fase. \*Nota: \* el mensaje de desove no se enviará nuevamente para el jefe de la fase 1 si reaparecen debido a que el jefe de fase fue regenerado hasta la salud completa.

- Los jefes de fase pueden venir montados o dejar de estar montados entre fases. Si el jefe de fase es asesinado antes de que el monte esté muerto, el monte persistirá hasta la próxima fase. Si el jefe se regenera hasta la salud completa, el monte se elimina y el jefe queda desmontado, a menos que esté configurado para montar una entidad durante la fase 1.

- Como se desovan nuevos Jefes Personalizados entre fases, el mecanismo de desove 1 vez se reinicia entre fases y en curaciones completas.

### Consejos & trucos

- Puedes usar el hecho de que el equipo y los tipos de entidad pueden cambiar durante el combate para hacer que el jefe luzca más y más (o menos y menos) peligroso durante la pelea

- Aunque es posible, a menos que haya un objetivo de diseño específico en mente, probablemente es mejor que los poderes que tiene el Jefe de Fase no cambien demasiado drásticamente entre fases, ya que los jugadores tienen más probabilidades de disfrutar de una progresión que se sienta natural a lo largo de la pelea.

- Puedes usar comandos enSpawn para ejecutar comandos entre fases

- Las fases pueden usarse para cambiar el jefe de modo melé a modo de distancia y viceversa.

- Los Jefes de Fase fueron diseñados para ser jefes difíciles con mucha HP. Suelen ser el mejor final para los encuentros de jefes para mazmorras o como grandes Jefes del Mundo.

- Al diseñar encuentros, ten en cuenta que es posible que las refuerzos no sean asesinados por los jugadores entre fases.

- Los jefes pueden tener cualquier número de fases que quieras, pero cuanto más fases tengan, más salud necesitarán para que cada fase importe.

