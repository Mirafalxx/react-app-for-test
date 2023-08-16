import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ChildComp from "./components/ChildComp";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)} disabled={count <= 0}>
        -
      </button>
      <div>{count}</div>
      <ChildComp />
    </div>
  );
}
export default App;
