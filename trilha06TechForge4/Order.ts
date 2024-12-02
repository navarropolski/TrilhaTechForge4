/* class Order {
    private items: string[] = [];
    private totalPrice: number = 0;
    private paymentStatus: string = 'Pendente';
    private shippingStatus: string = 'Pendente';
  
    addItem(item: string, price: number): void {
      this.items.push(item);
      this.totalPrice += price;
    }
  
    processPayment(): void {
      this.paymentStatus = 'Pago';
    }
  
    updateShippingStatus(status: string): void {
      this.shippingStatus = status;
    }
  
    getOrderSummary(): string {
      return `Items: ${this.items.join(', ')}, Total: ${this.totalPrice}, Status: ${this.paymentStatus}, Envio: ${this.shippingStatus}`;
    }
  }
  
  const order = new Order();
  order.addItem('Mega Drive', 5000);
  order.addItem('Super Nintendo"', 8500);
  order.processPayment();
  order.updateShippingStatus('Enviado');
  
  console.log(order.getOrderSummary());  */