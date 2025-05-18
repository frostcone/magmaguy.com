Aqui está uma análise abrangente de como a saúde / dano escala no EliteMobs. Deve ser usada como referência ao desenhar masmorras.

Está focada em Bosses Personalizados, mas os Elites normais escalam da mesma forma.

# Antes de começar!

Não precisa de ler tudo isto se apenas quiser fazer ajustes rápidos. Salte para a secção "Usando estes dados para masmorras" para ver cálculos rápidos muito simplificados e uma série de configurações recomendadas pré-feitas!

# Escalamento (em geral)

No EliteMobs, por predefinição, os bosses ganham 7 de saúde máxima e causam mais 1 de dano por nível.

As armas dos jogadores causam mais 7 de dano por nível, e a armadura reduz 0.25 de dano por nível (mas existem 4 espaços de armadura que contribuem para o total, o que equivale a 1). Finalmente, os jogadores ganham saúde máxima à medida que desbloqueiam as patentes de prestígio.

# Dano causado por Bosses Personalizados

A fórmula de dano para Bosses Personalizados é:

```
( ( ( dano base / 2 ) * multiplicador de dano do boss personalizado) + nível do boss - redução de armadura do jogador ) * multiplicador de dano global
```

## dano base

Isto pode ser uma de duas coisas:

1.  O valor em mobproperties para o tipo de entidade do boss.
2.  Como isto pode ser difícil de ter em mente ao desenhar masmorras e outro conteúdo, os Bosses Personalizados podem ter o campo normalizedCombat, que aplica um padrão de 5 de dano, que tem o melhor escalamento para a progressão do EliteMobs. Numa atualização futura, o normalized combat será ativado por predefinição para todos os bosses regionais.

## multiplicador de dano do boss personalizado

Este é o multiplicador de dano no ficheiro do Boss Personalizado. Predefinição é 1.

## nível do boss

Como deve imaginar, este é apenas o nível do boss. Isto significa que os bosses causam mais um de dano por nível.

## redução de armadura do jogador

A armadura do jogador reduz 0.25 de dano por nível, e existem 4 espaços de armadura que podem contribuir para o total. Adicionalmente, cada nível de proteção contra projéteis reduz o dano de projétil em 0.025.

## multiplicador de dano global

Este é o multiplicador em MobCombatSettings. Predefinição é 1.

# Saúde máxima de Bosses Personalizados

A fórmula de saúde para Bosses Personalizados é:

```
( saúde máxima base + nível do boss * 7 ) * multiplicador de saúde do boss personalizado
```

## saúde máxima base

Isto pode ser uma de duas coisas:

1.  A saúde máxima padrão da entidade vanilla do Minecraft.
2.  Como isto pode ser difícil de ter em mente ao desenhar masmorras e outro conteúdo, os Bosses Personalizados podem ter o campo normalizedCombat, que aplica um padrão de 7 de saúde, que tem o melhor escalamento para a progressão do EliteMobs. O normalized combat é ativado por predefinição para todos os bosses regionais.

## nível

Este é o nível do boss

## multiplicador de saúde do boss personalizado

Este é o multiplicador no ficheiro do Boss Personalizado. Predefinição é 1.

# Dano causado a Bosses Personalizados

A fórmula de dano com que os jogadores atingem Bosses Personalizados tem demasiadas pequenas variáveis como golpes críticos e tempos de recarga para explicar em detalhe aqui. Uma versão simplificada parece-se com isto:

```
dano = Nível da arma
```

É assim que o dano se parecerá aproximadamente numa configuração média ideal.

# Usando estes dados para masmorras

**NOTA: ISTO ASSUME QUE ESTÁ A USAR OS VALORES `normalizedCombat`!** Esses valores foram especificamente feitos para equilibrar masmorras mais facilmente.

Parte da dificuldade de um boss é fazê-lo ter a saúde e o dano apropriados para o encontro. No entanto, tenha em mente que isto é apenas uma parte disso, e que os poderes são igualmente importantes.

O seguinte é apresentado no formato correto para o ficheiro de Boss Personalizado.

## Os cálculos rápidos fáceis

1.  O EliteMobs tem 7 golpes como a quantidade de golpes que um jogador com uma arma do mesmo nível que um boss leva para o matar, assumindo sem modificadores.
    1.  Isto significa que um multiplicador de 2.0 significa que os jogadores terão de atingir o boss 2 x 7 = 14 vezes. 0.5 significa 7 / 2 = 3.5.
2.  O dano base normalizedCombat, assumindo que a armadura do jogador é do mesmo nível que o boss, é de 2.5 de dano ou 1.25 corações de dano por golpe.
    1.  Isto significa que um multiplicador de 2.0 significa que os jogadores perderão 3 corações por golpe, e um multiplicador de 0.5 fará com que os jogadores percam 0.75 corações por golpe.

**Tenha em mente que os jogadores tendem a priorizar armas, e muitas vezes acabam com armadura muito pior do que as armas. A menos que desenhe tipos muito específicos de arenas com combate à distância, provavelmente não quererá causar muito dano por golpe.** Teste o seu conteúdo!

## Criando um mob de masmorra médio

Com o escalamento de normalizedCombat, pode aplicar uma configuração muito minimalista:

```yaml
normalizedCombat: true
healthMultiplier: 1.0 #4 golpes para matar
damageMultiplier: 1.0 #1.5 corações de dano
```

**Nota: como 1.0 é a predefinição, isto significa que também pode simplesmente não definir nada**.

## Criando grupos de mobs fracos (trash packs)

Os grupos de mobs fracos são numerosos mas não muito perigosos:

```yaml
normalizedCombat: true
healthMultiplier: 0.7 #3 golpes para matar
damageMultiplier: 0.5 #0.5 corações de dano
```

## Criando reforços

Os reforços devem morrer muito facilmente, mas representam um perigo em termos de dano (estes valores recomendados para 4+ entidades corpo a corpo, o uso real pode variar):

```yaml
normalizedCombat: true
healthMultiplier: 0.25 #1 golpe para matar
damageMultiplier: 0.6 #1 coração de dano
```

## Criando minibosses

Os minibosses devem manter a sua posição e representar um desafio mecânico para os jogadores. Deve ser um teste de habilidade que dura um pouco, mas não algo extremamente mortal:

```yaml
normalizedCombat: true
healthMultiplier: 3.0 #10 golpes para matar
damageMultiplier: 1.2 #2 corações de dano
```

## Criando bosses

Os bosses são um verdadeiro desafio, a conclusão de uma acumulação numa masmorra e um verdadeiro teste de habilidade com tudo em jogo. Os encontros devem ser longos e a morte deve ser uma ameaça presente.

```yaml
normalizedCombat: true
healthMultiplier: 7.0 #23 golpes para matar
damageMultiplier: 1.4 #2.5 corações de dano
```

## Criando Bosses de Mundo

Os bosses de mundo são perigosos, mas acima de tudo têm muita saúde e invocam muitos reforços / têm muitos ataques de área de efeito. Estes são destinados a ser combatidos por grandes grupos de jogadores durante a maior quantidade de tempo que um encontro de elite deve durar. Não são muito mortais, mas têm muitas mecânicas que podem sobrecarregar jogadores despreparados.

```yaml
normalizedCombat: true
healthMultiplier: 40.0 #160 golpes para matar
damageMultiplier: 1.5 #2.5-3 corações de dano
```

Estes são apenas valores recomendados aproximados e quaisquer valores finais devem ser ajustados em torno dos próprios encontros.