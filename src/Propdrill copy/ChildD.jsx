import { useContext } from "react";
import { data, data1 } from "../App";

function ChildD() {
    console.log(data)

  let firstName = useContext(data)
  let lastName = useContext(data1)

    return ( 
        <>
            <h1>Hello Comp childD {firstName} {lastName}</h1>
        </>
     );
}

export default ChildD;