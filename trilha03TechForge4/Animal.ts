class Animal {
    private energia: number;
  
    constructor() {
      this.energia = 100;
    }
  
    comer(valor: number): void {
      this.energia += valor;
    }
  
    statusEnergia(): void {
      console.log(`Energia atual: ${this.energia}`);
    }
  }
  
  class Leao extends Animal {
    comer(): void {
      console.log("O leão está caçando...");
      super.comer(-20);
      super.comer(50);
    }
  }
  
  class Passaro extends Animal {
    comer(): void {
      console.log("O pássaro está se alimentando...");
      super.comer(10);
    }
  }
  
  const leao = new Leao();
  const passaro = new Passaro();
  
  leao.comer();
  leao.statusEnergia();
  
  passaro.comer();
  passaro.statusEnergia();
  