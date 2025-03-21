const TodoApp = () => {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg p-6 rounded-lg">
        <h1 className="text-center text-2xl font-bold text-green-500">Ma Todo List</h1>

        <form className="flex gap-2 m-6 px-4 py-2">
            <input type="text" 
                className="border border-gray-300 rounded-md flex-grow focus:outline-none" 
                placeholder="Ajouter une tâche ..."
            />
            <button type="submit" 
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    Ajouter
            </button>
        </form>
    </div>
  )
}
export default TodoApp;