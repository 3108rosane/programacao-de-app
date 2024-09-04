
import ContaBancaria from "./ContaBancaria"
import Contacorrente from "./ContaCorrente"
import ContaPoupanca from "./ContaPoupanca"
import Titular from "./Titular"
import leia from "readline-sync"

var nome = leia.question("Digite nome do usuário: ")
var cpf = leia.question("Digite o cpf: ")
var chavePix = leia.question("Digite o chave pix: ")

var t1 = new Titular(nome,cpf);
var c1 = new ContaBancaria(t1, chavePix);
console.log("conta normal")
c1.depositar(1000);
c1.sacar(200);


var cc = new Contacorrente(t1,chavePix);
console.log("conta corrente");
c1.depositar(1000);
c1.sacar(200);

console.log("conta poupanca")
var cp = new ContaPoupanca(t1,"jhhfdggh");
cp.depositar(200);
cp.sacar(200);


//console.log(c1.getNumero());
//c1.setNumero(47991180202);
//console.log(c1.getNumero);exemplo
