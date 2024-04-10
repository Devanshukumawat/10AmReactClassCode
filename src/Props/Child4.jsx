
import {firstName} from "../App"

function Child4() {

    console.log(firstName)
       
    return ( 
        <>
            
                <firstName.Consumer>
                    {
                        (name)=>{
                            return(
                                <h1>{name}</h1>
                            )
                           
                        }
                    }
                </firstName.Consumer>
           
            {/* <span>Child-4</span>
            <span></span> */}
        </>
     );
}

export default Child4;