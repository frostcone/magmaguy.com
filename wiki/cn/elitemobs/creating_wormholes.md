[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 什么是虫洞？

虫洞是一种高效的门到门传送系统。传送门标有视觉效果。

# 虫洞机制

虫洞可以做以下操作：

*   通过一个门到达目的地的门，然后从目的地的门回到第一个门。
*   当玩家通过它们时播放声音
*   玩家通过它们时临时蒙蔽，以平滑过渡
*   把玩家推出来，避免被卷入传送循环
*   锁定玩家，避免在5秒内被连续传送
*   播放细腻的视觉效果
*   需要权限才能使用虫洞
*   需要使用货币才能使用虫洞
*   当目的地的门不可用时通知玩家和管理员

# 创建一个虫洞

虫洞被当作配置文件添加到虫洞文件夹中。可以创建子文件夹，如果你正在为特定的地牢添加虫洞，那么推荐用这种格式 ` ~/plugins/EliteMobs/wormholes/dungeonName/dungeonName\_identifier.yml`。

### 弹射

Yaw和Pitch（坐标中的最后两位数）在 `location1` 和 `location2` 中将决定玩家从虫洞中穿越时的方向。让我们看这个例子：

`location1: my_world,20,10,20,180,20`

如果Yaw设为 `180`，那么玩家会面向北方被弹射出来，如果Pitch设为 `20`，那么他们会稍微向上被弹射。如果你希望玩家在被弹射时保持在虫洞的同一块区块，那么用负数设定Pitch会是一个好主意，以确保玩家不会从区块上滑落。

## 虫洞配置
以下是一个有效的虫洞配置示例：

```yaml
isEnabled: true
location1: em_primis,1288.5,19,452.5,135,-23
location2: em_primis,1288.5,-39,451.5,180,-1
```

***

<div align="center">

### isEnabled

设置虫洞是否启用。

| 键       |       值        | 默认值 |
|-----------|:-------------------:|:-------:|
| `isEnabled` | [布尔值](#boolean) | `true`  |

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

| 键       |      值       | 默认值 |
|-----------|:-----------------:|:-------:|
| `location1` | [字符串](#string) |  无   |

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

| 键         |      值       | 默认值 |
|-------------|:-----------------:|:-------:|
| `location2` | [字符串](#string) |  无   |

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

| 键         |      值       | 默认值 |
|-------------|:-----------------:|:-------:|
| `location1Text` | [字符串](#string) |  无   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
location1Text: Awesome Wormhole In World One
```

<div align="center">

![create_wormhole_location1text.jpg](../../../img/wiki/create_wormhole_location1text.jpg)

</div>

</div>

</details>

***

### location2Text

设置第二个位置的显示文本。

| 键         |      值       | 默认值 |
|-------------|:-----------------:|:-------:|
| `location2Text` | [字符串](#string) |  无   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
location2Text: Awesome Wormhole In World Two
```

<div align="center">

![create_wormhole_location2text.jpg](../../../img/wiki/create_wormhole_location2text.jpg)

</div>

</div>

</details>

***

### permission

设置使用虫洞所需的权限。

| 键         |      值       | 默认值 |
|-------------|:-----------------:|:-------:|
| `permission` | [字符串](#string) |  无   |

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

设置使用虫洞所需的精英硬币的数量。

| 键         |      值       | 默认值 |
|-------------|:-----------------:|:-------:|
| `coinCost` | [双重](#double) |  无   |

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

*这些形状由的粒子可能会在某些客户端引起延迟。要关闭粒子，请在**Wormholes.yml**中将 `noParticlesMode` 设置为 `true`。*

| 键         |      值       | 默认值 |
|-------------|:-----------------:|:-------:|
| `style` | `NONE` / `CRYSTAL` / `ISOCAHEDRON` / `CUBE` |  `CUBE`   |

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

设置 `style` 设置中用到的粒子的颜色。

| 键         |      值       | 默认值 |
|-------------|:-----------------:|:-------:|
| `particleColor` | [`0x` 后跟十六进制代码](https://www.w3schools.com/colors/colors_hexadecimal.asp) |  `0x800080`   |

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

设置是否让门瞎了玩家以接近无缝的传送。

| 键         |      值       | 默认值 |
|-------------|:-----------------:|:-------:|
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

乘以 `style` 设定的门和形状的大小。

| 键         |      值       | 默认值 |
|-------------|:-----------------:|:-------:|
| `sizeMultiplier` | [乘数](#multiplier) |   `1`   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
sizeMultiplier: 3
```

*注意，在应用大小乘数后，你需要调整虫洞的Y坐标。*

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

在本示例中，我们将创建一个简单的虫洞，带我们从一个世界进入另一个世界。不要忘了，虫洞也可以只是把玩家传送到同一世界的不同位置。

```yml
isEnabled: true #我们通过将此值设置为true来启用虫洞
location1: my_world,1.5,11.0,1.5,108.0,5.0 #这是虫洞在my_world中出现的地方
location2: my_other_world,766.5,29.0,517.5,-136.0,5.0 #这是虫洞出现在my_other_world中的地方
location1Text: "&aGo to My World" #在虫洞location1上方制作一个很好的显示文本
location2Text: "&aGo to My Other World" #在虫洞location2上方制作一个很好的显示文本
permission: eliteperm.coolplayers #只有拥有这个权限的玩家才能使用虫洞，both for location1 and location2
coinCost: 2 #玩家需要支付12个精英硬币才能使用虫洞
style: CRYSTAL #这个虫洞将呈现水晶的形状
particleColor: 0x00ff00 #这会将虫洞粒子设置为绿色
blindPlayer: true #虫洞传送将使玩家在短时间内失明，使过度效果更易于接受
sizeMultiplier: 1.0 #设置虫洞形状的大小应为多少
```

</div>

</details>

#### 性能问题

虫洞粒子可能会对运行基岩版的玩家的客户端性能造成影响。如果你想关闭虫洞粒子，你可以到 `~plugins\EliteMobs\Wormholes.yml` 并更改 `noParticlesMode` 设置为 `true`。
