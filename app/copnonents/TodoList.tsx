import { ITask } from "@/types/tasks"
import Task from "./Task"

interface TodoListProps {
    tasks: ITask[]
}

const TodoList: React.FC<TodoListProps> = async ({ tasks }) => {

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Task</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks ? await tasks.map((task) => <Task key={task.id} task={task}/>) : null}
            </tbody>
        </table>
        </div >
    )
}

export default TodoList