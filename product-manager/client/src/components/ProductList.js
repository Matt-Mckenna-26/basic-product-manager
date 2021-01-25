import React from 'react'
import {Link, navigate} from '@reach/router'
import axios from 'axios'
import DeleteButton from './DeleteButton';

const ProductList = ({products, setProducts}) => {
    return(
        <div className='container row mx-auto my-1'>
            {products.map((product, idx) =>  (
                <div key={idx}>
                    <h6>{product.title}</h6>
                    <button onClick={(e) => {navigate(`product/${product._id}`)}}>View {product.title} Details</button>
                    <DeleteButton record={product} records={products} setRecords={setProducts}/>
                </div>
            ) 
            )}
        </div>
    )
}

export default ProductList