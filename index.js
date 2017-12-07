export class ShoppingCart {
  constructor() {
    this.total = 0;
    this.items = {};
  }
  addItem(itemName, quantity, price) {
    this.total += price * quantity;
    if (this.items.itemName) {
      this.items.itemName += quantity;
    }
    this.items[itemName] = quantity;
  }
  removeItem(itemName, quantity, price) {
    this.total -= price * quantity;
    if (this.items[itemName]) {
      this.items[itemName] -= quantity;
    }
    return `${itemName} does not exist`;
  }
  checkout(cashPaid) {
    let balance = cashPaid - this.total;
    if (balance >= 0) {
      return balance;
    }
    balance = 'Cash paid not enough';
    return balance;
  }
}

export class Shop extends ShoppingCart {
  constructor() {
    super();
    this.quantity = 100;
  }
  removeItem() {
    this.quantity -= 1;
  }
}

