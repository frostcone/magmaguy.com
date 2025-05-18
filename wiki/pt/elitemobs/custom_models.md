A partir do EliteMobs 7.3.12, Modelos Personalizados foram adicionados ao EliteMobs através do [Model Engine](https://mythiccraft.io/index.php?resources/model-engine%E2%80%94ultimate-entity-model-manager-1-16-5-1-20-4.389/) e do [FreeMineCraftModels](https://www.spigotmc.org/resources/free-minecraft-models.111660/).

# Prefácio

Da perspetiva do EliteMobs, o sistema de Modelos Personalizados é muito simples, pois a única coisa que os administradores têm de fazer é adicionar uma linha a um ficheiro de configuração de NPC ou Boss Personalizado a indicar qual Modelo Personalizado usar. No entanto, é necessário seguir os passos corretos com o Model Engine e o Minecraft para que este sistema esteja totalmente funcional, e estes não são tão fáceis de configurar.

Este guia irá detalhar a interface com o Model Engine e o Minecraft. Não irá explicar como usar o Blockbench para criar bosses personalizados, nem irá detalhar como o Model Engine funciona. Já existem muitos guias sobre como fazer isso noutros locais, e se quiser saber mais sobre esses sistemas, é melhor consultar diretamente a documentação deles.

## FreeMineCraft Models

Se quiser saber como pode usar o FMM para fazer os seus modelos funcionarem, pode consultar [esta](pt-pt/freeminecraftmodels/info.md) página da wiki para saber mais.

# Requisitos mínimos

EliteMobs 7.3.12 ou posterior, Model Engine R2.2.0\* ou posterior, Blockbench\*\*, a usar Pacotes de Recursos do Minecraft.

\* Este plugin pode ter dependências adicionais. Verifique a documentação deles.
\*\* Necessário para criar e editar Modelos Personalizados. Não é necessário se estiver apenas a instalar conteúdo sem o modificar.

# Definir manualmente um Modelo Personalizado

Nota: Este guia assume que já tem um Modelo Personalizado válido. Estes vêm em formatos de ficheiro do Blockbench (`.bbmodel`).

O EliteMobs é capaz de usar Modelos Personalizados para NPCs e Bosses Personalizados. O processo para fazer isto é o mesmo para ambos, e é o seguinte:

## Passo 1. Definir a configuração do EliteMobs

Vá ao ficheiro de configuração do Boss Personalizado ou NPC que quer modificar e adicione a seguinte linha:

```yaml
customModel: modelname
```

Substitua `modelname` pelo nome do seu modelo. O nome é o nome do ficheiro do Modelo Personalizado que está a usar. Como exemplo, o ficheiro do Modelo Personalizado do Test Boss é `showcase_boss.bbmodel`. Assim, a opção de configuração deve ser

```yaml
customModel: showcase_boss
```

E é tudo para o EliteMobs! Agora fica um pouco mais complicado.

## Passo 2. Gerar os dados do Model Engine

[_Nota: Em caso de dúvida ou problemas, consulte a wiki do Model Engine aqui._](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#importing)

1.  Coloque o seu ficheiro de Modelo Personalizado do Blockbench (`.bbmodel`) na diretoria `(seuServidor)/plugins/ModelEngine/blueprints` .
2.  Execute o comando `/meg reload` . Se tudo funcionou corretamente, deverá receber uma mensagem a dizer `[Model Engine] X models loaded` , onde `x` é a quantidade de modelos que registou.

## Passo 3. Gerar o Pacote de Recursos

[**Nota: existe agora uma forma alternativa e mais simples de fazer este passo neste link.**](pt-pt/elitemobs/custom_models.md&section=step-2.-generating-the-resource-pack) No entanto, é um pouco menos flexível do que o que está listado aqui.

Esta é possivelmente a parte mais complicada se estiver a tentar fazer com que o seu servidor gere os downloads. **Tente verificar se o sistema funciona quando tem o pacote de recursos no seu cliente antes de pensar em distribuí-lo automaticamente!**

1.  Vá à diretoria `(seuServidor)/plugins/ModelEngine/resource pack` e crie um pacote de recursos usando esses dados ou adicione a pasta `assets` de lá aos `assets` do seu pacote de recursos.
    1.  Se estiver a criar um novo pacote de recursos, pode colocar os ficheiros em `resource pack` num ficheiro zipado, e isso será um pacote de recursos válido que pode distribuir. [Mais informações](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack).
    2.  Se já tiver um pacote de recursos, certifique-se de que não está a sobrescrever acidentalmente modelos existentes. [Mais informações](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack).
2.  Distribua o seu pacote de recursos aos seus jogadores. **Apenas os jogadores que tiverem o pacote de recursos conseguirão ver os Modelos Personalizados**, e parecerá muito estranho e quebrado para todos os outros. Se pretende usar estes modelos intensivamente, pode querer forçar o uso do pacote de recursos.
    1.  (Opcional) Para permitir que os jogadores descarreguem um pacote de recursos ao entrar, terá de hospedar o ficheiro em algum lugar online e alterar o campo `resource-pack=` no server.properties para apontar para esse endereço.**\***
    2.  (Opcional) Se estiver a modificar os pacotes de recursos, vai querer usar a opção `resource-pack-sha1=` para que o servidor possa verificar se o pacote de recursos do jogador precisa de ser atualizado. Para gerar este valor, carregue o seu pacote de recursos para [http://onlinemd5.com/](http://onlinemd5.com/) e certifique-se de que escolhe a opção SHA1. Terá de fazer isto sempre que atualizar o seu Pacote de Recursos, caso contrário os seus utilizadores não receberão a atualização.**\***
    3.  (Opcional) Para forçar os jogadores a usar pacotes de recursos, use a opção `require-resource-pack=true` no server.properties.**\***

**Se modificou o server.properties, terá de reiniciar!**

**\*** Nota: Existem muitos guias online que podem ajudá-lo a fazer isto funcionar se estas instruções não o estiverem a ajudar.

### Juntar pacotes de recursos

Caso precise de juntar os seus pacotes de recursos, pode fazê-lo manualmente. Mas recomendamos usar uma ferramenta online como [merge.elmakers](https://merge.elmakers.com/) para juntar os seus pacotes de recursos.

## Passo 4. Esperar que funcione

Assumindo que tudo foi feito corretamente, deverá agora conseguir ver o Modelo Personalizado no seu boss ou NPC. Pode invocá-los através dos comandos:

*   Boss Personalizado: `/em spawncustom filename.yml`
*   NPC: `/em spawnnpc filename.yml`

Pode então removê-los através do comando `/em remove`.

# Criar e adaptar Modelos Personalizados para EliteMobs

O EliteMobs é capaz de usar qualquer modelo considerado válido pelo Model Engine, o que significa que não há muito que não possa ser feito com ele.

No entanto, no que diz respeito a animações, é necessário usar nomes específicos para as animações para garantir que os bosses possam usar as animações.

Estes nomes de animação são os definidos no Blockbench no separador de animações. Pode renomeá-los a qualquer momento, o que significa que pode adaptar quaisquer modelos existentes para funcionar com o EliteMobs.

## Animações

Por favor, note que esta secção ainda está a ser expandida, pois este sistema é muito recente. Mais será adicionado à medida que os pedidos de funcionalidades chegarem.

### idle

`idle` é o nome de animação correto para entidades que não estão em combate e não se estão a mover. O EliteMobs não modifica o sistema de animação idle padrão que o Model Engine usa.

### walk

`walk` é o nome de animação correto para entidades que se estão a mover. O EliteMobs não modifica o sistema de animação idle padrão que o Model Engine usa.

### attack

Existem três tipos de animações de ataque:

#### attack

`attack` é o nome de animação genérico correto para quando um boss ataca.

#### attack_melee

`attack_melee` é o nome de animação correto para ataques feitos quando um Boss Personalizado ataca uma entidade usando um ataque corpo a corpo vanilla do Minecraft. Sobrescreve `attack` . Por favor, note que a animação é reproduzida **depois** do dano ser causado. Esta é infelizmente uma limitação por agora. Como tal, tente tornar a animação muito rápida.

#### attack_ranged

`attack_ranged` é o nome de animação correto para ataques feitos quando um Boss Personalizado invoca uma entidade projétil. Sobrescreve `attack`. Por favor, note que a animação é reproduzida **depois** do projétil ser disparado. Esta é infelizmente uma limitação por agora. Como tal, tente tornar a animação muito rápida.

### damaged

`damaged` é o nome de animação correto para a animação de dano que um Boss Personalizado reproduz quando é danificado.

### death

`death` é o nome de animação correto para a animação de morte. O EliteMobs não modifica o sistema de animação idle padrão que o Model Engine usa.

### powers

Nota: este segmento ainda está em desenvolvimento. As seguintes são as funcionalidades conforme planeadas.

Cada poder no EliteMobs pode ter uma animação atribuída. A animação começa sempre que o poder é ativado, e não são fornecidos mais gatilhos durante o uso do poder. Alguns poderes, como as invulnerabilidades, não farão nada, pois não têm gatilhos e são apenas propriedades passivas dos bosses.

Para atribuir uma animação a um poder, a animação deve ter o mesmo nome que o ficheiro de poder do elitemobs.

Como exemplo, para adicionar uma animação ao poder zombie necronomicon, a animação deve chamar-se `zombie_necronomicon.yml` . Começará a ser reproduzida assim que o poder for ativado, e terminará quando a animação acabar se não estiver definida para repetir ou quando o poder terminar.

# Importar Modelos Personalizados de masmorras

## Passo 1. Importação normal

Ao importar uma pasta zipada de um packager de masmorras que contém Modelos Personalizados, os Modelos Personalizados são automaticamente movidos para `(seuServidor)/plugins/ModelEngine/blueprints` e o Model Engine recarrega automaticamente para gerar o pacote de recursos e os ficheiros do Model Engine relevantes.

## Passo 2. Gerar o Pacote de Recursos

Se estiver online quando recarregar o EliteMobs para importar ficheiros, o EliteMobs publicará automaticamente uma mensagem no chat na qual pode clicar para gerar o pacote de recursos do EliteMobs. Alternativamente, pode executar o comando `/em generateresourcepack` para o gerar.

Executar este comando copia todos os ficheiros do pacote de recursos para a pasta `exports` do EliteMobs de forma não destrutiva. Isto significa que se deszipar um pacote de recursos para a pasta exports usando o nome de pacote de recursos `elitemobs_resource_pack` para a sua pasta de pacote de recursos, o EliteMobs não apagará nenhum dos ficheiros lá, a menos que um ficheiro com o mesmo nome seja obtido do ModelEngine (exceto pack.meta e pack.png). Desta forma, consegue atualizar o seu pacote de recursos sem perder os modelos que colocou anteriormente nele.

Finalmente, o EliteMobs zipa o pacote de recursos na pasta `exports`, e este ficheiro está pronto para distribuição.

Depois de isto estar feito, o EliteMobs também sugere atualizar o código SHA1 para o seu pacote de recursos.

### Passo 2.5. Atualizar o SHA1

O código SHA1 no ficheiro `server.properties` é usado para informar os clientes se o seu pacote de recursos está desatualizado, e faz com que o atualizem se necessário. Este código pode ser gerado através do EliteMobs clicando na opção no chat que aparece após o passo 2, ou executando o comando `/em updateresourcepack`.

**Tenha em mente que isto atualiza o seu ficheiro server.properties com o código SHA1 correto para o pacote de recursos zipado na pasta `exports`.** Se o apagar ou modificar o ficheiro zipado depois de executar o comando, não funcionará.

## Passo 3. Tornar o ficheiro publicamente disponível

Hospede o ficheiro num local à sua escolha. Algumas pessoas usam o Google Drive ou o Dropbox para isto. É melhor hospedar este ficheiro você mesmo, se tiver a capacidade para o fazer. Alguns plugins por aí também podem ajudá-lo a hospedá-lo diretamente do seu servidor Minecraft. Se encontrar um plugin assim que funcione, informe o MagmaGuy no Discord e esta publicação será atualizada com essa informação.