import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



//action return promise 
export const fetchproducts=createAsyncThunk("products/fetchproducts",async()=>{
    const result =await axios.get("https://dummyjson.com/products")
    // console.log(result.data.products);
    sessionStorage.setItem("allProducts",JSON.stringify(result.data.products))
    return result.data.products
    
})

const productSlice=createSlice({
    name:'products',
    initialState:{
        allProducts:[],
        dummyProducts:[],
        loading:false,
        errorMsg:""

    },
    reducers:{
        searchProduct:(state,actionByHeader)=>{
            state.allProducts=state.dummyProducts.filter(item=>item.title.toLowerCase().includes(actionByHeader.payload))
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchproducts.fulfilled,(state,apiResult)=>{
            state.allProducts=apiResult.payload
            state.dummyProducts=apiResult.payload
            state.loading=false
            state.errorMsg=""
        })
            builder.addCase(fetchproducts.pending,(state,)=>{
                state.allProducts=[]
                state.dummyProducts=[]
                state.loading=true
                state.errorMsg=""
            })
            builder.addCase(fetchproducts.rejected,(state,)=>{
                state.allProducts=[]
                state.dummyProducts=[]

                state.loading=false
                state.errorMsg="api call failed"
            })
    }

})
export const {searchProduct}=productSlice.actions
export default productSlice.reducer