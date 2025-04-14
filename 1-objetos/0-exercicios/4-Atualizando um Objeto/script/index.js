// 4. Atualizando um Objeto
// Tema: Atualização de Dados de Usuários

// Crie um sistema simples para atualizar os dados de um usuário.
// O usuário inicial tem as seguintes propriedades:

// Nome
// Email
// Endereço
// Escreva funções para:

// Atualizar o email do usuário.
// Adicionar uma nova propriedade chamada "telefone".
// Alterar o endereço do usuário.


const usuario = { nome: "Ana", email: "ana@email.com", endereco: "Rua A, 123" }

function AtualizarEmail(novoEmail){
    return usuario.email = novoEmail
}

function adcionarTelefone(novoTelefone){
    return usuario.telefone = novoTelefone
}

function alterarEndereco(novoEndereco){
    return usuario.endereco = novoEndereco
}





console.log(usuario)