import express from "express";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais info do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma info existente no back-end
// DELETE: Remover uma info do back-end

// Request params: Parâmetros dentro da própria rota que identificam um recurso
// Query params: Parâmetros dentro da própria rota, geralmente opcionais para filtros, paginação...
// Request body: Parâmetros para criação e atualização de info
