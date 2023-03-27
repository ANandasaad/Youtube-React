import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generate, GenerateString } from "../utils/helper";
import store from "../utils/store";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const dispatch = useDispatch();

  const [livemessage, setLiveMessage] = useState("");

  const chatMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const timeout = setInterval(() => {
     
      dispatch(
        addMessage({
          name: generate(),
          message: GenerateString(20),
        })
      );
    }, 500);

    return () => clearInterval(timeout);
  }, []);

  return (
    //dont use indexs as keys...use unique key;
    <>
      <div className="  ml-2 p-2 h-[500px] border border-black bg-slate-100 rounded shadow-lg w-full overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessage.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <form
        className="w-full p-2 ml-2 border border-black rounded-md"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("On submit", livemessage);
          dispatch(addMessage({
            name:"Anand",
            message:livemessage,
          }))
          setLiveMessage("");
        }}
       
      >
        <input
          className="w-72 px-3 bg-slate-100"
          type="text"
          value={livemessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-4 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
