interface ProdutoLoja {
    codigo: number;
    nome: string;
  }
  
  class Loja {
    private produtos: ProdutoLoja[];
  
    constructor() {
      this.produtos = [];
    }
  
    adicionarProduto(produto: ProdutoLoja): void {
      this.produtos.push(produto);
    }
  
    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
      return this.produtos.find(produto => produto.codigo === codigo);
    }
  }
  
  const loja = new Loja();
  
  loja.adicionarProduto({ codigo: 1, nome: "Processador" });
  loja.adicionarProduto({ codigo: 2, nome: "Placa de Vídeo" });
  loja.adicionarProduto({ codigo: 3, nome: "Monitor" });
  
  console.log(loja.buscarProdutoPorCodigo(2)); 
  
  console.log(loja.buscarProdutoPorCodigo(4));