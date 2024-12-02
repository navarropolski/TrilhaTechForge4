abstract class Funcionario {
    private nome: string;
    private salario: number;
  
    constructor(nome: string, salario: number) {
      this.nome = nome;
      this.salario = salario;
    }
  
    getSalario(): number {
      return this.salario;
    }
  
    getNome(): string {
      return this.nome;
    }
  
    abstract calcularBonus(): number;
  
    calcularSalarioFinal(): number {
      return this.salario + this.calcularBonus();
    }
  }
  
  class Gerente extends Funcionario {
    calcularBonus(): number {
      return this.getSalario() * 0.1;
    }
  }
  
  class Operario extends Funcionario {
    calcularBonus(): number {
      return this.getSalario() * 0.05;
    }
  }
  
  function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach((funcionario) => {
      console.log(
        `${funcionario.getNome()}: Salário final: R$${funcionario.calcularSalarioFinal().toFixed(2)}`
      );
    });
  }
  
  const gerente = new Gerente("Alice", 8000);
  const operario = new Operario("Bob", 3000);
  
  calcularSalarioComBonus([gerente, operario]);
  