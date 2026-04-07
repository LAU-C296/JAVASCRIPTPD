// Recupera do localStorage ou inicia vazio
const curtir = JSON.parse(localStorage.getItem('curtidas')) || []

const inputCurtir = document.getElementById("nome")
const botaoCurtir = document.getElementById("btn-adicionar")
const botaoLimpar = document.getElementById("btn-limpar")
const pCurtir = document.getElementById("resultado")

function salvarLocalStorage() {
    localStorage.setItem('curtidas', JSON.stringify(curtir))
}

function adicionarCurtida() {
    const nome = inputCurtir.value.trim()

    if (nome === '') {
        pCurtir.textContent = 'Nenhum nome foi adicionado'
        return
    }

    if (curtir.includes(nome)) {
        console.log('já curtiu!')
    } else {
        curtir.push(nome)
        salvarLocalStorage()
    }

    atualizarTexto()
    inputCurtir.value = ''
}

botaoCurtir.addEventListener('click', adicionarCurtida)

inputCurtir.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionarCurtida()
    }
})

botaoLimpar.addEventListener('click', function() {
    curtir.length = 0 // limpa array
    localStorage.removeItem('curtidas') // limpa storage
    atualizarTexto()
})

function atualizarTexto() {
    if (curtir.length === 0) {
        pCurtir.textContent = 'Ninguém curtiu'
    }
    else if (curtir.length === 1) {
        pCurtir.textContent = `${curtir[0]} curtiu`
    }
    else if (curtir.length === 2) {
        pCurtir.textContent = `${curtir[0]} e ${curtir[1]} curtiram`
    }
    else {
        pCurtir.textContent = `${curtir[0]}, ${curtir[1]} e mais ${curtir.length - 2} pessoas curtiram`
    }
}

// Atualiza ao carregar a página
atualizarTexto()