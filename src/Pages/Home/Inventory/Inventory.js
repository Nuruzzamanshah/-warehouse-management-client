import React, { useEffect, useState } from 'react';
import Inventor from '../Inventor/Inventor';
import './Inventory.css'

const Inventory = () => {
    const [inventory, setInventory] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/inventory')
        .then(res => res.json())
        .then(data => setInventory(data));
    },[])
    return (
        <div>
            <h2 className='inventory-title'><span>
            &mdash; Our Inventory Item
            </span></h2>
            <div className='inventory-container'>
                {
                inventory.map(inventor => <Inventor
                    key={inventor._id}
                    inventor={inventor}
                >

                </Inventor>)
                }
            </div>
        </div>
    );
};

export default Inventory;