# FreeMinecraftModels (FMM)

# ***Antes de começar!***

O FreeMinecraftModels (FMM) está atualmente em **alfa**! Isso significa que vários recursos ainda não estão prontos e estão sendo desenvolvidos ativamente.

No entanto, neste momento, o núcleo do plugin está totalmente funcional - convertendo arquivos bbmodel, gerando pacotes de recursos, gerando entidades no jogo e gerenciando suas animações, tudo está funcionando, embora talvez não 100% polido.

Considere apoiar o desenvolvimento em https://www.patreon.com/magmaguy !

O conteúdo do pacote de recursos exportado é licenciado sob a licença CC0, sem direitos reservados. Você está livre para usar, distribuir, modificar para quaisquer propósitos, sem restrições ou necessidade de atribuição.

# Usando este plugin

## O que o FreeMinecraftModels (FMM) pode fazer pelos administradores de servidores Minecraft?

Ele pode:

- Importar modelos .bbmodel ou fmmodel (formato personalizado do FFM)
- Gerar pacotes de recursos com modelos que excedem os limites normais de modelo de pacote de recursos do Minecraft (até ~~112x112x112~~ 106x106x106 unidades ou 7x7x7 blocos no jogo)
- Exibir esses modelos no jogo por meio do comando `/fmm spawn static <id>`, onde o id é o nome do arquivo do modelo, em minúsculas e sem a extensão do arquivo
- Animar esses modelos como foram configurados para serem animados no Blockbench
- Gerenciar animações de estado padrão sem exigir outros plugins (andar, ocioso, morrer, atacar, gerar)

### Como você adiciona um modelo existente?

Para importar um modelo, basta arrastar o .bbmodel para a pasta de importações e executar `/fmm reload`. Isso gerará um arquivo .fmmodel na pasta `models` e adicionará o modelo ao pacote de recursos na pasta `outputs`.

***Você precisará usar esse pacote de recursos para visualizar o modelo corretamente!*** É um pacote de recursos normal, então tudo o que você precisa fazer é colocá-lo na pasta do seu pacote de recursos. Os servidores Minecraft têm uma maneira de hospedar pacotes de recursos em serviços de terceiros, como o Google Drive ou um serviço especializado como https://resourcepack.host/, este último site pode ser a maneira mais fácil de fazer isso.

### Como você visualiza o modelo no jogo?

Existem duas (planejadas) categorias de modelos.

- Os modelos `Static` são para modelos que não se movem (mas podem ter animações) e servem mais como decorações - pense em algo como um poste de luz ou uma árvore de Natal.
- Os modelos `Dynamic` são para modelos que se comportam como mobs do Minecraft, ou seja, eles se movem e executam vários comportamentos associados a mobs. Pense em algo como modelos de chefe personalizados ou adicionando tipos de entidade completamente novos ao Minecraft.

#### Visualizando modelos estáticos no jogo

Para visualizar modelos estáticos no jogo, use o comando `/fmm spawn static <id>`, onde o id é o nome do arquivo do modelo, em minúsculas e sem a extensão do arquivo.

#### Visualizando modelos dinâmicos no jogo

Para visualizar modelos dinâmicos no jogo, use o comando `/fmm spawn dynamic <id>`, onde o id é o nome do arquivo do modelo, em minúsculas e sem a extensão do arquivo.

## O que o FreeMinecraftModels (FMM) pode fazer pelos modeladores?

O FMM segue as regras padrão do pacote de recursos para a geração de pacotes de recursos. Além disso, ele tenta ser o mais compatível possível com modelos compatíveis com o Model Engine para tentar padronizar a criação de modelos entre plugins.

### Recursos/restrições de geração de modelos

Se você já criou modelos para o Model Engine, estará familiarizado com muitas das restrições de geração de pacote de recursos do Minecraft:

#### **Cubos:**

Os cubos são os mesmos aqui do que no Blockbench, são os cubos que compõem o modelo.

- Os cubos podem ter até ~~112x112x112~~ 106x106x106 "pixels" (unidades do Blockbench) ou 7x7x7 blocos no jogo (restrições normais do Minecraft ignoradas usando tamanhos de exibição, em breve serão ignoradas para 1.19.4+ graças a entidades de exibição)
- As rotações legais para cubos são 0, 22.5, -22.5, 45 e -45. Nenhuma outra rotação funciona.
- Os cubos só giram em um eixo, o que significa que uma rotação de [22.5, 0, 0] é boa, uma rotação de [22.5, 0, 45] não funcionará totalmente e só girará em um eixo.

#### **Ossos:**

Os ossos são o que o Blockbench chama de "grupos". Eles servem para agrupar os cubos, e devem ser usados para agrupar ossos para animações Blueprint.

- Os ossos podem ter até ~~112x112x112~~ 106x106x106 (deveria ser 112, não sei por que isso está acontecendo) "pixels" (unidades do Blockbench) ou 7x7x7 blocos no jogo. *Observe que o tamanho dos ossos é definido pelo que eles possuem, então se você tiver cubos que estão mais de 7 blocos de distância, você provavelmente excederá esse limite de tamanho. Ignorar esse limite é tão fácil quanto colocar os blocos em um boneBlueprint diferente não contido no primeiro boneBlueprint!*
- Pode ter qualquer rotação!

Os ossos são significativamente mais flexíveis do que os cubos, mas você deve usar o mínimo possível de ossos! No FMM, devido a limitações do Minecraft, cada boneBlueprint é uma entidade diferente. Em escala, isso afetará o desempenho bastante rápido! Use sempre o mínimo possível de ossos e esteja ciente de quantos modelos você está planejando gerar - quanto mais você planeja ter, menos ossos você deve ter!

#### **Ossos Virtuais**

Se você vem do Model Engine, provavelmente quer saber se/como os ossos virtuais são implementados no FMM. Os ossos virtuais foram marcados, mas não são implementados atualmente além das bases muito básicas.

No entanto, no mínimo, os seguintes ossos virtuais serão compatíveis com o FMM em breve:

- Hitboxes/altura dos olhos: um boneBlueprint chamado "hitbox" com um cubeBlueprint que define os limites e tem o mesmo valor x e z (o maior valor será escolhido se eles não forem os mesmos) define a hitbox. O nível dos olhos é definido no ponto de pivô do boneBlueprint da hitbox.
- Tag de nome: um boneBlueprint cujo nome começa com "tag_". Honestamente, eu preferiria ser mais específico aqui e usar "tag_name" para usar tags para outras coisas, mas isso será seriamente considerado mais tarde.

Nenhum outro recurso virtual boneBlueprint é garantido para ser adicionado em um futuro próximo.

## Mesclando pacotes de recursos

Ao usar o FMM, você provavelmente precisará mesclar pacotes de recursos.

Você pode mesclar pacotes de recursos manualmente, mas recomendamos usar uma ferramenta online, como [merge.elmakers](https://merge.elmakers.com/), para mesclar seus pacotes de recursos.

#### **Distribuição de arquivos mais segura, fácil e não editável**

Uma coisa que o FMM tenta abordar é o uso de modelos pelos usuários que eles obtiveram para editá-los de maneiras que o criador do modelo não queria que eles editassem, especificamente para refazer a skin ou alterar ligeiramente um modelo e, potencialmente, tentar revendê-lo como uma criação original.

Para esse fim, o FMM usa o formato de arquivo `.fmmodel`, que visa remover arquivos `.bbmodel` até o ponto em que eles podem ser usados pelo plugin, mas não podem ser editados no Blockbench.

Como modelador, você agora tem a opção de lançar um arquivo `.fmmodel` não editável, um arquivo `.bbmodel` editável ou até mesmo fazer preços diferenciais ou termos de serviço de distribuição para os dois.

Gerar um `.fmmodel` é tão simples quanto colocar seu `.bbmodel` na pasta `~/plugins/FreeMinecraftModels/imports` e recarregar o plugin com `/fmm reload` ou reiniciar o servidor. Seu `.fmmodel` estará então na pasta `~/plugins/FreeMinecraftModels/models`.

## O que o FreeMinecraftModels (FMM) pode fazer para desenvolvedores que desejam integrá-lo em seus plugins?

O FMM tem um repositório maven!
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

*Observação: o FreeMinecraftModels é projetado para ser usado como uma API e exigirá a instalação do plugin no servidor. Não o sombreie no seu plugin!*

O FMM visa ser o mais fácil possível de usar como uma API.

No momento, há apenas uma classe que você precisa conhecer se deseja usar o FMM como uma API para seu plugin, e essa classe é `StaticEntity`.

Aqui está um trecho para lidar com um modelo estático:

```java
public class FreeMinecraftModelsModel {
    private StaticEntity staticEntity = null;

    //Criar o modelo
    public FreeMinecraftModelsModel(String id, Location location) {
        //Isso gera a entidade!
        staticEntity = StaticEntity.create(id, location);
        //Isso verifica se a entidade foi gerada corretamente
        if (staticEntity == null) Logger.warningMessage("FMM falhou ao encontrar um modelo chamado " + id + " !");
    }

    public void remove() {
        //Isso remove a entidade
        staticEntity.remove();
    }
}
```

Lembre-se de que os modelos estáticos são projetados para permanecer no lugar e atuar como um elemento decorativo em uma localização fixa (as animações não contam como 'movimento' aqui). Embora seja possível movê-los, considere se você pode querer usar um modelo dinâmico se esse for o seu objetivo.

E aqui está como o EliteMobs, meu plugin de chefes personalizados, usa entidades dinâmicas:

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

Os modelos dinâmicos são construídos em cima de uma entidade viva, que pode ser fornecida ao usar o método de criação como no exemplo acima, ou ao executar o método de geração em uma entidade dinâmica.

Embora não haja nenhum recurso formal da API no momento, todos os elementos destinados ao uso da API estão contidos dentro do ModeledEntity (classe base para todas as entidades), StaticEntity, DynamicEntity e ModeledEntityManager. 99% dos desenvolvedores devem encontrar todos os métodos de que precisam distribuídos nessas três classes.

# Contribuindo para o projeto FreeMinecraftModels (FMM) como desenvolvedor

O FMM é distribuído sob a licença GPLV3 e contribuições de código são bem-vindas. Aqui estão as diretrizes básicas de contribuição:

- Siga as convenções de nomenclatura existentes, mantenha o nível de verbosidade existente e adicione documentação suficiente para que sua contribuição seja fácil de entender
- Mantenha as contribuições relevantes para o escopo do plugin. Se você não tiver certeza se será relevante, sinta-se à vontade para perguntar antes do tempo.
- Esteja ciente do impacto de desempenho do seu código. Algumas contribuições podem ser recusadas se forem muito não otimizadas ou causarem um impacto de desempenho muito grande.

## Esboço geral do plugin

Para economizar seu tempo, aqui está um rápido resumo do fluxo lógico do FMM:

1) Ler a pasta `imports`
2) Mover arquivos da pasta `imports` para a pasta `models`. Se o arquivo for um `.bbmodel`, ele será convertido para `.fmmodel` na pasta `models`.
3) Ler os arquivos na pasta `models`.
4) Interpretar todas as estruturas de modelo, criando `Skeleton`s que contêm grupos de `Bone`s, e esses ossos contêm grupos de `Bone`s e `Cube`s filhos. `Cube`s e `Bone`s geram os dados do pacote de recursos JSON a que cada um está relacionado. Isso significa que `Cube`s geram o JSON específico para cubos e `Bone`s geram os arquivos de contorno e boneBlueprint individuais. Observe que um boneBlueprint resulta em um arquivo de pacote de recursos. Os modelos são adicionados a uma lista à medida que são gerados.
5) Ainda no `Skeleton`, interpretar todas as `Animations` no modelo, se houver
6) Todos os dados foram inicializados, o pacote de recursos foi gerado na pasta `outputs` e o plugin está pronto para ser usado.

## Truques usados neste plugin:

Os truques usados aqui são bastante conhecidos e padronizados, mas serão listados, no entanto, porque podem ser contra-intuitivos.

Observe que esses truques são completamente invisíveis para os usuários e criadores de modelos; restrições e soluções alternativas são listadas apenas para ajudar você a entender como o FMM ignora várias limitações do Minecraft.

- Todos os modelos são ampliados 4x e, em seguida, o tamanho e o ponto de pivô são reajustados no código para estender o tamanho máximo teórico do modelo.
- Como os modelos de pacote de recursos só podem ter modelos de -16 a +32 de tamanho, os modelos são deslocados em segundo plano. Isso é completamente invisível para os jogadores.
- A armadura de cavalo de couro é usada para criar modelos com uma tonalidade que pode ser influenciada pelo código (ou seja, para indicações de dano). A armadura de cavalo deve ser definida como branca para exibir as cores corretas!
- O Blockbench usa um sistema específico de IDs para as texturas, mas na verdade lê as texturas sequencialmente da configuração. Os IDs são atribuídos aqui com base em sua posição na lista de texturas, seguindo como o Blockbench faz.
- Cada boneBlueprint é uma entidade diferente de suporte de armadura devido a limitações do Minecraft.
- A armadura de cavalo de couro está no slot da cabeça do suporte de armadura
- Os suportes de armadura são usados para os itens estáticos padrão. //todo: em breve, terei que implementar o novo sistema de exibição alternativo do MC 1.19.4+, é muito mais eficiente.
- Para evitar colisões com outros plugins que modificam a armadura de cavalo de couro, o FMM usa valores de dados de modelo personalizados começando em 50.000.

# Contribuindo para o projeto FreeMinecraftModels (FMM) em geral

O FMM é realmente financiado pela galera simpática do [https://www.patreon.com/magmaguy](https://www.patreon.com/magmaguy)! Todas as contribuições ajudam mais do que você imagina ;)

# Recursos planejados atualmente:
- Geração de RSP para clientes bedrock.
- Gerenciamento de RSP independente das propriedades do servidor com integração do Geyser.
- Entidades personalizadas (?).
- tag_projectile como meta ossos de onde projéteis podem ser disparados (pode ter mais de um por modelo).

# Limitações estranhas atuais que precisam ser corrigidas:
- Se o ponto de pivô (origem) de um boneBlueprint for definido como sendo mais de 67ish, o modelo começa a flutuar.

