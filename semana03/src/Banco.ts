import ContaBancaria from "./ContaBancaria";
import ContaCorrente from "./ContaCorrente";
import Titular from "./Titular";
import leia from "readline-sync"

export default class Banco{
    private contas: ContaBancaria[] = [];

    public transferir() {
        var numeroOrigem = leia.questionInt("digite o numero");
        var valorTransferencia = leia.questionFloat("digite o valor que deseja transferir")
        var i = this.contas.findIndex(conta => conta.getNumero() === numeroOrigem);
        for(var i = 0; i <  this.contas.length; i++){
            if(var numeroOrigem: number this.contas[i].getNumero()){
                //logica de deletar
                this.contas.splice(i, 1);
                return;
            }


        //buscar a conta de origem da transferencia
        //pedir valor de transferencia
        //verificar se tem saldo
        //buscar conta de destino da transferencia
        // sacar da conta de origem 
        // depositar conta destino
    }

    public adicionarConta(conta: ContaBancaria){
        this.contas.push(conta);
        console.log(`conta com ${conta.getNumero()}foi criada com sucesso!`)

     }
     public mostrarContas(){
        console.table(this.contas)
    }

    public addAccount(){
        var nome = leia.question("digite seu nome:")
        var cpf = leia.question("digite seu cpf:")
        var chavePix = leia.question("digite chave pix:")
        var tipoConta = leia.keyInSelect(["corrente","poupanca"]) + 1 ;

        var titular = new Titular(nome, cpf);

        var conta:ContaBancaria;
        if(tipoConta === 1){
            conta = new ContaCorrente(titular,chavePix);

        }else{ 
            conta = new ContaBancaria(titular, chavePix)
        }

    this.adicionarConta(conta);
    console.log(`conta com ${conta.getNumero()}foi criada com sucesso!`)

    }
public removerConta(){
    console.log("--------deletar conta---------")
    var numeroConta = leia.question("digite numero da conta para deletar");
// encontra conta (numero)
//removo do array
      for(var i = 0; i <  this.contas.length; i++){
        if(numeroConta === this.contas[i].getNumero()){
            //logica de deletar
            this.contas.splice(i, 1);
            return;
        }


      }

      //var contaExiste = this.contas.find(conta => conta.getNumero() === numeroConta);
     // if(!contaExiste){
      console.log(`nao foi encontrado nenhuma conta com esse numero ${numeroConta}`)
      //deletar conta
    }
 }
}