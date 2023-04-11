import { createSlice } from "@reduxjs/toolkit";


const watchSlice=createSlice({

    name:"watch",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        }

    }

})

export const{addItem,removeItem}=watchSlice.actions;
export default watchSlice.reducer;