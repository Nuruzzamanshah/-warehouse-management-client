import React from 'react';
import './Inventor.css'

const Inventor = ({inventor}) => {
    const {name, img, description, price} = inventor;
    return (
        <div className='inventor-container'>
            <img src={img} alt=''/>
            <h2>Name: {name}</h2>
            <p>Price: {price}</p>
            <p>{description}</p>
            <button>Shop now:{name}</button>
            
        </div>
    );
};

export default Inventor;