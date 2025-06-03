import React from 'react'

function Winner(props){
    return(
        <div className="winner">
            <h1>Winner is {props.title}</h1>
        </div>
    );
}

export default Winner;