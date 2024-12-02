abstract class FavoriteManager {
    protected favorites: Set<string> = new Set();
  
    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];
  }
  
  class MoviesFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
      this.favorites.add(item);
    }
  
    getFavorites(): string[] {
      return Array.from(this.favorites).sort();
    }
  }
  
  class BooksFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
      this.favorites.delete(item);
      this.favorites = new Set([item, ...this.favorites]);
    }
  
    getFavorites(): string[] {
      return Array.from(this.favorites);
    }
  }
  
  const moviesManager = new MoviesFavoriteManager();
  moviesManager.addFavorite("Taxi Driver");
  moviesManager.addFavorite("Interstellar");
  moviesManager.addFavorite("Alien Oitavo Passageiro");
  
  const booksManager = new BooksFavoriteManager();
  booksManager.addFavorite("O Hobbit");
  booksManager.addFavorite("O Senhor dos Anéis");
  booksManager.addFavorite("1984");
  
  console.log("Filmes favoritos:", moviesManager.getFavorites());
  console.log("Livros favoritos:", booksManager.getFavorites());
  