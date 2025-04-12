import Task from "./Task"

export default function TaskList({tasks, onToggle, onDelete}){
    return(
    <section className="task-list">
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Task</th>
                        <th>Date</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task)=>(
                        <Task key={task.id} t={task} onToggle={onToggle} onDelete={onDelete} />
                    ))}
                </tbody>
            </table>
         </div> 
    </section>
    )
}