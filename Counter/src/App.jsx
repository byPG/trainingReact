import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  function handleReset() {
    setCounter(0);
  }

  return (
    <div>
      <header>
        <h1>React Counter</h1>
        <p>use state exercise</p>
      </header>
      <main>
        <button onClick={handleClick}>Kliknij!!</button>
        <button onClick={handleReset}>Resetuj</button>
        <input type="text" onChange={(e) => console.log(e.target.value)} />
        <p>Kliknięto: {counter}</p>
      </main>
    </div>
  );
}

export default App;
