# Configurações Padrão do EliteMobs

**O EliteMobs vem com as predefinições recomendadas instaladas por padrão. Se mudar as coisas ao acaso, é provável que piore a experiência geral.**

_**O EliteMobs é fornecido a todos os utilizadores com as definições padrão recomendadas. Se mudar as coisas ao acaso e depois solicitar suporte, há uma grande probabilidade de lhe ser pedido para repor os seus ficheiros de configuração. As modificações ao plugin devem ser resultado de testes de jogo e não apenas de palpites.**_

## Começar

O EliteMobs oferece atualmente uma vasta gama de opções de configuração devido à grande procura por personalização. Para manter esta página wiki concisa, apenas as configurações padrão serão exibidas.

Se quiser saber mais sobre uma configuração específica, pode consultar o ficheiro de configuração e rever os comentários.

---

## config.yml

`config.yml` contém principalmente configurações aleatórias que não se encaixavam confortavelmente noutro lugar na altura da sua criação. É o ficheiro de configuração com maior probabilidade de sofrer alterações entre versões.

<div align="left">

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define o ficheiro de idioma utilizado pelo EliteMobs
# NÃO altere isto manualmente! Destina-se a ser instalado com o comando '/em language <ficheiro de idioma>'
language: english
# Define se os elites e bosses gerados pelo elitemobs mostrarão sempre os seus nomes.
# Não recomendado!
alwaysShowEliteMobNameTags: false
# Define a quantidade de mobs passivos que têm de estar nas proximidades antes de poderem ser fundidos.
# Não defina isto para 0!
superMobStackAmount: 50
# Faz com que os elites não danifiquem os mobs passivos com explosões.
preventEliteCreeperDamageToPassiveMobs: true
# Define se o EliteMobs irá utilizar títulos para avisar os jogadores sobre permissões em falta.
useTitlesForMissingPermissionMessages: true
# Define se o EliteMobs irá impedir a conversão de mobs com nome para elites.
# Especialmente importante para compatibilidade com outros plugins.
preventEliteMobConversionOfNamedMobs: true
# Define se o EliteMobs irá converter mobs com razões de geração personalizadas.
# Executar determinados plugins de boss irá definir isto automaticamente para true, independentemente do valor na configuração.
enableHighCompatibilityMode: false
# Define o bónus de geração de elites para o modo de jogo pesadelo
nightmareWorldSpawnBonus: 0.5
# Define se o comando centralizado /em abre a página de estado principal do plugin.
# Altamente recomendado!
emLeadsToStatusMenu: true
# Define se a execução de comandos específicos como /em wallet irá levar ao menu /em onde essa informação está centralizada.
otherCommandsLeadToEMStatusMenu: true
# Define se a configuração está concluída.
# Não defina este valor manualmente, destina-se a ser modificado através de comandos no jogo.
setupDoneV3: true
# Define se os elites irão impedir a geração de reforços de baunilha, como para a funcionalidade de reforço de Zumbis.
preventVanillaReinforcementsForEliteEntities: true
# Define a localização de geração padrão do servidor para EliteMobs. /em spawntp irá levar a esta localização.
defaultSpawnLocation: world,16.0,76.0,80.0,0.0,0.0
# Define se o EliteMobs irá regenerar blocos explodidos por elites.
doExplosionRegen: true
# Define se a regeneração de explosão também irá regenerar o conteúdo de recipientes como baús.
# Definir para false fará com que as explosões de elites não explodam recipientes.
doRegenerateContainers: true
defaultTransitiveBlockLimiter: 500
# Define se o menu /em irá utilizar apenas o estilo de menu baseado em inventário que é compatível com o bedrock.
# Como um lembrete, os jogadores podem fazer o comando /em alt para alternar entre estilos de menu /em
onlyUseBedrockMenus: false
# Define o limite de caracteres por linha para páginas de menus de livros.
# Diminua este valor se o texto estiver a ser cortado em menus de livros, como para missões
characterLimitForBookMenuPagesV2: 170
# Define se o espaço de menu vazio será preenchido com painéis de vidro.
# Não recomendado se estiver a utilizar o pacote de recursos do EliteMobs.
useGlassToFillMenuEmptySpace: false
# Define se o unicode será utilizado para formatar o pacote de recursos do EliteMobs.
# Não defina isto manualmente, é definido automaticamente após a instalação do pacote de recursos.
# Apenas defina-o manualmente se tiver de fundir o pacote de recursos do EliteMobs, e espere que o espaçamento possa não funcionar se o fizer.
menuUnicodeFormatting: false
# Define a mensagem enviada aos jogadores se executarem '/em confirm' sem comandos pendentes.
noPendingCommands: '&cNão tem atualmente quaisquer comandos pendentes!'
# Define a mensagem de rastreamento para bosses que enviam mensagens de rastreamento.
trackMessage: Rastrear o $name
# Define a mensagem enviada aos jogadores que abrem baús de tesouro com requisitos de nível acima da sua classificação de guilda.
chestLowRankMessage: '&7[EM] &cA sua classificação de guilda precisa de ser pelo menos $rank &cpara abrir este baú!'
# Define a mensagem enviada aos jogadores que tentam reabrir um baú de tesouro que já abriram.
chestCooldownMessage: '&7[EM] &cJá abriu este baú recentemente! Espere $time!'
# Define a mensagem que aparece a recomendar o comando /em alt para jogadores com problemas com o comando /em
dismissEMMessage: '&8[EliteMobs] &2O menu &f/elitemobs não está a funcionar para si? Tente &2/elitemobs
  alt &fpara ver uma versão alternativa do menu! &cNão quer ver esta mensagem novamente? &4/em dismiss'
# Define a mensagem que aparece quando os jogadores executam o comando /em alt.
switchEMStyleMessage: '&8[EliteMobs] O estilo do menu &f/elitemobs &2foi alterado! Veja!'
# Define a mensagem que aparece quando um jogador abre um baú de tesouro, mas não recebe nada
treasureChestNoDropMessage: '&8[EliteMobs] &cNão recebeu nada! Mais sorte na próxima vez!'
# Define a mensagem que aparece quando um jogador tenta rastrear um boss que já não é válido
bossAlreadyGoneMessage: '&c[EliteMobs] Desculpe, este boss já se foi!'
```

</details>

---

## AdventurersGuild.yml

`AdventurersGuild.yml` contém as configurações relevantes para o Hub da Guilda dos Aventureiros (o mundo) e as configurações relevantes para o sistema de subida de classificação da Guilda dos Aventureiros.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define se o EliteMobs irá adicionar saúde máxima ao desbloquear classificações de guilda como recompensa de prestígio
Add max health when unlocking higher guild ranks: true
# Define se o EliteMobs irá adicionar uma chance de ataque crítico ao desbloquear classificações de guilda como recompensa de prestígio
Add critical chance when unlocking higher guild ranks: true
# Define se o EliteMobs irá adicionar chance de esquiva ao desbloquear classificações de guilda como recompensa de prestígio
Add dodge chance when unlocking higher guild ranks: true
# Define se os comandos de utilizador são redirecionados para o hub da guilda dos aventureiros. Isto é altamente recomendado para imersão na jogabilidade e fins de tutorial.
userCommandsTeleportToAdventurersGuild: true
# Define o nome de exibição no jogo da guilda dos aventureiros
adventurersGuildMenuName: '&6&lHub do Aventureiro'
Prestige 0 rank 0: '&8Pessoa Comum - desativa elites!'
Prestige 0 rank 0 short placeholder: '&6&l✧&e0'
...
# Define se o saque do jogador é limitado pelo seu nível de guilda.
#  Esta é uma parte incrivelmente importante do EliteMobs e extremamente recomendada.
limitLootBasedOnGuildTier: true
# Define a mensagem enviada aos jogadores se o seu saque for enfraquecido devido ao seu baixo nível de guilda.
lootLimiterMessage: '&7[EM] &cTem de desbloquear a próxima classificação de guilda através de /ag para saquear melhores itens!'
# Define os comandos que são executados na subida de classificação de guilda. Os espaços reservados são:
# $prestigerank - produz a classificação de prestígio
# $activerank - produz a classificação atualmente ativa
# $player - produz o nome do jogador
onRankUpCommand: []
# Define os comandos que são executados na subida de classificação de prestígio.
# $prestigerank - produz a classificação de prestígio
# $activerank - produz a classificação atualmente ativa
# $player - produz o nome do jogador
onPrestigeUpCommand: []
# Define o nível de prestígio para o primeiro bónus de esquiva.
dodgePrestige3Bonus: 3.0
# Define o nível de prestígio para o segundo bónus de esquiva.
dodgePrestige6Bonus: 6.0
# Define o nível de prestígio para o terceiro bónus de esquiva.
dodgePrestige9Bonus: 10.0
# Define o nível de prestígio para o primeiro bónus de acerto crítico.
critPrestige2Bonus: 3.0
# Define o nível de prestígio para o segundo bónus de acerto crítico.
critPrestige5Bonus: 6.0
# Define o nível de prestígio para o terceiro bónus de acerto crítico.
critPrestige8Bonus: 10.0
# Define o nível de prestígio para o primeiro bónus de saúde máxima.
healthPrestige1Bonus: 2.0
# Define o nível de prestígio para o segundo bónus de saúde máxima.
healthPrestige4Bonus: 2.5
# Define o nível de prestígio para o terceiro bónus de saúde máxima.
healthPrestige7Bonus: 3.0
# Define o nível de prestígio para o terceiro bónus de saúde máxima.
healthPrestige10Bonus: 4.0
# Define a quantidade base estimada de bosses que têm de ser mortos para poder pagar uma subida de classificação.
baseKillsForRankUp: 100
# Define a quantidade adicional estimada de bosses que têm de ser mortos para poder subir de classificação, por nível.
# A fórmula é esta quantidade x o nível em que o jogador se encontra atualmente.
additionalKillsForRankUpPerTier: 50
# Define o título enviado aos jogadores quando alguém desbloqueia uma classificação de prestígio.
# $player é um espaço reservado que é substituído pelo nome de exibição do jogador.
prestigeUnlockMessageTitle: $player
# Define a legenda enviada aos jogadores quando alguém desbloqueia uma classificação de prestígio.
# $tier é um espaço reservado que é substituído pelo nível de prestígio do jogador.
prestigeUnlockMessageSubtitle: '&2desbloqueou $tier&2!'
# Define o multiplicador que será aplicado à chance de geração quando os jogadores estão a utilizar a classificação pacífica (pessoa comum).
peacefulModeEliteChanceDecrease: 0.2
# Define a lista de mundos aos quais os bónus de classificação de guilda não serão aplicados
worldsWithoutAGBonuses: []
# Desativa a capacidade dos utilizadores de mudar para o modo pacífico para EliteMobs. O modo pacífico diminui o nível e as taxas de geração de mobs em torno desse jogador especificamente
disableCommonerRank: false
```

</details>

---

## AntiExploit.yml

`AntiExploit.yml` permite que os administradores personalizem diferentes aspetos do sistema AntiExploit. O sistema AntiExploit existe para impedir que os jogadores utilizem coisas como moinhos de mobs para cultivar facilmente moedas e saques, e obriga-os a fazer combates reais e mini-dungeons em vez de clicar passivamente até ao topo do plugin.

Este é um sistema crítico para manter ativo se não quiser que as pessoas cultivem o plugin inteiro passivamente e queira que elas interajam realmente com mini-dungeons.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define a mensagem que aparece quando o antiexploit é acionado.
AntiExploit message: '&c[EM AntiExploit] &7O elite próximo não vai deixar saque especial.'
# Define se o antiexploit de sala escura 1 está ativado.
# As funcionalidades específicas de antiexploit não são documentadas intencionalmente. Os operadores de servidor podem ver que tipo de antiexploit foi acionado, mas mais informações sobre como funciona especificamente não são disponibilizadas.
Enable darkroom antiexploit 1: true
# Define se o antiexploit de sala escura 2 está ativado.
# As funcionalidades específicas de antiexploit não são documentadas intencionalmente. Os operadores de servidor podem ver que tipo de antiexploit foi acionado, mas mais informações sobre como funciona especificamente não são disponibilizadas.
Enable darkroom antiexploit 2: true
# Define se o antiexploit de sala escura 3 está ativado.
# As funcionalidades específicas de antiexploit não são documentadas intencionalmente. Os operadores de servidor podem ver que tipo de antiexploit foi acionado, mas mais informações sobre como funciona especificamente não são disponibilizadas.
Enable darkroom antiexploit 3: true
# Define se o antiexploit de sala escura grande 1 está ativado.
# As funcionalidades específicas de antiexploit não são documentadas intencionalmente. Os operadores de servidor podem ver que tipo de antiexploit foi acionado, mas mais informações sobre como funciona especificamente não são disponibilizadas.
Enable large darkroom antiexploit 1: true
# Define se o antiexploit de altura de enderman está ativado.
# As funcionalidades específicas de antiexploit não são documentadas intencionalmente. Os operadores de servidor podem ver que tipo de antiexploit foi acionado, mas mais informações sobre como funciona especificamente não são disponibilizadas.
Enable enderman height antiexploit: true
# Define se o antiexploit de montaria está ativado.
# As funcionalidades específicas de antiexploit não são documentadas intencionalmente. Os operadores de servidor podem ver que tipo de antiexploit foi acionado, mas mais informações sobre como funciona especificamente não são disponibilizadas.
Enable mount antiexploit: true
# Define se os mobs elite podem recolher itens
preventItemPickupByMobs: true
# Define se o antiexploit de dano ambiente está ativado.
# As funcionalidades específicas de antiexploit não são documentadas intencionalmente. Os operadores de servidor podem ver que tipo de antiexploit foi acionado, mas mais informações sobre como funciona especificamente não são disponibilizadas.
Enable ambient damage antiexploit: true
# Define se o antiexploit de bloco de mel está ativado.
# As funcionalidades específicas de antiexploit não são documentadas intencionalmente. Os operadores de servidor podem ver que tipo de antiexploit foi acionado, mas mais informações sobre como funciona especificamente não são disponibilizadas.
Enable honey block antiexploit: true
# Define o limite para a ativação de antiexploit. Valores mais altos tornam-no mais tolerante. Modificar isto não é recomendado.
antiExploitThreshold: 10
# Define se o antiexploit sem caminho está ativado
nPathExploit: true
```

</details>

---

## CombatTag.yml

`CombatTag.yml` contém as configurações do sistema de Combat Tag. Este sistema ainda está longe de estar completo, mas tenta gerir o comportamento do jogador depois de entrar em combate.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define se a combat tag está ativada.
# Quando ativada, os jogadores voadores que entram em combate são definidos para parar de voar.
Enable combat tag: true
# Define a mensagem enviada quando a combat tag é ativada.
Combat tag message: '&c[EliteMobs] Combat tag ativada!'
# Define se o comando /ag terá um temporizador antes do teletransporte
Enable adventurers guild teleport timer: true
# Define a mensagem de ação definida enquanto aguarda o temporizador de teletransporte.
Teleport time left: '&7[EM] Teletransportando em &a$time &7segundos...'
# Define a mensagem enviada quando os jogadores se movem enquanto aguardam o teletransporte.
Teleport cancelled: '&7[EM] &cTeletransporte interrompido!'
```

</details>

---

## DiscordSRV.yml

`DiscordSRV.yml` contém as configurações para o DiscordSRV. Se quiser ver como configurar esta funcionalidade, [clique aqui!]($language$/elitemobs/discordsrv.md)

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# A documentação pode ser encontrada aqui: https://magmaguy.com/wiki.html#lang=en&article=elitemobs+discordsrv.md
announcementRoomName: PRECISA_DE_COLOCAR_O_NOME_DA_SALA_DO_DISCORD_EM_QUE_QUER_QUE_OS_ANÚNCIOS_DO_ELITEMOBS_SEJAM_TRANSMITIDOS_TAL_COMO_NO_SEU_FICHEIRO_DE_CONFIGURAÇÃO_DO_DISCORDSRV_CONSULTE_A_WIKI_DO_ELITEMOBS_PARA_DETALHES

```

</details>

---

## EconomySettings.yml

`EconomySettings.yml` contém as configurações para a economia do EliteMobs.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define se a economia do EliteMobs está ativada. Isto significa moedas elite, a capacidade de comprar e vender equipamento e a capacidade de melhorar as classificações de guilda
# Se desativado, os jogadores não poderão progredir no plugin!
enableEconomy: true
# Define o valor de revenda de itens, como uma % do preço original. 5 é 5%
itemResaleValue: 5.0
# Define o nome no jogo da moeda utilizada.
currencyName: Moedas Elite
# Define o plugin para utilizar o Vault. ISTO NÃO É RECOMENDADO! Leia porquê aqui: https://github.com/MagmaGuy/EliteMobs/wiki/%5BThird-party-support%5D-Vault
useVault - not recommended: false
# Define se os elites deixarão cair moedas com base no seu nível.
enableCurrencyShower: true
# Define o multiplicador para a moeda deixada pelos elites.
currencyShowerTierMultiplier: 1.0
# Define a mensagem enviada quando os jogadores recolhem moeda elite.
chatCurrencyShowerMessage: '&7[EM] Recolheu &a$amount $currency_name!'
# Define a mensagem da barra de ação enviada quando os jogadores recolhem moeda elite.
actionbarCurrencyShowerMessage: '&7[EM] Recolheu &a$amount $currency_name!'
# Envia a mensagem que os jogadores recebem após recolherem moeda. Útil para fins de tutorial.
adventurersGuildNotificationMessages: '&7[EM] Dinheiro extra para gastar? Tente &a/ag !'
# Define a taxa de imposto para transações entre jogadores.
# Altamente recomendado por motivos de equilíbrio, uma vez que jogadores de alto nível podem obter até 6x mais moeda e tentar utilizar outros jogadores para contornar as reposições de moeda de prestígio.
playerToPlayerPaymentTaxes: 0.2
# Mensagem enviada ao enviar moeda elite para outros jogadores.
Economy pay message v2: '&2Pagou &2$amount_sent $currency_name &2a $receiver&2,
  que recebeu $amount_received após impostos!'
# Mensagem enviada depois de os jogadores enviarem moeda.
Economy currency left message: Agora tem &2$amount_left $currency_name
# Mensagem recebida ao receber moeda.
Economy money from payment message: Recebeu &2$amount_received $currency_name
  &ffrom $sender
# Mensagem enviada quando os jogadores tentam enviar uma quantidade de moedas que não têm.
Economy payment insufficient currency: '&cNão tem moedas $currency_name suficientes para fazer isso!'
# Mensagem de /em balance
Wallet command message: Tem &2$balance $currency_name
# Mensagem de confirmação enviada quando os jogadores tentam enviar moeda para outro jogador.
Tax confirmation message: '&cEnviar um pagamento custará $percentage% em impostos. &aFaça
  &9$command &apara prosseguir!'
# Mensagem enviada quando um jogador compra numa loja.
Shop buy message: '&aComprou $item_name &apara $item_value $currency_name!'
# Mensagem enviada quando um jogador interage com uma loja.
Shop current balance message: '&aTem $currency_amount $currency_name.'
# Mensagem enviada quando os jogadores não têm moeda suficiente para comprar um item
Shop insufficient funds message: '&cNão tem $currency_name suficientes!'
# Segunda parte da mensagem enviada quando os jogadores tentam comprar um item que não podem pagar.
Shop item cost message: Esse item custa &c$item_value $currency_name.
# Mensagem enviada ao vender um item a uma loja.
Shop sell message: '&aVendeu $item_name &apara $currency_amount $currency_name!'
# Mensagem enviada ao tentar vender um item que não pertence a esse jogador.
Shop sale player items warning: '&cNão pode vender itens que não estejam atualmente vinculados à sua alma! Isto inclui itens de outros níveis de prestígio!'
# Mensagem enviada ao tentar vender um item que não é EliteMobs
Shop sale instructions: '&cSó pode vender saques EliteMobs aqui! (Armaduras / armas
  deixadas por elites com um valor na sua descrição)'
# Mensagem enviada ao vender um lote de itens de elite.
shopBatchSellItem: '&aVendeu os seus itens &apara $currency_amount $currency_name!'
lootShowerMaterial:
  # Define o tipo de material de 1 moeda elite deixada.
  '1': GOLD_NUGGET
  '5': GOLD_INGOT
  '10': GOLD_BLOCK
  '20': EMERALD
  '50': EMERALD_BLOCK
  '100': DIAMOND
  '500': DIAMOND_BLOCK
  '1000': NETHER_STAR
lootShowerData:
  # Define o ID de modelo personalizado para 1 moeda elite deixada. Utilizado pelo pacote de recursos.
  '1': 1
  '5': 1
  '10': 1
  '20': 1
  '50': 1
  '100': 1
  '500': 1
  '1000': 1
materialWorth:
  # Define o valor deste material para o sistema de moedas elitemobs.
  DIAMOND_AXE: 17.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  DIAMOND_BOOTS: 17.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  DIAMOND_CHESTPLATE: 17.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  DIAMOND_LEGGINGS: 17.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  DIAMOND_HELMET: 17.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  DIAMOND_PICKAXE: 17.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  DIAMOND_SHOVEL: 17.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  DIAMOND_SWORD: 17.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  DIAMOND_HOE: 17.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  IRON_AXE: 16.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  IRON_BOOTS: 16.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  IRON_LEGGINGS: 16.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  IRON_CHESTPLATE: 16.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  IRON_HELMET: 16.0
```

</details>
```yml
# Define o valor deste material para o sistema de moedas elitemobs.
  IRON_PICKAXE: 16.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  IRON_SHOVEL: 16.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  IRON_HOE: 16.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  IRON_SWORD: 16.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  SHIELD: 16.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  BOW: 16.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  CHAINMAIL_BOOTS: 15.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  CHAINMAIL_LEGGINGS: 15.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  CHAINMAIL_CHESTPLATE: 15.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  CHAINMAIL_HELMET: 15.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  STONE_SWORD: 15.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  STONE_AXE: 15.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  STONE_PICKAXE: 15.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  STONE_SHOVEL: 15.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  STONE_HOE: 15.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  GOLDEN_AXE: 13.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  GOLDEN_BOOTS: 13.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  GOLDEN_LEGGINGS: 13.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  GOLDEN_CHESTPLATE: 13.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  GOLDEN_HELMET: 13.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  GOLDEN_SWORD: 13.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  GOLDEN_SHOVEL: 13.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  GOLDEN_PICKAXE: 13.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  GOLDEN_HOE: 13.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  GOLDEN_APPLE: 17.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  ENCHANTED_GOLDEN_APPLE: 17.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  LEATHER_BOOTS: 13.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  LEATHER_LEGGINGS: 13.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  LEATHER_CHESTPLATE: 13.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  LEATHER_HELMET: 13.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  WOODEN_SWORD: 13.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  WOODEN_AXE: 13.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  WOODEN_HOE: 13.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  WOODEN_PICKAXE: 13.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  TRIDENT: 17.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  ELYTRA: 17.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  TURTLE_HELMET: 13.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  NETHERITE_AXE: 18.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  NETHERITE_PICKAXE: 18.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  NETHERITE_SHOVEL: 18.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  NETHERITE_HOE: 18.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  NETHERITE_SWORD: 18.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  NETHERITE_HELMET: 18.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  NETHERITE_CHESTPLATE: 18.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  NETHERITE_LEGGINGS: 18.0
  # Define o valor deste material para o sistema de moedas elitemobs.
  NETHERITE_BOOTS: 18.0
  # Define o valor padrão de material para itens não especificamente definidos.
  defaultMaterialWorth: 1.0
```

</details>

---

## events.yml

`events.yml` contém as opções de configuração para eventos.

_**Nota: estas são apenas as configurações globais muito básicas.**_

Pode modificar ainda mais eventos específicos na pasta `events`.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define se os eventos serão transmitidos apenas no mundo em que os eventos acontecem.
Only broadcast event message in event worlds: false
# Define o tempo de espera mínimo, em minutos, entre eventos cronometrados
actionEventMinimumCooldownMinutes: 240
# Define se os eventos de ação irão acontecer.
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#action-events
actionEventsEnabled: true
# Define se os eventos cronometrados irão acontecer.
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events
timedEventsEnabled: true
```

</details>

---

## ItemSettings.yml

`ItemSettings.yml` contém as configurações globais para itens Elite.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define os caracteres com prefixo para encantamentos de baunilha na descrição de itens.
noItemDurabilityMessage: '&8[EliteMobs] $item &4está partido! Não funcionará até ser reparado!'
# Define se qualquer saque de EliteMobs irá aparecer.
# Inclui Moedas Elite, Itens Personalizados, Itens Gerados Processualmente - tudo!
# Não recomendado, torna a progressão de mmorpg impossível.
doEliteMobsLoot: true
# Define se o saque gerado processualmente terá cores diferentes com base na qualidade do item.
doMMORPGColorsForItems: true
# Define se a colocação de itens personalizados, como faixas ou blocos, é evitada.
# Isto é recomendado - itens personalizados partem-se quando são colocados e não podem ser recuperados!
preventCustomItemPlacement: true
# Define o formato para a descrição de todos os itens EliteMobs personalizados!
# Os seguintes são espaços reservados válidos:
# $itemLevel - mostra o nível do item
# $prestigeLevel - mostra o nível de prestígio
# $weaponOrArmorStats - mostra as estatísticas de DPS elite ou armadura elite, dependendo do item
# $soulbindInfo - mostra a quem, se a alguém, o item está vinculado à alma
# $itemSource - mostra de onde veio o item, como um mob ou uma loja
# $ifLore - faz com que uma linha apareça apenas se o item tiver uma descrição personalizada. Aplica-se apenas a itens personalizados
# $customLore - mostra toda a descrição personalizada. Aplica-se apenas a itens personalizados
# $ifEnchantments - faz com que uma linha apareça apenas se o item tiver quaisquer encantamentos
# $enchantments - mostra os encantamentos no item
# $eliteEnchantments - mostra os encantamentos elite no item
# $ifCustomEnchantments - mostra os encantamentos personalizados no item
# $customEnchantments - mostra os encantamentos personalizados no item
# $ifPotionEffects - mostra apenas a linha se o item tiver efeitos de poção
# $potionEffects - mostra os efeitos de poção no item
# $loreResaleValue - mostra o valor do item. Pode mostrar o preço de compra ou venda dependendo de onde é visualizado
# Importante: Vários dos espaços reservados podem ser ainda mais personalizados pelas configurações abaixo
itemLoreStructureV2:
- §7§m§l---------§7<§lInformação de Equipamento§7>§m§l---------
- '§7Nível do Item: §f$itemLevel §7Prestígio §6$prestigeLevel'
- $weaponOrArmorStats
- $soulbindInfo
- $itemSource
- $ifLore§7§m§l-----------§7< §f§lDescrição§7 >§m§l-----------
- $customLore
- $ifEnchantments§7§m§l--------§7<§9§lEncantamentos§7>§m§l--------
- $enchantments
- $eliteEnchantments
- $ifCustomEnchantments§7§m§l------§7< §3§lEncantamentos Personalizados§7 >§m§l------
- $customEnchantments
- $ifPotionEffects§7§m§l----------§7< §5§lEfeitos§7 >§m§l----------
- $potionEffect
- §7§l§m-----------------------------
- $loreResaleValue
# Define a descrição de origem da loja para compras na loja
shopSourceItemLores: '&7Comprado numa loja'
# Define a descrição de origem da loja para itens saqueados de bosses
mobSourceItemLores: '&7Saqueado de $mob'
# Define a descrição de valor do item
loreWorths: '&7Valor de $worth $currencyName'
# Define a descrição de valor de revenda do item
loreResaleValues: '&7Vende por $resale $currencyName'
# Define a chance base de qualquer item elite aparecer de mobs elite
flatDropRateV3: 0.2
# Define a chance base de qualquer item elite aparecer de bosses regionais
regionalBossNonUniqueDropRate: 0.05
# Define se os bosses regionais podem deixar cair saque de baunilha
regionalBossesDropVanillaLoot: false
# Define o quanto a chance de um item elite aparecer aumenta com base no nível do boss.
# O nível do boss é multiplicado por este valor e adicionado à chance base.
# Já não é recomendado ter isto acima de 0.0!
levelIncreaseDropRateV2: 0.0
# Define a chance ponderada de um item gerado processualmente aparecer.
# Este sistema utiliza probabilidades ponderadas! Procure isso no google se não souber o que é.
proceduralItemDropWeight: 90.0
# Define a chance relativa de um item ponderado aparecer.
# Itens ponderados são itens personalizados que não têm um peso dinâmico, como amuletos.
weighedItemDropWeight: 1.0
# Define a chance relativa de um item fixo aparecer. Estes são itens personalizados que não aumentam de escala.
fixedItemDropWeight: 10.0
# Define a chance relativa de um item limitado aparecer. Estes são itens personalizados que aumentam a escala até um nível específico
limitedItemDropWeight: 3.0
# Define a chance relativa de um item escalável aparecer. Estes são itens personalizados que podem aumentar a escala para qualquer nível, e são os mais comuns no plugin.
scalableItemDropWeight: 6.0
# Define o multiplicador para o saque de baunilha do mob, com base no nível do mob.
defaultLootMultiplier: 0.0
# Define o nível máximo para o multiplicador de saque padrão.
levelCapForDefaultLootMultiplier: 200
# Define o multiplicador de experiência de Minecraft de baunilha deixada pelo boss, com base no nível do boss.
defaultExperienceMultiplier: 1.0
# Define o nível máximo para o saque que será deixado pelo EliteMobs. Altamente recomendado deixar em 200.
maximumItemLevel: 200
# Define se os encantamentos elite serão utilizados.
# Os encantamentos elite substituem os encantamentos de baunilha quando itens elite obtêm níveis de encantamento que ultrapassam os limites de baunilha.
# Exemplo: se uma espada elite deve ter nitidez 10, uma vez que o limite do Minecraft é o nível 5, terá nitidez 5 e nitidez elite 5.
# A nitidez elite só afeta mobs gerados pelo EliteMobs. Isto é feito para que o PVP e o combate de baunilha não se tornem desequilibrados.
useEliteEnchantments: true
# Define o nome de exibição que será utilizado para os encantamentos elite na descrição do item.
eliteEnchantmentLoreStrings: Elite
# Define se o EliteMobs verá enxadas como armas válidas para os cálculos de dano.
useHoesAsWeapons: false
# Define se o EliteMobs irá gerar partículas especiais sobre itens deixados de alta qualidade.
enableRareItemParticleEffects: true
# Define os símbolos que serão utilizados na descrição de itens para mostrar que um efeito de poção se aplica ao atingir a entidade que é atingida.
potionEffectOnHitTargetLore: '&4⚔☠'
# Define os símbolos que serão utilizados na descrição de itens para mostrar que um efeito de poção se aplica ao atingir o jogador que está a atingir.
potionEffectOnHitSelfLore: '&9⚔🛡'
# Define os símbolos que serão utilizados na descrição de itens para mostrar que um efeito de poção continuará a ser reaplicado enquanto o jogador o empunhar.
potionEffectContinuousLore: '&6⟲'
# Define os caracteres com prefixo para encantamentos elite na descrição do item.
eliteEnchantmentLoreColor: '&9◇'
# Define os caracteres com prefixo para encantamentos de baunilha na descrição do item.
vanillaEnchantmentLoreColor: '&7◇'
# Define os caracteres com prefixo para encantamentos personalizados na descrição do item.
customEnchantmentColor: '&3◇'
# Define os caracteres com prefixo para efeitos de poção na descrição do item.
potionEffectLoreColor: '&5◇'
# Define o texto que aparecerá no item se o item não estiver vinculado à alma.
noSoulbindLore: '&7Não Vinculado à Alma!'
# Define se os itens elite podem ser encantados por meios de baunilha. Isto não é recomendado uma vez que o EliteMobs tem o seu próprio sistema de encantamentos personalizados com o seu próprio equilíbrio!
preventEliteItemEnchantment: true
# Define se os itens elite podem ser desencantados por meios de baunilha.
preventEliteItemDisenchantment: true
# Define a mensagem que aparece para os jogadores quando tentam desencantar um item e isso não é permitido.
preventEliteItemDisenchantmentMessage: '&c[EliteMobs] Não pode desencantar itens Elite!'
# Define se os itens elite podem ser melhorados de diamante para netherite por meios de baunilha. Não recomendado!
preventEliteItemDiamondToNetheriteUpgrade: true
# Define se os itens elite apenas perderão durabilidade na morte.
# Este é um sistema importante para EliteMobs, e é altamente recomendado uma vez que combates de alto nível são quase impossíveis sem ele!
eliteItemsDurabilityLossOnlyOnDeath: true
# Define o multiplicador de perda de durabilidade para itens elite se estiver definido para perder durabilidade na morte.
# Valores entre 0.0 e 1.0 diminuem a perda de durabilidade e valores acima de 1.0 aumentam-na.
# Exemplo: 0.5 lida com 50% da perda de durabilidade, 2.0 lida com 200% da perda de durabilidade.
eliteItemsDurabilityLossMultiplier: 1.0
# Define a mensagem que aparece quando o desmantelamento de item é bem-sucedido.
scrapSucceededMessageV2: '&8[EliteMobs] &2O desmantelamento foi bem-sucedido $amount vezes!'
# Define a mensagem que aparece quando o desmantelamento de item falha.
scrapFailedMessageV2: '&8[EliteMobs] &cO desmantelamento falhou $amount vezes!'
# Define se o saque de elite deve ser colocado diretamente nos inventários dos jogadores.
putLootDirectlyIntoPlayerInventory: false
# Define a diferença máxima de nível que os jogadores podem ter antes de não poderem mais saquear itens que são de nível muito baixo.
# Isto é calculado com base no nível médio do saque que o jogador está a usar.
# Como um exemplo, se estiver definido para 10 e um jogador tiver equipamento de nível 50, não será capaz de cultivar bosses de nível 39.
lootLevelDifferenceLockout: 10
# Define se o EliteMobs irá impedir que os Itens Elite se quebrem ao utilizar o sistema de perda de durabilidade na morte.
# Os jogadores não poderão utilizar itens sem durabilidade de qualquer maneira, isto serve simplesmente para evitar a perda acidental de itens de alto nível mas de baixa durabilidade.
preventEliteItemsFromBreaking: true
# Define o nível mínimo, +7, de bosses que podem deixar cair processualmente equipamento de diamante no EliteMobs.
# Não existe equipamento de netherite gerado processualmente no EliteMobs, apenas saque personalizado.
minimumProcedurallyGeneratedDiamondLootLevelPlusSeven: 10
# Define a mensagem que é mostrada no chat ao obter saque com sucesso através do comando /em simloot <nível> <vezes>.
simlootMessageSuccess: '&8[EliteMobs] &2Obteve saque e conseguiu $itemName &2!'
# Define a mensagem que é mostrada no chat ao falhar ao obter saque através do comando /em simloot <nível> <vezes>.
simlootMessageFailure: '&8[EliteMobs] &cObteve saque e não conseguiu nada!'
# Define a mensagem que os jogadores recebem quando o saque elite é depositado diretamente nos seus inventários.
directDropCustomLootMessage: '&8[EliteMobs] &2Obteve $itemName &2!'
# Define a mensagem que os jogadores recebem quando o saque de baunilha é depositado diretamente nos seus inventários.
directDropMinecraftLootMessage: '&8[EliteMobs] &aObteve $itemName &a!'
# Define a mensagem que os jogadores recebem quando as moedas elite são depositadas diretamente nos seus inventários.
directDropCoinMessage: '&8[EliteMobs] &aObteve &2$amount $currencyName &a!'
# Define se o EliteMobs irá esconder os atributos de Minecraft de baunilha.
hideItemAttributes: true
# Define a entrada da descrição específica da arma num item elite. O espaço reservado $EDPS é substituído pelo DPS elite (dano por segundo) da arma.
weaponEntry: '&7DPS Elite: &2$EDPS'
# Define a entrada da descrição específica da armadura num item elite. O espaço reservado $EDEF é substituído pela DEF elite (defesa) da arma.
armorEntry: '&7Armadura Elite: &2$EDEF'
# Define a mensagem enviada quando um jogador mata um boss, mas o nível do equipamento é muito diferente do nível do boss para obter moedas
levelRangeTooDifferent: '&8EM] &4O seu equipamento é nível $playerLevel e o boss é nível
  $bossLevel, a diferença de nível é muito alta para obter moedas!'
```

</details>

---

## MobCombatSettings.yml

`MobCombatSettings.yml` contém todas as opções de configuração relacionadas com o sistema de combate personalizado e a maioria das opções de configuração geralmente relacionadas com o funcionamento dos Mobs Elite.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define se elites gerados naturalmente irão aparecer. Nota: mobs de eventos como o rei zumbi não são elites gerados naturalmente! Terá de desativar os eventos se quiser desativar os bosses de eventos.
doNaturalEliteMobSpawning: true
# Define se as gerações geradas a partir de spawners de mobs podem ser convertidas em elites. Não recomendado!
doSpawnersSpawnEliteMobs: false
# Define a percentagem de mobs gerados naturalmente que são convertidos em mobs elite.
eliteMobsSpawnPercentage: 0.05
# Define o intervalo de super mob para procurar o empilhamento de super mob
superMobStackRange: 15
# Define o nível máximo em que os elites podem aparecer.
# Nota: o nível do mob elite baseia-se no equipamento e nas armas que os jogadores estão a utilizar, e a armadura só aumenta a escala até o nível 200.
naturalEliteMobsLevelCap: 250
# Define se os elites usarão armadura com base no seu nível. Isto é apenas para fins visuais e não afeta o combate.
doElitesWearArmor: true
# Define se os elites usarão capacetes com base no seu nível. Isto irá impedi-los de queimar facilmente durante o dia.
doElitesWearHelmets: true
# Define se os elites terão rastos visuais à sua volta, avisando os jogadores sobre que jogadores têm.
doNaturalEliteMobVisualEffects: true
# Define se os elites gerados a partir de spawners farão efeitos visuais.
doSpawnerEliteMobVisualEffects: false
# Define se alguns poderes farão a fase de aviso do poder. Isto é muito importante, uma vez que as fases de aviso geralmente significam que o poder pode ser evitado, e o visual permite que os jogadores saibam onde se esquivar.
doPowerBuildupVisualEffects: true
# Define se mensagens de morte personalizadas serão utilizadas quando os jogadores morrerem de elites.
doCustomEliteMobsDeathMessages: true
# Define se o EliteMobs mostrará indicadores de saúde para elites.
doDisplayMobHealthOnHit: true
# Define se o EliteMobs mostrará indicadores de dano para o dano feito a elites.
doDisplayMobDamageOnHit: true
# Define se o nível de elites será aumentado com base na distância da geração.
# Este é um valor adicionado no topo do seu nível normal, o que significa que se um jogador estiver a usar equipamento de nível 100 perto da geração e o boss tiver +1 nível devido à distância da geração, o boss aparecerá no nível 101.
# Esta opção geralmente não é recomendada, especialmente se tiver um sistema tp aleatório no seu servidor.
doIncreaseEliteMobLevelBasedOnSpawnDistance: false
# Define a distância entre incrementos de nível para aumentos de nível baseados na distância.
distanceBetweenIncrements: 100.0
# Define quantos níveis aumentam a cada incremento de distância para aumentos de nível baseados na distância.
levelIncreaseAtIncrements: 1.0
# Define se os poderes de elites serão escondidos até entrarem em combate. Isto é recomendado por motivos de desempenho.
hideEliteMobPowersUntilAggro: true
# Define o multiplicador para o dano causado a todos os bosses gerados pelo EliteMobs, exceto aqueles que utilizam o sistema de dano normalizado (bosses de dungeon regionais). Valores mais altos aumentam o dano causado, tornando os bosses mais fáceis de matar.
# 2.0 = 200%, 0.5 = 50%
damageToEliteMobMultiplierV2: 1.0
# Define o multiplicador para o dano causado aos jogadores por elites. Valores mais altos aumentam a quantidade de dano causado por bosses, exceto aqueles que utilizam o sistema de dano normalizado (bosses de dungeon regionais), tornando os bosses mais difíceis de atingir.
# 2.0 = 200%, 0.5 = 50%
damageToPlayerMultiplierV2: 1.0
# Define se bosses especiais podem ser rastreados.
showCustomBossLocation: true
# Define a mensagem enviada aos jogadores para rastrear a localização de um boss.
bossLocationMessage: '&7[EM] &2[Clique para rastrear!]'
# Define os comandos que são executados quando um elite morre. Espaços reservados válidos são:
# $level para o nível do boss
# $name para o nome do boss
# $players fará com que o comando seja executado para cada jogador que participou na morte. Como um exemplo, se Bob e Steve mataram um boss, 'broadcast $players matou o boss!' irá executar 'bob matou o boss' e 'steve matou o boss!'
commandsOnEliteMobDeath: []
```
```yml
# Define a mensagem enviada aos jogadores que participam em grandes mortes de boss.
bossKillParticipationMessage: '&eSeu dano: &2$playerDamage'
# Define se os bosses regeneram saúde quando saem de combate. Altamente recomendado.
regenerateCustomBossHealthOnCombatEnd: true
# Define a mensagem enviada aos jogadores que estão a tentar rastrear bosses atualmente num mundo diferente.
defaultOtherWorldBossLocationMessage: '$name: Em mundo diferente!'
# Define o prefixo adicionado aos indicadores de dano quando os jogadores atingem um boss com algo contra o qual o boss é fraco.
weakTextColor: '&9'
# Define o prefixo adicionado aos indicadores de dano quando os jogadores atingem um boss com algo contra o qual o boss é forte.
resistTextColor: '&c'
# Define a mensagem que aparece quando os jogadores atingem o boss com algo contra o qual o boss é fraco.
weakText: '&9&lFraco!'
# Define a mensagem que aparece quando os jogadores atingem o boss com algo contra o qual o boss é forte.
resistText: '&c&lResiste!'
# Define se visuais serão utilizados para mostrar que um boss é fraco contra um ataque.
doWeakEffect: true
# Define se visuais serão utilizados para mostrar que um boss é forte contra um ataque.
doResistEffect: true
# Define o multiplicador para o dano causado a bosses utilizando o sistema de dano normalizado (bosses de dungeon regionais). Valores mais altos aumentam o dano causado, tornando os bosses mais fáceis de matar.
# 2.0 = 200%, 0.5 = 50%
damageToEliteMobMultiplier: 1.0
# Define o multiplicador para o dano causado aos jogadores por bosses utilizando o sistema de dano normalizado (bosses de dungeon regionais). Valores mais altos aumentam a quantidade de dano causado por bosses, tornando os bosses mais difíceis de atingir.
# 2.0 = 200%, 0.5 = 50%
damageToPlayerMultiplier: 1.0
# Define o dano base para bosses personalizados utilizando o dano normalizado (geralmente bosses regionais).
normalizedRegionalBossBaselineDamageV2: 3.0
# Define a saúde base para bosses personalizados utilizando a saúde normalizada (geralmente bosses regionais).
normalizedRegionalBossBaselineHealthV3: 4.0
# Define se bosses regionais utilizarão o sistema de combate normalizado.
# Isto é muito altamente recomendado, e conteúdo pré-fabricado não será equilibrado corretamente se modificado.
normalizeRegionalBosses: true
# Define a mensagem que aparece quando um boss cura por sair de combate.
fullHealMessage: '&2CURA TOTAL!'
# Define os multiplicadores aplicados a ataques contra os quais os bosses são fortes e fracos.
strengthAndWeaknessDamageMultipliers: 2.0
# Define o multiplicador aplicado à redução de dano do efeito de poção de resistência para jogadores.
resistanceDamageMultiplier: 1.0
# Define o multiplicador aplicado à redução de dano quando um jogador está a segurar um escudo para ataques corpo a corpo (poderes excluídos).
blockingDamageReduction: 0.8
```

</details>

---

## ProceduralItemGenerationSettings.yml

`ProceduralItemGenerationSettings.yml` contém todas as opções de configuração para configurar itens gerados processualmente.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
dropProcedurallyGeneratedItems: true
customEnchantmentsChance: 0.5
materialNames:
  swordName: Espada
  bowName: Arco
  pickaxe: Picareta
  spade: Pá
  hoe: Enxada
  axe: Machado
  helmet: Capacete
  chestplate: Peitoral
  leggings: Calças
  boots: Botas
  shears: Tesouras
  fishingRod: Cana de Pesca
  shield: Escudo
  trident: Tridente
  crossbow: Besta
nameFormats:
- $verb $itemType de $adjective $noun
- $itemType de $adjective $noun
- $noun's $adjective $verb $itemType
- $verb $itemType
- $adjective $verb $itemType
- O $verb-er
- O $adjective $verb-er
nouns:
- MagmaGuy
- Alvorada
...
adjectives:
- Adorável
- Bonito
...
verbs:
- Cortar
- Atingir
...
verb-ers (noun):
- Destruidor do Mundo
- Estilhaçador do Mundo
...
validMaterials:
  DIAMOND_HELMET: true
  DIAMOND_CHESTPLATE: true
  DIAMOND_LEGGINGS: true
  DIAMOND_BOOTS: true
  DIAMOND_SWORD: true
  DIAMOND_AXE: true
  IRON_HELMET: true
  IRON_CHESTPLATE: true
  IRON_LEGGINGS: true
  IRON_BOOTS: true
  IRON_SWORD: true
  IRON_AXE: true
  GOLDEN_HELMET: true
  GOLDEN_CHESTPLATE: true
  GOLDEN_LEGGINGS: true
  GOLDEN_BOOTS: true
  GOLDEN_SWORD: true
  GOLDEN_AXE: true
  CHAINMAIL_HELMET: true
  CHAINMAIL_CHESTPLATE: true
  CHAINMAIL_LEGGINGS: true
  CHAINMAIL_BOOTS: true
  LEATHER_HELMET: true
  LEATHER_CHESTPLATE: true
  LEATHER_LEGGINGS: true
  LEATHER_BOOTS: true
  STONE_SWORD: true
  STONE_AXE: true
  WOODEN_SWORD: true
  WOODEN_AXE: true
  SHIELD: true
  TURTLE_HELMET: true
  TRIDENT: true
  BOW: true
  CROSSBOW: true
```

</details>

---

## ValidWorlds.yml

`ValidWorlds.yml` contém a lista de mundos que o EliteMobs detetou, bem como opções para personalizar funcionalidades do EliteMobs neles.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define a lista de mundos baseados em zonas.
# O MODO DE JOGO BASEADO EM ZONAS ESTÁ DESATUALIZADO E SERÁ EM BREVE REMOVIDO!
zoneBasedWorlds: []
# Define a lista de mundos de modo pesadelo.
# Mundos de modo pesadelo são um modo de jogo onde os dias são mais curtos e os jogadores não podem dormir.
# Mundos de pesadelo também têm maiores quantidades de gerações de elite.
# https://github.com/MagmaGuy/EliteMobs/wiki/%5BGame-Mode%5D-Nightmare-mode
nightmareWorlds: []
Valid worlds:
  world: true
  world_nether: true
  world_the_end: true
```

</details>

---

## Arenas.yml

`Arenas.yml` contém as mensagens e definições padrão para Arenas que pode modificar.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Mensagem que aparece quando não há jogadores suficientes para iniciar uma arena.
notEnoughPlayersMessage: '&8[EliteMobs] &cPrecisa de pelo menos $amount para iniciar a partida!'
# Título que aparece quando uma arena está a iniciar.
startingMessage: '&2A Iniciar!'
# Legenda que aparece quando uma arena está a iniciar.
startingSubtitle: '&2em $count...'
# Mensagem que aparece quando uma arena está cheia.
arenaFullMessage: '&4[EliteMobs] &cA arena está cheia! Pode observar enquanto espera que termine!'
# Mensagem que aparece quando um jogador tenta juntar-se a uma arena ativa.
arenasOngoingMessage: '&4[EliteMobs] &cNão pode juntar-se à arena agora - uma partida está a acontecer! Pode observar enquanto espera que termine!'
# Mensagem que aparece para lembrar aos jogadores como iniciar uma arena depois de se juntarem como jogadores.
instanceStartHintMessage: '&2[EliteMobs] &aPode iniciar a instância fazendo &2/em
  start'
# Mensagem que aparece para lembrar aos jogadores como sair de uma arena.
instanceQuitHintMessage: '&4[EliteMobs] &cPode sair da instância fazendo &4/em
  quit'
# Mensagem que aparece quando os jogadores se juntam a uma arena.
arenaJoinPlayerMessage: "&2[EliteMobs] &aPode iniciar a arena fazendo &2/em start\
  \ &ase houver pelo menos &2$count &ajogadores nela! \nPode sair da arena\
  \ fazendo &c/em quit"
# Mensagem que aparece para lembrar aos jogadores como sair de uma arena depois de se juntarem como observadores.
arenaJoinSpectatorMessage: '&2[EliteMobs] &aPode sair da arena a qualquer momento utilizando
  &2/em quit'
# Título da mensagem que aparece quando uma vaga está a iniciar.
waveTitle: '&aVaga &2$wave'
# Legenda da mensagem que aparece quando uma vaga está a iniciar.
waveSubtitle: ''
# Título que aparece quando uma arena é concluída.
victoryTitle: '&2Vitória!'
# Legenda que aparece quando uma arena é concluída.
victorySubtitle: '&aConcluiu &2$wave &avagas!'
# Título que aparece quando os jogadores falham numa arena.
defeatTitle: '&4Derrota!'
# Legenda que aparece quando os jogadores falham numa arena.
defeatSubtitle: '&cAtingiu a vaga &4$wave&c!'
# Mensagem transmitida quando os jogadores vencem uma arena.
victoryBroadcast: A Arena $arenaName foi conquistada por $players!
# Título que aparece quando um jogador se junta a uma arena.
joinPlayerTitle: '&aComece com &2/em start &a!'
# Legenda que aparece quando um jogador se junta a uma arena.
joinPlayerSubtitle: '&cSaia com &4/em quit &c!'
# Título que aparece quando um observador se junta a uma arena.
joinSpectatorTitle: '&aAgora a observar!'
# Legenda que aparece quando um observador se junta a uma arena.
joinSpectatorSubtitle: '&cSaia com &4/em quit &c!'
# Define a mensagem enviada aos jogadores se não tiverem permissão para entrar numa arena.
noArenaPermissionMessage: '[EliteMobs] Não tem permissão para entrar nesta
  arena!'
```

</details>

---

## Database.yml

`Database.yml` Inclui configurações sobre como quer que o EM lide com bases de dados.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define se o MySQL será utilizado. Por padrão, o EliteMobs utiliza SQLite. Se quiser utilizar MySQL, precisará de uma configuração MySQL válida.
useMySQL: false
# O host da sua base de dados MySQL
mysqlHost: localhost
# A porta da sua base de dados MySQL
mysqlPort: '3306'
# O nome da base de dados
mysqlDatabaseName: elitemobs
# O nome de utilizador para MySQl
mysqlUsername: your_username_mysql_here
# A palavra-passe para a sua base de dados MysSQL
mysqlPassword: your_mysql_password_here
# Se deve utilizar SSL
useSSL: true
```

</details>

---

## dungeons.yml

`dungeons.yml` Inclui definições que lhe permitem ajustar mensagens que aparecem em dungeons e outras definições como multiplicadores de dano para efeitos aplicados.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define o multiplicador de dano para dano de veneno em dungeons
# Isto é importante para equilíbrio, uma vez que por padrão o dano é um pouco demasiado alto para as dungeons como as concebemos
poisonDamageMultiplier: 0.5
# Define o multiplicador de dano para dano de fogo em dungeons
# Isto é importante para equilíbrio, uma vez que por padrão o dano é um pouco demasiado alto para as dungeons como as concebemos
fireDamageMultiplier: 0.5
# Define o multiplicador de dano para dano de murchidão em dungeons
# Isto é importante para equilíbrio, uma vez que por padrão o dano é um pouco demasiado alto para as dungeons como as concebemos
witherDamageMultiplier: 0.5
# Define se o PvP será permitido em dungeons
friendlyFireInDungeons: false
# Define o texto que aparece sobre faixas de ressurreição em dungeons
dungeonRezInstructions: '&aSocar para ressuscitar!'
# Define o texto que mostra quantas vidas os jogadores têm restantes numa dungeon! Espaços reservados:
# $amount - a quantidade de vidas restantes
dungeonLivesLeftText: '&c$amount vidas restantes!'
# Define o texto para juntar-se a uma dungeon como um jogador! Espaços reservados:
# $dungeonName - o nome da dungeon
joinDungeonAsPlayerText: '&fJuntar-se a $dungeonName como um jogador!'
# Define o texto para juntar-se a uma dungeon como um observador! Espaços reservados:
# $dungeonName - o nome da dungeon
joinDungeonAsSpectatorText: '&fJuntar-se a $dungeonName como um observador!'
# Define o título que aparecerá na descrição do item de menus de dungeons instanciadas
# $difficulty é o espaço reservado para o nome da dificuldade no ficheiro de configuração da dungeon
instancedDungeonTitle: Iniciar dungeon com dificuldade $difficulty!
# Define a descrição que aparecerá na descrição do item de menus de dungeons instanciadas
# $dungeonName é o espaço reservado para o nome da dungeon no ficheiro de configuração da dungeon
instancedDungeonDescription:
- '&fCrie uma nova instância da dungeon'
- $dungeonName &fpara si e talvez
- '&falguns amigos!'
# Define se a observação de conteúdo instanciado estará disponível.
allowSpectatorsInInstancedContent: true
# Define a mensagem que aparece quando uma dungeon instanciada é concluída
instancedDungeonCompleteMessage: '[EliteMobs] Dungeon concluída! Irá autodestruir-se
  em 2 minutos!'
# Define a mensagem que aparece quando uma dungeon instanciada está a fechar
instancedDungeonClosingInstanceMessage: '[EliteMobs] A fechar instância!'
```

</details>

---

## Quests.yml

`Quests.yml` Inclui configurações para missões e que mensagens são exibidas.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define se missões têm de ser devolvidas a quem dá missões para concluir a missão.
requireQuestTurnIn: true
# Define a mensagem enviada quando uma missão é aceite.
questJoinMessage: '&aAceitou a missão $questName &a!'
# Define a mensagem enviada quando uma missão é abandonada.
questLeaveMessage: '&cAbandonou a missão $questName &c!'
# Define a mensagem enviada quando uma missão é concluída.
questCompleteMessage: '&2Concluiu a missão $questName &2!'
# Define a mensagem enviada quando um jogador tenta abandonar uma missão quando nenhuma está ativa.
leaveWhenNoActiveQuestsExist: '&cNão tem atualmente uma missão ativa!'
# Define a mensagem de confirmação enviada quando os jogadores tentam sair de uma missão.
questLeaveConfirmationMessage: '&cTem a certeza de que quer abandonar a sua missão atual?
  Faça &a/em confirm &c para confirmar a sua escolha!'
# Define se algumas das mensagens relacionadas com missões utilizarão títulos em vez de mensagens de chat.
useQuestAcceptTitles: true
# Define o título enviado quando os jogadores começam uma missão.
questStartTitle: '&aMissão Aceite!'
# Define a legenda enviada quando os jogadores começam uma missão.
questStartSubtitle: $questName
# Define se títulos serão enviados quando os jogadores concluem uma missão.
useQuestCompleteTitles: true
# Define o título enviado quando um jogador conclui uma missão.
questCompleteTitle: '&2Missão Concluída!'
# Define a legenda enviada quando um jogador conclui uma missão.
questCompleteSubtitle: $questName
# Define se os títulos são enviados quando os jogadores saem de missões.
useQuestLeaveTitles: true
# Define o título enviado quando um jogador sai de uma missão.
questLeaveTitle: '&cMissão Abandonada!'
# Define a legenda enviada quando um jogador sai de uma missão.
questLeaveSubtitle: $questName
# Define se as mensagens são enviadas no chat a reportar a progressão de objetivos de missão.
doQuestChatProgression: true
# Define os códigos de cor para objetivos concluídos.
ongoingQuestColorCode: '&2'
# Define a formatação para mensagens de progressão de missões de mortes.
killQuestChatProgressionMessage: '&8[EliteMobs]&c➤Matar $name:$color$current&0/$color$target'
# Define a formatação para mensagens de progressão de missões de procura.
fetchQuestChatProgressionMessage: '&8[EliteMobs]&c➤Obter $name:$color$current&0/$color$target'
# Define a formatação para mensagens de progressão de missões de diálogo.
dialogQuestChatProgressionMessage: '&8[EliteMobs]&c➤Falar com $name:$color$current&0/$color$target'
# Define a quantidade máxima de missões aceites que um jogador pode ter.
maximumActiveQuests: 10
# Define a mensagem enviada aos jogadores quando tentam aceitar uma quantidade de missões que excede o limite de missões ativas.
questCapMessage: '&8[EliteMobs] &cAtingiu a quantidade máxima de missões ativas
  (10)! &4Abandone ou conclua pelo menos uma missão ativa se quiser obter mais missões!'
# Define se as mensagens de quadros de pontuação serão utilizadas para missões.
useQuestScoreboards: true
# Define a formatação para mensagens de progressão de quadros de pontuação de missões de mortes.
killQuestScoreboardProgressionMessage: '&c➤Matar $name:$color$current&0/$color$target'
# Define a formatação para a mensagem de progressão de quadros de pontuação de missões de procura.
fetchQuestScoreboardProgressionMessage: '&c➤Obter $name:$color$current&0/$color$target'
# Define a formatação para mensagens de progressão de quadros de pontuação de missões de diálogo.
dialogQuestScoreboardProgressionMessage: '&c➤Falar com $name:$color$current&0/$color$target'
questEntityTypes:
- BLAZE
- CAVE_SPIDER
- DROWNED
- ELDER_GUARDIAN
- ENDERMAN
- ENDERMITE
- EVOKER
- GHAST
- GUARDIAN
- HUSK
- ILLUSIONER
- IRON_GOLEM
- PILLAGER
- RAVAGER
- SILVERFISH
- SKELETON
- SPIDER
- STRAY
- VINDICATOR
- WITCH
- WITHER_SKELETON
- WOLF
- ZOMBIE
- HOGLIN
- ZOGLIN
- PIGLIN_BRUTE
- PIGLIN
- ZOMBIFIED_PIGLIN
# Define a mensagem enviada aos jogadores para ativar o rastreamento de missões.
chatTrackMessage: '&8[EliteMobs]&2 Clique aqui para rastrear a sua missão!'
# Define a mensagem de passagem do rato da mensagem de rastreamento de missão.
chatTrackHover: '&2Clique para rastrear!'
# Define o comando enviado ao clicar na mensagem de rastreamento. Não deve modificar isto.
chatTrackCommand: /elitemobs quest track $questID
# Define a mensagem enviada aos jogadores ao ativar o rastreamento de missões.
chatTrackingMessage: '&8[EliteMobs]&9 Agora está a rastrear uma missão!'
# Define a mensagem de passagem do rato da mensagem de rastreamento de missão ativada.
chatTrackingHover: '&2Clique para deixar de rastrear/rastrear! /em -> Missões para rastrear uma missão diferente!'
# Define o comando enviado ao clicar na mensagem de ativação do rastreamento de missão. Não deve modificar isto.
chatTrackingCommand: /elitemobs quest track $questID
# Define se as missões são rastreadas automaticamente quando são aceites.
autoTrackQuestsOnAccept: true
# Define a mensagem que aparece quando o destino da missão não pôde ser encontrado.
noQuestDestinationFound: '[EM] Nenhum destino de missão encontrado!'
# Define a mensagem que aparece quando o alvo da missão está num mundo diferente.
questDestinationInOtherWorld: '[EM] Vá para o mundo $world!'
# Define a mensagem enviada aos jogadores quando tentam aceitar uma missão que já concluíram.
questAlreadyCompletedMessage: '&8[EliteMobs] &cJá concluiu esta missão!'
# Define a mensagem enviada aos jogadores quando tentam aceitar uma missão para a qual não têm permissão.
questPrerequisitesMissingMessage: '&8[EliteMobs] &cEste NPC tem algumas missões que
  ainda não pode aceitar!'
# Define a mensagem enviada aos jogadores que tentam obter uma missão para a qual não têm a classificação de guilda correta ativada.
lowRankDynamicQuestWarning: '&8[EliteMobs] &cNão pode aceitar estas missões com a sua
  classificação de guilda atual! Aumente a sua classificação de guilda para aceitar estas missões.'
# Define a formatação para a mensagem de entrega de missão.
questTurnInObjective: '&a2Falar com $npcName'
# Define a quantidade máxima de caracteres que os menus baseados em inventário para missões terão antes de quebrar a linha.
horizontalCharacterLimitBedrockMenu: 30
# Define a quantidade máxima de caracteres por entrada de item em menus baseados em inventário para missões antes de criar outro item para continuar a entrada.
itemEntryCharacterLimitBedrockMenu: 300
```

</details>

---

## resource_pack_config.yml

`resource_pack_config.yml` Inclui definições relacionadas com o pacote de recursos do EliteMobs.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
eliteMobsResourcePackEnabled: false
forceResourcePack: false
resourcePackPrompt: '[EliteMobs] A utilização do pacote de recursos é altamente recomendada!'
resourcePackLink: https://www.magmaguy.com/downloads/elitemobs_resource_pack.zip
```

</details>

---

## Sounds.yml

`Sounds.yml` Inclui definições que definem que sons devem ser reproduzidos quando certas interações do EliteMobs são realizadas. Os ficheiros de som são armazenados no pacote de recursos.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define o som que será reproduzido quando um baú de tesouro abre
treasureChestOpenSound: elitemobs:treasure_chest.open
# Define o som que será reproduzido quando um jogador sobe de classificação na guilda
guildRankUpSound: elitemobs:guild.rankup
# Define o som que será reproduzido quando um jogador presta na guilda
guildPrestigeSound: elitemobs:guild.prestige
# Define o som que será reproduzido quando um jogador progride numa missão
questProgressionSound: elitemobs:quest.progression
# Define o som que será reproduzido quando um jogador conclui uma missão
questCompleteSound: elitemobs:quest.completion
# Define o som que será reproduzido quando um jogador abandona uma missão
questAbandonSound: elitemobs:quest.abandon
# Define o som que será reproduzido quando um jogador aceita uma missão
questAcceptSound: elitemobs:quest.accept
```

</details>

---

## Wormholes.yml

`Wormholes.yml` Inclui definições para os teletransportes de buraco de minhoca do EliteMobs.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define a mensagem que aparece quando um teletransporte é utilizado para uma dungeon que não está instalada.
dungeonNotInstalledMessage: '&8[EliteMobs] &cA dungeon $dungeonID &cnão está instalada!
  Este teletransporte não funcionará.'
# Define a mensagem que aparece quando um buraco de minhoca é utilizado para uma dungeon que não está instalada.
defaultPortalMissingMessage: '&8[EliteMobs] &cEste portal não parece levar a lado nenhum!'
# Define se o modo de partículas reduzidas para buracos de minhoca é utilizado. Isto é especialmente recomendado se estiver a permitir clientes bedrock.
reducedParticlesMode: true
# Define se os buracos de minhoca não utilizam partículas de todo. Não recomendado, mas pode ser necessário para clientes bedrock realmente maus.
noParticlesMode: false
# Define a mensagem que é enviada quando um jogador tenta utilizar um buraco de minhoca, mas não tem moeda suficiente para o utilizar.
insufficientCurrencyForWormholeMessage: '&8[EliteMobs] &cMoeda insuficiente! Precisa de $amount para utilizar este buraco de minhoca!'
```

</details>
