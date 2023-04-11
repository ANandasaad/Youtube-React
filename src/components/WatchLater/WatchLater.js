import React from 'react'
import { useSelector } from 'react-redux';
import VideoCard from '../VideoCard';

const WatchLater = () => {
     const query =useSelector((store)=>store.watch.items)
     console.log("query "+query)
  return (
    <div>
       
    </div>
  )
}

export default WatchLater;