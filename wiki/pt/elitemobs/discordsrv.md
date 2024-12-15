O EliteMobs usa o DiscordSRV para ativar a transmissão de mensagens de prioridade nível 3. Podes ler sobre o Sistema de Prioridade de Anúncios [aqui]($language$/elitemobs/announcement_priority_system.md).

Essencialmente, isto significa que alguns Bosses Customizados muito especiais conseguem enviar mensagens para o Discord de uma forma que se parece com isto:

![exemplo de mensagem do discord](https://i.imgur.com/sIndft0.png)

A intenção é criar uma sala de anúncios dedicada do EliteMobs que os jogadores possam consultar para ver se existem Bosses Mundiais interessantes atualmente vivos que possam ir matar e mostrar que o fizeram na tabela de classificação de mortes.

# Configurar tudo

## Configurar o DiscordSRV

O [DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/) é um plugin diferente não desenvolvido por mim. [Podes encontrar o guia de configuração extenso deles aqui](https://github.com/discordsrv/discordsrv/wiki/Installation). Se tiveres dificuldades em configurá-lo, [a sala de suporte deles é aqui](https://discord.discordsrv.com/). Eu não consigo fornecer suporte para este plugin, por isso, por favor, consulta-os para esta parte da instalação.

## Configurar a configuração do EliteMobs DiscordSRV

Depois de teres configurado corretamente o DiscordSRV (*e tens de testar para ver se está mesmo a funcionar antes de passares para este passo*), **a configuração do EliteMobs só tem 1 passo**.

Vai ao ficheiro de configuração `DiscordSRV.yml` na pasta de configuração do EliteMobs e vais encontrar uma opção de configuração chamada `announcementRoomName`.

Existem três valores que podes usar para esta mensagem. Eu recomendo o #1.

1. [Recomendado] O nome da sala como a configuraste no ficheiro de configuração do DiscordSRV. Não interessa como chamaste a sala, só que uses o nome correto. Aqui está um exemplo da sala que configurei para ser dedicada a eventos do EliteMobs:
   ![exemplo de usar nome](https://i.imgur.com/a2kMWXv.png)
   No meu caso, a opção deve dizer `announcementRoomName: EMEvents`.

2. O ID da sala como a configuraste no ficheiro de configuração do DiscordSRV. Aqui está um exemplo da sala. *Por favor, tem em atenção que cada sala é única. Estou apenas a mostrar imagens como exemplo, não tentes copiar os números de ID. Não irá funcionar. A tua configuração deve ter um conjunto único de números com base no ID da tua sala do Discord.*
   ![exemplo de usar id](https://i.imgur.com/CGElkdh.png)
3. [Mau] O nome da tua sala tal como aparece no discord. Não é garantido que isto funcione corretamente devido a uma série de fatores. Tem em atenção que a tua sala do discord deve estar configurada nos ficheiros de configuração do DiscordSRV - só porque consegues colocar o nome da sala neste ficheiro de configuração não significa que possas ignorar a configuração no DiscordSRV.

## Testar
Podes usar o comando `/em discord [mensagem]` para ver se a tua configuração está a funcionar. Se a tua mensagem aparecer, está feito!
