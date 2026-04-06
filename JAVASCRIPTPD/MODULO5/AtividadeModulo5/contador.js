//TEMPORIZADOR DE CONTAGEM REGRESSIVA 
//1. Defina uma função para calcular o tempo restante até uma data futura:
function calcularTempoRestante(dataFutura) {
    const agora = new Date(); //obtém a data atual
    const diferenca = dataFutura - agora; //calcula a diferença entre a data futura e a data atual
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    return { dias, horas, minutos, segundos };
}

const dataFutura = new Date("2026-06-11T00:00:00"); //define a data futura
calcularTempoRestante(dataFutura); //chama a função calcularTempoRestante com a data futura

function atualizarTemporizador() {
    const tempo = calcularTempoRestante(dataFutura); //calcula o tempo restante
     //atualiza o conteúdo dos elementos HTML com o tempo restante
    document.getElementById("dias").textContent = tempo.dias;          
    document.getElementById("horas").textContent = tempo.horas;
    document.getElementById("minutos").textContent = tempo.minutos;
    document.getElementById("segundos").textContent = tempo.segundos;
}
 setInterval(atualizarTemporizador, 1000); //chama a função atualizarTemporizador a cada 1 segundo


