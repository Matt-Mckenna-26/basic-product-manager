import React, { useEffect } from 'react' 
import ProductInput from '../components/ProductInput';
import ProductList from '../components/ProductList'
import { useState } from 'react';
import axios from 'axios';

const Main = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/')
        .then(res => {setProducts(res.data.products)
        console.log(products)})
        .catch(err => console.log(err))
    }, [])
    return(
        <>
            <ProductInput />
            <ProductList products = {products} /> 
        </>
    )
}

export default Main;