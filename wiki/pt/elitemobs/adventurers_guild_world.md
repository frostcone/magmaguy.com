# Mundo da Guilda dos Aventureiros

### O que é o Mundo da Guilda dos Aventureiros?

O Mundo da Guilda dos Aventureiros é o nome de um mundo pré-fabricado criado para o EliteMobs pelo Realm of Lotheridon.

![ag_pic_1.jpg](../../../img/wiki/ag_pic_1.jpg)

### Para que serve o Mundo da Guilda dos Aventureiros?

O Mundo da Guilda dos Aventureiros funciona como um centro para o EliteMobs. Ao hospedar o centro, os jogadores já não
precisam de memorizar comandos (além de /em) para interagir com as funcionalidades do EliteMobs.

No mundo, os seguintes NPCs são colocados antecipadamente:

- Transportador (para voltar à sua localização anterior)
- Guia (missão introdutória para conhecer todos os NPCs)
- Atendente da Guilda (para melhorar
  os [Rank da Guilda]($language$/elitemobs/understanding_the_basics_of_elitemobs.md&section=step-2:-discovering-the-economy))
- Teletransportadores de Masmorras (NPCs especiais que teleportam os jogadores para
  qualquer [Masmorra]($language$/elitemobs/dungeons.md) instalada)
- Barman (atualmente não implementado)
- Dador de Missões (para navegar e aceitar missões geradas aleatoriamente)
- Ferreiro (para comprar itens gerados processualmente e vender drops de mobs de elite)
- Ferreiro Especial (para comprar itens personalizados e vender drops de mobs de elite)
- Instrutor de Combate (para dar dicas sobre o combate do EliteMobs)
- Buracos de Minhoca (portais que teleportam os jogadores para [Masmorras]($language$elitemobs/dungeons.md) e qualquer
  outro conteúdo instalado)
- Mestre da Arena (este NPC permite que os jogadores participem
  na [Arena da Liga da Madeira]($language$elitemobs/understanding_the_basics_of_elitemobs.md&section=arenas))
- Missões do Modo História (permite que os jogadores aceitem missões para
  as [Masmorras do Modo História](www.magmaguy.com))
- Desvinculador (permite que os
  jogadores [Desvinculem]($language$/elitemobs/item_upgrade_system.md&section=unbinding-items) o seu loot do EliteMobs
  por um preço)
- Sucateiro (permite que os jogadores convertam qualquer loot indesejado
  em [Sucata]($language$/elitemobs/item_upgrade_system.md&section=scrapping-items))
- Reparador (os jogadores podem interagir com este NPC
  para [Reparar]($language$/elitemobs/item_upgrade_system.md&section=repairing-elite-items) os seus itens usando sucata)
- Encantador (permite que os jogadores [Encantem]($language$/elitemobs/item_upgrade_system.md&section=enchanting-elite-items) os seus itens)

Adicionalmente, apresenta um edifício de guilda de aventureiros para os NPCs, bem como uma Arena EliteMobs (atualmente
não implementada, em breve!).

### Como configurar o Mundo da Guilda dos Aventureiros

Para instalar o Mundo da Guilda dos Aventureiros, faça o seguinte:

1. Descarregue os ficheiros. Pode clicar no vidro vermelho em `/em setup` para obter links para os downloads.

2. Carregue / mova os ficheiros para a pasta `/plugins/EliteMobs/imports` do seu servidor. Certifique-se de que coloca
   os ficheiros **ZIPADOS** dentro da pasta `imports` sem os modificar de forma alguma, o EliteMobs irá extrair
   automaticamente os ficheiros e movê-los para os locais corretos.

3. Reinicie ou faça `/em reload`. Após alguns segundos, quando fizer `/em setup`, os indicadores para as funcionalidades
   que descarregou devem estar amarelos.

4. Clique no vidro amarelo no menu `/em setup` para instalar as funcionalidades importadas. Se tudo estiver instalado
   corretamente, deve estar no mundo central da Guilda dos Aventureiros. Pode teletransportar-se para a Guilda dos
   Aventureiros a qualquer momento, fazendo `/ag`.

#### Configurar o Buraco de Minhoca

Após instalar o mundo central da Guilda dos Aventureiros, irá notar que existe um buraco de minhoca localizado onde os
jogadores se teletransportam. Este buraco de minhoca deve ser configurado por si, para levar de volta ao seu spawn do
mundo normal ou qualquer outra localização central do seu servidor.

Para configurar o buraco de minhoca, navegue até ao diretório *~plugins\EliteMobs\wormholes* e abra
*adventurers_guild_wormhole.yml*. Localize o valor `location2` e substitua `your_world_here` pelo nome do seu mundo,
seguido pelas coordenadas corretas para onde os jogadores devem ser teletransportados.
