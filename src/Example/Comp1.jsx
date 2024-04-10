import Comp2 from "./Comp2";


function Comp1(props) {
    const {num} = props
    return ( 
        <>
            <Comp2 num ={num}/>
        </>
     );
}

export default Comp1;