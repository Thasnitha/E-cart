
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
// import Wishlistslice from "./slices/Wishlistslice";
import Wishlistslice from './slices/wishListSlice'
import cartSlice from'./slices/CartSlice'

const cartStore = configureStore({
    reducer:{
        productReducer:productSlice,
        wishlistReducer:Wishlistslice,
        cartReducer:cartSlice

    }
})
export default cartStore