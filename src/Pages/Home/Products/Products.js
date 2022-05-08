import React from 'react';
import './Products.css'
import Product from '../Product/Product';


import products1 from '../../../images/products/widget1.png';
import products2 from '../../../images/products/widget2.png';
import products3 from '../../../images/products/widget3.png';
import products4 from '../../../images/products/widget4.png';
import products5 from '../../../images/products/widget5.png';
import products6 from '../../../images/products/widget6.png';
import products7 from '../../../images/products/widget7.png';
import products8 from '../../../images/products/widget8.png';

const products = [
    {id: 1, name:'Propel Advanced SL 0', price:'$900.00', img:products1},
    {id: 2, name:'Defy Advanced SL', price:'$1,770.00', img:products2 },
    {id: 3, name:'FastRoad CoMax', price:'$900.00', img:products3},
    {id: 4, name:'Propel Advanced SL 0', price:'$900.00', img:products4},
    {id: 5, name:'Defy Advanced SL', price:'$1,770.00', img:products5},
    {id: 6, name:'FastRoad CoMax', price:'$900.00', img:products6},
    {id: 7, name:'Defy Advanced SL', price:'$1,770.00', img:products7},
    {id: 8, name:'Defy Advanced SL', price:'$1,770.00', img:products8},
]




const Products = () => {
    return (
        <div>
            <h2 className='products-title'>&mdash;Widget Products</h2>
            <div className='products-continer'>
                {
                    products.map(product => <Product
                    key={product.id}
                    product= {product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;