# Creando fases de jefe

Las fases de jefe son una submecánica de los jefes personalizados. El sistema detrás de estas fases es tan flexible y poderoso que requiere su propia explicación dedicada para garantizar que hagas un buen uso de esta característica.

### ¿Cómo funcionan las fases de jefe?

Las fases de jefe se pueden agregar a cualquier jefe personalizado en EliteMobs utilizando el siguiente formato de configuración:

```yaml
phases:
- fase_2_jefe.yml:0.X
- fase_3_jefe.yml:0.Y
```

_**Nota: el jefe que generas originalmente, que contiene la información de todas las demás fases, se denominará jefe de fase 1. No debe estar en la entrada de fases.**_

La intención básica detrás de esta mecánica es permitir a los administradores cambiar los atributos del jefe personalizado durante el combate. Al utilizar el formato de configuración anterior, puedes cambiar completamente los archivos de configuración de una fase a otra, lo que significa que puedes cambiar el 99,99% de los atributos, como poderes, multiplicadores de daño, multiplicadores de salud, tipo de entidad, disfraz, armadura usada...

Para lograr esto, EliteMobs elimina a tu jefe durante el combate y lo reemplaza instantáneamente con la versión de la siguiente fase. El proceso detrás de esto es instantáneo, por lo que tiende a ser bastante fluido, a menos que quieras que sea llamativo a propósito.

### Ejemplo

Toma este ejemplo de jefe de fase:

Archivo: fase_1_jefe.yml

```yaml
isEnabled: true
level: 50
healthMultiplier: 10
entityType: STRAY
powers:
- ataque_gravedad.yml
phases:
- fase_2_jefe.yml:0.60
- fase_3_jefe.yml:0.30
```

Archivo: fase_2_jefe.yml

```yaml
isEnabled: true
level: 50
healthMultiplier: 10
entityType: SKELETON
powers:
- ataque_gravedad.yml
- flecha_fuegos_artificiales.yml
```

Archivo: fase_3_jefe.yml

```yaml
isEnabled: true
level: 50
healthMultiplier: 10
entityType: WITHER_SKELETON
powers:
- lluvia_de_flechas
```

Esto constituye un jefe de fase válido. Si generas fase_1_jefe.yml, generará un Stray con los atributos enumerados anteriormente. Después de ser dañado hasta el _60%_ de su salud, será reemplazado inmediatamente en la misma ubicación por el jefe personalizado tal como se forma en fase_2_jefe.yml, ya que el archivo de configuración establece `- fase_2_jefe.yml:0.60` (_fase_2_jefe.yml es el nombre del archivo para ese jefe personalizado, 0.60 es 60% de salud_). _Ten en cuenta que el jefe de fase 2 aparecerá con el 60% de su salud, ya que es cuando cambia a esa fase_. El jefe tendrá los poderes enumerados en el archivo fase_2_jefe.yml. Una vez que el jefe de la fase 2 se daña hasta el 30% de su salud, genera el jefe establecido para la fase 3. Ten en cuenta que los poderes para la fase 3 no están relacionados con los anteriores; puedes cambiar completamente los poderes entre fases, al igual que casi todos los demás atributos.

## Avanzado

### Mecánica heredada

Aquí hay una lista de cosas que no cambian de una fase a otra:

- El primer jefe de fase de la cadena determina por qué fases pasará el jefe, lo que significa que no debes poner una entrada de fases para los otros jefes de la fase.

- La tabla de amenazas/tabla de daños permanece igual, lo que significa que la distribución del botín y el sistema de agro avanzado no se ven afectados por un cambio de fase.

- Cambiar de fase se basa en el % de salud perdida, que se conserva de una fase a otra. Esto significa que si tu jefe está configurado para entrar en la fase 2 al 50% de salud, el jefe que aparecerá para reemplazar al jefe de la fase 1 seguirá estando al 50% de salud. Esto también significa que cada fase puede tener cantidades de salud completamente diferentes sin que cause problemas.

- Los jefes de fase vuelven a la fase 1 si recuperan la salud completa a través del sistema predeterminado de regeneración de jefe fuera de combate.

- Los jefes de fase que también son jefes regionales comparten el mismo radio de correa y la mecánica de tiempo de espera en todas las fases, y reaparecerán como el jefe de fase 1 después de que finalice el temporizador de reaparición.


#### Advertencias

Aquí hay una lista de mecánicas que funcionan de una manera que inicialmente puede ser contraria a la intuición:

- Si un jefe de fase muere durante cualquier fase, soltará el botín de esa fase. Esto significa que si alguien logra matar a un jefe de fase demasiado rápido (1 disparo), en realidad morirá y soltará el botín que está configurado para ese archivo de jefe, que puede no ser necesariamente la fase final. Puedes solucionar esto configurando la tabla de botín para que sea la misma en todos los archivos de jefe para este jefe de fase, o asegurándote de que tus jefes de fase tengan suficientes HP hasta el punto en que sea imposible matarlos en unos pocos golpes. Alternativamente, puedes tener tablas de botín especiales para personas que pueden omitir fases.

- Dado que los jefes de fase en realidad hacen que los jefes personalizados aparezcan durante el combate, harán toda su rutina de aparición cuando aparezcan. Como tal, ten cuidado cuando se trate de mensajes de generación y comandos que se ejecutan al generar. Además, los jefes de fase no mueren si cambian de fase, simplemente se intercambian por otra cosa. Esto significa que los comandos que se ejecutan al morir solo se ejecutarán para el último jefe de fase, o si el jugador logra omitir una fase al infligir suficiente daño. Los comandos que se ejecutan al generar se pueden usar para engancharse a los cambios de fase. \*Nota: \* el mensaje de aparición no se volverá a enviar para el jefe de fase 1 si reaparece debido a que el jefe de fase se regenera a la salud completa.

- Los jefes de fase pueden venir montados o dejar de estar montados entre fases. Si el jefe de fase muere antes de que la montura esté muerta, la montura persistirá hasta la siguiente fase. Si el jefe se regenera por completo, la montura se elimina y el jefe se desmonta, a menos que esté configurado para montar una entidad durante la fase 1.

- Dado que se generan nuevos jefes personalizados entre fases, la mecánica de generación única se restablece entre fases y en curaciones completas.


### Consejos y trucos

- Puedes utilizar el hecho de que el equipo y los tipos de entidades se pueden cambiar durante el combate para hacer que el jefe parezca cada vez más (o menos) peligroso durante la pelea.

- Si bien es posible, a menos que haya un objetivo de diseño específico en mente, probablemente sea mejor que los poderes que tiene el jefe de fase no cambien demasiado drásticamente entre fases, ya que es más probable que los jugadores disfruten de una progresión que se sienta natural durante la pelea.

- Puedes usar los comandos onSpawn para ejecutar comandos entre fases.

- Las fases se pueden utilizar para cambiar al jefe del modo cuerpo a cuerpo al modo a distancia y viceversa.

- Los jefes de fase se crearon para ser jefes duros con muchos HP. Por lo general, se utilizan mejor como encuentro de jefe final para mazmorras o como grandes jefes mundiales.

- Al diseñar encuentros, ten en cuenta que es posible que los jugadores no maten a los refuerzos entre fases.

- Los jefes pueden tener cualquier número de fases que desees, pero cuantas más fases tengan, más salud necesitarán para que cada fase importe.
