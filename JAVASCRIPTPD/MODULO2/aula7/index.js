//Escorpo
/*se a variável está dentro do bloco de cod, ela só será acessível dentro desse bloco, ou seja, ela tem 
um escopo local. Já as variáveis declaradas fora de qualquer bloco de código tem um escopo global, ou seja, elas são 
acessíveis em qualquer parte do código.*/
const todomundove = 'Todo mundo ve está variavel de escopo global';

function executaescoploglobal() {
    console.log(todomundove);
}

function executaescopolocal() {
    const visivelemescopolocal = 'Essa variavel só é visivel dentro dessa função';
    console.log(visivelemescopolocal);
}   

executaescoploglobal();

executaescopolocal();
