import { useEffect, useState } from "react"

function Data() {


    const [count,setCount] = useState(1)
    const [value,setValue] = useState("Manny")

    async function myData(){
        let result = await fetch(`https://dummyjson.com/products/${count}`)
        let Data = await result.json()
        console.log(Data)
    }
    


    useEffect(()=>{
        myData()
    },[count])

    function handleData(){
        setCount(count+1)
    }


    function handleUpdate(){
        setValue("Dev")
    }

    return ( 
        <>
            <h1>{count}</h1>
          <button onClick={handleData}>Next</button>  
          <h1>{value}</h1>
          <button onClick={handleUpdate}>Update</button>
        </>
     );
}

export default Data;