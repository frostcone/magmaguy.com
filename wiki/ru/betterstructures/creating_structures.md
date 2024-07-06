# Criando Conteúdo

***

## Criando a construção

Não há restrições com o que você pode construir para o BetterStructures, embora seja recomendado manter o tamanho das estruturas abaixo de 100x100x100 blocos por motivos de ajuste geral do mundo e desempenho. Dito isso, ele pode facilmente lidar com estruturas muito maiores.

***

### Blocos Especiais

O BetterStructures possui dois blocos especiais: barreiras e bedrock. Qualquer outro bloco que o WorldEdit / FAWE puder colar será colado normalmente, mas os blocos de barreira e bedrock são a exceção. Em vez de colar, esses blocos são substituídos pelos seguintes comportamentos personalizados:

***

#### Barreira

Os blocos de barreira fazem com que o plugin não coloque nenhum bloco naquela localização. Isso significa que qualquer bloco que estava originalmente lá na geração normal do mundo permanecerá lá.

Os construtores podem usar isso para arredondar as bordas de uma colagem, fazendo com que pareça mais natural, ou para moldar paredes a uma caverna potencial, entre outras dicas.

***

#### Bedrock

Os blocos de bedrock fazem com que o plugin garanta que haja um bloco sólido naquela localização. Isso significa que se um bloco sólido já estiver lá na geração padrão do mundo, esse bloco não será modificado; no entanto, se o bloco for ar ou líquido, ele será substituído por um bloco sólido do [pedestal](#pedestalmaterial).

Os construtores podem usar isso para criar pisos com recursos como o piso para trilhos de minecart ou garantir que um piso exista sem substituir blocos sólidos que já existam potencialmente naquela localização no mundo, fazendo com que as construções pareçam mais orgânicas.

***

### Placas de Geração

O BetterStructures pode usar placas com texto específico para gerar mobs e até mesmo chefes do EliteMobs e MythicMobs em localizações específicas da construção.

***

##### Gerando mobs vanilla

Se você pegar uma placa normal e a colocar em algum lugar, certifique-se de que a primeira linha diga `[spawn]` e a segunda linha tenha o [nome do tipo de entidade seguindo a API Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html) que você irá gerar uma entidade persistente naquela localização do tipo que você especificou.

Como exemplo, se você tiver uma placa que diz `[spawn]` na primeira linha e `ZOMBIE` na segunda linha, você gerará um zumbi naquela localização quando a construção for colocada. Isso também pode ser usado para entidades não-vivas, como suportes de armadura ou cristais finais.

<div class="minecraft-sign"> 
<p>[spawn]</p>
<p>ZOMBIE</p>
<p></p>
<p></p>
</div>

***

##### Gerando Mobs Elite (plugin de chefe recomendado)

O BetterStructures também possui integração avançada do EliteMobs, que permite que ele crie arenas de chefe com base em construções e placas de geração.

Se você pegar uma placa normal e a colocar em algum lugar, fazendo a primeira linha [elitemobs], então você pode usar todas as outras linhas para dizer qual arquivo de chefe usar.

Como exemplo, se você fizer `[elitemobs]` na primeira linha e, em seguida, `test_boss.yml`, na segunda linha, você gerará o chefe de teste. Se você tiver um nome de arquivo muito longo, como boss_with_very_long_filename.yml, você pode dividi-lo em várias linhas, então faça a linha 2 `boss_with_very_` e, em seguida, a linha 3 `long_filename.yml`, e isso funcionará.

Lembre-se de que, por padrão, as arenas de combate serão protegidas até que os jogadores matem todos os chefes na construção se seu servidor estiver usando o WorldGuard.

<div class="minecraft-sign"> 
<p>[elitemobs]</p>
<p>test_boss_with</p>
<p>_a_long_name</p>
<p>.yml</p>
</div>

***

##### Gerando Mythic Mobs

O BetterStructures também possui integração simples do MythicMobs, que permite que ele gere um mob do MythicMobs na construção. Na primeira linha de uma placa normal, escreva `[mythicmobs]`, e na segunda linha use o mob identificado. Você pode usar um número na terceira linha para definir o nível do mob.

<div class="minecraft-sign"> 
<p>[mythicmobs]</p>
<p>my_mythic_boss</p>
<p>1</p>
<p></p>
</div>

***

## Esquemáticos

Os esquemáticos são arquivos gerados pelo WorldEdit ou FastAsyncWorldEdit que contêm os blocos para a construção que o BetterStructures usará. 

As instruções detalhadas sobre como criar um esquemático não estão incluídas aqui, pois são detalhadas nas documentações do WorldEdit e FastAsyncWorldEdit, mas geralmente é feito por:

1) escolha um canto da construção e use o comando `//pos1`
2) escolha o canto diagonalmente oposto e use o comando `//pos2`
3) use o comando `//copy`
4) use o comando `/schem save <schematicname>`, onde `<schematicName>` é o nome do arquivo que você deseja usar para seu esquemático.

<img src="https://worldedit.enginehub.org/en/latest/_images/cuboid.png" alt="worldedit documentation image from their docs">

*Certifique-se de executar o comando `//pos1` no ponto 1 e `//pos2` no ponto 2!*

***

#### Ponto de Âncora

Os pontos de âncora são onde você executa o comando `//copy` para o esquemático. Ao simplesmente colar um esquemático, esses são os pontos em que você está em relação à construção.

Os pontos de âncora são importantes para serem configurados corretamente para que os esquemáticos funcionem corretamente.

* Para _construções de superfície_, é recomendável que você fique no ponto mais baixo do chão ao copiar a construção.
* Para _construções subterrâneas_, é recomendável que você fique no topo da construção.
* Para _construções líquidas_, é recomendável que você fique no topo da água.
* Para _construções aéreas_, é recomendável que você fique no topo da construção.

**Observe que você deve estar sempre muito perto ou diretamente no topo das construções ao copiar - quanto mais longe você estiver, mais lag haverá ao colar a construção.**

***

# Configurações de Esquemáticos

Cada arquivo esquemático possui uma configuração de esquemático. Se um arquivo esquemático foi apenas adicionado ao servidor, a configuração será gerada após uma reinicialização ou após um `/betterstructures reload`.

Essas configurações permitem que você defina as seguintes configurações para a colagem esquemática:

***

## isEnabled

Define se o esquemático está habilitado. Se estiver desabilitado, ele não será colocado em nenhum lugar.

***

## weight

O peso define o peso do esquemático em termos de quão provável é que ele seja escolhido.

O valor padrão é `1.0`. Se você fizer com que uma construção tenha um peso de `2.0`, ela terá 2x mais chances de ser selecionada do que as outras construções. Se você fizer com que seja `0.5`, ela terá metade das chances de ser escolhida.

_**Observação:** Lembre-se de que as chances de uma construção específica ser escolhida mudam drasticamente com base em quantas construções existem no total competindo pela localização que receberá uma estrutura!_

***

## pedestalMaterial

**Importante: campo opcional!**

O material do pedestal define o tipo de material dos blocos do pedestal usando os [nomes de material da API spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) - use-os ou não funcionará!

Os pedestais são os blocos que são colocados abaixo de construções de superfície e subterrâneas para preencher quaisquer lacunas de ar e melhorar o ajuste de uma construção ao mundo. Esses também são os mesmos blocos que substituem blocos de bedrock no esquemático.

Quando nada é definido na configuração, os blocos abaixo da localização para a colagem são analisados e o melhor ajuste é selecionado como o material para o melhor visual integrado.

***

## generatorConfigFilename

Esta opção define o nome do arquivo de configuração, pelo nome do arquivo, que o esquemático usará. Isso requer o nome do arquivo completo, incluindo a extensão `.yml` no final. Como exemplo, `generatorConfigFilename: generator_surface_global.yml` seria a opção correta se você quiser usar o gerador definido em `generator_surface_global.yml`, que você pode encontrar na pasta de configuração de geradores.

***

## treasureFile

Define o [arquivo de tesouro]($language$/betterstructures/creating_treasure.md) que esta estrutura usará, sobrescrevendo o arquivo de tesouro definido pelo [gerador]($language$/betterstructures/creating_generators.md) da estrutura. Isso geralmente não é recomendado, a menos que seja para uma construção muito especial. Geralmente é melhor modificar ou criar um gerador para essa finalidade.


# Personalizando o conteúdo

Tudo que é distribuído no BetterStructures é editável. Você pode modificar quaisquer arquivos de esquemático e configurações de gerador à sua vontade.

O guia de criação de conteúdo acima também é um guia que pode ajudá-lo a editar conteúdo existente.

