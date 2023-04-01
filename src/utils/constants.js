import RelatedVideo from "../components/RelatedVideo";

 export const YOUTUBE_API_KEY="AIzaSyBUQ6-FU9qTceF7nygndFJXoH1dmJ0-u4A";
export const YOUTUBE_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+YOUTUBE_API_KEY;
 export const RELATED_VIDEO="https://youtube.googleapis.com/youtube/v3"

export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";


export const LIVE_CHAT_COUNT=40;

export const button = ["All","Gaming","Cars","Money","Computer Science","Music","News","Lo-fi","Movies","Gadgets","Live","History","Javascript"];


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
