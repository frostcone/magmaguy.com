## Geradores

Os geradores são a parte mais poderosa do sistema de configuração para BetterStructures. Por padrão, existem 27
geradores que, coletivamente, gerenciam mais de 200 construções atualmente distribuídas pelo BetterStructures, e embora
você possa criar seus próprios geradores, também pode usar os existentes como um atalho.

Os geradores dizem ao plugin onde exatamente as coisas devem surgir e definem tabelas de saques. Os geradores padrão
também são nomeados de maneiras que devem ser muito fáceis de adivinhar o que fazem.

O único campo obrigatório para os geradores é a configuração `structureType`, que diz ao plugin se a construção deve
surgir no céu, subterrâneo raso, subterrâneo profundo, superfície ou superfície líquida.

***

### isEnabled

Define se o gerador está ativado.

***

### structureType

Define que tipo de estrutura é a construção. **Note que pode criar uma lista de vários tipos!**

Os seguintes são valores de tipo de estrutura válidos:

***

#### surface

```yml
structureType: 
- SURFACE
```

As estruturas de superfície surgem na superfície do mundo. A única exceção é o ambiente do Nether, onde surge em pontos
que o plugin considera suficientemente semelhantes à superfície.

***

#### sky

```yml
structureType: 
- SKY
```

As estruturas do céu surgem entre 80 e 120 blocos acima do ar, configurável em config.yml. A única exceção é o ambiente
do Nether, onde surge em pontos que o plugin considera suficientemente semelhantes ao ar.

***

#### underground_shallow

```yml
structureType: 
- UNDERGROUND_SHALLOW
```

As estruturas subterrâneas rasas surgem entre y=0 e y=60 no mundo superior, y=60 e y=120 no nether e qualquer altura
subterrânea válida no End.

_**Nota: ** Irá notar que existem duas configurações subterrâneas. Isto acontece porque ter apenas uma resulta numa
subterrânea muito escassa, uma vez que o Minecraft tem muito espaço subterrâneo e os jogadores muitas vezes perdem
estruturas subterrâneas simplesmente porque não as encontraram a minerar. Isto também garante que existe uma propagação
uniforme em diferentes profundidades._

***

#### underground_deep

```yml
structureType: 
- UNDERGROUND_DEEP
```

As estruturas subterrâneas profundas surgem entre y=-64 e y=0 no mundo superior, y=0 e y=60 no nether e não surgem no
End.

***

#### liquid_surface

```yml
structureType: 
- LIQUID_SURFACE
```

As estruturas de superfície líquida irão surgir em líquidos. No caso do mundo superior, surgirão na água e quase sempre
nos oceanos. No caso do Nether, surgirão nos lagos de lava. Não surgirão no End.

***

### lowestYLevel

Define o nível Y (altitude) mais baixo em que a estrutura irá surgir.

***

### highestYLevel

Define o nível Y (altitude) mais alto em que a estrutura irá surgir.

***

### validWorlds

Define a lista de mundos em que a estrutura irá surgir. **Se nenhuma lista estiver presente, irá usar todos os mundos
permitidos pelo plugin**, a menos que seja limitado de outra forma (como pelo tipo de ambiente ou biomas).

***

### validWorldEnvironments

Define a lista de ambientes de mundo em que a estrutura irá surgir. **Se nenhuma lista estiver presente, irá usar todos
os ambientes de mundo permitidos pelo plugin**. Valores válidos: `NORMAL`, `NETHER`, `END` e `CUSTOM`.

***

### validBiomes

Define a lista de biomas válidos em que a estrutura irá surgir. **Se nenhuma lista for definida, assumirá que todos os
biomas são válidos!**.

Isto requer o uso da lista de biomas conforme definido
pela [API Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html).

***

### treasureFilename

Define o ficheiro de tesouros que o gerador irá usar. Isso define o que surge nos baús para todas as construções que
usam este gerador, a menos que um valor diferente seja definido na configuração `treasureFile` de uma configuração
esquemática [definição `treasureFile` de uma configuração esquemática]($language$/betterstructures/creating_structures.md&section=treasurefile).
