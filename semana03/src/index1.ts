import leia from "readline-sync"
import Banco from "./Banco";
import { suite } from "node:test";

var nubank = new Banco();


var opcao = 0;
do {
    opcao = leia.keyInSelect(["criar conta", "transferencia","remover", "mostrar"]) + 1;
    switch (opcao) {
        case 1:
            nubank.addAccount();
            break;
        case 2:
            console.log("opcao indisponivel!!");
            break;
        case 3:
            nubank.removerConta();
            break; 
        case 4:
               nubank.mostrarContas();
               break;

    }

} while (opcao !== 0);
