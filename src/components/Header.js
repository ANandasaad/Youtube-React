import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Header = () => {
  const dispatch =useDispatch();
  const toggleMenuHandler=()=>{
      dispatch(toggleMenu());
  }
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
      <img  onClick={()=>toggleMenuHandler()} className="h-10  hover:cursor-pointer" alt="ham" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="/>
     <a href='/'><img className="h-10 mx-2 hover:cursor-pointer" alt="youtube" src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"/></a>  
      </div>
      <div className="col-span-10 px-10">
        <input type="text" className=" w-1/2  p-2 border border-gray-400 rounded-l-full"/>
        <button className=" border border-gray-400 p-2 rounded-r-full">Search</button>
      </div>

      <div className="col-span-1 ">
        <img className="w-11 hover:cursor-pointer" alt="profile" src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"/>
      </div>
      
    </div>
  )
}

export default Header