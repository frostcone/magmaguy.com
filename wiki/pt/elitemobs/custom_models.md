[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Modelos Personalizados

A partir do EliteMobs 7.3.12, Modelos Personalizados foram adicionados ao EliteMobs por meio do [Model Engine](https://mythiccraft.io/index.php?resources/model-engine%E2%80%94ultimate-entity-model-manager-1-16-5-1-20-4.389/) e do [FreeMineCraftModels](https://www.spigotmc.org/resources/free-minecraft-models.111660/).

# Introdução

Do ponto de vista do EliteMobs, o sistema de Modelo Personalizado é muito simples, pois a única coisa que os administradores precisam fazer é adicionar uma linha a um arquivo de configuração de NPC ou Chefe Personalizado dizendo qual Modelo Personalizado usar. No entanto, é necessário tomar as etapas corretas com o Model Engine e o Minecraft para que esse sistema funcione completamente, e essas não são tão fáceis de entender.

Este guia detalhará a interação com o Model Engine e o Minecraft. Ele não dirá como usar o Blockbench para criar chefes personalizados, nem entrará em detalhes sobre como o Model Engine funciona. Já existem muitos guias sobre como fazer isso em outros lugares, e se você quiser aprender mais sobre esses sistemas, é melhor consultar diretamente sua documentação.

## FreeMineCraft Models

Se você quiser aprender como usar o FMM para fazer seus modelos funcionarem, pode conferir esta página wiki [esta]($language$/freeminecraftmodels/info.md) para saber mais.

# Requisitos Mínimos

EliteMobs 7.3.12 ou posterior, Model Engine R2.2.0\* ou posterior, Blockbench\*\*, um Pacote de Recursos do Minecraft em uso.

\* Este plugin pode ter outras dependências. Verifique a documentação deles.  
\*\* Necessário para criar e editar Modelos Personalizados. Não necessário se você estiver apenas procurando instalar conteúdo sem modificá-lo.

# Definindo manualmente um Modelo Personalizado

Observação: Este guia assume que você já possui um Modelo Personalizado válido. Esses modelos vêm em formatos de arquivo Blockbench (`.bbmodel`).

O EliteMobs é capaz de usar Modelos Personalizados para NPCs e Chefes Personalizados. O processo para fazer isso é o mesmo para ambos e é o seguinte:

## Etapa 1. Definindo a configuração do EliteMobs

Vá para o arquivo de configuração do Chefe Personalizado ou NPC que você deseja modificar e adicione a seguinte linha:

```yaml
customModel: modelname
```

Substitua `modelname` pelo nome do seu modelo. O nome é o nome do arquivo do Modelo Personalizado que você está usando. Como exemplo, o arquivo do Modelo Personalizado do Chefe de Teste é `showcase_boss.bbmodel`. Assim, a opção de configuração deve ser

```yaml
customModel: showcase_boss
```

E é isso para o EliteMobs! Agora fica um pouco mais complicado.

## Etapa 2. Gerando os dados do Model Engine

[_Observação: Em caso de dúvidas ou problemas, consulte o wiki do Model Engine aqui._](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#importing)

1.  Coloque seu arquivo Blockbench do Modelo Personalizado (`.bbmodel`) no diretório `(yourServer)/plugins/ModelEngine/blueprints`.
2.  Execute o comando `/meg reload`. Se tudo funcionar corretamente, você deve receber uma mensagem dizendo `[Model Engine] X modelos carregados`, onde `x` é a quantidade de modelos que você registrou.

## Etapa 3. Gerando o Pacote de Recursos

[**Observação: agora existe uma maneira alternativa e mais simples de fazer essa etapa neste link.**]($language$/elitemobs/custom_models.md&section=step-2.-generating-the-resource-pack) No entanto, é um pouco menos flexível do que o que está listado aqui.

Esta é provavelmente a parte mais complicada se você estiver procurando fazer com que seu servidor gerencie os downloads. **Tente verificar se o sistema funciona quando você tiver o pacote de recursos em seu cliente antes de procurar distribuí-lo automaticamente!**

1.  Vá para o diretório `(yourServer)/plugins/ModelEngine/resource pack` e crie um pacote de recursos usando esses dados ou adicione a pasta `assets` lá ao seu `assets` do pacote de recursos.
    1.  Se você estiver criando um novo pacote de recursos, pode colocar os arquivos em `resource pack` em um arquivo zipado, e isso será um pacote de recursos válido que você pode distribuir. [Mais informações](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack).
    2.  Se você já tiver um pacote de recursos, certifique-se de não estar sobrescrevendo acidentalmente modelos existentes. [Mais informações](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack).
2.  Distribua seu pacote de recursos para seus jogadores. **Apenas os jogadores que tiverem o pacote de recursos poderão ver os Modelos Personalizados**, e ficará muito estranho e quebrado para todos os outros. Se você pretende fazer uso intensivo disso, pode querer forçar o uso do pacote de recursos.
    1.  (Opcional) Para permitir que os jogadores baixem um pacote de recursos ao fazer login, você precisará hospedar o arquivo em algum lugar online e alterar o campo `resource-pack=` do server.properties para apontar para esse endereço.**\***
    2.  (Opcional) Se você estiver modificando os pacotes de recursos, precisará usar a opção `resource-pack-sha1=` para que o servidor possa verificar se o pacote de recursos do jogador precisa ser atualizado. Para gerar esse valor, carregue seu pacote de recursos para [http://onlinemd5.com/](http://onlinemd5.com/) e certifique-se de escolher a opção SHA1. Você terá que fazer isso a cada vez que atualizar seu Pacote de Recursos, caso contrário, seus usuários não receberão a atualização.**\***
    3.  (Opcional) Para forçar os jogadores a usar pacotes de recursos, use a opção `require-resource-pack=true` no server.properties.**\***

**Se você modificou o server.properties, você precisará reiniciar!**

**\*** Observação: Existem muitos guias online que podem ajudar você a fazer isso funcionar se essas instruções não estiverem ajudando.

### Mesclar pacotes de recursos

Se você precisar mesclar seus pacotes de recursos, pode fazê-lo manualmente. Mas recomendamos usar uma ferramenta online, como [merge.elmakers](https://merge.elmakers.com/), para mesclar seus pacotes de recursos.

## Etapa 4. Esperançosamente funciona

Supondo que tudo tenha sido feito corretamente, você agora deve conseguir ver o Modelo Personalizado no seu chefe ou NPC. Você pode gerá-los por meio dos comandos:

*   Chefe Personalizado: `/em spawncustom filename.yml`
*   NPC: `/em spawnnpc filename.yml`

Você pode então removê-los por meio do comando `/em remove`.

# Criando e adaptando Modelos Personalizados para o EliteMobs

O EliteMobs é capaz de usar qualquer modelo considerado válido pelo Model Engine, o que significa que não há muito que não possa ser feito com ele.

No entanto, quando se trata de animações, o uso de nomes específicos para as animações é necessário para garantir que os chefes possam usar as animações.

Esses nomes de animação são os que estão definidos no Blockbench na guia de animações. Você pode renomeá-los a qualquer momento, o que significa que você pode adaptar qualquer modelo existente para funcionar com o EliteMobs.

## Animações

Observe que esta seção ainda está em expansão, pois esse sistema ainda é muito recente. Mais informações serão adicionadas à medida que as solicitações de recursos forem enviadas.

### idle

`idle` é o nome de animação correto para entidades que não estão em combate e não estão se movendo. O EliteMobs não modifica o sistema de animação idle padrão que o Model Engine usa.

### walk

`walk` é o nome de animação correto para entidades que estão se movendo. O EliteMobs não modifica o sistema de animação idle padrão que o Model Engine usa.

### attack

Existem três tipos de animações de ataque:

#### attack

`attack` é o nome de animação genérico correto para quando um chefe ataca.

#### attack_melee

`attack_melee` é o nome de animação correto para ataques feitos quando um Chefe Personalizado ataca uma entidade usando um ataque corpo a corpo do vanilla Minecraft. Sobrescreve `attack`. Observe que a animação é reproduzida **após** o dano ser causado. Infelizmente, esta é uma limitação por enquanto. Como tal, tente tornar a animação muito rápida.

#### attack_ranged

`attack_ranged` é o nome de animação correto para ataques feitos quando um Chefe Personalizado gera uma entidade projetil. Sobrescreve `attack`. Observe que a animação é reproduzida **após** o projétil ser disparado. Infelizmente, esta é uma limitação por enquanto. Como tal, tente tornar a animação muito rápida.

### damaged

`damaged` é o nome de animação correto para a animação de dano que um Chefe Personalizado reproduz quando é danificado.

### death

`death` é o nome de animação correto para a animação de morte. O EliteMobs não modifica o sistema de animação idle padrão que o Model Engine usa.

### powers

Observação: este segmento ainda está em desenvolvimento. O seguinte são os recursos como estão planejados.

Cada poder no EliteMobs pode ter uma animação atribuída a ele. A animação sempre começa quando o poder é acionado e nenhum outro acionador é fornecido atualmente durante o uso do poder. Alguns poderes, como as invulnerabilidades, não farão nada, pois não têm acionadores e são apenas propriedades passivas dos chefes.

Para atribuir uma animação a um poder, a animação deve ter o mesmo nome do arquivo de poder do elitemobs.

Como exemplo, para adicionar uma animação ao poder do necronomicon zumbi, a animação deve ser chamada de `zombie_necronomicon.yml`. Ela começará a ser reproduzida assim que o poder for acionado e terminará quando a animação terminar, se não estiver definida para ser um loop, ou quando o poder terminar.

# Importando Modelos Personalizados de masmorras

## Etapa 1. Importação normal

Ao importar uma pasta zipada de empacotador de masmorras que contém Modelos Personalizados, os Modelos Personalizados são movidos automaticamente para `(yourServer)/plugins/ModelEngine/blueprints` e o Model Engine é recarregado automaticamente para gerar o pacote de recursos e os arquivos do Model Engine relevantes.

## Etapa 2. Gerando o Pacote de Recursos

Se você estiver online quando recarregar o EliteMobs para importar arquivos, o EliteMobs postará automaticamente uma mensagem no bate-papo na qual você pode clicar para gerar o pacote de recursos do EliteMobs. Alternativamente, você pode executar o comando `/em generateresourcepack` para gerá-lo.

Executar este comando copia todos os arquivos do pacote de recursos para a pasta `exports` do EliteMobs de forma não destrutiva. Isso significa que se você descompactar um pacote de recursos na pasta `exports` usando o nome do pacote de recursos `elitemobs_resource_pack` para sua pasta do pacote de recursos, o EliteMobs não excluirá nenhum dos arquivos lá, a menos que um arquivo com o mesmo nome seja obtido do Model Engine (exceto pack.meta e pack.png). Dessa forma, você pode atualizar seu pacote de recursos sem perder os modelos que você colocou nele anteriormente.

Por fim, o EliteMobs compacta o pacote de recursos na pasta `exports`, e este arquivo está pronto para distribuição.

Depois que isso for feito, o EliteMobs também sugere atualizar o código SHA1 para seu pacote de recursos.

### Etapa 2.5. Atualizando o SHA1

O código SHA1 no arquivo `server.properties` é usado para informar aos clientes se seu pacote de recursos está desatualizado e faz com que eles o atualizem se necessário. Este código pode ser gerado pelo EliteMobs clicando na opção no bate-papo que aparece após a etapa 2, ou executando o comando `/em updateresourcepack`

**Lembre-se de que isso atualiza seu arquivo server.properties com o código SHA1 correto para o pacote de recursos compactado na pasta `exports`.** Se você excluí-lo ou modificar o arquivo compactado após executar o comando, ele não funcionará.

## Etapa 3. Torne o arquivo publicamente disponível

Hospede o arquivo em um local de sua escolha. Algumas pessoas usam Google Drive ou Dropbox para isso. É melhor hospedar esse arquivo você mesmo, se você tiver a capacidade de fazer isso. Alguns plugins por aí também podem ajudá-lo a hospedá-lo diretamente em seu servidor Minecraft. Se você encontrar um plugin assim que funciona, avise o MagmaGuy no Discord e esta postagem será atualizada com essas informações.

