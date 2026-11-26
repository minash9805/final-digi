import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMegaMenu = createAsyncThunk(
    "megaMenu/fetchMegaMenu",
    async (arg, thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:3000/megaMenus')
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue({
                type:"server",
                message:error.message
            })
        }
    }
)
const megaMenuSlice=createSlice({
    name:"megaMenu",
    initialState:{
        megaMenu:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchMegaMenu.pending,(state)=>{
            state.loading=true
            state.error=null
        }).addCase(fetchMegaMenu.fulfilled,(state, action)=>{
            state.megaMenu=action.payload
            state.loading=false
        }).addCase(fetchMegaMenu.rejected,(state, action)=>{
            state.loading=false
            state.error=action.payload
        })
    }
})
export const megaMenuReducer=megaMenuSlice.reducer