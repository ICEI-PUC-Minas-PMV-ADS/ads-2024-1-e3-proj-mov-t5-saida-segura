# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Detalhamento dos Testes<p>

|**Caso de Teste**|CT-01 – Tela inicial login |
| :-: | :-: |
|Requisito Associado|RF-001 <p> - A aplicação deve possuir na tela inicial de LOGIN|
|Objetivo do Teste|  Verificar se o usuário consegue logar com informações de e-mail e senha   |
|Passos|<p>-Acessar a aplicação <p>- Na tela inicial  de login o usuário deve entrar com infomrações de login e senha previamente cadastrados    |
|Critério do Êxito| O usuário consegue acessar e informar os dados de e-mail e senha efetuando login sem entraves da aplicação. ||Resultado Esperado | Conseguir entrar no sistema com as informações necessárias |
|Resultado Obtido | Login efetuado |
|Evidência | ![Imagem](<img/telalogin.png>)  |




|**Caso de Teste**|CT-02 –  Tela MENU |
| :-: | :-: |
|Requisito Associado|RF-002 <p> - A aplicação deve possuir tela de menu    |
|Objetivo do Teste|  Verificar se o usuário consegue optar pela opção  que se enquadre a sua necessidade.  |
|Passos|<p> - escolher entra as opções nos botões da tela de login e ser redirecionado a tela que optou pelo menu |
|Critério do Êxito| O usuário consegue acessar menu da tela logada, conseguindo optar pela opção desejada sem entraves da aplicação.  ||Resultado Esperado | Conseguir visualizar menu |
|Resultado Obtido | menu visualizado |
|Evidência |  ![Imagem](<img/telamenu.png>)  |



|**Caso de Teste**|CT-03 –   Tela de cadastro do usuário    |
| :-: | :-: |
|Requisito Associado|RF-003 <p> -  A aplicação deve cadastrar e armazenar  informações correspondentes do usuário             |
|Objetivo do Teste| Verificar que o usuário terá acesso a tela de cadastro e sucesso na aplicação de suas informações pessoais    |
|Passos|<p> - O usuário deve informar dados de Nome, E-mail e senha         |
|Critério do Êxito| O usuário consegue acessar a tela de cadastro e preencher coms suas informações pessoais e ter seus dados armazenados na aplicação.   ||Resultado Esperado | Conseguir cadastrar informações com sucesso |
|Resultado Obtido | informações cadastradas e armazenadas |
|Evidência |  ![Imagem](<img/telacadastro.png>)  |



|**Caso de Teste**|CT-04 – Tela de Cadastro de informações de pessoas autorizadas e não autorizadas      |
| :-: | :-: |
|Requisito Associado|RF-005 <p> -  A aplicação deve permitir a inserção de dados de pessoas que tem autorização de buscar o aluno na escola, além dos pais.  <p> RF-006 -  A aplicação deve permitir a inserção de dados de pessoas que não tem autorização de buscar o aluno na escola, além dos pais.            |
|Objetivo do Teste|   Verificar se o usuário consegue ter acesso a página de cadastro de informações de perfis autorizados e não autorizados e efetuar o cadastro das informações.                   |
|Passos|<p>- Dentro da aplicação já logado, terá acesso a tela para a seleção de aluno.<p>-Após selecionar o aluno o usuário terá acesso ao seguinte menu: Lista de pessoas autorizadas para buscar o aluno, Histórico de saída e Lista de pessoas não autorizadas a buscar o aluno. <p>-  Após selecionar o aluno o usuário terá acesso ao seguinte menu: Lista de pessoas autorizadas para buscar o aluno, Histórico de saída e Lista de pessoas não autorizadas a buscar o aluno. <p>- Selecionando no menu  Lista de pessoas autorizadas para buscar o aluno e  Lista de pessoas não autorizadas para buscar o aluno o usuário terá acesso as telas para adicionar as seguintes informações: Nome Completo, Data de nascimento, RG, CPF e grau de parentesco.|
|Critério do Êxito| O usuário logado consegue acessar as telas mencionadas e adicionar informações com  os dados dos perfis das pessoas autorizadas e não autorizadas a buscar o aluno na escola .    ||Resultado Esperado | Conseguir visualizar tela e cadastrar informações pertinentes |
|Resultado Obtido | Tela não implementada |
|Evidência | sem evidências  |



|**Caso de Teste**|CT-08 –  Tela de histórico de saída       |
| :-: | :-: |
|Requisito Associado|RF-008 <p> -  A aplicação deve mostrar tela com histórico de saída do aluno  |
|Objetivo do Teste| Verificar se a aplicação permite que o usuário visualize o histórico de saída do aluno.  |
|Passos|<p> - Dentro da aplicação já logado, terá acesso a tela para a seleção de aluno. <p>- Na tela de seleção de alunos, o usuário deverá selecionar aluno. <p>- Após selecionar o aluno o usuário terá acesso ao seguinte menu: Lista de pessoas autorizadas para buscar o aluno, Histórico de saída e Lista de pessoas não autorizadas a buscar o aluno.<p> O usuário deve optar por Histórico de saída.<p>- Após selecionar a opção histórico de saída, o usuário terá acesso a tela de histórico de saída com as seguintes informações: Data, Hora e nome da pessoa responsável por retirar o aluno.  |
|Critério do Êxito| O usuário logado consegue acessar a tela de histórico de saída e visualizar as informações contidas no histórico, como: Data, Hora e nome da pessoa responsável por retirar o aluno  ||Resultado Esperado | Conseguir visualizar informações de histórico |
|Resultado Obtido | Visualização de histórico com todas as informações pertinentes á saída realizada com sucesso!|
|Evidência |  ![Imagem](<img/telahistorico.png>)   |




|**Caso de Teste**|CT-07 –   A aplicação deve possuir tela de Cadastro de aluno    |
| :-: | :-: |
|Requisito Associado|RF-009 <p> - O sistema deve permitir o cadastro e armazenamento dedados dos alunos           |
|Objetivo do Teste| Verificar se o usuário consegue cadastrar e armazenar dados dos alunos que são de sua responsabilidade no aplicativo.                       |
|Passos|<p>- Dentro da aplicação já logado, terá acesso a tela de cadastro do aluno.<p>-Na tela de cadastro o usuário preenche com as informações necessárias <p>- Após preencher todos os campos (todos são obrigatórios) o usuário deve apertar o botão salvar <p>-  O usuário terá todas as informações salvas pelo sistema |
|Critério do Êxito|  O usuário logado consegue acessar a tela cadastrar aluno, preencher todos os campos e salvar informaçõe sem entraves da aplicação.  ||Resultado Esperado | Conseguir visualizar menu |
|Resultado Obtido | UUsuárioteve acesso a tela, visualizou as informações aserem preenchidas e conseguiu realizar input de todas as informações.|
|Evidência | ![Imagem](<img/cadastraraluno.png>)  |



|**Caso de Teste**|CT-09 –  Apliacação deve possuir tela de Lista de alunos cadastrados por usuário   |
| :-: | :-: |
|Requisito Associado|RF-009 <p> - O sistema deve permitir a visualização de uma lista com todos os alunos cadastrados por aquele usuário        |
|Objetivo do Teste| Verificar se o usuário consegue cadastrar visualizar os alunos cadastrados no seu perfil de usuário no aplicativo.                       |
|Passos|<p>- Dentro da aplicação já logado, terá acesso ao menu com a opção de selecionar o botão lista de alunos cadastrados <p>- Após selecionar a opção o usuário terá acesso a tela com a listagem  e informações de todos estes alunos|
|Critério do Êxito|  O usuário logado consegue acessar a tela de lista de alunos sem entraves da aplicação.  ||Resultado Esperado | Conseguir visualizar lista de usuários cadastrados pelo usuário em questão |
|Resultado Obtido |Tela de lista de alunos cadastrador pelo usuário, visualizada com sucesso!|
|Evidência | ![Imagem](<img/telalistacriança.png>)   |


## vídeo de teste<p>




https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t5-saida-segura/assets/103007680/e80fbff6-8e66-4baa-9c01-dfacf391c895


## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
