const factory = require('../src/managerProduct').factory;

class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  updatePrice() {
    this.products.forEach(product => {
      let _product = factory.newProduct(product);

      _product.updatePrice();

    });
    return this.products;
  }
}

module.exports = {
  Product,
  CarInsurance
}
