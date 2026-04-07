const  curtir = []

const inputCurtir = document.getElementById("nome")
const botaoCurtir = document.getElementById("btn-adicionar")
const pCurtir = document.getElementById("resultado")

function adicionarCurtida() {
    const nome = inputCurtir.value;
    if (nome.trim() === '') {
        pCurtir.textContent = 'Nenhum nome foi adicionado'
        return
    }
    console.log(nome)
    if (curtir.includes(nome)){
        console.log('já curtiu!')
    } else {
        curtir.push(nome)
        console.log(curtir)
    }
    atualizarTexto()
    inputCurtir.value = ''; // Limpa o input após adicionar
}

//Curtir a partir da tecla "enter" e a caixa input apaga depois de curtir;
botaoCurtir.addEventListener('click', adicionarCurtida)

inputCurtir.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionarCurtida()
    }
})

function atualizarTexto(){
    if (curtir.length === 0){
        pCurtir.textContent = 'niguem curtiu'
    }
    else if (curtir.length === 1){
        pCurtir.textContent = `${curtir[0]} curtiu`
    }
    else if(curtir.length === 2){
        pCurtir.textContent = `${curtir[0]} e ${curtir[1]} curtiram`
    }
    else {
         pCurtir.textContent = `${curtir[0]}, ${curtir[1]} e mais ${curtir.length - 2} pessoas curtiram`
    }
}
atualizarTexto()