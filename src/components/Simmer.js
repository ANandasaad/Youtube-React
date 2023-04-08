
const Simmer=()=>{
  
    return(
        <div className="flex flex-wrap animate-pulse w-[1239px]">
            {Array(48).fill("").map((e,index)=><div key={index} className="p-2 m-2 w-72 h-80 shadow-lg bg-gray-200 rounded-lg">
                <div className="w-[17rem] h-[10rem] bg-gray-300 rounded-lg"></div>
                <ul>
                    <li className="h-8 bg-gray-300 py-2 my-2 rounded-lg"></li>
                    <li className="h-8  bg-gray-300 py-2 my-2 rounded-lg"></li>
                    <li className="h-8  bg-gray-300 py-2 my-2 rounded-lg"></li>
                </ul>
                
            </div>)}
        </div>
    )
}

export default Simmer;