import React from 'react';
import Slider from '../../Slider';
import Categories from '../Categories/Categories';
import Inventory from '../Inventory/Inventory';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Inventory></Inventory>
            <Categories></Categories>
            <Products></Products>
        </div>
    );
};

export default Home;