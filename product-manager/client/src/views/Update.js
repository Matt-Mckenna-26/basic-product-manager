import React, { useEffect, useState } from 'react' 
import axios from 'axios';
import ProductForm from '../components/ProductForm'
import { navigate, Link } from '@reach/router';

const Update = (props) => {
    const [thisProduct, setThisProduct] = useState({});
    const [price, setPrice] = useState('Update the price here');
    const [description, setDescription] = useState('Update the description here');
    const [title, setTitle] = useState('Update the title here');
    const {id} = props ;
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res =>{
            setThisProduct(res.data.product);
            console.log(res.data);
            setPrice(res.data.price);
            setDescription(res.data.setDescription);
        } )
        .catch(err => console.log(err))
    }, [])
    const handleSubmit = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/update/${id}`,{
            title,
            price,
            description
        })
        .then(res=> console.log(res))
        navigate(`/product/${id}`);
    }
    return(
        <div>
            <ProductForm handleSubmit={handleSubmit} title={title} setTitle={setTitle} price={price} 
        setPrice={setPrice} description={description} setDescription={setDescription}/>
            <Link to={`/product/${thisProduct._id}`}>Back</Link>
        </div>
    )
}
export default Update