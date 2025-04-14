/*

    OBJETO:
        - Uma coleção de dados e/ou funcionalidades;
        - Podem ter propriedades e métodos;

*/

// criar um objeto vazio e verificando o tipo.
const obj = {}
console.log(obj)
console.log(typeof obj)

// criar um objeto com propriedades e métodos

const user = {
    email: 'leirisson@email.com',
    name: {
        fristName: 'Leirisson',
        surName: "Souza",
    },
    age:26,
    address : {
        street: "Rua X",
        number:23,
        city:"São Paulo",
        postalCode:"123-456",
    },
    message: () => {
        console.log('oi Leirisson')
    },
    message2: () => {
        console.log('oi Leirisson souza dos santos')
    }
}

// Acessando propriedades e metodos usando a notação de ponto
console.log('Email: ', user.email)

// Acessando propriedades e metodos usando a notação de cochetes
console.log('name: ', user['name']['fristName'])

user["message2"]
// acessando o metodo de um objeto
user.message()


