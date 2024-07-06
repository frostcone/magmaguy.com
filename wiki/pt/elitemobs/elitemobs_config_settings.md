# Valores Padrão da Configuração do EliteMobs

**O EliteMobs vem com as configurações padrão recomendadas instaladas por padrão. Se mudar as coisas aleatoriamente, é provável que apenas piore a experiência geral.**

_**O EliteMobs é fornecido a todos os utilizadores com as configurações padrão recomendadas. Se mudar as coisas aleatoriamente e depois solicitar suporte, há uma probabilidade muito grande de lhe ser dito para redefinir os seus arquivos de configuração. As modificações no plugin devem ser originadas de testes de jogo e não apenas de palpites.**_

## Introdução

O EliteMobs atualmente oferece uma vasta gama de opções de configuração devido à alta procura por personalização. Para manter esta página wiki concisa, apenas as configurações padrão serão exibidas. 

Se desejar saber mais sobre uma configuração específica, pode consultar o arquivo de configuração e analisar os comentários.

---

## config.yml

`config.yml` contém principalmente configurações aleatórias que não se encaixavam confortavelmente em outro lugar no momento da sua criação. É o arquivo de configuração com maior probabilidade de ver mudanças entre versões.

<div align="left">

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define o arquivo de idioma utilizado pelo EliteMobs
# NÃO altere isto manualmente! Destina-se a ser instalado com o comando '/em language <nomedoarquivodeidioma>'
language: english
# Define se as elites e bosses gerados por elitemobs mostrarão sempre as suas etiquetas de nome.
# Não recomendado!
alwaysShowEliteMobNameTags: false
# Define a quantidade de mobs passivos que têm de estar próximos antes de poderem ser mesclados.
# Não defina isto como 0!
superMobStackAmount: 50
# Faz com que as elites não danifiquem mobs passivos com explosões.
preventEliteCreeperDamageToPassiveMobs: true
# Define se o EliteMobs utilizará títulos para avisar os jogadores sobre permissões em falta.
useTitlesForMissingPermissionMessages: true
# Define se o EliteMobs impedirá a conversão de mobs nomeados em elites.
# Especialmente importante para a compatibilidade com outros plugins.
preventEliteMobConversionOfNamedMobs: true
# Define se o EliteMobs converterá mobs com motivos de spawn personalizados.
# A execução de certos plugins de boss definirá automaticamente isto como verdadeiro, independentemente do valor na configuração.
enableHighCompatibilityMode: false
# Define o bónus de spawn de elite para o modo de jogo pesadelo
nightmareWorldSpawnBonus: 0.5
# Define se o comando /em centralizado abre a página de estado principal do plugin.
# Altamente recomendado!
emLeadsToStatusMenu: true
# Define se a execução de comandos específicos como /em wallet levará ao menu /em onde essa informação está centralizada.
otherCommandsLeadToEMStatusMenu: true
# Define se a configuração está completa.
# Não defina este valor manualmente, destina-se a ser modificado através de comandos dentro do jogo.
setupDoneV3: true
# Define se as elites impedirão o spawn de reforços vanilla, como para a funcionalidade de reforço de Zombie.
preventVanillaReinforcementsForEliteEntities: true
# Define o local de spawn padrão do servidor para o EliteMobs. /em spawntp levará a este local.
defaultSpawnLocation: world,16.0,76.0,80.0,0.0,0.0
# Define se o EliteMobs irá regenerar blocos explodidos por elites.
doExplosionRegen: true
# Define se a regeneração de explosão também regenerará o conteúdo de contentores, como baús.
# Mudar para falso fará com que as explosões de elite não explodam contentores.
doRegenerateContainers: true
defaultTransitiveBlockLimiter: 500
# Define se o menu /em utilizará apenas o estilo de menu baseado em inventário que é compatível com o Bedrock.
# Como lembrete, os jogadores podem usar o comando /em alt para alternar entre estilos de menu /em
onlyUseBedrockMenus: false
# Define o limite de caracteres por linha para as páginas do menu do livro.
# Diminua este valor se o texto estiver a ser cortado nos menus de livros, como para missões.
characterLimitForBookMenuPagesV2: 170
# Define se o espaço vazio do menu será preenchido com painéis de vidro.
# Não recomendado se estiver a utilizar o pacote de recursos do EliteMobs.
useGlassToFillMenuEmptySpace: false
# Define se o unicode será utilizado para formatar o pacote de recursos do EliteMobs.
# Não defina isto manualmente, é definido automaticamente após a instalação do pacote de recursos.
# Defina-o manualmente apenas se teve de mesclar o pacote de recursos do EliteMobs e espera que o espaçamento possa não funcionar se o fizer.
menuUnicodeFormatting: false
# Define a mensagem enviada aos jogadores se executarem '/em confirm' sem comandos pendentes.
noPendingCommands: '&cDe momento não tem nenhum comando pendente!'
# Define a mensagem de rastreamento para bosses que enviam mensagens de rastreamento.
trackMessage: Rastrear o $name
# Define a mensagem enviada aos jogadores que abrem baús do tesouro com requisitos de nível acima da sua classificação de guilda.
chestLowRankMessage: '&7[EM] &cA sua classificação de guilda precisa de ser pelo menos $rank &cpara
  abrir este baú!'
# Define a mensagem enviada aos jogadores que tentam reabrir um baú do tesouro que já abriram.
chestCooldownMessage: '&7[EM] &cVocê já abriu este baú recentemente! Espere $time!'
# Define a mensagem que aparece a recomendar o comando /em alt para jogadores com problemas com o comando /em
dismissEMMessage: '&8[EliteMobs] &2/elitemobs &fo menu não está a funcionar para si? Tente &2/elitemobs
  alt &fpara ver uma versão alternativa do menu! &cNão quer ver esta mensagem
  novamente? &4/em dismiss'
# Define a mensagem que aparece quando os jogadores executam o comando /em alt.
switchEMStyleMessage: '&8[EliteMobs] &2/elitemobs &fo estilo do menu mudou! Confira!'
# Define a mensagem que aparece quando um jogador abre um baú do tesouro, mas não recebe nada.
treasureChestNoDropMessage: '&8[EliteMobs] &cVocê não recebeu nada! Mais sorte
  para a próxima!'
# Define a mensagem que aparece quando um jogador tenta rastrear um boss que já não é válido.
bossAlreadyGoneMessage: '&c[EliteMobs] Desculpe, este boss já desapareceu!'
```

</details>

---

## AdventurersGuild.yml

`AdventurersGuild.yml` contém configurações relevantes tanto para o Centro da Guilda dos Aventureiros (o mundo) como para o sistema de subida de nível da Guilda dos Aventureiros.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define se o EliteMobs adicionará vida máxima ao desbloquear classificações de guilda como recompensa de prestígio
Add max health when unlocking higher guild ranks: true
# Define se o EliteMobs adicionará uma chance de ataque crítico ao desbloquear classificações de guilda como recompensa de prestígio
Add critical chance when unlocking higher guild ranks: true
# Define se o EliteMobs adicionará chance de esquiva ao desbloquear classificações de guilda como recompensa de prestígio
Add dodge chance when unlocking higher guild ranks: true
# Define se os comandos do utilizador são redirecionados para o centro da guilda dos aventureiros. Isto é altamente recomendado para a imersão no jogo e para fins de tutorial.
userCommandsTeleportToAdventurersGuild: true
# Define o nome para exibir no jogo da guilda dos aventureiros
adventurersGuildMenuName: '&6&lCentro dos Aventureiros'
Prestige 0 rank 0: '&8Plebeu - desativa as elites!'
Prestige 0 rank 0 short placeholder: '&6&l✧&e0'
...
# Define se o loot do jogador é limitado pelo seu nível de guilda.
#  Esta é uma parte incrivelmente importante do EliteMobs e é extremamente recomendada.
limitLootBasedOnGuildTier: true
# Define a mensagem enviada aos jogadores se o seu loot for nerfado devido ao seu baixo nível de guilda.
lootLimiterMessage: '&7[EM] &cVocê deve desbloquear a próxima classificação de guilda através de /ag para saquear
  melhores itens!'
# Define os comandos que são executados ao subir de nível de guilda. Os espaços reservados são:
# $prestigerank - emite a classificação de prestígio
# $activerank - emite a classificação atualmente ativa
# $player - emite o nome do jogador
onRankUpCommand: []
# Define os comandos que são executados ao subir de nível de prestígio.
# $prestigerank - emite a classificação de prestígio
# $activerank - emite a classificação atualmente ativa
# $player - emite o nome do jogador
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
# Define o nível de prestígio para o primeiro bónus de vida máxima.
healthPrestige1Bonus: 2.0
# Define o nível de prestígio para o segundo bónus de vida máxima.
healthPrestige4Bonus: 2.5
# Define o nível de prestígio para o terceiro bónus de vida máxima.
healthPrestige7Bonus: 3.0
# Define o nível de prestígio para o terceiro bónus de vida máxima.
healthPrestige10Bonus: 4.0
# Define a quantidade base estimada de bosses que devem ser mortos para poder pagar uma subida de nível.
baseKillsForRankUp: 100
# Define a quantidade adicional estimada de bosses que devem ser mortos para poder subir de nível, por nível.
# A fórmula é este valor x o nível em que o jogador se encontra atualmente.
additionalKillsForRankUpPerTier: 50
# Define o título enviado aos jogadores quando alguém desbloqueia uma classificação de prestígio.
# $player é um espaço reservado que é substituído pelo nome para exibir do jogador.
prestigeUnlockMessageTitle: $player
# Define a legenda enviada aos jogadores quando alguém desbloqueia uma classificação de prestígio.
# $tier é um espaço reservado que é substituído pelo nível de prestígio do jogador.
prestigeUnlockMessageSubtitle: '&2desbloqueou $tier&2!'
# Define o multiplicador que será aplicado à chance de spawn quando os jogadores estiverem a utilizar a classificação pacífica (plebeu).
peacefulModeEliteChanceDecrease: 0.2
# Define a lista de mundos aos quais os bónus de classificação de guilda não serão aplicados.
worldsWithoutAGBonuses: []
# Desativa a capacidade dos utilizadores de mudar para o modo pacífico para o EliteMobs. O modo pacífico diminui o nível e as taxas de spawn de mobs em torno desse jogador especificamente.
disableCommonerRank: false
```

</details>

---

## AntiExploit.yml

`AntiExploit.yml` permite aos administradores personalizarem diferentes aspetos do sistema AntiExploit. O sistema AntiExploit existe para impedir que os jogadores utilizem coisas como trituradores de mob para farmar moedas e loot facilmente, e os incentiva a fazer lutas reais e mini-masmorras em vez de clicarem afk até ao topo do plugin.

Este é um sistema crítico para manter ligado se não quiser que as pessoas apenas farmem afk todo o plugin e quiser que realmente interajam com mini-masmorras.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define a mensagem que aparece quando o antiexploit é ativado.
AntiExploit message: '&c[EM AntiExploit] &7As elites próximas não vão largar loot especial.'
# Define se o antiexploit de quarto escuro 1 está ativado.
# As funcionalidades antiexploit específicas não são documentadas intencionalmente. Os operadores do servidor podem ver qual o tipo de antiexploit que foi ativado, mas não são fornecidas mais informações sobre como funciona especificamente.
Enable darkroom antiexploit 1: true
# Define se o antiexploit de quarto escuro 2 está ativado.
# As funcionalidades antiexploit específicas não são documentadas intencionalmente. Os operadores do servidor podem ver qual o tipo de antiexploit que foi ativado, mas não são fornecidas mais informações sobre como funciona especificamente.
Enable darkroom antiexploit 2: true
# Define se o antiexploit de quarto escuro 3 está ativado.
# As funcionalidades antiexploit específicas não são documentadas intencionalmente. Os operadores do servidor podem ver qual o tipo de antiexploit que foi ativado, mas não são fornecidas mais informações sobre como funciona especificamente.
Enable darkroom antiexploit 3: true
# Define se o antiexploit de quarto escuro grande 1 está ativado.
# As funcionalidades antiexploit específicas não são documentadas intencionalmente. Os operadores do servidor podem ver qual o tipo de antiexploit que foi ativado, mas não são fornecidas mais informações sobre como funciona especificamente.
Enable large darkroom antiexploit 1: true
# Define se o antiexploit de altura do enderman está ativado.
# As funcionalidades antiexploit específicas não são documentadas intencionalmente. Os operadores do servidor podem ver qual o tipo de antiexploit que foi ativado, mas não são fornecidas mais informações sobre como funciona especificamente.
Enable enderman height antiexploit: true
# Define se o antiexploit de montaria está ativado.
# As funcionalidades antiexploit específicas não são documentadas intencionalmente. Os operadores do servidor podem ver qual o tipo de antiexploit que foi ativado, mas não são fornecidas mais informações sobre como funciona especificamente.
Enable mount antiexploit: true
# Define se os mobs de elite podem pegar itens
preventItemPickupByMobs: true
# Define se o antiexploit de dano ambiental está ativado.
# As funcionalidades antiexploit específicas não são documentadas intencionalmente. Os operadores do servidor podem ver qual o tipo de antiexploit que foi ativado, mas não são fornecidas mais informações sobre como funciona especificamente.
Enable ambient damage antiexploit: true
# Define se o antiexploit de bloco de mel está ativado.
# As funcionalidades antiexploit específicas não são documentadas intencionalmente. Os operadores do servidor podem ver qual o tipo de antiexploit que foi ativado, mas não são fornecidas mais informações sobre como funciona especificamente.
Enable honey block antiexploit: true
# Define o limite para a ativação do antiexploit. Valores mais altos tornam-no mais tolerante. Não é recomendado modificar isto.
antiExploitThreshold: 10
# Define se o antiexploit sem caminho está ativado
nPathExploit: true
```

</details>

---

## CombatTag.yml

`CombatTag.yml` contém as configurações para o sistema Combat Tag. Este sistema ainda está muito longe de estar completo, mas tenta gerir o comportamento do jogador assim que este entra em combate.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define se a tag de combate está ativada.
# Quando ativado, os jogadores voadores que participam em combate são configurados para parar de voar.
Enable combat tag: true
# Define a mensagem enviada quando a tag de combate é ativada.
Combat tag message: '&c[EliteMobs] Tag de combate ativada!'
# Define se o comando /ag terá um temporizador antes da teleportação
Enable adventurers guild teleport timer: true
# Define a mensagem de ação definida enquanto se aguarda pelo temporizador de teleportação.
Teleport time left: '&7[EM] A teletransportar em &a$time &7segundos...'
# Define a mensagem enviada quando os jogadores se movem enquanto aguardam pela teleportação.
Teleport cancelled: '&7[EM] &cTeleportação interrompida!'
```

</details>

---

## DiscordSRV.yml

`DiscordSRV.yml` contém as configurações para DiscordSRV. Se quiser ver como configurar esta funcionalidade, [clique aqui!]($language$/elitemobs/discordsrv.md)

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# A documentação pode ser encontrada aqui: https://magmaguy.com/wiki.html#lang=en&article=elitemobs+discordsrv.md
announcementRoomName: PRECISA_DE_COLOCAR_O_NOME_DA_SALA_DO_DISCORD_ONDE_QUER_QUE_AS_NOTIFICAÇÕES_DO_ELITEMOBS_SEJAM_TRANSMITIDAS_COMO_TEM_NO_SEU_ARQUIVO_DE_CONFIGURAÇÃO_DO_DISCORDSRV_VERIFIQUE_O_WIKI_DO_ELITEMOBS_PARA_MAIS_DETALHES

```

</details>

---

## EconomySettings.yml

`EconomySettings.yml` contém as configurações para a economia do EliteMobs.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define se a economia do EliteMobs está ativada. Isto significa moedas de elite, a capacidade de comprar e vender equipamento e a capacidade de atualizar classificações de guilda.
# Se desativado, os jogadores não conseguirão progredir no plugin!
enableEconomy: true
# Define o item de revenda de itens, como uma % do preço original. 5 é 5%
itemResaleValue: 5.0
# Define o nome no jogo da moeda utilizada.
currencyName: Moedas de Elite
# Define o plugin para usar Vault. ISTO NÃO É RECOMENDADO! Leia o porquê aqui: https://github.com/MagmaGuy/EliteMobs/wiki/%5BThird-party-support%5D-Vault
useVault - not recommended: false
# Define se as elites vão largar moedas com base no seu nível.
enableCurrencyShower: true
# Define o multiplicador para a moeda largada pelas elites.
currencyShowerTierMultiplier: 1.0
# Define a mensagem enviada quando os jogadores pegam moeda de elite.
chatCurrencyShowerMessage: '&7[EM] Você pegou &a$amount $currency_name!'
# Define a mensagem da barra de ação enviada quando os jogadores pegam moeda de elite.
actionbarCurrencyShowerMessage: '&7[EM] Você pegou &a$amount $currency_name!'
# Envia a mensagem que os jogadores recebem após saquearem moeda. Útil para fins de tutorial.
adventurersGuildNotificationMessages: '&7[EM] Dinheiro extra para gastar? Tente &a/ag !'
# Define a taxa de imposto para transações entre jogadores.
# Altamente recomendado por razões de equilíbrio, visto que jogadores de alto nível podem ganhar até 6x mais moeda e tentar usar outros jogadores para contornar as redefinições de moeda de prestígio.
playerToPlayerPaymentTaxes: 0.2
# Mensagem enviada ao enviar moeda de elite para outros jogadores.
Economy pay message v2: '&2Você pagou &2$amount_sent $currency_name &2a $receiver&2,
  que recebeu $amount_received após impostos!'
# Mensagem enviada após os jogadores enviarem moeda.
Economy currency left message: Agora tem &2$amount_left $currency_name
# Mensagem recebida ao receber moeda.
Economy money from payment message: Você recebeu &2$amount_received $currency_name
  &fde $sender
# Mensagem enviada quando os jogadores tentam enviar uma quantidade de moedas que não têm.
Economy payment insufficient currency: '&cVocê não tem $currency_name suficiente para
  fazer isso!'
# Mensagem de saldo /em
Wallet command message: Você tem &2$balance $currency_name
# Mensagem de confirmação enviada quando os jogadores tentam enviar moeda para outro jogador.
Tax confirmation message: '&cEnviar um pagamento custará $percentage% em impostos. &aFaça
  &9$command &apara prosseguir!'
# Mensagem enviada quando um jogador compra numa loja.
Shop buy message: '&aVocê comprou $item_name &apor $item_value $currency_name!'
# Mensagem enviada quando um jogador interage com uma loja.
Shop current balance message: '&aVocê tem $currency_amount $currency_name.'
# Mensagem enviada quando os jogadores não têm moeda suficiente para comprar um item
Shop insufficient funds message: '&cVocê não tem $currency_name suficiente!'
# Segunda parte da mensagem enviada quando os jogadores tentam comprar um item que não podem pagar.
Shop item cost message: Esse item custa &c$item_value $currency_name.
# Mensagem enviada ao vender um item a uma loja.
Shop sell message: '&aVocê vendeu $item_name &apor $currency_amount $currency_name!'
# Mensagem enviada ao tentar vender um item que não pertence a esse jogador.
Shop sale player items warning: '&cVocê não pode vender itens que não estão atualmente vinculados à alma
  a si! Isto inclui itens de outros níveis de prestígio!'
# Mensagem enviada ao tentar vender um item que não é do EliteMobs
Shop sale instructions: '&cVocê só pode vender loot do EliteMobs aqui! (Armadura / armas
  largadas por elites que mostram um valor na sua descrição)'
# Mensagem enviada ao vender um lote de itens de elite.
shopBatchSellItem: '&aVocê vendeu os seus itens &apor $currency_amount $currency_name!'
lootShowerMaterial:
  # Define o tipo de material de 1 moeda de elite largada.
  '1': GOLD_NUGGET
  '5': GOLD_INGOT
  '10': GOLD_BLOCK
  '20': EMERALD
  '50': EMERALD_BLOCK
  '100': DIAMOND
  '500': DIAMOND_BLOCK
  '1000': NETHER_STAR
lootShowerData:
  # Define o ID do modelo personalizado para 1 moeda de elite largada. Utilizado pelo pacote de recursos.
  '1': 1
  '5': 1
  '10': 1
  '20': 1
  '50': 1
  '100': 1
  '500': 1
  '1000': 1
materialWorth:
  # Define o valor deste material para o sistema de moeda do elitemobs.
  DIAMOND_AXE: 17.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  DIAMOND_BOOTS: 17.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  DIAMOND_CHESTPLATE: 17.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  DIAMOND_LEGGINGS: 17.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  DIAMOND_HELMET: 17.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  DIAMOND_PICKAXE: 17.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  DIAMOND_SHOVEL: 17.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  DIAMOND_SWORD: 17.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  DIAMOND_HOE: 17.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  IRON_AXE: 16.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  IRON_BOOTS: 16.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  IRON_LEGGINGS: 16.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  IRON_CHESTPLATE: 16.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  IRON_HELMET: 16.0


```

</details>

---




  # Define o valor deste material para o sistema de moeda do elitemobs.
  IRON_PICKAXE: 16.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  IRON_SHOVEL: 16.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  IRON_HOE: 16.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  IRON_SWORD: 16.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  SHIELD: 16.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  BOW: 16.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  CHAINMAIL_BOOTS: 15.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  CHAINMAIL_LEGGINGS: 15.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  CHAINMAIL_CHESTPLATE: 15.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  CHAINMAIL_HELMET: 15.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  STONE_SWORD: 15.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  STONE_AXE: 15.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  STONE_PICKAXE: 15.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  STONE_SHOVEL: 15.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  STONE_HOE: 15.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  GOLDEN_AXE: 13.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  GOLDEN_BOOTS: 13.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  GOLDEN_LEGGINGS: 13.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  GOLDEN_CHESTPLATE: 13.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  GOLDEN_HELMET: 13.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  GOLDEN_SWORD: 13.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  GOLDEN_SHOVEL: 13.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  GOLDEN_PICKAXE: 13.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  GOLDEN_HOE: 13.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  GOLDEN_APPLE: 17.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  ENCHANTED_GOLDEN_APPLE: 17.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  LEATHER_BOOTS: 13.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  LEATHER_LEGGINGS: 13.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  LEATHER_CHESTPLATE: 13.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  LEATHER_HELMET: 13.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  WOODEN_SWORD: 13.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  WOODEN_AXE: 13.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  WOODEN_HOE: 13.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  WOODEN_PICKAXE: 13.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  TRIDENT: 17.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  ELYTRA: 17.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  TURTLE_HELMET: 13.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  NETHERITE_AXE: 18.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  NETHERITE_PICKAXE: 18.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  NETHERITE_SHOVEL: 18.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  NETHERITE_HOE: 18.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  NETHERITE_SWORD: 18.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  NETHERITE_HELMET: 18.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  NETHERITE_CHESTPLATE: 18.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  NETHERITE_LEGGINGS: 18.0
  # Define o valor deste material para o sistema de moeda do elitemobs.
  NETHERITE_BOOTS: 18.0
  # Define o valor padrão do material para itens não especificamente definidos.
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
# Define se os eventos de ação acontecerão.
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#action-events
actionEventsEnabled: true
# Define se os eventos cronometrados acontecerão.
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events
timedEventsEnabled: true
```

</details>

---

## ItemSettings.yml

`ItemSettings.yml` contém as configurações globais para itens de Elite.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define os caracteres prefixados aos encantamentos vanilla na descrição do item.
noItemDurabilityMessage: '&8[EliteMobs] $item &4está partido! Não funcionará até ser reparado!'
# Define se algum loot do EliteMobs será largado.
# Inclui Moedas de Elite, Itens Personalizados, Itens Gerados Processualmente - tudo!
# Não recomendado, torna a progressão mmorpg impossível.
doEliteMobsLoot: true
# Define se o loot gerado processualmente terá cores diferentes com base na qualidade do item.
doMMORPGColorsForItems: true
# Define se a colocação de itens personalizados, como banners ou blocos, é impedida.
# Isto é recomendado - os itens personalizados quebram-se quando são colocados e não podem ser recuperados!
preventCustomItemPlacement: true
# Define o formato para a descrição de todos os itens personalizados do EliteMobs!
# Os seguintes são espaços reservados válidos:
# $itemLevel - mostra o nível do item
# $prestigeLevel - mostra o nível de prestígio
# $weaponOrArmorStats - mostra as estatísticas de DPS de elite ou de armadura de elite, dependendo do item
# $soulbindInfo - mostra a quem, se a alguém, o item está vinculado à alma
# $itemSource - mostra de onde o item veio, como um mob ou uma loja
# $ifLore - faz com que uma linha só apareça se o item tiver uma descrição personalizada. Aplica-se apenas a itens personalizados
# $customLore - mostra a totalidade da descrição personalizada. Aplica-se apenas a itens personalizados
# $ifEnchantments - faz com que uma linha só apareça se o item tiver algum encantamento
# $enchantments - mostra os encantamentos no item
# $eliteEnchantments - mostra os encantamentos de elite no item
# $ifCustomEnchantments - mostra os encantamentos personalizados no item
# $customEnchantments - mostra os encantamentos personalizados no item
# $ifPotionEffects - só mostra a linha se o item tiver efeitos de poção
# $potionEffects - mostra os efeitos de poção no item
# $loreResaleValue - mostra o valor do item. Pode mostrar o preço de compra ou venda dependendo de onde é visualizado
# Importante: Vários dos espaços reservados podem ser ainda mais personalizados pelas configurações de configuração mais abaixo
itemLoreStructureV2:
- §7§m§l---------§7<§lEquip Info§7>§m§l---------
- '§7Nível do item: §f$itemLevel §7Prestigio §6$prestigeLevel'
- $weaponOrArmorStats
- $soulbindInfo
- $itemSource
- $ifLore§7§m§l-----------§7< §f§lLore§7 >§m§l-----------
- $customLore
- $ifEnchantments§7§m§l--------§7<§9§lEnchantments§7>§m§l--------
- $enchantments
- $eliteEnchantments
- $ifCustomEnchantments§7§m§l------§7< §3§lCustom Enchants§7 >§m§l------
- $customEnchantments
- $ifPotionEffects§7§m§l----------§7< §5§lEffects§7 >§m§l----------
- $potionEffect
- §7§l§m-----------------------------
- $loreResaleValue
# Define a descrição da fonte da loja para compra em loja
shopSourceItemLores: '&7Comprado numa loja'
# Define a descrição da fonte da loja para itens saqueados de bosses
mobSourceItemLores: '&7Saqueado de $mob'
# Define a descrição do valor do item
loreWorths: '&7Vale $worth $currencyName'
# Define a descrição do valor de revenda do item
loreResaleValues: '&7Vende por $resale $currencyName'
# Define a chance base de qualquer item de elite largar de mobs de elite
flatDropRateV3: 0.2
# Define a chance base de qualquer item de elite largar de bosses regionais
regionalBossNonUniqueDropRate: 0.05
# Define se os bosses regionais podem largar loot vanilla
regionalBossesDropVanillaLoot: false
# Define quanto a chance de um item de elite largar aumenta com base no nível do boss.
# O nível do boss é multiplicado por este valor e adicionado à chance base.
# Já não é recomendado ter isto acima de 0.0!
levelIncreaseDropRateV2: 0.0
# Define a chance ponderada de um item gerado processualmente largar.
# Este sistema usa probabilidades ponderadas! Procure isso no Google se não souber o que é.
proceduralItemDropWeight: 90.0
# Define a chance relativa de um item ponderado largar.
# Os itens ponderados são itens personalizados que não têm um peso dinâmico, como amuletos.
weighedItemDropWeight: 1.0
# Define a chance relativa de um item fixo largar. Estes são itens personalizados que não são dimensionados.
fixedItemDropWeight: 10.0
# Define a chance relativa de um item limitado largar. Estes são itens personalizados que são dimensionados até um nível específico.
limitedItemDropWeight: 3.0
# Define a chance relativa de um item escalável largar. Estes são itens personalizados que podem ser dimensionados para qualquer nível e são os mais comuns no plugin.
scalableItemDropWeight: 6.0
# Define o multiplicador para o loot vanilla do mob, com base no nível do mob.
defaultLootMultiplier: 0.0
# Define o nível máximo para o multiplicador de loot padrão.
levelCapForDefaultLootMultiplier: 200
# Define o multiplicador de experiência de Minecraft vanilla largado para o boss, com base no nível do boss.
defaultExperienceMultiplier: 1.0
# Define o nível do loot máximo que será largado pelo EliteMobs. É altamente recomendável deixá-lo em 200.
maximumItemLevel: 200
# Define se os encantamentos de elite serão utilizados. 
# Os encantamentos de elite substituem os encantamentos vanilla quando os itens de elite obtêm níveis de encantamento que ultrapassam os limites da vanilla.
# Exemplo: se uma espada de elite deveria ter nitidez 10, visto que o limite do Minecraft é o nível 5, terá nitidez 5 e nitidez de elite 5.
# A nitidez de elite só afeta os mobs gerados pelo EliteMobs. Isto é feito para que o PVP e o combate vanilla não fiquem desequilibrados.
useEliteEnchantments: true
# Define o nome para exibir que será utilizado para os encantamentos de elite na descrição do item.
eliteEnchantmentLoreStrings: Elite
# Define se o EliteMobs verá as enxadas como armas válidas para os cálculos de dano.
useHoesAsWeapons: false
# Define se o EliteMobs irá gerar partículas especiais sobre itens largados de alta qualidade.
enableRareItemParticleEffects: true
# Define os símbolos que serão utilizados na descrição do item para mostrar que um efeito de poção se aplica ao acertar na entidade que é atingida.
potionEffectOnHitTargetLore: '&4⚔☠'
# Define os símbolos que serão utilizados na descrição do item para mostrar que um efeito de poção se aplica ao acertar no jogador que está a acertar.
potionEffectOnHitSelfLore: '&9⚔🛡'
# Define os símbolos que serão utilizados na descrição do item para mostrar que um efeito de poção continuará a ser reaplicado enquanto o jogador o empunhar.
potionEffectContinuousLore: '&6⟲'
# Define os caracteres prefixados aos encantamentos de elite na descrição do item.
eliteEnchantmentLoreColor: '&9◇'
# Define os caracteres prefixados aos encantamentos vanilla na descrição do item.
vanillaEnchantmentLoreColor: '&7◇'
# Define os caracteres prefixados aos encantamentos personalizados na descrição do item.
customEnchantmentColor: '&3◇'
# Define os caracteres prefixados aos efeitos de poção na descrição do item.
potionEffectLoreColor: '&5◇'
# Define o texto que aparecerá no item se o item não estiver vinculado à alma.
noSoulbindLore: '&7Não Vinculado à Alma!'
# Define se o item de elite pode ser encantado por meios vanilla. Isto não é recomendado, pois o EliteMobs tem o seu próprio sistema de encantamentos personalizados com o seu próprio equilíbrio!
preventEliteItemEnchantment: true
# Define se os itens de elite podem ser desencantados por meios vanilla.
preventEliteItemDisenchantment: true
# Define a mensagem que aparece para os jogadores quando tentam desencantar um item e isso não é permitido.
preventEliteItemDisenchantmentMessage: '&c[EliteMobs] Não é possível desencantar Itens de Elite!'
# Define se os itens de elite podem ser atualizados de diamante para netherite por meios vanilla. Não recomendado!
preventEliteItemDiamondToNetheriteUpgrade: true
# Define se os itens de elite só perderão durabilidade ao morrer.
# Este é um sistema importante para o EliteMobs, e é altamente recomendável, pois as lutas de alto nível são quase impossíveis sem ele!
eliteItemsDurabilityLossOnlyOnDeath: true
# Define o multiplicador de perda de durabilidade para itens de elite se estiver definido para perder durabilidade ao morrer.
# Os valores entre 0.0 e 1.0 diminuem a perda de durabilidade e os valores acima de 1.0 aumentam-na.
# Exemplo: 0.5 causa 50% da perda de durabilidade, 2.0 causa 200% da perda de durabilidade.
eliteItemsDurabilityLossMultiplier: 1.0
# Define a mensagem que aparece quando a sucata de item é bem-sucedida.
scrapSucceededMessageV2: '&8[EliteMobs] &2A sucata foi bem-sucedida $amount vezes!'
# Define a mensagem que aparece quando a sucata de item falha.
scrapFailedMessageV2: '&8[EliteMobs] &cA sucata falhou $amount vezes!'
# Define se o loot de elite deve ser colocado diretamente nos inventários dos jogadores.
putLootDirectlyIntoPlayerInventory: false
# Define a diferença máxima de nível que os jogadores podem ter antes de não poderem mais saquear itens de nível muito baixo.
# Isto é calculado com base no nível médio do loot que o jogador está a usar.
# Por exemplo, se estiver definido como 10 e um jogador tiver equipamento de nível 50, não conseguirá farmar bosses de nível 39.
lootLevelDifferenceLockout: 10
# Define se o EliteMobs impedirá que os Itens de Elite se quebrem ao usar o sistema de perda de durabilidade ao morrer.
# Os jogadores não conseguirão usar itens sem durabilidade restante de qualquer maneira, isto é simplesmente para evitar a perda acidental de itens de alto nível, mas baixa durabilidade.
preventEliteItemsFromBreaking: true
# Define o nível mínimo, +7, de bosses que podem, processualmente, gerar loot de equipamento de diamante no EliteMobs.
# Não há equipamento de netherite gerado processualmente no EliteMobs, apenas loot personalizado.
minimumProcedurallyGeneratedDiamondLootLevelPlusSeven: 10
# Define a mensagem mostrada no chat quando rolar com sucesso para loot através do comando /em simloot <nível> <vezes>.
simlootMessageSuccess: '&8[EliteMobs] &2Rolou para loot e recebeu $itemName &2!'
# Define a mensagem mostrada no chat quando falhar ao rolar para loot através do comando /em simloot <nível> <vezes>.
simlootMessageFailure: '&8[EliteMobs] &cRolou para loot e não recebeu nada!'
# Define a mensagem que os jogadores recebem quando o loot de elite é depositado diretamente nos seus inventários.
directDropCustomLootMessage: '&8[EliteMobs] &2Recebeu $itemName &2!'
# Define a mensagem que os jogadores recebem quando o loot vanilla é depositado diretamente nos seus inventários.
directDropMinecraftLootMessage: '&8[EliteMobs] &aRecebeu $itemName &a!'
# Define a mensagem que os jogadores recebem quando as moedas de elite são depositadas diretamente nos seus inventários.
directDropCoinMessage: '&8[EliteMobs] &aRecebeu &2$amount $currencyName &a!'
# Define se o EliteMobs ocultará os atributos da vanilla do Minecraft.
hideItemAttributes: true
# Define a entrada de descrição específica da arma num item de elite. O espaço reservado $EDPS é substituído pelo DPS de elite (dano por segundo) da arma.
weaponEntry: '&7Elite DPS: &2$EDPS'
# Define a entrada de descrição específica da armadura num item de elite. O espaço reservado $EDEF é substituído pela DEF de elite (defesa) da arma.
armorEntry: '&7Armadura de Elite: &2$EDEF'
# Define a mensagem enviada quando um jogador mata um boss, mas o nível do equipamento é muito diferente do nível do boss para obter moedas.
levelRangeTooDifferent: '&8EM] &4O seu equipamento é de nível $playerLevel e o boss é de nível
  $bossLevel, a diferença de nível é muito alta para obter moedas!'
```

</details>

---

## MobCombatSettings.yml

`MobCombatSettings.yml` contém todas as opções de configuração relacionadas com o sistema de combate personalizado e a maioria das opções de configuração geralmente relacionadas com o funcionamento do Elite Mobs.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define se as elites geradas naturalmente irão spawnar. Nota: mobs de evento como o rei zombi não são elites geradas naturalmente! Terá de desativar eventos se quiser desativar bosses de evento.
doNaturalEliteMobSpawning: true
# Define se os spawns gerados a partir de geradores de mob podem ser convertidos em elites. Não recomendado!
doSpawnersSpawnEliteMobs: false
# Define a percentagem de mobs gerados naturalmente que são convertidos em mobs de elite.
eliteMobsSpawnPercentage: 0.05
# Define o alcance do super mob para verificar o empilhamento de super mobs.
superMobStackRange: 15
# Define o nível máximo em que as elites podem spawnar.
# Nota: o nível de mob de elite é baseado na armadura e nas armas que os jogadores estão a usar, e a armadura só aumenta até ao nível 200.
naturalEliteMobsLevelCap: 250
# Define se as elites usarão armadura com base no seu nível. Isto é apenas para fins visuais e não afeta o combate.
doElitesWearArmor: true
# Define se as elites usarão capacetes com base no seu nível. Isto irá impedi-las de se queimarem facilmente durante o dia.
doElitesWearHelmets: true
# Define se as elites terão rastros visuais à sua volta avisando os jogadores sobre quais os jogadores que têm.
doNaturalEliteMobVisualEffects: true
# Define se as elites geradas a partir de geradores produzirão efeitos visuais.
doSpawnerEliteMobVisualEffects: false
# Define se alguns poderes farão a fase de aviso do poder. Isto é muito importante, pois as fases de aviso geralmente significam que o poder pode ser esquivado, e o visual permite que os jogadores saibam para onde se esquivar.
doPowerBuildupVisualEffects: true
# Define se as mensagens de morte personalizadas serão utilizadas quando os jogadores morrerem de elites.
doCustomEliteMobsDeathMessages: true
# Define se o EliteMobs mostrará indicadores de vida para as elites.
doDisplayMobHealthOnHit: true
# Define se o EliteMobs mostrará indicadores de dano por dano causado às elites.
doDisplayMobDamageOnHit: true
# Define se o nível das elites aumentará com base na distância do spawn.
# Este é um valor adicionado ao seu nível normal, o que significa que se um jogador estiver a usar equipamento de nível 100 perto do spawn e o boss tiver +1 nível devido à distância do spawn, o boss irá spawnar no nível 101.
# Esta opção geralmente não é recomendada, especialmente se tiver um sistema tp aleatório no seu servidor.
doIncreaseEliteMobLevelBasedOnSpawnDistance: false
# Define a distância entre os incrementos de nível para aumentos de nível baseados na distância.
distanceBetweenIncrements: 100.0
# Define quantos níveis aumentam a cada incremento de distância para aumentos de nível baseados na distância.
levelIncreaseAtIncrements: 1.0
# Define se os poderes das elites serão ocultados até entrarem em combate. Isto é recomendado por razões de desempenho.
hideEliteMobPowersUntilAggro: true
# Define o multiplicador para o dano causado a todos os bosses gerados pelo EliteMobs, exceto aqueles que usam o sistema de dano normalizado (bosses de masmorra regionais). Valores mais altos aumentam o dano causado, tornando os bosses mais fáceis de matar.
# 2.0 = 200%, 0.5 = 50%
damageToEliteMobMultiplierV2: 1.0
# Define o multiplicador para o dano causado aos jogadores por elites. Valores mais altos aumentam a quantidade de dano causado pelos bosses, exceto aqueles que usam o sistema de dano normalizado (bosses de masmorra regionais), tornando os bosses mais fortes.
# 2.0 = 200%, 0.5 = 50%
damageToPlayerMultiplierV2: 1.0
# Define se os bosses especiais podem ser rastreados.
showCustomBossLocation: true
# Define a mensagem enviada aos jogadores para rastrear a localização de um boss.
bossLocationMessage: '&7[EM] &2[Clique para rastrear!]'
# Define os comandos que são executados quando uma elite morre. Os espaços reservados válidos são:
# $level para o nível do boss
# $name para o nome do boss
# $players fará com que o comando seja executado para cada jogador que participou na morte. Por exemplo, se o Bob e o Steve mataram um boss, 'broadcast $players killed the boss!' executará 'bob killed the boss' e 'steve killed the boss!'
commandsOnEliteMobDeath: []


```

</details>

---



# Define a mensagem enviada aos jogadores que participam em mortes de grandes bosses.
bossKillParticipationMessage: '&eSeu dano: &2$playerDamage'
# Define se os bosses regeneram a vida quando saem do combate. Altamente recomendado.
regenerateCustomBossHealthOnCombatEnd: true
# Define a mensagem enviada aos jogadores que estão a tentar rastrear bosses atualmente num mundo diferente.
defaultOtherWorldBossLocationMessage: '$name: Em mundo diferente!'
# Define o prefixo adicionado aos indicadores de dano quando os jogadores acertam num boss com algo contra o qual o boss é fraco.
weakTextColor: '&9'
# Define o prefixo adicionado aos indicadores de dano quando os jogadores acertam num boss com algo contra o qual o boss é forte.
resistTextColor: '&c'
# Define a mensagem que aparece quando os jogadores acertam no boss com algo contra o qual o boss é fraco.
weakText: '&9&lFraco!'
# Define a mensagem que aparece quando os jogadores acertam no boss com algo contra o qual o boss é forte.
resistText: '&c&lResiste!'
# Define se os visuais serão usados para mostrar que um boss é fraco contra um ataque.
doWeakEffect: true
# Define se os visuais serão usados para mostrar que um boss é forte contra um ataque.
doResistEffect: true
# Define o multiplicador para o dano causado aos bosses usando o sistema de dano normalizado (bosses de masmorra regionais). Valores mais altos aumentam o dano causado, tornando os bosses mais fáceis de matar.
# 2.0 = 200%, 0.5 = 50%
damageToEliteMobMultiplier: 1.0
# Define o multiplicador para o dano causado aos jogadores por bosses usando o sistema de dano normalizado (bosses de masmorra regionais). Valores mais altos aumentam a quantidade de dano causado pelos bosses, tornando os bosses mais fortes.
# 2.0 = 200%, 0.5 = 50%
damageToPlayerMultiplier: 1.0
# Define o dano base para bosses personalizados usando o dano normalizado (geralmente bosses regionais).
normalizedRegionalBossBaselineDamageV2: 3.0
# Define a vida base para bosses personalizados usando a vida normalizada (geralmente bosses regionais).
normalizedRegionalBossBaselineHealthV3: 4.0
# Define se os bosses regionais usarão o sistema de combate normalizado.
# Isto é altamente recomendável, e o conteúdo pré-fabricado não será equilibrado corretamente se for modificado.
normalizeRegionalBosses: true
# Define a mensagem que aparece quando um boss cura ao sair do combate.
fullHealMessage: '&2CURA COMPLETA!'
# Define os multiplicadores aplicados aos ataques contra os quais os bosses são fortes e fracos.
strengthAndWeaknessDamageMultipliers: 2.0
# Define o multiplicador aplicado à redução de dano do efeito de poção de resistência para os jogadores.
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
  leggings: Perneiras
  boots: Botas
  shears: Tesouras
  fishingRod: Cana de Pesca
  shield: Escudo
  trident: Tridente
  crossbow: Besta
nameFormats:
- $verb $itemType of the $adjective $noun
- $itemType of the $adjective $noun
- $noun's $adjective $verb $itemType
- $verb $itemType
- $adjective $verb $itemType
- The $verb-er
- The $adjective $verb-er
nouns:
- MagmaGuy
- Dawn
...
adjectives:
- Adorable
- Beautiful
...
verbs:
- Slashing
- Cutting
...
verb-ers (noun):
- World Breaker
- World Shatterer
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

`ValidWorlds.yml` contém a lista de mundos que o EliteMobs detetou, bem como opções para personalizar as funcionalidades do EliteMobs neles.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define a lista de mundos baseados em zonas.
# O MODO DE JOGO BASEADO EM ZONAS ESTÁ DESATUALIZADO E SERÁ REMOVIDO EM BREVE!
zoneBasedWorlds: []
# Define a lista de mundos em modo pesadelo.
# Os mundos em modo pesadelo são um modo de jogo onde os dias são mais curtos e os jogadores não podem dormir.
# Os mundos pesadelo também têm maiores quantidades de spawns de elite.
# https://github.com/MagmaGuy/EliteMobs/wiki/%5BGame-Mode%5D-Nightmare-mode
nightmareWorlds: []
Mundos Válidos:
  world: true
  world_nether: true
  world_the_end: true
```

</details>

---

## Arenas.yml

`Arenas.yml` contém as mensagens e configurações padrão para Arenas que pode modificar.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Mensagem que aparece quando não há jogadores suficientes presentes para iniciar uma arena.
notEnoughPlayersMessage: '&8[EliteMobs] &cVocê precisa de pelo menos $amount para iniciar a partida!'
# Título que aparece quando uma arena está a começar.
startingMessage: '&2A começar!'
# Legenda que aparece quando uma arena está a começar.
startingSubtitle: '&2em $count...'
# Mensagem que aparece quando uma arena está cheia.
arenaFullMessage: '&4[EliteMobs] &cA Arena está cheia! Pode assistir em vez de
  esperar que termine!'
# Mensagem que aparece quando um jogador tenta entrar numa arena ativa.
arenasOngoingMessage: '&4[EliteMobs] &cNão é possível entrar na arena agora - uma partida está atualmente
  a decorrer! Pode assistir em vez de esperar que termine!'
# Mensagem que aparece para lembrar aos jogadores como iniciar uma arena após entrarem como jogador.
instanceStartHintMessage: '&2[EliteMobs] &aPode iniciar a instância fazendo &2/em
  start'
# Mensagem que aparece para lembrar aos jogadores como sair de uma arena.
instanceQuitHintMessage: '&4[EliteMobs] &cPode sair da instância fazendo &4/em
  quit'
# Mensagem que aparece quando os jogadores entram numa arena.
arenaJoinPlayerMessage: "&2[EliteMobs] &aPode iniciar a arena fazendo &2/em start\
  \ &ase houver pelo menos &2$count &ajogadores nela! \nPode sair da arena fazendo
  &c/em quit"
# Mensagem que aparece para lembrar aos jogadores como sair de uma arena após entrarem como espectador.
arenaJoinSpectatorMessage: '&2[EliteMobs] &aPode sair da arena a qualquer momento usando
  &2/em quit'
# Mensagem de título que aparece quando uma onda está a começar.
waveTitle: '&aOnda &2$wave'
# Mensagem de legenda que aparece quando uma onda está a começar.
waveSubtitle: ''
# Título que aparece quando uma arena é concluída.
victoryTitle: '&2Vitória!'
# Legenda que aparece quando uma arena é concluída.
victorySubtitle: '&aCompletadas &2$wave &aondas!'
# Título que aparece quando os jogadores falham numa arena.
defeatTitle: '&4Derrota!'
# Legenda que aparece quando os jogadores falham numa arena.
defeatSubtitle: '&cAlcançou a onda &4$wave&c!'
# Mensagem transmitida quando os jogadores vencem uma arena.
victoryBroadcast: A Arena $arenaName foi conquistada por $players!
# Título que aparece quando um jogador entra numa arena.
joinPlayerTitle: '&aComece com &2/em start &a!'
# Legenda que aparece quando um jogador entra numa arena.
joinPlayerSubtitle: '&cSaia com &4/em quit &c!'
# Título que aparece quando um espectador entra numa arena.
joinSpectatorTitle: '&aA assistir!'
# Legenda que aparece quando um espectador entra numa arena.
joinSpectatorSubtitle: '&cSaia com &4/em quit &c!'
# Define a mensagem enviada aos jogadores se eles não tiverem permissão para entrar numa arena.
noArenaPermissionMessage: '[EliteMobs] Você não tem permissão para entrar nesta
  arena!'
```

</details>

---

## Database.yml

`Database.yml` Inclui configurações de como pretende que o EM lide com bases de dados.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define se o MySQL será usado. Por padrão, o EliteMobs usa SQLite. Se desejar usar MySQL, precisará de uma configuração de MySQL válida.
useMySQL: false
# O host da sua base de dados MySQL
mysqlHost: localhost
# A porta da sua base de dados MySQL
mysqlPort: '3306'
# O nome da base de dados
mysqlDatabaseName: elitemobs
# O nome de utilizador para MySQl
mysqlUsername: seu_nome_de_utilizador_mysql_aqui
# A palavra-passe para a sua base de dados MysSQL
mysqlPassword: sua_palavra-passe_mysql_aqui
# Se deve usar SSL
useSSL: true
```

</details>

---

## dungeons.yml

`dungeons.yml` Inclui configurações que permitem ajustar as mensagens que aparecem nas masmorras e outras configurações como multiplicadores de dano para efeitos aplicados.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define o multiplicador de dano para dano de veneno em masmorras
# Isto é importante para o equilíbrio, pois por padrão o dano é um pouco alto demais para as masmorras como as projetamos
poisonDamageMultiplier: 0.5
# Define o multiplicador de dano para dano de fogo em masmorras
# Isto é importante para o equilíbrio, pois por padrão o dano é um pouco alto demais para as masmorras como as projetamos
fireDamageMultiplier: 0.5
# Define o multiplicador de dano para dano de murchar em masmorras
# Isto é importante para o equilíbrio, pois por padrão o dano é um pouco alto demais para as masmorras como as projetamos
witherDamageMultiplier: 0.5
# Define se o PvP será permitido em masmorras
friendlyFireInDungeons: false
# Define o texto que aparece sobre banners de ressurreição em masmorras
dungeonRezInstructions: '&aSoque para reviver!'
# Define o texto que mostra quantas vidas os jogadores têm restantes numa masmorra! Espaços reservados:
# $amount - a quantidade de vidas restantes
dungeonLivesLeftText: '&c$amount vidas restantes!'
# Define o texto para entrar numa masmorra como jogador! Espaços reservados:
# $dungeonName - o nome da masmorra
joinDungeonAsPlayerText: '&fEntre na $dungeonName como jogador!'
# Define o texto para entrar numa masmorra como espectador! Espaços reservados:
# $dungeonName - o nome da masmorra
joinDungeonAsSpectatorText: '&fEntre na $dungeonName como espectador!'
# Define o título que aparecerá na descrição do item dos menus de masmorra instanciada
# $difficulty é o espaço reservado para o nome da dificuldade no arquivo de configuração da masmorra
instancedDungeonTitle: Iniciar masmorra de dificuldade $difficulty!
# Define a descrição que aparecerá na descrição do item dos menus de masmorra instanciada
# $dungeonName é o espaço reservado para o nome da masmorra no arquivo de configuração da masmorra
instancedDungeonDescription:
- '&fCrie uma nova instância da masmorra'
- $dungeonName &fpara si e talvez
- '&falguns amigos!'
# Define se o conteúdo instanciado de espetar estará disponível.
allowSpectatorsInInstancedContent: true
# Define a mensagem que aparece quando uma masmorra instanciada é concluída
instancedDungeonCompleteMessage: '[EliteMobs] Masmorra concluída! Ela se autodestruirá
  em 2 minutos!'
# Define a mensagem que aparece quando uma masmorra instanciada está a fechar
instancedDungeonClosingInstanceMessage: '[EliteMobs] A fechar a instância!'
```

</details>

---

## Quests.yml

`Quests.yml` Inclui configurações para missões e quais as mensagens que são exibidas.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define se as missões têm de ser devolvidas aos doadores de missões para completar a missão.
requireQuestTurnIn: true
# Define a mensagem enviada quando uma missão é aceite.
questJoinMessage: '&aVocê aceitou a missão $questName &a!'
# Define a mensagem enviada quando uma missão é abandonada.
questLeaveMessage: '&cVocê abandonou a missão $questName &c!'
# Define a mensagem enviada quando uma missão é concluída.
questCompleteMessage: '&2Você concluiu a missão $questName &2!'
# Define a mensagem enviada quando um jogador tentou abandonar uma missão quando nenhuma está ativa.
leaveWhenNoActiveQuestsExist: '&cVocê não tem nenhuma missão ativa de momento!'
# Define a mensagem de confirmação enviada quando os jogadores tentam sair de uma missão.
questLeaveConfirmationMessage: '&cTem a certeza de que pretende abandonar a sua missão atual?
  Faça &a/em confirm &c para confirmar a sua escolha!'
# Define se algumas das mensagens relacionadas com as missões usarão títulos em vez de mensagens de chat.
useQuestAcceptTitles: true
# Define o título enviado quando um jogador inicia uma missão.
questStartTitle: '&aMissão Aceite!'
# Define a legenda enviada quando um jogador inicia uma missão.
questStartSubtitle: $questName
# Define se os títulos serão enviados quando os jogadores concluírem uma missão.
useQuestCompleteTitles: true
# Define o título enviado quando um jogador conclui uma missão.
questCompleteTitle: '&2Missão Concluída!'
# Define a legenda enviada quando um jogador conclui uma missão.
questCompleteSubtitle: $questName
# Define se os títulos são enviados quando os jogadores saem das missões.
useQuestLeaveTitles: true
# Define o título enviado quando um jogador sai de uma missão.
questLeaveTitle: '&cMissão Abandonada!'
# Define a legenda enviada quando um jogador sai de uma missão.
questLeaveSubtitle: $questName
# Define se as mensagens são enviadas no chat a relatar a progressão do objetivo da missão.
doQuestChatProgression: true
# Define os códigos de cor para os objetivos concluídos.
ongoingQuestColorCode: '&2'
# Define a formatação para mensagens de progressão de missões de matar.
killQuestChatProgressionMessage: '&8[EliteMobs]&c➤Matar $name:$color$current&0/$color$target'
# Define a formatação para mensagens de progressão de missões de buscar.
fetchQuestChatProgressionMessage: '&8[EliteMobs]&c➤Obter $name:$color$current&0/$color$target'
# Define a formatação para mensagens de progressão de missões de diálogo.
dialogQuestChatProgressionMessage: '&8[EliteMobs]&c➤Falar com $name:$color$current&0/$color$target'
# Define a quantidade máxima de missões aceites que um jogador pode ter.
maximumActiveQuests: 10
# Define a mensagem enviada aos jogadores ao tentar aceitar uma quantidade de missões que excede o limite de missões ativas.
questCapMessage: '&8[EliteMobs] &cVocê atingiu o número máximo de missões ativas
  (10)! &4Abandone ou conclua pelo menos uma missão ativa se quiser obter mais missões!'
# Define se as mensagens dos placares serão usadas para missões.
useQuestScoreboards: true
# Define a formatação para mensagens de progressão do placar de missões de matar.
killQuestScoreboardProgressionMessage: '&c➤Matar $name:$color$current&0/$color$target'
# Define a formatação para a mensagem de progressão do placar de missões de buscar.
fetchQuestScoreboardProgressionMessage: '&c➤Obter $name:$color$current&0/$color$target'
# Define a formatação para mensagens de progressão do placar de missões de diálogo.
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
# Define a mensagem flutuante da mensagem de rastreamento de missão.
chatTrackHover: '&2Clique para rastrear!'
# Define o comando enviado ao clicar na mensagem de rastreamento. Você realmente não deve modificar isto.
chatTrackCommand: /elitemobs quest track $questID
# Define a mensagem enviada aos jogadores ao ativar o rastreamento de missões.
chatTrackingMessage: '&8[EliteMobs]&9 Agora está a rastrear uma missão!'
# Define a mensagem flutuante da mensagem de rastreamento de missão ativada.
chatTrackingHover: '&2Clique para desativar/ativar o rastreamento! /em -> Missões para rastrear uma missão diferente!'
# Define o comando enviado ao clicar na mensagem de ativação do rastreamento de missões. Você realmente não deve modificar isto.
chatTrackingCommand: /elitemobs quest track $questID
# Define se as missões são rastreadas automaticamente quando aceites.
autoTrackQuestsOnAccept: true
# Define a mensagem que aparece quando o destino da missão não foi encontrado.
noQuestDestinationFound: '[EM] Nenhum destino de missão encontrado!'
# Define a mensagem que aparece quando o alvo da missão está num mundo diferente.
questDestinationInOtherWorld: '[EM] Vá para o mundo $world!'
# Define a mensagem enviada aos jogadores ao tentar aceitar uma missão que já concluíram.
questAlreadyCompletedMessage: '&8[EliteMobs] &cVocê já concluiu esta missão!'
# Define a mensagem enviada aos jogadores ao tentar aceitar uma missão para a qual não têm permissão.
questPrerequisitesMissingMessage: '&8[EliteMobs] &cEste NPC tem algumas missões que você
  ainda não pode aceitar!'
# Define a mensagem enviada aos jogadores que tentam obter uma missão para a qual não têm a classificação de guilda correta ativada.
lowRankDynamicQuestWarning: '&8[EliteMobs] &cVocê não pode aceitar estas missões com a sua
  classificação de guilda atual! Aumente a sua classificação de guilda para aceitar estas missões.'
# Define a formatação para a mensagem de entrega de missão.
questTurnInObjective: '&a2Fale com $npcName'
# Define a quantidade máxima de caracteres que os menus baseados em inventário para missões terão antes de quebrar a linha.
horizontalCharacterLimitBedrockMenu: 30
# Define a quantidade máxima de caracteres por entrada de item nos menus baseados em inventário para missões antes de criar outro item para continuar a entrada.
itemEntryCharacterLimitBedrockMenu: 300
```

</details>

---

## resource_pack_config.yml

`resource_pack_config.yml` Inclui configurações relacionadas com o pacote de recursos do EliteMobs.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
eliteMobsResourcePackEnabled: false
forceResourcePack: false
resourcePackPrompt: '[EliteMobs] O uso do pacote de recursos é altamente recomendável!'
resourcePackLink: https://www.magmaguy.com/downloads/elitemobs_resource_pack.zip
```

</details>

---

## Sounds.yml

`Sounds.yml` Inclui configurações que definem quais os sons que devem ser reproduzidos quando certas interações do EliteMobs são realizadas. Os arquivos de som são armazenados no pacote de recursos.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define o som que será reproduzido quando um baú do tesouro for aberto
treasureChestOpenSound: elitemobs:treasure_chest.open
# Define o som que será reproduzido quando um jogador subir de nível na guilda
guildRankUpSound: elitemobs:guild.rankup
# Define o som que será reproduzido quando um jogador obtiver prestígio na guilda
guildPrestigeSound: elitemobs:guild.prestige
# Define o som que será reproduzido quando um jogador progredir numa missão
questProgressionSound: elitemobs:quest.progression
# Define o som que será reproduzido quando um jogador concluir uma missão
questCompleteSound: elitemobs:quest.completion
# Define o som que será reproduzido quando um jogador abandonar uma missão
questAbandonSound: elitemobs:quest.abandon
# Define o som que será reproduzido quando um jogador aceitar uma missão
questAcceptSound: elitemobs:quest.accept
```

</details>

---

## Wormholes.yml

`Wormholes.yml` Inclui configurações para os teletransportes de buraco de minhoca do EliteMobs.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define a mensagem que aparece quando um teletransporte é usado para uma masmorra que não está instalada.
dungeonNotInstalledMessage: '&8[EliteMobs] &cA Masmorra $dungeonID &cnão está instalada!
  Este teletransporte não funcionará.'
# Define a mensagem que aparece quando um buraco de minhoca é usado para uma masmorra que não está instalada.
defaultPortalMissingMessage: '&8[EliteMobs] &cEste portal não parece levar a lado nenhum!'
# Define se o modo de partículas reduzidas para buracos de minhoca é usado. Isto é especialmente recomendado se estiver a permitir clientes Bedrock.
reducedParticlesMode: true
# Define se os buracos de minhoca não usam partículas. Não recomendado, mas pode ser necessário para clientes Bedrock realmente maus.
noParticlesMode: false
# Define a mensagem que é enviada quando um jogador tenta usar um buraco de minhoca, mas não tem moeda suficiente para usá-lo.
insufficientCurrencyForWormholeMessage: '&8[EliteMobs] &cMoeda insuficiente! Você
  precisa de $amount para usar este buraco de minhoca!'
```

</details>





