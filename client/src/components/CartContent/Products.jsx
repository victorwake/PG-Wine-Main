import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import "./Products.css";
const Products = () => {
  const { data, cart, setCart } = useContext(dataContext);

  const buyProducts = (product) => {
    setCart([...cart, product]);
    console.log(product)
  };
  

  return data.map((product) => {
    return (
      <div className='card' key={product.id}>
        <img className="imagen" src={product.image} alt='img-product-card' />
        <h3 className="bodega">{product.winery}</h3>
        <h3 className="nombre">{product.name}</h3>
        <h4 className="precio">{product.price}$</h4>
        <button onClick={() => buyProducts(product)}>buy</button>
      </div>
    );
  });
};

export default Products;