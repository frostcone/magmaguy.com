## Perguntas Frequentes sobre Configuração e Instalação

Se você tiver uma pergunta que não está listada aqui, ***consulte a barra lateral*** para ver se ela tem uma página dedicada a ela no wiki!

# Perguntas Frequentes sobre Configuração e Instalação

### Como configuro modelos personalizados?

<details>
<summary>
Informações
</summary>

Existem dois plugins diferentes que gerenciam "Modelos Personalizados".

- O LibsDisguises (incluindo a edição gratuita) permite disfarçar mobs como outros mobs ou como skins de jogadores personalizadas. Se você vir um Chefe Personalizado com um disfarce de jogador, ele está usando o LibsDisguises para o disfarce. Você terá que baixar o LibsDisguises para que esse recurso específico funcione.


- O FreeMinecraftModels (e o ModelEngine R3, embora o ModelEngine não seja mais recomendado) permite disfarçar mobs como qualquer Modelo Personalizado, com muito poucas limitações. O FreeMinecraftModels permite que você faça isso gratuitamente e é recomendado. Você terá que usar o FreeMinecraftModels ou o ModelEngine R3 (não o R4) para que os Modelos Personalizados funcionem. O FreeMinecraftModels pode ser executado junto com o Model Engine, então você também pode executar ambos.
<br>Se você instalou o FreeMinecraftModels/ModelEngine e os Modelos Personalizados ainda não estão funcionando, você pode ter instalado o conteúdo antes de instalar o plugin de modelo. Para garantir que isso não seja um problema, reimporta o conteúdo do EliteMobs com os Disfarces Personalizados e instale-o novamente.

</details>

### O console / EliteMobs diz que estou usando a versão errada do WorldGuard

<details>
<summary>
Informações
</summary>

Se o WorldGuard for relatado pelo EliteMobs como não instalado, isso ocorre porque você está usando a versão errada do WorldGuard para sua plataforma de servidor. O WorldGuard é muito sensível em relação à versão que você está usando e possui versões diferentes para software de servidor.

- Você pode baixar a versão do WorldGuard para Spigot / Paper aqui: https://dev.bukkit.org/projects/worldguard - Certifique-se de que ele diz que é compatível com sua versão do Minecraft!

</details>

### Buracos de Minhoca / Arenas / NPCs não parecem estar funcionando corretamente imediatamente após a instalação

<details>
<summary>
Informações
</summary>

Se os buracos de minhoca / arenas / NPCs não parecerem estar funcionando corretamente imediatamente após a instalação do conteúdo, você deve executar `/em reload`. É sempre bom executá-lo após instalar o conteúdo do EliteMobs.

</details>

### Os chefes da masmorra não estão reaparecendo depois de matá-los

<details>
<summary>
Informações
</summary>

Na maioria das vezes, isso ocorre porque alguns chefes têm longos tempos de reabastecimento. A Sombra do Vinculador de Mundos tem o tempo de reabastecimento mais longo de 1 semana na vida real. Os chefes do Covil geralmente têm um tempo de reabastecimento de 4 horas. Tudo o mais tende a ter um tempo de reabastecimento de 5 a 30 minutos. Você pode editar o tempo de reabastecimento de um Chefe Personalizado em seu arquivo de configuração na pasta `~/plugins/EliteMobs/custombosses`.

</details>

### Os chefes da masmorra nunca apareceram após a instalação

<details>
<summary>
Informações
</summary>

Isso é quase certamente devido à interferência de um plugin de terceiros. Verifique o seguinte:
- Seu mundo está na dificuldade Pacífica? Mobs não geram na dificuldade Pacífica


- Sua região é protegida contra geração? As masmorras do EliteMobs gerenciam sua própria proteção de região por meio do WorldGuard, você não precisa proteger os mundos da masmorra do EliteMobs, na verdade, fazer isso pode impedir a geração se as flags erradas forem usadas.


- Há outro plugin impedindo que os chefes do EliteMobs sejam gerados ou os removendo? Esses conflitos geralmente aparecem no console, então verifique seus logs do console.

</details>

### O plugin não está completando automaticamente comandos para o conteúdo que acabei de instalar

<details>
<summary>
Informações
</summary>

As sugestões automáticas em comandos são gerenciadas pelo CloudCommandFramework e apenas atualizam as sugestões de comando **após uma reinicialização do servidor**. Infelizmente, não há nada que eu possa fazer sobre isso.

</details>

### Como uso as traduções do EliteMobs?

<details>
<summary>
Informações
</summary>

Você pode alterar o idioma do EliteMob executando `/em language <languagename>.yml` para usar a tradução padrão do plugin criada e gerenciada pela comunidade do EliteMobs.

Para adicionar um idioma que não está no plugin ou para personalizar o idioma existente, é recomendável usar `custom_language.yml`.

Os arquivos de idioma só geram seu conteúdo quando você muda o idioma!

Se você quebrar a formatação do arquivo yml, o que é muito fácil de fazer por engano, ele redefinirá o arquivo! ***Certifique-se de manter um backup local da sua tradução se estiver traduzindo manualmente o conteúdo!***

É mais fácil traduzir o arquivo de idioma no site de tradução da comunidade, pois isso gerencia a formatação para você! Ele também sugere traduções automaticamente. Você pode encontrar isso aqui: https://crowdin.com/project/elitemobs

Como lembrete, se você estiver traduzindo, se usar caracteres especiais como `&` para iniciar um valor de configuração, deve colocar esse valor entre aspas, como \"&cCool value\"! Caso contrário, o arquivo será corrompido e redefinirá seu progresso. Você pode usar um linter para verificar a validade do arquivo yml - basta colar o conteúdo do seu yml aqui: <https://www.yamllint.com/>

</details>

# Perguntas Frequentes sobre Compatibilidade do EliteMobs com o BetterStructures

### Posso obter estruturas no BetterStructure com chefes do EliteMobs nelas?

<details>
<summary>
Informações
</summary>

Sim, os pacotes de santuários do BetterStructures são exatamente esse tipo de conteúdo. Você pode baixar os pacotes de santuários do [itch.io](https://magmaguy.itch.io/).

</details>

### Por que os santuários são protegidos com WorldGuard e como posso evitar isso

<details>
<summary>
Informações
</summary>

As estruturas de santuário do EliteMobs são protegidas com WorldGuard por padrão para garantir que os jogadores não construam engenhocas para abusar do sistema de combate do Minecraft dentro da área de luta.

As proteções são excluídas automaticamente quando o chefe é derrotado.

Cada santuário possui pontos de entrada que os jogadores devem cavar para encontrar se estiverem no subsolo.

Se você não deseja usar as proteções do WorldGuard, pode desabilitá-las no arquivo de configuração config.yml do BetterStructures.

</details>

### Por que os santuários estão gerando sem elites neles?

<details>
<summary>
Informações
</summary>

Isso pode acontecer se você instalar os santuários do BetterStructures antes de instalar o EliteMobs. Para corrigir isso, reimporta e reinstala os santuários em seu servidor **após** o EliteMobs ser instalado.

</details>

### Posso usar os santuários sem usar o EliteMobs

<details>
<summary>
Informações
</summary>

Os santuários foram feitos especificamente para combater os chefes que estão neles, mas se você só quiser as arenas de combate pela estética, pode executar os pacotes de santuários sem ter o EliteMobs instalado.

</details>

# Perguntas Frequentes sobre Compatibilidade do EliteMobs com o FreeMinecraftModels

### O FreeMinecraftModels é compatível com o EliteMobs?

<details>
<summary>
Informações
</summary>

Sim. O plugin FreeMinecraftModels foi feito especificamente para o EliteMobs e o EternalTD.

</details>

### Como instalo modelos personalizados do EliteMobs?

<details>
<summary>
Informações
</summary>

Você pode baixar os modelos personalizados para o EliteMobs de https://www.patreon.com/magmaguy e https://magmaguy.itch.io/. Depois de instalá-los, **você terá que mesclar o pacote de recursos** gerado pelo FreeMinecraftModels em sua pasta de saída com o pacote de recursos oficial do EliteMobs se você quiser usar o pacote de recursos oficial e distribuí-lo aos jogadores hospedando-o online.

</details>

### Como instalo modelos personalizados do EliteMobs?

<details>
<summary>
Informações
</summary>

Você pode baixar os modelos personalizados para o EliteMobs de https://www.patreon.com/magmaguy e https://magmaguy.itch.io/. Depois de instalá-los, **você terá que mesclar o pacote de recursos** gerado pelo FreeMinecraftModels em sua pasta de saída com o pacote de recursos oficial do EliteMobs se você quiser usar o pacote de recursos oficial e distribuí-lo aos jogadores hospedando-o online.

</details>


# Perguntas Frequentes sobre Compatibilidade do EliteMobs com o ResurrectionChest

### O EliteMobs funciona com o ResurrectionChest?

<details>
<summary>
Informações
</summary>

Sim. O ResurrectionChest foi feito especificamente para o conteúdo do EliteMobs e é totalmente compatível.

</details>

# Perguntas Frequentes sobre Compatibilidade com Outros Plugins

### Posso usar o EliteMobs com um plugin semelhante ao MCMMO ou AureliumSkills

<details>
<summary>
Informações
</summary>

Sim. Dito isso, você pode querer desabilitar a saúde adicional do sistema de prestígio do EliteMobs.

</details>

### Posso usar o EliteMobs com outro plugin de itens personalizados

<details>
<summary>
Informações
</summary>

Sim. Se você quiser que os chefes deixem cair itens específicos daquele plugin, configure comandos ao morrer para executar e dar aos jogadores itens dessa forma. No entanto, não há uma maneira real de equilibrar o EliteMobs com qualquer sistema de itens que você esteja usando. As elites passam de 7 pontos de saúde para centenas de milhares de pontos de saúde e, como tal, outros plugins de itens serão extremamente poderosos ou incrivelmente fracos. O EliteMobs já possui um sistema de itens integrado e não requer nenhum plugin de itens externo.

</details>

# Outras Perguntas Frequentes

### Executar um comando na morte de um Mob Elite ou dar loot/recompensas de outros plugins na morte de um Mob Elite?

[Informações disponíveis aqui.]($language$/elitemobs/creating_bosses.md&section=ondeathcommands)

### Suporte ao Vault?

[Informações disponíveis aqui.]($language$/elitemobs/vault.md)

### Marcadores do PlaceholderAPI?

[Informações disponíveis aqui.]($language$/elitemobs/placeholders.md)

### Usar flags do WorldGuard para permitir o EliteMobs em alguns lugares, mas não em outros?

[Informações disponíveis aqui.]($language$/elitemobs/worldguard_flags.md)

### Posso fazer com que 100% dos mobs que geram sejam Mobs Elite?

Esta é uma ideia terrível, mas você pode acessar o arquivo de configuração `MobCombatSettings.yml` e
editar `eliteMobsSpawnPercentage` para definir a porcentagem de geração de Mobs Elite.

### Posso criar poderes personalizados?

[Informações disponíveis aqui.]($language$/elitemobs/creating_powers.md)

### Posso criar encantamentos personalizados?

Isso está na nossa lista de tarefas e deve estar disponível em breve, mas atualmente não é possível.

### Posso criar efeitos de poção personalizados?

A única maneira de fazer isso é aprender Java e escrevê-los você mesmo. Nesse ponto, você também pode modificar o
código-fonte do EliteMobs.

### Como posso desabilitar as partículas do buraco de minhoca?

Para desabilitar as partículas do buraco de minhoca, navegue até *~plugins\EliteMobs\Wormholes.yml* e, em seguida, localize `noParticlesMode` e
altere o valor para `false`.

### Como posso editar o buraco de minhoca na geração do AG para teletransportar os jogadores para onde eu quiser?

<div align="center">

![faq_ag_wormhole.jpg](../../../img/wiki/faq_ag_wormhole.jpg)

</div>

Você pode fazer isso abrindo *plugins\EliteMobs\wormholes\adventurers_guild_wormhole.yml*.

Em seguida, encontre a seguinte configuração
`location2: your_world_here,0.5,64,0.5,0,0`
e altere os valores para sua localização preferida.

### Como posso desvincular itens?

A única maneira de remover o soulbind de itens é usar Pergaminhos de Desvinculação. Leia mais sobre
isso [aqui]($language$/elitemobs/soulbind.md).

### Como posso mesclar pacotes de recursos?

É possível mesclar pacotes de recursos manualmente, mas recomendamos usar uma ferramenta online como [merge.elmakers](https://merge.elmakers.com/) para mesclar seus pacotes de recursos.

### Quais são os marcadores de comando do EliteMobs?

| Marcador |          Detalhes           |
| --- |:--------------------------:|
| `$player` | Display name of the player |
| `$bossName` |  Display name of the boss  |
| `$bossLevel` |     Level of the boss      |

### O que devo fazer para desabilitar o recurso de pacote de recursos obrigatório?

Esta configuração está realmente localizada no seu arquivo `server.properties`. Normalmente, você encontra este arquivo no diretório raiz do seu servidor. Depois de abrir o arquivo, localize a configuração `require-resource-pack` e altere o valor para `false` para desabilitar o recurso de pacote de recursos obrigatório.

### Como posso desabilitar eventos?

Se você deseja desabilitar eventos como o goblin de armas, o goblin de amuletos etc., pode abrir *~plugins\EliteMobs\events.yml* e, em seguida, localizar as configurações `actionEventsEnabled`, `timedEventsEnabled` e defini-las como `false`.



