class ContaBancaria {
    titular: string;
    saldo: number;
  
    constructor(titular: string, saldo: number = 0) {
      this.titular = titular;
      this.saldo = saldo;
    }
  
    depositar(valor: number): void {
      if (valor > 0) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
      } else {
        console.log("Valor inválido para depósito.");
      }
    }
  
    sacar(valor: number): void {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
      } else {
        console.log("Saque não permitido. Verifique o valor.");
      }
    }
  }
  