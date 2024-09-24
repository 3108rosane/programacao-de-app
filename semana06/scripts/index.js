//alert("HELLO WORD...")

//console.log("testando")

function pegarInformacoes(event){
    console.log
    event.preventDefaut();
    alert ("entrou na funçao")
    var nome = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (nome.value === "" || email.value === "" || message.value === ""){
        alert("voce deve informar as informaçãoes...");
        nome.style.bordecolor = "red"; 
        email.style.bordecolor = "red"; 
        message.style.bordecolor = "red"; 

    }
    console.log(nome);
    console.log(email);
    console.log(message);
    
}
function capturarTecla(event){
    console.log(evento);
    if(evento.key === "enter"){
        pegarInformacoes(evento)
    }
}
function verificarDisabled(){
    var nome = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if(nome !== ""&& email !== "" && message !== ""){
        document.getElementById("enviar").disabled = false;
    }else {
        document.getElementById("enviar").disabled = true;
    }

}