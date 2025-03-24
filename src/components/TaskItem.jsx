const TaskItem = ({ task,editingId, editText, setEditText, startEditing, deleteTask, saveEdit }) => {
  return (
    <li className="flex justify-between items-center bg-gray-200 rounded-md my-2 p-2">
        {editingId === task.id ? (
            <input type="text" 
                className="border px-2 py-1 rounded-lg flex-grow" 
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
            />
        ): (
            <span>{task.text}</span>
        )}
        <div className="flex gap-2">
            {editingId === task.id ? (
                <button className="bg-green-500 text-white px-3 py-1 rounded-lg">Sauvegarder</button>
            ):(
                <button className="bg-yellow-500 text-white px-3 py-1 rounded-lg">Modifier</button>
            )}
            <button className="bg-red-500 text-white px-3 py-1 rounded-lg">Supprimer</button>
        </div>
    </li>
  )
}
export default TaskItem;