# Plano de Testes de Usabilidade

O teste de usabilidade permite avaliar a qualidade da interface com o usuário da aplicação interativa. O Plano de Testes de Software é gerado a partir da especificação do sistema e consiste em casos de testes que deverão ser executados quando a implementação estiver parcial ou totalmente pronta.


|ID | Critérios de Avaliação de Usabilidade  |       Descrição             |                        Passos                  |                  Critério de sucesso                  |
|--|-----------------------------------------|------------------------|------------------------------------------------------|------------------------------------------------------------|
| 1 |Tela Inicial com Menu de Perfis de Usuário |  Verificar se a tela inicial exibe corretamente os perfis de usuário (Escola, Porteiro da escola, Pais ou responsáveis).| 1- Abrir a aplicação. 2- Verificar a presença dos perfis: Escola, Porteiro da escola, Pais ou responsáveis. | Os perfis devem ser exibidos corretamente na tela inicial. |
| 2 |  Login com Email e Senha       | Verificar a funcionalidade de login.  |1- Verificar a funcionalidade de login.  2- Abrir a aplicação. 3- Selecionar um perfil. 4-Inserir email e senha válidos. 5-Clicar em "Login". | O usuário deve ser autenticado e redirecionado para a tela principal correspondente ao seu perfil. |
| 3   | Armazenamento e Exibição de Informações |Verificar se a aplicação armazena e exibe informações de estudantes e responsáveis.| 1-  Realizar login como Escola. 2- Navegar até a seção de informações dos estudantes. 3-Verificar se os dados pessoais e imagens estão corretos. | As informações dos estudantes e responsáveis devem ser exibidas corretamente.|
| 4 |  Tela de Pessoas Autorizadas e Não Autorizadas | Verificar a exibição das listas de pessoas autorizadas e não autorizadas. | 1- Realizar login como Porteiro da escola. 2-Navegar até a tela de pessoas autorizadas e não autorizadas.|  A tela deve exibir as listas de pessoas autorizadas e não autorizadas a buscar o aluno. |  
| 5  |  Inserção de Dados de Pessoas Autorizadas | Verificar se a aplicação permite a inserção de dados de pessoas autorizadas. | 1- Realizar login como Pais ou responsáveis. 2-Navegar até a seção de inserção de dados de pessoas autorizadas. 3-Inserir os dados requeridos e salvar.  |  Os dados devem ser salvos e exibidos na lista de pessoas autorizadas.|
| 6  |  Inserção de Dados de Pessoas Não Autorizadas | Verificar se a aplicação permite a inserção de dados de pessoas não autorizadas. | 1- Realizar login como Pais ou responsáveis. 2-Navegar até a seção de 3-Inserir os dados requeridos e salvar. | inserção de dados de pessoas não autorizadas. |Os dados devem ser salvos e exibidos na lista de pessoas não autorizadas.|
| 7  |   Alerta de Medidas Protetivas | Verificar a emissão de alertas em casos de medidas protetivas. | 1- Realizar login como Escola. 2-Inserir uma medida protetiva para um estudante. 3-Verificar se o alerta é emitido. | A aplicação deve emitir um alerta para a instituição de ensino.|
| 8 |  Histórico de Saída do Aluno | Verificar a exibição do histórico de saída do aluno. |  1- Realizar login como Porteiro da escola. 2- Navegar até a tela de histórico de saída do aluno. | O histórico de saída deve ser exibido corretamente. | 
| 9| Edição de Dados Cadastrais | Verificar se o sistema permite a edição de dados cadastrais. | 1- Realizar login como Pais ou responsáveis. 2- Navegar até a seção de edição de dados cadastrais. 3-Editar os dados e salvar. | Os dados atualizados devem ser salvos e exibidos corretamente.|
| 10 | Criação de QR Code | Verificar a funcionalidade de criação de QR code para pessoas autorizadas. | 1- Realizar login como Pais ou responsáveis. 2- Navegar até a seção de criação de QR code. 3-Inserir os dados necessários e gerar o QR code. | O QR code deve ser gerado e exibido corretamente. |

| Recursos Necessários|
|----------------------|
|Local apropriado para a equipe de testes, com acesso a dispositivos móveis e dispositivos de teste. |
| Documentos detalhados dos requisitos funcionais  |
| Documentação do plano de teste com casos de teste detalhados, critérios de aceitação e procedimentos. |
| Instruções detalhadas para execução de testes manuais. |


|  Participantes |
| ---------------|
| Desenvolveros que farão as vezes de QA|
| Pelo menos 5 pessoas interessas neste modelo de negócio| 

## Métricas

|  Nome   |             Especificação          |
|------------------------|------------------------------------|
|Cobertura de Requisitos |	(Número de requisitos testados / Número total de requisitos) * 100%	Avaliar extensão dos requisitos testados. |
|Cobertura de Casos de Teste |	(Número de casos de teste executados / Número total de casos de teste planejados) * 100%	Verificar se todos os casos de teste foram executados |
| Taxa de Defeitos |	(Número de defeitos encontrados / Número total de casos de teste executados) * 100%	Determinar frequência de defeitos. |

- Taxa de sucesso: o percentual de usuários que completaram as tarefas atribuídas;
- Tempo de conclusão: o tempo médio necessário para concluir cada tarefa;

























As referências abaixo irão auxiliá-lo na geração do artefato "Plano de Testes de Usabilidade".

> **Links Úteis**:
> - [Teste De Usabilidade: O Que É e Como Fazer Passo a Passo (neilpatel.com)](https://neilpatel.com/br/blog/teste-de-usabilidade/)
> - [Teste de usabilidade: tudo o que você precisa saber! | by Jon Vieira | Aela.io | Medium](https://medium.com/aela/teste-de-usabilidade-o-que-voc%C3%AA-precisa-saber-39a36343d9a6/)
> - [Planejando testes de usabilidade: o que (e o que não) fazer | iMasters](https://imasters.com.br/design-ux/planejando-testes-de-usabilidade-o-que-e-o-que-nao-fazer/)
> - [Ferramentas de Testes de Usabilidade](https://www.usability.gov/how-to-and-tools/resources/templates.html)
