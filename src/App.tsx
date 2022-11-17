import './App.css'
import { TaskList } from './components/container/task-list';
import { ITask, TaskPriority, TaskStatus } from "./models/task.interface";


const TASKS: ITask[] = [
  {
    id: 1,
    title: "Task 1",
    description: "Description 1",
    status: TaskStatus.TODO,
    priority: TaskPriority.LOW,
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description 2",
    status: TaskStatus.TODO,
    priority: TaskPriority.MEDIUM
  }
];
function App() {
  return (
    <div className="App">
      <h1>Vite + React</h1>
      <TaskList tasks={TASKS} />
    </div>
  )
}

export default App
