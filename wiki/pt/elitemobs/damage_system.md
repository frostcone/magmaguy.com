Esta é uma análise abrangente de como a saúde/dano são escalados em EliteMobs. Deve ser usada como referência ao projetar masmorras.

É focada em Bosses Customizados, mas Elites normais escalam da mesma forma.

# Antes de começar!

Não precisa de ler tudo isto se apenas quiser fazer ajustes rápidos. Avance para a secção "Usando estes dados para masmorras" para ver cálculos rápidos muito simplificados e uma série de configurações recomendadas pré-definidas!

# Escala (em geral)

Em EliteMobs, por padrão, os bosses ganham 7 de saúde máxima e causam 1 de dano a mais por nível.

As armas dos jogadores causam 7 de dano a mais por nível, e a armadura reduz 0,25 de dano por nível (mas existem 4 slots de armadura que contribuem para o total, o que equivale a 1). Finalmente, os jogadores ganham saúde máxima à medida que desbloqueiam os ranks de prestígio.

# Dano causado por Bosses Customizados

A fórmula de dano para Bosses Customizados é:

```
( ( ( dano base / 2 ) * multiplicador de dano de boss customizado) + nível do boss - redução de armadura do jogador ) * multiplicador de dano global
```

## dano base

Isto pode ser uma de duas coisas:

1.  O valor em mobproperties para o tipo de entidade do boss.
2.  Como pode ser difícil ter isso em mente ao projetar masmorras e outros conteúdos, os Bosses Customizados podem ter o campo normalizedCombat, que aplica um dano padrão de 5, que tem a melhor escala para a progressão de EliteMobs. Numa atualização posterior, o combate normalizado será ativado por padrão para todos os bosses regionais.

## multiplicador de dano de boss customizado

Este é o multiplicador de dano no ficheiro do Boss Customizado. O padrão é 1.

## nível do boss

Como pode imaginar, este é apenas o nível do boss. Isto significa que os bosses causam um dano a mais por nível.

## redução de armadura do jogador

A armadura do jogador reduz 0,25 de dano por nível, e existem 4 slots de armadura que podem contribuir para o total. Adicionalmente, cada nível de proteção contra projéteis reduz o dano de projéteis em 0,025.

## multiplicador de dano global

Este é o multiplicador em MobCombatSettings. O padrão é 1.

# Saúde máxima de Bosses Customizados

A fórmula de saúde para Bosses Customizados é:

```
( saúde máxima base + nível do boss * 7 ) * multiplicador de saúde do boss customizado
```

## saúde máxima base

Isto pode ser uma de duas coisas:

1.  A saúde máxima padrão da entidade vanilla do Minecraft.
2.  Como pode ser difícil ter isso em mente ao projetar masmorras e outros conteúdos, os Bosses Customizados podem ter o campo normalizedCombat, que aplica uma saúde padrão de 7, que tem a melhor escala para a progressão de EliteMobs. O combate normalizado é ativado por padrão para todos os bosses regionais.

## nível

Este é o nível do boss

## multiplicador de saúde do boss customizado

Este é o multiplicador no ficheiro do Boss Customizado. O padrão é 1.

# Dano causado a Bosses Customizados

A fórmula de dano com que os jogadores acertam nos Bosses Customizados tem demasiadas variáveis pequenas como golpes críticos e cooldowns para explicar em profundidade aqui. Uma versão simplificada parece-se com isto:

```
dano = Nível da arma
```

É assim que o dano deve parecer aproximadamente num cenário médio ideal.

# Usando estes dados para masmorras

**NOTA: ISTO PRESSUPÕE QUE ESTÁ A USAR OS VALORES `normalizedCombat`!** Esses valores foram especificamente feitos para equilibrar as masmorras mais facilmente.

Parte da dificuldade de um boss é fazê-lo ter a saúde e o dano apropriados para o encontro. No entanto, tenha em mente que isto é apenas uma parte, e que os poderes são igualmente importantes.

O seguinte é apresentado no formato correto para o ficheiro do Boss Customizado.

## Os cálculos rápidos fáceis

1.  EliteMobs tem 7 golpes como a quantidade de golpes que um jogador com uma arma do mesmo nível que um boss demora para o matar, assumindo que não há modificadores.
    1.  Isto significa que um multiplicador de 2,0 significa que os jogadores terão de acertar no boss 2 x 7 = 14 vezes. 0,5 significa 7 / 2 = 3,5.
2.  O dano base normalizedCombat, assumindo que a armadura do jogador é do mesmo nível que o boss, é 2,5 de dano ou 1,25 corações de dano por golpe.
    1.  Isto significa que um multiplicador de 2,0 significa que os jogadores perderão 3 corações por golpe, e um multiplicador de 0,5 fará com que os jogadores percam 0,75 corações por golpe.

**Tenha em mente que os jogadores tendem a priorizar as armas, e muitas vezes acabam com uma armadura muito pior do que as armas. A menos que projete tipos muito específicos de arenas com combate à distância, provavelmente não vai querer causar muito dano por golpe.** Teste o seu conteúdo!

## Criando um mob de masmorra médio

Com a escala de normalizedCombat, pode aplicar uma configuração muito minimalista:

```yaml
normalizedCombat: true
healthMultiplier: 1.0 #4 golpes para matar
damageMultiplier: 1.0 #1,5 corações de dano
```

**Nota: como 1.0 é o padrão, isto significa que também pode simplesmente não definir nada**.

## Criando packs de lixo

Os packs de lixo são numerosos, mas não muito perigosos:

```yaml
normalizedCombat: true
healthMultiplier: 0.7 #3 golpes para matar
damageMultiplier: 0.5 #0,5 corações de dano
```

## Criando reforços

Os reforços devem morrer muito facilmente, mas representam um perigo em termos de dano (estes valores são recomendados para 4 ou mais entidades de combate corpo a corpo, o uso real pode variar):

```yaml
normalizedCombat: true
healthMultiplier: 0.25 #1 golpe para matar
damageMultiplier: 0.6 #1 coração de dano
```

## Criando minibosses

Os minibosses devem manter a sua posição e apresentar um desafio mecânico para os jogadores. Deve ser um teste de habilidade que dure um pouco, mas não algo extremamente mortal:

```yaml
normalizedCombat: true
healthMultiplier: 3.0 #10 golpes para matar
damageMultiplier: 1.2 #2 corações de dano
```

## Criando bosses

Os bosses são um verdadeiro desafio, a conclusão de um desenvolvimento numa masmorra e um verdadeiro teste de habilidade com tudo em jogo. Os encontros devem ser longos e a morte deve ser uma ameaça presente.

```yaml
normalizedCombat: true
healthMultiplier: 7.0 #23 golpes para matar
damageMultiplier: 1.4 #2,5 corações de dano
```

## Criando Bosses Mundiais

Os bosses mundiais são perigosos, mas acima de tudo têm muita saúde e invocam muitos reforços/têm muitos ataques de área de efeito. Estes destinam-se a ser combatidos por grandes grupos de jogadores durante o maior período de tempo que um encontro de elite deve durar. Não são muito mortais, mas têm muitas mecânicas que podem sobrecarregar jogadores despreparados.

```yaml
normalizedCombat: true
healthMultiplier: 40.0 #160 golpes para matar
damageMultiplier: 1.5 #2,5-3 corações de dano
```

Estes são apenas valores aproximados recomendados e quaisquer valores finais devem ser ajustados em torno dos próprios encontros.
