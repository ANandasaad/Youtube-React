import React from 'react'
import { MdOutlineVideoLibrary,MdWatchLater } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { AiOutlineLike } from "react-icons/ai";


const SecondHeadMenu = () => {
  return (
    <div className="py-3 border-t-2">
        <ul>
            <li className='flex items-center py-2 px-2 hover:bg-gray-100 rounded-lg '><MdOutlineVideoLibrary/> &nbsp; Library</li>
            <li className='flex items-center py-2 px-2 hover:bg-gray-100 rounded-lg '> <GrHistory/>  &nbsp; History</li>
            <li className='flex items-center py-2 px-2 hover:bg-gray-100 rounded-lg '> <MdWatchLater/>  &nbsp; Watch Later</li>
            <li className='flex items-center py-2 px-2 hover:bg-gray-100 rounded-lg '> <AiOutlineLike/>  &nbsp;Liked videos</li>
        </ul>
    </div>
  )
}

export default SecondHeadMenu