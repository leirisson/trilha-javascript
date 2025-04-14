/*
 OPERADOR DE COALESCENCIA NULA (??)
 operador lógico que retorna o seu operador do
 lado direito quando o seu operador do lado
 esquerdo é null ou undefined. Caso contrário, 
 ele retorna o seu operando do lado esquerdo.
*/

// se for nulo ou undefined vai exibir o conteudo padrão
let content = null
console.log(content ?? "Conteudo padrão")


// se tiver conteudo como:
let content2 = 'Leirirsson'
console.log(content2 ?? 'Conteudo padrão.')


const user = {
    name:"Leirisson",
    avatar: null || undefined
}

console.log(user.avatar ?? 'default-avatar-padrao.png')