import { useDispatch } from "react-redux";
import { deleteTask, completeTask, TaskState } from "./taskSlice";
import styles from "./task.module.css";

interface Props {
  task: TaskState;
}
const TaskItem = (props: Props) => {
  const { task } = props;
  const dispatch = useDispatch();
  return (
    <div className={styles.task}>
      <input
        type="checkbox"
        onClick={() => dispatch(completeTask(task))}
        defaultChecked={task.completed}
      />
      <span>{task.title}</span>
      <button onClick={() => dispatch(deleteTask(task))}>DELETE</button>
    </div>
  );
};

export default TaskItem;
