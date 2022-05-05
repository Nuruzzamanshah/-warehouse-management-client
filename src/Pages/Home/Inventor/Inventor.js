import React from 'react';

const Inventor = ({inventor}) => {
    const {name, img, description, price} = inventor;
    return (
        <div>
            <h2>This is Inventor: {img}</h2>
        </div>
    );
};

export default Inventor;