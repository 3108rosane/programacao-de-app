import leia from 'readline-sync'
import { Celular,cadastraCelular } from './repository/celularrepository'
import { Pessoa } from './repository/pessoarepository'

var obj1: Celular = {
    tamanhoTela: 7.6,
    marca: "samsung",
    cor: "rosa"
}
var obj2: Celular = {
    tamanhoTela: 7.6,
    marca: "samsung",
    cor: "rosa",
}
//outro arquivo------------------/


var cor = leia.question("INFORME A COR DO CELULAR:")
var marca = leia.question("INFORME A MARCA:")
var tamanho = leia.questionFloat("INFORME O TAMANHO DE TELA:")

var celular: Celular = {
    cor: cor,
    marca: marca,
    tamanhoTela: tamanho

}




var nome = leia.question("DIGITE O NOME:  ");
var cpf = leia.question("DIGITE O CPF:  ");
var dataDeNascimento = leia.question("DIGITE A DATA DE NASCIMENTO:  ");
var telefone = leia.question("DIGITE O TELEFONE;  ");
var email = leia.question("DIGITE UM EMAIL:  ");

const pessoa: Pessoa = {
    nome: nome,
    cpf: cpf,
    dataDeNascimento:dataDeNascimento,
    contatos:{
        telefones: [telefone],
        emails: [email]
    },
    celular: celular

}
console.log(pessoa)