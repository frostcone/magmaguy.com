Se tiveres uma pergunta que não esteja listada aqui, ***consulta a barra lateral*** para ver se existe uma página
dedicada a ela
na wiki!

# FAQ de Configuração e Instalação

### Como configuro modelos personalizados?

<details>
<summary>
Informação
</summary>

Existem dois plugins diferentes que lidam com "Modelos Personalizados".

- O LibsDisguises (incluindo a edição gratuita) permite disfarçar mobs como outros mobs ou como skins de jogador
  personalizadas. Se vires um Chefe Personalizado com um disfarce de jogador, ele está a usar o LibsDisguises para o
  disfarce. Terás de descarregar o LibsDisguises para que esta funcionalidade específica funcione.

- O FreeMinecraftModels (e ModelEngine R3, embora o ModelEngine já não seja recomendado) permite disfarçar mobs como
  qualquer Modelo Personalizado, com muito poucas limitações. O FreeMinecraftModels permite fazer isso gratuitamente e é
  recomendado. Terás de usar o FreeMinecraftModels ou o ModelEngine R3 (não o R4) para que os Modelos Personalizados
  funcionem. O FreeMinecraftModels pode ser executado juntamente com o ModelEngine, pelo que também podes simplesmente
  executar ambos.
  <br>Se instalaste o FreeMinecraftModels/ModelEngine e os Modelos Personalizados ainda não estiverem a funcionar, podes
  ter instalado o conteúdo antes de instalares o plugin de modelos. Para ter a certeza de que isto não é um problema,
  importa novamente o conteúdo do EliteMobs com os Disfarces Personalizados e instala-o novamente.

</details>

### A consola / EliteMobs diz que estou a usar a versão errada do WorldGuard

<details>
<summary>
Informação
</summary>

Se o EliteMobs reportar que o WorldGuard não está instalado, é porque estás a usar a versão errada do WorldGuard para a
tua plataforma de servidor. O WorldGuard é muito sensível em relação à versão que estás a usar e tem versões diferentes
para software de servidor.

- Podes descarregar a versão do WorldGuard para Spigot / Paper aqui: https://dev.bukkit.org/projects/worldguard -
  Certifica-te de que diz que é compatível com a tua versão do Minecraft!

</details>

### Buracos de Minhoca / Arenas / NPCs não parecem estar a funcionar corretamente imediatamente após a instalação

<details>
<summary>
Informação
</summary>

Se os buracos de minhoca / arenas / NPCs não parecerem estar a funcionar corretamente imediatamente após a instalação do
conteúdo, deves executar `/em reload`. É sempre bom executá-lo após a instalação do conteúdo do EliteMobs.

</details>

### Os Chefes de Masmorra não estão a reaparecer depois de os matar

<details>
<summary>
Informação
</summary>

Na maioria das vezes, isto acontece apenas porque alguns chefes têm tempos de respawn longos. A Sombra do Ligador de
Mundos tem o tempo de respawn mais longo, de 1 semana da vida real. Os chefes de covil geralmente têm um tempo de
respawn de 4 horas. Tudo o resto tende a ter um tempo de respawn de 5 a 30 minutos. Podes editar o tempo de respawn de
um Chefe Personalizado no seu ficheiro de configuração na pasta `~/plugins/EliteMobs/custombosses`.

</details>

### Os Chefes de Masmorra nunca apareceram após a instalação

<details>
<summary>
Informação
</summary>

Isto deve-se quase certamente à interferência de um plugin de terceiros. Verifica o seguinte:

- O teu mundo está na dificuldade Pacífica? Os mobs não surgem na dificuldade Pacífica

- A tua região está protegida contra o surgimento? As masmorras do EliteMobs gerem a sua própria proteção de região
  através do WorldGuard, não precisas de proteger os mundos de masmorra do EliteMobs. Na verdade, fazê-lo pode impedir o
  surgimento se forem usadas as flags erradas.

- Existe outro plugin que impeça o surgimento ou remova os chefes do EliteMobs? Estes conflitos surgirão frequentemente
  na consola, por isso, verifica os registos da tua consola.

</details>

### O plugin não está a preencher automaticamente os comandos para o conteúdo que acabei de instalar

<details>
<summary>
Informação
</summary>

As sugestões automáticas em comandos são geridas pelo CloudCommandFramework e apenas atualizam as sugestões de comandos
**após um reinício do servidor**. Infelizmente, não há nada que eu possa fazer em relação a isso.

</details>

### Como uso as traduções do EliteMobs?

<details>
<summary>
Informação
</summary>

Podes alterar o idioma do EliteMob executando `/em language <nome_idioma>.yml`. para usar a tradução padrão do plugin
criada e gerida pela comunidade EliteMobs

Para adicionar um idioma que não esteja no plugin ou para personalizar o idioma existente, é recomendável que
uses `custom_language.yml`.

Os ficheiros de idioma apenas geram o seu conteúdo quando alteras o idioma!

Se quebrares a formatação do ficheiro yml, o que é muito fácil de fazer por engano, ele irá repor o ficheiro!
***Certifica-te de que guardas uma cópia de segurança local da tua tradução se estiveres a traduzir o conteúdo
manualmente!***

É mais fácil traduzir o ficheiro de idioma no site de tradução da comunidade, pois ele gere a formatação por ti! Também
sugere traduções automaticamente. Podes encontrá-lo aqui: https://crowdin.com/project/elitemobs

Como lembrete, se estiveres a traduzir, se usares carateres especiais como `&` para iniciar um valor de configuração,
deves colocar esse valor entre aspas como \"&cValor legal\"! Caso contrário, o ficheiro ficará quebrado e irá repor o
teu progresso. Podes usar um verificador para verificar a validade do ficheiro yml - basta colares o conteúdo yml
aqui: <https://www.yamllint.com/>

</details>

# FAQ de compatibilidade do EliteMobs e BetterStructures

### Posso ter estruturas no BetterStructure com chefes do EliteMobs nelas?

<details>
<summary>
Informação
</summary>

Sim, os pacotes de santuários do BetterStructures são exatamente este tipo de conteúdo. Podes descarregar os pacotes de
santuários de [itch.io](https://magmaguy.itch.io/).

</details>

### Porque é que os santuários são protegidos com WorldGuard e como é que evito isso?

<details>
<summary>
Informação
</summary>

As estruturas de santuário do EliteMobs são protegidas com WorldGuard por padrão para garantir que os jogadores não
constroem engenhocas para abusar do sistema de combate do Minecraft dentro da área de combate.

As proteções são automaticamente eliminadas assim que o chefe é derrotado.

Todos os santuários têm pontos de entrada que os jogadores têm de escavar para encontrar se estiverem no subsolo.

Se não quiseres usar as proteções do WorldGuard, podes desativá-las no ficheiro de configuração config.yml do
BetterStructures.

</details>

### Porque é que os santuários estão a surgir sem elites neles?

<details>
<summary>
Informação
</summary>

Isto pode acontecer se instalares os santuários do BetterStructures antes de instalares o EliteMobs. Para corrigir isto,
importa e reinstala os santuários no teu servidor **depois** de o EliteMobs estar instalado.

</details>

### Posso usar os santuários sem usar o EliteMobs

<details>
<summary>
Informação
</summary>

Os santuários foram feitos especificamente para combater os chefes que estão neles, mas se quiseres apenas as arenas de
combate pela estética, podes simplesmente executar os pacotes de santuário sem teres o EliteMobs instalado.

</details>

# FAQ de compatibilidade do EliteMobs e FreeMinecraftModels

### O FreeMinecraftModels é compatível com o EliteMobs?

<details>
<summary>
Informação
</summary>

Sim. O plugin FreeMinecraftModels foi feito especificamente para o EliteMobs e o EternalTD.

</details>

### Como instalo modelos personalizados do EliteMobs?

<details>
<summary>
Informação
</summary>

Podes descarregar os modelos personalizados para o EliteMobs de https://www.patreon.com/magmaguy
e https://magmaguy.itch.io/. Depois de os teres instalado, **terás de fundir o pacote de recursos** gerado pelo
FreeMinecraftModels na sua pasta de saída com o pacote de recursos oficial do EliteMobs se quiseres usar o pacote de
recursos oficial e distribuí-lo aos jogadores ao alojá-lo online.

</details>

### Como instalo modelos personalizados do EliteMobs?

<details>
<summary>
Informação
</summary>

Podes descarregar os modelos personalizados para o EliteMobs de https://www.patreon.com/magmaguy
e https://magmaguy.itch.io/ . Depois de os teres instalado, **terás de fundir o pacote de recursos** gerado pelo
FreeMinecraftModels na sua pasta de saída com o pacote de recursos oficial do EliteMobs se quiseres usar o pacote de
recursos oficial e distribuí-lo aos jogadores ao alojá-lo online.

</details>

# FAQ de compatibilidade do EliteMobs e ResurrectionChest

### O EliteMobs funciona com o ResurrectionChest?

<details>
<summary>
Informação
</summary>

Sim. O ResurrectionChest foi feito especificamente para o conteúdo do EliteMobs e é totalmente compatível.

</details>

# Compatibilidade com outros plugins FAQ

### Posso usar o EliteMobs com um plugin semelhante ao MCMMO ou AureliumSkills?

<details>
<summary>
Informação
</summary>

Sim. Dito isto, podes querer desativar a saúde extra do sistema de prestígio do EliteMobs.

</details>

### Posso usar o EliteMobs com outro plugin de itens personalizados?

<details>
<summary>
Informação
</summary>

Sim. Se quiseres que os chefes larguem itens específicos desse plugin, define comandos na morte para executar e dar aos
jogadores itens dessa forma. No entanto, não há forma real de equilibrar o EliteMobs com qualquer sistema de itens que
estejas a usar. Os elites passam de ter 7 pontos de saúde para centenas de milhares de pontos de saúde e, como tal,
outros plugins de itens serão insanamente poderosos ou incrivelmente fracos. O EliteMobs já tem um sistema de itens
integrado e não requer nenhum plugin de itens externo.

</details>

# Outras FAQs

### Executar um comando na morte de um Elite Mob ou dar saque/recompensas de outros plugins na morte de um Elite Mob?

[Informações disponíveis aqui.]($language$/elitemobs/creating_bosses.md&section=ondeathcommands)

### Suporte para Vault?

[Informações disponíveis aqui.]($language$/elitemobs/vault.md)

### Placeholders do PlaceholderAPI?

[Informações disponíveis aqui.]($language$/elitemobs/placeholders.md)

### Usar flags do WorldGuard para permitir o EliteMobs em alguns lugares, mas não noutros?

[Informações disponíveis aqui.]($language$/elitemobs/worldguard_flags.md)

### Posso fazer com que 100% dos mobs que surgem sejam Elite Mobs?

Esta é uma péssima ideia, mas podes aceder ao ficheiro de configuração `MobCombatSettings.yml` e
editar `eliteMobsSpawnPercentage` para definir a percentagem de surgimento de Elite Mobs.

### Posso criar poderes personalizados?

[Informações disponíveis aqui.]($language$/elitemobs/creating_powers.md)

### Posso criar encantamentos personalizados?

Isto está na nossa lista de tarefas e deverá ser implementado em breve, mas atualmente não é possível.

### Posso criar efeitos de poção personalizados?

A única forma de o fazer é aprender Java e escrevê-los tu próprio. Nesse ponto, também podes modificar o
código-fonte do EliteMobs.

### Como posso desativar as partículas do buraco de minhoca?

Para desativar as partículas do buraco de minhoca, navega até *~plugins\EliteMobs\Wormholes.yml* e, em seguida,
localiza `noParticlesMode` e
altera o valor para `false`.

### Como posso editar o buraco de minhoca no surgimento da AG para teletransportar os jogadores para onde eu quero?

<div align="center">

![faq_ag_wormhole.jpg](../../../img/wiki/faq_ag_wormhole.jpg)

</div>

Podes fazê-lo abrindo *plugins\EliteMobs\wormholes\adventurers_guild_wormhole.yml*.

Em seguida, encontra a seguinte configuração
`location2: teu_mundo_aqui,0.5,64,0.5,0,0`
e altera os valores para a tua localização preferida.

Lembra-te de executar `/em reload` para que as alterações tenham efeito.

### Como posso desvincular itens?

A única forma de remover a ligação de alma dos itens é usando Pergaminhos de Desvinculação. Lê mais sobre
isso [aqui]($language$/elitemobs/soulbind.md).

### Como posso fundir pacotes de recursos?

É possível fundir pacotes de recursos manualmente, mas recomendamos o uso de uma ferramenta online como
o [merge.elmakers](https://merge.elmakers.com/) para fundir os teus pacotes de recursos.

### Quais são os placeholders de comandos do EliteMobs?

| Placeholder  |            Detalhes             |
|--------------|:-------------------------------:|
| `$player`    | Nome de apresentação do jogador |
| `$bossName`  |  Nome de apresentação do chefe  |
| `$bossLevel` |         Nível do chefe          |

### O que devo fazer para desativar o pacote de recursos forçado?

Esta configuração está, na verdade, localizada no teu ficheiro `server.properties`. Geralmente, podes encontrar este
ficheiro no diretório raiz do teu servidor. Depois de abrir o ficheiro, localiza a configuração `require-resource-pack`
e altera o valor para `false` para desativar o pacote de recursos forçado.

### Como posso desativar eventos?

Se quiseres desativar eventos como o goblin de armas, o goblin de amuletos, etc., então podes abrir *~
plugins\EliteMobs\events.yml* e, em seguida, localizar as configurações `actionEventsEnabled`, `timedEventsEnabled` e
defini-las como `false`.

### Como posso editar um mundo de masmorra ou o mundo da Guilda dos Aventureiros?

A partir do EliteMobs 9, o EliteMobs já não depende do WorldGuard para a proteção de masmorras e conteúdo. Para
contornar temporariamente esta proteção, usa o comando `/em protection bypass`.

Se quiseres desativar permanentemente a proteção para uma masmorra específica, segue estes passos:

1. Navega até *plugins/EliteMobs/content_packages/*.
2. Encontra o ficheiro *dungeon_config.yml* para a masmorra que queres modificar.
3. Abre o ficheiro de configuração e localiza a configuração `protect:`.
4. Altera o valor para `false` para desativar a proteção.
