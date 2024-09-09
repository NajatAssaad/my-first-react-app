export const Task = (props) => {
  return (
    <li
      style={{ backgroundColor: props.task.complete ? "#612525" : "white"}}
    >
      <span>{props.task.taskName}</span>
      <button
        style={{ marginLeft: "10px" }}
        onClick={() => props.deleteTask(props.task.id)}
      >
        X
      </button>
      <button
        style={{ marginLeft: "5px" }}
        onClick={() => props.completeTask(props.task.id)}
      >
        complete
      </button>
    </li>
  );
};
