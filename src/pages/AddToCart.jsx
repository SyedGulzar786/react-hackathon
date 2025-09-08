import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Card from '../components/Card/Card';

const AddToCart = () => {

  const location = useLocation();
  console.log(location?.state?.product,"location")

  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
   useEffect(() => {
    if (location?.state?.product) {
      setProducts([location?.state?.product]);
    }
  }, [location.state]);
   useEffect(() => {
    if (location?.state?.itemCount) {
      setCartCount([location?.state?.itemCount]);
    }
  }, [location.state]);
  console.log(products,"working")
  return (
<>
    <div>AddToCart</div>
 {
  products.length > 0 ? <Card products={products} cartCount={cartCount} setCartCount={setCartCount} type={"cart"} /> : <p>No products in cart</p>
 }
</>
  )
}

export default AddToCart