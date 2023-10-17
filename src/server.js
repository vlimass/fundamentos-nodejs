import http from 'node:http'

// Formas de importação no Node:
// CommonJS => require
// ESModules => import/export

// HTTP: Método HTTP & rota (URL)

// Principais métodos HTTP: 
// GET => Buscar um recurso do back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação específica de um recurso no back-end
// DELETE => Deletar um recurso do back-end

// Stateful vs Stateless:
// Stateful => A aplicação do tipo stateful possui as informações sendo guardadas localmente em memória (depende da memória para funcionar).
// Stateless => A aplicação do tipo stateless não salva nada em memória, ela utiliza de dispositivos externos (como banco de dados, arquivos de texto, ...) para salvar as informações, dessa forma não há perda dos dados caso a aplicação seja parada.

// JSON (JavaScript Object Notation) => Estrutura de dados utilizada para movimentação de dados entre front-back e entre back-back, se assemelhando a estruturas de dados próprias do JavaScript, porém no formato de String, podendo, portanto, ser enviado com facilidade

// Headers (cabeçalhos para as requisições/respostas) => Metadados, os quais trazem informações sobre os dados que estão sendo enviados na requisição.

// Status Codes: 
// 200 => OK, A requisição foi um sucesso (status code padrão)
// 201 => CREATED, a requisição foi um sucesso e o recurso foi criado
// 404 => NOT FOUND, significa que a rota requisitada não existe

const users = []

const server = http.createServer((request, response) =>  {
  const { method, url } = request

  if(method === 'GET' && url === '/users') {
    return response
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users))
  }  

  if(method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'Fulano',
      email: 'fulano@email.com'
    })

    return response.writeHead(201).end()
  }

  return response.writeHead(404).end()
})

server.listen(3333) // localhost:3333
