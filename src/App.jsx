import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/yuvcolor.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Yuval Smith</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p></p>
      </div>
    </>
  );
}

export default App;
