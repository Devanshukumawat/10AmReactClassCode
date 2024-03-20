import { useEffect, useState } from "react"

function Data() {


    const [count,setCount] = useState(1)
    const [title,setTitle] = useState("")
    const [image,setImage] = useState("")
    const [desc,setDesc] = useState("")
    const [value,setValue] = useState("Manny")

    async function myData(count){
        let result = await fetch(`https://dummyjson.com/products/${count}`)
        let data = await result.json()
        console.log(data)
        setTitle(data.title)
        setImage(data.images[0])
        setDesc(data.description)
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

<div className="card" style={{width: "18rem"}}>
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}</p>
    <button onClick={handleData}>Next</button>  
  </div>
</div>

<h1>{value}</h1>
<button onClick={handleUpdate}>Upadte</button>

        </>
     );
}

export default Data;