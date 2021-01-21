import React, { useEffect } from 'react' 
import ProductInput from '../components/ProductInput';
import ProductList from '../components/ProductList'
import { useState } from 'react';
import {Router} from '@reach/router'
import axios from 'axios';

const Main = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/')
        .then(res => setProducts(res.data.products))
        .catch(err => console.log(err))
    }, [products])
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }
    return(
        <>
        <ProductInput/>
        <ProductList products={products} removeFromDom={removeFromDom}/>
        </>
    )
}

export default Main;