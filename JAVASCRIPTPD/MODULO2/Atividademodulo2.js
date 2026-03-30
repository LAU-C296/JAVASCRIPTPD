//Soma: recebe dois números e retorna a soma
const soma = (numb1, numb2) => numb1 + numb2;
const subtrair = (numb1, numb2) => numb1 - numb2;
const multiplicar = (numb1, numb2) => numb1 * numb2;
const dividir = (numb1, numb2) => numb1 / numb2;

//Mostrar resultado 
// $ significa que vai inserir uma variáveldentro da string, e as chaves indicam qual variável vai ser inserida.

function mostrarResultado (numb1, numb2) {
    console.log (`Soma entre ${numb1} + ${numb2}: ${soma(numb1, numb2)}`);
    console.log (`Subtração entre ${numb1} - ${numb2}: ${subtrair(numb1, numb2)}`); 
    console.log (`Multiplicação entre ${numb1} * ${numb2}: ${multiplicar(numb1, numb2)}`); 
    console.log (`Divisão entre ${numb1} / ${numb2}: ${dividir(numb1, numb2)}`);  
}

mostrarResultado(10, 5);