import React from 'react'

const ProductList = ({products}) => {
    return(
        <div className='container row mx-auto my-1'>
            {products.map((product, idx) =>  (
                <div className='mt-1 d-inline border border-black ml-auto mr-auto col-xs-10 col-sm-9 col-md-6 col-lg-4'>
                    <h6 key ={idx}>{product.title}</h6>
                    <ul className='list-unstyled'>
                        <li>Price: ${product.price}</li>
                        <li>Description: {product.description} </li>
                    </ul>
                </div>
            ), 
            )}
        </div>
    )
}

export default ProductList