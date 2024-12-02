class Cart {
    private items: string[] = [];
    private totalPrice: number = 0;
  
    addItem(item: string, price: number): void {
      this.items.push(item);
      this.totalPrice += price;
    }
  
    getTotalPrice(): number {
      return this.totalPrice;
    }
  
    getItems(): string[] {
      return this.items;
    }
  }
  
  class Payment {
    processPayment(): string {
      return 'Pago';
    }
  }
  
  class Shipping {
    updateShippingStatus(status: string): string {
      return status;
    }
  }
  
  class Order {
    private cart: Cart;
    private payment: Payment;
    private shipping: Shipping;
  
    private paymentStatus: string = 'Pendente';
    private shippingStatus: string = 'Pendente';
  
    constructor(cart: Cart, payment: Payment, shipping: Shipping) {
      this.cart = cart;
      this.payment = payment;
      this.shipping = shipping;
    }
  
    processPayment(): void {
      this.paymentStatus = this.payment.processPayment();
    }
  
    updateShippingStatus(status: string): void {
      this.shippingStatus = this.shipping.updateShippingStatus(status);
    }
  
    getOrderSummary(): string {
      return `Items: ${this.cart.getItems().join(', ')}, Total: ${this.cart.getTotalPrice()}, Status: ${this.paymentStatus}, Envio: ${this.shippingStatus}`;
    }
  }
  
  const cart = new Cart();
  cart.addItem('Mega Drive', 5000);
  cart.addItem('Super Nintendo"', 8500);
  
  const payment = new Payment();
  const shipping = new Shipping();
  
  const order = new Order(cart, payment, shipping);
  order.processPayment();
  order.updateShippingStatus('Enviado');
  
  console.log(order.getOrderSummary());
  