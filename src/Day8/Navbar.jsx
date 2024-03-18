import "./navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
    return ( 
        <>
            <div className="navbar">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/todo"}>Todo</Link></li>
                    <li><Link to={"/counter"}>Counter</Link></li>
                    <li><Link to={"/form"}>Form</Link></li>
                    <li><Link to={"/card"}>Card</Link></li>
                </ul>
            </div>
        </>
     );
}

export default Navbar;