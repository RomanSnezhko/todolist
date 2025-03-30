import './App.css'
import {Todolist} from "./Todolist.tsx";
import {TaskType} from "./Todolist.tsx";

function App() {
    const tasks: Array<TaskType> = [
        {id: 1, title: "JS", isDone: false},
        {id: 2, title: "HTML", isDone: true},
        {id: 3, title: "CSS", isDone: false},
    ]
    return (
        <div className="App">
            <Todolist title={"To do list"} tasks={tasks}/>
        </div>
    )
}

export default App
