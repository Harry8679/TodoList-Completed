import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
  return (
    <ul>
        {tasks.map((task) => (
            <TaskItem />
        ))}
    </ul>
  )
}
export default TaskList;