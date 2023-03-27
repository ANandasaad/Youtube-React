import React from 'react'
import { MdOutlineVideoLibrary,MdWatchLater } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { AiOutlineLike } from "react-icons/ai";


const SecondHeadMenu = () => {
  return (
    <div className="py-3 border-t-2">
        <ul>
            <li className='flex items-center py-2 px-2 hover:bg-gray-100 rounded-lg text-[15px]'><MdOutlineVideoLibrary/> &nbsp; Library</li>
            <li className='flex items-center py-2 px-2 hover:bg-gray-100 rounded-lg text-[15px]'> <GrHistory/>  &nbsp; History</li>
            <li className='flex items-center py-2 px-2 hover:bg-gray-100 rounded-lg text-[15px]'> <MdWatchLater/>  &nbsp; Watch Later</li>
            <li className='flex items-center py-2 px-2 hover:bg-gray-100 rounded-lg text-[15px]'> <AiOutlineLike/>  &nbsp;Liked videos</li>
        </ul>
    </div>
  )
}

export default SecondHeadMenu