import React from 'react';

const menuInput = (props)=>{
    return(
        <div>
            <input type='text' onChange={props.change} value={props.currentName}/>
        </div>
    );
}

export default menuInput;