var tarefas = [];

function addtarefa(){
    const input = document.getElementById("tarefa-text");
    const tarefaTexto = input.Value.trim();

    if(tarefaTexto ===''){
        alert("VOCÊ TENTOU ADICIONAR UMA TAREFA SEM TEXTO");
        return;
    }

    const novaTarefa = {
        id: Math.floor(Math.random()* 100000),
        text: tarefaTexto,
        completed: false
    }

    tarefas.push(novaTarefa);
    console.log(tarefas);
    input.Value = ""
    input.focus();



function render(){
    const listaTarefas = document.getElementById("lista-tarefa");

    for(var i = 0; i < tarefas.length; i ++);{
        const li = document.createElement("li");
        if(tarefas[i].completed === true){
            li.classList.add("completed");
        }
        const span = document.createElement("span");
        span.textContent = tarefas[i].text;

        const concluir = document.createElement("button");
        concluir.textContent = 
}
}
}