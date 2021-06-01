const fs = require("fs");
const path = require("path");

const p = path.join(path.dirname(require.main.filename), "data", "cart.json");

module.exports = class Cart {
  static addProduct(id, productPrice) {
    // fetch the previous cart
    fs.readFile(p, (err, content) => {
      // init cart
      let cart = { products: [], totalPrice: 0 };

      if (!err) {
        cart = JSON.parse(content);
      }

      // Analyze the cart => find existing product
      const existingProductIndex = cart.products.findIndex(
        (item) => item.id === id
      );
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;

      // Add new product and increase quantity
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;

        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }

      cart.totalPrice = cart.totalPrice + +productPrice;
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }

  static deleteProduct(id, productPrice) {
    fs.readFile(p, (err, content) => {
      if (err) {
        return;
      }

      const updatedCart = { ...JSON.parse(content) };
      const product = updatedCart.products.find((item) => item.id === id);
      const productQty = product.qty;
      updatedCart.products = updatedCart.products.filter(
        (item) => item.id !== id
      );
      updatedCart.totalPrice =
        updatedCart.totalPrice - productPrice * productQty;

      fs.writeFile(p, JSON.stringify(updatedCart), (err) => {
        console.log(err);
      });
    });
  }

  static getCart(callback) {
    fs.readFile(p, (err, content) => {
      const cart = JSON.parse(content);
      if (err) {
        callback(null);
      } else {
        callback(cart);
      }
    });
  }
};
