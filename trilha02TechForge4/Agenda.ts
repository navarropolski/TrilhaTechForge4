class Agenda {
    compromissos: string[];
  
    constructor() {
      this.compromissos = [];
    }
  
    adicionarCompromisso(compromisso: string): void {
      this.compromissos.push(compromisso);
      console.log(`Compromisso "${compromisso}" adicionado.`);
    }
  
    listarCompromissos(): void {
      console.log("Lista de compromissos:");
      this.compromissos.forEach((compromisso, index) => {
        console.log(`${index + 1}. ${compromisso}`);
      });
    }
  }
  