import React, { useEffect } from "react";
import { BiLike,BiDislike } from "react-icons/bi";


import { commentsData } from "../utils/constants";
const CommentCard = ({ data }) => {
  
  return (
    <div className=" flex m-1  rounded-sm ">
      
      <img
        className="h-10 rounded-full my-4 mx-3"
        src={data?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
        alt="profile"
      />
       <div className="flex flex-col justify-center my-3">
       <p className="lowercase">
        @{data?.snippet?.topLevelComment?.snippet?.authorDisplayName}
      </p>
     
      <p>{data?.snippet?.topLevelComment?.snippet?.textOriginal}</p>
      <div className="flex py-1">
      <span className="px-4"><BiLike/>{data?.snippet?.topLevelComment?.snippet?.likeCount}</span> <span className="mx-4"><BiDislike/></span>
      </div>
    
      </div>
      
      
     
      {/* <div className="">
        <p className="m-1 font-bold"> {name} </p>
        <p className="m-1"> {text}</p>
      </div> */}
    </div>
  );
};

const CommentList = ({ comments }) => {
  // return comments.map((comment,index) => 
  //   <div >
  //        <CommentCard key={index} data={comment} />
  //        <div className="pl-5 border border-l-black ml-5 ">
  //      <CommentList key={index} comments={comment.replies}/>
  //        </div>
  //   </div>
  // );

  return  comments.map((comment,index)=>
    <div>
         <CommentCard  key={index} data={comment}/>
    </div>
  )
};

const Comments = ({data}) => {
  
  // console.log(data[0].snippet);
   console.log(data);
  return (
    <div className="m-2 p-2 w-[1008px]">
      <h1 className="font-bold text-2xl ">Comments:</h1>
      <CommentList comments={data} />
     
    </div>
  );
};

export default Comments;
