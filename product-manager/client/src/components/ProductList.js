import React from 'react'
import {Link, navigate} from '@reach/router'
import axios from 'axios'

const ProductList = ({products, removeFromDom}) => {
    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/delete/${productId}`)
        .then(res => {
            removeFromDom(productId)
        })
    }
    return(
        <div className='container row mx-auto my-1'>
            {products.map((product, idx) =>  (
                <>
                {/* key={idx} to={`product/${product._id}`} */}
                    <h6  key={idx}>{product.title}</h6>
                    <button onClick={(e) => {navigate(`product/${product._id}`)}}>View Product Details</button>
                    <button  onClick={(e) => {deleteProduct(product._id)}}>Delete Product</button>
                </>
            ) 
            )}
        </div>
    )
}

export default ProductList