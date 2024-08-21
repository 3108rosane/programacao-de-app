//var nome: string = "ROSANE";

//console.log(nome)


//string ,
//boolean ,verdadeiro ou falso
//number , numero  ou valor

import leia from 'readline-sync'

var idades: number[] = [];
var nomes: string[] = [];

var nomeNova: string;
var idadeNova: number;
var nomeVelha: string;
var idadeVelha: number;

function pedirInfoUsuario(qtd: number){
    for(var i = 0; i < qtd; i ++){
        var nome = leia.question("informe o nome:");
        nomes.push(nome);
        var idade = leia.questionInt("informe a idade:");
        idades.push(idade);

    }
}
    function pessoaMaisnova(){
        for(var i = 0; i < idades.length; i++){
            if(idadeNova === undefined || idades[i] < idadeNova){
                idadeNova = idades[i];
                nomeNova = nomes[i];
            }
        }
        console.log(`a pessoa mais nova é ${nomeNova} com ${idadeNova}anos`);

    }
    function pessoaMaisVelha(){
        idades.forEach((idade, index) =>{
            if(idadeVelha === undefined || idade > idadeVelha){
                idadeVelha = idade;
                nomeVelha = nomes[index];
            }

        })
        console.log(`a pessoa mais velha é ${nomeVelha}com ${idadeVelha}anos`);
    }

    pedirInfoUsuario(5);
    pessoaMaisVelha();
    pessoaMaisnova();

   