//Laços de repetição: estruturas que utlizanos para execurtar algo ate que a condição seja satisfeita.
const fibonacci = [1,1,2,3,5,8,13,21,34];

/*for: recebe 3 tipos de condições diferentes:   //i++ é o incremento, ou seja, a cada repetição ele vai somar 1 a variável i
1- declara variável de controle                  //Lendo o código: para cada i, enquanto i for menor que o tamanho do array fibonacci, faça algo
2- define a condição de parada
3- especifica o incremento ou decremento*/
for(let i = 0; i < fibonacci.length; i++){
    console.log(i+1, 'o item é', fibonacci[i]);  //Dando a posição do item e o valor do item
}  

//função para ler cada item do array, usando o for
function interaSobreArray(array){
    for(let i = 0; i < array.length; i++){
        console.log(i+1, 'o item é', array[i]);
    }
}
interaSobreArray(); 

