# Escalonamento de Dano e Saúde no EliteMobs

Este é um guia completo sobre como a saúde e o dano são escalonados no EliteMobs. Ele deve ser usado como referência ao projetar masmorras.

Ele está focado em Chefes Personalizados, mas Elites normais são escalonados da mesma forma.

# Antes de começar!

Você não precisa ler tudo isso se quiser fazer ajustes rápidos. Vá para a seção "Usando esses dados para masmorras" para ver cálculos rápidos simplificados e uma série de configurações recomendadas pré-definidas!

# Escalonamento (em geral)

No EliteMobs, por padrão, os chefes ganham 7 de saúde máxima e causam 1 dano a mais por nível.

As armas dos jogadores causam 7 danos a mais por nível, e a armadura reduz 0,25 de dano por nível (mas existem 4 slots de armadura que contribuem para o total, o que dá 1). Por fim, os jogadores ganham saúde máxima à medida que desbloqueiam os níveis de prestígio.

# Dano causado por Chefes Personalizados

A fórmula de dano para Chefes Personalizados é:

```
( ( ( dano base / 2 ) * multiplicador de dano do chefe personalizado) + nível do chefe - redução de armadura do jogador ) * multiplicador de dano global
```

## dano base

Isso pode ser uma de duas coisas:

1.  O valor em mobproperties para o tipo de entidade do chefe.
2.  Como isso pode ser difícil de lembrar ao projetar masmorras e outros conteúdos, os Chefes Personalizados podem ter o campo normalizedCombat, que aplica um dano padrão de 5, que tem o melhor escalonamento para a progressão do EliteMobs. Em uma atualização posterior, o combate normalizado será habilitado por padrão para todos os chefes regionais.

## multiplicador de dano do chefe personalizado

Este é o multiplicador de dano no arquivo do Chefe Personalizado. O padrão é 1.

## nível do chefe

Como você pode imaginar, esse é apenas o nível do chefe. Isso significa que os chefes causam um dano a mais por nível.

## redução de armadura do jogador

A armadura do jogador reduz 0,25 de dano por nível, e existem 4 slots de armadura que podem contribuir para o total. Além disso, cada nível de proteção de projétil reduz o dano de projéteis em 0,025.

## multiplicador de dano global

Este é o multiplicador em MobCombatSettings. O padrão é 1.

# Saúde máxima de Chefes Personalizados

A fórmula de saúde para Chefes Personalizados é:

```
( saúde máxima base + nível do chefe * 7 ) * multiplicador de saúde do chefe personalizado
```

## saúde máxima base

Isso pode ser uma de duas coisas:

1.  A saúde máxima padrão da entidade do vanilla Minecraft.
2.  Como isso pode ser difícil de lembrar ao projetar masmorras e outros conteúdos, os Chefes Personalizados podem ter o campo normalizedCombat, que aplica uma saúde padrão de 7, que tem o melhor escalonamento para a progressão do EliteMobs. O combate normalizado é habilitado por padrão para todos os chefes regionais.

## nível

Este é o nível do chefe.

## multiplicador de saúde do chefe personalizado

Este é o multiplicador no arquivo do Chefe Personalizado. O padrão é 1.

# Dano causado a Chefes Personalizados

A fórmula de dano que os jogadores causam a Chefes Personalizados tem muitas variáveis pequenas, como ataques críticos e tempos de espera, para explicar em detalhes aqui. Uma versão simplificada é esta:

```
dano = Nível da arma
```

Este é o dano que deve se parecer aproximadamente com um cenário médio ideal.

# Usando esses dados para masmorras

**OBSERVAÇÃO: ISSO ASSUME QUE VOCÊ ESTÁ USANDO OS VALORES `normalizedCombat`!** Esses valores foram feitos especificamente para equilibrar masmorras mais facilmente.

Parte da dificuldade de um chefe é fazer com que ele tenha a saúde e o dano apropriados para o encontro. No entanto, lembre-se de que essa é apenas uma parte do processo, e que os poderes são tão importantes quanto.

O seguinte é apresentado no formato correto para o arquivo do Chefe Personalizado.

## Os cálculos rápidos fáceis

1.  O EliteMobs tem 7 acertos como a quantidade de acertos que um jogador com uma arma do mesmo nível que um chefe leva para matá-lo, assumindo que não há modificadores.
    1.  Isso significa que um multiplicador de 2,0 significa que os jogadores terão que acertar o chefe 2 x 7 = 14 vezes. 0,5 significa 7 / 2 = 3,5.
2.  O dano normalizado base do normalizedCombat, assumindo que a armadura do jogador é do mesmo nível que o chefe, é 2,5 de dano ou 1,25 corações de dano por acerto.
    1.  Isso significa que um multiplicador de 2,0 significa que os jogadores perderão 3 corações por acerto, e um multiplicador de 0,5 fará com que os jogadores percam 0,75 corações por acerto.

**Lembre-se de que os jogadores tendem a priorizar armas e, muitas vezes, acabam com armaduras muito piores do que armas. A menos que você projete tipos muito específicos de arenas com combate à distância, provavelmente não é recomendável causar muito dano por acerto.** Teste seu conteúdo!

## Criando um mob de masmorra médio

Com o escalonamento do normalizedCombat, você pode aplicar uma configuração muito minimalista:

```yaml
normalizedCombat: true
healthMultiplier: 1.0 #4 acertos para derrotar
damageMultiplier: 1.0 #1.5 corações de dano
```

**Observação: como 1.0 é o padrão, isso significa que você também pode simplesmente não definir nada**.

## Criando grupos de inimigos

Grupos de inimigos são numerosos, mas não muito perigosos:

```yaml
normalizedCombat: true
healthMultiplier: 0.7 #3 acertos para derrotar 
damageMultiplier: 0.5 #0.5 corações de dano
```

## Criando reforços

Os reforços devem morrer muito facilmente, mas representar um perigo em termos de dano (esses valores recomendados para 4+ entidades de combate corpo a corpo, o uso real pode variar):

```yaml
normalizedCombat: true
healthMultiplier: 0.25 #1 acerto para derrotar 
damageMultiplier: 0.6 #1 coração de dano
```

## Criando minibosses

Os minibosses devem resistir e representar um desafio mecânico para os jogadores. Deve ser um teste de habilidade que dura um pouco, mas não algo extremamente mortal:

```yaml
normalizedCombat: true
healthMultiplier: 3.0 #10 acertos para derrotar 
damageMultiplier: 1.2 #2 corações de dano
```

## Criando chefes

Os chefes são um verdadeiro desafio, a conclusão de uma acumulação em uma masmorra e um verdadeiro teste de habilidade com tudo em jogo. Os encontros devem ser longos e a morte deve ser uma ameaça presente.

```yaml
normalizedCombat: true
healthMultiplier: 7.0 #23 acertos para derrotar 
damageMultiplier: 1.4 #2.5 corações de dano
```

## Criando Chefes Mundiais

Os chefes mundiais são perigosos, mas acima de tudo, eles têm muita saúde e invocam muitos reforços / têm muitos ataques de área de efeito. Eles são destinados a serem combatidos por grandes grupos de jogadores durante o maior tempo que um encontro de elite deve durar. Eles não são muito mortais, mas têm muitas mecânicas que podem sobrecarregar os jogadores despreparados.

```yaml
normalizedCombat: true
healthMultiplier: 40.0 #160 acertos para derrotar 
damageMultiplier: 1.5 #2.5-3 corações de dano
```

Estes são apenas valores recomendados aproximados e quaisquer valores finais devem ser ajustados em torno dos próprios encontros.

