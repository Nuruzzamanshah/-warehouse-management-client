import React from 'react';
import { Link, useParams } from 'react-router-dom';
import inventor from '../../images/categories/categories2.jpg'
import './InventoryDetail.css'

const InventoryDetail = () => {
    const {inventoryId} = useParams();
    return (
        <div className='inventorydetail'>
            {/* <h2>Welcome to detail: {inventoryId }</h2> */}
            <img src={inventor} alt=''/>
            <h2>Name: Huffy Brawn Dual</h2>
            <h2>Price: $319.00</h2>
            <h3>Quantity: 10</h3>
            <h3>Supplier: John</h3>
            <h3>description: Huffy Suspension Alloy 27Inch<br></br> Bike-in-Box 700</h3>
            <Link to='/checkout'>
             <button className='btnin'>Delivered</button>
            </Link>
        </div>
    );
};

export default InventoryDetail;