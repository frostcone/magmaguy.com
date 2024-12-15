# Como Criar um Mapa Personalizado para o EternalTD

## Criar o ficheiro level.yml para o seu mapa

Comece a criar o seu mapa criando um ficheiro de configuração de nível seguindo estes passos simples:

1. Comece por criar um novo documento de texto e dê-lhe um nome como *o_nome_do_seu_nível.yml* (substitua "o_nome_do_seu_nível" pelo nome real do seu nível/mapa).

2. Abra o ficheiro no seu editor de texto favorito.

3. Vamos começar com a parte divertida! Adicione o nome do seu nível usando esta definição:
```yaml
levelName: "&aO Meu Nível Incrível"
```
Sinta-se à vontade para adicionar algum brilho com as cores do Minecraft ou outros modificadores de texto.

4. Agora, dê ao seu nível alguma personalidade com uma descrição fixe:
```yaml
levelDescription:
- "&aO meu nível é muito fixe."
- "&aEspero que goste!"
```
Pode adicionar mais linhas à descrição, mas é boa ideia que seja breve.

5. Hora das ondas! Especifique quais as ondas do EternalTD que o seu nível deve usar:
```yaml
wavesConfigFile: minhas_ondas.yml
```
Apenas se lembre de usar o nome real do seu ficheiro de ondas. Uma onda por nível!

6. Defina o mundo (construção) que o seu nível vai usar:
```yaml
worldName: o_nome_da_pasta_do_meu_mundo
```
Use o nome real do mundo que se encontra dentro da pasta *worlds* do EternalTD.

7. Por último, mas não menos importante, escolha o ambiente perfeito para o cenário do seu nível:
```yaml
environment: NORMAL
```
Pode escolher entre NORMAL, NETHER, ou THE_END. Escolha o seu.

O seu ficheiro de configuração de nível está pronto! O resto do ficheiro será preenchido pelos comandos do EternalTD que vamos usar nos próximos passos quando mapearmos a construção.

## Preparar a sua construção
Antes de mapear a sua construção para usar com o EternalTD, é essencial configurá-la da seguinte forma:

- Configure-a num mundo Vazio. Se usar o Multiverse, pode usar o comando:
  ```
  /mvcreate seu_nomedomundoaqui NORMAL -g VoidGen:.
  ```
- Tenha uma borda de mundo estreita à volta da construção.
- Crie um cilindro de barreira alguns blocos abaixo da construção com uma altura de um bloco e um raio grande o suficiente para atingir a borda do mundo (raio de 200 blocos recomendado). Usando o WorldEdit, pode executar:
  ```
  //cyl barrier 200 1
  ```
- Defina o ponto de surgimento para ficar no centro da construção num lugar seguro.
- Aplique as seguintes regras:
    - /gamerule doWeatherCycle false
    - /gamerule doDaylightCycle false
    - /gamerule doMobSpawning false
    - /gamerule doFireTick false
    - /gamerule fireDamage false
    - /gamerule mobGriefing false
    - /gamerule disableRaids true
    - /gamerule announceAdvancements false
- A área de jogo do mapa precisa de estar no mesmo nível Y. Tudo o que estiver mais alto ou mais baixo será ignorado quando começarmos o processo de mapeamento.

## Mapear a construção para usar com o EternalTD
Para mapear a área de jogo da sua construção para usar com o EternalTD, siga estes passos:

1. Meça manualmente a construção, certificando-se de incluir apenas a área de jogo e mais nada. Anote as coordenadas à medida que mede.
<br>A área de jogo deve incluir as seções de início (surgimento de monstros) e fim do mapa. O início é normalmente construído usando blocos verdes e com blocos vermelhos para o fim.

2. Comece por medir os eixos X, Y e Z da construção. Fique num canto da área de jogo do seu mapa no eixo X e anote a coordenada reportada (pode usar as coordenadas do bloco para isto). Mova-se para o lado oposto do eixo X e anote essa coordenada.

3. Para o eixo Y, fique na **área de jogo** e anote a coordenada reportada.

4. Repita o mesmo processo que fez para o eixo X para medir o eixo Z. Pode dar uma olhadela a esta imagem de exemplo para o ajudar a perceber o que estamos a tentar fazer aqui:
   ![Exemplo de Mapeamento](https://i.imgur.com/IZfh2Nt.jpeg)
   Repare como estamos apenas a medir as coordenadas onde queremos que a nossa área de jogo esteja e a ignorar o resto. Tal como no exemplo, por favor, certifique-se de que inclui o início e o fim ao medir a área de jogo. <br>Se a área de jogo que está a medir for mais larga numa ponta e mais estreita na outra, deve medir a seção mais larga.

5. Após concluir as medições, deve ter algo como isto:
   ```
   Eixo X: -57, 56
   Eixo Y: 65
   Eixo Z: 34, -34
   ```

6. Reorganize estes números do mais alto para o mais baixo para obter dois conjuntos completos de coordenadas XYZ:
   ```
   56 65 34 (valores XYZ mais altos)
   -57 65 -34 (valores XYZ mais baixos)
   ```

7. Use o seguinte comando para selecionar as coordenadas:
   ```
   /etd selectfloorcoordinate Xalto Y Zalto Xbaixo Y Zbaixo
   Exemplo: /etd selectfloorcoordinate 56 65 34 -57 65 -34
   ```

8. As coordenadas foram agora selecionadas e estão na memória. Se obtiver um erro, então a sua medição estava incorreta ou a área de jogo não foi construída corretamente. Para verificar se mapeamos a área de jogo corretamente, execute o seguinte comando:
   ```
   /etd register o_nome_do_seu_nível.yml teste
   ```
   Substitua "o_nome_do_seu_nível" pelo nome real do nível/mapa que está a tentar criar. Se tudo foi feito corretamente, deve ver barreiras a marcar todos os blocos na sua área de jogo.

9. Passe pela área de jogo e certifique-se de que tudo parece estar como deve e, em seguida, execute o comando novamente, mas desta vez sem o *teste* no final.
   ```
   /etd register o_nome_do_seu_nível.yml
   ```
   Isto irá agora guardar a área de jogo no seu ficheiro de nível e o seu ficheiro de nível deverá estar agora pronto para ser usado.

## Reduzir a pasta do mundo
Existem vários ficheiros e pastas localizados na sua pasta do mundo que podemos descartar uma vez que o EternalTD não os usa todos. Isto irá reduzir o tamanho do seu mundo e torná-lo mais fácil de distribuir.

Para o Ambiente NORMAL:

Para preparar o seu mundo, **mantenha** os seguintes ficheiros e pastas:

1. Pasta **region**

2. **raids.dat** de dentro da pasta **data** (certifique-se de que está dentro da pasta **data** ao copiar)

3. Ficheiro **level.dat**

Pode apagar com segurança todos os outros ficheiros e pastas localizados na pasta do mundo. Isto irá configurar corretamente o seu mundo para o ambiente NORMAL.

Para o Ambiente NETHER e THE_END:

Para preparar o seu mundo, mantenha os seguintes ficheiros e pastas:

1. Pasta **region** dentro da pasta **DIM-1** (certifique-se de que está dentro da pasta **DIM-1** ao copiar)

2. **raids.dat** de dentro da pasta **data** (certifique-se de que está dentro da pasta **data** ao copiar)

3. Ficheiro **level.dat**

Pode apagar com segurança todos os outros ficheiros e pastas localizados na pasta do mundo. Isto irá configurar corretamente o seu mundo para os ambientes NETHER e THE_END.
