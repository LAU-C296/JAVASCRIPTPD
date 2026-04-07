const tarefas = []; //será guardada as tarefas 

const inputTarefa = document.getElementById("input-tarefa"); 
const btnAdicionar = document.getElementById("btn-adicionar");
const listaTarefas = document.getElementById("lista-tarefas");
const btnExcluirTarefas = document.getElementById("btn-excluir");

function salvarLocalStorage() {
    localStorage.setItem('adicionar', JSON.stringify(btnAdicionar))
}

function adicionarTarefa() {
    const descricao = inputTarefa.value;                //pega o valor do input e remove espaços em branco
    tarefas.push({descricao: descricao, status: false}) //adiciona a tarefa ao array de tarefas
    renderizarTarefas(); 
    console.log(tarefas);                               //exibe o array de tarefas no console para verificar se a tarefa foi adicionada corretamente
    inputTarefa.value = "";                             // limpa o input
}
btnAdicionar.addEventListener("click", adicionarTarefa);

inputTarefa.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionarTarefa()
    }
})

//Fazer os intens da lista aparecerem na tela
function renderizarTarefas(){
    listaTarefas.innerHTML = "";                // limpa a lista antes de renderizar
    tarefas.forEach(function(tarefa, index) {   
    const li = document.createElement("li");
    //checkbox
    const checkbox = document.createElement("input"); //crias o checboc
    checkbox.type = "checkbox";
    checkbox.checked = tarefa.status;   //permitir marcar o checkbox
    //descricao
    const descricao = document.createElement("span");
    descricao.textContent = tarefa.descricao;
    //botao de excluir
    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.style.marginLeft = "10px"; // pequeno espaço entre texto e botão
    btnExcluir.addEventListener("click", () => {tarefas.splice(index, 1); renderizarTarefas()});
    //li
    li.appendChild(checkbox);
    li.appendChild(descricao);
    li.appendChild(btnExcluir);
    listaTarefas.appendChild(li);
  });
}

