abstract class FiguraGeometrica {
    abstract calcularArea(): number;
  }
  
  class Circulo extends FiguraGeometrica {
    raio: number;
  
    constructor(raio: number) {
      super();
      this.raio = raio;
    }
  
    calcularArea(): number {
      return Math.PI * this.raio ** 2;
    }
  }
  
  class Quadrado extends FiguraGeometrica {
    lado: number;
  
    constructor(lado: number) {
      super();
      this.lado = lado;
    }
  
    calcularArea(): number {
      return this.lado ** 2;
    }
  }
  
  class Triangulo extends FiguraGeometrica {
    base: number;
    altura: number;
  
    constructor(base: number, altura: number) {
      super();
      this.base = base;
      this.altura = altura;
    }
  
    calcularArea(): number {
      return (this.base * this.altura) / 2;
    }
  }
  
  function calcularAreas(figuras: FiguraGeometrica[]): void {
    figuras.forEach((figura, index) => {
      console.log(`Área da figura ${index + 1}: ${figura.calcularArea()}`);
    });
  }
  
  const circulo = new Circulo(5);
  const quadrado = new Quadrado(4);
  const triangulo = new Triangulo(6, 8);
  
  calcularAreas([circulo, quadrado, triangulo]);
  