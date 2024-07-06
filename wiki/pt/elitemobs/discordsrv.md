# Integração com o DiscordSRV

O EliteMobs utiliza o DiscordSRV para permitir a transmissão de mensagens de prioridade 3. Você pode ler sobre o Sistema de Prioridade de Anúncios [aqui]($language$/elitemobs/announcement_priority_system.md).

Em essência, isso significa que alguns Chefes Personalizados muito especiais são capazes de enviar mensagens no Discord de uma forma que se parece com esta:

![discord message example](https://i.imgur.com/sIndft0.png)

A intenção é criar uma sala de anúncios dedicada do EliteMobs que os jogadores podem consultar para ver se há algum Chefe Mundial interessante atualmente ativo que eles podem ir matar e mostrar que fizeram na tabela de classificação de mortes.

# Configurando tudo

## Configurando o DiscordSRV

[DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/) é um plugin diferente, não desenvolvido por mim. [Você pode encontrar seu guia de configuração completo aqui](https://github.com/discordsrv/discordsrv/wiki/Installation). Se você tiver problemas para configurar, [sua sala de suporte está aqui](https://discord.discordsrv.com/). Não posso fornecer suporte para este plugin, então consulte-os para esta parte da instalação.

## Configurando a configuração do DiscordSRV do EliteMobs

Depois de configurar corretamente o DiscordSRV (*e você precisa testar para ver se está realmente funcionando antes de passar para esta etapa*), **a configuração do EliteMobs tem apenas 1 etapa**.

Vá para o arquivo de configuração `DiscordSRV.yml` na pasta de configuração do EliteMobs e você encontrará uma opção de configuração chamada `announcementRoomName`.

Existem três valores que você pode usar para essa mensagem. Recomendo o nº 1.

1. [Recomendado] O nome da sala como você a configurou no arquivo de configuração do DiscordSRV. Não importa como você chamou a sala, apenas que você use o nome correto. Aqui está um exemplo da sala que configurei para ser dedicada aos eventos do EliteMobs:
   ![using name example](https://i.imgur.com/a2kMWXv.png)
   No meu caso, a opção deve ler `announcementRoomName: EMEvents`.

2. O ID da sala como você a configurou no arquivo de configuração do DiscordSRV. Aqui está um exemplo da sala. *Por favor, note que cada sala é única. Estou apenas mostrando imagens como exemplo, não tente copiar os números de ID. Não funcionará. Sua configuração deve ter um conjunto exclusivo de números com base no seu ID de sala do Discord.*
   ![using id example](https://i.imgur.com/CGElkdh.png)
3. [Ruim] O nome da sua sala como aparece no Discord. Isso não é garantido para funcionar corretamente devido a uma série de fatores. Lembre-se de que sua sala do Discord deve ser configurada nos arquivos de configuração do DiscordSRV - apenas porque você pode colocar o nome da sala neste arquivo de configuração não significa que você pode pular a configuração no DiscordSRV.

## Testando
Você pode usar o comando `/em discord [mensagem]` para ver se sua configuração está funcionando. Se sua mensagem aparecer, pronto!

