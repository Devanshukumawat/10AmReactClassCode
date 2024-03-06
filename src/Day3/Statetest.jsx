import { useState } from "react";

function Statetest() {

    let myObj = {firstName:"Devanshu",lastName:"Maam"}

    const [value,setValue] =  useState(myObj)

    function handleValue(){
        setValue({...value,firstName:"Kizie"})
    }

    return ( 
        <>
            <h1>FirstName:-{value.firstName}  LastName:-{value.lastName} </h1>
            <button onClick={handleValue}>Update Value</button>
        </>
     );
}

export default Statetest;