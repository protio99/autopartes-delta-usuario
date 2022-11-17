
export class Cart {

    cartKey = "cart"
  
    setProductToCartByID(id, amount, price) {
    const product = this.getProductByID(id);
    product.amount = amount;
    product.price = price;
    this.saveProduct(product);
  }

  getProductByID(id) {
    const cart = this.getState()
    const product = cart[id];
    if (!product) {
      return { id: id, amount: 0, price: 0};
    }
    return product
  }

  getState(){ 
    const cart =JSON.parse(localStorage.getItem(this.cartKey));
    if (!cart) {
        return {}     
    }
    return cart
  }

  saveProduct(product) {
    let cart = this.getState()
    cart[product.id] = product
    this.saveState(cart)
  }

  saveState(cart){
    localStorage.setItem(this.cartKey, JSON.stringify(cart))
  }

  deleteProduct(id){
    let cart = this.getState()
    delete cart[id]
    this.saveState(cart)
  }

}
