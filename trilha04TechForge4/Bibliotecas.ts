interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
  }
  
  class Biblioteca {
    private livros: Livro[];
  
    constructor() {
      this.livros = [];
    }
  
    adicionarLivro(livro: Livro): void {
      this.livros.push(livro);
    }
  
    buscarLivrosDisponiveis(): Livro[] {
      return this.livros.filter(livro => livro.disponivel);
    }
  }
  
  const bibliotecas = new Biblioteca();
  
  bibliotecas.adicionarLivro({ titulo: "A Sociedade do Anel", autor: "J.R.R. Tolkien", disponivel: true });
  bibliotecas.adicionarLivro({ titulo: "As Duas Torres", autor: "J.R.R. Tolkien", disponivel: false });
  bibliotecas.adicionarLivro({ titulo: "O Retorno do Rei", autor: "J.R.R. Tolkien", disponivel: true });
  
  const livrosDisponiveis = bibliotecas.buscarLivrosDisponiveis();
  console.log(livrosDisponiveis);