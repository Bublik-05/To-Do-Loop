import TaskFilter from "./Components/TaskFilter.jsx";
import TaskInput from "./Components/TaskInput.jsx";
import TaskList from "./Components/TaskList.jsx";
import {useState} from "react";

export default function App(){

  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState("all")
  const [filterDate, setFilterDate] = useState('all')
  const now = new Date();

  const addTask = (text) =>{
    const newtask ={
      id: Date.now(),
      text: text,
      date: new Date().toLocaleDateString(),
      completed: false
    }
    setTasks([...tasks, newtask])
  }

  const deleteTask = (id) =>{
    setTasks(tasks.filter(task => task.id !== id))
  }
    
  const toggleTask = (id) =>{
    setTasks(tasks.map(task =>{
      if(task.id === id){
        return {...task, completed:!task.completed}
      }
      return task
    }))
  }

  const filteredTask = tasks.filter(task =>{
    if(filter === "completed") return task.completed 
    if(filter === "not-complited") return !task.completed
  
    const taskDate = new Date(task.date); // task.date — строка, нужно преобразовать в Date
  
    if (filterDate === "today") {
      return taskDate.toDateString() === now.toDateString();
    }
    if (filterDate === "yesterday") {
      const yesterday = new Date();
      yesterday.setDate(now.getDate() - 1);
      return taskDate.toDateString() === yesterday.toDateString();
    }
    if (filterDate === "last-week") {
      const lastWeek = new Date();
      lastWeek.setDate(now.getDate() - 7);
      return taskDate >= lastWeek;
    }
    if (filterDate === "last-month") {
      const lastMonth = new Date();
      lastMonth.setMonth(now.getMonth() - 1);
      return taskDate >= lastMonth;
    }
    if (filterDate === "last-year") {
      const lastYear = new Date();
      lastYear.setFullYear(now.getFullYear() - 1);
      return taskDate >= lastYear;
    }
    if (filterDate === "year+") {
      const lastYear = new Date();
      lastYear.setFullYear(now.getFullYear() - 1);
      return taskDate < lastYear;
    }
  
    return true;
  });

  
  
  return(
    <div class="bg-mainColor">
        <h1 class="mx-auto mt-2 text-white max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">To Do loop</h1>
        <div className="">
          <TaskInput addTask={addTask}/>
          <TaskFilter filter={filter} setFilter={setFilter} filterDate={filterDate} setFilterDate={setFilterDate}/>
          <TaskList tasks={filteredTask} onToggle={toggleTask} onDelete={deleteTask} />
        </div>
    </div>
    
  );
 
}
