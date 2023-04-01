import React, { useRef, useState } from "react";

const UseRef = () => {
    const [y,setY]=useState(0);
  let x = 0;
  let ref=useRef(0);
  console.log("Rendering...")
  return (
    <div className="w-96 h-96 border border-black p-3 m-4">
      <div>
        <button
          className="p-4 bg-green-100 "
          onClick={() => {
            x = x + 1;
            console.log("x="+x);
          }}
        >
          Increase X
        </button>
        <span>Let:{x}</span>
      </div>
      <div className="my-3">
        <button
          className="p-4 bg-green-100 "
          onClick={() => {
            setY( y+ 1);

            console.log(y);
            
          }}
        >
           State
        </button>
        <span>State:{y}</span>
      </div>
      <div className="my-3">
        <button
          className="p-4 bg-green-100 "
          onClick={() => {
          ref.current=ref.current+1;

            console.log("ref="+ref.current);
            
          }}
        >
           Ref
        </button>
        <span>Ref:{ref.current}</span>
      </div>
    </div>
  );
};

export default UseRef;
