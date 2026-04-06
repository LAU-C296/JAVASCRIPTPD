//temporizadores 
//milesegundos são usados para definir o tempo de atraso ou intervalo
function chamar(segundosdeatraso) {  
    console.log(`atrasou ${segundosdeatraso} segundos`);
}

function chamaatrasado(funcaodeatraso, quantidadedeatraso) {  //função para ser chamada depois de um tempo
    setTimeout(() => funcaodeatraso (quantidadedeatraso), quantidadedeatraso * 1000) //chama a função depois de 10 segundos
}

chamaatrasado(chamar, 5) //chama a função chamar depois de 5 segundos

function intervalo() {
    setInterval(() => intervalo(), 1000) //chama a função intervalo a cada 1 segundo
}
intervalo() //chama a função intervalo