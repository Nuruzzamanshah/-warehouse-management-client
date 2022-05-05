import React from 'react';

const Product = ({product}) => {
    const {name, img, price} = product;
    return (
        <div>
            {/* <h2>this is Product</h2> */}
            <img src={img} alt=''/>
            <h2>Name: {name}</h2>
            <p>{price}</p>
        </div>
    );
};

export default Product;