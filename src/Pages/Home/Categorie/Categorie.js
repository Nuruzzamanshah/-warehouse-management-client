import React from 'react';
import './Categorie.css'

const Categorie = ({categorie}) => {
    const {name, img} = categorie;
    return (
        <div className='categorie-continer card-title'>
            {/* <h2>This is Categorie</h2> */}
            <img src={img} alt=''/>
            <h2>Name: {name}</h2>
        </div>
    );
};

export default Categorie;