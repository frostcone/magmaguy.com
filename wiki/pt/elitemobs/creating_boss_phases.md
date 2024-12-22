# Criando Fases de Boss

As Fases de Boss são uma sub-mecânica de Bosses Personalizados. O sistema por detrás destas fases é tão flexível e
poderoso que requer a sua própria explicação dedicada para garantir que faz bom uso desta funcionalidade.

### Como funcionam as Fases de Boss?

As Fases de Boss podem ser adicionadas a qualquer Boss Personalizado no EliteMobs usando o seguinte formato de configuração:

```yaml
phases:
- phase_2_boss.yml:0.X
- phase_3_boss.yml:0.Y
```

_**Nota: o boss que você gera originalmente e que contém a informação para todas as outras fases será referido como o
boss da fase 1. Não deve estar na entrada das fases.**_

O objetivo básico por detrás desta mecânica é permitir que os administradores alterem os atributos dos Bosses
Personalizados durante o combate. Ao usar o formato de configuração acima, você pode alterar completamente os arquivos
de configuração de fase para fase, o que significa que pode alterar 99,99% dos atributos - como poderes, multiplicadores
de dano, multiplicadores de saúde, tipo de entidade, disfarce, armadura usada...

Para conseguir isso, o EliteMobs apaga o seu boss durante o combate e substitui-o instantaneamente pela versão da fase
seguinte. O processo por detrás disto é instantâneo, por isso tende a ser bastante fluido - a menos que você queira
torná-lo chamativo de propósito.

### Exemplo

Pegue este exemplo de boss de fase:

Arquivo: phase_1_boss.yml

```yaml
isEnabled: true
level: 50
healthMultiplier: 10
entityType: STRAY
powers:
- attack_gravity.yml
phases:
- phase_2_boss.yml:0.60
- phase_3_boss.yml:0.30
```

Arquivo: phase_2_boss.yml

```yaml
isEnabled: true
level: 50
healthMultiplier: 10
entityType: SKELETON
powers:
- attack_gravity.yml
- arrow_fireworks.yml
```

Arquivo: phase_3_boss.yml

```yaml
isEnabled: true
level: 50
healthMultiplier: 10
entityType: WITHER_SKELETON
powers:
- arrow_rain
```

Isto constitui um Boss de Fase válido. Se você gerar o phase_1_boss.yml, ele irá gerar um Stray com os atributos
listados acima. Depois de ser danificado até _60%_ da sua saúde, será imediatamente substituído no mesmo local pelo Boss
Personalizado tal como configurado no phase_2_boss.yml, uma vez que o arquivo de configuração
declara `- phase_2_boss.yml:0.60` (_phase_2_boss.yml é o nome do arquivo para esse boss personalizado, 0.60 é 60% de
saúde_). _Note que o boss da fase 2 irá gerar com 60% da sua saúde, já que é quando ele muda para essa fase._ O boss
terá os poderes listados no arquivo phase_2_boss.yml. Uma vez que o boss da fase 2 seja danificado até 30% da sua saúde,
ele gera o boss definido para a fase 3. Note que os poderes para a fase 3 são independentes dos anteriores - você pode
mudar completamente os poderes entre fases, tal como quase todos os outros atributos.

## Avançado

### Mecânicas Herdadas

Aqui está uma lista de coisas que não mudam de fase para fase:

- O primeiro Boss de Fase na cadeia determina quais fases o boss irá passar, o que significa que você não deve colocar
  uma entrada de fases para os outros bosses na fase.

- A tabela de ameaças/tabela de danos permanece a mesma, o que significa que a distribuição de loot e o sistema de aggro
  avançado não são afetados por uma mudança de fase.

- A mudança de fases é baseada em % de saúde perdida, que é preservada de fase para fase. Isto significa que se o seu
  boss estiver definido para entrar na fase 2 com 50% de saúde, o boss que aparecer para substituir o boss da fase 1
  ainda estará com 50% de saúde. Isto também significa que cada fase pode ter quantidades de saúde completamente
  diferentes sem causar problemas.

- Os Bosses de Fase retornam à Fase 1 se forem curados de volta à saúde total através do sistema de regeneração de boss
  fora de combate padrão.

- Os Bosses de Fase que também são Bosses Regionais partilham o mesmo raio de leash e mecânica de timeout em todas as
  fases, e irão renascer como o boss da fase 1 depois do timer de respawn terminar.

#### Avisos

Aqui está uma lista de mecânicas que funcionam de uma forma que pode inicialmente ser contra-intuitiva:

- Se um Boss de Fase for morto durante qualquer fase, ele irá dropar o loot dessa fase. Isto significa que se alguém
  conseguir matar um boss de fase muito rapidamente (1-shot), ele irá realmente morrer e dropar o loot que está
  configurado para esse arquivo de boss, que pode não ser necessariamente a fase final. Você pode corrigir isso
  configurando a tabela de loot para ser a mesma em todos os arquivos de boss para este boss de fase, ou garantindo que
  os seus Bosses de Fase têm HP suficiente a ponto de ser impossível matá-los em apenas alguns golpes. Alternativamente,
  você pode ter tabelas de loot especiais para pessoas capazes de pular fases.

- Uma vez que os Bosses de Fase realmente fazem com que Bosses Personalizados gerem durante o combate, eles farão toda a
  sua rotina de geração quando gerarem. Como tal, tenha cuidado quando se trata de mensagens de geração e comandos que
  são executados na geração. Além disso, os bosses de fase não morrem se mudarem de fase, são simplesmente trocados por
  outra coisa. Isto significa que os comandos que são executados na morte só serão executados para o último Boss de
  Fase, ou se o jogador conseguir pular uma fase causando dano suficiente. Comandos que são executados na geração podem
  ser usados para conectar-se a mudanças de fase. \*Nota:\* a mensagem de geração não será enviada novamente para o boss
  da fase 1 se eles renascerem devido ao boss de fase ser regenerado de volta à saúde total.

- Os bosses de fase podem vir montados ou deixar de estar montados entre fases. Se o boss de fase for morto antes da
  montaria morrer, a montaria persistirá até à próxima fase. Se o boss regenerar de volta ao máximo, a montaria é
  apagada e o boss deixa de estar montado, a menos que esteja configurado para montar uma entidade durante a fase 1.

- Uma vez que novos Bosses Personalizados são gerados entre fases, a mecânica de geração de 1 vez é reiniciada entre
  fases e em curas totais.

### Dicas & Truques

- Você pode usar o fato de que o equipamento e os tipos de entidade podem ser alterados durante o combate para fazer com
  que o boss pareça cada vez mais (ou menos) perigoso durante a luta.

- Embora possível, a menos que haja um objetivo de design específico em mente, é provavelmente melhor que os poderes que
  o Boss de Fase tem não mudem drasticamente entre fases, pois os jogadores têm mais probabilidade de desfrutar de uma
  progressão que pareça natural ao longo da luta.

- Você pode usar comandos onSpawn para executar comandos entre fases.

- As fases podem ser usadas para mudar o boss do modo corpo a corpo para o modo à distância e vice-versa.

- Os Bosses de Fase foram construídos para serem bosses difíceis com muitos HP. Eles são normalmente melhor servidos
  como encontro final de boss para dungeons ou como grandes Bosses Mundiais.

- Ao projetar encontros, tenha em mente que é possível que os reforços não sejam mortos pelos jogadores entre fases.

- Os bosses podem ter qualquer número de fases que você quiser, mas quanto mais fases tiverem, mais saúde precisarão
  para que cada fase seja importante.
