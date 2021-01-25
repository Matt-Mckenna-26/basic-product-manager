import React from 'react'
import {Link, navigate} from '@reach/router'
import axios from 'axios'
import DeleteButton from './DeleteButton';

const ProductList = ({products, setProducts}) => {
    return(
        <div className='container row mx-auto my-1'>
            {products.map((product, idx) =>  (
                <>
                {/* key={idx} to={`product/${product._id}`} */}
                    <h6  key={idx}>{product.title}</h6>
                    <button onClick={(e) => {navigate(`product/${product._id}`)}}>View {product.title} Details</button>
                    <DeleteButton record={product} records={products} setRecords={setProducts}/>
                </>
            ) 
            )}
        </div>
    )
}

export default ProductList