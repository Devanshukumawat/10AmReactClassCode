import myStyle from "./style.module.css"

function Style() {
    return ( 
        <>
            <div className={myStyle.main}>
                <h1 className="txt">Styling</h1>
                <button className={myStyle.txt_btn}>More Info</button>
            </div>
        </>
     );
}

export default Style;