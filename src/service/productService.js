import axios from "axios";
import config from "../config/config";

const baseProductURL = config.baseURL + "/products";
const baseImageProductURL = config.baseURL + "/imagesProducts"
const baseBrandsURL = config.baseURL + "/brands"
const baseCategoryURL = config.baseURL +'/categories'
const baseVehicleURL = config.baseURL +'/vehicles'
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

    getBrands(){
        return axios.get(`${baseBrandsURL}`).then((res) => res.data);
    }

    getCategories() {
        return axios.get(baseCategoryURL).then(res => res.data);
    }
    getVehicles() {
        return axios.get(baseVehicleURL).then(res => res.data);
    }


    
}

