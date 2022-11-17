import { ITask } from "../../../models/task.interface";
import { Task } from "../../pure/task";

export const TaskList = ({ tasks }: { tasks: ITask[] }) => {
  return (
    <div className="task-list">
      {
        tasks.map((task) => (
          <Task task={task} key={task.id} />
        ))
      }
    </div>
  )
}