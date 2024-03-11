import { useState } from "react";
import "./todo.css"

function Todo() {
    const [value,setValue] = useState("")
    const [ctask,setCtask] = useState(0)
    const [rtask,setRtask] = useState(0)

    function handleValue(e){
        setValue(e.target.value)
    }

    

    const [todo,setTodo] = useState(
        [
            {task:"Buy I-phone",completed:true},
            {task:"Buy Car",completed:true},
            {task:"Learn Guitar",completed:true},
             
        ]
    )

    function handleSubmit(){
        setTodo([...todo,{task:value,completed:false}])
        setValue(" ")
    }

    function handleCheck(index){
        let myNewArray = [...todo]

        myNewArray[index].completed = !myNewArray[index].completed

        setTodo(myNewArray)

        let completedTask = myNewArray.filter((value,index)=>{
            return value.completed
        })

        let remainingTask = myNewArray.filter((value,index)=>{
            return ! value.completed
        })



        setCtask(completedTask.length)
        setRtask(remainingTask.length)

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
                <div className="mydiv">
                 <input type="checkbox"
                    checked={value.completed}
                    onClick={()=>{handleCheck(index)}}
                 />
                 
                 <span style={{textDecoration : value.completed ? "line-through": ""}} >{value.task}</span>
                 <span class="material-symbols-outlined delete_icon">
                 
cancel
</span>
</div>
                 </ul>
            ))}

                <span>Completed Task :- {ctask}  </span>
                <span>Remaining Task :- {rtask} </span>

            </div>        
            </div>
           
        </>
     );
}

export default Todo;