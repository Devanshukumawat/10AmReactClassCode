import styled from "@emotion/styled";
import { Box, Typography  } from "@mui/material";




function MyStyle() {

    let Div = styled(Box)({
        backgroundColor:"blue",
        padding:"20px"
    })

    let Div2 = styled(Box)({
        backgroundColor:"yellow",
        width:"200px",
        height:"100px",
        margin:"auto"
    })

    let Heading = styled(Typography)({
        backgroundColor:"brown",
        color:"white",
        textAlign:"center"

    })

    return ( 
        
        <>
            <Div>
                <Heading variant="h1">Hello Class</Heading>
                <Div2></Div2>   
            </Div>
        </>
     );
}

export default MyStyle;