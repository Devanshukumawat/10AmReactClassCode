import { useEffect, useRef, useState } from "react";

function HooksRef() {
    const [name,setName] = useState("Devanshu")
    let useDom = useRef("")
    const [value,setValue] =useState("")
    let useCount =  useRef(0)
    console.log(useCount)

    function handleClear(){
        setName(" ")
        useDom.current.focus()
    }

    function handleColor(){
        useDom.current.style.color = "brown"
        useDom.current.style.backgroundColor = "black"
    }

    useEffect(()=>{
    
        useCount.current = useCount.current+1
        
    },[value])

    function handleBg(){
        document.body.style.backgroundColor = "black"
    }

    return ( 
        <>
            <h1>UseRef Hook</h1>
            <input type="text" value={name} ref={useDom} />
            <button onClick={handleClear}>Clear Value</button>
            <button onClick={handleColor} >Color</button>
            <input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}}/>
            <h1>{useCount.current}</h1>  
            <button onClick={handleBg}>Change Background</button>     
        </>
     );
}

export default HooksRef;