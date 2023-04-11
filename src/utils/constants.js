import RelatedVideo from "../components/RelatedVideo";

 export const YOUTUBE_API_KEY="AIzaSyDiowkEuvldhq8nqjXRD29HxJ4gv9gV75I";
export const YOUTUBE_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+YOUTUBE_API_KEY;

 export const RELATED_VIDEO="https://youtube.googleapis.com/youtube/v3"

export const YOUTUBE_SEARCH_API="https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";


export const LIVE_CHAT_COUNT=40;




export const COMMENT_API="https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key="+YOUTUBE_API_KEY+"&maxResults=25&videoId=";

export const VIDEO_LIST="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&key="+YOUTUBE_API_KEY+"&q=";

export const SUSCRIBE_DATA_API="https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key="+YOUTUBE_API_KEY;

export const CHANNEL_API="https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key="+YOUTUBE_API_KEY+"&id=";


export const buttons=[
{
  name:'Gaming',
  videoCategoryId: "20",
},
{
  name:'Cars',
  videoCategoryId: "2",
},
{
  name:'Film & Animation',
  videoCategoryId: "1",
},
{
  name:'People & Blogs',
  videoCategoryId: "22",
},
{
  name:'Sports',
  videoCategoryId: "17",
},
{
  name:'News',
  videoCategoryId: "25",
},
{
  name:'Entertainment',
  videoCategoryId: "24",
},
{
  name:'Howto & Style',
  videoCategoryId: "26",
},
{
  name:'Comedy',
  videoCategoryId: "23",
},
{
  name:'Pets & Animals',
  videoCategoryId: "15",
},
{
  name:'Science',
  videoCategoryId: "28",
},
]




