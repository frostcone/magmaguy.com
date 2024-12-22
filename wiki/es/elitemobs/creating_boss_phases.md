# Creación de Fases de Jefe

Las Fases de Jefe son una sub-mecánica de los Jefes Personalizados. El sistema detrás de estas fases es tan flexible y
poderoso que requiere su propia explicación dedicada para asegurarse de que hagas un buen uso de esta función.

### ¿Cómo funcionan las Fases de Jefe?

Las Fases de Jefe se pueden agregar a cualquier Jefe Personalizado en EliteMobs utilizando el siguiente formato de
configuración:

```yaml
phases:
- phase_2_boss.yml:0.X
- phase_3_boss.yml:0.Y
```

_**Nota: el jefe que generas originalmente, que contiene la información de todas las demás fases, se denominará jefe de
la fase 1. No debe estar en la entrada de fases.**_

La intención básica detrás de esta mecánica es permitir a los administradores cambiar los atributos de los Jefes
Personalizados durante el combate. Al utilizar el formato de configuración anterior, puedes cambiar completamente los
archivos de configuración de fase a fase, lo que significa que puedes cambiar el 99.99% de los atributos, como poderes,
multiplicadores de daño, multiplicadores de salud, tipo de entidad, disfraz, armadura usada...

Para lograr esto, EliteMobs elimina a tu jefe durante el combate y lo reemplaza instantáneamente con la versión de la
siguiente fase. El proceso detrás de esto es instantáneo, por lo que tiende a ser bastante fluido, a menos que quieras
hacerlo llamativo a propósito.

### Ejemplo

Toma este ejemplo de un jefe por fases:

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

Esto constituye un Jefe de Fase válido. Si generas phase_1_boss.yml, se generará un Stray con los atributos enumerados
anteriormente. Después de recibir daño hasta el _60%_ de su salud, será reemplazado inmediatamente en la misma ubicación
por el Jefe Personalizado formado en phase_2_boss.yml, ya que el archivo de configuración
indica `- phase_2_boss.yml:0.60` (_phase_2_boss.yml es el nombre del archivo para ese jefe personalizado, 0.60 es el 60%
de salud_). _Ten en cuenta que el jefe de la fase 2 aparecerá con el 60% de su salud, ya que es cuando cambia a esa
fase_. El jefe tendrá los poderes enumerados en el archivo phase_2_boss.yml. Una vez que el jefe de la fase 2 recibe
daño hasta el 30% de su salud, genera el jefe establecido para la fase 3. Ten en cuenta que los poderes para la fase 3
no están relacionados con los anteriores; puedes cambiar completamente los poderes entre fases, al igual que casi todos
los demás atributos.

## Avanzado

### Mecánicas heredadas

Aquí hay una lista de cosas que no cambian de fase a fase:

- El primer Jefe de Fase en la cadena determina qué fases atravesará el jefe, lo que significa que no debes poner una
  entrada de fases para los otros jefes en la fase.

- La tabla de amenazas/tabla de daños sigue siendo la misma, lo que significa que la distribución del botín y el sistema
  de aggro avanzado no se ven afectados por un cambio de fase.

- El cambio de fases se basa en el % de salud perdida, que se conserva de fase a fase. Esto significa que si tu jefe
  está configurado para entrar en la fase 2 con el 50% de salud, el jefe que aparecerá para reemplazar al jefe de la
  fase 1 todavía estará al 50% de salud. Esto también significa que cada fase puede tener cantidades de salud
  completamente diferentes sin que cause problemas.

- Los Jefes de Fase vuelven a la Fase 1 si son curados de nuevo a la salud completa a través del sistema de regeneración
  de jefes fuera de combate predeterminado.

- Los Jefes de Fase que también son Jefes Regionales comparten el mismo radio de alcance y la misma mecánica de tiempo
  de espera en todas las fases, y reaparecerán como el jefe de la fase 1 después de que finalice el temporizador de
  reaparición.

#### Advertencias

Aquí hay una lista de mecánicas que funcionan de una manera que inicialmente puede ser contraintuitiva:

- Si un Jefe de Fase muere durante cualquier fase, dejará caer el botín de esa fase. Esto significa que si alguien logra
  matar a un jefe de fase demasiado rápido (de un solo golpe), en realidad morirá y dejará caer el botín que está
  configurado para ese archivo de jefe, que no necesariamente puede ser la fase final. Puedes solucionar esto
  configurando que la tabla de botín sea la misma en todos los archivos de jefe para este jefe de fase, o asegurándote
  de que tus Jefes de Fase tengan suficiente HP hasta el punto en que sea imposible matarlos en unos pocos golpes.
  Alternativamente, puedes tener tablas de botín especiales para las personas capaces de omitir fases.

- Dado que los Jefes de Fase en realidad hacen que aparezcan Jefes Personalizados durante el combate, realizarán toda su
  rutina de aparición cuando aparezcan. Como tal, ten cuidado cuando se trata de mensajes de aparición y comandos que se
  ejecutan al aparecer. Además, los jefes de fase no mueren si cambian de fase, simplemente se intercambian con otra
  cosa. Esto significa que los comandos que se ejecutan al morir solo se ejecutarán para el último Jefe de Fase, o si el
  jugador logra omitir una fase al infligir suficiente daño. Los comandos que se ejecutan al aparecer se pueden usar
  para conectarse a los cambios de fase. \*Nota: \* el mensaje de aparición no se enviará nuevamente para el jefe de la
  fase 1 si reaparece debido a que el jefe de la fase se regenera hasta la salud completa.

- Los jefes de fase pueden venir montados o dejar de estar montados entre fases. Si el jefe de fase muere antes de que
  el monte esté muerto, el monte persistirá hasta la siguiente fase. Si el jefe se regenera por completo, el monte se
  elimina y el jefe deja de estar montado, a menos que esté configurado para montar una entidad durante la fase 1.

- Dado que se generan nuevos Jefes Personalizados entre fases, la mecánica de aparición de 1 vez se reinicia entre fases
  y en curaciones completas.

### Consejos y trucos

- Puedes usar el hecho de que el equipo y los tipos de entidades pueden cambiar durante el combate para hacer que el
  jefe se vea cada vez más (o menos) peligroso durante la pelea.

- Si bien es posible, a menos que haya un objetivo de diseño específico en mente, probablemente sea mejor que los
  poderes que tiene el Jefe de Fase no cambien demasiado drásticamente entre fases, ya que es más probable que los
  jugadores disfruten de una progresión que se sienta natural durante toda la pelea.

- Puedes usar comandos onSpawn para ejecutar comandos entre fases

- Las fases se pueden usar para cambiar al jefe del modo cuerpo a cuerpo al modo a distancia y viceversa.

- Los Jefes de Fase fueron construidos para ser jefes duros con muchos HP. Por lo general, se usan mejor como encuentro
  final con un jefe para las mazmorras o como grandes Jefes Mundiales.

- Al diseñar encuentros, ten en cuenta que es posible que los refuerzos no sean eliminados por los jugadores entre
  fases.

- Los jefes pueden tener la cantidad de fases que desees, pero cuantas más fases tengan, más salud necesitarán para que
  cada fase importe.
