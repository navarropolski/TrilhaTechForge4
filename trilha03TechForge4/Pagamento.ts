class Pagamento {
    processar(): void {
      console.log("Processando pagamento...");
    }
  }
  
  class PagamentoCartao extends Pagamento {
    numeroCartao: string;
  
    constructor(numeroCartao: string) {
      super();
      this.numeroCartao = numeroCartao;
    }
  
    processar(): void {
      if (this.validarCartao()) {
        console.log("Pagamento com cartão processado com sucesso!");
      } else {
        console.log("Número do cartão inválido.");
      }
    }
  
    private validarCartao(): boolean {
      return this.numeroCartao.length === 16;
    }
  }
  
  class PagamentoBoleto extends Pagamento {
    processar(): void {
      const codigoBoleto = this.gerarCodigoBoleto();
      console.log(`Boleto gerado com código: ${codigoBoleto}`);
    }
  
    private gerarCodigoBoleto(): string {
      return Math.random().toString().slice(2, 12);
    }
  }
  
  function processarPagamentos(pagamentos: Pagamento[]): void {
    pagamentos.forEach((pagamento) => pagamento.processar());
  }
  
  const cartao = new PagamentoCartao("1234567890123456");
  const boleto = new PagamentoBoleto();
  
  processarPagamentos([cartao, boleto]);
  