[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 什么是虫洞？

虫洞是一种高效的门户到门户的传送系统。门户会用视觉效果进行标记。

# 虫洞机制

虫洞可以执行以下操作：

* 通过一个门户到达目标门户，并从目标门户返回到第一个门户。
* 玩家通过时播放声音
* 在玩家通过时暂时致盲，以平滑过渡
* 将玩家推出，以避免陷入传送循环
* 锁定玩家传送 5 秒，以避免陷入传送循环
* 播放精细的视觉效果
*   需要权限才能使用虫洞
*   需要使用货币才能使用虫洞
* 当目标门户不可用时通知玩家和管理员

# 创建虫洞

虫洞作为配置文件添加到 wormholes
文件夹中。可以创建子文件夹，如果为特定地下城添加虫洞，建议采用以下格式 ` ~/plugins/EliteMobs/wormholes/dungeonName/dungeonName_identifier.yml`。

### 弹射

`location1` 和 `location2` 中的偏航和俯仰（坐标中的最后两位）将设置玩家通过虫洞时被弹出的位置。看下面这个例子：

`location1: my_world,20,10,20,180,20`

偏航设置为 `180`，玩家将被弹出面朝北方，俯仰设置为 `20`，他们也会被稍微向上弹出。如果您希望玩家在被弹出时停留在与虫洞相同的方块中，那么最好将俯仰设置为负数，以确保玩家不会从方块上滑落。

## 虫洞配置

以下是有效的虫洞配置示例：

```yaml
isEnabled: true
location1: em_primis,1288.5,19,452.5,135,-23
location2: em_primis,1288.5,-39,451.5,180,-1
```

***

<div align="center">

### isEnabled

设置是否启用虫洞。

| 键           |        值        |  默认值   |
|-------------|:---------------:|:------:|
| `isEnabled` | [布尔值](#boolean) | `true` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### location1

指定虫洞的第一个位置。

| 键           |       值        | 默认值 |
|-------------|:--------------:|:---:|
| `location1` | [字符串](#string) |  无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
location1: world_one,50,100,50,0,0
```

</div>

</details>

***

### location2

指定虫洞的第二个位置。

| 键           |       值        | 默认值 |
|-------------|:--------------:|:---:|
| `location2` | [字符串](#string) |  无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
location2: world_two,100,33,100,0,0
```

</div>

</details>

***

### location1Text

设置第一个位置的显示文本。

| 键               |       值        | 默认值 |
|-----------------|:--------------:|:---:|
| `location1Text` | [字符串](#string) |  无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
location1Text: 世界一中的超赞虫洞
```

<div align="center">

![create_wormhole_location1text.jpg](../../../img/wiki/create_wormhole_location1text.jpg)

</div>

</div>

</details>

***

### location2Text

设置第二个位置的显示文本。

| 键               |       值        | 默认值 |
|-----------------|:--------------:|:---:|
| `location2Text` | [字符串](#string) |  无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
location2Text: 世界二中的超赞虫洞
```

<div align="center">

![create_wormhole_location2text.jpg](../../../img/wiki/create_wormhole_location2text.jpg)

</div>

</div>

</details>

***

### permission

设置使用虫洞所需的权限。

| 键            |       值        | 默认值 |
|--------------|:--------------:|:---:|
| `permission` | [字符串](#string) |  无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
permission: elitemobs.mypermission
```

</div>

</details>

***

### coinCost

设置使用虫洞的精英币成本。

| 键          |         值         | 默认值 |
|------------|:-----------------:|:---:|
| `coinCost` | [双精度浮点数](#double) |  无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
coinCost: 2.5
```

</div>

</details>

***

### style

设置虫洞的视觉形状。

*构成这些形状的粒子可能会导致某些客户端出现延迟。要关闭粒子，请进入 **Wormholes.yml** 并将 `noParticlesMode`
设置为 `true`。*

| 键       |                      值                      |  默认值   |
|---------|:-------------------------------------------:|:------:|
| `style` | `NONE` / `CRYSTAL` / `ISOCAHEDRON` / `CUBE` | `CUBE` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
style: CRYSTAL
```

<div align="center">

![create_wormhole_style.jpg](../../../img/wiki/create_wormhole_style.jpg)

</div>

</div>

</details>

***

### particleColor

设置 `style` 设置中使用的粒子的颜色。

| 键               |                                     值                                      |    默认值     |
|-----------------|:--------------------------------------------------------------------------:|:----------:|
| `particleColor` | [`0x` 后跟一个十六进制代码](https://www.w3schools.com/colors/colors_hexadecimal.asp) | `0x800080` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
particleColor: 0x9f5cdd
```

<div align="center">

![create_wormhole_particlecolor.jpg](../../../img/wiki/create_wormhole_particlecolor.jpg)

</div>

</div>

</details>

***

### blindPlayer

设置门户是否会使玩家暂时失明，以实现更平滑的传送。

| 键             |        值        |   默认值   |
|---------------|:---------------:|:-------:|
| `blindPlayer` | [布尔值](#boolean) | `false` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
blindPlayer: true
```

<div align="center">

![create_wormhole_blind.jpg](../../../img/wiki/create_wormhole_blind.jpg)

</div>

</div>

</details>

***

### sizeMultiplier

乘以门户和 `style` 设置的形状的大小。

| 键                |         值         | 默认值 |
|------------------|:-----------------:|:---:|
| `sizeMultiplier` | [乘数](#multiplier) | `1` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
sizeMultiplier: 3
```

*请记住，应用大小乘数后，您必须调整虫洞的 Y 坐标。*

<div align="center">

![create_wormhole_size.jpg](../../../img/wiki/create_wormhole_size.jpg)

</div>

</div>

</details>

</div>

***

<details>

<summary align="center"><b>虫洞配置示例</b></summary>

<div align="left">

在此示例中，我们将创建一个简单的虫洞，将我们从一个世界带到另一个世界。不要忘记，虫洞也可以将玩家传送到同一世界中的不同位置。

```yml
isEnabled: true #通过将此值设置为 true 来启用虫洞
location1: my_world,1.5,11.0,1.5,108.0,5.0 #这是虫洞将出现在 my_world 中的位置
location2: my_other_world,766.5,29.0,517.5,-136.0,5.0 #这是虫洞将出现在 my_other_world 中的位置
location1Text: "&a前往我的世界" #在虫洞位置 1 上方显示漂亮的文本
location2Text: "&a前往我的其他世界" #在虫洞位置 2 上方显示漂亮的文本
permission: eliteperm.coolplayers #只有拥有此权限的玩家才能使用虫洞，位置 1 和位置 2 都是如此
coinCost: 2 #玩家需要支付 12 个精英币才能使用虫洞
style: CRYSTAL #此虫洞的形状为水晶
particleColor: 0x00ff00 #这将把虫洞粒子设置为绿色
blindPlayer: true #虫洞传送会让玩家暂时失明，以使过渡不那么刺耳
sizeMultiplier: 1.0 #设置虫洞形状的大小
```

</div>

</details>

#### 性能问题

对于运行基岩版的玩家，虫洞粒子可能会导致客户端性能问题。如果您想关闭虫洞粒子，可以转到 `~plugins\EliteMobs\Wormholes.yml`
并将 `noParticlesMode` 设置更改为 `true`。
