import getId from "../utils/getId";
import CartItem from "./CartItem";

class ShoppingCart {
  static #allCarts = [];
  #cartItems = [];

  constructor() {
    this.id = getId();
    ShoppingCart.#allCarts.push(this); 
  };

  createItem(name, price) {
    const item = new CartItem(name, price);
    this.#cartItems.push(item);
    return item;
  };

  getItems() {
    return [...this.#cartItems];
  };

  getTotal() {
    console.log(this.#cartItems)
    return this.#cartItems.reduce((acc, {price}) => acc + price, 0);
  };

  removeItem(id) {
    const indexToDelete = this.#cartItems.findIndex(obj => obj.id === id);
    if (id !== -1) {
      this.#cartItems.splice(indexToDelete, 1);
    };
  };
  static listAll() {
    return [...ShoppingCart.#allCarts]
  }
  static findBy(id) {
    return (ShoppingCart.#allCarts.filter(obj => obj.id === id))[0];
    // ShoppingCart.#allCarts.find(obj => obj.id === id)
  }
}
export default ShoppingCart;