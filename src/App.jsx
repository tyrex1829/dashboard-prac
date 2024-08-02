import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className=" bg-red-700 col-span-5">Red</div>
        <div className=" bg-green-700 col-span-5">Green</div>
        <div className=" bg-blue-700 col-span-1">Blue</div>
        <div className=" bg-yellow-600 col-span-1">Yellow</div>
      </div>
    </>
  );
}

export default App;
