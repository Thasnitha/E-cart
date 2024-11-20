import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cartItems',
    initialState:[],
    reducers:{
        //action-name:reducer=function
        addToCart:(state,actionByComponent)=>{// value from action dispatched component
            const existingProduct=state.find(item=>item.id==actionByComponent.payload.id)//check the cart
            if(existingProduct){
                existingProduct.quantity++
                existingProduct.totalPrice=existingProduct.quantity*existingProduct.price//add quantity and price
                const remainingProduct=state.filter(item=>item.id!=existingProduct.id)
                state=[...remainingProduct,existingProduct]

            }else{
                state.push({...actionByComponent.payload,quantity:1,totalPrice:actionByComponent.payload.price})
            }
        },
        incrementQuantity:(state,actionByCart)=>{
            const existingProduct=state.find(item=>item.id==actionByCart.payload)//check the cart
            existingProduct.quantity++
            existingProduct.totalPrice=existingProduct.quantity*existingProduct.price//add quantity and price
            const remainingProduct=state.filter(item=>item.id!=existingProduct.id)
            state=[...remainingProduct,existingProduct] 







        },
        removeCartItem:(state,actionByCart)=>{

            return state.filter(item=>item.id!=actionByCart.payload)

        },
        DecrementQuantity:(state,actionByCart)=>{
            const existingProduct=state.find(item=>item.id==actionByCart.payload)//check the cart
            existingProduct.quantity--
            existingProduct.totalPrice=existingProduct.quantity*existingProduct.price//add quantity and price
            const remainingProduct=state.filter(item=>item.id!=existingProduct.id)
            state=[...remainingProduct,existingProduct] 







        },
        emptyCart:(state)=>{
            return state=[]

        }


    }
})
export const {addToCart,incrementQuantity,removeCartItem,DecrementQuantity,emptyCart}=cartSlice.actions
export default cartSlice.reducer