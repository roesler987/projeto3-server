const express = require("express");
const rotaLivro = require("./rotas/livro");
const cors = require("cors");
const favoritoRouter = require('./rotas/favorito');

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use('/livros', rotaLivro);
app.use(favoritoRouter);

const port = 8000;

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
});