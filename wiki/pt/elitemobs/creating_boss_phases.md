Aqui está a tradução para português (Portugal), mantendo a formatação markdown:

# Criar Fases de Boss

As Fases de Boss são uma sub-mecânica dos Bosses Personalizados. O sistema por trás destas fases é tão flexível e poderoso que requer a sua própria explicação dedicada para garantir que faz bom uso desta funcionalidade.

### Como funcionam as Fases de Boss?

As Fases de Boss podem ser adicionadas a qualquer Boss Personalizado no EliteMobs usando o seguinte formato de configuração:

```yaml
phases:
- phase_2_boss.yml:0.X
- phase_3_boss.yml:0.Y
```

_**Nota: o boss que spawna originalmente e que contém a informação para todas as outras fases será referido como o boss da fase 1. Não deve estar na entrada `phases`.**_

A intenção básica por trás desta mecânica é permitir que os administradores alterem os atributos dos Bosses Personalizados durante o combate. Usando o formato de configuração acima, é possível alterar completamente os ficheiros de configuração de fase para fase, o que significa que pode mudar 99.99% dos atributos - como poderes, multiplicadores de dano, multiplicadores de saúde, tipo de entidade, disfarce, armadura usada...

Para conseguir isto, o EliteMobs apaga o seu boss durante o combate e substitui-o instantaneamente pela versão da próxima fase. O processo por trás disto é instantâneo, por isso tende a ser bastante contínuo - a menos que queira torná-lo vistoso de propósito.

### Exemplo

Considere este exemplo de boss de fase:

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

Isto constitui um Boss de Fase válido. Se spawnar phase_1_boss.yml, ele spawnará um Stray com os atributos listados acima. Depois de ser danificado até _60%_ da sua saúde, será imediatamente substituído na mesma localização pelo Boss Personalizado conforme definido em phase_2_boss.yml, uma vez que o ficheiro de configuração indica `- phase_2_boss.yml:0.60` (_phase_2_boss.yml é o nome do ficheiro para esse boss personalizado, 0.60 é 60% de saúde_). _Note que o boss da fase 2 spawnará com 60% da sua saúde, uma vez que é quando ele muda para essa fase._ O boss terá os poderes listados no ficheiro phase_2_boss.yml. Assim que o boss da fase 2 for danificado até 30% da sua saúde, ele spawna o boss definido para a fase 3. Note que os poderes para a fase 3 não estão relacionados com os anteriores - pode mudar completamente os poderes entre fases, tal como quase todos os outros atributos.

## Avançado

### Mecânicas herdadas

Aqui está uma lista de coisas que não mudam de fase para fase:

- O primeiro Boss de Fase na cadeia determina por quais fases o boss passará, o que significa que não deve colocar uma entrada `phases` para os outros bosses na fase.

- A Tabela de Ameaça / Tabela de Dano permanece a mesma, o que significa que a distribuição de saque e o sistema avançado de aggro não são afetados por uma mudança de fase.

- A mudança de fases é baseada na % de saúde perdida, que é preservada de fase para fase. Isto significa que se o seu boss estiver definido para entrar na fase 2 aos 50% de saúde, o boss que aparecerá para substituir o boss da fase 1 ainda estará com 50% de saúde. Isto também significa que cada fase pode ter quantidades completamente diferentes de saúde sem que isso cause problemas.

- Os Bosses de Fase revertem para a Fase 1 se forem curados de volta à saúde total através do sistema de regeneração de boss fora de combate padrão.

- Os Bosses de Fase que também são Bosses Regionais partilham o mesmo raio de coleira e mecânica de tempo limite em todas as fases, e respawnarão como o boss da fase 1 após o temporizador de respawn terminar.

#### Avisos

Aqui está uma lista de mecânicas que funcionam de uma forma que pode ser inicialmente contra-intuitiva:

- Se um Boss de Fase for morto durante qualquer fase, ele largará o saque dessa fase. Isto significa que se alguém conseguir matar um boss de fase muito rapidamente (1-shot), ele morrerá e largará o saque que está configurado para esse ficheiro de boss, o que pode não ser necessariamente a fase final. Pode corrigir isto definindo a tabela de saque para ser a mesma em todos os ficheiros de boss para este boss de fase, ou garantindo que os seus Bosses de Fase têm HP suficiente ao ponto de ser impossível matá-los em apenas alguns golpes. Alternativamente, pode ter tabelas de saque especiais para pessoas capazes de saltar fases.

- Uma vez que os Bosses de Fase realmente fazem com que Bosses Personalizados spawnem durante o combate, eles farão toda a sua rotina de spawn quando spawnarem. Como tal, tenha cuidado com as mensagens de spawn e comandos que correm no spawn. Adicionalmente, os bosses de fase não morrem se mudarem de fase, são simplesmente trocados por outra coisa. Isto significa que os comandos que correm na morte só correrão para o último Boss de Fase, ou se o jogador conseguir saltar uma fase ao causar dano suficiente. Comandos que correm no spawn podem ser usados para ligar-se a mudanças de fase. \*Nota: \* a mensagem de spawn não será enviada novamente para o boss da fase 1 se ele respawnar devido à regeneração do boss de fase de volta à saúde total.

- Os bosses de fase podem vir montados ou deixar de estar montados entre fases. Se o boss de fase for morto antes da montada estar morta, a montada persistirá para a próxima fase. Se o boss regenerar de volta ao total, a montada é apagada e o boss fica desmontado, a menos que esteja configurado para montar uma entidade durante a fase 1.

- Uma vez que novos Bosses Personalizados são spawnados entre fases, a mecânica de spawn única reinicia entre fases e em curas completas.

### Dicas e truques

- Pode usar o facto de que o equipamento e os tipos de entidade podem ser alterados ao longo do combate para fazer com que o boss pareça cada vez mais (ou menos) perigoso ao longo da luta.

- Embora possível, a menos que haja um objetivo de design específico em mente, é provavelmente melhor que os poderes que o Boss de Fase tem não mudem drasticamente entre fases, pois os jogadores são mais propensos a desfrutar de uma progressão que se sinta natural ao longo da luta.

- Pode usar comandos onSpawn para correr comandos entre fases.

- As fases podem ser usadas para mudar o boss do modo corpo a corpo para o modo à distância e vice-versa.

- Os Bosses de Fase foram construídos para serem bosses difíceis com muito HP. São geralmente melhor usados como encontro de boss final para masmorras ou como grandes Bosses Mundiais.

- Ao desenhar encontros, tenha em mente que é possível que os reforços não sejam mortos pelos jogadores entre fases.

- Os bosses podem ter qualquer número de fases que desejar, mas quanto mais fases tiverem, mais saúde precisarão para que cada fase tenha impacto.