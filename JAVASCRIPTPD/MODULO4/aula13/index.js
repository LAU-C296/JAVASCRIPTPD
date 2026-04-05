//Manipulando objetos

const meusDdados = {
    nome: 'Laura',
    sobrenome: 'araújo',
    moranoBrasil: true,
    idade: 17
}

//verificar se o objeto possui determinado valor
function objetoPossuiValor(valordachave){
    const valoresdoObjeto = Object.values(meusDdados) //Object.values() é um método do JavaScript que retorna um array com os valores das propriedades enumeráveis de um objeto. 
    console.log(valoresdoObjeto)
    return valoresdoObjeto.includes(valordachave) //O método includes() é usado para verificar se um array contém um determinado elemento. Ele retorna true se o elemento for encontrado no array e false caso contrário.
}

console.log(objetoPossuiValor('luiza')) 
console.log(objetoPossuiValor('20')) 