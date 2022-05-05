import React, { useEffect, useState } from 'react';
import Inventor from '../Inventor/Inventor';

const Inventory = () => {
    const [inventory, setInventory] = useState([]);

    useEffect( ()=>{
        fetch('inventory.json')
        .then(res => res.json())
        .then(data => setInventory(data));
    },[])
    return (
        <div>
            <h2>Inventory:{inventory.length}</h2>
            {
               inventory.map(inventor => <Inventor
                key={inventor.id}
                inventor={inventor}
               >

               </Inventor>)
            }
        </div>
    );
};

export default Inventory;