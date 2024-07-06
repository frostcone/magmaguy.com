# Criando um Mapa Personalizado para EternalTD

## Criando o arquivo level.yml para seu mapa

Comece seu mapa criando um arquivo de configuração de nível seguindo estas etapas simples:

1. Comece criando um novo documento de texto e dando a ele um nome como *your_level_name.yml* (substitua "your_level_name" pelo nome real do seu nível/mapa).

2. Abra o arquivo no seu editor de texto favorito.

3. Vamos começar com a parte divertida! Adicione o nome do seu nível usando esta configuração:
```yaml
levelName: "&aMy Awesome Level"
```
Sinta-se à vontade para dar um toque especial com algumas cores do Minecraft ou outros modificadores de texto.

4. Agora, dê ao seu nível algum caráter com uma descrição legal:
```yaml
levelDescription:
- "&aMy level is pretty cool."
- "&aHope you enjoy!"
```
Você pode adicionar mais linhas à descrição, mas mantê-la breve é uma boa ideia.

5. Hora das ondas! Especifique quais ondas do EternalTD seu nível deve usar:
```yaml
wavesConfigFile: my_waves.yml
```
Lembre-se de usar o nome real do seu arquivo de ondas. Uma onda por nível!

6. Defina o mundo (construção) que seu nível usará:
```yaml
worldName: my_world_folder_name
```
Use o nome real do mundo encontrado dentro da pasta *worlds* do EternalTD.

7. Por fim, mas não menos importante, escolha o ambiente perfeito para a configuração do seu nível:
```yaml
environment: NORMAL
```
Você pode escolher entre NORMAL, NETHER ou THE_END. Faça sua escolha.

Seu arquivo de configuração de nível está pronto! O restante do arquivo será preenchido por comandos do EternalTD que usaremos nas próximas etapas ao mapear a construção.

## Preparando sua construção
Antes de mapear sua construção para uso com o EternalTD, é essencial configurá-la da seguinte forma:

- Defina-o em um mundo do Void. Se estiver usando o multiverse, você pode usar o comando:
  ```
  /mvcreate yourworldnamehere NORMAL -g VoidGen:.
  ```
- Tenha uma borda de mundo estreita ao redor da construção.
- Crie um cilindro de barreira alguns blocos abaixo da construção com uma altura de um bloco e um raio grande o suficiente para atingir a borda do mundo (raio de 200 blocos recomendado). Usando o WorldEdit, você pode executar:
  ```
  //cyl barrier 200 1
  ```
- Defina o ponto de geração para estar no centro da construção em um local seguro.
- Aplique as seguintes regras:
    - /gamerule doWeatherCycle false
    - /gamerule doDaylightCycle false
    - /gamerule doMobSpawning false
    - /gamerule doFireTick false
    - /gamerule fireDamage false
    - /gamerule mobGriefing false
    - /gamerule disableRaids true
    - /gamerule announceAdvancements false
- A área de jogo do mapa precisa estar no mesmo nível Y. Qualquer coisa que esteja mais alta ou mais baixa será ignorada quando iniciarmos o processo de mapeamento.

## Mapeamento da construção para uso com o EternalTD
Para mapear a área de jogo da sua construção para uso com o EternalTD, siga estas etapas:

1. Meça manualmente a construção, certificando-se de incluir apenas a área de jogo e nada mais. Anote as coordenadas conforme você mede.
<br>A área de jogo deve incluir as seções de início (geração de monstros) e fim do mapa. O início geralmente é construído usando blocos verdes e com blocos vermelhos para o fim.


2. Comece medindo os eixos X, Y e Z da construção. Fique em um canto da área de jogo do seu mapa no eixo X e anote a coordenada relatada (você pode usar as coordenadas de bloco para isso). Mova-se para o lado oposto do eixo X e anote essa coordenada.


3. Para o eixo Y, fique na **área de jogo** e anote a coordenada relatada.


4. Repita o mesmo processo realizado para o eixo X para medir o eixo Z. Você pode dar uma olhada nesta imagem de exemplo para entender o que estamos tentando realizar aqui:
   ![Mapping Example](https://i.imgur.com/IZfh2Nt.jpeg)
   Observe como estamos apenas medindo as coordenadas onde queremos que nossa área de jogo esteja e ignorando o resto. Como no exemplo, certifique-se de incluir o início e o fim ao medir a área de jogo. <br>Se a área de jogo que você está medindo for mais larga em uma extremidade e mais estreita na outra, você deve medir a seção mais larga.


5. Depois de completar as medições, você deve ter algo parecido com isso:
   ```
   Eixo X: -57, 56
   Eixo Y: 65
   Eixo Z: 34, -34
   ```

6. Rearranje esses números do maior para o menor para obter dois conjuntos completos de coordenadas XYZ:
   ```
   56 65 34 (valores XYZ mais altos)
   -57 65 -34 (valores XYZ mais baixos)
   ```

7. Use o seguinte comando para selecionar as coordenadas:
   ```
   /etd selectfloorcoordinate Xhigh Y Zhigh Xlow Y Zlow
   Exemplo: /etd selectfloorcoordinate 56 65 34 -57 65 -34
   ```

8. As coordenadas foram selecionadas e estão na memória. Se você receber um erro, sua medição estava incorreta ou a área de jogo não foi construída corretamente. Para verificar se mapeamos a área de jogo corretamente, execute o seguinte comando:
   ```
   /etd register your_level_name.yml test
   ```
   Substitua "your_level_name" pelo nome real do nível/mapa que você está tentando criar. Se tudo estiver correto, você deve ver barreiras marcando cada ladrilho na sua área de jogo.


9. Passe pela área de jogo e certifique-se de que tudo parece estar como deveria e, em seguida, execute o comando novamente, mas desta vez sem o *test* no final.
   ````
   /etd register your_level_name.yml
   ````
   Isso agora salvará a área de jogo no seu arquivo de nível e seu arquivo de nível deve estar pronto para uso.

## Cortando a pasta do mundo
Existem vários arquivos e pastas localizados na pasta do seu mundo que podemos descartar, pois o EternalTD não usa todos eles. Isso reduzirá o tamanho do seu mundo e facilitará a distribuição.

Para o ambiente NORMAL:

Para preparar seu mundo, **mantenha** os seguintes arquivos e pastas:

1.  pasta **region**


2.  **raids.dat** de dentro da pasta **data** (certifique-se de que ele seja colocado dentro da pasta **data** ao copiar)


3.  arquivo **level.dat**

Você pode excluir com segurança todos os outros arquivos e pastas localizados na pasta do mundo. Isso configurará seu mundo corretamente para o ambiente NORMAL.

Para o ambiente NETHER e THE_END:

Para preparar seu mundo, mantenha os seguintes arquivos e pastas:

1.  pasta **region** dentro da pasta **DIM-1** (certifique-se de que ele seja colocado dentro da pasta **DIM-1** ao copiar)


2.  **raids.dat** de dentro da pasta **data** (certifique-se de que ele seja colocado dentro da pasta **data** ao copiar)


3.  arquivo **level.dat**

Você pode excluir com segurança todos os outros arquivos e pastas localizados na pasta do mundo. Isso configurará seu mundo corretamente para os ambientes NETHER e THE_END.


