import { useState } from "react";

const TodoApp = () => {
  /* const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Apprendre React JS'
    },
    {
        id: 2,
        text: 'Faire des tests unitaires'
    },
    {
        id: 3,
        text: 'Courir 10 km'
    }
  ]);*/
  const [tasks, setTasks] = useState([]);
//   console.log('tasks', tasks);
  const [taskText, setTaskText] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    // setTasks([])
    // tasks.push({ id: Date.now(), text: taskText });
    if (taskText.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: taskText }]);
    setTaskText('');
  }

  const deleteTask = (id) => {
    // console.log(id);
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const handleChange = (e) => {
    // console.log(e.target.value);
    setTaskText(e.target.value);
  }
  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg p-6 rounded-lg">
        <h1 className="text-center text-2xl font-bold text-green-500">Ma Todo List</h1>

        <form onSubmit={addTask} className="flex gap-2 m-6 px-4 py-2">
            <input type="text" 
                className="border border-gray-300 rounded-md flex-grow focus:outline-none" 
                placeholder="Ajouter une tâche ..."
                value={taskText}
                onChange={handleChange}
            />
            <button type="submit" 
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    Ajouter
            </button>
        </form>

        {/* Liste des tâches */}
        <ul>
            {tasks.map((task) => (
                <li key={task.id} 
                    className="flex justify-between bg-gray-500 px-3 py-1 rounded-lg mb-1 text-white">
                    <span>{task.text}</span>
                    <button type="submit" onClick={() => deleteTask(task.id)}
                        className="bg-red-500 px-3 py-1 rounded-md hover:bg-red-700">
                            Supprimer
                    </button>
                </li>
            ))}
        </ul>

        {tasks.length === 0 && (
            <p className="text-center text-gray-500">Aucune tâche pour le moment.</p>
        )}
    </div>
  )
}
export default TodoApp;