abstract class Inventory {
    protected items: Record<string, number> = {};
  
    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
    abstract getInventory(): Record<string, number>;
  }
  
  class WarehouseInventory extends Inventory {
    addItem(item: string, quantity: number): void {
      this.items[item] = (this.items[item] || 0) + quantity;
    }
  
    removeItem(item: string): void {
      delete this.items[item];
    }
  
    getInventory(): Record<string, number> {
      return this.items;
    }
  }
  
  class StoreInventory extends Inventory {
    private readonly limit = 10;
  
    addItem(item: string, quantity: number): void {
      const current = this.items[item] || 0;
      this.items[item] = Math.min(this.limit, current + quantity);
    }
  
    removeItem(item: string): void {
      delete this.items[item];
    }
  
    getInventory(): Record<string, number> {
      return this.items;
    }
  }
  

  const warehouse = new WarehouseInventory();
  warehouse.addItem("Pasta Térmica", 50);
  warehouse.addItem("Gabinete", 20);
  
  const store = new StoreInventory();
  store.addItem("Pasta Térmica", 5);
  store.addItem("Gabinete", 8); 
  
  console.log("Inventário do Armazém:", warehouse.getInventory());
  console.log("Inventário da Loja:", store.getInventory());
  