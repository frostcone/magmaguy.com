# Configurações Padrão do EliteMobs

**O EliteMobs vem com as configurações padrão recomendadas instaladas por padrão. Se alterar as coisas aleatoriamente, é
provável que a experiência geral piore.**

_**O EliteMobs é fornecido a todos os utilizadores com as configurações padrão recomendadas. Se alterar as coisas
aleatoriamente e, em seguida, solicitar suporte, há uma grande probabilidade de que lhe seja dito para redefinir os seus
arquivos de configuração. As modificações no plugin devem ser resultado de testes de jogo e não apenas de palpites.**_

## Primeiros passos

O EliteMobs oferece atualmente uma vasta gama de opções de configuração devido à grande procura por personalização. Para manter esta página wiki concisa, apenas as configurações padrão serão exibidas.

Se desejar saber mais sobre uma configuração específica, pode consultar o arquivo de configuração e analisar os
comentários.

---

## config.yml

O `config.yml` contém principalmente configurações aleatórias que não se encaixavam confortavelmente em outro lugar no
momento da criação. É o arquivo de configuração com maior probabilidade de ver alterações entre as versões.

<div align="left">

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define o arquivo de idioma usado pelo EliteMobs
# NÃO altere isso manualmente! Ele deve ser instalado com o comando '/em language <arquivo de idioma>'
language: english
# Define se os elites e bosses gerados por elitemobs sempre mostrarão os seus nomes.
# Não recomendado!
alwaysShowEliteMobNameTags: false
# Define a quantidade de mobs passivos que precisam estar próximos antes de poderem ser agrupados.
# Não defina isso como 0!
superMobStackAmount: 50
# Faz com que os elites não causem dano a mobs passivos com explosões.
preventEliteCreeperDamageToPassiveMobs: true
# Define se o EliteMobs usará títulos para avisar os jogadores sobre permissões ausentes.
useTitlesForMissingPermissionMessages: true
# Define se o EliteMobs impedirá a conversão de mobs nomeados em elites.
# Especialmente importante para compatibilidade com outros plugins.
preventEliteMobConversionOfNamedMobs: true
# Define se o EliteMobs converterá mobs com motivos de geração personalizados.
# A execução de certos plugins de boss definirá automaticamente isso como true, não importa qual seja o valor na configuração.
enableHighCompatibilityMode: false
# Define o bônus de geração de elite para o modo de jogo pesadelo
nightmareWorldSpawnBonus: 0.5
# Define se o comando centralizado /em abre a página de status principal do plugin.
# Altamente recomendado!
emLeadsToStatusMenu: true
# Define se a execução de comandos específicos como /em wallet levará ao menu /em onde essas informações estão centralizadas.
otherCommandsLeadToEMStatusMenu: true
# Define se a configuração está concluída.
# Não defina este valor manualmente, ele deve ser modificado através de comandos no jogo.
setupDoneV3: true
# Define se os elites impedirão a geração de reforços vanilla, como para o recurso de reforço de zumbi.
preventVanillaReinforcementsForEliteEntities: true
# Define a localização de geração padrão do servidor para EliteMobs. /em spawntp levará a esta localização.
defaultSpawnLocation: world,16.0,76.0,80.0,0.0,0.0
# Define se o EliteMobs regenerará blocos destruídos por elites.
doExplosionRegen: true
# Define se a regeneração da explosão também regenerará o conteúdo de recipientes, como baús.
# Definir como false fará com que as explosões de elite não destruam recipientes.
doRegenerateContainers: true
defaultTransitiveBlockLimiter: 500
# Define se o menu /em usará apenas o estilo de menu baseado em inventário, que é compatível com bedrock.
# Como um lembrete, os jogadores podem fazer o comando /em alt para alternar entre os estilos de menu /em
onlyUseBedrockMenus: false
# Define o limite de caracteres por linha para páginas de menu de livro.
# Diminua esta quantidade se o texto estiver sendo cortado em menus de livro, como para missões
characterLimitForBookMenuPagesV2: 170
# Define se o espaço vazio do menu será preenchido com painéis de vidro.
# Não recomendado se estiver a usar o pacote de recursos EliteMobs.
useGlassToFillMenuEmptySpace: false
# Define se o unicode será usado para formatar o pacote de recursos EliteMobs.
# Não defina isso manualmente, ele é definido automaticamente após a instalação do pacote de recursos.
# Defina apenas manualmente se teve de mesclar o pacote de recursos EliteMobs e espere que o espaçamento pode não funcionar se o fizer.
menuUnicodeFormatting: false
# Define a mensagem enviada aos jogadores se eles executarem '/em confirm' sem nenhum comando pendente.
noPendingCommands: '&cVocê não tem nenhum comando pendente no momento!'
# Define a mensagem de rastreamento para bosses que enviam mensagens de rastreamento.
trackMessage: Rastrear o $name
# Define a mensagem enviada aos jogadores que abrem baús de tesouro com requisitos de nível acima da classificação da sua guild.
chestLowRankMessage: '&7[EM] &cSua classificação da guild precisa ser pelo menos $rank &cpara abrir este baú!'
# Define a mensagem enviada aos jogadores que tentam reabrir um baú de tesouro que já abriram.
chestCooldownMessage: '&7[EM] &cVocê já abriu este baú recentemente! Espere $time!'
# Define a mensagem que aparece recomendando o comando /em alt para jogadores com problemas com o comando /em
dismissEMMessage: '&8[EliteMobs] &2/elitemobs &fmenu não funciona para si? Tente &2/elitemobs alt &fpara ver uma versão alternativa do menu! &cNão quer ver esta mensagem novamente? &4/em dismiss'
# Define a mensagem que aparece quando os jogadores executam o comando /em alt.
switchEMStyleMessage: '&8[EliteMobs] &2/elitemobs &fmenu estilo alterado! Confira!'
# Define a mensagem que aparece quando um jogador abre um baú de tesouro, mas não recebe nada.
treasureChestNoDropMessage: '&8[EliteMobs] &cNão ganhou nada! Mais sorte na próxima!'
# Define a mensagem que aparece quando um jogador tenta rastrear um boss que já não é válido.
bossAlreadyGoneMessage: '&c[EliteMobs] Desculpe, este boss já se foi!'
```

</details>

---

## AdventurersGuild.yml

O `AdventurersGuild.yml` contém configurações relevantes para o Hub da Guilda dos Aventureiros (o mundo) e configurações
relevantes para o sistema de subida de nível da Guilda dos Aventureiros.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define se o EliteMobs adicionará saúde máxima ao desbloquear classificações da guild como recompensa de prestígio.
Add max health when unlocking higher guild ranks: true
# Define se o EliteMobs adicionará uma chance de ataque crítico ao desbloquear classificações da guild como recompensa de prestígio.
Add critical chance when unlocking higher guild ranks: true
# Define se o EliteMobs adicionará chance de esquiva ao desbloquear classificações da guild como recompensa de prestígio.
Add dodge chance when unlocking higher guild ranks: true
# Define se os comandos do utilizador são redirecionados para o hub da Guilda dos Aventureiros. Isso é altamente recomendado para imersão no jogo e fins de tutorial.
userCommandsTeleportToAdventurersGuild: true
# Define o nome de exibição no jogo da guilda dos aventureiros
adventurersGuildMenuName: '&6&lHub do Aventureiro'
Prestige 0 rank 0: '&8Comum - desativa elites!'
Prestige 0 rank 0 short placeholder: '&6&l✧&e0'
...
# Define se o saque do jogador é limitado pelo seu nível da guild.
# Esta é uma parte incrivelmente importante do EliteMobs e extremamente recomendada.
limitLootBasedOnGuildTier: true
# Define a mensagem enviada aos jogadores se o seu saque for reduzido devido ao seu baixo nível da guild.
lootLimiterMessage: '&7[EM] &cDeve desbloquear a próxima classificação da guild através de /ag para obter itens melhores!'
# Define os comandos que são executados na subida de nível da guild. Os espaços reservados são:
# $prestigerank - gera a classificação de prestígio
# $activerank - gera a classificação atualmente ativa
# $player - gera o nome do jogador
onRankUpCommand: []
# Define os comandos que são executados na subida de nível de prestígio.
# $prestigerank - gera a classificação de prestígio
# $activerank - gera a classificação atualmente ativa
# $player - gera o nome do jogador
onPrestigeUpCommand: []
# Define o nível de prestígio para o primeiro bônus de esquiva.
dodgePrestige3Bonus: 3.0
# Define o nível de prestígio para o segundo bônus de esquiva.
dodgePrestige6Bonus: 6.0
# Define o nível de prestígio para o terceiro bônus de esquiva.
dodgePrestige9Bonus: 10.0
# Define o nível de prestígio para o primeiro bônus de acerto crítico.
critPrestige2Bonus: 3.0
# Define o nível de prestígio para o segundo bônus de acerto crítico.
critPrestige5Bonus: 6.0
# Define o nível de prestígio para o terceiro bônus de acerto crítico.
critPrestige8Bonus: 10.0
# Define o nível de prestígio para o primeiro bônus de saúde máxima.
healthPrestige1Bonus: 2.0
# Define o nível de prestígio para o segundo bônus de saúde máxima.
healthPrestige4Bonus: 2.5
# Define o nível de prestígio para o terceiro bônus de saúde máxima.
healthPrestige7Bonus: 3.0
# Define o nível de prestígio para o terceiro bônus de saúde máxima.
healthPrestige10Bonus: 4.0
# Define a quantidade base estimada de bosses que devem ser mortos para poder pagar por uma subida de nível.
baseKillsForRankUp: 100
# Define a quantidade adicional estimada de bosses que devem ser mortos para poder subir de nível, por nível.
# A fórmula é esta quantidade x o nível em que o jogador está atualmente.
additionalKillsForRankUpPerTier: 50
# Define o título enviado aos jogadores quando alguém desbloqueia uma classificação de prestígio.
# $player é um espaço reservado que é substituído pelo nome de exibição do jogador.
prestigeUnlockMessageTitle: $player
# Define a legenda enviada aos jogadores quando alguém desbloqueia uma classificação de prestígio.
# $tier é um espaço reservado que é substituído pelo nível de prestígio do jogador.
prestigeUnlockMessageSubtitle: '&2desbloqueou $tier&2!'
# Define o multiplicador que será aplicado à chance de geração quando os jogadores estiverem usando a classificação pacífica (comum).
peacefulModeEliteChanceDecrease: 0.2
# Define a lista de mundos aos quais os bônus de classificação da guild não serão aplicados
worldsWithoutAGBonuses: []
# Desativa a capacidade dos utilizadores de mudar para o modo pacífico para EliteMobs. O modo pacífico diminui o nível e as taxas de geração de mobs ao redor desse jogador especificamente
disableCommonerRank: false
```

</details>

---

## AntiExploit.yml

O `AntiExploit.yml` permite que os administradores personalizem diferentes aspetos do sistema AntiExploit. O sistema
AntiExploit existe para impedir que os jogadores usem coisas como moedores de mobs para farmar facilmente moedas e
saque, e os leva a fazer lutas reais e minidungeons em vez de clicar em afk para chegar ao topo do plugin.

Este é um sistema crítico para manter ligado se não quiser que as pessoas simplesmente farmem o plugin inteiro em afk e
queira realmente que eles interajam com minidungeons.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define a mensagem que aparece quando o antiexploit é acionado.
AntiExploit message: '&c[EM AntiExploit] &7O elite próximo não vai gerar saque especial.'
# Define se o antiexploit de quarto escuro 1 está ativado.
# Os recursos específicos de antiexploit não são documentados intencionalmente. Os operadores do servidor podem ver qual tipo de antiexploit foi acionado, mas mais informações sobre como ele funciona especificamente não são disponibilizadas.
Enable darkroom antiexploit 1: true
# Define se o antiexploit de quarto escuro 2 está ativado.
# Os recursos específicos de antiexploit não são documentados intencionalmente. Os operadores do servidor podem ver qual tipo de antiexploit foi acionado, mas mais informações sobre como ele funciona especificamente não são disponibilizadas.
Enable darkroom antiexploit 2: true
# Define se o antiexploit de quarto escuro 3 está ativado.
# Os recursos específicos de antiexploit não são documentados intencionalmente. Os operadores do servidor podem ver qual tipo de antiexploit foi acionado, mas mais informações sobre como ele funciona especificamente não são disponibilizadas.
Enable darkroom antiexploit 3: true
# Define se o antiexploit de quarto escuro grande 1 está ativado.
# Os recursos específicos de antiexploit não são documentados intencionalmente. Os operadores do servidor podem ver qual tipo de antiexploit foi acionado, mas mais informações sobre como ele funciona especificamente não são disponibilizadas.
Enable large darkroom antiexploit 1: true
# Define se o antiexploit de altura de enderman está ativado.
# Os recursos específicos de antiexploit não são documentados intencionalmente. Os operadores do servidor podem ver qual tipo de antiexploit foi acionado, mas mais informações sobre como ele funciona especificamente não são disponibilizadas.
Enable enderman height antiexploit: true
# Define se o antiexploit de montaria está ativado.
# Os recursos específicos de antiexploit não são documentados intencionalmente. Os operadores do servidor podem ver qual tipo de antiexploit foi acionado, mas mais informações sobre como ele funciona especificamente não são disponibilizadas.
Enable mount antiexploit: true
# Define se os mobs elite podem pegar itens.
preventItemPickupByMobs: true
# Define se o antiexploit de dano ambiente está ativado.
# Os recursos específicos de antiexploit não são documentados intencionalmente. Os operadores do servidor podem ver qual tipo de antiexploit foi acionado, mas mais informações sobre como ele funciona especificamente não são disponibilizadas.
Enable ambient damage antiexploit: true
# Define se o antiexploit de bloco de mel está ativado.
# Os recursos específicos de antiexploit não são documentados intencionalmente. Os operadores do servidor podem ver qual tipo de antiexploit foi acionado, mas mais informações sobre como ele funciona especificamente não são disponibilizadas.
Enable honey block antiexploit: true
# Define o limite para ativação do antiexploit. Valores mais altos o tornam mais tolerante. Modificar isso não é recomendado.
antiExploitThreshold: 10
# Define se o antiexploit de sem caminho está ativado
nPathExploit: true
```

</details>

---

## CombatTag.yml

O `CombatTag.yml` contém as configurações do sistema Combat Tag. Este sistema ainda está muito longe de estar completo,
mas tenta gerenciar o comportamento do jogador depois que eles entram em combate.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define se o combat tag está ativado.
# Quando ativado, os jogadores que estão voando e que entram em combate param de voar.
Enable combat tag: true
# Define a mensagem enviada quando o combat tag é ativado.
Combat tag message: '&c[EliteMobs] Combat tag ativado!'
# Define se o comando /ag terá um cronômetro antes do teletransporte.
Enable adventurers guild teleport timer: true
# Define a mensagem de ação definida ao esperar pelo cronômetro de teletransporte.
Teleport time left: '&7[EM] Teletransportando em &a$time &7segundos...'
# Define a mensagem enviada quando os jogadores se movem enquanto esperam pelo teletransporte.
Teleport cancelled: '&7[EM] &cTeletransporte interrompido!'
```

</details>

---

## DiscordSRV.yml

O `DiscordSRV.yml` contém as configurações para o DiscordSRV. Se quiser ver como configurar este
recurso, [clique aqui!]($language$/elitemobs/discordsrv.md)

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# A documentação pode ser encontrada aqui: https://magmaguy.com/wiki.html#lang=en&article=elitemobs+discordsrv.md
announcementRoomName: PRECISA_COLOCAR_O_NOME_DA_SALA_DO_DISCORD_ONDE_QUER_QUE_OS_ANÚNCIOS_DO_ELITEMOBS_SEJAM_TRANSMITIDOS_COMO_TEM_NO_SEU_FICHEIRO_DE_CONFIGURAÇÃO_DO_DISCORDSRV_CONSULTE_A_WIKI_DO_ELITEMOBS_PARA_OBTER_DETALHES

```

</details>

---

## EconomySettings.yml

O `EconomySettings.yml` contém as configurações para a economia do EliteMobs.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define se a economia do EliteMobs está ativada. Isso significa moedas de elite, a capacidade de comprar e vender equipamentos e a capacidade de atualizar as classificações da guild.
# Se desativado, os jogadores não poderão progredir no plugin!
enableEconomy: true
# Define o valor de revenda de itens, como uma porcentagem do preço original. 5 é 5%
itemResaleValue: 5.0
# Define o nome no jogo da moeda usada.
currencyName: Moedas Elite
# Define o plugin para usar o Vault. ISSO NÃO É RECOMENDADO! Leia o porquê aqui: https://github.com/MagmaGuy/EliteMobs/wiki/%5BThird-party-support%5D-Vault
useVault - not recommended: false
# Define se os elites gerarão moedas com base no seu nível.
enableCurrencyShower: true
# Define o multiplicador para a moeda gerada por elites.
currencyShowerTierMultiplier: 1.0
# Define a mensagem enviada quando os jogadores pegam moeda de elite.
chatCurrencyShowerMessage: '&7[EM] Você pegou &a$amount $currency_name!'
# Define a mensagem da barra de ação enviada quando os jogadores pegam moeda de elite.
actionbarCurrencyShowerMessage: '&7[EM] Você pegou &a$amount $currency_name!'
# Envia a mensagem que os jogadores recebem depois de obter moeda. Útil para fins de tutorial.
adventurersGuildNotificationMessages: '&7[EM] Dinheiro extra para gastar? Tente &a/ag !'
# Define a taxa de imposto para transações entre jogadores.
# Fortemente recomendado por motivos de equilíbrio, pois jogadores de alto nível podem ganhar até 6x mais moeda e tentar usar outros jogadores para contornar as redefinições de moeda de prestígio.
playerToPlayerPaymentTaxes: 0.2
# Mensagem enviada ao enviar moeda de elite para outros jogadores.
Economy pay message v2: '&2Você pagou &2$amount_sent $currency_name &2a $receiver&2, que recebeu $amount_received após os impostos!'
# Mensagem enviada após os jogadores enviarem moeda.
Economy currency left message: Você agora tem &2$amount_left $currency_name
# Mensagem recebida ao receber moeda.
Economy money from payment message: Você recebeu &2$amount_received $currency_name &ffrom $sender
# Mensagem enviada quando os jogadores tentam enviar uma quantidade de moedas que não possuem.
Economy payment insufficient currency: '&cVocê não tem $currency_name suficiente para fazer isso!'
# /em mensagem de saldo
Wallet command message: Você tem &2$balance $currency_name
# Mensagem de confirmação enviada quando os jogadores tentam enviar moeda para outro jogador.
Tax confirmation message: '&cEnviar um pagamento custará $percentage% em impostos. &aFaça &9$command &apara prosseguir!'
# Mensagem enviada quando um jogador compra em uma loja.
Shop buy message: '&aVocê comprou $item_name &apara $item_value $currency_name!'
# Mensagem enviada quando um jogador interage com uma loja.
Shop current balance message: '&aVocê tem $currency_amount $currency_name.'
# Mensagem enviada quando os jogadores não têm moeda suficiente para comprar um item.
Shop insufficient funds message: '&cVocê não tem $currency_name suficiente!'
# Segunda parte da mensagem enviada quando os jogadores tentam comprar um item que não podem pagar.
Shop item cost message: Esse item custa &c$item_value $currency_name.
# Mensagem enviada ao vender um item para uma loja.
Shop sell message: '&aVocê vendeu $item_name &apara $currency_amount $currency_name!'
# Mensagem enviada ao tentar vender um item que não pertence a esse jogador.
Shop sale player items warning: '&cNão pode vender itens que não estão atualmente ligados à sua alma! Isso inclui itens de outras classificações de prestígio!'
# Mensagem enviada ao tentar vender um item que não é do EliteMobs
Shop sale instructions: '&cSó pode vender saque do EliteMobs aqui! (Armadura/armas geradas por elites mostrando um valor na sua história)'
# Mensagem enviada ao vender um lote de itens elite.
shopBatchSellItem: '&aVocê vendeu os seus itens &afor $currency_amount $currency_name!'
lootShowerMaterial:
  # Define o tipo de material de 1 moeda de elite gerada.
  '1': GOLD_NUGGET
  '5': GOLD_INGOT
  '10': GOLD_BLOCK
  '20': EMERALD
  '50': EMERALD_BLOCK
  '100': DIAMOND
  '500': DIAMOND_BLOCK
  '1000': NETHER_STAR
lootShowerData:
  # Define o ID do modelo personalizado para 1 moeda de elite gerada. Usado pelo pacote de recursos.
  '1': 1
  '5': 1
  '10': 1
  '20': 1
  '50': 1
  '100': 1
  '500': 1
  '1000': 1
materialWorth:
  # Define o valor deste material para o sistema de moeda elitemobs.
  DIAMOND_AXE: 17.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  DIAMOND_BOOTS: 17.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  DIAMOND_CHESTPLATE: 17.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  DIAMOND_LEGGINGS: 17.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  DIAMOND_HELMET: 17.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  DIAMOND_PICKAXE: 17.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  DIAMOND_SHOVEL: 17.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  DIAMOND_SWORD: 17.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  DIAMOND_HOE: 17.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  IRON_AXE: 16.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  IRON_BOOTS: 16.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  IRON_LEGGINGS: 16.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  IRON_CHESTPLATE: 16.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  IRON_HELMET: 16.0
```

</details>
```yml
# Define o valor deste material para o sistema de moeda elitemobs.
  IRON_PICKAXE: 16.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  IRON_SHOVEL: 16.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  IRON_HOE: 16.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  IRON_SWORD: 16.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  SHIELD: 16.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  BOW: 16.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  CHAINMAIL_BOOTS: 15.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  CHAINMAIL_LEGGINGS: 15.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  CHAINMAIL_CHESTPLATE: 15.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  CHAINMAIL_HELMET: 15.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  STONE_SWORD: 15.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  STONE_AXE: 15.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  STONE_PICKAXE: 15.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  STONE_SHOVEL: 15.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  STONE_HOE: 15.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  GOLDEN_AXE: 13.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  GOLDEN_BOOTS: 13.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  GOLDEN_LEGGINGS: 13.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  GOLDEN_CHESTPLATE: 13.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  GOLDEN_HELMET: 13.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  GOLDEN_SWORD: 13.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  GOLDEN_SHOVEL: 13.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  GOLDEN_PICKAXE: 13.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  GOLDEN_HOE: 13.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  GOLDEN_APPLE: 17.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  ENCHANTED_GOLDEN_APPLE: 17.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  LEATHER_BOOTS: 13.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  LEATHER_LEGGINGS: 13.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  LEATHER_CHESTPLATE: 13.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  LEATHER_HELMET: 13.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  WOODEN_SWORD: 13.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  WOODEN_AXE: 13.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  WOODEN_HOE: 13.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  WOODEN_PICKAXE: 13.0
    # Define o valor deste material para o sistema de moeda elitemobs.
  TRIDENT: 17.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  ELYTRA: 17.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  TURTLE_HELMET: 13.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  NETHERITE_AXE: 18.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  NETHERITE_PICKAXE: 18.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  NETHERITE_SHOVEL: 18.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  NETHERITE_HOE: 18.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  NETHERITE_SWORD: 18.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  NETHERITE_HELMET: 18.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  NETHERITE_CHESTPLATE: 18.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  NETHERITE_LEGGINGS: 18.0
  # Define o valor deste material para o sistema de moeda elitemobs.
  NETHERITE_BOOTS: 18.0
  # Define o valor padrão do material para itens não definidos especificamente.
  defaultMaterialWorth: 1.0
```

</details>

---

## events.yml

O `events.yml` contém as opções de configuração para eventos.

_**Nota: estas são apenas as configurações globais muito básicas.**_

Pode modificar ainda mais eventos específicos na pasta `events`.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define se os eventos serão transmitidos apenas no mundo em que os eventos acontecem.
Only broadcast event message in event worlds: false
# Define o tempo mínimo de espera, em minutos, entre eventos cronometrados
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

O `ItemSettings.yml` contém as configurações globais para itens Elite.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define os caracteres prefixados a encantamentos vanilla no lore do item.
noItemDurabilityMessage: '&8[EliteMobs] $item &4está quebrado! Não funcionará até ser reparado!'
# Define se algum saque do EliteMobs será gerado.
# Inclui Moedas de Elite, Itens Personalizados, Itens Gerados por Procedimento - tudo!
# Não recomendado, torna a progressão do mmorpg impossível.
doEliteMobsLoot: true
# Define se o saque gerado por procedimento terá cores diferentes com base na qualidade do item.
doMMORPGColorsForItems: true
# Define se a colocação de itens personalizados, como banners ou blocos, é evitada.
# Isso é recomendado - itens personalizados quebram quando são colocados e não podem ser recuperados!
preventCustomItemPlacement: true
# Define o formato para o lore de todos os itens EliteMobs personalizados!
# Os seguintes são espaços reservados válidos:
# $itemLevel - mostra o nível do item
# $prestigeLevel - mostra o nível de prestígio
# $weaponOrArmorStats - mostra as estatísticas de DPS de elite ou armadura de elite, dependendo do item
# $soulbindInfo - mostra a quem, se houver, o item está ligado à alma
# $itemSource - mostra de onde veio o item, como um mob ou uma loja
# $ifLore - faz com que uma linha apareça apenas se o item tiver lore personalizado. Aplica-se apenas a itens personalizados
# $customLore - mostra toda a lore personalizada. Aplica-se apenas a itens personalizados
# $ifEnchantments - faz com que uma linha apareça apenas se o item tiver algum encantamento
# $enchantments - mostra os encantamentos no item
# $eliteEnchantments - mostra os encantamentos de elite no item
# $ifCustomEnchantments - mostra os encantamentos personalizados no item
# $customEnchantments - mostra os encantamentos personalizados no item
# $ifPotionEffects - mostra apenas a linha se o item tiver efeitos de poção
# $potionEffects - mostra os efeitos de poção no item
# $loreResaleValue - mostra o valor do item. Pode mostrar o preço de compra ou venda dependendo de onde é visualizado
# Importante: vários dos espaços reservados podem ser ainda mais personalizados pelas configurações abaixo
itemLoreStructureV2:
- §7§m§l---------§7<§lInformação do Equipamento§7>§m§l---------
- '§7Nível do item: §f$itemLevel §7Prestígio §6$prestigeLevel'
- $weaponOrArmorStats
- $soulbindInfo
- $itemSource
- $ifLore§7§m§l-----------§7< §f§lLore§7 >§m§l-----------
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
# Define o lore de origem da loja para itens comprados na loja
shopSourceItemLores: '&7Comprado em uma loja'
# Define o lore de origem da loja para itens obtidos de bosses
mobSourceItemLores: '&7Obtido de $mob'
# Define a lore de valor do item
loreWorths: '&7Vale $worth $currencyName'
# Define a lore de valor de revenda do item
loreResaleValues: '&7Vende por $resale $currencyName'
# Define a chance base para qualquer item elite cair de mobs elite
flatDropRateV3: 0.2
# Define a chance base para qualquer item elite cair de bosses regionais
regionalBossNonUniqueDropRate: 0.05
# Define se os bosses regionais podem gerar saque vanilla
regionalBossesDropVanillaLoot: false
# Define o quanto a chance de um item elite cair aumenta com base no nível do boss.
# O nível do boss é multiplicado por este valor e adicionado à chance base.
# Não é mais recomendado ter isso acima de 0.0!
levelIncreaseDropRateV2: 0.0
# Define a chance ponderada de um item gerado por procedimento cair.
# Este sistema usa probabilidades ponderadas! Pesquise isso no Google se não souber o que é isso.
proceduralItemDropWeight: 90.0
# Define a chance relativa de um item ponderado cair.
# Itens ponderados são itens personalizados que não têm um peso dinâmico, como amuletos.
weighedItemDropWeight: 1.0
# Define a chance relativa de um item fixo cair. Esses são itens personalizados que não escalam.
fixedItemDropWeight: 10.0
# Define a chance relativa de um item limitado cair. Esses são itens personalizados que escalam até um nível específico
limitedItemDropWeight: 3.0
# Define a chance relativa de um item escalável cair. Esses são itens personalizados que podem ser dimensionados para qualquer nível e são os mais comuns no plugin.
scalableItemDropWeight: 6.0
# Define o multiplicador para o saque vanilla do mob, com base no nível do mob.
defaultLootMultiplier: 0.0
# Define o nível máximo para o multiplicador de saque padrão.
levelCapForDefaultLootMultiplier: 200
# Define o multiplicador de experiência vanilla do Minecraft gerada para o boss, com base no nível do boss.
defaultExperienceMultiplier: 1.0
# Define o nível máximo do saque que será gerado pelo EliteMobs. Fortemente recomendado para deixá-lo em 200.
maximumItemLevel: 200
# Define se os encantamentos de elite serão usados.
# Os encantamentos de elite substituem os encantamentos vanilla quando os itens elite obtêm níveis de encantamento que vão além dos limites vanilla.
# Exemplo: se uma espada elite for suposto ter nitidez 10, uma vez que o limite do Minecraft é o nível 5, terá nitidez 5 e nitidez elite 5.
# A nitidez elite afeta apenas os mobs gerados por EliteMobs. Isso é feito para que o PVP e o combate vanilla não se tornem desequilibrados.
useEliteEnchantments: true
# Define o nome de exibição que será usado para os encantamentos de elite no lore do item.
eliteEnchantmentLoreStrings: Elite
# Define se o EliteMobs verá enxadas como armas válidas para os cálculos de dano.
useHoesAsWeapons: false
# Define se o EliteMobs gerará partículas especiais sobre itens caídos de alta qualidade.
enableRareItemParticleEffects: true
# Define os símbolos que serão usados no lore do item para mostrar que um efeito de poção se aplica ao atingir a entidade que é atingida.
potionEffectOnHitTargetLore: '&4⚔☠'
# Define os símbolos que serão usados no lore do item para mostrar que um efeito de poção se aplica ao atingir o jogador que está a acertar.
potionEffectOnHitSelfLore: '&9⚔🛡'
# Define os símbolos que serão usados no lore do item para mostrar que um efeito de poção continuará a ser reaplicado enquanto o jogador o usar.
potionEffectContinuousLore: '&6⟲'
# Define os caracteres prefixados a encantamentos de elite no lore do item.
eliteEnchantmentLoreColor: '&9◇'
# Define os caracteres prefixados a encantamentos vanilla no lore do item.
vanillaEnchantmentLoreColor: '&7◇'
# Define os caracteres prefixados a encantamentos personalizados no lore do item.
customEnchantmentColor: '&3◇'
# Define os caracteres prefixados a efeitos de poção no lore do item.
potionEffectLoreColor: '&5◇'
# Define o texto que aparecerá no item se o item não estiver ligado à alma.
noSoulbindLore: '&7Não ligado à alma!'
# Define se o item elite pode ser encantado por meios vanilla. Isso não é recomendado, pois o EliteMobs tem o seu próprio sistema de encantamentos personalizados com o seu próprio equilíbrio!
preventEliteItemEnchantment: true
# Define se os itens elite podem ser desencantados por meios vanilla.
preventEliteItemDisenchantment: true
# Define a mensagem que aparece para os jogadores quando eles tentam desencantar um item e isso não é permitido.
preventEliteItemDisenchantmentMessage: '&c[EliteMobs] Não é possível desencantar Itens Elite!'
# Define se os itens elite podem ser atualizados de diamante para netherite por meios vanilla. Não recomendado!
preventEliteItemDiamondToNetheriteUpgrade: true
# Define se os itens elite perderão durabilidade apenas na morte.
# Este é um sistema importante para o EliteMobs, e é fortemente recomendado, pois as lutas de alto nível são quase impossíveis sem ele!
eliteItemsDurabilityLossOnlyOnDeath: true
# Define o multiplicador de perda de durabilidade para itens elite se estiver definido para perder durabilidade na morte.
# Valores entre 0.0 e 1.0 diminuem a perda de durabilidade e valores acima de 1.0 a aumentam.
# Exemplo: 0.5 causa 50% da perda de durabilidade, 2.0 causa 200% da perda de durabilidade.
eliteItemsDurabilityLossMultiplier: 1.0
# Define a mensagem que aparece quando a sucata de itens é bem-sucedida.
scrapSucceededMessageV2: '&8[EliteMobs] &2Sucata bem-sucedida $amount vezes!'
# Define a mensagem que aparece quando a sucata de itens falha.
scrapFailedMessageV2: '&8[EliteMobs] &cSucata falhada $amount vezes!'
# Define se o saque elite deve ser colocado diretamente nos inventários dos jogadores.
putLootDirectlyIntoPlayerInventory: false
# Define a diferença máxima de nível que os jogadores podem ter antes de não poderem mais obter itens que são de nível muito baixo.
# Isso é calculado com base no nível médio do saque que o jogador está usando.
# Por exemplo, se estiver definido como 10 e um jogador tiver equipamentos de nível 50, eles não poderão farmar bosses de nível 39.
lootLevelDifferenceLockout: 10
# Define se o EliteMobs impedirá que Itens Elite se quebrem ao usar o sistema de perda de durabilidade na morte.
# Os jogadores não poderão usar itens sem durabilidade restante de qualquer maneira, isso é simplesmente para evitar a perda acidental de itens de alto nível, mas baixa durabilidade.
preventEliteItemsFromBreaking: true
# Define o nível mínimo, +7, de bosses que podem gerar por procedimento equipamentos de diamante no EliteMobs.
# Não há equipamentos de netherite gerados por procedimento no EliteMobs, apenas saque personalizado.
minimumProcedurallyGeneratedDiamondLootLevelPlusSeven: 10
# Define a mensagem mostrada no chat ao rolar com sucesso o saque através do comando /em simloot <nível> <vezes>.
simlootMessageSuccess: '&8[EliteMobs] &2Rolou para o saque e obteve $itemName &2!'
# Define a mensagem mostrada no chat ao falhar ao rolar para o saque através do comando /em simloot <nível> <vezes>.
simlootMessageFailure: '&8[EliteMobs] &cRolou para o saque e não obteve nada!'
# Define a mensagem que os jogadores recebem quando o saque elite é depositado diretamente nos seus inventários.
directDropCustomLootMessage: '&8[EliteMobs] &2Obteve $itemName &2!'
# Define a mensagem que os jogadores recebem quando o saque vanilla é depositado diretamente nos seus inventários.
directDropMinecraftLootMessage: '&8[EliteMobs] &aObteve $itemName &a!'
# Define a mensagem que os jogadores recebem quando as moedas elite são depositadas diretamente nos seus inventários.
directDropCoinMessage: '&8[EliteMobs] &aObteve &2$amount $currencyName &a!'
# Define se o EliteMobs ocultará os atributos vanilla do Minecraft.
hideItemAttributes: true
# Define a entrada de lore específica da arma em um item elite. O espaço reservado $EDPS é substituído pelo DPS (dano por segundo) de elite da arma.
weaponEntry: '&7DPS Elite: &2$EDPS'
# Define a entrada de lore específica da armadura em um item elite. O espaço reservado $EDEF é substituído pelo DEF (defesa) de elite da arma.
armorEntry: '&7Armadura Elite: &2$EDEF'
# Define a mensagem enviada quando um jogador mata um boss, mas o nível do equipamento é muito diferente do nível do boss para obter moedas.
levelRangeTooDifferent: '&8EM] &4O seu equipamento é de nível $playerLevel e o boss é de nível $bossLevel, a diferença de nível é muito alta para obter moedas!'
```

</details>

---

## MobCombatSettings.yml

O `MobCombatSettings.yml` contém todas as opções de configuração relacionadas ao sistema de combate personalizado e a
maioria das opções de configuração geralmente relacionadas a como os Mobs Elite funcionam.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define se os elites gerados naturalmente serão gerados. Nota: mobs de evento como o rei zumbi não são elites gerados naturalmente! Terá de desativar os eventos se quiser desativar os bosses de evento.
doNaturalEliteMobSpawning: true
# Define se os spawns gerados a partir de geradores de mobs podem ser convertidos em elites. Não recomendado!
doSpawnersSpawnEliteMobs: false
# Define a porcentagem de mobs gerados naturalmente que são convertidos em mobs elite.
eliteMobsSpawnPercentage: 0.05
# Define o alcance do super mob para procurar por empilhamento de super mob
superMobStackRange: 15
# Define o nível máximo em que os elites podem ser gerados.
# Nota: o nível do mob elite é baseado em qual armadura e armas os jogadores estão usando, e a armadura só aumenta até o nível 200.
naturalEliteMobsLevelCap: 250
# Define se os elites usarão armadura com base no seu nível. Isso é apenas para fins visuais e não afeta o combate.
doElitesWearArmor: true
# Define se os elites usarão capacetes com base no seu nível. Isso evitará que eles se queimem facilmente durante o dia.
doElitesWearHelmets: true
# Define se os elites terão trilhas visuais ao redor deles avisando os jogadores sobre quais jogadores eles têm.
doNaturalEliteMobVisualEffects: true
# Define se os elites gerados por geradores farão efeitos visuais.
doSpawnerEliteMobVisualEffects: false
# Define se alguns poderes farão a fase de aviso do poder. Isso é muito importante, pois as fases de aviso geralmente significam que o poder pode ser evitado, e o visual permite que os jogadores saibam onde evitar.
doPowerBuildupVisualEffects: true
# Define se mensagens de morte personalizadas serão usadas quando os jogadores morrerem de elites.
doCustomEliteMobsDeathMessages: true
# Define se o EliteMobs mostrará indicadores de saúde para elites.
doDisplayMobHealthOnHit: true
# Define se o EliteMobs mostrará indicadores de dano para o dano causado a elites.
doDisplayMobDamageOnHit: true
# Define se o nível dos elites será aumentado com base na distância da geração.
# Este é um valor adicionado acima do seu nível normal, o que significa que se um jogador estiver usando equipamentos de nível 100 perto da geração e o boss tiver +1 nível devido à distância da geração, o boss será gerado no nível 101.
# Esta opção geralmente não é recomendada, especialmente se tiver um sistema de tp aleatório no seu servidor.
doIncreaseEliteMobLevelBasedOnSpawnDistance: false
# Define a distância entre incrementos de nível para aumentos de nível baseados em distância.
distanceBetweenIncrements: 100.0
# Define quantos níveis aumentam em cada incremento de distância para aumentos de nível baseados em distância.
levelIncreaseAtIncrements: 1.0
# Define se os poderes dos elites serão ocultados até que entrem em combate. Isso é recomendado por motivos de desempenho.
hideEliteMobPowersUntilAggro: true
# Define o multiplicador para o dano causado a todos os bosses gerados pelo EliteMobs, exceto aqueles que usam o sistema de dano normalizado (bosses de dungeon regionais). Valores mais altos aumentam o dano causado, tornando os bosses mais fáceis de matar.
# 2.0 = 200%, 0.5 = 50%
damageToEliteMobMultiplierV2: 1.0
# Define o multiplicador para o dano causado aos jogadores por elites. Valores mais altos aumentam a quantidade de dano causado por bosses, exceto aqueles que usam o sistema de dano normalizado (bosses de dungeon regionais), fazendo com que os bosses atinjam mais forte.
# 2.0 = 200%, 0.5 = 50%
damageToPlayerMultiplierV2: 1.0
# Define se bosses especiais podem ser rastreados.
showCustomBossLocation: true
# Define a mensagem enviada aos jogadores para rastrear a localização de um boss.
bossLocationMessage: '&7[EM] &2[Clique para rastrear!]'
# Define os comandos que são executados quando um elite morre. Espaços reservados válidos são:
# $level para o nível do boss
# $name para o nome do boss
# $players fará com que o comando seja executado para cada jogador que participou da morte. Por exemplo, se Bob e Steve mataram um boss, 'transmitir $players matou o boss!' executará 'Bob matou o boss' e 'Steve matou o boss!'
commandsOnEliteMobDeath: []
```

</details>
```yml
# Define a mensagem enviada aos jogadores que participam de mortes de grandes bosses.
bossKillParticipationMessage: '&eO seu dano: &2$playerDamage'
# Define se os bosses regeneram saúde quando saem de combate. Fortemente recomendado.
regenerateCustomBossHealthOnCombatEnd: true
# Define a mensagem enviada aos jogadores que estão a tentar rastrear bosses atualmente em um mundo diferente.
defaultOtherWorldBossLocationMessage: '$name: Em um mundo diferente!'
# Define o prefixo adicionado aos indicadores de dano quando os jogadores atingem um boss com algo contra o qual o boss é fraco.
weakTextColor: '&9'
# Define o prefixo adicionado aos indicadores de dano quando os jogadores atingem um boss com algo contra o qual o boss é forte.
resistTextColor: '&c'
# Define a mensagem que aparece quando os jogadores atingem o boss com algo contra o qual o boss é fraco.
weakText: '&9&lFraco!'
# Define a mensagem que aparece quando os jogadores atingem o boss com algo contra o qual o boss é forte.
resistText: '&c&lResistente!'
# Define se os visuais serão usados para mostrar que um boss é fraco contra um ataque.
doWeakEffect: true
# Define se os visuais serão usados para mostrar que um boss é forte contra um ataque.
doResistEffect: true
# Define o multiplicador para o dano causado aos bosses usando o sistema de dano normalizado (bosses de dungeon regionais). Valores mais altos aumentam o dano causado, tornando os bosses mais fáceis de matar.
# 2.0 = 200%, 0.5 = 50%
damageToEliteMobMultiplier: 1.0
# Define o multiplicador para o dano causado aos jogadores por bosses usando o sistema de dano normalizado (bosses de dungeon regionais). Valores mais altos aumentam a quantidade de dano causado por bosses, fazendo com que os bosses atinjam mais forte.
# 2.0 = 200%, 0.5 = 50%
damageToPlayerMultiplier: 1.0
# Define o dano base para bosses personalizados usando o dano normalizado (geralmente bosses regionais).
normalizedRegionalBossBaselineDamageV2: 3.0
# Define a saúde base para bosses personalizados usando a saúde normalizada (geralmente bosses regionais).
normalizedRegionalBossBaselineHealthV3: 4.0
# Define se os bosses regionais usarão o sistema de combate normalizado.
# Isso é muito fortemente recomendado, e o conteúdo pré-feito não será equilibrado corretamente se modificado.
normalizeRegionalBosses: true
# Define a mensagem que aparece quando um boss cura por sair de combate.
fullHealMessage: '&2CURA COMPLETA!'
# Define os multiplicadores aplicados a ataques contra os quais os bosses são fortes e fracos.
strengthAndWeaknessDamageMultipliers: 2.0
# Define o multiplicador aplicado à redução de dano do efeito de poção de resistência para jogadores.
resistanceDamageMultiplier: 1.0
# Define o multiplicador aplicado à redução de dano quando um jogador está segurando um escudo para ataques corpo a corpo (poderes excluídos).
blockingDamageReduction: 0.8
```

</details>

---

## ProceduralItemGenerationSettings.yml

O `ProceduralItemGenerationSettings.yml` contém todas as opções de configuração para configurar itens gerados por
procedimento.

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
  fishingRod: Cana de pesca
  shield: Escudo
  trident: Tridente
  crossbow: Besta
nameFormats:
- $verb $itemType de $adjective $noun
- $itemType de $adjective $noun
- $noun's $adjective $verb $itemType
- $verb $itemType
- $adjective $verb $itemType
- O $verb-dor
- O $adjective $verb-dor
nouns:
- MagmaGuy
- Amanhecer
...
adjectives:
- Adorável
- Bonito
...
verbs:
- Cortante
- Cortar
...
verb-ers (noun):
- Destruidor do Mundo
- Destroçador do Mundo
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

O `ValidWorlds.yml` contém a lista de mundos que o EliteMobs detetou, bem como opções para personalizar os recursos do
EliteMobs neles.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define a lista de mundos baseados em zonas.
# O MODO DE JOGO BASEADO EM ZONAS ESTÁ DESATUALIZADO E SERÁ REMOVIDO EM BREVE!
zoneBasedWorlds: []
# Define a lista de mundos no modo pesadelo.
# Os mundos no modo pesadelo são um modo de jogo onde os dias são mais curtos e os jogadores não podem dormir.
# Os mundos de pesadelo também têm maiores quantidades de spawns de elite.
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

O `Arenas.yml` contém as mensagens e configurações padrão para Arenas que pode modificar.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Mensagem que aparece quando não há jogadores suficientes para iniciar uma arena.
notEnoughPlayersMessage: '&8[EliteMobs] &cPrecisa de pelo menos $amount para iniciar a partida!'
# Título que aparece quando uma arena está a começar.
startingMessage: '&2A começar!'
# Legenda que aparece quando uma arena está a começar.
startingSubtitle: '&2em $count...'
# Mensagem que aparece quando uma arena está cheia.
arenaFullMessage: '&4[EliteMobs] &cA arena está cheia! Pode assistir enquanto espera que termine!'
# Mensagem que aparece quando um jogador tenta entrar em uma arena ativa.
arenasOngoingMessage: '&4[EliteMobs] &cNão é possível entrar na arena agora - uma partida está a acontecer no momento! Pode assistir enquanto espera que termine!'
# Mensagem que aparece para lembrar os jogadores como iniciar uma arena depois de entrar como jogador.
instanceStartHintMessage: '&2[EliteMobs] &aPode iniciar a instância fazendo &2/em start'
# Mensagem que aparece para lembrar os jogadores como sair de uma arena.
instanceQuitHintMessage: '&4[EliteMobs] &cPode sair da instância fazendo &4/em quit'
# Mensagem que aparece quando os jogadores entram em uma arena.
arenaJoinPlayerMessage: "&2[EliteMobs] &aPode iniciar a arena fazendo &2/em start \
  \ &ase houver pelo menos &2$count &ajogadores nela! \nPode sair da arena fazendo\
  \ &c/em quit"
# Mensagem que aparece para lembrar os jogadores como sair de uma arena depois de entrar como espectador.
arenaJoinSpectatorMessage: '&2[EliteMobs] &aPode sair da arena a qualquer momento usando &2/em quit'
# Título da mensagem que aparece quando uma onda está a começar.
waveTitle: '&aOnda &2$wave'
# Legenda da mensagem que aparece quando uma onda está a começar.
waveSubtitle: ''
# Título que aparece quando uma arena é concluída.
victoryTitle: '&2Vitória!'
# Legenda que aparece quando uma arena é concluída.
victorySubtitle: '&aCompletou &2$wave &aondas!'
# Título que aparece quando os jogadores falham em uma arena.
defeatTitle: '&4Derrota!'
# Legenda que aparece quando os jogadores falham em uma arena.
defeatSubtitle: '&cChegou à onda &4$wave&c!'
# Mensagem transmitida quando os jogadores vencem uma arena.
victoryBroadcast: A arena $arenaName foi conquistada por $players!
# Título que aparece quando um jogador entra em uma arena.
joinPlayerTitle: '&aComece com &2/em start &a!'
# Legenda que aparece quando um jogador entra em uma arena.
joinPlayerSubtitle: '&cSaia com &4/em quit &c!'
# Título que aparece quando um espectador entra em uma arena.
joinSpectatorTitle: '&aAssistindo agora!'
# Legenda que aparece quando um espectador entra em uma arena.
joinSpectatorSubtitle: '&cSaia com &4/em quit &c!'
# Define a mensagem enviada aos jogadores se eles não tiverem permissão para entrar em uma arena.
noArenaPermissionMessage: '[EliteMobs] Não tem permissão para entrar nesta arena!'
```

</details>

---

## Database.yml

O `Database.yml` inclui as configurações de como quer que o EM lide com as bases de dados.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define se o MySQL será usado. Por padrão, o EliteMobs usa SQLite. Se desejar usar o MySQL, precisará de uma configuração MySQL válida.
useMySQL: false
# O host da sua base de dados MySQL
mysqlHost: localhost
# A porta da sua base de dados MySQL
mysqlPort: '3306'
# O nome da base de dados
mysqlDatabaseName: elitemobs
# O nome de utilizador para o MySQL
mysqlUsername: seu_nome_de_utilizador_mysql_aqui
# A palavra-passe para a sua base de dados MySQL
mysqlPassword: sua_palavra_passe_mysql_aqui
# Se deve usar SSL
useSSL: true
```

</details>

---

## dungeons.yml

O `dungeons.yml` inclui configurações que permitem ajustar as mensagens que aparecem em dungeons e outras configurações,
como multiplicadores de dano para efeitos aplicados.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define o multiplicador de dano para dano de veneno em dungeons
# Isso é importante para o equilíbrio, pois, por padrão, o dano é um pouco alto demais para as dungeons conforme as projetamos.
poisonDamageMultiplier: 0.5
# Define o multiplicador de dano para dano de fogo em dungeons
# Isso é importante para o equilíbrio, pois, por padrão, o dano é um pouco alto demais para as dungeons conforme as projetamos.
fireDamageMultiplier: 0.5
# Define o multiplicador de dano para dano de murcha em dungeons
# Isso é importante para o equilíbrio, pois, por padrão, o dano é um pouco alto demais para as dungeons conforme as projetamos.
witherDamageMultiplier: 0.5
# Define se o PvP será permitido em dungeons
friendlyFireInDungeons: false
# Define o texto que aparece sobre os banners de ressurreição em dungeons
dungeonRezInstructions: '&aSoco para ressuscitar!'
# Define o texto que mostra quantas vidas os jogadores têm em uma dungeon! Espaços reservados:
# $amount - a quantidade de vidas restantes
dungeonLivesLeftText: '&c$amount vidas restantes!'
# Define o texto para entrar em uma dungeon como jogador! Espaços reservados:
# $dungeonName - o nome da dungeon
joinDungeonAsPlayerText: '&fEntrar em $dungeonName como jogador!'
# Define o texto para entrar em uma dungeon como espectador! Espaços reservados:
# $dungeonName - o nome da dungeon
joinDungeonAsSpectatorText: '&fEntrar em $dungeonName como espectador!'
# Define o título que aparecerá na descrição do item dos menus de dungeon com instâncias
# $difficulty é o espaço reservado para o nome da dificuldade no ficheiro de configuração da dungeon
instancedDungeonTitle: Iniciar dungeon de dificuldade $difficulty!
# Define a descrição que aparecerá na descrição do item dos menus de dungeon com instâncias
# $dungeonName é o espaço reservado para o nome da dungeon no ficheiro de configuração da dungeon
instancedDungeonDescription:
- '&fCriar uma nova instância da dungeon'
- $dungeonName &fpara si e talvez
- '&falguns amigos!'
# Define se a observação de conteúdo com instâncias estará disponível.
allowSpectatorsInInstancedContent: true
# Define a mensagem que aparece quando uma dungeon com instâncias é concluída.
instancedDungeonCompleteMessage: '[EliteMobs] Dungeon concluída! Vai autodestruir-se em 2 minutos!'
# Define a mensagem que aparece quando uma dungeon com instâncias está a fechar.
instancedDungeonClosingInstanceMessage: '[EliteMobs] A fechar instância!'
```

</details>

---

## Quests.yml

O `Quests.yml` inclui configurações para missões e quais mensagens são exibidas.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define se as missões precisam ser devolvidas aos doadores de missões para concluir a missão.
requireQuestTurnIn: true
# Define a mensagem enviada quando uma missão é aceite.
questJoinMessage: '&aAceitou a missão $questName &a!'
# Define a mensagem enviada quando uma missão é abandonada.
questLeaveMessage: '&cAbandonou a missão $questName &c!'
# Define a mensagem enviada quando uma missão é concluída.
questCompleteMessage: '&2Concluiu a missão $questName &2!'
# Define a mensagem enviada quando um jogador tentou abandonar uma missão quando nenhuma está ativa.
leaveWhenNoActiveQuestsExist: '&cNão tem nenhuma missão ativa no momento!'
# Define a mensagem de confirmação enviada quando os jogadores tentam sair de uma missão.
questLeaveConfirmationMessage: '&cTem certeza de que quer abandonar a sua missão atual? Faça &a/em confirm &c para confirmar a sua escolha!'
# Define se algumas das mensagens relacionadas às missões usarão títulos em vez de mensagens de chat.
useQuestAcceptTitles: true
# Define o título enviado quando um jogador começa uma missão.
questStartTitle: '&aMissão Aceite!'
# Define a legenda enviada quando um jogador começa uma missão.
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
# Define se as mensagens são enviadas no chat relatando a progressão do objetivo da missão.
doQuestChatProgression: true
# Define os códigos de cores para objetivos concluídos.
ongoingQuestColorCode: '&2'
# Define a formatação para mensagens de progressão de missões de morte.
killQuestChatProgressionMessage: '&8[EliteMobs]&c➤Matar $name:$color$current&0/$color$target'
# Define a formatação para mensagens de progressão de missões de busca.
fetchQuestChatProgressionMessage: '&8[EliteMobs]&c➤Obter $name:$color$current&0/$color$target'
# Define a formatação para mensagens de progressão de missões de diálogo.
dialogQuestChatProgressionMessage: '&8[EliteMobs]&c➤Falar com $name:$color$current&0/$color$target'
# Define a quantidade máxima de missões aceitas que um jogador pode ter.
maximumActiveQuests: 10
# Define a mensagem enviada aos jogadores ao tentar aceitar uma quantidade de missões que exceda o limite de missões ativas.
questCapMessage: '&8[EliteMobs] &cAtingiu o número máximo de missões ativas (10)! &4Abandone ou conclua pelo menos uma missão ativa se quiser obter mais missões!'
# Define se as mensagens de scoreboards serão usadas para missões.
useQuestScoreboards: true
# Define a formatação para mensagens de progressão do scoreboard de missões de morte.
killQuestScoreboardProgressionMessage: '&c➤Matar $name:$color$current&0/$color$target'
# Define a formatação para mensagens de progressão do scoreboard de missões de busca.
fetchQuestScoreboardProgressionMessage: '&c➤Obter $name:$color$current&0/$color$target'
# Define a formatação para mensagens de progressão do scoreboard de missões de diálogo.
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
# Define a mensagem de passar o mouse do rastreamento de missões.
chatTrackHover: '&2Clique para rastrear!'
# Define o comando enviado ao clicar na mensagem de rastreamento. Não deve modificar isso.
chatTrackCommand: /elitemobs quest track $questID
# Define a mensagem enviada aos jogadores ao ativar o rastreamento de missões.
chatTrackingMessage: '&8[EliteMobs]&9 Agora está a rastrear uma missão!'
# Define a mensagem de passar o mouse na mensagem de ativação de rastreamento de missões.
chatTrackingHover: '&2Clique para cancelar/rastrear! /em -> Missões para rastrear uma missão diferente!'
# Define o comando enviado ao clicar na mensagem de ativação de rastreamento de missões. Não deve modificar isso.
chatTrackingCommand: /elitemobs quest track $questID
# Define se as missões são rastreadas automaticamente quando aceitas.
autoTrackQuestsOnAccept: true
# Define a mensagem que aparece quando o destino da missão não pôde ser encontrado.
noQuestDestinationFound: '[EM] Nenhum destino de missão encontrado!'
# Define a mensagem que aparece quando o destino da missão está em um mundo diferente.
questDestinationInOtherWorld: '[EM] Vá para o mundo $world!'
# Define a mensagem enviada aos jogadores ao tentar aceitar uma missão que já concluíram.
questAlreadyCompletedMessage: '&8[EliteMobs] &cJá concluiu esta missão!'
# Define a mensagem enviada aos jogadores ao tentar aceitar uma missão para a qual não têm permissão.
questPrerequisitesMissingMessage: '&8[EliteMobs] &cEste NPC tem algumas missões que ainda não pode aceitar!'
# Define a mensagem enviada aos jogadores ao tentar obter uma missão para a qual não têm a classificação de guilda correta ativada.
lowRankDynamicQuestWarning: '&8[EliteMobs] &cNão pode aceitar estas missões com a sua classificação atual da guilda! Aumente a sua classificação da guilda para aceitar estas missões.'
# Define a formatação para a mensagem de entrega da missão.
questTurnInObjective: '&a2Falar com $npcName'
# Define a quantidade máxima de caracteres que os menus baseados em inventário para missões terão antes de quebrar a linha.
horizontalCharacterLimitBedrockMenu: 30
# Define a quantidade máxima de caracteres por entrada de item em menus baseados em inventário para missões antes de criar outro item para continuar a entrada.
itemEntryCharacterLimitBedrockMenu: 300
```

</details>

---

## resource_pack_config.yml

O `resource_pack_config.yml` inclui configurações relacionadas ao pacote de recursos do EliteMobs.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
eliteMobsResourcePackEnabled: false
forceResourcePack: false
resourcePackPrompt: '[EliteMobs] O uso do pacote de recursos é altamente recomendado!'
resourcePackLink: https://www.magmaguy.com/downloads/elitemobs_resource_pack.zip
```

</details>

---

## Sounds.yml

O `Sounds.yml` inclui configurações que definem quais sons devem ser reproduzidos quando certas interações do EliteMobs
são executadas. Os arquivos de som são armazenados no pacote de recursos.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define o som que será reproduzido quando um baú de tesouro se abrir
treasureChestOpenSound: elitemobs:treasure_chest.open
# Define o som que será reproduzido quando um jogador sobe de nível na guilda
guildRankUpSound: elitemobs:guild.rankup
# Define o som que será reproduzido quando um jogador ganha prestígio na guilda
guildPrestigeSound: elitemobs:guild.prestige
# Define o som que será reproduzido quando um jogador avança em uma missão
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

O `Wormholes.yml` inclui configurações para os teletransportes de buracos de minhoca do EliteMobs.

<details>

<summary><b>Expandir Tabela</b></summary>

```yml
# Define a mensagem que aparece quando um teletransporte é usado para uma dungeon que não está instalada.
dungeonNotInstalledMessage: '&8[EliteMobs] &cA dungeon $dungeonID &cnão está instalada! Este teletransporte não funcionará.'
# Define a mensagem que aparece quando um buraco de minhoca é usado para uma dungeon que não está instalada.
defaultPortalMissingMessage: '&8[EliteMobs] &cEste portal parece não levar a lugar nenhum!'
# Define se o modo de partículas reduzidas para buracos de minhoca é usado. Isso é especialmente recomendado se estiver a permitir clientes bedrock.
reducedParticlesMode: true
# Define se os buracos de minhoca não usam partículas. Não recomendado, mas pode ser necessário para clientes bedrock realmente ruins.
noParticlesMode: false
# Define a mensagem que é enviada quando um jogador tenta usar um buraco de minhoca, mas não tem moeda suficiente para usá-lo.
insufficientCurrencyForWormholeMessage: '&8[EliteMobs] &cMoeda insuficiente! Precisa de $amount para usar este buraco de minhoca!'
```

</details>
