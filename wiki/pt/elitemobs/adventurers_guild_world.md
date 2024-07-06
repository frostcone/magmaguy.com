# Mundo da Guilda dos Aventureiros

### O que é o Mundo da Guilda dos Aventureiros?

O Mundo da Guilda dos Aventureiros é o nome de um mundo pré-fabricado feito para o EliteMobs pelo Realm of Lotheridon.

![ag_pic_1.jpg](../../../img/wiki/ag_pic_1.jpg)

### Para que serve o Mundo da Guilda dos Aventureiros?

O Mundo da Guilda dos Aventureiros serve como um centro para o EliteMobs. Ao hospedar o centro, os jogadores não precisam mais memorizar nenhum comando (além de /em) para interagir com os recursos do EliteMobs.

Neste mundo, os seguintes NPCs são colocados antecipadamente:

- Transportador (para voltar à sua localização anterior)
- Guia (missão introdutória para conhecer todos os NPCs)
- Acompanhante da Guilda (para atualizar os [Postos da Guilda]($language$/elitemobs/understanding_the_basics_of_elitemobs.md&section=step-2:-discovering-the-economy))
- Teletransportadores de Masmorras (NPCs especiais que teletransportarão os jogadores para quaisquer [Masmorras]($language$/elitemobs/dungeons.md) instaladas)
- Dono do Bar (atualmente não implementado)
- Emissário de Missões (para navegar e aceitar missões geradas aleatoriamente)
- Ferreiro (para comprar itens gerados processualmente e vender drops de mobs de elite)
- Ferreiro Especial (para comprar itens personalizados e vender drops de mobs de elite)
- Instrutor de Combate (para dar dicas sobre o combate do EliteMobs)
- Buracos de Minhoca (portais que teletransportarão os jogadores para [Masmorras]($language$elitemobs/dungeons.md) e qualquer outro conteúdo instalado)
- Mestre da Arena (este NPC permitirá que os jogadores participem na [Arena da Liga de Madeira]($language$elitemobs/understanding_the_basics_of_elitemobs.md&section=arenas))
- Missões do Modo História (permite que os jogadores façam missões para as [Masmorras do Modo História](www.magmaguy.com))
- Desligador (permite que os jogadores [Desliguem]($language$/elitemobs/item_upgrade_system.md&section=unbinding-items) o seu loot do EliteMobs por um preço)
- Desmontador (permite que os jogadores convertam qualquer loot indesejado em [Sucatas]($language$/elitemobs/item_upgrade_system.md&section=scrapping-items))
- Reparador (os jogadores podem interagir com este NPC para [Reparar]($language$/elitemobs/item_upgrade_system.md&section=repairing-elite-items) os seus itens usando sucatas)
- Encantador (permite que os jogadores [Encantem]($language$/elitemobs/item_upgrade_system.md&section=enchanting-elite-items) os seus itens)

Além disso, possui um edifício de guilda de aventureiros para os NPCs, bem como uma Arena EliteMobs (atualmente não implementada, em breve!).

### Como configurar o Mundo da Guilda dos Aventureiros

Para instalar o Mundo da Guilda dos Aventureiros, faça o seguinte:

1. Baixe os arquivos. Você pode clicar no vidro vermelho em `/em setup` para obter links para os downloads.

2. Carregue / mova os arquivos para a pasta `/plugins/EliteMobs/imports` do seu servidor. Certifique-se de colocar os arquivos **COMPRIMIDOS** dentro da pasta `imports` sem modificá-los de forma alguma, o EliteMobs irá extrair os arquivos automaticamente e movê-los para os locais corretos.

3. Reinicie ou faça `/em reload`. Após alguns segundos, quando você fizer `/em setup`, os indicadores dos recursos que você baixou devem estar amarelos.

4. Clique no vidro amarelo no menu `/em setup` para instalar os recursos importados. Se tudo estiver instalado corretamente, você deve estar no mundo central da Guilda dos Aventureiros. Você pode se teletransportar para a Guilda dos Aventureiros a qualquer momento fazendo `/ag`.

#### Configurando o Buraco de Minhoca

Depois de instalar o mundo central da Guilda dos Aventureiros, você notará que há um buraco de minhoca localizado onde os jogadores se teletransportam. Este buraco de minhoca deve ser configurado por você, para levá-lo de volta ao seu ponto de spawn mundial regular ou qualquer outro local central do seu servidor.

Para configurar o buraco de minhoca, navegue até o diretório *~plugins\EliteMobs\wormholes* e abra *adventurers_guild_wormhole.yml*. Localize o valor `location2` e substitua `your_world_here` pelo nome do seu mundo, seguido pelas coordenadas corretas para onde os jogadores devem ser teletransportados. 
