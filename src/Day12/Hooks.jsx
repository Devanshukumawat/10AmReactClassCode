import { useReducer } from "react";

function Hooks() {

    let initialState = 0

    function reducer(currentState,action){
        console.log(action)
        switch(action){
            case "Increment":
              return currentState+1 
            
            case "Decrement":
                return currentState-1
            
            default:
                return currentState    
        }
    }

    const [state,dipatch] = useReducer(reducer,initialState)

    

    return ( 
        <>
        <div style={{
            width:"400px",
            height:"auto",
            margin:"auto"
        }}>

        
            <h1>Hooks - UseReducer</h1>
            <button onClick={()=>{dipatch("Increment")}} >+</button>
            <p>{state}</p>
            <button onClick={()=>{dipatch("Decrement")}} >-</button>

            <h1>Devanshu</h1>
            <button>Update</button>

        </div>    
        </>
     );
}

export default Hooks;