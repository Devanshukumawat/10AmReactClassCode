import { useState } from "react";

function Form() {

    const [fname,setFname] =useState('dev')
    const [lname,setLname] = useState("")
    const [fvalue,setFvalue] = useState("")
    const [lValue,setLvalue]  =useState("")

    function handleForm(e){

        console.log(fname)
       
        e.preventDefault()
        setFvalue(fname)
        setFname("")
        setLvalue(lname)
        setLname("")
        console.log(fname,lname)
    }

    function handleFname(e){
        setFname(e.target.value)
    }

    function handleLname(e){
        setLname(e.target.value)
    }

    return ( 
        <>
           
           <h1>Form</h1> 
           <h2>Hello {fvalue} {lValue}</h2>
           <form onSubmit={handleForm}>
           <label>First Name</label>
            <input type="text"
            value={fname}
            onChange={handleFname}
            />
            <label>Last Name</label>
            <input type="text"
                value={lname}
                onChange={handleLname}
            />
            <button>Submit Form</button>
           </form>
        </>
     );
}

export default Form;