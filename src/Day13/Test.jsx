import { Link } from "react-router-dom";

function Test() {
    return ( 
        <>
            <h1 className="text-red-700 text-6xl">Tailwind css</h1>
            <ul>
                <li className="bg-blue-600 text-white inline float-end clear-start">Hello</li>

            </ul>
            <Link className= " text-4xl hover:text-red-900 hover:text-x">Amazon</Link>
        </>
     );
}

export default Test;