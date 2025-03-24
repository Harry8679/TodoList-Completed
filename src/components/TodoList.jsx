// import InfoPersonnel from "./InfoPersonnel";
import { useState } from "react";
import TaskList from "./TaskList";

const TodoList = () => {
  const [tasks, setTasks] = useState([
   {
    id: 1,
    text: 'Learn React'
   },
   {
    id: 2,
    text: 'Work with NodeJS'
   },
   {
    id: 3,
    text: 'To do a full stack app'
   }
  ]);
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
        <div className="flex gap-2 mb-4">
            <input type="text" 
                placeholder="Ajouter une tâche ..." 
                className="border rounded-lg px-3 py-2 flex-grow"/>
            <button 
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                    Ajouter
            </button>
        </div>
        <TaskList tasks={tasks} />
        {/* <InfoPersonnel nom="MacCode" prenom="Harry" age={37} /> */}
    </div>
  )
}
export default TodoList;