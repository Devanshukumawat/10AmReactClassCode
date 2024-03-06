function Product(props) {


    const myDiv = {
        border:"2px solid black",
        width:"500px"
    }

    return ( 
        <>
        <div style={myDiv}>
            <h1> Product Name :-  {props.Pname}</h1>
            <h2>Price :- {props.price}</h2>
            <h3>Rating :- {props.rating}</h3>
        </div>
        </>
     );
}

export default Product;