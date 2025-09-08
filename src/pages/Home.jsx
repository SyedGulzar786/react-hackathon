import React, { useEffect, useState } from 'react'
import Card from '../components/Card/Card';

const Home = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products');
                const data = await res.json();
                setProducts(data);
                console.log(data, "data");
                console.log(console.log(products, "products"));
            } catch (err) {
                console.log(err, "err");
            }
        }
        fetchData();
    }, [])
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <h1>Mens's Fashion</h1>
                    <Card products={products} />
                </div>
            </div>
        </>
    )
}


export default Home