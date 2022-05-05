import React from 'react';
import Categories from '../Categories/Categories';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    return (
        <div>
            <Inventory></Inventory>
            <Categories></Categories>
        </div>
    );
};

export default Home;