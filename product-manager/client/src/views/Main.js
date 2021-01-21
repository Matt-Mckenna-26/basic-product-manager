import React, { useEffect } from 'react' 
import ProductInput from '../components/ProductInput';
import ProductList from '../components/ProductList'
import ProductSingle from '../components/ProductSingle'
import { useState } from 'react';
import {Router} from '@reach/router'
import axios from 'axios';

const Main = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/')
        .then(res => setProducts(res.data.products))
        .catch(err => console.log(err))
    }, [])
    return(
        <>
        <ProductInput/>
        <Router>
            <ProductList products={products} path='/'/>
            <ProductSingle path='/products/:id' />
        </Router>
        </>
    )
}

export default Main;