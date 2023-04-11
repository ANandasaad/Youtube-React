const { createSlice } = require("@reduxjs/toolkit");

let category="Home"
const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        videoCategory:"1",
        selectCategory:category,
        isMobileMenuOpen:true
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
        },
        toggleMobileMenu:(state)=>{
            state.isMobileMenuOpen=!state.isMobileMenuOpen;
        },
        closeMobileMenu:(state)=>{
            state.isMobileMenuOpen=false;
        }

    }
})

export const {toggleMenu,closeMenu,setvideoCategory,setCategory,toggleMobileMenu,closeMobileMenu}=appSlice.actions;
export default appSlice.reducer;