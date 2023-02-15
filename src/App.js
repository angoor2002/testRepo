import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  let [val, setVal] = useState(0);
  let increment = () => {
    setVal(val + 1);
  };
  let decrement = () => {
    setVal(val - 1);
  };
  return (
    <div className="App">
      <button type="button" onClick={increment}>
        +
      </button>
      <p>{val}</p>
      <button type="button" onClick={decrement}>
        -
      </button>
    </div>
  );
}

export default App;
