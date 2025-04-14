// Acessar Propriedades no Contexto de Objetos
// Tema: Controle de Estoque

// Dado um objeto que representa o estoque de uma loja,
// crie uma função que receba o nome de um produto e retorne:
// A quantidade disponível desse produto.
// Se o produto não existir no estoque, retorne uma mensagem informando isso.



function verificarProdutoEstoque(produto){
    const estoque = {
        arroz: { quantidade: 50, preco: 10 },
        feijao: { quantidade: 30, preco: 8 },
        macarrao: { quantidade: 100, preco: 5 }
    }

      for(produto in estoque){
    
          return  console.log(`produto: ${estoque.produto.quantidade}`)
      
        }
        return console.log('Produto não cadastrado.')
      

    
}


verificarProdutoEstoque('arroz')