import React, { useEffect, useState } from 'react';
import Inventor from '../Inventor/Inventor';
import './Inventory.css'

const Inventory = () => {
    const [inventory, setInventory] = useState([]);

    useEffect( ()=>{
        fetch('inventory.json')
        .then(res => res.json())
        .then(data => setInventory(data));
    },[])
    return (
        <div>
            <h2 className='inventory-title'>Our <span className='title'>Inventory</span> Item</h2>
            <div className='inventory-container'>
                {
                inventory.map(inventor => <Inventor
                    key={inventor.id}
                    inventor={inventor}
                >

                </Inventor>)
                }
            </div>
        </div>
    );
};

export default Inventory;