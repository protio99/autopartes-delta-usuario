import { AuthService } from "./authService";

const _authService = new AuthService()
export class Cart {
    counter = 0
    cartKey = "cart"
    token = localStorage.getItem('tokenUser')

  
    setProductToCartByID(id, amount, price) {
    const product = this.getProductByID(id);
    product.amount = amount;
    product.price = price;
    this.saveProduct(product);
  }
  setProductToCartByIdDB(id, amount, price) {
    const product = this.getProductByID(id);
    product.amount = amount;
    product.price = price;
    this.saveProductDB(product);
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
    if (this.token && this.counter === 0) {
      _authService.getUserInfo(this.token).then((user) =>{
        _authService.getQuotations(user.data.id).then((quotations) =>{
          quotations.data.forEach((quotation) =>{
            this.setProductToCartByIdDB(quotation.idProduct, quotation.amount, quotation.products.price)
            this.counter = 1   
          })
        })
      })
    }
    const cart =JSON.parse(localStorage.getItem(this.cartKey));
    if (!cart && this.token) {
        this.counter = 0     
        return {}
    }
    return cart
  }

  saveProduct(product) {
    let cart = this.getState()
    cart[product.id] = product
    this.saveState(cart)
  }
  saveProductDB(product) {
    let cart = this.getState()
    cart[product.id] = product
    this.saveStateDB(cart)
  }
  saveProductUser(product) {
    let cart = this.getState()
    cart[product.id] = product
    this.saveState(cart)
  }

  saveState(cart){
    
    console.log(this.token)
    if (this.token) {
      _authService.getUserInfo(this.token).then((userInfo) =>{
        
        _authService.updateQuotation(userInfo.data.id, cart).then((response) =>{
          console.log("response desde el updateQuotation", response)
        }).catch((error) =>{
          console.log("Ocurrio un error intentando hacer la actulizacion del carrito desde el back:(", error)
        })
      }).catch((error) =>{
        console.log("Ocurrio un error intentando obtener la data del usuario :(", error)
      })     
    }
    localStorage.setItem(this.cartKey, JSON.stringify(cart))

  }

  saveStateDB(cart){
    
    localStorage.setItem(this.cartKey, JSON.stringify(cart))

  }
  deleteProduct(id){
    let cart = this.getState()
    delete cart[id]
    this.saveState(cart)
  }

}
