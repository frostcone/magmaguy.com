# Создание кастомной карты EternalTD

## Создание файла level.yml для вашей карты

Начните создание своей карты с создания файла конфигурации уровня, выполнив следующие простые шаги:

1. Создайте новый текстовый документ и дайте ему имя, например, *your_level_name.yml* (замените "your_level_name" на фактическое имя вашего уровня/карты).

2. Откройте файл в вашем любимом текстовом редакторе.

3. Давайте начнем с интересного! Добавьте имя вашего уровня, используя эту настройку:
```yaml
levelName: "&aMy Awesome Level"
```
Не стесняйтесь украсить его некоторыми цветами Minecraft или другими текстовыми модификаторами.

4. Теперь придайте своему уровню индивидуальности с помощью классного описания:
```yaml
levelDescription:
- "&aMy level is pretty cool."
- "&aHope you enjoy!"
```
Вы можете добавить больше строк в описание, но лучше, если оно будет кратким.

5. Время для волн! Укажите, какие волны EternalTD должен использовать ваш уровень:
```yaml
wavesConfigFile: my_waves.yml
```
Просто не забудьте использовать фактическое имя вашего файла волны. Одна волна на уровень!

6. Установите мир (постройку), который будет использовать ваш уровень:
```yaml
worldName: my_world_folder_name
```
Используйте фактическое имя мира, которое находится в папке *worlds*  EternalTD.

7. И последнее, но не менее важное, выберите идеальную среду для настройки вашего уровня:
```yaml
environment: NORMAL
```
Вы можете выбрать между NORMAL, NETHER или THE_END. Выбирайте на свой вкус.

Файл конфигурации уровня готов! Остальная часть файла будет заполнена командами EternalTD, которые мы будем использовать на следующих этапах при картографировании постройки.

## Подготовка вашей постройки
Прежде чем начать картографирование вашей постройки для использования с EternalTD, важно настроить ее следующим образом:

- Установите его в мире Void. Если вы используете multiverse, вы можете использовать команду:
  ```
  /mvcreate yourworldnamehere NORMAL -g VoidGen:.
  ```
- Добавьте к постройке узкую границу мира.
- Создайте цилиндр из барьеров на несколько блоков ниже постройки с высотой в один блок и радиусом, достаточно большим, чтобы достичь границы мира (рекомендуется 200 блоков радиуса). Используя WorldEdit, вы можете выполнить:
  ```
  //cyl barrier 200 1
  ```
- Установите точку спавна в центре постройки в безопасном месте.
- Примените следующие правила:
    - /gamerule doWeatherCycle false
    - /gamerule doDaylightCycle false
    - /gamerule doMobSpawning false
    - /gamerule doFireTick false
    - /gamerule fireDamage false
    - /gamerule mobGriefing false
    - /gamerule disableRaids true
    - /gamerule announceAdvancements false
- Игровая зона карты должна быть на одном уровне Y. Все, что выше или ниже, будет игнорироваться, когда мы начнем процесс картографирования.

## Картографирование постройки для использования с EternalTD
Чтобы  отметить  игровую  зону  вашей  постройки  для  использования  с  EternalTD,  выполните  следующие  шаги:

1. Вручную измерьте постройку, убедившись, что вы включили только игровую зону, и ничего больше.  Запишите координаты по мере измерения.
<br>Игровая зона должна включать в себя секции начала (спавна мобов) и конца карты. Начало обычно строится из зеленых блоков, а конец - из красных блоков.


2. Начните с измерения осей X, Y и Z постройки. Встаньте в один из углов игровой зоны вашей карты на оси X и запишите  reported coordinate  (для этого вы можете использовать координаты блока). Перейдите на противоположную сторону оси X и запишите эту  coordinate.


3. Для оси Y встаньте на **игровую зону** и запишите  reported coordinate.


4. Повторите тот же процесс, который вы выполнили для оси X, чтобы измерить ось Z. Вы можете посмотреть на этот пример изображения, чтобы понять, чего мы пытаемся добиться:
   ![Mapping Example](https://i.imgur.com/IZfh2Nt.jpeg)
   Обратите внимание, что мы измеряем только координаты, где хотим, чтобы была наша игровая зона, и игнорируем остальное. Как в примере, убедитесь, что вы включили начало и конец при измерении игровой зоны. <br>Если игровая зона, которую вы измеряете, шире с одного конца и уже с другого, вы должны измерить самую широкую часть.


5. После завершения измерений у вас должно быть что-то вроде этого:
   ```
   Eixo X: -57, 56
   Eixo Y: 65
   Eixo Z: 34, -34
   ```

6. Переставьте эти числа от наибольшего к наименьшему, чтобы получить два полных набора координат XYZ:
   ```
   56 65 34 (наибольшие значения XYZ)
   -57 65 -34 (наименьшие значения XYZ)
   ```

7. Используйте следующую команду, чтобы выбрать координаты:
   ```
   /etd selectfloorcoordinate Xhigh Y Zhigh Xlow Y Zlow
   Пример: /etd selectfloorcoordinate 56 65 34 -57 65 -34
   ```

8. Координаты были выбраны и находятся в памяти. Если вы получили ошибку, значит, ваше измерение было неверным или игровая зона была построена неправильно. Чтобы проверить, правильно ли мы  отметили  игровую  зону,  выполните  следующую  команду:
   ```
   /etd register your_level_name.yml test
   ```
   Замените "your_level_name" на фактическое имя уровня/карты, которое вы пытаетесь создать. Если все сделано правильно, вы должны увидеть барьеры, обозначающие каждый отдельный тайл в вашей игровой зоне.


9. Пройдитесь по игровой зоне и убедитесь, что все выглядит так, как должно, а затем выполните команду снова, но на этот раз без *test* в конце.
   ````
   /etd register your_level_name.yml
   ````
   Теперь  игровая  зона  будет  сохранена  в  файле  уровня,  и  ваш  файл  уровня  должен  быть  готов  к  использованию.

## Обрезка папки мира
В папке мира есть несколько файлов и папок, которые мы можем удалить, так как EternalTD  не  использует  их  все.  Это  уменьшит  размер  вашего  мира  и  облегчит  распространение.

Для  среды  NORMAL:

Чтобы  подготовить  ваш  мир, **сохраните**  следующие  файлы  и  папки:

1.  папка **region**


2.  **raids.dat**  из  папки  **data**  (убедитесь,  что  она  помещена  в  папку  **data**  при  копировании)


3.  файл **level.dat**

Вы  можете  безопасно  удалить  все  остальные  файлы  и  папки,  расположенные  в  папке  мира.  Это  настроит  ваш  мир  правильно  для  среды  NORMAL.

Для  сред  NETHER  и  THE_END:

Чтобы  подготовить  ваш  мир,  сохраните  следующие  файлы  и  папки:

1.  папка **region**  внутри  папки  **DIM-1**  (убедитесь,  что  она  помещена  в  папку  **DIM-1**  при  копировании)


2.  **raids.dat**  из  папки  **data**  (убедитесь,  что  она  помещена  в  папку  **data**  при  копировании)


3.  файл **level.dat**

Вы  можете  безопасно  удалить  все  остальные  файлы  и  папки,  расположенные  в  папке  мира.  Это  настроит  ваш  мир  правильно  для  сред  NETHER  и  THE_END.

