import React from 'react';
import './Product.css'

const Product = ({product}) => {
    const {name, img, price} = product;
    return (
        <div className='product-continer'>
            <img src={img} alt=''/>
            <h2>Name: {name}</h2>
            <p>{price}</p>
        </div>
    );
};

export default Product;