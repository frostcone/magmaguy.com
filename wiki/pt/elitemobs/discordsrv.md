O EliteMobs usa o DiscordSRV para ativar a transmissão de mensagens de prioridade de nível 3. Podes ler sobre o Sistema
de Prioridade de Anúncios [aqui]($language$/elitemobs/announcement_priority_system.md).

Essencialmente, isto significa que alguns Chefes Personalizados muito especiais conseguem enviar mensagens no Discord de
uma forma que se assemelha a esta:

![exemplo de mensagem no discord](https://i.imgur.com/sIndft0.png)

A intenção é criar uma sala de anúncios dedicada ao EliteMobs, que os jogadores podem consultar para ver se há algum
Chefe Mundial interessante vivo que possam ir matar e exibir na tabela de classificação de mortes.

# Configurar tudo

## Configurar o DiscordSRV

O [DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/) é um plugin diferente não desenvolvido por
mim. [Podes encontrar o guia de configuração extenso deles aqui](https://github.com/discordsrv/discordsrv/wiki/Installation).
Se tiveres dificuldades em configurá-lo, [a sala de suporte deles está aqui](https://discord.discordsrv.com/). Não
consigo fornecer suporte para este plugin, por favor, contacta-os para esta parte da instalação.

## Configurar a configuração do EliteMobs para o DiscordSRV

Depois de configurado corretamente o DiscordSRV (*e teres de testar para ver se está mesmo a funcionar antes de
avançares para este passo*), **a configuração do EliteMobs tem apenas 1 passo**.

Vai para o ficheiro de configuração `DiscordSRV.yml` na pasta de configuração do EliteMobs e encontrarás uma opção de
configuração chamada `announcementRoomName`.

Existem três valores que podes usar para esta mensagem. Recomendo o #1.

1. [Recomendado] O nome da sala tal como configuraste no ficheiro de configuração do DiscordSRV. Não importa como
   chamaste a sala, apenas que uses o nome correto. Aqui está um exemplo da sala que configurei para ser dedicada a
   eventos do EliteMobs:
   ![exemplo de usar o nome](https://i.imgur.com/a2kMWXv.png)
   No meu caso, a opção deve ler `announcementRoomName: EMEvents`.

2. O ID da sala tal como configuraste no ficheiro de configuração do DiscordSRV. Aqui está um exemplo da sala. *Por
   favor, nota que cada sala é única. Estou apenas a mostrar imagens como exemplo, não tentes copiar os números do ID.
   Não vai funcionar. A tua configuração deve ter um conjunto único de números com base no ID da tua sala do discord.*
   ![exemplo de usar o ID](https://i.imgur.com/CGElkdh.png)
3. [Mau] O nome da tua sala tal como aparece no discord. Não há garantia de que isto funcione corretamente devido a
   vários fatores. Tem em mente que a tua sala do discord deve estar configurada nos ficheiros de configuração do
   DiscordSRV - só porque podes colocar o nome da sala neste ficheiro de configuração não significa que podes ignorar a
   configuração no DiscordSRV.

## Testar
Podes usar o comando `/em discord [mensagem]` para ver se a tua configuração está a funcionar. Se a tua mensagem aparecer, está feito!
