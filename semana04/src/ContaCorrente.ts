import ContaBancaria from "./ContaBancaria";
import Titular from "./Titular";


export default class ContaCorrente extends ContaBancaria {
  private limite: number;
  constructor(titular: Titular, chavePix: string) {
    super(titular, chavePix);
    this.limite = 3900;
  }
  public getlimite(): number {
    return this.limite;
  }

  public override sacar(valor: number): void {
    var valorDisponivel = this.getSaldo() + this.limite;

    if (valor <= 0 || valor > valorDisponivel) {
      console.log("saldo/limite insuficiente para saque");
      return;
    }

    if (valor > this.getSaldo()) {
      var aux = valor - this.getSaldo();
      this.limite = this.limite - aux;
      this.setSaldo(0);
      console.log(` Sacado ${valor}realizado com sucesso!`)
      console.log(`seu saldo é ${this.getSaldo()}!!`);
      console.log(`seu limite é ${this.limite}`)
      return;
    }

    var saldo = this.getSaldo();
    this.setSaldo(saldo - valor);

    console.log(` Sacado ${valor}realizado com sucesso!`)
    console.log(`seu saldo é ${this.getSaldo()}!!`);
    console.log(`seu limite é ${this.limite}`)
  }
}