import React, { useEffect } from 'react' 
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList'
import { useState } from 'react';
import {Router} from '@reach/router'
import axios from 'axios';

const Main = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(Number);
    const [description, setDescription] = useState('');
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/')
        .then(res => setProducts(res.data.products))
        .catch(err => console.log(err))
    }, [products])
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/products/new', {
        title,
        price, 
        description
        })
        .then(res => console.log(res))
        .catch( err => {console.log(err)})
}
    return(
        <>
        <ProductForm handleSubmit={handleSubmit} title={title} setTitle={setTitle} price={price} 
        setPrice={setPrice} description={description} setDescription={setDescription} verb={'Add'} item= {'product'}/>
        <ProductList products={products} setProducts={setProducts} />
        </>
    )
}

export default Main;