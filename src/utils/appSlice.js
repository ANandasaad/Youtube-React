const { createSlice } = require("@reduxjs/toolkit");

let category="Home"
const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        videoCategory:"1",
        selectCategory:category,
    },
    reducers:{
        toggleMenu:(state)=>{
             state.isMenuOpen=!state.isMenuOpen;
        },
        closeMenu:(state)=>{
             state.isMenuOpen=false;
        },
        setvideoCategory:(state,action)=>{
            state.videoCategory=action.payload;
        },
        setCategory:(state,action)=>{
            state.selectCategory=action.payload;
        }

    }
})

export const {toggleMenu,closeMenu,setvideoCategory,setCategory}=appSlice.actions;
export default appSlice.reducer;