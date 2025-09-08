import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Card from '../components/Card/Card';

const AddToCart = () => {

  const location = useLocation();
  console.log(location.state.product,"location")

  const [products, setProducts] = useState([]);
   useEffect(() => {
    if (location.state?.product) {
      setProducts([location.state.product]);
    }
  }, [location.state]);
  console.log(products,"working")
  return (
<>
    <div>AddToCart</div>
<Card products={products} />
</>
  )
}

export default AddToCart