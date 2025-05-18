Aquí tienes la traducción al español, manteniendo el formato markdown:

# Creando Fases de Jefe

Las Fases de Jefe son una sub-mecánica de los Jefes Personalizados. El sistema detrás de estas fases es tan flexible y potente que requiere su propia explicación dedicada para asegurar que hagas un buen uso de esta característica.

### ¿Cómo funcionan las Fases de Jefe?

Las Fases de Jefe se pueden añadir a cualquier Jefe Personalizado en EliteMobs usando el siguiente formato de configuración:

```yaml
phases:
- phase_2_boss.yml:0.X
- phase_3_boss.yml:0.Y
```

_**Nota: el jefe que generas originalmente y que contiene la información para todas las demás fases se denominará jefe de fase 1. No debe estar en la entrada de fases.**_

La intención básica detrás de esta mecánica es permitir a los administradores cambiar los atributos de los Jefes Personalizados durante el combate. Usando el formato de configuración anterior, puedes cambiar completamente los archivos de configuración de una fase a otra, lo que significa que puedes cambiar el 99.99% de los atributos, como poderes, multiplicadores de daño, multiplicadores de salud, tipo de entidad, disfraz, armadura equipada...

Para lograr esto, EliteMobs elimina a tu jefe durante el combate y lo reemplaza instantáneamente con la versión de la siguiente fase. El proceso detrás de esto es instantáneo, por lo que tiende a ser bastante fluido, a menos que quieras hacerlo llamativo a propósito.

### Ejemplo

Toma este ejemplo de jefe de fase:

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

Esto constituye un Jefe de Fase válido. Si generas phase_1_boss.yml, generará un Stray con los atributos listados anteriormente. Después de ser dañado hasta el _60%_ de su salud, será reemplazado inmediatamente en la misma ubicación por el Jefe Personalizado tal como se define en phase_2_boss.yml, ya que el archivo de configuración indica `- phase_2_boss.yml:0.60` (_phase_2_boss.yml es el nombre del archivo para ese jefe personalizado, 0.60 es el 60% de salud_). _Ten en cuenta que el jefe de fase 2 se generará con el 60% de su salud, ya que es cuando cambia a esa fase._ El jefe tendrá los poderes listados en el archivo phase_2_boss.yml. Una vez que el jefe de fase 2 es dañado hasta el 30% de su salud, genera el jefe configurado para la fase 3. Ten en cuenta que los poderes para la fase 3 no están relacionados con los anteriores: puedes cambiar completamente los poderes entre fases, al igual que casi todos los demás atributos.

## Avanzado

### Mecánicas heredadas

Aquí hay una lista de cosas que no cambian de una fase a otra:

-   El primer Jefe de Fase en la cadena determina por qué fases pasará el jefe, lo que significa que no deberías poner una entrada de fases para los otros jefes en la fase.
-   La tabla de amenaza / tabla de daño permanece igual, lo que significa que la distribución de botín y el sistema avanzado de aggro no se ven afectados por un cambio de fase.
-   El cambio de fase se basa en el % de salud perdida, que se conserva de una fase a otra. Esto significa que si tu jefe está configurado para entrar en la fase 2 al 50% de salud, el jefe que aparecerá para reemplazar al jefe de fase 1 seguirá estando al 50% de salud.
-   Esto también significa que cada fase puede tener cantidades de salud completamente diferentes sin que cause problemas.
-   Los Jefes de Fase vuelven a la Fase 1 si se curan de nuevo a salud completa a través del sistema de regeneración de jefe fuera de combate por defecto.
-   Los Jefes de Fase que también son Jefes Regionales comparten el mismo radio de seguimiento (leash radius) y mecánica de tiempo de espera (timeout mechanic) en todas las fases, y reaparecerán como el jefe de fase 1 una vez que el temporizador de reaparición haya terminado.

#### Advertencias

Aquí hay una lista de mecánicas que funcionan de una manera que inicialmente puede ser contraintuitiva:

-   Si un Jefe de Fase muere durante cualquier fase, soltará el botín de esa fase. Esto significa que si alguien logra matar a un jefe de fase demasiado rápido (de un solo golpe), morirá y soltará el botín configurado para ese archivo de jefe, que puede no ser necesariamente el de la fase final. Puedes solucionar esto configurando la tabla de botín para que sea la misma en todos los archivos de jefe para este jefe de fase, o asegurándote de que tus Jefes de Fase tengan suficiente HP hasta el punto en que sea imposible matarlos en solo unos pocos golpes. Alternativamente, puedes tener tablas de botín especiales para las personas capaces de saltarse fases.
-   Dado que los Jefes de Fase realmente causan que se generen Jefes Personalizados durante el combate, realizarán toda su rutina de generación cuando aparezcan. Por lo tanto, ten cuidado con los mensajes de generación y los comandos que se ejecutan al generarse. Además, los jefes de fase no mueren si cambian de fase, simplemente son intercambiados por otra cosa. Esto significa que los comandos que se ejecutan al morir solo se ejecutarán para el último Jefe de Fase, o si el jugador logra saltarse una fase infligiendo suficiente daño. Los comandos que se ejecutan al generarse pueden usarse para engancharse a los cambios de fase. \*Nota: \* el mensaje de generación no se enviará de nuevo para el jefe de fase 1 si reaparece debido a que el jefe de fase se regeneró a salud completa.
-   Los jefes de fase pueden venir montados o dejar de estar montados entre fases. Si el jefe de fase muere antes de que la montura muera, la montura persistirá en la siguiente fase. Si el jefe se regenera a salud completa, la montura se elimina y el jefe queda desmontado, a menos que esté configurado para montar una entidad durante la fase 1.
-   Dado que se generan nuevos Jefes Personalizados entre fases, la mecánica de generación única (1-time spawn) se reinicia entre fases y al curarse completamente.

### Consejos y trucos

-   Puedes usar el hecho de que el equipo y los tipos de entidad pueden cambiarse a lo largo del combate para hacer que el jefe parezca cada vez más (o menos) peligroso durante la lucha.
-   Aunque es posible, a menos que haya un objetivo de diseño específico en mente, probablemente sea mejor que los poderes que tiene el Jefe de Fase no cambien demasiado drásticamente entre fases, ya que es más probable que los jugadores disfruten de una progresión que se sienta natural a lo largo de la lucha.
-   Puedes usar comandos onSpawn para ejecutar comandos entre fases.
-   Las fases pueden usarse para cambiar al jefe de modo cuerpo a cuerpo a modo a distancia y viceversa.
-   Los Jefes de Fase fueron construidos para ser jefes duros con mucha HP. Suelen ser más adecuados como encuentro de jefe final para mazmorras o como grandes Jefes Mundiales.
-   Al diseñar encuentros, ten en cuenta que es posible que los refuerzos no sean eliminados por los jugadores entre fases.
-   Los jefes pueden tener tantas fases como quieras, pero cuantas más fases tengan, más salud necesitarán para que cada fase sea relevante.