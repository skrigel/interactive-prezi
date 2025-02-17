import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import CodePanel from "./CodePanel";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-4xl">Welcome!</h1>
          <button onClick={() => setCount(count + 1)}>Click me!</button>
          <h1>Clicker Count {count}</h1>
        </div>
        <Link to="/presentation">Presentation</Link>
      </div>
    </>
  );
}

export default Home;
