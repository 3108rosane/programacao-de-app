import Dono from "./Dono";

export default class cachorro {
    constructor(nome: string , raca : string, cor: string,tamanho: string, dono: Dono ) {
        this.nome = nome;
        this.raca = raca;
        this.cor = cor;
        this.tamanho = tamanho
        this.dono = dono;

    }
    public nome: string;
    public raca: string;
    public cor: string;
    public tamanho: string;
    public dono: Dono;

    exibirCachorro() {
        console.log(` O cachorro ${this.nome} é a raca ${this.raca} é a cor ${this.cor} tamanho é ${this.tamanho}`)
    }
    exibirDono(){
        console.log(`o dono do ${this.nome} e ${this.dono.nome} e telefone ${this.dono.telefone}`);
    }
}