import React from 'react';
import './Categories.css'
import categorie1 from '../../../images/categories/categories2.jpg';
import categorie2 from '../../../images/categories/categories3.jpg';
import categorie3 from '../../../images/categories/categories4.jpg';
import categorie4 from '../../../images/categories/categories5.jpg';
import categorie5 from '../../../images/categories/categories6.jpg';
import categorie6 from '../../../images/categories/categories7.jpg';
import Categorie from '../Categorie/Categorie';


const categories = [
    {id: 1, name: 'Alan Bike', img:categorie1 },
    {id: 2, name: 'Breezer', img:categorie2 },
    {id: 3, name: 'British Eagle', img:categorie3 },
    {id: 4, name: 'Brompton', img:categorie4 },
    {id: 5, name: 'Cielo', img:categorie5 },
    {id: 6, name: 'Colnago', img:categorie6 },
]
const Categories = () => {
    return (
        <div>
            <h2 className='categories-title'>&mdash;Categories</h2>
            <div className='categories-container'>
                {
                    categories.map(categorie => <Categorie
                        key={categorie.id}
                        categorie= {categorie}
                    >
                    </Categorie>)
                }
            </div>
        </div>
    );
};

export default Categories;