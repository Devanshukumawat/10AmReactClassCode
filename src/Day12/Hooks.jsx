// import { useReducer } from "react";

import {  useMemo, useState } from "react";
import  HookStyle from "../styleComp/style.module.css"

// function Hooks() {

//     let initialState = 0

//     function reducer(currentState,action){
//         console.log(action)
//         switch(action){
//             case "Increment":
//               return currentState+1 
            
//             case "Decrement":
//                 return currentState-1
            
//             default:
//                 return currentState    
//         }
//     }

//     let myState = "Devanshu Sir"

//     function myReducer(Cstate,action){

//         switch(action){
//             case "update":
//                 return Cstate = "Manny"
//             default:
//                 return Cstate    
//         }

//     }

//     const [state,dipatch] = useReducer(reducer,initialState)
//     const [name,dipatchName] = useReducer(myReducer,myState)

    

//     return ( 
//         <>
//         <div style={{
//             width:"400px",
//             height:"auto",
//             margin:"auto"
//         }}>

        
//             <h1>Hooks - UseReducer</h1>
//             <button onClick={()=>{dipatch("Increment")}} >+</button>
//             <p>{state}</p>
//             <button onClick={()=>{dipatch("Decrement")}} >-</button>

//             <h1>{name}</h1>
//             <button onClick={()=>{dipatchName("update")}}>Update</button>

//         </div>    
//         </>
//      );
// }

// export default Hooks;


//usememo

// function addd(a,b){
//     return a+b
// }

// addd(4,7)

// addd(4,7)

function Hooks() {

    const [count,setCount] = useState(0)
    const [name,setName] = useState("Manny")


   

    const dividerFun = useMemo(
        function divide(){
            console.log("I am a divide fun")
            return count/2
        },[count]
    )


    return ( 
        <>
        {dividerFun}
        <br/>
        <button onClick={()=>{
            setCount(count+1)
        }}>Increment</button>
        <h1>{count}</h1>
        <button onClick={()=>{
            setCount(count-1)
        }}>Decrement</button>


        <h1>{name}</h1>
        <button onClick={()=>{setName("Dev")}} className={HookStyle.txt_btn}>Update</button>


        </>
     );
}

export default Hooks;