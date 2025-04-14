/*
OPTIONAL CHAINING (?.) - encadeamento opcional 
Se propriedade ou função chamada é  nullish
(null or undefined), a expressão retorma 
undefined em vez de gerar um error

Útil ao expo=lorar o conteudo de um objeto
quando não existe garantia da existencia
de determinadas propriedades obrigatorias.
*/

const user = {
    id:1,
    name:"Leirisson",
    // address : {
    //     street: "chagas aguir",
    //     city: "Coari",
    //     geo: {
    //         latitude:6972000,
    //         longitude: 6892400
    //     },
    // },
    message: function(){
        console.log(`olá, ${this.name}`)
    }
}

console.log(user?.address?.street)

user.message?.()