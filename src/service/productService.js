import axios from "axios";
import config from "../config/config";

const baseProductURL = config.baseURL + "/products";
const baseImageProductURL = config.baseURL + "/imagesProducts"
export class ProductService {
    
    getProductsSmall() {
        return axios.get("assets/demo/data/products-small.json").then((res) => res.data.data);
    }
    getProducts() {
        return axios.get(baseProductURL).then((res) => res.data);
    }
    getProductsStore() {
        return axios.get(`${baseProductURL}/products-store`).then((res) => res.data);
    }
    getVehiclesOfProductById(idProduct) {
        return axios.get(`${baseProductURL}/find-vehicles-of-a-product/${idProduct}`).then((res) => res.data);
    }

    getImageOfProduct(idProduct){
        return axios.get(`${baseImageProductURL}/find-by-idProduct/${idProduct}`).then((res) => res.data);
    }
    getProduct(idProduct){
        return axios.get(`${baseProductURL}/${idProduct}`).then((res) => 
        res.data);
    }
    getImages(){
        return axios.get(`${baseImageProductURL}`).then((res) => res.data);

    }


    
}

