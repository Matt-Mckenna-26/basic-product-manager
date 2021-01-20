import axios from 'axios';
import React, {useState} from 'react';

const ProductInput = ({products, setProducts}) => {
    const [title, setTitle] = useState('Enter Product Title');
    const [price, setPrice] = useState();
    const [description, setDescription] = useState('Enter brief description');

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/products/new', {
        title,
        price, 
        description
        })
        .then(res => console.log(res))
        .catch( err => console.log(err))
}
    return(
        <form>
            <h1 className='text-primary m-3'>Product Manager</h1>
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
            <button className= 'btn-success btn-md m-1' onClick = {handleSubmit}>Add product</button>
        </form>
    )
}

export default ProductInput;