/*
    O new cria um novo objeto baseado na função construtora 
*/

function createProduct(name){
    const product = {}

    product.name = name

    product.message = function(){
        console.log(`nome: ${this.name}`)
    }

    return product
}


const product1 = new createProduct('Teclado USB')
console.log(product1.name)
product1.message()

const product2 = new createProduct('mouse')
console.log(product2.name)
product2.message()

