import React from 'react';
import Categories from '../Categories/Categories';
import Inventory from '../Inventory/Inventory';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div>
            <Inventory></Inventory>
            <Categories></Categories>
            <Products></Products>
        </div>
    );
};

export default Home;