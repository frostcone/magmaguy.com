# Vídeo de Configuração

<div class="outer-container">
<div class="iframe-container">
  <iframe class="video-iframe" src="https://www.youtube.com/embed/boRg2X4qhw4?si=2aRLV_j9UzNz_VO0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

***


*Este guia assume que você está usando o EliteMobs ***7.2.37*** ou posterior.*

# Primeira inicialização

Reinicie o servidor uma vez.

<details>

<summary><b>Por quê?</b></summary>

O EliteMobs aumenta a saúde máxima do seu arquivo spigot.yml na primeira vez que o servidor é iniciado. Isso ocorre para que os Mobs Elite possam ter mais de 2000 de saúde. Isso não altera a saúde de nenhum outro mob - então não muda os mobs vanilla ou de plugins.

Essa alteração requer uma reinicialização do servidor para realmente funcionar.

</details>

# Permissões

A partir do EliteMobs 7.2.23, todas as permissões recomendadas já estão configuradas por padrão. Você pode ver mais sobre permissões [aqui]($language$/elitemobs/permissions_and_commands.md).

# Masmorras e Mundo Central da Guilda de Aventureiros

A partir do EliteMobs 7.2.35, agora existe uma pasta `imports` no diretório do EliteMobs. O processo de instalação para as Masmorras, o Mundo Central da Guilda de Aventureiros, é o mesmo:

1) Baixe os arquivos. Você pode clicar no vidro vermelho em `/em setup` para obter links para os downloads.

2) Carregue / mova os arquivos para a pasta `/plugins/EliteMobs/imports` do seu servidor. Certifique-se de colocar os arquivos **COMPACTOS** dentro da pasta `imports` sem modificá-los de forma alguma, o EliteMobs extrairá automaticamente os arquivos e os moverá para as localizações corretas.

<div align="center">

<details>

<summary>Exemplo Visual</summary>

<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_import.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</details>

</div>

3) Reinicie ou execute `/em reload`. Após alguns segundos, as masmorras devem ser instaladas automaticamente. Quando você executar `/em setup`, os indicadores para as masmorras que você baixou devem estar verdes, indicando que as masmorras estão instaladas corretamente e atualizadas. Se alguma masmorra mostrar um painel de vidro amarelo, isso significa que existe uma versão mais recente da masmorra e ela precisa ser atualizada.

<div align="center">

<details>

<summary>Exemplo Visual</summary>


<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_install.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</details>

</div>

4) ***Se seus arquivos de masmorra tiverem Modelos Personalizados***, você pode opcionalmente seguir as etapas de instalação listadas [aqui]($language$/elitemobs/custom_models.md&section=importing-custom-models-from-dungeons) para instalá-los.

É isso! **Você pode encontrar teletransportes para as masmorras instaladas e a guilda de aventureiros em /em, na página Teletransportes!**

[Mais informações sobre a Guilda de Aventureiros aqui!]($language$/elitemobs/adventurers_guild_world.md)
<br>[Baixe o Mundo Central da Guilda de Aventureiros aqui!](https://magmaguy.itch.io/elitemobs-the-adventurers-guild)

# Plugins Recomendados

- [WorldGuard](https://dev.bukkit.org/projects/worldguard): Usado para flags. [Lista de flags do EliteMobs]($language$/elitemobs/worldguard_flags.md).
- [WorldGuardExtraFlags](https://www.spigotmc.org/resources/worldguard-extra-flags.4823/): Usado para a flag anti-voo, útil de se ter.
- [PlaceHolderAPI (PAPI)](https://www.spigotmc.org/resources/placeholderapi.6245/): Usado para exibir informações do EliteMobs em outros plugins, como para bate-papo. [Mais informações]($language$/elitemobs/placeholders.md).
- [LibsDisguises](https://www.spigotmc.org/resources/libs-disguises-free.81/): Usado para disfarçar Chefes Personalizados como qualquer outra coisa. Os disfarces são amplamente utilizados em nossas masmorras oficiais, então é altamente recomendável que você instale este plugin. [Mais informações]($language$/elitemobs/libsdisguises.md).
- [DiscordSRV]($language$/elitemobs/discordsrv.md): Usado para vincular anúncios do EliteMobs ao bate-papo do Discord. [Mais informações]($language$/elitemobs/discordsrv.md)

# Atualizando conteúdo da masmorra

Para atualizar o conteúdo da masmorra, basta repetir as etapas de instalação acima. **Você ***não*** precisa excluir nenhum arquivo**, o EliteMobs cuida disso quando você importa a atualização.

# Perguntas Frequentes (FAQ)

## A mini-masmorra é apenas terreno plano

<details><summary>Resposta</summary>

95% das vezes isso significa que você não seguiu as instruções de configuração. Se você descompactou algum arquivo ou carregou algum mundo usando outros plugins, reinstale o conteúdo seguindo as etapas listadas acima. Você não precisa de nenhum outro plugin para carregar os mundos corretamente.

</details>

## O bate-papo do NPC parece estranho / os buracos de minhoca não estão funcionando / outro comportamento estranho depois de instalar

<details>

<summary>Resposta</summary>

Execute o comando `/em reload` depois de configurar uma masmorra para garantir que todos os valores sejam totalmente inicializados. Uma reinicialização é ainda melhor, mas não deve ser necessária.

</details>

## Os chefes não estão gerando

### O chefe estava gerando antes!

<details>

<summary>Resposta</summary>

Os chefes regionais têm um tempo de reabastecimento. Você pode verificar quando o chefe está programado para reaparecer indo para seu arquivo de configuração e copiando os números após os `:` na seção de localizações de geração.

Exemplo:

```yml
spawnLocations:
- em_primis,1100.5,22.5,526.5,0.0,0.0:1643259941451
```

Nesse caso, os números que você está procurando são `1643259941451`. Você pode usar [este](https://www.unixtimestamp.com/index.php) site para converter isso em uma data específica. Você pode excluir os números para forçar o chefe a reaparecer, certifique-se de executar `/em reload` depois de excluí-los.

</details>

### O chefe nunca gerou!

<details>

<summary>Resposta</summary>

Verifique os seguintes itens:

- Você ou outra pessoa matou o chefe, ou ele escapou por meio do recurso de tempo limite? O chefe pode estar reaparecendo. Verifique os tempos de espera, informações sobre isso estão na seção acima.
- Veja se há algum erro no console, especialmente depois de instalar a masmorra ou após um `/em reload`. Os erros devem dizer o que está errado.
- Verifique se sua região é protegida por algum outro plugin que poderia impedir a geração de mobs
- Verifique a dificuldade do seu mundo, os mobs não podem gerar na dificuldade pacífica
- Verifique as flags do WorldGuard, veja se a geração de mobs está definida como permitir
- Verifique se você instalou o conteúdo da masmorra sobre a área de geração, que é protegida por padrão
- Muito, muito raramente, o problema pode ter a ver com o dia que seu servidor acha que é. Certifique-se de que a data do seu servidor esteja correta, caso contrário, a mecânica de reabastecimento pode causar alguns problemas.

</details>


## Algo está errado e eu simplesmente não consigo consertar

<details>

<summary>Resposta</summary>

Isso geralmente acontece depois de tentar e falhar em modificar corretamente os arquivos de uma forma que o EliteMobs não poderia se auto-reparar. Se você estiver preso e não conseguir descobrir como repará-lo a partir das mensagens do console no início/instalação da masmorra, a melhor coisa a fazer é uma instalação limpa do EliteMobs.

Faça backup da pasta `~/plugins/EliteMobs/data` para manter os dados do jogador, depois exclua a pasta `~/plugins/EliteMobs/`. Inicie o servidor, desligue-o, restaure o conteúdo da pasta de dados que você fez backup **enquanto o servidor estiver desligado** e, em seguida, inicie-o novamente. Agora você pode continuar instalando o conteúdo do EliteMobs.

</details>



