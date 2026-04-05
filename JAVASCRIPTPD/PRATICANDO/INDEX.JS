/*quando a variavel é declarada dentro de uma função, ela é chamada de variável local.
Não é permitido que ela seja acessada fora da função*/
function nome() {
    const nome = "laura";
    console.log(nome);
}

nome();


const nome2 = "Julia";
function nomedasegundapessoa() {
    console.log(nome2);
}
nomedasegundapessoa();

/*ARRAY: lista de valores guardados em uma única variável.
É como uma caixa com vários compartimentos, e cada um pode ter um valor diferente.*/

const soma = numb1 + numb2;
const subtrair = numb1 - numb2; 
const multiplicar = numb1 * numb2;
const dividir = numb1 / numb2;

console.log('Soma entres:', ${numb1} + ${numb2} = ${soma});
console.log('Subtração entre:', ${numb1} - ${numb2} = ${subtrair});
console.log('Multiplicação entre:', ${numb1} * ${numb2} = ${multiplicar});
console.log('Divisão entre:', ${numb1} / ${numb2} = ${dividir});
