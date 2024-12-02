interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
  }
  
  class BibliotecaGestao {
    private livros: LivroBiblioteca[];
  
    constructor() {
      this.livros = [];
    }
  
    adicionarLivro(livro: LivroBiblioteca): void {
      this.livros.push(livro);
    }
  
    filtrarPorGenero(genero: string): LivroBiblioteca[] {
      return this.livros.filter(livro => livro.genero.toLowerCase() === genero.toLowerCase());
    }
  
    buscarPorAutor(autor: string): LivroBiblioteca[] {
      return this.livros.filter(livro => livro.autor.toLowerCase() === autor.toLowerCase());
    }
  
    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
      return this.livros
        .filter(livro => livro.disponivel)
        .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
  }
  
  const biblioteca = new BibliotecaGestao();
  
  biblioteca.adicionarLivro({ titulo: "A Sociedade do Anel", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: true });
  biblioteca.adicionarLivro({ titulo: "As Duas Torres", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: false });
  biblioteca.adicionarLivro({ titulo: "O Retorno do Rei", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: true });
  biblioteca.adicionarLivro({ titulo: "O Hobbit", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: true });
  biblioteca.adicionarLivro({ titulo: "1984", autor: "George Orwell", genero: "Distopia", disponivel: true });
  biblioteca.adicionarLivro({ titulo: "Admirável Mundo Novo", autor: "Aldous Huxley", genero: "Distopia", disponivel: false });
  
  console.log("Filtrando por gênero 'Fantasia':", biblioteca.filtrarPorGenero("Fantasia"));
  
  console.log("Buscando por autor 'J.R.R. Tolkien':", biblioteca.buscarPorAutor("J.R.R. Tolkien"));
  
  console.log("Livros disponíveis ordenados:", biblioteca.obterLivrosDisponiveisOrdenados());