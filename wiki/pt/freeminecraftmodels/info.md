# ***Antes de começar!***

FreeMinecraftModels (FMM) está atualmente em **alfa**! Isto significa que várias funcionalidades ainda não estão
concluídas e estão a ser ativamente trabalhadas.

No entanto, neste momento, o núcleo do plugin está totalmente funcional - converter arquivos bbmodel, gerar pacotes de
recursos, gerar entidades no jogo e gerir as suas animações está tudo a funcionar, mesmo que talvez não esteja 100%
polido.

Considere apoiar o desenvolvimento em https://www.patreon.com/magmaguy!

Os conteúdos do pacote de recursos exportado são licenciados sob a licença CC0, sem direitos reservados. Pode usar,
distribuir e modificar para qualquer fim sem restrições ou necessidade de atribuição.

# Usando este plugin

## O que o FreeMinecraftModels (FMM) pode fazer por administradores de servidores Minecraft?

Ele pode:

- Importar modelos .bbmodel ou fmmodel (formato personalizado da FFM)
- Gerar pacotes de recursos com modelos que excedem os limites normais de modelos de pacotes de recursos do Minecraft (
  até ~~112x112x112~~ 106x106x106 unidades ou 7x7x7 blocos no jogo)
- Exibir esses modelos no jogo através do uso do comando `/fmm spawn static <id>` onde o id é o nome do arquivo do
  modelo, em letras minúsculas e sem a extensão do arquivo
- Animar esses modelos como foram configurados para serem animados no Blockbench
- Gerenciar animações de estado padrão sem exigir outros plugins (caminhar, inativo, morte, ataque, surgimento)

### Como adicionar um modelo existente?

Para importar um modelo, basta arrastar o .bbmodel para a pasta imports e usar `/fmm reload`. Isso irá gerar um arquivo
.fmmodel na pasta `models` e adicionar o modelo ao pacote de recursos na pasta `outputs`.

***Você precisará usar esse pacote de recursos para visualizar o modelo corretamente!*** É um pacote de recursos normal,
então tudo o que precisa de fazer é colocá-lo na sua pasta de pacotes de recursos. Os servidores Minecraft têm uma
maneira de hospedar pacotes de recursos em serviços de terceiros, como o Google Drive ou um serviço especializado
como https://resourcepack.host/, esse último site pode ser a maneira mais fácil de fazê-lo.

### Como visualizar o modelo no jogo?

Existem duas categorias (planeadas) de modelos.

- Modelos `Estáticos` são para modelos que não se movem (mas podem ter animações) e servem mais como decorações - pense em algo como um poste de luz ou uma árvore de Natal.
- Modelos `Dinâmicos` são para modelos que se comportam como mobs do Minecraft, ou seja, movem-se e realizam vários
  comportamentos associados aos mobs. Pense em algo como modelos de chefes personalizados ou adicionar tipos de
  entidades completamente novos ao Minecraft.

#### Visualizar modelos estáticos no jogo

Para visualizar modelos estáticos no jogo, use o comando `/fmm spawn static <id>` onde o id é o nome do arquivo do
modelo, em letras minúsculas e sem a extensão do arquivo.

#### Visualizar modelos dinâmicos no jogo

Para visualizar modelos dinâmicos no jogo, use o comando `/fmm spawn dynamic <id>` onde o id é o nome do arquivo do
modelo, em letras minúsculas e sem a extensão do arquivo.

## O que o FreeMinecraftModels (FMM) pode fazer por modeladores?

O FMM segue as regras padrão do pacote de recursos para geração de pacotes de recursos. Além disso, tenta ser o mais
compatível possível com modelos compatíveis com ModelEngine, a fim de tentar padronizar a criação de modelos entre
plugins.

### Recursos / restrições de geração de modelos

Se já criou modelos para o ModelEngine, estará familiarizado com muitas das restrições de geração de pacotes de recursos do Minecraft:

#### **Cubos:**

Os cubos são os mesmos aqui como são no Blockbench, são os cubos que compõem o modelo.

- Os cubos podem ter até ~~112x112x112~~ 106x106x106 "pixels" (unidades Blockbench) ou 7x7x7 blocos no jogo (restrições
  normais do Minecraft ignoradas usando tamanhos de exibição, que em breve serão mais ignoradas para 1.19.4+ graças às
  entidades de exibição)
- Rotações legais para cubos são 0, 22,5, -22,5, 45 e -45. Nenhuma outra rotação funciona.
- Os cubos só giram num eixo, o que significa que uma rotação de [22,5, 0, 0] está bem, uma rotação de [22,5, 0, 45] não
  funcionará totalmente e só girará num eixo.

#### **Ossos:**

Os ossos são o que o Blockbench chama de "grupos". Eles servem para agrupar os cubos e devem ser usados para agrupar
ossos para animaçõesBlueprint.

- Os ossos podem ter até ~~112x112x112~~ 106x106x106 (deveria ser 112, não sei porque é assim) "pixels" (unidades
  Blockbench) ou 7x7x7 blocos no jogo. *Observe que o tamanho dos ossos é definido pelo que eles têm, então se tiver
  cubos que estão a mais de 7 blocos de distância, provavelmente excederá este limite de tamanho. Ignorar esse limite é
  tão fácil quanto colocar os blocos num ossoBlueprint diferente não contido no primeiro ossoBlueprint!*
- Pode ter qualquer rotação!

Os ossos são significativamente mais flexíveis do que os cubos, mas deve usar o mínimo de ossos possível! Em FMM, devido
às limitações do Minecraft, cada ossoBlueprint é uma entidade diferente. Numa escala, isso afetará o desempenho
rapidamente! Use sempre o mínimo de ossos que puder e tenha em mente quantos desse modelo está a planear gerar - quanto
mais tiver, menos ossos deve ter!

#### **Ossos Virtuais**

Se vem do ModelEngine, provavelmente quer saber se/como os ossos virtuais são implementados em FMM. Os ossos virtuais
foram reservados, mas atualmente não são implementados além de uma base muito básica.

No entanto, no mínimo, os seguintes ossos virtuais serão compatíveis com FMM em breve:

- Hitboxes / altura dos olhos: um ossoBlueprint chamado "hitbox" com um cuboBlueprint que define os limites e tem o
  mesmo valor x e z (o maior valor será escolhido se não forem iguais) define a hitbox. O nível do olho é definido no
  ponto de pivô do ossoBlueprint da hitbox.
- Etiqueta de nome: um ossoBlueprint cujo nome começa com "tag_". Sinceramente, eu preferiria ser mais específico aqui e
  usar "tag_name" para usar tags para outras coisas, mas isso será seriamente considerado mais tarde.

Nenhum outro recurso de ossoBlueprint virtual tem garantia de ser adicionado num futuro imediato.

## Unir pacotes de recursos

Ao usar o FMM, provavelmente precisará de unir pacotes de recursos.

Pode unir pacotes de recursos manualmente, mas recomendamos usar uma ferramenta online
como [merge.elmakers](https://merge.elmakers.com/) para unir seus pacotes de recursos.

#### **Distribuição de arquivos mais segura, fácil e não editável**

Uma coisa que o FMM tenta abordar é que os usuários reaproveitem modelos que obtiveram para editá-los de maneiras que o
criador do modelo não queria que eles editassem, especificamente para redesenhar ou alterar ligeiramente um modelo e
potencialmente tentar revender como uma criação original.

Para esse fim, o FMM usa o formato de arquivo `.fmmodel` que visa reduzir os arquivos `.bbmodel` a ponto de poderem ser
usados pelo plugin, mas não podem ser editados no Blockbench.

Como modelador, agora tem a opção de divulgar um arquivo `.fmmodel` não editável, um arquivo `.bbmodel` editável ou
mesmo fazer preços diferenciados ou termos de serviço de distribuição para os dois.

Gerar um `.fmmodel` é tão simples quanto colocar seu `.bbmodel` na pasta `~/plugins/FreeMinecraftModels/imports` e
recarregar o plugin com `/fmm reload` ou reiniciar o servidor. O seu `.fmmodel` estará então na
pasta `~/plugins/FreeMinecraftModels/models`.

## O que o FreeMinecraftModels (FMM) pode fazer por desenvolvedores que desejam integrá-lo nos seus plugins?

O FMM tem um repo maven!
Maven:

```xml
<repository>
    <id>ossrh-public</id>
    <url>https://s01.oss.sonatype.org/content/groups/snapshots/</url>
</repository>

<dependency>
<groupId>com.magmaguy</groupId>
<artifactId>FreeMinecraftModels</artifactId>
<version>1.1.3-SNAPSHOT</version>
<scope>provided</scope>
</dependency>
```

Gradle:

```kotlin
compileOnly group : 'com.magmaguy', name: 'FreeMinecraftModels', version: '1.1.2-SNAPSHOT'
```

*Observe que o FreeMinecraftModels deve ser usado como uma API e exigirá a instalação do plugin no servidor. Não o
misture no seu plugin!*

O FMM visa ser o mais fácil possível de usar como uma API.

Neste momento, existe apenas uma classe que precisa de saber se deseja usar o FMM como uma API para o seu plugin, que
é `StaticEntity`.

Aqui está um trecho para lidar com um modelo estático:

```java
public class FreeMinecraftModelsModel {
    private StaticEntity staticEntity = null;

    //Cria o modelo
    public FreeMinecraftModelsModel(String id, Location location) {
        //Isso gera a entidade!
        staticEntity = StaticEntity.create(id, location);
        //Isso verifica se a entidade foi gerada corretamente
        if (staticEntity == null) Logger.warningMessage("FMM falhou ao encontrar um modelo com o nome " + id + " !");
    }

    public void remove() {
        //Isso remove a entidade
        staticEntity.remove();
    }
}
```

Lembre-se de que os modelos estáticos destinam-se a permanecer no lugar e atuar como um elemento decorativo numa
localização fixa (animações não contam como 'movimento' aqui). Embora seja possível movê-los, considere se poderá querer
usar um modelo dinâmico caso esse seja o seu propósito.

E aqui está como o EliteMobs, o meu plugin de chefes personalizados, usa entidades dinâmicas:

```java
package com.magmaguy.elitemobs.thirdparty.custommodels.freeminecraftmodels;

import com.magmaguy.elitemobs.mobconstructor.custombosses.CustomBossEntity;
import com.magmaguy.elitemobs.thirdparty.custommodels.CustomModelInterface;
import com.magmaguy.freeminecraftmodels.api.ModeledEntityManager;
import com.magmaguy.freeminecraftmodels.customentity.DynamicEntity;
import lombok.Getter;
import org.bukkit.entity.LivingEntity;

public class CustomModelFMM implements CustomModelInterface {
    @Getter
    private DynamicEntity dynamicEntity;

    public CustomModelFMM(LivingEntity livingEntity, String modelName, String nametagName) {
        dynamicEntity = DynamicEntity.create(modelName, livingEntity);
        if (dynamicEntity == null) return;
        dynamicEntity.setName(nametagName);
    }

    public static void reloadModels() {
        ModeledEntityManager.reload();
    }

    public static boolean modelExists(String modelName) {
        return ModeledEntityManager.modelExists(modelName);
    }

    @Override
    public void shoot() {
        if (dynamicEntity.hasAnimation("attack_ranged")) dynamicEntity.playAnimation("attack_ranged", false);
        else dynamicEntity.playAnimation("attack", false);
    }

    @Override
    public void melee() {
        if (dynamicEntity.hasAnimation("attack_melee")) dynamicEntity.playAnimation("attack_melee", false);
        else dynamicEntity.playAnimation("attack", false);
    }

    @Override
    public void playAnimationByName(String animationName) {
        dynamicEntity.playAnimation(animationName, false);
    }

    @Override
    public void setName(String nametagName, boolean visible) {
        dynamicEntity.setName(nametagName);
        dynamicEntity.setNameVisible(visible);
    }

    @Override
    public void setNameVisible(boolean visible) {
        dynamicEntity.setNameVisible(visible);
    }

    @Override
    public void switchPhase() {
        dynamicEntity.stopCurrentAnimations();
    }
}
```

Modelos dinâmicos são construídos sobre uma entidade viva, que pode ser fornecida ao usar o método de criação, como no
exemplo acima, ou ao executar o método de geração numa entidade dinâmica.

Embora não exista nenhum recurso de API formal neste momento, todos os elementos destinados ao uso da API estão contidos
em ModeledEntity (a classe base para todas as entidades), StaticEntity, DynamicEntity e ModeledEntityManager. 99% dos
desenvolvedores devem encontrar todos os métodos de que precisam distribuídos por essas três classes.

# Contribuindo para o projeto FreeMinecraftModels (FMM) como desenvolvedor

O FMM é distribuído sob a licença GPLV3 e as contribuições de código são bem-vindas. Aqui estão as diretrizes básicas de
contribuição:

- Siga as convenções de nomenclatura existentes, mantenha o nível de verbosidade existente e adicione documentação suficiente para que a sua contribuição seja fácil de entender
- Mantenha as contribuições relevantes para o escopo do plugin. Se não sabe se será relevante, sinta-se à vontade para
  perguntar com antecedência.
- Esteja atento ao impacto no desempenho do seu código. Algumas contribuições podem ser rejeitadas se forem muito pouco
  otimizadas ou causarem um impacto de desempenho muito grande.

## Delineamento geral do plugin

Para poupar algum tempo, aqui está uma análise rápida do fluxo lógico do FMM:

1) Lê a pasta `imports`
2) Move arquivos da pasta `imports` para a pasta `models`. Se o arquivo for um `.bbmodel`, ele é convertido
   para `.fmmodel` na pasta de modelos.
3) Lê os arquivos na pasta `models`.
4) Interpreta todas as estruturas do modelo, criando `Skeleton`s que contêm grupos de `Bone`s, e esses ossos contêm
   grupos de `Bone`s e `Cube`s filhos. `Cube`s e `Bone`s geram os dados do pacote de recursos JSON aos quais estão
   relacionados. Isso significa que os `Cube`s geram o JSON específico para cubos e os `Bone`s geram o esboço e os
   arquivos de ossoBlueprint individuais. Observe que um ossoBlueprint resulta num arquivo de pacote de recursos. Os
   modelos são adicionados a uma lista à medida que são gerados.
5) Ainda no `Skeleton`, interpreta todas as `Animações` no modelo, se houver
6) Todos os dados foram inicializados, o pacote de recursos foi gerado na pasta `outputs` e o plugin está pronto para
   ser usado.

## Truques usados neste plugin:

Os truques usados aqui são bastante bem estabelecidos e padronizados, mas serão listados mesmo assim porque podem ser
contra-intuitivos.

Observe que esses truques são todos completamente invisíveis para usuários e criadores de modelos; restrições e soluções
alternativas são listadas apenas para ajudá-lo a entender como o FMM ignora várias limitações do Minecraft.

- Todos os modelos são aumentados em 4x e, em seguida, o tamanho e o ponto de pivô são reajustados no código para
  estender o tamanho máximo teórico do modelo.
- Como os modelos de pacotes de recursos só podem ter modelos de -16 a +32 de tamanho, os modelos são deslocados em segundo plano. Isso é completamente invisível para os jogadores.
- A armadura de cavalo de couro é usada para criar modelos com uma tonalidade que pode ser influenciada por meio de
  código (ou seja, para indicações de danos). A armadura do cavalo deve ser definida para branco para exibir as cores
  corretas!
- O Blockbench usa um sistema específico de IDs para as texturas, mas realmente lê as texturas sequencialmente da
  configuração. Os IDs são atribuídos aqui com base na sua posição na lista de texturas, seguindo como o Blockbench faz.
- Cada ossoBlueprint é uma entidade de suporte de armadura diferente devido às limitações do Minecraft.
- A armadura de cavalo de couro está no slot da cabeça do suporte de armadura
- Os suportes de armadura são usados para os itens estáticos padrão. //todo: em breve terei que implementar o novo sistema de exibição alternativo do MC 1.19.4+, é muito mais eficiente.
- Para evitar colisões com outros plugins que modificam a armadura de cavalo de couro, o FMM usa valores de dados de
  modelo personalizados começando em 50.000.

# Contribuindo para o projeto FreeMinecraftModels (FMM) em geral

O FMM é realmente financiado coletivamente pelas pessoas adoráveis
em [https://www.patreon.com/magmaguy](https://www.patreon.com/magmaguy)! Todas as contribuições ajudam mais do que pode
imaginar ;)

# Recursos planejados atualmente:
- Geração RSP de cliente Bedrock.
- Gerenciamento de RSP independente das propriedades do servidor com integração geyser.
- Entidades personalizadas (?).
- tag_projectile como meta ossos dos quais projéteis podem ser disparados (pode ter mais de um por modelo).

# Limitações estranhas atuais que precisam ser corrigidas:

- Se o ponto de pivô (origem) de um ossoBlueprint estiver definido para mais de 67ish, o modelo começa a flutuar.
