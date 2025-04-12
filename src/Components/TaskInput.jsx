import {useState} from "react"

export default function TaskInput({addTask}){

    const [inputValue, setInputValue] = useState("");

    const handleValue = () =>{
        if (inputValue.trim !== ""){
            addTask(inputValue);
            alert('Task added: ' + inputValue);
            setInputValue("")
        }
    }

    return(
        <div>
            <label htmlFor = "task"></label>
            <input type="text" id = "task" value={inputValue} placeholder="New Task"
            onChange={(e) => setInputValue(e.target.value)}
            ></input>
            <button onClick={handleValue} id="add">Add Task</button>
        </div>
    )
}