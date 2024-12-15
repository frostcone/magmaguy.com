# Configuração do vídeo

<div class="outer-container">
<div class="iframe-container">
  <iframe class="video-iframe" src="https://www.youtube.com/embed/boRg2X4qhw4?si=2aRLV_j9UzNz_VO0" title="Reprodutor de vídeo do YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

***

*Este guia pressupõe que está a usar o EliteMobs ***7.2.37*** ou posterior.*

# Primeiro arranque

Reinicie o servidor uma vez.

<details>

<summary><b>Porquê?</b></summary>

O EliteMobs aumenta a saúde máxima do seu ficheiro de configuração spigot.yml na primeira vez que o servidor arranca. Isto serve para que os mobs Elite possam ter mais de 2000 de saúde. Não altera a saúde de nenhum outro mob - portanto, não altera os mobs vanilla ou de plugins.

Esta alteração requer um reinício do servidor para funcionar corretamente.

</details>

# Permissões

A partir do EliteMobs 7.2.23, todas as permissões recomendadas já estão configuradas por padrão. Pode ver mais sobre as permissões [aqui]($language$/elitemobs/permissions_and_commands.md).

# Masmorras e Hub do Mundo da Guilda dos Aventureiros

A partir do EliteMobs 7.2.35, existe agora uma pasta `imports` no diretório do EliteMobs. O processo de instalação das Masmorras, Mundo da Guilda dos Aventureiros é o mesmo:

1) Descarregue os ficheiros. Pode clicar no vidro vermelho em `/em setup` para obter links para os downloads.

2) Carregue / mova os ficheiros para a pasta `/plugins/EliteMobs/imports` do seu servidor. Certifique-se de que coloca os ficheiros **ZIPADOS** dentro da pasta `imports` sem os modificar de forma alguma, o EliteMobs irá extrair automaticamente os ficheiros e movê-los para os locais corretos.

<div align="center">

<details>

<summary>Exemplo Visual</summary>

<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_import.webm" type="video/webm">
  O seu navegador não suporta a etiqueta de vídeo.
</video>

</details>

</div>

3) Reinicie ou faça `/em reload`. Após alguns segundos, as masmorras devem instalar-se automaticamente. Quando fizer `/em setup`, os indicadores para as masmorras que descarregou devem estar verdes e a indicar que as masmorras estão instaladas corretamente e atualizadas. Se alguma masmorra mostrar um painel de vidro amarelo, isso significa que existe uma versão mais recente da masmorra e que precisa de ser atualizada.

<div align="center">

<details>

<summary>Exemplo Visual</summary>


<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_install.webm" type="video/webm">
  O seu navegador não suporta a etiqueta de vídeo.
</video>

</details>

</div>

4) ***Se os seus ficheiros de masmorra tiverem Modelos Personalizados***, pode opcionalmente seguir os passos de instalação listados [aqui]($language$/elitemobs/custom_models.md&section=importing-custom-models-from-dungeons) para os instalar.

É tudo! **Pode encontrar teletransportes para as masmorras instaladas e guilda de aventureiros em /em, na página de Teletransportes!**

[Mais informações sobre a Guilda dos Aventureiros aqui!]($language$/elitemobs/adventurers_guild_world.md)
<br>[Descarregue o Hub do Mundo da Guilda dos Aventureiros aqui!](https://magmaguy.itch.io/elitemobs-the-adventurers-guild)

# Plugins recomendados

- [WorldGuard](https://dev.bukkit.org/projects/worldguard): Usado para flags. [Lista de flags do EliteMobs]($language$/elitemobs/worldguard_flags.md).
- [WorldGuardExtraFlags](https://www.spigotmc.org/resources/worldguard-extra-flags.4823/): Usado para a flag anti-voo, útil de ter.
- [PlaceHolderAPI (PAPI)](https://www.spigotmc.org/resources/placeholderapi.6245/): Usado para exibir informações do EliteMobs noutros plugins, como para o chat. [Mais informações]($language$/elitemobs/placeholders.md).
- [LibsDisguises](https://www.spigotmc.org/resources/libs-disguises-free.81/): Usado para disfarçar Bosses Personalizados como qualquer outra coisa. Os disfarces são muito usados nas nossas masmorras oficiais, por isso é altamente recomendado que instale este plugin. [Mais informações]($language$/elitemobs/libsdisguises.md).
- [DiscordSRV]($language$/elitemobs/discordsrv.md): Usado para ligar os anúncios do EliteMobs ao chat do Discord. [Mais informações]($language$/elitemobs/discordsrv.md)

# Atualizar conteúdo da masmorra

Para atualizar o conteúdo da masmorra, basta repetir os passos de instalação acima. **Não precisa de eliminar nenhum ficheiro**, o EliteMobs trata disso quando importa a atualização.

# Perguntas Frequentes (FAQ)

## A minidungeon é apenas terreno plano

<details><summary>Resposta</summary>

95% das vezes isto significa que não seguiu as instruções de configuração. Se descompactou algum ficheiro ou carregou algum mundo usando outros plugins, reinstale o conteúdo seguindo os passos listados acima. Não precisa de nenhum outro plugin para carregar os mundos corretamente.

</details>

## O chat do NPC parece estranho / os buracos de minhoca não estão a funcionar / outro comportamento estranho após a instalação

<details>

<summary>Resposta</summary>

Execute o comando `/em reload` após configurar uma masmorra para garantir que todos os valores sejam totalmente inicializados. Um reinício é ainda melhor, mas não deve ser necessário.

</details>

## Os bosses não estão a surgir

### O boss estava a surgir antes!

<details>

<summary>Resposta</summary>

Os bosses regionais têm um tempo de respawn. Pode verificar quando o boss está agendado para renascer indo ao seu ficheiro de configuração e copiando os números após os `:` na secção de locais de spawn.

Exemplo:

```yml
spawnLocations:
- em_primis,1100.5,22.5,526.5,0.0,0.0:1643259941451
```

Neste caso, os números que está a procurar são `1643259941451`. Pode usar este website [aqui](https://www.unixtimestamp.com/index.php) para converter isso para uma data específica. Pode eliminar os números para forçar o boss a renascer, certifique-se de que faz `/em reload` após os eliminar.

</details>

### O boss nunca surgiu!

<details>

<summary>Resposta</summary>

Verifique as seguintes coisas:

- Você ou outra pessoa matou o boss, ou ele escapou através da função de timeout? O boss pode estar a renascer. Verifique os tempos de espera, informações sobre isso na secção acima.
- Veja se existem erros na consola, especialmente após instalar a masmorra ou após um `/em reload`. Os erros devem dizer-lhe o que está errado.
- Verifique se a sua região está protegida por algum outro plugin que impeça o spawn de mobs
- Verifique a dificuldade do seu mundo, os mobs não podem surgir em dificuldade pacífica
- Verifique as flags do WorldGuard, veja se o spawn de mobs está definido para permitir
- Verifique se instalou o conteúdo da masmorra sobre a área de spawn, que está protegida por padrão
- Muito, muito raramente, o problema pode ter a ver com o dia que o seu servidor pensa que é. Certifique-se de que a data da máquina do seu servidor está correta, caso contrário, a mecânica de respawn pode causar alguns problemas.

</details>

## Algo está estragado e eu simplesmente não consigo corrigir

<details>

<summary>Resposta</summary>

Isto normalmente acontece depois de tentar e não conseguir modificar corretamente os ficheiros de uma forma que o EliteMobs não conseguiu autorreparar. Se estiver preso e não conseguir descobrir como reparar a partir das mensagens da consola ao iniciar / instalar a masmorra, a melhor coisa a fazer é uma instalação limpa do EliteMobs.

Faça uma cópia de segurança da sua pasta `~/plugins/EliteMobs/data` para guardar os dados do jogador, depois elimine a pasta `~/plugins/EliteMobs/`. Inicie o seu servidor, desligue-o, restaure o conteúdo da sua pasta de dados de cópia de segurança **enquanto o servidor estiver offline** e depois inicie-o novamente. Agora pode retomar a instalação do conteúdo do EliteMobs.

</details>
