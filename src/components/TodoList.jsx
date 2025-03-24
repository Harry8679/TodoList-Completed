// import InfoPersonnel from "./InfoPersonnel";
import { useState } from "react";
import TaskList from "./TaskList";
import { v4 as uuidv4 } from 'uuid';

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

  const [taskText, setTaskText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const addTask = () => {
    if (!taskText.trim()) return;
    // alert('Tâche ajoutée');
    const newTask = { id: uuidv4(), text: taskText };
    console.log(newTask);
    setTasks([...tasks, newTask]);
    setTaskText('');
  }

  const deleteTask = (id) => {
    console.log(id)
    // alert(`Tâche supprimée n° ${id}`);
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
  }

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditText(text);
  }

  const saveEdit = (id) => {
    // alert(`Tâche numéro ${id}`);
    setTasks(tasks.map((task) => (task.id === id ? {...task, text: editText} : task)));
    setEditingId(null);
  }
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
        <div className="flex gap-2 mb-4">
            <input type="text" 
                placeholder="Ajouter une tâche ..." 
                className="border rounded-lg px-3 py-2 flex-grow"
                onChange={(e) => setTaskText(e.target.value)}
                value={taskText}
                onKeyPress={handleKeyPress}
            />
            <button 
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                onClick={addTask}>
                    Ajouter
            </button>
        </div>
        <TaskList 
            tasks={tasks} 
            deleteTask={deleteTask}
            editText={editText}
            startEditing={startEditing}
            editingId={editingId}
            saveEdit={saveEdit}
            setEditText={setEditText}
        />
        {/* <InfoPersonnel nom="MacCode" prenom="Harry" age={37} /> */}
    </div>
  )
}
export default TodoList;