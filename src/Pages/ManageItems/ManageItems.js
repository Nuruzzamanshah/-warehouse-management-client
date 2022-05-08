import React from 'react';
import useInventory from './../../hooks/useInventory';

const ManageItems = () => {
    const [inventory, setInventory] = useInventory();
    

    const handleDelete = id =>{
        const proceed = window.confirm('Are You Sure?')
        if(proceed){
            const url = `https://secret-hamlet-13683.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = inventory.filter(inventor => inventor._id !== id);
                setInventory(remaining);
            })
        }
    }


    return (
        <div className='w-50 mx-auto'>
            <h2>Manage Your Items</h2>
            {
                inventory.map(inventor => <div
                key={inventor._id}
                >
                    <h4>{inventor.name}<button onClick={ () => handleDelete(inventor._id)}>Delete</button></h4>
                    
                </div>)
            }
        </div>
    );
};

export default ManageItems;