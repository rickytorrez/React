import React from 'react';

const menuOutput = (props)=>{
    return (
        <div>
            <p>Todays Diner will be cooked</p>
            <p>by {props.name}</p>
        </div>
    )
}

export default menuOutput;