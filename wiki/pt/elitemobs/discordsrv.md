Aqui está a tradução para português (Portugal), mantendo a formatação markdown:

EliteMobs usa o DiscordSRV para permitir a transmissão de mensagens de prioridade de nível 3. Pode ler sobre o Sistema de Prioridade de Anúncios [aqui]($language$/elitemobs/announcement_priority_system.md).

Em essência, isto significa que alguns Bosses Personalizados muito especiais são capazes de enviar mensagens no Discord de uma forma que se parece com isto:

![exemplo de mensagem do discord](https://i.imgur.com/sIndft0.png)

A intenção é criar uma sala de anúncios dedicada ao EliteMobs que os jogadores possam consultar para ver se há algum World Boss interessante atualmente vivo que possam ir matar e mostrar que o fizeram na tabela de classificação de mortes.

# Configurar tudo

## Configurar o DiscordSRV

[DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/) é um plugin diferente não desenvolvido por mim. [Pode encontrar o guia de configuração extenso deles aqui](https://github.com/discordsrv/discordsrv/wiki/Installation). Se tiver dificuldades em configurá-lo, [a sala de suporte deles é aqui](https://discord.discordsrv.com/). Não sou capaz de fornecer suporte para este plugin, por isso, por favor, consulte-os para esta parte da instalação.

## Configurar a configuração do EliteMobs DiscordSRV

Assim que tiver configurado corretamente o DiscordSRV (*e tem de testar para ver se está realmente a funcionar antes de passar para este passo*), **a configuração do EliteMobs tem apenas 1 passo**.

Vá ao ficheiro de configuração `DiscordSRV.yml` na pasta de configuração do EliteMobs e encontrará uma opção de configuração chamada `announcementRoomName`.

Existem três valores que pode usar para esta mensagem. Recomendo o #1.

1.  [Recomendado] O nome da sala tal como a configurou no ficheiro de configuração do DiscordSRV. Não importa como chamou a sala, apenas que use o nome correto. Aqui está um exemplo da sala que configurei para ser dedicada a eventos do EliteMobs:
    ![exemplo de uso do nome](https://i.imgur.com/a2kMWXv.png)
    No meu caso, a opção deve ser `announcementRoomName: EMEvents`.

2.  O ID da sala tal como a configurou no ficheiro de configuração do DiscordSRV. Aqui está um exemplo da sala. *Por favor, note que cada sala é única. Estou apenas a mostrar imagens como exemplo, não tente copiar os números de ID. Não funcionará. A sua configuração deve ter um conjunto único de números baseado no ID da sua sala do discord.*
    ![exemplo de uso do id](https://i.imgur.com/CGElkdh.png)
3.  [Mau] O nome da sua sala tal como aparece no discord. Não é garantido que funcione corretamente devido a uma série de fatores. Tenha em mente que a sua sala do discord deve estar configurada nos ficheiros de configuração do DiscordSRV - só porque pode colocar o nome da sala neste ficheiro de configuração não significa que pode saltar a configuração no DiscordSRV.

## Testar
Pode usar o comando `/em discord [mensagem]` para ver se a sua configuração está a funcionar. Se a sua mensagem aparecer, está pronto!