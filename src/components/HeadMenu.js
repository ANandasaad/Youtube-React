import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaBell} from "react-icons/fa";


const HeadMenu = () => {
  return (
    <div className="py-3">
        <ul>
            <li className='flex items-center py-2 px-2 hover:bg-gray-100 rounded-lg text-[15px]'> <FaHome/> <Link to="/"> &nbsp; Home  </Link></li>
            <li className='flex items-center py-2 px-2 hover:bg-gray-100 rounded-lg text-[15px]'> <FaYoutube/>&nbsp; Shorts</li>
            <li className='flex items-center py-2 px-2 hover:bg-gray-100 rounded-lg text-[15px]'> <FaBell/>&nbsp; Subcriptions</li>
        </ul>
    </div>
  )
}

export default HeadMenu