## Генераторы

Генераторы - самая мощная часть системы конфигурации BetterStructures. По умолчанию существует 27 генераторов, которые в
совокупности управляют более чем 200 постройками, распространяемыми BetterStructures в настоящее время, и хотя вы можете
создавать свои собственные генераторы, вы также можете использовать существующие в качестве быстрого решения.

Генераторы сообщают плагину, где именно должны появляться структуры, и определяют таблицы добычи. Названия генераторов
по умолчанию также выбраны таким образом, что их назначение должно быть очень легко угадать.

Единственным обязательным полем для генераторов является настройка `structureType`, которая сообщает плагину,
предназначено ли здание для появления в небе, на небольшой глубине под землей, на большой глубине под землей, на
поверхности или на поверхности жидкости.

***

### isEnabled

Устанавливает, включен ли генератор.

***

### structureType

Устанавливает, какой тип структуры представляет собой постройка. **Обратите внимание, что вы можете указать список из
нескольких типов!**

Допустимые значения типа структуры:

***

#### surface

```yml
structureType:
- SURFACE
```

Поверхностные структуры появляются на поверхности мира. Единственным исключением является Нижний мир, где они появляются
в точках, которые плагин считает достаточно похожими на поверхность.

***

#### sky

```yml
structureType:
- SKY
```

Небесные структуры появляются на высоте от 80 до 120 блоков над землей, что настраивается в файле config.yml.
Единственным исключением является Нижний мир, где они появляются в точках, которые плагин считает достаточно похожими на
воздух.

***

#### underground_shallow

```yml
structureType:
- UNDERGROUND_SHALLOW
```

Мелкие подземные структуры появляются на высоте от y=0 до y=60 в обычном мире, от y=60 до y=120 в Нижнем мире и на любой
допустимой подземной высоте в Крае.

_**Примечание:** Вы заметите, что есть два параметра для подземных структур. Это связано с тем, что наличие только
одного варианта приводит к очень разреженному распределению подземных структур, поскольку в Minecraft много подземного
пространства, и игроки часто упускают подземные структуры просто потому, что не раскопали их. Это также гарантирует
равномерное распределение на разных глубинах._

***

#### underground_deep

```yml
structureType:
- UNDERGROUND_DEEP
```

Глубокие подземные структуры появляются на высоте от y=-64 до y=0 в обычном мире, от y=0 до y=60 в Нижнем мире и не
появляются в Крае.

***

#### liquid_surface

```yml
structureType:
- LIQUID_SURFACE
```

Структуры на поверхности жидкости будут появляться на жидкостях. В случае обычного мира они будут появляться на воде и почти всегда в океанах. В случае Нижнего мира они будут появляться в лавовых озерах. Они не будут появляться в Крае.

***

### lowestYLevel

Устанавливает самый низкий уровень Y (высоту), на котором будет появляться структура.

***

### highestYLevel

Устанавливает самый высокий уровень Y (высоту), на котором будет появляться структура.

***

### validWorlds

Устанавливает список миров, в которых будет появляться структура. **Если список не указан, будут использоваться все
миры, разрешенные плагином**, если не ограничено иным образом (например, типом окружающей среды или биомами).

***

### validWorldEnvironments

Устанавливает список типов окружения мира, в которых будет появляться структура. **Если список не указан, будут
использоваться все типы окружения мира, разрешенные плагином**. Допустимые значения: `NORMAL`, `NETHER`, `END`
и `CUSTOM`.

***

### validBiomes

Устанавливает список допустимых биомов, в которых будет появляться структура. **Если список не определен, то будет
считаться, что все биомы допустимы!**

Для этого требуется использовать список биомов, как определено
в [Spigot API](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html).

***

### treasureFilename

Устанавливает файл с сокровищами, который будет использоваться генератором. Это определяет, что появляется в сундуках
для всех построек, которые используют этот генератор, если только другое значение не установлено в
настройке `treasureFile` [конфигурации схемы]($language$/betterstructures/creating_structures.md&section=treasurefile).
