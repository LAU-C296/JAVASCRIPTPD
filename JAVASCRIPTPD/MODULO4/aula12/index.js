//Obketos: Taambem é uma lista, porem é indexado. Você o chama pelo nomde da posição.
//Vários dados - nome, sobrenome, idade, etc. - em um único lugar. São separados por vírgula.
const meusDdados = {
    nome: 'Laura',
    sobrenome: 'araújo',
    moranoBrasil: true,
    idade: 17
}
console.log(meusDdados)
console.log(meusDdados.nome)
console.log(meusDdados.sobrenome)
console.log(meusDdados.moranoBrasil)
console.log(meusDdados.idade)
console.log(`Meu nome é ${meusDdados.nome} ${meusDdados.sobrenome}, tenho ${meusDdados.idade} anos e moro no Brasil? ${meusDdados.moranoBrasil}`)
