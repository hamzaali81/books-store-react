import React from 'react';
 
const Button = ({handleDelete}) => {
    return (
        <button type="button" style={{background:'red',color:'white',fontSize:'2rem'}} onClick={handleDelete}>
            delete me
        </button>
    );
}
 
export default Button;