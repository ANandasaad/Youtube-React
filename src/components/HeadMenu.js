import React from 'react'
import { Link } from 'react-router-dom'

const HeadMenu = () => {
  return (
    <div className="py-3">
        <ul>
            <li><Link to="/"> Home </Link></li>
            <li>Shorts</li>
            <li>Subcriptions</li>
        </ul>
    </div>
  )
}

export default HeadMenu