import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
    "categories/fetchCategories",
    async (arg, thunkAPI) => {
        try {
            const response = await axios.get('https://final-digi.onrender.com/categories')
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue({
                type:"server",
                message:error.message
            })
        }
    }
)
const categoriesSlice=createSlice({
    name:"categories",
    initialState:{
        categories:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchCategories.pending,(state)=>{
            state.loading=true
            state.error=null
        }).addCase(fetchCategories.fulfilled,(state, action)=>{
            state.categories=action.payload
            state.loading=false
        }).addCase(fetchCategories.rejected,(state, action)=>{
            state.loading=false
            state.error=action.payload
        })
    }
})
export const categoriesReducer=categoriesSlice.reducer