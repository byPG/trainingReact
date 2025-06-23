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
      <img className="mainImg" src="../src/assets/pngegg.png" alt="list" />
      <div className="mainContent">
        <header>
          <h2>Todo App</h2>
        </header>
        <div>
          <input
            type="text"
            placeholder="Write here your new task..."
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTask}>+</button>
        </div>
        <div>
          <ul>
            {tasksList.map((task, index) => (
              <ol key={index}>
                <input type="checkbox" />
                {task}
              </ol>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
