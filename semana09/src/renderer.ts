

import './index.css';

var listaVeiculos :any = [];

document.getElementById("botao-cadastrar")?.addEventListener("click", (event:MouseEvent) => {
    event.preventDefault();

    var modelo = document.getElementById("modelo") as HTMLInputElement;
    var cor = document.getElementById("cor")as HTMLInputElement;
    var ano = document.getElementById("ano")as HTMLInputElement;
    var preco = document.getElementById("preco")as HTMLInputElement;
    var placa = document.getElementById("placa")as HTMLInputElement;
    var imagem = document.getElementById("imagem")as HTMLInputElement;

    const novoCarro = {
        modelo: modelo.value,
        cor: cor.value,
        ano: ano.value,
        preco: preco.value, 
        placa: placa.value,
        imagem: imagem.value,
    }

    listaVeiculos.push(novoCarro)
    const lista_campos = ["modelo","cor","ano","preco","placa","imagem"];
    lista_campos.forEach((campo) => (document.getElementById(campo) as HTMLInputElement).value = "");

    var aside = document.getElementById("lista_veiculo");
    aside.innerHTML = "";

    for(var i = 0; i < listaVeiculos.length; i++){
        aside.innerHTML += `
        <div class="card">
        <img src="${listaVeiculos[i].imagem}" alt="" srcset="">
        <div class="dados">
          <strong>${listaVeiculos[i].modelo}</strong>
          <span>${listaVeiculos[i].cor}</span>
          <span>${listaVeiculos[i].ano}</span>
          <span>${listaVeiculos[i].preco}</span>
          <span>${listaVeiculos[i].placa}</span>
        </div>
        <div class="botao-card">
          <button id="botao-ver">ver</button>
          <button id="botao-deletar">deletar</button>
        </div>
      </div>
     ` ;
    }
    
    
})

