import Product from "./components/Product"
import './App.css';
import data from './productData'

export default function App() {
  let product = data.map( item =>{
    return (
      <Product 
        key = {item.id}
        item = {item}

      />
    )
  })
  return (
    <div className="App">
      <div className="products">
        {product}
      </div>
      
      
   
      
    </div>
  );
}

