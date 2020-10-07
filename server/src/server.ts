import express from "express";
import cors from "cors";
import routes from "./routes";
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

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
