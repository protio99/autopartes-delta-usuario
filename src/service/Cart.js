import { AuthService } from "./authService";
import { QuotationsService } from "./quotationsService";

const _authService = new AuthService();
const _quotationsService = new QuotationsService();

export class Cart {
  cartKey = "cart";
  token = localStorage.getItem("tokenUser");

  setProductToCartByID(id, amount, price) {
    const product = this.getProductByID(id);
    product.amount = amount;
    product.price = price;
    this.saveProduct(product);
  }

  getProductByID(id) {
    const cart = this.getState();
    const product = cart[id];
    if (!product) {
      return { id: id, amount: 0, price: 0 };
    }
    return product;
  }
  getState() {
    const cart = JSON.parse(localStorage.getItem(this.cartKey));
    if (!cart) {
      return {};
    }
    return cart;
  }
  saveProduct(product) {
    let cart = this.getState();
    cart[product.id] = product;
    this.saveState(cart);
  }

  saveProductUser(product) {
    let cart = this.getState();
    cart[product.id] = product;
    this.saveState(cart);
  }

  saveState(cart) {
    if (this.token) {
      _authService
        .getUserInfo(this.token)
        .then((userInfo) => {
          _quotationsService.updateQuotation(userInfo.data.id, cart);
        })
        .catch((error) => {
          console.log(
            "Ocurrio un error intentando obtener la data del usuario :(",
            error
          );
        });
    }
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  saveStateDB(cart) {
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }
  deleteProduct(id) {
    let cart = this.getState();
    delete cart[id];
    this.saveState(cart);
  }
}
