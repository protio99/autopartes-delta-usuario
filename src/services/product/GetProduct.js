import React, { useEffect, useState } from "react";
import { ProductService } from "../../service/productService";

const _productService = new ProductService()

export default function GetProduct(idProduct) {
  console.log(idProduct)
 const [product, setProduct] = useState()

useEffect(() =>{
  _productService.getProduct(idProduct).then((response) =>{
    console.log(response)
    setProduct(response)
  }).catch((error) =>{
    console.log("Algo salio mal al traer el producto", error)
  })
}, [])
console.log(product)

  return {
    id: product.id,
    name: product.name,
    description:product.description,
    brand: product.brand.name,
    category: product.category.name,
    price: product.price,
    imgUrl: product.images_products.url,
    altImg: product.id,
  };
}
