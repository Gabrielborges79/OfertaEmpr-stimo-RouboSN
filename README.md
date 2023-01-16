# OfertaEmpr-stimo-RouboSN

![](RackMultipart20230116-1-5limu2_html_1aba8716852f1e6e.png)Aqui sua gambiarra se torna realidade.

# **Desafio 4**

Eu como usuário da empresa Gambiarra Ltda, preciso que seja criado um item de catálogo para empréstimo de Equipamentos de TI / Report de Furto de Equipamento (LAPTOP).

Atualmente todos os equipamentos são controlados pela tabela ALM\_HARDWARE pelos campos STATE e SUBSTATE, porém os equipamentos para empréstimo são limitados por Location e não possuímos disponibilidade para 100% dos cenários que são solicitados. Vale ressaltar que todo controle é realizado por um software paralelo e queremos migrar para o ServiceNow.

Neste caso, preciso que você auxilie na construção de um item de catálogo que seja claro e amigável para o meu usuário final, porém dentro das normas corporativas da empresa.

Requisitos:

Habilitar o Plugin **I18N Brazilian Portuguese Translations**

**Tornar o Idioma Brasileiro padrão em sua instância** – [Link da Documentação](https://docs.servicenow.com/bundle/newyork-platform-administration/page/administer/localization/concept/c_LangInternationalizationSupport.html) e o formato de Data deve ser: dd/MM/yyyy (Caso não queira alterar o padrão da sua instância, subir uma instância zerada para o desafio).

**Nome do Item de Catálogo:** Empréstimo/Report de Furto de Laptop

**Catalog, category, description e short description ficam a critério do desenvolvedor.**

**Na tabela de usuários, criar um campo chamado: Grupo de Usuários (Do tipo Choice), com as seguintes choices:**

- Aprendizes
- Estagiários
- Assistentes
- Analistas
- Coordenadores
- Gerentes
- Diretores

**Variáveis obrigatórias do formulário**.

![](RackMultipart20230116-1-5limu2_html_b49e02586a275baa.png)

**V1 - \>** As informações do favorecido devem ser populadas automaticamente com as informações da sys\_user do usuário logado. Lembrar que é possível alterar o favorecido e os campos devem ser atualizados. **Uma mensagem deve ser exibida na parte superior com informações básicas (On Load), porém essa mensagem deve ser traduzível, ou seja, não pode ficar hard-code no cliente script e com a mesma formatação do exemplo abaixo.**

![](RackMultipart20230116-1-5limu2_html_19585b161cce0f6c.png)

**V2 -\>** A variável **Equipamento Furtado** é opcional, porém quando marcada, é necessário exibir os equipamentos associados ao favorecido ( **Variável Meus Equipamentos** ) e obrigar a selecionar o equipamento furtado. Lembrar que quando essa variável for desmarcada, os campos associados devem ser limpos para evitar inconsistências na requisição.

**V3 - \>** A variável **Meus Equipamentos** deve ser populada automaticamente com os equipamentos associados ao usuário favorecido pela tabela ALM\_HARDWARE e o state seja " **IN USE**" e model category seja "Computer". Só é necessário exibi-lo quando selecionado a opção ' **Equipamento Furtado**' e tornar obrigatório a seleção.

**PS: Não é permitido selecionar 2 equipamentos furtados. Caso seja selecionado dois equipamentos, o campo deve ser limpo ou removida a última posição. Também é necessário exibir uma mensagem traduzível no Campo, ex:**

![](RackMultipart20230116-1-5limu2_html_8453b27415bd446c.png)

**V4 - \>** A variável **Equipamentos Disponíveis** deve ser populada automaticamente com os equipamentos da tabela ALM\_HARDWARE, exibindo os computadores com Status " **In Stock**", location " **igual à do usuário favorecido**" e substate " **Available**" e model category seja "Computer". Essa variável só pode ser exibida quando a variável " **Equipamento Furtado**" não estiver marcada.

**V5 - \>** A variável " **Nenhum Equipamento Disponível**" deve ser marcada quando nenhum equipamento na variável " **Equipamentos Disponíveis**" estiver disponível. Ao ser selecionada, exibir a mensagem "**O fluxo seguirá para análise do time de Governança de TI (ITAM) para agilizar o processo de compra**". A mensagem deve ser traduzível e não deve ser hard-code. (Nenhuma ação necessária no fluxo agora, será utilizado no próximo desafio)

**V6 e V7 - \>** Data de início não pode ser inferior a data atual e data final não pode ser inferior a data inicial. Vale ressaltar que você não deve permitir solicitar um empréstimo com data superior a parametrizada no sistema, conforme regra de negócio I.

![](RackMultipart20230116-1-5limu2_html_8385a915092e5028.png)

![](RackMultipart20230116-1-5limu2_html_c56c34468d562c10.png)

![](RackMultipart20230116-1-5limu2_html_c9205ec233de1335.png)

**V8 -\>** A variável " **Aprovador**" deve ser preenchida automaticamente com o manager do favorecido. O solicitante em hipótese alguma pode alterar esse campo. Caso o manager esteja vazio, a variável deve ser oculta e uma mensagem no topo do formulário deve ser exibida (Criar uma mensagem de indisponibilidade de equipamento para funcionários sem aprovadores no sistema).

Requisição após enviada, deve ser associada ao grupo: **IT Securities**

**Atenção à regra de negócio I**

Funcionários que solicitam empréstimo de equipamento e já possuem dois equipamentos associados são inibidos de prosseguir. Você deve encontrar uma maneira simples e eficaz de inibir a continuidade da requisição. Isso não é aplicável para furto de equipamento\*\*. Lembrando que o funcionário deve ser notificado assim que for realizado o load do form e/ou alteração do favorecido. A mensagem deve ser traduzível.

![](RackMultipart20230116-1-5limu2_html_7e1c148e29b17e4e.png)

Outro ponto importante, o time de governança de TI, especificamente (ITAM) quer gerenciar a quantidade de equipamentos de alguma forma. Pedimos que encontre uma solução auto gerenciável de não tornar hard-code a quantidade de equipamentos, que por padrão é 2. Ex: Criar um menu chamado 'Empréstimo de Equipamentos' e um módulo 'Gestão de Equipamentos' e a parametrização deve estar parecida com a do exemplo abaixo.

Dúvidas sobre criar um módulo assim? [Clique Aqui](https://developer.servicenow.com/app.do#!/lp/new_to_servicenow/app_store_learnv2_automatingapps_newyork_application_properties_objectives?v=newyork)

![](RackMultipart20230116-1-5limu2_html_849e9589ee24d6d.png)

**Atenção à regra de negócio II**

Quando seleciona a opção "Equipamento Furtado" o solicitante deve anexar o Boletim de Ocorrência em formato \*.pdf. Na requisição deve conter uma mensagem explicando a necessidade de anexar o documento. A obrigatoriedade do anexo será detalhada nos próximos passos.

**Atenção à regra de negócio III**

**User Criteria:**

A permissão de visualização do item de catalogo é dividida em duas partes, onde em qualquer uma delas for TRUE, o item pode ser visualizado.

**Funcionários com cargo superior ou igual a analista pode visualizar o item de catálogo devido a políticas internas.** Se sim, retornar TRUE.

**Caso a validação do grupo de usuário retornar false, verificar se existem delegações.**

**Delegação:** Identificar se o usuário logado possui alguma delegação para ele na tabela sys\_user\_delegate. Você precisa identificar se existem delegações com data final superior a data de hoje, mas é possível que existam várias delegações (Histórico) e você deve pegar a validação com maior data no campo END. A partir desta informação, identificar se o usuário que delegou **USER** é membro de um dos grupos na sys\_user: **Analistas, Coordenadores, Gerentes ou Diretores.** Se sim, retornar TRUE.

**Você pode validar se a User Criteria está funcionando corretamente pelo Application Menu -\> Catalog Administration -\> User Criteria Diagnostics**

![](RackMultipart20230116-1-5limu2_html_10cf09161a9b18a0.png)

# **Workflow**

**Aprovação:** Assim que a requisição for submetida (Dentro das regras estabelecidas), a requisição deve ser direcionada para aprovação do aprovador (Manager). Caso aprovada, seguir o fluxo.

Após aprovada, **caso seja do tipo furto de equipamento** é necessário identificar se a requisição possui anexo e se o anexo é do tipo PDF. Caso seja do tipo PDF, seguir. Caso contrário, cancelar a requisição e enviar o comentário para Timeline (Critério do desenvolvedor) e finalizar a requisição (Mensagem traduzível). O Fluxo acaba neste ponto.

![](RackMultipart20230116-1-5limu2_html_30f9d80d15f76308.png)

**Caso esteja OK**

Criar uma Task para formalização do processo. Este fluxo até o momento conterá apenas uma task, porém será expandido futuramente.

Essa Task deve conter no **Short Description** : Equipamento (Nome do Equipamento) + Data Atual + Favorecido, Ex: **\*MACBOOK-AIR-13 - 27/02/2020 – João da Silva**. O grupo associado é o mesmo da requisição. Além desses pontos, na própria tarefa o equipamento deve estar associado na related list chamada: Affected Cis, conforme abaixo.

Ex:

![](RackMultipart20230116-1-5limu2_html_36f2f4127e6fc73f.png)

![](RackMultipart20230116-1-5limu2_html_f23002475bd30e63.png)

**Regras de Conclusão da Task**

Assim que o status da Task for alterado para: Closed Complete ou Closed Incomplete, automaticamente na tabela ALM\_HARDWARE o state do **Novo Equipamento** deve ser alterado para: IN USE e o Assigned To deve ser alterado para o usuário favorecido. O Equipamento furtado deve estar com Status = **missing** e o substate = **stolen**

**Replicar o comentário do Close Notes da Task para a requisição (Assim notificando o usuário) após a conclusão.**

**Ex:**

![](RackMultipart20230116-1-5limu2_html_e7f53dff0de4642f.png)

Caso não esteja marcado " **Furto de Equipamento**", criar uma tarefa para o time de 'Hardware' realizar os trâmites. Assim que finalizado, replicar o "close\_notes" para a requisição e finalizá-la.

# **Boa Sorte!**
