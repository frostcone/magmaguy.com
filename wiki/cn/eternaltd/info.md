
# 如何创建自定义的 EternalTD 地图

## 为您的地图创建 level.yml 文件

按照以下简单步骤创建一个等级配置文件以开始制作您的地图：

1. 首先，创建一个新的文本文档，并为其命名为 *your_level_name.yml* (将 "your_level_name" 替换为您实际的等级/地图名称)。

2. 在您最喜欢的文本编辑器中打开该文件。

3. 让我们开始有趣的部分！使用以下设置添加您的等级名称:
``` yaml
levelName: "&aMy Awesome Level"
```
随意使用一些 Minecraft 的颜色或其他文本修饰符来调整它。

4. 现在，使用酷炫的描述给您的等级添加一些特色:
```yaml
levelDescription:
- "&aMy level is pretty cool."
- "&aHope you enjoy!"
```
您可以添加更多行到描述，但保持简洁是个好主意。

5. 游戏时间！指定您的等级应使用哪个 EternalTD 波数:
```yaml
wavesConfigFile: my_waves.yml
```
只需记住使用您的波文件的实际名称。每个等级一个波！

6. 设置您的等级将使用的世界（构建）:
```yaml
worldName: my_world_folder_name
```
使用在 EternalTD 的*worlds*文件夹中找到的实际世界名称。

7. 最后但同样重要的是，为您的等级设置选择一个完美的环境:
```yaml
environment: NORMAL
```
您可以选择 NORMAL、NETHER 或 THE_END。随您选择。

您的等级配置文件已经设置好了！文件的其余部分将由我们在下一步映射构建时使用的 EternalTD 命令填写。

## 准备您的构建
在为 EternalTD 映射您的构建之前，您需要以如下方式设置它:

- 在空地世界中设置它。如果使用 multiverse，您可以使用以下命令：
  ```
  /mvcreate yourworldnamehere NORMAL -g VoidGen:.
  ```
- 在构建周围有一个紧致的世界边界。
- 在构建下面的几个方块内创建一个堡垒圆柱体，高度为一个方块，半径足以达到世界边界（建议200方块半径）。使用 WorldEdit，您可以执行：
  ```
  //cyl barrier 200 1
  ```
- 设置出生点位于构建的中心的安全位置。
- 应用以下规则:
    - /gamerule doWeatherCycle false
    - /gamerule doDaylightCycle false
    - /gamerule doMobSpawning false
    - /gamerule doFireTick false
    - /gamerule fireDamage false
    - /gamerule mobGriefing false
    - /gamerule disableRaids true
    - /gamerule announceAdvancements false
- 地图的玩家区域需要位于相同的 Y 等级。任何更高或更低的部分在我们开始映射过程时都将被忽视。

## 用 EternalTD 映射构建
要把您的构建的玩家玩区映射出来供 EternalTD 使用，您需要按照以下步骤操作：

1. 手动测量构建，确保只包括玩家区域，不包括其他地方。测量时记下坐标。
   <br>游戏区域应包括这张地图的开始（怪物生成）和结束部分。开始通常使用绿色方块构建，结束时用红色方块。


2. 首先，测量构建的X，Y和Z轴。在您的地图玩家区域的X轴的一个角上站立，写下报告的坐标（您可以使用方块坐标）。移动至X轴的另一边，写下那个坐标。


3. 对于Y轴，站在**游戏区域**，并把报告的坐标写下。


4. 重复测量X轴时所做的同样过程，来测量Z轴。您可以看看这个示例图片以帮助你理解我们在此处试图完成什么：
   ![映射示例](https://i.imgur.com/IZfh2Nt.jpeg)
   请注意我们只测量我们想要的游戏区域的坐标，并忽略剩余的部分。就像示例中那样，请确保在测量游戏区域时包括开始和结束。
   <br>如果您正在测量的游戏区域在一端比较宽，在另一端比较窄，那么您应该测量最宽的部分。


5. 测量完成后，您应该有类似这样的内容：
   ```
   X axis: -57, 56
   Y axis: 65
   Z axis: 34, -34
   ```

6. 从最高到最低重新排列这些数字以获得两个完整的 XYZ 坐标集：
   ```
   56 65 34 (最高的 XYZ 值)
   -57 65 -34 (最低的 XYZ 值)
   ```

7. 使用以下命令选择坐标：
   ```
   /etd selectfloorcoordinate Xhigh Y Zhigh Xlow Y Zlow
   Example: /etd selectfloorcoordinate 56 65 34 -57 65 -34
   ```

8. 坐标现已被选中并存储在内存中。如果您得到一个错误，那么您的测量是不正确的，或者游戏区域没有被正确构建。为了检查我们是否正确地映射了游戏区域，运行以下命令：
   ```
   /etd register your_level_name.yml test
   ```
   将 "your_level_name" 替换为您试图创建的实际等级/地图名称。如果一切按计划进行，您应该看到在游戏区域内的每一个瓦片上都标有屏障。


9. 浏览游戏区域，确保一切看起来像应该的样子，然后再次运行命令，但这次在末尾不加*test*。
   ````
   /etd register your_level_name.yml
   ````
   这将现在将游戏区域保存到您的等级文件中，您的等级文件现在应当已经准备好供使用。

## 修剪世界文件夹
在您的世界文件夹中有多个文件和文件夹，我们可以丢弃，因为 EternalTD 不会使用所有的。这将减小您的世界的大小，并使其更容易分发。

对于 NORMAL 环境：

为了准备您的世界，**保留**以下文件和文件夹：

1.  **region** 文件夹


2.  **data** 文件夹内的 **raids.dat**（复制时确保它在 **data** 文件夹内）


3.  **level.dat** 文件

您可以安全地删除位于世界文件夹中的所有其他文件和文件夹。这将为 NORMAL 环境正确地设置您的世界。

对于 NETHER 和 THE_END 环境：

为了准备您的世界，保留以下文件和文件夹：

1.  **DIM-1** 文件夹内的 **region** 文件夹（复制时确保它在 **DIM-1** 文件夹内）


2.  **data** 文件夹内的 **raids.dat**（复制时确保它在 **data** 文件夹内）


3.  **level.dat** 文件
    您可以安全地删除位于世界文件夹中的所有其他文件和文件夹。这将为您的 NORMAL 环境正确设置您的世界。

对于 NETHER 和 THE_END 环境：

为准备您的世界，请保留以下文件和文件夹：

1.  **DIM-1** 文件夹内的 **region** 文件夹（复制时确保它位于 **DIM-1** 文件夹内）


2.  **data** 文件夹内的 **raids.dat**（复制时确保它位于 **data** 文件夹内）


3.  **level.dat** 文件

您可以安全地删除位于世界文件夹中的所有其他文件和文件夹。这将为您的 NETHER 和 THE_END 环境正确设置您的世界。