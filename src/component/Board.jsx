import React, { useState } from 'react'
import Square from './Square';
import Winner from './Winner';

function Board(){
    const [state,setState]=useState(Array(9).fill(null));
    const [isXturn,setXturn]=useState(true);

    const handleClick=(index)=>{
        const copyState=[...state];
        copyState[index]=isXturn?"X":"O";
        setState(copyState);
        setXturn(!isXturn);
    }

    const handleReset=()=>{
        setState(Array(9).fill(null));
    }

    const checkWinner=()=>{
        const logic=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        for(let lg of logic){
            const [a,b,c]=lg;
            if(state[a]!=null && state[a]===state[b] && state[a]===state[c]){
                return state[a];
            }
        }
        return false;
    }

    const isWinner=checkWinner();

    return(
        <div 
            style={{
                position:"relative",
                width:"40rem",
                height:"40rem",
                marginLeft:"27rem"
            }}
            className="board-container">
            <>
                <h1
                    style={{
                        position:"relative",
                        left:"15rem",
                        // top:"10rem"
                    }}
                >Tic Tac Toe</h1>
                {isWinner? <>
                    <Winner title={isWinner}/> 
                    <button 
                        style={{
                            position:"relative",
                            top:"10rem",
                            left:"17.5rem",
                            border:"none",
                            height:"2.5rem",
                            width:"5.5rem",
                            fontSize:"1.3rem",
                            borderRadius:"7px"
                        }}
                        onClick={handleReset}>Reset</button>
                    
                    </> : <>
                    <div className="board-row">
                        <Square onclick={()=>handleClick(0)} value={state[0]}/>
                        <Square onclick={()=>handleClick(1)} value={state[1]}/>
                        <Square onclick={()=>handleClick(2)} value={state[2]}/>
                    </div>
                    <div className="board-row">
                        <Square onclick={()=>handleClick(3)} value={state[3]}/>
                        <Square onclick={()=>handleClick(4)} value={state[4]}/>
                        <Square onclick={()=>handleClick(5)} value={state[5]}/>
                    </div>
                    <div className="board-row">
                        <Square onclick={()=>handleClick(6)} value={state[6]}/>
                        <Square onclick={()=>handleClick(7)} value={state[7]}/>
                        <Square onclick={()=>handleClick(8)} value={state[8]}/>
                    </div>
                </>
                }
            </>
        </div>
    );
}

export default Board;
