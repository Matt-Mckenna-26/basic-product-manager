import { navigate } from '@reach/router';
import axios from 'axios';
import React, {useState} from 'react';

const ProductForm = ({products, setProducts, title, setTitle, description, setDescription, price, setPrice, handleSubmit, verb, item}) => {

    return(
        <form>
            <h1 className='text-primary m-3'>Product Manager</h1>
            <h2>{verb} {item}</h2>
            <p>
                <label className = 'text-primary m-1'>Product Title:</label>
                <input className= 'form-control d-inline col-3' type='text' onChange = {(e) => setTitle(e.target.value)}/>
            </p>
            <p>
                <label className = 'text-primary m-1' >Price:</label>
                <input className= 'form-control d-inline col-3' type='text' onChange = {(e) => setPrice(e.target.value)}/>
            </p>
            <p>
                <label className = 'text-primary m-1' >Description:</label>
                <input className= 'form-control d-inline col-3' type='text' onChange = {(e) => setDescription(e.target.value)}/>
            </p>
            <button className= 'btn-success btn-md m-1' onClick = {handleSubmit}>{verb} {item}</button>
        </form>
    )
}

export default ProductForm;