// 2. Acessar um Objeto
// Tema: Gerenciamento de Funcionários

// Você recebeu uma lista de funcionários 
// de uma empresa em formato de objeto. Acesse e imprima no console:

// O nome do funcionário.
// O salário do funcionário.
// O departamento ao qual o funcionário pertence.

const funcionarios = [
    { nome: "João", salario: 5000, departamento: "TI" },
    { nome: "Maria", salario: 6000, departamento: "RH" },
    { nome: "Marlucia da silva", salario: 3000, departamento: "MKT" },
    { nome: "Gracie", salario: 20000, departamento: "DIR" },
    { nome: "Clara", salario: 1200, departamento: "ES" }
]

for(let i=0; i<= funcionarios.length-1; i++){
    console.log(`DADOS DO FUNCIONARIO:
=====================
nome: ${funcionarios[i].nome}
salario: ${funcionarios[i].salario}
departamento: ${funcionarios[i].departamento}`)

}