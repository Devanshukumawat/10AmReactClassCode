import { useState } from "react"

function Test(){

    let x = 11
    const [num,setNum] = useState(x)
    const [name,setName] = useState("Devanshu")
   

    function handleValue(){
        setNum(x = 19)
       
    }

    function handleName(){
        setName("Manny")
    }

    return(
        <>
        <h1>Test</h1>
        <h2>Value:- {num}</h2>
        <button onClick={handleValue}>Click to change Value</button>

        <h3>Name:-{name} </h3>
        <button onClick={handleName}>Change Name</button>

        </>
    )
}

export default Test;