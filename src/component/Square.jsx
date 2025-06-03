import React from 'react'

function Square(props){
    return(
        <div
            onClick={props.onclick} 
            style={{
                border:"1px solid black",
                height:"12rem",
                width:"100%",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}
            className="square">
            <h1>{props.value}</h1>
        </div>
    );
}

export default Square;
