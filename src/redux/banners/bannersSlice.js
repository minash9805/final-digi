import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBanners = createAsyncThunk(
    "banners/fetchBanners",
    async (arg, thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:3000/banners')
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue({
                type: "server",
                message: error.message
            })
        }
    }
)
const bannersSlice = createSlice({
    name: "banners",
    initialState: {
        hero: [],
        promo: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBanners.pending, (state) => {
            state.loading = true
            state.error = null
        }).addCase(fetchBanners.fulfilled, (state, action) => {
            state.hero = action.payload.hero
            state.promo = action.payload.promo
            state.loading = false
        }).addCase(fetchBanners.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})
export const bannersReducer = bannersSlice.reducer