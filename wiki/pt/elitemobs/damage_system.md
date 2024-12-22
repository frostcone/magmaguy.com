Claro, aqui está a tradução para português de Portugal, mantendo a formatação markdown:

Esta é uma análise abrangente de como a saúde/dano escalam no EliteMobs. Deve ser usado como referência ao projetar
masmorras.

Está focado em Chefes Personalizados, mas os Elites normais escalam da mesma forma.

# Antes de começar!

Não precisa de ler tudo isto se apenas quiser fazer ajustes rápidos. Vá para a secção "Usando estes dados para
masmorras" para ver cálculos rápidos muito simplificados e uma série de configurações recomendadas predefinidas!

# Escala (em geral)

No EliteMobs, por padrão, os chefes ganham 7 de saúde máxima e causam 1 de dano a mais por nível.

As armas dos jogadores causam 7 de dano a mais por nível, e a armadura reduz 0.25 de dano por nível (mas existem 4 slots
de armadura que contribuem para o total, o que equivale a 1). Finalmente, os jogadores ganham saúde máxima à medida que
desbloqueiam os níveis de prestígio.

# Dano causado por Chefes Personalizados

A fórmula do dano para Chefes Personalizados é:

```
( ( ( dano base / 2 ) * multiplicador de dano do chefe personalizado) + nível do chefe - redução de armadura do jogador ) * multiplicador de dano global
```

## dano base

Pode ser uma de duas coisas:

1. O valor em mobproperties para o tipo de entidade do chefe.
2. Uma vez que pode ser difícil ter isto em mente ao projetar masmorras e outros conteúdos, os Chefes Personalizados
   podem ter o campo normalizedCombat, que aplica um dano padrão de 5, que tem a melhor escala para a progressão do
   EliteMobs. Numa atualização posterior, o combate normalizado será ativado por padrão para todos os chefes regionais.

## multiplicador de dano do chefe personalizado

Este é o multiplicador de dano no ficheiro de Chefe Personalizado. O padrão é 1.

## nível do chefe

Como pode imaginar, este é apenas o nível do chefe. Isto significa que os chefes causam mais um de dano por nível.

## redução de armadura do jogador

A armadura do jogador reduz 0.25 de dano por nível, e existem 4 slots de armadura que podem contribuir para o total.
Além disso, cada nível de proteção contra projéteis reduz o dano de projéteis em 0.025.

## multiplicador de dano global

Este é o multiplicador em MobCombatSettings. O padrão é 1.

# Saúde máxima de Chefes Personalizados

A fórmula da saúde para Chefes Personalizados é:

```
( saúde máxima base + nível do chefe * 7 ) * multiplicador de saúde do chefe personalizado
```

## saúde máxima base

Pode ser uma de duas coisas:

1.  A saúde máxima padrão da entidade vanilla do Minecraft.
2. Uma vez que pode ser difícil ter isto em mente ao projetar masmorras e outros conteúdos, os Chefes Personalizados
   podem ter o campo normalizedCombat, que aplica uma saúde padrão de 7, que tem a melhor escala para a progressão do
   EliteMobs. O combate normalizado está ativado por padrão para todos os chefes regionais.

## nível

Este é o nível do chefe.

## multiplicador de saúde do chefe personalizado

Este é o multiplicador no ficheiro de Chefe Personalizado. O padrão é 1.

# Dano causado a Chefes Personalizados

A fórmula do dano com que os jogadores atingem Chefes Personalizados tem demasiadas variáveis pequenas, como golpes
críticos e tempos de espera, para explicar em profundidade aqui. Uma versão simplificada é assim:

```
dano = Nível da arma
```

Este é o aspeto aproximado do dano numa configuração média ideal.

# Usando estes dados para masmorras

**NOTA: ISTO ASSUME QUE ESTÁ A USAR OS VALORES `normalizedCombat`!** Esses valores foram especificamente criados para
equilibrar masmorras mais facilmente.

Parte da dificuldade de um chefe é fazê-lo ter a saúde e o dano adequados para o confronto. No entanto, tenha em mente
que esta é apenas uma parte, e que os poderes são igualmente importantes.

O seguinte é apresentado no formato correto para o ficheiro de Chefe Personalizado.

## Os cálculos rápidos fáceis

1. EliteMobs tem 7 golpes como a quantidade de golpes que um jogador com uma arma do mesmo nível que um chefe precisa
   para o matar, assumindo que não há modificadores.
    1. Isto significa que um multiplicador de 2.0 significa que os jogadores terão de atingir o chefe 2 x 7 = 14 vezes.
       0.5 significa 7 / 2 = 3.5 .
2. O dano de combate normalizado base, assumindo que a armadura do jogador é do mesmo nível que o chefe, é de 2.5 de
   dano ou 1.25 corações de dano por golpe.
    1. Isto significa que um multiplicador de 2.0 significa que os jogadores perderão 3 corações por golpe, e um
       multiplicador de 0.5 fará com que os jogadores percam 0.75 corações por golpe.

**Tenha em mente que os jogadores tendem a priorizar armas e, muitas vezes, acabam com uma armadura muito pior do que as
armas. A menos que projete tipos muito específicos de arenas com combate à distância, provavelmente não vai querer
causar muito dano por golpe.** Teste o seu conteúdo!

## Criando um mob médio de masmorra

Com a escala de normalizedCombat, pode aplicar uma configuração muito minimalista:

```yaml
normalizedCombat: true
healthMultiplier: 1.0 #4 golpes para matar
damageMultiplier: 1.0 #1.5 corações de dmg
```

**Nota: visto que 1.0 é o padrão, isto significa que também pode simplesmente não definir nada.**

## Criando grupos de lixo

Os grupos de lixo são numerosos, mas não muito perigosos:

```yaml
normalizedCombat: true
healthMultiplier: 0.7 #3 golpes para matar
damageMultiplier: 0.5 #0.5 corações de dmg
```

## Criando reforços

Os reforços devem morrer muito facilmente, mas representam um perigo em termos de dano (estes valores são recomendados
para 4+ entidades corpo a corpo, o uso real pode variar):

```yaml
normalizedCombat: true
healthMultiplier: 0.25 #1 golpe para matar
damageMultiplier: 0.6 #1 coração de dmg
```

## Criando minibosses

Os minibosses devem aguentar-se e representar um desafio mecânico para os jogadores. Deve ser um teste de perícia que
dure um pouco, mas não algo extremamente mortal:

```yaml
normalizedCombat: true
healthMultiplier: 3.0 #10 golpes para matar
damageMultiplier: 1.2 #2 corações de dmg
```

## Criando chefes

Os chefes são um verdadeiro desafio, a conclusão de um aumento numa masmorra e um verdadeiro teste de perícia com tudo
em risco. Os confrontos devem ser longos e a morte deve ser uma ameaça presente.

```yaml
normalizedCombat: true
healthMultiplier: 7.0 #23 golpes para matar
damageMultiplier: 1.4 #2.5 corações de dmg
```

## Criando Chefes Mundiais

Os chefes mundiais são perigosos, mas acima de tudo têm muita saúde e convocam muitos reforços/têm muitos ataques de
área de efeito. Estes destinam-se a ser combatidos por grandes grupos de jogadores durante o maior período de tempo que
um confronto de elite deve durar. Não são muito mortais, mas têm muitas mecânicas que podem sobrecarregar jogadores
despreparados.

```yaml
normalizedCombat: true
healthMultiplier: 40.0 #160 golpes para matar
damageMultiplier: 1.5 #2.5-3 corações de dmg
```

Estes são apenas valores recomendados aproximados e quaisquer valores finais devem ser ajustados em torno dos próprios
confrontos.
