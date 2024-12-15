# Criando Fases de Boss

As Fases de Boss são uma sub-mecânica de Bosses Personalizados. O sistema por trás destas fases é tão flexível e poderoso que requer a sua própria explicação dedicada para garantir que faz um bom uso desta funcionalidade.

### Como funcionam as Fases de Boss?

As Fases de Boss podem ser adicionadas a qualquer Boss Personalizado no EliteMobs usando o seguinte formato de configuração:

```yaml
phases:
- phase_2_boss.yml:0.X
- phase_3_boss.yml:0.Y
```

_**Nota: o boss que você gera originalmente, que contém as informações para todas as outras fases, será referido como o boss da fase 1. Ele não deve estar na entrada "phases".**_

A intenção básica por trás desta mecânica é permitir que os administradores alterem os atributos dos Bosses Personalizados durante o combate. Ao usar o formato de configuração acima, você pode alterar completamente os arquivos de configuração de fase para fase, o que significa que você pode alterar 99,99% dos atributos - como poderes, multiplicadores de dano, multiplicadores de vida, tipo de entidade, disfarce, armadura usada...

Para conseguir isto, o EliteMobs apaga o seu boss durante o combate e substitui-o instantaneamente pela versão da próxima fase. O processo por trás disto é instantâneo, por isso tende a ser bastante perfeito - a menos que você queira que seja chamativo de propósito.

### Exemplo

Veja este exemplo de boss de fase:

Ficheiro: phase_1_boss.yml

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

Ficheiro: phase_2_boss.yml

```yaml
isEnabled: true
level: 50
healthMultiplier: 10
entityType: SKELETON
powers:
- attack_gravity.yml
- arrow_fireworks.yml
```

Ficheiro: phase_3_boss.yml

```yaml
isEnabled: true
level: 50
healthMultiplier: 10
entityType: WITHER_SKELETON
powers:
- arrow_rain
```

Isto constitui um Boss de Fase válido. Se você gerar o phase_1_boss.yml, ele irá gerar um Stray com os atributos listados acima. Depois de ser danificado até _60%_ da sua vida, ele será imediatamente substituído no mesmo local pelo Boss Personalizado conforme formado no phase_2_boss.yml, já que o ficheiro de configuração afirma `- phase_2_boss.yml:0.60` (_phase_2_boss.yml é o nome do ficheiro para esse boss personalizado, 0.60 é 60% da vida_). _Note que o boss da fase 2 irá gerar com 60% da sua vida, já que é quando ele muda para essa fase._ O boss terá os poderes listados no ficheiro phase_2_boss.yml. Assim que o boss da fase 2 for danificado até 30% da sua vida, ele gera o boss definido para a fase 3. Note que os poderes da fase 3 não estão relacionados com os anteriores - você pode mudar completamente os poderes entre fases, assim como quase todos os outros atributos.

## Avançado

### Mecânicas herdadas

Aqui está uma lista de coisas que não mudam de fase para fase:

- O primeiro Boss de Fase na cadeia determina quais fases o boss irá passar, o que significa que você não deve colocar uma entrada "phases" para os outros bosses na fase.

- A tabela de ameaças / tabela de dano permanece a mesma, o que significa que a distribuição de loot e o sistema avançado de aggro não são afetados por uma mudança de fase

- A mudança de fases é baseada na % de vida perdida, que é preservada de fase para fase. Isto significa que se o seu boss estiver definido para entrar na fase 2 com 50% da vida, o boss que aparecer para substituir o boss da fase 1 ainda estará com 50% da vida. Isto também significa que cada fase pode ter quantidades completamente diferentes de vida sem causar problemas.

- Os Bosses de Fase voltam para a Fase 1 se forem curados de volta para a vida total através do sistema de regeneração de boss padrão fora de combate

- Os Bosses de Fase que também são Bosses Regionais partilham o mesmo raio de leash e mecânica de timeout em todas as fases, e irão regenerar como o boss da fase 1 após o temporizador de regeneração terminar.

#### Avisos

Aqui está uma lista de mecânicas que funcionam de uma forma que pode inicialmente ser contra-intuitiva:

- Se um Boss de Fase for morto durante qualquer fase, ele irá largar o loot dessa fase. Isto significa que se alguém conseguir matar um boss de fase muito rapidamente (um só ataque), ele irá realmente morrer e largar o loot que está configurado para esse ficheiro de boss, que pode não ser necessariamente a fase final. Você pode corrigir isto definindo a tabela de loot para ser a mesma em todos os ficheiros de boss para este boss de fase, ou certificando-se de que os seus Bosses de Fase têm HP suficiente ao ponto em que seja impossível matá-los em apenas alguns ataques. Alternativamente, você pode ter tabelas de loot especiais para pessoas capazes de pular fases.

- Como os Bosses de Fase realmente fazem com que Bosses Personalizados se gerem durante o combate, eles irão fazer toda a sua rotina de geração quando se gerarem. Como tal, tenha cuidado quando se trata de mensagens de geração e comandos que são executados na geração. Além disso, os bosses de fase não morrem se mudarem de fases, eles são simplesmente trocados por outra coisa. Isto significa que os comandos que são executados na morte só serão executados para o último Boss de Fase, ou se o jogador conseguir pular uma fase causando dano suficiente. Os comandos que são executados na geração podem ser usados para se conectar a mudanças de fase. \*Nota: \* a mensagem de geração não será enviada novamente para o boss da fase 1 se ele se regenerar devido ao boss de fase ser regenerado de volta para a vida total.

- Os bosses de fase podem vir montados ou deixar de ser montados entre fases. Se o boss de fase for morto antes da montaria morrer, a montaria irá persistir para a próxima fase. Se o boss regenerar de volta para o total, a montaria é apagada e o boss fica desmontado, a menos que esteja configurado para montar uma entidade durante a fase 1.

- Como novos Bosses Personalizados são gerados entre fases, a mecânica de geração única é reposta entre fases e em curas totais.

### Dicas e truques

- Você pode usar o facto de que equipamentos e tipos de entidade podem ser alterados durante o combate para fazer com que o boss pareça mais e mais (ou menos e menos) perigoso durante a luta

- Embora possível, a menos que haja um objetivo de design específico em mente, é provavelmente melhor que os poderes que o Boss de Fase tem não mudem drasticamente entre as fases, pois os jogadores têm maior probabilidade de desfrutar de uma progressão que parece natural durante toda a luta.

- Você pode usar comandos onSpawn para executar comandos entre fases

- As fases podem ser usadas para mudar o boss do modo melee para o modo ranged e vice-versa

- Os Bosses de Fase foram construídos para serem bosses difíceis com muito HP. Geralmente, são mais adequados como encontro final de boss para dungeons ou como grandes Bosses Mundiais.

- Ao conceber encontros, tenha em mente que é possível que os reforços não sejam mortos pelos jogadores entre fases.

- Os bosses podem ter qualquer número de fases que você quiser, mas quanto mais fases eles tiverem, mais vida eles precisarão para fazer com que cada fase importe.
