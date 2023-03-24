import React from 'react'

const Button = ({name}) => {
  return (
    <div className="overflow-x-scroll" >
      <button className="px-3 py-2 m-2 bg-gray-200 rounded-lg hover:bg-slate-50">{name}</button>
    </div>
  )
}

export default Button