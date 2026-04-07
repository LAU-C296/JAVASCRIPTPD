const usuariosEncontrados = []; // array para armazenar resultados
//Trazer do HTML
const input = document.getElementById("busca");
const botao = document.getElementById("btn-buscar");
const lista = document.getElementById("lista");
const mensagem = document.getElementById("mensagem");
const botaoLimpar = document.getElementById("btn-limpar");

botao.addEventListener('click', buscarUsuarios);

//Declarando uma função assíncrona 
//se estiver vazio => o catch captura o erro.
//se tiver algo => faz uma requisição assíncrona para o GitHub
//Se der erro => mostra mensagem de erro
async function buscarUsuarios() {
    const valor = input.value.trim();  //input.value: pega o valor digitado no input. Já o .trimconst valor = input.value.trim();
//Se o usuario nao digitar nada vai aparecer na tela "Digite algo para buscar"
    if (valor === "") {
    mensagem.textContent = "Digite algo para buscar";
    lista.innerHTML = "";
    return;
    }
//Bloco try tenta fazer a busca 
    try{
        const resposta = await fetch(`https://api.github.com/search/users?q=${valor}`) //fetch: faz uma requisição para a api, buscando resultado para o valor digitado; Já o awaitt fetch espera a promisse terminar antes de continuar
        const dados = await resposta.json(); // Transforma a resposta da API (JSON) em um objeto JavaScript que você pode manipular.
            mostrarUsuarios(dados.items); //chama outra funcao que exibe os usuarios na tela
    }
    //o catch captura o erro caso apareca algum pproblema durante o fetch
    catch (erro) {
    mensagem.textContent = "Ocorreu um erro na busca";
    lista.innerHTML = "";
    console.error(erro);
    }

}

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        buscarUsuarios()
    }
})

//Função para encontra e mostrar usuário, e caso não encontra mostrar mensagem de nao encontrados
function mostrarUsuarios(usuarios) {
    lista.innerHTML = "";
    mensagem.textContent = "";

    if (!usuarios || usuarios.length === 0) {
        mensagem.textContent = "Não foram encontrados usuários para esta pesquisa";
        return;
    }

    usuarios.forEach(usuario => {
        const li = document.createElement("li");
        li.innerHTML = `
            <img src="${usuario.avatar_url}" width="50" alt="${usuario.login}">
            <a href="${usuario.html_url}" target="_blank">${usuario.login}</a>
        `;
        lista.appendChild(li);
    });
}

botaoLimpar.addEventListener('click', function() {
    // Limpar array, lista, input e storage
    usuariosEncontrados.length = 0;
    lista.innerHTML = "";
    input.value = "";   
    localStorage.removeItem('usuarios');
    // Mostrar mensagem temporária
    mensagem.textContent = "A pesquisa foi limpa com sucesso"; 
    setTimeout(() => {mensagem.textContent = "";}, 5000); // some depois de 5 segundos
});