# O que é o LibsDisguises?

O LibsDisguises é um plugin que permite que os servidores disfarcem qualquer entidade como qualquer outro tipo de entidade. Como exemplo, você pode disfarçar jogadores como ovelhas, ou disfarçar ovelhas como jogadores.

Existem versões [gratuita](https://www.spigotmc.org/resources/libs-disguises-free.81/) e [premium](https://www.spigotmc.org/resources/libs-disguises.32453/) do LibsDisguises. O LibsDisguises foi criado e é mantido por outros desenvolvedores, então, por favor, não peça suporte para ele nas seções de suporte do EliteMobs.

# Como posso disfarçar uma entidade como um jogador?

Para disfarçar um chefe personalizado (ou um chefe regional, ou até mesmo um NPC!) como um jogador, tudo o que você precisa fazer é adicionar a seguinte linha ao arquivo de configuração do chefe:

```yml
disguise: player:name
```

Como exemplo, se você quiser disfarçar um chefe como a skin do meu jogador, a linha de configuração ficaria assim:

```yml
disguise: player:magmaguy
```

# Como posso disfarçar uma entidade como uma skin de jogador, mas não necessariamente como um jogador?

Esta é a maneira mais flexível de disfarçar uma entidade como um jogador, pois permite que os administradores usem skins online ou até mesmo criem as suas próprias para disfarçar um chefe. Também é um pouco mais complexo de fazer.

Para simplificar, os exemplos listados aqui assumem que você usará uma skin disponível online. O Libsdisguises fornece diferentes maneiras de desserializar skins, incluindo uma onde você coloca sua própria skin personalizada na pasta deles. Consulte a documentação deles se você não deseja usar uma skin já disponível online.

### 1. Definindo o disfarce

Para o disfarce, você vai querer fazer algo assim:

```yaml
disguise: custom:your_unique_skin_name
```

### 2. Gerando os dados do disfarce

Esta é a parte complicada. Você começa criando a seguinte entrada de configuração:

```yaml
customDisguiseData: player your_unique_skin_name setskin 
```

*É crucial que o nome que você define no disfarce para o your_unique_skin_name corresponda ao que está em customDisguiseData!*

Em seguida, você precisará desserializar uma skin de jogador. A maneira mais fácil de fazer isso para uma skin publicamente disponível online é usando o comando grabskin do LibsDisguises.

Digamos que você queira obter [esta skin](https://www.minecraftskins.com/skin/18512841/buff-villager/).

Para fazer isso, você precisa executar o comando `/grabskin https://www.minecraftskins.com/uploads/skins/2021/07/28/buff-villager-18512841.png?v437`

**Observação: você precisa fornecer um link direto para o arquivo de skin e não para a página que contém a skin. Observe para onde o link aponta. No [skindex](https://www.minecraftskins.com/), você pode obter o link direto pressionando o botão "Link de Imagem" que está presente no canto inferior direito de cada skin.**

Depois de fazer isso com sucesso, o LibsDisguises fornecerá cerca de 3 a 6 números que dizem "Clique para copiar". Se você clicar neles, uma longa lista de números e letras aparecerá. Você precisa garantir que comece no 1 e faça todos os números em ordem. Para copiá-los, pressione Ctrl+A e, em seguida, Ctrl+C, e cole-os no arquivo com Ctrl+V. Depois de terminar, deve ficar parecido com isso:

```yaml
customDisguiseData: player your_unique_skin_name setskin {"id":"d1fbb77f-b184-4718-b0a2-c7ae866798d3","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTYyNzU0ODkwMjQ0OSwKICAicHJvZmlsZUlkIiA6ICIxOTI1MjFiNGVmZGI0MjVjODkzMWYwMmE4NDk2ZTExYiIsCiAgInByb2ZpbGVOYW1lIiA6ICJTZXJpYWxpemFibGUiLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzlmYTZkMWFlODA2YTY2OGI0OTgzYmZhY2ZkMGUzMzQ5MGE5MGU4YTZmMWE2MmEwZGQ5YzQ1YjdkYjBiNjU1MyIKICAgIH0KICB9Cn0=","signature":"P/XSvxX45MUZGc5uuDKuVgmMUk2V1HADPI84Os5J4NnmURhLeS4jL4FSeShmz0cH7sBWmMg80g9ADP33R9PcOmzbHK4hJBFt2VYLJNgSYHK6VGp6qLGXDfdAa3vRNXN7jKtsrqVEANax7Gzv3xcWARLbq1FuQ6yYdXDY8Coc02YdXD