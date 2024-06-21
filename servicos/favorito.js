const fs = require ("fs")

function getTodosFavoritos(){
    return JSON.parse( fs.readFileSync("favoritos.json"))
}

function deletaLivroPorId(id){
    const livros = JSON.parse( fs.readFileSync("favoritos.json"))

    const livrosFiltrados = livros.filter(livro => livro.id !== id)
    fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados))
}

function insereFavorito(id){
    const livors = JSON.parse( fs.readFileSync("favoritos.json"))
    const favoritos = JSON.parse( fs.readFileSync("favoritos.json"))

    const livroInserido = livros.find( livro => livro.id === id)
    const novaListaDeLivrosFavoritos = [...favoritos, livroInserido]
    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeLivrosFavoritos))
}

module.exports = {
    getTodosFavoritos,
    deletaLivroPorId,
    insereFavorito
}