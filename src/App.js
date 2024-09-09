import "./App.css";
import { useState } from "react";
import { Task } from "./Task";
function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    const newId =
      todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1;
    const newTaskObj = { id: newId, taskName: newTask, complete: false };
    console.log(newTaskObj.id);
    const newTodoList = [...todoList, newTaskObj];
    setTodoList(newTodoList);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, complete: !task.complete };
        }

        return task;
      })
    );
  };
  return (
    <div class="App">
      <div class="addTask">
        <input type="text" onChange={handleChange} />
        <button class="addBtn" onClick={addTask}>
          add Task
        </button>
      </div>
      <div class="list">
        <ul>
          {todoList.map((task) => {
            return (
              <Task
                task={task}
                deleteTask={deleteTask}
                completeTask={completeTask}
              /> //this is component
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
