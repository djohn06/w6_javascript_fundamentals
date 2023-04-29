class ShoppingBasket {
  constructor() {
    this.basket = [];
  }

  addItem(item) {
    this.basket.push(item);
  }

  getTotalPrice() {
    return this.basket.reduce((total, item) => total + item.getPrice(), 0);
  }
}

module.exports = ShoppingBasket;

// const ShoppingBasket = require('./shopping_basket');
// const basket = new ShoppingBasket();
