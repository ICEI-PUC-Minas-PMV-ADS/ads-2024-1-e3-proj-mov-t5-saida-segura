# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

O plano de teste de software apresenta o planejamento das atividades de testes do sistema, exemplo o qual será utilizado como base para as atividades de acompanhamento, revisão, verificação e validação do projeto para casos de testes que deverão ser executados quando a implementação estiver parcial ou totalmente pronta.


 ## Requisitos para Realização dos Testes

Os requisitos e as  ferramentas necessárias para estes testes de software são:

Conectividade com a internet:
- Imprescindível que o usuário possua conexão estável com a internet.

- Principais navegadores de internet desktop no país: 
Chrome ( 72,37%) Opera(10,01%), Edge (8,75%).

- Compatibilidade de dispositivos:
A aplicação deverá ser utilizada por dispositivos compatíveis como: smartphone, computador ou tablet.


## Detalhamento dos Testes<p>

|**Caso de Teste**|CT-01 – Tela inicial |
| :-: | :-: |
|Requisito Associado|RF-001 <p> - A aplicação deve possuir na tela inicial um menu de perfis de usuário: Escola, Porteiro da escola, Pais ou responsáveis|
|Objetivo do Teste|  Verificar se o usuário consegue optar pelo tipo de perfil que se enquadra a sua necessidade.   |
|Passos|<p>-Acessar a aplicação <p>- Na tela inicial  selecionar entre as opções disponíveis:Escola, Porteiro da escola, Pais ou responsáveis.       |
|Critério do Êxito| O usuário consegue acessar menu da tela inicial, conseguindo optar pelo perfil desejado sem entraves da aplicação. |


|**Caso de Teste**|CT-02 –  Login |
| :-: | :-: |
|Requisito Associado|RF-002 <p> - A aplicação deve permitir que o usuário realize login utilizando email e senha   |
|Objetivo do Teste|  Verificar se o usuário consegue realizar cadastro e efetuar login no sistema.  |
|Passos|<p> - Entrar com informações de login e senha.<p>Selecionar o botão ENTRAR para efetuar o login. |
|Critério do Êxito|  O usuário consegue acessar e informar os dados de e-mail e senha efetuando login sem entraves da aplicação. |


|**Caso de Teste**|CT-03 –   Tela de visualização de informações dos alunos     |
| :-: | :-: |
|Requisito Associado|RF-003 <p> -  A aplicação deve armazenar e mostrar informações correspondentes ao estudante e responsável, bem como dados pessoais e imagens              |
|Objetivo do Teste| Verificar que o usuário terá acesso a tela de armazenamento de  informações do aluno.    |
|Passos|<p> - O usuário logado terá acesso a tela com o  menu de opção de alunos (alunos cadastrados em seu perfil).<p>-O usuário deve optar pelo aluno ao qual deseja visualizar as informações e imagem.           |
|Critério do Êxito| O usuário logado consegue acessar a tela de menu de alunos cadastrados no seu perfil e visualizar suas informações pessoais e imagens do referente aluno.            |


|**Caso de Teste**|CT-04 – Tela de Cadastro de informações de pessoas autorizadas e não autorizadas      |
| :-: | :-: |
|Requisito Associado|RF-005 <p> -  A aplicação deve permitir a inserção de dados de pessoas que tem autorização de buscar o aluno na escola, além dos pais.  <p> RF-006 -  A aplicação deve permitir a inserção de dados de pessoas que não tem autorização de buscar o aluno na escola, além dos pais.            |
|Objetivo do Teste|   Verificar se o usuário consegue ter acesso a página de cadastro de informações de perfis autorizados e não autorizados e efetuar o cadastro das informações.                   |
|Passos|<p>- Dentro da aplicação já logado, terá acesso a tela para a seleção de aluno.<p>-Após selecionar o aluno o usuário terá acesso ao seguinte menu: Lista de pessoas autorizadas para buscar o aluno, Histórico de saída e Lista de pessoas não autorizadas a buscar o aluno. <p>-  Após selecionar o aluno o usuário terá acesso ao seguinte menu: Lista de pessoas autorizadas para buscar o aluno, Histórico de saída e Lista de pessoas não autorizadas a buscar o aluno. <p>- Selecionando no menu  Lista de pessoas autorizadas para buscar o aluno e  Lista de pessoas não autorizadas para buscar o aluno o usuário terá acesso as telas para adicionar as seguintes informações: Nome Completo, Data de nascimento, RG, CPF e grau de parentesco.|
|Critério do Êxito| O usuário logado consegue acessar as telas mencionadas e adicionar informações com  os dados dos perfis das pessoas autorizadas e não autorizadas a buscar o aluno na escola .            |


|**Caso de Teste**|CT-05 –  Tela de histórico de saída       |
| :-: | :-: |
|Requisito Associado|RF-008 <p> -  A aplicação deve mostrar tela com histórico de saída do aluno  |
|Objetivo do Teste| Verificar se a aplicação permite que o usuário visualize o histórico de saída do aluno.  |
|Passos|<p> - Dentro da aplicação já logado, terá acesso a tela para a seleção de aluno. <p>- Na tela de seleção de alunos, o usuário deverá selecionar aluno. <p>- Após selecionar o aluno o usuário terá acesso ao seguinte menu: Lista de pessoas autorizadas para buscar o aluno, Histórico de saída e Lista de pessoas não autorizadas a buscar o aluno.<p> O usuário deve optar por Histórico de saída.<p>- Após selecionar a opção histórico de saída, o usuário terá acesso a tela de histórico de saída com as seguintes informações: Data, Hora e nome da pessoa responsável por retirar o aluno.  |
|Critério do Êxito| O usuário logado consegue acessar a tela de histórico de saída e visualizar as informações contidas no histórico, como: Data, Hora e nome da pessoa responsável por retirar o aluno  |



|**Caso de Teste**|CT-06 –   Edição de informações       |
| :-: | :-: |
|Requisito Associado|RF-009 <p> - O sistema deve permitir a edição de dados cadastrais.             |
|Objetivo do Teste| Verificar se o usuário consegue editar informações cadastradas no aplicativo.                       |
|Passos|<p>- Dentro da aplicação já logado, terá acesso a tela para a seleção de aluno.<p>-Na tela de seleção de alunos, o usuário deverá selecionar aluno. <p>- Após selecionar o aluno o usuário terá acesso ao seguinte menu: Lista de pessoas autorizadas para buscar o aluno, Histórico de saída e Lista de pessoas não autorizadas a buscar o aluno. <p>-  O usuário deve optar pelas seleções: Lista de pessoas autorizadas para buscar o aluno e Lista de pessoas não autorizadas para buscar o aluno, acessando ambas as opções o usuário terá acesso ao ícone de edição.<p>- O usuário deve selecionar o ícone de edição (Imagem de um lápis e um papel) e poderá completar ou modificar as informações.  |
|Critério do Êxito|  O usuário logado consegue acessar as telas:Lista de pessoas autorizadas para buscar o aluno e Lista de pessoas não autorizadas para buscar o aluno, visualizar o ícone de edição e conseguir agregar informações, apagar e modificá-las sem entraves da aplicação.  |

 

