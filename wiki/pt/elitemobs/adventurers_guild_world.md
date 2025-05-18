```markdown
# Mundo da Guilda de Aventureiros

### O que é o Mundo da Guilda de Aventureiros?

O Mundo da Guilda de Aventureiros é o nome de um mundo pré-feito criado para o EliteMobs por Realm of Lotheridon.

![ag_pic_1.jpg](../../../img/wiki/ag_pic_1.jpg)

### Para que serve o Mundo da Guilda de Aventureiros?

O Mundo da Guilda de Aventureiros funciona como um hub para o EliteMobs. Ao hospedar o hub, os jogadores deixam de ter de memorizar quaisquer comandos (além de /em) para interagir com as funcionalidades do EliteMobs.

No mundo, os seguintes NPCs são colocados previamente:

-   Transportador (para regressar à sua localização anterior)
-   Guia (quest introdutória para conhecer todos os NPCs)
-   Atendente da Guilda (para melhorar os [Ranks da Guilda]($language$/elitemobs/understanding_the_basics_of_elitemobs.md&section=step-2:-discovering-the-economy))
-   Teletransportadores de Masmorras (NPCs especiais que teletransportarão os jogadores para quaisquer [Masmorras]($language$/elitemobs/dungeons.md) instaladas)
-   Taberneiro (atualmente não implementado)
-   Dador de Quests (para procurar e aceitar quests geradas aleatoriamente)
-   Ferreiro (para comprar itens gerados proceduralmente e vender drops de mobs de elite)
-   Ferreiro Especial (para comprar itens personalizados e vender drops de mobs de elite)
-   Instrutor de Combate (para dar dicas sobre o combate do EliteMobs)
-   Buracos de Minhoca (portais que teletransportarão os jogadores para [Masmorras]($language$elitemobs/dungeons.md) e qualquer outro conteúdo instalado)
-   Mestre da Arena (este NPC permitirá que os jogadores participem na [Arena da Liga de Madeira]($language$elitemobs/understanding_the_basics_of_elitemobs.md&section=arenas))
-   Quests do Modo História (permite que os jogadores aceitem quests para as [Masmorras do Modo História](www.magmaguy.com))
-   Desvinculador (permite que os jogadores [Desvinculem]($language$/elitemobs/item_upgrade_system.md&section=unbinding-items) o seu loot do EliteMobs por um preço)
-   Desmantelador (permite que os jogadores convertam qualquer loot indesejado em [Sucata]($language$/elitemobs/item_upgrade_system.md&section=scrapping-items))
-   Reparador (os jogadores podem interagir com este NPC para [Reparar]($language$/elitemobs/item_upgrade_system.md&section=repairing-elite-items) os seus itens usando sucata)
-   Encantador (permite que os jogadores [Encantem]($language$/elitemobs/item_upgrade_system.md&section=enchanting-elite-items) os seus itens)

Adicionalmente, inclui um edifício de guilda de aventureiros para os NPCs, bem como uma Arena EliteMobs (atualmente não implementada, em breve!).

### Como configurar o Mundo da Guilda de Aventureiros

Para instalar o Mundo da Guilda de Aventureiros, faça o seguinte:

1.  Descarregue os ficheiros. Pode clicar no vidro vermelho em `/em setup` para obter links para os downloads.

2.  Carregue / mova os ficheiros para a pasta `/plugins/EliteMobs/imports` do seu servidor. Certifique-se de que coloca os ficheiros **ZIPADOS** dentro da pasta `imports` sem os modificar de forma alguma, o EliteMobs irá extrair automaticamente os ficheiros e movê-los para as localizações corretas.

3.  Reinicie ou faça `/em reload`. Após alguns segundos, quando fizer `/em setup`, os indicadores para as funcionalidades que descarregou deverão estar amarelos.

4.  Clique no vidro amarelo no menu `/em setup` para instalar as funcionalidades importadas. Se tudo instalou corretamente, deverá estar no mundo hub da Guilda de Aventureiros. Pode teletransportar-se para a Guilda de Aventureiros a qualquer momento fazendo `/ag`.

#### Configurar o Buraco de Minhoca

Após instalar o mundo hub da Guilda de Aventureiros, notará que existe um buraco de minhoca localizado onde os jogadores se teletransportam. Este buraco de minhoca deve ser configurado por si, para levar de volta ao spawn do seu mundo regular ou a qualquer outra localização central do seu servidor.

Para configurar o buraco de minhoca, navegue até ao diretório *~plugins\EliteMobs\wormholes* e abra *adventurers_guild_wormhole.yml*. Localize o valor `location2` e substitua `your_world_here` pelo nome do seu mundo, seguido pelas coordenadas corretas para onde os jogadores devem ser teletransportados.
```