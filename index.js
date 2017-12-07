class ShoppingCart {
  constructor() {
    this.total = 0;
    this.items = {};
  }
  addItem(itemName, quantity, price) {
    this.total += price * quantity;
    if (this.items[itemName] !== undefined) {
      this.items[itemName] += quantity;
    } else {
      this.items[itemName] = quantity;
    }
  }
  removeItem(itemName, quantity, price) {
    this.total -= price * quantity;
    if (this.items.itemName) {
      this.items[itemName] -= quantity;
    } else {
      delete this.items[itemName];
    }
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

class Shop extends ShoppingCart {
  constructor() {
    super();
    this.quantity = 100;
  }
  removeItem() {
    this.quantity -= 1;
  }
}

export default Shop;
