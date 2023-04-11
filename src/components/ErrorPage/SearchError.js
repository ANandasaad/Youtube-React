import React from 'react'
import { useRouteError } from 'react-router-dom'

const SearchError = () => {
    const err=useRouteError();

  return (
    <div>
        <h1>Api Call Error--- Properly </h1>
        <h2>{err?.message}</h2>
    </div>
  )
}

export default SearchError