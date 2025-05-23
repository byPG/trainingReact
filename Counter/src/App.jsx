import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <header>
        <h1>React Counter</h1>
        <p>use state exercise</p>
      </header>
      <main>
        <button onClick={handleClick}>Kliknij!!</button>
        <p>Kliknięto: {counter}</p>
      </main>
    </div>
  );
}

export default App;
