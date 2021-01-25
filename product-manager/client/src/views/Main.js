import React, { useEffect } from 'react' 
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList'
import { useState } from 'react';
import {Router} from '@reach/router'
import axios from 'axios';

const Main = () => {
    const [title, setTitle] = useState('Enter a title');
    const [price, setPrice] = useState('Enter a price');
    const [description, setDescription] = useState('Enter product description');
    const [products, setProducts] = useState([]);
    const [errors, setErrors] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/')
        .then(res => setProducts(res.data.products))
        .catch(err => console.log(err))
    }, [products])
    const handleSubmit = (e) => {
        setTitle('Enter another products title')
        setPrice('Enter another products price')
        setDescription('Enter another products description')
        e.preventDefault()
        axios.post('http://localhost:8000/api/products/new', {
        title,
        price, 
        description
        })
        .then(res => console.log(res))
        .catch(err => {
            console.log({err})
            let errorResponse = err.response.data.errors
            const  errorArr =[]
            console.log(errors);
            for (const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr)
        })
}
    return(
        <>
        <ProductForm handleSubmit={handleSubmit} title={title} setTitle={setTitle} price={price} 
        setPrice={setPrice} description={description} setDescription={setDescription} verb={'Add'} item= {'product'}/>
        {errors ? errors.map((error, idx) => (
            <p className='text-danger'key ={idx}>{error}</p>
        )) : null}
        <ProductList products={products} setProducts={setProducts} />
        </>
    )
}

export default Main;