A partir do EliteMobs 7.3.12, Modelos Personalizados foram adicionados ao EliteMobs através do [Model Engine](https://mythiccraft.io/index.php?resources/model-engine%E2%80%94ultimate-entity-model-manager-1-16-5-1-20-4.389/) e do [FreeMineCraftModels](https://www.spigotmc.org/resources/free-minecraft-models.111660/).

# Prefácio

De uma perspetiva do EliteMobs, o sistema de Modelos Personalizados é muito simples, já que a única coisa que os administradores têm de fazer é adicionar uma linha ao ficheiro de configuração de um NPC ou Boss Personalizado, indicando qual o Modelo Personalizado a utilizar. No entanto, é necessário dar os passos corretos com o Model Engine e o Minecraft para que este sistema fique totalmente funcional, e estes não são tão fáceis de iniciar.

Este guia vai detalhar a fundo a interação com o Model Engine e o Minecraft. Não vai explicar como usar o Blockbench para criar bosses personalizados, nem vai detalhar como funciona o Model Engine. Já existem muitos guias sobre como fazer isso noutros locais e, se quiser aprender mais sobre esses sistemas, é melhor consultar diretamente a respetiva documentação.

## FreeMineCraft Models

Se quiser aprender como usar o FMM para que os seus modelos funcionem, pode consultar [esta]($language$/freeminecraftmodels/info.md) página wiki para saber mais.

# Requisitos mínimos

EliteMobs 7.3.12 ou posterior, Model Engine R2.2.0\* ou posterior, Blockbench\*\*, um pacote de recursos do Minecraft em utilização.

\* Este plugin pode ter outras dependências. Consulte a documentação no seu lado.  
\*\* Necessário para criar e editar Modelos Personalizados. Não é necessário se estiver apenas à procura de instalar conteúdo sem o modificar.

# Configurar manualmente um Modelo Personalizado

Nota: Este guia pressupõe que já tem um Modelo Personalizado válido. Estes vêm em formatos de ficheiro do Blockbench (`.bbmodel`).

O EliteMobs consegue usar Modelos Personalizados para NPCs e Bosses Personalizados. O processo para fazer isso é o mesmo para ambos, e é o seguinte:

## Passo 1. Configurar o EliteMobs

Vá ao ficheiro de configuração do Boss Personalizado ou NPC que quer modificar e adicione a seguinte linha:

```yaml
customModel: nomedomodelo
```

Substitua `nomedomodelo` pelo nome do seu modelo. O nome é o nome do ficheiro do Modelo Personalizado que está a utilizar. Por exemplo, o ficheiro de Modelo Personalizado do Test Boss é `showcase_boss.bbmodel`. Como tal, a opção de configuração deve ser

```yaml
customModel: showcase_boss
```

E isso é tudo para o EliteMobs! Agora é que fica um pouco mais complicado.

## Passo 2. Gerar os dados do Model Engine

[_Nota: Em caso de dúvida ou problemas, consulte a wiki do Model Engine aqui._](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#importing)

1. Coloque o seu ficheiro Blockbench do Modelo Personalizado (`.bbmodel`) no diretório `(oseuServidor)/plugins/ModelEngine/blueprints` .
2. Execute o comando `/meg reload` . Se tudo funcionou corretamente, deverá receber uma mensagem a dizer `[Model Engine] X models loaded` , onde `x` é a quantidade de modelos que registou.

## Passo 3. Gerar o Pacote de Recursos

[**Nota: existe agora uma forma alternativa e mais simples de fazer este passo neste link.**]($language$/elitemobs/custom_models.md&section=step-2.-generating-the-resource-pack) No entanto, é um pouco menos flexível do que o indicado aqui.

Esta é possivelmente a parte mais complicada se estiver a tentar fazer com que o seu servidor gestione os downloads. **Tente verificar se o sistema funciona quando tem o pacote de recursos no seu cliente antes de procurar distribuí-lo automaticamente!**

1. Vá ao diretório `(oseuServidor)/plugins/ModelEngine/resource pack` e crie um pacote de recursos utilizando esses dados ou adicione a pasta `assets` lá ao `assets` do seu pacote de recursos
    1. Se estiver a criar um novo pacote de recursos, pode colocar os ficheiros em `resource pack` num ficheiro zipado, e esse será um pacote de recursos válido que poderá distribuir. [Mais informações](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack).
    2. Se já tiver um pacote de recursos, certifique-se de que não está a substituir acidentalmente os modelos existentes. [Mais informações](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack).
2. Distribua o seu pacote de recursos aos seus jogadores. **Apenas os jogadores que tiverem o pacote de recursos conseguirão ver os Modelos Personalizados**, e parecerá muito estranho e quebrado para todos os outros. Se pretender fazer uso intensivo destes, pode querer forçar a utilização do pacote de recursos.
    1. (Opcional) Para permitir que os jogadores descarreguem um pacote de recursos ao iniciar a sessão, terá de alojar o ficheiro algures online e alterar o campo `resource-pack=` de server.properties para apontar para esse endereço.**\***
    2. (Opcional) Se estiver a modificar os pacotes de recursos, vai querer utilizar a opção `resource-pack-sha1=` para que o servidor possa verificar se o pacote de recursos do jogador precisa de ser atualizado. Para gerar este valor, carregue o seu pacote de recursos em [http://onlinemd5.com/](http://onlinemd5.com/) e certifique-se de que seleciona a opção SHA1. Terá de fazer isto sempre que atualizar o seu Pacote de Recursos, caso contrário os seus utilizadores não receberão a atualização.**\***
    3. (Opcional) Para forçar os jogadores a utilizar pacotes de recursos, utilize a opção `require-resource-pack=true` em server.properties.**\***

**Se modificou o server.properties, terá de reiniciar!**

**\*** Nota: Existem muitos guias online que o podem ajudar a fazer isto funcionar se estas instruções não o estiverem a ajudar.

### Juntar pacotes de recursos

Se precisar de juntar os seus pacotes de recursos, pode fazê-lo manualmente. Mas recomendamos que utilize uma ferramenta online como [merge.elmakers](https://merge.elmakers.com/) para juntar os seus pacotes de recursos.

## Passo 4. Esperar que funcione

Assumindo que tudo foi feito corretamente, agora deverá conseguir ver o Modelo Personalizado no seu boss ou NPC. Pode spawná-los através dos comandos:

* Boss Personalizado: `/em spawncustom nomedoficheiro.yml`
* NPC: `/em spawnnpc nomedoficheiro.yml`

Pode então removê-los através do comando `/em remove`.

# Criar e adaptar Modelos Personalizados para EliteMobs

O EliteMobs consegue usar qualquer modelo considerado válido pelo Model Engine, o que significa que não há muito que não se possa fazer com ele.

No entanto, no que toca a animações, é necessário utilizar nomes específicos para as animações para garantir que os bosses conseguem usar as animações.

Estes nomes de animação são os definidos no Blockbench no separador de animações. Pode renomeá-los em qualquer altura, o que significa que pode adaptar quaisquer modelos existentes para funcionarem com o EliteMobs.

## Animações

Tenha em atenção que esta secção ainda está em expansão, uma vez que este sistema é ainda muito recente. Mais será adicionado à medida que os pedidos de funcionalidades forem surgindo.

### idle

`idle` é o nome correto da animação para entidades que não estão em combate e não se estão a mover. O EliteMobs não modifica o sistema de animação idle predefinido que o Model Engine utiliza.

### walk

`walk` é o nome correto da animação para entidades que se estão a mover. O EliteMobs não modifica o sistema de animação idle predefinido que o Model Engine utiliza.

### attack

Existem três tipos de animações de ataque:

#### attack

`attack` é o nome genérico correto da animação para quando um boss ataca.

#### attack_melee

`attack_melee` é o nome correto da animação para ataques efetuados quando um Boss Personalizado ataca uma entidade usando um ataque corpo a corpo padrão do Minecraft. Substitui `attack` . Tenha em atenção que a animação é reproduzida **depois** do dano ser causado. Infelizmente, esta é uma limitação por agora. Como tal, tente fazer com que a animação seja muito rápida.

#### attack_ranged

`attack_ranged` é o nome correto da animação para ataques efetuados quando um Boss Personalizado gera uma entidade de projétil. Substitui `attack`. Tenha em atenção que a animação é reproduzida **depois** de o projétil ser disparado. Infelizmente, esta é uma limitação por agora. Como tal, tente fazer com que a animação seja muito rápida.

### damaged

`damaged` é o nome correto da animação para a animação de dano que um Boss Personalizado reproduz quando é atingido.

### death

`death` é o nome correto da animação para a animação de morte. O EliteMobs não modifica o sistema de animação idle predefinido que o Model Engine utiliza.

### powers

Nota: este segmento ainda está em desenvolvimento. As seguintes são as funcionalidades tal como estão planeadas.

Cada poder no EliteMobs pode ter uma animação atribuída. A animação começa sempre quando o poder é acionado e, atualmente, não são fornecidos mais acionadores durante a utilização do poder. Alguns poderes, como as invulnerabilidades, não farão nada porque não têm acionadores e são apenas propriedades passivas dos bosses.

Para atribuir uma animação a um poder, a animação tem de ter o mesmo nome do ficheiro de poder do elitemobs.

Por exemplo, para adicionar uma animação ao poder zombie necronomicon, a animação deverá chamar-se `zombie_necronomicon.yml` . Começará a ser reproduzida assim que o poder for acionado e terminará quando a animação terminar se não estiver definida para repetir ou quando o poder terminar.

# Importar Modelos Personalizados de dungeons

## Passo 1. Importação normal

Ao importar uma pasta zipada do empacotador de dungeons que contenha Modelos Personalizados, os Modelos Personalizados são automaticamente movidos para `(oseuServidor)/plugins/ModelEngine/blueprints` e o Model Engine é recarregado automaticamente para gerar o pacote de recursos relevante e os ficheiros do Model Engine.

## Passo 2. Gerar o Pacote de Recursos

Se estiver online quando recarregar o EliteMobs para importar ficheiros, o EliteMobs publicará automaticamente uma mensagem no chat na qual pode clicar para gerar o pacote de recursos do EliteMobs. Em alternativa, pode executar o comando `/em generateresourcepack` para o gerar.

A execução deste comando copia todos os ficheiros do pacote de recursos para a pasta `exports` do EliteMobs de forma não destrutiva. Isto significa que, se descompactar um pacote de recursos para a pasta exports utilizando o nome de pacote de recursos `elitemobs_resource_pack` para a sua pasta de pacote de recursos, o EliteMobs não eliminará nenhum dos ficheiros lá existentes, a menos que um ficheiro com o mesmo nome seja obtido do ModelEngine (exceto pack.meta e pack.png). Desta forma, consegue atualizar o seu pacote de recursos sem perder os modelos que colocou anteriormente.

Finalmente, o EliteMobs zipa o pacote de recursos na pasta `exports` e este ficheiro está pronto para distribuição

Depois de isto estar concluído, o EliteMobs também sugere que atualize o código SHA1 para o seu pacote de recursos.

### Passo 2.5. Atualizar o SHA1

O código SHA1 no ficheiro `server.properties` é utilizado para informar os clientes se o seu pacote de recursos está desatualizado e faz com que o atualizem se necessário. Este código pode ser gerado através do EliteMobs ao clicar na opção no chat que aparece após o passo 2 ou ao executar o comando `/em updateresourcepack`

**Tenha em atenção que isto atualiza o seu ficheiro server.properties com o código SHA1 correto para o pacote de recursos zipado na pasta `exports`.** Se o eliminar ou modificar o ficheiro zipado depois de executar o comando, não funcionará.

## Passo 3. Tornar o ficheiro publicamente disponível

Aloje o ficheiro num local à sua escolha. Algumas pessoas utilizam o Google Drive ou o Dropbox para isto. É melhor alojar este ficheiro você mesmo, se tiver essa capacidade. Alguns plugins podem também ajudá-lo a alojá-lo diretamente a partir do seu servidor Minecraft. Se encontrar um plugin como esse que funcione, informe o MagmaGuy no Discord e este artigo será atualizado com essa informação.
