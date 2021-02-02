import React,{useEffect, useState} from 'react'
import Product from './Product'
import axios from 'axios'
import Svg from '../806.gif'
const ProductItem = () => {
    const [product, setProduct] = useState('')
     //eslint-disable-next-line 
    const [loading, setloading] = useState(true)
    useEffect( () => {
        const fetchProduct = async() => {
     //eslint-disable-next-line 
            const fetch = await axios({
                method: 'GET',
                headers: { 'Content-Type' : 'application/json'},
                url: 'https://beed-auction.herokuapp.com/getProduct',

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
        
        : (<><img src={Svg} alt="svg"/> <p>Loading Product....</p></>)
        }
        </div>
    )
}
export default ProductItem