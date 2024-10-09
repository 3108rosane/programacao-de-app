/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.ts` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './reset.css';
import './index.css';
import Swal from 'sweetalert2'
import Tarefa from './Tarefa';

console.log('👋 This message is being logged by "renderer.ts", included via Vite');


export function addPeloEnter(evento: KeyboardEvent){
    if(evento.key === 'Enter'){
       adicionarTarefa();
    }
}

var tarefas : Tarefa[]= [];

function adicionarTarefa(){
    const input = document.getElementById("tarefa-text")as HTMLInputElement;
    const tarefaTexto = input.value.trim();

    if(tarefaTexto ===''){
        Swal.fire("VOCÊ TENTOU ADICIONAR UMA TAREFA SEM TEXTO");
        return;
    }

    const novaTarefa = new Tarefa(tarefaTexto);
    tarefas.push(novaTarefa);
    console.log(tarefas)

    localStorage.setItem("tarefas",JSON.stringify(tarefas))
    render()
    input.value = ""
    input.focus();

}

function render(){
    const listaTarefas = document.getElementById("lista-tarefa") as HTMLUListElement;
    listaTarefas.innerHTML = "";
    console.log(tarefas)
    
    for(var i = 0; i < tarefas.length; i ++) {
        const li = document.createElement("li");
        if(tarefas[i] .getCompleted ()=== true) {
            li.classList.add("completed");
        }

        const span = document.createElement("span");
        span.textContent = tarefas[i].getText();

        const concluir = document.createElement("button");
        concluir.textContent = tarefas[i].getCompleted() ?"desmarcar" : "concluir";
        concluir.classList.add("check");
        concluir.setAttribute("onclick",`trocaConcluir(${tarefas[i].getId()})`);

        const edit = document.createElement("button");
        edit.textContent = "Editar";
        edit.classList.add("edit");
        edit.setAttribute("onclick",`editarTarefa(${tarefas[i].getId()})`);


        const deletar = document.createElement("button");
        deletar.textContent = "Deletar";
        deletar.classList.add("delete");
        deletar.setAttribute("onclick",`deletarTarefa(${tarefas[i].getId()})`);

        const div = document.createElement("div");
        div.appendChild(concluir)
        div.appendChild(edit)
        div.appendChild(deletar)
        li.appendChild(span);
        li.appendChild(div);
        listaTarefas.appendChild(li);
    }
}

function trocaConcluir(id: number){
    const index = tarefas.findIndex(tarefa => tarefa.getId() === id);
    const valorAtual = tarefas[index].getCompleted();

    tarefas[index].setCompleted(!valorAtual);
    localStorage.setItem("tarefas",JSON.stringify(tarefas))
    render();

}
async function editarTarefa(id: number){
    const index = tarefas.findIndex(tarefa => tarefa.getId() === id);
   // const novotextoTarefa = prompt('Edite a tarefa',tarefas[index].getText());
   const { value} = await Swal.fire({
       title: "Editar tarefa",
       input: "text",
       inputLabel: "edite o texto",
       inputValue: tarefas[index].getText(),
       showCancelButton: true,
       
    });
    if(value !== null && value.trim() !==''){
        tarefas[index].setText(value.trim());
        localStorage.setItem("tarefas",JSON.stringify(tarefas))
        render();
    }
    console.log(value);
}


function deletarTarefa(id: number){
    const tarefasFiltradas = tarefas.filter(tarefa => tarefa.getId() !== id);
    tarefas = tarefasFiltradas
    localStorage.setItem("tarefas",JSON.stringify(tarefas))
    render();
}



function carregarTarefas(){
    const tarefasLocalStore = localStorage.getItem("tarefas");
    if(tarefasLocalStore){
        tarefas = JSON.parse(tarefasLocalStore);
        render();

    }
}
(window as any).addPeloEnter = addPeloEnter;

window.addPeloEnter = addPeloEnter;
window.adicionarTarefa = adicionarTarefa;
window.trocaConcluir = trocaConcluir;
window.editarTarefa = editarTarefa;
window.deletarTarefa = deletarTarefa;