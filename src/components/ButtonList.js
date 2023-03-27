import React from "react";
import Button from "./Button";

const ButtonList = ({button}) => {
  return (
    <div className="border border-black overflow-y-hidden">

   
    <div className="flex items-center h-16 p-2 m-3 overflow-auto whitespace-nowrap ">
       { button.map((btn, index)=><Button  key={index} name={btn}/>)  } 
        </div>
        


    </div>
  );
};

export default ButtonList;
