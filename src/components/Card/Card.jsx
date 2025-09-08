import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ products }) => {

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
                                <button onClick={()=>navigate('/addToCart',{state: {product:item}})} className=''>Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Card