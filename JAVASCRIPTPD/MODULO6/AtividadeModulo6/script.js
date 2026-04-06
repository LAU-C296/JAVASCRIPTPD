const tarefas = []; //será guardada as tarefas 

const inputTarefa = document.getElementById("input-tarefa"); 
const btnAdicionar = document.getElementById("btn-adicionar");
const listaTarefas = document.getElementById("lista-tarefas");

function adicionarTarefa() {
    const descricao = inputTarefa.value;                //pega o valor do input e remove espaços em branco
    tarefas.push({descricao: descricao, status: false}) //adiciona a tarefa ao array de tarefas
    renderizarTarefas(); 
    console.log(tarefas);                               //exibe o array de tarefas no console para verificar se a tarefa foi adicionada corretamente
    inputTarefa.value = "";                             // limpa o input
}
btnAdicionar.addEventListener("click", adicionarTarefa);

//Fazer os intens da lista aparecerem na tela
function renderizarTarefas(){
    listaTarefas.innerHTML = "";                // limpa a lista antes de renderizar
    tarefas.forEach(function(tarefa, index) {   
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarefa.status;
    const descricao = document.createElement("span");
    descricao.textContent = tarefa.descricao;
    li.appendChild(checkbox);
    li.appendChild(descricao);
    listaTarefas.appendChild(li);
  });
}

