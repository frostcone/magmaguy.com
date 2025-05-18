好的，这是翻译成简体中文的版本，保留了 Markdown 格式：

# 如何创建自定义 EternalTD 地图

## 为你的地图创建 level.yml 文件

按照以下简单步骤创建关卡配置文件，开始制作你的地图：

1.  首先创建一个新的文本文档，并将其命名为 *your_level_name.yml*（将 "your_level_name" 替换为你实际的关卡/地图名称）。

2.  在你喜欢的文本编辑器中打开该文件。

3.  让我们开始有趣的部分！使用此设置添加你的关卡名称：
    ```yaml
    levelName: "&a我的超赞关卡"
    ```
    你可以随意添加一些 Minecraft 颜色或其他文本修饰符来美化它。

4.  现在，用一段酷炫的描述给你的关卡一些特色：
    ```yaml
    levelDescription:
    - "&a我的关卡非常酷。"
    - "&a希望你玩得开心！"
    ```
    你可以在描述中添加更多行，但保持简洁是个好主意。

5.  轮次时间到！指定你的关卡应该使用哪个 EternalTD 轮次文件：
    ```yaml
    wavesConfigFile: my_waves.yml
    ```
    记住使用你实际的轮次文件名。每个关卡一个轮次文件！

6.  设置你的关卡将使用的世界（建筑）：
    ```yaml
    worldName: my_world_folder_name
    ```
    使用 EternalTD 的 *worlds* 文件夹中找到的实际世界名称。

7.  最后但同样重要的是，为你的关卡设置选择一个完美的环境：
    ```yaml
    environment: NORMAL
    ```
    你可以选择 NORMAL、NETHER 或 THE_END。请选择。

你的关卡配置文件已全部设置完毕！文件的其余部分将由 EternalTD 命令填充，我们将在接下来的步骤中绘制建筑时使用这些命令。

## 准备你的建筑

在使用 EternalTD 绘制你的建筑之前，必须按照以下方式进行设置：

-   将其设置在一个虚空世界中。如果使用 multiverse，你可以使用以下命令：
    ```
    /mvcreate yourworldnamehere NORMAL -g VoidGen:.
    ```
-   在建筑周围设置一个紧密的世界边界。
-   在建筑下方几格处创建一个屏障方块圆柱体，高度为一格，半径足够大以达到世界边界（推荐半径 200 格）。使用 WorldEdit，你可以执行：
    ```
    //cyl barrier 200 1
    ```
-   将出生点设置在建筑中心的安全位置。
-   应用以下规则：
    -   /gamerule doWeatherCycle false
    -   /gamerule doDaylightCycle false
    -   /gamerule doMobSpawning false
    -   /gamerule doFireTick false
    -   /gamerule fireDamage false
    -   /gamerule mobGriefing false
    -   /gamerule disableRaids true
    -   /gamerule announceAdvancements false
-   地图的可玩区域需要在同一个 Y 坐标层。任何更高或更低的区域在开始映射过程时将被忽略。

## 绘制建筑以供 EternalTD 使用

要绘制你的建筑的可玩区域以供 EternalTD 使用，请按照以下步骤操作：

1.  手动测量建筑，确保只包含可玩区域，不包含其他任何东西。测量时记下坐标。
    <br>可玩区域应包括地图的起点（怪物生成点）和终点部分。起点通常使用绿色方块建造，终点使用红色方块。

2.  首先测量建筑的 X、Y 和 Z 轴。站在地图可玩区域 X 轴的一个角落，记下报告的坐标（你可以使用方块坐标）。移动到 X 轴的另一侧，记下该坐标。

3.  对于 Y 轴，站在**可玩区域**上，记下报告的坐标。

4.  重复测量 X 轴的过程来测量 Z 轴。你可以查看此示例图片，以帮助你理解我们想要实现的目标：
    ![映射示例](https://i.imgur.com/IZfh2Nt.jpeg)
    注意我们只测量我们想要的可玩区域的坐标，而忽略其余部分。如示例所示，测量可玩区域时请确保包含起点和终点。<br>如果你测量的可玩区域一端较宽，另一端较窄，则应测量最宽的部分。

5.  完成测量后，你应该得到类似这样的结果：
    ```
    X axis: -57, 56
    Y axis: 65
    Z axis: 34, -34
    ```

6.  将这些数字从高到低重新排列，得到两组完整的 XYZ 坐标：
    ```
    56 65 34 (最高 XYZ 值)
    -57 65 -34 (最低 XYZ 值)
    ```

7.  使用以下命令选择坐标：
    ```
    /etd selectfloorcoordinate Xhigh Y Zhigh Xlow Y Zlow
    示例: /etd selectfloorcoordinate 56 65 34 -57 65 -34
    ```

8.  坐标现已选中并存储在内存中。如果出现错误，则表示你的测量不正确或可玩区域未正确构建。要检查我们是否正确绘制了可玩区域，请运行以下命令：
    ```
    /etd register your_level_name.yml test
    ```
    将 "your_level_name" 替换为你正在尝试创建的实际关卡/地图名称。如果一切都正确完成，你应该会看到屏障标记着你可玩区域中的每一个方块。

9.  检查可玩区域，确保一切看起来都正常，然后再次运行命令，但这次不带末尾的 *test*。
    ```
    /etd register your_level_name.yml
    ```
    这将把可玩区域保存到你的关卡文件中，你的关卡文件现在应该可以使用了。

## 精简世界文件夹

你的世界文件夹中包含一些文件和文件夹，由于 EternalTD 不使用所有这些文件和文件夹，我们可以将其丢弃。这将减小你的世界大小，使其更容易分发。

对于 NORMAL 环境：

要准备你的世界，请**保留**以下文件和文件夹：

1.  **region** 文件夹

2.  **data** 文件夹中的 **raids.dat** 文件（复制时确保它在 **data** 文件夹内）

3.  **level.dat** 文件

你可以安全地删除世界文件夹中的所有其他文件和文件夹。这将为 NORMAL 环境正确设置你的世界。

对于 NETHER 和 THE_END 环境：

要准备你的世界，请保留以下文件和文件夹：

1.  **DIM-1** 文件夹内的 **region** 文件夹（复制时确保它在 **DIM-1** 文件夹内）

2.  **data** 文件夹中的 **raids.dat** 文件（复制时确保它在 **data** 文件夹内）

3.  **level.dat** 文件

你可以安全地删除世界文件夹中的所有其他文件和文件夹。这将为 NETHER 和 THE_END 环境正确设置你的世界。