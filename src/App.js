import Product from "./components/Product"
import './styles/App.css';
import './styles/Navbar.css';

import data from './productData'
import Navbar from './components/Navbar'

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
      <Navbar />
      <div className="products">
        {product}
      </div>
      
      
   
      
    </div>
  );
}

