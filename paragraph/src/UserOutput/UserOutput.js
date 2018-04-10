import React from 'react';
import './UserOutput.css';

const userOutput = (props)=>{
    return(
        <div className='UserOutput'>
            <p>
                This is a random paragraph.
            </p>
            <p>
                by {props.username}
            </p>
        </div>
    );
}

export default userOutput;