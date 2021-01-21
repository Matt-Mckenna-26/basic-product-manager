import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Link} from '@reach/router'

const ProductDetail = (props) => {
    const [thisProduct, setThisProduct] =useState({})
    useEffect(
        () => {
            axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => {setThisProduct(res.data.product)
                console.log(thisProduct);})
            .catch(err => console.log(err))
        },
        [thisProduct.price, thisProduct.title, thisProduct.description])
    return(
        <div className='container row mx-auto my-1'>
            <h4>{thisProduct.title}</h4>
            <ul className='list-unstyled'>
                <li>Price: ${thisProduct.price}</li>
                <li>Description: {thisProduct.description}</li>
            </ul>
            <Link to={`/product/${thisProduct._id}/edit`}>Edit Product</Link>
            <Link to={'/'}>Home</Link>
        </div>
    )
}

export default ProductDetail