import React, { useEffect } from "react";

const commentsData = [
  {
    name: "Anand Kuswaha",
    text: "Lorem ipsum dolor sit amet,consectuor adip",
    replies: [
      {
        name: "Anand Kuswaha",
        text: "Lorem ipsum dolor sit amet,consectuor adip",
        replies: [
          {
            name: "Anand Kuswaha",
            text: "Lorem ipsum dolor sit amet,consectuor adip",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Anand Kuswaha",
    text: "Lorem ipsum dolor sit amet,consectuor adip",
    replies: [
      {
        name: "Anand Kuswaha",
        text: "Lorem ipsum dolor sit amet,consectuor adip",
        replies: [
          {
            name: "Anand Kuswaha",
            text: "Lorem ipsum dolor sit amet,consectuor adip",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Anand Kuswaha",
    text: "Lorem ipsum dolor sit amet,consectuor adip",
    replies: [
      {
        name: "Anand Kuswaha",
        text: "Lorem ipsum dolor sit amet,consectuor adip",
        replies: [
          {
            name: "Anand Kuswaha",
            text: "Lorem ipsum dolor sit amet,consectuor adip",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Anand Kuswaha",
    text: "Lorem ipsum dolor sit amet,consectuor adip",
    replies: [
      {
        name: "Anand Kuswaha",
        text: "Lorem ipsum dolor sit amet,consectuor adip",
        replies: [
          {
            name: "Anand Kuswaha",
            text: "Lorem ipsum dolor sit amet,consectuor adip",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Anand Kuswaha",
    text: "Lorem ipsum dolor sit amet,consectuor adip",
    replies: [
      {
        name: "Anand Kuswaha",
        text: "Lorem ipsum dolor sit amet,consectuor adip",
        replies: [
          {
            name: "Anand Kuswaha",
            text: "Lorem ipsum dolor sit amet,consectuor adip",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Anand Kuswaha",
    text: "Lorem ipsum dolor sit amet,consectuor adip",
    replies: [],
  },
  {
    name: "Anand Kuswaha",
    text: "Lorem ipsum dolor sit amet,consectuor adip",
    replies: [],
  },
  {
    name: "Anand Kuswaha",
    text: "Lorem ipsum dolor sit amet,consectuor adip",
    replies: [],
  },
  {
    name: "Anand Kuswaha",
    text: "Lorem ipsum dolor sit amet,consectuor adip",
    replies: [],
  },
];

const CommentCard = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className=" flex m-1 shadow-lg bg-gray-100  rounded-sm ">
      <img
        className="h-10"
        src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
        alt="profile"
      />
      <div className="">
        <p className="m-1 font-bold"> {name} </p>
        <p className="m-1"> {text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment,index) => 
    <div >
         <CommentCard key={index} data={comment} />
         <div className="pl-5 border border-l-black ml-5 ">
       <CommentList key={index} comments={comment.replies}/>
         </div>
    </div>
  );
};

const Comments = () => {

   
  return (
    <div className="m-2 p-2 w-[1008px]">
      <h1 className="font-bold text-2xl ">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default Comments;
