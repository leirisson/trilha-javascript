// Criar Objetos
// Tema: Cadastro de Produtos em um E-commerce

// Crie objetos que representem produtos de uma loja virtual.
// Cada produto deve ter as seguintes propriedades:
// Nome
// Preço
// Categoria (ex.: eletrônicos, vestuário, alimentos)
// Disponibilidade (true ou false)
// Exemplo de produtos sugeridos:
// Notebook Gamer
// Camiseta Esportiva
// Café Arábico


function createProduto(nome="", preco=0, categoria="", disponivel=true){
    const produto = {
        nome: nome,
        preco: preco,
        categoria: categoria,
        disponivel:disponivel
    }

    return produto
}

const produto_mouse = createProduto("Mouse".toUpperCase(), 250.6, "Eletronico".toUpperCase(), false)

const produto_teclado = createProduto("teclado",100,"eletronico")

console.log(produto_teclado)
console.log(produto_mouse)
