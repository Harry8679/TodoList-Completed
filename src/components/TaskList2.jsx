const TaskList = () => {
  return (
    <ul>
        <li className="flex justify-between items-center bg-gray-200 rounded-md my-2 p-2">
            <span>Ma première tâche de la journée</span>
            <div className="flex gap-2">
                <button className="bg-yellow-500 text-white px-3 py-1 rounded-lg">Modifier</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded-lg">Supprimer</button>
            </div>
        </li>

        <li className="flex justify-between items-center bg-gray-200 rounded-md my-2 p-2">
            <input type="text" className="border px-2 py-1 rounded-lg flex-grow" />
            <div className="flex gap-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded-lg">Sauvegarder</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded-lg">Supprimer</button>
            </div>
        </li>
    </ul>
  )
}
export default TaskList