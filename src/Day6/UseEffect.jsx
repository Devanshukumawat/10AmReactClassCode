// import { useState } from "react";
// import { useEffect } from "react";

import { useEffect } from "react";
import { useState } from "react";

// function UseEffect() {

//     const [count,setCount] = useState(0)
//     const [name,setName] = useState("dev")

//     useEffect(()=>{
//         console.log("Useeffect Function Mount")
//     },[count,name])

//     function handleIncrement(){
//         setCount(count+1)
//     }

//     function handleUpdate(){
//         setName("Manny")
//     }

//     function handleDecrement(){
//         setCount(count-1)
//     }

//     return ( 
//         <>
//                 <h1>Useeffect Hook</h1>
//                 <button onClick={handleDecrement}>Decrement</button>
//                 <p>{count}</p>
//                 <button onClick={handleIncrement}>Increment</button>
//                 <h2>{name}</h2>
        
//                 <button onClick={handleUpdate}>Update</button>
//         </>

//      );
// }

// export default UseEffect
// ;

function UseEffect() {
    const [count,setCount] = useState(0)

    useEffect(()=>{
        // setCount(count+1)

        setTimeout(()=>{
            setCount(count+1)
        },8000)

    },[count])

    return ( 
        <>
            <h1>USeEffect Hook</h1>
            <h2>Count:- {count}</h2>
        </>
     );
}

export default UseEffect;

// function UseEffect() {

//     const [name,setName] = useState("USeEffect")

//     function handleUpdate(){
//         setName("UseRef")
//     }

//     useEffect(()=>{
//         alert("Welcome page")
//         console.log("Aleart")
//     },[name])


//     return ( 
//         <>
//             <h1>{name}</h1>
//             <button onClick={handleUpdate}>Update</button>
//         </>
//      );
// }

// export default UseEffect;