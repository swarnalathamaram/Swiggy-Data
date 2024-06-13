import { createSlice,configureStore } from "@reduxjs/toolkit";

let initialData = {
    cartCount:0,
    cartData:[]
}
let cartSlice = createSlice({
    name:'cart',
    initialState:initialData,
    reducers:{
        increaseCount:(state,action)=>{
            state.cartCount += 1
          },
        addItem:(state,action) =>{
           state.cartData.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.cartData = state.cartData.filter(function(ele){
                return ele.card.info.id !== action.payload
            })
            state.cartCount-=1
        }
        
       }
})
console.log(cartSlice)
export let store = configureStore({
    reducer:{
        cart:cartSlice.reducer
    }
})


export let {addItem,removeItem,increaseCount} = cartSlice.actions
