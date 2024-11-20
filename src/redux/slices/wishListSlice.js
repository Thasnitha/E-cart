
import { createSlice } from "@reduxjs/toolkit";

const wishlistslice=createSlice({
    name:'wishlists',
    initialState:[],
    reducers:{
        addToWishlist:(state,actionFromView)=>{ //action-name : reducer function
            state.push(actionFromView.payload)
        },
        removeItem:(state,actionFromWishlist)=>{
           return state.filter(item=>item.id!=actionFromWishlist.payload)
        }
    }

})
export const {addToWishlist,removeItem}=wishlistslice.actions //action export into view component
export default wishlistslice.reducer //reducer export reducer