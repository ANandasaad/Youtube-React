import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";
import searchSlice from "./searchSlice";
import watchSlice from "./watchSlice";


const store=configureStore({
      reducer:{
        app:appSlice,
        search:searchSlice,
        chat:chatSlice,
        watch:watchSlice

      },
});

export default store;