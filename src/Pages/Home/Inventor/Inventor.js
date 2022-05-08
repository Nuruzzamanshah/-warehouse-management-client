import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventor.css'

const Inventor = ({inventor}) => {
    const {_id,name, img, description, price, quantity, supplier} = inventor;
    const navigate = useNavigate();
    const navigateToInventoryDetail = id =>{
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='inventor-container'>
            <img src={img} alt=''/>
            <div className='inventor-title'>
                <p>Name: {name}</p>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <p>Supplier Name: {supplier}</p>
                <p>{description}</p>
            </div>
            <button className='btn' onClick={ () => navigateToInventoryDetail(_id)}>Update</button>
            
        </div>
    );
};

export default Inventor;