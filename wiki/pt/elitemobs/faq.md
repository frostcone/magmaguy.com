Se tiver uma pergunta que não esteja listada aqui, ***dê uma olhada na barra lateral*** para ver se tem uma página dedicada a ela na wiki!

# FAQ de Configuração e Instalação

### Como posso desativar drops de loot ou moedas do EliteMobs, e devo fazê-lo?

<details>
<summary>
Info
</summary>

EliteMobs permite controlar drops de loot e moedas, mas antes de fazer alterações, é importante entender como estes drops afetam a jogabilidade e a progressão:

- **Drops de Loot e Moedas:**
Drops de loot são uma funcionalidade central do EliteMobs, ligada ao equipamento que os jogadores usam. Desativar o loot tornará impossível para os jogadores adquirirem o melhor equipamento necessário para enfrentar Elites de nível superior, parando completamente a progressão.

Moedas são vitais para a economia do jogo, usadas para comprar e melhorar equipamento. Desativar drops de moedas perturbará severamente este sistema, afetando negativamente a experiência e o equilíbrio do jogador.

Para desativar drops de loot e moedas, abra `ItemSettings.yml` e defina `doEliteMobsLoot` como `false`.

- **Loot de Boss Personalizado em Dungeons:**
Bosses personalizados têm loot definido nos seus ficheiros de configuração, localizados em `~/elitemobs/custombosses`. Desativar estes drops removerá as suas recompensas únicas, perturbando a experiência pretendida.

</details>


### Como configuro modelos personalizados?

<details>
<summary>
Info
</summary>

Existem dois plugins diferentes que lidam com "Modelos Personalizados".

- LibsDisguises (incluindo a edição gratuita) permite disfarçar mobs como outros mobs ou como skins de jogador personalizadas. Se vir um Boss Personalizado com um disfarce de jogador, ele está a usar o LibsDisguises para o disfarce. Terá de descarregar o LibsDisguises para que esta funcionalidade específica funcione.


- FreeMinecraftModels (e ModelEngine R3, embora o ModelEngine já não seja recomendado) permite disfarçar mobs como qualquer Modelo Personalizado, com muito poucas limitações. O FreeMinecraftModels permite fazer isto gratuitamente e é recomendado. Terá de usar o FreeMinecraftModels ou o ModelEngine R3 (não o R4) para que os Modelos Personalizados funcionem. O FreeMinecraftModels pode ser executado juntamente com o ModelEngine, por isso também pode simplesmente executar ambos.
<br>Se instalou o FreeMinecraftModels/ModelEngine e os Modelos Personalizados ainda não estão a funcionar, pode ter instalado o conteúdo antes de instalar o plugin de modelos. Para garantir que isto não é um problema, reimporte o conteúdo do EliteMobs com os Disfarces Personalizados e instale-o novamente.

</details>

### Consola / EliteMobs diz que estou a usar a versão errada do WorldGuard

<details>
<summary>
Info
</summary>

Se o WorldGuard for reportado pelo EliteMobs como não estando instalado, isso acontece porque está a usar a versão errada do WorldGuard para a sua plataforma de servidor. O WorldGuard é muito sensível quanto à versão que está a usar, e tem versões diferentes para software de servidor.

- Pode descarregar a versão do WorldGuard para Spigot / Paper aqui: https://dev.bukkit.org/projects/worldguard - Certifique-se de que diz que é compatível com a sua versão do Minecraft!

</details>

### Wormholes / Arenas / NPCs não parecem estar a funcionar corretamente imediatamente após a instalação

<details>
<summary>
Info
</summary>

Se wormholes / arenas / NPCs não parecem estar a funcionar corretamente imediatamente após instalar conteúdo, deve executar `/em reload`. É sempre bom executá-lo após instalar conteúdo do EliteMobs.

</details>

### Bosses de Dungeon não estão a reaparecer depois de os matar

<details>
<summary>
Info
</summary>

Na maioria das vezes, isto acontece simplesmente porque alguns bosses têm tempos de reaparecimento longos. A Sombra do Ligador de Mundos tem o tempo de reaparecimento mais longo, de 1 semana real. Bosses de covil geralmente têm um tempo de reaparecimento de 4 horas. Tudo o resto tende a ter um tempo de reaparecimento de 5-30 minutos. Pode editar o tempo de reaparecimento de um Boss Personalizado no seu ficheiro de configuração na pasta `~/plugins/EliteMobs/custombosses`.

</details>

### Bosses de Dungeon nunca apareceram após a instalação

<details>
<summary>
Info
</summary>

Isto é quase certamente devido à interferência de um plugin de terceiros. Verifique o seguinte:
- O seu mundo está na dificuldade Pacífico? Mobs não aparecem na dificuldade Pacífico


- A sua região está protegida contra aparecimento de mobs? Dungeons do EliteMobs gerem a sua própria proteção de região via WorldGuard, não precisa de proteger mundos de dungeon do EliteMobs, na verdade, fazê-lo pode impedir o aparecimento de mobs se as flags erradas forem usadas.


- Existe outro plugin a impedir que bosses do EliteMobs apareçam ou a removê-los? Estes conflitos aparecerão frequentemente na consola, por isso verifique os seus logs da consola.

</details>

### O plugin não está a autocompletar comandos para conteúdo que acabei de instalar

<details>
<summary>
Info
</summary>

As sugestões automáticas em comandos são geridas pelo CloudCommandFramework e só atualizam as sugestões de comandos **após um reinício do servidor**. Infelizmente, não há nada que eu possa fazer sobre isso.

</details>

### Como uso as traduções do EliteMobs?

<details>
<summary>
Info
</summary>

Pode mudar o idioma do EliteMob executando `/em language <languagename>.yml`. para usar a tradução padrão do plugin criada e gerida pela comunidade EliteMobs

Para adicionar um idioma que não está no plugin, ou para personalizar o idioma existente, é recomendado usar `custom_language.yml`.

Os ficheiros de idioma só geram o seu conteúdo quando muda o idioma!

Se quebrar a formatação do ficheiro yml, o que é muito fácil de fazer por engano, o ficheiro será reiniciado! ***Certifique-se de que mantém uma cópia de segurança local da sua tradução se estiver a traduzir o conteúdo manualmente!***

É mais fácil traduzir o ficheiro de idioma no site de tradução da comunidade, pois ele trata da formatação para si! Também sugere traduções automaticamente. Pode encontrá-lo aqui: https://crowdin.com/project/elitemobs

Como lembrete, se estiver a traduzir, se usar caracteres especiais como `&` para iniciar um valor de configuração, deve colocar esse valor entre aspas como \"&cValor fixe\"! Caso contrário, o ficheiro ficará quebrado e o seu progresso será reiniciado. Pode usar um linter para verificar a validade do ficheiro yml - basta colar o conteúdo do seu yml aqui: <https://www.yamllint.com/>

</details>

# FAQ de compatibilidade entre EliteMobs e BetterStructures

### Posso ter estruturas no BetterStructures com bosses do EliteMobs nelas?

<details>
<summary>
Info
</summary>

Sim, os pacotes de santuários do BetterStructures são exatamente este tipo de conteúdo. Pode descarregar os pacotes de santuários em [itch.io](https://magmaguy.itch.io/).

</details>

### Por que os santuários são protegidos com WorldGuard e como evito isso

<details>
<summary>
Info
</summary>

As estruturas de santuário do EliteMobs são protegidas com WorldGuard por padrão para garantir que os jogadores não construam engenhocas para abusar do sistema de combate do Minecraft dentro da área de luta.

As proteções são automaticamente eliminadas assim que o boss é derrotado.

Cada santuário tem pontos de entrada que os jogadores devem escavar para encontrar se estiverem subterrâneos.

Se não desejar usar as proteções do WorldGuard, pode desativá-las no ficheiro de configuração config.yml do BetterStructures.

</details>

### Por que os santuários estão a aparecer sem elites neles?

<details>
<summary>
Info
</summary>

Isto pode acontecer se instalar os santuários do BetterStructures antes de instalar o EliteMobs. Para corrigir isto, reimporte e reinstale os santuários no seu servidor **depois** de o EliteMobs estar instalado.

</details>

### Posso usar os santuários sem usar o EliteMobs

<details>
<summary>
Info
</summary>

Os santuários foram feitos especificamente para combater os bosses que estão neles, mas se apenas quiser as arenas de combate pela estética, pode simplesmente executar os pacotes de santuários sem ter o EliteMobs instalado.

</details>

# FAQ de compatibilidade entre EliteMobs e FreeMinecraftModels

### O FreeMinecraftModels é compatível com o EliteMobs?

<details>
<summary>
Info
</summary>

Sim. o plugin FreeMinecraftModels foi feito especificamente para o EliteMobs e o EternalTD.

</details>

### Como instalo modelos personalizados do EliteMobs?

<details>
<summary>
Info
</summary>

Pode descarregar os modelos personalizados para o EliteMobs em https://www.patreon.com/magmaguy e https://magmaguy.itch.io/. Assim que os tiver instalados, **terá de juntar o pacote de recursos** gerado pelo FreeMinecraftModels na sua pasta de saída com o pacote de recursos oficial do EliteMobs se quiser usar o pacote de recursos oficial e distribuí-lo aos jogadores hospedando-o online.

</details>

### Como instalo modelos personalizados do EliteMobs?

<details>
<summary>
Info
</summary>

Pode descarregar os modelos personalizados para o EliteMobs em https://www.patreon.com/magmaguy e https://magmaguy.itch.io/ . Assim que os tiver instalados, **terá de juntar o pacote de recursos** gerado pelo FreeMinecraftModels na sua pasta de saída com o pacote de recursos oficial do EliteMobs se quiser usar o pacote de recursos oficial e distribuí-lo aos jogadores hospedando-o online.

</details>


# FAQ de compatibilidade entre EliteMobs e ResurrectionChest

### O EliteMobs funciona com o ResurrectionChest?

<details>
<summary>
Info
</summary>

Sim. O ResurrectionChest foi feito especificamente para conteúdo do EliteMobs e é totalmente compatível.

</details>

# FAQ de compatibilidade com outros plugins

### Posso usar o EliteMobs com um plugin semelhante ao MCMMO ou AureliumSkills

<details>
<summary>
Info
</summary>

Sim. Dito isto, pode querer desativar a saúde bónus do sistema de prestígio do EliteMobs.

</details>

### Posso usar o EliteMobs com outro plugin de itens personalizados

<details>
<summary>
Info
</summary>

Sim. Se quiser que os bosses deixem cair itens específicos desse plugin, pode definir comandos para serem executados na morte e dar itens aos jogadores dessa forma. No entanto, não há uma forma real de equilibrar o EliteMobs com qualquer sistema de itens que esteja a usar. Os Elites passam de ter 7 pontos de saúde para centenas de milhares de pontos de saúde, e como tal, outros plugins de itens serão insanamente overpowered ou incrivelmente underpowered. O EliteMobs já tem um sistema de itens integrado e não requer nenhum plugin de itens externo.

</details>

# Outras FAQ

### Executar um comando na morte de um Elite Mob ou dar loot/recompensas de outros plugins na morte de um Elite Mob?

[Informação disponível aqui.]($language$/elitemobs/creating_bosses.md&section=ondeathcommands)

### Suporte para Vault?

[Informação disponível aqui.]($language$/elitemobs/vault.md)

### Placeholders do PlaceholderAPI?

[Informação disponível aqui.]($language$/elitemobs/placeholders.md)

### Usar flags do WorldGuard para permitir EliteMobs em alguns locais, mas não noutros?

[Informação disponível aqui.]($language$/elitemobs/worldguard_flags.md)

### Posso fazer com que 100% dos mobs que aparecem sejam Elite Mobs?

Esta é uma ideia terrível, mas pode aceder ao ficheiro de configuração `MobCombatSettings.yml` e editar `eliteMobsSpawnPercentage` para definir a percentagem de aparecimento de Elite Mobs.

### Posso criar poderes personalizados?

[Informação disponível aqui.]($language$/elitemobs/creating_powers.md)

### Posso criar encantamentos personalizados?

Isto está na nossa lista de tarefas e deverá chegar em breve, mas atualmente não é possível.

### Posso criar efeitos de poção personalizados?

A única forma de fazer isto é aprender Java e escrevê-los você mesmo. Nesse ponto, pode muito bem modificar o código fonte do EliteMobs.

### Como posso desativar as partículas de wormhole?

Para desativar as partículas de wormhole, navegue até *~plugins\EliteMobs\Wormholes.yml* e depois localize `noParticlesMode` e mude o valor para `false`.

### Como posso editar o wormhole no spawn da AG para teletransportar jogadores para onde quero?

<div align="center">

![faq_ag_wormhole.jpg](../../../img/wiki/faq_ag_wormhole.jpg)

</div>

Pode fazê-lo abrindo *plugins\EliteMobs\wormholes\adventurers_guild_wormhole.yml*.

Depois encontre a seguinte configuração
`location2: your_world_here,0.5,64,0.5,0,0`
e mude os valores para a sua localização preferida.

Lembre-se de executar `/em reload` para que as alterações tenham efeito.

### Como posso desvincular itens?

A única forma de remover soulbound de itens é usar Unbind Scrolls. Leia mais sobre isso [aqui]($language$/elitemobs/soulbind.md).

### Como posso juntar pacotes de recursos?

É possível juntar pacotes de recursos manualmente, mas recomendamos usar uma ferramenta online como [merge.elmakers](https://merge.elmakers.com/) para juntar os seus pacotes de recursos.

### Quais são os placeholders de comando do EliteMobs?

| Placeholder |          Detalhes           |
| --- |:--------------------------:|
| `$player` | Nome de exibição do jogador |
| `$bossName` |  Nome de exibição do boss  |
| `$bossLevel` |     Nível do boss      |

### O que faço para desativar o pacote de recursos forçado?

Esta configuração está na verdade localizada no seu ficheiro `server.properties`. Geralmente pode encontrar este ficheiro na pasta raiz do seu servidor. Depois de abrir o ficheiro, localize a configuração `require-resource-pack` e mude o valor para `false` para desativar o pacote de recursos forçado.

### Como posso desativar eventos?

Se quiser desativar eventos como o goblin de armas, goblin de amuletos, etc. Então pode abrir *~plugins\EliteMobs\events.yml*, localizar as configurações `actionEventsEnabled`, `timedEventsEnabled` e defini-las como `false`.

### Como posso editar um mundo de dungeon ou o mundo da Guilda dos Aventureiros?

A partir do EliteMobs 9, o EliteMobs já não depende do WorldGuard para proteção de dungeons e conteúdo. Para contornar temporariamente esta proteção, use o comando `/em protection bypass`.

Se quiser desativar permanentemente a proteção para uma dungeon específica, siga estes passos:

1. Navegue até *plugins/EliteMobs/content_packages/*.
2. Encontre o ficheiro *dungeon_config.yml* para a dungeon que quer modificar.
3. Abra o ficheiro de configuração e localize a configuração `protect:`.
4. Mude o valor para `false` para desativar a proteção.


### O que são Elite Scrolls e como posso usá-los

**Elite Scrolls** são itens de melhoria especiais que permitem aos jogadores converter equipamento regular (não-elite) em equipamento de nível elite, integrando-se perfeitamente com os sistemas de nivelamento e loot do EliteMobs.

- **Compatibilidade de Plugins:** Ideal para servidores que usam outros plugins de itens como o **ItemAdder**, permitindo que esses itens ganhem níveis elite.
- **Método de Melhoria:** Pode ser aplicado na **Guilda dos Aventureiros** falando com o **Scotty**, o NPC Aplicador de Scrolls (localizado ao lado do Encantador). *Esta funcionalidade está desativada por padrão.*
- **Progressão Equilibrada:** Scrolls caem de **Elite Mobs** do mesmo nível, garantindo melhorias justas e apropriadas para o nível.
- **Suporte a Itens Personalizados:** Permite que itens personalizados ou baseados em plugins funcionem dentro do sistema de progressão do EliteMobs.

> **Nota:** Os efeitos de dano elite só estão ativos dentro do sistema EliteMobs. Itens melhorados com Scrolls não serão overpowered na jogabilidade geral fora do conteúdo do EliteMobs.

#### Como Ativar Elite Scrolls

Por padrão, os Elite Scrolls estão **desativados**. Para ativá-los:

1. Abra o ficheiro de configuração:
   `plugins/EliteMobs/ItemSettings.yml`
2. Defina a seguinte opção como `true`:
   `useEliteItemScrolls`
3. Depois execute o seguinte comando:
   `/em reload`