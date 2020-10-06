import express from "express";

const app = express();

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais info do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma info existente no back-end
// DELETE: Remover uma info do back-end

// Request params: Parâmetros dentro da própria rota que identificam um recurso
// Query params: Parâmetros dentro da própria rota, geralmente opcionais para filtros, paginação...

const users = ["Diego", "Cleiton", "Robson", "Daniel"];

app.get("/users", (request, response) => {
  const search = String(request.query.search);

  const filteredUsers = search
    ? users.filter((user) => user.includes(search))
    : users;

  response.json(filteredUsers);
});

app.get("/users/:id", (request, response) => {
  const id = Number(request.params.id);

  const user = users[id];

  return response.json(user);
});

app.post("/users", (request, response) => {
  const user = {
    name: "Diego",
    email: "diego@rocketseat.com.br",
  };

  return response.json(user);
});

app.listen(3333);
