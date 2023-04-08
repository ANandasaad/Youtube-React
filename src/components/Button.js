import React from 'react'
import { useDispatch } from 'react-redux'
import { setCategory, setvideoCategory } from '../utils/appSlice';

const Button = ({name,videoid}) => {
  console.log("btn ID:"+ videoid);
  const dispatch=useDispatch();
  return (
    <div >
      <button className="px-3 py-2 m-2 bg-gray-200 rounded-lg hover:bg-slate-50" onClick={()=>{
         dispatch(setCategory(name));
        if(videoid)
        {
          dispatch(setvideoCategory(videoid));
        }
        
      }}>{name}</button>
    </div>
  )
}

export default Button