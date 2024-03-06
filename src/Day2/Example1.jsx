function Example1(props) {


    let myData = ["Aman","Abhay","Abhinav","Devanshu","Sagar"]

    return ( 
        <>
           {
            myData.map((value,index)=>(
                <ul>
                    <li>{value} index:- {index} </li>
                </ul>
            ))
           }
        </>
     );
}

export default Example1;