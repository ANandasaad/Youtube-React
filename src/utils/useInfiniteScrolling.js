
import  { useEffect, useState } from 'react'

const useInfiniteScrolling = (fetchData) => {
  const [isFetching,setFetching]=useState(false);

  

  useEffect(()=>{
    window.addEventListener('scroll',scrolling);

    return function(){
        window.removeEventListener('scroll',scrolling);
    }
  },[])
  useEffect(()=>{
    if(!isFetching) return;
     fetchData();
  },[isFetching]);

  function scrolling()
  {
    if(document.documentElement.scrollTop+window.innerHeight!==document.documentElement.offsetHeight)
    {
        setFetching(true);
    }

  }

  return [isFetching,setFetching];
}

export default useInfiniteScrolling