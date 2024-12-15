Se tiver alguma questão que não esteja listada aqui, ***dê uma olhada na barra lateral*** para ver se existe uma página dedicada a ela no wiki!

# Perguntas Frequentes sobre Configuração e Instalação

### Como configuro modelos personalizados?

<details>
<summary>
Informação
</summary>

Existem dois plugins diferentes que lidam com "Modelos Personalizados".

- LibsDisguises (incluindo a edição gratuita) permite disfarçar mobs como outros mobs ou como skins de jogador personalizadas. Se vir um Boss Personalizado com um disfarce de jogador, está a usar o LibsDisguises para o disfarce. Terá de baixar o LibsDisguises para que esta funcionalidade específica funcione.

- FreeMinecraftModels (e ModelEngine R3, embora o ModelEngine já não seja recomendado) permite disfarçar mobs como qualquer Modelo Personalizado, com muito poucas limitações. O FreeMinecraftModels permite que faça isso gratuitamente e é recomendado. Terá de usar o FreeMinecraftModels ou o ModelEngine R3 (não o R4) para que os Modelos Personalizados funcionem. O FreeMinecraftModels pode ser executado juntamente com o ModelEngine, pelo que também pode simplesmente executar ambos.
<br>Se tiver instalado o FreeMinecraftModels/ModelEngine e os Modelos Personalizados ainda não estiverem a funcionar, poderá ter instalado o conteúdo antes de instalar o plugin de modelo. Para ter a certeza de que este não é o problema, reimporte o conteúdo do EliteMobs com os Disfarces Personalizados e instale-o novamente.

</details>

### A consola/EliteMobs diz que estou a usar a versão errada do WorldGuard

<details>
<summary>
Informação
</summary>

Se o WorldGuard for reportado pelo EliteMobs como não instalado, é porque está a usar a versão errada do WorldGuard para a sua plataforma de servidor. O WorldGuard é muito sensível quanto à versão que está a usar e tem versões diferentes para software de servidor.

- Pode baixar a versão do WorldGuard para Spigot / Paper aqui: https://dev.bukkit.org/projects/worldguard - Certifique-se de que diz que é compatível com a sua versão do Minecraft!

</details>

### Wormholes / Arenas / NPCs não parecem estar a funcionar corretamente imediatamente após a instalação

<details>
<summary>
Informação
</summary>

Se wormholes / arenas / NPCs não parecem estar a funcionar corretamente imediatamente após a instalação do conteúdo, deve executar `/em reload`. É sempre bom executá-lo após a instalação do conteúdo do EliteMobs.

</details>

### Os Bosses de Dungeon não estão a reaparecer depois de os matar

<details>
<summary>
Informação
</summary>

Na maioria das vezes, isso acontece porque alguns bosses têm longos tempos de respawn. A Sombra do Ligador de Mundos tem o maior temporizador de respawn de 1 semana da vida real. Os bosses de covil costumam ter um temporizador de respawn de 4 horas. Todo o resto tende a ter um temporizador de respawn de 5 a 30 minutos. Pode editar o temporizador de respawn de um Boss Personalizado no seu ficheiro de configuração na pasta `~/plugins/EliteMobs/custombosses`.

</details>

### Os Bosses de Dungeon nunca apareceram após a instalação

<details>
<summary>
Informação
</summary>

Isso é quase certamente devido à interferência de um plugin de terceiros. Verifique o seguinte:
- O seu mundo está na dificuldade Pacífica? Os mobs não aparecem na dificuldade Pacífica.

- A sua região está protegida contra o aparecimento? As dungeons do EliteMobs lidam com a sua própria proteção de região através do WorldGuard, não precisa de proteger os mundos de dungeon do EliteMobs, fazê-lo pode impedir o aparecimento se forem usadas as flags erradas.

- Existe outro plugin a impedir que os bosses do EliteMobs apareçam ou a removê-los? Esses conflitos costumam aparecer na consola, portanto, verifique os logs da sua consola.

</details>

### O plugin não está a completar automaticamente os comandos para o conteúdo que acabei de instalar

<details>
<summary>
Informação
</summary>

As sugestões automáticas nos comandos são tratadas pelo CloudCommandFramework e só atualizam as sugestões de comandos **após o reinício do servidor**. Infelizmente, não há nada que eu possa fazer quanto a isso.

</details>

### Como uso as traduções do EliteMobs?

<details>
<summary>
Informação
</summary>

Pode alterar o idioma do EliteMob executando o `/em language <nome do idioma>.yml`. para usar a tradução padrão do plugin criada e gerida pela comunidade EliteMobs

Para adicionar um idioma que não esteja no plugin ou para personalizar o idioma existente, é recomendado que use o `custom_language.yml`.

Os ficheiros de idioma só geram o seu conteúdo quando muda o idioma!

Se quebrar a formatação do ficheiro yml, o que é muito fácil de fazer por engano, ele vai repor o ficheiro! ***Certifique-se de manter um backup local da sua tradução se estiver a traduzir manualmente o conteúdo!***

É mais fácil traduzir o ficheiro de idioma no website de tradução da comunidade, pois este trata da formatação por si! Também sugere traduções automaticamente. Pode encontrá-lo aqui: https://crowdin.com/project/elitemobs

Como lembrete, se estiver a traduzir, se usar caracteres especiais como `&` para iniciar um valor de configuração, deve colocar esse valor entre aspas como \"&cValor fixe\"! Caso contrário, o ficheiro será quebrado e vai repor o seu progresso. Pode usar um linter para verificar a validade do ficheiro yml - basta colar o conteúdo do seu yml aqui: <https://www.yamllint.com/>

</details>

# Perguntas Frequentes sobre Compatibilidade do EliteMobs e BetterStructures

### Posso obter estruturas em BetterStructure com bosses do EliteMobs nelas?

<details>
<summary>
Informação
</summary>

Sim, os pacotes de santuário do BetterStructures são exatamente esse tipo de conteúdo. Pode baixar os pacotes de santuário de [itch.io](https://magmaguy.itch.io/).

</details>

### Por que razão os santuários estão protegidos com o WorldGuard e como posso impedir isso?

<details>
<summary>
Informação
</summary>

As estruturas de santuário do EliteMobs são protegidas com o WorldGuard por padrão para garantir que os jogadores não construam engenhocas para abusar do sistema de combate do Minecraft dentro da área de combate.

As proteções são eliminadas automaticamente assim que o boss é derrotado.

Cada santuário tem pontos de entrada que os jogadores devem escavar para encontrar se estiverem no subsolo.

Se não quiser usar as proteções do WorldGuard, pode desativá-las no ficheiro de configuração config.yml do BetterStructures.

</details>

### Por que razão os santuários estão a aparecer sem elites neles?

<details>
<summary>
Informação
</summary>

Isso pode acontecer se instalar os santuários do BetterStructures antes de instalar o EliteMobs. Para corrigir isso, reimporte e reinstale os santuários no seu servidor **depois** de o EliteMobs estar instalado.

</details>

### Posso usar os santuários sem usar o EliteMobs?

<details>
<summary>
Informação
</summary>

Os santuários foram feitos especificamente para combater os bosses que estão neles, mas se quiser apenas as arenas de combate para a estética, pode simplesmente executar os pacotes de santuário sem ter o EliteMobs instalado.

</details>

# Perguntas Frequentes sobre Compatibilidade do EliteMobs e FreeMinecraftModels

### O FreeMinecraftModels é compatível com o EliteMobs?

<details>
<summary>
Informação
</summary>

Sim. O plugin FreeMinecraftModels foi feito especificamente para o EliteMobs e o EternalTD.

</details>

### Como instalo os modelos personalizados do EliteMobs?

<details>
<summary>
Informação
</summary>

Pode baixar os modelos personalizados para o EliteMobs de https://www.patreon.com/magmaguy e https://magmaguy.itch.io/. Depois de os ter instalado, **terá de unir o pacote de recursos** gerado pelo FreeMinecraftModels na sua pasta de saída com o pacote de recursos oficial do EliteMobs se quiser usar o pacote de recursos oficial e distribuí-lo aos jogadores, alojando-o online.

</details>

### Como instalo os modelos personalizados do EliteMobs?

<details>
<summary>
Informação
</summary>

Pode baixar os modelos personalizados para o EliteMobs de https://www.patreon.com/magmaguy e https://magmaguy.itch.io/. Depois de os ter instalado, **terá de unir o pacote de recursos** gerado pelo FreeMinecraftModels na sua pasta de saída com o pacote de recursos oficial do EliteMobs se quiser usar o pacote de recursos oficial e distribuí-lo aos jogadores, alojando-o online.

</details>

# Perguntas Frequentes sobre Compatibilidade do EliteMobs e ResurrectionChest

### O EliteMobs funciona com o ResurrectionChest?

<details>
<summary>
Informação
</summary>

Sim. O ResurrectionChest foi feito especificamente para o conteúdo do EliteMobs e é totalmente compatível.

</details>

# Perguntas Frequentes sobre Compatibilidade com outros plugins

### Posso usar o EliteMobs com um plugin semelhante ao MCMMO ou AureliumSkills?

<details>
<summary>
Informação
</summary>

Sim. Dito isto, poderá querer desativar a saúde bónus do sistema de prestígio do EliteMobs.

</details>

### Posso usar o EliteMobs com outro plugin de itens personalizados?

<details>
<summary>
Informação
</summary>

Sim. Se quiser que os bosses deixem cair itens específicos desse plugin, defina comandos na morte para executar e dar itens aos jogadores dessa forma. No entanto, não há uma forma real de equilibrar o EliteMobs com qualquer sistema de itens que esteja a usar. Os elites passam de ter 7 pontos de saúde para centenas de milhares de pontos de saúde e, como tal, outros plugins de itens serão extremamente poderosos ou incrivelmente fracos. O EliteMobs já tem um sistema de itens integrado e não requer nenhum plugin de itens externos.

</details>

# Outras Perguntas Frequentes

### Executar um comando na morte de um Elite Mob ou dar saque/recompensas de outros plugins na morte de um Elite Mob?

[Informações disponíveis aqui.]($language$/elitemobs/creating_bosses.md&section=ondeathcommands)

### Suporte Vault?

[Informações disponíveis aqui.]($language$/elitemobs/vault.md)

### Placeholders do PlaceholderAPI?

[Informações disponíveis aqui.]($language$/elitemobs/placeholders.md)

### Usar flags do WorldGuard para permitir o EliteMobs em alguns lugares, mas não noutros?

[Informações disponíveis aqui.]($language$/elitemobs/worldguard_flags.md)

### Posso fazer com que 100% dos mobs que aparecem sejam Elite Mobs?

Esta é uma péssima ideia, mas pode aceder ao ficheiro de configuração `MobCombatSettings.yml` e editar `eliteMobsSpawnPercentage` para definir a percentagem de aparecimento dos Elite Mobs.

### Posso criar poderes personalizados?

[Informações disponíveis aqui.]($language$/elitemobs/creating_powers.md)

### Posso criar encantamentos personalizados?

Isso está na nossa lista de tarefas e deve chegar em breve, mas atualmente não é possível.

### Posso criar efeitos de poção personalizados?

A única maneira de fazer isso é aprender Java e escrevê-los sozinho. Nesse ponto, também pode modificar o código fonte do EliteMobs.

### Como posso desativar as partículas de wormhole?

Para desativar as partículas de wormhole, navegue para *~plugins\EliteMobs\Wormholes.yml* e depois encontre `noParticlesMode` e altere o valor para `false`.

### Como posso editar o wormhole no AG spawn para teletransportar jogadores para onde eu quero?

<div align="center">

![faq_ag_wormhole.jpg](../../../img/wiki/faq_ag_wormhole.jpg)

</div>

Pode fazê-lo abrindo o *plugins\EliteMobs\wormholes\adventurers_guild_wormhole.yml*.

Em seguida, encontre a seguinte configuração
`location2: o_seu_mundo_aqui,0.5,64,0.5,0,0`
e altere os valores para a sua localização preferida.

Lembre-se de fazer `/em reload` para que as alterações tenham efeito.

### Como posso desvincular itens?

A única maneira de remover o soulbound dos itens é usar Desvincular Pergaminhos. Leia mais sobre isso [aqui]($language$/elitemobs/soulbind.md).

### Como posso unir pacotes de recursos?

É possível unir os pacotes de recursos manualmente, mas recomendamos o uso de uma ferramenta online como o [merge.elmakers](https://merge.elmakers.com/) para unir os seus pacotes de recursos.

### Quais são os placeholders de comando do EliteMobs?

| Placeholder |          Detalhes           |
| --- |:--------------------------:|
| `$player` | Nome de exibição do jogador |
| `$bossName` |  Nome de exibição do boss  |
| `$bossLevel` |     Nível do boss      |

### O que devo fazer para desativar o pacote de recursos forçado?

Esta configuração está realmente localizada no seu ficheiro `server.properties`. Normalmente, pode encontrar este ficheiro no diretório raiz dos seus servidores. Depois de abrir o ficheiro, encontre a configuração `require-resource-pack` e altere o valor para `false` para desativar o pacote de recursos forçado.

### Como posso desativar os eventos?

Se quiser desativar eventos como o goblin de armas, goblin de amuletos, etc., pode abrir *~plugins\EliteMobs\events.yml*, em seguida, encontrar as configurações `actionEventsEnabled`, `timedEventsEnabled` e defini-las como `false`.

### Como posso editar um mundo de dungeon ou o mundo da Guilda dos Aventureiros?

A partir do EliteMobs 9, o EliteMobs já não depende do WorldGuard para proteção de dungeons e conteúdo. Para contornar temporariamente essa proteção, use o comando `/em protection bypass`.

Se quiser desativar permanentemente a proteção para uma dungeon específica, siga estes passos:

1. Navegue até *plugins/EliteMobs/content_packages/*.
2. Encontre o ficheiro *dungeon_config.yml* para a dungeon que deseja modificar.
3. Abra o ficheiro de configuração e encontre a configuração `protect:`.
4. Altere o valor para `false` para desativar a proteção.
