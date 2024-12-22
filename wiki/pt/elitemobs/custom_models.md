A partir do EliteMobs 7.3.12, foram adicionados Modelos Personalizados ao EliteMobs através
do [Model Engine](https://mythiccraft.io/index.php?resources/model-engine%E2%80%94ultimate-entity-model-manager-1-16-5-1-20-4.389/)
e [FreeMineCraftModels](https://www.spigotmc.org/resources/free-minecraft-models.111660/).

# Prólogo

Do ponto de vista do EliteMobs, o sistema de Modelos Personalizados é muito simples, pois a única coisa que os
administradores têm de fazer é adicionar uma linha a um ficheiro de configuração de NPC ou Boss Personalizado indicando
qual Modelo Personalizado utilizar. No entanto, é necessário seguir os passos corretos com o Model Engine e o Minecraft
para que este sistema funcione totalmente, e estes não são tão fáceis de entender.

Este guia irá detalhar a forma de interface com o Model Engine e o Minecraft. Não irá explicar como utilizar o
Blockbench para criar bosses personalizados, nem irá detalhar como o Model Engine funciona. Já existem muitos guias
sobre como fazer isso noutros locais, e se quiser saber mais sobre esses sistemas, é melhor consultar diretamente a
documentação dos mesmos.

## Modelos Gratuitos de Minecraft

Se quiser saber como utilizar o FMM para que os seus modelos funcionem, pode
consultar [esta]($language$/freeminecraftmodels/info.md) página da wiki para saber mais.

# Requisitos mínimos

EliteMobs 7.3.12 ou posterior, Model Engine R2.2.0\* ou posterior, Blockbench\*\*, utilização de Pacotes de Recursos do
Minecraft.

\* Este plugin pode ter dependências adicionais. Consulte a documentação na sua página.
\*\* Necessário para criar e editar Modelos Personalizados. Não é necessário se pretender apenas instalar conteúdo sem o
modificar.

# Definir manualmente um Modelo Personalizado

Nota: Este guia assume que já tem um Modelo Personalizado válido. Estes vêm em formatos de ficheiro
Blockbench (`.bbmodel`).

O EliteMobs consegue utilizar Modelos Personalizados para NPCs e Bosses Personalizados. O processo para o fazer é o
mesmo para ambos e é o seguinte:

## Passo 1. Definir a configuração do EliteMobs

Vá ao ficheiro de configuração do Boss Personalizado ou NPC que pretende modificar e adicione a seguinte linha:

```yaml
customModel: nomemodelo
```

Substitua `nomemodelo` pelo nome do seu modelo. O nome é o nome do ficheiro do Modelo Personalizado que está a utilizar.
Por exemplo, o ficheiro do Modelo Personalizado do Test Boss é `showcase_boss.bbmodel`. Sendo assim, a opção de
configuração deverá ser

```yaml
customModel: showcase_boss
```

E é tudo para o EliteMobs! Agora é que a coisa fica um pouco mais complicada.

## Passo 2. Gerar os dados do Model Engine

[_Nota: Em caso de dúvida ou problemas, consulte a wiki do Model Engine aqui._](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#importing)

1. Coloque o seu ficheiro Blockbench do Modelo Personalizado (`.bbmodel`) no
   diretório `(seuServidor)/plugins/ModelEngine/blueprints`.
2. Execute o comando `/meg reload`. Se tudo correu corretamente, deverá receber uma mensagem a
   dizer `[Model Engine] X modelos carregados`, onde `x` é a quantidade de modelos que registou.

## Passo 3. Gerar o Pacote de Recursos

[**Nota: existe agora uma forma alternativa, mais simples, de realizar este passo neste link.
**]($language$/elitemobs/custom_models.md&section=step-2.-generating-the-resource-pack) No entanto, é um pouco menos
flexível do que o que está listado aqui.

Esta é possivelmente a parte mais complicada se pretender que o seu servidor faça a gestão dos downloads. **Experimente
verificar se o sistema funciona quando tem o pacote de recursos no seu cliente antes de tentar distribuí-lo
automaticamente!**

1. Vá ao diretório `(seuServidor)/plugins/ModelEngine/resource pack` e crie um pacote de recursos utilizando esses dados
   ou adicione a pasta `assets` nesse local aos `assets` do seu pacote de recursos
    1. Se estiver a criar um novo pacote de recursos, pode colocar os ficheiros em `resource pack` num ficheiro zipado e
       esse será um pacote de recursos válido que poderá
       distribuir. [Mais informações](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack).
    2. Se já tiver um pacote de recursos, certifique-se de que não está a substituir acidentalmente modelos
       existentes. [Mais informações](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack).
2. Distribua o seu pacote de recursos aos seus jogadores. **Apenas os jogadores que tiverem o pacote de recursos poderão
   ver os Modelos Personalizados**, e parecerá muito estranho e danificado para todos os outros. Se pretende utilizar
   muito estes, poderá querer forçar a utilização do pacote de recursos.
    1. (Opcional) Para permitir que os jogadores descarreguem um pacote de recursos ao iniciar sessão, terá de alojar o
       ficheiro algures online e alterar o campo `resource-pack=` do server.properties para apontar para esse
       endereço.**\*
    2. (Opcional) Se estiver a modificar os pacotes de recursos, vai querer usar a opção `resource-pack-sha1=` para que
       o servidor possa verificar se o pacote de recursos do jogador necessita de ser atualizado. Para gerar este valor,
       carregue o seu pacote de recursos para [http://onlinemd5.com/](http://onlinemd5.com/) e certifique-se de que
       escolhe a opção SHA1. Terá de fazer isto sempre que atualizar o seu Pacote de Recursos, caso contrário os seus
       utilizadores não receberão a atualização.**\*
    3. (Opcional) Para forçar os jogadores a utilizar pacotes de recursos, utilize a opção `require-resource-pack=true`
       no server.properties.**\*

**Se modificou o server.properties terá de reiniciar!**

**\*** Nota: Existem muitos guias online que podem ajudá-lo a pôr isto a funcionar caso estas instruções não o estejam a
ajudar.

### Unir pacotes de recursos

Se precisar de unir os seus pacotes de recursos, pode fazê-lo manualmente. Mas recomendamos que utilize uma ferramenta
online como o [merge.elmakers](https://merge.elmakers.com/) para unir os seus pacotes de recursos.

## Passo 4. Esperar que funcione

Assumindo que tudo foi feito corretamente, deverá agora conseguir ver o Modelo Personalizado no seu boss ou NPC. Pode
criá-los através dos comandos:

* Boss Personalizado: `/em spawncustom nomeficheiro.yml`
* NPC: `/em spawnnpc nomeficheiro.yml`

Pode depois removê-los através do comando `/em remove`.

# Criar e adaptar Modelos Personalizados para EliteMobs

O EliteMobs consegue utilizar qualquer modelo considerado válido pelo Model Engine, o que significa que não há muito que
não possa ser feito com ele.

No entanto, no que diz respeito a animações, a utilização de nomes específicos para as animações é necessária para
garantir que os bosses conseguem utilizar as animações.

Estes nomes de animações são os que são definidos no Blockbench no separador de animações. Pode renomeá-los a qualquer
momento, o que significa que pode adaptar qualquer modelo existente para funcionar com o EliteMobs.

## Animações

Tenha em atenção que esta secção ainda está em expansão, uma vez que este sistema é ainda muito recente. Serão
adicionados mais à medida que os pedidos de funcionalidades forem chegando.

### idle

`idle` é o nome de animação correto para entidades que não estão em combate e não se estão a mover. O EliteMobs não
modifica o sistema de animação idle predefinido que o Model Engine utiliza.

### walk

`walk` é o nome de animação correto para entidades que se estão a mover. O EliteMobs não modifica o sistema de animação
idle predefinido que o Model Engine utiliza.

### attack

Existem três tipos de animações de ataque:

#### attack

`attack` é o nome de animação genérico correto para quando um boss ataca.

#### attack_melee

`attack_melee` é o nome de animação correto para ataques realizados quando um Boss Personalizado ataca uma entidade
utilizando um ataque de combate corpo a corpo vanilla do Minecraft. Substitui `attack`. Tenha em atenção que a animação
é executada **após** o dano ser causado. Esta é infelizmente uma limitação por agora. Como tal, tente tornar a animação
muito rápida.

#### attack_ranged

`attack_ranged` é o nome de animação correto para ataques realizados quando um Boss Personalizado cria uma entidade de
projétil. Substitui `attack`. Tenha em atenção que a animação é executada **após** o projétil ser disparado. Esta é
infelizmente uma limitação por agora. Como tal, tente tornar a animação muito rápida.

### damaged

`damaged` é o nome de animação correto para a animação de dano que um Boss Personalizado executa quando recebe dano.

### death

`death` é o nome de animação correto para a animação de morte. O EliteMobs não modifica o sistema de animação idle
predefinido que o Model Engine utiliza.

### powers

Nota: este segmento ainda está em desenvolvimento. As seguintes são as funcionalidades tal como estão planeadas.

Cada poder no EliteMobs pode ter uma animação atribuída. A animação começa sempre quando o poder é acionado e não são
fornecidos mais acionadores ao longo da utilização do poder. Alguns poderes, como as invulnerabilidades, não farão nada,
pois não têm acionadores e são apenas propriedades passivas dos bosses.

Para atribuir uma animação a um poder, a animação tem de ter o mesmo nome do ficheiro de poder do elitemobs.

Por exemplo, para adicionar uma animação ao poder zombie necronomicon, a animação deve
chamar-se `zombie_necronomicon.yml`. Começará a ser reproduzida assim que o poder for acionado e terminará quando a
animação terminar, se não estiver definida para repetir ou quando o poder terminar.

# Importar Modelos Personalizados de masmorras

## Passo 1. Importação normal

Ao importar uma pasta zipada de empacotador de masmorras que contenha Modelos Personalizados, os Modelos Personalizados
são automaticamente movidos para `(seuServidor)/plugins/ModelEngine/blueprints` e o Model Engine recarrega
automaticamente para gerar o pacote de recursos relevante e os ficheiros do Model Engine.

## Passo 2. Gerar o Pacote de Recursos

Se estiver online quando recarregar o EliteMobs para importar ficheiros, o EliteMobs irá publicar automaticamente uma
mensagem no chat na qual pode clicar para gerar o pacote de recursos do EliteMobs. Em alternativa, pode executar o
comando `/em generateresourcepack` para o gerar.

A execução deste comando copia todos os ficheiros do pacote de recursos para a pasta `exports` do EliteMobs de forma não
destrutiva. Isto significa que se desembalar um pacote de recursos para a pasta exports utilizando o nome do pacote de
recursos `elitemobs_resource_pack` para a sua pasta de pacotes de recursos, o EliteMobs não irá eliminar nenhum dos
ficheiros aí contidos, a menos que um ficheiro com o mesmo nome seja obtido do ModelEngine (exceto pack.meta e
pack.png). Desta forma, consegue atualizar o seu pacote de recursos sem perder os modelos que colocou anteriormente no
mesmo.

Finalmente, o EliteMobs compacta o pacote de recursos na pasta `exports` e este ficheiro está pronto para distribuição.

Depois de isto ser feito, o EliteMobs também sugere a atualização do código SHA1 para o seu pacote de recursos.

### Passo 2.5. Atualizar o SHA1

O código SHA1 no ficheiro `server.properties` é utilizado para informar os clientes se o seu pacote de recursos está
desatualizado e faz com que o atualizem, se necessário. Este código pode ser gerado através do EliteMobs clicando na
opção no chat que aparece após o passo 2 ou executando o comando `/em updateresourcepack`.

**Tenha em atenção que isto atualiza o seu ficheiro server.properties com o código SHA1 correto para o pacote de
recursos compactado na pasta `exports`.** Se o eliminar ou modificar o ficheiro compactado após executar o comando, este
não funcionará.

## Passo 3. Tornar o ficheiro disponível publicamente

Alojando o ficheiro num local à sua escolha. Algumas pessoas utilizam o Google Drive ou o Dropbox para isto. É melhor
alojar este ficheiro por si mesmo, se tiver capacidade para o fazer. Alguns plugins existentes também podem ajudá-lo a
alojá-lo diretamente a partir do seu servidor Minecraft. Se encontrar um plugin que funcione, informe o MagmaGuy no
Discord e esta publicação será atualizada com essa informação.
