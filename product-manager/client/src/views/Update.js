import React, { useEffect, useState } from 'react' 
import axios from 'axios';
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

    const updateProduct = e => {
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
            <h1>Update, {thisProduct.title} </h1>
            <form onSubmit={updateProduct}>
            <p>
                    <label>Update Title, currently {thisProduct.title}</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => {setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Update Price, currently ${thisProduct.price}</label><br />
                    <input type="text" 
                    name="price" 
                    value={price} 
                    onChange={(e) => {setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Update Description, Currently "{thisProduct.description}"</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
            <Link to={`/product/${thisProduct._id}`}>Back</Link>
        </div>
    )
}
export default Update