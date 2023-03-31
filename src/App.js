
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

import WatchPage from "./components/WatchPage";
import SearchVideo from "./components/SearchVideo";

import store from "./utils/store";
import SubscriptionData from "./components/ChannelDetails/Channel";
import Channel from "./components/ChannelDetails/Channel";

 
const appRouter =createBrowserRouter([{
  path:"/",
  element:  <Body />,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    }
    ,{
      path:"/watch",
      element: <WatchPage/> ,
    },
     { path:"/search",
        element:<SearchVideo />
          
     }
     ,{
      path:'/channel',
      element:<Channel/>
     }
  ]
  
}])
function App() {
  return (

    <Provider store={store}>
      <div className="App">
         
         <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
