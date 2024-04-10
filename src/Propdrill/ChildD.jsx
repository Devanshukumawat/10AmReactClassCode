import {data,data1} from "../App"


function ChildD() {

    console.log(data)
    console.log()

    return ( 
        <>
        <data.Consumer>     
        {
                (firstName)=>{
                    return(

                       <>
                        <data1.Consumer>
                            {
                                (lastName)=>{
                                    return(
                                        <>
                                            <h1>Child Comp ..{firstName} {lastName}</h1>
                                        </>
                                    )
                                }
                            }
                        </data1.Consumer>
                       </>
                    )
                }
                
            }
             
        </data.Consumer>
        </>
     );
}

export default ChildD;