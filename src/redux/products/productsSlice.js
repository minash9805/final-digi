import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (arg, thunkAPI) => {
        try {
            const response = await axios.get('https://final-digi.onrender.com/products')
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue({
                type:"server",
                message:error.message
            })
        }
    }
)
const productsSlice=createSlice({
    name:"products",
    initialState:{
        products:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading=true
            state.error=null
        }).addCase(fetchProducts.fulfilled,(state, action)=>{
            state.products=action.payload
            state.loading=false
        }).addCase(fetchProducts.rejected,(state, action)=>{
            state.loading=false
            state.error=action.payload
        })
    }
})
export const productsReducer=productsSlice.reducer