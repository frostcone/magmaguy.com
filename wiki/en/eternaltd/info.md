
# How to Create a Custom EternalTD Map

## Creating the level.yml file for your map

Get your map started by creating a level config file following these simple steps:

1. Start by making a new text document and giving it a name like *your_level_name.yml* (replace "your_level_name" with your actual level/map name).

2. Open the file in your favorite text editor.

3. Let's begin with the fun part! Add your level's name using this setting:
```yaml
levelName: "&aMy Awesome Level"
```
Feel free to spice it up with some Minecraft colors or other text modifiers.

4. Now, give your level some character with a cool description:
```yaml
levelDescription:
- "&aMy level is pretty cool."
- "&aHope you enjoy!"
```
You can add more lines to the description, but keeping it brief is a good idea.

5. Time for waves! Specify which EterntalTD waves your level should use:
```yaml
wavesConfigFile: my_waves.yml
```
Just remember to use the actual name of your wave file. One wave per level!

6. Set the world (build) your level will use:
```yaml
worldName: my_world_folder_name
```
Use the actual world name found within EternalTD's *worlds* folder.

7. Last but not least, pick the perfect environment for your level's setting:
```yaml
environment: NORMAL
```
You can choose between NORMAL, NETHER, or THE_END. Take your pick.

Your level config file is all set! The rest of the file will be filled out by EternalTD commands that we will be using in the next steps when we map out the build.
## Preparing your build
Before mapping out your build for use with EternalTD, it's essential to set it up in the following way:

- Set it in a Void world. If using multiverse, you can use the command:
  ```
  /mvcreate yourworldnamehere NORMAL -g VoidGen:.
  ```
- Have a tight world border around the build.
- Create a barrier cylinder a few blocks below the build with a height of one block and a radius large enough to reach the world border (recommended 200 block radius). Using WorldEdit, you can execute:
  ```
  //cyl barrier 200 1
  ```
- Set the spawn point to be in the center of the build in a safe place.
- Apply the following rules:
    - /gamerule doWeatherCycle false
    - /gamerule doDaylightCycle false
    - /gamerule doMobSpawning false
    - /gamerule doFireTick false
    - /gamerule fireDamage false
    - /gamerule mobGriefing false
    - /gamerule disableRaids true
    - /gamerule announceAdvancements false
- The play area of the map needs to be on the same Y level. Anything that is higher or lower will be ignored when we start the mapping process.
## Maping out the build for use with EternalTD
To map out the play area of your build for use with EternalTD, follow these steps:

1. Manually measure the build, making sure to include only the play area and nothing else. Note down the coordinates as you measure. The play area should include the start (monster spawn) and end sections of the map. The start is usually built using green blocks and with red blocks for the end.

2. Start by measuring the X, Y, and Z axes of the build. Stand at one corner of your maps play area on the X-axis and write down the reported coordinate (you can use the block coordinates for this). Move to the opposite side of the X-axis and write down that coordinate.

3. For the Y-axis, stand on the **play area** and write down the reported coordinate.

4. Repeat the same process as done for the X-axis to measure the Z-axis. You can take a look at this example image to help you understand what we are trying to accomplish here:
   ![Mapping Example](https://i.imgur.com/IZfh2Nt.jpeg)
   Notice how we are only measuring the coordinates where we want our play area to be and ignoring the rest. As in the example please make sure you include start and end when measuring out the play area. If the play area you are measuring is wider at one end and narrower at the other you should measure the widest section.

5. After completing the measurements, you should have something like this:
   ```
   X axis: -57, 56
   Y axis: 65
   Z axis: 34, -34
   ```

6. Rearrange these numbers from highest to lowest to get two full sets of XYZ coordinates:
   ```
   56 65 34 (highest XYZ values)
   -57 65 -34 (lowest XYZ values)
   ```

7. Use the following command to select the coordinates:
   ```
   /etd selectfloorcoordinate Xhigh Y Zhigh Xlow Y Zlow
   Example: /etd selectfloorcoordinate 56 65 34 -57 65 -34
   ```

8. The coordinates have now been selected and are in memory. If you get an error then your measurement was incorrect or the play area was not properly built. To check if we mapped the play area correctly, run the following command:
   ```
   /etd register your_level_name.yml test
   ```
   Replace "your_level_name" with the actual level/map name you are trying to create. If everything was done correctly, you should see barriers marking every single tile in your play area.

9. Go over the play area and ensure everything looks like it should and then run the command again but this time without the *test* at the end.
   ````
   /etd register your_level_name.yml
   ````
   This will now save the play area to your level file and your level file should now be ready for use.
## Trimming the world folder
There are several files and folders located in your world folder that we can discard since EternalTD does not use all of them. This will cut down the size of your world and make it easier to distribute.

For NORMAL Environment:

To prepare your world, keep the following files and folders:

1.  **region** folder
2.  **raids.dat** from within the **data** folder (ensure it's placed inside the **data** folder when copying)
3.  **level.dat** file

You can safely delete all other files and folders located in the world folder. This will set up your world correctly for the NORMAL environment.

For NETHER and THE_END Environment:

To prepare your world, keep the following files and folders:

1.  **region** folder inside the **DIM-1** folder (ensure it's placed inside the **DIM-1** folder when copying)
2.  **raids.dat** from within the **data** folder (ensure it's placed inside the **data** folder when copying)
3.  **level.dat** file

You can safely delete all other files and folders located in the world folder. This will set up your world correctly for the NETHER and THE_END environments.