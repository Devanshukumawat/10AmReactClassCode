import { useState } from "react";
import "./todo.css"

function Todo() {
    const [value,setValue] = useState("")

    function handleValue(e){
        setValue(e.target.value)
    }

    

    const [todo,setTodo] = useState(
        [
            {task:"Buy I-phone",completed:true},
            {task:"Buy Car",completed:false},
            {task:"Learn Guitar",completed:true},
             
        ]
    )

    function handleSubmit(){
        setTodo([...todo,{task:value,completed:false}])
        setValue(" ")
    }

    return ( 
        <>
            <div className="todo">
            <div className="box">
            <h1>MY TODO-APP</h1>
            <input type="text" className="todo_input"
                value={value}
                onChange={handleValue}
            />
            <button className="todo_btn" onClick={handleSubmit}>Add Task</button>
            {todo.map((value,index)=>(
                <ul>
                 <input type="checkbox"
                    checked={value.completed}
                 /><span>{value.task}</span>
                 </ul>
            ))}
            </div>        
            </div>
           
        </>
     );
}

export default Todo;