import { useState } from "react";
import "./App.css";
import RevenueCard from "./components/RevenueCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid grid-cols-4 gap-4">
      <RevenueCard
        title={"Next Payout"}
        amount={"2,312.23"}
        orderCount={"23"}
      />
      <RevenueCard
        title={"Amount Pending"}
        amount={"92,312.20"}
        orderCount={"13"}
      />
      <RevenueCard
        title={"Amount Processed"}
        amount={"23,92,312.19"}
        orderCount={""}
      />
    </div>
  );

  // for tailwind practice
  // return (
  //   <>
  //     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  //       <div className=" bg-red-700">Red</div>
  //       <div className=" bg-green-700">Green</div>
  //       <div className=" bg-blue-700">Blue</div>
  //     </div>
  //   </>
  // );
}

export default App;
