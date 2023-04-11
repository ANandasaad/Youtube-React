
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
import UseMemo from "./components/UseMemo";
import UseRef from "./components/UseRef";
import WatchLater from "./components/WatchLater/WatchLater";
import Error from './components/ErrorPage/Error';
import SearchError from "./components/ErrorPage/SearchError";

 
const appRouter =createBrowserRouter([{
  path:"/",
  element:  <Body />,
  errorElement:<Error/>,
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
        element:<SearchVideo />,
       
          
     }
     ,{
      path:'/channel',
      element:<Channel/>
     }
     ,{
      path:'/memo',
      element: <><UseMemo/> 
      ,<UseRef/> </>
     },{
      path:'/watchlater',
      element:<WatchLater/>
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
