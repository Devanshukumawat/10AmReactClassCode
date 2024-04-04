import { useRef, useState } from "react";

function HooksRef() {
    const [name,setName] = useState("Devanshu")
    let useDom = useRef("")
    console.log(useDom)

    function handleClear(){
        setName(" ")
        useDom.current.focus()
    }

    function handleColor(){
        useDom.current.style.color = "brown"
        useDom.current.style.backgroundColor = "black"
    }

    return ( 
        <>
            <h1>UseRef Hook</h1>
            <input type="text" value={name} ref={useDom} />
            <button onClick={handleClear}>Clear Value</button>
            <button onClick={handleColor} >Color</button>
        

            
        </>
     );
}

export default HooksRef;