import ProfileImage from "./media/1691224446516.jpeg"
import "./card.css"

function Card(props){
    return(
        <>
            <div className="main">
                <img src={props.image} alt="" className="cardimg"/>
                <h1 className="heading">{props.name}</h1>
                <p className="desc">{props.desc}</p>
                <button className="mybtn">More Info</button>
            </div>
        </>
    )
}

export default Card;


// // function add(a){
//     return a*a
// }

