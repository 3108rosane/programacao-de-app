

 import Veiculo from './entity/Veiculo';
 import './index.css';

var listaVeiculos :Veiculo[] = [];

 document.getElementById("botao-cadastrar")?.addEventListener("click",async (event:MouseEvent) => {
     
    

    var modelo = document.getElementById("modelo") as HTMLInputElement;
    var cor = document.getElementById("cor")as HTMLInputElement;
    var ano = document.getElementById("ano")as HTMLInputElement;
    var preco = document.getElementById("preco")as HTMLInputElement;
    var placa = document.getElementById("placa")as HTMLInputElement;
    var imagem = document.getElementById("imagem")as HTMLInputElement;

    // const novoCarro = {
    //     modelo: modelo.value,
    //     cor: cor.value,
    //     ano: ano.value,
    //     preco: preco.value, 
    //     placa: placa.value,
    //     imagem: imagem.value,
    // }

    const novoVeiculo = new Veiculo (modelo.value,cor.value,Number(ano.value),Number(preco.value),placa.value,imagem.value);

    listaVeiculos.push(novoVeiculo);
    (window as any).bancoAPI.createVeiculo(novoVeiculo)
    
    const lista_campos = ["modelo","cor","ano","preco","placa","imagem"];
    lista_campos.forEach((campo) => (document.getElementById(campo) as HTMLInputElement).value = "");

    
    
 })

 window.onload =  async () => {
  const veiculos = await (window as any).bancoAPI.findAll();
  for(var i = 0 ; i < veiculos.length; i++){
    const veiculo = new Veiculo(veiculos[i].modelo,veiculos[i].cor, veiculos[i].ano, veiculos[i].valor, veiculos[i].placa,veiculos[i].imagem,veiculos[i].id);

    listaVeiculos.push(veiculo)
  }
 }
 function render(){
  var aside = document.getElementById("lista_veiculo");
  aside.innerHTML = "";

  for(var i = 0; i < listaVeiculos.length; i++){
      aside.innerHTML += `
      <div class="card">
      <img src="${listaVeiculos[i].getImagem()}" alt="" srcset="">
      <div class="dados">
        <strong>${listaVeiculos[i].getModelo()}</strong>
        <span>cor${listaVeiculos[i].getCor()}</span>
        <span>ano${listaVeiculos[i].getAno()}</span>
        <span>preco${listaVeiculos[i].getPreco()}</span>
        <span>placa${listaVeiculos[i].getPlaca()}</span>
      </div>
      <div class="botao-card">
        <button id="botao-ver">ver</button>
        <button id="botao-deletar">deletar</button>
      </div>
    </div>
   ` ;
  }
  

 }

