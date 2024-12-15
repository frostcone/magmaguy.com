## Geradores

Os geradores são a parte mais poderosa do sistema de configuração do BetterStructures. Por padrão, existem 27 geradores que gerem coletivamente mais de 200 construções atualmente distribuídas pelo BetterStructures, e embora possa criar os seus próprios geradores, também pode usar os existentes como atalho.

Os geradores dizem ao plugin onde exatamente as coisas devem surgir e definem tabelas de loot. Os geradores padrão também são nomeados de forma que seja muito fácil adivinhar o que fazem.

O único campo obrigatório para os geradores é a configuração `structureType`, que diz ao plugin se a construção deve surgir no céu, no subsolo raso, no subsolo profundo, na superfície ou na superfície líquida.

***

### isEnabled

Define se o gerador está ativado.

***

### structureType

Define que tipo de estrutura é a construção. **Observe que pode criar uma lista de vários tipos!**

Os seguintes são valores de tipo de estrutura válidos:

***

#### surface

```yml
structureType: 
- SURFACE
```

As estruturas de superfície surgem na superfície do mundo. A única exceção é o ambiente Nether, onde surgem em pontos que o plugin considera suficientemente semelhantes à superfície.

***

#### sky

```yml
structureType: 
- SKY
```

As estruturas do céu surgem entre 80 e 120 blocos acima do ar, configuráveis em config.yml. A única exceção é o ambiente Nether, onde surge em pontos que o plugin considera suficientemente semelhantes ao ar.

***

#### underground_shallow

```yml
structureType: 
- UNDERGROUND_SHALLOW
```

As estruturas subterrâneas rasas surgem entre y=0 e y=60 no overworld, y=60 e y=120 no nether e qualquer altura subterrânea válida no End.

_**Nota:** Irá notar que existem duas configurações subterrâneas. Isto porque ter apenas uma resulta em ter um subsolo muito escasso, já que o Minecraft tem muito espaço subterrâneo e os jogadores muitas vezes perdem estruturas subterrâneas simplesmente porque não escavaram até elas. Isto também garante que haja uma distribuição uniforme em diferentes profundidades._

***

#### underground_deep

```yml
structureType: 
- UNDERGROUND_DEEP
```

As estruturas subterrâneas profundas surgem entre y=-64 e y=0 no overworld, y=0 e y=60 no nether e não surgem no End.

***

#### liquid_surface

```yml
structureType: 
- LIQUID_SURFACE
```

As estruturas de superfície líquida surgirão em líquidos. No caso do overworld, irão surgir em água e quase sempre em oceanos. No caso do Nether, irão surgir nos lagos de lava. Não irão surgir no End.

***

### lowestYLevel

Define o nível Y mais baixo (altitude) em que a estrutura irá surgir.

***

### highestYLevel

Define o nível Y mais alto (altitude) em que a estrutura irá surgir.

***

### validWorlds

Define a lista de mundos em que a estrutura irá surgir. **Se não existir lista, irá usar todos os mundos permitidos pelo plugin**, a menos que seja limitado de outra forma (tal como pelo tipo de ambiente ou biomas).

***

### validWorldEnvironments

Define a lista de ambientes mundiais em que a estrutura irá surgir. **Se não existir lista, irá usar todos os ambientes mundiais permitidos pelo plugin**. Valores válidos: `NORMAL`, `NETHER`, `END` e `CUSTOM`.

***

### validBiomes

Define a lista de biomas válidos em que a estrutura irá surgir. **Se não for definida nenhuma lista, irá assumir que todos os biomas são válidos!**.

Isto requer usar a lista de biomas conforme definida pela [Spigot API](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html).

***

### treasureFilename

Define o ficheiro de tesouros que o gerador irá usar. Isto define o que surge nos baús para todas as construções que usam este gerador, a menos que um valor diferente seja definido na configuração `treasureFile` de uma configuração esquemática [($language$/betterstructures/creating_structures.md&section=treasurefile)].
