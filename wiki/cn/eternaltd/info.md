# 如何创建自定义 EternalTD 地图

## 创建地图的 level.yml 文件

通过以下简单步骤开始创建您的地图级别配置文件：

1. 首先创建一个新的文本文档，并将其命名为 *your_level_name.yml*（将 "your_level_name" 替换为您实际的级别/地图名称）。

2. 在您喜欢的文本编辑器中打开该文件。

3. 让我们从有趣的部分开始！使用以下设置添加您的级别名称：
   ```yaml
   levelName: "&a我的超棒关卡"
   ```
   随意使用一些 Minecraft 颜色或其他文本修饰符来增加趣味性。

4. 现在，用一段酷炫的描述给你的关卡一些特色：
   ```yaml
   levelDescription:
   - "&a我的关卡非常酷。"
   - "&a希望你喜欢！"
   ```
   您可以在描述中添加更多行，但保持简洁是个好主意。

5. 是时候添加波数了！指定你的关卡应该使用哪些 EternalTD 波次：
   ```yaml
   wavesConfigFile: my_waves.yml
   ```
   请记住使用您的波次文件的实际名称。每个级别一个波次！

6. 设置您的关卡将使用的世界（建筑）：
   ```yaml
   worldName: my_world_folder_name
   ```
   使用在 EternalTD 的 *worlds* 文件夹中找到的实际世界名称。

7. 最后但同样重要的是，为您的关卡设置选择完美的环境：
   ```yaml
   environment: NORMAL
   ```
   您可以选择 NORMAL、NETHER 或 THE_END。选择一个即可。

您的关卡配置文件已全部设置完毕！该文件的其余部分将由 EternalTD 命令填充，我们将在下一步绘制构建时使用这些命令。

## 准备您的构建

在绘制您的构建以与 EternalTD 一起使用之前，必须按以下方式进行设置：

- 将其设置在虚空世界中。如果使用 multiverse，您可以使用命令：
  ```
  /mvcreate yourworldnamehere NORMAL -g VoidGen:.
  ```
- 在构建周围设置一个紧密的世界边界。
- 在构建下方几格处创建一个屏障圆柱体，高度为一格，半径足够大，可以到达世界边界（建议半径为 200 个方块）。使用 WorldEdit，您可以执行：
  ```
  //cyl barrier 200 1
  ```
- 将出生点设置在构建的中心安全位置。
- 应用以下规则：
    - /gamerule doWeatherCycle false
    - /gamerule doDaylightCycle false
    - /gamerule doMobSpawning false
    - /gamerule doFireTick false
    - /gamerule fireDamage false
    - /gamerule mobGriefing false
    - /gamerule disableRaids true
    - /gamerule announceAdvancements false
- 地图的游玩区域必须在相同的 Y 轴高度。当开始映射过程时，任何高于或低于此高度的内容都将被忽略。

## 绘制构建以与 EternalTD 一起使用

要绘制您的构建的游玩区域以与 EternalTD 一起使用，请按照以下步骤操作：

1. 手动测量构建，确保仅包含游玩区域，不包含其他任何内容。在测量时记下坐标。
   <br>游玩区域应包括地图的开始（怪物生成）和结束部分。开始通常使用绿色方块构建，结束则使用红色方块。

2. 首先测量构建的 X、Y 和 Z 轴。站在地图游玩区域的 X 轴的一个角上，并记下报告的坐标（您可以使用方块坐标）。移动到 X
   轴的另一侧并记下该坐标。

3. 对于 Y 轴，站在**游玩区域**上并记下报告的坐标。

4. 重复与 X 轴相同的过程来测量 Z 轴。您可以查看此示例图像以帮助您了解我们在此尝试完成的操作：
   ![映射示例](https://i.imgur.com/IZfh2Nt.jpeg)
   请注意，我们仅测量我们想要游玩区域所在的坐标，而忽略其余部分。如示例所示，请确保在测量游玩区域时包括起始和结束位置。<br>
   如果正在测量的游玩区域在一端较宽而在另一端较窄，则应测量最宽的部分。

5. 完成测量后，您应该得到类似以下内容：
   ```
   X 轴：-57，56
   Y 轴：65
   Z 轴：34，-34
   ```

6. 将这些数字从高到低重新排列，以获得两组完整的 XYZ 坐标：
   ```
   56 65 34 (最高 XYZ 值)
   -57 65 -34 (最低 XYZ 值)
   ```

7. 使用以下命令选择坐标：
   ```
   /etd selectfloorcoordinate Xhigh Y Zhigh Xlow Y Zlow
   示例：/etd selectfloorcoordinate 56 65 34 -57 65 -34
   ```

8. 坐标现已选择并存储在内存中。如果出现错误，则说明您的测量不正确或游玩区域构建不正确。要检查是否正确映射了游玩区域，请运行以下命令：
   ```
   /etd register your_level_name.yml test
   ```
   将 "your_level_name" 替换为您尝试创建的实际级别/地图名称。如果一切操作正确，您应该会看到标记游玩区域中每个图块的屏障。

9. 检查游玩区域并确保一切看起来都正常，然后再次运行该命令，但这次不要在末尾加上 *test*。
   ````
   /etd register your_level_name.yml
   ````
   现在，这会将游玩区域保存到您的级别文件中，并且您的级别文件现在应该可以使用了。

## 修剪世界文件夹

您的世界文件夹中有几个文件和文件夹，我们可以丢弃它们，因为 EternalTD 不会使用所有文件和文件夹。这将减小世界的大小，并使其更易于分发。

对于 NORMAL 环境：

要准备您的世界，请**保留**以下文件和文件夹：

1. **region** 文件夹

2. **data** 文件夹中的 **raids.dat**（确保复制时位于 **data** 文件夹内）

3.  **level.dat** 文件

您可以安全地删除世界文件夹中所有其他文件和文件夹。这将为 NORMAL 环境正确设置您的世界。

对于 NETHER 和 THE_END 环境：

要准备您的世界，请保留以下文件和文件夹：

1. **DIM-1** 文件夹内的 **region** 文件夹（确保复制时位于 **DIM-1** 文件夹内）

2. **data** 文件夹中的 **raids.dat**（确保复制时位于 **data** 文件夹内）

3.  **level.dat** 文件

您可以安全地删除世界文件夹中所有其他文件和文件夹。这将为 NETHER 和 THE_END 环境正确设置您的世界。
