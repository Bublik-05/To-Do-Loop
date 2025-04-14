import Task from "./Task"

export default function TaskList({tasks, onToggle, onDelete}){
    return(
    <section className="task-list">
        <div>
            <table className="text-white min-w-full divide-y divide-gray-200" >
                <thead className="text-white whitespace-nowrap">
                    <tr>
                       <th className="px-4 py-4 text-left text-xs font-semibold text-white-900 uppercase tracking-wider">ID</th>
                        <th className="px-4 py-4 text-left text-xs font-semibold text-white-900 uppercase tracking-wider">Task</th>
                        <th className="px-4 py-4 text-left text-xs font-semibold text-white-900 uppercase tracking-wider">Date</th>
                        <th className="px-4 py-4 text-left text-xs font-semibold text-white-900 uppercase tracking-wider">Completed</th>
                        <th className="px-4 py-4 text-left text-xs font-semibold text-white-900 uppercase tracking-wider"></th>
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