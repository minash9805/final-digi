import {createSlice} from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cartProducts:JSON.parse(localStorage.getItem("cartProducts")) || []
    },
    reducers:{
      add:(state,action)=>{
          state.cartProducts.push(action.payload)
      },
        increase:(state,action)=>{
          state.cartProducts=state.cartProducts.map(item=>{
              if (item.id===action.payload && item.stock>0){
                  return {...item,quantity:item.quantity+1,stock:item.stock-1}
              }
              return item
          })
        },
        decrease:(state,action)=>{
            state.cartProducts=state.cartProducts.map(item=>{
                if (item.id===action.payload){
                    return {...item,quantity:item.quantity-1,stock:item.stock+1}
                }
                return item
            })
        },
        remove:(state,action)=>{
          state.cartProducts=state.cartProducts.filter(item=>{
              return item.id!==action.payload
          })
        }
    }
})
export const {add,increase,decrease,remove}=cartSlice.actions
export const cartReducer=cartSlice.reducer