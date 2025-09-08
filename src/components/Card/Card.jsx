import React, { use, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ products, cartCount, setCartCount, type}) => {
const [itemCount,setCount] = useState(0);
const itemIncrement = () =>{
    type == 'cart' ? setCartCount(prev => prev + 1) : setCount(prev => prev + 1);
}
const itemDecrement = () =>{
        type == 'cart' ? setCartCount(prev => prev > 0 ? prev - 1 : 0) : setCount(prev => prev > 0 ? prev - 1 : 0 );
}
// if(type === 'cart'){
// setCount(products[0]?.itemCount || 0)
// }
// console.log(type,"type")
    const navigate = useNavigate();
    return (
        <>
            {
                products.map((item, index) => {
                    return (
                        <div key={index} className='col-lg-4 col-md-6 col-sm-12'>
                            <div className='border p-4 mt-2'>
                                <h2>{item.title}</h2>
                                <img src={item.image} alt={item.title} width="100px" height="100px" />
                                <h3>{item.price}</h3>
                                <div className='d-flex justify-content-between'>
                                    <h4>{item.category}</h4>
                                    <h4>{item.rating.rate}</h4>
                                    <h4>{item.rating.count}</h4>
                                </div>
                                <p>{item.description}</p>

                                <div className='d-flex justify-content-between align-items-center'>
                                    <button onClick={() => navigate('/addToCart', { state: { product: item, itemCount } })} className=''>Add To Cart</button>
<div className='d-flex justify-content-around align-items-center'>
    <button onClick={()=>{itemIncrement()}}>+</button>
  {type == "cart" ? <div className="mx-2" >{cartCount}</div> : <div className="mx-2" >{itemCount}</div>}  
    <button onClick={()=>{itemDecrement()}}>-</button>
</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Card