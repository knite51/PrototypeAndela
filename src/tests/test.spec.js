import expect from 'expect';
import { arr, arrString } from '../../filter';
import { Shop, ShoppingCart } from '../../index';

describe('Filter', () => {
  it("should return a string 'Ayo'", () => {
    const result = arr();
    expect(result).toBe('Ayo');
  });

  it('Checks that input parameter is an array', () => {
    const result = arrString('thomas');
    const result2 = arrString([1, 2, 3]);
    expect(result).toBe('Argument is not an Array');
    expect(Array.isArray(result2)).toBe(true);
    expect(result2).toEqual([]);
    expect(result2.length).toBe(0);
  });

  it('filters a given array appropriately', () => {
    const dataArray = ['Ayo', 'Ore', true, {
      title: 'Home Alone',
    }, undefined, 15, null];
    expect(arrString(dataArray)).toEqual(['Ayo', 'Ore']);
    expect(typeof arrString(dataArray)).toBe('object');
    expect(Array.isArray(arrString(dataArray))).toBe(true);
  });
});

describe('The methods in the ShoppingCart class', () => {
  it('populates the items in the cart', () => {
    const myShoppingCart = new ShoppingCart();
    myShoppingCart.addItem('rice', 5, 10);
    expect(myShoppingCart.items).toEqual({ rice: 5 });
    expect(typeof myShoppingCart.items).toBe('object');
  });

  it('increases total number of items in the cart by the total amount added ', () => {
    const myShoppingCart = new ShoppingCart();
    myShoppingCart.addItem('rice', 5, 10);
    expect(myShoppingCart.total).toEqual(50);
  });

  it('decreases the quantity of items in the cart', () => {
    const myShoppingCart = new ShoppingCart();
    const shopItems = myShoppingCart.items;
    expect(shopItems).toMatchObject({});
    expect(shopItems).toBeTruthy();
    expect(myShoppingCart).toBeInstanceOf(ShoppingCart);
    myShoppingCart.addItem('rice', 5, 10);
    myShoppingCart.removeItem('rice', 2, 5);
    const result = myShoppingCart.removeItem('ric', 2, 10);
    expect(result).toBe('ric does not exist');
    expect(shopItems).toEqual({ rice: 3 });
    expect(shopItems).not.toEqual({ rice: 4 });
    expect(shopItems).not.toContain('beans');
  });

  it('deducts amount from total ', () => {
    const myShoppingCart = new ShoppingCart();
    myShoppingCart.addItem('rice', 4, 15);
    myShoppingCart.addItem('mango', 5, 20);
    myShoppingCart.removeItem('rice', 4, 4);
    expect(myShoppingCart.total).toEqual(144);
  });
});

describe('The shop class', () => {
  it('inherits from the ShoppingCart class', () => {
    const myShop = new Shop();
    expect(myShop).toBeInstanceOf(Shop);
    expect(myShop).toHaveProperty('quantity', 100);
    expect(myShop.addItem).toBeDefined();
    expect(myShop.checkout).toBeDefined();
  });

  it('has an independent removeItem method', () => {
    const myShop = new Shop();
    myShop.removeItem();
    myShop.removeItem();
    myShop.removeItem();
    myShop.removeItem();
    expect(myShop.quantity).toEqual(96);
  });
});

describe('The checkout method of the Shop Class', () => {
  it('checks available balance', () => {
    const myShop = new Shop();
    const availableBalance = myShop.checkout(10);
    expect(availableBalance).toBe(10);
    expect(availableBalance).not.toBeLessThan(0);
    const addtionalExpenses = myShop.checkout(-20);
    expect(addtionalExpenses).toBe('Cash paid not enough');
  });
});

describe('Encapsulation', () => {
  it('exhibits encapsulation', () => {
    const myShop = new Shop();
    myShop.checkout(10); // The checkout method has a 'balance' variable
    // The balance variable does not exist in the Shop class
    expect(myShop.balance).not.toBeDefined();
  });
});
