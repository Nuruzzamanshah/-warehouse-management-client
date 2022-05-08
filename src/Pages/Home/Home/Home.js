import React from 'react';
import Slider from '../../Slider';
import Categories from '../Categories/Categories';
import Inventory from '../Inventory/Inventory';
import NewsLetter from '../NewsLetter';
import Products from '../Products/Products';
import Questions from '../Questions/Questions';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Inventory></Inventory>
            <Categories></Categories>
            <Products></Products>
            <NewsLetter></NewsLetter>
            <Questions></Questions>
        </div>
    );
};

export default Home;