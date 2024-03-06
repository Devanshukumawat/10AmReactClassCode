function Example(props) {
   const divStyle = {backgroundColor:"yellow",width:"100px",height:"100px",margin:"auto"}

    const Heading = {
        backgroundColor:"green",
        color:"white",
        textAlign:"center"
    }

    return ( 
        <>
            <h1>{props.firstName}</h1>
            <h1 style={{backgroundColor:"black", color:"white",textAlign:"center"}}>Example</h1>
            <div style={divStyle}></div>
            <h2 style={Heading}>Hello Class</h2>
        </>
     );
}

export default Example;