import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import "./Products.css";

const Products = () => {
  const { data, cart, setCart } = useState([]);

  const buyProducts = (product,quantity) => {
    const item = { product, quantity };
    setCart([...cart, product]);
    
    console.log(product)
  };

  return data.map((product) => {
    let quantity = 1;
    return (
      <div className='card' key={product.id}>
        <img src={product.image} alt='img-product-card' />
        <h3 className="nombre">{product.name}</h3>
        <h4 className="precio">{product.price}$</h4>
        <h4 className="bodega">{product.winery} </h4>
        <input type='number' min='1' max='10' value={quantity} onChange={(e) => (quantity = e.target.value)} />
        <button onClick={() => buyProducts(product)}>buy</button>
      </div>
    );
  });
};

export default Products;