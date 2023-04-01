import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const UseMemo = () => {
  const [Input, setInput] = useState("");
  const[isDark,setDark]=useState(true);
  console.log("Rendering.....");
  const prime= useMemo(()=>findPrime(Input),[Input]);

  

  return (
    <div className={"m-4 p-2 w-72 h-96 border border-black" + (isDark &&  " bg-gray-900 text-white")}>

        <div>
            <button className=" m-2 p-4 shadow-lg bg-green-300 rounded-3xl" onClick={()=>setDark(!isDark)}>Toogle</button>
        </div>
        <div>
      
    
      <input
        className="border border-black text-black"
        type="text"
        value={Input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
          </div>
      {/* <p className="overflow-x-scroll"> {Input}</p> */}
      <div>
        <h1>Nth Prime : {prime}</h1>
      </div>
    </div>
  );
};

export default UseMemo;
