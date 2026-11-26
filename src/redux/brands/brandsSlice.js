import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBrands = createAsyncThunk(
    "brands/fetchBrands",
    async (arg, thunkAPI) => {
        try {
            const response = await axios.get('https://final-digi.onrender.com/brands')
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue({
                type:"server",
                message:error.message
            })
        }
    }
)
const brandsSlice=createSlice({
    name:"brands",
    initialState:{
        brands:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchBrands.pending,(state)=>{
            state.loading=true
            state.error=null
        }).addCase(fetchBrands.fulfilled,(state, action)=>{
            state.brands=action.payload
            state.loading=false
        }).addCase(fetchBrands.rejected,(state, action)=>{
            state.loading=false
            state.error=action.payload
        })
    }
})
export const brandsReducer=brandsSlice.reducer