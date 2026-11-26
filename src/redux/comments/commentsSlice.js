import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchComments = createAsyncThunk(
    "comments/fetchComments",
    async (arg, thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:3000/comments')
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue({
                type:"server",
                message:error.message
            })
        }
    }
)
const commentsSlice=createSlice({
    name:"comments",
    initialState:{
        comments:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchComments.pending,(state)=>{
            state.loading=true
            state.error=null
        }).addCase(fetchComments.fulfilled,(state, action)=>{
            state.comments=action.payload
            state.loading=false
        }).addCase(fetchComments.rejected,(state, action)=>{
            state.loading=false
            state.error=action.payload
        })
    }
})
export const commentsReducer=commentsSlice.reducer