import React from 'react';
import './transport.css'

const Transport = (props) => {
    console.log(props.transport.picture)
    const {name, picture} =props.transport
    return (
        <div className='transport'>
            <div className='transport-img'>
            <img src={picture} alt=""/>
            </div>
            <div className='transport-name'>
            <button onClick={()=> props.handleClick(name)}><h1>{name}</h1> </button>
            </div>
            
        </div>
    );
};

export default Transport;