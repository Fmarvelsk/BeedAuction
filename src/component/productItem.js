import React,{useEffect, useState} from 'react'
import Product from './Product'
import axios from 'axios'
import Svg from '../806.gif'
const ProductItem = () => {
    const [product, setProduct] = useState('')
    const [loading, setloading] = useState(true)
    useEffect( () => {
        const fetchProduct = async() => {
            const fetch = await axios({
                method: 'GET',
                headers: { 'Content-Type' : 'application/json'},
                url: 'http://localhost:7777/getProduct',

            }).then ( data => {
                    setProduct(data)
                    
            }).catch(err => err)
        }
        fetchProduct()
        return () => {
            setloading(false)
        }
    },[])
    return(
        <div className="row">
            {product ? product && product.data.map( (prod, i)=>
            (
<Product item={prod} key={i}/>

            ))
        
        : (<><img src={Svg} /> <p>Loading Product....</p></>)
        }
        </div>
    )
}
export default ProductItem