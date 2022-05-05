import React from 'react';
import './Products.css'

import products1 from '../../../images/products/widget1.png';
import products2 from '../../../images/products/widget2.jpg';
import products3 from '../../../images/products/widget3.jpg';
import products4 from '../../../images/products/widget4.jpg';
import products5 from '../../../images/products/widget5.jpg';
import products6 from '../../../images/products/widget6.jpg';
import products7 from '../../../images/products/widget7.jpg';
import products8 from '../../../images/products/widget8.jpg';
import Product from '../Product/Product';

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
            <h2 className='products-title'>WIDGET PRODUCTS</h2>
            {
                products.map(product => <Product
                key={product.id}
                product= {product}
                ></Product>)
            }
        </div>
    );
};

export default Products;