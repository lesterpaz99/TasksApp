import { ITask } from "../../../models/task.interface"

export const Task = ({ task }: { task: ITask }) => {
  const { title, description, status, priority } = task;

  return (
    <div className="task">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{status}</p>
      <p>{priority}</p>
    </div>
  )
}