import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center">
        <div className=" bg-red-700">Red</div>
        <div className=" bg-green-700">Green</div>
        <div className=" bg-blue-700">Blue</div>
      </div>
    </>
  );
}

export default App;
