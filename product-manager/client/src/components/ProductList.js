import React from 'react'
import {Link} from '@reach/router'

const ProductList = ({products}) => {
    return(
        <div className='container row mx-auto my-1'>
            {products.map((product, idx) =>  (
                    <Link to={`/products/${product._id}`} product={product}>{product.title}</Link>
            ) 
            )}
        </div>
    )
}

export default ProductList