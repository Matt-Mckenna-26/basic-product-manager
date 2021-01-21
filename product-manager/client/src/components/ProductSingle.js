import axios from 'axios'
import React, {useEffect, useState} from 'react'

const ProductSingle = (props) => {
    const [thisProduct, setThisProduct] =useState({})
    useEffect(
        () => {
            axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => {setThisProduct(res.data.product)
                console.log(thisProduct);})
            .catch(err => console.log(err))
        },
        [])
    return(
        <div className='container row mx-auto my-1'>
            <h4>{thisProduct.title}</h4>
            <ul>
                <li>${thisProduct.price}</li>
                <li>{thisProduct.description}</li>
            </ul>
        </div>
    )
}

export default ProductSingle