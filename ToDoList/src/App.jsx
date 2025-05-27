import { useState } from "react";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasksList, setTasksList] = useState([]);

  function addTask() {
    if (newTask.trim() === "") return;
    setTasksList((prev) => [...prev, newTask]);
    setNewTask("");
  }

  return (
    <div className="content">
      <header>
        {/* <img src="" alt="" /> */}
        <h2>To Do List</h2>
      </header>

      <div>
        <input
          type="text"
          placeholder="Write here your new task..."
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add task!</button>
      </div>

      <div>
        <ul>
          {tasksList.map((task, index) => (
            <li key={index}>
              <input type="checkbox" />
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
