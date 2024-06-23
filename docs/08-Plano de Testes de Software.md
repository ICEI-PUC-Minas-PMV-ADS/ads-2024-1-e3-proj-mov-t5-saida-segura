# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

O plano de teste de software apresenta o planejamento das atividades de testes do sistema, exemplo o qual será utilizado como base para as atividades de acompanhamento, revisão, verificação e validação do projeto para casos de testes que deverão ser executados quando a implementação estiver parcial ou totalmente pronta.


 ## Requisitos para Realização dos Testes

Os requisitos e as  ferramentas necessárias para estes testes de software são:

Conectividade com a internet:
- Imprescindível que o usuário possua conexão estável com a internet.

- Compatibilidade de dispositivos:
A aplicação deverá ser utilizada por dispositivos compatíveis como: smartphone ou tablet.


## Detalhamento dos Testes<p>

|**Caso de Teste**|CT-01 – Tela inicial |
| :-: | :-: |
|Requisito Associado|RF-001 <p> - A aplicação deve possuir na tela inicial de LOGIN|
|Objetivo do Teste|  Verificar se o usuário consegue logar com informações de e-mail e senha   |
|Passos|<p>-Acessar a aplicação <p>- Na tela inicial  de login o usuário deve entrar com infomrações de login e senha previamente cadastrados    |
|Critério do Êxito| O usuário consegue acessar e informar os dados de e-mail e senha efetuando login sem entraves da aplicação. |


|**Caso de Teste**|CT-02 –  Login |
| :-: | :-: |
|Requisito Associado|RF-002 <p> - A aplicação deve possuir tela de menu    |
|Objetivo do Teste|  Verificar se o usuário consegue optar pela opção  que se enquadre a sua necessidade.  |
|Passos|<p> - escolher entra as opções nos botões da tela de login e ser redirecionado a tela que optou pelo menu |
|Critério do Êxito| O usuário consegue acessar menu da tela logada, conseguindo optar pela opção desejada sem entraves da aplicação.  |


|**Caso de Teste**|CT-03 –   Tela de cadastro do usuário    |
| :-: | :-: |
|Requisito Associado|RF-003 <p> -  A aplicação deve cadastrar e armazenar  informações correspondentes do usuário             |
|Objetivo do Teste| Verificar que o usuário terá acesso a tela de cadastro e sucesso na aplicação de suas informações pessoais    |
|Passos|<p> - O usuário deve informar dados de Nome, E-mail e senha         |
|Critério do Êxito| O usuário consegue acessar a tela de cadastro e preencher coms suas informações pessoais e ter seus dados armazenados na aplicação.     |


|**Caso de Teste**|CT-04 – Tela de Cadastro de informações de pessoas autorizadas e não autorizadas      |
| :-: | :-: |
|Requisito Associado|RF-005 <p> -  A aplicação deve permitir a inserção de dados de pessoas que tem autorização de buscar o aluno na escola, além dos pais.  <p> RF-006 -  A aplicação deve permitir a inserção de dados de pessoas que não tem autorização de buscar o aluno na escola, além dos pais.            |
|Objetivo do Teste|   Verificar se o usuário consegue ter acesso a página de cadastro de informações de perfis autorizados e não autorizados e efetuar o cadastro das informações.                   |
|Passos|<p>- Dentro da aplicação já logado, terá acesso a tela para a seleção de aluno.<p>-Após selecionar o aluno o usuário terá acesso ao seguinte menu: Lista de pessoas autorizadas para buscar o aluno, Histórico de saída e Lista de pessoas não autorizadas a buscar o aluno. <p>-  Após selecionar o aluno o usuário terá acesso ao seguinte menu: Lista de pessoas autorizadas para buscar o aluno, Histórico de saída e Lista de pessoas não autorizadas a buscar o aluno. <p>- Selecionando no menu  Lista de pessoas autorizadas para buscar o aluno e  Lista de pessoas não autorizadas para buscar o aluno o usuário terá acesso as telas para adicionar as seguintes informações: Nome Completo, Data de nascimento, RG, CPF e grau de parentesco.|
|Critério do Êxito| O usuário logado consegue acessar as telas mencionadas e adicionar informações com  os dados dos perfis das pessoas autorizadas e não autorizadas a buscar o aluno na escola .            |


|**Caso de Teste**|CT-08 –  Tela de histórico de saída       |
| :-: | :-: |
|Requisito Associado|RF-008 <p> -  A aplicação deve mostrar tela com histórico de saída do aluno  |
|Objetivo do Teste| Verificar se a aplicação permite que o usuário visualize o histórico de saída do aluno.  |
|Passos|<p> - Dentro da aplicação já logado, terá acesso a tela para a seleção de aluno. <p>- Na tela de seleção de alunos, o usuário deverá selecionar aluno. <p>- Após selecionar o aluno o usuário terá acesso ao seguinte menu: Lista de pessoas autorizadas para buscar o aluno, Histórico de saída e Lista de pessoas não autorizadas a buscar o aluno.<p> O usuário deve optar por Histórico de saída.<p>- Após selecionar a opção histórico de saída, o usuário terá acesso a tela de histórico de saída com as seguintes informações: Data, Hora e nome da pessoa responsável por retirar o aluno.  |
|Critério do Êxito| O usuário logado consegue acessar a tela de histórico de saída e visualizar as informações contidas no histórico, como: Data, Hora e nome da pessoa responsável por retirar o aluno  |



|**Caso de Teste**|CT-07 –   A aplicação deve possuir tela de Cadastro de aluno    |
| :-: | :-: |
|Requisito Associado|RF-009 <p> - O sistema deve permitir o cadastro e armazenamento dedados dos alunos           |
|Objetivo do Teste| Verificar se o usuário consegue cadastrar e armazenar dados dos alunos que são de sua responsabilidade no aplicativo.                       |
|Passos|<p>- Dentro da aplicação já logado, terá acesso a tela de cadastro do aluno.<p>-Na tela de cadastro o usuário preenche com as informações necessárias <p>- Após preencher todos os campos (todos são obrigatórios) o usuário deve apertar o botão salvar <p>-  O usuário terá todas as informações salvas pelo sistema |
|Critério do Êxito|  O usuário logado consegue acessar a tela cadastrar aluno, preencher todos os campos e salvar informaçõe sem entraves da aplicação.  |

|**Caso de Teste**|CT-09 –  Apliacação deve possuir tela de Lista de alunos cadastrados por usuário   |
| :-: | :-: |
|Requisito Associado|RF-009 <p> - O sistema deve permitir a visualização de uma lista com todos os alunos cadastrados por aquele usuário        |
|Objetivo do Teste| Verificar se o usuário consegue cadastrar visualizar os alunos cadastrados no seu perfil de usuário no aplicativo.                       |
|Passos|<p>- Dentro da aplicação já logado, terá acesso ao menu com a opção de selecionar o botão lista de alunos cadastrados <p>- Após selecionar a opção o usuário terá acesso a tela com a listagem  e informações de todos estes alunos|
|Critério do Êxito|  O usuário logado consegue acessar a tela de lista de alunos sem entraves da aplicação.  |

 

