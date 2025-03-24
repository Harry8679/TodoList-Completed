import TaskItem from "./TaskItem";

const TaskList = ({ tasks, editingId, editText, setEditText, startEditing, deleteTask, saveEdit }) => {
  return (
    <ul>
        {tasks.map((task) => (
            <TaskItem 
                key={task.id}
                task={task}
                editingId={editingId}
                editText={editText}
                setEditText={setEditText}
                startEditing={startEditing}
                deleteTask={deleteTask}
                saveEdit={saveEdit}
            />
        ))}
    </ul>
  )
}
export default TaskList;