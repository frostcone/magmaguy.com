# 如何创建自定义 EternalTD 地图

## 为您的地图创建 level.yml 文件

按照以下简单步骤创建等级配置文件，开始创建您的地图：

1. 首先创建一个新的文本文档，并为其命名，例如 *your_level_name.yml*（将“your_level_name”替换为您的实际等级/地图名称）。

2. 在您喜欢的文本编辑器中打开该文件。

3. 让我们从有趣的部分开始！使用以下设置添加您等级的名称：
```yaml
levelName: "&a我的超棒等级"
```
您可以随意使用一些 Minecraft 颜色或其他文本修饰符来修饰它。

4. 现在，用酷炫的描述赋予您的等级一些个性：
```yaml
levelDescription:
- "&a我的等级非常酷。"
- "&a希望您喜欢！"
```
您可以向描述中添加更多行，但简短一些是个好主意。

5. 时间到波次了！指定您的等级应该使用哪些 EternalTD 波次：
```yaml
wavesConfigFile: 我的波次.yml
```
请记住使用您的波次文件的实际名称。每个等级一个波次！

6. 设置您的等级将使用的世界（构建）：
```yaml
worldName: 我的世界_文件夹_名称
```
使用 EternalTD 的 *worlds* 文件夹中的实际世界名称。

7. 最后但并非最不重要的一点是，为您的等级设置选择完美的环境：
```yaml
environment: 普通
```
您可以在普通、地狱或末地之间进行选择。做出您的选择。

您的等级配置文件已全部设置完毕！文件的其余部分将由 EternalTD 命令填充，我们将在下一步映射构建时使用这些命令。

## 准备您的构建
在映射您的构建以供 EternalTD 使用之前，必须按以下方式进行设置：

- 在虚空世界中设置它。如果使用 multiverse，您可以使用以下命令：
  ```
  /mvcreate 您的世界名称 普通 -g VoidGen:.
  ```
- 在构建周围设置一个紧密的世界边界。
- 在构建下方几个方块处创建一个高度为一个方块、半径足以到达世界边界（建议半径为 200 个方块）的屏障圆柱体。使用 WorldEdit，您可以执行：
  ```
  //cyl barrier 200 1
  ```
- 将生成点设置在构建中心的安全位置。
- 应用以下规则：
    - /gamerule doWeatherCycle false
    - /gamerule doDaylightCycle false
    - /gamerule doMobSpawning false
    - /gamerule doFireTick false
    - /gamerule fireDamage false
    - /gamerule mobGriefing false
    - /gamerule disableRaids true
    - /gamerule announceAdvancements false
- 地图的游戏区域需要位于同一 Y 等级。当我们开始映射过程时，任何更高或更低的内容都将被忽略。

## 映射构建以供 EternalTD 使用
要映射您的构建的游戏区域以供 EternalTD 使用，请按照以下步骤操作：

1. 手动测量构建，确保只包括游戏区域，不包括其他任何内容。在测量时记下坐标。
<br>游戏区域应包括地图的开始（怪物生成）和结束部分。开始通常使用绿色方块构建，结束使用红色方块构建。


2. 首先测量构建的 X、Y 和 Z 轴。站在地图游戏区域 X 轴的一角，记下报告的坐标（您可以使用方块坐标）。移动到 X 轴的另一侧，记下该坐标。


3. 对于 Y 轴，站在 **游戏区域** 并记下报告的坐标。


4. 重复与测量 X 轴相同的过程来测量 Z 轴。您可以查看此示例图像以帮助您了解我们在此处尝试完成的操作：
   ![映射示例](https://i.imgur.com/IZfh2Nt.jpeg)
   请注意，我们只测量了我们希望游戏区域所在的坐标，而忽略了其余部分。如示例所示，请确保在测量游戏区域时包括开始和结束。 <br>如果您正在测量的游戏区域一端较宽，另一端较窄，则应测量最宽的部分。


5. 完成测量后，您应该得到如下内容：
   ```
   X 轴：-57, 56
   Y 轴：65
   Z 轴：34, -34
   ```

6. 重新排列这些数字，从最高到最低，得到两组完整的 XYZ 坐标：
   ```
   56 65 34（最高的 XYZ 值）
   -57 65 -34（最低的 XYZ 值）
   ```

7. 使用以下命令选择坐标：
   ```
   /etd selectfloorcoordinate X 高 Y Z 高 X 低 Y Z 低
   示例：/etd selectfloorcoordinate 56 65 34 -57 65 -34
   ```

8. 现在已选择坐标并将其存储在内存中。如果您收到错误，则说明您的测量不正确或游戏区域未正确构建。要检查我们是否正确映射了游戏区域，请运行以下命令：
   ```
   /etd register your_level_name.yml test
   ```
   将“your_level_name”替换为您尝试创建的实际等级/地图名称。如果一切正确完成，您应该会看到屏障标记您游戏区域中的每个图块。


9. 检查游戏区域并确保一切都如预期一样，然后再次运行该命令，但这次不要在末尾添加 *test*。
   ````
   /etd register your_level_name.yml
   ````
   现在，这会将游戏区域保存到您的等级文件中，并且您的等级文件现在应该可以使用了。

## 修剪世界文件夹
您的世界文件夹中有一些文件和文件夹我们可以丢弃，因为 EternalTD 不会使用所有这些文件和文件夹。这将减少您的世界的大小，并使其更易于分发。

对于普通环境：

要准备您的世界，请**保留**以下文件和文件夹：

1.  **region** 文件夹


2.  **data** 文件夹中的 **raids.dat**（确保在复制时将其放在 **data** 文件夹中）


3.  **level.dat** 文件

您可以安全地删除世界文件夹中所有其他文件和文件夹。这将为普通环境正确设置您的世界。

对于地狱和末地环境：

要准备您的世界，请保留以下文件和文件夹：

1.  **DIM-1** 文件夹中的 **region** 文件夹（确保在复制时将其放在 **DIM-1** 文件夹中）


2.  **data** 文件夹中的 **raids.dat**（确保在复制时将其放在 **data** 文件夹中）


3.  **level.dat** 文件

您可以安全地删除世界文件夹中所有其他文件和文件夹。这将为地狱和末地环境正确设置您的世界。





