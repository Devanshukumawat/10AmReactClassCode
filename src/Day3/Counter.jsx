import { useState } from "react";
import "./counter.css"


function Counter() {

    const [count,setCount] =  useState(0)

    function handleIncremenet(){
        setCount(count+1)
    }

    function handleDecrement(){
        if(count>0){
            setCount(count-1)
        }
        
    }

    return ( 
        <>
            <div className="counter">
            <h1>Counter App</h1>
            {count===10 ? <p>Yaahooo</p> : <></>}
            <button onClick={handleIncremenet}>+</button><h2>{count}</h2><button onClick={handleDecrement}>-</button>
            
            </div>
            
        </>
     );
}

export default Counter;