import RelatedVideo from "../components/RelatedVideo";

 export const YOUTUBE_API_KEY="AIzaSyBUQ6-FU9qTceF7nygndFJXoH1dmJ0-u4A";
export const YOUTUBE_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+YOUTUBE_API_KEY;

 export const RELATED_VIDEO="https://youtube.googleapis.com/youtube/v3"

export const YOUTUBE_SEARCH_API="https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";


export const LIVE_CHAT_COUNT=40;



export const commentsData = [
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

export const COMMENT_API="https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key="+YOUTUBE_API_KEY+"&maxResults=25&videoId=";

export const VIDEO_LIST="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&key="+YOUTUBE_API_KEY+"&q=";

export const SUSCRIBE_DATA_API="https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key="+YOUTUBE_API_KEY;

export const CHANNEL_API="https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key="+YOUTUBE_API_KEY+"&id=";


export const buttons=[
{
  name:'Gaming',
  videoCategoryId: "1",
},
{
  name:'Cars',
  videoCategoryId: "2",
},
{
  name:'Money',
  videoCategoryId: "3",
},
{
  name:'Computer Science',
  videoCategoryId: "4",
},
{
  name:'Music',
  videoCategoryId: "5",
},
{
  name:'News',
  videoCategoryId: "6",
},
{
  name:'Lo-fi',
  videoCategoryId: "7",
},
{
  name:'Movies',
  videoCategoryId: "8",
},
{
  name:'Gadgets',
  videoCategoryId: "9",
},
{
  name:'Live',
  videoCategoryId: "10",
},
{
  name:'Chill',
  videoCategoryId: "11",
},
{
  name:'History',
  videoCategoryId: "12",
},
{
  name:'Javascript',
  videoCategoryId: "13",
},
]