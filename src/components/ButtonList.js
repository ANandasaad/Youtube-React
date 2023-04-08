import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const ButtonList = ({ button }) => {

  return (
    <div className=" overflow-x-scroll">
      <div className="flex items-center h-16 p-2 m-3 overflow-auto whitespace-nowrap ">
        {button.map((btn) => (
          <Button key={btn.name} name={btn.name} videoid={btn.videoCategoryId} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
