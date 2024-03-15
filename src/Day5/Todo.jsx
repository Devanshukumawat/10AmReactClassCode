import { useState } from "react";
import "./todo.css"
import { useEffect } from "react";

function Todo() {
    const [value,setValue] = useState("")
    const [ctask,setCtask] = useState(0)
    const [rtask,setRtask] = useState(0)

    function handleValue(e){
        setValue(e.target.value)
    }

    let AllTask = JSON.parse(localStorage.getItem("Set_todo")) || [
        {task:"Buy I-phone",completed:true},
        {task:"Buy Car",completed:true},
        {task:"Learn Guitar",completed:true}
         
    ]
    

    const [todo,setTodo] = useState(AllTask)

    function handleSubmit(){
        if(value){
            setTodo([...todo,{task:value,completed:false}])
        setValue(" ")
        }
        
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

    function handleDelete(index){
        let myNewDelete = [...todo]

       let deleteItem =  myNewDelete.filter((value,id)=>{
            return index !== id
        })

        setTodo(deleteItem)



    }

    function handleUpdate(index){
        console.log(index)

        const myEdit = [...todo]

        let newValue = myEdit[index]
        
       
        let editValue = prompt(`Edit Value :-  ${newValue.task}` , newValue.task)

        if(editValue){
            let newObj = {task:editValue,completed:false}

            myEdit.splice(index,1,newObj)
    
            setTodo(myEdit)
        }

      

    }

    useEffect(()=>{

        let myNewArray = [...todo]
        let completedTask = myNewArray.filter((value,index)=>{
            return value.completed
        })

        let remainingTask = myNewArray.filter((value,index)=>{
            return ! value.completed
        })



        setCtask(completedTask.length)
        setRtask(remainingTask.length)

        localStorage.setItem("Set_todo", JSON.stringify(myNewArray) )

    },[todo])

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
                 <span class="material-symbols-outlined delete_icon" onClick={()=>{handleDelete(index)}}>
                 
cancel
</span>
<span class="material-symbols-outlined edit_icon" onClick={()=>{handleUpdate(index)}}>
edit
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