# Criação de conteúdo

***

## Criar a construção

Não há restrições sobre o que podes construir para o BetterStructures, embora seja recomendado manter o tamanho das
estruturas abaixo de 100x100x100 blocos por motivos gerais de ajuste ao mundo e desempenho. Dito isso, ele pode
facilmente lidar com estruturas muito maiores.

***

### Blocos especiais

O BetterStructures tem dois blocos especiais: barreiras e rocha matriz. Qualquer outro bloco que o WorldEdit/FAWE possa
colar será colado normalmente, mas os blocos de barreiras e rocha matriz são a exceção. Em vez de colar, esses blocos
são substituídos pelos seguintes comportamentos personalizados:

***

#### Barreira

Os blocos de barreira fazem com que o plugin não coloque nenhum bloco naquele local. Isso significa que qualquer bloco
que estivesse originalmente lá na geração normal do mundo permanecerá lá.

Os construtores podem usar isso para arredondar as bordas de uma colagem, tornando-a mais natural, ou para moldar
paredes a uma possível caverna, entre outros truques.

***

#### Rocha Matriz

Os blocos de rocha matriz fazem com que o plugin garanta que haja um bloco sólido naquele local. Isso significa que, se
um bloco sólido já estiver lá na geração padrão do mundo, esse bloco não será modificado; no entanto, se o bloco for ar
ou líquido, ele será substituído por um bloco sólido do [pedestal](#pedestalmaterial).

Os construtores podem usar isso para criar pisos com funcionalidades como o piso para trilhos de minecart ou garantir
que um piso exista sem substituir blocos sólidos potencialmente já existentes naquele local no mundo, fazendo com que as
construções pareçam mais orgânicas.

***

### Placas de geração

O BetterStructures pode usar placas com texto específico para gerar mobs e até chefes de EliteMobs e MythicMobs em
locais específicos da construção.

***

##### Gerar mobs vanilla

Se pegares uma placa normal e a colocares em algum lugar, certifica-te de que a primeira linha diga `[spawn]` e a
segunda linha tenha
o [nome do tipo de entidade seguindo a API Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html),
irás gerar uma entidade persistente naquele local do tipo que especificaste.

Como exemplo, se tiveres uma placa que diz `[spawn]` na primeira linha e `ZOMBIE` na segunda linha, irás gerar um zumbi
nesse local quando a construção for colocada. Isso também pode ser usado para entidades não vivas, como estantes de
armaduras ou cristais do end.

<div class="minecraft-sign">
<p>[spawn]</p>
<p>ZOMBIE</p>
<p></p>
<p></p>
</div>

***

##### Gerar Elite Mobs (plugin de chefe recomendado)

O BetterStructures também tem integração avançada com o EliteMobs, que permite criar arenas de chefe com base em
construções e placas de geração.

Se pegares uma placa normal e a colocares em algum lugar, colocando na primeira linha [elitemobs], podes usar todas as
outras linhas para dizer qual ficheiro de chefe usar.

Como exemplo, se escreveres `[elitemobs]` na primeira linha e depois `test_boss.yml` na segunda linha, irás gerar o
chefe de teste. Se tiveres um nome de ficheiro muito longo, como boss_with_very_long_filename.yml, podes dividi-lo em
várias linhas, então colocar na linha 2 `boss_with_very_` e depois na linha 3 `long_filename.yml` e isso funcionará.

Como lembrete, por padrão, as arenas de combate serão protegidas até que os jogadores matem todos os chefes na
construção se o teu servidor estiver a usar o WorldGuard.

<div class="minecraft-sign">
<p>[elitemobs]</p>
<p>test_boss_with</p>
<p>_a_long_name</p>
<p>.yml</p>
</div>

***

##### Gerar Mythic Mobs

O BetterStructures também tem uma integração simples com o MythicMobs, que permite gerar um mob do MythicMobs na
construção. Na primeira linha de uma placa normal escreve `[mythicmobs]`, depois na segunda linha usa o mob
identificado. Podes usar um número na terceira linha para definir o nível do mob.

<div class="minecraft-sign">
<p>[mythicmobs]</p>
<p>my_mythic_boss</p>
<p>1</p>
<p></p>
</div>

***

## Schematics

Schematics são ficheiros gerados pelo WorldEdit ou FastAsyncWorldEdit que contêm os blocos para a construção que o
BetterStructures usará.

Instruções detalhadas sobre como fazer um schematic não estão incluídas aqui, pois são detalhadas nas documentações do
WorldEdit e FastAsyncWorldEdit, mas geralmente é feito por:

1) escolher um canto da construção e usar o comando `//pos1`
2) escolher o canto diagonalmente oposto e usar o comando `//pos2`
3) usar o comando `//copy`
4) usar o comando `/schem save <nome_do_schematic>` onde `<nome_do_schematic>` é o nome do ficheiro que queres usar para
   o teu schematic.

<img src="https://worldedit.enginehub.org/en/latest/_images/cuboid.png" alt="imagem da documentação do worldedit dos seus documentos">

*Certifica-te de que executas o comando `//pos1` no ponto 1 e `//pos2` no ponto 2!*

***

#### Ponto de ancoragem

Pontos de ancoragem são onde executas o comando `//copy` para o schematic. Ao colar simplesmente um schematic, estes são
onde estás em relação à construção.

Os pontos de ancoragem são importantes para acertar para que os schematics funcionem corretamente.

* Para _construções de superfície_, é recomendado que fiques no ponto mais baixo do chão ao copiar a construção.
* Para _construções subterrâneas_, é recomendado que fiques em cima da construção.
* Para _construções líquidas_, é recomendado que fiques em cima da água.
* Para _construções aéreas_, é recomendado que fiques em cima da construção.

**Atenção que deves estar sempre muito perto ou diretamente em cima das construções ao copiar - quanto mais longe
estiveres, mais lento será quando a construção precisar ser colada.**

***

# Configurações de schematic

Cada ficheiro de schematic tem uma configuração de schematic. Se um ficheiro de schematic acabou de ser adicionado ao servidor, a configuração será gerada após um reinício ou após um `/betterstructures reload`.

Estas configurações permitem que definas as seguintes configurações para a colagem de schematic:

***

## isEnabled

Define se o schematic está ativado. Se desativado, ele não será colocado em lugar nenhum.

***

## weight

O peso define o peso do schematic em termos de quão provável é que ele seja escolhido.

O valor padrão é `1.0`. Se fizeres com que uma construção tenha um peso de `2.0`, ela terá 2x mais probabilidade de ser
selecionada do que as outras construções. Se o tornares `0.5`, ele terá metade das chances de ser escolhido.

_**Nota:** Tem em mente que as chances de uma construção específica ser escolhida mudam drasticamente com base em
quantas construções existem no total a competir pelo local que receberá uma estrutura!_

***

## pedestalMaterial

**Importante: campo opcional!**

O material do pedestal define o tipo de material dos blocos do pedestal usando
os [nomes de materiais da API spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) - usa-os ou não
funcionará!

Os pedestais são os blocos que são colocados sob edifícios de superfície e subterrâneos para preencher quaisquer espaços
de ar e melhorar o ajuste de um edifício com o mundo. Esses também são os mesmos blocos que substituem os blocos de
rocha matriz no schematic.

Quando nada é definido na configuração, os blocos sob o local da colagem são analisados e o melhor ajuste é selecionado
como material para uma aparência melhor integrada.

***

## generatorConfigFilename

Esta opção define o nome do ficheiro de configuração, por nome de ficheiro, que o schematic estará a usar. Isso requer o
nome de ficheiro completo, incluindo a extensão `.yml` no final. Como
exemplo, `generatorConfigFilename: generator_surface_global.yml` seria a opção correta se quiseres usar o gerador
definido em `generator_surface_global.yml`, que podes encontrar na pasta de configuração de geradores.

***

## treasureFile

Define o [ficheiro de tesouro]($language$/betterstructures/creating_treasure.md) que esta estrutura usará, substituindo
o ficheiro de tesouro definido pelo [gerador]($language$/betterstructures/creating_generators.md) da estrutura. Isso
geralmente não é recomendado, a menos que seja para uma construção muito especial. Geralmente, é melhor modificar ou
criar um gerador para esse propósito.

# Personalizar o conteúdo

Tudo o que é distribuído no BetterStructures é editável. Podes modificar qualquer ficheiro de schematic e configurações
de gerador ao teu gosto.

O guia de criação de conteúdo acima também é um guia que pode ajudar-te a editar o conteúdo existente.
