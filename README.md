# Fundamentos do Node.js

Este repositório é utilizado para as aulas de Fundamentos do Node.js do curso Ignite da Rocketseat. Além disso, o README destaca os principais conceitos aprendidos ao longo do curso.

### Conceitos gerais de back-end aprendidos

**Formas de importação no Node:**
- CommonJS => require
- ESModules => import/export

**O HTTP:**
- Constituído por método HTTP (GET, POST, PUT, PATCH, DELETE, ...) & rota (URL)

**Principais métodos HTTP:**
- GET => Buscar um recurso do back-end
- POST => Criar um recurso no back-end
- PUT => Atualizar um recurso no back-end
- PATCH => Atualizar uma informação específica de um recurso no back-end
- DELETE => Deletar um recurso do back-end

**Stateful vs Stateless:**
- Stateful => A aplicação do tipo stateful possui as informações sendo guardadas localmente em memória (depende da memória para funcionar).
- Stateless => A aplicação do tipo stateless não salva nada em memória, ela utiliza de dispositivos externos (como banco de dados, arquivos de texto, ...) para salvar as informações, dessa forma não há perda dos dados caso a aplicação seja parada.

**O JSON (JavaScript Object Notation):** 
- Estrutura de dados utilizada para movimentação de dados entre front-back e entre back-back, se assemelhando a estruturas de dados próprias do JavaScript, porém no formato de String, podendo, portanto, ser enviado com facilidade

**Headers (cabeçalhos para as requisições/respostas):**
- Metadados, os quais trazem informações sobre os dados que estão sendo enviados na requisição.

**Status Codes:**
- 200 => OK, A requisição foi um sucesso (status code padrão)
- 201 => CREATED, a requisição foi um sucesso e o recurso foi criado
- 404 => NOT FOUND, significa que a rota requisitada não existe